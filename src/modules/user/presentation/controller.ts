import type { Request, Response, NextFunction } from "express";
import type { CreateUserInput, UpdateUserInput } from "../domain/types.ts";
import * as userUseCases from "../application/index.ts";
import { createJWT } from "../../../shared/lib/jwt.ts";

const assertStringParam = (param: string | string[] | undefined, name: string): string => {
  if (!param || Array.isArray(param)) {
    throw new Error(`Invalid ${name} parameter`);
  }
  return param;
};

const JWT_ISSUER = "APP";
const JWT_AUDIENCE = "AUTH";

export const createUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const input: CreateUserInput = req.body;
    const user = await userUseCases.createUser(input);

    const token = await createJWT(
      { userId: user.id, email: user.email },
      JWT_ISSUER,
      JWT_AUDIENCE,
      "1h"
    );

    res.status(201).json({ user, token });
  } catch (err) {
    next(err);
  }
};

export const updateUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = assertStringParam(req.params.id, "id");
    const input: UpdateUserInput = req.body;
    const user = await userUseCases.updateUser(id, input);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

export const deleteUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = assertStringParam(req.params.id, "id");
    const user = await userUseCases.deleteUser(id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

export const loginController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email ve şifre gerekli" });
    }

    const user = await userUseCases.loginUser(email, password);

    const token = await createJWT(
      { userId: user.id, email: user.email },
      JWT_ISSUER,
      JWT_AUDIENCE,
      "1h"
    );

    res.status(200).json({ user: { id: user.id, email: user.email }, token });
  } catch (err) {
    next(err);
  }
};


export const findAllUsersController = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await userUseCases.findAllUsers();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};