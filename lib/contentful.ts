import { createClient } from 'contentful';

const spaceId = process.env.CONTENTFUL_SPACE_ID || '';
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN || '';

// Only create client if credentials are provided
const client = spaceId && accessToken
  ? createClient({
      space: spaceId,
      accessToken: accessToken,
    })
  : null;

export interface Event {
  title: string;
  date: string;
  endTime?: string;
  description?: string;
  address?: string;
  ticketLink?: string;
  image?: {
    url: string;
    title?: string;
  };
}

export async function getEvents(): Promise<Event[]> {
  if (!client) {
    console.warn('Contentful is not configured. Events will not be loaded.');
    return [];
  }

  try {
    const response = await client.getEntries({
      content_type: 'event',
      order: ['fields.date'],
      'fields.published': true,
    });

    return response.items.map((item: { fields: Record<string, unknown> }) => {
      const fields = item.fields as {
        title: string;
        date: string;
        endTime?: string;
        description?: string;
        address?: string;
        ticketLink?: string;
        image?: {
          fields: {
            file: { url: string };
            title?: string;
          };
        };
      };

      return {
        title: fields.title,
        date: fields.date,
        endTime: fields.endTime,
        description: fields.description,
        address: fields.address,
        ticketLink: fields.ticketLink,
        image: fields.image
          ? {
              url: `https:${fields.image.fields.file.url}`,
              title: fields.image.fields.title,
            }
          : undefined,
      };
    });
  } catch (error) {
    console.error('Error fetching events:', error);
    return [];
  }
}

export default client;

