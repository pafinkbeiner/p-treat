import * as express from "express";

import jwt from "jsonwebtoken"

const router = express.Router();

/* GET home page. */
router.get("/", async (req, res, next) => {
  res.json("pTreat API");
});

export default router;