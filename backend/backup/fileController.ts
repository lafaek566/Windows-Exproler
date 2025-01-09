import type { Request, Response } from "express";
import { getFilesBySubfolderId } from "../src/models/fileModel";

export const fetchFiles = async (req: Request, res: Response) => {
  const subfolderId = parseInt(req.params.subfolderId, 10);
  try {
    const files = await getFilesBySubfolderId(subfolderId);
    res.json(files);
  } catch (err) {
    console.error("Error fetching files:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
