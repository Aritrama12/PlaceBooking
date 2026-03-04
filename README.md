##🏠 PlaceBooking – Property Rental & Booking Platform

PlaceBooking is a full-stack property rental and booking web application that allows users to list accommodations, browse properties, and securely book rentals online. The backend is built with Node.js, Express, and MongoDB, while the frontend is deployed on Netlify and backend on Render.

##🚀 Live Deployment

Frontend (Netlify):https://nimble-gingersnap-ed44a5.netlify.app/

Backend (Render): https://placebooking.onrender.com

##🛠 Tech Stack
🔹 Frontend

React.js

Axios

React Router

Font Awesome

Netlify (Deployment)

🔹 Backend

Node.js

Express.js

MongoDB (Atlas)

Mongoose

JWT Authentication

Cookie Parser

CORS

ImageKit (Image Upload)

Mailtrap (Email Testing)

Render (Deployment)

##📂 Project Structure
backend/
│
├── controllers/
│   ├── authController.js
│   ├── propertyController.js
│   ├── bookingController.js
│
├── routes/
│   ├── userRoutes.js
│   ├── propertyRouter.js
│   ├── bookingRouter.js
│
├── utils/
│   ├── db.js
│
├── index.js
├── .env

##🔐 Authentication Features

User Signup

User Login

Logout

JWT Token Authentication

Password Reset (Forgot / Reset)

Update Profile

Update Password

Protected Routes using Middleware

Routes:

POST   /api/v1/rent/user/signup
POST   /api/v1/rent/user/login
GET    /api/v1/rent/user/logout
PATCH  /api/v1/rent/user/updateMe
PATCH  /api/v1/rent/user/updateMyPassword
POST   /api/v1/rent/user/forgotPassword
PATCH  /api/v1/rent/user/resetPassword/:token
GET    /api/v1/rent/user/me

##🏡 Property Features

Create Property (Protected)

Get All Properties (Pagination Supported)

Get Single Property

Get Logged-in User Properties

Routes:

GET    /api/v1/rent/listing
GET    /api/v1/rent/listing/:id
POST   /api/v1/rent/user/newAccommodation
GET    /api/v1/rent/user/myAccommodation

##📅 Booking Features

Create Booking Order

Verify Payment

Get User Bookings

Get Booking Details

Routes:

GET    /api/v1/rent/user/booking
GET    /api/v1/rent/user/booking/:bookingId
POST   /api/v1/rent/user/booking/create-order
POST   /api/v1/rent/user/booking/verify-payment


##🔄 Axios Configuration (Frontend)
import axios from "axios";
import qs from "qs";

export const axiosInstance = axios.create({
  baseURL: "https://placebooking.onrender.com/api",
  withCredentials: true,
  paramsSerializer: (params) =>
    qs.stringify(params, { arrayFormat: "repeat" }),
});

##⚙️ CORS Configuration (Backend)
app.use(
  cors({
    origin: process.env.ORIGIN_ACCESS_URL,
    credentials: true,
  })
);

##📦 Installation (Local Setup)
1️⃣ Clone Repository
git clone https://github.com/yourusername/placebooking.git
2️⃣ Backend Setup
cd backend
npm install
npm run dev
3️⃣ Frontend Setup
cd frontend
npm install
npm run dev
🚀 Deployment Guide
🔹 Backend (Render)

Push backend to GitHub

Create Web Service on Render

Add environment variables

Set build command:

npm install

Set start command:

node index.js
🔹 Frontend (Netlify)

Push frontend to GitHub

Import project in Netlify

Build command:

npm run build

Publish directory:

dist

Add _redirects file:

/* /index.html 200
🛡 Security Features

HTTP-only Cookies

JWT-based Authentication

Protected Middleware

Environment Variable Protection

Secure MongoDB Atlas Connection

##📈 Future Improvements

Admin Dashboard

Advanced Filtering & Search

Reviews & Ratings

Real Payment Gateway Integration

Location-based Property Search

Real-time Notifications

##👨‍💻 Author

Developed by Aritra Manna
Full Stack Developer | MERN Stack Enthusiast
