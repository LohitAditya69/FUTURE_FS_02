# 🚀 Mini CRM Dashboard (Client Lead Management System)

A full-stack **Mini CRM Application** built as part of the **Future Interns Full Stack Web Development – Task 2 (2026)**.

This project helps businesses manage incoming leads from contact forms, track status updates, and add follow-up notes.

---

Live demo link: https://future-fs-02-tau-ten.vercel.app/

## 📌 Features

✅ Admin Login (Secure Access)  
✅ Add New Leads (Name, Email, Phone, Notes)  
✅ View All Leads in Dashboard  
✅ Update Lead Status:

- New → Contacted → Interested → Converted

✅ Follow-up Notes Support  
✅ Search Leads by Name or Email  
✅ Timestamp Tracking (Created Date)  
✅ Delete Leads

---

## 🛠 Tech Stack

### Frontend

- React.js
- CSS (Futuristic UI Theme)

### Backend

- Node.js
- Express.js

### Database

- MongoDB (MongoDB Atlas)

---

## 📂 Project Structure

```bash
CRM/
│
├── backend/
│   ├── models/
│   │   └── Lead.js
│   │
│   ├── routes/
│   │   └── leadRoutes.js
│   │
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   │
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── README.md
└── .gitignore
```

---

## ⚙️ Setup Instructions (Run Locally)

### 1️⃣ Clone Repository

```bash
git clone https://github.com/<your-username>/FUTURE_FS_02.git
cd FUTURE_FS_02
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Run backend server:

```bash
npm start
```

Backend runs at:

http://localhost:5000

---

### 3️⃣ Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

http://localhost:5173

---

## 🔐 Default Admin Login

Username: admin  
Password: 1234

---

## ✅ Internship Task Requirements Covered

✔ Lead listing  
✔ Status updates  
✔ Notes and follow-ups  
✔ Secure admin login  
✔ Database storage  
✔ Search and filtering  
✔ Timestamp tracking

---

## 👨‍💻 Author

Developed by **Lohit Aditya**  
Future Interns Internship Project – 2026
