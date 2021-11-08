/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody,\nhtml {\n  font-family: sans-serif;\n  height: 100%;\n}\n\n.header {\n  background-color: rgb(255, 195, 0);\n  border-radius: 5px;\n}\n\n.header-title {\n  text-align: left;\n  margin-left: 80px;\n  padding: 15px 0;\n}\n\n/* APP */\n/* left-side */\n\n.app-container {\n  display: flex;\n  height: calc(100% - 67px);\n}\n\n.project-section {\n  width: 22%;\n  background-color: rgb(242, 245, 107);\n  padding: 80px 40px;\n}\n\n.project-title {\n  font-size: 40px;\n  text-align: center;\n  margin-bottom: 20px;\n}\n\n.separator {\n  height: 3px;\n  background-color: black;\n  width: 100%;\n  margin-bottom: 50px;\n}\n\n.project-container {\n  margin-bottom: 30px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.project-el {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.project-name {\n  font-size: 20px;\n  font-weight: 500;\n}\n\n.add-project {\n  display: block;\n  text-align: center;\n  font-size: 60px;\n  cursor: pointer;\n}\n\n/* TODO PART */\n\n.todo-section {\n  width: 78%;\n  padding: 30px 40px;\n}\n\n.display-tittle,\n.title-change {\n  font-size: 30px;\n  margin-bottom: 10px;\n}\n\n.display-description {\n  font-size: 18px;\n  margin-bottom: 10px;\n}\n\n.todos-container {\n  width: 90%;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-bottom: 20px;\n}\n\n.full-todo {\n  border: 1px solid black;\n  flex-direction: column;\n  border-radius: 10px;\n}\n\n.todo {\n  height: 60px;\n\n  display: flex;\n  justify-content: space-between;\n  padding: 0 20px;\n  align-items: center;\n}\n\n.front-todo,\n.back-todo {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  font-size: 18px;\n}\n\n.back-todo {\n  gap: 50px;\n}\n\n.tittle-des {\n  font-size: 18px;\n  margin-left: 20px;\n}\n\n.text-des,\n.todo-description-change {\n  margin: 10px;\n  margin-left: 20px;\n  font-size: 15px;\n}\n\n.add-todo {\n  display: block;\n  text-align: center;\n  font-size: 60px;\n  cursor: pointer;\n}\n\n.todo-title-change {\n  font-size: 18px;\n}\n\n/* Axiliar  */\n.finished {\n  text-decoration: line-through;\n}\n\n.drop {\n  height: 20px;\n}\n\n.hide {\n  display: none;\n}\n\n/* forms */\n#form-project {\n  margin: 0 auto;\n  width: 200px;\n  font-size: 18px;\n  text-align: center;\n}\n\n#form-project input {\n  height: 30px;\n  width: 150px;\n  margin: 5px 0 10px 0;\n}\n\n#form-project button {\n  padding: 10px 20px;\n  font-size: 18px;\n  border-radius: 10px;\n  outline: none;\n  border: none;\n  color: white;\n  background: gray;\n  cursor: pointer;\n}\n\n#form-todo {\n  margin: 0 auto;\n  width: 200px;\n  font-size: 18px;\n  text-align: center;\n}\n\n#form-todo input {\n  height: 30px;\n  width: 150px;\n  margin: 5px 0 10px 0;\n}\n\n#form-todo button {\n  padding: 10px 20px;\n  font-size: 18px;\n  border-radius: 10px;\n  outline: none;\n  border: none;\n  color: white;\n  background: gray;\n  cursor: pointer;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;;EAEE,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,kCAAkC;EAClC,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,eAAe;AACjB;;AAEA,QAAQ;AACR,cAAc;;AAEd;EACE,aAAa;EACb,yBAAyB;AAC3B;;AAEA;EACE,UAAU;EACV,oCAAoC;EACpC,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,uBAAuB;EACvB,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,eAAe;EACf,eAAe;AACjB;;AAEA,cAAc;;AAEd;EACE,UAAU;EACV,kBAAkB;AACpB;;AAEA;;EAEE,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,cAAc;EACd,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,YAAY;;EAEZ,aAAa;EACb,8BAA8B;EAC9B,eAAe;EACf,mBAAmB;AACrB;;AAEA;;EAEE,aAAa;EACb,SAAS;EACT,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;;EAEE,YAAY;EACZ,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA,aAAa;AACb;EACE,6BAA6B;AAC/B;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA,UAAU;AACV;EACE,cAAc;EACd,YAAY;EACZ,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,YAAY;EACZ,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,YAAY;EACZ,gBAAgB;EAChB,eAAe;AACjB","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody,\nhtml {\n  font-family: sans-serif;\n  height: 100%;\n}\n\n.header {\n  background-color: rgb(255, 195, 0);\n  border-radius: 5px;\n}\n\n.header-title {\n  text-align: left;\n  margin-left: 80px;\n  padding: 15px 0;\n}\n\n/* APP */\n/* left-side */\n\n.app-container {\n  display: flex;\n  height: calc(100% - 67px);\n}\n\n.project-section {\n  width: 22%;\n  background-color: rgb(242, 245, 107);\n  padding: 80px 40px;\n}\n\n.project-title {\n  font-size: 40px;\n  text-align: center;\n  margin-bottom: 20px;\n}\n\n.separator {\n  height: 3px;\n  background-color: black;\n  width: 100%;\n  margin-bottom: 50px;\n}\n\n.project-container {\n  margin-bottom: 30px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.project-el {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.project-name {\n  font-size: 20px;\n  font-weight: 500;\n}\n\n.add-project {\n  display: block;\n  text-align: center;\n  font-size: 60px;\n  cursor: pointer;\n}\n\n/* TODO PART */\n\n.todo-section {\n  width: 78%;\n  padding: 30px 40px;\n}\n\n.display-tittle,\n.title-change {\n  font-size: 30px;\n  margin-bottom: 10px;\n}\n\n.display-description {\n  font-size: 18px;\n  margin-bottom: 10px;\n}\n\n.todos-container {\n  width: 90%;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-bottom: 20px;\n}\n\n.full-todo {\n  border: 1px solid black;\n  flex-direction: column;\n  border-radius: 10px;\n}\n\n.todo {\n  height: 60px;\n\n  display: flex;\n  justify-content: space-between;\n  padding: 0 20px;\n  align-items: center;\n}\n\n.front-todo,\n.back-todo {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  font-size: 18px;\n}\n\n.back-todo {\n  gap: 50px;\n}\n\n.tittle-des {\n  font-size: 18px;\n  margin-left: 20px;\n}\n\n.text-des,\n.todo-description-change {\n  margin: 10px;\n  margin-left: 20px;\n  font-size: 15px;\n}\n\n.add-todo {\n  display: block;\n  text-align: center;\n  font-size: 60px;\n  cursor: pointer;\n}\n\n.todo-title-change {\n  font-size: 18px;\n}\n\n/* Axiliar  */\n.finished {\n  text-decoration: line-through;\n}\n\n.drop {\n  height: 20px;\n}\n\n.hide {\n  display: none;\n}\n\n/* forms */\n#form-project {\n  margin: 0 auto;\n  width: 200px;\n  font-size: 18px;\n  text-align: center;\n}\n\n#form-project input {\n  height: 30px;\n  width: 150px;\n  margin: 5px 0 10px 0;\n}\n\n#form-project button {\n  padding: 10px 20px;\n  font-size: 18px;\n  border-radius: 10px;\n  outline: none;\n  border: none;\n  color: white;\n  background: gray;\n  cursor: pointer;\n}\n\n#form-todo {\n  margin: 0 auto;\n  width: 200px;\n  font-size: 18px;\n  text-align: center;\n}\n\n#form-todo input {\n  height: 30px;\n  width: 150px;\n  margin: 5px 0 10px 0;\n}\n\n#form-todo button {\n  padding: 10px 20px;\n  font-size: 18px;\n  border-radius: 10px;\n  outline: none;\n  border: none;\n  color: white;\n  background: gray;\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/domGeneration.js":
/*!******************************!*\
  !*** ./src/domGeneration.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "domGenerator": () => (/* binding */ domGenerator)
/* harmony export */ });
/* harmony import */ var _proyectController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./proyectController */ "./src/proyectController.js");
/* harmony import */ var _resource_trash_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resource/trash.png */ "./src/resource/trash.png");
/* harmony import */ var _resource_chevron_down_outline_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resource/chevron-down-outline.svg */ "./src/resource/chevron-down-outline.svg");
/* harmony import */ var _resource_chevron_up_outline_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resource/chevron-up-outline.svg */ "./src/resource/chevron-up-outline.svg");





const domGenerator = function () {
  const allProjectElements = [];

  const createTodo = function (project, todo, todoContainer = null) {
    let html = `
    <div class="todo">
      <div class="front-todo">
        <input type="checkbox" />
        <p class="todo-name">${todo.title}</p>
        <input class="todo-title-change hide"  type="text" />
      </div>
      <div class="back-todo">
        <p class="todo-date">${todo.dueDate}</p>
        <input class="todo-date-change hide"  type="date" value="2021-11-04" min="1966-01-01" max="2025-12-31" />
        <img class="drop" src="${_resource_chevron_down_outline_svg__WEBPACK_IMPORTED_MODULE_2__}" alt="icon-drop" />
        <img class="todo-trash" src="${_resource_trash_png__WEBPACK_IMPORTED_MODULE_1__}" alt="icon-trash" />
      </div>
    </div>
    <div class="description hide">
    <h2 class="tittle-des">Description</h2>
    <p class="text-des" >${todo.description}</p>
    <input class="todo-description-change hide"  type="text" />
    </div>
    
  `;

    const newTodo = document.createElement("div");
    newTodo.classList.add("full-todo");
    newTodo.innerHTML = html;
    newTodo.setAttribute("data-num", todo.num);

    //delete todos
    const trashIcoTodo = newTodo.querySelector(".todo-trash");
    trashIcoTodo.addEventListener("click", (e) => {
      deleteTodoHandler(e, project);
    });

    //completa todos
    const checkBox = newTodo.querySelector("input");
    checkBox.addEventListener("change", () => {
      finishedTodoHandler(todo, newTodo);
    });

    //abre description
    const dropDescription = newTodo.querySelector(".drop");
    dropDescription.addEventListener("click", () => {
      displayTodoDescription(newTodo);
    });

    //modificar titulo del todos
    modifyTodoTittle(newTodo, todo);

    //modificar la description
    modifyTodoDescription(newTodo, todo);

    //modificar date
    modifyTodoDate(newTodo, todo);

    //si existe lo pega en el elemento que pasemos
    if (todoContainer) {
      todoContainer.appendChild(newTodo);
      return;
    }
    document.querySelector(".todos-container").appendChild(newTodo);
  };

  const modifyTodoDate = function (todoEl, todo) {
    const todoDate = todoEl.querySelector(".todo-date");
    const inputEL = todoEl.querySelector(".todo-date-change");
    todoDate.addEventListener("click", () => {
      todoDate.classList.add("hide");
      inputEL.classList.remove("hide");
    });

    inputEL.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        todoDate.textContent = e.target.value;
        todo.changeDate(e.target.value);

        todoDate.classList.remove("hide");
        inputEL.classList.add("hide");
      }
    });
  };

  const modifyTodoDescription = function (todoEl, todo) {
    const todoDescription = todoEl.querySelector(".text-des");
    const inputEL = todoEl.querySelector(".todo-description-change");
    todoDescription.addEventListener("click", () => {
      todoDescription.classList.add("hide");
      inputEL.classList.remove("hide");
    });

    inputEL.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        todoDescription.textContent = e.target.value;
        todo.changeDescription(e.target.value);

        todoDescription.classList.remove("hide");
        inputEL.classList.add("hide");
      }
    });
  };

  const modifyTodoTittle = function (todoEl, todo) {
    const tittleTodo = todoEl.querySelector(".todo-name");
    const inputEL = todoEl.querySelector(".todo-title-change");
    tittleTodo.addEventListener("click", () => {
      tittleTodo.classList.add("hide");
      inputEL.classList.remove("hide");
    });

    inputEL.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        tittleTodo.textContent = e.target.value;
        todo.changeName(e.target.value);

        tittleTodo.classList.remove("hide");
        inputEL.classList.add("hide");
      }
    });
  };

  const displayTodoDescription = function (newTodo) {
    const descriptionEl = newTodo.querySelector(".description");
    const dropIco = newTodo.querySelector(".drop");
    if (descriptionEl.classList.contains("hide")) {
      descriptionEl.classList.remove("hide");
      dropIco.src = _resource_chevron_up_outline_svg__WEBPACK_IMPORTED_MODULE_3__;
    } else {
      descriptionEl.classList.add("hide");
      dropIco.src = dropIco;
    }
  };

  const finishedTodoHandler = (todo, newT) => {
    todo.finished();
    if (todo.checked) {
      newT.classList.add("finished");
    } else {
      newT.classList.remove("finished");
    }
  };

  const deleteTodoHandler = function (e, project) {
    if (project.todos.length === 0) return;
    const TodoEl = e.target.closest(".full-todo");
    project.deleteTodo(TodoEl.dataset.num);
    document.querySelector(".todos-container").removeChild(TodoEl);
  };

  const createProjectContent = function (project) {
    let html = `
    <div class="project-display">
      <h2 class="display-tittle">${project.name}</h2>
      <input class="title-change hide"  type="text" />
      <p class="display-description">
        ${project.description}
      </p>
      <div class="separator"></div>
      <div class="todos-container">
      
      </div>
      <span class="add-todo">+</span>
      <!-- form -->
      <form class="form hide" id="form-todo">
        <div class="container-input">
          <label for="title-todo">Todo Title</label>
          <input id="title-todo" type="text" required />
        </div>

        <div class="container-input">
          <label for="todo-description">Todo desciption</label>
          <input id="todo-description" type="text" required />
        </div>
        <div class="container-input">
          <label for="date-todo">Date todo</label>
          <input
            id="date-todo"
            type="date"
            value="2021-11-04"
            min="1966-01-01"
            max="2025-12-31"
            required
          />
        </div>
        <button type="submit" id="add-todo-btn">Add a todo</button>
      </form>
    </div>
  `;

    const newProject = document.createElement("main");
    newProject.classList.add("todo-section");
    newProject.setAttribute("data-num", project.num);
    newProject.innerHTML = html;

    //agrega los todos al display
    const todoContainer = newProject.querySelector(".todos-container");
    project.todos.forEach((todo) => {
      createTodo(project, todo, todoContainer);
    });

    //agrega crea el todo
    const formTodo = newProject.querySelector("#form-todo");
    formTodo.addEventListener("submit", (e) => {
      const addBtn = newProject.querySelector(".add-todo");
      addTodoHandler(e, project);
      addBtn.classList.remove("hide");
      formTodo.classList.add("hide");
      formTodo.reset();
    });

    //edita titulo
    const titleEl = newProject.querySelector(".display-tittle");
    titleEl.addEventListener("click", () => {
      editProjectTittle(newProject, titleEl, project);
    });

    //muestra form
    displayForm(newProject, formTodo);

    document.querySelector(".app-container").appendChild(newProject);
  };

  const displayForm = function (projectEl, formEL) {
    const addBtn = projectEl.querySelector(".add-todo");
    addBtn.addEventListener("click", () => {
      formEL.classList.remove("hide");
      addBtn.classList.add("hide");
    });
  };

  const editProjectTittle = function (project, tittle, projectObj) {
    const inputEL = project.querySelector(".title-change");
    tittle.classList.add("hide");
    inputEL.classList.remove("hide");
    inputEL.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        tittle.textContent = e.target.value;
        projectObj.modifyTittle(e.target.value);
        const labelOfProject = [
          ...document.querySelectorAll(".project-el"),
        ].find((label) => label.dataset.num === project.dataset.num);
        labelOfProject.children[0].textContent = e.target.value;
        tittle.classList.remove("hide");
        inputEL.classList.add("hide");
      }
    });
  };

  //////create a todo hadle

  const addTodoHandler = function (e, project) {
    e.preventDefault();
    const titleData = document.getElementById("title-todo").value;
    const descriptionData = document.getElementById("todo-description").value;
    const dateData = document.getElementById("date-todo").value;

    //crea y deviel el nuevo todo
    const newTodo = project.createTodo(titleData, descriptionData, dateData);
    createTodo(project, newTodo);
  };

  //// modificar nombre projecto

  const createProjectLabel = function (project) {
    let html = `
      <p class="project-name">${project.name}</p>
      <img src="${_resource_trash_png__WEBPACK_IMPORTED_MODULE_1__}" alt="trash" />
    `;
    //crea label y la pega en los ejemlos
    const label = document.createElement("div");
    label.classList.add("project-el");
    label.innerHTML = html;
    label.setAttribute("data-num", project.num);
    document.querySelector(".project-container").appendChild(label);

    //event listener para cambiar el proyecto al hacer click en label
    const LabelName = label.querySelector(".project-name");
    LabelName.addEventListener("click", () => {
      changeDisplayContent(project);
    });

    //borrar el proyecto
    const trashIco = label.querySelector("img");
    trashIco.addEventListener("click", deleteProjectHandler);
  };

  //borrar project handler event
  const deleteProjectHandler = (e) => {
    const labelProyect = e.target.closest(".project-el");
    //encuentra index del projecto y lo borrar del arr
    let indexOfDeletedProject = _proyectController__WEBPACK_IMPORTED_MODULE_0__.controller.getIndexProjects(
      labelProyect.dataset.num
    );
    _proyectController__WEBPACK_IMPORTED_MODULE_0__.controller.DeleteProject(labelProyect.dataset.num);
    deleteLabel(labelProyect);
    //condicion para que no siga borrando si no hay proyectos
    if (_proyectController__WEBPACK_IMPORTED_MODULE_0__.controller.projects.length === 0) {
      document.querySelector(".todo-section").innerHTML = "";
      return;
    }
    //evita que se rompa al borrar example quedando otro projecto
    if (indexOfDeletedProject === 0) {
      changeDisplayContent(_proyectController__WEBPACK_IMPORTED_MODULE_0__.controller.projects[indexOfDeletedProject]);
      return;
    }
    changeDisplayContent(_proyectController__WEBPACK_IMPORTED_MODULE_0__.controller.projects[indexOfDeletedProject - 1]);
  };

  //borrar label

  const deleteLabel = (label) => {
    const projectContainer = document.querySelector(".project-container");
    projectContainer.removeChild(label);
  };

  //solo cambia el proyecto
  const changeDisplayContent = (project) => {
    const currentProject = document.querySelector(".todo-section");
    if (currentProject) {
      //si existe lo remueve y coloca el nuevo
      const projectEl = document.querySelector(".todo-section");
      document.querySelector(".app-container").removeChild(projectEl);
    }
    createProjectContent(project);
  };

  //crea y cambia el proyecto
  const generateNewProjectAndChange = (project) => {
    const currentProject = document.querySelector(".todo-section");
    if (currentProject) {
      //si existe lo remueve y coloca el nuevo
      const projectEl = document.querySelector(".todo-section");
      document.querySelector(".app-container").removeChild(projectEl);
    }
    //crea label y contenido quel o mete en array
    allProjectElements.push(createProjectContent(project));
    createProjectLabel(project);
  };

  const example = function () {
    const examplePro = _proyectController__WEBPACK_IMPORTED_MODULE_0__.controller.createProject(
      "Example",
      "Example description"
    );

    examplePro.createTodo("example1", "description", "any date");
    examplePro.createTodo("example2", "description", "any date");

    createProjectContent(examplePro);
    createProjectLabel(examplePro);
  };

  const init = function () {
    const formProject = document.querySelector("#form-project");
    const btnProject = document.querySelector(".add-project");
    formProject.addEventListener("submit", (e) => {
      e.preventDefault();
      const titleName = document.getElementById("title-project").value;
      const description = document.getElementById("project-description").value;
      //crea el objeto y lo guarda en una variable
      const newProject = _proyectController__WEBPACK_IMPORTED_MODULE_0__.controller.createProject(titleName, description);
      generateNewProjectAndChange(newProject);
      formProject.classList.add("hide");
      btnProject.classList.remove("hide");

      formProject.reset();
    });

    btnProject.addEventListener("click", () => {
      btnProject.classList.add("hide");
      formProject.classList.remove("hide");
    });
  };

  return {
    createTodo,
    createProjectContent,
    createProjectLabel,
    generateNewProjectAndChange,
    example,
    init,
  };
};




/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");


class Project {
  constructor(name, description, projecNum) {
    this.name = name;
    this.description = description;
    this.num = projecNum;
    this.todos = [];
    this.todoNum = 0;
  }

  createTodo(title, description, data) {
    const newTodo = new _todo__WEBPACK_IMPORTED_MODULE_0__.Todos(title, description, data, this.todoNum++);
    this.todos.push(newTodo);
    return newTodo;
  }

  deleteTodo(todoNum) {
    this.todos.splice(this.getIndexTodo(todoNum), 1);
  }

  getIndexTodo = (todoNumber) => {
    const todoIndex = this.todos.findIndex(
      (todo) => todo.num === parseInt(todoNumber)
    );

    return todoIndex;
  };

  modifyTittle(newTittle) {
    this.name = newTittle;
  }
}




/***/ }),

/***/ "./src/proyectController.js":
/*!**********************************!*\
  !*** ./src/proyectController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "controller": () => (/* binding */ controller)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");


const controller = (function () {
  let projectNum = 0;

  const projects = [];

  const createProject = (name, description) => {
    const project = new _project__WEBPACK_IMPORTED_MODULE_0__.Project(name, description, projectNum);
    //aumenta el numero en la instancia ya creada
    projectNum++;
    projects.push(project);
    return project;
  };

  //muesta el proyecto al hacer click en la label
  const displayProject = () => {
    generator.createProject(projects[0]);
  };

  const DeleteProject = (projectNumber) => {
    projects.splice(getIndexProjects(projectNumber), 1);
  };

  //devuelve el index del elemento que queremos
  const getIndexProjects = (projectNumber) => {
    const projectIndex = projects.findIndex(
      (pro) => pro.num === parseInt(projectNumber)
    );

    return projectIndex;
  };
  const modifyProject = () => {};

  return {
    createProject,
    displayProject,
    projects,
    DeleteProject,
    getIndexProjects,
  };
})();




/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Todos": () => (/* binding */ Todos)
/* harmony export */ });
class Todos {
  constructor(title, description, dueDate, num) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    //this.priority = priority;
    this.checked = false;
    this.num = num;
  }

  finished() {
    this.checked = !this.checked;
  }

  changeName(name) {
    this.name = name;
  }

  changeDescription(description) {
    this.description = description;
  }

  changeDate(date) {
    this.dueDate = date;
  }
}




/***/ }),

/***/ "./src/resource/chevron-down-outline.svg":
/*!***********************************************!*\
  !*** ./src/resource/chevron-down-outline.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8261387b46a4e157bdf6.svg";

/***/ }),

/***/ "./src/resource/chevron-up-outline.svg":
/*!*********************************************!*\
  !*** ./src/resource/chevron-up-outline.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "99c0a5983627e2e09bdc.svg";

/***/ }),

/***/ "./src/resource/trash.png":
/*!********************************!*\
  !*** ./src/resource/trash.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f6e19c9ec2af2e934833.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _domGeneration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domGeneration */ "./src/domGeneration.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



const contentGenerator = (0,_domGeneration__WEBPACK_IMPORTED_MODULE_0__.domGenerator)();

contentGenerator.init();
contentGenerator.example();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxhQUFhO0FBQ2hEO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGdDQUFnQyxhQUFhO0FBQzdDLGtCQUFrQixnREFBUyxDQUFDO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQywyRUFBMkI7QUFDM0Q7QUFDQTtBQUNBLElBQUksd0VBQXdCO0FBQzVCO0FBQ0E7QUFDQSxRQUFRLDBFQUEwQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLG1FQUFtQjtBQUM5QztBQUNBO0FBQ0EseUJBQXlCLG1FQUFtQjtBQUM1Qzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsd0VBQXdCO0FBQy9DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHdFQUF3QjtBQUNqRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXdCOzs7Ozs7Ozs7Ozs7Ozs7O0FDdllPOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLHdDQUFLO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFbUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ2lCOztBQUVwQztBQUNBOztBQUVBOztBQUVBO0FBQ0Esd0JBQXdCLDZDQUFPO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFcUI7Ozs7Ozs7Ozs7Ozs7OztBQzNDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzNCakI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7QUNmK0M7QUFDMUI7O0FBRXJCLHlCQUF5Qiw0REFBWTs7QUFFckM7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tR2VuZXJhdGlvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJveWVjdENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5LFxcbmh0bWwge1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTk1LCAwKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmhlYWRlci10aXRsZSB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgbWFyZ2luLWxlZnQ6IDgwcHg7XFxuICBwYWRkaW5nOiAxNXB4IDA7XFxufVxcblxcbi8qIEFQUCAqL1xcbi8qIGxlZnQtc2lkZSAqL1xcblxcbi5hcHAtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY3cHgpO1xcbn1cXG5cXG4ucHJvamVjdC1zZWN0aW9uIHtcXG4gIHdpZHRoOiAyMiU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQyLCAyNDUsIDEwNyk7XFxuICBwYWRkaW5nOiA4MHB4IDQwcHg7XFxufVxcblxcbi5wcm9qZWN0LXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5zZXBhcmF0b3Ige1xcbiAgaGVpZ2h0OiAzcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLnByb2plY3QtZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LW5hbWUge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLmFkZC1wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiA2MHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBUT0RPIFBBUlQgKi9cXG5cXG4udG9kby1zZWN0aW9uIHtcXG4gIHdpZHRoOiA3OCU7XFxuICBwYWRkaW5nOiAzMHB4IDQwcHg7XFxufVxcblxcbi5kaXNwbGF5LXRpdHRsZSxcXG4udGl0bGUtY2hhbmdlIHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5kaXNwbGF5LWRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi50b2Rvcy1jb250YWluZXIge1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uZnVsbC10b2RvIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi50b2RvIHtcXG4gIGhlaWdodDogNjBweDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAwIDIwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZnJvbnQtdG9kbyxcXG4uYmFjay10b2RvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4uYmFjay10b2RvIHtcXG4gIGdhcDogNTBweDtcXG59XFxuXFxuLnRpdHRsZS1kZXMge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcblxcbi50ZXh0LWRlcyxcXG4udG9kby1kZXNjcmlwdGlvbi1jaGFuZ2Uge1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICBmb250LXNpemU6IDE1cHg7XFxufVxcblxcbi5hZGQtdG9kbyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogNjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG8tdGl0bGUtY2hhbmdlIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLyogQXhpbGlhciAgKi9cXG4uZmluaXNoZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5kcm9wIHtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuXFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogZm9ybXMgKi9cXG4jZm9ybS1wcm9qZWN0IHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jZm9ybS1wcm9qZWN0IGlucHV0IHtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIG1hcmdpbjogNXB4IDAgMTBweCAwO1xcbn1cXG5cXG4jZm9ybS1wcm9qZWN0IGJ1dHRvbiB7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQ6IGdyYXk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNmb3JtLXRvZG8ge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB3aWR0aDogMjAwcHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNmb3JtLXRvZG8gaW5wdXQge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgbWFyZ2luOiA1cHggMCAxMHB4IDA7XFxufVxcblxcbiNmb3JtLXRvZG8gYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZDogZ3JheTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBLFFBQVE7QUFDUixjQUFjOztBQUVkO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixvQ0FBb0M7RUFDcEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBLGNBQWM7O0FBRWQ7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7RUFDZCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7O0VBRVosYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGFBQWE7RUFDYixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBLGFBQWE7QUFDYjtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQSxVQUFVO0FBQ1Y7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5LFxcbmh0bWwge1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTk1LCAwKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmhlYWRlci10aXRsZSB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgbWFyZ2luLWxlZnQ6IDgwcHg7XFxuICBwYWRkaW5nOiAxNXB4IDA7XFxufVxcblxcbi8qIEFQUCAqL1xcbi8qIGxlZnQtc2lkZSAqL1xcblxcbi5hcHAtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY3cHgpO1xcbn1cXG5cXG4ucHJvamVjdC1zZWN0aW9uIHtcXG4gIHdpZHRoOiAyMiU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQyLCAyNDUsIDEwNyk7XFxuICBwYWRkaW5nOiA4MHB4IDQwcHg7XFxufVxcblxcbi5wcm9qZWN0LXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5zZXBhcmF0b3Ige1xcbiAgaGVpZ2h0OiAzcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLnByb2plY3QtZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LW5hbWUge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLmFkZC1wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiA2MHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBUT0RPIFBBUlQgKi9cXG5cXG4udG9kby1zZWN0aW9uIHtcXG4gIHdpZHRoOiA3OCU7XFxuICBwYWRkaW5nOiAzMHB4IDQwcHg7XFxufVxcblxcbi5kaXNwbGF5LXRpdHRsZSxcXG4udGl0bGUtY2hhbmdlIHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5kaXNwbGF5LWRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi50b2Rvcy1jb250YWluZXIge1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uZnVsbC10b2RvIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi50b2RvIHtcXG4gIGhlaWdodDogNjBweDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAwIDIwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZnJvbnQtdG9kbyxcXG4uYmFjay10b2RvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4uYmFjay10b2RvIHtcXG4gIGdhcDogNTBweDtcXG59XFxuXFxuLnRpdHRsZS1kZXMge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcblxcbi50ZXh0LWRlcyxcXG4udG9kby1kZXNjcmlwdGlvbi1jaGFuZ2Uge1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICBmb250LXNpemU6IDE1cHg7XFxufVxcblxcbi5hZGQtdG9kbyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogNjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG8tdGl0bGUtY2hhbmdlIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLyogQXhpbGlhciAgKi9cXG4uZmluaXNoZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5kcm9wIHtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuXFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogZm9ybXMgKi9cXG4jZm9ybS1wcm9qZWN0IHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jZm9ybS1wcm9qZWN0IGlucHV0IHtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIG1hcmdpbjogNXB4IDAgMTBweCAwO1xcbn1cXG5cXG4jZm9ybS1wcm9qZWN0IGJ1dHRvbiB7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQ6IGdyYXk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNmb3JtLXRvZG8ge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB3aWR0aDogMjAwcHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNmb3JtLXRvZG8gaW5wdXQge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgbWFyZ2luOiA1cHggMCAxMHB4IDA7XFxufVxcblxcbiNmb3JtLXRvZG8gYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZDogZ3JheTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBjb250cm9sbGVyIH0gZnJvbSBcIi4vcHJveWVjdENvbnRyb2xsZXJcIjtcbmltcG9ydCB0cmFzaEljb24gZnJvbSBcIi4vcmVzb3VyY2UvdHJhc2gucG5nXCI7XG5pbXBvcnQgZHJvcEljbyBmcm9tIFwiLi9yZXNvdXJjZS9jaGV2cm9uLWRvd24tb3V0bGluZS5zdmdcIjtcbmltcG9ydCB1cEljbyBmcm9tIFwiLi9yZXNvdXJjZS9jaGV2cm9uLXVwLW91dGxpbmUuc3ZnXCI7XG5cbmNvbnN0IGRvbUdlbmVyYXRvciA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgYWxsUHJvamVjdEVsZW1lbnRzID0gW107XG5cbiAgY29uc3QgY3JlYXRlVG9kbyA9IGZ1bmN0aW9uIChwcm9qZWN0LCB0b2RvLCB0b2RvQ29udGFpbmVyID0gbnVsbCkge1xuICAgIGxldCBodG1sID0gYFxuICAgIDxkaXYgY2xhc3M9XCJ0b2RvXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZnJvbnQtdG9kb1wiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz5cbiAgICAgICAgPHAgY2xhc3M9XCJ0b2RvLW5hbWVcIj4ke3RvZG8udGl0bGV9PC9wPlxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJ0b2RvLXRpdGxlLWNoYW5nZSBoaWRlXCIgIHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImJhY2stdG9kb1wiPlxuICAgICAgICA8cCBjbGFzcz1cInRvZG8tZGF0ZVwiPiR7dG9kby5kdWVEYXRlfTwvcD5cbiAgICAgICAgPGlucHV0IGNsYXNzPVwidG9kby1kYXRlLWNoYW5nZSBoaWRlXCIgIHR5cGU9XCJkYXRlXCIgdmFsdWU9XCIyMDIxLTExLTA0XCIgbWluPVwiMTk2Ni0wMS0wMVwiIG1heD1cIjIwMjUtMTItMzFcIiAvPlxuICAgICAgICA8aW1nIGNsYXNzPVwiZHJvcFwiIHNyYz1cIiR7ZHJvcEljb31cIiBhbHQ9XCJpY29uLWRyb3BcIiAvPlxuICAgICAgICA8aW1nIGNsYXNzPVwidG9kby10cmFzaFwiIHNyYz1cIiR7dHJhc2hJY29ufVwiIGFsdD1cImljb24tdHJhc2hcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uIGhpZGVcIj5cbiAgICA8aDIgY2xhc3M9XCJ0aXR0bGUtZGVzXCI+RGVzY3JpcHRpb248L2gyPlxuICAgIDxwIGNsYXNzPVwidGV4dC1kZXNcIiA+JHt0b2RvLmRlc2NyaXB0aW9ufTwvcD5cbiAgICA8aW5wdXQgY2xhc3M9XCJ0b2RvLWRlc2NyaXB0aW9uLWNoYW5nZSBoaWRlXCIgIHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICA8L2Rpdj5cbiAgICBcbiAgYDtcblxuICAgIGNvbnN0IG5ld1RvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1RvZG8uY2xhc3NMaXN0LmFkZChcImZ1bGwtdG9kb1wiKTtcbiAgICBuZXdUb2RvLmlubmVySFRNTCA9IGh0bWw7XG4gICAgbmV3VG9kby5zZXRBdHRyaWJ1dGUoXCJkYXRhLW51bVwiLCB0b2RvLm51bSk7XG5cbiAgICAvL2RlbGV0ZSB0b2Rvc1xuICAgIGNvbnN0IHRyYXNoSWNvVG9kbyA9IG5ld1RvZG8ucXVlcnlTZWxlY3RvcihcIi50b2RvLXRyYXNoXCIpO1xuICAgIHRyYXNoSWNvVG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGRlbGV0ZVRvZG9IYW5kbGVyKGUsIHByb2plY3QpO1xuICAgIH0pO1xuXG4gICAgLy9jb21wbGV0YSB0b2Rvc1xuICAgIGNvbnN0IGNoZWNrQm94ID0gbmV3VG9kby5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XG4gICAgY2hlY2tCb3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICBmaW5pc2hlZFRvZG9IYW5kbGVyKHRvZG8sIG5ld1RvZG8pO1xuICAgIH0pO1xuXG4gICAgLy9hYnJlIGRlc2NyaXB0aW9uXG4gICAgY29uc3QgZHJvcERlc2NyaXB0aW9uID0gbmV3VG9kby5xdWVyeVNlbGVjdG9yKFwiLmRyb3BcIik7XG4gICAgZHJvcERlc2NyaXB0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBkaXNwbGF5VG9kb0Rlc2NyaXB0aW9uKG5ld1RvZG8pO1xuICAgIH0pO1xuXG4gICAgLy9tb2RpZmljYXIgdGl0dWxvIGRlbCB0b2Rvc1xuICAgIG1vZGlmeVRvZG9UaXR0bGUobmV3VG9kbywgdG9kbyk7XG5cbiAgICAvL21vZGlmaWNhciBsYSBkZXNjcmlwdGlvblxuICAgIG1vZGlmeVRvZG9EZXNjcmlwdGlvbihuZXdUb2RvLCB0b2RvKTtcblxuICAgIC8vbW9kaWZpY2FyIGRhdGVcbiAgICBtb2RpZnlUb2RvRGF0ZShuZXdUb2RvLCB0b2RvKTtcblxuICAgIC8vc2kgZXhpc3RlIGxvIHBlZ2EgZW4gZWwgZWxlbWVudG8gcXVlIHBhc2Vtb3NcbiAgICBpZiAodG9kb0NvbnRhaW5lcikge1xuICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUb2RvKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2Rvcy1jb250YWluZXJcIikuYXBwZW5kQ2hpbGQobmV3VG9kbyk7XG4gIH07XG5cbiAgY29uc3QgbW9kaWZ5VG9kb0RhdGUgPSBmdW5jdGlvbiAodG9kb0VsLCB0b2RvKSB7XG4gICAgY29uc3QgdG9kb0RhdGUgPSB0b2RvRWwucXVlcnlTZWxlY3RvcihcIi50b2RvLWRhdGVcIik7XG4gICAgY29uc3QgaW5wdXRFTCA9IHRvZG9FbC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tZGF0ZS1jaGFuZ2VcIik7XG4gICAgdG9kb0RhdGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRvZG9EYXRlLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgaW5wdXRFTC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICB9KTtcblxuICAgIGlucHV0RUwuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgIHRvZG9EYXRlLnRleHRDb250ZW50ID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIHRvZG8uY2hhbmdlRGF0ZShlLnRhcmdldC52YWx1ZSk7XG5cbiAgICAgICAgdG9kb0RhdGUuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICAgIGlucHV0RUwuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgbW9kaWZ5VG9kb0Rlc2NyaXB0aW9uID0gZnVuY3Rpb24gKHRvZG9FbCwgdG9kbykge1xuICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbiA9IHRvZG9FbC5xdWVyeVNlbGVjdG9yKFwiLnRleHQtZGVzXCIpO1xuICAgIGNvbnN0IGlucHV0RUwgPSB0b2RvRWwucXVlcnlTZWxlY3RvcihcIi50b2RvLWRlc2NyaXB0aW9uLWNoYW5nZVwiKTtcbiAgICB0b2RvRGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRvZG9EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgIGlucHV0RUwuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgfSk7XG5cbiAgICBpbnB1dEVMLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICB0b2RvRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgdG9kby5jaGFuZ2VEZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSk7XG5cbiAgICAgICAgdG9kb0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgICBpbnB1dEVMLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IG1vZGlmeVRvZG9UaXR0bGUgPSBmdW5jdGlvbiAodG9kb0VsLCB0b2RvKSB7XG4gICAgY29uc3QgdGl0dGxlVG9kbyA9IHRvZG9FbC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tbmFtZVwiKTtcbiAgICBjb25zdCBpbnB1dEVMID0gdG9kb0VsLnF1ZXJ5U2VsZWN0b3IoXCIudG9kby10aXRsZS1jaGFuZ2VcIik7XG4gICAgdGl0dGxlVG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGl0dGxlVG9kby5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgIGlucHV0RUwuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgfSk7XG5cbiAgICBpbnB1dEVMLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICB0aXR0bGVUb2RvLnRleHRDb250ZW50ID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIHRvZG8uY2hhbmdlTmFtZShlLnRhcmdldC52YWx1ZSk7XG5cbiAgICAgICAgdGl0dGxlVG9kby5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgICAgaW5wdXRFTC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBkaXNwbGF5VG9kb0Rlc2NyaXB0aW9uID0gZnVuY3Rpb24gKG5ld1RvZG8pIHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbkVsID0gbmV3VG9kby5xdWVyeVNlbGVjdG9yKFwiLmRlc2NyaXB0aW9uXCIpO1xuICAgIGNvbnN0IGRyb3BJY28gPSBuZXdUb2RvLnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcFwiKTtcbiAgICBpZiAoZGVzY3JpcHRpb25FbC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlXCIpKSB7XG4gICAgICBkZXNjcmlwdGlvbkVsLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgZHJvcEljby5zcmMgPSB1cEljbztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVzY3JpcHRpb25FbC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgIGRyb3BJY28uc3JjID0gZHJvcEljbztcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZmluaXNoZWRUb2RvSGFuZGxlciA9ICh0b2RvLCBuZXdUKSA9PiB7XG4gICAgdG9kby5maW5pc2hlZCgpO1xuICAgIGlmICh0b2RvLmNoZWNrZWQpIHtcbiAgICAgIG5ld1QuY2xhc3NMaXN0LmFkZChcImZpbmlzaGVkXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdULmNsYXNzTGlzdC5yZW1vdmUoXCJmaW5pc2hlZFwiKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlVG9kb0hhbmRsZXIgPSBmdW5jdGlvbiAoZSwgcHJvamVjdCkge1xuICAgIGlmIChwcm9qZWN0LnRvZG9zLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgIGNvbnN0IFRvZG9FbCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIuZnVsbC10b2RvXCIpO1xuICAgIHByb2plY3QuZGVsZXRlVG9kbyhUb2RvRWwuZGF0YXNldC5udW0pO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb3MtY29udGFpbmVyXCIpLnJlbW92ZUNoaWxkKFRvZG9FbCk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlUHJvamVjdENvbnRlbnQgPSBmdW5jdGlvbiAocHJvamVjdCkge1xuICAgIGxldCBodG1sID0gYFxuICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWRpc3BsYXlcIj5cbiAgICAgIDxoMiBjbGFzcz1cImRpc3BsYXktdGl0dGxlXCI+JHtwcm9qZWN0Lm5hbWV9PC9oMj5cbiAgICAgIDxpbnB1dCBjbGFzcz1cInRpdGxlLWNoYW5nZSBoaWRlXCIgIHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgIDxwIGNsYXNzPVwiZGlzcGxheS1kZXNjcmlwdGlvblwiPlxuICAgICAgICAke3Byb2plY3QuZGVzY3JpcHRpb259XG4gICAgICA8L3A+XG4gICAgICA8ZGl2IGNsYXNzPVwic2VwYXJhdG9yXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidG9kb3MtY29udGFpbmVyXCI+XG4gICAgICBcbiAgICAgIDwvZGl2PlxuICAgICAgPHNwYW4gY2xhc3M9XCJhZGQtdG9kb1wiPis8L3NwYW4+XG4gICAgICA8IS0tIGZvcm0gLS0+XG4gICAgICA8Zm9ybSBjbGFzcz1cImZvcm0gaGlkZVwiIGlkPVwiZm9ybS10b2RvXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItaW5wdXRcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwidGl0bGUtdG9kb1wiPlRvZG8gVGl0bGU8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCBpZD1cInRpdGxlLXRvZG9cIiB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItaW5wdXRcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwidG9kby1kZXNjcmlwdGlvblwiPlRvZG8gZGVzY2lwdGlvbjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IGlkPVwidG9kby1kZXNjcmlwdGlvblwiIHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItaW5wdXRcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwiZGF0ZS10b2RvXCI+RGF0ZSB0b2RvPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGlkPVwiZGF0ZS10b2RvXCJcbiAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcbiAgICAgICAgICAgIHZhbHVlPVwiMjAyMS0xMS0wNFwiXG4gICAgICAgICAgICBtaW49XCIxOTY2LTAxLTAxXCJcbiAgICAgICAgICAgIG1heD1cIjIwMjUtMTItMzFcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgaWQ9XCJhZGQtdG9kby1idG5cIj5BZGQgYSB0b2RvPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gIGA7XG5cbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gICAgbmV3UHJvamVjdC5jbGFzc0xpc3QuYWRkKFwidG9kby1zZWN0aW9uXCIpO1xuICAgIG5ld1Byb2plY3Quc2V0QXR0cmlidXRlKFwiZGF0YS1udW1cIiwgcHJvamVjdC5udW0pO1xuICAgIG5ld1Byb2plY3QuaW5uZXJIVE1MID0gaHRtbDtcblxuICAgIC8vYWdyZWdhIGxvcyB0b2RvcyBhbCBkaXNwbGF5XG4gICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IG5ld1Byb2plY3QucXVlcnlTZWxlY3RvcihcIi50b2Rvcy1jb250YWluZXJcIik7XG4gICAgcHJvamVjdC50b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICBjcmVhdGVUb2RvKHByb2plY3QsIHRvZG8sIHRvZG9Db250YWluZXIpO1xuICAgIH0pO1xuXG4gICAgLy9hZ3JlZ2EgY3JlYSBlbCB0b2RvXG4gICAgY29uc3QgZm9ybVRvZG8gPSBuZXdQcm9qZWN0LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybS10b2RvXCIpO1xuICAgIGZvcm1Ub2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IGFkZEJ0biA9IG5ld1Byb2plY3QucXVlcnlTZWxlY3RvcihcIi5hZGQtdG9kb1wiKTtcbiAgICAgIGFkZFRvZG9IYW5kbGVyKGUsIHByb2plY3QpO1xuICAgICAgYWRkQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgZm9ybVRvZG8uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICBmb3JtVG9kby5yZXNldCgpO1xuICAgIH0pO1xuXG4gICAgLy9lZGl0YSB0aXR1bG9cbiAgICBjb25zdCB0aXRsZUVsID0gbmV3UHJvamVjdC5xdWVyeVNlbGVjdG9yKFwiLmRpc3BsYXktdGl0dGxlXCIpO1xuICAgIHRpdGxlRWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGVkaXRQcm9qZWN0VGl0dGxlKG5ld1Byb2plY3QsIHRpdGxlRWwsIHByb2plY3QpO1xuICAgIH0pO1xuXG4gICAgLy9tdWVzdHJhIGZvcm1cbiAgICBkaXNwbGF5Rm9ybShuZXdQcm9qZWN0LCBmb3JtVG9kbyk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFwcC1jb250YWluZXJcIikuYXBwZW5kQ2hpbGQobmV3UHJvamVjdCk7XG4gIH07XG5cbiAgY29uc3QgZGlzcGxheUZvcm0gPSBmdW5jdGlvbiAocHJvamVjdEVsLCBmb3JtRUwpIHtcbiAgICBjb25zdCBhZGRCdG4gPSBwcm9qZWN0RWwucXVlcnlTZWxlY3RvcihcIi5hZGQtdG9kb1wiKTtcbiAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGZvcm1FTC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgIGFkZEJ0bi5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBlZGl0UHJvamVjdFRpdHRsZSA9IGZ1bmN0aW9uIChwcm9qZWN0LCB0aXR0bGUsIHByb2plY3RPYmopIHtcbiAgICBjb25zdCBpbnB1dEVMID0gcHJvamVjdC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlLWNoYW5nZVwiKTtcbiAgICB0aXR0bGUuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgaW5wdXRFTC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICBpbnB1dEVMLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICB0aXR0bGUudGV4dENvbnRlbnQgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgcHJvamVjdE9iai5tb2RpZnlUaXR0bGUoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICBjb25zdCBsYWJlbE9mUHJvamVjdCA9IFtcbiAgICAgICAgICAuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtZWxcIiksXG4gICAgICAgIF0uZmluZCgobGFiZWwpID0+IGxhYmVsLmRhdGFzZXQubnVtID09PSBwcm9qZWN0LmRhdGFzZXQubnVtKTtcbiAgICAgICAgbGFiZWxPZlByb2plY3QuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgdGl0dGxlLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgICBpbnB1dEVMLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIC8vLy8vL2NyZWF0ZSBhIHRvZG8gaGFkbGVcblxuICBjb25zdCBhZGRUb2RvSGFuZGxlciA9IGZ1bmN0aW9uIChlLCBwcm9qZWN0KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRpdGxlRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGUtdG9kb1wiKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbkRhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tZGVzY3JpcHRpb25cIikudmFsdWU7XG4gICAgY29uc3QgZGF0ZURhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGUtdG9kb1wiKS52YWx1ZTtcblxuICAgIC8vY3JlYSB5IGRldmllbCBlbCBudWV2byB0b2RvXG4gICAgY29uc3QgbmV3VG9kbyA9IHByb2plY3QuY3JlYXRlVG9kbyh0aXRsZURhdGEsIGRlc2NyaXB0aW9uRGF0YSwgZGF0ZURhdGEpO1xuICAgIGNyZWF0ZVRvZG8ocHJvamVjdCwgbmV3VG9kbyk7XG4gIH07XG5cbiAgLy8vLyBtb2RpZmljYXIgbm9tYnJlIHByb2plY3RvXG5cbiAgY29uc3QgY3JlYXRlUHJvamVjdExhYmVsID0gZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgICBsZXQgaHRtbCA9IGBcbiAgICAgIDxwIGNsYXNzPVwicHJvamVjdC1uYW1lXCI+JHtwcm9qZWN0Lm5hbWV9PC9wPlxuICAgICAgPGltZyBzcmM9XCIke3RyYXNoSWNvbn1cIiBhbHQ9XCJ0cmFzaFwiIC8+XG4gICAgYDtcbiAgICAvL2NyZWEgbGFiZWwgeSBsYSBwZWdhIGVuIGxvcyBlamVtbG9zXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWVsXCIpO1xuICAgIGxhYmVsLmlubmVySFRNTCA9IGh0bWw7XG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZGF0YS1udW1cIiwgcHJvamVjdC5udW0pO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jb250YWluZXJcIikuYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG4gICAgLy9ldmVudCBsaXN0ZW5lciBwYXJhIGNhbWJpYXIgZWwgcHJveWVjdG8gYWwgaGFjZXIgY2xpY2sgZW4gbGFiZWxcbiAgICBjb25zdCBMYWJlbE5hbWUgPSBsYWJlbC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbmFtZVwiKTtcbiAgICBMYWJlbE5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNoYW5nZURpc3BsYXlDb250ZW50KHByb2plY3QpO1xuICAgIH0pO1xuXG4gICAgLy9ib3JyYXIgZWwgcHJveWVjdG9cbiAgICBjb25zdCB0cmFzaEljbyA9IGxhYmVsLnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIik7XG4gICAgdHJhc2hJY28uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZVByb2plY3RIYW5kbGVyKTtcbiAgfTtcblxuICAvL2JvcnJhciBwcm9qZWN0IGhhbmRsZXIgZXZlbnRcbiAgY29uc3QgZGVsZXRlUHJvamVjdEhhbmRsZXIgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGxhYmVsUHJveWVjdCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIucHJvamVjdC1lbFwiKTtcbiAgICAvL2VuY3VlbnRyYSBpbmRleCBkZWwgcHJvamVjdG8geSBsbyBib3JyYXIgZGVsIGFyclxuICAgIGxldCBpbmRleE9mRGVsZXRlZFByb2plY3QgPSBjb250cm9sbGVyLmdldEluZGV4UHJvamVjdHMoXG4gICAgICBsYWJlbFByb3llY3QuZGF0YXNldC5udW1cbiAgICApO1xuICAgIGNvbnRyb2xsZXIuRGVsZXRlUHJvamVjdChsYWJlbFByb3llY3QuZGF0YXNldC5udW0pO1xuICAgIGRlbGV0ZUxhYmVsKGxhYmVsUHJveWVjdCk7XG4gICAgLy9jb25kaWNpb24gcGFyYSBxdWUgbm8gc2lnYSBib3JyYW5kbyBzaSBubyBoYXkgcHJveWVjdG9zXG4gICAgaWYgKGNvbnRyb2xsZXIucHJvamVjdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tc2VjdGlvblwiKS5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvL2V2aXRhIHF1ZSBzZSByb21wYSBhbCBib3JyYXIgZXhhbXBsZSBxdWVkYW5kbyBvdHJvIHByb2plY3RvXG4gICAgaWYgKGluZGV4T2ZEZWxldGVkUHJvamVjdCA9PT0gMCkge1xuICAgICAgY2hhbmdlRGlzcGxheUNvbnRlbnQoY29udHJvbGxlci5wcm9qZWN0c1tpbmRleE9mRGVsZXRlZFByb2plY3RdKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2hhbmdlRGlzcGxheUNvbnRlbnQoY29udHJvbGxlci5wcm9qZWN0c1tpbmRleE9mRGVsZXRlZFByb2plY3QgLSAxXSk7XG4gIH07XG5cbiAgLy9ib3JyYXIgbGFiZWxcblxuICBjb25zdCBkZWxldGVMYWJlbCA9IChsYWJlbCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY29udGFpbmVyXCIpO1xuICAgIHByb2plY3RDb250YWluZXIucmVtb3ZlQ2hpbGQobGFiZWwpO1xuICB9O1xuXG4gIC8vc29sbyBjYW1iaWEgZWwgcHJveWVjdG9cbiAgY29uc3QgY2hhbmdlRGlzcGxheUNvbnRlbnQgPSAocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLXNlY3Rpb25cIik7XG4gICAgaWYgKGN1cnJlbnRQcm9qZWN0KSB7XG4gICAgICAvL3NpIGV4aXN0ZSBsbyByZW11ZXZlIHkgY29sb2NhIGVsIG51ZXZvXG4gICAgICBjb25zdCBwcm9qZWN0RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tc2VjdGlvblwiKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXBwLWNvbnRhaW5lclwiKS5yZW1vdmVDaGlsZChwcm9qZWN0RWwpO1xuICAgIH1cbiAgICBjcmVhdGVQcm9qZWN0Q29udGVudChwcm9qZWN0KTtcbiAgfTtcblxuICAvL2NyZWEgeSBjYW1iaWEgZWwgcHJveWVjdG9cbiAgY29uc3QgZ2VuZXJhdGVOZXdQcm9qZWN0QW5kQ2hhbmdlID0gKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1zZWN0aW9uXCIpO1xuICAgIGlmIChjdXJyZW50UHJvamVjdCkge1xuICAgICAgLy9zaSBleGlzdGUgbG8gcmVtdWV2ZSB5IGNvbG9jYSBlbCBudWV2b1xuICAgICAgY29uc3QgcHJvamVjdEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLXNlY3Rpb25cIik7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFwcC1jb250YWluZXJcIikucmVtb3ZlQ2hpbGQocHJvamVjdEVsKTtcbiAgICB9XG4gICAgLy9jcmVhIGxhYmVsIHkgY29udGVuaWRvIHF1ZWwgbyBtZXRlIGVuIGFycmF5XG4gICAgYWxsUHJvamVjdEVsZW1lbnRzLnB1c2goY3JlYXRlUHJvamVjdENvbnRlbnQocHJvamVjdCkpO1xuICAgIGNyZWF0ZVByb2plY3RMYWJlbChwcm9qZWN0KTtcbiAgfTtcblxuICBjb25zdCBleGFtcGxlID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGV4YW1wbGVQcm8gPSBjb250cm9sbGVyLmNyZWF0ZVByb2plY3QoXG4gICAgICBcIkV4YW1wbGVcIixcbiAgICAgIFwiRXhhbXBsZSBkZXNjcmlwdGlvblwiXG4gICAgKTtcblxuICAgIGV4YW1wbGVQcm8uY3JlYXRlVG9kbyhcImV4YW1wbGUxXCIsIFwiZGVzY3JpcHRpb25cIiwgXCJhbnkgZGF0ZVwiKTtcbiAgICBleGFtcGxlUHJvLmNyZWF0ZVRvZG8oXCJleGFtcGxlMlwiLCBcImRlc2NyaXB0aW9uXCIsIFwiYW55IGRhdGVcIik7XG5cbiAgICBjcmVhdGVQcm9qZWN0Q29udGVudChleGFtcGxlUHJvKTtcbiAgICBjcmVhdGVQcm9qZWN0TGFiZWwoZXhhbXBsZVBybyk7XG4gIH07XG5cbiAgY29uc3QgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBmb3JtUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybS1wcm9qZWN0XCIpO1xuICAgIGNvbnN0IGJ0blByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0XCIpO1xuICAgIGZvcm1Qcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IHRpdGxlTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGUtcHJvamVjdFwiKS52YWx1ZTtcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICAgICAgLy9jcmVhIGVsIG9iamV0byB5IGxvIGd1YXJkYSBlbiB1bmEgdmFyaWFibGVcbiAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBjb250cm9sbGVyLmNyZWF0ZVByb2plY3QodGl0bGVOYW1lLCBkZXNjcmlwdGlvbik7XG4gICAgICBnZW5lcmF0ZU5ld1Byb2plY3RBbmRDaGFuZ2UobmV3UHJvamVjdCk7XG4gICAgICBmb3JtUHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgIGJ0blByb2plY3QuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG5cbiAgICAgIGZvcm1Qcm9qZWN0LnJlc2V0KCk7XG4gICAgfSk7XG5cbiAgICBidG5Qcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBidG5Qcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgZm9ybVByb2plY3QuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVUb2RvLFxuICAgIGNyZWF0ZVByb2plY3RDb250ZW50LFxuICAgIGNyZWF0ZVByb2plY3RMYWJlbCxcbiAgICBnZW5lcmF0ZU5ld1Byb2plY3RBbmRDaGFuZ2UsXG4gICAgZXhhbXBsZSxcbiAgICBpbml0LFxuICB9O1xufTtcblxuZXhwb3J0IHsgZG9tR2VuZXJhdG9yIH07XG4iLCJpbXBvcnQgeyBUb2RvcyB9IGZyb20gXCIuL3RvZG9cIjtcblxuY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uLCBwcm9qZWNOdW0pIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLm51bSA9IHByb2plY051bTtcbiAgICB0aGlzLnRvZG9zID0gW107XG4gICAgdGhpcy50b2RvTnVtID0gMDtcbiAgfVxuXG4gIGNyZWF0ZVRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRhKSB7XG4gICAgY29uc3QgbmV3VG9kbyA9IG5ldyBUb2Rvcyh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGEsIHRoaXMudG9kb051bSsrKTtcbiAgICB0aGlzLnRvZG9zLnB1c2gobmV3VG9kbyk7XG4gICAgcmV0dXJuIG5ld1RvZG87XG4gIH1cblxuICBkZWxldGVUb2RvKHRvZG9OdW0pIHtcbiAgICB0aGlzLnRvZG9zLnNwbGljZSh0aGlzLmdldEluZGV4VG9kbyh0b2RvTnVtKSwgMSk7XG4gIH1cblxuICBnZXRJbmRleFRvZG8gPSAodG9kb051bWJlcikgPT4ge1xuICAgIGNvbnN0IHRvZG9JbmRleCA9IHRoaXMudG9kb3MuZmluZEluZGV4KFxuICAgICAgKHRvZG8pID0+IHRvZG8ubnVtID09PSBwYXJzZUludCh0b2RvTnVtYmVyKVxuICAgICk7XG5cbiAgICByZXR1cm4gdG9kb0luZGV4O1xuICB9O1xuXG4gIG1vZGlmeVRpdHRsZShuZXdUaXR0bGUpIHtcbiAgICB0aGlzLm5hbWUgPSBuZXdUaXR0bGU7XG4gIH1cbn1cblxuZXhwb3J0IHsgUHJvamVjdCB9O1xuIiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcblxuY29uc3QgY29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XG4gIGxldCBwcm9qZWN0TnVtID0gMDtcblxuICBjb25zdCBwcm9qZWN0cyA9IFtdO1xuXG4gIGNvbnN0IGNyZWF0ZVByb2plY3QgPSAobmFtZSwgZGVzY3JpcHRpb24pID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSwgZGVzY3JpcHRpb24sIHByb2plY3ROdW0pO1xuICAgIC8vYXVtZW50YSBlbCBudW1lcm8gZW4gbGEgaW5zdGFuY2lhIHlhIGNyZWFkYVxuICAgIHByb2plY3ROdW0rKztcbiAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIHJldHVybiBwcm9qZWN0O1xuICB9O1xuXG4gIC8vbXVlc3RhIGVsIHByb3llY3RvIGFsIGhhY2VyIGNsaWNrIGVuIGxhIGxhYmVsXG4gIGNvbnN0IGRpc3BsYXlQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGdlbmVyYXRvci5jcmVhdGVQcm9qZWN0KHByb2plY3RzWzBdKTtcbiAgfTtcblxuICBjb25zdCBEZWxldGVQcm9qZWN0ID0gKHByb2plY3ROdW1iZXIpID0+IHtcbiAgICBwcm9qZWN0cy5zcGxpY2UoZ2V0SW5kZXhQcm9qZWN0cyhwcm9qZWN0TnVtYmVyKSwgMSk7XG4gIH07XG5cbiAgLy9kZXZ1ZWx2ZSBlbCBpbmRleCBkZWwgZWxlbWVudG8gcXVlIHF1ZXJlbW9zXG4gIGNvbnN0IGdldEluZGV4UHJvamVjdHMgPSAocHJvamVjdE51bWJlcikgPT4ge1xuICAgIGNvbnN0IHByb2plY3RJbmRleCA9IHByb2plY3RzLmZpbmRJbmRleChcbiAgICAgIChwcm8pID0+IHByby5udW0gPT09IHBhcnNlSW50KHByb2plY3ROdW1iZXIpXG4gICAgKTtcblxuICAgIHJldHVybiBwcm9qZWN0SW5kZXg7XG4gIH07XG4gIGNvbnN0IG1vZGlmeVByb2plY3QgPSAoKSA9PiB7fTtcblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZVByb2plY3QsXG4gICAgZGlzcGxheVByb2plY3QsXG4gICAgcHJvamVjdHMsXG4gICAgRGVsZXRlUHJvamVjdCxcbiAgICBnZXRJbmRleFByb2plY3RzLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IHsgY29udHJvbGxlciB9O1xuIiwiY2xhc3MgVG9kb3Mge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIG51bSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAvL3RoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmNoZWNrZWQgPSBmYWxzZTtcbiAgICB0aGlzLm51bSA9IG51bTtcbiAgfVxuXG4gIGZpbmlzaGVkKCkge1xuICAgIHRoaXMuY2hlY2tlZCA9ICF0aGlzLmNoZWNrZWQ7XG4gIH1cblxuICBjaGFuZ2VOYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgY2hhbmdlRGVzY3JpcHRpb24oZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIH1cblxuICBjaGFuZ2VEYXRlKGRhdGUpIHtcbiAgICB0aGlzLmR1ZURhdGUgPSBkYXRlO1xuICB9XG59XG5cbmV4cG9ydCB7IFRvZG9zIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB7IGRvbUdlbmVyYXRvciB9IGZyb20gXCIuL2RvbUdlbmVyYXRpb25cIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmNvbnN0IGNvbnRlbnRHZW5lcmF0b3IgPSBkb21HZW5lcmF0b3IoKTtcblxuY29udGVudEdlbmVyYXRvci5pbml0KCk7XG5jb250ZW50R2VuZXJhdG9yLmV4YW1wbGUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==