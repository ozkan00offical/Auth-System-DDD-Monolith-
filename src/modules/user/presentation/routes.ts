import { Router } from "express";
import {
  createUserController,
  updateUserController,
  deleteUserController,
  findAllUsersController,
  loginController
} from "./controller.ts";

const userRouter = Router();

userRouter.post("/", createUserController);
userRouter.post("/login", loginController)
userRouter.put("/:id", updateUserController);
userRouter.delete("/:id", deleteUserController);
userRouter.get("/", findAllUsersController);

export default userRouter;