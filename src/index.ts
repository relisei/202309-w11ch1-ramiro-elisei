import chalk from "chalk";
import "./server/index.js";
import { startServer } from "./server/app.js";
import { connectToDataBase } from "./database/index.js";

const port = process.env.PORT ?? 4000;
if (!process.env.MONGODB_URL) {
  console.log(chalk.red("Missing MongoDB String"));
  process.exit();
}

const mongoUrl = process.env.MONGODB_URL;

await connectToDataBase(mongoUrl);
startServer(+port);
