// Variables
const myLibrary = [];

// Book Constructor
function Book(title, author, numOfPages, readBefore) {
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.readBefore = readBefore;
}

// Handler Functions
function addBookToLibrary(book) {
    myLibrary.push(book);
}
