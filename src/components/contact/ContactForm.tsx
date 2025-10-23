"use client";

import { useState, ChangeEvent, FormEvent } from 'react';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    
    e.preventDefault();    
    setStatus('loading');

    try {
      
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

    } catch (error) {
      console.error('Failed to send message:', error);
      setStatus('error');
    } finally {
      
      setTimeout(() => {
        if (status === 'success' || status === 'error') {
          setStatus('idle');
        }
      }, 3000);
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      {/* Name field */}
      <div>
        <label
          htmlFor="name"
          className="block font-sans font-semibold mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full px-4 py-3 rounded-md bg-secondary focus:outline-none focus:ring-2 focus:ring-primary"
          required
          value={formData.name}
          onChange={handleChange}
          disabled={status === 'loading'} 
        />
      </div>

      {/* Email field */}
      <div>
        <label
          htmlFor="email"
          className="block font-sans font-semibold mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-3 rounded-md bg-secondary focus:outline-none focus:ring-2 focus:ring-primary"
          required
          value={formData.email}
          onChange={handleChange}
          disabled={status === 'loading'} 
        />
      </div>

      {/* Message field */}
      <div>
        <label
          htmlFor="message"
          className="block font-sans font-semibold mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full px-4 py-3 rounded-md bg-secondary focus:outline-none focus:ring-2 focus:ring-primary"
          required
          value={formData.message}
          onChange={handleChange}
          disabled={status === 'loading'} 
        />
      </div>

      {/* Submit button */}
      <div>
        <button
          type="submit"
          className="w-full bg-primary text-white font-bold py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors disabled:bg-gray-400"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </button>
      </div>

      {/* Show status messages */}
      <div className="text-center mt-2 h-6"> 
        {status === 'success' && (
          <p className="font-sans text-green-600">
            Message sent successfully!
          </p>
        )}
        {status === 'error' && (
          <p className="font-sans text-red-600">
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </form>
  );
};

export default ContactForm;