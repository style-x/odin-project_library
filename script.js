'use strict'

document.querySelector('#btn-add').addEventListener('click', addBookToLibrary);
document.querySelector('#btn-display').addEventListener('click', changeDisplay);

let myLibrary = [];

const fragment = document.createDocumentFragment();
const target = document.getElementById('container');
const book = document.querySelectorAll('.book');
const eraseBtn = document.getElementsByClassName('erase');

function build() {
  while (target.firstChild) {
    target.removeChild(target.lastChild);
  }
  for (let i = 0; i < myLibrary.length; i++){
      createBook(myLibrary[i]);
  };
};

function createBook(item) {
  let newNode = document.createElement('div');
  newNode.classList.add('book');
  let h3 = document.createElement('h3');
  h3.appendChild(document.createTextNode(`${item.title}`));
  let h5 = document.createElement('h5');
  h5.appendChild(document.createTextNode(`${item.author} (${item.publishing_date})`));
  let p = document.createElement('p');
  p.classList.add('erase');
  p.appendChild(document.createTextNode('x'));
  p.setAttribute('data-id', `${item.id}`);
  p.addEventListener('click', event => {
    let id = item.id;
    let newLibrary = myLibrary.filter(item => item.id !== id);
    console.log("gelöscht");
    myLibrary = newLibrary;
    setData()
    build();
  });
  newNode.appendChild(h3);
  newNode.appendChild(h5);
  newNode.appendChild(p);
  fragment.appendChild(newNode);
  target.appendChild(fragment);
};

function addBookToLibrary() {
  console.log("Modal öffnen");
  
};

function changeDisplay() {
  let display = document.getElementById("container");
  display.classList.toggle("displayCards");
  console.log("Change Display..");
};

function setData() {
  localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary));
};

function rebuild() {
  if(localStorage.myLibrary) {
      let data = localStorage.getItem('myLibrary');
      myLibrary = JSON.parse(data);
      build();
      console.log("Daten aus LocalStorage geladen..");
  }else {
      build();
      console.log("Keine Daten gefunden..");
  };
};

const getBookFromInput = () => {
  const title = document.getElementById('title').value
  const author = document.getElementById('author').value
  const pages = document.getElementById('pages').value
  const isRead = document.getElementById('isRead').checked
  return new Book(title, author, pages, isRead)
};

rebuild();