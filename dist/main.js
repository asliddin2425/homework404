import express from "express";
import "reflect-metadata";
import "dotenv/config";
import { AppDataSource } from "./core/data-source.js";
const app = express();
await AppDataSource.initialize();
app.listen(3000, "0.0.0.0", () => console.log("server is listening"));
