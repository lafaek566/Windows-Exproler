import db from "../config/db";

export const getSubfoldersByFolderId = async (folderId: number) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM subfolders WHERE folder_id = ?",
      [folderId],
      (err, results) => {
        if (err) return reject(err);
        resolve(results);
      }
    );
  });
};
