import { book } from "./book.js";

// constructor for books - use classes Book()
export function addBookToLibrary({ title, author, numPages, wasRead }, library) {
   library.push(new book(title, author, numPages, wasRead, crypto.randomUUID()));
}
