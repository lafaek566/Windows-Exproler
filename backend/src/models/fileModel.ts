import db from "../config/db";

export const getFilesBySubfolderId = async (subfolderId: number) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM files WHERE subfolder_id = ?",
      [subfolderId],
      (err, results) => {
        if (err) return reject(err);
        resolve(results);
      }
    );
  });
};
