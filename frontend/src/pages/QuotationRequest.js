import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';

function QuotationRequest() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    description: '',
    budget: '',
    timeline: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Quote request submitted:', formData);
    toast.success('Quote request submitted! We will contact you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', company: '', serviceType: '', description: '', budget: '', timeline: '' });
  };

  return (
    <>
      <Helmet>
        <title>Request a Quote - Welding & Fabrication</title>
        <meta name="description" content="Request a quotation for your welding and fabrication project" />
      </Helmet>

      <section className="hero">
        <div className="hero-content">
          <h1>Request a Quotation</h1>
          <p>Get a free, no-obligation quote for your project</p>
        </div>
      </section>

      <section className="section">
        <form onSubmit={handleSubmit} className="contact-form" style={{ maxWidth: '700px' }}>
          <h2 style={{ marginBottom: '30px', textAlign: 'center' }}>Project Details</h2>

          <div className="form-group">
            <label>Full Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Service Type *</label>
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              required
            >
              <option value="">Select a service</option>
              <option value="structural">Structural Welding</option>
              <option value="fabrication">Custom Fabrication</option>
              <option value="stainless">Stainless Steel</option>
              <option value="aluminum">Aluminum Welding</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Project Description *</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe your project in detail..."
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label>Budget Range</label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
            >
              <option value="">Select budget range</option>
              <option value="under-5k">Under $5,000</option>
              <option value="5k-10k">$5,000 - $10,000</option>
              <option value="10k-25k">$10,000 - $25,000</option>
              <option value="25k-50k">$25,000 - $50,000</option>
              <option value="50k-plus">$50,000+</option>
            </select>
          </div>

          <div className="form-group">
            <label>Timeline</label>
            <select
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
            >
              <option value="">Select timeline</option>
              <option value="asap">ASAP</option>
              <option value="1-month">Within 1 month</option>
              <option value="1-3-months">1-3 months</option>
              <option value="3-6-months">3-6 months</option>
              <option value="flexible">Flexible</option>
            </select>
          </div>

          <button type="submit" className="form-submit">Submit Quote Request</button>
        </form>
      </section>
    </>
  );
}

export default QuotationRequest;
