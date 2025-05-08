export default function initRemoveBookButton(callback) {
   const libraryContainer = document.querySelector("#library");
   libraryContainer.addEventListener('click', e => {
      if (!e.target.classList.contains("removeBookButton")) return;

      const bookCard = e.target.closest('.book');
      const uuid = bookCard.dataset.uuid;
      console.log({ uuid });
      callback(uuid);
   });
}