/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/classComponents/class-components.js":
/*!*************************************************!*\
  !*** ./src/classComponents/class-components.js ***!
  \*************************************************/
/*! exports provided: Element */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Element\", function() { return Element; });\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ \"./src/utils/utils.js\");\n/* harmony import */ var _patterns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patterns */ \"./src/classComponents/patterns.js\");\n\r\n\r\n\r\nclass Element {\r\n  constructor(description) {\r\n    this.name = description.name;\r\n    this._uniqueId = Symbol('id');\r\n    this.attr = description.attr || {};\r\n    this.template = description.template();\r\n    this.styles = description._styles;\r\n    this.onCreated = description.onCreated;\r\n    this.onUpdated = description.onUpdated;\r\n    this.defineListeners = description.defineListeners;\r\n    this.listeners = description.listeners;\r\n    description.ref = this;\r\n    Object.defineProperty(description, 'properties', _patterns__WEBPACK_IMPORTED_MODULE_1__[\"propertiesDescriptorPattern\"])\r\n    Object.defineProperty(description, 'styles', _patterns__WEBPACK_IMPORTED_MODULE_1__[\"stylesDescriptorPattern\"])\r\n  }\r\n\r\n  _onTemplateChanged(event) {\r\n    this._element.innerHTML = event.detail.template;\r\n    \r\n    if (this.onUpdated) {\r\n      this.onUpdated();\r\n    }\r\n\r\n    if (this.defineListeners) {\r\n      this.defineListeners();\r\n    }\r\n  }\r\n\r\n  _initializeStyles() {\r\n    const head = document.getElementsByTagName('head')[0];\r\n    const style = document.createElement('style');\r\n    style.uniqueId = this._uniqueId;\r\n    style.innerHTML = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__[\"fromObjectToStyles\"])(this.styles);\r\n    head.append(style)\r\n  }\r\n\r\n  _updateStyles(event) {\r\n    const head = document.getElementsByTagName('head')[0];\r\n    this.styles = event.detail.styles;\r\n    const style = [...head.getElementsByTagName('style')].find(el => el.uniqueId === this._uniqueId);\r\n    style.innerHTML = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__[\"fromObjectToStyles\"])(this.styles);\r\n    head.append(style)\r\n  }\r\n\r\n  _createElement() {\r\n    this._element = document.createElement(this.name);\r\n    for (const key in this.attr) {\r\n      if (this.attr.hasOwnProperty(key)) {\r\n        this._element.setAttribute(key, this.attr[key])\r\n      }\r\n    }\r\n\r\n    this._initializeStyles()\r\n    this._element.addEventListener('template-changed', this._onTemplateChanged.bind(this), false);\r\n    this._element.addEventListener('styles-changed', this._updateStyles, false);\r\n  }\r\n\r\n  _renderElem() {\r\n    this._createElement(this.name);\r\n\r\n    this._element.innerHTML = this.template;\r\n\r\n  };\r\n\r\n  attachElem(selectorParentId) {\r\n    this._renderElem();\r\n    const parentElement = document.getElementById(selectorParentId);\r\n    this._element._uniqueId = this._uniqueId;\r\n    parentElement.append(this._element);\r\n\r\n    if (this.onCreated) {\r\n      this.onCreated();\r\n    }\r\n\r\n    if (this.defineListeners) {\r\n      this.defineListeners();\r\n    }\r\n  };\r\n\r\n  removeElement() {\r\n    this._element.parentNode.removeChild(this._element);\r\n  };\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/classComponents/class-components.js?");

/***/ }),

/***/ "./src/classComponents/index.js":
/*!**************************************!*\
  !*** ./src/classComponents/index.js ***!
  \**************************************/
/*! exports provided: Element */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _class_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class-components */ \"./src/classComponents/class-components.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Element\", function() { return _class_components__WEBPACK_IMPORTED_MODULE_0__[\"Element\"]; });\n\n\r\n\n\n//# sourceURL=webpack:///./src/classComponents/index.js?");

/***/ }),

/***/ "./src/classComponents/patterns.js":
/*!*****************************************!*\
  !*** ./src/classComponents/patterns.js ***!
  \*****************************************/
/*! exports provided: propertiesDescriptorPattern, stylesDescriptorPattern */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"propertiesDescriptorPattern\", function() { return propertiesDescriptorPattern; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"stylesDescriptorPattern\", function() { return stylesDescriptorPattern; });\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ \"./src/utils/utils.js\");\n/* harmony import */ var _components_todo_list_todo_list_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/todo-list/todo-list-template */ \"./src/components/todo-list/todo-list-template.js\");\n\r\n\r\n\r\nconst propertiesDescriptorPattern = {\r\n  get() {\r\n    return this._properties\r\n  },\r\n\r\n  set(newProperties) {\r\n\r\n    this._properties = {\r\n      ...this._properties,\r\n      ...newProperties\r\n    };\r\n\r\n    const event = new CustomEvent(\"template-changed\", {\r\n      detail: { template: this.template() }\r\n    })\r\n\r\n    if (!this.ref._element) {\r\n      setTimeout(() => {\r\n        this.ref._element.dispatchEvent(event);\r\n      }, 0);\r\n    } else {\r\n      this.ref._element.dispatchEvent(event);\r\n    }\r\n  },\r\n}\r\n\r\nconst stylesDescriptorPattern = {\r\n  get() {\r\n    return this._styles;\r\n  },\r\n\r\n  set(newStyles) {\r\n\r\n    this._styles = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__[\"recursiveMerge\"])(this._styles, newStyles);\r\n\r\n    const event = new CustomEvent(\"styles-changed\", {\r\n      detail: { styles: this._styles }\r\n    })\r\n\r\n    if (!this.ref._element) {\r\n      setTimeout(() => {\r\n        this.ref._element.dispatchEvent(event);\r\n      }, 0);\r\n    } else {\r\n      this.ref._element.dispatchEvent(event);\r\n    }\r\n  },\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/classComponents/patterns.js?");

/***/ }),

/***/ "./src/components/container/index.js":
/*!*******************************************!*\
  !*** ./src/components/container/index.js ***!
  \*******************************************/
/*! exports provided: template, _styles, container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"container\", function() { return container; });\n/* harmony import */ var _todo_container_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-container-template */ \"./src/components/container/todo-container-template.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"template\", function() { return _todo_container_template__WEBPACK_IMPORTED_MODULE_0__[\"template\"]; });\n\n/* harmony import */ var _todo_container_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-container-styles */ \"./src/components/container/todo-container-styles.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"_styles\", function() { return _todo_container_styles__WEBPACK_IMPORTED_MODULE_1__[\"_styles\"]; });\n\n\r\n\r\n\r\nconst container = {\r\n  name: 'todo-container',\r\n\r\n  _properties: {},\r\n  _styles: _todo_container_styles__WEBPACK_IMPORTED_MODULE_1__[\"_styles\"],\r\n  template: _todo_container_template__WEBPACK_IMPORTED_MODULE_0__[\"template\"],\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/components/container/index.js?");

/***/ }),

/***/ "./src/components/container/todo-container-styles.js":
/*!***********************************************************!*\
  !*** ./src/components/container/todo-container-styles.js ***!
  \***********************************************************/
/*! exports provided: _styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"_styles\", function() { return _styles; });\nconst _styles = {\r\n  'todo-container': {\r\n    'max-width': '800px',\r\n    'margin-right': 'auto',\r\n    'margin-left': 'auto',\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/components/container/todo-container-styles.js?");

/***/ }),

/***/ "./src/components/container/todo-container-template.js":
/*!*************************************************************!*\
  !*** ./src/components/container/todo-container-template.js ***!
  \*************************************************************/
/*! exports provided: template */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"template\", function() { return template; });\nconst template = function() {\r\n  return ``;\r\n}\n\n//# sourceURL=webpack:///./src/components/container/todo-container-template.js?");

/***/ }),

/***/ "./src/components/header/index.js":
/*!****************************************!*\
  !*** ./src/components/header/index.js ***!
  \****************************************/
/*! exports provided: _styles, template, headerElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"headerElement\", function() { return headerElement; });\n/* harmony import */ var _classComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classComponents */ \"./src/classComponents/index.js\");\n/* harmony import */ var _todo_header_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-header-styles */ \"./src/components/header/todo-header-styles.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"_styles\", function() { return _todo_header_styles__WEBPACK_IMPORTED_MODULE_1__[\"_styles\"]; });\n\n/* harmony import */ var _todo_header_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-header-template */ \"./src/components/header/todo-header-template.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"template\", function() { return _todo_header_template__WEBPACK_IMPORTED_MODULE_2__[\"template\"]; });\n\n\r\n\r\n\r\n\r\nconst headerDescriptor = {\r\n  name: 'todo-header',\r\n  template: _todo_header_template__WEBPACK_IMPORTED_MODULE_2__[\"template\"],\r\n  _styles: _todo_header_styles__WEBPACK_IMPORTED_MODULE_1__[\"_styles\"],\r\n  _properties: {\r\n    header: 'Todo list'\r\n  }\r\n}\r\n\r\nconst headerElement = new _classComponents__WEBPACK_IMPORTED_MODULE_0__[\"Element\"](headerDescriptor);\r\n\r\n\n\n//# sourceURL=webpack:///./src/components/header/index.js?");

/***/ }),

/***/ "./src/components/header/todo-header-styles.js":
/*!*****************************************************!*\
  !*** ./src/components/header/todo-header-styles.js ***!
  \*****************************************************/
/*! exports provided: _styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"_styles\", function() { return _styles; });\nconst _styles = {\r\n  '.todo-header' : {\r\n    'color': 'red',\r\n    'text-align': 'center'\r\n  },\r\n}\n\n//# sourceURL=webpack:///./src/components/header/todo-header-styles.js?");

/***/ }),

/***/ "./src/components/header/todo-header-template.js":
/*!*******************************************************!*\
  !*** ./src/components/header/todo-header-template.js ***!
  \*******************************************************/
/*! exports provided: template */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"template\", function() { return template; });\nconst template = function() {\r\n  return `\r\n    <h1 class=\"todo-header\">${this._properties.header}</h1>\r\n  `;\r\n}\n\n//# sourceURL=webpack:///./src/components/header/todo-header-template.js?");

/***/ }),

/***/ "./src/components/todo-list/index.js":
/*!*******************************************!*\
  !*** ./src/components/todo-list/index.js ***!
  \*******************************************/
/*! exports provided: todoListElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"todoListElement\", function() { return todoListElement; });\n/* harmony import */ var _classComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classComponents */ \"./src/classComponents/index.js\");\n/* harmony import */ var _todo_list_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-list-template */ \"./src/components/todo-list/todo-list-template.js\");\n/* harmony import */ var _todo_list_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-list-styles */ \"./src/components/todo-list/todo-list-styles.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/utils */ \"./src/utils/utils.js\");\n\r\n\r\n\r\n\r\n\r\nconst clojures = {\r\n  lastValue: '' \r\n}\r\n\r\nconst todoListDescriptor = {\r\n  name: 'todo-list',\r\n  template: _todo_list_template__WEBPACK_IMPORTED_MODULE_1__[\"template\"],\r\n  attr: {\r\n    id: 'todo-list',\r\n  },\r\n  _styles: _todo_list_styles__WEBPACK_IMPORTED_MODULE_2__[\"_styles\"],\r\n  _properties: {\r\n    todoList: [],\r\n  },\r\n\r\n  defineListeners() {\r\n    const closeButtons = document.getElementsByClassName('todo-list-close');\r\n    const itemsText = document.getElementsByClassName('todo-list-item');\r\n    const inpuField = document.getElementById('todo-list-input');\r\n    const button = document.getElementById('todo-list-button');\r\n\r\n    button.addEventListener('click', (e) => onButtonPressed(e, inpuField.value))\r\n\r\n    for (let index = 0; index < closeButtons.length; index++) {\r\n      itemsText[index].addEventListener('click', e => onEditPress(e, index))\r\n      closeButtons[index].addEventListener('click',e => onPressedDelete(e, index));\r\n    }\r\n  },\r\n\r\n  onCreated() {},\r\n\r\n  onUpdated() {}\r\n}\r\n\r\nconst todoListElement = new _classComponents__WEBPACK_IMPORTED_MODULE_0__[\"Element\"](todoListDescriptor);\r\n\r\nfunction onPressedDelete(e, index) {\r\n  todoListDescriptor.properties = {todoList: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__[\"removeFromArray\"])(todoListDescriptor.properties.todoList, index)};\r\n};\r\n\r\nfunction onButtonPressed(e, value) {\r\n  const button = document.getElementById('todo-list-button');\r\n\r\n  switch (button.innerHTML) {\r\n    case 'Press to add':\r\n      addNewItem(e, value);\r\n      break;\r\n    case 'Edit items':\r\n      editItems(e, value);\r\n      break;\r\n  }\r\n}\r\n\r\nfunction addNewItem(event, value) {\r\n  todoListDescriptor.properties = {todoList: [...todoListDescriptor.properties.todoList, value]};\r\n}\r\n\r\nfunction onEditPress(e, index) {\r\n  const button = document.getElementById('todo-list-button');\r\n  button.innerHTML = 'Edit items';\r\n  const inpuField = document.getElementById('todo-list-input');\r\n  inpuField.value = todoListDescriptor.properties.todoList[index];\r\n  clojures.lastValue = inpuField.value;\r\n};\r\n\r\nfunction editItems(e, value) {\r\n  const newArr = todoListDescriptor.properties.todoList.map(\r\n    (el, i) => {\r\n      const itemsText = document.getElementsByClassName('todo-list-item');\r\n\r\n      if (el === clojures.lastValue) {\r\n        todoListDescriptor.styles = { [`todo-list ul li:nth-child(${i + 3})`] : {'color': 'blue'}}\r\n        setTimeout(() => {\r\n          todoListDescriptor.styles = { [`todo-list ul li:nth-child(${i + 3})`] : {'color': 'black'}}          \r\n        }, 2000);\r\n\r\n        return value;\r\n      }\r\n\r\n      return el;\r\n    }\r\n  );\r\n\r\n  todoListDescriptor.properties = {todoList: newArr};\r\n}\r\n\n\n//# sourceURL=webpack:///./src/components/todo-list/index.js?");

/***/ }),

/***/ "./src/components/todo-list/todo-list-styles.js":
/*!******************************************************!*\
  !*** ./src/components/todo-list/todo-list-styles.js ***!
  \******************************************************/
/*! exports provided: _styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"_styles\", function() { return _styles; });\nconst _styles = {\r\n  'todo-list ul' : {\r\n    'list-style-type': 'none',\r\n  },\r\n  'todo-list ul li' : {\r\n    'padding': '10px',\r\n    'display': 'flex',\r\n    'justify-content': 'space-between'\r\n  },\r\n  'todo-list ul li:hover' : {\r\n    'background-color': 'gray'\r\n  },\r\n  '.todo-list-item': {\r\n    'display': 'block'\r\n  },\r\n  '.todo-list-close': {\r\n    'display': 'block',\r\n    'color': 'red'\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/components/todo-list/todo-list-styles.js?");

/***/ }),

/***/ "./src/components/todo-list/todo-list-template.js":
/*!********************************************************!*\
  !*** ./src/components/todo-list/todo-list-template.js ***!
  \********************************************************/
/*! exports provided: template */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"template\", function() { return template; });\n\r\nconst template = function() {\r\n  return `<ul>\r\n    <input id=\"todo-list-input\" type='text' placeholder=\"enter task\">\r\n    <button id=\"todo-list-button\" type='button'>Press to add</button>\r\n    ${this._properties.todoList.reduce((acc, cur, index) => {\r\n\r\n      return acc += `\r\n        <li>\r\n          <span class='todo-list-item'>${index + 1}) ${cur}</span>\r\n          <span class='todo-list-close'>X</span>\r\n        </li>`;\r\n    },'')}\r\n  </ul>`;\r\n}\n\n//# sourceURL=webpack:///./src/components/todo-list/todo-list-template.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classComponents */ \"./src/classComponents/index.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header */ \"./src/components/header/index.js\");\n/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/container */ \"./src/components/container/index.js\");\n/* harmony import */ var _components_todo_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/todo-list */ \"./src/components/todo-list/index.js\");\n\r\n\r\n\r\n\r\n\r\nconst containerElement = new _classComponents__WEBPACK_IMPORTED_MODULE_0__[\"Element\"]({..._components_container__WEBPACK_IMPORTED_MODULE_2__[\"container\"], ...{attr: {id: 'todo-container'}}});\r\ncontainerElement.attachElem('root');\r\n\r\n_components_header__WEBPACK_IMPORTED_MODULE_1__[\"headerElement\"].attachElem(containerElement.attr.id);\r\n_components_todo_list__WEBPACK_IMPORTED_MODULE_3__[\"todoListElement\"].attachElem(containerElement.attr.id);\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/*! exports provided: recursiveMerge, fromObjectToStyles, removeFromArray, toMacrotasksQueue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"recursiveMerge\", function() { return recursiveMerge; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fromObjectToStyles\", function() { return fromObjectToStyles; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeFromArray\", function() { return removeFromArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toMacrotasksQueue\", function() { return toMacrotasksQueue; });\n\r\nfunction fromObjectToStyles (obj) {\r\n  let styles = '';\r\n\r\n  for (const selector in obj) {\r\n    if (obj.hasOwnProperty(selector)) {\r\n      styles += selector + '{';\r\n      for (const prop in obj[selector]) {\r\n        if (obj[selector].hasOwnProperty(prop)) {\r\n          styles += prop + ':' + obj[selector][prop] + ';';\r\n        }\r\n      }\r\n      \r\n      styles += '}';\r\n    }\r\n  }\r\n\r\n  return styles;\r\n}\r\n\r\nfunction recursiveMerge(obj1, obj2)  {\r\n  for (const key in obj2) {\r\n    if (obj2.hasOwnProperty(key)) {\r\n      if(!obj1[key] || typeof obj1[key] !== 'object') {\r\n        obj1[key] = obj2[key]\r\n      };\r\n\r\n      if (typeof obj2[key] === 'object' && obj2[key]) {\r\n        recursiveMerge(obj1[key], obj2[key])\r\n      } else {\r\n        obj1[key] = obj2[key];\r\n      }\r\n    }\r\n  }\r\n\r\n  return obj1;\r\n}\r\n\r\nconst removeFromArray = (array, index) => array.filter((el, i) => index !== i);\r\n\r\nconst toMacrotasksQueue = func => {\r\n  setTimeout(func, 0);\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/utils/utils.js?");

/***/ })

/******/ });