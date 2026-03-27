import * as repo from "../../infrastructure/userRepo";
import { logger } from "../../../../shared/lib/logger";
import { ErrorException } from "../../../../shared/lib/error-exception";
import type { User } from "../../domain/types";

export const findUserByEmail = async (email: string): Promise<User> => {
  try {
    logger.info("User FindByEmail: start");

    const user = await repo.findByEmail(email);
    if (!user) throw ErrorException("User not found", 404, { email });

    logger.info("User FindByEmail: success");
    return user;
  } catch (err) {
    logger.error("User FindByEmail: error");
    throw err;
  }
};