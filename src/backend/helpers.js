import { Book } from "./book.js";

// constructor for books - use classes Book()
export function storeBookInLibrary(bookDeetz, library) {
   bookDeetz.uuid = crypto.randomUUID();
   library.push(new Book(bookDeetz));
}
