import bcrypt from "bcrypt";
import { type UserStructure } from "../types";
import { type UsersRepository } from "./types";
import User from "../model/User.js";

class UserMongooseRepository implements UsersRepository {
  public async getUser(
    username: string,
    password: string,
  ): Promise<UserStructure> {
    try {
      const user = await User.findOne({ username });

      if (!user) {
        throw new Error("Username not found");
      }

      if (!(await bcrypt.compare(password, user.password))) {
        throw new Error("Wrong password");
      }

      return user;
    } catch (error) {
      throw new Error("Error on creating user: " + (error as Error).message);
    }
  }
}

export default UserMongooseRepository;
