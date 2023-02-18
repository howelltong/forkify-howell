import View from './View.js'
import icons from 'url:../../img/icons.svg' //parcel 1

class AddRecipeView extends View {
    _parentElement = document.querySelector('.upload')
    _message = 'Recipe was successfully uploaded.'

    _window = document.querySelector('.add-recipe-window')

    _overlay = document.querySelector('.overlay')

    _btnOpen = document.querySelector('.nav__btn--add-recipe')

    _btnClose = document.querySelector('.btn--close-modal')

    constructor() { //instance construction
        super();
        this._addHandlerShowWindow();
        this._addHandlerHideWindow();
    }

    toggleWindow() {
        this._overlay.classList.toggle('hidden')
        this._window.classList.toggle('hidden')
    }

    //17. listening for events on open/close (called as soon as the page loads => nothing to do with controller as nothing is being processed) therefore run function as soon as object is created
    _addHandlerShowWindow() {
        this._btnOpen.addEventListener('click', this.toggleWindow.bind(this)
            // this._overlay.classList.toggle('hidden') //'this' key bound to btnOpen (incorrrect) => export function out of handler
            // this._window.classList.toggle('hidden'0
        )
    }

    _addHandlerHideWindow() {
        this._btnClose.addEventListener('click', this.toggleWindow.bind(this))
        this._overlay.addEventListener('click', this.toggleWindow.bind(this))
    }

    addHandlerUpload(handler) {
        this._parentElement.addEventListener('submit', function (e) {
            e.preventDefault();
            const dataArr = [...new FormData(this)]; //17. pass in form
            //17. array of arrays(entries) => convert entries to objects
            const data = Object.fromEntries(dataArr) //17. object => unpacked entries
            handler(data); //17. action of uploading data => API call => must get data to model.js

        })
    }

    _generateMarkup() {

    }

}


export default new AddRecipeView();
