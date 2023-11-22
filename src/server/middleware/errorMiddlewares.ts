import chalk from "chalk";
import { type NextFunction, type Request, type Response } from "express";
import CustomError from "../../CustomError/CustomError.js";
import createDebug from "debug";
const debug = createDebug("errorMiddlewares:database");

export const notFound = (_req: Request, res: Response, next: NextFunction) => {
  const expectedError = new CustomError("Endpoint not found", 404);

  next(expectedError);
};

export const generalError = (
  error: CustomError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const statusCode = error.statusCode ?? 500;
  const privateMessage = error.privateMessage ?? error.message;

  debug(chalk.red("Error: ", privateMessage));

  res.status(statusCode).json({ error: privateMessage });
};
