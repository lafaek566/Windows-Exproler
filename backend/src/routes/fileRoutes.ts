import express from "express";
import { getFilesByFolderId } from "../controllers/fileController";

const router = express.Router();

// Route to get files by folder ID
router.get("/folders/:folderId/files", getFilesByFolderId);

export default router;
