import { Author } from "../features/entities/author.entity.js";
import { Category } from "../features/entities/categories.entity.js";
import { BooksLike } from "../features/entities/booksLike.entity.js";
import { DataSource } from "typeorm";
import { Level } from "../features/entities/levels.entity.js";
import { Language } from "../features/entities/languages.entity.js";
export const AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.DB_URL,
    logging: true,
    synchronize: true,
    // entities: ["dist/**/*.entity.js"]
    entities: [Author, Category, BooksLike, Level, Language],
});
