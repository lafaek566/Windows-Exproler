import type { Request, Response } from "express";
import * as FileModel from "../models/fileModel";

// Controller to fetch files by folderId
export const getFilesByFolderId = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { folderId } = req.params; // Use folderId here, since it's defined in the route

  // Validate if folderId is a valid number
  if (!folderId || isNaN(Number(folderId))) {
    res.status(400).send("Invalid folder ID");
    return;
  }

  try {
    const files = await FileModel.getFilesByFolderId(Number(folderId)); // Pass folderId as a number
    res.json(files);
  } catch (error) {
    console.error(error); // Log for debugging purposes
    res.status(500).send("Error fetching files");
  }
};
