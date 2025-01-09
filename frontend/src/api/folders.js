import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api";

export const getFolders = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/folders`);
    return response.data; // Mengembalikan data folder
  } catch (err) {
    console.error("Error fetching folders:", err);
    throw err; // Menangani error
  }
};
