import * as repo from "../../infrastructure/userRepo";
import { logger } from "../../../../shared/lib/logger";
import { hashPassword } from "../../../../shared/lib/passwordHash";
import { ErrorException } from "../../../../shared/lib/error-exception";
import type { CreateUserInput, User } from "../../domain/types";

export const createUser = async (input: CreateUserInput): Promise<User> => {
  try {
    logger.info("User Create: start");

    const exists = await repo.findByEmail(input.email);
    if (exists) throw ErrorException("User already exists", 409, { email: input.email });

    const hashedPassword = await hashPassword(input.name);

    const user = await repo.create({
      ...input,
      role: "USER",
      active: true,
      password: hashedPassword,
    });

    logger.info("User Create: success", { id: user.id });
    return user;
  } catch (err) {
    logger.error("User Create: error", { error: err });
    throw err;
  }
};