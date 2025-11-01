# TaskFlow - Real-Time Task Management Application

![TaskFlow Banner](./docs/wireframes/dashboard.png)

## 📋 Project Overview

TaskFlow is a modern, real-time collaborative task management application built with the MERN stack (MongoDB, Express, React/Next.js, Node.js). It enables teams to create, assign, and track tasks with live updates and email notifications.

### Problem Statement

Teams often struggle with task coordination across distributed members. TaskFlow addresses this by providing:
- Real-time task updates without page refreshes
- Instant email notifications for task assignments
- Clear task status tracking and filtering
- Responsive design for mobile and desktop access

### Target Users

- Small to medium-sized development teams
- Project managers coordinating multiple tasks
- Remote teams requiring real-time collaboration
- Freelancers managing client projects

## ✨ Features

### Core Features
- **User Authentication**: Secure login/register with JWT tokens
- **Task Management**: Full CRUD operations for tasks
- **Real-Time Updates**: Live task changes via WebSocket (Socket.io)
- **Email Notifications**: Automated emails for task assignments and updates
- **Task Filtering**: Filter by status, priority, and assignee
- **User Roles**: Admin and Member role-based access control
- **Responsive Design**: Mobile-first UI with Tailwind CSS

### Advanced Features
- **Search Functionality**: Quick task search
- **Profile Management**: Update user details and avatar
- **Task Comments**: Threaded discussions on tasks
- **Due Date Reminders**: Email alerts for approaching deadlines

## 🛠️ Tech Stack

### Frontend
- **Next.js 13** - React framework with SSR
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Socket.io-client** - Real-time communication
- **Axios** - HTTP client
- **React Context API** - State management

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **Socket.io** - WebSocket server
- **JWT** - Authentication tokens
- **Bcrypt** - Password hashing
- **Nodemailer** - Email service

## 📁 Project Structure

```
taskflow-app/
├── frontend/          # Next.js frontend application
│   ├── components/    # React components
│   ├── pages/         # Next.js pages
│   ├── lib/           # Utilities and configs
│   ├── context/       # React Context providers
│   └── hooks/         # Custom React hooks
├── backend/           # Express backend API
│   ├── models/        # Mongoose schemas
│   ├── controllers/   # Route controllers
│   ├── routes/        # API routes
│   ├── middleware/    # Custom middleware
│   └── utils/         # Helper functions
└── docs/              # Documentation and wireframes
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (v5 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/taskflow-app.git
cd taskflow-app/grading-folder
```

2. **Backend Setup**
```bash
cd backend
npm install
```

Create `.env` file in backend directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/taskflow
JWT_SECRET=your_super_secret_jwt_key_change_in_production
JWT_EXPIRE=7d
NODE_ENV=development

# Email Configuration (Gmail example)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=TaskFlow <noreply@taskflow.com>

# Frontend URL for CORS
FRONTEND_URL=http://localhost:3000
```

3. **Frontend Setup**
```bash
cd ../frontend
npm install
```

Create `.env.local` file in frontend directory:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_SOCKET_URL=http://localhost:5000
```

4. **Start MongoDB**
```bash
mongod
```

5. **Run the application**

Backend (from backend directory):
```bash
npm run dev
```

Frontend (from frontend directory):
```bash
npm run dev
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## 📊 Database Schema

### User Model
- email (unique, required)
- password (hashed, required)
- name (required)
- role (admin/member)
- avatar (optional)
- createdAt, updatedAt

### Task Model
- title (required)
- description (optional)
- status (todo/in-progress/completed)
- priority (low/medium/high)
- assignedTo (User reference)
- createdBy (User reference)
- dueDate (optional)
- comments (array)
- createdAt, updatedAt

### Notification Model
- user (User reference)
- message (required)
- type (task-assigned/task-updated/comment)
- isRead (boolean)
- relatedTask (Task reference)
- createdAt

## 🔐 Authentication Flow

1. User registers with email and password
2. Password is hashed using bcrypt (10 salt rounds)
3. JWT token is generated and returned
4. Token is stored in localStorage on frontend
5. Protected routes verify token via middleware
6. Token expires after 7 days

## 🌐 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)

### Tasks
- `GET /api/tasks` - Get all tasks (protected)
- `POST /api/tasks` - Create task (protected)
- `GET /api/tasks/:id` - Get single task (protected)
- `PUT /api/tasks/:id` - Update task (protected)
- `DELETE /api/tasks/:id` - Delete task (protected, admin only)

### Users
- `GET /api/users` - Get all users (protected, admin only)
- `PUT /api/users/:id` - Update user profile (protected)

### Notifications
- `GET /api/notifications` - Get user notifications (protected)
- `PUT /api/notifications/:id/read` - Mark as read (protected)

## 🧪 Testing

Run backend tests:
```bash
cd backend
npm test
```

## 📱 Screenshots

See `docs/wireframes/` for design mockups:
- Login page wireframe
- Dashboard view
- Task detail page

## 🚢 Deployment

### Frontend (Vercel)
1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables
4. Deploy automatically

### Backend (Railway/Render)
1. Push code to GitHub
2. Create new service on Railway/Render
3. Add environment variables
4. Connect MongoDB Atlas
5. Deploy

See `deployment/` folder for configuration files.

## 🔒 Security Features

- Password hashing with bcrypt
- JWT token authentication
- Protected API routes
- CORS configuration
- Environment variables for sensitive data
- Input validation and sanitization
- Rate limiting on auth endpoints

## 🐛 Known Issues

- Email notifications may have slight delay (queue system recommended for production)
- Socket connections need reconnection logic for network interruptions
- File upload for avatars not yet implemented

## 🎯 Future Enhancements

- [ ] File attachments for tasks
- [ ] Calendar view for tasks
- [ ] Team workspaces
- [ ] Activity logs
- [ ] Dark mode
- [ ] Mobile app (React Native)

## 👥 Contributing

This is a student project for educational purposes. Feedback and suggestions welcome!

## 📄 License

MIT License - feel free to use for learning purposes.

## 📧 Contact

For questions or feedback:
- Email: Vincent@directed.dev
- GitHub: [@xfince](https://github.com/xfince)

---

**Live Demo**: See DEPLOYMENT_URL.txt for deployed application link.

**Documentation**: Check `docs/` folder for detailed API docs and user stories.