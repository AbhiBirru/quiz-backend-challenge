import express from "express";
import cors from "cors";
import { data } from "./questions-data.js";

const app = express();
const port = 5000;

app.use(cors());

app.use(express.json());

// Define the /api/questions endpoint
app.get("/api/questions", (req, res) => {
  res.status(200).json({
    status: "success",
    data,
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
