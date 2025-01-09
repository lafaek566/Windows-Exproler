import type { Request, Response } from "express";
import { getRootFolders, getSubfoldersByParentId } from "../models/folderModel";

// Controller to fetch root folders
export const getRootFoldersController = async (req: Request, res: Response) => {
  try {
    const rootFolders = await getRootFolders();
    res.json(rootFolders); // Send the retrieved root folders as a response
  } catch (err) {
    console.error("Error fetching root folders:", err);
    res.status(500).send("Error fetching root folders");
  }
};

// Controller to fetch subfolders by parent_id
export const getSubfoldersByParentIdController = async (
  req: Request,
  res: Response
) => {
  const parentId = parseInt(req.params.parentId); // assuming parentId is in the URL params

  // Validate if parentId is a valid number
  if (isNaN(parentId)) {
    res.status(400).send("Invalid parent ID");
    return;
  }

  try {
    const subfolders = await getSubfoldersByParentId(parentId);
    res.json(subfolders); // Send the retrieved subfolders as a response
  } catch (err) {
    console.error("Error fetching subfolders:", err);
    res.status(500).send("Error fetching subfolders");
  }
};
