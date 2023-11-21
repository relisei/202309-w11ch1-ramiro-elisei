import { Router } from "express";
import UsersController from "../controller/UsersController.js";
import UserMongooseRepository from "../repository/UsersMongooseRepository.js";

const usersRouter = Router();

const usersRepository = new UserMongooseRepository();
const usersController = new UsersController(usersRepository);

usersRouter.post("/", usersController.loginUser);

export default usersRouter;
