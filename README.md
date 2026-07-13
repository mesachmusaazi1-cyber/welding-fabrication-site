# Welding & Fabrication Website

A professional, full-featured website for welding and fabrication services.

## Features

✅ **Portfolio Gallery** - Showcase past projects with high-quality images
✅ **Service Descriptions** - Detailed information about services offered
✅ **Contact Form** - Easy customer inquiries
✅ **Online Quotation System** - Request quotes directly
✅ **Testimonials** - Display customer reviews and feedback
✅ **Blog/News** - Share industry insights and updates
✅ **E-commerce** - Sell fabricated products (optional)
✅ **Admin Dashboard** - Manage all content and orders
✅ **Responsive Design** - Mobile, tablet, and desktop optimized
✅ **SEO Optimized** - Search engine friendly

## Tech Stack

- **Frontend**: React 18, Tailwind CSS, React Router
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: JWT
- **Image Hosting**: Cloudinary
- **Email**: Nodemailer
- **Deployment**: Vercel (Frontend), Heroku/Railway (Backend)

## Project Structure

```
welding-fabrication-site/
├── frontend/          # React application
├── backend/           # Node.js/Express API
├── docs/              # Documentation
└── README.md
```

## Installation & Setup

### Prerequisites
- Node.js (v14+)
- npm or yarn
- MongoDB (local or Atlas)
- Git

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

Visit `http://localhost:3000`

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your credentials
npm start
```

API runs on `http://localhost:5000`

## Environment Variables

See `.env.example` files in frontend and backend directories.

## Features in Detail

### 1. Home Page
- Hero section with call-to-action
- Featured projects carousel
- Service highlights
- Testimonials section
- Newsletter signup

### 2. Portfolio Gallery
- Image gallery with filters
- Project details and specifications
- Client testimonials per project
- Project timeline

### 3. Services
- Detailed service descriptions
- Pricing information
- Service capabilities
- Equipment used

### 4. Contact & Quotation
- Contact form with validation
- Quotation request form
- Live chat support (optional)
- Service area map

### 5. Admin Dashboard
- Project management
- Service management
- Quote management
- Customer messages
- Analytics and reporting
- User management

## Database Models

- **User** - Admin and customer accounts
- **Project** - Portfolio projects
- **Service** - Services offered
- **Quote** - Customer quote requests
- **Contact** - Contact messages
- **Testimonial** - Customer reviews
- **Blog Post** - News and blog content

## API Endpoints

### Public Routes
- `GET /api/projects` - All projects
- `GET /api/projects/:id` - Project details
- `GET /api/services` - All services
- `GET /api/testimonials` - All testimonials
- `POST /api/contact` - Submit contact form
- `POST /api/quotes` - Submit quote request

### Admin Routes (Protected)
- `POST /api/admin/projects` - Create project
- `PUT /api/admin/projects/:id` - Update project
- `DELETE /api/admin/projects/:id` - Delete project
- Similar CRUD routes for services, testimonials, etc.

## Security

- JWT authentication
- CORS configured
- Input validation and sanitization
- Rate limiting on contact/quote endpoints
- Password hashing (bcrypt)
- HTTPS required in production

## Performance Optimization

- Image optimization and lazy loading
- Code splitting
- CDN for static assets
- Database indexing
- Caching strategies

## SEO Features

- Meta tags for all pages
- Sitemap
- Robots.txt
- Structured data (JSON-LD)
- Open Graph tags for social sharing
- Fast page load times

## Deployment

### Frontend (Vercel)
```bash
cd frontend
npm run build
vercel deploy
```

### Backend (Heroku/Railway)
```bash
cd backend
heroku create your-app-name
git push heroku main
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## License

MIT License - feel free to use this project for your business

## Support

For issues, questions, or feature requests, please open a GitHub issue.
