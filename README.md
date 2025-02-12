# 📚 FundooNotes Backend

A backend service for the **FundooNotes** application, providing user authentication (registration, login, password reset via token) and note management features. This project is built with **Node.js** and **Express.js** and uses **Swagger** for API documentation.

---

## 🚀 Features

- **User Registration**: Sign up with secure password hashing.
- **User Login**: Authenticate using JWT tokens.
- **Password Reset**: Reset password using secure token-based verification.
- **API Creation**: CRUD operations for notes using RESTful APIs.
- **API Documentation**: Swagger integration for easy API exploration.

---

## 🛠 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **API Documentation**: Swagger
- **Testing Tools**: Postman

---

## 📂 Project Structure

fundooNotes/ 
│ 
├── controllers/ # Handles the logic for routes 
├── models/ # Mongoose schemas for User and Notes 
├── routes/ # API route definitions 
├── middleware/ # Authentication and validation middleware 
├── config/ # Configuration files (DB, environment variables) 
├── app.js # Entry point of the application 
└── swagger.json # Swagger API documentation file

---

## ⚙️ Getting Started

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/your-username/fundooNotes.git
   cd fundooNotes
2. **Install Dependencies**
    ```bash
   npm install
3. **Setup Environment Variables**
    ```bash
    PORT=3000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
4. **Run The Application**
    ```bash
    npm start

---

## 📬 Postman Collection

You can test all the API endpoints using the provided Postman collection.  
👉 [Click here to access the Postman Collection](https://www.postman.com/avionics-geoscientist-52103740/workspace/linkedin-clone/collection/31275176-66aa7ae6-83fb-4e0c-8798-36500e865153?action=share&creator=31275176)

