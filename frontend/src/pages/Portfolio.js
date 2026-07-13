import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

function Portfolio() {
  const [filter, setFilter] = useState('all');

  const projects = [
    { id: 1, title: 'Industrial Gate', category: 'fabrication', image: '🏭' },
    { id: 2, title: 'Structural Beams', category: 'structural', image: '🏗️' },
    { id: 3, title: 'Stainless Piping', category: 'stainless', image: '⚙️' },
    { id: 4, title: 'Custom Railing', category: 'fabrication', image: '🎨' },
    { id: 5, title: 'Bridge Support', category: 'structural', image: '🌉' },
    { id: 6, title: 'Aluminum Frame', category: 'aluminum', image: '✈️' }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <>
      <Helmet>
        <title>Portfolio - Welding & Fabrication</title>
        <meta name="description" content="View our welding and fabrication projects" />
      </Helmet>

      <section className="hero">
        <div className="hero-content">
          <h1>Our Portfolio</h1>
          <p>Showcase of our completed projects and expertise</p>
        </div>
      </section>

      <section className="section">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '40px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setFilter('all')}
              className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ cursor: 'pointer' }}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('structural')}
              className={`btn ${filter === 'structural' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ cursor: 'pointer' }}
            >
              Structural
            </button>
            <button
              onClick={() => setFilter('fabrication')}
              className={`btn ${filter === 'fabrication' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ cursor: 'pointer' }}
            >
              Fabrication
            </button>
            <button
              onClick={() => setFilter('stainless')}
              className={`btn ${filter === 'stainless' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ cursor: 'pointer' }}
            >
              Stainless Steel
            </button>
            <button
              onClick={() => setFilter('aluminum')}
              className={`btn ${filter === 'aluminum' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ cursor: 'pointer' }}
            >
              Aluminum
            </button>
          </div>

          <div className="portfolio-grid">
            {filteredProjects.map(project => (
              <div key={project.id} className="portfolio-item">
                <div style={{
                  width: '100%',
                  height: '250px',
                  backgroundColor: '#e5e7eb',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '3rem'
                }}>
                  {project.image}
                </div>
                <div className="portfolio-overlay">
                  <div className="portfolio-title">{project.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
