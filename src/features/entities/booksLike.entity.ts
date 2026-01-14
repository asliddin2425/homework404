import { BaseModel } from "../../core/base-entity.js";
import { Entity, Column, OneToMany } from "typeorm";

@Entity("booksLike")

export class BooksLike extends BaseModel{
    @Column({type: "int"})
    bookId: number;

    @Column({type: "int"})
    userId: number;

    // @OneToMany(() => BaseModel, entity => entity.id)
    // entities: BaseModel[];
}