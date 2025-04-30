// constructor for books - use classes Book()
export class Book {
   constructor(
      author,
      title,
      numPages,
      wasRead,
      uuid
   ) {
      this.author = author;
      this.title = title;
      this.numPages = numPages;
      this.wasRead = wasRead;
      this.uuid = uuid;
   }
}
