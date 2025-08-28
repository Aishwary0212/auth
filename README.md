# 🚀 Full Stack Project

Welcome to this full-stack authentication project, featuring a **React + Vite** frontend and an **Express + MongoDB** backend. This repository provides a complete, ready-to-use solution for user registration, login, email verification, and password management.

---

## ✨ Core Features

- **🔐 Secure JWT Authentication:** State-of-the-art authentication using JSON Web Tokens stored in secure cookies.
- **✉️ Email Verification:** Ensures that users sign up with a valid and accessible email address.
- **🔑 Password Reset:** A secure flow for users to reset their forgotten passwords via email.
- **⚛️ Modern Frontend:** Built with React, Vite, and styled with Tailwind CSS for a fast and responsive UI.

---

## 🛠️ Backend Setup

- **Tech Stack:** Node.js, Express, MongoDB, Mongoose
- **Features:** User registration, login, email verification, password reset, JWT authentication, CORS, cookies

### Instructions

1.  **Navigate to the Backend directory:**
    ```sh
    cd Backend
    ```
2.  **Install dependencies:**
    ```sh
    npm install
    ```
3.  **Configure environment variables:**
    Create a `.env` file and add your configuration (see `.env.sample` for reference).
4.  **Start the server:**
    ```sh
    npm start
    ```
5.  The server will be running on `http://localhost:2500`.

---

## 🖥️ Frontend Setup

- **Tech Stack:** React, Vite, Tailwind CSS
- **Features:** Signup, Login, Profile, Card components

### Instructions

1.  **Navigate to the Frontend directory:**
    ```sh
    cd Frontend
    ```
2.  **Install dependencies:**
    ```sh
    npm install
    ```
3.  **Start the development server:**
    ```sh
    npm run dev
    ```
4.  The app will be running on `http://localhost:5173`.

---

## 📂 Project Structure

```
.
├── Backend/
│   ├── .env
│   ├── index.js
│   ├── controller/
│   ├── middleware/
│   ├── model/
│   ├── routes/
│   └── utils/
└── Frontend/
    ├── index.html
    ├── package.json
    ├── src/
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── components/
    └── service/
```

---

## 📝 Notes

-   Ensure your MongoDB instance is running and the connection string in the backend's `.env` file is correct.
-   The API endpoints are prefixed with `/api/v1/users`.
-   You may need to update the allowed CORS origins in `Backend/index.js` to match your frontend URL if you change the port.

*Happy coding!*
