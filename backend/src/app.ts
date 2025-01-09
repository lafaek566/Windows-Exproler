import express from "express";
import bodyParser from "body-parser";
import folderRoutes from "./routes/folderRoutes";
import fileRoutes from "./routes/fileRoutes";
import cors from "cors";
import searchRoutes from "./routes/searchRoutes"; // Import searchRoutes

const app = express();
app.use(cors());

// Middleware
app.use(bodyParser.json());

// Use the routes
app.use("/api", folderRoutes); // Folder routes
app.use("/api", fileRoutes); // File routes
app.use("/api", searchRoutes); // Add search routes

// Start server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

export default app;
