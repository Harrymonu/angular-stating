import  { Component,OnInit,OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import {IBook} from '../book'
import { BookService } from '../book.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
    moduleId: module.id,

templateUrl: 'book-details.component.html',
})
export class BookDetailsComponent implements OnInit,OnDestroy { 
    constructor(private _route:ActivatedRoute,private _bookscrvice:BookService) {
        console.log(this._route.snapshot.params['id'])
    }
    book:IBook
    errormessage:string;
    private sub:Subscription

    ngOnInit():void{
        this.sub=this._route.params.subscribe(
        params=>{
            let id=params['id'];
            this.getBook(id);   
        }

        )
    }

    getBook(id:string):void{
        this._bookscrvice.getbook(id).subscribe(
            books=>this.book=books,
            error=>this.errormessage=<any>error
            

        )
    }
    
}