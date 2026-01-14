import { BaseModel} from "../../core/base-entity.js";
import {Entity, Column, OneToMany} from "typeorm"
import { Book } from "./book.entity.js";
@Entity("authors")
export class Author extends BaseModel{
    @Column({length: 32})
    name: string;

    @OneToMany(() => Book, book => book.authors)
    books: Book[]
}