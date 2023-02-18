import { async } from 'regenerator-runtime'
import { TIMEOUT_SEC } from './config.js';

//5. Helper functions => reusable functions across project
const timeout = function (s) {
    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};

export const AJAX = async function (url, uploadData = undefined) { //set uploadData to undefined (when fetching)
    try {
        const fetchPro = uploadData ? fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(uploadData),
        }) : fetch(url);

        const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)])
        const data = await res.json()

        if (!res.ok) throw new Error(`${data.message} (${res.status})`)
        return data;
    } catch (err) {
        throw err;
    }
}

/*
export const getJSON = async function (url) {
    try {
        //1. await for promise of fetch() (stops code execution in the background) and store promise in variable (store response object)
        const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)])//3. use id to dynamically show recipe
        //5. setTimeout() => note: 10s appears randomly => set in config
        //1. await for promise of json() (stops code execution in the background) and store converted JSON data in variable
        const data = await res.json()

        if (!res.ok) throw new Error(`${data.message} (${res.status})`) //where API already provides its own error message 

        //return data from getJSON function as it will be used externally
        return data; //5. resolved value of promise by json()
    } catch (err) {
        // console.error(err); //5. promise it being fulfilled despite rejection
        //5. must rethrow error so that it may propagate out of getJSON() to the model.js error handling block
        throw err; //5. throw to reject error so that it may be caught in model.js
    }
}

export const sendJSON = async function (url, uploadData) {
    try {
        const res = await Promise.race([fetch(url, { //18. fetch() object of options
            method: 'POST', // 18. set type (post => send )
            headers: {
                'Content-Type': 'application/json', //letting API know the format of the upload
            },
            body: JSON.stringify(uploadData),  //payload of request
        }), timeout(TIMEOUT_SEC)])
        const data = await res.json()

        if (!res.ok) throw new Error(`${data.message} (${res.status})`)
        return data;
    } catch (err) {
        throw err;
    }
}
*/