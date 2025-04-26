# 🛡️ AI Safety Incident Log API

A RESTful backend API service for logging and managing AI safety incidents. Built using **TypeScript**, **Node.js (Express)**, and **MongoDB**, this service supports full CRUD operations with robust validation, auto-incrementing IDs, and structured error handling.

## 📚 Table of Contents
- [Technology Stack](#technology-stack)
- [Features](#features)
- [Setup & Installation](#setup--installation)
- [Database Setup](#database-setup)
- [Running the Project](#running-the-project)
- [API Endpoints & Examples](#api-endpoints--examples)
- [Project Structure](#project-structure)
- [Design Decisions](#design-decisions--challenges)
- [Contributing](#contributing)
- [License](#license)

## 🚀 Technology Stack
- **Language:** TypeScript
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB
- **ODM:** Mongoose
- **Validation:** Joi
- **Development Tools:** Nodemon, ESLint, Prettier
- **Environment Management:** dotenv

## ✅ Features
- RESTful API with CRUD endpoints
- Auto-incrementing integer IDs
- Input validation
- Error handling
- TypeScript support
- Test data seeding

## 🛠️ Setup & Installation


### 1. Clone the repository
```bash
git clone https://github.com/your-username/ai-safety-incidents.git
cd ai-safety-incidents
```

### 2. Install dependencies
```bash
npm install
```

---

## ⚙️ Configure Environment

Create a `.env` file in the root directory:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/ai_safety_incidents
NODE_ENV=development
```

---

## 🧩 Database Setup

### 1. Install MongoDB Community Edition

- [Windows installation guide](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/)
- [Mac installation guide](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/)
- [Linux installation guide](https://www.mongodb.com/docs/manual/administration/install-on-linux/)

### 2. Start MongoDB Service

```bash
# Linux
sudo systemctl start mongod

# Mac
brew services start mongodb-community
```

### 3. Verify MongoDB is running

```bash
mongo --eval "db.runCommand({ping: 1})"
```

### 4. Seed Sample Data (Optional)

```bash
npm run seed
```

---

## 🧪 Running the Project

### Development Mode

```bash
npm run dev
```

### Production Build

```bash
npm run build
npm start
```

---

## 📡 API Endpoints

### Get all incidents
```http
GET /incidents
```

### Get single incident
```http
GET /incidents/:id
```

### Create incident
```http
POST /incidents
Content-Type: application/json

{
  "title": "Incident",
  "description": "Details",
  "severity": "High"
}
```

### Delete incident
```http
DELETE /incidents/:id
```

---

## 📁 Project Structure

```
src/
├── controllers/
├── models/
├── routes/
├── middlewares/
├── utils/
├── app.ts
└── server.ts
```

---

## 🤝 Contributing

1. Fork the project  
2. Create your feature branch (`git checkout -b feature/your-feature`)  
3. Commit your changes (`git commit -m 'Add new feature'`)  
4. Push to the branch (`git push origin feature/your-feature`)  
5. Open a pull request  

---

## 📜 License

This project is licensed under the **MIT License**.
# ai-safety-incident-api
