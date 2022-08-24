const cardContainer = document.querySelector(".cardContainer")
let myLibrary = []


//Book constructor
function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return (`${this.title} by ${this.author}, ${pages} pages, ${read}`); //can use this. here if wanted, but not needed.
    }
}

//Making new Book Example
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkein", "295" , "Not Read");
console.log(theHobbit.info());

//Next on my Todo is this, make style change to flex...
function bookForm(){
    let popup = document.getElementsByClassName("formContainer").style.display = "flex"
}
function addBook() {

}