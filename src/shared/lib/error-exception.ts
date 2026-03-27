import { logger } from "./logger.js"

export const ErrorException = (message: string, code: number, cause?: unknown) => {
  const error = new Error(message)

  Object.defineProperties(error, {
    name: { value: "AppError" },
    type: { value: "AppError" },
    code: { value: code },
    cause: { value: cause }
  })

  logger.error(message, {
    code,
    stack: error.stack,
    cause
  })

  return error
}
