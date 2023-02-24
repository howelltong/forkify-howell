
import 'regenerator-runtime/runtime';
import { API_URL, RES_PER_PAGE, KEY } from './config.js';
// import { getJSON, sendJSON } from './helpers.js';
import { AJAX } from './helpers.js';



export const state = {
    recipe: {},
    search: {
        query: '',
        results: [],
        page: 1,
        resultsPerPage: RES_PER_PAGE,
    },
    bookmarks: [],

};

const createRecipeObject = function (data) {
    const { recipe } = data.data;
    return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        sourceUrl: recipe.source_url,
        image: recipe.image_url,
        servings: recipe.servings,
        cookingTime: recipe.cooking_time,
        ingredients: recipe.ingredients,
        ...(recipe.key && { key: recipe.key })
    };
};

export const loadRecipe = async function (id) {
    try {
        //LOADING RECIPE
        const data = await AJAX(`${API_URL}${id}?key=${KEY}`);

        state.recipe = createRecipeObject(data);

        if (state.bookmarks.some(bookmark => bookmark.id === id))
            state.recipe.bookmarked = true
        else state.recipe.bookmarked = false
    } catch (err) {
        console.error(`Own message: ${err}`);
        throw err;
    };
};

//Search functionality
export const loadSearchResult = async function (query) {
    try {
        state.search.query = query;

        const data = await AJAX(`${API_URL}?search=${query}&key=${KEY}`);

        state.search.results = data.data.recipes.map(rec => {
            return {
                id: rec.id,
                title: rec.title,
                publisher: rec.publisher,
                image: rec.image_url,
                ...(rec.key && { key: rec.key })
            };
        });
        state.search.page = 1;
    } catch (err) {
        console.error(err);
        throw err;
    };
};

export const getSearchResultsPage = function (page = state.search.page) { //
    state.search.page = page;

    const start = (page - 1) * state.search.resultsPerPage;
    const end = (page * state.search.resultsPerPage);
    return state.search.results.slice(start, end);
};

export const updateServings = function (newServings) {
    state.recipe.ingredients.forEach(ing => {
        ing.quantity = ing.quantity * newServings / state.recipe.servings
        //new Qt = oldQt * newServings / old Servings
    });
    state.recipe.servings = newServings;
};

const persistBookmarks = function () {
    localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};

export const addBookmark = function (recipe) {
    //add bookmark to state
    state.bookmarks.push(recipe);

    //mark current recipe as bookmark
    if (recipe.id === state.recipe.id) state.recipe.bookmarked = true //setting new property to recipe

    //place bookmarks into local storage
    persistBookmarks();
};

export const deleteBookmark = function (id) {
    //remove from bookmarks array
    const index = state.bookmarks.findIndex(el => el.id === id);
    state.bookmarks.splice(index, 1);
    //mark current recipe as NOT bookmarked
    if (id === state.recipe.id) state.recipe.bookmarked = false

    persistBookmarks();
};

//pull bookmarks from local storage (on load/initialisation)
const init = function () {
    const storage = localStorage.getItem('bookmarks');
    if (storage) state.bookmarks = JSON.parse(storage)
};

init();

//debugging => clear bookmarks on reload from local storage
const clearBookmarks = function () {
    localStorage.clear('bookmarks');
};
// clearBookmarks()


export const uploadRecipe = async function (newRecipe) {
    try {
        const ingredients = Object.entries(newRecipe).filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '').map(ing => {
            const ingArr = ing[1].split(',').map(el => el.trim())
            if (ingArr.length !== 3) throw new Error('Wrong ingredient format. Please use the correct format')
            const [quantity, unit, description] = ingArr;

            return { quantity: quantity ? +quantity : null, unit, description };
        });

        const recipe = { //set format to be the same as API
            title: newRecipe.title,
            source_url: newRecipe.sourceUrl,
            image_url: newRecipe.image,
            publisher: newRecipe.publisher,
            cooking_time: +newRecipe.cookingTime,
            servings: +newRecipe.servings,
            ingredients,
        };

        const data = await AJAX(`${API_URL}?key=${KEY}`, recipe);
        state.recipe = createRecipeObject(data);
        //automatically add newly created recipe to bookmarks
        addBookmark(state.recipe);
    } catch (err) {
        throw err;
    };
}