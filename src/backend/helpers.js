import { Book } from "./book.js";

// constructor for books - use classes Book()
export function storeBookInLibrary(bookDeetz, library) {
   bookDeetz.uuid = crypto.randomUUID();
   library.push(new Book(bookDeetz));
}

export function removeBookFromLibrary(uuid, library) {
   const index = library.findIndex(item => item.uuid === uuid);

   if (index > -1) {
      library.splice(index, 1)
   }
}