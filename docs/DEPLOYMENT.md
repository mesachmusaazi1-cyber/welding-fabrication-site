# Deployment Guide

## Frontend Deployment (Vercel)

### Prerequisites
- Vercel account
- Git repository

### Steps

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Deploy**
```bash
cd frontend
vercel deploy
```

3. **Configure Environment**
   - Set `REACT_APP_API_URL` to your backend URL
   - Production: https://your-backend.com/api

## Backend Deployment (Heroku/Railway)

### Prerequisites
- Heroku account OR Railway account
- MongoDB Atlas account (for database)
- Git repository

### Heroku Deployment

1. **Create Heroku app**
```bash
heroku create your-app-name
```

2. **Add environment variables**
```bash
heroku config:set MONGODB_URI=mongodb+srv://...
heroku config:set JWT_SECRET=your_secret
```

3. **Deploy**
```bash
git push heroku main
```

### Railway Deployment

1. **Connect GitHub repository**
   - Go to Railway.app
   - Create new project from GitHub
   - Select repository

2. **Add environment variables**
   - Add MongoDB URI
   - Add JWT secret
   - Add other required variables

3. **Deploy**
   - Railway auto-deploys on push to main

## Database Setup (MongoDB Atlas)

1. **Create cluster**
   - Go to mongodb.com/cloud
   - Create free account
   - Create cluster

2. **Create database user**
   - Username: your_username
   - Password: strong_password

3. **Get connection string**
   - mongodb+srv://username:password@cluster.mongodb.net/database

## SSL/HTTPS

- Vercel provides free SSL
- Heroku/Railway provide free SSL
- Configure custom domain if needed

## Performance Optimization

### Frontend
- Enable gzip compression
- Minify CSS/JS
- Lazy load images
- Use CDN for static assets

### Backend
- Enable database indexing
- Use caching
- Optimize queries
- Use rate limiting

## Monitoring

### Vercel
- Built-in analytics
- Real-time monitoring
- Error tracking

### Heroku/Railway
- Logs: `heroku logs --tail`
- Metrics in dashboard
- Third-party monitoring (New Relic, DataDog)

## Backup Strategy

- MongoDB Atlas automatic backups
- GitHub as source control
- Regular database snapshots
