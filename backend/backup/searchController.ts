// import type { Request, Response } from "express";
// import { searchItems } from "../models/searchModel";

// // Controller to handle search requests
// export const searchController = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   const query = req.query.query as string;

//   if (!query) {
//     res.status(400).send("Search query is required.");
//     return;
//   }

//   try {
//     const results = await searchItems(query);
//     res.json(results);
//   } catch (error) {
//     console.error("Error during search:", error);
//     res.status(500).send("Error processing search request.");
//   }
// };
