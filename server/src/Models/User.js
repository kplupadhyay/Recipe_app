import mongoose, { Mongoose } from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String , required:true , unique : true },
    password:{type:String , required:true },
    savedRecipes:[{type:mongoose.Schema.Types.ObjectID , ref:"recipes"}]
})

 export const userModel = mongoose.model("users" , userSchema);

