import React from 'react';
import { Helmet } from 'react-helmet';

function Services() {
  const services = [
    {
      id: 1,
      title: 'Structural Welding',
      description: 'Heavy-duty structural welding for buildings, bridges, and infrastructure projects',
      capabilities: ['Steel beams', 'Columns', 'Plates', 'Custom structures']
    },
    {
      id: 2,
      title: 'Custom Fabrication',
      description: 'Bespoke metal fabrication tailored to your exact specifications',
      capabilities: ['Gates', 'Railings', 'Tanks', 'Custom designs']
    },
    {
      id: 3,
      title: 'Stainless Steel',
      description: 'Precision stainless steel welding for food, medical, and chemical industries',
      capabilities: ['Sanitary piping', 'Equipment', 'Vessels', 'Food-grade systems']
    },
    {
      id: 4,
      title: 'Aluminum Welding',
      description: 'Specialized aluminum welding for aerospace and automotive applications',
      capabilities: ['Aircraft parts', 'Automotive components', 'Marine structures', 'Industrial equipment']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Welding & Fabrication</title>
        <meta name="description" content="Our professional welding and fabrication services" />
      </Helmet>

      <section className="hero">
        <div className="hero-content">
          <h1>Our Services</h1>
          <p>Comprehensive welding and fabrication solutions for all industries</p>
        </div>
      </section>

      <section className="section">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {services.map((service, index) => (
            <div key={service.id} className="service-detail" style={{
              display: 'flex',
              gap: '40px',
              marginBottom: '60px',
              flexDirection: index % 2 === 1 ? 'row-reverse' : 'row',
              alignItems: 'center'
            }}>
              <div style={{ flex: 1 }}>
                <div style={{
                  width: '100%',
                  height: '300px',
                  backgroundColor: '#e5e7eb',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '3rem'
                }}>
                  {['🏗️', '🔨', '⚡', '✈️'][service.id - 1]}
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>{service.title}</h2>
                <p style={{ fontSize: '1.1rem', color: '#6b7280', marginBottom: '20px', lineHeight: '1.8' }}>
                  {service.description}
                </p>
                <h3 style={{ marginBottom: '15px', fontSize: '1.1rem' }}>Capabilities:</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {service.capabilities.map((cap, i) => (
                    <li key={i} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                      <span style={{ marginRight: '10px', color: '#dc2626', fontWeight: 'bold' }}>✓</span>
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Services;
