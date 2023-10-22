// Sample data to simulate a database
let books = [];

// Function to display books in the list
function displayBooks() {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';

    books.forEach((book, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<b>${book.title}</b> by ${book.author} <button onclick="deleteBook(${index})">Delete</button>`;
        bookList.appendChild(li);
    });
}

// Function to add a new book
document.getElementById('add-book-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;

    if (title && author) {
        const newBook = { title, author };
        books.push(newBook);
        displayBooks();
        this.reset(); // Clear the form
    }
});

// Function to delete a book
function deleteBook(index) {
    books.splice(index, 1);
    displayBooks();
}

// Initial display
displayBooks();


