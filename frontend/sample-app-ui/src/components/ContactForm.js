import React, { useState } from 'react';
import '../styles/ContactForm.scss';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Thank you ${form.name}, we'll contact you soon!`);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} id="contact">
      <h2>Contact Us</h2>
      <input name="name" type="text" placeholder="Your Name" value={form.name} onChange={handleChange} required />
      <input name="email" type="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
      <textarea name="message" rows="4" placeholder="Message" value={form.message} onChange={handleChange} required />
      <button type="submit">Send Message</button>
    </form>
  );
};

export default ContactForm;
