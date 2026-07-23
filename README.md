# Tourunity 🌍✈️

> **Explore the World, Plan Your Next Adventure.**  
> A modern, full-stack MERN travel and destination discovery platform built with React 19, Tailwind CSS, Express, and MongoDB.

---

## 🌟 Overview

**Tourunity** is a responsive web application designed for travel enthusiasts to discover top global destinations, explore curated travel spots, and manage user accounts securely. Built with a sleek UI using Radix UI components, smooth Embla Carousels, video headers, and robust JWT-based backend authentication.

---

## ✨ Features

- 📱 **Modern & Responsive UI**: Built with Tailwind CSS v4, Radix UI, and Lucide React icons.
- 🔐 **Secure User Authentication**: Full Signup and Login system using JWT (JSON Web Tokens) and bcrypt password hashing.
- 🏞️ **Featured Destinations**: Interactive carousel and destination cards for locations like Zurich, Barcelona, Phuket, and more.
- 🔒 **Protected Routes**: Client-side authentication checks restricting protected views to logged-in users.
- 🔔 **Toast Notifications**: Built-in user feedback with `react-toastify`.
- ⚡ **Fast Development**: Powered by Vite and React 19 on the frontend with Express & Mongoose on the backend.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v4, `clsx`, `tailwind-merge`
- **UI Components**: Radix UI primitives, Lucide React
- **Forms & Validation**: `react-hook-form`, `zod`
- **Routing**: `react-router-dom` v6
- **Carousels**: `embla-carousel-react`

### Backend
- **Runtime**: Node.js & Express.js
- **Database**: MongoDB Atlas with Mongoose ORM
- **Authentication**: `jsonwebtoken` & `bcrypt`
- **Environment Management**: `dotenv`

---

## 📁 Project Structure

```text
tourunity/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # UI components (Header, Footer, Home, Login, Signup)
│   │   ├── context/        # Auth Context provider
│   │   ├── data/           # Static carousel & destination data
│   │   └── schemas/        # Zod validation schemas
│   ├── package.json
│   └── vite.config.js
└── server/                 # Backend Node.js Express API
    ├── controllers/        # Request handlers (authController)
    ├── middleware/         # Auth & validation middlewares
    ├── models/             # Mongoose schemas (User, db.js)
    ├── routes/             # API routes (authRouter)
    ├── index.js            # Server entrypoint
    └── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB Atlas Account](https://www.mongodb.com/cloud/atlas) or local MongoDB instance

---

### 📥 Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/tourunity.git
   cd tourunity
   ```

2. **Setup Server (Backend)**:
   ```bash
   cd server
   npm install
   ```
   Create a `.env` file in the `server/` directory:
   ```env
   PORT=8080
   MONGO_CONN=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```
   Start the backend development server:
   ```bash
   npm run dev
   ```

3. **Setup Client (Frontend)**:
   Open a new terminal window:
   ```bash
   cd client
   npm install
   npm run dev
   ```

4. **Access the App**:
   Navigate to `http://localhost:5173` in your browser.

---

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).
