'use strict'

document.querySelector('#btn-add').addEventListener('click', addBookToLibrary);
document.querySelector('#btn-display').addEventListener('click', changeDisplay);

let myLibrary = [];

const fragment = document.createDocumentFragment();
const target = document.getElementById('container');
const book = document.querySelectorAll('.book');
const eraseBtn = document.getElementsByClassName('erase');

function build() {
  book.forEach(book => target.removeChild(book));
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
  newNode.appendChild(h3);
  newNode.appendChild(h5);
  newNode.appendChild(p);
  fragment.appendChild(newNode);
}

/*
Array.from(eraseBtn).forEach(btn => {
  btn.addEventListener('click', event => {
    let id = btn.getAttribute('data-id');
    const erase = myLibrary.filter(book => book.id == id);
    erase[0].show = false;
    console.log("gelöscht");
    build();
  })
});
*/

function addBookToLibrary() {
  console.log("Buch hinzufügen..");
};

function changeDisplay() {
  let display = document.getElementById("container");
  display.classList.toggle("displayCards")
  console.log("Change Display..");
}

function setData() {
  localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary));
}

function rebuild() {
  if(localStorage.myLibrary) {
      let data = localStorage.getItem('myLibrary') 
      myLibrary = JSON.parse(data);
      build();
      console.log("Daten aus LocalStorage geladen..");
  }else {
      build();
      console.log("Keine Daten gefunden..");
  }
}

rebuild();