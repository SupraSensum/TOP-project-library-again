export default function clearLibraryUI() {
   const libraryContainer = document.querySelector("#library");
   libraryContainer.innerHTML = '';
   libraryContainer.textContent = '';
}