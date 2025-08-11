// import express from "express";
// import dotenv from "dotenv";
// import { initDB } from "./config/db.js";
// import rateLimiter from "./middleware/rateLimiter.js";

// import transactionsRoute from "./routes/transactionsRoute.js";
// import job from "./config/cron.js";

// dotenv.config();

// const app = express();

// if (process.env.NODE_ENV === "production") job.start();

// // middleware
// app.use(rateLimiter);
// app.use(express.json());

// // our custom simple middleware
// // app.use((req, res, next) => {
// //   console.log("Hey we hit a req, the method is", req.method);
// //   next();
// // });

// const PORT = process.env.PORT || 5001;

// app.get("/api/health", (req, res) => {
//   res.status(200).json({ status: "ok" });
// });

// app.use("/api/transactions", transactionsRoute);

// initDB().then(() => {
//   app.listen(PORT, () => {
//     console.log("Server is up and running on PORT:", PORT);
//   });
// });
import express from "express";
import dotenv from "dotenv";
import { initDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import transactionsRoute from "./routes/transactionsRoute.js";
import job from "./config/cron.js"; // cron job, started only in production

dotenv.config();

const app = express();

// Start cron only in production (you already had this — kept)
if (process.env.NODE_ENV === "production") {
  try {
    job.start();
    console.log("Cron job started (production).");
  } catch (err) {
    console.warn("Failed to start cron job:", err);
  }
}

// Dev logging of requests (helpful while debugging)
if (process.env.NODE_ENV !== "production") {
  app.use((req, res, next) => {
    console.log(`[DEV LOG] ${req.method} ${req.path} - body:`, req.body);
    next();
  });
}

// middlewares
app.use(express.json());

// apply rate limiter but allow health check
app.use((req, res, next) => {
  if (req.path === "/api/health") return next();
  return rateLimiter(req, res, next);
});

// health route
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// routes
app.use("/api/transactions", transactionsRoute);

// 404 JSON fallback for unknown routes (important)
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// generic error handler
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ message: "Internal server error" });
});

const PORT = process.env.PORT || 5001;

// Initialize DB then start server
initDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server is up and running on PORT:", PORT);
    });
  })
  .catch((err) => {
    console.error("Failed to initialize DB:", err);
    process.exit(1);
  });
