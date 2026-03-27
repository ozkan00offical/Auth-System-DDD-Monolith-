import type { Request, Response, NextFunction } from "express";
import type { CreateUserInput, UpdateUserInput } from "../domain/types";
import * as userUseCases from "../application/index";

const assertStringParam = (param: string | string[] | undefined, name: string): string => {
  if (!param || Array.isArray(param)) {
    throw new Error(`Invalid ${name} parameter`);
  }
  return param;
};

export const createUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const input: CreateUserInput = req.body;
    const user = await userUseCases.createUser(input);
    res.status(201).json(user);
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

export const findUserByEmailController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const email = assertStringParam(req.params.email, "email");
    const user = await userUseCases.findUserByEmail(email);
    res.status(200).json(user);
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