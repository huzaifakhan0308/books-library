/* eslint-disable no-plusplus */

let index = 0;

export default class Functions {
  constructor() {
    this.books = [];
  }

  add(newbooks) {
    const getItems = JSON.parse(localStorage.getItem('books'));
    if (this.books.length > 0) {
      index = parseInt(getItems[getItems.length - 1].id, 10);
      index++;
    }
    newbooks.id = index;
    const book = newbooks;
    this.books.push(book);
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  remove(idValue) {
    const book = this.books.filter((x) => x.id !== parseInt(idValue, 10));
    this.books = book;
    localStorage.setItem('books', JSON.stringify(this.books));
  }
}