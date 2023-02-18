//9. parent class
import View from './View.js'
import previewView from './previewView.js'
import icons from 'url:../../img/icons.svg' //parcel 1

class ResultsView extends View {
    _parentElement = document.querySelector('.results')
    _errorMessage = `No recipes found for your query. Please try another one.` //7. view already knows the message it wants to display
    _message = ``;

    _generateMarkup() {
        console.log(this._data);
        return this._data.map(result => previewView.render(result, false)).join('');
    }


    // _generateMarkup() {
    //     //9. _data => inherited from parent 
    //     console.log(this._data); //9. returns array => forEach to return unique markup
    //     return this._data.map(this._generateMarkupPreview).join('')

    // }

    // //13. if results.id === url id => activate class 'preview__link--active' => selected side bar container stays selected (css)
    // _generateMarkupPreview(result) {
    //     const id = window.location.hash.slice(1) //13. get url
    //     return `
    // <li class="preview">
    //     <a class="preview__link ${result.id === id ? 'preview__link--active' : ''}" href="#${result.id}">
    //     <figure class="preview__fig">
    //         <img src="${result.image}" alt="${result.title}" />
    //           </figure>
    // <div class="preview__data">
    //     <h4 class="preview__title">${result.title}</h4>
    //     <p class="preview__publisher">${result.publisher}</p>
    // </div>
    //         </a >
    //       </li >
    // `;

    // }
}

export default new ResultsView();