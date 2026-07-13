# API Documentation

## Base URL
```
http://localhost:5000/api
```

## Public Endpoints

### Projects

#### Get All Projects
```
GET /projects
```

Response:
```json
{
  "projects": [
    {
      "id": 1,
      "title": "Project Title",
      "description": "Description",
      "image": "image_url",
      "category": "structural",
      "date": "2024-01-15"
    }
  ]
}
```

#### Get Project by ID
```
GET /projects/:id
```

### Services

#### Get All Services
```
GET /services
```

### Contact

#### Submit Contact Form
```
POST /contact

Body:
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "555-123-4567",
  "subject": "Inquiry",
  "message": "Message content"
}
```

### Quotations

#### Submit Quote Request
```
POST /quotes

Body:
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "555-123-4567",
  "company": "Company Name",
  "serviceType": "structural",
  "description": "Project description",
  "budget": "$15,000",
  "timeline": "1-month"
}
```

## Admin Endpoints (Protected)

All admin endpoints require JWT authentication.

### Projects

#### Create Project
```
POST /admin/projects
```

#### Update Project
```
PUT /admin/projects/:id
```

#### Delete Project
```
DELETE /admin/projects/:id
```

### Services

#### Create Service
```
POST /admin/services
```

#### Update Service
```
PUT /admin/services/:id
```

#### Delete Service
```
DELETE /admin/services/:id
```

## Error Responses

### 400 Bad Request
```json
{
  "error": "Invalid input",
  "details": []
}
```

### 401 Unauthorized
```json
{
  "error": "Unauthorized"
}
```

### 404 Not Found
```json
{
  "error": "Resource not found"
}
```

### 500 Server Error
```json
{
  "error": "Internal server error"
}
```
