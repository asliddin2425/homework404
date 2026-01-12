import {Column, Entity } from "typeorm";
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

    // @Column({})


}