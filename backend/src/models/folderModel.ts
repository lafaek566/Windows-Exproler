import db from "../config/db";

// Get folders
export const getFolders = async () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM folders", (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

// Get subfolders by folder ID
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

// Get files by subfolder ID
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
