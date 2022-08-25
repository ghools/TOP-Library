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
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkein", "295", "False");


let myLibrary = [];

function bookForm() {
    document.querySelector(".formContainer").style.display = "flex";
}

function closeForm() {
    document.querySelector(".formContainer").style.display = "none";
}

function removeChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

function buildLibrary(myLibrary) {
    const cardContainer = document.querySelector(".cardContainer");
    removeChildren(cardContainer);
    for (let i = 0; i < myLibrary.length; i++) {
        const bookCard = document.createElement("div");
        bookCard.className = "bookCard";
        const titleRow = document.createElement("div");
        titleRow.className = "cardRow";
        const titleDes = document.createElement("div");
        titleDes.className = "cardDes";
        titleDes.innerHTML = "Title:";
        const titleCon = document.createElement("div");
        titleCon.className = "cardInput";
        titleCon.innerHTML = myLibrary[i].title;
        titleRow.appendChild(titleDes);
        titleRow.appendChild(titleCon);
        bookCard.appendChild(titleRow);
        const authorRow = document.createElement("div");
        authorRow.className = "cardRow";
        const authorDes = document.createElement("div");
        authorDes.className = "cardDes";
        authorDes.innerHTML = "Author:";
        const authorCon = document.createElement("div");
        authorCon.className = "cardInput";
        authorCon.innerHTML = myLibrary[i].author;
        authorRow.appendChild(authorDes);
        authorRow.appendChild(authorCon);
        bookCard.appendChild(authorRow);
        const pageRow = document.createElement("div");
        pageRow.className = "cardRow";
        const pageDes = document.createElement("div");
        pageDes.className = "cardDes";
        pageDes.innerHTML = "Pages:";
        const pageCon = document.createElement("div");
        pageCon.className = "cardInput";
        pageCon.innerHTML = myLibrary[i].pages;
        pageRow.appendChild(pageDes);
        pageRow.appendChild(pageCon);
        bookCard.appendChild(pageRow);
        const readRow = document.createElement("div");
        readRow.className = "cardRow";
        const readDes = document.createElement("div");
        readDes.className = "cardDes";
        readDes.innerHTML = "Read the Book?:";
        const readCon = document.createElement("div");
        readCon.className = "cardInput";
        readCon.innerHTML = myLibrary[i].read;
        readRow.appendChild(readDes);
        readRow.appendChild(readCon);
        bookCard.appendChild(readRow);
        const butRow = document.createElement("div");
        butRow.className = "cardRow";
        const readBut = document.createElement("button");
        readBut.className = "readBut";
        readBut.innerHTML = "Read Book!";
        const remBut = document.createElement("button");
        remBut.className = "readBut";
        remBut.innerHTML = "Remove from Library";
        butRow.appendChild(readBut);
        butRow.appendChild(remBut);
        bookCard.appendChild(butRow);
        cardContainer.appendChild(bookCard);
    }
    return;
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
    buildLibrary(myLibrary);
    console.log(myLibrary);
}
