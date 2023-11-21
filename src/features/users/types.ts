import { type Request } from "express";

export interface UserStructure {
  _id: string;
  name: string;
  username: string;
  password: string;
}

export interface UserCredentials {
  username: string;
  password: string;
}

export type UserStructureWithoutPassword = Omit<UserStructure, "password">;

export type UserCredentialsRequest = Request<
  Record<string, unknown>,
  Record<string, unknown>,
  UserCredentials
>;
