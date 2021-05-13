// Variables
const myLibrary = [];
const libraryContainer = document.querySelector(".library-container");
const addBookBtn = document.querySelector(".btn-container");
const submitBtn = document.querySelector("#submitBtn");
const formContainer = document.querySelector(".form-container");
// Book Constructor
function Book(title, author, numOfPages, readBefore) {
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.readBefore = readBefore;
}

// Event Listeners
addBookBtn.addEventListener("click", handleNewBook);
submitBtn.addEventListener("click", handleSubmit);

// Handler Functions
function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBook(book) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("card-container");
    newDiv.classList.add(`book-${myLibrary.indexOf(book)}`);
    newDiv.innerHTML = `<div class="title-container">
                    <h3 class="book-title">${book.title}</h3>
                </div>
                <div class="info-container">
                    <p>Book author:</p>
                    <p class="book-author">${book.author}</p>
                    <p>Page number:</p>
                    <p class="page-number">${book.numOfPages}</p>
                    <label for="read">Read:</label>
                    <input type="checkbox" name="read" id="read" ${
                        book.readBefore ? 'checked="true"' : "null"
                    } />
                </div>`;
    libraryContainer.appendChild(newDiv);
}

function handleNewBook(e) {
    e.preventDefault();
    formContainer.style.display = "grid";
    libraryContainer.style.display = "none";
    addBookBtn.style.display = "none";
}

function handleSubmit(e) {
    e.preventDefault();
    addBookToLibrary(
        new Book(
            e.target.parentNode[0].value,
            e.target.parentNode[1].value,
            e.target.parentNode[2].value,
            e.target.parentNode[3].checked
        )
    );

    displayBook(myLibrary[myLibrary.length - 1]);
    formContainer.style.display = "none";
    libraryContainer.style.display = "grid";
    addBookBtn.style.display = "flex";
}
