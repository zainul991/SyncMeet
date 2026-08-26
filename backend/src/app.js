import express from "express";
import { createServer } from "node:http";

import { Server } from "socket.io";

import mongoose from "mongoose";
import "dotenv/config";
import { connectToSocket } from "./controllers/socketManager.js";

import cors from "cors";
import userRoutes from "./routes/users.routes.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

const PORT = process.env.PORT || 8000;
const MONGO_URI = process.env.MONGO_URI;

app.set("port", PORT)
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use("/api/v1/users", userRoutes);

const start = async () => {
    if (!MONGO_URI) {
        console.error("MONGO_URI is not defined. Please set it in your .env file.");
        process.exit(1);
    }

    const connectionDb = await mongoose.connect(MONGO_URI)

    console.log(`MONGO connected: ${connectionDb.connection.host}`)
    server.listen(app.get("port"), () => {
        console.log(`Listening on port ${PORT}`)
    });



}



start();