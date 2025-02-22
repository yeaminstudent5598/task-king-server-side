# Task Management App - Backend

This is the backend API for the Task Management Application built with **Express.js** and **MongoDB**. It handles CRUD operations for tasks, user authentication via Firebase, and ensures real-time syncing of tasks with the frontend.

## Features:
- **User Authentication**: Firebase Authentication with Google sign-in.
- **Task Management**: CRUD operations (Create, Read, Update, Delete) for tasks.
- **Categories**: Tasks are categorized into "To-Do", "In Progress", and "Done".
- **Real-time Sync**: Updates the frontend instantly when changes are made to tasks (via MongoDB Change Streams or WebSockets).

## Live Link:
[Backend API Documentation](http://your-live-backend-link.com)

## Dependencies:
- **Express.js**: 4.17.1
- **MongoDB**: 4.4.x
- **Mongoose**: 5.10.9
- **Firebase Admin SDK**: 9.0.0
- **cors**: 2.8.5
- **dotenv**: 8.2.0
- **cookie-parser**: 1.4.5

## Installation Steps:
1. Clone this repository.
   ```bash
   git clone https://github.com/yourusername/task-management-app-backend.git
