import mysql from "mysql2/promise"; // Use the promise version of mysql2
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

export default db;
