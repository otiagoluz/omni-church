import express from "express";
import routes from "./routes";
import './database';
import * as dotenv from "dotenv";

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}
const PORT = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(express.json());
app.use(routes);

app.listen(PORT); 