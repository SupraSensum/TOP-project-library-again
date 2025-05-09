// constructor for books - use classes Book()
export class Book {
   constructor(bookDeetz) {
      this.author = bookDeetz.author;
      this.title = bookDeetz.title;
      this.numPages = bookDeetz.numPages;
      this.wasRead = bookDeetz.wasRead;
      this.uuid = bookDeetz.uuid;
   }

   toggleReadStatus() {
      this.wasRead === true ? this.wasRead = false : this.wasRead = true;
   }
}
