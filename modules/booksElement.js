const booksElement = (booksData) => {
  const li = document.createElement('li');
  li.classList = `${booksData.id}`;
  const div = document.createElement('div');
  const titleInput = document.createElement('h2');
  titleInput.textContent = `"${booksData.title}" by`;
  const authorInput = document.createElement('h3');
  authorInput.textContent = booksData.author;
  const removeBtn = document.createElement('button');
  removeBtn.innerText = 'Remove';
  removeBtn.classList = 'Remove-button';
  div.append(titleInput, authorInput);
  li.append(div, removeBtn);
  document.querySelector('.new-books-ul').appendChild(li);
};

export default booksElement;