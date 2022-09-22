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
    id: req.body.id,
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    date: req.body.date,
  };
  console.log(events);

  try {
    const createdEvents = await db.one(
      "INSERT INTO users(name, id, date, description, category) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [events.name, events.id, events.date, events.description, events.category]
    );
    console.log(req.body);
    res.send(createdEvents);
  } catch (e) {
    return res.status(400).json({ e });
  }
});
/* Delete users listing. */

//Parameterized queries use placeholders instead of directly writing the
//values into the statements. Parameterized queries increase security and performance.

router.delete("/:id", async (req, res) => {
  // : acts as a placeholder
  const eventsId = req.params.id;
  try {
    await db.none("DELETE FROM users WHERE id=$1", [eventsId]);
    res.send({ status: "success" });
  } catch (e) {
    return res.status(400).json({ e });
  }
});

export default router;
