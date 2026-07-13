import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('projects');

  const projects = [
    { id: 1, title: 'Industrial Gate', status: 'Completed', date: '2024-01-10' },
    { id: 2, title: 'Structural Beams', status: 'In Progress', date: '2024-01-15' },
    { id: 3, title: 'Custom Railing', status: 'Pending', date: '2024-01-20' }
  ];

  const quotes = [
    { id: 1, client: 'ABC Corp', service: 'Structural Welding', budget: '$15,000', status: 'New' },
    { id: 2, client: 'XYZ Inc', service: 'Custom Fabrication', budget: '$8,500', status: 'Reviewed' },
    { id: 3, client: 'Tech Solutions', service: 'Aluminum Welding', budget: '$22,000', status: 'Approved' }
  ];

  const messages = [
    { id: 1, name: 'John Doe', email: 'john@example.com', subject: 'Project Inquiry', date: '2024-01-18' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', subject: 'Quotation Request', date: '2024-01-17' },
    { id: 3, name: 'Bob Wilson', email: 'bob@example.com', subject: 'Service Question', date: '2024-01-16' }
  ];

  return (
    <>
      <Helmet>
        <title>Admin Dashboard - Welding & Fabrication</title>
      </Helmet>

      <section className="hero">
        <div className="hero-content">
          <h1>Admin Dashboard</h1>
          <p>Manage projects, quotes, and customer inquiries</p>
        </div>
      </section>

      <div className="dashboard">
        <div className="dashboard-header">
          <h2>Dashboard</h2>
          <button className="btn btn-primary" style={{ cursor: 'pointer' }}>Add New</button>
        </div>

        <div className="dashboard-nav">
          <button
            className={`nav-tab ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            Projects
          </button>
          <button
            className={`nav-tab ${activeTab === 'quotes' ? 'active' : ''}`}
            onClick={() => setActiveTab('quotes')}
          >
            Quotations
          </button>
          <button
            className={`nav-tab ${activeTab === 'messages' ? 'active' : ''}`}
            onClick={() => setActiveTab('messages')}
          >
            Messages
          </button>
        </div>

        {activeTab === 'projects' && (
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Project Title</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {projects.map(project => (
                  <tr key={project.id}>
                    <td>{project.title}</td>
                    <td><span style={{ padding: '4px 8px', borderRadius: '4px', backgroundColor: project.status === 'Completed' ? '#dcfce7' : project.status === 'In Progress' ? '#fef3c7' : '#fee2e2', color: project.status === 'Completed' ? '#16a34a' : project.status === 'In Progress' ? '#b45309' : '#dc2626' }}>{project.status}</span></td>
                    <td>{project.date}</td>
                    <td>
                      <div className="action-buttons">
                        <button className="action-btn edit-btn">Edit</button>
                        <button className="action-btn delete-btn">Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'quotes' && (
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Client</th>
                  <th>Service</th>
                  <th>Budget</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {quotes.map(quote => (
                  <tr key={quote.id}>
                    <td>{quote.client}</td>
                    <td>{quote.service}</td>
                    <td>{quote.budget}</td>
                    <td><span style={{ padding: '4px 8px', borderRadius: '4px', backgroundColor: quote.status === 'New' ? '#dbeafe' : quote.status === 'Reviewed' ? '#fef3c7' : '#dcfce7', color: quote.status === 'New' ? '#0284c7' : quote.status === 'Reviewed' ? '#b45309' : '#16a34a' }}>{quote.status}</span></td>
                    <td>
                      <div className="action-buttons">
                        <button className="action-btn edit-btn">Review</button>
                        <button className="action-btn delete-btn">Decline</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'messages' && (
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Subject</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {messages.map(message => (
                  <tr key={message.id}>
                    <td>{message.name}</td>
                    <td>{message.email}</td>
                    <td>{message.subject}</td>
                    <td>{message.date}</td>
                    <td>
                      <div className="action-buttons">
                        <button className="action-btn edit-btn">Reply</button>
                        <button className="action-btn delete-btn">Archive</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}

export default AdminDashboard;
