# Recipe Manager - MERN Stack Application

A full-stack MERN (MongoDB, Express.js, React, Node.js) application for managing recipes. Users can add, view, edit, and delete recipes with ingredients, instructions, and other details.

## Features

- Add new recipes with title, ingredients, instructions, prep/cook time, servings, and image
- View all recipes in a responsive grid layout
- Edit existing recipes
- Delete recipes
- Responsive design with Tailwind CSS

## Project Structure

```
├── backend/                 # Express.js backend
│   ├── models/             # MongoDB models
│   ├── routes/             # API routes
│   ├── middleware/         # Custom middleware
│   ├── server.js           # Main server file
│   ├── package.json        # Backend dependencies
│   └── .env.example        # Environment variables template
├── frontend/               # React frontend
│   ├── public/             # Static assets
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── App.js          # Main App component
│   │   ├── index.js        # Entry point
│   │   └── index.css       # Global styles with Tailwind
│   ├── package.json        # Frontend dependencies
│   ├── tailwind.config.js  # Tailwind configuration
│   └── postcss.config.js   # PostCSS configuration
└── README.md               # This file
```

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd deployment-and-devops-essentials-Favgirlfr
   ```

2. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

4. Set up environment variables:
   - Copy `backend/.env.example` to `backend/.env`
   - Update the `MONGO_URI` with your MongoDB connection string

## Running the Application

1. Start the backend server:
   ```bash
   cd backend
   npm run dev
   ```
   The backend will run on http://localhost:5000

2. Start the frontend development server:
   ```bash
   cd frontend
   npm start
   ```
   The frontend will run on http://localhost:3000

3. Open your browser and navigate to http://localhost:3000

## API Endpoints

- `GET /api/recipes` - Get all recipes
- `GET /api/recipes/:id` - Get a single recipe
- `POST /api/recipes` - Create a new recipe
- `PUT /api/recipes/:id` - Update a recipe
- `DELETE /api/recipes/:id` - Delete a recipe

## Technologies Used

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB with Mongoose
  - CORS

- **Frontend:**
  - React
  - Axios for API calls
  - Tailwind CSS for styling

## Deployment

This application is prepared for deployment following the Week 7 assignment requirements. Refer to `Week7-Assignment.md` for detailed deployment instructions.

## License

This project is part of the MERN Stack Development course.