// Set REACT_APP_BACKEND_URL in your .env file for production builds.
// Falls back to localhost for local development.
const server = process.env.REACT_APP_BACKEND_URL || "http://localhost:8000";

export default server;
