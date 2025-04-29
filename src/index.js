import * as helpers from "./helpers.js"

// create an array of books
const myLibrary = [];

// function that loops through the array and displays each book on the page

// add a "New Book" button
// - [ ] author
// - [ ] title
// - [ ] number of pages
// - [ ] whether it's been read
// 
// Additional:
// - [ ] Explore dialogs and modals using the <dialog> tag: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
// - [ ] use event.preventDefault(); to prevent `submit` input from trying to send data to server

// Add button on each book to remove from library
// - [ ] will need to associate DOM elements with actual book objects somehow. One option is `data-attribute` corresponding to the unique `id`

// Add a button on each book’s display to change its `read` status
// - [ ] To facilitate this you will want to create Book prototype function that toggles a book instance’s read status... figure out how to do this with classes

const bookDeetz = {
   title: "some shit book",
   author: "some fuck",
   numPages: 123,
   wasRead: true
};
helpers.addBookToLibrary(bookDeetz, myLibrary);
console.log({myLibrary});