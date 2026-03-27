import argon2 from "argon2"

const ARGON2_OPTIONS = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 3,
  parallelism: 1,
}

export const hashPassword = async (password: string): Promise<string> => {
  if (!password || password.length < 8) {
    throw new Error("Password must be at least 8 characters")
  }

  return argon2.hash(password, ARGON2_OPTIONS)
}

export const verifyPassword = async (hashedPassword: string, plainPassword: string): Promise<boolean> => {
  if (!hashedPassword || !plainPassword) return false

  try {
    return await argon2.verify(hashedPassword, plainPassword)
  } catch {
    return false
  }
}
