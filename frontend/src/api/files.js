import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api";

export const getFiles = async (subfolderId) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/folders/${subfolderId}/files`
    );
    return response.data; // Mengembalikan data file
  } catch (err) {
    console.error("Error fetching files:", err);
    throw err;
  }
};
