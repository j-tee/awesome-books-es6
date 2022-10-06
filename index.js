/* eslint-disable import/no-absolute-path */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable quotes */
/* eslint-disable import/order */
import { BookList } from './modules/booklist.js';
import { createList } from './modules/createlist.js';
import {
  bookList, addBookBtn, link, list, form, contact,
} from './modules/constants.js';
import { DateTime } from "./modules/luxon.js";

const datetime = document.querySelector('#datetime');
const date = DateTime.local();
datetime.innerHTML = date.toLocaleString();

window.addEventListener('load', () => {
  const booklist = new BookList();
  createList(booklist.getBooks(), bookList, new BookList());
});

addBookBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const booklist = new BookList();
  const bookAuthor = document.forms.book.author.value;
  const bookTitle = document.forms.book.title.value;
  booklist.addBook(bookTitle, bookAuthor);
});

link.forEach((lnk) => {
  lnk.addEventListener('click', () => {
    if (lnk.id.toString() === 'book-list-lnk') {
      list.classList.remove('hide');
      form.classList.add('hide');
      contact.classList.add('hide');
    } else if (lnk.id.toString() === 'formfields-lnk') {
      list.classList.add('hide');
      form.classList.remove('hide');
      contact.classList.add('hide');
    } else if (lnk.id.toString() === 'contact-lnk') {
      list.classList.add('hide');
      form.classList.add('hide');
      contact.classList.remove('hide');
    }
  });
});