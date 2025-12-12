import emailjs from '@emailjs/browser';

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  eventDate?: string;
  eventType?: string;
  message: string;
}

export async function sendEmail(data: ContactFormData): Promise<boolean> {
  try {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';

    if (!publicKey || !serviceId || !templateId) {
      console.error('EmailJS configuration is missing');
      return false;
    }

    // Initialize EmailJS
    emailjs.init(publicKey);

    const templateParams = {
      to_email: 'thedeetzes@hotmail.com',
      from_name: data.name,
      from_email: data.email,
      phone: data.phone || 'Not provided',
      event_date: data.eventDate || 'Not specified',
      event_type: data.eventType || 'Not specified',
      message: data.message,
    };

    const result = await emailjs.send(serviceId, templateId, templateParams);

    return result.status === 200;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}

