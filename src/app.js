import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

const app = express();

// Security
app.use(helmet());

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging
app.use(morgan("dev"));

// Health Check
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Nova Elite Charity Platform API Running",
  });
});

export default app;