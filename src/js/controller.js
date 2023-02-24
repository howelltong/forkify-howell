import * as model from './model.js';
import { MODAL_CLOSE_SEC } from './config.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';

// import 'core-js/stable';
// import 'regenerator-runtime/runtime';
// import { async } from 'regenerator-runtime';

// if (module.hot) {
//   module.hot.accept();
// };

const controlRecipes = async function () {
  try {
    //3. Dynamically get the ID of the recipe as hash and show respective recipe according to that hash key
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();

    //STEP 0: UPDATE RESULTS VIEW TO MARK SELECTED SEARCH RESULT
    resultsView.update(model.getSearchResultsPage());

    //STEP 1: UPDATING BOOKMARKS VIEW
    bookmarksView.update(model.state.bookmarks);

    //STEP 2: LOADING RECIPE (from model)
    await model.loadRecipe(id);

    //STEP 3: RENDERING RECIPE 
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
    console.error(err);
  };
};

const controlSearchResults = async function () {
  try {
    //load spinner
    resultsView.renderSpinner();

    //Get search query
    const query = searchView.getQuery();
    if (!query) return;

    //load search results
    await model.loadSearchResult(query);

    //render results
    resultsView.render(model.getSearchResultsPage());

    //Render initial pagination buttons
    paginationView.render(model.state.search);

  } catch (err) {
    console.log(err);
  };
};

const controlPagination = function (goToPage) {

  //render NEW results (next/prev page)
  resultsView.render(model.getSearchResultsPage(goToPage));

  //render  NEW pagination buttons
  paginationView.render(model.state.search);
}

const controlServings = function (newServings) {
  model.updateServings(newServings)
  recipeView.update(model.state.recipe);
}

const controlAddBookmark = function () {
  //ADD/REMOVE BOOKMARK
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  //UPDATE RECIPE VIEW
  recipeView.update(model.state.recipe);

  //RENDER BOOKMARKS
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};
const controlAddRecipe = async function (newRecipe) {
  try {
    //Show loading spinner
    addRecipeView.renderSpinner();

    //Upload recipe data
    await model.uploadRecipe(newRecipe);
    console.log(model.state.recipe);

    //render newly created recipe in view
    recipeView.render(model.state.recipe);

    //display success message
    addRecipeView.renderMessage();

    //render bookmarked view (tab)
    bookmarksView.render(model.state.bookmarks);

    //Changing id into url
    window.history.pushState(null, '', `#${model.state.recipe.id}`);

    //close form window automatically
    setTimeout(function () {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (err) {
    console.error('own error', err);
    addRecipeView.renderError(err.message);
  };
};


//Subscriber
const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
};

init();
