# 🚀 First Full Stack Project

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Welcome to this full-stack authentication project, featuring a **React + Vite** frontend and an **Express + MongoDB** backend. This repository provides a complete, ready-to-use solution for user registration, login, email verification, and password management.

---

## ✨ Core Features

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin-top: 1rem;">
    <div style="background-color: #2d3748; padding: 1rem; border-radius: 8px;">
        <h4 style="margin-top: 0; color: #e2e8f0;">🔐 Secure JWT Authentication</h4>
        <p style="color: #a0aec0; font-size: 0.9rem;">State-of-the-art authentication using JSON Web Tokens stored in secure cookies.</p>
    </div>
    <div style="background-color: #2d3748; padding: 1rem; border-radius: 8px;">
        <h4 style="margin-top: 0; color: #e2e8f0;">✉️ Email Verification</h4>
        <p style="color: #a0aec0; font-size: 0.9rem;">Ensures that users sign up with a valid and accessible email address.</p>
    </div>
    <div style="background-color: #2d3748; padding: 1rem; border-radius: 8px;">
        <h4 style="margin-top: 0; color: #e2e8f0;">🔑 Password Reset</h4>
        <p style="color: #a0aec0; font-size: 0.9rem;">A secure flow for users to reset their forgotten passwords via email.</p>
    </div>
    <div style="background-color: #2d3748; padding: 1rem; border-radius: 8px;">
        <h4 style="margin-top: 0; color: #e2e8f0;">⚛️ Modern Frontend</h4>
        <p style="color: #a0aec0; font-size: 0.9rem;">Built with React, Vite, and styled with Tailwind CSS for a fast and responsive UI.</p>
    </div>
</div>

---

## 💻 Interactive Demo & Setup

This section provides a visual preview of the frontend and the necessary steps to get both the frontend and backend running locally.

<div style="background-color: #1a202c; border-radius: 8px; padding: 20px; font-family: sans-serif; color: white; margin-top: 1.5rem;">
    <div style="display: flex; border-bottom: 1px solid #4a5568;">
        <button id="tab-demo" onclick="showTab('demo')" style="background-color: #4a5568; color: white; padding: 10px 15px; border: none; border-radius: 5px 5px 0 0; cursor: pointer; font-size: 16px;">Frontend Demo</button>
        <button id="tab-backend" onclick="showTab('backend')" style="background-color: transparent; color: #a0aec0; padding: 10px 15px; border: none; border-radius: 5px 5px 0 0; cursor: pointer; font-size: 16px;">Backend Setup</button>
        <button id="tab-frontend" onclick="showTab('frontend')" style="background-color: transparent; color: #a0aec0; padding: 10px 15px; border: none; border-radius: 5px 5px 0 0; cursor: pointer; font-size: 16px;">Frontend Setup</button>
    </div>

    <!-- Demo Content -->
    <div id="content-demo" style="padding-top: 20px;">
        <h3 style="color: #cbd5e0; border-bottom: 1px solid #4a5568; padding-bottom: 10px;">UI Preview</h3>
        <p style="color: #a0aec0; margin-bottom: 15px;">A conceptual preview of the login and registration card component.</p>
        <div style="background: linear-gradient(145deg, #2d3748, #1a202c); padding: 2rem; border-radius: 10px; max-width: 350px; margin: 2rem auto; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.5);">
            <h2 style="text-align: center; color: white; margin-bottom: 1.5rem;">Create Account</h2>
            <input type="email" placeholder="Email Address" style="width: calc(100% - 20px); padding: 10px; margin-bottom: 1rem; border-radius: 5px; border: 1px solid #4a5568; background: #2d3748; color: white;"/>
            <input type="password" placeholder="Password" style="width: calc(100% - 20px); padding: 10px; margin-bottom: 1.5rem; border-radius: 5px; border: 1px solid #4a5568; background: #2d3748; color: white;"/>
            <button style="width: 100%; padding: 12px; background-color: #4299e1; color: white; border: none; border-radius: 5px; cursor: pointer; font-weight: bold;">Sign Up</button>
            <p style="text-align: center; color: #a0aec0; font-size: 0.8rem; margin-top: 1rem;">Already have an account? <a href="#" style="color: #4299e1;">Login</a></p>
        </div>
    </div>

    <!-- Backend Content -->
    <div id="content-backend" style="padding-top: 20px; display: none;">
        <h3 style="color: #cbd5e0; border-bottom: 1px solid #4a5568; padding-bottom: 10px;">Backend (Express + MongoDB)</h3>
        <p style="color: #a0aec0;"><strong>Tech Stack:</strong> Node.js, Express, MongoDB, Mongoose</p>
        <h4 style="color: #e2e8f0; margin-top: 1.5rem;">Setup Instructions</h4>
        <ol style="color: #a0aec0; padding-left: 20px;">
            <li style="margin-bottom: 10px;">Navigate to the Backend directory: <br><code style="background: #2d3748; padding: 3px 6px; border-radius: 4px;">cd Backend</code></li>
            <li style="margin-bottom: 10px;">Install all required dependencies: <br><code style="background: #2d3748; padding: 3px 6px; border-radius: 4px;">npm install</code></li>
            <li style="margin-bottom: 10px;">Create a <code style="background: #2d3748; padding: 3px 6px; border-radius: 4px;">.env</code> file and add your environment variables (see <code style="background: #2d3748; padding: 3px 6px; border-radius: 4px;">.env.sample</code>).</li>
            <li style="margin-bottom: 10px;">Start the server: <br><code style="background: #2d3748; padding: 3px 6px; border-radius: 4px;">npm start</code></li>
            <li style="margin-bottom: 10px;">The server will be running on <a href="http://localhost:2500" style="color: #4299e1;">http://localhost:2500</a>.</li>
        </ol>
    </div>

    <!-- Frontend Content -->
    <div id="content-frontend" style="padding-top: 20px; display: none;">
        <h3 style="color: #cbd5e0; border-bottom: 1px solid #4a5568; padding-bottom: 10px;">Frontend (React + Vite)</h3>
        <p style="color: #a0aec0;"><strong>Tech Stack:</strong> React, Vite, Tailwind CSS</p>
        <h4 style="color: #e2e8f0; margin-top: 1.5rem;">Setup Instructions</h4>
        <ol style="color: #a0aec0; padding-left: 20px;">
            <li style="margin-bottom: 10px;">Navigate to the Frontend directory: <br><code style="background: #2d3748; padding: 3px 6px; border-radius: 4px;">cd Frontend</code></li>
            <li style="margin-bottom: 10px;">Install all required dependencies: <br><code style="background: #2d3748; padding: 3px 6px; border-radius: 4px;">npm install</code></li>
            <li style="margin-bottom: 10px;">Start the development server: <br><code style="background: #2d3748; padding: 3px 6px; border-radius: 4px;">npm run dev</code></li>
            <li style="margin-bottom: 10px;">The app will be running on <a href="http://localhost:5173" style="color: #4299e1;">http://localhost:5173</a>.</li>
        </ol>
    </div>
</div>

<script>
    function showTab(tabName) {
        const contents = ['demo', 'backend', 'frontend'];
        contents.forEach(content => {
            document.getElementById('content-' + content).style.display = 'none';
            document.getElementById('tab-' + content).style.backgroundColor = 'transparent';
            document.getElementById('tab-' + content).style.color = '#a0aec0';
        });
        document.getElementById('content-' + tabName).style.display = 'block';
        document.getElementById('tab-' + tabName).style.backgroundColor = '#4a5568';
        document.getElementById('tab-' + tabName).style.color = 'white';
    }
</script>

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
