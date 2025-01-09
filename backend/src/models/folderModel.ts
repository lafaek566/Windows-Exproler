import db from "../config/db";

// Get all root folders (parent_id IS NULL)
export const getRootFolders = async () => {
  const [rows] = await db.query(
    "SELECT * FROM folders WHERE parent_id IS NULL"
  );
  return rows;
};

// Get subfolders by parent_id
export const getSubfoldersByParentId = async (parentId: number) => {
  const [rows] = await db.query("SELECT * FROM folders WHERE parent_id = ?", [
    parentId,
  ]);
  return rows;
};
