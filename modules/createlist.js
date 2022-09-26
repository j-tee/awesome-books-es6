/* eslint-disable import/prefer-default-export */
/* eslint-disable no-restricted-globals */

const createList = (books, bookList, booklist) => {
  bookList.innerHTML = '';
  if (books) {
    books.forEach((book) => {
      const tags = `<li>
        <p>"${book.title}"   by ${book.author}</p>
       <button id=${book.id} class="remove-btn">Remove</button>
       </li>`;
      bookList.insertAdjacentHTML('beforeend', tags);
    });
  }
  const removeBtn = document.querySelectorAll('.remove-btn');
  removeBtn.forEach((elem) => {
    elem.addEventListener('click', () => {
      booklist.removeBook(elem.id);
      location.reload();
    });
  });
};

export { createList };