import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Book } from './book';

@Injectable()

export class BooksService {
  constructor(private http:Http){
  }
  private url:string = "https://gist.githubusercontent.com/finizen/6f5d574cec11112342c552fe6fa64a8a/raw/4cf357afb82e6baae7fd06c5a7c3990d1c0977f6/booksV1.json";
  
  getBooks(): Observable<Book[]>{
    return this.http
    .get(this.url)
    .map(res => res.json().books);
  }
   
}