# MovieHub Application Documentation

## Overview
MovieHub is a web-based platform designed to manage a catalog of movies. It allows users to add, view, edit, and delete movies within the application. This documentation provides an overview of the application's functionalities, code structure, components, technologies used, and how to use it.

## Features
- **Authentication**: Users can register, log in, and log out using their credentials.
- **Catalog Display**: Displays a list of movies in a catalog format, showcasing basic information.
- **Movie Details**: Provides detailed information about each movie, including descriptions and creation dates.
- **User-specific Content**: Users can view movies they've added in a separate section.
- **CRUD Operations**: Supports Create, Read, Update, and Delete operations for movies.

## Components and Routes
1. **Header Component**:
   - **Routes**:
     - Home
     - Catalog
     - Add Movie
     - My Movies
     - Login
     - Logout
     - Register

2. **Footer Component**: Displays copyright information.

3. **Movie Components**:
   - **Catalog**: Displays movies in a catalog format.
   - **Add Movie**: Form to add a new movie.
   - **Movie Details**: Detailed view of a movie with options for editing or deletion.
   - **Edit Movie**: Form to edit existing movie details.

4. **Authentication Components**:
   - **Login**: Form for user login.
   - **Register**: Form for new user registration.
   - **Logout**: Functionality to log out the user.

## Code Structure
- Follows a modular structure with components for specific functionalities.
- `movieService`: Handles API requests for CRUD operations on movie data.
- `authContext`: Manages user authentication and related functionality.

## API Integration
- Interacts with a backend API built using Node.js to perform CRUD operations on movie data.
- Utilizes services (`movieService`) for movie-related API requests.

## Technologies Used
- **Frontend**:
  - **React**: JavaScript library for building the user interface.
  - **React Router**: Library for handling navigation and routing within the React application.
  - **HTML & CSS**: Used for structuring and styling the application.

- **Backend**:
  - **Node**: JavaScript runtime environment for the server.

- **Database**:
  - **MongoDB**: NoSQL database used to store movie-related information.

- **Authentication**:
  - **JSON Web Tokens (JWT)**: Used for user authentication and authorization.

## Usage
- **Running the Application**: Start the server and access the application via a web browser.
- **Navigation**: Use the navigation bar to explore different sections.
- **Authentication**: Register or log in to access personalized features.
- **Movie Management**: Add, edit, or delete movies based on user permissions.


