import { Book } from "./book.js";

// constructor for books - use classes Book()
export function addBookToLibrary({ title, author, numPages, wasRead }, library) {
   library.push(new Book(title, author, numPages, wasRead, crypto.randomUUID()));
}
