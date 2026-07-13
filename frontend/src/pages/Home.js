import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import './Pages.css';

function Home() {
  const services = [
    {
      id: 1,
      title: 'Structural Welding',
      description: 'Heavy-duty structural welding for buildings and infrastructure',
      icon: '🏗️'
    },
    {
      id: 2,
      title: 'Custom Fabrication',
      description: 'Bespoke metal fabrication tailored to your specifications',
      icon: '🔨'
    },
    {
      id: 3,
      title: 'Stainless Steel',
      description: 'Precision stainless steel welding for food and medical industries',
      icon: '⚡'
    },
    {
      id: 4,
      title: 'Aluminum Welding',
      description: 'Specialized aluminum welding for aerospace and automotive',
      icon: '✈️'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'John Smith',
      company: 'ABC Manufacturing',
      text: 'Excellent workmanship and attention to detail. They delivered on time and within budget.',
      rating: 5
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      company: 'Tech Solutions Inc',
      text: 'Professional team with years of experience. Highly recommend their services!',
      rating: 5
    },
    {
      id: 3,
      name: 'Mike Davis',
      company: 'Industrial Works',
      text: 'Top-quality fabrication work. They handle complex projects with precision.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Welding & Fabrication - Professional Metal Services</title>
        <meta name="description" content="Expert welding and fabrication services. Structural welding, custom fabrication, stainless steel, and aluminum welding." />
      </Helmet>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Professional Welding & Fabrication Services</h1>
          <p>Quality craftsmanship for all your metal fabrication needs</p>
          <div className="hero-buttons">
            <Link to="/quotation" className="btn btn-primary">
              Get Started <FiArrowRight style={{ marginLeft: '8px' }} />
            </Link>
            <Link to="/portfolio" className="btn btn-secondary">
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">We offer a wide range of professional welding and fabrication services</p>
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to="/services" className="learn-more">
                Learn More <FiArrowRight />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section section-alt">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature">
            <FiCheck className="feature-icon" />
            <h3>20+ Years Experience</h3>
            <p>Decades of proven expertise in welding and fabrication</p>
          </div>
          <div className="feature">
            <FiCheck className="feature-icon" />
            <h3>Quality Guarantee</h3>
            <p>We stand behind our work with comprehensive warranties</p>
          </div>
          <div className="feature">
            <FiCheck className="feature-icon" />
            <h3>Certified Professionals</h3>
            <p>Our team holds industry certifications and standards</p>
          </div>
          <div className="feature">
            <FiCheck className="feature-icon" />
            <h3>On-Time Delivery</h3>
            <p>We meet deadlines without compromising on quality</p>
          </div>
          <div className="feature">
            <FiCheck className="feature-icon" />
            <h3>Competitive Pricing</h3>
            <p>Best value for money in the industry</p>
          </div>
          <div className="feature">
            <FiCheck className="feature-icon" />
            <h3>Custom Solutions</h3>
            <p>Tailored services to meet your unique needs</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="stars">{'⭐'.repeat(testimonial.rating)}</div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <p className="testimonial-author">{testimonial.name}</p>
              <p className="testimonial-company">{testimonial.company}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-cta">
        <h2>Ready to Start Your Project?</h2>
        <p>Get a free quote today and let us bring your vision to life</p>
        <div className="cta-buttons">
          <Link to="/quotation" className="btn btn-primary btn-lg">
            Request a Quote
          </Link>
          <Link to="/contact" className="btn btn-secondary btn-lg">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
