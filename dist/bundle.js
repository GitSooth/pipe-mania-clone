/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./images sync \\.(png%7Cjpe?g%7Cgif)$":
/*!**********************************************************!*\
  !*** ./images/ sync nonrecursive \.(png%7Cjpe?g%7Cgif)$ ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./0.png": "./images/0.png",
	"./1.png": "./images/1.png",
	"./10.png": "./images/10.png",
	"./11.png": "./images/11.png",
	"./12.png": "./images/12.png",
	"./13.png": "./images/13.png",
	"./14.png": "./images/14.png",
	"./2.png": "./images/2.png",
	"./3.png": "./images/3.png",
	"./4.png": "./images/4.png",
	"./5.png": "./images/5.png",
	"./6.png": "./images/6.png",
	"./7.png": "./images/7.png",
	"./8.png": "./images/8.png",
	"./9.png": "./images/9.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./images sync \\.(png%7Cjpe?g%7Cgif)$";

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  background-color: white;
  height: 100%;
}

.title {
  display: flex;
  margin-left: 25px;
  font-size: 50px;
}

h2 {
  margin-left: 100px;
  font-size: 50px;
}

canvas {
  border: 0;
  width: 100%;
  object-fit: contain;
}

#game-over-buttons {
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  gap: 20px;
}

button {
  border-radius: 5px;
  padding: 10px 20px;
  margin: 0%;
  font-size: 40px;
  cursor: pointer;
}
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,SAAS;EACT,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,UAAU;EACV,eAAe;EACf,eAAe;AACjB","sourcesContent":["body {\r\n  background-color: white;\r\n  height: 100%;\r\n}\r\n\r\n.title {\r\n  display: flex;\r\n  margin-left: 25px;\r\n  font-size: 50px;\r\n}\r\n\r\nh2 {\r\n  margin-left: 100px;\r\n  font-size: 50px;\r\n}\r\n\r\ncanvas {\r\n  border: 0;\r\n  width: 100%;\r\n  object-fit: contain;\r\n}\r\n\r\n#game-over-buttons {\r\n  display: flex;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  gap: 20px;\r\n}\r\n\r\nbutton {\r\n  border-radius: 5px;\r\n  padding: 10px 20px;\r\n  margin: 0%;\r\n  font-size: 40px;\r\n  cursor: pointer;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

"use strict";


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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

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

"use strict";


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

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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

"use strict";


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

"use strict";


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

"use strict";


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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

"use strict";


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

/***/ "./src/classes/Pipe.js":
/*!*****************************!*\
  !*** ./src/classes/Pipe.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Pipe)
/* harmony export */ });
class Pipe {
  constructor(id, pipeGenerator, ctx, x, y, imageSize) {
    this.id = id;
    this.pipeGenerator = pipeGenerator;
    this.x = x;
    this.y = y;
    this.imageSize = imageSize;
    this.image = new Image();
    this.isHovered = false;
    this.isValve = false;
    this.isEnd = false;
    this.isBlocked = false;
    this.connections = [];
    this.fillLevel = 0;
    this.flowDirection = null;
    this.ctx = ctx;

    this.init();
  }

  init() {
    this.setPipeProperties(this.id);

    this.draw();
  }

  updateFill(progress, flowDirection) {
    this.fillLevel = progress;
    this.flowDirection = flowDirection;
    if (progress >= 100) {
      this.flowing = false;
    }
  }

  setPipeProperties(id) {
    this.id = id;
    this.image.src = this.pipeGenerator.images[id].src;

    switch (this.id) {
      case 12:
        this.isBlocked = true;
        break;

      case 13:
        this.isEnd = true;
        break;

      case 14:
        this.isValve = true;
        break;
    }

    this.addDirections();
  }

  changePipeProperties(newId) {
    this.id = newId;

    this.setPipeProperties(this.id);
  }

  isInside(mouseX, mouseY) {
    return (
      mouseX >= this.x &&
      mouseX < this.x + this.imageSize &&
      mouseY >= this.y &&
      mouseY < this.y + this.imageSize
    );
  }

  changeImage() {
    if (this.isValve || this.isEnd || this.isBlocked || !this.isHovered) return;

    this.changePipeProperties(this.pipeGenerator.pipeQueue[0]);

    this.pipeGenerator.popPipe();
  }

  addDirections() {
    this.connections = [];

    const up = "up";
    const down = "down";
    const left = "left";
    const right = "right";

    switch (this.id) {
      case 1:
        this.connections.push(up);
        this.connections.push(down);
        break;
      case 2:
        this.connections.push(left);
        this.connections.push(right);
        break;
      case 3:
        this.connections.push(up);
        this.connections.push(down);
        this.connections.push(left);
        this.connections.push(right);
        break;
      case 4:
        this.connections.push(up);
        this.connections.push(right);
        break;
      case 5:
        this.connections.push(right);
        this.connections.push(down);
        break;
      case 6:
        this.connections.push(left);
        this.connections.push(down);
        break;
      case 7:
        this.connections.push(up);
        this.connections.push(left);
        break;
      case 8:
        this.connections.push(up);
        this.connections.push(left);
        this.connections.push(right);
        break;
      case 9:
        this.connections.push(up);
        this.connections.push(right);
        this.connections.push(down);
        break;
      case 10:
        this.connections.push(left);
        this.connections.push(right);
        this.connections.push(down);
        break;
      case 11:
        this.connections.push(up);
        this.connections.push(down);
        this.connections.push(left);
        break;
      case 13:
        this.connections.push(up);
        break;
      case 14:
        this.connections.push(down);
        break;
    }
  }

  draw() {
    if (this.flowing) {
      this.ctx.fillStyle = "rgba(0, 0, 255, 1)"; // Water color overlay
      this.ctx.fillRect(this.x, this.y, this.imageSize, this.imageSize);
    }

    this.ctx.drawImage(
      this.image,
      this.x,
      this.y,
      this.imageSize,
      this.imageSize
    );

    if (this.isHovered) {
      console.log("Hovering " + this.id);
      if (this.id == 12 || this.id == 13 || this.id == 14)
        //Show as unchangeable square
        this.ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
      //Show as changeable square
      else this.ctx.fillStyle = "rgba(0, 0, 255, 0.5)";

      this.ctx.fillRect(this.x, this.y, this.imageSize, this.imageSize);
    }
  }

  calculateFillRect() {
    const progressRatio = this.fillLevel / 100;
    const mid = this.imageSize / 2;
    const thickness = 10; // Thickness of the water line

    switch (this.flowDirection) {
      case "up":
        return {
          x: mid - thickness / 2,
          y: this.imageSize * (1 - progressRatio),
          width: thickness,
          height: this.imageSize * progressRatio,
        };
      case "down":
        return {
          x: mid - thickness / 2,
          y: 0,
          width: thickness,
          height: this.imageSize * progressRatio,
        };
      case "left":
        return {
          x: this.imageSize * (1 - progressRatio),
          y: mid - thickness / 2,
          width: this.imageSize * progressRatio,
          height: thickness,
        };
      case "right":
        return {
          x: 0,
          y: mid - thickness / 2,
          width: this.imageSize * progressRatio,
          height: thickness,
        };
      default:
        return { x: 0, y: 0, width: this.imageSize, height: this.imageSize }; // Default: fill the whole pipe
    }
  }
}

// export default Pipe();


/***/ }),

/***/ "./src/classes/PipeGenerator.js":
/*!**************************************!*\
  !*** ./src/classes/PipeGenerator.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PipeGenerator)
/* harmony export */ });
class PipeGenerator {
  constructor(ctx, queueSize) {
    this.images = [];
    this.ctx = ctx;
    this.pipeQueue = [];
    this.queueSize = queueSize;
    this.init();
  }

  init() {
    for (let i = 0; i < 15; i++) {
      const image = new Image();
      image.src = `../images/${i}.png`;
      this.images.push(image);
    }

    for (let i = 0; i < this.queueSize; i++) {
      this.getNewRandomPipe();
    }

    this.draw();
  }

  popPipe() {
    this.pipeQueue.shift();
    this.getNewRandomPipe();
  }

  getNewRandomPipe() {
    const index = Math.floor(Math.random() * 10) + 1;

    this.pipeQueue.push(index);
  }

  draw() {
    this.ctx.fillStyle = "rgba(0, 0, 0, 1)";
    this.ctx.fillRect(100, 10, 150, 700);

    for (let i = 0; i < this.queueSize; i++) {
      this.ctx.drawImage(
        this.images[this.pipeQueue[i]],
        115,
        25 + i * 140,
        120,
        120
      );
    }
  }
}


/***/ }),

/***/ "./src/classes/grid.js":
/*!*****************************!*\
  !*** ./src/classes/grid.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Grid)
/* harmony export */ });
/* harmony import */ var _Pipe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pipe.js */ "./src/classes/Pipe.js");


class Grid {
  constructor(
    keepConfiguration,
    pipeGenerator,
    xOffset,
    yOffset,
    rows,
    cols,
    blockedPositions,
    imageSize,
    canvas
  ) {
    this.keepConfiguration = keepConfiguration;
    this.waterCompleted = false;
    this.pipeGenerator = pipeGenerator;
    this.pipes = [];
    this.configuration = [];
    this.connectedPipes = [];
    this.xOffset = xOffset;
    this.yOffset = yOffset;
    this.imageSize = imageSize;
    this.rows = rows;
    this.cols = cols;
    this.blockedPositions = blockedPositions;
    this.canvas = canvas;
    this.startPos = {
      x: 0,
      y: 0,
    };
    this.ctx = canvas.getContext("2d");
    this.flowStarted = false;
    this.flowing = false;
    this.waterReachedEnd = false;
    this.init();
  }

  init() {
    this.generateGridConfiguration();

    //Place valve, end pipe and blocked squares
    this.placeSpecialPipes();

    this.flowStarted = true;
    this.waterCompleted = false;

    this.draw();
  }

  generateGridConfiguration() {
    for (let row = 0; row < this.rows; row++) {
      const x = [];
      for (let col = 0; col < this.cols; col++) {
        const pipe = new _Pipe_js__WEBPACK_IMPORTED_MODULE_0__["default"](
          0,
          this.pipeGenerator,
          this.ctx,
          col * this.imageSize + this.xOffset,
          row * this.imageSize + this.yOffset,
          this.imageSize
        );
        x.push(pipe);
      }
      this.pipes.push(x);
      this.configuration = this.pipes;
    }
  }

  update() {
    this.findNeighbors();

    if (this.flowStarted) this.simulateWaterFlow();

    //this.draw();
  }

  getMousePosition(mouseX, mouseY) {
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        if (!this.pipes[row][col]) return;
        var pipe = this.pipes[row][col];

        pipe.isHovered = pipe.isInside(mouseX, mouseY);
      }
    }
  }

  changePipe(mouseX, mouseY) {
    const column = Math.floor((mouseX - this.xOffset) / this.imageSize);
    const row = Math.floor((mouseY - this.yOffset) / this.imageSize);
    this.pipes[row][column].changeImage();

    this.update();
  }

  placeSpecialPipes() {
    const startRow = Math.floor(Math.random() * (this.rows - 1)); //Cant be on bottom row, so it's not obstructed
    const startCol = Math.floor(Math.random() * this.cols);
    const startPipe = this.pipes[startRow][startCol];
    this.startPos.x = startRow;
    this.startPos.y = startCol;

    startPipe.changePipeProperties(14);

    let endRow, endCol;
    do {
      endRow = Math.floor(Math.random() * this.rows);
      endCol = Math.floor(Math.random() * this.cols);
    } while (startRow == endRow || startCol == endCol || endRow == 0); //Cant be on top row, so it's not obstructed

    const endPipe = this.pipes[endRow][endCol];
    endPipe.changePipeProperties(13);

    this.placeBlockedPositions(
      this.blockedPositions,
      startRow,
      startCol,
      endRow,
      endCol
    );
  }

  placeBlockedPositions(numberOfBlockedPositions) {
    let randomRow, randomCol;
    for (let i = 0; i < numberOfBlockedPositions; i++) {
      do {
        randomRow = Math.floor(Math.random() * this.rows);
        randomCol = Math.floor(Math.random() * this.cols);
      } while (
        this.pipes[randomRow][randomCol].id == 12 || //Rock block placed already
        this.pipes[randomRow][randomCol].id == 13 || //End block placed already
        this.pipes[randomRow][randomCol].id == 14 || //Start block placed already
        (randomRow > 0 && this.pipes[randomRow - 1][randomCol].id == 14) || //must not be placed below the starting block
        (randomRow < this.rows - 1 &&
          this.pipes[randomRow + 1][randomCol].id == 13) //must not be placed above the end block
      );

      const blockedPipe = this.pipes[randomRow][randomCol];

      blockedPipe.changePipeProperties(12);
    }
  }

  updatePipe(row, col) {
    const x = col * this.imageSize;
    const y = row * this.imageSize;

    this.pipes[row][col].draw(this.ctx, x, y);
  }

  findNeighbors() {
    const visited = new Set();
    const queue = [[this.startPos.x, this.startPos.y]];
    this.connectedPipes = [];

    while (queue.length > 0) {
      const [row, col] = queue.shift();
      const currentPipe = this.pipes[row][col];

      // Skip if already visited
      const key = `${row},${col}`;
      if (visited.has(key)) continue;
      visited.add(key);
      this.connectedPipes.push([row, col]);

      // Check each connection of the current pipe
      for (const direction of currentPipe.connections) {
        const [nextRow, nextCol] = this.getNextPosition(row, col, direction);
        if (this.isValidPosition(nextRow, nextCol)) {
          const nextPipe = this.pipes[nextRow][nextCol];
          const oppositeDirection = this.getOppositeDirection(direction);

          // Add to queue if the connection is valid
          if (
            nextPipe.connections.includes(oppositeDirection) &&
            !visited.has(`${nextRow},${nextCol}`)
          ) {
            queue.push([nextRow, nextCol]);
          }
        }
      }
    }
  }

  simulateWaterFlow() {
    let index = 0;
    const fillNextPipe = () => {
      if (index < this.connectedPipes.length) {
        const [row, col] = this.connectedPipes[index];
        const pipe = this.pipes[row][col];

        // Mark the pipe as flowing and update its visuals
        pipe.flowing = true;
        this.updatePipe(row, col);

        index++;
        setTimeout(fillNextPipe, 5000); // 6 seconds per pipe
      } else {
        if (!this.connectedPipes[index - 1]) return;
        const [row, col] = this.connectedPipes[index - 1];
        const pipe = this.pipes[row][col];

        if (pipe.id == 13) {
          //Win con
          this.waterCompleted = true;
          this.waterReachedEnd = true;
        } else {
          //Lose con
          this.waterCompleted = true;
          this.waterReachedEnd = false;
        }
      }
    };

    setTimeout(fillNextPipe, 5000); // Start after 3 seconds
  }

  getNextPosition(x, y, direction) {
    switch (direction) {
      case "up":
        return [x - 1, y];
      case "down":
        return [x + 1, y];
      case "left":
        return [x, y - 1];
      case "right":
        return [x, y + 1];

      default:
        return [x, y];
    }
  }

  getOppositeDirection(direction) {
    switch (direction) {
      case "up":
        return "down";
      case "down":
        return "up";
      case "left":
        return "right";
      case "right":
        return "left";
    }
  }

  isValidPosition(x, y) {
    return x >= 0 && x < this.rows && y >= 0 && y < this.cols;
  }

  isGameOver() {
    return this.waterCompleted;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        this.pipes[row][col].draw(this.ctx);
      }
    }
  }
}

// export default Grid();


/***/ }),

/***/ "./images/0.png":
/*!**********************!*\
  !*** ./images/0.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/0.png";

/***/ }),

/***/ "./images/1.png":
/*!**********************!*\
  !*** ./images/1.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/1.png";

/***/ }),

/***/ "./images/10.png":
/*!***********************!*\
  !*** ./images/10.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/10.png";

/***/ }),

/***/ "./images/11.png":
/*!***********************!*\
  !*** ./images/11.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/11.png";

/***/ }),

/***/ "./images/12.png":
/*!***********************!*\
  !*** ./images/12.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/12.png";

/***/ }),

/***/ "./images/13.png":
/*!***********************!*\
  !*** ./images/13.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/13.png";

/***/ }),

/***/ "./images/14.png":
/*!***********************!*\
  !*** ./images/14.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/14.png";

/***/ }),

/***/ "./images/2.png":
/*!**********************!*\
  !*** ./images/2.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/2.png";

/***/ }),

/***/ "./images/3.png":
/*!**********************!*\
  !*** ./images/3.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/3.png";

/***/ }),

/***/ "./images/4.png":
/*!**********************!*\
  !*** ./images/4.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/4.png";

/***/ }),

/***/ "./images/5.png":
/*!**********************!*\
  !*** ./images/5.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/5.png";

/***/ }),

/***/ "./images/6.png":
/*!**********************!*\
  !*** ./images/6.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/6.png";

/***/ }),

/***/ "./images/7.png":
/*!**********************!*\
  !*** ./images/7.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/7.png";

/***/ }),

/***/ "./images/8.png":
/*!**********************!*\
  !*** ./images/8.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/8.png";

/***/ }),

/***/ "./images/9.png":
/*!**********************!*\
  !*** ./images/9.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/9.png";

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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_grid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/grid.js */ "./src/classes/grid.js");
/* harmony import */ var _classes_PipeGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/PipeGenerator.js */ "./src/classes/PipeGenerator.js");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");




// Import images dynamically if needed
const imagesContext = __webpack_require__("./images sync \\.(png%7Cjpe?g%7Cgif)$");
imagesContext.keys().forEach(imagesContext);

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const winLossText = document.getElementById("winLossText");
const nextButton = document.getElementById("next");
const gameOverButtons = document.getElementById("game-over-buttons");

let gameState = "playing";

let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;

canvas.width = canvasWidth;
canvas.height = canvasHeight;

const X_OFFSET = 400;
const Y_OFFSET = 10;
const ROWS = 7;
const COLUMNS = 9;
const IMAGE_SIZE = 100;
const BLOCKED_POSITIONS = 7;

const pipeGen = new _classes_PipeGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"](ctx, 5);

const grid = new _classes_grid_js__WEBPACK_IMPORTED_MODULE_0__["default"](
  false,
  pipeGen,
  X_OFFSET,
  Y_OFFSET,
  ROWS,
  COLUMNS,
  BLOCKED_POSITIONS,
  IMAGE_SIZE,
  canvas
);

nextButton.addEventListener("click", () => {
  gameState = "playing";
  hideGameOverButtons();
  location.reload();
});

function resizeCanvas() {
  canvasWidth = window.innerWidth;
  canvasHeight = window.innerHeight;

  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
}

function showGameOverButtons() {
  gameOverButtons.style.display = "flex";
}

function hideGameOverButtons() {
  gameOverButtons.style.display = "none";
}

function getMousePos(e) {
  const rect = canvas.getBoundingClientRect();
  // Calculate mouse positions correctly with scaling
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;
  const mouseX = (e.clientX - rect.left) * scaleX;
  const mouseY = (e.clientY - rect.top) * scaleY;
  return { mouseX, mouseY };
}

canvas.addEventListener("mousemove", (e) => {
  e.preventDefault();
  const { mouseX, mouseY } = getMousePos(e);

  grid.getMousePosition(mouseX, mouseY);
});

canvas.addEventListener("click", (e) => {
  e.preventDefault();
  const { mouseX, mouseY } = getMousePos(e);
  if (
    mouseX < X_OFFSET ||
    mouseX > X_OFFSET + IMAGE_SIZE * COLUMNS ||
    mouseY < Y_OFFSET ||
    mouseY > Y_OFFSET + IMAGE_SIZE * ROWS
  )
    return;

  grid.changePipe(mouseX, mouseY);
});

function checkGameOver() {
  if (grid.waterCompleted) {
    gameState = "over";
    grid.waterReachedEnd
      ? (winLossText.textContent = "You won!")
      : (winLossText.textContent = "You lost!");
    showGameOverButtons();
    return;
  }
}

function animate() {
  if (gameState === "over") return; // Stop animation if the game is over

  window.requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas before drawing
  checkGameOver(); // Check if the game has been won
  grid.draw();
  pipeGen.draw();
  grid.update();
}
animate();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxpQkFBaUI7QUFDM0I7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxVQUFVLGlCQUFpQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRCxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BpcGVtYW5pYWNsb25lLy4vaW1hZ2VzLyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC4ocG5nJTdDanBlIiwid2VicGFjazovL3BpcGVtYW5pYWNsb25lLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcGlwZW1hbmlhY2xvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3BpcGVtYW5pYWNsb25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcGlwZW1hbmlhY2xvbmUvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL3BpcGVtYW5pYWNsb25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3BpcGVtYW5pYWNsb25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9waXBlbWFuaWFjbG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9waXBlbWFuaWFjbG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9waXBlbWFuaWFjbG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3BpcGVtYW5pYWNsb25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcGlwZW1hbmlhY2xvbmUvLi9zcmMvY2xhc3Nlcy9QaXBlLmpzIiwid2VicGFjazovL3BpcGVtYW5pYWNsb25lLy4vc3JjL2NsYXNzZXMvUGlwZUdlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly9waXBlbWFuaWFjbG9uZS8uL3NyYy9jbGFzc2VzL2dyaWQuanMiLCJ3ZWJwYWNrOi8vcGlwZW1hbmlhY2xvbmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGlwZW1hbmlhY2xvbmUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcGlwZW1hbmlhY2xvbmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BpcGVtYW5pYWNsb25lL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcGlwZW1hbmlhY2xvbmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9waXBlbWFuaWFjbG9uZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BpcGVtYW5pYWNsb25lL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3BpcGVtYW5pYWNsb25lL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9waXBlbWFuaWFjbG9uZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vMC5wbmdcIjogXCIuL2ltYWdlcy8wLnBuZ1wiLFxuXHRcIi4vMS5wbmdcIjogXCIuL2ltYWdlcy8xLnBuZ1wiLFxuXHRcIi4vMTAucG5nXCI6IFwiLi9pbWFnZXMvMTAucG5nXCIsXG5cdFwiLi8xMS5wbmdcIjogXCIuL2ltYWdlcy8xMS5wbmdcIixcblx0XCIuLzEyLnBuZ1wiOiBcIi4vaW1hZ2VzLzEyLnBuZ1wiLFxuXHRcIi4vMTMucG5nXCI6IFwiLi9pbWFnZXMvMTMucG5nXCIsXG5cdFwiLi8xNC5wbmdcIjogXCIuL2ltYWdlcy8xNC5wbmdcIixcblx0XCIuLzIucG5nXCI6IFwiLi9pbWFnZXMvMi5wbmdcIixcblx0XCIuLzMucG5nXCI6IFwiLi9pbWFnZXMvMy5wbmdcIixcblx0XCIuLzQucG5nXCI6IFwiLi9pbWFnZXMvNC5wbmdcIixcblx0XCIuLzUucG5nXCI6IFwiLi9pbWFnZXMvNS5wbmdcIixcblx0XCIuLzYucG5nXCI6IFwiLi9pbWFnZXMvNi5wbmdcIixcblx0XCIuLzcucG5nXCI6IFwiLi9pbWFnZXMvNy5wbmdcIixcblx0XCIuLzgucG5nXCI6IFwiLi9pbWFnZXMvOC5wbmdcIixcblx0XCIuLzkucG5nXCI6IFwiLi9pbWFnZXMvOS5wbmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9pbWFnZXMgc3luYyBcXFxcLihwbmclN0NqcGU/ZyU3Q2dpZikkXCI7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxufVxyXG5cclxuaDIge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbn1cclxuXHJcbmNhbnZhcyB7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbn1cclxuXHJcbiNnYW1lLW92ZXItYnV0dG9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGdhcDogMjBweDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIG1hcmdpbjogMCU7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsU0FBUztFQUNULFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGVBQWU7RUFDZixlQUFlO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XFxyXFxuICBmb250LXNpemU6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcXHJcXG4gIGZvbnQtc2l6ZTogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuY2FudmFzIHtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcXHJcXG59XFxyXFxuXFxyXFxuI2dhbWUtb3Zlci1idXR0b25zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgbWFyZ2luOiAwJTtcXHJcXG4gIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQaXBlIHtcclxuICBjb25zdHJ1Y3RvcihpZCwgcGlwZUdlbmVyYXRvciwgY3R4LCB4LCB5LCBpbWFnZVNpemUpIHtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMucGlwZUdlbmVyYXRvciA9IHBpcGVHZW5lcmF0b3I7XHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgdGhpcy55ID0geTtcclxuICAgIHRoaXMuaW1hZ2VTaXplID0gaW1hZ2VTaXplO1xyXG4gICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdGhpcy5pc0hvdmVyZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuaXNWYWx2ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc0VuZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc0Jsb2NrZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuY29ubmVjdGlvbnMgPSBbXTtcclxuICAgIHRoaXMuZmlsbExldmVsID0gMDtcclxuICAgIHRoaXMuZmxvd0RpcmVjdGlvbiA9IG51bGw7XHJcbiAgICB0aGlzLmN0eCA9IGN0eDtcclxuXHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICB0aGlzLnNldFBpcGVQcm9wZXJ0aWVzKHRoaXMuaWQpO1xyXG5cclxuICAgIHRoaXMuZHJhdygpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlRmlsbChwcm9ncmVzcywgZmxvd0RpcmVjdGlvbikge1xyXG4gICAgdGhpcy5maWxsTGV2ZWwgPSBwcm9ncmVzcztcclxuICAgIHRoaXMuZmxvd0RpcmVjdGlvbiA9IGZsb3dEaXJlY3Rpb247XHJcbiAgICBpZiAocHJvZ3Jlc3MgPj0gMTAwKSB7XHJcbiAgICAgIHRoaXMuZmxvd2luZyA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0UGlwZVByb3BlcnRpZXMoaWQpIHtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMuaW1hZ2Uuc3JjID0gdGhpcy5waXBlR2VuZXJhdG9yLmltYWdlc1tpZF0uc3JjO1xyXG5cclxuICAgIHN3aXRjaCAodGhpcy5pZCkge1xyXG4gICAgICBjYXNlIDEyOlxyXG4gICAgICAgIHRoaXMuaXNCbG9ja2VkID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgMTM6XHJcbiAgICAgICAgdGhpcy5pc0VuZCA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIDE0OlxyXG4gICAgICAgIHRoaXMuaXNWYWx2ZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hZGREaXJlY3Rpb25zKCk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VQaXBlUHJvcGVydGllcyhuZXdJZCkge1xyXG4gICAgdGhpcy5pZCA9IG5ld0lkO1xyXG5cclxuICAgIHRoaXMuc2V0UGlwZVByb3BlcnRpZXModGhpcy5pZCk7XHJcbiAgfVxyXG5cclxuICBpc0luc2lkZShtb3VzZVgsIG1vdXNlWSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgbW91c2VYID49IHRoaXMueCAmJlxyXG4gICAgICBtb3VzZVggPCB0aGlzLnggKyB0aGlzLmltYWdlU2l6ZSAmJlxyXG4gICAgICBtb3VzZVkgPj0gdGhpcy55ICYmXHJcbiAgICAgIG1vdXNlWSA8IHRoaXMueSArIHRoaXMuaW1hZ2VTaXplXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlSW1hZ2UoKSB7XHJcbiAgICBpZiAodGhpcy5pc1ZhbHZlIHx8IHRoaXMuaXNFbmQgfHwgdGhpcy5pc0Jsb2NrZWQgfHwgIXRoaXMuaXNIb3ZlcmVkKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5jaGFuZ2VQaXBlUHJvcGVydGllcyh0aGlzLnBpcGVHZW5lcmF0b3IucGlwZVF1ZXVlWzBdKTtcclxuXHJcbiAgICB0aGlzLnBpcGVHZW5lcmF0b3IucG9wUGlwZSgpO1xyXG4gIH1cclxuXHJcbiAgYWRkRGlyZWN0aW9ucygpIHtcclxuICAgIHRoaXMuY29ubmVjdGlvbnMgPSBbXTtcclxuXHJcbiAgICBjb25zdCB1cCA9IFwidXBcIjtcclxuICAgIGNvbnN0IGRvd24gPSBcImRvd25cIjtcclxuICAgIGNvbnN0IGxlZnQgPSBcImxlZnRcIjtcclxuICAgIGNvbnN0IHJpZ2h0ID0gXCJyaWdodFwiO1xyXG5cclxuICAgIHN3aXRjaCAodGhpcy5pZCkge1xyXG4gICAgICBjYXNlIDE6XHJcbiAgICAgICAgdGhpcy5jb25uZWN0aW9ucy5wdXNoKHVwKTtcclxuICAgICAgICB0aGlzLmNvbm5lY3Rpb25zLnB1c2goZG93bik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMjpcclxuICAgICAgICB0aGlzLmNvbm5lY3Rpb25zLnB1c2gobGVmdCk7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0aW9ucy5wdXNoKHJpZ2h0KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAzOlxyXG4gICAgICAgIHRoaXMuY29ubmVjdGlvbnMucHVzaCh1cCk7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0aW9ucy5wdXNoKGRvd24pO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdGlvbnMucHVzaChsZWZ0KTtcclxuICAgICAgICB0aGlzLmNvbm5lY3Rpb25zLnB1c2gocmlnaHQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDQ6XHJcbiAgICAgICAgdGhpcy5jb25uZWN0aW9ucy5wdXNoKHVwKTtcclxuICAgICAgICB0aGlzLmNvbm5lY3Rpb25zLnB1c2gocmlnaHQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDU6XHJcbiAgICAgICAgdGhpcy5jb25uZWN0aW9ucy5wdXNoKHJpZ2h0KTtcclxuICAgICAgICB0aGlzLmNvbm5lY3Rpb25zLnB1c2goZG93bik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgNjpcclxuICAgICAgICB0aGlzLmNvbm5lY3Rpb25zLnB1c2gobGVmdCk7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0aW9ucy5wdXNoKGRvd24pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDc6XHJcbiAgICAgICAgdGhpcy5jb25uZWN0aW9ucy5wdXNoKHVwKTtcclxuICAgICAgICB0aGlzLmNvbm5lY3Rpb25zLnB1c2gobGVmdCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgODpcclxuICAgICAgICB0aGlzLmNvbm5lY3Rpb25zLnB1c2godXApO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdGlvbnMucHVzaChsZWZ0KTtcclxuICAgICAgICB0aGlzLmNvbm5lY3Rpb25zLnB1c2gocmlnaHQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDk6XHJcbiAgICAgICAgdGhpcy5jb25uZWN0aW9ucy5wdXNoKHVwKTtcclxuICAgICAgICB0aGlzLmNvbm5lY3Rpb25zLnB1c2gocmlnaHQpO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdGlvbnMucHVzaChkb3duKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAxMDpcclxuICAgICAgICB0aGlzLmNvbm5lY3Rpb25zLnB1c2gobGVmdCk7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0aW9ucy5wdXNoKHJpZ2h0KTtcclxuICAgICAgICB0aGlzLmNvbm5lY3Rpb25zLnB1c2goZG93bik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMTE6XHJcbiAgICAgICAgdGhpcy5jb25uZWN0aW9ucy5wdXNoKHVwKTtcclxuICAgICAgICB0aGlzLmNvbm5lY3Rpb25zLnB1c2goZG93bik7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0aW9ucy5wdXNoKGxlZnQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDEzOlxyXG4gICAgICAgIHRoaXMuY29ubmVjdGlvbnMucHVzaCh1cCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMTQ6XHJcbiAgICAgICAgdGhpcy5jb25uZWN0aW9ucy5wdXNoKGRvd24pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJhdygpIHtcclxuICAgIGlmICh0aGlzLmZsb3dpbmcpIHtcclxuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2JhKDAsIDAsIDI1NSwgMSlcIjsgLy8gV2F0ZXIgY29sb3Igb3ZlcmxheVxyXG4gICAgICB0aGlzLmN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy5pbWFnZVNpemUsIHRoaXMuaW1hZ2VTaXplKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgIHRoaXMuaW1hZ2UsXHJcbiAgICAgIHRoaXMueCxcclxuICAgICAgdGhpcy55LFxyXG4gICAgICB0aGlzLmltYWdlU2l6ZSxcclxuICAgICAgdGhpcy5pbWFnZVNpemVcclxuICAgICk7XHJcblxyXG4gICAgaWYgKHRoaXMuaXNIb3ZlcmVkKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiSG92ZXJpbmcgXCIgKyB0aGlzLmlkKTtcclxuICAgICAgaWYgKHRoaXMuaWQgPT0gMTIgfHwgdGhpcy5pZCA9PSAxMyB8fCB0aGlzLmlkID09IDE0KVxyXG4gICAgICAgIC8vU2hvdyBhcyB1bmNoYW5nZWFibGUgc3F1YXJlXHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwgMCwgMCwgMC41KVwiO1xyXG4gICAgICAvL1Nob3cgYXMgY2hhbmdlYWJsZSBzcXVhcmVcclxuICAgICAgZWxzZSB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwgMCwgMjU1LCAwLjUpXCI7XHJcblxyXG4gICAgICB0aGlzLmN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy5pbWFnZVNpemUsIHRoaXMuaW1hZ2VTaXplKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNhbGN1bGF0ZUZpbGxSZWN0KCkge1xyXG4gICAgY29uc3QgcHJvZ3Jlc3NSYXRpbyA9IHRoaXMuZmlsbExldmVsIC8gMTAwO1xyXG4gICAgY29uc3QgbWlkID0gdGhpcy5pbWFnZVNpemUgLyAyO1xyXG4gICAgY29uc3QgdGhpY2tuZXNzID0gMTA7IC8vIFRoaWNrbmVzcyBvZiB0aGUgd2F0ZXIgbGluZVxyXG5cclxuICAgIHN3aXRjaCAodGhpcy5mbG93RGlyZWN0aW9uKSB7XHJcbiAgICAgIGNhc2UgXCJ1cFwiOlxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB4OiBtaWQgLSB0aGlja25lc3MgLyAyLFxyXG4gICAgICAgICAgeTogdGhpcy5pbWFnZVNpemUgKiAoMSAtIHByb2dyZXNzUmF0aW8pLFxyXG4gICAgICAgICAgd2lkdGg6IHRoaWNrbmVzcyxcclxuICAgICAgICAgIGhlaWdodDogdGhpcy5pbWFnZVNpemUgKiBwcm9ncmVzc1JhdGlvLFxyXG4gICAgICAgIH07XHJcbiAgICAgIGNhc2UgXCJkb3duXCI6XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHg6IG1pZCAtIHRoaWNrbmVzcyAvIDIsXHJcbiAgICAgICAgICB5OiAwLFxyXG4gICAgICAgICAgd2lkdGg6IHRoaWNrbmVzcyxcclxuICAgICAgICAgIGhlaWdodDogdGhpcy5pbWFnZVNpemUgKiBwcm9ncmVzc1JhdGlvLFxyXG4gICAgICAgIH07XHJcbiAgICAgIGNhc2UgXCJsZWZ0XCI6XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHg6IHRoaXMuaW1hZ2VTaXplICogKDEgLSBwcm9ncmVzc1JhdGlvKSxcclxuICAgICAgICAgIHk6IG1pZCAtIHRoaWNrbmVzcyAvIDIsXHJcbiAgICAgICAgICB3aWR0aDogdGhpcy5pbWFnZVNpemUgKiBwcm9ncmVzc1JhdGlvLFxyXG4gICAgICAgICAgaGVpZ2h0OiB0aGlja25lc3MsXHJcbiAgICAgICAgfTtcclxuICAgICAgY2FzZSBcInJpZ2h0XCI6XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICB5OiBtaWQgLSB0aGlja25lc3MgLyAyLFxyXG4gICAgICAgICAgd2lkdGg6IHRoaXMuaW1hZ2VTaXplICogcHJvZ3Jlc3NSYXRpbyxcclxuICAgICAgICAgIGhlaWdodDogdGhpY2tuZXNzLFxyXG4gICAgICAgIH07XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHsgeDogMCwgeTogMCwgd2lkdGg6IHRoaXMuaW1hZ2VTaXplLCBoZWlnaHQ6IHRoaXMuaW1hZ2VTaXplIH07IC8vIERlZmF1bHQ6IGZpbGwgdGhlIHdob2xlIHBpcGVcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IFBpcGUoKTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGlwZUdlbmVyYXRvciB7XHJcbiAgY29uc3RydWN0b3IoY3R4LCBxdWV1ZVNpemUpIHtcclxuICAgIHRoaXMuaW1hZ2VzID0gW107XHJcbiAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgIHRoaXMucGlwZVF1ZXVlID0gW107XHJcbiAgICB0aGlzLnF1ZXVlU2l6ZSA9IHF1ZXVlU2l6ZTtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTU7IGkrKykge1xyXG4gICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICBpbWFnZS5zcmMgPSBgLi4vaW1hZ2VzLyR7aX0ucG5nYDtcclxuICAgICAgdGhpcy5pbWFnZXMucHVzaChpbWFnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnF1ZXVlU2l6ZTsgaSsrKSB7XHJcbiAgICAgIHRoaXMuZ2V0TmV3UmFuZG9tUGlwZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZHJhdygpO1xyXG4gIH1cclxuXHJcbiAgcG9wUGlwZSgpIHtcclxuICAgIHRoaXMucGlwZVF1ZXVlLnNoaWZ0KCk7XHJcbiAgICB0aGlzLmdldE5ld1JhbmRvbVBpcGUoKTtcclxuICB9XHJcblxyXG4gIGdldE5ld1JhbmRvbVBpcGUoKSB7XHJcbiAgICBjb25zdCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSArIDE7XHJcblxyXG4gICAgdGhpcy5waXBlUXVldWUucHVzaChpbmRleCk7XHJcbiAgfVxyXG5cclxuICBkcmF3KCkge1xyXG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2JhKDAsIDAsIDAsIDEpXCI7XHJcbiAgICB0aGlzLmN0eC5maWxsUmVjdCgxMDAsIDEwLCAxNTAsIDcwMCk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnF1ZXVlU2l6ZTsgaSsrKSB7XHJcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcclxuICAgICAgICB0aGlzLmltYWdlc1t0aGlzLnBpcGVRdWV1ZVtpXV0sXHJcbiAgICAgICAgMTE1LFxyXG4gICAgICAgIDI1ICsgaSAqIDE0MCxcclxuICAgICAgICAxMjAsXHJcbiAgICAgICAgMTIwXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBQaXBlIGZyb20gXCIuL1BpcGUuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyaWQge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAga2VlcENvbmZpZ3VyYXRpb24sXHJcbiAgICBwaXBlR2VuZXJhdG9yLFxyXG4gICAgeE9mZnNldCxcclxuICAgIHlPZmZzZXQsXHJcbiAgICByb3dzLFxyXG4gICAgY29scyxcclxuICAgIGJsb2NrZWRQb3NpdGlvbnMsXHJcbiAgICBpbWFnZVNpemUsXHJcbiAgICBjYW52YXNcclxuICApIHtcclxuICAgIHRoaXMua2VlcENvbmZpZ3VyYXRpb24gPSBrZWVwQ29uZmlndXJhdGlvbjtcclxuICAgIHRoaXMud2F0ZXJDb21wbGV0ZWQgPSBmYWxzZTtcclxuICAgIHRoaXMucGlwZUdlbmVyYXRvciA9IHBpcGVHZW5lcmF0b3I7XHJcbiAgICB0aGlzLnBpcGVzID0gW107XHJcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBbXTtcclxuICAgIHRoaXMuY29ubmVjdGVkUGlwZXMgPSBbXTtcclxuICAgIHRoaXMueE9mZnNldCA9IHhPZmZzZXQ7XHJcbiAgICB0aGlzLnlPZmZzZXQgPSB5T2Zmc2V0O1xyXG4gICAgdGhpcy5pbWFnZVNpemUgPSBpbWFnZVNpemU7XHJcbiAgICB0aGlzLnJvd3MgPSByb3dzO1xyXG4gICAgdGhpcy5jb2xzID0gY29scztcclxuICAgIHRoaXMuYmxvY2tlZFBvc2l0aW9ucyA9IGJsb2NrZWRQb3NpdGlvbnM7XHJcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgIHRoaXMuc3RhcnRQb3MgPSB7XHJcbiAgICAgIHg6IDAsXHJcbiAgICAgIHk6IDAsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgdGhpcy5mbG93U3RhcnRlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5mbG93aW5nID0gZmFsc2U7XHJcbiAgICB0aGlzLndhdGVyUmVhY2hlZEVuZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgdGhpcy5nZW5lcmF0ZUdyaWRDb25maWd1cmF0aW9uKCk7XHJcblxyXG4gICAgLy9QbGFjZSB2YWx2ZSwgZW5kIHBpcGUgYW5kIGJsb2NrZWQgc3F1YXJlc1xyXG4gICAgdGhpcy5wbGFjZVNwZWNpYWxQaXBlcygpO1xyXG5cclxuICAgIHRoaXMuZmxvd1N0YXJ0ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy53YXRlckNvbXBsZXRlZCA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuZHJhdygpO1xyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVHcmlkQ29uZmlndXJhdGlvbigpIHtcclxuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHRoaXMucm93czsgcm93KyspIHtcclxuICAgICAgY29uc3QgeCA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCB0aGlzLmNvbHM7IGNvbCsrKSB7XHJcbiAgICAgICAgY29uc3QgcGlwZSA9IG5ldyBQaXBlKFxyXG4gICAgICAgICAgMCxcclxuICAgICAgICAgIHRoaXMucGlwZUdlbmVyYXRvcixcclxuICAgICAgICAgIHRoaXMuY3R4LFxyXG4gICAgICAgICAgY29sICogdGhpcy5pbWFnZVNpemUgKyB0aGlzLnhPZmZzZXQsXHJcbiAgICAgICAgICByb3cgKiB0aGlzLmltYWdlU2l6ZSArIHRoaXMueU9mZnNldCxcclxuICAgICAgICAgIHRoaXMuaW1hZ2VTaXplXHJcbiAgICAgICAgKTtcclxuICAgICAgICB4LnB1c2gocGlwZSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5waXBlcy5wdXNoKHgpO1xyXG4gICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSB0aGlzLnBpcGVzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgdGhpcy5maW5kTmVpZ2hib3JzKCk7XHJcblxyXG4gICAgaWYgKHRoaXMuZmxvd1N0YXJ0ZWQpIHRoaXMuc2ltdWxhdGVXYXRlckZsb3coKTtcclxuXHJcbiAgICAvL3RoaXMuZHJhdygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TW91c2VQb3NpdGlvbihtb3VzZVgsIG1vdXNlWSkge1xyXG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgdGhpcy5yb3dzOyByb3crKykge1xyXG4gICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCB0aGlzLmNvbHM7IGNvbCsrKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBpcGVzW3Jvd11bY29sXSkgcmV0dXJuO1xyXG4gICAgICAgIHZhciBwaXBlID0gdGhpcy5waXBlc1tyb3ddW2NvbF07XHJcblxyXG4gICAgICAgIHBpcGUuaXNIb3ZlcmVkID0gcGlwZS5pc0luc2lkZShtb3VzZVgsIG1vdXNlWSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoYW5nZVBpcGUobW91c2VYLCBtb3VzZVkpIHtcclxuICAgIGNvbnN0IGNvbHVtbiA9IE1hdGguZmxvb3IoKG1vdXNlWCAtIHRoaXMueE9mZnNldCkgLyB0aGlzLmltYWdlU2l6ZSk7XHJcbiAgICBjb25zdCByb3cgPSBNYXRoLmZsb29yKChtb3VzZVkgLSB0aGlzLnlPZmZzZXQpIC8gdGhpcy5pbWFnZVNpemUpO1xyXG4gICAgdGhpcy5waXBlc1tyb3ddW2NvbHVtbl0uY2hhbmdlSW1hZ2UoKTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgcGxhY2VTcGVjaWFsUGlwZXMoKSB7XHJcbiAgICBjb25zdCBzdGFydFJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICh0aGlzLnJvd3MgLSAxKSk7IC8vQ2FudCBiZSBvbiBib3R0b20gcm93LCBzbyBpdCdzIG5vdCBvYnN0cnVjdGVkXHJcbiAgICBjb25zdCBzdGFydENvbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuY29scyk7XHJcbiAgICBjb25zdCBzdGFydFBpcGUgPSB0aGlzLnBpcGVzW3N0YXJ0Um93XVtzdGFydENvbF07XHJcbiAgICB0aGlzLnN0YXJ0UG9zLnggPSBzdGFydFJvdztcclxuICAgIHRoaXMuc3RhcnRQb3MueSA9IHN0YXJ0Q29sO1xyXG5cclxuICAgIHN0YXJ0UGlwZS5jaGFuZ2VQaXBlUHJvcGVydGllcygxNCk7XHJcblxyXG4gICAgbGV0IGVuZFJvdywgZW5kQ29sO1xyXG4gICAgZG8ge1xyXG4gICAgICBlbmRSb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnJvd3MpO1xyXG4gICAgICBlbmRDb2wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmNvbHMpO1xyXG4gICAgfSB3aGlsZSAoc3RhcnRSb3cgPT0gZW5kUm93IHx8IHN0YXJ0Q29sID09IGVuZENvbCB8fCBlbmRSb3cgPT0gMCk7IC8vQ2FudCBiZSBvbiB0b3Agcm93LCBzbyBpdCdzIG5vdCBvYnN0cnVjdGVkXHJcblxyXG4gICAgY29uc3QgZW5kUGlwZSA9IHRoaXMucGlwZXNbZW5kUm93XVtlbmRDb2xdO1xyXG4gICAgZW5kUGlwZS5jaGFuZ2VQaXBlUHJvcGVydGllcygxMyk7XHJcblxyXG4gICAgdGhpcy5wbGFjZUJsb2NrZWRQb3NpdGlvbnMoXHJcbiAgICAgIHRoaXMuYmxvY2tlZFBvc2l0aW9ucyxcclxuICAgICAgc3RhcnRSb3csXHJcbiAgICAgIHN0YXJ0Q29sLFxyXG4gICAgICBlbmRSb3csXHJcbiAgICAgIGVuZENvbFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHBsYWNlQmxvY2tlZFBvc2l0aW9ucyhudW1iZXJPZkJsb2NrZWRQb3NpdGlvbnMpIHtcclxuICAgIGxldCByYW5kb21Sb3csIHJhbmRvbUNvbDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZCbG9ja2VkUG9zaXRpb25zOyBpKyspIHtcclxuICAgICAgZG8ge1xyXG4gICAgICAgIHJhbmRvbVJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMucm93cyk7XHJcbiAgICAgICAgcmFuZG9tQ29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5jb2xzKTtcclxuICAgICAgfSB3aGlsZSAoXHJcbiAgICAgICAgdGhpcy5waXBlc1tyYW5kb21Sb3ddW3JhbmRvbUNvbF0uaWQgPT0gMTIgfHwgLy9Sb2NrIGJsb2NrIHBsYWNlZCBhbHJlYWR5XHJcbiAgICAgICAgdGhpcy5waXBlc1tyYW5kb21Sb3ddW3JhbmRvbUNvbF0uaWQgPT0gMTMgfHwgLy9FbmQgYmxvY2sgcGxhY2VkIGFscmVhZHlcclxuICAgICAgICB0aGlzLnBpcGVzW3JhbmRvbVJvd11bcmFuZG9tQ29sXS5pZCA9PSAxNCB8fCAvL1N0YXJ0IGJsb2NrIHBsYWNlZCBhbHJlYWR5XHJcbiAgICAgICAgKHJhbmRvbVJvdyA+IDAgJiYgdGhpcy5waXBlc1tyYW5kb21Sb3cgLSAxXVtyYW5kb21Db2xdLmlkID09IDE0KSB8fCAvL211c3Qgbm90IGJlIHBsYWNlZCBiZWxvdyB0aGUgc3RhcnRpbmcgYmxvY2tcclxuICAgICAgICAocmFuZG9tUm93IDwgdGhpcy5yb3dzIC0gMSAmJlxyXG4gICAgICAgICAgdGhpcy5waXBlc1tyYW5kb21Sb3cgKyAxXVtyYW5kb21Db2xdLmlkID09IDEzKSAvL211c3Qgbm90IGJlIHBsYWNlZCBhYm92ZSB0aGUgZW5kIGJsb2NrXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBjb25zdCBibG9ja2VkUGlwZSA9IHRoaXMucGlwZXNbcmFuZG9tUm93XVtyYW5kb21Db2xdO1xyXG5cclxuICAgICAgYmxvY2tlZFBpcGUuY2hhbmdlUGlwZVByb3BlcnRpZXMoMTIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlUGlwZShyb3csIGNvbCkge1xyXG4gICAgY29uc3QgeCA9IGNvbCAqIHRoaXMuaW1hZ2VTaXplO1xyXG4gICAgY29uc3QgeSA9IHJvdyAqIHRoaXMuaW1hZ2VTaXplO1xyXG5cclxuICAgIHRoaXMucGlwZXNbcm93XVtjb2xdLmRyYXcodGhpcy5jdHgsIHgsIHkpO1xyXG4gIH1cclxuXHJcbiAgZmluZE5laWdoYm9ycygpIHtcclxuICAgIGNvbnN0IHZpc2l0ZWQgPSBuZXcgU2V0KCk7XHJcbiAgICBjb25zdCBxdWV1ZSA9IFtbdGhpcy5zdGFydFBvcy54LCB0aGlzLnN0YXJ0UG9zLnldXTtcclxuICAgIHRoaXMuY29ubmVjdGVkUGlwZXMgPSBbXTtcclxuXHJcbiAgICB3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCBbcm93LCBjb2xdID0gcXVldWUuc2hpZnQoKTtcclxuICAgICAgY29uc3QgY3VycmVudFBpcGUgPSB0aGlzLnBpcGVzW3Jvd11bY29sXTtcclxuXHJcbiAgICAgIC8vIFNraXAgaWYgYWxyZWFkeSB2aXNpdGVkXHJcbiAgICAgIGNvbnN0IGtleSA9IGAke3Jvd30sJHtjb2x9YDtcclxuICAgICAgaWYgKHZpc2l0ZWQuaGFzKGtleSkpIGNvbnRpbnVlO1xyXG4gICAgICB2aXNpdGVkLmFkZChrZXkpO1xyXG4gICAgICB0aGlzLmNvbm5lY3RlZFBpcGVzLnB1c2goW3JvdywgY29sXSk7XHJcblxyXG4gICAgICAvLyBDaGVjayBlYWNoIGNvbm5lY3Rpb24gb2YgdGhlIGN1cnJlbnQgcGlwZVxyXG4gICAgICBmb3IgKGNvbnN0IGRpcmVjdGlvbiBvZiBjdXJyZW50UGlwZS5jb25uZWN0aW9ucykge1xyXG4gICAgICAgIGNvbnN0IFtuZXh0Um93LCBuZXh0Q29sXSA9IHRoaXMuZ2V0TmV4dFBvc2l0aW9uKHJvdywgY29sLCBkaXJlY3Rpb24pO1xyXG4gICAgICAgIGlmICh0aGlzLmlzVmFsaWRQb3NpdGlvbihuZXh0Um93LCBuZXh0Q29sKSkge1xyXG4gICAgICAgICAgY29uc3QgbmV4dFBpcGUgPSB0aGlzLnBpcGVzW25leHRSb3ddW25leHRDb2xdO1xyXG4gICAgICAgICAgY29uc3Qgb3Bwb3NpdGVEaXJlY3Rpb24gPSB0aGlzLmdldE9wcG9zaXRlRGlyZWN0aW9uKGRpcmVjdGlvbik7XHJcblxyXG4gICAgICAgICAgLy8gQWRkIHRvIHF1ZXVlIGlmIHRoZSBjb25uZWN0aW9uIGlzIHZhbGlkXHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIG5leHRQaXBlLmNvbm5lY3Rpb25zLmluY2x1ZGVzKG9wcG9zaXRlRGlyZWN0aW9uKSAmJlxyXG4gICAgICAgICAgICAhdmlzaXRlZC5oYXMoYCR7bmV4dFJvd30sJHtuZXh0Q29sfWApXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgcXVldWUucHVzaChbbmV4dFJvdywgbmV4dENvbF0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2ltdWxhdGVXYXRlckZsb3coKSB7XHJcbiAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgY29uc3QgZmlsbE5leHRQaXBlID0gKCkgPT4ge1xyXG4gICAgICBpZiAoaW5kZXggPCB0aGlzLmNvbm5lY3RlZFBpcGVzLmxlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0IFtyb3csIGNvbF0gPSB0aGlzLmNvbm5lY3RlZFBpcGVzW2luZGV4XTtcclxuICAgICAgICBjb25zdCBwaXBlID0gdGhpcy5waXBlc1tyb3ddW2NvbF07XHJcblxyXG4gICAgICAgIC8vIE1hcmsgdGhlIHBpcGUgYXMgZmxvd2luZyBhbmQgdXBkYXRlIGl0cyB2aXN1YWxzXHJcbiAgICAgICAgcGlwZS5mbG93aW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVBpcGUocm93LCBjb2wpO1xyXG5cclxuICAgICAgICBpbmRleCsrO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZmlsbE5leHRQaXBlLCA1MDAwKTsgLy8gNiBzZWNvbmRzIHBlciBwaXBlXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbm5lY3RlZFBpcGVzW2luZGV4IC0gMV0pIHJldHVybjtcclxuICAgICAgICBjb25zdCBbcm93LCBjb2xdID0gdGhpcy5jb25uZWN0ZWRQaXBlc1tpbmRleCAtIDFdO1xyXG4gICAgICAgIGNvbnN0IHBpcGUgPSB0aGlzLnBpcGVzW3Jvd11bY29sXTtcclxuXHJcbiAgICAgICAgaWYgKHBpcGUuaWQgPT0gMTMpIHtcclxuICAgICAgICAgIC8vV2luIGNvblxyXG4gICAgICAgICAgdGhpcy53YXRlckNvbXBsZXRlZCA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLndhdGVyUmVhY2hlZEVuZCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vTG9zZSBjb25cclxuICAgICAgICAgIHRoaXMud2F0ZXJDb21wbGV0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgdGhpcy53YXRlclJlYWNoZWRFbmQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgc2V0VGltZW91dChmaWxsTmV4dFBpcGUsIDUwMDApOyAvLyBTdGFydCBhZnRlciAzIHNlY29uZHNcclxuICB9XHJcblxyXG4gIGdldE5leHRQb3NpdGlvbih4LCB5LCBkaXJlY3Rpb24pIHtcclxuICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XHJcbiAgICAgIGNhc2UgXCJ1cFwiOlxyXG4gICAgICAgIHJldHVybiBbeCAtIDEsIHldO1xyXG4gICAgICBjYXNlIFwiZG93blwiOlxyXG4gICAgICAgIHJldHVybiBbeCArIDEsIHldO1xyXG4gICAgICBjYXNlIFwibGVmdFwiOlxyXG4gICAgICAgIHJldHVybiBbeCwgeSAtIDFdO1xyXG4gICAgICBjYXNlIFwicmlnaHRcIjpcclxuICAgICAgICByZXR1cm4gW3gsIHkgKyAxXTtcclxuXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIFt4LCB5XTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldE9wcG9zaXRlRGlyZWN0aW9uKGRpcmVjdGlvbikge1xyXG4gICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcclxuICAgICAgY2FzZSBcInVwXCI6XHJcbiAgICAgICAgcmV0dXJuIFwiZG93blwiO1xyXG4gICAgICBjYXNlIFwiZG93blwiOlxyXG4gICAgICAgIHJldHVybiBcInVwXCI7XHJcbiAgICAgIGNhc2UgXCJsZWZ0XCI6XHJcbiAgICAgICAgcmV0dXJuIFwicmlnaHRcIjtcclxuICAgICAgY2FzZSBcInJpZ2h0XCI6XHJcbiAgICAgICAgcmV0dXJuIFwibGVmdFwiO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaXNWYWxpZFBvc2l0aW9uKHgsIHkpIHtcclxuICAgIHJldHVybiB4ID49IDAgJiYgeCA8IHRoaXMucm93cyAmJiB5ID49IDAgJiYgeSA8IHRoaXMuY29scztcclxuICB9XHJcblxyXG4gIGlzR2FtZU92ZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy53YXRlckNvbXBsZXRlZDtcclxuICB9XHJcblxyXG4gIGRyYXcoKSB7XHJcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XHJcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCB0aGlzLnJvd3M7IHJvdysrKSB7XHJcbiAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IHRoaXMuY29sczsgY29sKyspIHtcclxuICAgICAgICB0aGlzLnBpcGVzW3Jvd11bY29sXS5kcmF3KHRoaXMuY3R4KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgR3JpZCgpO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBHcmlkIGZyb20gXCIuL2NsYXNzZXMvZ3JpZC5qc1wiO1xyXG5pbXBvcnQgUGlwZUdlbmVyYXRvciBmcm9tIFwiLi9jbGFzc2VzL1BpcGVHZW5lcmF0b3IuanNcIjtcclxuaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5jc3MnXHJcblxyXG4vLyBJbXBvcnQgaW1hZ2VzIGR5bmFtaWNhbGx5IGlmIG5lZWRlZFxyXG5jb25zdCBpbWFnZXNDb250ZXh0ID0gcmVxdWlyZS5jb250ZXh0KFwiLi4vaW1hZ2VzXCIsIGZhbHNlLCAvXFwuKHBuZ3xqcGU/Z3xnaWYpJC8pO1xyXG5pbWFnZXNDb250ZXh0LmtleXMoKS5mb3JFYWNoKGltYWdlc0NvbnRleHQpO1xyXG5cclxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImNhbnZhc1wiKTtcclxuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbmNvbnN0IHdpbkxvc3NUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aW5Mb3NzVGV4dFwiKTtcclxuY29uc3QgbmV4dEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV4dFwiKTtcclxuY29uc3QgZ2FtZU92ZXJCdXR0b25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLW92ZXItYnV0dG9uc1wiKTtcclxuXHJcbmxldCBnYW1lU3RhdGUgPSBcInBsYXlpbmdcIjtcclxuXHJcbmxldCBjYW52YXNXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5sZXQgY2FudmFzSGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxuY2FudmFzLndpZHRoID0gY2FudmFzV2lkdGg7XHJcbmNhbnZhcy5oZWlnaHQgPSBjYW52YXNIZWlnaHQ7XHJcblxyXG5jb25zdCBYX09GRlNFVCA9IDQwMDtcclxuY29uc3QgWV9PRkZTRVQgPSAxMDtcclxuY29uc3QgUk9XUyA9IDc7XHJcbmNvbnN0IENPTFVNTlMgPSA5O1xyXG5jb25zdCBJTUFHRV9TSVpFID0gMTAwO1xyXG5jb25zdCBCTE9DS0VEX1BPU0lUSU9OUyA9IDc7XHJcblxyXG5jb25zdCBwaXBlR2VuID0gbmV3IFBpcGVHZW5lcmF0b3IoY3R4LCA1KTtcclxuXHJcbmNvbnN0IGdyaWQgPSBuZXcgR3JpZChcclxuICBmYWxzZSxcclxuICBwaXBlR2VuLFxyXG4gIFhfT0ZGU0VULFxyXG4gIFlfT0ZGU0VULFxyXG4gIFJPV1MsXHJcbiAgQ09MVU1OUyxcclxuICBCTE9DS0VEX1BPU0lUSU9OUyxcclxuICBJTUFHRV9TSVpFLFxyXG4gIGNhbnZhc1xyXG4pO1xyXG5cclxubmV4dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGdhbWVTdGF0ZSA9IFwicGxheWluZ1wiO1xyXG4gIGhpZGVHYW1lT3ZlckJ1dHRvbnMoKTtcclxuICBsb2NhdGlvbi5yZWxvYWQoKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiByZXNpemVDYW52YXMoKSB7XHJcbiAgY2FudmFzV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICBjYW52YXNIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblxyXG4gIGNhbnZhcy53aWR0aCA9IGNhbnZhc1dpZHRoO1xyXG4gIGNhbnZhcy5oZWlnaHQgPSBjYW52YXNIZWlnaHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dHYW1lT3ZlckJ1dHRvbnMoKSB7XHJcbiAgZ2FtZU92ZXJCdXR0b25zLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gaGlkZUdhbWVPdmVyQnV0dG9ucygpIHtcclxuICBnYW1lT3ZlckJ1dHRvbnMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRNb3VzZVBvcyhlKSB7XHJcbiAgY29uc3QgcmVjdCA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAvLyBDYWxjdWxhdGUgbW91c2UgcG9zaXRpb25zIGNvcnJlY3RseSB3aXRoIHNjYWxpbmdcclxuICBjb25zdCBzY2FsZVggPSBjYW52YXMud2lkdGggLyByZWN0LndpZHRoO1xyXG4gIGNvbnN0IHNjYWxlWSA9IGNhbnZhcy5oZWlnaHQgLyByZWN0LmhlaWdodDtcclxuICBjb25zdCBtb3VzZVggPSAoZS5jbGllbnRYIC0gcmVjdC5sZWZ0KSAqIHNjYWxlWDtcclxuICBjb25zdCBtb3VzZVkgPSAoZS5jbGllbnRZIC0gcmVjdC50b3ApICogc2NhbGVZO1xyXG4gIHJldHVybiB7IG1vdXNlWCwgbW91c2VZIH07XHJcbn1cclxuXHJcbmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IHsgbW91c2VYLCBtb3VzZVkgfSA9IGdldE1vdXNlUG9zKGUpO1xyXG5cclxuICBncmlkLmdldE1vdXNlUG9zaXRpb24obW91c2VYLCBtb3VzZVkpO1xyXG59KTtcclxuXHJcbmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgeyBtb3VzZVgsIG1vdXNlWSB9ID0gZ2V0TW91c2VQb3MoZSk7XHJcbiAgaWYgKFxyXG4gICAgbW91c2VYIDwgWF9PRkZTRVQgfHxcclxuICAgIG1vdXNlWCA+IFhfT0ZGU0VUICsgSU1BR0VfU0laRSAqIENPTFVNTlMgfHxcclxuICAgIG1vdXNlWSA8IFlfT0ZGU0VUIHx8XHJcbiAgICBtb3VzZVkgPiBZX09GRlNFVCArIElNQUdFX1NJWkUgKiBST1dTXHJcbiAgKVxyXG4gICAgcmV0dXJuO1xyXG5cclxuICBncmlkLmNoYW5nZVBpcGUobW91c2VYLCBtb3VzZVkpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGNoZWNrR2FtZU92ZXIoKSB7XHJcbiAgaWYgKGdyaWQud2F0ZXJDb21wbGV0ZWQpIHtcclxuICAgIGdhbWVTdGF0ZSA9IFwib3ZlclwiO1xyXG4gICAgZ3JpZC53YXRlclJlYWNoZWRFbmRcclxuICAgICAgPyAod2luTG9zc1RleHQudGV4dENvbnRlbnQgPSBcIllvdSB3b24hXCIpXHJcbiAgICAgIDogKHdpbkxvc3NUZXh0LnRleHRDb250ZW50ID0gXCJZb3UgbG9zdCFcIik7XHJcbiAgICBzaG93R2FtZU92ZXJCdXR0b25zKCk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhbmltYXRlKCkge1xyXG4gIGlmIChnYW1lU3RhdGUgPT09IFwib3ZlclwiKSByZXR1cm47IC8vIFN0b3AgYW5pbWF0aW9uIGlmIHRoZSBnYW1lIGlzIG92ZXJcclxuXHJcbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcclxuICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7IC8vIENsZWFyIGNhbnZhcyBiZWZvcmUgZHJhd2luZ1xyXG4gIGNoZWNrR2FtZU92ZXIoKTsgLy8gQ2hlY2sgaWYgdGhlIGdhbWUgaGFzIGJlZW4gd29uXHJcbiAgZ3JpZC5kcmF3KCk7XHJcbiAgcGlwZUdlbi5kcmF3KCk7XHJcbiAgZ3JpZC51cGRhdGUoKTtcclxufVxyXG5hbmltYXRlKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==