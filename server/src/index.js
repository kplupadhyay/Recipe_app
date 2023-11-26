import express from "express"
import cors from "cors";
import mongoose from "mongoose"
import { userRouter } from "./routes/users.js";
import { recipesRouter } from "./routes/recipes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth" , userRouter);
app.use("/recipes" , recipesRouter)

mongoose.connect("mongodb+srv://upadhyaykapil61:7982540594@re-cipe.k5la3vq.mongodb.net/?retryWrites=true&w=majority").then(console.log("connected to database"));
 
app.listen(5000,()=>{
console.log(`serverr started`)
});


// 35:36 