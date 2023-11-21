import { type UserStructureWithoutPassword } from "../types";

export interface UsersRepository {
  getUser(
    username: string,
    password: string,
  ): Promise<UserStructureWithoutPassword>;
}
