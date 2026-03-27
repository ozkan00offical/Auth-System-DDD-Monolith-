import * as repo from "../../infrastructure/userRepo";
import { logger } from "../../../../shared/lib/logger";
import { hashPassword } from "../../../../shared/lib/passwordHash";
import { ErrorException } from "../../../../shared/lib/error-exception";
import type { UpdateUserInput, User } from "../../domain/types";

export const updateUser = async (id: string, input: UpdateUserInput): Promise<User> => {
  try {
    logger.info("User Update: start");

    const user = await repo.findById(id);
    if (!user) throw ErrorException("User not found", 404);

    if (input.password) {
      input.password = await hashPassword(input.password);
    }

    const updatedUser = await repo.update(id, input);
    logger.info("User Update: success");

    return updatedUser;
  } catch (err) {
    logger.error("User Update: error");
    throw err;
  }
};