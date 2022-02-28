let myLibrary = [
  {
    id: 1,
    title: 'Die kleine Raupe Nimmersatt',
    author: 'Eric Carle',
    nbr_of_pages: 32,
    publishing_date: 'Juni 3 1969',
    read_status: true,
    insertion_date: '02/27/2022, 8:10:58 PM',
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
  let p = document.createElement('p');
  p.appendChild(document.createTextNode(`${element.author} (${element.publishing_date})`));
  newNode.appendChild(h3);
  newNode.appendChild(p);
  fragment.appendChild(newNode);
});

target.appendChild(fragment);
