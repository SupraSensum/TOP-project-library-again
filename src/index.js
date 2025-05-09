import * as helpers from "./backend/helpers.js"
import * as debugHelpers from "./backend/debugHelpers.js";
import displayBookInLibrary from "./frontend/displayBookInLibrary.js";
import initNewBookDialog from "./frontend/initNewBookDialog.js";
import refreshLibraryUI from "./frontend/refreshLibraryUI.js";
import initRemoveBookButton from "./frontend/initRemoveBookButton.js";
import initReadStateButton from "./frontend/initReadStateButton.js";

// create an array of books
const myLibrary = [];

// function that loops through the array and displays each book on the page
debugHelpers.generateBooksInLibrary(100, myLibrary);

myLibrary.forEach(book => {
   displayBookInLibrary(book);
})

// add a "New Book" button
// - [x] author
// - [x] title
// - [x] number of pages
// - [x] whether it's been read
// 
// Additional:
// - [x] Explore dialogs and modals using the <dialog> tag: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
// - [x] use event.preventDefault(); to prevent `submit` input from trying to send data to server
initNewBookDialog(onNewBook);

// Add button on each book to remove from library
// - [x] will need to associate DOM elements with actual book objects somehow. One option is `data-attribute` corresponding to the unique `id`
// 
// Let's think through how this needs to work
// - during creation of book, add a step where the remove book element is attached
initRemoveBookButton(onRemoveBook);

// Add a button on each book’s display to change its `read` status
// - [x] To facilitate this you will want to create Book prototype function that toggles a book instance’s read status... figure out how to do this with classes
initReadStateButton(onReadStateToggle);

function onNewBook(book) {
   // add to backend
   helpers.storeBookInLibrary(book, myLibrary);

   // update frontend
   refreshLibraryUI(myLibrary);
}

function onRemoveBook(uuid) {
   // remove from backend array
   helpers.removeBookFromLibrary(uuid, myLibrary);

   // update frontend
   refreshLibraryUI(myLibrary);
}

function onReadStateToggle(btn, uuid) {
   // toggle backend
   const book = myLibrary.find(book => book.uuid === uuid);
   book.toggleReadStatus();

   // toggle frontend
   refreshLibraryUI(myLibrary);
}

// Eventually I might return to make the UI refresh methods more efficient. One for whole library, another for individual books, that sort of thing.