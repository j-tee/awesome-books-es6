/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-restricted-globals */
import { Book } from './book.js';

class BookList {
  constructor() {
    this.books = [];
  }

  getBooks = () => {
    this.books = JSON.parse(localStorage.getItem('booklist'));
    return this.books;
  }

  storeBooks = () => {
    const booklist = JSON.stringify(this.books);
    localStorage.setItem('booklist', booklist);
    this.books = this.getBooks();
  }

  addBook = (title, author) => {
    this.books = this.getBooks() ? this.getBooks() : [];
    const id = (this.books !== null) ? (this.books.length > 0 ? this.books[this.books.length - 1].id + 1 : 1) : 1;
    const book = new Book(id, title, author);
    this.books.push(book);
    this.storeBooks();
    location.reload();
  }

  removeBook = (id) => {
    this.books = this.getBooks();
    this.books = this.books.filter((book) => parseInt(id, 10) !== parseInt(book.id, 10));
    this.storeBooks();
  }
}

export { BookList };