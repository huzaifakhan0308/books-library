/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
/* eslint-disable radix */
export default class Functions {
  constructor() {
    this.books = [];
  }

  add(newbooks) {
    const getItems = JSON.parse(localStorage.getItem('books'));
    if (this.books.length > 0) {
      index = parseInt(getItems[getItems.length - 1].id);
      index++;
    }
    newbooks.id = index;
    const book = newbooks;
    this.books.push(book);
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  remove(idValue) {
    const book = this.books.filter((x) => x.id !== parseInt(idValue));
    this.books = book;
    localStorage.setItem('books', JSON.stringify(this.books));
  }
}
let index = 0;