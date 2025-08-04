import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

const redis = new Redis({
  redis: Redis.fromEnv(),
  limiter: Ratelimit(),
});
