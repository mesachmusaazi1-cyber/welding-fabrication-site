const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();
require('express-async-errors');

const app = express();

// Security Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/welding-fabrication')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'API is running' });
});

// Projects Routes
app.get('/api/projects', (req, res) => {
  res.json({ message: 'Get all projects' });
});

app.post('/api/projects', (req, res) => {
  res.json({ message: 'Create project' });
});

// Services Routes
app.get('/api/services', (req, res) => {
  res.json({ message: 'Get all services' });
});

// Contact Routes
app.post('/api/contact', (req, res) => {
  res.json({ message: 'Contact message received' });
});

// Quotation Routes
app.post('/api/quotes', (req, res) => {
  res.json({ message: 'Quote request received' });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
