import {Column, Entity, ManyToOne, JoinColumn} from "typeorm";
import { Author } from "./author.entity.js";
import { BaseModel } from "../../core/base-entity.js";

@Entity("books")
export class Book extends BaseModel{
    @Column({length: 128})
    title: string;

    @Column({length: 128})
    image: string;

    @Column({type: "int"})
    price: number;

    @Column({type: "int"})
    discountPrice: number;

    @ManyToOne(() => Author, authors =>authors.books, {onDelete: "CASCADE"})
    @JoinColumn({name: "authorId"})
    authors: Author;

    @ManyToOne(() => BaseModel, entity => entity.id)
    @JoinColumn({name: "categoryId"})
    categories: BaseModel;

    @ManyToOne(() => BaseModel, entity => entity.id)
    @JoinColumn({name: "languageId"})
    languages: BaseModel;

    @ManyToOne(() => BaseModel, entity => entity.id)
    @JoinColumn({name: "userId"})
    users: BaseModel;

    @ManyToOne(() => BaseModel, entity => entity.id)
    @JoinColumn({name: "levelId"})
    levels: BaseModel;

}