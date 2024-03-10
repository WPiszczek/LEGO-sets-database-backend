import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

import { parseItems } from "./utils";
import { getAllSets } from "./services/sets";
import config from "./config";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

app.use(cors());

app.get("/sets", async (req: Request, res: Response) => {
  const offset = parseInt((req.query?.offset as string) ?? 0);
  const limit = parseInt((req.query?.limit as string) ?? 10);
  const items = await getAllSets(offset, limit);
  res.send(items);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
