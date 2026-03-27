import { SignJWT, jwtVerify } from "jose"
import type { JWTPayload } from 'jose'

const alg = "HS256"

const getSecret = (): Uint8Array => {
  const secret = process.env.JWT_SECRET
  if (!secret) {
    throw new Error("JWT_SECRET is not defined")
  }
  return new TextEncoder().encode(secret)
}

export type GenericJWTPayload<T extends object = {}> = JWTPayload & T

export const createJWT = async <T extends object>(
  payload: T,
  issuer: string,
  audience: string,
  expiresIn: string = "1h"
): Promise<string> => {
  return new SignJWT(payload as JWTPayload)
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setIssuer(issuer)
    .setAudience(audience)
    .setExpirationTime(expiresIn)
    .sign(getSecret())
}

export const verifyJWT = async <T extends object>(
  token: string,
  issuer: string,
  audience: string
): Promise<GenericJWTPayload<T>> => {
  const { payload } = await jwtVerify(token, getSecret(), {
    issuer,
    audience
  })

  return payload as GenericJWTPayload<T>
}
