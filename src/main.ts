import express from "express";
import "reflect-metadata"
import "dotenv/config"
import { DataSource } from "typeorm";
import { AppDataSource } from "./core/data-source.js";
import { metadata } from "reflect-metadata/no-conflict";
const app = express();
await AppDataSource.initialize()
app.listen(3000, "0.0.0.0", ()=> console.log("server is listening"))