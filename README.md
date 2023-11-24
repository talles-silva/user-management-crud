# User Management CRUD Service

This service is a simple CRUD (Create, Read, Update, Delete) for managing user data. It is built using Node.js, TypeScript, Fastify, and MongoDB. The primary purpose is to demonstrate a basic user management system with RESTful API endpoints.

## Technologies Used

- Node.js
- TypeScript
- Fastify
- MongoDB
- Mongoose (ODM)

## Getting Started

### Install Dependencies:

```bash
npm install | yarn
```

### Create Environment Variables:

Create a .env file in the project root with the following content:

```env
DATABASE_URL=mongodb://your-mongodb-connection-string
```

Replace your-mongodb-connection-string with your MongoDB connection string.

### Run the Service:

```bash
npm run start | yarn start
```

The service will start on http://localhost:3200.


Replace your-mongodb-connection-string with your MongoDB connection string.

# API Endpoints

- Create User:
```bash
POST /users
```

- Get All Users:
```bash
GET /users
```

- Get User by ID:
```bash
GET /users/:id
```

- Update User:
```bash
PUT /users/:id
```

- Delete User:
```bash
DELETE /users/:id
```
