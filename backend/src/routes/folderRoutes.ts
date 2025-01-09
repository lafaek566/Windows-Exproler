import express from "express";
import {
  getRootFoldersController,
  getSubfoldersByParentIdController,
} from "../controllers/folderController";

const router = express.Router();

// Route to get root folders
router.get("/folders", getRootFoldersController);

// Route to get subfolders by folder ID
router.get("/folders/:parentId/subfolders", getSubfoldersByParentIdController);

export default router;
