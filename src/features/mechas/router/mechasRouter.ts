import { Router } from "express";
import MechasController from "../controller/MechasController.js";
import MechasMongooseRepository from "../repository/MechasMongooseRepository.js";

const mechasRepository = new MechasMongooseRepository();
const mechasController = new MechasController(mechasRepository);
const mechasRouter = Router();

mechasRouter.get("/", mechasController.getMechas);

export default mechasRouter;
