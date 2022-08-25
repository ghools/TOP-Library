const cardContainer = document.querySelector(".cardContainer");
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
    document.querySelector(".formContainer").style.display = "none"
}

function addBook() {}
