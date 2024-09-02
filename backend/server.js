import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import dotenvExpand from "dotenv-expand"

// Load and expand environment variables from .env file
const myEnv = dotenv.config()
dotenvExpand(myEnv)

console.log('Mongo URI:', process.env.MONGO_URI);

// Other imports and configurations
