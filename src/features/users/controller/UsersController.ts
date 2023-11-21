import { type Request, type Response } from "express";
import { type UsersRepository } from "../repository/types";
import { type UserCredentialsRequest } from "../types";
import { type JwtPayload } from "jsonwebtoken";
import jwt from "jsonwebtoken";

class UserController {
  constructor(private readonly usersRepository: UsersRepository) {}
  loginUser = async (req: UserCredentialsRequest, res: Response) => {
    const { username, password } = req.body;

    try {
      const user = await this.usersRepository.getUser(username, password);

      const userData: JwtPayload = {
        sub: user._id,
        name: user.name,
      };

      const token = jwt.sign(userData, process.env.JWT_SECRET_KEY!, {
        expiresIn: "1d",
      });

      res.status(200).json({ token });
    } catch (error) {
      res.status(401).json({ error: "Wrong credentials" });
    }
  };
}

export default UserController;
