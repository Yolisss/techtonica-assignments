import express from "express";
import cors from "cors";

const app = express();
const PORT = 8084;

app.use(cors());

app.listen(PORT, () =>
  console.log(`HOLA, Server is running on port http://localhost:${PORT}`)
);
