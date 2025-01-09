import type { Request, Response } from "express";
import { getSubfoldersByFolderId } from "../src/models/subfolder";

export const fetchSubfolders = async (req: Request, res: Response) => {
  const folderId = parseInt(req.params.folderId, 10);
  try {
    const subfolders = await getSubfoldersByFolderId(folderId);
    res.json(subfolders);
  } catch (err) {
    console.error("Error fetching subfolders:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
