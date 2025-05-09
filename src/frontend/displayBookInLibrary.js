export default function displayBookInLibrary(bookDeetz) {
   const bookContainer = document.createElement('div');
   const titleContainer = document.createElement('h2');
   const authorContainer = document.createElement('p');
   const pageNumContainer = document.createElement('p');
   const readStateButton = document.createElement('button');
   const removeButton = document.createElement('button');

   bookContainer.classList.add("book");
   bookContainer.dataset.uuid = bookDeetz.uuid;
   bookContainer.append(
      titleContainer,
      authorContainer,
      pageNumContainer,
      readStateButton,
      removeButton
   );

   titleContainer.textContent = bookDeetz.title;
   authorContainer.textContent = bookDeetz.author;
   pageNumContainer.textContent = bookDeetz.numPages;
   readStateButton.textContent = bookDeetz.wasRead;
   removeButton.textContent = 'X';
   removeButton.classList.add('removeBookButton');
   readStateButton.classList.add('readStateButton');

   document.querySelector("#library").appendChild(bookContainer);
}