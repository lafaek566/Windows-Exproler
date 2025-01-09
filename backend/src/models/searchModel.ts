import db from "../config/db"; // Make sure your database connection is properly set up

// Function to search for items in folders, subfolders, and files
export const searchItems = async (query: string) => {
  // Search query for folders, subfolders, and files
  const sql = `
  SELECT * FROM folders WHERE name LIKE ? 
  UNION
  SELECT * FROM files WHERE name LIKE ?;
`;

  const [rows] = await db.query(sql, [
    `%${query}%`,
    `%${query}%`,
    `%${query}%`,
  ]);
  return rows;
};
