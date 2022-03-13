document.querySelector('#btn-add').addEventListener('click', addBookToLibrary);
document.querySelector('#btn-display').addEventListener('click', changeDisplay);

let myLibrary = [
  {
    id: 1,
    title: 'Die kleine Raupe Nimmersatt',
    author: 'Eric Carle',
    nbr_of_pages: 32,
    publishing_date: 'Juni 3 1969',
    read_status: true,
    insertion_date: '02/27/2022, 8:10:58 PM',
    show: true,
  },
  {
    id: 5,
    title: 'Test',
    author: 'Ich',
    nbr_of_pages: 15,
    publishing_date: 'Nov 29 1985',
    read_status: true,
    insertion_date: '03/01/2022, 8:01:24 PM',
    show: true,
  },
  {
    id: 18,
    title: 'Nochmal',
    author: 'Ich',
    nbr_of_pages: 999,
    publishing_date: 'March 6 2022',
    read_status: true,
    insertion_date: '03/06/2022, 7:27:56 PM',
    show: true,
  }
];

const fragment = document.createDocumentFragment();
const target = document.getElementById('container');
const eraseBtn = document.getElementsByClassName('erase');

function build() {
  [...target.childNodes].forEach(el => el.remove());
  myLibrary.forEach(element => {
    if(element.show) {
      let newNode = document.createElement('div');
      newNode.classList.add('book');
      let h3 = document.createElement('h3');
      h3.appendChild(document.createTextNode(`${element.title}`));
      let h5 = document.createElement('h5');
      h5.appendChild(document.createTextNode(`${element.author} (${element.publishing_date})`));
      let p = document.createElement('p');
      p.classList.add('erase');
      p.appendChild(document.createTextNode('x'));
      p.setAttribute('data-id', `${element.id}`);
      newNode.appendChild(h3);
      newNode.appendChild(h5);
      newNode.appendChild(p);
      fragment.appendChild(newNode);
    } else return;
    target.appendChild(fragment);
  });
};

build();

Array.from(eraseBtn).forEach(btn => {
  btn.addEventListener('click', event => {
    let id = btn.getAttribute('data-id');
    const erase = myLibrary.filter(book => book.id == id);
    erase[0].show = false;
    console.log("gelöscht");
    build();
  })
});

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
  }else {
      build();
  }
}

rebuild();