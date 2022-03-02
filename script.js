let myLibrary = [
  {
    id: 1,
    title: 'Die kleine Raupe Nimmersatt',
    author: 'Eric Carle',
    nbr_of_pages: 32,
    publishing_date: 'Juni 3 1969',
    read_status: true,
    insertion_date: '02/27/2022, 8:10:58 PM',
  },
  {
    id: 2,
    title: 'Test',
    author: 'Ich',
    nbr_of_pages: 15,
    publishing_date: 'Nov 29 1985',
    read_status: true,
    insertion_date: '03/01/2022, 8:01:24 PM',
  }
];

let fragment = document.createDocumentFragment();
const target = document.getElementById('container');

function Book() {
  // the constructor...
};

function addBookToLibrary() {
  // do stuff here
};

myLibrary.forEach(element => {
  let newNode = document.createElement('div');
  newNode.classList.add('book');
  let h3 = document.createElement('h3');
  h3.appendChild(document.createTextNode(`${element.title}`));
  let h5 = document.createElement('h5');
  h5.appendChild(document.createTextNode(`${element.author} (${element.publishing_date})`));
  let p = document.createElement('p');
  p.classList.add('erase');
  p.appendChild(document.createTextNode('x'));
  newNode.appendChild(h3);
  newNode.appendChild(h5);
  newNode.appendChild(p);
  fragment.appendChild(newNode);
});

target.appendChild(fragment);

const eraseBtn = document.getElementsByClassName('erase');

console.log(eraseBtn);
