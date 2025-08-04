import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";
import "dotenv/config";

const Ratelimit = new Ratelimit({
  redis: Ratelimit.fromEnv(),
  limiter: Ratelimit.slidingWindow(100, "60 s"),
});

export default Ratelimit;
