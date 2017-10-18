import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Pipe, PipeTransform } from '@angular/core';

import { AppComponent } from './app.component';
import { CompletoComponent } from './completo/completo.component';
import { SearchComponent } from './search/search.component';

import { BooksService } from './books.service';

import { AppRoutingModule } from './app-routing.module';
import { BookFilterPipe } from './book-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CompletoComponent,
    SearchComponent,
    BookFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
