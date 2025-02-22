**Backend:**

- Node.js + Express.js
- MongoDB (via `mongodb` package)
- **Real-time Sync**: WebSockets / Change Streams

---

## 📥 Installation

### 🔧 Prerequisites

- Install **Node.js** (>=16)
- Install **MongoDB** (if running locally)
- Install **Git**

### 🔹 Clone the Repository

```sh
git https://github.com/yeaminstudent5598/task-king-server-side.git
cd task-king-server-side
```

### 📌 Backend Setup

1. **Navigate to the server directory**:
   ```sh
   cd server
   ```
2. **Install dependencies**:
   ```sh
   npm install
   ```
3. **Create a `.env` file** and add your MongoDB credentials:
   ```env
   USER_DB=your-mongo-db-name
   USER_PASS=your-mongo-db-password
   ```
4. **Start the backend server**:
   ```sh
   npm start
   ```
   The API should now be running on `http://localhost:5000`
   ### 🗄 MongoDB Setup

- If using **MongoDB Atlas**, create a database and obtain the connection URI.
- If running locally, ensure **MongoDB is installed and running**.

---

## 🎯 Usage

1. **Sign in with Google** to access the app.
2. **Create tasks** under "To-Do".
3. **Drag tasks** between categories.
4. **Edit or delete tasks**.
5. **Reorder tasks** within categories.

---

## 🔌 API Endpoints

| Method     | Endpoint     | Description                                        |
| ---------- | ------------ | -------------------------------------------------- |
| **POST**   | `/tasks`     | Add a new task                                     |
| **GET**    | `/tasks`     | Retrieve all tasks for the logged-in user          |
| **PUT**    | `/tasks/:id` | Update task details (title, description, category) |
| **DELETE** | `/tasks/:id` | Delete a task                                      |

---

## 🚀 Deployment

### 🎯 Deploy Backend (Vercel)

1. Install **Vercel CLI**:
   ```sh
   npm install -g vercel
   ```
2. Deploy backend:
   ```sh
   vercel --prod
   ```

### 🎯 Deploy Frontend (Vercel)

1. Deploy frontend:
   ```sh
   vercel --prod
   ```

Your app should now be live 🎉.

---

## ❓ Troubleshooting

- **MongoDB not connecting?**

  - Check `.env` and verify credentials.
  - Ensure MongoDB is running (`mongod`).

- **Firebase authentication issues?**

  - Verify API keys and Firebase settings.

- **Vite issues?**
  - Try clearing cache:
    ```sh
    rm -rf node_modules package-lock.json
    npm install
    ```

---

I've added a warning in the `README.md` to ensure **`.env` files are not pushed to GitHub** and included a proper `.gitignore` setup. Here’s the updated section:

---

## ⚠️ Important: Protect Your Credentials

🚨 **DO NOT** push `.env` files containing sensitive API keys or database credentials to GitHub.  
Make sure you have a **`.gitignore`** file in place to prevent accidental exposure.

### ✅ Ensure `.gitignore` Includes:

```plaintext
# Ignore environment variables
.env
.env.local
.env.production
.env.development

# Ignore node_modules
node_modules/
```

### 🚀 How to Secure Your API Keys?

1. **Add `.env` files to `.gitignore`** (already included above).
2. **Use environment variables on deployment platforms** (e.g., Vercel, Firebase, etc.).
3. **NEVER hardcode API keys** in your codebase.

🔐 **Keeping your credentials safe is crucial!** If you've accidentally pushed a `.env` file, **immediately revoke your API keys and regenerate them.**

---

## 👥 Contributors

- **Your Name** - _Yeamin Madbor_

---

## 📜 License

This project is licensed under the **MIT License**.

---
