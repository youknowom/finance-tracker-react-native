// // import express from "express";
// // import {
// //   createTransaction,
// //   deleteTransaction,
// //   getSummaryByUserId,
// //   getTransactionsByUserId,
// // } from "../controllers/transactionsController.js";

// // const router = express.Router();

// // router.get("/summary/:userId", getSummaryByUserId);
// // router.get("/:userId", getTransactionsByUserId);
// // router.post("/", createTransaction);
// // router.delete("/:id", deleteTransaction);

// // export default router;
// import express from "express";
// import {
//   createTransaction,
//   deleteTransaction,
//   getSummaryByUserId,
//   getTransactionsByUserId,
// } from "../controllers/transactionsController.js";

// const router = express.Router();

// // Place the more specific route first
// router.get("/summary/:userId", getSummaryByUserId);
// router.get("/:userId", getTransactionsByUserId);
// router.post("/", createTransaction);
// router.delete("/:id", deleteTransaction);

// export default router;
import express from "express";
import {
  createTransaction,
  deleteTransaction,
  getSummaryByUserId,
  getTransactionsByUserId,
} from "../controllers/transactionsController.js";

const router = express.Router();

// Specific routes first
router.get("/summary/:userId", getSummaryByUserId);
router.get("/:userId", getTransactionsByUserId);

// CRUD
router.post("/", createTransaction);
router.delete("/:id", deleteTransaction);

export default router;
