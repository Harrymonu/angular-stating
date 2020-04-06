import {Component,OnInit} from '@angular/core';
import {IBook} from '../book'
import { BookService } from '../book.service';

@Component({
    moduleId:module.id,
    templateUrl:'books-list.component.html',

})

export class BookListComponent implements OnInit{

    books:IBook[];
    imageWidth: number = 100;
    showImage: boolean = true;
    favoriteMessage: string=""
    errorMessage=''
 constructor(private _bookeServie:BookService){

 }

ngOnInit(){this.getBooks()}

getBooks(){
    this._bookeServie.getBooks().subscribe(
     books=>this.books=books,
     error=>this.errorMessage=<any>error
    )
}
   
   
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
   
   
  
    toggleImage(): void {
      this.showImage = !this.showImage;
    }

    onfavoriteclicked(message:string):void{
        this.favoriteMessage=message
    }
}