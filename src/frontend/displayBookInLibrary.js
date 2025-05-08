export default function displayBookInLibrary(bookDeetz) {
   const bookContainer = document.createElement('div');
   const titleContainer = document.createElement('h2');
   const authorContainer = document.createElement('p');
   const pageNumContainer = document.createElement('p');
   const readStateContainer = document.createElement('div');
   const removeButton = document.createElement('button');

   bookContainer.classList.add("book");
   bookContainer.dataset.uuid = bookDeetz.uuid;
   bookContainer.append(
      titleContainer,
      authorContainer,
      pageNumContainer,
      readStateContainer,
      removeButton
   );

   titleContainer.textContent = bookDeetz.title;
   authorContainer.textContent = bookDeetz.author;
   pageNumContainer.textContent = bookDeetz.numPages;
   readStateContainer.textContent = bookDeetz.wasRead;
   removeButton.textContent = 'X';
   removeButton.classList.add('removeBookButton');

   document.querySelector("#library").appendChild(bookContainer);
}