//9. parent class
import View from './View.js'
//9. *******CHANGE ALL # => _ as parent-child inheritance (Parcel/Babel) does not support private fields, only protected

//2. HTML in JS => icons pathway are routed to current folder but needs to be routed to the 'dist' folder (with the specific name)
//2. Parcel => can import and create a variable that stores the specific path to the dist folder with the specific (and new) file name
// import icons from '../img/icons.svg' //parcel 1
import icons from 'url:../../img/icons.svg' //parcel 1
// console.log(icons); //2. import icons from '../img/icons.svg' //parcel 1

import fracty from "fracty"; //4. import according npm docs name
// console.log(Fraction); //Fraction object containing method Fraction => to call: Fraction.Fraction() else destructure on import to avoid .notation

//4. exporting RecipeView into controller will require a new object creation in Controller (unnecessary work and possibility of accidentally creating multiple views)
//4. ==> AVOID by creating object in this file and export object itself
//9. ADD PARENT METHODS
class RecipeView extends View { //4. later will have a parent class 'View' which will contain methods that all child views should inherit + private methods/classes
  //must define #parentElement and #data differently across Views
  _parentElement = document.querySelector('.recipe'); //4. makes it easier to render things in the parent element
  _errorMessage = `We could not find that recipe. Please try another one.` //7. view already knows the message it wants to display
  _message = ``;




  //6. PUBLISHER
  addHandlerRender(handler) {
    //6. DOM elements  === PRESENTATION LOGIC; Event handling === APPLICATION LOGIC => UI should be in Views but the callback function required is in the controller.js
    //3. Listening for changes in HASH url 
    // window.addEventListener('hashchange', handler)
    // //3. NOTE: event listener is listening for change => will update url with id upon CHANGE (if copied and pasted url, will not show recipe as there is no change) => SOLUTION: Listen for LOAD
    // window.addEventListener('load', handler)

    ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, handler));
  }

  //12. New event listener
  addHandlerUpdateServings(handler) {
    //12. buttons of interest => increase/decrease servings via button ('.btn--tiny)
    //12. event delegation
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--update-servings') //btn--tiny => class; btn--update-servings => functionality
      if (!btn) return;
      // console.log(btn);
      const { updateTo } = btn.dataset //12. note that update-to => auto conversion to updateTo
      if (+updateTo > 0) handler(+updateTo); //12. convert to number outside of declaration and in condition as cannot set variable property as +... => error undefined

      //connect newServings between view and controller via dataset attribute
    })

  }

  // 14. Event delegation => bookmark
  addHandlerAddBookmark(handler) {
    this._parentElement.addEventListener('click', function (e) {
      //14. specific bookmark will not exist on load as markup has not yet been generated => hence parent element/event delegation
      const btn = e.target.closest('.btn--bookmark');
      if (!btn) return;
      handler();
    })
  }


  _generateMarkup() { //4. cannot directly add to render() as each recipe will be unique => create separate private method

    //2. Change html to update dynamically according to the given recipe object 
    //2. EXAMPLE: replace src="src/img/test-1.jpg" with src="${recipe.image}" (recipe object => dynamic image url)
    //2. NOTE: ingredients => array of different separate ingredients information as objects (quantity, unit, description)
    //2. ICONS => comes from import => rerouted to DIST folder so it may display
    // const markup = ` //4. immediately return so render() can use 
    return `
    <figure class="recipe__fig">
        <img src="${this._data.image}" alt="${this._data.title
      }" class="recipe__img" />
        <h1 class="recipe__title">
          <span>${this._data.title}</span>
        </h1>
      </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${icons}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${icons}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--update-servings" data-update-to=${this._data.servings - 1}>
                <svg>
                  <use href="${icons}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--update-servings" data-update-to=${this._data.servings + 1}>
                <svg>
                  <use href="${icons}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated ${this._data.key ? '' : 'hidden'}">
            <svg>
              <use href="${icons}#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round btn--bookmark">
            <svg class="">
              <use href="${icons}#icon-bookmark${this._data.bookmarked ? '-fill' : ''}"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
          ${this._data.ingredients.map(this._generateMarkupIngredient).join('') //2. results become a string of ingredients; join('') => connect all the uniquely generated html elements together as one html element
      }
          </ul>
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${this._data.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
        `;
  }

  _generateMarkupIngredient(ing) { //2. must return html; therefore cannot use forEach and should use map()
    return `
            <li li class="recipe__ingredient" >
              <svg class="recipe__icon">
                <use href="${icons}#icon-check"></use>
              </svg>
              <div class="recipe__quantity">${ing.quantity ? fracty(ing.quantity).toString() : ''}</div>
              <div class="recipe__description">
                <span class="recipe__unit">${ing.unit}</span>
                ${ing.description}
              </div>
            </li >
            `;
  }
}

export default new RecipeView(); //4. no data passed in => does not require constructor()
