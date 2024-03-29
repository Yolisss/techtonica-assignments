import express from "express";
import cors from "cors";
import usersRouter from "./routes/users.js";
import eventsRouter from "./routes/events.js";
import bodyParser from "body-parser";

const app = express();
const PORT = 4000;

app.use(cors());

app.use(bodyParser.json());
app.use("/users", usersRouter);
app.use("/events", eventsRouter);

let mockUsers = [
  { id: 1, name: "Marlin", email: "marlin@gmail.com" },
  { id: 2, name: "Nemo", email: "nemo@gmail.com" },
  { id: 3, name: "Dory", email: "dory@gmail.com" },
];

// server/routes/users.mjs`
app.get("/", function (req, res, next) {
  console.log(req.body, "the body");
  res.json({ users: mockUsers });
});

app.listen(PORT, () => console.log(`Hola! Server is running on port ${PORT}`));
