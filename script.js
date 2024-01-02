// Declare empty array for library
const myLibrary = []

// variables
const addBookButton = document.querySelector(".btn-new-book")
const submitButton = document.querySelector(".submit-btn")
const modal = document.querySelector("[data-modal]")
const booksGrid = document.querySelector('.books-grid')
const form = document.querySelector('.add-book-form')

// Constructor
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}


function addBooktoLibrary() {
    const title = document.getElementById("title").value
    const author = document.getElementById("author").value
    const pages = document.getElementById("pages").value
    const read = document.getElementById("read").checked
    const newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook)
    renderBooks()
}

function renderBooks() {
    resetBooksGrid()
    for (let i = 0; i < myLibrary.length; i++) {
        let bookItem = myLibrary[i];
        createBookCard(bookItem);
    }
}

function resetBooksGrid() {
    booksGrid.innerHTML = ''
}

function createBookCard (book) {
    const bookCard = document.createElement('div')
    const title = document.createElement('p')
    const author = document.createElement('p')
    const pages = document.createElement('p')
    const buttonGroup = document.createElement('div')
    const readBtn = document.createElement('button')
    const removeBtn = document.createElement('button')

    bookCard.classList.add('book-card')
    buttonGroup.classList.add('button-group')
    readBtn.classList.add('read-btn')
    removeBtn.classList.add('remove-btn')
    readBtn.classList.add('btn')
    removeBtn.classList.add('btn')
    

    title.textContent = `${book.title}`
    author.textContent = `${book.author}`
    pages.textContent = `${book. pages} pages`
    removeBtn.textContent = 'Remove'

    if (book.read) {
        readBtn.textContent = 'Read'
        readBtn.classList.add('btn-light-green')
    } else {
        readBtn.textContent = 'Not read'
        readBtn.classList.add('btn-light-red')
    }

    bookCard.appendChild(title)
    bookCard.appendChild(author)
    bookCard.appendChild(pages)
    buttonGroup.appendChild(readBtn)
    buttonGroup.appendChild(removeBtn)
    bookCard.appendChild(buttonGroup)
    booksGrid.appendChild(bookCard)

    // Changes read button color
    readBtn.addEventListener('click', () => {
        book.read = !book.read
        renderBooks()
    })

    removeBtn.addEventListener('click', () => {
        myLibrary.splice(myLibrary.indexOf(book),1)
        renderBooks()
    })

}




// Handle Modal

addBookButton.addEventListener("click", () => {
    modal.showModal();
})

form.addEventListener("submit", function() {
    event.preventDefault();
    addBooktoLibrary();
    modal.close();
})




modal.addEventListener("mousedown", e => {
    const dialogDimensions = modal.getBoundingClientRect()
    if(
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
    ) {
        modal.close();
    }
})
