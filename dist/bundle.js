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
        //actualiza store cuando cambia fecha
        localStorage.setItem("Projects", JSON.stringify(_proyectController__WEBPACK_IMPORTED_MODULE_0__.controller.projects));

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
        //actualiza store cuando descripcion
        localStorage.setItem("Projects", JSON.stringify(_proyectController__WEBPACK_IMPORTED_MODULE_0__.controller.projects));

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
        //actualiza store cuando descripcion
        localStorage.setItem("Projects", JSON.stringify(_proyectController__WEBPACK_IMPORTED_MODULE_0__.controller.projects));

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
      dropIco.src = _resource_chevron_down_outline_svg__WEBPACK_IMPORTED_MODULE_2__;
    }
  };

  const finishedTodoHandler = (todo, newT) => {
    todo.finished();
    if (todo.checked) {
      newT.classList.add("finished");
    } else {
      newT.classList.remove("finished");
    }
    //actualiza store cuando cambia el check
    localStorage.setItem("Projects", JSON.stringify(_proyectController__WEBPACK_IMPORTED_MODULE_0__.controller.projects));
  };

  const deleteTodoHandler = function (e, project) {
    if (project.todos.length === 0) return;
    const TodoEl = e.target.closest(".full-todo");
    project.deleteTodo(TodoEl.dataset.num);
    document.querySelector(".todos-container").removeChild(TodoEl);
    //actualiza el local storage
    localStorage.setItem("Projects", JSON.stringify(_proyectController__WEBPACK_IMPORTED_MODULE_0__.controller.projects));
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
      //
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

    // //agrega al storage los proyectos
    localStorage.setItem("Projects", JSON.stringify(_proyectController__WEBPACK_IMPORTED_MODULE_0__.controller.projects));

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
        //actualiza store cuando cambia nombre
        localStorage.setItem("Projects", JSON.stringify(_proyectController__WEBPACK_IMPORTED_MODULE_0__.controller.projects));
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
    //actualiza el storage al crear un todo
    localStorage.setItem("Projects", JSON.stringify(_proyectController__WEBPACK_IMPORTED_MODULE_0__.controller.projects));
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

    localStorage.setItem("Projects", JSON.stringify([examplePro]));

    createProjectContent(examplePro);
    createProjectLabel(examplePro);
  };

  const init = function () {
    lookForStorage();

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

  //se fija si existe un local storage
  const lookForStorage = () => {
    if (localStorage.getItem("Projects")) {
      const projectStorage = JSON.parse(localStorage.getItem("Projects"));
      projectStorage.forEach((project) => {
        //crea los objetos con los metodos necesarios

        const objWithMethods = _proyectController__WEBPACK_IMPORTED_MODULE_0__.controller.createProject(
          project.name,
          project.description
        );
        //pega nuevamente los valores
        objWithMethods.todoNum = project.todoNum;
        objWithMethods.todos = project.todos;
        //agrega nuevamente los metodos a los todos del objeto
        objWithMethods.todos.forEach((todo, i) => {
          const todoWithMetods = objWithMethods.giveMethodOfTodo(
            todo.title,
            todo.description,
            todo.dueDate,
            todo.num
          );
          objWithMethods.todos[i] = todoWithMetods;
        });

        generateNewProjectAndChange(objWithMethods);
      });
      // //hace que siempre se ponga el examples
      // changeDisplayContent(projectStorage[0]);
    } else {
      example();
    }
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

  giveMethodOfTodo(title, description, data, num) {
    const newTodo = new _todo__WEBPACK_IMPORTED_MODULE_0__.Todos(title, description, data, num);
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

  getTodos() {
    return this.todos;
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
  const giveMethodOfTodo = function (name, description, num) {
    const project = new _project__WEBPACK_IMPORTED_MODULE_0__.Project(name, description, num);
    return project;
  };

  const DeleteProject = (projectNumber) => {
    projects.splice(getIndexProjects(projectNumber), 1);
    localStorage.setItem("Projects", JSON.stringify(projects));
  };

  //devuelve el index del elemento que queremos
  const getIndexProjects = (projectNumber) => {
    const projectIndex = projects.findIndex(
      (pro) => pro.num === parseInt(projectNumber)
    );

    return projectIndex;
  };

  return {
    createProject,

    projects,
    DeleteProject,
    getIndexProjects,
    giveMethodOfTodo,
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
    this.title = name;
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7O0FDZitDO0FBQzFCOztBQUVyQix5QkFBeUIsNERBQVk7O0FBRXJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb21HZW5lcmF0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm95ZWN0Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHksXFxuaHRtbCB7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxOTUsIDApO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uaGVhZGVyLXRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBtYXJnaW4tbGVmdDogODBweDtcXG4gIHBhZGRpbmc6IDE1cHggMDtcXG59XFxuXFxuLyogQVBQICovXFxuLyogbGVmdC1zaWRlICovXFxuXFxuLmFwcC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gNjdweCk7XFxufVxcblxcbi5wcm9qZWN0LXNlY3Rpb24ge1xcbiAgd2lkdGg6IDIyJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDIsIDI0NSwgMTA3KTtcXG4gIHBhZGRpbmc6IDgwcHggNDBweDtcXG59XFxuXFxuLnByb2plY3QtdGl0bGUge1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnNlcGFyYXRvciB7XFxuICBoZWlnaHQ6IDNweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1lbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtbmFtZSB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uYWRkLXByb2plY3Qge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDYwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIFRPRE8gUEFSVCAqL1xcblxcbi50b2RvLXNlY3Rpb24ge1xcbiAgd2lkdGg6IDc4JTtcXG4gIHBhZGRpbmc6IDMwcHggNDBweDtcXG59XFxuXFxuLmRpc3BsYXktdGl0dGxlLFxcbi50aXRsZS1jaGFuZ2Uge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmRpc3BsYXktZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLnRvZG9zLWNvbnRhaW5lciB7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5mdWxsLXRvZG8ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLnRvZG8ge1xcbiAgaGVpZ2h0OiA2MHB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDAgMjBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mcm9udC10b2RvLFxcbi5iYWNrLXRvZG8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5iYWNrLXRvZG8ge1xcbiAgZ2FwOiA1MHB4O1xcbn1cXG5cXG4udGl0dGxlLWRlcyB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuXFxuLnRleHQtZGVzLFxcbi50b2RvLWRlc2NyaXB0aW9uLWNoYW5nZSB7XFxuICBtYXJnaW46IDEwcHg7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuXFxuLmFkZC10b2RvIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiA2MHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kby10aXRsZS1jaGFuZ2Uge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4vKiBBeGlsaWFyICAqL1xcbi5maW5pc2hlZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLmRyb3Age1xcbiAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBmb3JtcyAqL1xcbiNmb3JtLXByb2plY3Qge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB3aWR0aDogMjAwcHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNmb3JtLXByb2plY3QgaW5wdXQge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgbWFyZ2luOiA1cHggMCAxMHB4IDA7XFxufVxcblxcbiNmb3JtLXByb2plY3QgYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZDogZ3JheTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2Zvcm0tdG9kbyB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2Zvcm0tdG9kbyBpbnB1dCB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMTUwcHg7XFxuICBtYXJnaW46IDVweCAwIDEwcHggMDtcXG59XFxuXFxuI2Zvcm0tdG9kbyBidXR0b24ge1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kOiBncmF5O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUEsUUFBUTtBQUNSLGNBQWM7O0FBRWQ7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLG9DQUFvQztFQUNwQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUEsY0FBYzs7QUFFZDtFQUNFLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTs7RUFFWixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUEsYUFBYTtBQUNiO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBLFVBQVU7QUFDVjtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHksXFxuaHRtbCB7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxOTUsIDApO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uaGVhZGVyLXRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBtYXJnaW4tbGVmdDogODBweDtcXG4gIHBhZGRpbmc6IDE1cHggMDtcXG59XFxuXFxuLyogQVBQICovXFxuLyogbGVmdC1zaWRlICovXFxuXFxuLmFwcC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gNjdweCk7XFxufVxcblxcbi5wcm9qZWN0LXNlY3Rpb24ge1xcbiAgd2lkdGg6IDIyJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDIsIDI0NSwgMTA3KTtcXG4gIHBhZGRpbmc6IDgwcHggNDBweDtcXG59XFxuXFxuLnByb2plY3QtdGl0bGUge1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnNlcGFyYXRvciB7XFxuICBoZWlnaHQ6IDNweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1lbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtbmFtZSB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uYWRkLXByb2plY3Qge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDYwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIFRPRE8gUEFSVCAqL1xcblxcbi50b2RvLXNlY3Rpb24ge1xcbiAgd2lkdGg6IDc4JTtcXG4gIHBhZGRpbmc6IDMwcHggNDBweDtcXG59XFxuXFxuLmRpc3BsYXktdGl0dGxlLFxcbi50aXRsZS1jaGFuZ2Uge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmRpc3BsYXktZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLnRvZG9zLWNvbnRhaW5lciB7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5mdWxsLXRvZG8ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLnRvZG8ge1xcbiAgaGVpZ2h0OiA2MHB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDAgMjBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mcm9udC10b2RvLFxcbi5iYWNrLXRvZG8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5iYWNrLXRvZG8ge1xcbiAgZ2FwOiA1MHB4O1xcbn1cXG5cXG4udGl0dGxlLWRlcyB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuXFxuLnRleHQtZGVzLFxcbi50b2RvLWRlc2NyaXB0aW9uLWNoYW5nZSB7XFxuICBtYXJnaW46IDEwcHg7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuXFxuLmFkZC10b2RvIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiA2MHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kby10aXRsZS1jaGFuZ2Uge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4vKiBBeGlsaWFyICAqL1xcbi5maW5pc2hlZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLmRyb3Age1xcbiAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBmb3JtcyAqL1xcbiNmb3JtLXByb2plY3Qge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB3aWR0aDogMjAwcHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNmb3JtLXByb2plY3QgaW5wdXQge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgbWFyZ2luOiA1cHggMCAxMHB4IDA7XFxufVxcblxcbiNmb3JtLXByb2plY3QgYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZDogZ3JheTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2Zvcm0tdG9kbyB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2Zvcm0tdG9kbyBpbnB1dCB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMTUwcHg7XFxuICBtYXJnaW46IDVweCAwIDEwcHggMDtcXG59XFxuXFxuI2Zvcm0tdG9kbyBidXR0b24ge1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kOiBncmF5O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNvbnRyb2xsZXIgfSBmcm9tIFwiLi9wcm95ZWN0Q29udHJvbGxlclwiO1xuaW1wb3J0IHRyYXNoSWNvbiBmcm9tIFwiLi9yZXNvdXJjZS90cmFzaC5wbmdcIjtcbmltcG9ydCBkcm9wSWNvbiBmcm9tIFwiLi9yZXNvdXJjZS9jaGV2cm9uLWRvd24tb3V0bGluZS5zdmdcIjtcbmltcG9ydCB1cEljbyBmcm9tIFwiLi9yZXNvdXJjZS9jaGV2cm9uLXVwLW91dGxpbmUuc3ZnXCI7XG5cbmNvbnN0IGRvbUdlbmVyYXRvciA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgYWxsUHJvamVjdEVsZW1lbnRzID0gW107XG5cbiAgY29uc3QgY3JlYXRlVG9kbyA9IGZ1bmN0aW9uIChwcm9qZWN0LCB0b2RvLCB0b2RvQ29udGFpbmVyID0gbnVsbCkge1xuICAgIGxldCBodG1sID0gYFxuICAgIDxkaXYgY2xhc3M9XCJ0b2RvXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZnJvbnQtdG9kb1wiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz5cbiAgICAgICAgPHAgY2xhc3M9XCJ0b2RvLW5hbWVcIj4ke3RvZG8udGl0bGV9PC9wPlxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJ0b2RvLXRpdGxlLWNoYW5nZSBoaWRlXCIgIHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImJhY2stdG9kb1wiPlxuICAgICAgICA8cCBjbGFzcz1cInRvZG8tZGF0ZVwiPiR7dG9kby5kdWVEYXRlfTwvcD5cbiAgICAgICAgPGlucHV0IGNsYXNzPVwidG9kby1kYXRlLWNoYW5nZSBoaWRlXCIgIHR5cGU9XCJkYXRlXCIgdmFsdWU9XCIyMDIxLTExLTA0XCIgbWluPVwiMTk2Ni0wMS0wMVwiIG1heD1cIjIwMjUtMTItMzFcIiAvPlxuICAgICAgICA8aW1nIGNsYXNzPVwiZHJvcFwiIHNyYz1cIiR7ZHJvcEljb259XCIgYWx0PVwiaWNvbi1kcm9wXCIgLz5cbiAgICAgICAgPGltZyBjbGFzcz1cInRvZG8tdHJhc2hcIiBzcmM9XCIke3RyYXNoSWNvbn1cIiBhbHQ9XCJpY29uLXRyYXNoXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvbiBoaWRlXCI+XG4gICAgPGgyIGNsYXNzPVwidGl0dGxlLWRlc1wiPkRlc2NyaXB0aW9uPC9oMj5cbiAgICA8cCBjbGFzcz1cInRleHQtZGVzXCIgPiR7dG9kby5kZXNjcmlwdGlvbn08L3A+XG4gICAgPGlucHV0IGNsYXNzPVwidG9kby1kZXNjcmlwdGlvbi1jaGFuZ2UgaGlkZVwiICB0eXBlPVwidGV4dFwiIC8+XG4gICAgPC9kaXY+XG4gICAgXG4gIGA7XG5cbiAgICBjb25zdCBuZXdUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdUb2RvLmNsYXNzTGlzdC5hZGQoXCJmdWxsLXRvZG9cIik7XG4gICAgbmV3VG9kby5pbm5lckhUTUwgPSBodG1sO1xuICAgIG5ld1RvZG8uc2V0QXR0cmlidXRlKFwiZGF0YS1udW1cIiwgdG9kby5udW0pO1xuXG4gICAgLy9kZWxldGUgdG9kb3NcbiAgICBjb25zdCB0cmFzaEljb1RvZG8gPSBuZXdUb2RvLnF1ZXJ5U2VsZWN0b3IoXCIudG9kby10cmFzaFwiKTtcbiAgICB0cmFzaEljb1RvZG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBkZWxldGVUb2RvSGFuZGxlcihlLCBwcm9qZWN0KTtcbiAgICB9KTtcblxuICAgIC8vY29tcGxldGEgdG9kb3NcbiAgICBjb25zdCBjaGVja0JveCA9IG5ld1RvZG8ucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuICAgIGNoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgZmluaXNoZWRUb2RvSGFuZGxlcih0b2RvLCBuZXdUb2RvKTtcbiAgICB9KTtcblxuICAgIC8vYWJyZSBkZXNjcmlwdGlvblxuICAgIGNvbnN0IGRyb3BEZXNjcmlwdGlvbiA9IG5ld1RvZG8ucXVlcnlTZWxlY3RvcihcIi5kcm9wXCIpO1xuICAgIGRyb3BEZXNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZGlzcGxheVRvZG9EZXNjcmlwdGlvbihuZXdUb2RvKTtcbiAgICB9KTtcblxuICAgIC8vbW9kaWZpY2FyIHRpdHVsbyBkZWwgdG9kb3NcbiAgICBtb2RpZnlUb2RvVGl0dGxlKG5ld1RvZG8sIHRvZG8pO1xuXG4gICAgLy9tb2RpZmljYXIgbGEgZGVzY3JpcHRpb25cbiAgICBtb2RpZnlUb2RvRGVzY3JpcHRpb24obmV3VG9kbywgdG9kbyk7XG5cbiAgICAvL21vZGlmaWNhciBkYXRlXG4gICAgbW9kaWZ5VG9kb0RhdGUobmV3VG9kbywgdG9kbyk7XG5cbiAgICAvL3NpIGV4aXN0ZSBsbyBwZWdhIGVuIGVsIGVsZW1lbnRvIHF1ZSBwYXNlbW9zXG4gICAgaWYgKHRvZG9Db250YWluZXIpIHtcbiAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQobmV3VG9kbyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb3MtY29udGFpbmVyXCIpLmFwcGVuZENoaWxkKG5ld1RvZG8pO1xuICB9O1xuXG4gIGNvbnN0IG1vZGlmeVRvZG9EYXRlID0gZnVuY3Rpb24gKHRvZG9FbCwgdG9kbykge1xuICAgIGNvbnN0IHRvZG9EYXRlID0gdG9kb0VsLnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1kYXRlXCIpO1xuICAgIGNvbnN0IGlucHV0RUwgPSB0b2RvRWwucXVlcnlTZWxlY3RvcihcIi50b2RvLWRhdGUtY2hhbmdlXCIpO1xuICAgIHRvZG9EYXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0b2RvRGF0ZS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgIGlucHV0RUwuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgfSk7XG5cbiAgICBpbnB1dEVMLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICB0b2RvRGF0ZS50ZXh0Q29udGVudCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICB0b2RvLmNoYW5nZURhdGUoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAvL2FjdHVhbGl6YSBzdG9yZSBjdWFuZG8gY2FtYmlhIGZlY2hhXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiUHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkoY29udHJvbGxlci5wcm9qZWN0cykpO1xuXG4gICAgICAgIHRvZG9EYXRlLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgICBpbnB1dEVMLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IG1vZGlmeVRvZG9EZXNjcmlwdGlvbiA9IGZ1bmN0aW9uICh0b2RvRWwsIHRvZG8pIHtcbiAgICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSB0b2RvRWwucXVlcnlTZWxlY3RvcihcIi50ZXh0LWRlc1wiKTtcbiAgICBjb25zdCBpbnB1dEVMID0gdG9kb0VsLnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1kZXNjcmlwdGlvbi1jaGFuZ2VcIik7XG4gICAgdG9kb0Rlc2NyaXB0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0b2RvRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICBpbnB1dEVMLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgIH0pO1xuXG4gICAgaW5wdXRFTC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgdG9kb0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIHRvZG8uY2hhbmdlRGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAvL2FjdHVhbGl6YSBzdG9yZSBjdWFuZG8gZGVzY3JpcGNpb25cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJQcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShjb250cm9sbGVyLnByb2plY3RzKSk7XG5cbiAgICAgICAgdG9kb0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgICBpbnB1dEVMLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IG1vZGlmeVRvZG9UaXR0bGUgPSBmdW5jdGlvbiAodG9kb0VsLCB0b2RvKSB7XG4gICAgY29uc3QgdGl0dGxlVG9kbyA9IHRvZG9FbC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tbmFtZVwiKTtcbiAgICBjb25zdCBpbnB1dEVMID0gdG9kb0VsLnF1ZXJ5U2VsZWN0b3IoXCIudG9kby10aXRsZS1jaGFuZ2VcIik7XG4gICAgdGl0dGxlVG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGl0dGxlVG9kby5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgIGlucHV0RUwuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgfSk7XG5cbiAgICBpbnB1dEVMLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICB0aXR0bGVUb2RvLnRleHRDb250ZW50ID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIHRvZG8uY2hhbmdlTmFtZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIC8vYWN0dWFsaXphIHN0b3JlIGN1YW5kbyBkZXNjcmlwY2lvblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KGNvbnRyb2xsZXIucHJvamVjdHMpKTtcblxuICAgICAgICB0aXR0bGVUb2RvLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgICBpbnB1dEVMLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlUb2RvRGVzY3JpcHRpb24gPSBmdW5jdGlvbiAobmV3VG9kbykge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uRWwgPSBuZXdUb2RvLnF1ZXJ5U2VsZWN0b3IoXCIuZGVzY3JpcHRpb25cIik7XG4gICAgY29uc3QgZHJvcEljbyA9IG5ld1RvZG8ucXVlcnlTZWxlY3RvcihcIi5kcm9wXCIpO1xuICAgIGlmIChkZXNjcmlwdGlvbkVsLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIikpIHtcbiAgICAgIGRlc2NyaXB0aW9uRWwuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICBkcm9wSWNvLnNyYyA9IHVwSWNvO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZXNjcmlwdGlvbkVsLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgZHJvcEljby5zcmMgPSBkcm9wSWNvbjtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZmluaXNoZWRUb2RvSGFuZGxlciA9ICh0b2RvLCBuZXdUKSA9PiB7XG4gICAgdG9kby5maW5pc2hlZCgpO1xuICAgIGlmICh0b2RvLmNoZWNrZWQpIHtcbiAgICAgIG5ld1QuY2xhc3NMaXN0LmFkZChcImZpbmlzaGVkXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdULmNsYXNzTGlzdC5yZW1vdmUoXCJmaW5pc2hlZFwiKTtcbiAgICB9XG4gICAgLy9hY3R1YWxpemEgc3RvcmUgY3VhbmRvIGNhbWJpYSBlbCBjaGVja1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiUHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkoY29udHJvbGxlci5wcm9qZWN0cykpO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVRvZG9IYW5kbGVyID0gZnVuY3Rpb24gKGUsIHByb2plY3QpIHtcbiAgICBpZiAocHJvamVjdC50b2Rvcy5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICBjb25zdCBUb2RvRWwgPSBlLnRhcmdldC5jbG9zZXN0KFwiLmZ1bGwtdG9kb1wiKTtcbiAgICBwcm9qZWN0LmRlbGV0ZVRvZG8oVG9kb0VsLmRhdGFzZXQubnVtKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9zLWNvbnRhaW5lclwiKS5yZW1vdmVDaGlsZChUb2RvRWwpO1xuICAgIC8vYWN0dWFsaXphIGVsIGxvY2FsIHN0b3JhZ2VcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KGNvbnRyb2xsZXIucHJvamVjdHMpKTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVQcm9qZWN0Q29udGVudCA9IGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gICAgbGV0IGh0bWwgPSBgXG4gICAgPGRpdiBjbGFzcz1cInByb2plY3QtZGlzcGxheVwiPlxuICAgICAgPGgyIGNsYXNzPVwiZGlzcGxheS10aXR0bGVcIj4ke3Byb2plY3QubmFtZX08L2gyPlxuICAgICAgPGlucHV0IGNsYXNzPVwidGl0bGUtY2hhbmdlIGhpZGVcIiAgdHlwZT1cInRleHRcIiAvPlxuICAgICAgPHAgY2xhc3M9XCJkaXNwbGF5LWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICR7cHJvamVjdC5kZXNjcmlwdGlvbn1cbiAgICAgIDwvcD5cbiAgICAgIDxkaXYgY2xhc3M9XCJzZXBhcmF0b3JcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0b2Rvcy1jb250YWluZXJcIj5cbiAgICAgIFxuICAgICAgPC9kaXY+XG4gICAgICA8c3BhbiBjbGFzcz1cImFkZC10b2RvXCI+Kzwvc3Bhbj5cbiAgICAgIDwhLS0gZm9ybSAtLT5cbiAgICAgIDxmb3JtIGNsYXNzPVwiZm9ybSBoaWRlXCIgaWQ9XCJmb3JtLXRvZG9cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1pbnB1dFwiPlxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0aXRsZS10b2RvXCI+VG9kbyBUaXRsZTwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IGlkPVwidGl0bGUtdG9kb1wiIHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1pbnB1dFwiPlxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0b2RvLWRlc2NyaXB0aW9uXCI+VG9kbyBkZXNjaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgaWQ9XCJ0b2RvLWRlc2NyaXB0aW9uXCIgdHlwZT1cInRleHRcIiByZXF1aXJlZCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1pbnB1dFwiPlxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJkYXRlLXRvZG9cIj5EYXRlIHRvZG88L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgaWQ9XCJkYXRlLXRvZG9cIlxuICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxuICAgICAgICAgICAgdmFsdWU9XCIyMDIxLTExLTA0XCJcbiAgICAgICAgICAgIG1pbj1cIjE5NjYtMDEtMDFcIlxuICAgICAgICAgICAgbWF4PVwiMjAyNS0xMi0zMVwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBpZD1cImFkZC10b2RvLWJ0blwiPkFkZCBhIHRvZG88L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgYDtcblxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgICBuZXdQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXNlY3Rpb25cIik7XG4gICAgbmV3UHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLW51bVwiLCBwcm9qZWN0Lm51bSk7XG4gICAgbmV3UHJvamVjdC5pbm5lckhUTUwgPSBodG1sO1xuXG4gICAgLy9hZ3JlZ2EgbG9zIHRvZG9zIGFsIGRpc3BsYXlcbiAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gbmV3UHJvamVjdC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9zLWNvbnRhaW5lclwiKTtcbiAgICBwcm9qZWN0LnRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgIGNyZWF0ZVRvZG8ocHJvamVjdCwgdG9kbywgdG9kb0NvbnRhaW5lcik7XG4gICAgICAvL1xuICAgIH0pO1xuXG4gICAgLy9hZ3JlZ2EgY3JlYSBlbCB0b2RvXG4gICAgY29uc3QgZm9ybVRvZG8gPSBuZXdQcm9qZWN0LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybS10b2RvXCIpO1xuICAgIGZvcm1Ub2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IGFkZEJ0biA9IG5ld1Byb2plY3QucXVlcnlTZWxlY3RvcihcIi5hZGQtdG9kb1wiKTtcbiAgICAgIGFkZFRvZG9IYW5kbGVyKGUsIHByb2plY3QpO1xuICAgICAgYWRkQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgZm9ybVRvZG8uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICBmb3JtVG9kby5yZXNldCgpO1xuICAgIH0pO1xuXG4gICAgLy9lZGl0YSB0aXR1bG9cbiAgICBjb25zdCB0aXRsZUVsID0gbmV3UHJvamVjdC5xdWVyeVNlbGVjdG9yKFwiLmRpc3BsYXktdGl0dGxlXCIpO1xuICAgIHRpdGxlRWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGVkaXRQcm9qZWN0VGl0dGxlKG5ld1Byb2plY3QsIHRpdGxlRWwsIHByb2plY3QpO1xuICAgIH0pO1xuXG4gICAgLy9tdWVzdHJhIGZvcm1cbiAgICBkaXNwbGF5Rm9ybShuZXdQcm9qZWN0LCBmb3JtVG9kbyk7XG5cbiAgICAvLyAvL2FncmVnYSBhbCBzdG9yYWdlIGxvcyBwcm95ZWN0b3NcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KGNvbnRyb2xsZXIucHJvamVjdHMpKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXBwLWNvbnRhaW5lclwiKS5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcbiAgfTtcblxuICBjb25zdCBkaXNwbGF5Rm9ybSA9IGZ1bmN0aW9uIChwcm9qZWN0RWwsIGZvcm1FTCkge1xuICAgIGNvbnN0IGFkZEJ0biA9IHByb2plY3RFbC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10b2RvXCIpO1xuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZm9ybUVMLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgYWRkQnRuLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGVkaXRQcm9qZWN0VGl0dGxlID0gZnVuY3Rpb24gKHByb2plY3QsIHRpdHRsZSwgcHJvamVjdE9iaikge1xuICAgIGNvbnN0IGlucHV0RUwgPSBwcm9qZWN0LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGUtY2hhbmdlXCIpO1xuICAgIHRpdHRsZS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICBpbnB1dEVMLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgIGlucHV0RUwuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgIHRpdHRsZS50ZXh0Q29udGVudCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICBwcm9qZWN0T2JqLm1vZGlmeVRpdHRsZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIGNvbnN0IGxhYmVsT2ZQcm9qZWN0ID0gW1xuICAgICAgICAgIC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC1lbFwiKSxcbiAgICAgICAgXS5maW5kKChsYWJlbCkgPT4gbGFiZWwuZGF0YXNldC5udW0gPT09IHByb2plY3QuZGF0YXNldC5udW0pO1xuICAgICAgICBsYWJlbE9mUHJvamVjdC5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICB0aXR0bGUuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICAgIGlucHV0RUwuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgIC8vYWN0dWFsaXphIHN0b3JlIGN1YW5kbyBjYW1iaWEgbm9tYnJlXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiUHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkoY29udHJvbGxlci5wcm9qZWN0cykpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIC8vLy8vL2NyZWF0ZSBhIHRvZG8gaGFkbGVcblxuICBjb25zdCBhZGRUb2RvSGFuZGxlciA9IGZ1bmN0aW9uIChlLCBwcm9qZWN0KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRpdGxlRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGUtdG9kb1wiKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbkRhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tZGVzY3JpcHRpb25cIikudmFsdWU7XG4gICAgY29uc3QgZGF0ZURhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGUtdG9kb1wiKS52YWx1ZTtcblxuICAgIC8vY3JlYSB5IGRldmllbCBlbCBudWV2byB0b2RvXG4gICAgY29uc3QgbmV3VG9kbyA9IHByb2plY3QuY3JlYXRlVG9kbyh0aXRsZURhdGEsIGRlc2NyaXB0aW9uRGF0YSwgZGF0ZURhdGEpO1xuICAgIGNyZWF0ZVRvZG8ocHJvamVjdCwgbmV3VG9kbyk7XG4gICAgLy9hY3R1YWxpemEgZWwgc3RvcmFnZSBhbCBjcmVhciB1biB0b2RvXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJQcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShjb250cm9sbGVyLnByb2plY3RzKSk7XG4gIH07XG5cbiAgLy8vLyBtb2RpZmljYXIgbm9tYnJlIHByb2plY3RvXG5cbiAgY29uc3QgY3JlYXRlUHJvamVjdExhYmVsID0gZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgICBsZXQgaHRtbCA9IGBcbiAgICAgIDxwIGNsYXNzPVwicHJvamVjdC1uYW1lXCI+JHtwcm9qZWN0Lm5hbWV9PC9wPlxuICAgICAgPGltZyBzcmM9XCIke3RyYXNoSWNvbn1cIiBhbHQ9XCJ0cmFzaFwiIC8+XG4gICAgYDtcbiAgICAvL2NyZWEgbGFiZWwgeSBsYSBwZWdhIGVuIGxvcyBlamVtbG9zXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWVsXCIpO1xuICAgIGxhYmVsLmlubmVySFRNTCA9IGh0bWw7XG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZGF0YS1udW1cIiwgcHJvamVjdC5udW0pO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jb250YWluZXJcIikuYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG4gICAgLy9ldmVudCBsaXN0ZW5lciBwYXJhIGNhbWJpYXIgZWwgcHJveWVjdG8gYWwgaGFjZXIgY2xpY2sgZW4gbGFiZWxcbiAgICBjb25zdCBMYWJlbE5hbWUgPSBsYWJlbC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbmFtZVwiKTtcbiAgICBMYWJlbE5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNoYW5nZURpc3BsYXlDb250ZW50KHByb2plY3QpO1xuICAgIH0pO1xuXG4gICAgLy9ib3JyYXIgZWwgcHJveWVjdG9cbiAgICBjb25zdCB0cmFzaEljbyA9IGxhYmVsLnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIik7XG4gICAgdHJhc2hJY28uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZVByb2plY3RIYW5kbGVyKTtcbiAgfTtcblxuICAvL2JvcnJhciBwcm9qZWN0IGhhbmRsZXIgZXZlbnRcbiAgY29uc3QgZGVsZXRlUHJvamVjdEhhbmRsZXIgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGxhYmVsUHJveWVjdCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIucHJvamVjdC1lbFwiKTtcbiAgICAvL2VuY3VlbnRyYSBpbmRleCBkZWwgcHJvamVjdG8geSBsbyBib3JyYXIgZGVsIGFyclxuICAgIGxldCBpbmRleE9mRGVsZXRlZFByb2plY3QgPSBjb250cm9sbGVyLmdldEluZGV4UHJvamVjdHMoXG4gICAgICBsYWJlbFByb3llY3QuZGF0YXNldC5udW1cbiAgICApO1xuICAgIGNvbnRyb2xsZXIuRGVsZXRlUHJvamVjdChsYWJlbFByb3llY3QuZGF0YXNldC5udW0pO1xuICAgIGRlbGV0ZUxhYmVsKGxhYmVsUHJveWVjdCk7XG4gICAgLy9jb25kaWNpb24gcGFyYSBxdWUgbm8gc2lnYSBib3JyYW5kbyBzaSBubyBoYXkgcHJveWVjdG9zXG4gICAgaWYgKGNvbnRyb2xsZXIucHJvamVjdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tc2VjdGlvblwiKS5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvL2V2aXRhIHF1ZSBzZSByb21wYSBhbCBib3JyYXIgZXhhbXBsZSBxdWVkYW5kbyBvdHJvIHByb2plY3RvXG4gICAgaWYgKGluZGV4T2ZEZWxldGVkUHJvamVjdCA9PT0gMCkge1xuICAgICAgY2hhbmdlRGlzcGxheUNvbnRlbnQoY29udHJvbGxlci5wcm9qZWN0c1tpbmRleE9mRGVsZXRlZFByb2plY3RdKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2hhbmdlRGlzcGxheUNvbnRlbnQoY29udHJvbGxlci5wcm9qZWN0c1tpbmRleE9mRGVsZXRlZFByb2plY3QgLSAxXSk7XG4gIH07XG5cbiAgLy9ib3JyYXIgbGFiZWxcblxuICBjb25zdCBkZWxldGVMYWJlbCA9IChsYWJlbCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY29udGFpbmVyXCIpO1xuICAgIHByb2plY3RDb250YWluZXIucmVtb3ZlQ2hpbGQobGFiZWwpO1xuICB9O1xuXG4gIC8vc29sbyBjYW1iaWEgZWwgcHJveWVjdG9cbiAgY29uc3QgY2hhbmdlRGlzcGxheUNvbnRlbnQgPSAocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLXNlY3Rpb25cIik7XG4gICAgaWYgKGN1cnJlbnRQcm9qZWN0KSB7XG4gICAgICAvL3NpIGV4aXN0ZSBsbyByZW11ZXZlIHkgY29sb2NhIGVsIG51ZXZvXG4gICAgICBjb25zdCBwcm9qZWN0RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tc2VjdGlvblwiKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXBwLWNvbnRhaW5lclwiKS5yZW1vdmVDaGlsZChwcm9qZWN0RWwpO1xuICAgIH1cbiAgICBjcmVhdGVQcm9qZWN0Q29udGVudChwcm9qZWN0KTtcbiAgfTtcblxuICAvL2NyZWEgeSBjYW1iaWEgZWwgcHJveWVjdG9cbiAgY29uc3QgZ2VuZXJhdGVOZXdQcm9qZWN0QW5kQ2hhbmdlID0gKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1zZWN0aW9uXCIpO1xuICAgIGlmIChjdXJyZW50UHJvamVjdCkge1xuICAgICAgLy9zaSBleGlzdGUgbG8gcmVtdWV2ZSB5IGNvbG9jYSBlbCBudWV2b1xuICAgICAgY29uc3QgcHJvamVjdEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLXNlY3Rpb25cIik7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFwcC1jb250YWluZXJcIikucmVtb3ZlQ2hpbGQocHJvamVjdEVsKTtcbiAgICB9XG4gICAgLy9jcmVhIGxhYmVsIHkgY29udGVuaWRvIHF1ZWwgbyBtZXRlIGVuIGFycmF5XG4gICAgYWxsUHJvamVjdEVsZW1lbnRzLnB1c2goY3JlYXRlUHJvamVjdENvbnRlbnQocHJvamVjdCkpO1xuXG4gICAgY3JlYXRlUHJvamVjdExhYmVsKHByb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IGV4YW1wbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZXhhbXBsZVBybyA9IGNvbnRyb2xsZXIuY3JlYXRlUHJvamVjdChcbiAgICAgIFwiRXhhbXBsZVwiLFxuICAgICAgXCJFeGFtcGxlIGRlc2NyaXB0aW9uXCJcbiAgICApO1xuXG4gICAgZXhhbXBsZVByby5jcmVhdGVUb2RvKFwiZXhhbXBsZTFcIiwgXCJkZXNjcmlwdGlvblwiLCBcImFueSBkYXRlXCIpO1xuICAgIGV4YW1wbGVQcm8uY3JlYXRlVG9kbyhcImV4YW1wbGUyXCIsIFwiZGVzY3JpcHRpb25cIiwgXCJhbnkgZGF0ZVwiKTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiUHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkoW2V4YW1wbGVQcm9dKSk7XG5cbiAgICBjcmVhdGVQcm9qZWN0Q29udGVudChleGFtcGxlUHJvKTtcbiAgICBjcmVhdGVQcm9qZWN0TGFiZWwoZXhhbXBsZVBybyk7XG4gIH07XG5cbiAgY29uc3QgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBsb29rRm9yU3RvcmFnZSgpO1xuXG4gICAgY29uc3QgZm9ybVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm0tcHJvamVjdFwiKTtcbiAgICBjb25zdCBidG5Qcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdFwiKTtcbiAgICBmb3JtUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCB0aXRsZU5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlLXByb2plY3RcIikudmFsdWU7XG4gICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1kZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgICAgIC8vY3JlYSBlbCBvYmpldG8geSBsbyBndWFyZGEgZW4gdW5hIHZhcmlhYmxlXG4gICAgICBjb25zdCBuZXdQcm9qZWN0ID0gY29udHJvbGxlci5jcmVhdGVQcm9qZWN0KHRpdGxlTmFtZSwgZGVzY3JpcHRpb24pO1xuXG4gICAgICBnZW5lcmF0ZU5ld1Byb2plY3RBbmRDaGFuZ2UobmV3UHJvamVjdCk7XG4gICAgICBmb3JtUHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgIGJ0blByb2plY3QuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG5cbiAgICAgIGZvcm1Qcm9qZWN0LnJlc2V0KCk7XG4gICAgfSk7XG5cbiAgICBidG5Qcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBidG5Qcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgZm9ybVByb2plY3QuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgfSk7XG4gIH07XG5cbiAgLy9zZSBmaWphIHNpIGV4aXN0ZSB1biBsb2NhbCBzdG9yYWdlXG4gIGNvbnN0IGxvb2tGb3JTdG9yYWdlID0gKCkgPT4ge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlByb2plY3RzXCIpKSB7XG4gICAgICBjb25zdCBwcm9qZWN0U3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQcm9qZWN0c1wiKSk7XG4gICAgICBwcm9qZWN0U3RvcmFnZS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIC8vY3JlYSBsb3Mgb2JqZXRvcyBjb24gbG9zIG1ldG9kb3MgbmVjZXNhcmlvc1xuXG4gICAgICAgIGNvbnN0IG9ialdpdGhNZXRob2RzID0gY29udHJvbGxlci5jcmVhdGVQcm9qZWN0KFxuICAgICAgICAgIHByb2plY3QubmFtZSxcbiAgICAgICAgICBwcm9qZWN0LmRlc2NyaXB0aW9uXG4gICAgICAgICk7XG4gICAgICAgIC8vcGVnYSBudWV2YW1lbnRlIGxvcyB2YWxvcmVzXG4gICAgICAgIG9ialdpdGhNZXRob2RzLnRvZG9OdW0gPSBwcm9qZWN0LnRvZG9OdW07XG4gICAgICAgIG9ialdpdGhNZXRob2RzLnRvZG9zID0gcHJvamVjdC50b2RvcztcbiAgICAgICAgLy9hZ3JlZ2EgbnVldmFtZW50ZSBsb3MgbWV0b2RvcyBhIGxvcyB0b2RvcyBkZWwgb2JqZXRvXG4gICAgICAgIG9ialdpdGhNZXRob2RzLnRvZG9zLmZvckVhY2goKHRvZG8sIGkpID0+IHtcbiAgICAgICAgICBjb25zdCB0b2RvV2l0aE1ldG9kcyA9IG9ialdpdGhNZXRob2RzLmdpdmVNZXRob2RPZlRvZG8oXG4gICAgICAgICAgICB0b2RvLnRpdGxlLFxuICAgICAgICAgICAgdG9kby5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHRvZG8uZHVlRGF0ZSxcbiAgICAgICAgICAgIHRvZG8ubnVtXG4gICAgICAgICAgKTtcbiAgICAgICAgICBvYmpXaXRoTWV0aG9kcy50b2Rvc1tpXSA9IHRvZG9XaXRoTWV0b2RzO1xuICAgICAgICB9KTtcblxuICAgICAgICBnZW5lcmF0ZU5ld1Byb2plY3RBbmRDaGFuZ2Uob2JqV2l0aE1ldGhvZHMpO1xuICAgICAgfSk7XG4gICAgICAvLyAvL2hhY2UgcXVlIHNpZW1wcmUgc2UgcG9uZ2EgZWwgZXhhbXBsZXNcbiAgICAgIC8vIGNoYW5nZURpc3BsYXlDb250ZW50KHByb2plY3RTdG9yYWdlWzBdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhhbXBsZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZVRvZG8sXG4gICAgY3JlYXRlUHJvamVjdENvbnRlbnQsXG4gICAgY3JlYXRlUHJvamVjdExhYmVsLFxuICAgIGdlbmVyYXRlTmV3UHJvamVjdEFuZENoYW5nZSxcbiAgICBleGFtcGxlLFxuICAgIGluaXQsXG4gIH07XG59O1xuXG5leHBvcnQgeyBkb21HZW5lcmF0b3IgfTtcbiIsImltcG9ydCB7IFRvZG9zIH0gZnJvbSBcIi4vdG9kb1wiO1xuXG5jbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24sIHByb2plY051bSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMubnVtID0gcHJvamVjTnVtO1xuICAgIHRoaXMudG9kb3MgPSBbXTtcbiAgICB0aGlzLnRvZG9OdW0gPSAwO1xuICB9XG5cbiAgY3JlYXRlVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGEpIHtcbiAgICBjb25zdCBuZXdUb2RvID0gbmV3IFRvZG9zKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0YSwgdGhpcy50b2RvTnVtKyspO1xuICAgIHRoaXMudG9kb3MucHVzaChuZXdUb2RvKTtcbiAgICByZXR1cm4gbmV3VG9kbztcbiAgfVxuXG4gIGdpdmVNZXRob2RPZlRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRhLCBudW0pIHtcbiAgICBjb25zdCBuZXdUb2RvID0gbmV3IFRvZG9zKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0YSwgbnVtKTtcbiAgICByZXR1cm4gbmV3VG9kbztcbiAgfVxuXG4gIGRlbGV0ZVRvZG8odG9kb051bSkge1xuICAgIHRoaXMudG9kb3Muc3BsaWNlKHRoaXMuZ2V0SW5kZXhUb2RvKHRvZG9OdW0pLCAxKTtcbiAgfVxuXG4gIGdldEluZGV4VG9kbyA9ICh0b2RvTnVtYmVyKSA9PiB7XG4gICAgY29uc3QgdG9kb0luZGV4ID0gdGhpcy50b2Rvcy5maW5kSW5kZXgoXG4gICAgICAodG9kbykgPT4gdG9kby5udW0gPT09IHBhcnNlSW50KHRvZG9OdW1iZXIpXG4gICAgKTtcblxuICAgIHJldHVybiB0b2RvSW5kZXg7XG4gIH07XG5cbiAgbW9kaWZ5VGl0dGxlKG5ld1RpdHRsZSkge1xuICAgIHRoaXMubmFtZSA9IG5ld1RpdHRsZTtcbiAgfVxuXG4gIGdldFRvZG9zKCkge1xuICAgIHJldHVybiB0aGlzLnRvZG9zO1xuICB9XG59XG5cbmV4cG9ydCB7IFByb2plY3QgfTtcbiIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbmNvbnN0IGNvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xuICBsZXQgcHJvamVjdE51bSA9IDA7XG5cbiAgY29uc3QgcHJvamVjdHMgPSBbXTtcblxuICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gKG5hbWUsIGRlc2NyaXB0aW9uKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUsIGRlc2NyaXB0aW9uLCBwcm9qZWN0TnVtKTtcbiAgICAvL2F1bWVudGEgZWwgbnVtZXJvIGVuIGxhIGluc3RhbmNpYSB5YSBjcmVhZGFcbiAgICBwcm9qZWN0TnVtKys7XG4gICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICByZXR1cm4gcHJvamVjdDtcbiAgfTtcblxuICAvL211ZXN0YSBlbCBwcm95ZWN0byBhbCBoYWNlciBjbGljayBlbiBsYSBsYWJlbFxuICBjb25zdCBnaXZlTWV0aG9kT2ZUb2RvID0gZnVuY3Rpb24gKG5hbWUsIGRlc2NyaXB0aW9uLCBudW0pIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSwgZGVzY3JpcHRpb24sIG51bSk7XG4gICAgcmV0dXJuIHByb2plY3Q7XG4gIH07XG5cbiAgY29uc3QgRGVsZXRlUHJvamVjdCA9IChwcm9qZWN0TnVtYmVyKSA9PiB7XG4gICAgcHJvamVjdHMuc3BsaWNlKGdldEluZGV4UHJvamVjdHMocHJvamVjdE51bWJlciksIDEpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiUHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbiAgfTtcblxuICAvL2RldnVlbHZlIGVsIGluZGV4IGRlbCBlbGVtZW50byBxdWUgcXVlcmVtb3NcbiAgY29uc3QgZ2V0SW5kZXhQcm9qZWN0cyA9IChwcm9qZWN0TnVtYmVyKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdEluZGV4ID0gcHJvamVjdHMuZmluZEluZGV4KFxuICAgICAgKHBybykgPT4gcHJvLm51bSA9PT0gcGFyc2VJbnQocHJvamVjdE51bWJlcilcbiAgICApO1xuXG4gICAgcmV0dXJuIHByb2plY3RJbmRleDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZVByb2plY3QsXG5cbiAgICBwcm9qZWN0cyxcbiAgICBEZWxldGVQcm9qZWN0LFxuICAgIGdldEluZGV4UHJvamVjdHMsXG4gICAgZ2l2ZU1ldGhvZE9mVG9kbyxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGNvbnRyb2xsZXIgfTtcbiIsImNsYXNzIFRvZG9zIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBudW0pIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgLy90aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5jaGVja2VkID0gZmFsc2U7XG4gICAgdGhpcy5udW0gPSBudW07XG4gIH1cblxuICBmaW5pc2hlZCgpIHtcbiAgICB0aGlzLmNoZWNrZWQgPSAhdGhpcy5jaGVja2VkO1xuICB9XG5cbiAgY2hhbmdlTmFtZShuYW1lKSB7XG4gICAgdGhpcy50aXRsZSA9IG5hbWU7XG4gIH1cblxuICBjaGFuZ2VEZXNjcmlwdGlvbihkZXNjcmlwdGlvbikge1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgfVxuXG4gIGNoYW5nZURhdGUoZGF0ZSkge1xuICAgIHRoaXMuZHVlRGF0ZSA9IGRhdGU7XG4gIH1cbn1cblxuZXhwb3J0IHsgVG9kb3MgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHsgZG9tR2VuZXJhdG9yIH0gZnJvbSBcIi4vZG9tR2VuZXJhdGlvblwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuY29uc3QgY29udGVudEdlbmVyYXRvciA9IGRvbUdlbmVyYXRvcigpO1xuXG5jb250ZW50R2VuZXJhdG9yLmluaXQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==