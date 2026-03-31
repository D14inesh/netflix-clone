# Full-Stack Netflix Clone

A dynamic, full-stack Netflix clone built with React, Vite, Node.js, Express, and MongoDB. This application features a fully responsive UI, secure user authentication with Firebase, and a custom backend for serving dynamic movie and trailer data.


## 🚀 Features

*   **User Authentication:** Secure Sign Up, Log In, and Log Out functionality using Firebase Authentication (Email/Password).
*   **Database-Driven Content:** Movie metadata and trailer links are served from a custom MongoDB database via an Express backend API.
*   **Categorized Movie Rows:** Browse movies dynamically organized into categories such as:
    *   Now Playing
    *   Popular
    *   Top Rated
    *   Upcoming
*   **Dedicated Player Page:** Watch embedded YouTube trailers for selected movies in a dedicated, immersive player route.
*   **Responsive UI:** A sleek, Netflix-style user interface built with React and optimized for different screen sizes.
*   **Toast Notifications:** Real-time user feedback for actions like login/signup errors using `react-toastify`.
*   **Data Seeding:** Included utility script (`backend/seed.js`) to quickly populate your local MongoDB instance with initial movie and trailer data.

## 🛠️ Technology Stack

**Frontend:**
*   **Framework:** React 19 via Vite
*   **Routing:** React Router v7
*   **Authentication & Database:** Firebase (Auth & Firestore for user data)
*   **Styling:** Vanilla CSS (`index.css`)
*   **Notifications:** React Toastify

**Backend:**
*   **Runtime:** Node.js
*   **Framework:** Express.js
*   **Database & ORM:** MongoDB & Mongoose
*   **Utilities:** `dotenv` (Environment variables), `cors` (Cross-Origin Resource Sharing)

## 📁 Project Structure

```text
netflix-clone/
├── backend/                # Node.js Express server API
│   ├── models/             # Mongoose schemas (Movie, Trailer)
│   ├── seed.js             # Script to populate MongoDB with initial data
│   ├── server.js           # Express app entry point & API routes
│   └── ...                 # Local JS data seed files
├── public/                 # Static assets
└── src/                    # React frontend application
    ├── assets/             # Images, icons, and static Frontend assets
    ├── components/         # Reusable UI components (Navbar, Footer, TitleCards)
    ├── pages/              # Application pages (Home, Login, Player)
    ├── App.jsx             # Main application component & routing
    ├── firebase.js         # Firebase configuration and auth helper functions
    └── main.jsx            # React root entry point
```

## ⚙️ Installation and Setup

### Prerequisites
*   Node.js installed on your machine.
*   MongoDB installed and running locally, or a MongoDB Atlas connection string.
*   A Firebase project with Authentication (Email/Password) and Firestore Database enabled.

### 1. Clone the Repository
```bash
git clone <your-repository-url>
cd netflix-clone
```

### 2. Frontend Setup
Install frontend dependencies:
```bash
npm install
```
*(Note: Your Firebase configuration is located in `src/firebase.js`. You may want to update `firebaseConfig` with your own project credentials if you plan to deploy this).*

### 3. Backend Setup
Navigate to the backend directory and install dependencies:
```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory:
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/netflix_clone
```
*(Update `MONGO_URI` if your MongoDB setup differs or if you are using MongoDB Atlas).*

### 4. Seed the Database
Populate your MongoDB database with the initial movie and trailer data:
```bash
# Ensure you are still in the /backend directory
npm run seed
```
*(This will read data from the local JavaScript files in `backend/` and insert them into your MongoDB collections).*

### 5. Running the Application
You will need to run the frontend and backend servers concurrently.

**Start the Backend Server:**
Open a terminal, navigate to the `backend/` directory, and run:
```bash
npm start
```
*(Server will start, typically on port 5000).*

**Start the Frontend Development Server:**
Open a new terminal, navigate to the root directory `netflix-clone/`, and run:
```bash
npm run dev
```
*(This will start the Vite dev server).*

## 💡 Future Enhancements

*   **Search Functionality:** Allow users to search for specific movies or TV shows.
*   **My List / Watchlist:** Enable users to save favorite movies to their profile.
*   **Profile Management:** Add the ability for users to update their profile picture and username.
