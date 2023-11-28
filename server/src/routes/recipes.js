import express from "express"
import mongoose from "mongoose"

import { RecipeModel } from "../Models/Recipes.js";
import { userModel } from "../Models/User.js";

const router = express.Router();

router.get("/" , async (req,res)=>{
    try{
        const response = await RecipeModel.find({});
        res.json(response)
    }catch(err){
        return res.json(err)
    }
})

router.post("/" , async (req,res)=>{
    const recipe = new RecipeModel(req.body);
    try{
        const response = await recipe.save()
        res.json(response)
    }catch(err){
        return res.json(err)
    }
})


router.put("/" , async (req,res)=>{
    // {userID , recipeID};
   
    try{
        const recipe = await RecipeModel.findById(req.body.recipeID)
        const user = await userModel.findById(req.body.userID)
        const response = await recipe.save()
        user.savedRecipes.push(recipe);
        await user.save()
        res.json({savedRecipes:user.savedRecipes})
    }catch(err){
        return res.json(err)
    }
})


export {router as recipesRouter}
