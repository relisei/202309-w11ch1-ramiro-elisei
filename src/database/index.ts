import createDebug from "debug";
import chalk from "chalk";
import mongoose from "mongoose";

const debug = createDebug("mechas:database");

const mongodbUrl = process.env.MONGODB_URL;

export const connectToDataBase = async (mongodbUrl: string) => {
  try {
    await mongoose.connect(mongodbUrl);
    debug(chalk.green("Connected to database"));
  } catch {
    debug(chalk.red({ error: "Couldn't connect to database" }));
    process.exit(1);
  }
};

export default connectToDataBase;
