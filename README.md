# Task Manager App

A modern, full-stack task management application built with Next.js, React, TypeScript, and Firebase. This application allows users to manage their tasks with real-time updates, user authentication, and a clean, professional interface.

## Live Demo

🚀 **Check out our live application**: [Task Manager App](https://task-manager-iaqjuwji1-tilepranjal23-gmailcoms-projects.vercel.app/)

Experience the full functionality of our task management system in action! The application is deployed on Vercel for optimal performance and reliability.

## Features

- 🔐 **User Authentication**: Secure signup and login functionality
- ✨ **Real-time Updates**: Instant task synchronization across devices
- 🌓 **Dark/Light Mode**: Support for both dark and light themes
- 📱 **Responsive Design**: Works seamlessly across all device sizes
- ✅ **Task Management**: Create, read, update, and delete tasks
- 🎨 **Modern UI**: Clean interface with navy blue and sky blue color scheme
- 🔄 **Real-time Sync**: Changes reflect instantly using Firestore

## Tech Stack

### Frontend
- React
- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui components

### Backend
- Firebase
  - Firestore for database
  - Firebase Authentication

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Firebase account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/task-manager-app.git
cd task-manager-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory and add your Firebase configuration:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.


## Key Components

- **AuthForm**: Handles user authentication
- **TaskManager**: Main task management interface
- **AddTaskForm**: Form for creating new tasks
- **TaskList**: Displays user's tasks
- **TaskItem**: Individual task component

## Firebase Setup

1. Create a new Firebase project
2. Enable Authentication and Firestore
3. Set up authentication methods (email/password)
4. Create necessary Firestore collections
5. Add Firebase configuration to environment variables

## Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Run production server
npm start

# Run linting
npm run lint
```


