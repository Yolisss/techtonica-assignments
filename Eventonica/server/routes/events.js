// server/routes/ users.mjs;
import express from "express";
const router = express.Router();
import db from "../db/db-connection.js";

/* GET users listing. */

router.get("/", async function (req, res, next) {
  try {
    const events = await db.any("SELECT * FROM events", [true]);
    res.send(events);
  } catch (e) {
    return res.status(400).json({ e });
  }
});
/* Add users listing. */
router.post("/", async (req, res) => {
  const events = {
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    date: req.body.date,
  };
  console.log(events);
  try {
    const createdUser = await db.one(
      "INSERT INTO users(name, email) VALUES($1, $2) RETURNING *",
      [events.name, events.email]
    );
    console.log(createdUser);
    res.send(createdUser);
  } catch (e) {
    return res.status(400).json({ e });
  }
});
/* Delete users listing. */

//Parameterized queries use placeholders instead of directly writing the
//values into the statements. Parameterized queries increase security and performance.

router.delete("/:id", async (req, res) => {
  // : acts as a placeholder
  const userId = req.params.id;
  try {
    await db.none("DELETE FROM users WHERE id=$1", [userId]);
    res.send({ status: "success" });
  } catch (e) {
    return res.status(400).json({ e });
  }
});

export default router;
