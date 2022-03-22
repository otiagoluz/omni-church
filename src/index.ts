import express from "express";
import routes from "./routes";
import './database';
import * as dotenv from "dotenv";
import cors from "cors";

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}
const PORT = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(cors({
  origin: 'http://localhost:4200'
}));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});

app.use(express.json());
app.use(routes);

app.listen(PORT); 