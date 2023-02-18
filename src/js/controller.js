//4. import from model 
import * as model from './model.js' //model.(variableName)
import { MODAL_CLOSE_SEC } from './config.js'
import recipeView from './views/recipeView.js'
import searchView from './views/searchView.js'
import resultsView from './views/resultsView.js'
import paginationView from './views/paginationView.js'
import bookmarksView from './views/bookmarksView.js'
import addRecipeView from './views/addRecipeView.js'

// import 'core-js/stable'
// import 'regenerator-runtime/runtime'
// import { async } from 'regenerator-runtime'

// const recipeContainer = document.querySelector('.recipe'); //8. DOM => view

// if (module.hot) {
//   module.hot.accept();
// }



// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
/////////1. LOADING A RECIPE FROM API/////
//1. IMPORT core-js + regenerator-runtime ==> polyfill
////////2. RENDERING THE RECIPE////////
/////////3. LISTENING FOR LOAD AND HASHCHANGE EVENTS///////
//3. Create fake anchor tag in div .search-results ==> listening for changes in url hash key ===> clicking on the anchor tag will change the url to the respective hash key of the link
////////4. REFACTORING FOR MVC////////////
////////5. HELPERS AND CONFIGURATION FILES///////
////////6. EVENT HANDLERS IN MVC: PUBLISHER-SUBSCRIBER PATTERN/////////
////////7. IMPLEMENTING ERROR HANDLING AND SUCCESS MESSAGES////////
//7. Handlding error: display an error message in the View
////////8. IMPLEMENTING SEARCH RESULTS//////////////
//8. User Search (EVENT) => Load search results (ASYNC) => Render search results
////////9. IMPLEMENTING SEARCH RESULTS - RENDER IN SIDEBAR/////////
//9. create resultsView
////////10. IMPLEMENTING PAGINATION///////////
////////11. IMPLEMENTING PAGINATION - PREV/NEXT BUTTONS///////
//11. if(page 1) => next page UNLESS <10 results; if(page 2) => prev/next page UNLESS < 10 results (display only prev)
////////12. UPDAtING RECIPE SERVINGS////////
////////13. DEVELOPING A DOM UPDATING ALGORITHM///////
//13. control servings in 12. => rerenders page entirely (image refresh every update)
////////14. IMPLEMENTING BOOKMARKS///////
////////15. IMPLEMENTING BOOKMARKS - BOOKMARKED TAB////////////
////////16. STORING BOOKMARKS WITH LOCALSTORAGE///////////////
////////17. UPLOADING A NEW RECIPE////////////
////////18. UPLOADING A NEW RECIPE - SENDING DATA TO API////////
////////19. UPLOADING A NEW RECIPE - HASH////////
////////20. WRAPPING UP: FINAL CONSIDERATIONS - JSDOCS////////
// Additional features/improvements
// 1. display number of pages between the pagination buttons
// 2. ability to sort search results by duration or number of ingredients
// 3. Perform ingredient validation in view, before submitting the form 
// 4. Improve recipe ingredient input: separate in multiple fields and allow more than 6 ingredients
// Features
// 5. Shopping list feature: button on recipe to add ingredients to a list
// 6. Weekly meal planning feature: assign recipes to the next 7 days and show on a weekly calendar
// 7. Get nutrition data on each ingredient from spoonacular API and calculate the total calories of a recipe
// GIT ==> git reset --hard HEAD => restores to state to last commit (removing modifications)
// GIT ==> git add -A
// GIT ==> git commit -m 'initialisation' <== on first commit, short descriptions for following commits
// GIT ==> git log => see all commits => get commit key => reference to certain commit
// GIT ==> git reset --hard 'key' => return to a certain commit (NOTE VERY DANGEROUS -> better to create branch)
// GIT ==> git branch (q to close)
// GIT ==> git branch 'name of branch' => create parallel branch
// GIT ==> get checkout 'name of branch' => switch to named branch
// GIT ==> git merge 'branch to merge with current' => merge branch 



//1. controller function/event handler ==> GET single recipe from API
const controlRecipes = async function () {

  try {
    //3. Dynamically get the ID of the recipe as hash and show respective recipe according to that hash key
    //Application Logic
    const id = window.location.hash.slice(1); //3. where 'location' is the entire url => take hash
    //3. .slice() to remove # symbol
    // console.log(id); //#(whatever id it is)
    //3. IF NO ID (i.e. root url) ==> error: 500 ===> no hash == searches for empty string 
    if (!id) return; //3. removes error and loads on homescreen (cancels search)
    recipeView.renderSpinner() //presentation logic  //4. does not need to pass in parameter 'recipeContainer' as it will be passed within the class
    //4. as renderSpinner is a public class => it'll be usable with any other views (e.g. bookmark view) as #parentElement and #data is applicable to all 

    //STEP 0: UPDAATE RESULTS VIEW TO MARK SELECTED SEARCH RESULT
    //13. Update results view to mark selected search result
    resultsView.update(model.getSearchResultsPage());

    //STEP 1: UPDATING BOOKMARKS VIEW
    // 15. Bookmarks tab => show selected recipe as highlighted
    bookmarksView.update(model.state.bookmarks);

    //STEP 2: LOADING RECIPE (from model)
    await model.loadRecipe(id) //4. async function => returns promise 
    //4. does not return any data => no need to store into variable
    // const { recipe } = model.state //4. temporarily store in variable 'recipe'

    //STEP 3: RENDERING RECIPE 
    //4. Render with object exported from class
    recipeView.render(model.state.recipe) //pass in data via render() which will be publically created in the class
  } catch (err) {
    //7. error handled by model => controller => recipeView
    recipeView.renderError() //message should be hardcoded to view and not in controller (presentation logic)
    // alert(err);
    console.error(err);
  }
}
// controlRecipes()

//8. search
const controlSearchResults = async function () {
  try {
    //9. load spinner from parent => child 
    resultsView.renderSpinner();
    // console.log(resultsView); //9. see prototype chain

    //8. Get search query
    const query = searchView.getQuery();
    if (!query) return;
    //8. initial state => no query => need to listen for 'submit' or 'click' event (pub-sub pattern)

    //8. load search results
    await model.loadSearchResult(query) //8. loadSearchResult() does not return anything and does not need to be stored (all it does is manipulate state)

    //8. render results
    // console.log(model.state.search.results);
    //9. inherited method
    // resultsView.render(model.state.search.results)
    resultsView.render(model.getSearchResultsPage()) //10. render by pagination; store page number in state (render prev/next page); //default '' = page 1

    //11. Render initial pagination buttons
    //11. pass data required into paginationView.js : State => search {results, page, resultsPerPage}
    paginationView.render(model.state.search)

  } catch (err) {
    console.log(err);
  }
}

//11. controller function/event handler => execute on click of page button
const controlPagination = function (goToPage) { //11. receive goToPage number from paginationView.js
  // console.log(goToPage);

  //11. NOTE => render() will OVERRIDE previous markup due to _clear() before any markup is inserted
  //11. render NEW results (next/prev page)
  resultsView.render(model.getSearchResultsPage(goToPage)) //11. render new results => automatically UPDATES state.search.page in model.js as it passes goToPage number back to model.js with a specific line of code updating page state
  //11. render  NEW pagination buttons
  paginationView.render(model.state.search) //11. update state.search.page in model.js to render NEW paginationView and therefore new buttons
}

//12. controller function/event handler => control servings
const controlServings = function (newServings) {
  //12. update the recipe servings (in state) on click
  model.updateServings(newServings)

  //12. update the recipe view => re-render recipe with the new state
  // recipeView.render(model.state.recipe) //13. rather than render() => update()
  recipeView.update(model.state.recipe) //updates only text and attributes in the DOM and not the entire view
}

const controlAddBookmark = function () {
  //ADD/REMOVE BOOKMARK
  //14. add bookmark only when recipe is NOT YET bookmarked

  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  // console.log(model.state.recipe); //14. adds bookmarked: true => recipeView: if bookmarked: true => render fill
  //UPDATE RECIPE VIEW
  //14. update recipe for changed elements
  recipeView.update(model.state.recipe);

  //RENDER BOOKMARKS
  bookmarksView.render(model.state.bookmarks); //15. In 13, stored entire data about the recipe into the bookmarks array in order to display them
}

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks)
}
const controlAddRecipe = async function (newRecipe) { //18. convert to async as uploadRecipe is async (handling error)
  // console.log(newRecipe);
  try { //18. try/catch block to render incorrect format for ingredient entry by user
    //18. Show loading spinner
    addRecipeView.renderSpinner();

    //17. Upload recipe data
    await model.uploadRecipe(newRecipe) //18. convert to await as uploadRecipe is async (handling error)
    console.log(model.state.recipe); //18. converted API to usable format => need to add bookmarked property and API key

    //18. render newly created recipe in view
    recipeView.render(model.state.recipe)

    //18. display success message
    addRecipeView.renderMessage()

    //19. render bookmarked view (tab)
    bookmarksView.render(model.state.bookmarks) //19. render not update as new element is being inserted

    //19. Changing id into url
    window.history.pushState(null, '', `#${model.state.recipe.id}`) //change url without reloading page; takes 3 arguments (state => irrelevant; set to null, title => irrelevant; set to '', url => `#${id}`)

    //18. close form window automatically
    setTimeout(function () { //18. using timeout so there is time for 'success' message to display
      addRecipeView.toggleWindow()

    }, MODAL_CLOSE_SEC * 1000)
  } catch (err) {
    console.error('own error', err);
    addRecipeView.renderError(err.message) //18. renderError() from View.js using own custom message
  }

}


//6. Subscriber
const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
  //12. test controlServings CANNOT work here => if test => controlRecipes
  // controlServings() // 12.async not ready to test
}

init();





/*

Project Planning

PLANNING STEP
1. User Stories
- Description of the application's functionality from the user's perspecive
- Common Format: As a [type of user], I want [an action] so that [a benefit]

a. As a user, I want to search for recipes, so that I can find new ideas for meals
b. As a user, I want to be able to update the number of servings, so that I can cook a meal for different number of people
c. As a user, I want to bookmark recipes, so that I can review them later
d. As a user, I want to be able to create my own recipes, so that I have them all organised in the same app
e. As a user, I want to be able to see my bookmarks and own recipes when I leave the app and come back later, so that I can close the app safely after cooking

2. Features
a. Search functionality: input field to send request to API with searched keywords
a. Display results with pagination
a. Display recipe with cooking time, servings, and ingredients
b. Change servings functionality: update all ingredients according to current number of servings
c. Bookmarking functionality: display list of all bookmarked recipes
d. User can upload own recipes
d. User recipes will automatically be bookmarked
d. User can only see their own recipes, not recipes from other users
e. Store bookmark data in the browser using local storage
e. On page load, read saved bookmarks from local storage and display

3. Flowchart

4. Architecture
Aspects of Good Architecture
- Gives structure (the way the code is organised e.g. different modules, classes, and functions)
- Gives maintainability: easily change it in the future
- Gives expandability: easily add new features

===> perfect architecture: incorporates all three aspects

Building architecture methods:
- Create own architecture (small projects)
- Use a well-established architecture pattern (MVC - Model View Controller, MVP - Model View Presenter, Flux, etc)
- Use a framework (React, Angular, Vue, Svelte, etc.)

COMPONENTS OF ANY ARCHITECTURE
- Business logic
=> Code that solves the actual business problem
=> i.e. logic that is really related to solve the problem that the business set out to solve in the first place
=> Directly related to what business does and what it needs
=> Example: sending messages, storing transactions, calculating taxes...

- State
=> Essentially stores all thhe data about the application (data about the application's frontend)
=> Shoudl be the "single source of truth"
=> UI should be kept in sync with the state => changes in UI should match changes in state and vice versa
=> I.e. keeps in sync with presentation logic
=> State libraries exists ===> Redux/Modex

- HTTP Library
=> Responsible for making and receiving AJAX requests (e.g. fetch())
=> Optional but almost always necessary in real-world apps

- Application Logic (Router)
=> Code that is only concerned about the implementation of applicaton itself
=> Handles navigation and UI events (mapping actions to the user's navigation)

- Presentation Logic (UI)
=> Code that is concerned about the visible part of the appplication
=> Essentially displays application state
=> I.e. keeps in sync with state

Good architecture has a method of separating these components

MODEL-VIEW-CONTROLLER (MVC) ARCHITECTURE
MVC architecture contains three main parts:
Model:
- Application's data
- Business logic
- State
- HTTP library 
=> Works with the web (API/backend)

Controller:
- Application logic 
=> Bridge between Model and View (which should know nothing about each other => completely independent from each other)
=> Handles UI events and dispatches tasks to model and view (controls and orchestrates UI action)
=> Both View and Model do not have any ties to controller, controller is the one that acts upon and pulls from

View:
- Presentation logic (UI layer)
- User interaction 

Steps starting from UI:
0 => User event
1 => Controller handles event (application logic - Controller)
2 ===> Controller ===> change data and controller ===> change presentation (Model/View)
3 => =AJAX request to the web (HTTP Library - Model) Model ---> Web ---> Model
4 => Controller takes data from model and sents it to the view (model ---> controller ---> view) 
5 => View renders data for user to see (View ---> User)

where ===> is connected by function call and import
where ---> is data flow

//RECIPE DISPLAY - MVC 
=> UI events (select recipe or load recipe ID) -> handled by controller
=> data retrieval (load recipe [async]) -> handled by Model 
=> Render recipe -> Model ---> Controller ---> View

Event Handlers in MVC: Publisher-Subscriber Pattern
- Events should be handled in the controller (otherwise we would have application logic in the view)
- Events should be listened for in the view (otherwise we would need DOM elements in the controller)
Publisher:
=> Code that knows WHEN to react ==> event listener
Subscriber:
=> Code that wants to react ==> code to be executed upon event

- Subscribe from the controller to the publisher in the views by passing in the subscriber function
0 => Program starts
1 => init() in controller passes in function as argument (has no control over publisher)
2 => Event listener initialised
3 => Event occurs 
4 => callback is called 

DEVELOPMENT STEP








*/