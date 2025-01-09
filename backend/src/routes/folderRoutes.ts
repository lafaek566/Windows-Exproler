import { Router } from "express";
import { fetchFolders } from "../controllers/folderController";

const router = Router();

router.get("/folders", fetchFolders);

export default router;
