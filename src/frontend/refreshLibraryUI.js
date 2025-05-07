import displayBookInLibrary from "./displayBookInLibrary.js";
import clearLibraryUI from "./clearLibraryUI.js";

export default function refreshLibraryUI(libraryArray) {
   clearLibraryUI();
   
   libraryArray.forEach(book => {
      displayBookInLibrary(book);
   })
}