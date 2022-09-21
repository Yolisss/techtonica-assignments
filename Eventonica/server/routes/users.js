// server/routes/ users.mjs;
import express from "express";
const router = express.Router();
import db from "../db/db-connection.js";

/* GET users listing. */

router.get("/", async function (req, res, next) {
  try {
    const users = await db.any("SELECT * FROM users", [true]);
    res.send(users);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

/* post request goes here */

/* delete request goes here  */

export default router;
