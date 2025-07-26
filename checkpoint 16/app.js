import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";

// Load env variables
dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());

// MongoDB connection
await mongoose.connect(process.env.MONGODB_URI)
console.log('Connected to MongoDB');

// Sample route
app.get("/", (req, res) => {
    res.send("API running in production mode 🚀");
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});
