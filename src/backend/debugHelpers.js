import * as helpers from "./helpers.js";

export function generateBooksInLibrary(numBooks, library) {
   for (let i = 0; i < numBooks; i++) {
      const bookDeetz = {
         title: `${i}: some shit book`,
         author: `${i}: some fuck`,
         numPages: 123,
         wasRead: true
      };
      helpers.storeBookInLibrary(bookDeetz, library);
   }
   console.log({ library });
}