import { type Request, type Response } from "express";

export const notFound = (_req: Request, res: Response) => {
  res.status(404).json({ error: "Endpoint not found" });
};
