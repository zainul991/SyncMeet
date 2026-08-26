# Video Conferencing App

A full-stack video conferencing web application (Zoom-style), built with React on the frontend and Node.js/Express + Socket.IO on the backend, with MongoDB for data storage.

## Features

- User registration and login (token-based auth)
- Create and join video meetings via a room code
- Real-time video/audio calling with WebRTC, coordinated through Socket.IO
- In-call chat messages
- Meeting history for logged-in users

## Tech Stack

**Frontend:** React, React Router, Material UI, Socket.IO client, Axios
**Backend:** Node.js, Express, Socket.IO, Mongoose (MongoDB), bcrypt

## Project Structure

```
.
├── backend/          # Express + Socket.IO API server
│   └── src/
│       ├── controllers/
│       ├── models/
│       └── routes/
└── frontend/          # React client
    └── src/
        ├── contexts/
        ├── pages/
        └── utils/
```

## Getting Started

### Prerequisites

- Node.js (v16+)
- A MongoDB database (local or a hosted instance such as MongoDB Atlas)

### 1. Clone the repo

```bash
git clone <your-repo-url>
cd <your-repo-name>
```

### 2. Backend setup

```bash
cd backend
npm install
cp .env.example .env
# Edit .env and set your own MONGO_URI
npm run dev
```

The backend runs on `http://localhost:8000` by default.

### 3. Frontend setup

In a separate terminal:

```bash
cd frontend
npm install
cp .env.example .env
# Edit .env if your backend runs somewhere other than localhost:8000
npm start
```

The frontend runs on `http://localhost:3000` by default.

## Environment Variables

**backend/.env**

| Variable    | Description                                   |
|-------------|------------------------------------------------|
| `PORT`      | Port for the backend server (default `8000`)   |
| `MONGO_URI` | MongoDB connection string                       |

**frontend/.env**

| Variable                | Description                                              |
|--------------------------|------------------------------------------------------------|
| `REACT_APP_BACKEND_URL`  | URL of the backend API (default `http://localhost:8000`)  |

> Never commit your `.env` files — they're already excluded via `.gitignore`.

## License

This project is licensed under the MIT License — see [LICENSE](LICENSE) for details.
