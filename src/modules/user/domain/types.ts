export type Role = "USER" | "ADMIN" | "MODERATOR";

export type User = {
  id: string;

  name: string;
  email: string;
  tell: string;
  password: string;

  role: Role;
  active: boolean;

  createdAt: Date;
  updatedAt: Date;
};

export type CreateUserInput = {
  name: string;
  email: string;
  tell: string;
  password: string;
};

export type UserCreatePayload = {
  name: string;
  email: string;
  tell: string;
  password: string;

  role?: Role;
  active?: boolean;
};

export type UpdateUserInput = Partial<{
  name: string;
  email: string;
  tell: string;
  password: string;
  role: Role;
  active: boolean;
}>;