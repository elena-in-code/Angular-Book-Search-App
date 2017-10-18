import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-completo',
  templateUrl: './completo.component.html',
  styleUrls: ['./completo.component.css']
})
export class CompletoComponent implements OnInit {

  constructor(private booksService: BooksService){}
  books = [];
  readBooks: Array<string>;

  ngOnInit(){
    this.booksService.getBooks().subscribe(responseBooks => this.books =responseBooks);

  }
  showReadBooksForUser(userId: number) {
  	this.readBooks = this.books.filter(
    (book) => book.users.findIndex((user) => user.id == userId) > -1);
  }

  resetReadBooks() {
    this.readBooks = null;
  }
}

