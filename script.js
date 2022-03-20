'use strict'

document.querySelector('#btn-add').addEventListener('click', openModal);
document.querySelector('#btn-display').addEventListener('click', changeDisplay);
document.querySelector('#submit').addEventListener('click', submit);
const modal = document.querySelector('#modal');
const target = document.getElementById('container');
const book = document.querySelectorAll('.book');
const eraseBtn = document.getElementsByClassName('erase');

let myLibrary = [];

const fragment = document.createDocumentFragment();

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
  let read = document.createElement('p');
  read.appendChild(document.createTextNode((item.read_status)?"gelesen":"nicht gelesen"));
  p.classList.add('erase');
  p.appendChild(document.createTextNode('x'));
  p.setAttribute('data-id', `${item.id}`);
  p.addEventListener('click', event => {
    let index = myLibrary.indexOf(item);
    myLibrary.splice(index, 1);
    localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary));
    build();
  });
  newNode.appendChild(h3);
  newNode.appendChild(h5);
  newNode.appendChild(read);
  newNode.appendChild(p);
  fragment.appendChild(newNode);
  target.appendChild(fragment);
};

function openModal() { 
  modal.showModal(); 
};

function submit(event) { 
  event.preventDefault();
  getBookFromInput();
  modal.close(); 
};

function changeDisplay() {
  target.classList.toggle("displayCards");
  console.log("Change Display..");
};

// Daten aus localStorage laden
function rebuild() {
  if(localStorage.myLibrary) {
      let data = localStorage.getItem('myLibrary');
      myLibrary = JSON.parse(data);
      build();
  };
};

function getBookFromInput() {
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let pdate = document.getElementById('pdate').value;
  let pages = document.getElementById('pages').value;
  let isRead = document.getElementById('isRead').checked;
  var newBook = {
    title: title,
    author: author,
    publishing_date: pdate,
    nbr_of_pages: pages,
    read_status: isRead?true:false,
    insertion_date: new Date()
  };
  myLibrary.push(newBook);
  localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary));
  build();
};

rebuild();
