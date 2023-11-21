import type { Request, Response } from "express";
import { type MechasRepository } from "../../repository/types";
import mechasMock from "../../mocks/mechasMock";
import MechasController from "../MechasController";

describe("Given the function getmechas in MechasController", () => {
  describe("When it is call with a Response as a parameter", () => {
    const mechasMockRepository: MechasRepository = {
      getMechas: jest.fn().mockReturnValue(mechasMock),
    };
    const req = {};
    const res: Pick<Response, "status" | "json"> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    test("then it should call status with 200 as a Code", async () => {
      const expectedCode = 200;
      const mechasController = new MechasController(mechasMockRepository);

      await mechasController.getMechas(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedCode);
    });

    test("then it should call json with Garada K7 and River F9", async () => {
      const expectedMessage = { mechas: mechasMock };
      const mechasController = new MechasController(mechasMockRepository);

      await mechasController.getMechas(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(expectedMessage);
    });
  });
});
