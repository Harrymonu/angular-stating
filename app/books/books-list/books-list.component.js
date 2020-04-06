"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var book_service_1 = require("../book.service");
var BookListComponent = (function () {
    function BookListComponent(_bookeServie) {
        this._bookeServie = _bookeServie;
        this.imageWidth = 100;
        this.showImage = true;
        this.favoriteMessage = "";
        this.errorMessage = '';
    }
    BookListComponent.prototype.ngOnInit = function () { this.getBooks(); };
    BookListComponent.prototype.getBooks = function () {
        var _this = this;
        this._bookeServie.getBooks().subscribe(function (books) { return _this.books = books; }, function (error) { return _this.errorMessage = error; });
    };
    //   books:IBook[]=[
    //       {
    //     booksInStock:1,
    //     bookAuthor: "Tom Jones",
    //     bookTitle: "War and Peace 2",
    //     bookPrice: 29.95,
    //     bookDescription: "Book of historical fiction",
    //     publishedOn: new Date('02/11/1921'),
    //     inStock: "yes",
    //     bookReviews: 15,
    //     bookImageUrl: "app/assets/images/656.jpg"
    //   },
    //   {
    //     booksInStock:2,
    //     bookAuthor: "Tom Jones",
    //     bookTitle: "War and Peace 2",
    //     bookPrice: 29.95,
    //     bookDescription: "Book of historical fiction",
    //     publishedOn: new Date('02/11/1921'),
    //     inStock: "yes",
    //     bookReviews: 15,
    //     bookImageUrl: "app/assets/images/656.jpg"
    //   },
    //   {
    //     booksInStock:2,
    //     bookAuthor: "Tom Jones",
    //     bookTitle: "War and Peace 2",
    //     bookPrice: 29.95,
    //     bookDescription: "Book of historical fiction",
    //     publishedOn: new Date('02/11/1921'),
    //     inStock: "yes",
    //     bookReviews: 15,
    //     bookImageUrl: "app/assets/images/656.jpg"
    //   }
    // ]
    BookListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    BookListComponent.prototype.onfavoriteclicked = function (message) {
        this.favoriteMessage = message;
    };
    return BookListComponent;
}());
BookListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'books-list.component.html',
    }),
    __metadata("design:paramtypes", [book_service_1.BookService])
], BookListComponent);
exports.BookListComponent = BookListComponent;
//# sourceMappingURL=books-list.component.js.map