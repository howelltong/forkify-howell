// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"d8XZh":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"aenu9":[function(require,module,exports) {
//4. import from model 
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _modelJs = require("./model.js"); //model.(variableName)
var _configJs = require("./config.js");
var _recipeViewJs = require("./views/recipeView.js");
var _recipeViewJsDefault = parcelHelpers.interopDefault(_recipeViewJs);
var _searchViewJs = require("./views/searchView.js");
var _searchViewJsDefault = parcelHelpers.interopDefault(_searchViewJs);
var _resultsViewJs = require("./views/resultsView.js");
var _resultsViewJsDefault = parcelHelpers.interopDefault(_resultsViewJs);
var _paginationViewJs = require("./views/paginationView.js");
var _paginationViewJsDefault = parcelHelpers.interopDefault(_paginationViewJs);
var _bookmarksViewJs = require("./views/bookmarksView.js");
var _bookmarksViewJsDefault = parcelHelpers.interopDefault(_bookmarksViewJs);
var _addRecipeViewJs = require("./views/addRecipeView.js");
var _addRecipeViewJsDefault = parcelHelpers.interopDefault(_addRecipeViewJs);
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
//1. controller function/event handler ==> GET single recipe from API
const controlRecipes = async function() {
    try {
        //3. Dynamically get the ID of the recipe as hash and show respective recipe according to that hash key
        //Application Logic
        const id = window.location.hash.slice(1); //3. where 'location' is the entire url => take hash
        //3. .slice() to remove # symbol
        // console.log(id); //#(whatever id it is)
        //3. IF NO ID (i.e. root url) ==> error: 500 ===> no hash == searches for empty string 
        if (!id) return; //3. removes error and loads on homescreen (cancels search)
        (0, _recipeViewJsDefault.default).renderSpinner() //presentation logic  //4. does not need to pass in parameter 'recipeContainer' as it will be passed within the class
        ;
        //4. as renderSpinner is a public class => it'll be usable with any other views (e.g. bookmark view) as #parentElement and #data is applicable to all 
        //STEP 0: UPDAATE RESULTS VIEW TO MARK SELECTED SEARCH RESULT
        //13. Update results view to mark selected search result
        (0, _resultsViewJsDefault.default).update(_modelJs.getSearchResultsPage());
        //STEP 1: UPDATING BOOKMARKS VIEW
        // 15. Bookmarks tab => show selected recipe as highlighted
        (0, _bookmarksViewJsDefault.default).update(_modelJs.state.bookmarks);
        //STEP 2: LOADING RECIPE (from model)
        await _modelJs.loadRecipe(id) //4. async function => returns promise 
        ;
        //4. does not return any data => no need to store into variable
        // const { recipe } = model.state //4. temporarily store in variable 'recipe'
        //STEP 3: RENDERING RECIPE 
        //4. Render with object exported from class
        (0, _recipeViewJsDefault.default).render(_modelJs.state.recipe) //pass in data via render() which will be publically created in the class
        ;
    } catch (err) {
        //7. error handled by model => controller => recipeView
        (0, _recipeViewJsDefault.default).renderError() //message should be hardcoded to view and not in controller (presentation logic)
        ;
        // alert(err);
        console.error(err);
    }
};
// controlRecipes()
//8. search
const controlSearchResults = async function() {
    try {
        //9. load spinner from parent => child 
        (0, _resultsViewJsDefault.default).renderSpinner();
        // console.log(resultsView); //9. see prototype chain
        //8. Get search query
        const query = (0, _searchViewJsDefault.default).getQuery();
        if (!query) return;
        //8. initial state => no query => need to listen for 'submit' or 'click' event (pub-sub pattern)
        //8. load search results
        await _modelJs.loadSearchResult(query) //8. loadSearchResult() does not return anything and does not need to be stored (all it does is manipulate state)
        ;
        //8. render results
        // console.log(model.state.search.results);
        //9. inherited method
        // resultsView.render(model.state.search.results)
        (0, _resultsViewJsDefault.default).render(_modelJs.getSearchResultsPage()) //10. render by pagination; store page number in state (render prev/next page); //default '' = page 1
        ;
        //11. Render initial pagination buttons
        //11. pass data required into paginationView.js : State => search {results, page, resultsPerPage}
        (0, _paginationViewJsDefault.default).render(_modelJs.state.search);
    } catch (err) {
        console.log(err);
    }
};
//11. controller function/event handler => execute on click of page button
const controlPagination = function(goToPage) {
    // console.log(goToPage);
    //11. NOTE => render() will OVERRIDE previous markup due to _clear() before any markup is inserted
    //11. render NEW results (next/prev page)
    (0, _resultsViewJsDefault.default).render(_modelJs.getSearchResultsPage(goToPage)) //11. render new results => automatically UPDATES state.search.page in model.js as it passes goToPage number back to model.js with a specific line of code updating page state
    ;
    //11. render  NEW pagination buttons
    (0, _paginationViewJsDefault.default).render(_modelJs.state.search) //11. update state.search.page in model.js to render NEW paginationView and therefore new buttons
    ;
};
//12. controller function/event handler => control servings
const controlServings = function(newServings) {
    //12. update the recipe servings (in state) on click
    _modelJs.updateServings(newServings);
    //12. update the recipe view => re-render recipe with the new state
    // recipeView.render(model.state.recipe) //13. rather than render() => update()
    (0, _recipeViewJsDefault.default).update(_modelJs.state.recipe) //updates only text and attributes in the DOM and not the entire view
    ;
};
const controlAddBookmark = function() {
    //ADD/REMOVE BOOKMARK
    //14. add bookmark only when recipe is NOT YET bookmarked
    if (!_modelJs.state.recipe.bookmarked) _modelJs.addBookmark(_modelJs.state.recipe);
    else _modelJs.deleteBookmark(_modelJs.state.recipe.id);
    // console.log(model.state.recipe); //14. adds bookmarked: true => recipeView: if bookmarked: true => render fill
    //UPDATE RECIPE VIEW
    //14. update recipe for changed elements
    (0, _recipeViewJsDefault.default).update(_modelJs.state.recipe);
    //RENDER BOOKMARKS
    (0, _bookmarksViewJsDefault.default).render(_modelJs.state.bookmarks); //15. In 13, stored entire data about the recipe into the bookmarks array in order to display them
};
const controlBookmarks = function() {
    (0, _bookmarksViewJsDefault.default).render(_modelJs.state.bookmarks);
};
const controlAddRecipe = async function(newRecipe) {
    // console.log(newRecipe);
    try {
        //18. Show loading spinner
        (0, _addRecipeViewJsDefault.default).renderSpinner();
        //17. Upload recipe data
        await _modelJs.uploadRecipe(newRecipe) //18. convert to await as uploadRecipe is async (handling error)
        ;
        console.log(_modelJs.state.recipe); //18. converted API to usable format => need to add bookmarked property and API key
        //18. render newly created recipe in view
        (0, _recipeViewJsDefault.default).render(_modelJs.state.recipe);
        //18. display success message
        (0, _addRecipeViewJsDefault.default).renderMessage();
        //19. render bookmarked view (tab)
        (0, _bookmarksViewJsDefault.default).render(_modelJs.state.bookmarks) //19. render not update as new element is being inserted
        ;
        //19. Changing id into url
        window.history.pushState(null, "", `#${_modelJs.state.recipe.id}`) //change url without reloading page; takes 3 arguments (state => irrelevant; set to null, title => irrelevant; set to '', url => `#${id}`)
        ;
        //18. close form window automatically
        setTimeout(function() {
            (0, _addRecipeViewJsDefault.default).toggleWindow();
        }, (0, _configJs.MODAL_CLOSE_SEC) * 1000);
    } catch (err) {
        console.error("own error", err);
        (0, _addRecipeViewJsDefault.default).renderError(err.message) //18. renderError() from View.js using own custom message
        ;
    }
};
//6. Subscriber
const init = function() {
    (0, _bookmarksViewJsDefault.default).addHandlerRender(controlBookmarks);
    (0, _recipeViewJsDefault.default).addHandlerRender(controlRecipes);
    (0, _recipeViewJsDefault.default).addHandlerUpdateServings(controlServings);
    (0, _recipeViewJsDefault.default).addHandlerAddBookmark(controlAddBookmark);
    (0, _searchViewJsDefault.default).addHandlerSearch(controlSearchResults);
    (0, _paginationViewJsDefault.default).addHandlerClick(controlPagination);
    (0, _addRecipeViewJsDefault.default).addHandlerUpload(controlAddRecipe);
//12. test controlServings CANNOT work here => if test => controlRecipes
// controlServings() // 12.async not ready to test
};
init(); /*

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

},{"./model.js":"Y4A21","./config.js":"k5Hzs","./views/recipeView.js":"l60JC","./views/searchView.js":"9OQAM","./views/resultsView.js":"cSbZE","./views/paginationView.js":"6z7bi","./views/bookmarksView.js":"4Lqzq","./views/addRecipeView.js":"i6DNj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Y4A21":[function(require,module,exports) {
//refer to architecture
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "loadRecipe", ()=>loadRecipe);
parcelHelpers.export(exports, "loadSearchResult", ()=>loadSearchResult);
parcelHelpers.export(exports, "getSearchResultsPage", ()=>getSearchResultsPage);
parcelHelpers.export(exports, "updateServings", ()=>updateServings);
parcelHelpers.export(exports, "addBookmark", ()=>addBookmark);
parcelHelpers.export(exports, "deleteBookmark", ()=>deleteBookmark);
parcelHelpers.export(exports, "uploadRecipe", ()=>uploadRecipe);
var _runtime = require("regenerator-runtime/runtime");
var _configJs = require("./config.js");
// import { getJSON, sendJSON } from './helpers.js'
var _helpersJs = require("./helpers.js");
const state = {
    recipe: {},
    //8. all data retrieved from search API will be stored
    search: {
        query: "",
        results: [],
        page: 1,
        resultsPerPage: (0, _configJs.RES_PER_PAGE)
    },
    bookmarks: []
};
const createRecipeObject = function(data) {
    //1. console.log(res, data); //1. where data's object has a property called 'data' that stores recipe information
    //1. eformat API json property names => remove underscores
    //1. property name = value ==> use destructuring
    //1. let recipe = data.data.recipe;
    const { recipe  } = data.data; //1. use 'let' to immediately create a new object
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
        ...recipe.key && {
            key: recipe.key
        } //18. short circuiting ==> if recipe.key exists && return key: recipe.key object (as an object) => spread operator to unpack it immediately in the same line
    };
};
const loadRecipe = async function(id) {
    //4. Error handling
    try {
        //1. LOADING RECIPE
        const data = await (0, _helpersJs.AJAX)(`${(0, _configJs.API_URL)}${id}?key=${(0, _configJs.KEY)}`) //5. resolved value of promise by json() => await
        ;
        //19. adding ?key=${KEY} => inputs own recipes into search base 
        state.recipe = createRecipeObject(data);
        // 14. bookmark persistence => as recipe renders from scratch, every selection of recipe will remove bookmark ===> SOLUTION: ADD BOOKMARKED PROPERTY ON LOAD (T/F) => check API object against boomark array state and set bookmarked to API object true else false otherwise
        if (state.bookmarks.some((bookmark)=>bookmark.id === id)) state.recipe.bookmarked = true;
        else state.recipe.bookmarked = false;
    // console.log(state.recipe);
    } catch (err) {
        //5. temporary error handling
        console.error(`Own message: ${err}`); //5. currently error is occuring in helpers.js => goal is to handle it in model.js
        //7. rethrow error
        throw err //7. propagate error so that current async function gets rejected and able to be caught in controller.js (otherwise it'll register as settled => error in model but not in controller)
        ;
    }
};
const loadSearchResult = async function(query) {
    try {
        state.search.query = query; //8. store query 
        const data = await (0, _helpersJs.AJAX)(`${(0, _configJs.API_URL)}?search=${query}&key=${(0, _configJs.KEY)}`);
        //19. adding ?key=${KEY} => inputs own recipes into search base 
        console.log(data); //8. object => 'data' object => 'recipes' array (note that recipes only contain select properties of their respective recipes => usage purely search based and can be used then to find the specific recipe details)
        state.search.results = data.data.recipes.map((rec)=>{
            return {
                //8. ensure same property names as state.recipe
                id: rec.id,
                title: rec.title,
                publisher: rec.publisher,
                image: rec.image_url,
                ...rec.key && {
                    key: rec.key
                } //19. adding key to search results
            };
        });
        state.search.page = 1; //12. returning page to 1 upon new search (as opposed to maintaining state)
    } catch (err) {
        console.log(err);
        throw err;
    }
};
const getSearchResultsPage = function(page = state.search.page) {
    //10. know current page
    state.search.page = page;
    const start = (page - 1) * state.search.resultsPerPage; //0 //10. will be dynamic => i.e. pass page 1, 1 - 1 = 0 => set start parameter
    const end = page * state.search.resultsPerPage //9;
    ;
    return state.search.results.slice(start, end) //note end parameter is non-inclusive
    ;
};
const updateServings = function(newServings) {
    //12. reach into state.recipe.ingredients => change 'quantity' (data manipulation)
    state.recipe.ingredients.forEach((ing)=>{
        ing.quantity = ing.quantity * newServings / state.recipe.servings;
    //12. new Qt = oldQt * newServings / old Servings
    });
    //12. persist new state of servings so that further changes can be made
    state.recipe.servings = newServings;
};
const persistBookmarks = function() {
    localStorage.setItem("bookmarks", JSON.stringify(state.bookmarks));
};
const addBookmark = function(recipe) {
    //14. add bookmark to state
    state.bookmarks.push(recipe);
    //14. mark current recipe as bookmark
    if (recipe.id === state.recipe.id) state.recipe.bookmarked = true //setting new property to recipe
    ;
    //16. place bookmarks into local storage
    persistBookmarks();
};
const deleteBookmark = function(id) {
    //14. remove from bookmarks array
    const index = state.bookmarks.findIndex((el)=>el.id === id) //14. return and set variable of index as index of element with the same id that was passed into the function
    ;
    state.bookmarks.splice(index, 1); //14. remove the element at the position of the specified index
    //14. mark current recipe as NOT bookmarked
    if (id === state.recipe.id) state.recipe.bookmarked = false;
    persistBookmarks();
};
//16. pull bookmarks from local storage (on load/initialisation)
const init = function() {
    const storage = localStorage.getItem("bookmarks");
    if (storage) state.bookmarks = JSON.parse(storage);
};
// 16. comment init() out when using the debugger clearBookmarks
init();
//16. debugging => clear bookmarks on reload from local storage without having to remove them one by one
const clearBookmarks = function() {
    localStorage.clear("bookmarks");
};
const uploadRecipe = async function(newRecipe) {
    try {
        //18. take data out of string and put into object
        //18. must convert data to match fetch data of API (where ingredients are stored as entry objects in an array)
        // console.log(Object.entries(newRecipe));
        const ingredients = Object.entries(newRecipe).filter((entry)=>entry[0].startsWith("ingredient") && entry[1] !== "").map((ing)=>{
            // const ingArr = ing[1].replaceAll(' ', '').split(',')
            const ingArr = ing[1].split(",").map((el)=>el.trim());
            //test if ingArr has the length of 3
            if (ingArr.length !== 3) throw new Error("Wrong ingredient format. Please use the correct format") //render error message to addRecipeView.js
            ;
            const [quantity, unit, description] = ingArr; //split elements accordingly and store into individual variables via destructuring 
            return {
                quantity: quantity ? +quantity : null,
                unit,
                description
            }; //return destructured elements as an object to match API format
        }); //entries => convert to array where entry[0] is first element of array entry and entry[1] is second element of array entry
        // console.log(ingredients); //ignores empty strings and other entries that are not ingredients
        const recipe = {
            title: newRecipe.title,
            source_url: newRecipe.sourceUrl,
            image_url: newRecipe.image,
            publisher: newRecipe.publisher,
            cooking_time: +newRecipe.cookingTime,
            servings: +newRecipe.servings,
            ingredients
        };
        // console.log(recipe);
        const data = await (0, _helpersJs.AJAX)(`${(0, _configJs.API_URL)}?key=${(0, _configJs.KEY)}`, recipe); //18. sendJSON will return recipe data, must be stored and awaited 
        //18. convert received object into state.recipe in the same format usable by application
        state.recipe = createRecipeObject(data);
        addBookmark(state.recipe); //automatically adds newly created recipe to bookmarks
    } catch (err) {
        throw err;
    }
};

},{"regenerator-runtime/runtime":"dXNgZ","./config.js":"k5Hzs","./helpers.js":"hGI1E","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dXNgZ":[function(require,module,exports) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var runtime = function(exports) {
    "use strict";
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var defineProperty = Object.defineProperty || function(obj, key, desc) {
        obj[key] = desc.value;
    };
    var undefined; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        return obj[key];
    }
    try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({}, "");
    } catch (err) {
        define = function(obj, key, value) {
            return obj[key] = value;
        };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);
        // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.
        defineProperty(generator, "_invoke", {
            value: makeInvokeMethod(innerFn, self, context)
        });
        return generator;
    }
    exports.wrap = wrap;
    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
        try {
            return {
                type: "normal",
                arg: fn.call(obj, arg)
            };
        } catch (err) {
            return {
                type: "throw",
                arg: err
            };
        }
    }
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};
    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function() {
        return this;
    });
    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = GeneratorFunctionPrototype;
    defineProperty(Gp, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: true
    });
    defineProperty(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: true
    });
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(method) {
            define(prototype, method, function(arg) {
                return this._invoke(method, arg);
            });
        });
    }
    exports.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };
    exports.mark = function(genFun) {
        if (Object.setPrototypeOf) Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define(genFun, toStringTagSymbol, "GeneratorFunction");
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
    };
    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
        return {
            __await: arg
        };
    };
    function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === "throw") reject(record.arg);
            else {
                var result = record.arg;
                var value = result.value;
                if (value && typeof value === "object" && hasOwn.call(value, "__await")) return PromiseImpl.resolve(value.__await).then(function(value) {
                    invoke("next", value, resolve, reject);
                }, function(err) {
                    invoke("throw", err, resolve, reject);
                });
                return PromiseImpl.resolve(value).then(function(unwrapped) {
                    // When a yielded Promise is resolved, its final value becomes
                    // the .value of the Promise<{value,done}> result for the
                    // current iteration.
                    result.value = unwrapped;
                    resolve(result);
                }, function(error) {
                    // If a rejected Promise was yielded, throw the rejection back
                    // into the async generator function so it can be handled there.
                    return invoke("throw", error, resolve, reject);
                });
            }
        }
        var previousPromise;
        function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function(resolve, reject) {
                    invoke(method, arg, resolve, reject);
                });
            }
            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
        // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).
        defineProperty(this, "_invoke", {
            value: enqueue
        });
    }
    defineIteratorMethods(AsyncIterator.prototype);
    define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
    });
    exports.AsyncIterator = AsyncIterator;
    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
         : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
        });
    };
    function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
            if (state === GenStateExecuting) throw new Error("Generator is already running");
            if (state === GenStateCompleted) {
                if (method === "throw") throw arg;
                // Be forgiving, per 25.3.3.3.3 of the spec:
                // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                return doneResult();
            }
            context.method = method;
            context.arg = arg;
            while(true){
                var delegate = context.delegate;
                if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context);
                    if (delegateResult) {
                        if (delegateResult === ContinueSentinel) continue;
                        return delegateResult;
                    }
                }
                if (context.method === "next") // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
                else if (context.method === "throw") {
                    if (state === GenStateSuspendedStart) {
                        state = GenStateCompleted;
                        throw context.arg;
                    }
                    context.dispatchException(context.arg);
                } else if (context.method === "return") context.abrupt("return", context.arg);
                state = GenStateExecuting;
                var record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                    // If an exception is thrown from innerFn, we leave state ===
                    // GenStateExecuting and loop back for another invocation.
                    state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                    if (record.arg === ContinueSentinel) continue;
                    return {
                        value: record.arg,
                        done: context.done
                    };
                } else if (record.type === "throw") {
                    state = GenStateCompleted;
                    // Dispatch the exception by looping back around to the
                    // context.dispatchException(context.arg) call above.
                    context.method = "throw";
                    context.arg = record.arg;
                }
            }
        };
    }
    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
        var methodName = context.method;
        var method = delegate.iterator[methodName];
        if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method, or a missing .next mehtod, always terminate the
            // yield* loop.
            context.delegate = null;
            // Note: ["return"] must be used for ES3 parsing compatibility.
            if (methodName === "throw" && delegate.iterator["return"]) {
                // If the delegate iterator has a return method, give it a
                // chance to clean up.
                context.method = "return";
                context.arg = undefined;
                maybeInvokeDelegate(delegate, context);
                if (context.method === "throw") // If maybeInvokeDelegate(context) changed context.method from
                // "return" to "throw", let that override the TypeError below.
                return ContinueSentinel;
            }
            if (methodName !== "return") {
                context.method = "throw";
                context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method");
            }
            return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
        }
        var info = record.arg;
        if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
        }
        if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value;
            // Resume execution at the desired location (see delegateYield).
            context.next = delegate.nextLoc;
            // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.
            if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined;
            }
        } else // Re-yield the result returned by the delegate method.
        return info;
        // The delegate iterator is finished, so forget it and continue with
        // the outer generator.
        context.delegate = null;
        return ContinueSentinel;
    }
    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator");
    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    define(Gp, iteratorSymbol, function() {
        return this;
    });
    define(Gp, "toString", function() {
        return "[object Generator]";
    });
    function pushTryEntry(locs) {
        var entry = {
            tryLoc: locs[0]
        };
        if (1 in locs) entry.catchLoc = locs[1];
        if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
        }
        this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
    }
    function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
    }
    exports.keys = function(val) {
        var object = Object(val);
        var keys = [];
        for(var key in object)keys.push(key);
        keys.reverse();
        // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.
        return function next() {
            while(keys.length){
                var key = keys.pop();
                if (key in object) {
                    next.value = key;
                    next.done = false;
                    return next;
                }
            }
            // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.
            next.done = true;
            return next;
        };
    };
    function values(iterable) {
        if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if (typeof iterable.next === "function") return iterable;
            if (!isNaN(iterable.length)) {
                var i = -1, next = function next() {
                    while(++i < iterable.length)if (hasOwn.call(iterable, i)) {
                        next.value = iterable[i];
                        next.done = false;
                        return next;
                    }
                    next.value = undefined;
                    next.done = true;
                    return next;
                };
                return next.next = next;
            }
        }
        // Return an iterator with no values.
        return {
            next: doneResult
        };
    }
    exports.values = values;
    function doneResult() {
        return {
            value: undefined,
            done: true
        };
    }
    Context.prototype = {
        constructor: Context,
        reset: function(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(resetTryEntry);
            if (!skipTempReset) {
                for(var name in this)// Not sure about the optimal order of these conditions:
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) this[name] = undefined;
            }
        },
        stop: function() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === "throw") throw rootRecord.arg;
            return this.rval;
        },
        dispatchException: function(exception) {
            if (this.done) throw exception;
            var context = this;
            function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;
                if (caught) {
                    // If the dispatched exception was caught by a catch block,
                    // then let that catch block handle the exception normally.
                    context.method = "next";
                    context.arg = undefined;
                }
                return !!caught;
            }
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                var record = entry.completion;
                if (entry.tryLoc === "root") // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
                if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc");
                    var hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                        else if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                    } else if (hasFinally) {
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else throw new Error("try statement without catch or finally");
                }
            }
        },
        abrupt: function(type, arg) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                }
            }
            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
            var record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;
            if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
            }
            return this.complete(record);
        },
        complete: function(record, afterLoc) {
            if (record.type === "throw") throw record.arg;
            if (record.type === "break" || record.type === "continue") this.next = record.arg;
            else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
            } else if (record.type === "normal" && afterLoc) this.next = afterLoc;
            return ContinueSentinel;
        },
        finish: function(finallyLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                    this.complete(entry.completion, entry.afterLoc);
                    resetTryEntry(entry);
                    return ContinueSentinel;
                }
            }
        },
        "catch": function(tryLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if (record.type === "throw") {
                        var thrown = record.arg;
                        resetTryEntry(entry);
                    }
                    return thrown;
                }
            }
            // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.
            throw new Error("illegal catch attempt");
        },
        delegateYield: function(iterable, resultName, nextLoc) {
            this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
            };
            if (this.method === "next") // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined;
            return ContinueSentinel;
        }
    };
    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;
}(// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
(0, module.exports));
try {
    regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, in modern engines
    // we can explicitly access globalThis. In older engines we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    if (typeof globalThis === "object") globalThis.regeneratorRuntime = runtime;
    else Function("r", "regeneratorRuntime = r")(runtime);
}

},{}],"k5Hzs":[function(require,module,exports) {
//5. configuration file => contains all the variables that are constants and will be reused across the project
//5. upper case naming convention for constants that will never change
//5. API use case => changes in API will can be made directly in config which will automatically update across the project
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_URL", ()=>API_URL);
parcelHelpers.export(exports, "KEY", ()=>KEY);
parcelHelpers.export(exports, "TIMEOUT_SEC", ()=>TIMEOUT_SEC);
parcelHelpers.export(exports, "RES_PER_PAGE", ()=>RES_PER_PAGE);
parcelHelpers.export(exports, "MODAL_CLOSE_SEC", ()=>MODAL_CLOSE_SEC);
const API_URL = "https://forkify-api.herokuapp.com/api/v2/recipes/";
const KEY = "33620772-9064-490d-a5a5-9f2472257d43";
const TIMEOUT_SEC = 10;
const RES_PER_PAGE = 10;
const MODAL_CLOSE_SEC = 2.5;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"hGI1E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AJAX", ()=>AJAX);
var _regeneratorRuntime = require("regenerator-runtime");
var _configJs = require("./config.js");
//5. Helper functions => reusable functions across project
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
const AJAX = async function(url, uploadData) {
    try {
        const fetchPro = uploadData ? fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(uploadData)
        }) : fetch(url);
        const res = await Promise.race([
            fetchPro,
            timeout((0, _configJs.TIMEOUT_SEC))
        ]);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        return data;
    } catch (err) {
        throw err;
    }
} /*
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
*/ ;

},{"regenerator-runtime":"dXNgZ","./config.js":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l60JC":[function(require,module,exports) {
//9. parent class
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
//9. *******CHANGE ALL # => _ as parent-child inheritance (Parcel/Babel) does not support private fields, only protected
//2. HTML in JS => icons pathway are routed to current folder but needs to be routed to the 'dist' folder (with the specific name)
//2. Parcel => can import and create a variable that stores the specific path to the dist folder with the specific (and new) file name
// import icons from '../img/icons.svg' //parcel 1
var _iconsSvg = require("url:../../img/icons.svg"); //parcel 1
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
// console.log(icons); //2. import icons from '../img/icons.svg' //parcel 1
var _fracty = require("fracty"); //4. import according npm docs name
var _fractyDefault = parcelHelpers.interopDefault(_fracty);
// console.log(Fraction); //Fraction object containing method Fraction => to call: Fraction.Fraction() else destructure on import to avoid .notation
//4. exporting RecipeView into controller will require a new object creation in Controller (unnecessary work and possibility of accidentally creating multiple views)
//4. ==> AVOID by creating object in this file and export object itself
//9. ADD PARENT METHODS
class RecipeView extends (0, _viewJsDefault.default) {
    //must define #parentElement and #data differently across Views
    _parentElement = document.querySelector(".recipe");
    _errorMessage = `We could not find that recipe. Please try another one.` //7. view already knows the message it wants to display
    ;
    _message = ``;
    //6. PUBLISHER
    addHandlerRender(handler) {
        //6. DOM elements  === PRESENTATION LOGIC; Event handling === APPLICATION LOGIC => UI should be in Views but the callback function required is in the controller.js
        //3. Listening for changes in HASH url 
        // window.addEventListener('hashchange', handler)
        // //3. NOTE: event listener is listening for change => will update url with id upon CHANGE (if copied and pasted url, will not show recipe as there is no change) => SOLUTION: Listen for LOAD
        // window.addEventListener('load', handler)
        [
            "hashchange",
            "load"
        ].forEach((ev)=>window.addEventListener(ev, handler));
    }
    //12. New event listener
    addHandlerUpdateServings(handler) {
        //12. buttons of interest => increase/decrease servings via button ('.btn--tiny)
        //12. event delegation
        this._parentElement.addEventListener("click", function(e) {
            const btn = e.target.closest(".btn--update-servings") //btn--tiny => class; btn--update-servings => functionality
            ;
            if (!btn) return;
            // console.log(btn);
            const { updateTo  } = btn.dataset //12. note that update-to => auto conversion to updateTo
            ;
            if (+updateTo > 0) handler(+updateTo); //12. convert to number outside of declaration and in condition as cannot set variable property as +... => error undefined
        //connect newServings between view and controller via dataset attribute
        });
    }
    // 14. Event delegation => bookmark
    addHandlerAddBookmark(handler) {
        this._parentElement.addEventListener("click", function(e) {
            //14. specific bookmark will not exist on load as markup has not yet been generated => hence parent element/event delegation
            const btn = e.target.closest(".btn--bookmark");
            if (!btn) return;
            handler();
        });
    }
    _generateMarkup() {
        //2. Change html to update dynamically according to the given recipe object 
        //2. EXAMPLE: replace src="src/img/test-1.jpg" with src="${recipe.image}" (recipe object => dynamic image url)
        //2. NOTE: ingredients => array of different separate ingredients information as objects (quantity, unit, description)
        //2. ICONS => comes from import => rerouted to DIST folder so it may display
        // const markup = ` //4. immediately return so render() can use 
        return `
    <figure class="recipe__fig">
        <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
        <h1 class="recipe__title">
          <span>${this._data.title}</span>
        </h1>
      </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${0, _iconsSvgDefault.default}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${0, _iconsSvgDefault.default}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--update-servings" data-update-to=${this._data.servings - 1}>
                <svg>
                  <use href="${0, _iconsSvgDefault.default}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--update-servings" data-update-to=${this._data.servings + 1}>
                <svg>
                  <use href="${0, _iconsSvgDefault.default}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated ${this._data.key ? "" : "hidden"}">
            <svg>
              <use href="${0, _iconsSvgDefault.default}#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round btn--bookmark">
            <svg class="">
              <use href="${0, _iconsSvgDefault.default}#icon-bookmark${this._data.bookmarked ? "-fill" : ""}"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
          ${this._data.ingredients.map(this._generateMarkupIngredient).join("") //2. results become a string of ingredients; join('') => connect all the uniquely generated html elements together as one html element
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
              <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
        `;
    }
    _generateMarkupIngredient(ing) {
        return `
            <li li class="recipe__ingredient" >
              <svg class="recipe__icon">
                <use href="${0, _iconsSvgDefault.default}#icon-check"></use>
              </svg>
              <div class="recipe__quantity">${ing.quantity ? (0, _fractyDefault.default)(ing.quantity).toString() : ""}</div>
              <div class="recipe__description">
                <span class="recipe__unit">${ing.unit}</span>
                ${ing.description}
              </div>
            </li >
            `;
    }
}
exports.default = new RecipeView(); //4. no data passed in => does not require constructor()

},{"./View.js":"5cUXS","url:../../img/icons.svg":"loVOp","fracty":"hJO4d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5cUXS":[function(require,module,exports) {
//9. parent view to contain common methods to be inherited by the children views
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../img/icons.svg"); //parcel 1
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class View {
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
     */ //4. render() will be common to all the Views => render HTML but for different purposes THEREFORE do not generate HTML directly in method but externally as #generateMarkup()
    render(data, render = true) {
        //9. immediately checking if data exists
        if (!data || Array.isArray(data) && data.length === 0) return this.renderError();
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
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
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
        ;
        const newElements = Array.from(newDOM.querySelectorAll("*")) //13. select all elements of newDOM and convert to Array
        ;
        // console.log(newElements); //13. provides NodeList of all elements => can make comparisons of data-set
        //13. make comparisons of newDOM (logged in console) and what is currrently displayed on view (as page has not yet been re-rendered)
        const curElements = Array.from(this._parentElement.querySelectorAll("*")) //13. select current elements and convert to array
        ;
        // console.log(curElements); //13. old
        // console.log(newElements); //13. new
        newElements.forEach((newEl, i)=>{
            //13. must loop over both arrays simultaneously
            const curEl = curElements[i];
            // console.log(curEl, newEl.isEqualNode(curEl)) //13. comparing content ==> boolean (true/false) depending on change of content AS WELL as attributes (e.g. data attributes) => note: also applies to parent elements (e.g. ingredient display, containers, etc)
            //13. UPDATE CHANGED TEXT
            if (!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() !== "") //13: node => changes parent element as well as they won't be equal (e.g. containers) => must determine if element contains text
            //13. node property => nodeValue where returns null or text content depending on value type
            //13. firstChild() => newEl is the element, need to select text itself which is the first child of the node
            // console.log(newEl.firstChild.nodeValue.trim()); //13. provides string of text content
            curEl.textContent = newEl.textContent //13. cur el updated to new el (incl descendants)
            ;
            //13. UPDATE CHANGED ATTRIBUTES
            //13. change attributes so that dataset can change
            if (!newEl.isEqualNode(curEl)) // console.log(newEl.attributes); //13. log attributes of all elements that have CHANGED in a NamedNodeMap
            Array.from(newEl.attributes).forEach((attr)=>curEl.setAttribute(attr.name, attr.value)); //13. replace all of the current attributes with the attributes coming from the new element
        });
    }
    _clear() {
        this._parentElement.innerHTML = "";
    }
    //2. External function => load spinner
    renderSpinner() {
        const markup = `
  <div class="spinner">
          <svg>
            <use href="${(0, _iconsSvgDefault.default)}#icon-loader"></use>
          </svg>
        </div>
  `;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    //7. Error handling (before 7. handled in model.js)
    renderError(message = this._errorMessage) {
        //default is this._errorMessage => if nothign is passed through the parameter, default will display => intention: pass nothign to renderError() in controller so that this message will always be the response
        const markup = `
        <div class="error">
            <div>
              <svg>
                <use href="${(0, _iconsSvgDefault.default)}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>
        `;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    //7. success handling
    renderMessage(message = this._message) {
        const markup = `
        <div class="message">
            <div>
              <svg>
                <use href="${(0, _iconsSvgDefault.default)}#icon-smile"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>
        `;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
}
exports.default = View;

},{"url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"loVOp":[function(require,module,exports) {
module.exports = require("d72496a476ad4c3c").getBundleURL("hWUTQ") + "icons.dfd7a6db.svg" + "?" + Date.now();

},{"d72496a476ad4c3c":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"hJO4d":[function(require,module,exports) {
// FRACTY CONVERTS DECIMAL NUMBERS TO FRACTIONS BY ASSUMING THAT TRAILING PATTERNS FROM 10^-2 CONTINUE TO REPEAT
// The assumption is based on the most standard numbering conventions
// e.g. 3.51 will convert to 3 51/100 while 3.511 will convert to 3 23/45
// Throw any number up to 16 digits long at fracty and let fracy do the work.
// If number is beyond 16 digits fracty will truncate at 15 digits to compensate for roundoff errors created in IEEE 754 Floating Point conversion.
module.exports = function(number) {
    let type;
    if (number < 0) {
        number = Math.abs(number);
        type = "-";
    } else type = "";
    if (number === undefined) return `Your input was undefined.`;
    if (isNaN(number)) return `"${number}" is not a number.`;
    if (number == 9999999999999999) return `${type}9999999999999999`;
    if (number > 9999999999999999) return `Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.`;
    if (Number.isInteger(number)) return `${type}${number}`;
    if (number < .000001) return "0";
    const numberString = number.toString();
    const entry = numberString.split(".");
    let integer = entry[0];
    let decimal;
    if (decimal == "0" && integer !== "0") return integer;
    else if (decimal == "0" && integer == "0") return "0";
    else if (numberString.length >= 17) decimal = entry[1].slice(0, entry[1].length - 1);
    else decimal = entry[1];
    if (decimal == "99" && integer !== "0") return `${integer} 99/100`;
    else if (decimal == "99" && integer == "0") return `99/100`;
    else if (1 - parseFloat(`.${decimal}`) < .0011) decimal = "999";
    if (decimal == undefined) return integer;
    const decimalRev = decimal.split("").reverse().join(""); //Reverse the string to look for patterns.
    const patternSearch = /^(\d+)\1{1,2}/; //This greedy regex matches the biggest pattern that starts at the beginning of the string (at the end, in the case of the reversed string). A lazy regex doesn't work because it only identifies subpatterns in cases where subpatterns exist (e.g. '88' in '388388388388'), thus pattern capture must be greedy.
    let pattern = decimalRev.match(patternSearch); //If there's a pattern, it's full sequence is in [0] of this array and the single unit is in [1] but it may still need to be reduced further.
    if (pattern && decimal.length > 2) {
        let patternSequence = pattern[0].split("").reverse().join("");
        let endPattern = pattern[1].split("").reverse().join("");
        if (endPattern.length > 1) {
            let endPatternArray = endPattern.split("");
            let testSingleUnit = 1;
            for(let i = 0; i < endPatternArray.length; i++)testSingleUnit /= endPatternArray[0] / endPatternArray[i];
            if (testSingleUnit === 1) endPattern = endPatternArray[0];
        }
        if (endPattern.length > 1 && endPattern.length % 2 === 0) endPattern = parseInt(endPattern.slice(0, endPattern.length / 2), 10) - parseInt(endPattern.slice(endPattern.length / 2, endPattern.length), 10) === 0 ? endPattern.slice(0, endPattern.length / 2) : endPattern;
        return yesRepeat(decimal, endPattern, patternSequence, integer, type); //Begin calculating the numerator and denominator for decimals that have a pattern.
    } else return noRepeat(decimal, integer, type); //Begin calculating the numerator and denominator for decimals that don't have a pattern.
};
//IF THERE'S A TRAILING PATTERN FRACTY DIVIDES THE INPUT BY ONE SUBTRACTED FROM THE NEAREST BASE 10 NUMBER WITH NUMBER OF ZEROS EQUAL TO THE LENGTH OF THE REPEATED PATTERN (I.E. A SERIES OF 9'S) MULTIPLIED BY THE BASE 10 NUMBER GREATER THAN AND CLOSEST TO THE INPUT.
function yesRepeat(decimal, endPattern, patternSequence, integer, type) {
    const rep = true; //The numerator repeats.
    const nonPatternLength = decimal.length - patternSequence.length >= 1 ? decimal.length - patternSequence.length : 1; //Does the length of the non pattern segment of the input = 0? If it does, that's incorrect since we know it must equal at least 1, otherwise it's the length of the decimal input minus the length of the full pattern.
    const decimalMultiplier2 = Math.pow(10, nonPatternLength); //Second multiplier to use.
    const float = parseFloat(`0.${decimal}`); //Convert the decimal input to a floating point number.
    const decimalMultiplier1 = Math.pow(10, endPattern.length); //Find the right multiplier to use for both numerator and denominator, which will later have 1 subtracted from it in the case of the denominator.
    const numerator = Math.round((float * decimalMultiplier1 - float) * Math.pow(10, nonPatternLength)); //Find the numerator to be used in calculating the fraction that contains a repeating trailing sequence.
    const denominator = (decimalMultiplier1 - 1) * decimalMultiplier2; //Caluculate the denominator using the equation for repeating trailing sequences.
    return reduce(numerator, denominator, integer, type, rep); //Further reduce the numerator and denominator.
}
//IF THERE'S NO TRAILING PATTERN FRACTY DIVIDES THE INPUT BY THE NEAREST BASE 10 INTEGER GREATER THAN THE NUMERATOR.
function noRepeat(decimal, integer, type) {
    const rep = false; //The numerator doesn't repeat.
    const numerator = parseInt(decimal, 10); //Numerator begins as decimal input converted into an integer.
    const denominator = Math.pow(10, decimal.length); //Denominator begins as 10 to the power of the length of the numerator.
    return reduce(numerator, denominator, integer, type, rep); //Reduce the numerator and denominator.
}
//FRACTY REDUCES THE FRACTION.
function reduce(numerator, denominator, integer, type, rep) {
    const primeNumberArray = [
        2,
        3,
        5
    ]; //If the numerator isn't from a repeating decimal case, the initialized array of prime numbers will suffice to find the common denominators.
    if (rep === true) {
        for(let i = 3; i * i <= numerator; i += 2)if (numerator % i === 0) primeNumberArray.push(i);
    }
    let j = 0; //Initialize counter over the prime number array for the while loop.
    let comDenom = 1; //Initialize the common denominator.
    let num = numerator; //Initialize the numerator.
    let den = denominator; //Initialize the denominator.
    while(j <= primeNumberArray.length)if (num % primeNumberArray[j] === 0 && den % primeNumberArray[j] === 0) {
        comDenom = comDenom * primeNumberArray[j];
        num = num / primeNumberArray[j];
        den = den / primeNumberArray[j];
    } else j++;
    return returnStrings(den, num, integer, type);
}
//FRACTY RETURNS THE REDUCED FRACTION AS A STRING.
function returnStrings(den, num, integer, type) {
    if (den === 1 && num === 1) {
        integer = `${type}${(parseInt(integer) + 1).toString()}`; //Add 1 to the integer and return a string without a fraction.
        return `${integer}`;
    } else if (num === 0) return `${type}${integer}`;
    else if (integer == "0") return `${type}${num}/${den}`;
    else return `${type}${integer} ${num}/${den}`; //If there's an integer and a fraction return both.
}

},{}],"9OQAM":[function(require,module,exports) {
//DOM => input fields 
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class SearchView {
    _parentEl = document.querySelector(".search");
    //8. get query
    getQuery() {
        const query = this._parentEl.querySelector(".search__field").value;
        this._clearInput() //8. keeping clearInput function within view
        ;
        return query;
    }
    _clearInput() {
        this._parentEl.querySelector(".search__field").value = "";
    }
    //8. pub/sub 
    addHandlerSearch(handler) {
        this._parentEl.addEventListener("submit", function(e) {
            e.preventDefault();
            handler();
        });
    }
}
exports.default = new SearchView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cSbZE":[function(require,module,exports) {
//9. parent class
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _previewViewJs = require("./previewView.js");
var _previewViewJsDefault = parcelHelpers.interopDefault(_previewViewJs);
var _iconsSvg = require("url:../../img/icons.svg"); //parcel 1
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class ResultsView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".results");
    _errorMessage = `No recipes found for your query. Please try another one.` //7. view already knows the message it wants to display
    ;
    _message = ``;
    _generateMarkup() {
        console.log(this._data);
        return this._data.map((result)=>(0, _previewViewJsDefault.default).render(result, false)).join("");
    }
}
exports.default = new ResultsView();

},{"./View.js":"5cUXS","./previewView.js":"1FDQ6","url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1FDQ6":[function(require,module,exports) {
// //9. parent class
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _iconsSvg = require("url:../../img/icons.svg"); //parcel 1
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
//15. creating a child view for results and bookmarks as they are essentially the same code
class PreviewView extends (0, _viewJsDefault.default) {
    _parentElement = "";
    _generateMarkup() {
        const id = window.location.hash.slice(1);
        return `
      <li class="preview">
        <a class="preview__link ${this._data.id === id ? "preview__link--active" : ""}" href="#${this._data.id}">
          <figure class="preview__fig">
            <img src="${this._data.image}" alt="${this._data.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${this._data.title}</h4>
            <p class="preview__publisher">${this._data.publisher}</p>
            <div class="preview__user-generated ${this._data.key ? "" : "hidden"}">
              <svg>
              <use href="${0, _iconsSvgDefault.default}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>
    `;
    }
}
exports.default = new PreviewView();

},{"./View.js":"5cUXS","url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6z7bi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _iconsSvg = require("url:../../img/icons.svg"); //parcel 1
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class PaginationView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".pagination");
    //11. pub/sub 
    addHandlerClick(handler) {
        //event delegation => two buttons 
        this._parentElement.addEventListener("click", function(e) {
            const btn = e.target.closest(".btn--inline") //11. .closest => up the tree (parent) on click ==> target element (trigger click) will look for closest parent with '.btn--inline' class and EXECUTE HANDLER FUNCTION i.e. function is tied to parent but can be triggered by children elements (e.g. span or icon)
            ;
            // console.log(btn);
            if (!btn) return;
            const goToPage = +btn.dataset.goto //11. convert to number for next/previous page 
            ;
            // console.log(goToPage); //string of number 
            handler(goToPage); //pass goToPage number back to controller
        });
    }
    _generateMarkup() {
        const curPage = this._data.page;
        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);
        // console.log(numPages);
        // 11. data require: State => search {results, page, resultsPerPage}
        //11. ADD DATA ATTRIBUTE TO HTML ELEMENTS => tie data to pages to direct page selection => dataset
        // 11. Page 1, and there are other pages
        if (curPage === 1 && numPages > 1) return `
            <button data-goto="${curPage + 1}" class="btn--inline pagination__btn--next">
            <span>Page ${curPage + 1}</span>
            <svg class="search__icon">
              <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
            </svg>
          </button>
            `;
        // 11. Last page
        if (curPage === numPages && numPages > 1) //return previous button
        return ` 
                <button data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">
                    <svg class="search__icon">
                    <use href="${0, _iconsSvgDefault.default}#icon-arrow-left"></use>
                    </svg>
                    <span>Page ${curPage - 1}</span>
                </button>
            `;
        // 11. Other page
        if (curPage < numPages) return ` 
                <button data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">
                    <svg class="search__icon">
                    <use href="${0, _iconsSvgDefault.default}#icon-arrow-left"></use>
                    </svg>
                    <span>Page ${curPage - 1}</span>
                </button>
                <button data-goto="${curPage + 1}" class="btn--inline pagination__btn--next">
            <span>Page ${curPage + 1}</span>
            <svg class="search__icon">
              <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
            </svg>
          </button>
            `;
        // 11. Page 1, and there are NO other pages
        return "" //page 1 => no need to render any buttons (no prev or next)
        ;
    }
}
exports.default = new PaginationView();

},{"./View.js":"5cUXS","url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Lqzq":[function(require,module,exports) {
//9. parent class
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _previewViewJs = require("./previewView.js");
var _previewViewJsDefault = parcelHelpers.interopDefault(_previewViewJs);
var _iconsSvg = require("url:../../img/icons.svg"); //parcel 1
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class BookmarksView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".bookmarks__list");
    _errorMessage = `No bookmarks yet. Find a recipe and bookmark it.` //7. view already knows the message it wants to display
    ;
    _message = ``;
    //16. add handler => bug with curEl and newEl array size comparisons
    addHandlerRender(handler) {
        window.addEventListener("load", handler) //16. render bookmarks on load 
        ;
    }
    _generateMarkup() {
        // console.log(this._data);
        //9. _data => inherited from parent 
        // console.log(this._data); //9. returns array => forEach to return unique markup
        return this._data.map((bookmark)=>(0, _previewViewJsDefault.default).render(bookmark, false)).join(""); //15. markup that is returned must be a string to be inserted into HTML => view -> bookmarksView -> previewView => render() => generate markup => does not work ===> SOLUTION: change render() in View.js => render parameter (t/f)
    //Reuse render() to pass array to previewView to generate markup rather than creating new function, however, must prevent it from inserting markup to the DOM as that is the default action of render()
    //depending on which instance render() is called => will add markup to DOM (must avoid repeated render to DOM) therefore by adding parameter render=false, can avoid adding to DOM and returning the markup itself as an array of strings to be inserted in Views.js
    // => bookmarksView.render(model.state.bookmarks) -> insert markup to DOM (render = true), render() on previewView therefore must reurn ONLY THE MARKUP and NOT INSERT TO DOM (render = false) by having bookmarksView pass array of bookmarks to have markup generated to previewView (previewView.render(bookmark, false))
    }
}
exports.default = new BookmarksView();

},{"./View.js":"5cUXS","./previewView.js":"1FDQ6","url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i6DNj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _iconsSvg = require("url:../../img/icons.svg"); //parcel 1
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class AddRecipeView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".upload");
    _message = "Recipe was successfully uploaded.";
    _window = document.querySelector(".add-recipe-window");
    _overlay = document.querySelector(".overlay");
    _btnOpen = document.querySelector(".nav__btn--add-recipe");
    _btnClose = document.querySelector(".btn--close-modal");
    constructor(){
        super();
        this._addHandlerShowWindow();
        this._addHandlerHideWindow();
    }
    toggleWindow() {
        this._overlay.classList.toggle("hidden");
        this._window.classList.toggle("hidden");
    }
    //17. listening for events on open/close (called as soon as the page loads => nothing to do with controller as nothing is being processed) therefore run function as soon as object is created
    _addHandlerShowWindow() {
        this._btnOpen.addEventListener("click", this.toggleWindow.bind(this));
    }
    _addHandlerHideWindow() {
        this._btnClose.addEventListener("click", this.toggleWindow.bind(this));
        this._overlay.addEventListener("click", this.toggleWindow.bind(this));
    }
    addHandlerUpload(handler) {
        this._parentElement.addEventListener("submit", function(e) {
            e.preventDefault();
            const dataArr = [
                ...new FormData(this)
            ]; //17. pass in form
            //17. array of arrays(entries) => convert entries to objects
            const data = Object.fromEntries(dataArr) //17. object => unpacked entries
            ;
            handler(data); //17. action of uploading data => API call => must get data to model.js
        });
    }
    _generateMarkup() {}
}
exports.default = new AddRecipeView();

},{"./View.js":"5cUXS","url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["d8XZh","aenu9"], "aenu9", "parcelRequire3a11")

//# sourceMappingURL=index.e37f48ea.js.map
