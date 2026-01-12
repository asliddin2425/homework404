// import { DataSource } from "typeorm";

// export const AppDataSource = new DataSource({
//     type: "postgres",
//     url: process.env.DB_URL,
//     synchronize: true,
//     logging: true, 
//     entities: ["dist/**/*.entity.js"],
// });










import { DataSource } from "typeorm";


export const AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.DB_URL,
    logging: true,
    synchronize: true,
    entities: ["dist/**/*.entity.js"]
})