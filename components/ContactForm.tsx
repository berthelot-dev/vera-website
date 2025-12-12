'use client';

import { useState } from 'react';
import { sendEmail, ContactFormData } from '@/lib/emailjs';
import { Mail, Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const success = await sendEmail(formData);

    if (success) {
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventDate: '',
        eventType: '',
        message: '',
      });
    } else {
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF1493] focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF1493] focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-black mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF1493] focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="eventDate" className="block text-sm font-medium text-black mb-2">
            Event Date
          </label>
          <input
            type="date"
            id="eventDate"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF1493] focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="eventType" className="block text-sm font-medium text-black mb-2">
            Event Type / Venue
          </label>
          <input
            type="text"
            id="eventType"
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            placeholder="e.g., Birthday party, Corporate event, etc."
            className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF1493] focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF1493] focus:border-transparent resize-none"
          />
        </div>

        {submitStatus === 'success' && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
            Thank you! Your message has been sent. Vera will get back to you soon.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
            There was an error sending your message. Please try again or contact directly at thedeetzes@hotmail.com
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto px-8 py-3 bg-black text-white hover:bg-[#FF1493] transition-colors rounded-full font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Mail size={18} />
              Sending...
            </>
          ) : (
            <>
              <Send size={18} />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
}

