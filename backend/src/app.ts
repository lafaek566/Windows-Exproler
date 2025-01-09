import express from "express";
import cors from "cors"; // Import the CORS package
import folderRoutes from "./routes/folderRoutes";
import subfolderRoutes from "../backup/subfolderRoutes";
import fileRoutes from "../backup/fileRoutes";

const app = express();

// Enable CORS for all origins (or specify your frontend origin)
app.use(cors({ origin: "http://localhost:5173" })); // Only allow frontend to access the backend

// Middleware to parse JSON
app.use(express.json());

// Use routes
app.use("/api", folderRoutes);
app.use("/api", subfolderRoutes);
app.use("/api", fileRoutes);

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
