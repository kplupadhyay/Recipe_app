import express from "express"
import cors from "cors";
import mongoose from "mongoose"
import { userRouter } from "./routes/users.js";
import { recipesRouter } from "./routes/recipes.js";
import 'dotenv/config.js';

const app = express();
const MONGO_URL = process.env.MONGO_URL;

app.use(express.json());
app.use(cors());

app.use("/auth" , userRouter);
app.use("/recipes" , recipesRouter);

mongoose.connect(MONGO_URL).then(console.log("connected to database"));

app.listen(5000,()=>{
console.log(`serverr started`);
});

