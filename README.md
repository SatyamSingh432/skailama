# Skailama Assignment - Podcast Transcript Saving App

## Tech Stack

- Frontend: React (Vite), Vanilla CSS
- Backend: Node.js, Express.js
- Database: MongoDB (Mongoose ODM)
- Authentication: JWT (JSON Web Tokens)

## Project Setup

### Backend Setup

1. Clone the repository:

```
git clone https://github.com/SatyamSingh432/skailama/
cd backend
```

2. Install dependencies:

```
npm install
```

3. Create a .env file in the backend root and add:

```
PORT=8080
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>
```

4. Start the backend server:

```
npm run dev
```

The backend runs on http://localhost:8080

### Frontend Setup

1. Navigate to the frontend folder:

```
cd frontend
```

2. Install dependencies:

```
npm install
```

3. Start the frontend:

```
npm run dev
```

The frontend runs on http://localhost:5173

## Backend API Endpoints

Authentication (`/api/auth`)

- POST `/api/auth/register` - Register a new user
- POST `/api/auth/login` - Login and receive a JWT token
- GET `/api/auth/verify` - Verify a JWT token

Projects (`/api/projects`) - (Requires authentication)

- POST `/api/projects` - Create a new project
- GET `/api/projects` - Get all projects
- GET `/api/projects/:projectId` - Get a single project by ID

Files (`/api/files`) - (Requires authentication)

- POST `/api/files` - Create a new file within a project
- GET `/api/files/:projectId` - Get all files for a specific project
- PUT `/api/files/:id` - Update a file's transcript

## Features

- Users can register and log in.
- Create and manage multiple projects.
- Inside projects, users can add files with transcripts.
- Ability to edit transcripts.
- JWT Authentication ensures security.
- Responsive UI built using React with Vite.

## Deployment

- Backend is deployed on render.com
- Frontend is deployed on netlify.com
- Database is MongoDB Atlas
