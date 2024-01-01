// Declare empty array for library
const myLibrary = [];


// Constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBooktoLibrary() {
    
}

const addBookButton = document.querySelector("[data-open-modal]")
const submitButton = document.querySelector("[data-close-modal]")
const modal = document.querySelector("[data-modal]")

addBookButton.addEventListener("click", () => {
    modal.showModal()
})

submitButton.addEventListener("click", () => {
    modal.close()
})

modal.addEventListener("click", e => {
    const dialogDimensions = modal.getBoundingClientRect()
    if(
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
    ) {
        modal.close()
    }
})