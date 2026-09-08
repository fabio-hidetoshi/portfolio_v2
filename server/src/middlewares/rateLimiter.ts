import rateLimit from "express-rate-limit";

export const contactRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: { message: "Muitas tentativas. Tente novamente mais tarde.", code: "rate_limited" } },
});
