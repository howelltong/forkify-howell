function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},a=n.parcelRequire3a11;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},n.parcelRequire3a11=a),a.register("kyEFX",(function(t,n){var r,i;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var a={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},i=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a("kyEFX").register(JSON.parse('{"3EsVB":"index.9ad34338.js","cPzGy":"icons.c14567a0.svg"}'));var o=function(e){var t,n=Object.prototype,r=n.hasOwnProperty,i=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var a=t&&t.prototype instanceof _?t:_,o=Object.create(a.prototype),s=new H(r||[]);return i(o,"_invoke",{value:L(e,n,s)}),o}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var h="suspendedStart",p="suspendedYield",f="executing",g="completed",v={};function _(){}function m(){}function y(){}var b={};l(b,o,(function(){return this}));var w=Object.getPrototypeOf,k=w&&w(w(M([])));k&&k!==n&&r.call(k,o)&&(b=k);var $=y.prototype=_.prototype=Object.create(b);function E(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function n(i,a,o,s){var c=d(e[i],e,a);if("throw"!==c.type){var l=c.arg,u=l.value;return u&&"object"==typeof u&&r.call(u,"__await")?t.resolve(u.__await).then((function(e){n("next",e,o,s)}),(function(e){n("throw",e,o,s)})):t.resolve(u).then((function(e){l.value=e,o(l)}),(function(e){return n("throw",e,o,s)}))}s(c.arg)}var a;i(this,"_invoke",{value:function(e,r){function i(){return new t((function(t,i){n(e,r,t,i)}))}return a=a?a.then(i,i):i()}})}function L(e,t,n){var r=h;return function(i,a){if(r===f)throw new Error("Generator is already running");if(r===g){if("throw"===i)throw a;return O()}for(n.method=i,n.arg=a;;){var o=n.delegate;if(o){var s=S(o,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var c=d(e,t,n);if("normal"===c.type){if(r=n.done?g:p,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=g,n.method="throw",n.arg=c.arg)}}}function S(e,n){var r=n.method,i=e.iterator[r];if(i===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,S(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),v;var a=d(i,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var o=a.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function H(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function M(e){if(e){var n=e[o];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}return{next:O}}function O(){return{value:t,done:!0}}return m.prototype=y,i($,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:m,configurable:!0}),m.displayName=l(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,l(e,c,"GeneratorFunction")),e.prototype=Object.create($),e},e.awrap=function(e){return{__await:e}},E(x.prototype),l(x.prototype,s,(function(){return this})),e.AsyncIterator=x,e.async=function(t,n,r,i,a){void 0===a&&(a=Promise);var o=new x(u(t,n,r,i),a);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},E($),l($,c,"Generator"),l($,o,(function(){return this})),l($,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=M,H.prototype={constructor:H,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),P(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;P(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:M(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}({});try{regeneratorRuntime=o}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}const s="https://forkify-api.herokuapp.com/api/v2/recipes/",c="33620772-9064-490d-a5a5-9f2472257d43",l=async function(e,t){try{const r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),i=await Promise.race([r,(n=10,new Promise((function(e,t){setTimeout((function(){t(new Error(`Request took too long! Timeout after ${n} second`))}),1e3*n)})))]),a=await i.json();if(!i.ok)throw new Error(`${a.message} (${i.status})`);return a}catch(e){throw e}var n},u={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},d=function(e){const{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},h=function(e=u.search.page){u.search.page=e;const t=(e-1)*u.search.resultsPerPage,n=e*u.search.resultsPerPage;return u.search.results.slice(t,n)},p=function(){localStorage.setItem("bookmarks",JSON.stringify(u.bookmarks))},f=function(e){u.bookmarks.push(e),e.id===u.recipe.id&&(u.recipe.bookmarked=!0),p()};!function(){const e=localStorage.getItem("bookmarks");e&&(u.bookmarks=JSON.parse(e))}();function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v;v=new URL(a("kyEFX").resolve("cPzGy"),import.meta.url).toString();class _{render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;const n=this._generateMarkup();if(!t)return n;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",n)}update(e){this._data=e;const t=this._generateMarkup(),n=document.createRange().createContextualFragment(t),r=Array.from(n.querySelectorAll("*")),i=Array.from(this._parentElement.querySelectorAll("*"));r.forEach(((e,t)=>{const n=i[t];e.isEqualNode(n)||""===e.firstChild?.nodeValue.trim()||(n.textContent=e.textContent),e.isEqualNode(n)||Array.from(e.attributes).forEach((e=>n.setAttribute(e.name,e.value)))}))}_clear(){this._parentElement.innerHTML=""}renderSpinner(){const e=`\n  <div class="spinner">\n          <svg>\n            <use href="${t(v)}#icon-loader"></use>\n          </svg>\n        </div>\n  `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){const n=`\n        <div class="error">\n            <div>\n              <svg>\n                <use href="${t(v)}#icon-alert-triangle"></use>\n              </svg>\n            </div>\n            <p>${e}</p>\n          </div>\n        `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",n)}renderMessage(e=this._message){const n=`\n        <div class="message">\n            <div>\n              <svg>\n                <use href="${t(v)}#icon-smile"></use>\n              </svg>\n            </div>\n            <p>${e}</p>\n          </div>\n        `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",n)}constructor(){g(this,"_data",void 0)}}var m;function y(e,t,n,r,i){const a=[2,3,5];if(!0===i)for(let t=3;t*t<=e;t+=2)e%t==0&&a.push(t);let o=0,s=1,c=e,l=t;for(;o<=a.length;)c%a[o]==0&&l%a[o]==0?(s*=a[o],c/=a[o],l/=a[o]):o++;return function(e,t,n,r){return 1===e&&1===t?`${n=`${r}${(parseInt(n)+1).toString()}`}`:0===t?`${r}${n}`:"0"==n?`${r}${t}/${e}`:`${r}${n} ${t}/${e}`}(l,c,n,r)}m=function(e){let t;if(e<0?(e=Math.abs(e),t="-"):t="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${t}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${t}${e}`;if(e<1e-6)return"0";const n=e.toString(),r=n.split(".");let i,a=r[0];if("0"==i&&"0"!==a)return a;if("0"==i&&"0"==a)return"0";if(i=n.length>=17?r[1].slice(0,r[1].length-1):r[1],"99"==i&&"0"!==a)return`${a} 99/100`;if("99"==i&&"0"==a)return"99/100";if(1-parseFloat(`.${i}`)<.0011&&(i="999"),null==i)return a;let o=i.split("").reverse().join("").match(/^(\d+)\1{1,2}/);if(o&&i.length>2){let e=o[0].split("").reverse().join(""),n=o[1].split("").reverse().join("");if(n.length>1){let e=n.split(""),t=1;for(let n=0;n<e.length;n++)t/=e[0]/e[n];1===t&&(n=e[0])}return n.length>1&&n.length%2==0&&(n=parseInt(n.slice(0,n.length/2),10)-parseInt(n.slice(n.length/2,n.length),10)==0?n.slice(0,n.length/2):n),function(e,t,n,r,i){const a=!0,o=e.length-n.length>=1?e.length-n.length:1,s=Math.pow(10,o),c=parseFloat(`0.${e}`),l=Math.pow(10,t.length),u=Math.round((c*l-c)*Math.pow(10,o));return y(u,(l-1)*s,r,i,a)}(i,n,e,a,t)}return function(e,t,n){const r=!1,i=parseInt(e,10),a=Math.pow(10,e.length);return y(i,a,t,n,r)}(i,a,t)};var b=new class extends _{addHandlerRender(e){["hashchange","load"].forEach((t=>window.addEventListener(t,e)))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",(function(t){const n=t.target.closest(".btn--update-servings");if(!n)return;const{updateTo:r}=n.dataset;+r>0&&e(+r)}))}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",(function(t){t.target.closest(".btn--bookmark")&&e()}))}_generateMarkup(){return`\n    <figure class="recipe__fig">\n        <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />\n        <h1 class="recipe__title">\n          <span>${this._data.title}</span>\n        </h1>\n      </figure>\n\n        <div class="recipe__details">\n          <div class="recipe__info">\n            <svg class="recipe__info-icon">\n              <use href="${t(v)}#icon-clock"></use>\n            </svg>\n            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>\n            <span class="recipe__info-text">minutes</span>\n          </div>\n          <div class="recipe__info">\n            <svg class="recipe__info-icon">\n              <use href="${t(v)}#icon-users"></use>\n            </svg>\n            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>\n            <span class="recipe__info-text">servings</span>\n\n            <div class="recipe__info-buttons">\n              <button class="btn--tiny btn--update-servings" data-update-to=${this._data.servings-1}>\n                <svg>\n                  <use href="${t(v)}#icon-minus-circle"></use>\n                </svg>\n              </button>\n              <button class="btn--tiny btn--update-servings" data-update-to=${this._data.servings+1}>\n                <svg>\n                  <use href="${t(v)}#icon-plus-circle"></use>\n                </svg>\n              </button>\n            </div>\n          </div>\n\n          <div class="recipe__user-generated ${this._data.key?"":"hidden"}">\n            <svg>\n              <use href="${t(v)}#icon-user"></use>\n            </svg>\n          </div>\n          <button class="btn--round btn--bookmark">\n            <svg class="">\n              <use href="${t(v)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>\n            </svg>\n          </button>\n        </div>\n\n        <div class="recipe__ingredients">\n          <h2 class="heading--2">Recipe ingredients</h2>\n          <ul class="recipe__ingredient-list">\n          ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}\n          </ul>\n        </div>\n\n        <div class="recipe__directions">\n          <h2 class="heading--2">How to cook it</h2>\n          <p class="recipe__directions-text">\n            This recipe was carefully designed and tested by\n            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out\n            directions at their website.\n          </p>\n          <a\n            class="btn--small recipe__btn"\n            href="${this._data.sourceUrl}"\n            target="_blank"\n          >\n            <span>Directions</span>\n            <svg class="search__icon">\n              <use href="${t(v)}#icon-arrow-right"></use>\n            </svg>\n          </a>\n        </div>\n        `}_generateMarkupIngredient(e){return`\n            <li li class="recipe__ingredient" >\n              <svg class="recipe__icon">\n                <use href="${t(v)}#icon-check"></use>\n              </svg>\n              <div class="recipe__quantity">${e.quantity?t(m)(e.quantity).toString():""}</div>\n              <div class="recipe__description">\n                <span class="recipe__unit">${e.unit}</span>\n                ${e.description}\n              </div>\n            </li >\n            `}constructor(...e){super(...e),g(this,"_parentElement",document.querySelector(".recipe")),g(this,"_errorMessage","We could not find that recipe. Please try another one."),g(this,"_message","")}};var w=new class{getQuery(){const e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",(function(t){t.preventDefault(),e()}))}constructor(){g(this,"_parentEl",document.querySelector(".search"))}};var k=new class extends _{_generateMarkup(){const e=window.location.hash.slice(1);return`\n      <li class="preview">\n        <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">\n          <figure class="preview__fig">\n            <img src="${this._data.image}" alt="${this._data.title}" />\n          </figure>\n          <div class="preview__data">\n            <h4 class="preview__title">${this._data.title}</h4>\n            <p class="preview__publisher">${this._data.publisher}</p>\n            <div class="preview__user-generated ${this._data.key?"":"hidden"}">\n              <svg>\n              <use href="${t(v)}#icon-user"></use>\n              </svg>\n            </div>\n          </div>\n        </a>\n      </li>\n    `}constructor(...e){super(...e),g(this,"_parentElement","")}};var $=new class extends _{_generateMarkup(){return console.log(this._data),this._data.map((e=>k.render(e,!1))).join("")}constructor(...e){super(...e),g(this,"_parentElement",document.querySelector(".results")),g(this,"_errorMessage","No recipes found for your query. Please try another one."),g(this,"_message","")}};var E=new class extends _{addHandlerClick(e){this._parentElement.addEventListener("click",(function(t){const n=t.target.closest(".btn--inline");if(!n)return;const r=+n.dataset.goto;e(r)}))}_generateMarkup(){const e=this._data.page,n=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&n>1?`\n            <button data-goto="${e+1}" class="btn--inline pagination__btn--next">\n            <span>Page ${e+1}</span>\n            <svg class="search__icon">\n              <use href="${t(v)}#icon-arrow-right"></use>\n            </svg>\n          </button>\n            `:e===n&&n>1?` \n                <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">\n                    <svg class="search__icon">\n                    <use href="${t(v)}#icon-arrow-left"></use>\n                    </svg>\n                    <span>Page ${e-1}</span>\n                </button>\n            `:e<n?` \n                <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">\n                    <svg class="search__icon">\n                    <use href="${t(v)}#icon-arrow-left"></use>\n                    </svg>\n                    <span>Page ${e-1}</span>\n                </button>\n                <button data-goto="${e+1}" class="btn--inline pagination__btn--next">\n            <span>Page ${e+1}</span>\n            <svg class="search__icon">\n              <use href="${t(v)}#icon-arrow-right"></use>\n            </svg>\n          </button>\n            `:""}constructor(...e){super(...e),g(this,"_parentElement",document.querySelector(".pagination"))}};var x=new class extends _{addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map((e=>k.render(e,!1))).join("")}constructor(...e){super(...e),g(this,"_parentElement",document.querySelector(".bookmarks__list")),g(this,"_errorMessage","No bookmarks yet. Find a recipe and bookmark it."),g(this,"_message","")}};var L=new class extends _{toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",(function(t){t.preventDefault();const n=[...new FormData(this)],r=Object.fromEntries(n);e(r)}))}_generateMarkup(){}constructor(){super(),g(this,"_parentElement",document.querySelector(".upload")),g(this,"_message","Recipe was successfully uploaded."),g(this,"_window",document.querySelector(".add-recipe-window")),g(this,"_overlay",document.querySelector(".overlay")),g(this,"_btnOpen",document.querySelector(".nav__btn--add-recipe")),g(this,"_btnClose",document.querySelector(".btn--close-modal")),this._addHandlerShowWindow(),this._addHandlerHideWindow()}};const S=async function(){try{const e=window.location.hash.slice(1);if(!e)return;b.renderSpinner(),$.update(h()),x.update(u.bookmarks),await async function(e){try{const t=await l(`${s}${e}?key=${c}`);u.recipe=d(t),u.bookmarks.some((t=>t.id===e))?u.recipe.bookmarked=!0:u.recipe.bookmarked=!1}catch(e){throw console.error(`Own message: ${e}`),e}}(e),b.render(u.recipe)}catch(e){b.renderError(),console.error(e)}},j=async function(){try{$.renderSpinner();const e=w.getQuery();if(!e)return;await async function(e){try{u.search.query=e;const t=await l(`${s}?search=${e}&key=${c}`);console.log(t),u.search.results=t.data.recipes.map((e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}}))),u.search.page=1}catch(e){throw console.log(e),e}}(e),$.render(h()),E.render(u.search)}catch(e){console.log(e)}},P=function(e){$.render(h(e)),E.render(u.search)},H=function(e){!function(e){u.recipe.ingredients.forEach((t=>{t.quantity=t.quantity*e/u.recipe.servings})),u.recipe.servings=e}(e),b.update(u.recipe)},M=function(){u.recipe.bookmarked?function(e){const t=u.bookmarks.findIndex((t=>t.id===e));u.bookmarks.splice(t,1),e===u.recipe.id&&(u.recipe.bookmarked=!1),p()}(u.recipe.id):f(u.recipe),b.update(u.recipe),x.render(u.bookmarks)},O=function(){x.render(u.bookmarks)},q=async function(e){try{L.renderSpinner(),await async function(e){try{const t=Object.entries(e).filter((e=>e[0].startsWith("ingredient")&&""!==e[1])).map((e=>{const t=e[1].split(",").map((e=>e.trim()));if(3!==t.length)throw new Error("Wrong ingredient format. Please use the correct format");const[n,r,i]=t;return{quantity:n?+n:null,unit:r,description:i}})),n={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},r=await l(`${s}?key=${c}`,n);u.recipe=d(r),f(u.recipe)}catch(e){throw e}}(e),console.log(u.recipe),b.render(u.recipe),L.renderMessage(),x.render(u.bookmarks),window.history.pushState(null,"",`#${u.recipe.id}`),setTimeout((function(){L.toggleWindow()}),2500)}catch(e){console.error("own error",e),L.renderError(e.message)}};x.addHandlerRender(O),b.addHandlerRender(S),b.addHandlerUpdateServings(H),b.addHandlerAddBookmark(M),w.addHandlerSearch(j),E.addHandlerClick(P),L.addHandlerUpload(q);
//# sourceMappingURL=index.9ad34338.js.map
