import { RateLimiterMemory } from 'rate-limiter-flexible';
import type { Request, Response, NextFunction } from 'express';

const rateLimiter = new RateLimiterMemory({
  points: 6,
  duration: 5,
  blockDuration: 300
});

export const rateLimitMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const key = (req.headers['x-forwarded-for'] as string)?.split(',')[0] || req.ip || 'anonymous';

    const rateLimiterRes = await rateLimiter.consume(key);

    res.setHeader('X-RateLimit-Limit', 6);
    res.setHeader('X-RateLimit-Remaining', rateLimiterRes.remainingPoints);
    res.setHeader('X-RateLimit-Reset', Math.ceil(Date.now() / 1000 + rateLimiterRes.msBeforeNext / 1000));

    next();
  } catch (err) {
    if(err instanceof Error) {
        res.status(429).json({
            status: 429,
            error: 'Too Many Requests',
            message: 'Yavaşla dostum. Sunucu terliyor.',
        });
    }
  }
};
