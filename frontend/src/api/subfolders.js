import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api";

export const getSubfolders = async (folderId) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/folders/${folderId}/subfolders`
    );
    return response.data; // Mengembalikan data subfolder
  } catch (err) {
    console.error("Error fetching subfolders:", err);
    throw err;
  }
};
