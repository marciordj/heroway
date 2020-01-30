// function Book (title, pages, isbn) {
//     this.title = title;
//     this.pages = pages;
//     this.isbn = isbn;
// }

// Book.prototype.printTitle = function () {
//     return console.log(this.title);

// }

class Book { 
    constructor (title, pages, isbn) {
        this.title = title;
        this.pages = pages;
        this.isbn = isbn;
    }
}



let book = new Book('A morte da bezerra', 321, 'teste');

console.log(`O livro cadastrado ${book.title} tem ${book.pages} páginas`);

book.title = 'Senhor dos anéis';
book.pages = 500;

console.log(`Um novo livro foi cadastrado. O novo livro se chama ${book.title} e possui ${book.pages} páginas`)

