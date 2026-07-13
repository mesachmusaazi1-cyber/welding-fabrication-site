import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    toast.success('Message sent successfully! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Welding & Fabrication</title>
        <meta name="description" content="Get in touch with our welding and fabrication team" />
      </Helmet>

      <section className="hero">
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p>Get in touch with our team for any inquiries</p>
        </div>
      </section>

      <section className="section">
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          <div>
            <h2 style={{ marginBottom: '20px' }}>Contact Information</h2>
            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ marginBottom: '8px' }}>📧 Email</h3>
              <p>info@weldingfab.com</p>
            </div>
            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ marginBottom: '8px' }}>📞 Phone</h3>
              <p>(555) 123-4567</p>
            </div>
            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ marginBottom: '8px' }}>📍 Address</h3>
              <p>123 Industrial Ave<br/>Tech City, TC 12345</p>
            </div>
            <div>
              <h3 style={{ marginBottom: '8px' }}>🕒 Hours</h3>
              <p>Mon-Fri: 8:00 AM - 5:00 PM<br/>Sat: 9:00 AM - 2:00 PM<br/>Sun: Closed</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="form-submit">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
