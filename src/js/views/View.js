
//9. parent view to contain common methods to be inherited by the children views

import icons from 'url:../../img/icons.svg' //parcel 1

//9. export class itself as no view instances will be created from it 
export default class View {
    _data;

    //20. writing js documentaion using /** */
    /**
     * Render the received object ot the DOM
     * @param {Object | Object[]} data The data to be rendered (e.g. recipe)
     * @param {boolean} [render=true] If false, create markup string instead of rendering to the DOM 
     * @returns {undefined | string} A markup string is returned if render=false
     * @this {Object} View object
     * @author Howell Tong
     * @todo Finish implementation
     */

    //4. render() will be common to all the Views => render HTML but for different purposes THEREFORE do not generate HTML directly in method but externally as #generateMarkup()
    render(data, render = true) { //4. model.state.recipe will be passed into render() in the controller 
        //9. immediately checking if data exists
        if (!data || (Array.isArray(data) && data.length === 0)) return this.renderError()
        //9. if no data OR if array length = 0 (using isArray helper func to check if data is array) => terminate code and render error

        this._data = data;
        // console.log(this._data);
        const markup = this._generateMarkup();
        //9. PARENT CLASS uses _generateMarkup() in method therefore ALL CHILD CLASSES must have _generateMarkup()
        //2. remove default message not removed
        // recipeContainer.innerHTML = ''

        //15. 
        if (!render) return markup; //15. return markup and not insert into DOM (hence parameter => pass through 'false' in resultsView and bookmarksView so previewView can return markup and terminate function at this point (avoiding clear and insertAdjacentHTML))

        this._clear();
        //2. Insert HTML into DOM (parent element)
        this._parentElement.insertAdjacentHTML('afterbegin', markup)
        //2. NOTE: on first load => 3 problems: missing icons, missing ingredients, default message not removed
    }

    //13. update multiple components => parent class and not instances
    update(data) {
        //13. REMOVE: on refresh (error) => controlRecipes() => window.location.hash => immediately tries to load recipe even if there was no search before => resultsView.update() => no search results => returns empty array => will satisfy conditional operand and immediately displays error (UNWANTED)
        // if (!data || (Array.isArray(data) && data.length === 0)) return this.renderError()
        this._data = data; //13. update and then set new data

        const newMarkup = this._generateMarkup(); //13. updates markup => requires current markup and new markup for comparison where 'this._generateMarkup()' is current markup
        //13. create new markup but NOT render it 
        const newDOM = document.createRange().createContextualFragment(newMarkup) //13. chain method will convert string => real DOM node objects
        const newElements = Array.from(newDOM.querySelectorAll('*')) //13. select all elements of newDOM and convert to Array
        // console.log(newElements); //13. provides NodeList of all elements => can make comparisons of data-set
        //13. make comparisons of newDOM (logged in console) and what is currrently displayed on view (as page has not yet been re-rendered)
        const curElements = Array.from(this._parentElement.querySelectorAll('*')) //13. select current elements and convert to array
        // console.log(curElements); //13. old
        // console.log(newElements); //13. new

        newElements.forEach((newEl, i) => { //13. new element and current index (get current element)
            //13. must loop over both arrays simultaneously
            const curEl = curElements[i];
            // console.log(curEl, newEl.isEqualNode(curEl)) //13. comparing content ==> boolean (true/false) depending on change of content AS WELL as attributes (e.g. data attributes) => note: also applies to parent elements (e.g. ingredient display, containers, etc)

            //13. UPDATE CHANGED TEXT
            if (
                !newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() !== ''
            ) { //13. if newEl and curEl are not equal => change content
                //13: node => changes parent element as well as they won't be equal (e.g. containers) => must determine if element contains text
                //13. node property => nodeValue where returns null or text content depending on value type
                //13. firstChild() => newEl is the element, need to select text itself which is the first child of the node
                // console.log(newEl.firstChild.nodeValue.trim()); //13. provides string of text content
                curEl.textContent = newEl.textContent //13. cur el updated to new el (incl descendants)
            }

            //13. UPDATE CHANGED ATTRIBUTES
            //13. change attributes so that dataset can change
            if (!newEl.isEqualNode(curEl)) {
                // console.log(newEl.attributes); //13. log attributes of all elements that have CHANGED in a NamedNodeMap
                Array.from(newEl.attributes).forEach(attr => curEl.setAttribute(attr.name, attr.value)); //13. replace all of the current attributes with the attributes coming from the new element
            }
        })

    }

    _clear() { //private method as it will only be called in the class
        this._parentElement.innerHTML = ''
    }

    //2. External function => load spinner
    renderSpinner() { //4. public method so it can be called in the controller
        const markup = `
  <div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
        </div>
  `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    };

    //7. Error handling (before 7. handled in model.js)
    renderError(message = this._errorMessage) { //7. dynamically render error message on UI by passing it in
        //default is this._errorMessage => if nothign is passed through the parameter, default will display => intention: pass nothign to renderError() in controller so that this message will always be the response

        const markup = `
        <div class="error">
            <div>
              <svg>
                <use href="${icons}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>
        `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    //7. success handling
    renderMessage(message = this._message) {
        const markup = `
        <div class="message">
            <div>
              <svg>
                <use href="${icons}#icon-smile"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>
        `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
}