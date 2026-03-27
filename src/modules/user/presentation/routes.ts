import { Router } from "express";
import {
  createUserController,
  updateUserController,
  deleteUserController,
  findUserByEmailController,
  findAllUsersController
} from "./controller";

const userRouter = Router();

userRouter.post("/", createUserController);
userRouter.put("/:id", updateUserController);
userRouter.delete("/:id", deleteUserController);
userRouter.get("/email/:email", findUserByEmailController);
userRouter.get("/", findAllUsersController);

export default userRouter;