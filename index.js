/* eslint-disable no-unused-vars */
import Newbooks from './modules/newBooks.js';
import booksElement from './modules/booksElement.js';
import Functions from './modules/functions.js';
import DateTime from './modules/DateTime.js';

const functions = new Functions();
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');

document.querySelector('.new-books-ul').addEventListener('click', ((e) => {
  if (e.target.classList[0] === 'Remove-button') {
    functions.remove(e.target.parentElement.classList[0]);
    e.target.parentElement.remove();
  }
}));

functions.books = JSON.parse(localStorage.getItem('books'));
functions.books.forEach((x) => booksElement(x));

document.querySelector('.add-new-book-btn').addEventListener('click', ((e) => {
  if (titleInput.value !== '' && authorInput.value !== '') {
    const newbooks = new Newbooks(titleInput.value, authorInput.value);
    functions.add(newbooks);
    booksElement(newbooks);
    titleInput.value = '';
    authorInput.value = '';
  }
}));

const newBookSection = document.querySelector('.new-books-sections');
const addNewbookSection = document.querySelector('.add-new-books-section');
const contactFormSection = document.querySelector('.contact-form-section');

document.querySelector('.nav').addEventListener('click', ((e) => {
  if (e.target.innerText === 'List') {
    newBookSection.classList.add('new-books-sections-appear');
    addNewbookSection.classList.add('add-new-books-section-disappear');
    contactFormSection.classList.remove('contact-form-section-appear');
  } else if (e.target.innerText === 'Add new') {
    newBookSection.classList.remove('new-books-sections-appear');
    addNewbookSection.classList.remove('add-new-books-section-disappear');
    contactFormSection.classList.remove('contact-form-section-appear');
  } else if (e.target.innerText === 'Contact') {
    newBookSection.classList.remove('new-books-sections-appear');
    addNewbookSection.classList.add('add-new-books-section-disappear');
    contactFormSection.classList.add('contact-form-section-appear');
  }
}));
