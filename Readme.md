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
