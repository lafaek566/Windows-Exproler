import db from "../config/db";

// Define the type for the files (adjust based on your table schema)
interface File {
  id: number;
  name: string;
  folder_id: number;
  // Add other properties of the file as needed
}

// Function to fetch files by folder ID
export const getFilesByFolderId = async (folderId: number): Promise<File[]> => {
  const [rows] = await db.query("SELECT * FROM files WHERE folder_id = ?", [
    folderId,
  ]);

  return rows as File[]; // Make sure rows are returned with the correct type
};
