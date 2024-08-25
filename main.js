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

function renderLibrary(library) {
    const books = library.map(book => {
        return `<td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.pages}</td>
                <td>${book.readStatus ? "Read" : "Not Read"}</td>`;
    });

    books.forEach(book => {
        booksTableBody.innerHTML += `<tr>${book}</tr>`;
    });
}

renderLibrary(myLibrary);