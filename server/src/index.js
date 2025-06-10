import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express()

const port = process.env.PORT || 3001
app.use(express.json());
app.use(cors());
// Add DB 
app.listen(port, () => console.log("SERVER STARTED"));