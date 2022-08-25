const cardContainer = document.querySelector(".cardContainer");
//Library array, effectively we will want to cycle through each book in this, and make and then append a book card for every book in the array.
let myLibrary = [];

//Book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${this.title} by ${this.author}, ${pages} pages, ${read}`; //can use this. here if wanted, but not needed.
    };
}

//Making new Book Example
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkein", "295", "Not Read");
console.log(theHobbit.info());

function bookForm() {
    document.querySelector(".formContainer").style.display = "flex";
}

function closeForm() {
    document.querySelector(".formContainer").style.display = "none";
}

function addBook(book) {
    myLibrary.push(book);
}

function makeBook() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").value;
    const newBook = new Book(title, author, pages, read);
    addBook(newBook);
    console.log(myLibrary);
}


