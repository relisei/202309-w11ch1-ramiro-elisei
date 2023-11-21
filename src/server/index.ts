import morgan from "morgan";
import express from "express";
import { app } from "./app.js";
import pingRouter from "../features/ping/router/pingRouter.js";
import mechasRouter from "../features/mechas/router/mechasRouter.js";
import cors from "cors";
import { corsOptions } from "./utils/cords.js";
import usersRouter from "../features/users/router/usersRouter.js";

app.use(morgan("dev"));
app.use(cors(corsOptions));
app.use(express.json());
app.use("/mechas", mechasRouter);
app.use("/login", usersRouter);
app.get("/", pingRouter);
