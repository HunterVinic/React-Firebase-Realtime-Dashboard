# 🔥 React Firebase Realtime Dashboard

A React.js application that connects to Firebase Realtime Database and displays live sensor/customer data in a table.

This project demonstrates:
- Real-time data listening
- Firebase Realtime Database integration
- Bootstrap styling
- Basic CRUD structure setup

---

## 🚀 Tech Stack

- React (Create React App)
- Firebase Realtime Database
- Bootstrap
- JavaScript (ES6)
- Jest (Testing Library)

---

## 📂 Project Structure

.
├── src/
│   ├── App.js
│   ├── index.js
│   ├── index.css
│   ├── firebaseConfig.js
│   ├── reportWebVitals.js
│   ├── components/
│   │   ├── realtimeDatabase.js
│   │   └── Crud.js
│   └── App.test.js
├── package.json
├── public/
└── README.md

---

## 🔥 Firebase Setup

This project connects to Firebase Realtime Database.

Make sure you:

1. Create a Firebase project
2. Enable Realtime Database
3. Replace firebaseConfig values in:

src/firebaseConfig.js

---

## 📡 How Realtime Data Works

- Connects to Firebase using initializeApp()
- Uses ref() to point to the "Customer" node
- Uses onValue() to listen for live updates
- Updates state automatically when data changes
- Renders table dynamically

---

## 🛠 Installation

Make sure Node.js is installed.

npm install

---

## ▶️ Run Development Server

npm start

Open browser:

http://localhost:3000

---

## 🧪 Run Tests

npm test

---

## 📊 Example Data Structure (Firebase)

Customer
  ├── ID1
  │    ├── HUMIDITY: 50
  │    ├── MotionSensor: ON
  │    ├── TEMPERATURE: 30
  ├── ID2
       ├── HUMIDITY: 60
       ├── MotionSensor: OFF
       ├── TEMPERATURE: 28

---

## 📌 Features

- Real-time database updates
- Live table rendering
- Bootstrap styling
- Firebase integration
- Basic CRUD component structure

---

## ⚠️ Notes

- Make sure Firebase rules allow read access.
- API keys shown in frontend config are safe for client apps (security is controlled by Firebase rules).
- Ensure correct imports from "firebase/database".

---

## 🔐 License

Copyright (c) 2026 Your Name

All rights reserved.

This project and its source code may not be copied, modified,
distributed, or used without explicit permission from the author.

---

## 👨‍💻 Author
Copyright (c) 2026 Sheshehang Limbu (HunterVinic)
All rights reserved.
This project and its source code may not be copied, modified, distributed, or used without explicit permission from the author.
