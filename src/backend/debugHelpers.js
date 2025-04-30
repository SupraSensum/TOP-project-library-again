import * as helpers from "./helpers.js";

export function addSomeBooksToLib(numBooks, library) {
   for (let i = 0; i < numBooks; i++) {
      const bookDeetz = {
         title: `${i}: some shit book`,
         author: `${i}: some fuck`,
         numPages: 123,
         wasRead: true
      };
      helpers.addBookToLibrary(bookDeetz, library);
   }
   console.log({ library });
}