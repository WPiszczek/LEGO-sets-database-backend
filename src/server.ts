import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";

import { parseItems } from "./utils";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

app.get("/", async (req: Request, res: Response) => {
  const items = await parseItems(path.resolve("./lego-sets.csv"));
  res.send(items);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
