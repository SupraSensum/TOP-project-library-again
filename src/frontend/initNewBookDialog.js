export default function initNewBookDialog(callback) {
   const newBookButton = document.querySelector("#openNewBook");
   const newBookDialog = document.querySelector("#newBookDialog");
   const newBookCancel = document.querySelector("#cancelNewBook");
   const newBookForm = document.querySelector("#newBookDialog form");
   newBookButton.addEventListener('click', () => newBookDialog.showModal());
   newBookCancel.addEventListener('click', () => newBookDialog.close());
   newBookForm.addEventListener('submit', e => {
      e.preventDefault();
      newBookDialog.close('confirm');
   });
   newBookDialog.addEventListener('close', () => {
      if (newBookDialog.returnValue != 'confirm') return;

      const raw = Object.fromEntries(new FormData(newBookForm));

      let book = {
         title: raw.title,
         author: raw.author,
         numPages: Number(raw.pages),
         wasRead: newBookForm.elements.read.checked
      };

      callback(book);
   });
}