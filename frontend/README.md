# 🎟 MERN Event Ticketing App

A Mini Event Ticketing Web Application built using the MERN Stack.

This project allows organizers to create events and manage registrations, while users can register through a public event link.

---

## 🚀 Tech Stack

- MongoDB
- Express.js
- React.js
- Node.js

---

## 👨‍💼 Organizer Features

✔ Organizer Signup & Login  
✔ Create Event  
✔ View Dashboard  
✔ Copy Public Event Link  
✔ View Event Registrations  
✔ Approve / Reject Registrations (Manual Mode)

---

## 👥 User Features

✔ Open Public Event Link  
✔ Register for Event  

Approval Logic:

- **Auto Mode** → Registration Approved Immediately ✅  
- **Manual Mode** → Registration Goes to Pending ⏳

---

## 🎫 Ticket System

After successful approval:

✔ User can view Ticket Page  
✔ Displays Ticket ID  
✔ Displays Event Information

---

## ⚙ Core Functionalities

- Authentication System (Signup / Login)
- Event Creation & Listing
- Approval Modes (Auto / Manual)
- Registration Management
- Ticket Generation

--
## 🛠 Installation & Setup

1️⃣ Clone Repository

```bash
git clone <your-repo-url>
cd MERN-Event-Ticketing-App

2️⃣ Backend Setup
cd backend
npm install
npm start

Backend runs on:

http://localhost:5000

3️⃣ Frontend Setup
cd frontend
npm install
npm start

Frontend runs on:

http://localhost:3000

📌 Usage Flow

1️⃣ Signup / Login as Organizer
2️⃣ Create Event
3️⃣ Copy Public Event Link
4️⃣ User Registers via Link
5️⃣ Organizer Approves / Rejects (Manual Mode)
6️⃣ Approved Users View Ticket
