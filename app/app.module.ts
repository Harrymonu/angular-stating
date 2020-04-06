import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BookListComponent } from './books/books-list/books-list.component';
import { FormsModule } from '@angular/forms';
import { HighLiteDirective } from './shared/highlight.directive';
import { TruncatePipe } from './shared/pipes/truncate.pipe';
import { InputOutput } from './input-output/input.component';
import { BookService } from './books/book.service'
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'
import { WelcomeComponent } from './welcome/welcome.component'
import { BookDetailsComponent } from './books/book-details/book-details.component'




@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule,
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: 'books', component: BookListComponent}, 
      {path: 'books/:id', component: BookDetailsComponent},  
      {path: "", redirectTo: 'welcome', pathMatch: 'full'},
      {path: "**", redirectTo: 'welcome', pathMatch: 'full'}
    ])],
  providers: [BookService],
  declarations: [AppComponent, BookListComponent, HighLiteDirective, TruncatePipe, InputOutput, WelcomeComponent,BookDetailsComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }