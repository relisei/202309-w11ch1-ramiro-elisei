import type { Request, Response } from "express";
import { notFound } from "./errorMiddleware";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Given the middleware notFound", () => {
  describe("When notfound is call with a Response as a parameter", () => {
    const request = {};
    const response: Pick<Response, "status" | "json"> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    test("Then it should call status with a 404 code", () => {
      const expectedCode = 404;

      notFound(request as Request, response as Response);

      expect(response.status).toHaveBeenCalledWith(expectedCode);
    });

    test("Then it should call json with message error: 'Endpoint not found'", () => {
      const expectedMessage = { error: "Endpoint not found" };

      notFound(request as Request, response as Response);

      expect(response.json).toHaveBeenCalledWith(expectedMessage);
    });
  });
});
