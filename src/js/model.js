//refer to architecture
import 'regenerator-runtime/runtime'
import { API_URL, RES_PER_PAGE, KEY } from './config.js'
// import { getJSON, sendJSON } from './helpers.js'
import { AJAX } from './helpers.js'


//4. live connection import/export => changes in state will result in changes throughout code
export const state = {
    recipe: {}, //4. set initial state as an empty object (no original data manipulation)

    //8. all data retrieved from search API will be stored
    search: {
        query: '', //good to store query in state => know what people are searching for
        results: [],
        page: 1,
        resultsPerPage: RES_PER_PAGE,
    },
    bookmarks: [],

};

const createRecipeObject = function (data) {
    //1. console.log(res, data); //1. where data's object has a property called 'data' that stores recipe information
    //1. eformat API json property names => remove underscores
    //1. property name = value ==> use destructuring
    //1. let recipe = data.data.recipe;
    const { recipe } = data.data; //1. use 'let' to immediately create a new object
    //4. this recipe variable will be responsible for only providing data to the state.recipe object (not the same)

    //4. pull data from web api and add properties (manipulating) empty custom recipe object => impure function with the side effect of manipulating state variable 
    // state.recipe = {
    return {
        //1. set new object to have the following properties with their respective value set to the values taken from data.data.recipe (API object)
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        sourceUrl: recipe.source_url,
        image: recipe.image_url,
        servings: recipe.servings,
        cookingTime: recipe.cooking_time,
        ingredients: recipe.ingredients,
        //18. most of the default API recipes do not have a key, cannot simply add key property => add only if one exists
        ...(recipe.key && { key: recipe.key }) //18. short circuiting ==> if recipe.key exists && return key: recipe.key object (as an object) => spread operator to unpack it immediately in the same line
        //18. similar to turnery operator but usable as a property/value setter
    };
}

//4. retrieving data from the web: conversion from web api format => custom format (no output)
export const loadRecipe = async function (id) { //4. pass id as model is not generating it but controller
    //4. Error handling
    try {
        //1. LOADING RECIPE
        const data = await AJAX(`${API_URL}${id}?key=${KEY}`) //5. resolved value of promise by json() => await
        //19. adding ?key=${KEY} => inputs own recipes into search base 

        state.recipe = createRecipeObject(data)


        // 14. bookmark persistence => as recipe renders from scratch, every selection of recipe will remove bookmark ===> SOLUTION: ADD BOOKMARKED PROPERTY ON LOAD (T/F) => check API object against boomark array state and set bookmarked to API object true else false otherwise
        if (state.bookmarks.some(bookmark => bookmark.id === id))
            state.recipe.bookmarked = true
        else state.recipe.bookmarked = false

        // console.log(state.recipe);
    } catch (err) {
        //5. temporary error handling
        console.error(`Own message: ${err}`); //5. currently error is occuring in helpers.js => goal is to handle it in model.js

        //7. rethrow error
        throw err //7. propagate error so that current async function gets rejected and able to be caught in controller.js (otherwise it'll register as settled => error in model but not in controller)
    }
}

//8. Search functionality

export const loadSearchResult = async function (query) { //function will be called externally (controller) => need to pass argument
    try {
        state.search.query = query; //8. store query 

        const data = await AJAX(`${API_URL}?search=${query}&key=${KEY}`)
        //19. adding ?key=${KEY} => inputs own recipes into search base 
        console.log(data); //8. object => 'data' object => 'recipes' array (note that recipes only contain select properties of their respective recipes => usage purely search based and can be used then to find the specific recipe details)

        state.search.results = data.data.recipes.map(rec => { //8. returns new array with current objects which shall be stored into the state for search 
            return {
                //8. ensure same property names as state.recipe
                id: rec.id,
                title: rec.title,
                publisher: rec.publisher,
                image: rec.image_url,
                ...(rec.key && { key: rec.key }) //19. adding key to search results
            };
        });
        state.search.page = 1;  //12. returning page to 1 upon new search (as opposed to maintaining state)
    } catch (err) {
        console.log(err);
        throw err
    }
}

//10. return only the page to be rendered and not the entire object
//10. page = default set in state 
export const getSearchResultsPage = function (page = state.search.page) { //10. does not have to be async as API fetch already completed
    //10. know current page
    state.search.page = page;

    const start = (page - 1) * state.search.resultsPerPage; //0 //10. will be dynamic => i.e. pass page 1, 1 - 1 = 0 => set start parameter
    const end = (page * state.search.resultsPerPage) //9;

    return state.search.results.slice(start, end) //note end parameter is non-inclusive
}

export const updateServings = function (newServings) {
    //12. reach into state.recipe.ingredients => change 'quantity' (data manipulation)
    state.recipe.ingredients.forEach(ing => {
        ing.quantity = ing.quantity * newServings / state.recipe.servings
        //12. new Qt = oldQt * newServings / old Servings
    })

    //12. persist new state of servings so that further changes can be made
    state.recipe.servings = newServings
}

const persistBookmarks = function () { //16. do not need to export as it is being called within model.js
    localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks))
}

export const addBookmark = function (recipe) {
    //14. add bookmark to state
    state.bookmarks.push(recipe)

    //14. mark current recipe as bookmark
    if (recipe.id === state.recipe.id) state.recipe.bookmarked = true //setting new property to recipe

    //16. place bookmarks into local storage
    persistBookmarks();
}

//14. Common practice => add something by passing entire object, removing something by passing only the id
export const deleteBookmark = function (id) {
    //14. remove from bookmarks array
    const index = state.bookmarks.findIndex(el => el.id === id) //14. return and set variable of index as index of element with the same id that was passed into the function
    state.bookmarks.splice(index, 1); //14. remove the element at the position of the specified index
    //14. mark current recipe as NOT bookmarked
    if (id === state.recipe.id) state.recipe.bookmarked = false

    persistBookmarks();
}

//16. pull bookmarks from local storage (on load/initialisation)
const init = function () {
    const storage = localStorage.getItem('bookmarks')
    if (storage) state.bookmarks = JSON.parse(storage)
}
// 16. comment init() out when using the debugger clearBookmarks
init()

//16. debugging => clear bookmarks on reload from local storage without having to remove them one by one
const clearBookmarks = function () {
    localStorage.clear('bookmarks')
}
// keep clearBookmarks() commented out and use when needed
// clearBookmarks()


export const uploadRecipe = async function (newRecipe) { //18. async as it will make a request to upload data
    try {
        //18. take data out of string and put into object
        //18. must convert data to match fetch data of API (where ingredients are stored as entry objects in an array)
        // console.log(Object.entries(newRecipe));
        const ingredients = Object.entries(newRecipe).filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '').map(ing => {
            // const ingArr = ing[1].replaceAll(' ', '').split(',')
            const ingArr = ing[1].split(',').map(el => el.trim())
            //test if ingArr has the length of 3
            if (ingArr.length !== 3) throw new Error('Wrong ingredient format. Please use the correct format') //render error message to addRecipeView.js
            const [quantity, unit, description] = ingArr; //split elements accordingly and store into individual variables via destructuring 


            return { quantity: quantity ? +quantity : null, unit, description }; //return destructured elements as an object to match API format
        }); //entries => convert to array where entry[0] is first element of array entry and entry[1] is second element of array entry
        // console.log(ingredients); //ignores empty strings and other entries that are not ingredients



        const recipe = { //set format to be the same as API
            title: newRecipe.title,
            source_url: newRecipe.sourceUrl,
            image_url: newRecipe.image,
            publisher: newRecipe.publisher,
            cooking_time: +newRecipe.cookingTime,
            servings: +newRecipe.servings,
            ingredients,
        };
        // console.log(recipe);
        const data = await AJAX(`${API_URL}?key=${KEY}`, recipe);  //18. sendJSON will return recipe data, must be stored and awaited 
        //18. convert received object into state.recipe in the same format usable by application
        state.recipe = createRecipeObject(data)
        addBookmark(state.recipe); //automatically adds newly created recipe to bookmarks

    } catch (err) {
        throw err;
    }


}