import { type Request, type Response } from "express";
import { type MechasRepository } from "../repository/types";

class MechasController {
  constructor(private readonly mechasRepository: MechasRepository) {}

  getMechas = async (_req: Request, res: Response) => {
    const mechas = await this.mechasRepository.getMechas();

    res.status(200).json({ mechas });
  };
}

export default MechasController;
