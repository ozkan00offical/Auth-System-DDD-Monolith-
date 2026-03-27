import * as repo from "../../infrastructure/userRepo";
import { logger } from "../../../../shared/lib/logger";
import { ErrorException } from "../../../../shared/lib/error-exception";
import type { User } from "../../domain/types";

export const deleteUser = async (id: string): Promise<User> => {
  try {
    logger.info("User Delete: start");

    const user = await repo.findById(id);
    if (!user) throw ErrorException("User not found", 404, { id });

    const deletedUser = await repo.remove(id);
    logger.info("User Delete: success");

    return deletedUser;
  } catch (err) {
    logger.error("User Delete: error");
    throw err;
  }
};