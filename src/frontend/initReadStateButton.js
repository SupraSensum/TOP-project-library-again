export default function initReadStateButton(callback) {
   const libraryContainer = document.querySelector("#library");
   libraryContainer.addEventListener('click', e => {
      if (!e.target.classList.contains("readStateButton")) return;

      const bookCard = e.target.closest('.book');
      const uuid = bookCard.dataset.uuid;
      const readStateButton = e.target;
      callback(readStateButton, uuid);
   });
}