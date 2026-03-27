import prisma from "../../../config/prisma";

import type {
  User,
  UserCreatePayload,
  UpdateUserInput
} from "../domain/types";

export const create = async (data: UserCreatePayload): Promise<User> => {
  return prisma.user.create({ data });
};

export const findById = async (id: string): Promise<User | null> => {
  return prisma.user.findUnique({
    where: { id }
  });
};

export const findByEmail = async (email: string): Promise<User | null> => {
  return prisma.user.findUnique({
    where: { email }
  });
};

export const findAll = async (): Promise<User[]> => {
  return prisma.user.findMany();
};

export const update = async (
  id: string,
  data: UpdateUserInput
): Promise<User> => {
  return prisma.user.update({
    where: { id },
    data
  });
};

export const remove = async (id: string): Promise<User> => {
  return prisma.user.delete({
    where: { id }
  });
};