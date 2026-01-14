var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Column, Entity, ManyToOne, JoinColumn } from "typeorm";
import { Author } from "./author.entity.js";
import { BaseModel } from "../../core/base-entity.js";
let Book = class Book extends BaseModel {
    title;
    image;
    price;
    discountPrice;
    authors;
    categories;
    languages;
    users;
    levels;
};
__decorate([
    Column({ length: 128 }),
    __metadata("design:type", String)
], Book.prototype, "title", void 0);
__decorate([
    Column({ length: 128 }),
    __metadata("design:type", String)
], Book.prototype, "image", void 0);
__decorate([
    Column({ type: "int" }),
    __metadata("design:type", Number)
], Book.prototype, "price", void 0);
__decorate([
    Column({ type: "int" }),
    __metadata("design:type", Number)
], Book.prototype, "discountPrice", void 0);
__decorate([
    ManyToOne(() => Author, authors => authors.books, { onDelete: "CASCADE" }),
    JoinColumn({ name: "authorId" }),
    __metadata("design:type", Author)
], Book.prototype, "authors", void 0);
__decorate([
    ManyToOne(() => BaseModel, entity => entity.id),
    JoinColumn({ name: "categoryId" }),
    __metadata("design:type", BaseModel)
], Book.prototype, "categories", void 0);
__decorate([
    ManyToOne(() => BaseModel, entity => entity.id),
    JoinColumn({ name: "languageId" }),
    __metadata("design:type", BaseModel)
], Book.prototype, "languages", void 0);
__decorate([
    ManyToOne(() => BaseModel, entity => entity.id),
    JoinColumn({ name: "userId" }),
    __metadata("design:type", BaseModel)
], Book.prototype, "users", void 0);
__decorate([
    ManyToOne(() => BaseModel, entity => entity.id),
    JoinColumn({ name: "levelId" }),
    __metadata("design:type", BaseModel)
], Book.prototype, "levels", void 0);
Book = __decorate([
    Entity("books")
], Book);
export { Book };
