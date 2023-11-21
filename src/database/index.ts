import chalk from "chalk";
import mongoose from "mongoose";

const mongodbUrl = process.env.MONGODB_URL;

export const connectToDataBase = async (mongodbUrl: string) => {
  try {
    await mongoose.connect(mongodbUrl);
    console.log(chalk.green("Connected to database"));
  } catch {
    console.log(chalk.red({ error: "Couldn't connect to database" }));
    process.exit(1);
  }
};

export default connectToDataBase;
