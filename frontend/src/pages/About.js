import React from 'react';
import { Helmet } from 'react-helmet';

function About() {
  return (
    <>
      <Helmet>
        <title>About Us - Welding & Fabrication</title>
        <meta name="description" content="Learn about our welding and fabrication company" />
      </Helmet>

      <section className="hero">
        <div className="hero-content">
          <h1>About Us</h1>
          <p>Leading provider of welding and fabrication services</p>
        </div>
      </section>

      <section className="section">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <div style={{
                width: '100%',
                height: '300px',
                backgroundColor: '#e5e7eb',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '4rem'
              }}>
                🏭
              </div>
            </div>
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Our Story</h2>
              <p style={{ marginBottom: '15px', lineHeight: '1.8' }}>
                Founded in 2003, our company has been a leader in the welding and fabrication industry for over 20 years. We started as a small operation with a vision to provide top-quality welding services to our community.
              </p>
              <p style={{ marginBottom: '15px', lineHeight: '1.8' }}>
                Today, we've grown to become a trusted partner for businesses across multiple industries. Our team of certified professionals brings expertise, dedication, and quality craftsmanship to every project.
              </p>
              <p style={{ lineHeight: '1.8' }}>
                We're committed to innovation, continuous improvement, and exceeding our clients' expectations on every job.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className="section-title">Our Team</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
            {[
              { name: 'John Smith', role: 'CEO & Founder', icon: '👨‍💼' },
              { name: 'Sarah Johnson', role: 'Lead Welder', icon: '👩‍🔧' },
              { name: 'Mike Davis', role: 'Fabrication Specialist', icon: '👨‍🏭' },
              { name: 'Emily Wilson', role: 'Quality Inspector', icon: '👩‍💼' }
            ].map((member, idx) => (
              <div key={idx} style={{
                textAlign: 'center',
                padding: '30px',
                background: 'white',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>{member.icon}</div>
                <h3>{member.name}</h3>
                <p style={{ color: '#6b7280' }}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className="section-title">Our Certifications</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {['AWS D1.1', 'AISC Certified', 'ISO 9001', 'OSHA Certified'].map((cert, idx) => (
              <div key={idx} style={{
                padding: '20px',
                border: '2px solid #dc2626',
                borderRadius: '8px',
                textAlign: 'center',
                fontWeight: '600',
                color: '#dc2626'
              }}>
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
