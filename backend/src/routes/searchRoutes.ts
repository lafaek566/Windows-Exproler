import { Router } from "express";
import { searchController } from "../controllers/searchController";

const router = Router();

// Route to handle search
router.get("/search", searchController);

export default router;
