import { type Response, type Request } from "express";
import { type UserCredentialsRequest, UserStructure } from "../types";
import { type UsersRepository } from "../repository/types";
import UserController from "./UsersController";
import jwt from "jsonwebtoken";

beforeAll(() => {
  jest.clearAllMocks();
});

describe("Given a login userController", () => {
  const UserCredentialMock = {
    username: "Julieta",
    password: "elisei",
  };

  const UserCredentialiDMock = {
    _id: "123456789",
    username: "Julieta",
    password: "elisei",
  };

  const req: Pick<UserCredentialsRequest, "body"> = {
    body: UserCredentialMock,
  };

  const res: Pick<Response, "status" | "json"> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn().mockReturnThis(),
  };

  describe("When it is invoque with a valid credential response", () => {
    const token = "token";

    const userRepository: UsersRepository = {
      getUser: jest.fn().mockResolvedValue(UserCredentialiDMock),
    };
    const userController = new UserController(userRepository);
    jwt.sign = jest.fn().mockReturnValue(token);

    test("Then it should call the response's method status with a 200", async () => {
      const expectedStatus = 200;

      await userController.loginUser(
        req as UserCredentialsRequest,
        res as Response,
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
    });

    test("Then it should call the response method json with token", async () => {
      await userController.loginUser(
        req as UserCredentialsRequest,
        res as Response,
      );

      expect(res.json).toHaveBeenCalledWith({ token });
    });
  });

  describe("When it is receive a invalid password and username response", () => {
    const token = "token";
    const expectedWrongStatusCode = 401;

    const userRepository: UsersRepository = {
      getUser: jest.fn().mockRejectedValue("error"),
    };
    const userController = new UserController(userRepository);
    jwt.sign = jest.fn().mockReturnValue(token);

    test("Then it should handle a login error and return a 401 status", async () => {
      await userController.loginUser(
        req as UserCredentialsRequest,
        res as Response,
      );

      expect(res.status).toHaveBeenCalledWith(expectedWrongStatusCode);
    });

    test("Then it should call the json method of the response with an error message", async () => {
      const expectedErrorMessage = { error: "Wrong credentials" };

      await userController.loginUser(
        req as UserCredentialsRequest,
        res as Response,
      );

      expect(res.json).toHaveBeenCalledWith(expectedErrorMessage);
    });
  });
});
