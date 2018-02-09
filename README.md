<h1><strong>Angular 4 "National Library"</strong></h1>
<p>Book Search Application</p>
<img src="https://user-images.githubusercontent.com/30567608/31730008-e7227666-b430-11e7-99f8-2344d1e50de7.gif">

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.3.

## Development server

Install local dev dependencies: `npm install` while current directory is this repo <br>
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

<h3>User Stories: </h3>
<ul>
  <li>At the top of the app you can find the navigation area with the options: "Ver Cátalogo Completo" and "Buscar"</li>
	<li>"Ver Cátalogo Completo" will show you with one click the full collection available in the library (Book tittle & author name and lastname) and a list of users that recently visited each book</li>
  <li>Hovering over the user name will display a pop-up list of books that this particular user has also visited.</li>
  <li>"Buscar" will allow you to search typing in the Text Input Boxes available, the categories you can search by:
    <ul>
      <li>Author name or lastname</li>
      <li>Book tittle</li>
      <li>Genre</li>
      <li>ISBN number</li>
    </ul>
  </li>
  <li>Results will be shown at the same time as you are typing, so search results will be shown directly below, it is not neccesary to press enter or click any other button. (Type Ahead.)</li>
  <li>Inside of each search result you will find:
    <ul>
      <li>Book tittle</li>
      <li>Author name and lastname</li>
      <li>Genre</li>
      <li>ISBN number</li>
    </ul>
  </li>
</ul>
<p>The information that will be displayed by the App could be seen in the JSON format <a href="https://gist.githubusercontent.com/finizen/6f5d574cec11112342c552fe6fa64a8a/raw/4cf357afb82e6baae7fd06c5a7c3990d1c0977f6/booksV1.json">here</a>, it is not neccesarily real</p>

<h5>Hope you like it!</h5>
