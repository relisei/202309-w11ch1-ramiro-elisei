export interface UserStructure {
  _id: string;
  name: string;
  username: string;
  password: string;
}

export type UserStructureWithoutPassword = Omit<UserStructure, "password">;
