//9. parent class
import View from './View.js'
import previewView from './previewView.js'
import icons from 'url:../../img/icons.svg' //parcel 1

class BookmarksView extends View {
    _parentElement = document.querySelector('.bookmarks__list')
    _errorMessage = `No bookmarks yet. Find a recipe and bookmark it.` //7. view already knows the message it wants to display
    _message = ``;


    //16. add handler => bug with curEl and newEl array size comparisons
    addHandlerRender(handler) {
        window.addEventListener('load', handler) //16. render bookmarks on load 
    }


    _generateMarkup() {
        // console.log(this._data);
        //9. _data => inherited from parent 
        // console.log(this._data); //9. returns array => forEach to return unique markup
        return this._data
            .map(bookmark => previewView.render(bookmark, false))
            .join(''); //15. markup that is returned must be a string to be inserted into HTML => view -> bookmarksView -> previewView => render() => generate markup => does not work ===> SOLUTION: change render() in View.js => render parameter (t/f)
        //Reuse render() to pass array to previewView to generate markup rather than creating new function, however, must prevent it from inserting markup to the DOM as that is the default action of render()
        //depending on which instance render() is called => will add markup to DOM (must avoid repeated render to DOM) therefore by adding parameter render=false, can avoid adding to DOM and returning the markup itself as an array of strings to be inserted in Views.js
        // => bookmarksView.render(model.state.bookmarks) -> insert markup to DOM (render = true), render() on previewView therefore must reurn ONLY THE MARKUP and NOT INSERT TO DOM (render = false) by having bookmarksView pass array of bookmarks to have markup generated to previewView (previewView.render(bookmark, false))

    }

    //     _generateMarkup() {
    //         return this._data.map(this._generateMarkupPreview).join('');
    //     }

    //     _generateMarkupPreview(result) {
    //         const id = window.location.hash.slice(1)
    //         return `
    //     <li class="preview">
    //         <a class="preview__link ${result.id === id ? 'preview__link--active' : ''}" href="#${result.id}">
    //         <figure class="preview__fig">
    //             <img src="${result.image}" alt="${result.title}" />
    //               </figure>
    //     <div class="preview__data">
    //         <h4 class="preview__title">${result.title}</h4>
    //         <p class="preview__publisher">${result.publisher}</p>
    //     </div>
    //             </a >
    //           </li >
    //     `
    //     }
}

export default new BookmarksView();