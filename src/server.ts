import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

import { addSet, deleteSet, getAllSets, updateSet } from "./services/sets";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.get("/sets", async (req: Request, res: Response) => {
  const offset = parseInt((req.query?.offset as string) ?? 0);
  const limit = parseInt((req.query?.limit as string) ?? 10);
  const name = (req.query?.name as string) ?? "";
  const items = await getAllSets(offset, limit, name);
  res.send(items);
});

app.post("/sets", async (req: Request, res: Response) => {
  try {
    await addSet(req.body);
    res.status(201).send("ok");
  } catch (err) {
    res.status(500).send(err);
  }
});

app.put("/sets/:id", async (req: Request, res: Response) => {
  try {
    await updateSet(req.params.id, req.body);
    res.status(200).send("ok");
  } catch (err) {
    res.status(500).send(err);
  }
});

app.delete("/sets/:id", async (req: Request, res: Response) => {
  try {
    await deleteSet(req.params.id);
    res.status(200).send("ok");
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
