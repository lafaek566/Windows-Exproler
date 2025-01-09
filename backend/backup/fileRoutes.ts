import { Router } from "express";
import { fetchFiles } from "./fileController";

const router = Router();

router.get("/subfolders/:subfolderId/files", fetchFiles);

export default router;
