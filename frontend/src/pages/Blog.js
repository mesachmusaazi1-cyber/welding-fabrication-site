import React from 'react';
import { Helmet } from 'react-helmet';

function Blog() {
  const posts = [
    {
      id: 1,
      title: 'The Benefits of Structural Welding',
      date: '2024-01-15',
      excerpt: 'Learn about the advantages of structural welding in modern construction...',
      image: '📰'
    },
    {
      id: 2,
      title: 'Aluminum Welding Best Practices',
      date: '2024-01-10',
      excerpt: 'Expert tips on welding aluminum for aerospace and automotive applications...',
      image: '📋'
    },
    {
      id: 3,
      title: 'Custom Fabrication: Design to Reality',
      date: '2024-01-05',
      excerpt: 'How we turn your design concepts into high-quality fabricated products...',
      image: '📝'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Blog - Welding & Fabrication</title>
        <meta name="description" content="Latest articles and insights about welding and fabrication" />
      </Helmet>

      <section className="hero">
        <div className="hero-content">
          <h1>Blog & News</h1>
          <p>Industry insights and welding tips</p>
        </div>
      </section>

      <section className="section">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
            {posts.map(post => (
              <article key={post.id} style={{
                background: 'white',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{
                  height: '200px',
                  backgroundColor: '#e5e7eb',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '3rem'
                }}>
                  {post.image}
                </div>
                <div style={{ padding: '20px' }}>
                  <p style={{ color: '#6b7280', fontSize: '0.9rem', marginBottom: '10px' }}>
                    {new Date(post.date).toLocaleDateString()}
                  </p>
                  <h3 style={{ marginBottom: '10px' }}>{post.title}</h3>
                  <p style={{ color: '#6b7280', lineHeight: '1.6' }}>{post.excerpt}</p>
                  <a href="#" style={{ color: '#dc2626', fontWeight: '600', textDecoration: 'none' }}>
                    Read More →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
