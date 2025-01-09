import type { Request, Response } from "express";
import { getFolders } from "../models/folderModel";
import { getSubfoldersByFolderId } from "../models/subfolder";
import { getFilesBySubfolderId } from "../models/fileModel";

export const fetchFolders = async (req: Request, res: Response) => {
  try {
    // Fetch folders
    const folders = await getFolders();

    // Add subfolders and files to each folder
    for (const folder of folders) {
      const subfolders = await getSubfoldersByFolderId(folder.id);

      for (const subfolder of subfolders) {
        const files = await getFilesBySubfolderId(subfolder.id);
        subfolder.files = files;
      }

      folder.subfolders = subfolders;
    }

    res.json(folders);
  } catch (err) {
    console.error("Error fetching folders:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
