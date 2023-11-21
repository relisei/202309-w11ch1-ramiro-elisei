import "dotenv/config";
import express from "express";
import chalk from "chalk";

export const app = express();

app.disable("x-powered-by");

const port = process.env.PORT ?? 4000;

export const startServer = (port: number) => {
  app.listen(+port, () => {
    console.log(chalk.green(`Listening on http://localhost:${port}`));
  });
};

export default app;
