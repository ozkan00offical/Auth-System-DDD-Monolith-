import winston from "winston"

const { combine, timestamp, printf, errors, json, colorize } = winston.format

const isProd = process.env.NODE_ENV === "production"

const redactSecrets = winston.format((info) => {
  const forbiddenKeys = ["password", "token", "secret", "authorization"]

  for (const key of forbiddenKeys) {
    if (info[key]) {
      info[key] = "[REDACTED]"
    }
  }

  return info
})

const devFormat = combine(
  colorize(),
  timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  errors({ stack: true }),
  redactSecrets(),
  printf(({ level, message, timestamp, stack, ...meta }) => {
    return [
      `${timestamp} [${level}] ${message}`,
      stack ? `\n${stack}` : "",
      Object.keys(meta).length ? `\nMETA: ${JSON.stringify(meta, null, 2)}` : ""
    ].join("")
  })
)

const prodFormat = combine(
  timestamp(),
  errors({ stack: true }),
  redactSecrets(),
  json()
)

export const logger = winston.createLogger({
  level: isProd ? "info" : "debug",
  format: isProd ? prodFormat : devFormat,
  transports: [
    new winston.transports.Console(),

    ...(isProd
      ? [
          new winston.transports.File({
            filename: "logs/error.log",
            level: "error"
          }),
          new winston.transports.File({
            filename: "logs/combined.log"
          })
        ]
      : [])
  ],
  exitOnError: false
})
