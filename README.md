# 🏡 UHOME – University Student Housing Platform

A full-stack web application that helps university students find, list, and discuss rental housing near campus. Features include user authentication, listing creation with images, filtering, profile management, and community discussion boards — all built using modern web tools including React, Node.js, Prisma ORM, and AWS S3.

> 🔐 Private listings, intelligent filtering, and real-time discussion boards tailored for UTM students
> 🧠 Designed and delivered by a team of 6 as part of a senior-year Software Engineering course
> 🌐 Hosted on MongoDB Atlas with AWS S3 integration for image uploads

---

## 🚀 Features

* 🏠 **Rental Listings with Image Upload**: Add, view, and filter rental properties
* 🔍 **Smart Filters**: Narrow search results using criteria like location, price, and amenities
* 💬 **Discussion Boards**: Foster student community with post/comment functionality
* 👥 **User Profiles & Sessions**: Register, login, and persist session data securely in MongoDB
* 🎨 **Modern UI**: Responsive frontend with Bootstrap 5, MDB UI Kit, and custom CSS

---

## 🧱 Tech Stack

| Language   | Tools & Libraries                             | Infrastructure           |
| ---------- | --------------------------------------------- | ------------------------ |
| JavaScript | React, Bootstrap, MDB UI Kit, Express, Prisma | MongoDB Atlas            |
| HTML/CSS   | React Router, FontAwesome, Custom CSS         | Node.js, Express, GitHub |

---

## 🔍 Project Overview

UHOME is a student-exclusive housing portal developed for the University of Toronto Mississauga community. It streamlines the process of finding and offering local rentals while promoting community through its discussion board.

### 🧭 Key Modules

* **Listings**: Users can create listings with images, browse others, and apply filters.
* **Users**: Registration and profile management, with sessions stored in MongoDB Atlas.
* **Forum**: Each listing has a dedicated space for community discussion and Q\&A.
* **Upload System**: AWS S3 used for secure and scalable storage of listing images.

### 🧩 Backend Design

* RESTful API architecture built in **Node.js + Express**
* Modular controller/service pattern for maintainability
* ORM: **Prisma** used to model and query MongoDB (unconventional, but effective)
* Session management via **express-session** stored in MongoDB

### 💻 Frontend Design

* Single-page React app with modular routing
* State managed via Context API and `StateProvider`
* Responsive layout components: `NavBar`, `Footer`, `Layout`, `CreateListingPage`, `Profile`, `SearchPage`, `DiscussionBoard`

---

## 📸 Sample Components

* `frontend/src/pages/CreateListingPage.js`: Listing form UI
* `backend/src/controllers/listingController.js`: Handles listing creation and filtering
* `frontend/src/pages/DiscussionBoard.js`: Community board for rental discussion
* `frontend/src/layout/social.js`: FontAwesome integration for social buttons

---

## 🧠 What I Learned

* Mastered end-to-end integration of React frontend with a Node/Express backend
* Gained hands-on experience with **MongoDB**, **AWS S3**, and **Prisma ORM**
* Improved state management and routing in a React environment
* Worked effectively in a team of 6 following Agile methodology
* Used GitHub and version control to collaborate, track issues, and resolve merge conflicts

---

## 🏁 How to Run Locally

```bash
# clone the repo
git clone https://github.com/NGS-UTMCSC301-24W/web-app.git

# install backend dependencies
cd backend
npm install

# set up environment variables (MongoDB URI, AWS credentials, session secret)
cp .env.example .env
# fill in the required variables

# run backend server
npm run dev
```

```bash
# install frontend dependencies
cd ../frontend
npm install

# start the React app
npm start
```

---

## 🤝 Collaboration & Credits

This project was built by a team of 6 students as part of the **CSC301 – Introduction to Software Engineering** course at the **University of Toronto**.

* Agile development methodology
* Weekly check-ins and demos
* Individual and group-based evaluations
