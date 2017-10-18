import { Component, Injectable, OnInit } from '@angular/core';

import { Book } from '../book';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [BooksService]
})

@Injectable()
export class SearchComponent implements OnInit{
 name = 'Servicio de búsqueda de libros';
 numberOfBooks: number;
 books: Book[];
 filter: Book = new Book();
 constructor(private booksService: BooksService){}
  

  ngOnInit(){
    this.booksService.getBooks().subscribe(
    (books: Book[]) => {
        this.books = books;
        this.numberOfBooks = this.books.length;
      });
  }
}




