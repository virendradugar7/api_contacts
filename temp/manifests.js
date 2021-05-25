(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["debugManifests"] = factory();
	else
		root["debugManifests"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Set the webpack public path
/******/ 	(function () {
/******/ 	  var scripts = document.getElementsByTagName('script');
/******/ 	  var regex = new RegExp('manifests\\.js', 'i');
/******/ 	  var publicPath;
/******/ 	
/******/ 	  if (scripts && scripts.length) {
/******/ 	    for (var i = 0; i < scripts.length; i++) {
/******/ 	      if (!scripts[i]) continue;
/******/ 	      var path = scripts[i].getAttribute('src');
/******/ 	      if (path && path.match(regex)) {
/******/ 	        publicPath = path.substring(0, path.lastIndexOf('/') + 1);
/******/ 	        break;
/******/ 	      }
/******/ 	    }
/******/ 	  }
/******/ 	
/******/ 	  if (!publicPath) {
/******/ 	    for (var global in window.__setWebpackPublicPathLoaderSrcRegistry__) {
/******/ 	      if (global && global.match(regex)) {
/******/ 	        publicPath = global.substring(0, global.lastIndexOf('/') + 1);
/******/ 	        break;
/******/ 	      }
/******/ 	    }
/******/ 	  }
/******/ 	  __webpack_require__.p = publicPath;
/******/ 	})();
/******/ 	
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getManifests", function() { return getManifests; });
var MANIFESTS_ARRAY = [
  {
    "id": "5160da05-b571-44ab-8999-5d286a62ddc5",
    "alias": "AddinWebpartWebPart",
    "componentType": "WebPart",
    "version": "0.0.1",
    "manifestVersion": 2,
    "requiresCustomScript": false,
    "supportedHosts": [
      "SharePointWebPart"
    ],
    "preconfiguredEntries": [
      {
        "groupId": "5c03119e-3074-46fd-976b-c60198311f70",
        "group": {
          "default": "Other"
        },
        "title": {
          "default": "addin_webpart"
        },
        "description": {
          "default": "addin_webpart description"
        },
        "officeFabricIconFontName": "Page",
        "properties": {
          "description": "addin_webpart"
        }
      }
    ],
    "loaderConfig": {
      "entryModuleId": "addin-webpart-web-part",
      "internalModuleBaseUrls": [
        "https://localhost:4321/"
      ],
      "scriptResources": {
        "addin-webpart-web-part": {
          "type": "path",
          "path": "dist/addin-webpart-web-part.js"
        },
        "AddinWebpartWebPartStrings": {
          "defaultPath": "lib/webparts/addinWebpart/loc/en-us.js",
          "type": "localizedPath"
        },
        "@microsoft/sp-property-pane": {
          "type": "component",
          "version": "1.11.0",
          "id": "f9e737b7-f0df-4597-ba8c-3060f82380db"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "version": "1.11.0",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b"
        },
        "@microsoft/sp-webpart-base": {
          "type": "component",
          "version": "1.11.0",
          "id": "974a7777-0990-4136-8fa6-95d80114c2e0"
        },
        "react": {
          "type": "component",
          "version": "16.8.5",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "failoverPath": "node_modules/react/dist/react.js"
        },
        "react-dom": {
          "type": "component",
          "version": "16.8.5",
          "id": "aa0a46ec-1505-43cd-a44a-93f3a5aa460a",
          "failoverPath": "node_modules/react-dom/dist/react-dom.js"
        },
        "@microsoft/sp-http": {
          "type": "component",
          "version": "1.11.0",
          "id": "c07208f0-ea3b-4c1a-9965-ac1b825211a6"
        }
      }
    }
  }
];
/**
 * Get the manifest array.
 */
function getManifests() {
    // Clone manifestsArray
    var manifests = JSON.parse(JSON.stringify(MANIFESTS_ARRAY));
    var manifestsFileUrl = __webpack_require__.p;
    if (manifestsFileUrl && manifestsFileUrl !== '') {
        manifests.forEach(function (manifest) {
            if (!manifest.loaderConfig.internalModuleBaseUrls || manifest.loaderConfig.internalModuleBaseUrls.length === 0) {
                manifest.loaderConfig.internalModuleBaseUrls = [manifestsFileUrl];
            }
        });
    }
    else {
        console.error("Unable to determine " + "manifests.js" + " file URL. Using default base URL. " +
            'This is expected if you are running "gulp serve."');
    }
    return manifests;
}
//# sourceMappingURL=manifestsFile.js.map

/***/ })
/******/ ]);
});