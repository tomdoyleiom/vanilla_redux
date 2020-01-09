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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/invariant/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/invariant/browser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\n/**\n * Use invariant() to assert state which your program assumes to be true.\n *\n * Provide sprintf-style format (only %s is supported) and arguments\n * to provide information about what broke and what you were\n * expecting.\n *\n * The invariant message will be stripped in production, but the invariant\n * will remain to ensure logic does not differ in production.\n */\n\nvar invariant = function(condition, format, a, b, c, d, e, f) {\n  if (true) {\n    if (format === undefined) {\n      throw new Error('invariant requires an error message argument');\n    }\n  }\n\n  if (!condition) {\n    var error;\n    if (format === undefined) {\n      error = new Error(\n        'Minified exception occurred; use the non-minified dev environment ' +\n        'for the full error message and additional helpful warnings.'\n      );\n    } else {\n      var args = [a, b, c, d, e, f];\n      var argIndex = 0;\n      error = new Error(\n        format.replace(/%s/g, function() { return args[argIndex++]; })\n      );\n      error.name = 'Invariant Violation';\n    }\n\n    error.framesToPop = 1; // we don't care about invariant's own frame\n    throw error;\n  }\n};\n\nmodule.exports = invariant;\n\n\n//# sourceURL=webpack:///./node_modules/invariant/browser.js?");

/***/ }),

/***/ "./node_modules/just-curry-it/index.js":
/*!*********************************************!*\
  !*** ./node_modules/just-curry-it/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = curry;\n\n/*\n  function add(a, b, c) {\n    return a + b + c;\n  }\n  curry(add)(1)(2)(3); // 6\n  curry(add)(1)(2)(2); // 5\n  curry(add)(2)(4, 3); // 9\n\n  function add(...args) {\n    return args.reduce((sum, n) => sum + n, 0)\n  }\n  var curryAdd4 = curry(add, 4)\n  curryAdd4(1)(2, 3)(4); // 10\n\n  function converter(ratio, input) {\n    return (input*ratio).toFixed(1);\n  }\n  const curriedConverter = curry(converter)\n  const milesToKm = curriedConverter(1.62);\n  milesToKm(35); // 56.7\n  milesToKm(10); // 16.2\n*/\n\nfunction curry(fn, arity) {\n  return function curried() {\n    if (arity == null) {\n      arity = fn.length;\n    }\n    var args = [].slice.call(arguments);\n    if (args.length >= arity) {\n      return fn.apply(this, args);\n    } else {\n      return function() {\n        return curried.apply(this, args.concat([].slice.call(arguments)));\n      };\n    }\n  };\n}\n\n\n//# sourceURL=webpack:///./node_modules/just-curry-it/index.js?");

/***/ }),

/***/ "./node_modules/reduce-reducers/es/index.js":
/*!**************************************************!*\
  !*** ./node_modules/reduce-reducers/es/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  var initialState = typeof args[args.length - 1] !== 'function' && args.pop();\n  var reducers = args;\n\n  if (typeof initialState === 'undefined') {\n    throw new TypeError('The initial state may not be undefined. If you do not want to set a value for this reducer, you can use null instead of undefined.');\n  }\n\n  return function (prevState, value) {\n    for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {\n      args[_key2 - 2] = arguments[_key2];\n    }\n\n    var prevStateIsUndefined = typeof prevState === 'undefined';\n    var valueIsUndefined = typeof value === 'undefined';\n\n    if (prevStateIsUndefined && valueIsUndefined && initialState) {\n      return initialState;\n    }\n\n    return reducers.reduce(function (newState, reducer) {\n      return reducer.apply(undefined, [newState, value].concat(args));\n    }, prevStateIsUndefined && !valueIsUndefined && initialState ? initialState : prevState);\n  };\n});\n\n//# sourceURL=webpack:///./node_modules/reduce-reducers/es/index.js?");

/***/ }),

/***/ "./node_modules/redux-actions/es/combineActions.js":
/*!*********************************************************!*\
  !*** ./node_modules/redux-actions/es/combineActions.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return combineActions; });\n/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! invariant */ \"./node_modules/invariant/browser.js\");\n/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/isFunction */ \"./node_modules/redux-actions/es/utils/isFunction.js\");\n/* harmony import */ var _utils_isSymbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/isSymbol */ \"./node_modules/redux-actions/es/utils/isSymbol.js\");\n/* harmony import */ var _utils_isEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/isEmpty */ \"./node_modules/redux-actions/es/utils/isEmpty.js\");\n/* harmony import */ var _utils_toString__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/toString */ \"./node_modules/redux-actions/es/utils/toString.js\");\n/* harmony import */ var _utils_isString__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/isString */ \"./node_modules/redux-actions/es/utils/isString.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ \"./node_modules/redux-actions/es/constants.js\");\n\n\n\n\n\n\n\n\nfunction isValidActionType(type) {\n  return Object(_utils_isString__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(type) || Object(_utils_isFunction__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(type) || Object(_utils_isSymbol__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(type);\n}\n\nfunction isValidActionTypes(types) {\n  if (Object(_utils_isEmpty__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(types)) {\n    return false;\n  }\n\n  return types.every(isValidActionType);\n}\n\nfunction combineActions() {\n  for (var _len = arguments.length, actionsTypes = new Array(_len), _key = 0; _key < _len; _key++) {\n    actionsTypes[_key] = arguments[_key];\n  }\n\n  invariant__WEBPACK_IMPORTED_MODULE_0___default()(isValidActionTypes(actionsTypes), 'Expected action types to be strings, symbols, or action creators');\n  var combinedActionType = actionsTypes.map(_utils_toString__WEBPACK_IMPORTED_MODULE_4__[\"default\"]).join(_constants__WEBPACK_IMPORTED_MODULE_6__[\"ACTION_TYPE_DELIMITER\"]);\n  return {\n    toString: function toString() {\n      return combinedActionType;\n    }\n  };\n}\n\n//# sourceURL=webpack:///./node_modules/redux-actions/es/combineActions.js?");

/***/ }),

/***/ "./node_modules/redux-actions/es/constants.js":
/*!****************************************************!*\
  !*** ./node_modules/redux-actions/es/constants.js ***!
  \****************************************************/
/*! exports provided: DEFAULT_NAMESPACE, ACTION_TYPE_DELIMITER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DEFAULT_NAMESPACE\", function() { return DEFAULT_NAMESPACE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ACTION_TYPE_DELIMITER\", function() { return ACTION_TYPE_DELIMITER; });\nvar DEFAULT_NAMESPACE = '/';\nvar ACTION_TYPE_DELIMITER = '||';\n\n//# sourceURL=webpack:///./node_modules/redux-actions/es/constants.js?");

/***/ }),

/***/ "./node_modules/redux-actions/es/createAction.js":
/*!*******************************************************!*\
  !*** ./node_modules/redux-actions/es/createAction.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createAction; });\n/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! invariant */ \"./node_modules/invariant/browser.js\");\n/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/isFunction */ \"./node_modules/redux-actions/es/utils/isFunction.js\");\n/* harmony import */ var _utils_identity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/identity */ \"./node_modules/redux-actions/es/utils/identity.js\");\n/* harmony import */ var _utils_isNull__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/isNull */ \"./node_modules/redux-actions/es/utils/isNull.js\");\n\n\n\n\nfunction createAction(type, payloadCreator, metaCreator) {\n  if (payloadCreator === void 0) {\n    payloadCreator = _utils_identity__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n  }\n\n  invariant__WEBPACK_IMPORTED_MODULE_0___default()(Object(_utils_isFunction__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(payloadCreator) || Object(_utils_isNull__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(payloadCreator), 'Expected payloadCreator to be a function, undefined or null');\n  var finalPayloadCreator = Object(_utils_isNull__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(payloadCreator) || payloadCreator === _utils_identity__WEBPACK_IMPORTED_MODULE_2__[\"default\"] ? _utils_identity__WEBPACK_IMPORTED_MODULE_2__[\"default\"] : function (head) {\n    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n      args[_key - 1] = arguments[_key];\n    }\n\n    return head instanceof Error ? head : payloadCreator.apply(void 0, [head].concat(args));\n  };\n  var hasMeta = Object(_utils_isFunction__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(metaCreator);\n  var typeString = type.toString();\n\n  var actionCreator = function actionCreator() {\n    var payload = finalPayloadCreator.apply(void 0, arguments);\n    var action = {\n      type: type\n    };\n\n    if (payload instanceof Error) {\n      action.error = true;\n    }\n\n    if (payload !== undefined) {\n      action.payload = payload;\n    }\n\n    if (hasMeta) {\n      action.meta = metaCreator.apply(void 0, arguments);\n    }\n\n    return action;\n  };\n\n  actionCreator.toString = function () {\n    return typeString;\n  };\n\n  return actionCreator;\n}\n\n//# sourceURL=webpack:///./node_modules/redux-actions/es/createAction.js?");

/***/ }),

/***/ "./node_modules/redux-actions/es/createActions.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-actions/es/createActions.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createActions; });\n/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! invariant */ \"./node_modules/invariant/browser.js\");\n/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_isPlainObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/isPlainObject */ \"./node_modules/redux-actions/es/utils/isPlainObject.js\");\n/* harmony import */ var _utils_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/isFunction */ \"./node_modules/redux-actions/es/utils/isFunction.js\");\n/* harmony import */ var _utils_identity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/identity */ \"./node_modules/redux-actions/es/utils/identity.js\");\n/* harmony import */ var _utils_isArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/isArray */ \"./node_modules/redux-actions/es/utils/isArray.js\");\n/* harmony import */ var _utils_isString__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/isString */ \"./node_modules/redux-actions/es/utils/isString.js\");\n/* harmony import */ var _utils_isNil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/isNil */ \"./node_modules/redux-actions/es/utils/isNil.js\");\n/* harmony import */ var _utils_getLastElement__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/getLastElement */ \"./node_modules/redux-actions/es/utils/getLastElement.js\");\n/* harmony import */ var _utils_camelCase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/camelCase */ \"./node_modules/redux-actions/es/utils/camelCase.js\");\n/* harmony import */ var _utils_arrayToObject__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/arrayToObject */ \"./node_modules/redux-actions/es/utils/arrayToObject.js\");\n/* harmony import */ var _utils_flattenActionMap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/flattenActionMap */ \"./node_modules/redux-actions/es/utils/flattenActionMap.js\");\n/* harmony import */ var _utils_unflattenActionCreators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/unflattenActionCreators */ \"./node_modules/redux-actions/es/utils/unflattenActionCreators.js\");\n/* harmony import */ var _createAction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./createAction */ \"./node_modules/redux-actions/es/createAction.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./constants */ \"./node_modules/redux-actions/es/constants.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction createActions(actionMap) {\n  for (var _len = arguments.length, identityActions = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    identityActions[_key - 1] = arguments[_key];\n  }\n\n  var options = Object(_utils_isPlainObject__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(_utils_getLastElement__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(identityActions)) ? identityActions.pop() : {};\n  invariant__WEBPACK_IMPORTED_MODULE_0___default()(identityActions.every(_utils_isString__WEBPACK_IMPORTED_MODULE_5__[\"default\"]) && (Object(_utils_isString__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(actionMap) || Object(_utils_isPlainObject__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(actionMap)), 'Expected optional object followed by string action types');\n\n  if (Object(_utils_isString__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(actionMap)) {\n    return actionCreatorsFromIdentityActions([actionMap].concat(identityActions), options);\n  }\n\n  return _objectSpread({}, actionCreatorsFromActionMap(actionMap, options), actionCreatorsFromIdentityActions(identityActions, options));\n}\n\nfunction actionCreatorsFromActionMap(actionMap, options) {\n  var flatActionMap = Object(_utils_flattenActionMap__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(actionMap, options);\n  var flatActionCreators = actionMapToActionCreators(flatActionMap);\n  return Object(_utils_unflattenActionCreators__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(flatActionCreators, options);\n}\n\nfunction actionMapToActionCreators(actionMap, _temp) {\n  var _ref = _temp === void 0 ? {} : _temp,\n      prefix = _ref.prefix,\n      _ref$namespace = _ref.namespace,\n      namespace = _ref$namespace === void 0 ? _constants__WEBPACK_IMPORTED_MODULE_13__[\"DEFAULT_NAMESPACE\"] : _ref$namespace;\n\n  function isValidActionMapValue(actionMapValue) {\n    if (Object(_utils_isFunction__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(actionMapValue) || Object(_utils_isNil__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(actionMapValue)) {\n      return true;\n    }\n\n    if (Object(_utils_isArray__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(actionMapValue)) {\n      var _actionMapValue$ = actionMapValue[0],\n          payload = _actionMapValue$ === void 0 ? _utils_identity__WEBPACK_IMPORTED_MODULE_3__[\"default\"] : _actionMapValue$,\n          meta = actionMapValue[1];\n      return Object(_utils_isFunction__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(payload) && Object(_utils_isFunction__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(meta);\n    }\n\n    return false;\n  }\n\n  return Object(_utils_arrayToObject__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(Object.keys(actionMap), function (partialActionCreators, type) {\n    var _objectSpread2;\n\n    var actionMapValue = actionMap[type];\n    invariant__WEBPACK_IMPORTED_MODULE_0___default()(isValidActionMapValue(actionMapValue), 'Expected function, undefined, null, or array with payload and meta ' + (\"functions for \" + type));\n    var prefixedType = prefix ? \"\" + prefix + namespace + type : type;\n    var actionCreator = Object(_utils_isArray__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(actionMapValue) ? _createAction__WEBPACK_IMPORTED_MODULE_12__[\"default\"].apply(void 0, [prefixedType].concat(actionMapValue)) : Object(_createAction__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(prefixedType, actionMapValue);\n    return _objectSpread({}, partialActionCreators, (_objectSpread2 = {}, _objectSpread2[type] = actionCreator, _objectSpread2));\n  });\n}\n\nfunction actionCreatorsFromIdentityActions(identityActions, options) {\n  var actionMap = Object(_utils_arrayToObject__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(identityActions, function (partialActionMap, type) {\n    var _objectSpread3;\n\n    return _objectSpread({}, partialActionMap, (_objectSpread3 = {}, _objectSpread3[type] = _utils_identity__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _objectSpread3));\n  });\n  var actionCreators = actionMapToActionCreators(actionMap, options);\n  return Object(_utils_arrayToObject__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(Object.keys(actionCreators), function (partialActionCreators, type) {\n    var _objectSpread4;\n\n    return _objectSpread({}, partialActionCreators, (_objectSpread4 = {}, _objectSpread4[Object(_utils_camelCase__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(type)] = actionCreators[type], _objectSpread4));\n  });\n}\n\n//# sourceURL=webpack:///./node_modules/redux-actions/es/createActions.js?");

/***/ }),

/***/ "./node_modules/redux-actions/es/createCurriedAction.js":
/*!**************************************************************!*\
  !*** ./node_modules/redux-actions/es/createCurriedAction.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var just_curry_it__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! just-curry-it */ \"./node_modules/just-curry-it/index.js\");\n/* harmony import */ var just_curry_it__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(just_curry_it__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _createAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createAction */ \"./node_modules/redux-actions/es/createAction.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (type, payloadCreator) {\n  return just_curry_it__WEBPACK_IMPORTED_MODULE_0___default()(Object(_createAction__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(type, payloadCreator), payloadCreator.length);\n});\n\n//# sourceURL=webpack:///./node_modules/redux-actions/es/createCurriedAction.js?");

/***/ }),

/***/ "./node_modules/redux-actions/es/handleAction.js":
/*!*******************************************************!*\
  !*** ./node_modules/redux-actions/es/handleAction.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return handleAction; });\n/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! invariant */ \"./node_modules/invariant/browser.js\");\n/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/isFunction */ \"./node_modules/redux-actions/es/utils/isFunction.js\");\n/* harmony import */ var _utils_isPlainObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/isPlainObject */ \"./node_modules/redux-actions/es/utils/isPlainObject.js\");\n/* harmony import */ var _utils_identity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/identity */ \"./node_modules/redux-actions/es/utils/identity.js\");\n/* harmony import */ var _utils_isNil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/isNil */ \"./node_modules/redux-actions/es/utils/isNil.js\");\n/* harmony import */ var _utils_isUndefined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/isUndefined */ \"./node_modules/redux-actions/es/utils/isUndefined.js\");\n/* harmony import */ var _utils_toString__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/toString */ \"./node_modules/redux-actions/es/utils/toString.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants */ \"./node_modules/redux-actions/es/constants.js\");\n\n\n\n\n\n\n\n\nfunction handleAction(type, reducer, defaultState) {\n  if (reducer === void 0) {\n    reducer = _utils_identity__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n  }\n\n  var types = Object(_utils_toString__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(type).split(_constants__WEBPACK_IMPORTED_MODULE_7__[\"ACTION_TYPE_DELIMITER\"]);\n  invariant__WEBPACK_IMPORTED_MODULE_0___default()(!Object(_utils_isUndefined__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(defaultState), \"defaultState for reducer handling \" + types.join(', ') + \" should be defined\");\n  invariant__WEBPACK_IMPORTED_MODULE_0___default()(Object(_utils_isFunction__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(reducer) || Object(_utils_isPlainObject__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(reducer), 'Expected reducer to be a function or object with next and throw reducers');\n\n  var _ref = Object(_utils_isFunction__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(reducer) ? [reducer, reducer] : [reducer.next, reducer.throw].map(function (aReducer) {\n    return Object(_utils_isNil__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(aReducer) ? _utils_identity__WEBPACK_IMPORTED_MODULE_3__[\"default\"] : aReducer;\n  }),\n      nextReducer = _ref[0],\n      throwReducer = _ref[1];\n\n  return function (state, action) {\n    if (state === void 0) {\n      state = defaultState;\n    }\n\n    var actionType = action.type;\n\n    if (!actionType || types.indexOf(Object(_utils_toString__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(actionType)) === -1) {\n      return state;\n    }\n\n    return (action.error === true ? throwReducer : nextReducer)(state, action);\n  };\n}\n\n//# sourceURL=webpack:///./node_modules/redux-actions/es/handleAction.js?");

/***/ }),

/***/ "./node_modules/redux-actions/es/handleActions.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-actions/es/handleActions.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return handleActions; });\n/* harmony import */ var reduce_reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reduce-reducers */ \"./node_modules/reduce-reducers/es/index.js\");\n/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! invariant */ \"./node_modules/invariant/browser.js\");\n/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_isPlainObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/isPlainObject */ \"./node_modules/redux-actions/es/utils/isPlainObject.js\");\n/* harmony import */ var _utils_isMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/isMap */ \"./node_modules/redux-actions/es/utils/isMap.js\");\n/* harmony import */ var _utils_ownKeys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/ownKeys */ \"./node_modules/redux-actions/es/utils/ownKeys.js\");\n/* harmony import */ var _utils_flattenReducerMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/flattenReducerMap */ \"./node_modules/redux-actions/es/utils/flattenReducerMap.js\");\n/* harmony import */ var _handleAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./handleAction */ \"./node_modules/redux-actions/es/handleAction.js\");\n/* harmony import */ var _utils_get__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/get */ \"./node_modules/redux-actions/es/utils/get.js\");\n\n\n\n\n\n\n\n\nfunction handleActions(handlers, defaultState, options) {\n  if (options === void 0) {\n    options = {};\n  }\n\n  invariant__WEBPACK_IMPORTED_MODULE_1___default()(Object(_utils_isPlainObject__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(handlers) || Object(_utils_isMap__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(handlers), 'Expected handlers to be a plain object.');\n  var flattenedReducerMap = Object(_utils_flattenReducerMap__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(handlers, options);\n  var reducers = Object(_utils_ownKeys__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(flattenedReducerMap).map(function (type) {\n    return Object(_handleAction__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(type, Object(_utils_get__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(type, flattenedReducerMap), defaultState);\n  });\n  var reducer = reduce_reducers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].apply(void 0, reducers.concat([defaultState]));\n  return function (state, action) {\n    if (state === void 0) {\n      state = defaultState;\n    }\n\n    return reducer(state, action);\n  };\n}\n\n//# sourceURL=webpack:///./node_modules/redux-actions/es/handleActions.js?");

/***/ }),

/***/ "./node_modules/redux-actions/es/index.js":
/*!************************************************!*\
  !*** ./node_modules/redux-actions/es/index.js ***!
  \************************************************/
/*! exports provided: combineActions, createAction, createActions, createCurriedAction, handleAction, handleActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _combineActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./combineActions */ \"./node_modules/redux-actions/es/combineActions.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"combineActions\", function() { return _combineActions__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _createAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createAction */ \"./node_modules/redux-actions/es/createAction.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createAction\", function() { return _createAction__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _createActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createActions */ \"./node_modules/redux-actions/es/createActions.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createActions\", function() { return _createActions__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _createCurriedAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createCurriedAction */ \"./node_modules/redux-actions/es/createCurriedAction.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createCurriedAction\", function() { return _createCurriedAction__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _handleAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handleAction */ \"./node_modules/redux-actions/es/handleAction.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"handleAction\", function() { return _handleAction__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _handleActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./handleActions */ \"./node_modules/redux-actions/es/handleActions.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"handleActions\", function() { return _handleActions__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./node_modules/redux-actions/es/index.js?");

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/arrayToObject.js":
/*!**************************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/arrayToObject.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (array, callback) {\n  return array.reduce(function (partialObject, element) {\n    return callback(partialObject, element);\n  }, {});\n});\n\n//# sourceURL=webpack:///./node_modules/redux-actions/es/utils/arrayToObject.js?");

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/camelCase.js":
/*!**********************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/camelCase.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var to_camel_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! to-camel-case */ \"./node_modules/to-camel-case/index.js\");\n/* harmony import */ var to_camel_case__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(to_camel_case__WEBPACK_IMPORTED_MODULE_0__);\n\nvar namespacer = '/';\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (type) {\n  return type.indexOf(namespacer) === -1 ? to_camel_case__WEBPACK_IMPORTED_MODULE_0___default()(type) : type.split(namespacer).map(to_camel_case__WEBPACK_IMPORTED_MODULE_0___default.a).join(namespacer);\n});\n\n//# sourceURL=webpack:///./node_modules/redux-actions/es/utils/camelCase.js?");

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/flattenActionMap.js":
/*!*****************************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/flattenActionMap.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _isPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isPlainObject */ \"./node_modules/redux-actions/es/utils/isPlainObject.js\");\n/* harmony import */ var _flattenWhenNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flattenWhenNode */ \"./node_modules/redux-actions/es/utils/flattenWhenNode.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_flattenWhenNode__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_isPlainObject__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n\n//# sourceURL=webpack:///./node_modules/redux-actions/es/utils/flattenActionMap.js?");

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/flattenReducerMap.js":
/*!******************************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/flattenReducerMap.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _isPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isPlainObject */ \"./node_modules/redux-actions/es/utils/isPlainObject.js\");\n/* harmony import */ var _isMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isMap */ \"./node_modules/redux-actions/es/utils/isMap.js\");\n/* harmony import */ var _hasGeneratorInterface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hasGeneratorInterface */ \"./node_modules/redux-actions/es/utils/hasGeneratorInterface.js\");\n/* harmony import */ var _flattenWhenNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flattenWhenNode */ \"./node_modules/redux-actions/es/utils/flattenWhenNode.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_flattenWhenNode__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function (node) {\n  return (Object(_isPlainObject__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(node) || Object(_isMap__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(node)) && !Object(_hasGeneratorInterface__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(node);\n}));\n\n//# sourceURL=webpack:///./node_modules/redux-actions/es/utils/flattenReducerMap.js?");

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/flattenWhenNode.js":
/*!****************************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/flattenWhenNode.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./node_modules/redux-actions/es/constants.js\");\n/* harmony import */ var _ownKeys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ownKeys */ \"./node_modules/redux-actions/es/utils/ownKeys.js\");\n/* harmony import */ var _get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get */ \"./node_modules/redux-actions/es/utils/get.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (predicate) {\n  return function flatten(map, _temp, partialFlatMap, partialFlatActionType) {\n    var _ref = _temp === void 0 ? {} : _temp,\n        _ref$namespace = _ref.namespace,\n        namespace = _ref$namespace === void 0 ? _constants__WEBPACK_IMPORTED_MODULE_0__[\"DEFAULT_NAMESPACE\"] : _ref$namespace,\n        prefix = _ref.prefix;\n\n    if (partialFlatMap === void 0) {\n      partialFlatMap = {};\n    }\n\n    if (partialFlatActionType === void 0) {\n      partialFlatActionType = '';\n    }\n\n    function connectNamespace(type) {\n      var _ref2;\n\n      if (!partialFlatActionType) return type;\n      var types = type.toString().split(_constants__WEBPACK_IMPORTED_MODULE_0__[\"ACTION_TYPE_DELIMITER\"]);\n      var partials = partialFlatActionType.split(_constants__WEBPACK_IMPORTED_MODULE_0__[\"ACTION_TYPE_DELIMITER\"]);\n      return (_ref2 = []).concat.apply(_ref2, partials.map(function (p) {\n        return types.map(function (t) {\n          return \"\" + p + namespace + t;\n        });\n      })).join(_constants__WEBPACK_IMPORTED_MODULE_0__[\"ACTION_TYPE_DELIMITER\"]);\n    }\n\n    function connectPrefix(type) {\n      if (partialFlatActionType || !prefix || prefix && new RegExp(\"^\" + prefix + namespace).test(type)) {\n        return type;\n      }\n\n      return \"\" + prefix + namespace + type;\n    }\n\n    Object(_ownKeys__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(map).forEach(function (type) {\n      var nextNamespace = connectPrefix(connectNamespace(type));\n      var mapValue = Object(_get__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(type, map);\n\n      if (predicate(mapValue)) {\n        flatten(mapValue, {\n          namespace: namespace,\n          prefix: prefix\n        }, partialFlatMap, nextNamespace);\n      } else {\n        partialFlatMap[nextNamespace] = mapValue;\n      }\n    });\n    return partialFlatMap;\n  };\n});\n\n//# sourceURL=webpack:///./node_modules/redux-actions/es/utils/flattenWhenNode.js?");

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/get.js":
/*!****************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/get.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return get; });\n/* harmony import */ var _isMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isMap */ \"./node_modules/redux-actions/es/utils/isMap.js\");\n\nfunction get(key, x) {\n  return Object(_isMap__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(x) ? x.get(key) : x[key];\n}\n\n//# sourceURL=webpack:///./node_modules/redux-actions/es/utils/get.js?");

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/getLastElement.js":
/*!***************************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/getLastElement.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (array) {\n  return array[array.length - 1];\n});\n\n//# sourceURL=webpack:///./node_modules/redux-actions/es/utils/getLastElement.js?");

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/hasGeneratorInterface.js":
/*!**********************************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/hasGeneratorInterface.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return hasGeneratorInterface; });\n/* harmony import */ var _ownKeys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ownKeys */ \"./node_modules/redux-actions/es/utils/ownKeys.js\");\n\nfunction hasGeneratorInterface(handler) {\n  var keys = Object(_ownKeys__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(handler);\n  var hasOnlyInterfaceNames = keys.every(function (ownKey) {\n    return ownKey === 'next' || ownKey === 'throw';\n  });\n  return keys.length && keys.length <= 2 && hasOnlyInterfaceNames;\n}\n\n//# sourceURL=webpack:///./node_modules/redux-actions/es/utils/hasGeneratorInterface.js?");

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/identity.js":
/*!*********************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/identity.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (value) {\n  return value;\n});\n\n//# sourceURL=webpack:///./node_modules/redux-actions/es/utils/identity.js?");

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/isArray.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/isArray.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (value) {\n  return Array.isArray(value);\n});\n\n//# sourceURL=webpack:///./node_modules/redux-actions/es/utils/isArray.js?");

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/isEmpty.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/isEmpty.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (value) {\n  return value.length === 0;\n});\n\n//# sourceURL=webpack:///./node_modules/redux-actions/es/utils/isEmpty.js?");

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/isFunction.js":
/*!***********************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/isFunction.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (value) {\n  return typeof value === 'function';\n});\n\n//# sourceURL=webpack:///./node_modules/redux-actions/es/utils/isFunction.js?");

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/isMap.js":
/*!******************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/isMap.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (value) {\n  return typeof Map !== 'undefined' && value instanceof Map;\n});\n\n//# sourceURL=webpack:///./node_modules/redux-actions/es/utils/isMap.js?");

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/isNil.js":
/*!******************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/isNil.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (value) {\n  return value === null || value === undefined;\n});\n\n//# sourceURL=webpack:///./node_modules/redux-actions/es/utils/isNil.js?");

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/isNull.js":
/*!*******************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/isNull.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (value) {\n  return value === null;\n});\n\n//# sourceURL=webpack:///./node_modules/redux-actions/es/utils/isNull.js?");

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/isPlainObject.js":
/*!**************************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/isPlainObject.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (value) {\n  if (typeof value !== 'object' || value === null) return false;\n  var proto = value;\n\n  while (Object.getPrototypeOf(proto) !== null) {\n    proto = Object.getPrototypeOf(proto);\n  }\n\n  return Object.getPrototypeOf(value) === proto;\n});\n\n//# sourceURL=webpack:///./node_modules/redux-actions/es/utils/isPlainObject.js?");

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/isString.js":
/*!*********************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/isString.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (value) {\n  return typeof value === 'string';\n});\n\n//# sourceURL=webpack:///./node_modules/redux-actions/es/utils/isString.js?");

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/isSymbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/isSymbol.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (value) {\n  return typeof value === 'symbol' || typeof value === 'object' && Object.prototype.toString.call(value) === '[object Symbol]';\n});\n\n//# sourceURL=webpack:///./node_modules/redux-actions/es/utils/isSymbol.js?");

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/isUndefined.js":
/*!************************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/isUndefined.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (value) {\n  return value === undefined;\n});\n\n//# sourceURL=webpack:///./node_modules/redux-actions/es/utils/isUndefined.js?");

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/ownKeys.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/ownKeys.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ownKeys; });\n/* harmony import */ var _isMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isMap */ \"./node_modules/redux-actions/es/utils/isMap.js\");\n\nfunction ownKeys(object) {\n  if (Object(_isMap__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(object)) {\n    // We are using loose transforms in babel. Here we are trying to convert an\n    // interable to an array. Loose mode expects everything to already be an\n    // array. The problem is that our eslint rules encourage us to prefer\n    // spread over Array.from.\n    //\n    // Instead of disabling loose mode we simply disable the warning.\n    // eslint-disable-next-line unicorn/prefer-spread\n    return Array.from(object.keys());\n  }\n\n  if (typeof Reflect !== 'undefined' && typeof Reflect.ownKeys === 'function') {\n    return Reflect.ownKeys(object);\n  }\n\n  var keys = Object.getOwnPropertyNames(object);\n\n  if (typeof Object.getOwnPropertySymbols === 'function') {\n    keys = keys.concat(Object.getOwnPropertySymbols(object));\n  }\n\n  return keys;\n}\n\n//# sourceURL=webpack:///./node_modules/redux-actions/es/utils/ownKeys.js?");

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/toString.js":
/*!*********************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/toString.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (value) {\n  return value.toString();\n});\n\n//# sourceURL=webpack:///./node_modules/redux-actions/es/utils/toString.js?");

/***/ }),

/***/ "./node_modules/redux-actions/es/utils/unflattenActionCreators.js":
/*!************************************************************************!*\
  !*** ./node_modules/redux-actions/es/utils/unflattenActionCreators.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return unflattenActionCreators; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./node_modules/redux-actions/es/constants.js\");\n/* harmony import */ var _isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isEmpty */ \"./node_modules/redux-actions/es/utils/isEmpty.js\");\n/* harmony import */ var _camelCase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./camelCase */ \"./node_modules/redux-actions/es/utils/camelCase.js\");\n\n\n\nfunction unflattenActionCreators(flatActionCreators, _temp) {\n  var _ref = _temp === void 0 ? {} : _temp,\n      _ref$namespace = _ref.namespace,\n      namespace = _ref$namespace === void 0 ? _constants__WEBPACK_IMPORTED_MODULE_0__[\"DEFAULT_NAMESPACE\"] : _ref$namespace,\n      prefix = _ref.prefix;\n\n  function unflatten(flatActionType, partialNestedActionCreators, partialFlatActionTypePath) {\n    var nextNamespace = Object(_camelCase__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(partialFlatActionTypePath.shift());\n\n    if (Object(_isEmpty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(partialFlatActionTypePath)) {\n      partialNestedActionCreators[nextNamespace] = flatActionCreators[flatActionType];\n    } else {\n      if (!partialNestedActionCreators[nextNamespace]) {\n        partialNestedActionCreators[nextNamespace] = {};\n      }\n\n      unflatten(flatActionType, partialNestedActionCreators[nextNamespace], partialFlatActionTypePath);\n    }\n  }\n\n  var nestedActionCreators = {};\n  Object.getOwnPropertyNames(flatActionCreators).forEach(function (type) {\n    var unprefixedType = prefix ? type.replace(\"\" + prefix + namespace, '') : type;\n    return unflatten(type, nestedActionCreators, unprefixedType.split(namespace));\n  });\n  return nestedActionCreators;\n}\n\n//# sourceURL=webpack:///./node_modules/redux-actions/es/utils/unflattenActionCreators.js?");

/***/ }),

/***/ "./node_modules/redux-devtools-extension/index.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-devtools-extension/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar compose = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\").compose;\n\nexports.__esModule = true;\nexports.composeWithDevTools = (\n  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?\n    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :\n    function() {\n      if (arguments.length === 0) return undefined;\n      if (typeof arguments[0] === 'object') return compose;\n      return compose.apply(null, arguments);\n    }\n);\n\nexports.devToolsEnhancer = (\n  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ ?\n    window.__REDUX_DEVTOOLS_EXTENSION__ :\n    function() { return function(noop) { return noop; } }\n);\n\n\n//# sourceURL=webpack:///./node_modules/redux-devtools-extension/index.js?");

/***/ }),

/***/ "./node_modules/redux-logger/dist/redux-logger.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-logger/dist/redux-logger.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {!function(e,t){ true?t(exports):undefined}(this,function(e){\"use strict\";function t(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function r(e,t){Object.defineProperty(this,\"kind\",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,\"path\",{value:t,enumerable:!0})}function n(e,t,r){n.super_.call(this,\"E\",e),Object.defineProperty(this,\"lhs\",{value:t,enumerable:!0}),Object.defineProperty(this,\"rhs\",{value:r,enumerable:!0})}function o(e,t){o.super_.call(this,\"N\",e),Object.defineProperty(this,\"rhs\",{value:t,enumerable:!0})}function i(e,t){i.super_.call(this,\"D\",e),Object.defineProperty(this,\"lhs\",{value:t,enumerable:!0})}function a(e,t,r){a.super_.call(this,\"A\",e),Object.defineProperty(this,\"index\",{value:t,enumerable:!0}),Object.defineProperty(this,\"item\",{value:r,enumerable:!0})}function f(e,t,r){var n=e.slice((r||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,n),e}function u(e){var t=\"undefined\"==typeof e?\"undefined\":N(e);return\"object\"!==t?t:e===Math?\"math\":null===e?\"null\":Array.isArray(e)?\"array\":\"[object Date]\"===Object.prototype.toString.call(e)?\"date\":\"function\"==typeof e.toString&&/^\\/.*\\//.test(e.toString())?\"regexp\":\"object\"}function l(e,t,r,c,s,d,p){s=s||[],p=p||[];var g=s.slice(0);if(\"undefined\"!=typeof d){if(c){if(\"function\"==typeof c&&c(g,d))return;if(\"object\"===(\"undefined\"==typeof c?\"undefined\":N(c))){if(c.prefilter&&c.prefilter(g,d))return;if(c.normalize){var h=c.normalize(g,d,e,t);h&&(e=h[0],t=h[1])}}}g.push(d)}\"regexp\"===u(e)&&\"regexp\"===u(t)&&(e=e.toString(),t=t.toString());var y=\"undefined\"==typeof e?\"undefined\":N(e),v=\"undefined\"==typeof t?\"undefined\":N(t),b=\"undefined\"!==y||p&&p[p.length-1].lhs&&p[p.length-1].lhs.hasOwnProperty(d),m=\"undefined\"!==v||p&&p[p.length-1].rhs&&p[p.length-1].rhs.hasOwnProperty(d);if(!b&&m)r(new o(g,t));else if(!m&&b)r(new i(g,e));else if(u(e)!==u(t))r(new n(g,e,t));else if(\"date\"===u(e)&&e-t!==0)r(new n(g,e,t));else if(\"object\"===y&&null!==e&&null!==t)if(p.filter(function(t){return t.lhs===e}).length)e!==t&&r(new n(g,e,t));else{if(p.push({lhs:e,rhs:t}),Array.isArray(e)){var w;e.length;for(w=0;w<e.length;w++)w>=t.length?r(new a(g,w,new i(void 0,e[w]))):l(e[w],t[w],r,c,g,w,p);for(;w<t.length;)r(new a(g,w,new o(void 0,t[w++])))}else{var x=Object.keys(e),S=Object.keys(t);x.forEach(function(n,o){var i=S.indexOf(n);i>=0?(l(e[n],t[n],r,c,g,n,p),S=f(S,i)):l(e[n],void 0,r,c,g,n,p)}),S.forEach(function(e){l(void 0,t[e],r,c,g,e,p)})}p.length=p.length-1}else e!==t&&(\"number\"===y&&isNaN(e)&&isNaN(t)||r(new n(g,e,t)))}function c(e,t,r,n){return n=n||[],l(e,t,function(e){e&&n.push(e)},r),n.length?n:void 0}function s(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case\"A\":s(o[r.path[n]],r.index,r.item);break;case\"D\":delete o[r.path[n]];break;case\"E\":case\"N\":o[r.path[n]]=r.rhs}}else switch(r.kind){case\"A\":s(e[t],r.index,r.item);break;case\"D\":e=f(e,t);break;case\"E\":case\"N\":e[t]=r.rhs}return e}function d(e,t,r){if(e&&t&&r&&r.kind){for(var n=e,o=-1,i=r.path?r.path.length-1:0;++o<i;)\"undefined\"==typeof n[r.path[o]]&&(n[r.path[o]]=\"number\"==typeof r.path[o]?[]:{}),n=n[r.path[o]];switch(r.kind){case\"A\":s(r.path?n[r.path[o]]:n,r.index,r.item);break;case\"D\":delete n[r.path[o]];break;case\"E\":case\"N\":n[r.path[o]]=r.rhs}}}function p(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case\"A\":p(o[r.path[n]],r.index,r.item);break;case\"D\":o[r.path[n]]=r.lhs;break;case\"E\":o[r.path[n]]=r.lhs;break;case\"N\":delete o[r.path[n]]}}else switch(r.kind){case\"A\":p(e[t],r.index,r.item);break;case\"D\":e[t]=r.lhs;break;case\"E\":e[t]=r.lhs;break;case\"N\":e=f(e,t)}return e}function g(e,t,r){if(e&&t&&r&&r.kind){var n,o,i=e;for(o=r.path.length-1,n=0;n<o;n++)\"undefined\"==typeof i[r.path[n]]&&(i[r.path[n]]={}),i=i[r.path[n]];switch(r.kind){case\"A\":p(i[r.path[n]],r.index,r.item);break;case\"D\":i[r.path[n]]=r.lhs;break;case\"E\":i[r.path[n]]=r.lhs;break;case\"N\":delete i[r.path[n]]}}}function h(e,t,r){if(e&&t){var n=function(n){r&&!r(e,t,n)||d(e,t,n)};l(e,t,n)}}function y(e){return\"color: \"+F[e].color+\"; font-weight: bold\"}function v(e){var t=e.kind,r=e.path,n=e.lhs,o=e.rhs,i=e.index,a=e.item;switch(t){case\"E\":return[r.join(\".\"),n,\"→\",o];case\"N\":return[r.join(\".\"),o];case\"D\":return[r.join(\".\")];case\"A\":return[r.join(\".\")+\"[\"+i+\"]\",a];default:return[]}}function b(e,t,r,n){var o=c(e,t);try{n?r.groupCollapsed(\"diff\"):r.group(\"diff\")}catch(e){r.log(\"diff\")}o?o.forEach(function(e){var t=e.kind,n=v(e);r.log.apply(r,[\"%c \"+F[t].text,y(t)].concat(P(n)))}):r.log(\"—— no diff ——\");try{r.groupEnd()}catch(e){r.log(\"—— diff end —— \")}}function m(e,t,r,n){switch(\"undefined\"==typeof e?\"undefined\":N(e)){case\"object\":return\"function\"==typeof e[n]?e[n].apply(e,P(r)):e[n];case\"function\":return e(t);default:return e}}function w(e){var t=e.timestamp,r=e.duration;return function(e,n,o){var i=[\"action\"];return i.push(\"%c\"+String(e.type)),t&&i.push(\"%c@ \"+n),r&&i.push(\"%c(in \"+o.toFixed(2)+\" ms)\"),i.join(\" \")}}function x(e,t){var r=t.logger,n=t.actionTransformer,o=t.titleFormatter,i=void 0===o?w(t):o,a=t.collapsed,f=t.colors,u=t.level,l=t.diff,c=\"undefined\"==typeof t.titleFormatter;e.forEach(function(o,s){var d=o.started,p=o.startedTime,g=o.action,h=o.prevState,y=o.error,v=o.took,w=o.nextState,x=e[s+1];x&&(w=x.prevState,v=x.started-d);var S=n(g),k=\"function\"==typeof a?a(function(){return w},g,o):a,j=D(p),E=f.title?\"color: \"+f.title(S)+\";\":\"\",A=[\"color: gray; font-weight: lighter;\"];A.push(E),t.timestamp&&A.push(\"color: gray; font-weight: lighter;\"),t.duration&&A.push(\"color: gray; font-weight: lighter;\");var O=i(S,j,v);try{k?f.title&&c?r.groupCollapsed.apply(r,[\"%c \"+O].concat(A)):r.groupCollapsed(O):f.title&&c?r.group.apply(r,[\"%c \"+O].concat(A)):r.group(O)}catch(e){r.log(O)}var N=m(u,S,[h],\"prevState\"),P=m(u,S,[S],\"action\"),C=m(u,S,[y,h],\"error\"),F=m(u,S,[w],\"nextState\");if(N)if(f.prevState){var L=\"color: \"+f.prevState(h)+\"; font-weight: bold\";r[N](\"%c prev state\",L,h)}else r[N](\"prev state\",h);if(P)if(f.action){var T=\"color: \"+f.action(S)+\"; font-weight: bold\";r[P](\"%c action    \",T,S)}else r[P](\"action    \",S);if(y&&C)if(f.error){var M=\"color: \"+f.error(y,h)+\"; font-weight: bold;\";r[C](\"%c error     \",M,y)}else r[C](\"error     \",y);if(F)if(f.nextState){var _=\"color: \"+f.nextState(w)+\"; font-weight: bold\";r[F](\"%c next state\",_,w)}else r[F](\"next state\",w);l&&b(h,w,r,k);try{r.groupEnd()}catch(e){r.log(\"—— log end ——\")}})}function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},L,e),r=t.logger,n=t.stateTransformer,o=t.errorTransformer,i=t.predicate,a=t.logErrors,f=t.diffPredicate;if(\"undefined\"==typeof r)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error(\"[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\\n// Logger with default options\\nimport { logger } from 'redux-logger'\\nconst store = createStore(\\n  reducer,\\n  applyMiddleware(logger)\\n)\\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\\nimport createLogger from 'redux-logger'\\nconst logger = createLogger({\\n  // ...options\\n});\\nconst store = createStore(\\n  reducer,\\n  applyMiddleware(logger)\\n)\\n\"),function(){return function(e){return function(t){return e(t)}}};var u=[];return function(e){var r=e.getState;return function(e){return function(l){if(\"function\"==typeof i&&!i(r,l))return e(l);var c={};u.push(c),c.started=O.now(),c.startedTime=new Date,c.prevState=n(r()),c.action=l;var s=void 0;if(a)try{s=e(l)}catch(e){c.error=o(e)}else s=e(l);c.took=O.now()-c.started,c.nextState=n(r());var d=t.diff&&\"function\"==typeof f?f(r,l):t.diff;if(x(u,Object.assign({},t,{diff:d})),u.length=0,c.error)throw c.error;return s}}}}var k,j,E=function(e,t){return new Array(t+1).join(e)},A=function(e,t){return E(\"0\",t-e.toString().length)+e},D=function(e){return A(e.getHours(),2)+\":\"+A(e.getMinutes(),2)+\":\"+A(e.getSeconds(),2)+\".\"+A(e.getMilliseconds(),3)},O=\"undefined\"!=typeof performance&&null!==performance&&\"function\"==typeof performance.now?performance:Date,N=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&\"function\"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?\"symbol\":typeof e},P=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)},C=[];k=\"object\"===(\"undefined\"==typeof global?\"undefined\":N(global))&&global?global:\"undefined\"!=typeof window?window:{},j=k.DeepDiff,j&&C.push(function(){\"undefined\"!=typeof j&&k.DeepDiff===c&&(k.DeepDiff=j,j=void 0)}),t(n,r),t(o,r),t(i,r),t(a,r),Object.defineProperties(c,{diff:{value:c,enumerable:!0},observableDiff:{value:l,enumerable:!0},applyDiff:{value:h,enumerable:!0},applyChange:{value:d,enumerable:!0},revertChange:{value:g,enumerable:!0},isConflict:{value:function(){return\"undefined\"!=typeof j},enumerable:!0},noConflict:{value:function(){return C&&(C.forEach(function(e){e()}),C=null),c},enumerable:!0}});var F={E:{color:\"#2196F3\",text:\"CHANGED:\"},N:{color:\"#4CAF50\",text:\"ADDED:\"},D:{color:\"#F44336\",text:\"DELETED:\"},A:{color:\"#2196F3\",text:\"ARRAY:\"}},L={level:\"log\",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return\"inherit\"},prevState:function(){return\"#9E9E9E\"},action:function(){return\"#03A9F4\"},nextState:function(){return\"#4CAF50\"},error:function(){return\"#F20404\"}},diff:!1,diffPredicate:void 0,transformer:void 0},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,r=e.getState;return\"function\"==typeof t||\"function\"==typeof r?S()({dispatch:t,getState:r}):void console.error(\"\\n[redux-logger v3] BREAKING CHANGE\\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\\n[redux-logger v3] Change\\n[redux-logger v3] import createLogger from 'redux-logger'\\n[redux-logger v3] to\\n[redux-logger v3] import { createLogger } from 'redux-logger'\\n\")};e.defaults=L,e.createLogger=S,e.logger=T,e.default=T,Object.defineProperty(e,\"__esModule\",{value:!0})});\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/redux-logger/dist/redux-logger.js?");

/***/ }),

/***/ "./node_modules/redux-thunk/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/redux-thunk/es/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction createThunkMiddleware(extraArgument) {\n  return function (_ref) {\n    var dispatch = _ref.dispatch,\n        getState = _ref.getState;\n    return function (next) {\n      return function (action) {\n        if (typeof action === 'function') {\n          return action(dispatch, getState, extraArgument);\n        }\n\n        return next(action);\n      };\n    };\n  };\n}\n\nvar thunk = createThunkMiddleware();\nthunk.withExtraArgument = createThunkMiddleware;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (thunk);\n\n//# sourceURL=webpack:///./node_modules/redux-thunk/es/index.js?");

/***/ }),

/***/ "./node_modules/redux/es/redux.js":
/*!****************************************!*\
  !*** ./node_modules/redux/es/redux.js ***!
  \****************************************/
/*! exports provided: __DO_NOT_USE__ActionTypes, applyMiddleware, bindActionCreators, combineReducers, compose, createStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__DO_NOT_USE__ActionTypes\", function() { return ActionTypes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"applyMiddleware\", function() { return applyMiddleware; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bindActionCreators\", function() { return bindActionCreators; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"combineReducers\", function() { return combineReducers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"compose\", function() { return compose; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createStore\", function() { return createStore; });\n/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! symbol-observable */ \"./node_modules/symbol-observable/es/index.js\");\n\n\n/**\n * These are private action types reserved by Redux.\n * For any unknown actions, you must return the current state.\n * If the current state is undefined, you must return the initial state.\n * Do not reference these action types directly in your code.\n */\nvar randomString = function randomString() {\n  return Math.random().toString(36).substring(7).split('').join('.');\n};\n\nvar ActionTypes = {\n  INIT: \"@@redux/INIT\" + randomString(),\n  REPLACE: \"@@redux/REPLACE\" + randomString(),\n  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {\n    return \"@@redux/PROBE_UNKNOWN_ACTION\" + randomString();\n  }\n};\n\n/**\n * @param {any} obj The object to inspect.\n * @returns {boolean} True if the argument appears to be a plain object.\n */\nfunction isPlainObject(obj) {\n  if (typeof obj !== 'object' || obj === null) return false;\n  var proto = obj;\n\n  while (Object.getPrototypeOf(proto) !== null) {\n    proto = Object.getPrototypeOf(proto);\n  }\n\n  return Object.getPrototypeOf(obj) === proto;\n}\n\n/**\n * Creates a Redux store that holds the state tree.\n * The only way to change the data in the store is to call `dispatch()` on it.\n *\n * There should only be a single store in your app. To specify how different\n * parts of the state tree respond to actions, you may combine several reducers\n * into a single reducer function by using `combineReducers`.\n *\n * @param {Function} reducer A function that returns the next state tree, given\n * the current state tree and the action to handle.\n *\n * @param {any} [preloadedState] The initial state. You may optionally specify it\n * to hydrate the state from the server in universal apps, or to restore a\n * previously serialized user session.\n * If you use `combineReducers` to produce the root reducer function, this must be\n * an object with the same shape as `combineReducers` keys.\n *\n * @param {Function} [enhancer] The store enhancer. You may optionally specify it\n * to enhance the store with third-party capabilities such as middleware,\n * time travel, persistence, etc. The only store enhancer that ships with Redux\n * is `applyMiddleware()`.\n *\n * @returns {Store} A Redux store that lets you read the state, dispatch actions\n * and subscribe to changes.\n */\n\nfunction createStore(reducer, preloadedState, enhancer) {\n  var _ref2;\n\n  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {\n    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function.');\n  }\n\n  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {\n    enhancer = preloadedState;\n    preloadedState = undefined;\n  }\n\n  if (typeof enhancer !== 'undefined') {\n    if (typeof enhancer !== 'function') {\n      throw new Error('Expected the enhancer to be a function.');\n    }\n\n    return enhancer(createStore)(reducer, preloadedState);\n  }\n\n  if (typeof reducer !== 'function') {\n    throw new Error('Expected the reducer to be a function.');\n  }\n\n  var currentReducer = reducer;\n  var currentState = preloadedState;\n  var currentListeners = [];\n  var nextListeners = currentListeners;\n  var isDispatching = false;\n  /**\n   * This makes a shallow copy of currentListeners so we can use\n   * nextListeners as a temporary list while dispatching.\n   *\n   * This prevents any bugs around consumers calling\n   * subscribe/unsubscribe in the middle of a dispatch.\n   */\n\n  function ensureCanMutateNextListeners() {\n    if (nextListeners === currentListeners) {\n      nextListeners = currentListeners.slice();\n    }\n  }\n  /**\n   * Reads the state tree managed by the store.\n   *\n   * @returns {any} The current state tree of your application.\n   */\n\n\n  function getState() {\n    if (isDispatching) {\n      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');\n    }\n\n    return currentState;\n  }\n  /**\n   * Adds a change listener. It will be called any time an action is dispatched,\n   * and some part of the state tree may potentially have changed. You may then\n   * call `getState()` to read the current state tree inside the callback.\n   *\n   * You may call `dispatch()` from a change listener, with the following\n   * caveats:\n   *\n   * 1. The subscriptions are snapshotted just before every `dispatch()` call.\n   * If you subscribe or unsubscribe while the listeners are being invoked, this\n   * will not have any effect on the `dispatch()` that is currently in progress.\n   * However, the next `dispatch()` call, whether nested or not, will use a more\n   * recent snapshot of the subscription list.\n   *\n   * 2. The listener should not expect to see all state changes, as the state\n   * might have been updated multiple times during a nested `dispatch()` before\n   * the listener is called. It is, however, guaranteed that all subscribers\n   * registered before the `dispatch()` started will be called with the latest\n   * state by the time it exits.\n   *\n   * @param {Function} listener A callback to be invoked on every dispatch.\n   * @returns {Function} A function to remove this change listener.\n   */\n\n\n  function subscribe(listener) {\n    if (typeof listener !== 'function') {\n      throw new Error('Expected the listener to be a function.');\n    }\n\n    if (isDispatching) {\n      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');\n    }\n\n    var isSubscribed = true;\n    ensureCanMutateNextListeners();\n    nextListeners.push(listener);\n    return function unsubscribe() {\n      if (!isSubscribed) {\n        return;\n      }\n\n      if (isDispatching) {\n        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');\n      }\n\n      isSubscribed = false;\n      ensureCanMutateNextListeners();\n      var index = nextListeners.indexOf(listener);\n      nextListeners.splice(index, 1);\n      currentListeners = null;\n    };\n  }\n  /**\n   * Dispatches an action. It is the only way to trigger a state change.\n   *\n   * The `reducer` function, used to create the store, will be called with the\n   * current state tree and the given `action`. Its return value will\n   * be considered the **next** state of the tree, and the change listeners\n   * will be notified.\n   *\n   * The base implementation only supports plain object actions. If you want to\n   * dispatch a Promise, an Observable, a thunk, or something else, you need to\n   * wrap your store creating function into the corresponding middleware. For\n   * example, see the documentation for the `redux-thunk` package. Even the\n   * middleware will eventually dispatch plain object actions using this method.\n   *\n   * @param {Object} action A plain object representing “what changed”. It is\n   * a good idea to keep actions serializable so you can record and replay user\n   * sessions, or use the time travelling `redux-devtools`. An action must have\n   * a `type` property which may not be `undefined`. It is a good idea to use\n   * string constants for action types.\n   *\n   * @returns {Object} For convenience, the same action object you dispatched.\n   *\n   * Note that, if you use a custom middleware, it may wrap `dispatch()` to\n   * return something else (for example, a Promise you can await).\n   */\n\n\n  function dispatch(action) {\n    if (!isPlainObject(action)) {\n      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');\n    }\n\n    if (typeof action.type === 'undefined') {\n      throw new Error('Actions may not have an undefined \"type\" property. ' + 'Have you misspelled a constant?');\n    }\n\n    if (isDispatching) {\n      throw new Error('Reducers may not dispatch actions.');\n    }\n\n    try {\n      isDispatching = true;\n      currentState = currentReducer(currentState, action);\n    } finally {\n      isDispatching = false;\n    }\n\n    var listeners = currentListeners = nextListeners;\n\n    for (var i = 0; i < listeners.length; i++) {\n      var listener = listeners[i];\n      listener();\n    }\n\n    return action;\n  }\n  /**\n   * Replaces the reducer currently used by the store to calculate the state.\n   *\n   * You might need this if your app implements code splitting and you want to\n   * load some of the reducers dynamically. You might also need this if you\n   * implement a hot reloading mechanism for Redux.\n   *\n   * @param {Function} nextReducer The reducer for the store to use instead.\n   * @returns {void}\n   */\n\n\n  function replaceReducer(nextReducer) {\n    if (typeof nextReducer !== 'function') {\n      throw new Error('Expected the nextReducer to be a function.');\n    }\n\n    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.\n    // Any reducers that existed in both the new and old rootReducer\n    // will receive the previous state. This effectively populates\n    // the new state tree with any relevant data from the old one.\n\n    dispatch({\n      type: ActionTypes.REPLACE\n    });\n  }\n  /**\n   * Interoperability point for observable/reactive libraries.\n   * @returns {observable} A minimal observable of state changes.\n   * For more information, see the observable proposal:\n   * https://github.com/tc39/proposal-observable\n   */\n\n\n  function observable() {\n    var _ref;\n\n    var outerSubscribe = subscribe;\n    return _ref = {\n      /**\n       * The minimal observable subscription method.\n       * @param {Object} observer Any object that can be used as an observer.\n       * The observer object should have a `next` method.\n       * @returns {subscription} An object with an `unsubscribe` method that can\n       * be used to unsubscribe the observable from the store, and prevent further\n       * emission of values from the observable.\n       */\n      subscribe: function subscribe(observer) {\n        if (typeof observer !== 'object' || observer === null) {\n          throw new TypeError('Expected the observer to be an object.');\n        }\n\n        function observeState() {\n          if (observer.next) {\n            observer.next(getState());\n          }\n        }\n\n        observeState();\n        var unsubscribe = outerSubscribe(observeState);\n        return {\n          unsubscribe: unsubscribe\n        };\n      }\n    }, _ref[symbol_observable__WEBPACK_IMPORTED_MODULE_0__[\"default\"]] = function () {\n      return this;\n    }, _ref;\n  } // When a store is created, an \"INIT\" action is dispatched so that every\n  // reducer returns their initial state. This effectively populates\n  // the initial state tree.\n\n\n  dispatch({\n    type: ActionTypes.INIT\n  });\n  return _ref2 = {\n    dispatch: dispatch,\n    subscribe: subscribe,\n    getState: getState,\n    replaceReducer: replaceReducer\n  }, _ref2[symbol_observable__WEBPACK_IMPORTED_MODULE_0__[\"default\"]] = observable, _ref2;\n}\n\n/**\n * Prints a warning in the console if it exists.\n *\n * @param {String} message The warning message.\n * @returns {void}\n */\nfunction warning(message) {\n  /* eslint-disable no-console */\n  if (typeof console !== 'undefined' && typeof console.error === 'function') {\n    console.error(message);\n  }\n  /* eslint-enable no-console */\n\n\n  try {\n    // This error was thrown as a convenience so that if you enable\n    // \"break on all exceptions\" in your console,\n    // it would pause the execution at this line.\n    throw new Error(message);\n  } catch (e) {} // eslint-disable-line no-empty\n\n}\n\nfunction getUndefinedStateErrorMessage(key, action) {\n  var actionType = action && action.type;\n  var actionDescription = actionType && \"action \\\"\" + String(actionType) + \"\\\"\" || 'an action';\n  return \"Given \" + actionDescription + \", reducer \\\"\" + key + \"\\\" returned undefined. \" + \"To ignore an action, you must explicitly return the previous state. \" + \"If you want this reducer to hold no value, you can return null instead of undefined.\";\n}\n\nfunction getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {\n  var reducerKeys = Object.keys(reducers);\n  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';\n\n  if (reducerKeys.length === 0) {\n    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';\n  }\n\n  if (!isPlainObject(inputState)) {\n    return \"The \" + argumentName + \" has unexpected type of \\\"\" + {}.toString.call(inputState).match(/\\s([a-z|A-Z]+)/)[1] + \"\\\". Expected argument to be an object with the following \" + (\"keys: \\\"\" + reducerKeys.join('\", \"') + \"\\\"\");\n  }\n\n  var unexpectedKeys = Object.keys(inputState).filter(function (key) {\n    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];\n  });\n  unexpectedKeys.forEach(function (key) {\n    unexpectedKeyCache[key] = true;\n  });\n  if (action && action.type === ActionTypes.REPLACE) return;\n\n  if (unexpectedKeys.length > 0) {\n    return \"Unexpected \" + (unexpectedKeys.length > 1 ? 'keys' : 'key') + \" \" + (\"\\\"\" + unexpectedKeys.join('\", \"') + \"\\\" found in \" + argumentName + \". \") + \"Expected to find one of the known reducer keys instead: \" + (\"\\\"\" + reducerKeys.join('\", \"') + \"\\\". Unexpected keys will be ignored.\");\n  }\n}\n\nfunction assertReducerShape(reducers) {\n  Object.keys(reducers).forEach(function (key) {\n    var reducer = reducers[key];\n    var initialState = reducer(undefined, {\n      type: ActionTypes.INIT\n    });\n\n    if (typeof initialState === 'undefined') {\n      throw new Error(\"Reducer \\\"\" + key + \"\\\" returned undefined during initialization. \" + \"If the state passed to the reducer is undefined, you must \" + \"explicitly return the initial state. The initial state may \" + \"not be undefined. If you don't want to set a value for this reducer, \" + \"you can use null instead of undefined.\");\n    }\n\n    if (typeof reducer(undefined, {\n      type: ActionTypes.PROBE_UNKNOWN_ACTION()\n    }) === 'undefined') {\n      throw new Error(\"Reducer \\\"\" + key + \"\\\" returned undefined when probed with a random type. \" + (\"Don't try to handle \" + ActionTypes.INIT + \" or other actions in \\\"redux/*\\\" \") + \"namespace. They are considered private. Instead, you must return the \" + \"current state for any unknown actions, unless it is undefined, \" + \"in which case you must return the initial state, regardless of the \" + \"action type. The initial state may not be undefined, but can be null.\");\n    }\n  });\n}\n/**\n * Turns an object whose values are different reducer functions, into a single\n * reducer function. It will call every child reducer, and gather their results\n * into a single state object, whose keys correspond to the keys of the passed\n * reducer functions.\n *\n * @param {Object} reducers An object whose values correspond to different\n * reducer functions that need to be combined into one. One handy way to obtain\n * it is to use ES6 `import * as reducers` syntax. The reducers may never return\n * undefined for any action. Instead, they should return their initial state\n * if the state passed to them was undefined, and the current state for any\n * unrecognized action.\n *\n * @returns {Function} A reducer function that invokes every reducer inside the\n * passed object, and builds a state object with the same shape.\n */\n\n\nfunction combineReducers(reducers) {\n  var reducerKeys = Object.keys(reducers);\n  var finalReducers = {};\n\n  for (var i = 0; i < reducerKeys.length; i++) {\n    var key = reducerKeys[i];\n\n    if (true) {\n      if (typeof reducers[key] === 'undefined') {\n        warning(\"No reducer provided for key \\\"\" + key + \"\\\"\");\n      }\n    }\n\n    if (typeof reducers[key] === 'function') {\n      finalReducers[key] = reducers[key];\n    }\n  }\n\n  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same\n  // keys multiple times.\n\n  var unexpectedKeyCache;\n\n  if (true) {\n    unexpectedKeyCache = {};\n  }\n\n  var shapeAssertionError;\n\n  try {\n    assertReducerShape(finalReducers);\n  } catch (e) {\n    shapeAssertionError = e;\n  }\n\n  return function combination(state, action) {\n    if (state === void 0) {\n      state = {};\n    }\n\n    if (shapeAssertionError) {\n      throw shapeAssertionError;\n    }\n\n    if (true) {\n      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);\n\n      if (warningMessage) {\n        warning(warningMessage);\n      }\n    }\n\n    var hasChanged = false;\n    var nextState = {};\n\n    for (var _i = 0; _i < finalReducerKeys.length; _i++) {\n      var _key = finalReducerKeys[_i];\n      var reducer = finalReducers[_key];\n      var previousStateForKey = state[_key];\n      var nextStateForKey = reducer(previousStateForKey, action);\n\n      if (typeof nextStateForKey === 'undefined') {\n        var errorMessage = getUndefinedStateErrorMessage(_key, action);\n        throw new Error(errorMessage);\n      }\n\n      nextState[_key] = nextStateForKey;\n      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;\n    }\n\n    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;\n    return hasChanged ? nextState : state;\n  };\n}\n\nfunction bindActionCreator(actionCreator, dispatch) {\n  return function () {\n    return dispatch(actionCreator.apply(this, arguments));\n  };\n}\n/**\n * Turns an object whose values are action creators, into an object with the\n * same keys, but with every function wrapped into a `dispatch` call so they\n * may be invoked directly. This is just a convenience method, as you can call\n * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.\n *\n * For convenience, you can also pass an action creator as the first argument,\n * and get a dispatch wrapped function in return.\n *\n * @param {Function|Object} actionCreators An object whose values are action\n * creator functions. One handy way to obtain it is to use ES6 `import * as`\n * syntax. You may also pass a single function.\n *\n * @param {Function} dispatch The `dispatch` function available on your Redux\n * store.\n *\n * @returns {Function|Object} The object mimicking the original object, but with\n * every action creator wrapped into the `dispatch` call. If you passed a\n * function as `actionCreators`, the return value will also be a single\n * function.\n */\n\n\nfunction bindActionCreators(actionCreators, dispatch) {\n  if (typeof actionCreators === 'function') {\n    return bindActionCreator(actionCreators, dispatch);\n  }\n\n  if (typeof actionCreators !== 'object' || actionCreators === null) {\n    throw new Error(\"bindActionCreators expected an object or a function, instead received \" + (actionCreators === null ? 'null' : typeof actionCreators) + \". \" + \"Did you write \\\"import ActionCreators from\\\" instead of \\\"import * as ActionCreators from\\\"?\");\n  }\n\n  var boundActionCreators = {};\n\n  for (var key in actionCreators) {\n    var actionCreator = actionCreators[key];\n\n    if (typeof actionCreator === 'function') {\n      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);\n    }\n  }\n\n  return boundActionCreators;\n}\n\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nfunction ownKeys(object, enumerableOnly) {\n  var keys = Object.keys(object);\n\n  if (Object.getOwnPropertySymbols) {\n    keys.push.apply(keys, Object.getOwnPropertySymbols(object));\n  }\n\n  if (enumerableOnly) keys = keys.filter(function (sym) {\n    return Object.getOwnPropertyDescriptor(object, sym).enumerable;\n  });\n  return keys;\n}\n\nfunction _objectSpread2(target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i] != null ? arguments[i] : {};\n\n    if (i % 2) {\n      ownKeys(source, true).forEach(function (key) {\n        _defineProperty(target, key, source[key]);\n      });\n    } else if (Object.getOwnPropertyDescriptors) {\n      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));\n    } else {\n      ownKeys(source).forEach(function (key) {\n        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));\n      });\n    }\n  }\n\n  return target;\n}\n\n/**\n * Composes single-argument functions from right to left. The rightmost\n * function can take multiple arguments as it provides the signature for\n * the resulting composite function.\n *\n * @param {...Function} funcs The functions to compose.\n * @returns {Function} A function obtained by composing the argument functions\n * from right to left. For example, compose(f, g, h) is identical to doing\n * (...args) => f(g(h(...args))).\n */\nfunction compose() {\n  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {\n    funcs[_key] = arguments[_key];\n  }\n\n  if (funcs.length === 0) {\n    return function (arg) {\n      return arg;\n    };\n  }\n\n  if (funcs.length === 1) {\n    return funcs[0];\n  }\n\n  return funcs.reduce(function (a, b) {\n    return function () {\n      return a(b.apply(void 0, arguments));\n    };\n  });\n}\n\n/**\n * Creates a store enhancer that applies middleware to the dispatch method\n * of the Redux store. This is handy for a variety of tasks, such as expressing\n * asynchronous actions in a concise manner, or logging every action payload.\n *\n * See `redux-thunk` package as an example of the Redux middleware.\n *\n * Because middleware is potentially asynchronous, this should be the first\n * store enhancer in the composition chain.\n *\n * Note that each middleware will be given the `dispatch` and `getState` functions\n * as named arguments.\n *\n * @param {...Function} middlewares The middleware chain to be applied.\n * @returns {Function} A store enhancer applying the middleware.\n */\n\nfunction applyMiddleware() {\n  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {\n    middlewares[_key] = arguments[_key];\n  }\n\n  return function (createStore) {\n    return function () {\n      var store = createStore.apply(void 0, arguments);\n\n      var _dispatch = function dispatch() {\n        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');\n      };\n\n      var middlewareAPI = {\n        getState: store.getState,\n        dispatch: function dispatch() {\n          return _dispatch.apply(void 0, arguments);\n        }\n      };\n      var chain = middlewares.map(function (middleware) {\n        return middleware(middlewareAPI);\n      });\n      _dispatch = compose.apply(void 0, chain)(store.dispatch);\n      return _objectSpread2({}, store, {\n        dispatch: _dispatch\n      });\n    };\n  };\n}\n\n/*\n * This is a dummy function to check if the function name has been altered by minification.\n * If the function has been minified and NODE_ENV !== 'production', warn the user.\n */\n\nfunction isCrushed() {}\n\nif ( true && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {\n  warning('You are currently using minified code outside of NODE_ENV === \"production\". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');\n}\n\n\n\n\n//# sourceURL=webpack:///./node_modules/redux/es/redux.js?");

/***/ }),

/***/ "./node_modules/symbol-observable/es/index.js":
/*!****************************************************!*\
  !*** ./node_modules/symbol-observable/es/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ponyfill.js */ \"./node_modules/symbol-observable/es/ponyfill.js\");\n/* global window */\n\n\nvar root;\n\nif (typeof self !== 'undefined') {\n  root = self;\n} else if (typeof window !== 'undefined') {\n  root = window;\n} else if (typeof global !== 'undefined') {\n  root = global;\n} else if (true) {\n  root = module;\n} else {}\n\nvar result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(root);\n/* harmony default export */ __webpack_exports__[\"default\"] = (result);\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\"), __webpack_require__(/*! ./../../webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./node_modules/symbol-observable/es/index.js?");

/***/ }),

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
/*!*******************************************************!*\
  !*** ./node_modules/symbol-observable/es/ponyfill.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return symbolObservablePonyfill; });\nfunction symbolObservablePonyfill(root) {\n\tvar result;\n\tvar Symbol = root.Symbol;\n\n\tif (typeof Symbol === 'function') {\n\t\tif (Symbol.observable) {\n\t\t\tresult = Symbol.observable;\n\t\t} else {\n\t\t\tresult = Symbol('observable');\n\t\t\tSymbol.observable = result;\n\t\t}\n\t} else {\n\t\tresult = '@@observable';\n\t}\n\n\treturn result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/symbol-observable/es/ponyfill.js?");

/***/ }),

/***/ "./node_modules/to-camel-case/index.js":
/*!*********************************************!*\
  !*** ./node_modules/to-camel-case/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar space = __webpack_require__(/*! to-space-case */ \"./node_modules/to-space-case/index.js\")\n\n/**\n * Export.\n */\n\nmodule.exports = toCamelCase\n\n/**\n * Convert a `string` to camel case.\n *\n * @param {String} string\n * @return {String}\n */\n\nfunction toCamelCase(string) {\n  return space(string).replace(/\\s(\\w)/g, function (matches, letter) {\n    return letter.toUpperCase()\n  })\n}\n\n\n//# sourceURL=webpack:///./node_modules/to-camel-case/index.js?");

/***/ }),

/***/ "./node_modules/to-no-case/index.js":
/*!******************************************!*\
  !*** ./node_modules/to-no-case/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * Export.\n */\n\nmodule.exports = toNoCase\n\n/**\n * Test whether a string is camel-case.\n */\n\nvar hasSpace = /\\s/\nvar hasSeparator = /(_|-|\\.|:)/\nvar hasCamel = /([a-z][A-Z]|[A-Z][a-z])/\n\n/**\n * Remove any starting case from a `string`, like camel or snake, but keep\n * spaces and punctuation that may be important otherwise.\n *\n * @param {String} string\n * @return {String}\n */\n\nfunction toNoCase(string) {\n  if (hasSpace.test(string)) return string.toLowerCase()\n  if (hasSeparator.test(string)) return (unseparate(string) || string).toLowerCase()\n  if (hasCamel.test(string)) return uncamelize(string).toLowerCase()\n  return string.toLowerCase()\n}\n\n/**\n * Separator splitter.\n */\n\nvar separatorSplitter = /[\\W_]+(.|$)/g\n\n/**\n * Un-separate a `string`.\n *\n * @param {String} string\n * @return {String}\n */\n\nfunction unseparate(string) {\n  return string.replace(separatorSplitter, function (m, next) {\n    return next ? ' ' + next : ''\n  })\n}\n\n/**\n * Camelcase splitter.\n */\n\nvar camelSplitter = /(.)([A-Z]+)/g\n\n/**\n * Un-camelcase a `string`.\n *\n * @param {String} string\n * @return {String}\n */\n\nfunction uncamelize(string) {\n  return string.replace(camelSplitter, function (m, previous, uppers) {\n    return previous + ' ' + uppers.toLowerCase().split('').join(' ')\n  })\n}\n\n\n//# sourceURL=webpack:///./node_modules/to-no-case/index.js?");

/***/ }),

/***/ "./node_modules/to-space-case/index.js":
/*!*********************************************!*\
  !*** ./node_modules/to-space-case/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar clean = __webpack_require__(/*! to-no-case */ \"./node_modules/to-no-case/index.js\")\n\n/**\n * Export.\n */\n\nmodule.exports = toSpaceCase\n\n/**\n * Convert a `string` to space case.\n *\n * @param {String} string\n * @return {String}\n */\n\nfunction toSpaceCase(string) {\n  return clean(string).replace(/[\\W_]+(.|$)/g, function (matches, match) {\n    return match ? ' ' + match : ''\n  }).trim()\n}\n\n\n//# sourceURL=webpack:///./node_modules/to-space-case/index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./src/actions/tabActions.js":
/*!***********************************!*\
  !*** ./src/actions/tabActions.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-actions */ \"./node_modules/redux-actions/es/index.js\");\n\n\nconst mapTab = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__[\"createAction\"])('TAB_MAP');\nconst themesTab = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__[\"createAction\"])('TAB_THEMES');\nconst detailsTab = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__[\"createAction\"])('TAB_DETAILS');\n\nconst TabActions = {\n  mapTab,\n  themesTab,\n  detailsTab,\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TabActions);\n\n\n//# sourceURL=webpack:///./src/actions/tabActions.js?");

/***/ }),

/***/ "./src/actions/themeActions.js":
/*!*************************************!*\
  !*** ./src/actions/themeActions.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-actions */ \"./node_modules/redux-actions/es/index.js\");\n\n\nconst getThemes = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__[\"createAction\"])('GET_THEMES');\nconst addTheme = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__[\"createAction\"])('ADD_THEME');\nconst clearThemes = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__[\"createAction\"])('CLEAR_THEMES');\nconst selectTheme = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__[\"createAction\"])('SELECT_THEME');\n\nconst ThemeActions = {\n  getThemes,\n  addTheme,\n  clearThemes,\n  selectTheme,\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThemeActions);\n\n\n//# sourceURL=webpack:///./src/actions/themeActions.js?");

/***/ }),

/***/ "./src/components/button/index.js":
/*!****************************************!*\
  !*** ./src/components/button/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction renderButton(button) {\n  const component = document.createElement('button');\n  component.setAttribute('id', button.id);\n  component.innerHTML += button.name;\n  component.addEventListener('click', () => {\n    button.eventHandler();\n  });\n  return component;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderButton);\n\n\n//# sourceURL=webpack:///./src/components/button/index.js?");

/***/ }),

/***/ "./src/components/tabs/index.js":
/*!**************************************!*\
  !*** ./src/components/tabs/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/Button */ \"./src/models/Button.js\");\n/* harmony import */ var _actions_tabActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/tabActions */ \"./src/actions/tabActions.js\");\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button */ \"./src/components/button/index.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store */ \"./src/store.js\");\n\n\n\n\n\nfunction renderTabs(target = 'tabContainer') {\n  const tabsTemplate = document.createElement('div');\n\n  const themesButton = new _models_Button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Themes', 'theme_button', () => {\n    _store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].dispatch(_actions_tabActions__WEBPACK_IMPORTED_MODULE_1__[\"default\"].themesTab());\n  });\n  const mapButton = new _models_Button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Map', 'map_button', () => {\n    _store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].dispatch(_actions_tabActions__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mapTab());\n  });\n  const detailsButton = new _models_Button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Details', 'details_button', () => {\n    _store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].dispatch(_actions_tabActions__WEBPACK_IMPORTED_MODULE_1__[\"default\"].detailsTab());\n  });\n\n  tabsTemplate.appendChild(Object(_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(themesButton));\n  tabsTemplate.appendChild(Object(_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(mapButton));\n  tabsTemplate.appendChild(Object(_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(detailsButton));\n\n  const tabsContainer = document.getElementById(target);\n  tabsContainer.innerHTML = '';\n  tabsContainer.appendChild(tabsTemplate);\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderTabs);\n\n\n//# sourceURL=webpack:///./src/components/tabs/index.js?");

/***/ }),

/***/ "./src/components/themeItem/index.js":
/*!*******************************************!*\
  !*** ./src/components/themeItem/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_themeActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions/themeActions */ \"./src/actions/themeActions.js\");\n/* harmony import */ var _utilities_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/html */ \"./src/utilities/html.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store */ \"./src/store.js\");\n\n\n\n\n// eslint-disable-next-line no-unused-vars\nfunction handleSelectTheme(e) {\n  const { selectTheme } = _actions_themeActions__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  const themeName = e.getAttribute('data-name');\n  _store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].dispatch(selectTheme(themeName));\n}\n\nfunction themeItemComponent(theme) {\n  // a place to store the result of calling component on children of themeItem\n  const children = document.createElement('div');\n  children.setAttribute('class', 'children');\n\n  if (theme.children) {\n    theme.children.forEach((child) => {\n      children.appendChild(themeItemComponent(child));\n    });\n  }\n\n  const template = Object(_utilities_html__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(/* html */\n    `<div class=\"theme\">\n      <input class=\"theme-checkbox\" type=\"checkbox\" ${(theme.selected) ? 'checked' : ''}/>\n      <span class=\"theme-name\">${theme.name}</span>\n    </div>\n  `,\n  );\n\n  template.querySelector('.theme-name').addEventListener('click', () => {\n    _store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].dispatch(_actions_themeActions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].selectTheme(theme.name));\n  });\n  template.appendChild(children);\n  return template;\n}\n\nfunction renderThemes(themes) {\n  // clear rendered html first\n  const container = document.createElement('div');\n\n  if (themes) {\n    themes.forEach((theme) => {\n      container.appendChild(themeItemComponent(theme));\n    });\n  }\n\n  return container;\n}\nwindow.handleSelectTheme = handleSelectTheme;\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderThemes);\n\n\n//# sourceURL=webpack:///./src/components/themeItem/index.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_details__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/details */ \"./src/pages/details/index.js\");\n/* harmony import */ var _pages_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/map */ \"./src/pages/map/index.js\");\n/* harmony import */ var _components_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/tabs */ \"./src/components/tabs/index.js\");\n/* harmony import */ var _pages_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/themes */ \"./src/pages/themes/index.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store */ \"./src/store.js\");\n\n\n\n\n\n\nwindow.render = () => {\n  const { tab } = _store__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getState();\n  document.getElementById('pageContainer').innerHTML = '';\n  Object(_components_tabs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('tabContainer');\n  switch (tab) {\n    case 'themes':\n      Object(_pages_themes__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('pageContainer');\n      break;\n    case 'map':\n      Object(_pages_map__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('pageContainer');\n      break;\n    case 'details':\n      Object(_pages_details__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('pageContainer');\n      break;\n    default:\n  }\n};\n\nwindow.onload = () => {\n  _store__WEBPACK_IMPORTED_MODULE_4__[\"default\"].subscribe(window.render);\n  _store__WEBPACK_IMPORTED_MODULE_4__[\"default\"].dispatch({ type: 'new' });\n};\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/models/Button.js":
/*!******************************!*\
  !*** ./src/models/Button.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Button {\n  constructor(name, id, eventHandler) {\n    this.name = name;\n    this.id = id;\n    this.eventHandler = eventHandler;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);\n\n\n//# sourceURL=webpack:///./src/models/Button.js?");

/***/ }),

/***/ "./src/models/Theme.js":
/*!*****************************!*\
  !*** ./src/models/Theme.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Theme {\n  constructor(name, contacts = [], children = []) {\n    this.name = name;\n    this.contacts = contacts;\n    const local = this;\n\n    if (children) {\n      children.forEach((el) => {\n        const child = el;\n        child.parent = local;\n      });\n    }\n    this.children = children;\n  }\n\n  toggleSelected(value = null) {\n    const toToggle = this;\n    if (value == null) {\n      if (toToggle.selected === true) {\n        toToggle.selected = false;\n      } else {\n        toToggle.selected = true;\n      }\n    } else {\n      toToggle.selected = value;\n    }\n\n    if (toToggle.children) {\n      toToggle.children.forEach((child) => {\n        child.toggleSelected(toToggle.selected);\n      });\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Theme);\n\n\n//# sourceURL=webpack:///./src/models/Theme.js?");

/***/ }),

/***/ "./src/pages/details/index.js":
/*!************************************!*\
  !*** ./src/pages/details/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utilities_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/html */ \"./src/utilities/html.js\");\n\n/* eslint-disable operator-linebreak */\nfunction renderDetailsPage(target = 'pageContainer') {\n  // get the basic template HTML\n\n  const pageTemplate = _utilities_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"]`\n  <div class=\"map-page\">\n    <div id=\"themes-container\">\n      <p>I do believe I'm the details tab!</p>\n    </div>\n  </div>\n  `;\n\n  // parse it as html\n\n  const targetElement = document.getElementById(target);\n  targetElement.innerHTML = '';\n  targetElement.appendChild(pageTemplate);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderDetailsPage);\n\n\n//# sourceURL=webpack:///./src/pages/details/index.js?");

/***/ }),

/***/ "./src/pages/map/index.js":
/*!********************************!*\
  !*** ./src/pages/map/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utilities_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/html */ \"./src/utilities/html.js\");\n\n/* eslint-disable operator-linebreak */\nfunction renderMapPage(target = 'pageContainer') {\n  // get the basic template HTML\n  const pageTemplate = _utilities_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"]`\n  <div class=\"mapouter\">\n    <div class=\"gmap_canvas\">\n      <iframe width=\"600\" height=\"500\" id=\"gmap_canvas\" src=\"https://maps.google.com/maps?q=method4&t=&z=13&ie=UTF8&iwloc=&output=embed\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"></iframe>\n    </div>\n    <style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}\n    </style>\n  </div>\n  `;\n\n  const targetElement = document.getElementById(target);\n  targetElement.innerHTML = '';\n  targetElement.appendChild(pageTemplate);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderMapPage);\n\n\n//# sourceURL=webpack:///./src/pages/map/index.js?");

/***/ }),

/***/ "./src/pages/themes/index.js":
/*!***********************************!*\
  !*** ./src/pages/themes/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/Button */ \"./src/models/Button.js\");\n/* harmony import */ var _models_Theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/Theme */ \"./src/models/Theme.js\");\n/* harmony import */ var _actions_themeActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/themeActions */ \"./src/actions/themeActions.js\");\n/* harmony import */ var _utilities_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/html */ \"./src/utilities/html.js\");\n/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/button */ \"./src/components/button/index.js\");\n/* harmony import */ var _components_themeItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/themeItem */ \"./src/components/themeItem/index.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store */ \"./src/store.js\");\n/* eslint-disable operator-linebreak */\n\n\n\n\n\n\n\n\n/**\n * called whenever the page needs to be rendered\n */\n\nfunction renderThemesPage(target = 'pageContainer') {\n  const pageTemplate = _utilities_html__WEBPACK_IMPORTED_MODULE_3__[\"default\"]`\n  <div class=\"themes-page\">\n    <div class=\"button-container\"></div>\n    \n    <div id=\"content\"></div>\n    \n    <div id=\"themes-container\"></div>\n  </div>\n  `;\n\n  // get the buttons\n  const getThemes = new _models_Button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Get Themes', 'get_themes', () => {\n    const payload = new _models_Theme__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('new region');\n    _store__WEBPACK_IMPORTED_MODULE_6__[\"default\"].dispatch(_actions_themeActions__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getThemes(payload));\n  });\n\n  const clearThemes = new _models_Button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Clear Themes', 'clear_themes', () => {\n    _store__WEBPACK_IMPORTED_MODULE_6__[\"default\"].dispatch(_actions_themeActions__WEBPACK_IMPORTED_MODULE_2__[\"default\"].clearThemes());\n  });\n\n  const addTheme = new _models_Button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Add Themes', 'add_theme', () => {\n    const payload = new _models_Theme__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('new region');\n    _store__WEBPACK_IMPORTED_MODULE_6__[\"default\"].dispatch(_actions_themeActions__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addTheme(payload));\n  });\n  // add the buttons to the button container\n  const buttonContainer = pageTemplate.querySelector('.button-container');\n\n  buttonContainer.appendChild(Object(_components_button__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(getThemes));\n  buttonContainer.appendChild(Object(_components_button__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(clearThemes));\n  buttonContainer.appendChild(Object(_components_button__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(addTheme));\n  // get the page content (if there is any)\n  const content = pageTemplate.querySelector('#content');\n  const { themes } = _store__WEBPACK_IMPORTED_MODULE_6__[\"default\"].getState();\n  content.innerHTML = `${themes ? themes.length : 0} themes`;\n  const themesContainer = pageTemplate.querySelector('#themes-container');\n  themesContainer.innerHTML = '';\n  const renderedThemes = Object(_components_themeItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(themes);\n  themesContainer.appendChild(renderedThemes);\n  const targetElement = document.getElementById(target);\n  targetElement.innerHTML = '';\n  targetElement.appendChild(pageTemplate);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderThemesPage);\n\n\n//# sourceURL=webpack:///./src/pages/themes/index.js?");

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _tabReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabReducer */ \"./src/reducers/tabReducer.js\");\n/* harmony import */ var _themeReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./themeReducer */ \"./src/reducers/themeReducer.js\");\n\n\n\n\nconst rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({ themes: _themeReducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], tab: _tabReducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"] });\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);\n\n\n//# sourceURL=webpack:///./src/reducers/index.js?");

/***/ }),

/***/ "./src/reducers/tabReducer.js":
/*!************************************!*\
  !*** ./src/reducers/tabReducer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return tabReducer; });\nfunction tabReducer(state = 'map', action = {}) {\n  switch (action.type) {\n    case 'TAB_MAP':\n      return 'map';\n    case 'TAB_THEMES':\n      return 'themes';\n    case 'TAB_DETAILS':\n      return 'details';\n    default:\n      return state;\n  }\n}\n\n\n//# sourceURL=webpack:///./src/reducers/tabReducer.js?");

/***/ }),

/***/ "./src/reducers/themeReducer.js":
/*!**************************************!*\
  !*** ./src/reducers/themeReducer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _themes_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../themes-data */ \"./src/themes-data.js\");\n\n\nfunction findTargetTheme(name, themes) {\n  // while there are still themes and we haven't found the answer\n  for (let i = 0; i < themes.length; i += 1) {\n    // get the current theme\n    const theme = themes[i];\n    // check if it matches\n    if (theme.name !== name) {\n      // if the theme has children iterate them aswell\n      if (theme.children) {\n        // otherwise check its children\n        const el = findTargetTheme(name, theme.children);\n        if (el) {\n          return el;\n        }\n      }\n    } else {\n      return theme;\n    }\n  }\n  return null;\n}\n\nfunction selectTheme(state, payload) {\n  const currentThemes = [...state];\n  const targetTheme = findTargetTheme(payload, currentThemes);\n  if (targetTheme != null) {\n    targetTheme.toggleSelected();\n    return [...currentThemes];\n  }\n  return state;\n}\n\nfunction themeReducer(state = [], action = {}) {\n  switch (action.type) {\n    case 'GET_THEMES':\n      return [..._themes_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"]];\n    case 'CLEAR_THEMES':\n      return [];\n    case 'ADD_THEME':\n      return [...state, action.payload];\n    case 'SELECT_THEME':\n      selectTheme(state, action.payload);\n      return state;\n    default:\n      return state;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (themeReducer);\n\n\n//# sourceURL=webpack:///./src/reducers/themeReducer.js?");

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ \"./node_modules/redux-devtools-extension/index.js\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-logger */ \"./node_modules/redux-logger/dist/redux-logger.js\");\n/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers */ \"./src/reducers/index.js\");\n\n\n\n\n\n\n\nconst defaultState = {\n  themes: [],\n};\n\n// sets up a logging instance which will log actions to the console\n// TODO: set up so this does not occur on production\nconst logger = Object(redux_logger__WEBPACK_IMPORTED_MODULE_3__[\"createLogger\"])({});\n\n// create an array of all the middleware we're going to use with the store\nconst middleware = [\n  redux_thunk__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  logger,\n];\n\n// hooks into the redux dev tools extension\nconst composeEnhancers = Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__[\"composeWithDevTools\"])({});\n\nconst store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(\n  _reducers__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  defaultState,\n  composeEnhancers(\n    Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(...middleware),\n  ),\n);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (store);\n\n\n//# sourceURL=webpack:///./src/store.js?");

/***/ }),

/***/ "./src/themes-data.js":
/*!****************************!*\
  !*** ./src/themes-data.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_Theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/Theme */ \"./src/models/Theme.js\");\n\n\nconst urban = new _models_Theme__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Urban', ['Peter Frost']);\nconst enclosedFarmland = new _models_Theme__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Enclosed Farmland', ['Nicola Taylor', 'Melanie Meadon']);\n\n// create a nested theme for freshwater\nconst fisheries = new _models_Theme__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Fisheries');\n// add a nested theme to a theme\nconst freshWater = new _models_Theme__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Freshwater', ['John Clark', 'Rob Blacklidge'], [fisheries]);\n\n// create nesteed themes for healthyPlaces\nconst peopleAndTheEnvironment = new _models_Theme__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('People & the Environment');\nconst healthRecreationAndWellbeing = new _models_Theme__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Health Recreation & Wellbeing', ['Heather Crump', 'Ros Owen', 'Susan Williams']);\nconst attitudesAndBehaviours = new _models_Theme__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Attitudes & Behaviours');\nconst geoDiversity = new _models_Theme__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Geodiversity', ['Raymond Roberts']);\nconst healthyPlaces = new _models_Theme__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Healthy Places', [], [\n  peopleAndTheEnvironment,\n  healthRecreationAndWellbeing,\n  attitudesAndBehaviours,\n  geoDiversity,\n]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([\n  urban,\n  enclosedFarmland,\n  freshWater,\n  healthyPlaces,\n]);\n\n\n//# sourceURL=webpack:///./src/themes-data.js?");

/***/ }),

/***/ "./src/utilities/html.js":
/*!*******************************!*\
  !*** ./src/utilities/html.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return html; });\nfunction html(template) {\n  const res = new DOMParser().parseFromString(template, 'text/html');\n  const element = [...res.body.children][0];\n  return element;\n}\n\n\n//# sourceURL=webpack:///./src/utilities/html.js?");

/***/ })

/******/ });