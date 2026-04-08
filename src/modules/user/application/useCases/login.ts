import * as repo from "../../infrastructure/userRepo.ts";
import { logger } from "../../../../shared/lib/logger.ts";
import { verifyPassword } from "../../../../shared/lib/passwordHash.ts";
import { ErrorException } from "../../../../shared/lib/error-exception.ts";
import type { User } from "../../domain/types.ts";

export const loginUser = async (email: string, password: string): Promise<User> => {
  try {
    logger.info("User Login: start", { email });

    const user = await repo.findByEmail(email);
    if (!user) {
      throw ErrorException("Invalid email or password", 401, { email });
    }

    const isValidPassword = await verifyPassword(user.password, password);
    if (!isValidPassword) {
      throw ErrorException("Invalid email or password", 401, { email });
    }

    logger.info("User Login: success", { id: user.id });
    return user;
  } catch (err) {
    logger.error("User Login: error", { error: err });
    throw err;
  }
};