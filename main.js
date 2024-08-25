const myLibrary = [
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        pages: 366,
        readStatus: false
    },
    {
        title: "Harry Potter and the Sorcerer’s Stone",
        author: "J.K. Rowling",
        pages: 333,
        readStatus: false
    },
    {
        title: "A Game of Thrones",
        author: "George R.R. Martin",
        pages: 835,
        readStatus: false
    },
];

const booksTableBody = document.querySelector(".books-table tbody");
const addBookForm = document.querySelector(".add-book-form");

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary(title, author, pages, readStatus) {
    const newBook = new Book(title, author, pages, readStatus);
    myLibrary.push(newBook);
    return myLibrary;
}

addBookForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = e.target.querySelector("#title").value;
    const author = e.target.querySelector("#author").value;
    const pages = e.target.querySelector("#pages").value;
    let readStatus = e.target.querySelector("#read-status").value;
    readStatus = (readStatus === "read") ? true : false;
    
    const newLibrary = addBookToLibrary(title, author, pages, readStatus);
    renderLibrary(newLibrary);
    addBookForm.reset();
});

function renderLibrary(library) {
    const books = library.map(book => {
        return `<td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.pages}</td>
                <td>${book.readStatus ? "Read" : "Not Read"}</td>`;
    });
    
    // resets the table body in case of rerender
    booksTableBody.innerHTML = "";
    books.forEach(book => {
        booksTableBody.innerHTML += `<tr>${book}</tr>`;
    });
}

renderLibrary(myLibrary);