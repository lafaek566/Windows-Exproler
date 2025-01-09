import { Router } from "express";
import { fetchSubfolders } from "./subfolderController";

const router = Router();

router.get("/folders/:folderId/subfolders", fetchSubfolders);

export default router;
