(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 82);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _splice = __webpack_require__(249);

var _splice2 = _interopRequireDefault(_splice);

var _getIn = __webpack_require__(246);

var _getIn2 = _interopRequireDefault(_getIn);

var _setIn = __webpack_require__(248);

var _setIn2 = _interopRequireDefault(_setIn);

var _deepEqual = __webpack_require__(244);

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _deleteIn = __webpack_require__(245);

var _deleteIn2 = _interopRequireDefault(_deleteIn);

var _keys = __webpack_require__(247);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var structure = {
  allowsArrayErrors: true,
  empty: {},
  emptyList: [],
  getIn: _getIn2.default,
  setIn: _setIn2.default,
  deepEqual: _deepEqual2.default,
  deleteIn: _deleteIn2.default,
  fromJS: function fromJS(value) {
    return value;
  },
  keys: _keys2.default,
  size: function size(array) {
    return array ? array.length : 0;
  },
  splice: _splice2.default,
  toJS: function toJS(value) {
    return value;
  }
};

exports.default = structure;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("./vendor");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(5);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(96);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(220);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(151);

/***/ }),
/* 7 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(153);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(111),
    getValue = __webpack_require__(141);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(221);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(21);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.untouch = exports.unregisterField = exports.touch = exports.submit = exports.stopSubmit = exports.stopAsyncValidation = exports.startSubmit = exports.startAsyncValidation = exports.setSubmitSucceeded = exports.setSubmitFailed = exports.reset = exports.registerField = exports.initialize = exports.focus = exports.destroy = exports.clearSubmitErrors = exports.change = exports.blur = exports.autofill = exports.arrayUnshift = exports.arraySwap = exports.arraySplice = exports.arrayShift = exports.arrayRemoveAll = exports.arrayRemove = exports.arrayPush = exports.arrayPop = exports.arrayMove = exports.arrayInsert = exports.actions = exports.actionTypes = exports.values = exports.reducer = exports.reduxForm = exports.hasSubmitFailed = exports.hasSubmitSucceeded = exports.isSubmitting = exports.isValid = exports.isPristine = exports.isInvalid = exports.isDirty = exports.getFormSubmitErrors = exports.getFormSyncWarnings = exports.getFormAsyncErrors = exports.getFormMeta = exports.getFormSyncErrors = exports.getFormInitialValues = exports.getFormValues = exports.getFormNames = exports.formValueSelector = exports.FieldArray = exports.Fields = exports.Field = exports.fieldPropTypes = exports.fieldMetaPropTypes = exports.fieldInputPropTypes = exports.propTypes = exports.SubmissionError = exports.FormSection = exports.Form = exports.defaultShouldValidate = exports.defaultShouldAsyncValidate = undefined;

var _defaultShouldAsyncValidate = __webpack_require__(69);

Object.defineProperty(exports, 'defaultShouldAsyncValidate', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_defaultShouldAsyncValidate).default;
  }
});

var _defaultShouldValidate = __webpack_require__(70);

Object.defineProperty(exports, 'defaultShouldValidate', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_defaultShouldValidate).default;
  }
});

var _Form = __webpack_require__(194);

Object.defineProperty(exports, 'Form', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Form).default;
  }
});

var _FormSection = __webpack_require__(195);

Object.defineProperty(exports, 'FormSection', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_FormSection).default;
  }
});

var _SubmissionError = __webpack_require__(66);

Object.defineProperty(exports, 'SubmissionError', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SubmissionError).default;
  }
});

var _propTypes = __webpack_require__(228);

Object.defineProperty(exports, 'propTypes', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_propTypes).default;
  }
});
Object.defineProperty(exports, 'fieldInputPropTypes', {
  enumerable: true,
  get: function get() {
    return _propTypes.fieldInputPropTypes;
  }
});
Object.defineProperty(exports, 'fieldMetaPropTypes', {
  enumerable: true,
  get: function get() {
    return _propTypes.fieldMetaPropTypes;
  }
});
Object.defineProperty(exports, 'fieldPropTypes', {
  enumerable: true,
  get: function get() {
    return _propTypes.fieldPropTypes;
  }
});

var _Field = __webpack_require__(191);

Object.defineProperty(exports, 'Field', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Field).default;
  }
});

var _Fields = __webpack_require__(193);

Object.defineProperty(exports, 'Fields', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Fields).default;
  }
});

var _FieldArray = __webpack_require__(192);

Object.defineProperty(exports, 'FieldArray', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_FieldArray).default;
  }
});

var _formValueSelector = __webpack_require__(208);

Object.defineProperty(exports, 'formValueSelector', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_formValueSelector).default;
  }
});

var _getFormNames = __webpack_require__(213);

Object.defineProperty(exports, 'getFormNames', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_getFormNames).default;
  }
});

var _getFormValues = __webpack_require__(217);

Object.defineProperty(exports, 'getFormValues', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_getFormValues).default;
  }
});

var _getFormInitialValues = __webpack_require__(211);

Object.defineProperty(exports, 'getFormInitialValues', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_getFormInitialValues).default;
  }
});

var _getFormSyncErrors = __webpack_require__(215);

Object.defineProperty(exports, 'getFormSyncErrors', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_getFormSyncErrors).default;
  }
});

var _getFormMeta = __webpack_require__(212);

Object.defineProperty(exports, 'getFormMeta', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_getFormMeta).default;
  }
});

var _getFormAsyncErrors = __webpack_require__(210);

Object.defineProperty(exports, 'getFormAsyncErrors', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_getFormAsyncErrors).default;
  }
});

var _getFormSyncWarnings = __webpack_require__(216);

Object.defineProperty(exports, 'getFormSyncWarnings', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_getFormSyncWarnings).default;
  }
});

var _getFormSubmitErrors = __webpack_require__(214);

Object.defineProperty(exports, 'getFormSubmitErrors', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_getFormSubmitErrors).default;
  }
});

var _isDirty = __webpack_require__(222);

Object.defineProperty(exports, 'isDirty', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isDirty).default;
  }
});

var _isInvalid = __webpack_require__(223);

Object.defineProperty(exports, 'isInvalid', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isInvalid).default;
  }
});

var _isPristine = __webpack_require__(224);

Object.defineProperty(exports, 'isPristine', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isPristine).default;
  }
});

var _isValid = __webpack_require__(227);

Object.defineProperty(exports, 'isValid', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isValid).default;
  }
});

var _isSubmitting = __webpack_require__(226);

Object.defineProperty(exports, 'isSubmitting', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isSubmitting).default;
  }
});

var _hasSubmitSucceeded = __webpack_require__(221);

Object.defineProperty(exports, 'hasSubmitSucceeded', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_hasSubmitSucceeded).default;
  }
});

var _hasSubmitFailed = __webpack_require__(220);

Object.defineProperty(exports, 'hasSubmitFailed', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_hasSubmitFailed).default;
  }
});

var _reduxForm = __webpack_require__(230);

Object.defineProperty(exports, 'reduxForm', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reduxForm).default;
  }
});

var _reducer = __webpack_require__(229);

Object.defineProperty(exports, 'reducer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reducer).default;
  }
});

var _values = __webpack_require__(252);

Object.defineProperty(exports, 'values', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_values).default;
  }
});

var _actions2 = __webpack_require__(67);

var _actions = _interopRequireWildcard(_actions2);

var _actionTypes2 = __webpack_require__(41);

var _actionTypes = _interopRequireWildcard(_actionTypes2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var actionTypes = exports.actionTypes = _actionTypes;
var actions = exports.actions = _actions;
var arrayInsert = _actions.arrayInsert,
    arrayMove = _actions.arrayMove,
    arrayPop = _actions.arrayPop,
    arrayPush = _actions.arrayPush,
    arrayRemove = _actions.arrayRemove,
    arrayRemoveAll = _actions.arrayRemoveAll,
    arrayShift = _actions.arrayShift,
    arraySplice = _actions.arraySplice,
    arraySwap = _actions.arraySwap,
    arrayUnshift = _actions.arrayUnshift,
    autofill = _actions.autofill,
    blur = _actions.blur,
    change = _actions.change,
    clearSubmitErrors = _actions.clearSubmitErrors,
    destroy = _actions.destroy,
    focus = _actions.focus,
    initialize = _actions.initialize,
    registerField = _actions.registerField,
    reset = _actions.reset,
    setSubmitFailed = _actions.setSubmitFailed,
    setSubmitSucceeded = _actions.setSubmitSucceeded,
    startAsyncValidation = _actions.startAsyncValidation,
    startSubmit = _actions.startSubmit,
    stopAsyncValidation = _actions.stopAsyncValidation,
    stopSubmit = _actions.stopSubmit,
    submit = _actions.submit,
    touch = _actions.touch,
    unregisterField = _actions.unregisterField,
    untouch = _actions.untouch;
exports.arrayInsert = arrayInsert;
exports.arrayMove = arrayMove;
exports.arrayPop = arrayPop;
exports.arrayPush = arrayPush;
exports.arrayRemove = arrayRemove;
exports.arrayRemoveAll = arrayRemoveAll;
exports.arrayShift = arrayShift;
exports.arraySplice = arraySplice;
exports.arraySwap = arraySwap;
exports.arrayUnshift = arrayUnshift;
exports.autofill = autofill;
exports.blur = blur;
exports.change = change;
exports.clearSubmitErrors = clearSubmitErrors;
exports.destroy = destroy;
exports.focus = focus;
exports.initialize = initialize;
exports.registerField = registerField;
exports.reset = reset;
exports.setSubmitFailed = setSubmitFailed;
exports.setSubmitSucceeded = setSubmitSucceeded;
exports.startAsyncValidation = startAsyncValidation;
exports.startSubmit = startSubmit;
exports.stopAsyncValidation = stopAsyncValidation;
exports.stopSubmit = stopSubmit;
exports.submit = submit;
exports.touch = touch;
exports.unregisterField = unregisterField;
exports.untouch = untouch;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(214);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(152),
    listCacheDelete = __webpack_require__(153),
    listCacheGet = __webpack_require__(154),
    listCacheHas = __webpack_require__(155),
    listCacheSet = __webpack_require__(156);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(12);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(56);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(150);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(9);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(37),
    isLength = __webpack_require__(38);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(14),
    isObjectLike = __webpack_require__(10);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(50),
    copyArray = __webpack_require__(55),
    isArray = __webpack_require__(3),
    isSymbol = __webpack_require__(21),
    stringToPath = __webpack_require__(60),
    toKey = __webpack_require__(11),
    toString = __webpack_require__(65);

/**
 * Converts `value` to a property path array.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Util
 * @param {*} value The value to convert.
 * @returns {Array} Returns the new property path array.
 * @example
 *
 * _.toPath('a.b.c');
 * // => ['a', 'b', 'c']
 *
 * _.toPath('a[0].b.c');
 * // => ['a', '0', 'b', 'c']
 */
function toPath(value) {
  if (isArray(value)) {
    return arrayMap(value, toKey);
  }
  return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
}

module.exports = toPath;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatName;
function formatName(context, name) {
  var sectionPrefix = context._reduxForm.sectionPrefix;

  return !sectionPrefix ? name : sectionPrefix + "." + name;
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(8);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return reducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_apiCalls__ = __webpack_require__(47);



// action creators
var actionCreators = {
    redirectToHome: function redirectToHome() {
        __WEBPACK_IMPORTED_MODULE_0_react_router__["browserHistory"].push("/");
    },
    logout: function logout() {
        return function (dispatch, getState) {
            __WEBPACK_IMPORTED_MODULE_2__helpers_apiCalls__["a" /* default */].request("account/logout", "post").then(function (response) {
                dispatch({ type: "LOGOUT" });
            });
        };
    }
};
var initialState = {
    loggedIn: false, user: null
};
// reducer
var reducer = function reducer(state, action) {
    var newState = Object.assign({}, state);
    switch (action.type) {
        case "LOGIN":
            newState.loggedIn = true;
            newState.user = action.user;
            return newState;
        case "LOGOUT":
            newState.loggedIn = false;
            newState.user = null;
            return newState;
        default:
            var exhaustiveCheck = action;
    }
    // For unrecognized actions (or in cases where actions have no effect), must return the existing state
    //  (or default initial state if none was supplied)
    return state || initialState;
};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = isPromise;

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(9),
    root = __webpack_require__(5);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(157),
    mapCacheDelete = __webpack_require__(158),
    mapCacheGet = __webpack_require__(159),
    mapCacheHas = __webpack_require__(160),
    mapCacheSet = __webpack_require__(161);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(15),
    stackClear = __webpack_require__(173),
    stackDelete = __webpack_require__(174),
    stackGet = __webpack_require__(175),
    stackHas = __webpack_require__(176),
    stackSet = __webpack_require__(177);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(109),
    isObjectLike = __webpack_require__(10);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),
/* 31 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(3),
    isSymbol = __webpack_require__(21);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 33 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 34 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(108),
    isObjectLike = __webpack_require__(10);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(5),
    stubFalse = __webpack_require__(186);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(43)(module)))

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(14),
    isObject = __webpack_require__(7);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 38 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(112),
    baseUnary = __webpack_require__(126),
    nodeUtil = __webpack_require__(166);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(49),
    baseKeys = __webpack_require__(114),
    isArrayLike = __webpack_require__(20);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var prefix = exports.prefix = '@@redux-form/';

var ARRAY_INSERT = exports.ARRAY_INSERT = prefix + 'ARRAY_INSERT';
var ARRAY_MOVE = exports.ARRAY_MOVE = prefix + 'ARRAY_MOVE';
var ARRAY_POP = exports.ARRAY_POP = prefix + 'ARRAY_POP';
var ARRAY_PUSH = exports.ARRAY_PUSH = prefix + 'ARRAY_PUSH';
var ARRAY_REMOVE = exports.ARRAY_REMOVE = prefix + 'ARRAY_REMOVE';
var ARRAY_REMOVE_ALL = exports.ARRAY_REMOVE_ALL = prefix + 'ARRAY_REMOVE_ALL';
var ARRAY_SHIFT = exports.ARRAY_SHIFT = prefix + 'ARRAY_SHIFT';
var ARRAY_SPLICE = exports.ARRAY_SPLICE = prefix + 'ARRAY_SPLICE';
var ARRAY_UNSHIFT = exports.ARRAY_UNSHIFT = prefix + 'ARRAY_UNSHIFT';
var ARRAY_SWAP = exports.ARRAY_SWAP = prefix + 'ARRAY_SWAP';
var AUTOFILL = exports.AUTOFILL = prefix + 'AUTOFILL';
var BLUR = exports.BLUR = prefix + 'BLUR';
var CHANGE = exports.CHANGE = prefix + 'CHANGE';
var CLEAR_SUBMIT = exports.CLEAR_SUBMIT = prefix + 'CLEAR_SUBMIT';
var CLEAR_SUBMIT_ERRORS = exports.CLEAR_SUBMIT_ERRORS = prefix + 'CLEAR_SUBMIT_ERRORS';
var CLEAR_ASYNC_ERROR = exports.CLEAR_ASYNC_ERROR = prefix + 'CLEAR_ASYNC_ERROR';
var DESTROY = exports.DESTROY = prefix + 'DESTROY';
var FOCUS = exports.FOCUS = prefix + 'FOCUS';
var INITIALIZE = exports.INITIALIZE = prefix + 'INITIALIZE';
var REGISTER_FIELD = exports.REGISTER_FIELD = prefix + 'REGISTER_FIELD';
var RESET = exports.RESET = prefix + 'RESET';
var SET_SUBMIT_FAILED = exports.SET_SUBMIT_FAILED = prefix + 'SET_SUBMIT_FAILED';
var SET_SUBMIT_SUCCEEDED = exports.SET_SUBMIT_SUCCEEDED = prefix + 'SET_SUBMIT_SUCCEEDED';
var START_ASYNC_VALIDATION = exports.START_ASYNC_VALIDATION = prefix + 'START_ASYNC_VALIDATION';
var START_SUBMIT = exports.START_SUBMIT = prefix + 'START_SUBMIT';
var STOP_ASYNC_VALIDATION = exports.STOP_ASYNC_VALIDATION = prefix + 'STOP_ASYNC_VALIDATION';
var STOP_SUBMIT = exports.STOP_SUBMIT = prefix + 'STOP_SUBMIT';
var SUBMIT = exports.SUBMIT = prefix + 'SUBMIT';
var TOUCH = exports.TOUCH = prefix + 'TOUCH';
var UNREGISTER_FIELD = exports.UNREGISTER_FIELD = prefix + 'UNREGISTER_FIELD';
var UNTOUCH = exports.UNTOUCH = prefix + 'UNTOUCH';
var UPDATE_SYNC_ERRORS = exports.UPDATE_SYNC_ERRORS = prefix + 'UPDATE_SYNC_ERRORS';
var UPDATE_SYNC_WARNINGS = exports.UPDATE_SYNC_WARNINGS = prefix + 'UPDATE_SYNC_WARNINGS';

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hasError = __webpack_require__(219);

var _hasError2 = _interopRequireDefault(_hasError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createIsValid = function createIsValid(structure) {
  var getIn = structure.getIn,
      keys = structure.keys;

  var hasError = (0, _hasError2.default)(structure);
  return function (form) {
    var getFormState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (state) {
      return getIn(state, 'form');
    };
    var ignoreSubmitErrors = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    return function (state) {
      var formState = getFormState(state);
      var syncError = getIn(formState, form + '.syncError');
      if (syncError) {
        return false;
      }
      if (!ignoreSubmitErrors) {
        var error = getIn(formState, form + '.error');
        if (error) {
          return false;
        }
      }
      var syncErrors = getIn(formState, form + '.syncErrors');
      var asyncErrors = getIn(formState, form + '.asyncErrors');
      var submitErrors = ignoreSubmitErrors ? undefined : getIn(formState, form + '.submitErrors');
      if (!syncErrors && !asyncErrors && !submitErrors) {
        return true;
      }

      var registeredFields = getIn(formState, form + '.registeredFields');
      if (!registeredFields) {
        return true;
      }

      return !keys(registeredFields).filter(function (name) {
        return getIn(registeredFields, '[\'' + name + '\'].count') > 0;
      }).some(function (name) {
        return hasError(getIn(registeredFields, '[\'' + name + '\']'), syncErrors, asyncErrors, submitErrors);
      });
    };
  };
};

exports.default = createIsValid;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(346);

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(79);

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_apiCalls__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Input__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_form__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux_form__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





var Form = function (_React$Component) {
    _inherits(Form, _React$Component);

    function Form(props) {
        _classCallCheck(this, Form);

        var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

        _this.onSubmit = _this.onSubmit.bind(_this);
        _this.submitForm = _this.submitForm.bind(_this);
        _this.onSubmitFail = _this.onSubmitFail.bind(_this);
        return _this;
    }

    _createClass(Form, [{
        key: 'render',
        value: function render() {
            var handleSubmit = this.props.handleSubmit;

            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'form',
                { onSubmit: handleSubmit(this.onSubmit) },
                this.renderGlobalErrors(),
                this.renderFormContent()
            );
        }
    }, {
        key: 'CreateInput',
        value: function CreateInput(name, type, label) {
            var disabled = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__Input__["a" /* default */], { name: name, type: type, label: label, disabled: disabled });
        }
    }, {
        key: 'CreateSubmitButton',
        value: function CreateSubmitButton(label) {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__Input__["a" /* default */], { type: 'submit', label: label, disabled: this.props.submitting });
        }
        // submits the form to the specified controller address

    }, {
        key: 'submitForm',
        value: function submitForm(address, values) {
            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
                var result;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return __WEBPACK_IMPORTED_MODULE_1__helpers_apiCalls__["a" /* default */].request(address, "post", values);

                            case 2:
                                result = _context.sent;

                                if (!result.validationErrors) {
                                    _context.next = 7;
                                    break;
                                }

                                this.onSubmitFail(result);
                                _context.next = 8;
                                break;

                            case 7:
                                return _context.abrupt('return', result);

                            case 8:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
        // if submission fails, creates submission errors with information retrieved from controller

    }, {
        key: 'onSubmitFail',
        value: function onSubmitFail(errors) {
            var error = { _error: errors.validationErrors[""] };
            throw new __WEBPACK_IMPORTED_MODULE_3_redux_form__["SubmissionError"](error);
        }
        // renders submission errors retrieved from controller

    }, {
        key: 'renderGlobalErrors',
        value: function renderGlobalErrors() {
            var errors = this.props.error;
            if (errors) return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'div',
                { className: 'alert alert-danger' },
                errors.map(function (error, index) {
                    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        'p',
                        { key: index },
                        error
                    );
                })
            );
        }
    }]);

    return Form;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Form);

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_App__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_LoginForm__ = __webpack_require__(84);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Login = function (_React$Component) {
    _inherits(Login, _React$Component);

    function Login() {
        _classCallCheck(this, Login);

        return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
    }

    _createClass(Login, [{
        key: 'componentWillMount',
        value: function componentWillMount() {}
    }, {
        key: 'render',
        value: function render() {
            if (this.props.loggedIn) return this.renderLogout();else return this.renderLogin();
        }
    }, {
        key: 'renderLogin',
        value: function renderLogin() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'h4',
                    null,
                    'Fa\xE7a seu login'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__components_LoginForm__["a" /* default */], null),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('hr', null),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'p',
                    null,
                    'Para se cadastrar, clique ',
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        __WEBPACK_IMPORTED_MODULE_3_react_router__["Link"],
                        { to: '/register' },
                        'aqui'
                    )
                )
            );
        }
    }, {
        key: 'renderLogout',
        value: function renderLogout() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'h4',
                    null,
                    'Clique aqui para sair: '
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'button',
                    { onClick: this.props.logout },
                    'Sair'
                )
            );
        }
    }]);

    return Login;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(function (state) {
    return state.app;
}, __WEBPACK_IMPORTED_MODULE_2__store_App__["a" /* actionCreators */])(Login));

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

var requestHeader = {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
};
var requestCredentials = "same-origin";

var ApiCalls = function () {
    function ApiCalls() {
        _classCallCheck(this, ApiCalls);
    }

    _createClass(ApiCalls, null, [{
        key: 'request',

        //TODO: implement other http commands
        value: function request(address, method) {
            var requestBody = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
                var lower, requestInit;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                lower = method.toLowerCase();
                                _context.t0 = lower;
                                _context.next = _context.t0 === 'post' ? 4 : _context.t0 === 'get' ? 6 : 6;
                                break;

                            case 4:
                                requestInit = this.createRequest(requestBody, 'post');
                                return _context.abrupt('break', 7);

                            case 6:
                                requestInit = this.createRequest(requestBody);

                            case 7:
                                _context.next = 9;
                                return fetch(address, requestInit).then(function (response) {
                                    return response.json();
                                });

                            case 9:
                                return _context.abrupt('return', _context.sent);

                            case 10:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }, {
        key: 'createRequest',
        value: function createRequest(body) {
            var requestMethod = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'get';

            var req = {
                method: requestMethod,
                headers: requestHeader,
                credentials: requestCredentials
            };
            if (body != null) req.body = JSON.stringify(body);
            return req;
        }
    }]);

    return ApiCalls;
}();

/* harmony default export */ __webpack_exports__["a"] = (ApiCalls);

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(5);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(124),
    isArguments = __webpack_require__(35),
    isArray = __webpack_require__(3),
    isBuffer = __webpack_require__(36),
    isIndex = __webpack_require__(31),
    isTypedArray = __webpack_require__(39);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 50 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(17),
    eq = __webpack_require__(12);

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignMergeValue;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(134);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(54),
    toKey = __webpack_require__(11);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(3),
    isKey = __webpack_require__(32),
    stringToPath = __webpack_require__(60),
    toString = __webpack_require__(65);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 55 */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(9);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(97),
    arraySome = __webpack_require__(102),
    cacheHas = __webpack_require__(127);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7);

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),
/* 59 */
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(163);

/** Used to match property names within property paths. */
var reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 61 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(30);

/**
 * This method is like `_.isEqual` except that it accepts `customizer` which
 * is invoked to compare values. If `customizer` returns `undefined`, comparisons
 * are handled by the method instead. The `customizer` is invoked with up to
 * six arguments: (objValue, othValue [, index|key, object, other, stack]).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * function isGreeting(value) {
 *   return /^h(?:i|ello)$/.test(value);
 * }
 *
 * function customizer(objValue, othValue) {
 *   if (isGreeting(objValue) && isGreeting(othValue)) {
 *     return true;
 *   }
 * }
 *
 * var array = ['hello', 'goodbye'];
 * var other = ['hi', 'goodbye'];
 *
 * _.isEqualWith(array, other, customizer);
 * // => true
 */
function isEqualWith(value, other, customizer) {
  customizer = typeof customizer == 'function' ? customizer : undefined;
  var result = customizer ? customizer(value, other) : undefined;
  return result === undefined ? baseIsEqual(value, other, undefined, customizer) : !!result;
}

module.exports = isEqualWith;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(49),
    baseKeysIn = __webpack_require__(115),
    isArrayLike = __webpack_require__(20);

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(17),
    baseForOwn = __webpack_require__(105),
    baseIteratee = __webpack_require__(113);

/**
 * Creates an object with the same keys as `object` and values generated
 * by running each own enumerable string keyed property of `object` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, key, object).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns the new mapped object.
 * @see _.mapKeys
 * @example
 *
 * var users = {
 *   'fred':    { 'user': 'fred',    'age': 40 },
 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
 * };
 *
 * _.mapValues(users, function(o) { return o.age; });
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 *
 * // The `_.property` iteratee shorthand.
 * _.mapValues(users, 'age');
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 */
function mapValues(object, iteratee) {
  var result = {};
  iteratee = baseIteratee(iteratee, 3);

  baseForOwn(object, function(value, key, object) {
    baseAssignValue(result, key, iteratee(value, key, object));
  });
  return result;
}

module.exports = mapValues;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(125);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _es6Error = __webpack_require__(92);

var _es6Error2 = _interopRequireDefault(_es6Error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SubmissionError = function (_ExtendableError) {
  _inherits(SubmissionError, _ExtendableError);

  function SubmissionError(errors) {
    _classCallCheck(this, SubmissionError);

    var _this = _possibleConstructorReturn(this, (SubmissionError.__proto__ || Object.getPrototypeOf(SubmissionError)).call(this, 'Submit Validation Failed'));

    _this.errors = errors;
    return _this;
  }

  return SubmissionError;
}(_es6Error2.default);

exports.default = SubmissionError;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateSyncWarnings = exports.updateSyncErrors = exports.untouch = exports.unregisterField = exports.touch = exports.setSubmitSucceeded = exports.setSubmitFailed = exports.submit = exports.stopSubmit = exports.stopAsyncValidation = exports.startSubmit = exports.startAsyncValidation = exports.reset = exports.registerField = exports.initialize = exports.focus = exports.destroy = exports.clearAsyncError = exports.clearSubmitErrors = exports.clearSubmit = exports.change = exports.blur = exports.autofill = exports.arrayUnshift = exports.arraySwap = exports.arraySplice = exports.arrayShift = exports.arrayRemoveAll = exports.arrayRemove = exports.arrayPush = exports.arrayPop = exports.arrayMove = exports.arrayInsert = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actionTypes = __webpack_require__(41);

var arrayInsert = exports.arrayInsert = function arrayInsert(form, field, index, value) {
  return {
    type: _actionTypes.ARRAY_INSERT,
    meta: { form: form, field: field, index: index },
    payload: value
  };
};

var arrayMove = exports.arrayMove = function arrayMove(form, field, from, to) {
  return {
    type: _actionTypes.ARRAY_MOVE,
    meta: { form: form, field: field, from: from, to: to }
  };
};

var arrayPop = exports.arrayPop = function arrayPop(form, field) {
  return {
    type: _actionTypes.ARRAY_POP,
    meta: { form: form, field: field }
  };
};

var arrayPush = exports.arrayPush = function arrayPush(form, field, value) {
  return {
    type: _actionTypes.ARRAY_PUSH,
    meta: { form: form, field: field },
    payload: value
  };
};

var arrayRemove = exports.arrayRemove = function arrayRemove(form, field, index) {
  return {
    type: _actionTypes.ARRAY_REMOVE,
    meta: { form: form, field: field, index: index }
  };
};

var arrayRemoveAll = exports.arrayRemoveAll = function arrayRemoveAll(form, field) {
  return {
    type: _actionTypes.ARRAY_REMOVE_ALL,
    meta: { form: form, field: field }
  };
};

var arrayShift = exports.arrayShift = function arrayShift(form, field) {
  return {
    type: _actionTypes.ARRAY_SHIFT,
    meta: { form: form, field: field }
  };
};

var arraySplice = exports.arraySplice = function arraySplice(form, field, index, removeNum, value) {
  var action = {
    type: _actionTypes.ARRAY_SPLICE,
    meta: { form: form, field: field, index: index, removeNum: removeNum }
  };
  if (value !== undefined) {
    action.payload = value;
  }
  return action;
};

var arraySwap = exports.arraySwap = function arraySwap(form, field, indexA, indexB) {
  if (indexA === indexB) {
    throw new Error('Swap indices cannot be equal');
  }
  if (indexA < 0 || indexB < 0) {
    throw new Error('Swap indices cannot be negative');
  }
  return { type: _actionTypes.ARRAY_SWAP, meta: { form: form, field: field, indexA: indexA, indexB: indexB } };
};

var arrayUnshift = exports.arrayUnshift = function arrayUnshift(form, field, value) {
  return {
    type: _actionTypes.ARRAY_UNSHIFT,
    meta: { form: form, field: field },
    payload: value
  };
};

var autofill = exports.autofill = function autofill(form, field, value) {
  return {
    type: _actionTypes.AUTOFILL,
    meta: { form: form, field: field },
    payload: value
  };
};

var blur = exports.blur = function blur(form, field, value, touch) {
  return {
    type: _actionTypes.BLUR,
    meta: { form: form, field: field, touch: touch },
    payload: value
  };
};

var change = exports.change = function change(form, field, value, touch, persistentSubmitErrors) {
  return {
    type: _actionTypes.CHANGE,
    meta: { form: form, field: field, touch: touch, persistentSubmitErrors: persistentSubmitErrors },
    payload: value
  };
};

var clearSubmit = exports.clearSubmit = function clearSubmit(form) {
  return { type: _actionTypes.CLEAR_SUBMIT, meta: { form: form } };
};

var clearSubmitErrors = exports.clearSubmitErrors = function clearSubmitErrors(form) {
  return {
    type: _actionTypes.CLEAR_SUBMIT_ERRORS,
    meta: { form: form }
  };
};

var clearAsyncError = exports.clearAsyncError = function clearAsyncError(form, field) {
  return {
    type: _actionTypes.CLEAR_ASYNC_ERROR,
    meta: { form: form, field: field }
  };
};

var destroy = exports.destroy = function destroy() {
  for (var _len = arguments.length, form = Array(_len), _key = 0; _key < _len; _key++) {
    form[_key] = arguments[_key];
  }

  return { type: _actionTypes.DESTROY, meta: { form: form } };
};

var focus = exports.focus = function focus(form, field) {
  return { type: _actionTypes.FOCUS, meta: { form: form, field: field } };
};

var initialize = exports.initialize = function initialize(form, values, keepDirty) {
  var otherMeta = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  if (keepDirty instanceof Object) {
    otherMeta = keepDirty;
    keepDirty = false;
  }
  return {
    type: _actionTypes.INITIALIZE,
    meta: _extends({ form: form, keepDirty: keepDirty }, otherMeta),
    payload: values
  };
};

var registerField = exports.registerField = function registerField(form, name, type) {
  return {
    type: _actionTypes.REGISTER_FIELD,
    meta: { form: form },
    payload: { name: name, type: type }
  };
};

var reset = exports.reset = function reset(form) {
  return { type: _actionTypes.RESET, meta: { form: form } };
};

var startAsyncValidation = exports.startAsyncValidation = function startAsyncValidation(form, field) {
  return {
    type: _actionTypes.START_ASYNC_VALIDATION,
    meta: { form: form, field: field }
  };
};

var startSubmit = exports.startSubmit = function startSubmit(form) {
  return { type: _actionTypes.START_SUBMIT, meta: { form: form } };
};

var stopAsyncValidation = exports.stopAsyncValidation = function stopAsyncValidation(form, errors) {
  var action = {
    type: _actionTypes.STOP_ASYNC_VALIDATION,
    meta: { form: form },
    payload: errors
  };
  if (errors && Object.keys(errors).length) {
    action.error = true;
  }
  return action;
};

var stopSubmit = exports.stopSubmit = function stopSubmit(form, errors) {
  var action = {
    type: _actionTypes.STOP_SUBMIT,
    meta: { form: form },
    payload: errors
  };
  if (errors && Object.keys(errors).length) {
    action.error = true;
  }
  return action;
};

var submit = exports.submit = function submit(form) {
  return { type: _actionTypes.SUBMIT, meta: { form: form } };
};

var setSubmitFailed = exports.setSubmitFailed = function setSubmitFailed(form) {
  for (var _len2 = arguments.length, fields = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    fields[_key2 - 1] = arguments[_key2];
  }

  return {
    type: _actionTypes.SET_SUBMIT_FAILED,
    meta: { form: form, fields: fields },
    error: true
  };
};

var setSubmitSucceeded = exports.setSubmitSucceeded = function setSubmitSucceeded(form) {
  for (var _len3 = arguments.length, fields = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    fields[_key3 - 1] = arguments[_key3];
  }

  return {
    type: _actionTypes.SET_SUBMIT_SUCCEEDED,
    meta: { form: form, fields: fields },
    error: false
  };
};

var touch = exports.touch = function touch(form) {
  for (var _len4 = arguments.length, fields = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    fields[_key4 - 1] = arguments[_key4];
  }

  return {
    type: _actionTypes.TOUCH,
    meta: { form: form, fields: fields }
  };
};

var unregisterField = exports.unregisterField = function unregisterField(form, name) {
  var destroyOnUnmount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return {
    type: _actionTypes.UNREGISTER_FIELD,
    meta: { form: form },
    payload: { name: name, destroyOnUnmount: destroyOnUnmount }
  };
};

var untouch = exports.untouch = function untouch(form) {
  for (var _len5 = arguments.length, fields = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
    fields[_key5 - 1] = arguments[_key5];
  }

  return {
    type: _actionTypes.UNTOUCH,
    meta: { form: form, fields: fields }
  };
};

var updateSyncErrors = exports.updateSyncErrors = function updateSyncErrors(form) {
  var syncErrors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var error = arguments[2];
  return {
    type: _actionTypes.UPDATE_SYNC_ERRORS,
    meta: { form: form },
    payload: { syncErrors: syncErrors, error: error }
  };
};

var updateSyncWarnings = exports.updateSyncWarnings = function updateSyncWarnings(form) {
  var syncWarnings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var warning = arguments[2];
  return {
    type: _actionTypes.UPDATE_SYNC_WARNINGS,
    meta: { form: form },
    payload: { syncWarnings: syncWarnings, warning: warning }
  };
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var processProps = function processProps(type, props, _value) {
  var value = props.value;

  if (type === 'checkbox') {
    return _extends({}, props, {
      checked: !!value
    });
  }
  if (type === 'radio') {
    return _extends({}, props, {
      checked: value === _value,
      value: _value
    });
  }
  if (type === 'select-multiple') {
    return _extends({}, props, {
      value: value || []
    });
  }
  if (type === 'file') {
    return _extends({}, props, {
      value: value || undefined
    });
  }
  return props;
};

var createFieldProps = function createFieldProps(_ref2, name, _ref) {
  var getIn = _ref2.getIn,
      toJS = _ref2.toJS;

  var asyncError = _ref.asyncError,
      asyncValidating = _ref.asyncValidating,
      onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      onDrop = _ref.onDrop,
      onDragStart = _ref.onDragStart,
      dirty = _ref.dirty,
      dispatch = _ref.dispatch,
      onFocus = _ref.onFocus,
      form = _ref.form,
      format = _ref.format,
      initial = _ref.initial,
      parse = _ref.parse,
      pristine = _ref.pristine,
      props = _ref.props,
      state = _ref.state,
      submitError = _ref.submitError,
      submitFailed = _ref.submitFailed,
      submitting = _ref.submitting,
      syncError = _ref.syncError,
      syncWarning = _ref.syncWarning,
      validate = _ref.validate,
      value = _ref.value,
      _value = _ref._value,
      warn = _ref.warn,
      custom = _objectWithoutProperties(_ref, ['asyncError', 'asyncValidating', 'onBlur', 'onChange', 'onDrop', 'onDragStart', 'dirty', 'dispatch', 'onFocus', 'form', 'format', 'initial', 'parse', 'pristine', 'props', 'state', 'submitError', 'submitFailed', 'submitting', 'syncError', 'syncWarning', 'validate', 'value', '_value', 'warn']);

  var error = syncError || asyncError || submitError;
  var warning = syncWarning;

  var formatFieldValue = function formatFieldValue(value, format) {
    if (format === null) {
      return value;
    }
    var defaultFormattedValue = value == null ? '' : value;
    return format ? format(value, name) : defaultFormattedValue;
  };

  var formattedFieldValue = formatFieldValue(value, format);

  return {
    input: processProps(custom.type, {
      name: name,
      onBlur: onBlur,
      onChange: onChange,
      onDragStart: onDragStart,
      onDrop: onDrop,
      onFocus: onFocus,
      value: formattedFieldValue
    }, _value),
    meta: _extends({}, toJS(state), {
      active: !!(state && getIn(state, 'active')),
      asyncValidating: asyncValidating,
      autofilled: !!(state && getIn(state, 'autofilled')),
      dirty: dirty,
      dispatch: dispatch,
      error: error,
      form: form,
      initial: initial,
      warning: warning,
      invalid: !!error,
      pristine: pristine,
      submitting: !!submitting,
      submitFailed: !!submitFailed,
      touched: !!(state && getIn(state, 'touched')),
      valid: !error,
      visited: !!(state && getIn(state, 'visited'))
    }),
    custom: _extends({}, custom, props)
  };
};

exports.default = createFieldProps;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var defaultShouldAsyncValidate = function defaultShouldAsyncValidate(_ref) {
  var initialized = _ref.initialized,
      trigger = _ref.trigger,
      pristine = _ref.pristine,
      syncValidationPasses = _ref.syncValidationPasses;

  if (!syncValidationPasses) {
    return false;
  }
  switch (trigger) {
    case 'blur':
      // blurring
      return true;
    case 'submit':
      // submitting, so only async validate if form is dirty or was never initialized
      // conversely, DON'T async validate if the form is pristine just as it was initialized
      return !pristine || !initialized;
    default:
      return false;
  }
};

exports.default = defaultShouldAsyncValidate;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var defaultShouldValidate = function defaultShouldValidate(_ref) {
  var values = _ref.values,
      nextProps = _ref.nextProps,
      initialRender = _ref.initialRender,
      lastFieldValidatorKeys = _ref.lastFieldValidatorKeys,
      fieldValidatorKeys = _ref.fieldValidatorKeys,
      structure = _ref.structure;

  if (initialRender) {
    return true;
  }
  return !structure.deepEqual(values, nextProps.values) || !structure.deepEqual(lastFieldValidatorKeys, fieldValidatorKeys);
};

exports.default = defaultShouldValidate;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var isEvent = function isEvent(candidate) {
  return !!(candidate && candidate.stopPropagation && candidate.preventDefault);
};

exports.default = isEvent;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getValue = __webpack_require__(206);

var _getValue2 = _interopRequireDefault(_getValue);

var _isReactNative = __webpack_require__(225);

var _isReactNative2 = _interopRequireDefault(_isReactNative);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var onChangeValue = function onChangeValue(event, _ref) {
  var name = _ref.name,
      parse = _ref.parse,
      normalize = _ref.normalize;

  // read value from input
  var value = (0, _getValue2.default)(event, _isReactNative2.default);

  // parse value if we have a parser
  if (parse) {
    value = parse(value, name);
  }

  // normalize value
  if (normalize) {
    value = normalize(name, value);
  }

  return value;
};

exports.default = onChangeValue;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isEvent = __webpack_require__(71);

var _isEvent2 = _interopRequireDefault(_isEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var silenceEvent = function silenceEvent(event) {
  var is = (0, _isEvent2.default)(event);
  if (is) {
    event.preventDefault();
  }
  return is;
};

exports.default = silenceEvent;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var createIsPristine = function createIsPristine(_ref) {
  var deepEqual = _ref.deepEqual,
      empty = _ref.empty,
      getIn = _ref.getIn;
  return function (form) {
    var getFormState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (state) {
      return getIn(state, 'form');
    };
    return function (state) {
      var formState = getFormState(state);
      var initial = getIn(formState, form + '.initial') || empty;
      var values = getIn(formState, form + '.values') || initial;
      return deepEqual(initial, values);
    };
  };
};

exports.default = createIsPristine;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isEqualWith2 = __webpack_require__(62);

var _isEqualWith3 = _interopRequireDefault(_isEqualWith2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var customizer = function customizer(objectValue, otherValue, indexOrkey, object, other, stack) {
  // https://lodash.com/docs/4.17.4#isEqualWith
  if (stack) {
    // Shallow compares
    // For 1st level, stack === undefined.
    //   -> Do nothing (and implicitly return undefined so that it goes to compare 2nd level)
    // For 2nd level and up, stack !== undefined.
    //   -> Compare by === operator
    return objectValue === otherValue;
  }
};

var shallowCompare = function shallowCompare(instance, nextProps, nextState) {
  return !(0, _isEqualWith3.default)(instance.props, nextProps, customizer) || !(0, _isEqualWith3.default)(instance.state, nextState, customizer);
};

exports.default = shallowCompare;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(213);

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(92);

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = configureStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(91);




function configureStore(initialState) {
    // Build middleware. These are functions that can process the actions before they reach the store.
    var windowIfDefined = typeof window === 'undefined' ? null : window;
    // If devTools is installed, connect to it
    var devToolsExtension = windowIfDefined && windowIfDefined.devToolsExtension;
    var createStoreWithMiddleware = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["compose"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a), devToolsExtension ? devToolsExtension() : function (f) {
        return f;
    })(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"]);
    // Combine all reducers and instantiate the app-wide store instance
    var allReducers = buildRootReducer(__WEBPACK_IMPORTED_MODULE_3__store__["a" /* reducers */]);
    var store = createStoreWithMiddleware(allReducers, initialState);
    // Enable Webpack hot module replacement for reducers
    if (false) {
        module.hot.accept('./store', function () {
            var nextRootReducer = require('./store');
            store.replaceReducer(buildRootReducer(nextRootReducer.reducers));
        });
    }
    return store;
}
function buildRootReducer(allReducers) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])(Object.assign({}, allReducers, { routing: __WEBPACK_IMPORTED_MODULE_2_react_router_redux__["routerReducer"] }));
}

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers_Layout__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__containers_Home__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__containers_Login__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__containers_Register__ = __webpack_require__(89);






/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
    __WEBPACK_IMPORTED_MODULE_1_react_router__["Route"],
    { component: __WEBPACK_IMPORTED_MODULE_2__containers_Layout__["a" /* Layout */] },
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '/', components: { body: __WEBPACK_IMPORTED_MODULE_3__containers_Home__["a" /* default */] } }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '/login', components: { body: __WEBPACK_IMPORTED_MODULE_4__containers_Login__["a" /* default */] } }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '/register', components: { body: __WEBPACK_IMPORTED_MODULE_5__containers_Register__["a" /* default */] } })
));
// Enable Hot Module Replacement (HMR)
if (false) {
    module.hot.accept();
}

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(144);

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(150);

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aspnet_prerendering__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aspnet_prerendering___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_aspnet_prerendering__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__configureStore__ = __webpack_require__(78);







/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_aspnet_prerendering__["createServerRenderer"])(function (params) {
    return new Promise(function (resolve, reject) {
        // Match the incoming request against the list of client-side routes
        var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__configureStore__["a" /* default */])();
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_router__["match"])({ routes: __WEBPACK_IMPORTED_MODULE_5__routes__["a" /* default */], location: params.location }, function (error, redirectLocation, renderProps) {
            if (error) {
                throw error;
            }
            // If there's a redirection, just send this information back to the host application
            if (redirectLocation) {
                resolve({ redirectUrl: redirectLocation.pathname });
                return;
            }
            // If it didn't match any route, renderProps will be undefined
            if (!renderProps) {
                throw new Error('The location \'' + params.url + '\' doesn\'t match any route configured in react-router.');
            }
            // Build an instance of the application
            var app = __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                __WEBPACK_IMPORTED_MODULE_1_react_redux__["Provider"],
                { store: store },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_router__["RouterContext"], renderProps)
            );
            // Perform an initial render that will cause any async tasks (e.g., data access) to begin
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__["renderToString"])(app);
            // Once the tasks are done, we can perform the final render
            // We also send the redux store state, so the client can continue execution where the server left off
            params.domainTasks.then(function () {
                resolve({
                    html: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__["renderToString"])(app),
                    globals: { initialReduxState: store.getState() }
                });
            }, reject); // Also propagate any errors back into the host application
        });
    });
}));

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_form__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_formValidation__ = __webpack_require__(90);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var NewInput = function (_React$Component) {
    _inherits(NewInput, _React$Component);

    function NewInput(props) {
        _classCallCheck(this, NewInput);

        return _possibleConstructorReturn(this, (NewInput.__proto__ || Object.getPrototypeOf(NewInput)).call(this, props));
    }

    _createClass(NewInput, [{
        key: 'render',
        value: function render() {
            switch (this.props.type) {
                case "text":
                case "password":
                    return this.renderTextInput();
                case "checkbox":
                    return this.renderCheckboxInput();
                case "submit":
                    return this.renderSubmitButtonInput();
                default:
                    return null;
            }
        }
    }, {
        key: 'renderTextInput',
        value: function renderTextInput() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_redux_form__["Field"], { name: this.props.name, component: this.renderField, type: this.props.type, label: this.props.label, placeholder: this.props.label, validate: this.validate(this.props.name) });
        }
    }, {
        key: 'renderCheckboxInput',
        value: function renderCheckboxInput() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'div',
                { className: 'form-check' },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'label',
                    { className: 'form-check-label', htmlFor: this.props.name },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_redux_form__["Field"], { name: this.props.name, className: 'form-check-input', component: 'input', type: 'checkbox' }),
                    ' ',
                    this.props.label
                )
            );
        }
    }, {
        key: 'renderSubmitButtonInput',
        value: function renderSubmitButtonInput() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('input', { type: 'submit', className: 'btn btn-primary', value: this.props.label, disabled: this.props.disabled });
        }
    }, {
        key: 'renderField',
        value: function renderField(props) {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'div',
                { className: 'form-group' },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'label',
                    null,
                    props.label
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('input', _extends({}, props.input, { className: 'form-control', placeholder: props.label, type: props.type })),
                props.meta.touched && props.meta.error && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'span',
                    { className: 'text-danger has-error' },
                    props.meta.error
                )
            );
        }
    }, {
        key: 'validate',
        value: function validate(field) {
            var _this2 = this;

            return function (value, allValues) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__helpers_formValidation__["a" /* validateField */])(_this2.props.name, value, allValues);
            };
        }
    }]);

    return NewInput;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (NewInput);

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_form__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Form__ = __webpack_require__(45);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





var LoginForm = function (_Form) {
    _inherits(LoginForm, _Form);

    function LoginForm() {
        _classCallCheck(this, LoginForm);

        return _possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).apply(this, arguments));
    }

    _createClass(LoginForm, [{
        key: 'renderFormContent',
        value: function renderFormContent() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'div',
                null,
                this.CreateInput("email", "text", "Email"),
                this.CreateInput("password", "password", "Senha"),
                this.CreateInput("remember", "checkbox", "Lembrar de mim"),
                this.CreateSubmitButton("Entrar")
            );
        }
    }, {
        key: 'onSubmit',
        value: function onSubmit(values) {
            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this.submitForm("account/authenticate", values);

                            case 2:
                                return _context.abrupt('return', _context.sent);

                            case 3:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }]);

    return LoginForm;
}(__WEBPACK_IMPORTED_MODULE_3__Form__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux_form__["reduxForm"])({
    form: 'login',
    fields: ['email', 'password', 'remember'],
    onSubmitSuccess: function onSubmitSuccess(result, dispatch, props) {
        dispatch({
            type: "LOGIN",
            user: result["user"]
        });
        __WEBPACK_IMPORTED_MODULE_1_react_router__["browserHistory"].push(result["redirectUrl"]);
    }
})(LoginForm));

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var NavMenu = function (_React$Component) {
    _inherits(NavMenu, _React$Component);

    function NavMenu() {
        _classCallCheck(this, NavMenu);

        return _possibleConstructorReturn(this, (NavMenu.__proto__ || Object.getPrototypeOf(NavMenu)).apply(this, arguments));
    }

    _createClass(NavMenu, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'div',
                { className: 'main-nav' },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'div',
                    { className: 'navbar navbar-inverse' },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        'div',
                        { className: 'navbar-header' },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'button',
                            { type: 'button', className: 'navbar-toggle', 'data-toggle': 'collapse', 'data-target': '.navbar-collapse' },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                'span',
                                { className: 'sr-only' },
                                'Toggle navigation'
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('span', { className: 'icon-bar' }),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('span', { className: 'icon-bar' }),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('span', { className: 'icon-bar' })
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                            { className: 'navbar-brand', to: '/' },
                            'SISEV'
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('div', { className: 'clearfix' }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        'div',
                        { className: 'navbar-collapse collapse' },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'ul',
                            { className: 'nav navbar-nav' },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                'li',
                                null,
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                    __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                                    { to: '/', activeClassName: 'active' },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('span', { className: 'glyphicon glyphicon-home' }),
                                    ' Home'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return NavMenu;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_form__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Form__ = __webpack_require__(45);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





var RegisterForm = function (_Form) {
    _inherits(RegisterForm, _Form);

    function RegisterForm() {
        _classCallCheck(this, RegisterForm);

        return _possibleConstructorReturn(this, (RegisterForm.__proto__ || Object.getPrototypeOf(RegisterForm)).apply(this, arguments));
    }

    _createClass(RegisterForm, [{
        key: 'renderFormContent',
        value: function renderFormContent() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'div',
                null,
                this.CreateInput("firstName", "text", "Nome"),
                this.CreateInput("lastName", "text", "Sobrenome"),
                this.CreateInput("email", "text", "Email"),
                this.CreateInput("cpf", "text", "CPF"),
                this.CreateInput("department", "text", "Departamento"),
                this.CreateInput("password", "password", "Senha"),
                this.CreateInput("passwordConfirm", "password", "Confirmar senha"),
                this.CreateSubmitButton("Registrar")
            );
        }
    }, {
        key: 'onSubmit',
        value: function onSubmit(values) {
            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this.submitForm("account/register", values);

                            case 2:
                                return _context.abrupt('return', _context.sent);

                            case 3:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }]);

    return RegisterForm;
}(__WEBPACK_IMPORTED_MODULE_3__Form__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux_form__["reduxForm"])({
    form: 'register',
    fields: ['firstName', 'lastName', 'email', 'department', 'password'],
    onSubmitSuccess: function onSubmitSuccess(result, dispatch, props) {
        dispatch({
            type: "LOGIN",
            user: result["user"]
        });
        __WEBPACK_IMPORTED_MODULE_1_react_router__["browserHistory"].push(result["redirectUrl"]);
    }
})(RegisterForm));

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_App__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Login__ = __webpack_require__(46);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Home = function (_React$Component) {
    _inherits(Home, _React$Component);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
    }

    _createClass(Home, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'h2',
                    null,
                    'Sisev'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('hr', null),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__Login__["a" /* default */], null)
            );
        }
    }]);

    return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(function (state) {
    return state.app;
}, __WEBPACK_IMPORTED_MODULE_2__store_App__["a" /* actionCreators */])(Home));

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Layout; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_NavMenu__ = __webpack_require__(85);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Layout = function (_React$Component) {
    _inherits(Layout, _React$Component);

    function Layout() {
        _classCallCheck(this, Layout);

        return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
    }

    _createClass(Layout, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'div',
                { className: 'container-fluid' },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'div',
                    { className: 'row' },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        'div',
                        { className: 'col-sm-3' },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__components_NavMenu__["a" /* NavMenu */], null)
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        'div',
                        { className: 'col-sm-9' },
                        this.props.body
                    )
                )
            );
        }
    }]);

    return Layout;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_registerForm__ = __webpack_require__(86);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Register = function (_React$Component) {
    _inherits(Register, _React$Component);

    function Register() {
        _classCallCheck(this, Register);

        return _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).apply(this, arguments));
    }

    _createClass(Register, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'h2',
                    null,
                    'Cadastro'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'h4',
                    null,
                    'Crie um novo usu\xE1rio.'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('hr', null),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__components_registerForm__["a" /* default */], null)
            );
        }
    }]);

    return Register;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Register);

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return validateField; });
var validateName = function validateName(name) {
    if (!name) return "Campo obrigatório";
    if (name.length < 4) return "Muito curto";
    return undefined;
};
var validateNotEmpty = function validateNotEmpty(text) {
    if (!text) return "Campo obrigatório";
    return undefined;
};
var validateEmail = function validateEmail(email) {
    if (!email) return "Campo obrigatório";
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) return "Email inválido";
    return undefined;
};
var validateDepartment = function validateDepartment(department) {
    return undefined;
};
var validatePassword = function validatePassword(password) {
    if (!password) return "Campo obrigatório";
    return undefined;
};
var validatePasswordConfirm = function validatePasswordConfirm(values) {
    if (values["password"] != values["passwordConfirm"]) return "Confirmação diferente da senha";
    return undefined;
};
var validateGlobal = function validateGlobal(global) {
    return undefined;
};
var validationFuncs = {
    "email": validateEmail,
    "name": validateName,
    "firstName": validateName,
    "lastName": validateName,
    "department": validateDepartment,
    "password": validatePassword,
    "passwordConfirm": validatePasswordConfirm,
    "username": validateNotEmpty,
    "global": validateGlobal,
    "remember": validateGlobal,
    "cpf": validateGlobal
};
var validateField = function validateField(field, value, allValues) {
    if (field == "passwordConfirm") return validationFuncs[field](allValues);
    return validationFuncs[field](value);
};

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_form__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(25);


// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
var reducers = {
    app: __WEBPACK_IMPORTED_MODULE_1__App__["b" /* reducer */],
    form: __WEBPACK_IMPORTED_MODULE_0_redux_form__["reducer"]
};

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _extendableBuiltin(cls) {
  function ExtendableBuiltin() {
    cls.apply(this, arguments);
  }

  ExtendableBuiltin.prototype = Object.create(cls.prototype, {
    constructor: {
      value: cls,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(ExtendableBuiltin, cls);
  } else {
    ExtendableBuiltin.__proto__ = cls;
  }

  return ExtendableBuiltin;
}

var ExtendableError = function (_extendableBuiltin2) {
  _inherits(ExtendableError, _extendableBuiltin2);

  function ExtendableError() {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    _classCallCheck(this, ExtendableError);

    // extending Error is weird and does not propagate `message`
    var _this = _possibleConstructorReturn(this, (ExtendableError.__proto__ || Object.getPrototypeOf(ExtendableError)).call(this, message));

    Object.defineProperty(_this, 'message', {
      configurable: true,
      enumerable: false,
      value: message,
      writable: true
    });

    Object.defineProperty(_this, 'name', {
      configurable: true,
      enumerable: false,
      value: _this.constructor.name,
      writable: true
    });

    if (Error.hasOwnProperty('captureStackTrace')) {
      Error.captureStackTrace(_this, _this.constructor);
      return _possibleConstructorReturn(_this);
    }

    Object.defineProperty(_this, 'stack', {
      configurable: true,
      enumerable: false,
      value: new Error(message).stack,
      writable: true
    });
    return _this;
  }

  return ExtendableError;
}(_extendableBuiltin(Error));

exports.default = ExtendableError;
module.exports = exports['default'];


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(9),
    root = __webpack_require__(5);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(143),
    hashDelete = __webpack_require__(144),
    hashGet = __webpack_require__(145),
    hashHas = __webpack_require__(146),
    hashSet = __webpack_require__(147);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(9),
    root = __webpack_require__(5);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(9),
    root = __webpack_require__(5);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(28),
    setCacheAdd = __webpack_require__(168),
    setCacheHas = __webpack_require__(169);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(9),
    root = __webpack_require__(5);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),
/* 99 */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),
/* 100 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),
/* 101 */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),
/* 102 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(17),
    eq = __webpack_require__(12);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7);

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(52),
    keys = __webpack_require__(40);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(101),
    isArray = __webpack_require__(3);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),
/* 107 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(14),
    isObjectLike = __webpack_require__(10);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(29),
    equalArrays = __webpack_require__(57),
    equalByTag = __webpack_require__(135),
    equalObjects = __webpack_require__(136),
    getTag = __webpack_require__(140),
    isArray = __webpack_require__(3),
    isBuffer = __webpack_require__(36),
    isTypedArray = __webpack_require__(39);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(29),
    baseIsEqual = __webpack_require__(30);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(37),
    isMasked = __webpack_require__(151),
    isObject = __webpack_require__(7),
    toSource = __webpack_require__(61);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(14),
    isLength = __webpack_require__(38),
    isObjectLike = __webpack_require__(10);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(116),
    baseMatchesProperty = __webpack_require__(117),
    identity = __webpack_require__(34),
    isArray = __webpack_require__(3),
    property = __webpack_require__(184);

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(33),
    nativeKeys = __webpack_require__(164);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7),
    isPrototype = __webpack_require__(33),
    nativeKeysIn = __webpack_require__(165);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(110),
    getMatchData = __webpack_require__(138),
    matchesStrictComparable = __webpack_require__(59);

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(30),
    get = __webpack_require__(179),
    hasIn = __webpack_require__(180),
    isKey = __webpack_require__(32),
    isStrictComparable = __webpack_require__(58),
    matchesStrictComparable = __webpack_require__(59),
    toKey = __webpack_require__(11);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(29),
    assignMergeValue = __webpack_require__(51),
    baseFor = __webpack_require__(52),
    baseMergeDeep = __webpack_require__(119),
    isObject = __webpack_require__(7),
    keysIn = __webpack_require__(63);

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    if (isObject(srcValue)) {
      stack || (stack = new Stack);
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(object[key], srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

module.exports = baseMerge;


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var assignMergeValue = __webpack_require__(51),
    cloneBuffer = __webpack_require__(129),
    cloneTypedArray = __webpack_require__(130),
    copyArray = __webpack_require__(55),
    initCloneObject = __webpack_require__(148),
    isArguments = __webpack_require__(35),
    isArray = __webpack_require__(3),
    isArrayLikeObject = __webpack_require__(181),
    isBuffer = __webpack_require__(36),
    isFunction = __webpack_require__(37),
    isObject = __webpack_require__(7),
    isPlainObject = __webpack_require__(258),
    isTypedArray = __webpack_require__(39),
    toPlainObject = __webpack_require__(187);

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = object[key],
      srcValue = source[key],
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

module.exports = baseMergeDeep;


/***/ }),
/* 120 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(53);

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(34),
    overRest = __webpack_require__(167),
    setToString = __webpack_require__(171);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(178),
    defineProperty = __webpack_require__(56),
    identity = __webpack_require__(34);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),
/* 124 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(77),
    arrayMap = __webpack_require__(50),
    isArray = __webpack_require__(3),
    isSymbol = __webpack_require__(21);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 126 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 127 */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(48);

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(5);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(43)(module)))

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(128);

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(103),
    baseAssignValue = __webpack_require__(17);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(5);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(122),
    isIterateeCall = __webpack_require__(149);

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),
/* 134 */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(77),
    Uint8Array = __webpack_require__(48),
    eq = __webpack_require__(12),
    equalArrays = __webpack_require__(57),
    mapToArray = __webpack_require__(162),
    setToArray = __webpack_require__(170);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(137);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(106),
    getSymbols = __webpack_require__(139),
    keys = __webpack_require__(40);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(58),
    keys = __webpack_require__(40);

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(100),
    stubArray = __webpack_require__(185);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(93),
    Map = __webpack_require__(27),
    Promise = __webpack_require__(95),
    Set = __webpack_require__(96),
    WeakMap = __webpack_require__(98),
    baseGetTag = __webpack_require__(14),
    toSource = __webpack_require__(61);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),
/* 141 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(54),
    isArguments = __webpack_require__(35),
    isArray = __webpack_require__(3),
    isIndex = __webpack_require__(31),
    isLength = __webpack_require__(38),
    toKey = __webpack_require__(11);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(19);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 144 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(19);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(19);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(19);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(104),
    getPrototype = __webpack_require__(256),
    isPrototype = __webpack_require__(33);

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(12),
    isArrayLike = __webpack_require__(20),
    isIndex = __webpack_require__(31),
    isObject = __webpack_require__(7);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),
/* 150 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(132);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 152 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(16);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(16);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(16);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(16);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(94),
    ListCache = __webpack_require__(15),
    Map = __webpack_require__(27);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(18);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(18);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(18);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(18);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 162 */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(182);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(257);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 165 */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(255);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(43)(module)))

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(99);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),
/* 168 */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),
/* 169 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),
/* 170 */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(123),
    shortOut = __webpack_require__(172);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),
/* 172 */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(15);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),
/* 174 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),
/* 175 */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),
/* 176 */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(15),
    Map = __webpack_require__(27),
    MapCache = __webpack_require__(28);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),
/* 178 */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(53);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(107),
    hasPath = __webpack_require__(142);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(20),
    isObjectLike = __webpack_require__(10);

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(28);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

var baseMerge = __webpack_require__(118),
    createAssigner = __webpack_require__(133);

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

module.exports = merge;


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(120),
    basePropertyDeep = __webpack_require__(121),
    isKey = __webpack_require__(32),
    toKey = __webpack_require__(11);

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),
/* 185 */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),
/* 186 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(131),
    keysIn = __webpack_require__(63);

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

module.exports = toPlainObject;


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(6);

var _createFieldProps2 = __webpack_require__(68);

var _createFieldProps3 = _interopRequireDefault(_createFieldProps2);

var _onChangeValue = __webpack_require__(72);

var _onChangeValue2 = _interopRequireDefault(_onChangeValue);

var _eventConsts = __webpack_require__(250);

var _plain = __webpack_require__(0);

var _plain2 = _interopRequireDefault(_plain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propsToNotUpdateFor = ['_reduxForm'];

var createConnectedField = function createConnectedField(_ref) {
  var deepEqual = _ref.deepEqual,
      getIn = _ref.getIn,
      toJS = _ref.toJS;

  var getSyncError = function getSyncError(syncErrors, name) {
    var error = _plain2.default.getIn(syncErrors, name);
    // Because the error for this field might not be at a level in the error structure where
    // it can be set directly, it might need to be unwrapped from the _error property
    return error && error._error ? error._error : error;
  };

  var getSyncWarning = function getSyncWarning(syncWarnings, name) {
    var warning = getIn(syncWarnings, name);
    // Because the warning for this field might not be at a level in the warning structure where
    // it can be set directly, it might need to be unwrapped from the _warning property
    return warning && warning._warning ? warning._warning : warning;
  };

  var ConnectedField = function (_Component) {
    _inherits(ConnectedField, _Component);

    function ConnectedField(props) {
      _classCallCheck(this, ConnectedField);

      var _this = _possibleConstructorReturn(this, (ConnectedField.__proto__ || Object.getPrototypeOf(ConnectedField)).call(this, props));

      _this.handleChange = _this.handleChange.bind(_this);
      _this.handleFocus = _this.handleFocus.bind(_this);
      _this.handleBlur = _this.handleBlur.bind(_this);
      _this.handleDragStart = _this.handleDragStart.bind(_this);
      _this.handleDrop = _this.handleDrop.bind(_this);
      return _this;
    }

    _createClass(ConnectedField, [{
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(nextProps) {
        var _this2 = this;

        var nextPropsKeys = Object.keys(nextProps);
        var thisPropsKeys = Object.keys(this.props);
        return nextPropsKeys.length !== thisPropsKeys.length || nextPropsKeys.some(function (prop) {
          return !~propsToNotUpdateFor.indexOf(prop) && !deepEqual(_this2.props[prop], nextProps[prop]);
        });
      }
    }, {
      key: 'isPristine',
      value: function isPristine() {
        return this.props.pristine;
      }
    }, {
      key: 'getValue',
      value: function getValue() {
        return this.props.value;
      }
    }, {
      key: 'getRenderedComponent',
      value: function getRenderedComponent() {
        return this.refs.renderedComponent;
      }
    }, {
      key: 'handleChange',
      value: function handleChange(event) {
        var _props = this.props,
            name = _props.name,
            dispatch = _props.dispatch,
            parse = _props.parse,
            normalize = _props.normalize,
            onChange = _props.onChange,
            _reduxForm = _props._reduxForm,
            previousValue = _props.value;

        var newValue = (0, _onChangeValue2.default)(event, { name: name, parse: parse, normalize: normalize });

        var defaultPrevented = false;
        if (onChange) {
          onChange(_extends({}, event, {
            preventDefault: function preventDefault() {
              defaultPrevented = true;
              return event.preventDefault();
            }
          }), newValue, previousValue);
        }
        if (!defaultPrevented) {
          // dispatch change action
          dispatch(_reduxForm.change(name, newValue));
        }
      }
    }, {
      key: 'handleFocus',
      value: function handleFocus(event) {
        var _props2 = this.props,
            name = _props2.name,
            dispatch = _props2.dispatch,
            onFocus = _props2.onFocus,
            _reduxForm = _props2._reduxForm;


        var defaultPrevented = false;
        if (onFocus) {
          onFocus(_extends({}, event, {
            preventDefault: function preventDefault() {
              defaultPrevented = true;
              return event.preventDefault();
            }
          }));
        }

        if (!defaultPrevented) {
          dispatch(_reduxForm.focus(name));
        }
      }
    }, {
      key: 'handleBlur',
      value: function handleBlur(event) {
        var _props3 = this.props,
            name = _props3.name,
            dispatch = _props3.dispatch,
            parse = _props3.parse,
            normalize = _props3.normalize,
            onBlur = _props3.onBlur,
            _reduxForm = _props3._reduxForm,
            _value = _props3._value,
            previousValue = _props3.value;

        var newValue = (0, _onChangeValue2.default)(event, { name: name, parse: parse, normalize: normalize });

        // for checkbox and radio, if the value property of checkbox or radio equals
        // the value passed by blur event, then fire blur action with previousValue.
        if (newValue === _value && _value !== undefined) {
          newValue = previousValue;
        }

        var defaultPrevented = false;
        if (onBlur) {
          onBlur(_extends({}, event, {
            preventDefault: function preventDefault() {
              defaultPrevented = true;
              return event.preventDefault();
            }
          }), newValue, previousValue);
        }

        if (!defaultPrevented) {
          // dispatch blur action
          dispatch(_reduxForm.blur(name, newValue));

          // call post-blur callback
          if (_reduxForm.asyncValidate) {
            _reduxForm.asyncValidate(name, newValue);
          }
        }
      }
    }, {
      key: 'handleDragStart',
      value: function handleDragStart(event) {
        var _props4 = this.props,
            onDragStart = _props4.onDragStart,
            value = _props4.value;

        event.dataTransfer.setData(_eventConsts.dataKey, value == null ? '' : value);

        if (onDragStart) {
          onDragStart(event);
        }
      }
    }, {
      key: 'handleDrop',
      value: function handleDrop(event) {
        var _props5 = this.props,
            name = _props5.name,
            dispatch = _props5.dispatch,
            onDrop = _props5.onDrop,
            _reduxForm = _props5._reduxForm,
            previousValue = _props5.value;

        var newValue = event.dataTransfer.getData(_eventConsts.dataKey);

        var defaultPrevented = false;
        if (onDrop) {
          onDrop(_extends({}, event, {
            preventDefault: function preventDefault() {
              defaultPrevented = true;
              return event.preventDefault();
            }
          }), newValue, previousValue);
        }

        if (!defaultPrevented) {
          // dispatch change action
          dispatch(_reduxForm.change(name, newValue));
          event.preventDefault();
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _props6 = this.props,
            component = _props6.component,
            withRef = _props6.withRef,
            name = _props6.name,
            _reduxForm = _props6._reduxForm,
            normalize = _props6.normalize,
            onBlur = _props6.onBlur,
            onChange = _props6.onChange,
            onFocus = _props6.onFocus,
            onDragStart = _props6.onDragStart,
            onDrop = _props6.onDrop,
            rest = _objectWithoutProperties(_props6, ['component', 'withRef', 'name', '_reduxForm', 'normalize', 'onBlur', 'onChange', 'onFocus', 'onDragStart', 'onDrop']);

        var _createFieldProps = (0, _createFieldProps3.default)({ getIn: getIn, toJS: toJS }, name, _extends({}, rest, {
          form: _reduxForm.form,
          onBlur: this.handleBlur,
          onChange: this.handleChange,
          onDrop: this.handleDrop,
          onDragStart: this.handleDragStart,
          onFocus: this.handleFocus
        })),
            custom = _createFieldProps.custom,
            props = _objectWithoutProperties(_createFieldProps, ['custom']);

        if (withRef) {
          custom.ref = 'renderedComponent';
        }
        if (typeof component === 'string') {
          var input = props.input,
              meta = props.meta; // eslint-disable-line no-unused-vars
          // flatten input into other props

          return (0, _react.createElement)(component, _extends({}, input, custom));
        } else {
          return (0, _react.createElement)(component, _extends({}, props, custom));
        }
      }
    }]);

    return ConnectedField;
  }(_react.Component);

  ConnectedField.propTypes = {
    component: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]).isRequired,
    props: _propTypes2.default.object
  };

  var connector = (0, _reactRedux.connect)(function (state, ownProps) {
    var name = ownProps.name,
        _ownProps$_reduxForm = ownProps._reduxForm,
        initialValues = _ownProps$_reduxForm.initialValues,
        getFormState = _ownProps$_reduxForm.getFormState;

    var formState = getFormState(state);
    var initialState = getIn(formState, 'initial.' + name);
    var initial = initialState !== undefined ? initialState : initialValues && getIn(initialValues, name);
    var value = getIn(formState, 'values.' + name);
    var submitting = getIn(formState, 'submitting');
    var syncError = getSyncError(getIn(formState, 'syncErrors'), name);
    var syncWarning = getSyncWarning(getIn(formState, 'syncWarnings'), name);
    var pristine = deepEqual(value, initial);
    return {
      asyncError: getIn(formState, 'asyncErrors.' + name),
      asyncValidating: getIn(formState, 'asyncValidating') === name,
      dirty: !pristine,
      pristine: pristine,
      state: getIn(formState, 'fields.' + name),
      submitError: getIn(formState, 'submitErrors.' + name),
      submitFailed: getIn(formState, 'submitFailed'),
      submitting: submitting,
      syncError: syncError,
      syncWarning: syncWarning,
      initial: initial,
      value: value,
      _value: ownProps.value // save value passed in (for checkboxes)
    };
  }, undefined, undefined, { withRef: true });
  return connector(ConnectedField);
};

exports.default = createConnectedField;

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mapValues2 = __webpack_require__(64);

var _mapValues3 = _interopRequireDefault(_mapValues2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(6);

var _redux = __webpack_require__(44);

var _createFieldArrayProps = __webpack_require__(199);

var _createFieldArrayProps2 = _interopRequireDefault(_createFieldArrayProps);

var _plain = __webpack_require__(0);

var _plain2 = _interopRequireDefault(_plain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propsToNotUpdateFor = ['_reduxForm', 'value'];

var createConnectedFieldArray = function createConnectedFieldArray(_ref) {
  var deepEqual = _ref.deepEqual,
      getIn = _ref.getIn,
      size = _ref.size;

  var getSyncError = function getSyncError(syncErrors, name) {
    // For an array, the error can _ONLY_ be under _error.
    // This is why this getSyncError is not the same as the
    // one in Field.
    return _plain2.default.getIn(syncErrors, name + '._error');
  };

  var getSyncWarning = function getSyncWarning(syncWarnings, name) {
    // For an array, the warning can _ONLY_ be under _warning.
    // This is why this getSyncError is not the same as the
    // one in Field.
    return getIn(syncWarnings, name + '._warning');
  };

  var ConnectedFieldArray = function (_Component) {
    _inherits(ConnectedFieldArray, _Component);

    function ConnectedFieldArray() {
      _classCallCheck(this, ConnectedFieldArray);

      var _this = _possibleConstructorReturn(this, (ConnectedFieldArray.__proto__ || Object.getPrototypeOf(ConnectedFieldArray)).call(this));

      _this.getValue = _this.getValue.bind(_this);
      return _this;
    }

    _createClass(ConnectedFieldArray, [{
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(nextProps) {
        var _this2 = this;

        // Update if the elements of the value array was updated.
        var thisValue = this.props.value;
        var nextValue = nextProps.value;

        if (thisValue && nextValue) {
          if (thisValue.length !== nextValue.length || thisValue.every(function (val) {
            return nextValue.some(function (next) {
              return deepEqual(val, next);
            });
          })) {
            return true;
          }
        }

        var nextPropsKeys = Object.keys(nextProps);
        var thisPropsKeys = Object.keys(this.props);
        return nextPropsKeys.length !== thisPropsKeys.length || nextPropsKeys.some(function (prop) {
          // useful to debug rerenders
          // if (!plain.deepEqual(this.props[ prop ], nextProps[ prop ])) {
          //   console.info(prop, 'changed', this.props[ prop ], '==>', nextProps[ prop ])
          // }
          return !~propsToNotUpdateFor.indexOf(prop) && !deepEqual(_this2.props[prop], nextProps[prop]);
        });
      }
    }, {
      key: 'getRenderedComponent',
      value: function getRenderedComponent() {
        return this.refs.renderedComponent;
      }
    }, {
      key: 'getValue',
      value: function getValue(index) {
        return this.props.value && getIn(this.props.value, index);
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            component = _props.component,
            withRef = _props.withRef,
            name = _props.name,
            _reduxForm = _props._reduxForm,
            validate = _props.validate,
            warn = _props.warn,
            rest = _objectWithoutProperties(_props, ['component', 'withRef', 'name', '_reduxForm', 'validate', 'warn']);

        var props = (0, _createFieldArrayProps2.default)(getIn, name, _reduxForm.form, _reduxForm.sectionPrefix, this.getValue, rest);
        if (withRef) {
          props.ref = 'renderedComponent';
        }
        return (0, _react.createElement)(component, props);
      }
    }, {
      key: 'dirty',
      get: function get() {
        return this.props.dirty;
      }
    }, {
      key: 'pristine',
      get: function get() {
        return this.props.pristine;
      }
    }, {
      key: 'value',
      get: function get() {
        return this.props.value;
      }
    }]);

    return ConnectedFieldArray;
  }(_react.Component);

  ConnectedFieldArray.propTypes = {
    component: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]).isRequired,
    props: _propTypes2.default.object
  };

  ConnectedFieldArray.contextTypes = {
    _reduxForm: _propTypes2.default.object
  };

  var connector = (0, _reactRedux.connect)(function (state, ownProps) {
    var name = ownProps.name,
        _ownProps$_reduxForm = ownProps._reduxForm,
        initialValues = _ownProps$_reduxForm.initialValues,
        getFormState = _ownProps$_reduxForm.getFormState;

    var formState = getFormState(state);
    var initial = getIn(formState, 'initial.' + name) || initialValues && getIn(initialValues, name);
    var value = getIn(formState, 'values.' + name);
    var submitting = getIn(formState, 'submitting');
    var syncError = getSyncError(getIn(formState, 'syncErrors'), name);
    var syncWarning = getSyncWarning(getIn(formState, 'syncWarnings'), name);
    var pristine = deepEqual(value, initial);
    return {
      asyncError: getIn(formState, 'asyncErrors.' + name + '._error'),
      dirty: !pristine,
      pristine: pristine,
      state: getIn(formState, 'fields.' + name),
      submitError: getIn(formState, 'submitErrors.' + name + '._error'),
      submitFailed: getIn(formState, 'submitFailed'),
      submitting: submitting,
      syncError: syncError,
      syncWarning: syncWarning,
      value: value,
      length: size(value)
    };
  }, function (dispatch, ownProps) {
    var name = ownProps.name,
        _reduxForm = ownProps._reduxForm;
    var arrayInsert = _reduxForm.arrayInsert,
        arrayMove = _reduxForm.arrayMove,
        arrayPop = _reduxForm.arrayPop,
        arrayPush = _reduxForm.arrayPush,
        arrayRemove = _reduxForm.arrayRemove,
        arrayRemoveAll = _reduxForm.arrayRemoveAll,
        arrayShift = _reduxForm.arrayShift,
        arraySplice = _reduxForm.arraySplice,
        arraySwap = _reduxForm.arraySwap,
        arrayUnshift = _reduxForm.arrayUnshift;

    return (0, _mapValues3.default)({
      arrayInsert: arrayInsert,
      arrayMove: arrayMove,
      arrayPop: arrayPop,
      arrayPush: arrayPush,
      arrayRemove: arrayRemove,
      arrayRemoveAll: arrayRemoveAll,
      arrayShift: arrayShift,
      arraySplice: arraySplice,
      arraySwap: arraySwap,
      arrayUnshift: arrayUnshift
    }, function (actionCreator) {
      return (0, _redux.bindActionCreators)(actionCreator.bind(null, name), dispatch);
    });
  }, undefined, { withRef: true });
  return connector(ConnectedFieldArray);
};

exports.default = createConnectedFieldArray;

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(6);

var _createFieldProps2 = __webpack_require__(68);

var _createFieldProps3 = _interopRequireDefault(_createFieldProps2);

var _plain = __webpack_require__(0);

var _plain2 = _interopRequireDefault(_plain);

var _onChangeValue = __webpack_require__(72);

var _onChangeValue2 = _interopRequireDefault(_onChangeValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propsToNotUpdateFor = ['_reduxForm'];

var createConnectedFields = function createConnectedFields(_ref) {
  var deepEqual = _ref.deepEqual,
      getIn = _ref.getIn,
      toJS = _ref.toJS,
      size = _ref.size;

  var getSyncError = function getSyncError(syncErrors, name) {
    // Because the error for this field might not be at a level in the error structure where
    // it can be set directly, it might need to be unwrapped from the _error property
    return _plain2.default.getIn(syncErrors, name + '._error') || _plain2.default.getIn(syncErrors, name);
  };

  var getSyncWarning = function getSyncWarning(syncWarnings, name) {
    var warning = getIn(syncWarnings, name);
    // Because the warning for this field might not be at a level in the warning structure where
    // it can be set directly, it might need to be unwrapped from the _warning property
    return warning && warning._warning ? warning._warning : warning;
  };

  var ConnectedFields = function (_Component) {
    _inherits(ConnectedFields, _Component);

    function ConnectedFields(props) {
      _classCallCheck(this, ConnectedFields);

      var _this = _possibleConstructorReturn(this, (ConnectedFields.__proto__ || Object.getPrototypeOf(ConnectedFields)).call(this, props));

      _this.handleChange = _this.handleChange.bind(_this);
      _this.handleFocus = _this.handleFocus.bind(_this);
      _this.handleBlur = _this.handleBlur.bind(_this);

      _this.onChangeFns = props.names.reduce(function (acc, name) {
        acc[name] = function (event) {
          return _this.handleChange(name, event);
        };
        return acc;
      }, {});

      _this.onFocusFns = props.names.reduce(function (acc, name) {
        acc[name] = function () {
          return _this.handleFocus(name);
        };
        return acc;
      }, {});

      _this.onBlurFns = props.names.reduce(function (acc, name) {
        acc[name] = function (event) {
          return _this.handleBlur(name, event);
        };
        return acc;
      }, {});
      return _this;
    }

    _createClass(ConnectedFields, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (this.props.names !== nextProps.names && (size(this.props.names) !== size(nextProps.names) || nextProps.names.some(function (nextName) {
          return !_this2.props._fields[nextName];
        }))) {
          // names is changed. The cached event handlers need to be updated
          this.onChangeFns = nextProps.names.reduce(function (acc, name) {
            acc[name] = function (event) {
              return _this2.handleChange(name, event);
            };
            return acc;
          }, {});

          this.onFocusFns = nextProps.names.reduce(function (acc, name) {
            acc[name] = function () {
              return _this2.handleFocus(name);
            };
            return acc;
          }, {});

          this.onBlurFns = nextProps.names.reduce(function (acc, name) {
            acc[name] = function (event) {
              return _this2.handleBlur(name, event);
            };
            return acc;
          }, {});
        }
      }
    }, {
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(nextProps) {
        var _this3 = this;

        var nextPropsKeys = Object.keys(nextProps);
        var thisPropsKeys = Object.keys(this.props);
        return nextPropsKeys.length !== thisPropsKeys.length || nextPropsKeys.some(function (prop) {
          return !~propsToNotUpdateFor.indexOf(prop) && !deepEqual(_this3.props[prop], nextProps[prop]);
        });
      }
    }, {
      key: 'isDirty',
      value: function isDirty() {
        var _fields = this.props._fields;

        return Object.keys(_fields).some(function (name) {
          return _fields[name].dirty;
        });
      }
    }, {
      key: 'getValues',
      value: function getValues() {
        var _fields = this.props._fields;

        return Object.keys(_fields).reduce(function (accumulator, name) {
          return _plain2.default.setIn(accumulator, name, _fields[name].value);
        }, {});
      }
    }, {
      key: 'getRenderedComponent',
      value: function getRenderedComponent() {
        return this.refs.renderedComponent;
      }
    }, {
      key: 'handleChange',
      value: function handleChange(name, event) {
        var _props = this.props,
            dispatch = _props.dispatch,
            parse = _props.parse,
            normalize = _props.normalize,
            _reduxForm = _props._reduxForm;

        var value = (0, _onChangeValue2.default)(event, { name: name, parse: parse, normalize: normalize });

        dispatch(_reduxForm.change(name, value));
      }
    }, {
      key: 'handleFocus',
      value: function handleFocus(name) {
        var _props2 = this.props,
            dispatch = _props2.dispatch,
            _reduxForm = _props2._reduxForm;

        dispatch(_reduxForm.focus(name));
      }
    }, {
      key: 'handleBlur',
      value: function handleBlur(name, event) {
        var _props3 = this.props,
            dispatch = _props3.dispatch,
            parse = _props3.parse,
            normalize = _props3.normalize,
            _reduxForm = _props3._reduxForm;

        var value = (0, _onChangeValue2.default)(event, { name: name, parse: parse, normalize: normalize });

        // dispatch blur action
        dispatch(_reduxForm.blur(name, value));

        // call post-blur callback
        if (_reduxForm.asyncValidate) {
          _reduxForm.asyncValidate(name, value);
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this4 = this;

        var _props4 = this.props,
            component = _props4.component,
            withRef = _props4.withRef,
            _fields = _props4._fields,
            _reduxForm = _props4._reduxForm,
            rest = _objectWithoutProperties(_props4, ['component', 'withRef', '_fields', '_reduxForm']);

        var sectionPrefix = _reduxForm.sectionPrefix,
            form = _reduxForm.form;

        var _Object$keys$reduce = Object.keys(_fields).reduce(function (accumulator, name) {
          var connectedProps = _fields[name];

          var _createFieldProps = (0, _createFieldProps3.default)({ getIn: getIn, toJS: toJS }, name, _extends({}, connectedProps, rest, {
            form: form,
            onBlur: _this4.onBlurFns[name],
            onChange: _this4.onChangeFns[name],
            onFocus: _this4.onFocusFns[name]
          })),
              custom = _createFieldProps.custom,
              fieldProps = _objectWithoutProperties(_createFieldProps, ['custom']);

          accumulator.custom = custom;
          var fieldName = sectionPrefix ? name.replace(sectionPrefix + '.', '') : name;
          return _plain2.default.setIn(accumulator, fieldName, fieldProps);
        }, {}),
            custom = _Object$keys$reduce.custom,
            props = _objectWithoutProperties(_Object$keys$reduce, ['custom']);

        if (withRef) {
          props.ref = 'renderedComponent';
        }

        return (0, _react.createElement)(component, _extends({}, props, custom));
      }
    }]);

    return ConnectedFields;
  }(_react.Component);

  ConnectedFields.propTypes = {
    component: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]).isRequired,
    _fields: _propTypes2.default.object.isRequired,
    props: _propTypes2.default.object
  };

  var connector = (0, _reactRedux.connect)(function (state, ownProps) {
    var names = ownProps.names,
        _ownProps$_reduxForm = ownProps._reduxForm,
        initialValues = _ownProps$_reduxForm.initialValues,
        getFormState = _ownProps$_reduxForm.getFormState;

    var formState = getFormState(state);
    return {
      _fields: names.reduce(function (accumulator, name) {
        var initialState = getIn(formState, 'initial.' + name);
        var initial = initialState !== undefined ? initialState : initialValues && getIn(initialValues, name);
        var value = getIn(formState, 'values.' + name);
        var syncError = getSyncError(getIn(formState, 'syncErrors'), name);
        var syncWarning = getSyncWarning(getIn(formState, 'syncWarnings'), name);
        var submitting = getIn(formState, 'submitting');
        var pristine = value === initial;
        accumulator[name] = {
          asyncError: getIn(formState, 'asyncErrors.' + name),
          asyncValidating: getIn(formState, 'asyncValidating') === name,
          dirty: !pristine,
          pristine: pristine,
          state: getIn(formState, 'fields.' + name),
          submitError: getIn(formState, 'submitErrors.' + name),
          submitFailed: getIn(formState, 'submitFailed'),
          submitting: submitting,
          syncError: syncError,
          syncWarning: syncWarning,
          value: value,
          _value: ownProps.value // save value passed in (for checkboxes)
        };
        return accumulator;
      }, {})
    };
  }, undefined, undefined, { withRef: true });
  return connector(ConnectedFields);
};

exports.default = createConnectedFields;

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createField = __webpack_require__(197);

var _createField2 = _interopRequireDefault(_createField);

var _plain = __webpack_require__(0);

var _plain2 = _interopRequireDefault(_plain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _createField2.default)(_plain2.default);

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createFieldArray = __webpack_require__(198);

var _createFieldArray2 = _interopRequireDefault(_createFieldArray);

var _plain = __webpack_require__(0);

var _plain2 = _interopRequireDefault(_plain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _createFieldArray2.default)(_plain2.default);

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createFields = __webpack_require__(200);

var _createFields2 = _interopRequireDefault(_createFields);

var _plain = __webpack_require__(0);

var _plain2 = _interopRequireDefault(_plain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _createFields2.default)(_plain2.default);

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_Component) {
  _inherits(Form, _Component);

  function Form(props, context) {
    _classCallCheck(this, Form);

    var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props, context));

    if (!context._reduxForm) {
      throw new Error('Form must be inside a component decorated with reduxForm()');
    }
    return _this;
  }

  _createClass(Form, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.context._reduxForm.registerInnerOnSubmit(this.props.onSubmit);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('form', this.props);
    }
  }]);

  return Form;
}(_react.Component);

Form.propTypes = {
  onSubmit: _propTypes2.default.func.isRequired
};
Form.contextTypes = {
  _reduxForm: _propTypes2.default.object
};

exports.default = Form;

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _prefixName = __webpack_require__(23);

var _prefixName2 = _interopRequireDefault(_prefixName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormSection = function (_Component) {
  _inherits(FormSection, _Component);

  function FormSection(props, context) {
    _classCallCheck(this, FormSection);

    var _this = _possibleConstructorReturn(this, (FormSection.__proto__ || Object.getPrototypeOf(FormSection)).call(this, props, context));

    if (!context._reduxForm) {
      throw new Error('FormSection must be inside a component decorated with reduxForm()');
    }
    return _this;
  }

  _createClass(FormSection, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var context = this.context,
          name = this.props.name;

      return {
        _reduxForm: _extends({}, context._reduxForm, {
          sectionPrefix: (0, _prefixName2.default)(context, name)
        })
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          name = _props.name,
          component = _props.component,
          rest = _objectWithoutProperties(_props, ['children', 'name', 'component']);

      if (_react2.default.isValidElement(children)) {
        return children;
      }

      return (0, _react.createElement)(component, _extends({}, rest, {
        children: children
      }));
    }
  }]);

  return FormSection;
}(_react.Component);

FormSection.propTypes = {
  name: _propTypes2.default.string.isRequired,
  component: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string])
};

FormSection.defaultProps = {
  component: 'div'
};

FormSection.childContextTypes = {
  _reduxForm: _propTypes2.default.object.isRequired
};

FormSection.contextTypes = {
  _reduxForm: _propTypes2.default.object
};

exports.default = FormSection;

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isPromise = __webpack_require__(26);

var _isPromise2 = _interopRequireDefault(_isPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var asyncValidation = function asyncValidation(fn, start, stop, field) {
  start(field);
  var promise = fn();
  if (!(0, _isPromise2.default)(promise)) {
    throw new Error('asyncValidate function passed to reduxForm must return a promise');
  }
  var handleErrors = function handleErrors(rejected) {
    return function (errors) {
      if (errors && Object.keys(errors).length) {
        stop(errors);
        return errors;
      } else if (rejected) {
        stop();
        throw new Error('Asynchronous validation promise was rejected without errors.');
      }
      stop();
      return Promise.resolve();
    };
  };
  return promise.then(handleErrors(false), handleErrors(true));
};

exports.default = asyncValidation;

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _invariant = __webpack_require__(24);

var _invariant2 = _interopRequireDefault(_invariant);

var _ConnectedField = __webpack_require__(188);

var _ConnectedField2 = _interopRequireDefault(_ConnectedField);

var _shallowCompare = __webpack_require__(75);

var _shallowCompare2 = _interopRequireDefault(_shallowCompare);

var _prefixName = __webpack_require__(23);

var _prefixName2 = _interopRequireDefault(_prefixName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var createField = function createField(_ref) {
  var deepEqual = _ref.deepEqual,
      getIn = _ref.getIn,
      setIn = _ref.setIn,
      toJS = _ref.toJS;

  var ConnectedField = (0, _ConnectedField2.default)({
    deepEqual: deepEqual,
    getIn: getIn,
    toJS: toJS
  });

  var Field = function (_Component) {
    _inherits(Field, _Component);

    function Field(props, context) {
      _classCallCheck(this, Field);

      var _this = _possibleConstructorReturn(this, (Field.__proto__ || Object.getPrototypeOf(Field)).call(this, props, context));

      if (!context._reduxForm) {
        throw new Error('Field must be inside a component decorated with reduxForm()');
      }

      _this.normalize = _this.normalize.bind(_this);
      return _this;
    }

    _createClass(Field, [{
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(nextProps, nextState) {
        return (0, _shallowCompare2.default)(this, nextProps, nextState);
      }
    }, {
      key: 'componentWillMount',
      value: function componentWillMount() {
        var _this2 = this;

        this.context._reduxForm.register(this.name, 'Field', function () {
          return _this2.props.validate;
        }, function () {
          return _this2.props.warn;
        });
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (this.props.name !== nextProps.name) {
          // unregister old name
          this.context._reduxForm.unregister(this.name);
          // register new name
          this.context._reduxForm.register((0, _prefixName2.default)(this.context, nextProps.name), 'Field');
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.context._reduxForm.unregister(this.name);
      }
    }, {
      key: 'getRenderedComponent',
      value: function getRenderedComponent() {
        (0, _invariant2.default)(this.props.withRef, 'If you want to access getRenderedComponent(), ' + 'you must specify a withRef prop to Field');
        return this.refs.connected.getWrappedInstance().getRenderedComponent();
      }
    }, {
      key: 'normalize',
      value: function normalize(name, value) {
        var normalize = this.props.normalize;

        if (!normalize) {
          return value;
        }
        var previousValues = this.context._reduxForm.getValues();
        var previousValue = this.value;
        var nextValues = setIn(previousValues, name, value);
        return normalize(value, previousValue, nextValues, previousValues);
      }
    }, {
      key: 'render',
      value: function render() {
        return (0, _react.createElement)(ConnectedField, _extends({}, this.props, {
          name: this.name,
          normalize: this.normalize,
          _reduxForm: this.context._reduxForm,
          ref: 'connected'
        }));
      }
    }, {
      key: 'name',
      get: function get() {
        return (0, _prefixName2.default)(this.context, this.props.name);
      }
    }, {
      key: 'dirty',
      get: function get() {
        return !this.pristine;
      }
    }, {
      key: 'pristine',
      get: function get() {
        return this.refs.connected.getWrappedInstance().isPristine();
      }
    }, {
      key: 'value',
      get: function get() {
        return this.refs.connected && this.refs.connected.getWrappedInstance().getValue();
      }
    }]);

    return Field;
  }(_react.Component);

  Field.propTypes = {
    name: _propTypes2.default.string.isRequired,
    component: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]).isRequired,
    format: _propTypes2.default.func,
    normalize: _propTypes2.default.func,
    onBlur: _propTypes2.default.func,
    onChange: _propTypes2.default.func,
    onFocus: _propTypes2.default.func,
    onDragStart: _propTypes2.default.func,
    onDrop: _propTypes2.default.func,
    parse: _propTypes2.default.func,
    props: _propTypes2.default.object,
    validate: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.arrayOf(_propTypes2.default.func)]),
    warn: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.arrayOf(_propTypes2.default.func)]),
    withRef: _propTypes2.default.bool
  };
  Field.contextTypes = {
    _reduxForm: _propTypes2.default.object
  };

  return Field;
};

exports.default = createField;

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _invariant = __webpack_require__(24);

var _invariant2 = _interopRequireDefault(_invariant);

var _ConnectedFieldArray = __webpack_require__(189);

var _ConnectedFieldArray2 = _interopRequireDefault(_ConnectedFieldArray);

var _prefixName = __webpack_require__(23);

var _prefixName2 = _interopRequireDefault(_prefixName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var toArray = function toArray(value) {
  return Array.isArray(value) ? value : [value];
};

var wrapError = function wrapError(fn, key) {
  return fn && function () {
    var validators = toArray(fn);
    for (var i = 0; i < validators.length; i++) {
      var result = validators[i].apply(validators, arguments);
      if (result) {
        return _defineProperty({}, key, result);
      }
    }
  };
};

var createFieldArray = function createFieldArray(_ref2) {
  var deepEqual = _ref2.deepEqual,
      getIn = _ref2.getIn,
      size = _ref2.size;

  var ConnectedFieldArray = (0, _ConnectedFieldArray2.default)({
    deepEqual: deepEqual,
    getIn: getIn,
    size: size
  });

  var FieldArray = function (_Component) {
    _inherits(FieldArray, _Component);

    function FieldArray(props, context) {
      _classCallCheck(this, FieldArray);

      var _this = _possibleConstructorReturn(this, (FieldArray.__proto__ || Object.getPrototypeOf(FieldArray)).call(this, props, context));

      if (!context._reduxForm) {
        throw new Error('FieldArray must be inside a component decorated with reduxForm()');
      }
      return _this;
    }

    _createClass(FieldArray, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        var _this2 = this;

        this.context._reduxForm.register(this.name, 'FieldArray', function () {
          return wrapError(_this2.props.validate, '_error');
        }, function () {
          return wrapError(_this2.props.warn, '_warning');
        });
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (this.props.name !== nextProps.name) {
          // unregister old name
          this.context._reduxForm.unregister(this.name);
          // register new name
          this.context._reduxForm.register((0, _prefixName2.default)(this.context, nextProps.name), 'FieldArray');
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.context._reduxForm.unregister(this.name);
      }
    }, {
      key: 'getRenderedComponent',
      value: function getRenderedComponent() {
        (0, _invariant2.default)(this.props.withRef, 'If you want to access getRenderedComponent(), ' + 'you must specify a withRef prop to FieldArray');
        return this.refs.connected.getWrappedInstance().getRenderedComponent();
      }
    }, {
      key: 'render',
      value: function render() {
        return (0, _react.createElement)(ConnectedFieldArray, _extends({}, this.props, {
          name: this.name,
          syncError: this.syncError,
          syncWarning: this.syncWarning,
          _reduxForm: this.context._reduxForm,
          ref: 'connected'
        }));
      }
    }, {
      key: 'name',
      get: function get() {
        return (0, _prefixName2.default)(this.context, this.props.name);
      }
    }, {
      key: 'dirty',
      get: function get() {
        return this.refs.connected.getWrappedInstance().dirty;
      }
    }, {
      key: 'pristine',
      get: function get() {
        return this.refs.connected.getWrappedInstance().pristine;
      }
    }, {
      key: 'value',
      get: function get() {
        return this.refs.connected.getWrappedInstance().value;
      }
    }]);

    return FieldArray;
  }(_react.Component);

  FieldArray.propTypes = {
    name: _propTypes2.default.string.isRequired,
    component: _propTypes2.default.func.isRequired,
    props: _propTypes2.default.object,
    validate: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.arrayOf(_propTypes2.default.func)]),
    warn: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.arrayOf(_propTypes2.default.func)]),
    withRef: _propTypes2.default.bool
  };
  FieldArray.contextTypes = {
    _reduxForm: _propTypes2.default.object
  };

  return FieldArray;
};

exports.default = createFieldArray;

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var createFieldArrayProps = function createFieldArrayProps(getIn, name, form, sectionPrefix, getValue, _ref) {
  var arrayInsert = _ref.arrayInsert,
      arrayMove = _ref.arrayMove,
      arrayPop = _ref.arrayPop,
      arrayPush = _ref.arrayPush,
      arrayRemove = _ref.arrayRemove,
      arrayRemoveAll = _ref.arrayRemoveAll,
      arrayShift = _ref.arrayShift,
      arraySplice = _ref.arraySplice,
      arraySwap = _ref.arraySwap,
      arrayUnshift = _ref.arrayUnshift,
      asyncError = _ref.asyncError,
      dirty = _ref.dirty,
      length = _ref.length,
      pristine = _ref.pristine,
      submitError = _ref.submitError,
      state = _ref.state,
      submitFailed = _ref.submitFailed,
      submitting = _ref.submitting,
      syncError = _ref.syncError,
      syncWarning = _ref.syncWarning,
      value = _ref.value,
      props = _ref.props,
      rest = _objectWithoutProperties(_ref, ['arrayInsert', 'arrayMove', 'arrayPop', 'arrayPush', 'arrayRemove', 'arrayRemoveAll', 'arrayShift', 'arraySplice', 'arraySwap', 'arrayUnshift', 'asyncError', 'dirty', 'length', 'pristine', 'submitError', 'state', 'submitFailed', 'submitting', 'syncError', 'syncWarning', 'value', 'props']);

  var error = syncError || asyncError || submitError;
  var warning = syncWarning;
  var fieldName = sectionPrefix ? name.replace(sectionPrefix + '.', '') : name;
  var finalProps = _extends({
    fields: {
      _isFieldArray: true,
      forEach: function forEach(callback) {
        return (value || []).forEach(function (item, index) {
          return callback(fieldName + '[' + index + ']', index, finalProps.fields);
        });
      },
      get: getValue,
      getAll: function getAll() {
        return value;
      },
      insert: arrayInsert,
      length: length,
      map: function map(callback) {
        return (value || []).map(function (item, index) {
          return callback(fieldName + '[' + index + ']', index, finalProps.fields);
        });
      },
      move: arrayMove,
      name: name,
      pop: function pop() {
        arrayPop();
        return getIn(value, length - 1);
      },
      push: arrayPush,
      reduce: function reduce(callback, initial) {
        return (value || []).reduce(function (accumulator, item, index) {
          return callback(accumulator, fieldName + '[' + index + ']', index, finalProps.fields);
        }, initial);
      },
      remove: arrayRemove,
      removeAll: arrayRemoveAll,
      shift: function shift() {
        arrayShift();
        return getIn(value, 0);
      },
      swap: arraySwap,
      unshift: arrayUnshift
    },
    meta: {
      dirty: dirty,
      error: error,
      form: form,
      warning: warning,
      invalid: !!error,
      pristine: pristine,
      submitting: submitting,
      submitFailed: submitFailed,
      valid: !error
    }
  }, props, rest);
  return finalProps;
};

exports.default = createFieldArrayProps;

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _invariant = __webpack_require__(24);

var _invariant2 = _interopRequireDefault(_invariant);

var _ConnectedFields = __webpack_require__(190);

var _ConnectedFields2 = _interopRequireDefault(_ConnectedFields);

var _shallowCompare = __webpack_require__(75);

var _shallowCompare2 = _interopRequireDefault(_shallowCompare);

var _plain = __webpack_require__(0);

var _plain2 = _interopRequireDefault(_plain);

var _prefixName = __webpack_require__(23);

var _prefixName2 = _interopRequireDefault(_prefixName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var validateNameProp = function validateNameProp(prop) {
  if (!prop) {
    return new Error('No "names" prop was specified <Fields/>');
  }
  if (!Array.isArray(prop) && !prop._isFieldArray) {
    return new Error('Invalid prop "names" supplied to <Fields/>. Must be either an array of strings or the fields array generated by FieldArray.');
  }
};

var createFields = function createFields(_ref) {
  var deepEqual = _ref.deepEqual,
      getIn = _ref.getIn,
      toJS = _ref.toJS,
      size = _ref.size;

  var ConnectedFields = (0, _ConnectedFields2.default)({
    deepEqual: deepEqual,
    getIn: getIn,
    toJS: toJS,
    size: size
  });

  var Fields = function (_Component) {
    _inherits(Fields, _Component);

    function Fields(props, context) {
      _classCallCheck(this, Fields);

      var _this = _possibleConstructorReturn(this, (Fields.__proto__ || Object.getPrototypeOf(Fields)).call(this, props, context));

      if (!context._reduxForm) {
        throw new Error('Fields must be inside a component decorated with reduxForm()');
      }
      return _this;
    }

    _createClass(Fields, [{
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(nextProps, nextState) {
        return (0, _shallowCompare2.default)(this, nextProps, nextState);
      }
    }, {
      key: 'componentWillMount',
      value: function componentWillMount() {
        var error = validateNameProp(this.props.names);
        if (error) {
          throw error;
        }
        var context = this.context;
        var register = context._reduxForm.register;

        this.names.forEach(function (name) {
          return register(name, 'Field');
        });
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (!_plain2.default.deepEqual(this.props.names, nextProps.names)) {
          var context = this.context;
          var _context$_reduxForm = context._reduxForm,
              register = _context$_reduxForm.register,
              unregister = _context$_reduxForm.unregister;
          // unregister old name

          this.props.names.forEach(function (name) {
            return unregister((0, _prefixName2.default)(context, name));
          });
          // register new name
          nextProps.names.forEach(function (name) {
            return register((0, _prefixName2.default)(context, name), 'Field');
          });
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        var context = this.context;
        var unregister = context._reduxForm.unregister;

        this.props.names.forEach(function (name) {
          return unregister((0, _prefixName2.default)(context, name));
        });
      }
    }, {
      key: 'getRenderedComponent',
      value: function getRenderedComponent() {
        (0, _invariant2.default)(this.props.withRef, 'If you want to access getRenderedComponent(), ' + 'you must specify a withRef prop to Fields');
        return this.refs.connected.getWrappedInstance().getRenderedComponent();
      }
    }, {
      key: 'render',
      value: function render() {
        var context = this.context;

        return (0, _react.createElement)(ConnectedFields, _extends({}, this.props, {
          names: this.props.names.map(function (name) {
            return (0, _prefixName2.default)(context, name);
          }),
          _reduxForm: this.context._reduxForm,
          ref: 'connected'
        }));
      }
    }, {
      key: 'names',
      get: function get() {
        var context = this.context;

        return this.props.names.map(function (name) {
          return (0, _prefixName2.default)(context, name);
        });
      }
    }, {
      key: 'dirty',
      get: function get() {
        return this.refs.connected.getWrappedInstance().isDirty();
      }
    }, {
      key: 'pristine',
      get: function get() {
        return !this.dirty;
      }
    }, {
      key: 'values',
      get: function get() {
        return this.refs.connected && this.refs.connected.getWrappedInstance().getValues();
      }
    }]);

    return Fields;
  }(_react.Component);

  Fields.propTypes = {
    names: function names(props, propName) {
      return validateNameProp(props[propName]);
    },
    component: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]).isRequired,
    format: _propTypes2.default.func,
    parse: _propTypes2.default.func,
    props: _propTypes2.default.object,
    withRef: _propTypes2.default.bool
  };
  Fields.contextTypes = {
    _reduxForm: _propTypes2.default.object
  };

  return Fields;
};

exports.default = createFields;

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _invariant = __webpack_require__(24);

var _invariant2 = _interopRequireDefault(_invariant);

var _plain = __webpack_require__(0);

var _plain2 = _interopRequireDefault(_plain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createFormValueSelector = function createFormValueSelector(_ref) {
  var getIn = _ref.getIn;
  return function (form) {
    var getFormState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (state) {
      return getIn(state, 'form');
    };

    (0, _invariant2.default)(form, 'Form value must be specified');
    return function (state) {
      for (var _len = arguments.length, fields = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        fields[_key - 1] = arguments[_key];
      }

      (0, _invariant2.default)(fields.length, 'No fields specified');
      return fields.length === 1 ? // only selecting one field, so return its value
      getIn(getFormState(state), form + '.values.' + fields[0]) : // selecting many fields, so return an object of field values
      fields.reduce(function (accumulator, field) {
        var value = getIn(getFormState(state), form + '.values.' + field);
        return value === undefined ? accumulator : _plain2.default.setIn(accumulator, field, value);
      }, {});
    };
  };
};

exports.default = createFormValueSelector;

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionTypes = __webpack_require__(41);

var _deleteInWithCleanUp = __webpack_require__(205);

var _deleteInWithCleanUp2 = _interopRequireDefault(_deleteInWithCleanUp);

var _plain = __webpack_require__(0);

var _plain2 = _interopRequireDefault(_plain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var isReduxFormAction = function isReduxFormAction(action) {
  return action && action.type && action.type.length > _actionTypes.prefix.length && action.type.substring(0, _actionTypes.prefix.length) === _actionTypes.prefix;
};

var createReducer = function createReducer(structure) {
  var _behaviors;

  var deepEqual = structure.deepEqual,
      empty = structure.empty,
      getIn = structure.getIn,
      setIn = structure.setIn,
      deleteIn = structure.deleteIn,
      fromJS = structure.fromJS,
      keys = structure.keys,
      size = structure.size,
      splice = structure.splice;

  var deleteInWithCleanUp = (0, _deleteInWithCleanUp2.default)(structure);
  var doSplice = function doSplice(state, key, field, index, removeNum, value, force) {
    var existing = getIn(state, key + '.' + field);
    return existing || force ? setIn(state, key + '.' + field, splice(existing, index, removeNum, value)) : state;
  };
  var doPlainSplice = function doPlainSplice(state, key, field, index, removeNum, value, force) {
    var slice = getIn(state, key);
    var existing = _plain2.default.getIn(slice, field);
    return existing || force ? setIn(state, key, _plain2.default.setIn(slice, field, _plain2.default.splice(existing, index, removeNum, value))) : state;
  };
  var rootKeys = ['values', 'fields', 'submitErrors', 'asyncErrors'];
  var arraySplice = function arraySplice(state, field, index, removeNum, value) {
    var result = state;
    var nonValuesValue = value != null ? empty : undefined;
    result = doSplice(result, 'values', field, index, removeNum, value, true);
    result = doSplice(result, 'fields', field, index, removeNum, nonValuesValue);
    result = doPlainSplice(result, 'syncErrors', field, index, removeNum, undefined);
    result = doPlainSplice(result, 'syncWarnings', field, index, removeNum, undefined);
    result = doSplice(result, 'submitErrors', field, index, removeNum, undefined);
    result = doSplice(result, 'asyncErrors', field, index, removeNum, undefined);
    return result;
  };

  var behaviors = (_behaviors = {}, _defineProperty(_behaviors, _actionTypes.ARRAY_INSERT, function (state, _ref) {
    var _ref$meta = _ref.meta,
        field = _ref$meta.field,
        index = _ref$meta.index,
        payload = _ref.payload;

    return arraySplice(state, field, index, 0, payload);
  }), _defineProperty(_behaviors, _actionTypes.ARRAY_MOVE, function (state, _ref2) {
    var _ref2$meta = _ref2.meta,
        field = _ref2$meta.field,
        from = _ref2$meta.from,
        to = _ref2$meta.to;

    var array = getIn(state, 'values.' + field);
    var length = array ? size(array) : 0;
    var result = state;
    if (length) {
      rootKeys.forEach(function (key) {
        var path = key + '.' + field;
        if (getIn(result, path)) {
          var value = getIn(result, path + '[' + from + ']');
          result = setIn(result, path, splice(getIn(result, path), from, 1)); // remove
          result = setIn(result, path, splice(getIn(result, path), to, 0, value)); // insert
        }
      });
    }
    return result;
  }), _defineProperty(_behaviors, _actionTypes.ARRAY_POP, function (state, _ref3) {
    var field = _ref3.meta.field;

    var array = getIn(state, 'values.' + field);
    var length = array ? size(array) : 0;
    return length ? arraySplice(state, field, length - 1, 1) : state;
  }), _defineProperty(_behaviors, _actionTypes.ARRAY_PUSH, function (state, _ref4) {
    var field = _ref4.meta.field,
        payload = _ref4.payload;

    var array = getIn(state, 'values.' + field);
    var length = array ? size(array) : 0;
    return arraySplice(state, field, length, 0, payload);
  }), _defineProperty(_behaviors, _actionTypes.ARRAY_REMOVE, function (state, _ref5) {
    var _ref5$meta = _ref5.meta,
        field = _ref5$meta.field,
        index = _ref5$meta.index;

    return arraySplice(state, field, index, 1);
  }), _defineProperty(_behaviors, _actionTypes.ARRAY_REMOVE_ALL, function (state, _ref6) {
    var field = _ref6.meta.field;

    var array = getIn(state, 'values.' + field);
    var length = array ? size(array) : 0;
    return length ? arraySplice(state, field, 0, length) : state;
  }), _defineProperty(_behaviors, _actionTypes.ARRAY_SHIFT, function (state, _ref7) {
    var field = _ref7.meta.field;

    return arraySplice(state, field, 0, 1);
  }), _defineProperty(_behaviors, _actionTypes.ARRAY_SPLICE, function (state, _ref8) {
    var _ref8$meta = _ref8.meta,
        field = _ref8$meta.field,
        index = _ref8$meta.index,
        removeNum = _ref8$meta.removeNum,
        payload = _ref8.payload;

    return arraySplice(state, field, index, removeNum, payload);
  }), _defineProperty(_behaviors, _actionTypes.ARRAY_SWAP, function (state, _ref9) {
    var _ref9$meta = _ref9.meta,
        field = _ref9$meta.field,
        indexA = _ref9$meta.indexA,
        indexB = _ref9$meta.indexB;

    var result = state;
    rootKeys.forEach(function (key) {
      var valueA = getIn(result, key + '.' + field + '[' + indexA + ']');
      var valueB = getIn(result, key + '.' + field + '[' + indexB + ']');
      if (valueA !== undefined || valueB !== undefined) {
        result = setIn(result, key + '.' + field + '[' + indexA + ']', valueB);
        result = setIn(result, key + '.' + field + '[' + indexB + ']', valueA);
      }
    });
    return result;
  }), _defineProperty(_behaviors, _actionTypes.ARRAY_UNSHIFT, function (state, _ref10) {
    var field = _ref10.meta.field,
        payload = _ref10.payload;

    return arraySplice(state, field, 0, 0, payload);
  }), _defineProperty(_behaviors, _actionTypes.AUTOFILL, function (state, _ref11) {
    var field = _ref11.meta.field,
        payload = _ref11.payload;

    var result = state;
    result = deleteInWithCleanUp(result, 'asyncErrors.' + field);
    result = deleteInWithCleanUp(result, 'submitErrors.' + field);
    result = setIn(result, 'fields.' + field + '.autofilled', true);
    result = setIn(result, 'values.' + field, payload);
    return result;
  }), _defineProperty(_behaviors, _actionTypes.BLUR, function (state, _ref12) {
    var _ref12$meta = _ref12.meta,
        field = _ref12$meta.field,
        touch = _ref12$meta.touch,
        payload = _ref12.payload;

    var result = state;
    var initial = getIn(result, 'initial.' + field);
    if (initial === undefined && payload === '') {
      result = deleteInWithCleanUp(result, 'values.' + field);
    } else if (payload !== undefined) {
      result = setIn(result, 'values.' + field, payload);
    }
    if (field === getIn(result, 'active')) {
      result = deleteIn(result, 'active');
    }
    result = deleteIn(result, 'fields.' + field + '.active');
    if (touch) {
      result = setIn(result, 'fields.' + field + '.touched', true);
      result = setIn(result, 'anyTouched', true);
    }
    return result;
  }), _defineProperty(_behaviors, _actionTypes.CHANGE, function (state, _ref13) {
    var _ref13$meta = _ref13.meta,
        field = _ref13$meta.field,
        touch = _ref13$meta.touch,
        persistentSubmitErrors = _ref13$meta.persistentSubmitErrors,
        payload = _ref13.payload;

    var result = state;
    var initial = getIn(result, 'initial.' + field);
    if (initial === undefined && payload === '') {
      result = deleteInWithCleanUp(result, 'values.' + field);
    } else if (payload !== undefined) {
      result = setIn(result, 'values.' + field, payload);
    }
    result = deleteInWithCleanUp(result, 'asyncErrors.' + field);
    if (!persistentSubmitErrors) {
      result = deleteInWithCleanUp(result, 'submitErrors.' + field);
    }
    result = deleteInWithCleanUp(result, 'fields.' + field + '.autofilled');
    if (touch) {
      result = setIn(result, 'fields.' + field + '.touched', true);
      result = setIn(result, 'anyTouched', true);
    }
    return result;
  }), _defineProperty(_behaviors, _actionTypes.CLEAR_SUBMIT, function (state) {
    return deleteIn(state, 'triggerSubmit');
  }), _defineProperty(_behaviors, _actionTypes.CLEAR_SUBMIT_ERRORS, function (state) {
    return deleteInWithCleanUp(state, 'submitErrors');
  }), _defineProperty(_behaviors, _actionTypes.CLEAR_ASYNC_ERROR, function (state, _ref14) {
    var field = _ref14.meta.field;

    return deleteIn(state, 'asyncErrors.' + field);
  }), _defineProperty(_behaviors, _actionTypes.FOCUS, function (state, _ref15) {
    var field = _ref15.meta.field;

    var result = state;
    var previouslyActive = getIn(state, 'active');
    result = deleteIn(result, 'fields.' + previouslyActive + '.active');
    result = setIn(result, 'fields.' + field + '.visited', true);
    result = setIn(result, 'fields.' + field + '.active', true);
    result = setIn(result, 'active', field);
    return result;
  }), _defineProperty(_behaviors, _actionTypes.INITIALIZE, function (state, _ref16) {
    var payload = _ref16.payload,
        _ref16$meta = _ref16.meta,
        keepDirty = _ref16$meta.keepDirty,
        keepSubmitSucceeded = _ref16$meta.keepSubmitSucceeded;

    var mapData = fromJS(payload);
    var result = empty; // clean all field state

    // persist old warnings, they will get recalculated if the new form values are different from the old values
    var warning = getIn(state, 'warning');
    if (warning) {
      result = setIn(result, 'warning', warning);
    }
    var syncWarnings = getIn(state, 'syncWarnings');
    if (syncWarnings) {
      result = setIn(result, 'syncWarnings', syncWarnings);
    }

    // persist old errors, they will get recalculated if the new form values are different from the old values
    var error = getIn(state, 'error');
    if (error) {
      result = setIn(result, 'error', error);
    }
    var syncErrors = getIn(state, 'syncErrors');
    if (syncErrors) {
      result = setIn(result, 'syncErrors', syncErrors);
    }

    var registeredFields = getIn(state, 'registeredFields');
    if (registeredFields) {
      result = setIn(result, 'registeredFields', registeredFields);
    }
    var newValues = mapData;
    if (keepDirty && registeredFields) {
      //
      // Keep the value of dirty fields while updating the value of
      // pristine fields. This way, apps can reinitialize forms while
      // avoiding stomping on user edits.
      //
      // Note 1: The initialize action replaces all initial values
      // regardless of keepDirty.
      //
      // Note 2: When a field is dirty, keepDirty is enabled, and the field
      // value is the same as the new initial value for the field, the
      // initialize action causes the field to become pristine. That effect
      // is what we want.
      //
      var previousValues = getIn(state, 'values');
      var previousInitialValues = getIn(state, 'initial');
      keys(registeredFields).forEach(function (name) {
        var previousInitialValue = getIn(previousInitialValues, name);
        var previousValue = getIn(previousValues, name);
        if (!deepEqual(previousValue, previousInitialValue)) {
          // This field was dirty. Restore the dirty value.
          newValues = setIn(newValues, name, previousValue);
        }
      });
    }
    if (keepSubmitSucceeded && getIn(state, 'submitSucceeded')) {
      result = setIn(result, 'submitSucceeded', true);
    }
    result = setIn(result, 'values', newValues);
    result = setIn(result, 'initial', mapData);
    return result;
  }), _defineProperty(_behaviors, _actionTypes.REGISTER_FIELD, function (state, _ref17) {
    var _ref17$payload = _ref17.payload,
        name = _ref17$payload.name,
        type = _ref17$payload.type;

    var key = 'registeredFields[\'' + name + '\']';
    var field = getIn(state, key);
    if (field) {
      var count = getIn(field, 'count') + 1;
      field = setIn(field, 'count', count);
    } else {
      field = fromJS({ name: name, type: type, count: 1 });
    }
    return setIn(state, key, field);
  }), _defineProperty(_behaviors, _actionTypes.RESET, function (state) {
    var result = empty;
    var registeredFields = getIn(state, 'registeredFields');
    if (registeredFields) {
      result = setIn(result, 'registeredFields', registeredFields);
    }
    var values = getIn(state, 'initial');
    if (values) {
      result = setIn(result, 'values', values);
      result = setIn(result, 'initial', values);
    }
    return result;
  }), _defineProperty(_behaviors, _actionTypes.SUBMIT, function (state) {
    return setIn(state, 'triggerSubmit', true);
  }), _defineProperty(_behaviors, _actionTypes.START_ASYNC_VALIDATION, function (state, _ref18) {
    var field = _ref18.meta.field;

    return setIn(state, 'asyncValidating', field || true);
  }), _defineProperty(_behaviors, _actionTypes.START_SUBMIT, function (state) {
    return setIn(state, 'submitting', true);
  }), _defineProperty(_behaviors, _actionTypes.STOP_ASYNC_VALIDATION, function (state, _ref19) {
    var payload = _ref19.payload;

    var result = state;
    result = deleteIn(result, 'asyncValidating');
    if (payload && Object.keys(payload).length) {
      var _error = payload._error,
          fieldErrors = _objectWithoutProperties(payload, ['_error']);

      if (_error) {
        result = setIn(result, 'error', _error);
      }
      if (Object.keys(fieldErrors).length) {
        result = setIn(result, 'asyncErrors', fromJS(fieldErrors));
      } else {
        result = deleteIn(result, 'asyncErrors');
      }
    } else {
      result = deleteIn(result, 'error');
      result = deleteIn(result, 'asyncErrors');
    }
    return result;
  }), _defineProperty(_behaviors, _actionTypes.STOP_SUBMIT, function (state, _ref20) {
    var payload = _ref20.payload;

    var result = state;
    result = deleteIn(result, 'submitting');
    result = deleteIn(result, 'submitFailed');
    result = deleteIn(result, 'submitSucceeded');
    if (payload && Object.keys(payload).length) {
      var _error = payload._error,
          fieldErrors = _objectWithoutProperties(payload, ['_error']);

      if (_error) {
        result = setIn(result, 'error', _error);
      } else {
        result = deleteIn(result, 'error');
      }
      if (Object.keys(fieldErrors).length) {
        result = setIn(result, 'submitErrors', fromJS(fieldErrors));
      } else {
        result = deleteIn(result, 'submitErrors');
      }
      result = setIn(result, 'submitFailed', true);
    } else {
      result = setIn(result, 'submitSucceeded', true);
      result = deleteIn(result, 'error');
      result = deleteIn(result, 'submitErrors');
    }
    return result;
  }), _defineProperty(_behaviors, _actionTypes.SET_SUBMIT_FAILED, function (state, _ref21) {
    var fields = _ref21.meta.fields;

    var result = state;
    result = setIn(result, 'submitFailed', true);
    result = deleteIn(result, 'submitSucceeded');
    result = deleteIn(result, 'submitting');
    fields.forEach(function (field) {
      return result = setIn(result, 'fields.' + field + '.touched', true);
    });
    if (fields.length) {
      result = setIn(result, 'anyTouched', true);
    }
    return result;
  }), _defineProperty(_behaviors, _actionTypes.SET_SUBMIT_SUCCEEDED, function (state) {
    var result = state;
    result = deleteIn(result, 'submitFailed');
    result = setIn(result, 'submitSucceeded', true);
    return result;
  }), _defineProperty(_behaviors, _actionTypes.TOUCH, function (state, _ref22) {
    var fields = _ref22.meta.fields;

    var result = state;
    fields.forEach(function (field) {
      return result = setIn(result, 'fields.' + field + '.touched', true);
    });
    result = setIn(result, 'anyTouched', true);
    return result;
  }), _defineProperty(_behaviors, _actionTypes.UNREGISTER_FIELD, function (state, _ref23) {
    var _ref23$payload = _ref23.payload,
        name = _ref23$payload.name,
        destroyOnUnmount = _ref23$payload.destroyOnUnmount;

    var result = state;
    var key = 'registeredFields[\'' + name + '\']';
    var field = getIn(result, key);
    if (!field) {
      return result;
    }

    var count = getIn(field, 'count') - 1;
    if (count <= 0 && destroyOnUnmount) {
      // Note: Cannot use deleteWithCleanUp here because of the flat nature of registeredFields
      result = deleteIn(result, key);
      if (deepEqual(getIn(result, 'registeredFields'), empty)) {
        result = deleteIn(result, 'registeredFields');
      }
    } else {
      field = setIn(field, 'count', count);
      result = setIn(result, key, field);
    }
    if (destroyOnUnmount) {
      result = deleteInWithCleanUp(result, 'syncErrors.' + name);
      result = deleteInWithCleanUp(result, 'submitErrors.' + name);
      result = deleteInWithCleanUp(result, 'asyncErrors.' + name);
      result = deleteInWithCleanUp(result, 'syncWarnings.' + name);
    }
    return result;
  }), _defineProperty(_behaviors, _actionTypes.UNTOUCH, function (state, _ref24) {
    var fields = _ref24.meta.fields;

    var result = state;
    fields.forEach(function (field) {
      return result = deleteIn(result, 'fields.' + field + '.touched');
    });
    var anyTouched = keys(getIn(result, 'registeredFields')).some(function (key) {
      return getIn(result, 'fields.' + key + '.touched');
    });
    result = anyTouched ? setIn(result, 'anyTouched', true) : deleteIn(result, 'anyTouched');
    return result;
  }), _defineProperty(_behaviors, _actionTypes.UPDATE_SYNC_ERRORS, function (state, _ref25) {
    var _ref25$payload = _ref25.payload,
        syncErrors = _ref25$payload.syncErrors,
        error = _ref25$payload.error;

    var result = state;
    if (error) {
      result = setIn(result, 'error', error);
      result = setIn(result, 'syncError', true);
    } else {
      result = deleteIn(result, 'error');
      result = deleteIn(result, 'syncError');
    }
    if (Object.keys(syncErrors).length) {
      result = setIn(result, 'syncErrors', syncErrors);
    } else {
      result = deleteIn(result, 'syncErrors');
    }
    return result;
  }), _defineProperty(_behaviors, _actionTypes.UPDATE_SYNC_WARNINGS, function (state, _ref26) {
    var _ref26$payload = _ref26.payload,
        syncWarnings = _ref26$payload.syncWarnings,
        warning = _ref26$payload.warning;

    var result = state;
    if (warning) {
      result = setIn(result, 'warning', warning);
    } else {
      result = deleteIn(result, 'warning');
    }
    if (Object.keys(syncWarnings).length) {
      result = setIn(result, 'syncWarnings', syncWarnings);
    } else {
      result = deleteIn(result, 'syncWarnings');
    }
    return result;
  }), _behaviors);

  var reducer = function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : empty;
    var action = arguments[1];

    var behavior = behaviors[action.type];
    return behavior ? behavior(state, action) : state;
  };

  var byForm = function byForm(reducer) {
    return function () {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : empty;
      var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var form = action && action.meta && action.meta.form;
      if (!form || !isReduxFormAction(action)) {
        return state;
      }
      if (action.type === _actionTypes.DESTROY) {
        return action.meta.form.reduce(function (result, form) {
          return deleteInWithCleanUp(result, form);
        }, state);
      }
      var formState = getIn(state, form);
      var result = reducer(formState, action);
      return result === formState ? state : setIn(state, form, result);
    };
  };

  /**
   * Adds additional functionality to the reducer
   */
  function decorate(target) {
    target.plugin = function plugin(reducers) {
      var _this = this;

      // use 'function' keyword to enable 'this'
      return decorate(function () {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : empty;
        var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return Object.keys(reducers).reduce(function (accumulator, key) {
          var previousState = getIn(accumulator, key);
          var nextState = reducers[key](previousState, action, getIn(state, key));
          return nextState === previousState ? accumulator : setIn(accumulator, key, nextState);
        }, _this(state, action));
      });
    };

    return target;
  }

  return decorate(byForm(reducer));
};

exports.default = createReducer;

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _merge4 = __webpack_require__(183);

var _merge5 = _interopRequireDefault(_merge4);

var _mapValues2 = __webpack_require__(64);

var _mapValues3 = _interopRequireDefault(_mapValues2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _hoistNonReactStatics = __webpack_require__(259);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _isPromise = __webpack_require__(26);

var _isPromise2 = _interopRequireDefault(_isPromise);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(2);

var _reactRedux = __webpack_require__(6);

var _redux = __webpack_require__(44);

var _actions = __webpack_require__(67);

var importedActions = _interopRequireWildcard(_actions);

var _asyncValidation = __webpack_require__(196);

var _asyncValidation2 = _interopRequireDefault(_asyncValidation);

var _defaultShouldAsyncValidate = __webpack_require__(69);

var _defaultShouldAsyncValidate2 = _interopRequireDefault(_defaultShouldAsyncValidate);

var _defaultShouldValidate = __webpack_require__(70);

var _defaultShouldValidate2 = _interopRequireDefault(_defaultShouldValidate);

var _silenceEvent = __webpack_require__(73);

var _silenceEvent2 = _interopRequireDefault(_silenceEvent);

var _silenceEvents = __webpack_require__(207);

var _silenceEvents2 = _interopRequireDefault(_silenceEvents);

var _generateValidator2 = __webpack_require__(209);

var _generateValidator3 = _interopRequireDefault(_generateValidator2);

var _handleSubmit = __webpack_require__(218);

var _handleSubmit2 = _interopRequireDefault(_handleSubmit);

var _isValid = __webpack_require__(42);

var _isValid2 = _interopRequireDefault(_isValid);

var _plain = __webpack_require__(0);

var _plain2 = _interopRequireDefault(_plain);

var _getDisplayName = __webpack_require__(251);

var _getDisplayName2 = _interopRequireDefault(_getDisplayName);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var isClassComponent = function isClassComponent(Component) {
  return Boolean(Component && Component.prototype && _typeof(Component.prototype.isReactComponent) === 'object');
};

// extract field-specific actions

var arrayInsert = importedActions.arrayInsert,
    arrayMove = importedActions.arrayMove,
    arrayPop = importedActions.arrayPop,
    arrayPush = importedActions.arrayPush,
    arrayRemove = importedActions.arrayRemove,
    arrayRemoveAll = importedActions.arrayRemoveAll,
    arrayShift = importedActions.arrayShift,
    arraySplice = importedActions.arraySplice,
    arraySwap = importedActions.arraySwap,
    arrayUnshift = importedActions.arrayUnshift,
    blur = importedActions.blur,
    change = importedActions.change,
    focus = importedActions.focus,
    formActions = _objectWithoutProperties(importedActions, ['arrayInsert', 'arrayMove', 'arrayPop', 'arrayPush', 'arrayRemove', 'arrayRemoveAll', 'arrayShift', 'arraySplice', 'arraySwap', 'arrayUnshift', 'blur', 'change', 'focus']);

var arrayActions = {
  arrayInsert: arrayInsert,
  arrayMove: arrayMove,
  arrayPop: arrayPop,
  arrayPush: arrayPush,
  arrayRemove: arrayRemove,
  arrayRemoveAll: arrayRemoveAll,
  arrayShift: arrayShift,
  arraySplice: arraySplice,
  arraySwap: arraySwap,
  arrayUnshift: arrayUnshift
};

var propsToNotUpdateFor = [].concat(_toConsumableArray(Object.keys(importedActions)), ['array', 'asyncErrors', 'initialValues', 'syncErrors', 'syncWarnings', 'values', 'registeredFields']);

var checkSubmit = function checkSubmit(submit) {
  if (!submit || typeof submit !== 'function') {
    throw new Error('You must either pass handleSubmit() an onSubmit function or pass onSubmit as a prop');
  }
  return submit;
};

/**
 * The decorator that is the main API to redux-form
 */
var createReduxForm = function createReduxForm(structure) {
  var deepEqual = structure.deepEqual,
      empty = structure.empty,
      getIn = structure.getIn,
      setIn = structure.setIn,
      keys = structure.keys,
      fromJS = structure.fromJS;

  var isValid = (0, _isValid2.default)(structure);
  return function (initialConfig) {
    var config = _extends({
      touchOnBlur: true,
      touchOnChange: false,
      persistentSubmitErrors: false,
      destroyOnUnmount: true,
      shouldAsyncValidate: _defaultShouldAsyncValidate2.default,
      shouldValidate: _defaultShouldValidate2.default,
      enableReinitialize: false,
      keepDirtyOnReinitialize: false,
      getFormState: function getFormState(state) {
        return getIn(state, 'form');
      },
      pure: true,
      forceUnregisterOnUnmount: false
    }, initialConfig);

    return function (WrappedComponent) {
      var Form = function (_Component) {
        _inherits(Form, _Component);

        function Form(props) {
          _classCallCheck(this, Form);

          var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

          _this.submit = _this.submit.bind(_this);
          _this.reset = _this.reset.bind(_this);
          _this.asyncValidate = _this.asyncValidate.bind(_this);
          _this.getValues = _this.getValues.bind(_this);
          _this.register = _this.register.bind(_this);
          _this.unregister = _this.unregister.bind(_this);
          _this.submitCompleted = _this.submitCompleted.bind(_this);
          _this.submitFailed = _this.submitFailed.bind(_this);
          _this.fieldValidators = {};
          _this.lastFieldValidatorKeys = [];
          _this.fieldWarners = {};
          _this.lastFieldWarnerKeys = [];
          return _this;
        }

        _createClass(Form, [{
          key: 'getChildContext',
          value: function getChildContext() {
            var _this2 = this;

            return {
              _reduxForm: _extends({}, this.props, {
                getFormState: function getFormState(state) {
                  return getIn(_this2.props.getFormState(state), _this2.props.form);
                },
                asyncValidate: this.asyncValidate,
                getValues: this.getValues,
                sectionPrefix: undefined,
                register: this.register,
                unregister: this.unregister,
                registerInnerOnSubmit: function registerInnerOnSubmit(innerOnSubmit) {
                  return _this2.innerOnSubmit = innerOnSubmit;
                }
              })
            };
          }
        }, {
          key: 'initIfNeeded',
          value: function initIfNeeded(nextProps) {
            var enableReinitialize = this.props.enableReinitialize;

            if (nextProps) {
              if ((enableReinitialize || !nextProps.initialized) && !deepEqual(this.props.initialValues, nextProps.initialValues)) {
                var keepDirty = nextProps.initialized && this.props.keepDirtyOnReinitialize;
                this.props.initialize(nextProps.initialValues, keepDirty, {
                  lastInitialValues: this.props.initialValues
                });
              }
            } else if (this.props.initialValues && (!this.props.initialized || enableReinitialize)) {
              this.props.initialize(this.props.initialValues, this.props.keepDirtyOnReinitialize);
            }
          }
        }, {
          key: 'updateSyncErrorsIfNeeded',
          value: function updateSyncErrorsIfNeeded(nextSyncErrors, nextError, lastSyncErrors) {
            var _props = this.props,
                error = _props.error,
                updateSyncErrors = _props.updateSyncErrors;

            var noErrors = (!lastSyncErrors || !Object.keys(lastSyncErrors).length) && !error;
            var nextNoErrors = (!nextSyncErrors || !Object.keys(nextSyncErrors).length) && !nextError;
            if (!(noErrors && nextNoErrors) && (!_plain2.default.deepEqual(lastSyncErrors, nextSyncErrors) || !_plain2.default.deepEqual(error, nextError))) {
              updateSyncErrors(nextSyncErrors, nextError);
            }
          }
        }, {
          key: 'clearSubmitPromiseIfNeeded',
          value: function clearSubmitPromiseIfNeeded(nextProps) {
            var submitting = this.props.submitting;

            if (this.submitPromise && submitting && !nextProps.submitting) {
              delete this.submitPromise;
            }
          }
        }, {
          key: 'submitIfNeeded',
          value: function submitIfNeeded(nextProps) {
            var _props2 = this.props,
                clearSubmit = _props2.clearSubmit,
                triggerSubmit = _props2.triggerSubmit;

            if (!triggerSubmit && nextProps.triggerSubmit) {
              clearSubmit();
              this.submit();
            }
          }
        }, {
          key: 'validateIfNeeded',
          value: function validateIfNeeded(nextProps) {
            var _props3 = this.props,
                shouldValidate = _props3.shouldValidate,
                validate = _props3.validate,
                values = _props3.values;

            var fieldLevelValidate = this.generateValidator();
            if (validate || fieldLevelValidate) {
              var initialRender = nextProps === undefined;
              var fieldValidatorKeys = Object.keys(this.getValidators());
              var shouldValidateResult = shouldValidate({
                values: values,
                nextProps: nextProps,
                props: this.props,
                initialRender: initialRender,
                lastFieldValidatorKeys: this.lastFieldValidatorKeys,
                fieldValidatorKeys: fieldValidatorKeys,
                structure: structure
              });

              if (shouldValidateResult) {
                var propsToValidate = initialRender ? this.props : nextProps;

                var _merge2 = (0, _merge5.default)(validate ? validate(propsToValidate.values, propsToValidate) || {} : {}, fieldLevelValidate ? fieldLevelValidate(propsToValidate.values, propsToValidate) || {} : {}),
                    _error = _merge2._error,
                    nextSyncErrors = _objectWithoutProperties(_merge2, ['_error']);

                this.lastFieldValidatorKeys = fieldValidatorKeys;
                this.updateSyncErrorsIfNeeded(nextSyncErrors, _error, propsToValidate.syncErrors);
              }
            }
          }
        }, {
          key: 'updateSyncWarningsIfNeeded',
          value: function updateSyncWarningsIfNeeded(nextSyncWarnings, nextWarning, lastSyncWarnings) {
            var _props4 = this.props,
                warning = _props4.warning,
                syncWarnings = _props4.syncWarnings,
                updateSyncWarnings = _props4.updateSyncWarnings;

            var noWarnings = (!syncWarnings || !Object.keys(syncWarnings).length) && !warning;
            var nextNoWarnings = (!nextSyncWarnings || !Object.keys(nextSyncWarnings).length) && !nextWarning;
            if (!(noWarnings && nextNoWarnings) && (!_plain2.default.deepEqual(lastSyncWarnings, nextSyncWarnings) || !_plain2.default.deepEqual(warning, nextWarning))) {
              updateSyncWarnings(nextSyncWarnings, nextWarning);
            }
          }
        }, {
          key: 'warnIfNeeded',
          value: function warnIfNeeded(nextProps) {
            var _props5 = this.props,
                shouldValidate = _props5.shouldValidate,
                warn = _props5.warn,
                values = _props5.values;

            var fieldLevelWarn = this.generateWarner();
            if (warn || fieldLevelWarn) {
              var initialRender = nextProps === undefined;
              var fieldWarnerKeys = Object.keys(this.getWarners());
              var shouldWarnResult = shouldValidate({
                values: values,
                nextProps: nextProps,
                props: this.props,
                initialRender: initialRender,
                lastFieldValidatorKeys: this.lastFieldWarnerKeys,
                fieldValidatorKeys: fieldWarnerKeys,
                structure: structure
              });

              if (shouldWarnResult) {
                var propsToWarn = initialRender ? this.props : nextProps;

                var _merge3 = (0, _merge5.default)(warn ? warn(propsToWarn.values, propsToWarn) : {}, fieldLevelWarn ? fieldLevelWarn(propsToWarn.values, propsToWarn) : {}),
                    _warning = _merge3._warning,
                    nextSyncWarnings = _objectWithoutProperties(_merge3, ['_warning']);

                this.lastFieldWarnerKeys = fieldWarnerKeys;
                this.updateSyncWarningsIfNeeded(nextSyncWarnings, _warning, propsToWarn.syncWarnings);
              }
            }
          }
        }, {
          key: 'componentWillMount',
          value: function componentWillMount() {
            this.initIfNeeded();
            this.validateIfNeeded();
            this.warnIfNeeded();
          }
        }, {
          key: 'componentWillReceiveProps',
          value: function componentWillReceiveProps(nextProps) {
            this.initIfNeeded(nextProps);
            this.validateIfNeeded(nextProps);
            this.warnIfNeeded(nextProps);
            this.clearSubmitPromiseIfNeeded(nextProps);
            this.submitIfNeeded(nextProps);
            if (nextProps.onChange) {
              if (!deepEqual(nextProps.values, this.props.values)) {
                nextProps.onChange(nextProps.values, nextProps.dispatch, nextProps);
              }
            }
          }
        }, {
          key: 'shouldComponentUpdate',
          value: function shouldComponentUpdate(nextProps) {
            var _this3 = this;

            if (!this.props.pure) return true;
            return Object.keys(nextProps).some(function (prop) {
              // useful to debug rerenders
              // if (!plain.deepEqual(this.props[ prop ], nextProps[ prop ])) {
              //   console.info(prop, 'changed', this.props[ prop ], '==>', nextProps[ prop ])
              // }
              return !~propsToNotUpdateFor.indexOf(prop) && !deepEqual(_this3.props[prop], nextProps[prop]);
            });
          }
        }, {
          key: 'componentWillUnmount',
          value: function componentWillUnmount() {
            var _props6 = this.props,
                destroyOnUnmount = _props6.destroyOnUnmount,
                destroy = _props6.destroy;

            if (destroyOnUnmount) {
              this.destroyed = true;
              destroy();
            }
          }
        }, {
          key: 'getValues',
          value: function getValues() {
            return this.props.values;
          }
        }, {
          key: 'isValid',
          value: function isValid() {
            return this.props.valid;
          }
        }, {
          key: 'isPristine',
          value: function isPristine() {
            return this.props.pristine;
          }
        }, {
          key: 'register',
          value: function register(name, type, getValidator, getWarner) {
            this.props.registerField(name, type);
            if (getValidator) {
              this.fieldValidators[name] = getValidator;
            }
            if (getWarner) {
              this.fieldWarners[name] = getWarner;
            }
          }
        }, {
          key: 'unregister',
          value: function unregister(name) {
            if (!this.destroyed) {
              if (this.props.destroyOnUnmount || this.props.forceUnregisterOnUnmount) {
                this.props.unregisterField(name);
                delete this.fieldValidators[name];
                delete this.fieldWarners[name];
              } else {
                this.props.unregisterField(name, false);
              }
            }
          }
        }, {
          key: 'getFieldList',
          value: function getFieldList(options) {
            var registeredFields = this.props.registeredFields;
            var list = [];
            if (!registeredFields) {
              return list;
            }
            var keySeq = keys(registeredFields);
            if (options && options.excludeFieldArray) {
              keySeq = keySeq.filter(function (name) {
                return getIn(registeredFields, '[\'' + name + '\'].type') !== 'FieldArray';
              });
            }
            return fromJS(keySeq.reduce(function (acc, key) {
              acc.push(key);
              return acc;
            }, list));
          }
        }, {
          key: 'getValidators',
          value: function getValidators() {
            var _this4 = this;

            var validators = {};
            Object.keys(this.fieldValidators).forEach(function (name) {
              var validator = _this4.fieldValidators[name]();
              if (validator) {
                validators[name] = validator;
              }
            });
            return validators;
          }
        }, {
          key: 'generateValidator',
          value: function generateValidator() {
            var validators = this.getValidators();
            return Object.keys(validators).length ? (0, _generateValidator3.default)(validators, structure) : undefined;
          }
        }, {
          key: 'getWarners',
          value: function getWarners() {
            var _this5 = this;

            var warners = {};
            Object.keys(this.fieldWarners).forEach(function (name) {
              var warner = _this5.fieldWarners[name]();
              if (warner) {
                warners[name] = warner;
              }
            });
            return warners;
          }
        }, {
          key: 'generateWarner',
          value: function generateWarner() {
            var warners = this.getWarners();
            return Object.keys(warners).length ? (0, _generateValidator3.default)(warners, structure) : undefined;
          }
        }, {
          key: 'asyncValidate',
          value: function asyncValidate(name, value) {
            var _this6 = this;

            var _props7 = this.props,
                asyncBlurFields = _props7.asyncBlurFields,
                asyncErrors = _props7.asyncErrors,
                asyncValidate = _props7.asyncValidate,
                dispatch = _props7.dispatch,
                initialized = _props7.initialized,
                pristine = _props7.pristine,
                shouldAsyncValidate = _props7.shouldAsyncValidate,
                startAsyncValidation = _props7.startAsyncValidation,
                stopAsyncValidation = _props7.stopAsyncValidation,
                syncErrors = _props7.syncErrors,
                values = _props7.values;

            var submitting = !name;
            if (asyncValidate) {
              var valuesToValidate = submitting ? values : setIn(values, name, value);
              var syncValidationPasses = submitting || !getIn(syncErrors, name);
              var isBlurredField = !submitting && (!asyncBlurFields || ~asyncBlurFields.indexOf(name.replace(/\[[0-9]+\]/g, '[]')));
              if ((isBlurredField || submitting) && shouldAsyncValidate({
                asyncErrors: asyncErrors,
                initialized: initialized,
                trigger: submitting ? 'submit' : 'blur',
                blurredField: name,
                pristine: pristine,
                syncValidationPasses: syncValidationPasses
              })) {
                return (0, _asyncValidation2.default)(function () {
                  return asyncValidate(valuesToValidate, dispatch, _this6.props, name);
                }, startAsyncValidation, stopAsyncValidation, name);
              }
            }
          }
        }, {
          key: 'submitCompleted',
          value: function submitCompleted(result) {
            delete this.submitPromise;
            return result;
          }
        }, {
          key: 'submitFailed',
          value: function submitFailed(error) {
            delete this.submitPromise;
            throw error;
          }
        }, {
          key: 'listenToSubmit',
          value: function listenToSubmit(promise) {
            if (!(0, _isPromise2.default)(promise)) {
              return promise;
            }
            this.submitPromise = promise;
            return promise.then(this.submitCompleted, this.submitFailed);
          }
        }, {
          key: 'submit',
          value: function submit(submitOrEvent) {
            var _this7 = this;

            var _props8 = this.props,
                onSubmit = _props8.onSubmit,
                blur = _props8.blur,
                change = _props8.change,
                dispatch = _props8.dispatch;


            if (!submitOrEvent || (0, _silenceEvent2.default)(submitOrEvent)) {
              // submitOrEvent is an event: fire submit if not already submitting
              if (!this.submitPromise) {
                if (this.innerOnSubmit) {
                  // will call "submitOrEvent is the submit function" block below
                  return this.innerOnSubmit();
                } else {
                  return this.listenToSubmit((0, _handleSubmit2.default)(checkSubmit(onSubmit), _extends({}, this.props, (0, _redux.bindActionCreators)({ blur: blur, change: change }, dispatch)), this.props.validExceptSubmit, this.asyncValidate, this.getFieldList({ excludeFieldArray: true })));
                }
              }
            } else {
              // submitOrEvent is the submit function: return deferred submit thunk
              return (0, _silenceEvents2.default)(function () {
                return !_this7.submitPromise && _this7.listenToSubmit((0, _handleSubmit2.default)(checkSubmit(submitOrEvent), _extends({}, _this7.props, (0, _redux.bindActionCreators)({ blur: blur, change: change }, dispatch)), _this7.props.validExceptSubmit, _this7.asyncValidate, _this7.getFieldList({ excludeFieldArray: true })));
              });
            }
          }
        }, {
          key: 'reset',
          value: function reset() {
            this.props.reset();
          }
        }, {
          key: 'render',
          value: function render() {
            // remove some redux-form config-only props
            /* eslint-disable no-unused-vars */
            var _props9 = this.props,
                anyTouched = _props9.anyTouched,
                arrayInsert = _props9.arrayInsert,
                arrayMove = _props9.arrayMove,
                arrayPop = _props9.arrayPop,
                arrayPush = _props9.arrayPush,
                arrayRemove = _props9.arrayRemove,
                arrayRemoveAll = _props9.arrayRemoveAll,
                arrayShift = _props9.arrayShift,
                arraySplice = _props9.arraySplice,
                arraySwap = _props9.arraySwap,
                arrayUnshift = _props9.arrayUnshift,
                asyncErrors = _props9.asyncErrors,
                asyncValidate = _props9.asyncValidate,
                asyncValidating = _props9.asyncValidating,
                blur = _props9.blur,
                change = _props9.change,
                destroy = _props9.destroy,
                destroyOnUnmount = _props9.destroyOnUnmount,
                forceUnregisterOnUnmount = _props9.forceUnregisterOnUnmount,
                dirty = _props9.dirty,
                dispatch = _props9.dispatch,
                enableReinitialize = _props9.enableReinitialize,
                error = _props9.error,
                focus = _props9.focus,
                form = _props9.form,
                getFormState = _props9.getFormState,
                initialize = _props9.initialize,
                initialized = _props9.initialized,
                initialValues = _props9.initialValues,
                invalid = _props9.invalid,
                keepDirtyOnReinitialize = _props9.keepDirtyOnReinitialize,
                pristine = _props9.pristine,
                propNamespace = _props9.propNamespace,
                registeredFields = _props9.registeredFields,
                registerField = _props9.registerField,
                reset = _props9.reset,
                setSubmitFailed = _props9.setSubmitFailed,
                setSubmitSucceeded = _props9.setSubmitSucceeded,
                shouldAsyncValidate = _props9.shouldAsyncValidate,
                shouldValidate = _props9.shouldValidate,
                startAsyncValidation = _props9.startAsyncValidation,
                startSubmit = _props9.startSubmit,
                stopAsyncValidation = _props9.stopAsyncValidation,
                stopSubmit = _props9.stopSubmit,
                submitting = _props9.submitting,
                submitFailed = _props9.submitFailed,
                submitSucceeded = _props9.submitSucceeded,
                touch = _props9.touch,
                touchOnBlur = _props9.touchOnBlur,
                touchOnChange = _props9.touchOnChange,
                persistentSubmitErrors = _props9.persistentSubmitErrors,
                syncErrors = _props9.syncErrors,
                syncWarnings = _props9.syncWarnings,
                unregisterField = _props9.unregisterField,
                untouch = _props9.untouch,
                updateSyncErrors = _props9.updateSyncErrors,
                updateSyncWarnings = _props9.updateSyncWarnings,
                valid = _props9.valid,
                validExceptSubmit = _props9.validExceptSubmit,
                values = _props9.values,
                warning = _props9.warning,
                rest = _objectWithoutProperties(_props9, ['anyTouched', 'arrayInsert', 'arrayMove', 'arrayPop', 'arrayPush', 'arrayRemove', 'arrayRemoveAll', 'arrayShift', 'arraySplice', 'arraySwap', 'arrayUnshift', 'asyncErrors', 'asyncValidate', 'asyncValidating', 'blur', 'change', 'destroy', 'destroyOnUnmount', 'forceUnregisterOnUnmount', 'dirty', 'dispatch', 'enableReinitialize', 'error', 'focus', 'form', 'getFormState', 'initialize', 'initialized', 'initialValues', 'invalid', 'keepDirtyOnReinitialize', 'pristine', 'propNamespace', 'registeredFields', 'registerField', 'reset', 'setSubmitFailed', 'setSubmitSucceeded', 'shouldAsyncValidate', 'shouldValidate', 'startAsyncValidation', 'startSubmit', 'stopAsyncValidation', 'stopSubmit', 'submitting', 'submitFailed', 'submitSucceeded', 'touch', 'touchOnBlur', 'touchOnChange', 'persistentSubmitErrors', 'syncErrors', 'syncWarnings', 'unregisterField', 'untouch', 'updateSyncErrors', 'updateSyncWarnings', 'valid', 'validExceptSubmit', 'values', 'warning']);
            /* eslint-enable no-unused-vars */


            var reduxFormProps = _extends({
              anyTouched: anyTouched,
              asyncValidate: this.asyncValidate,
              asyncValidating: asyncValidating
            }, (0, _redux.bindActionCreators)({ blur: blur, change: change }, dispatch), {
              destroy: destroy,
              dirty: dirty,
              dispatch: dispatch,
              error: error,
              form: form,
              handleSubmit: this.submit,
              initialize: initialize,
              initialized: initialized,
              initialValues: initialValues,
              invalid: invalid,
              pristine: pristine,
              reset: reset,
              submitting: submitting,
              submitFailed: submitFailed,
              submitSucceeded: submitSucceeded,
              touch: touch,
              untouch: untouch,
              valid: valid,
              warning: warning
            });
            var propsToPass = _extends({}, propNamespace ? _defineProperty({}, propNamespace, reduxFormProps) : reduxFormProps, rest);
            if (isClassComponent(WrappedComponent)) {
              propsToPass.ref = 'wrapped';
            }
            return (0, _react.createElement)(WrappedComponent, propsToPass);
          }
        }]);

        return Form;
      }(_react.Component);

      Form.displayName = 'Form(' + (0, _getDisplayName2.default)(WrappedComponent) + ')';
      Form.WrappedComponent = WrappedComponent;
      Form.childContextTypes = {
        _reduxForm: _propTypes2.default.object.isRequired
      };
      Form.propTypes = {
        destroyOnUnmount: _propTypes2.default.bool,
        forceUnregisterOnUnmount: _propTypes2.default.bool,
        form: _propTypes2.default.string.isRequired,
        initialValues: _propTypes2.default.object,
        getFormState: _propTypes2.default.func,
        onSubmitFail: _propTypes2.default.func,
        onSubmitSuccess: _propTypes2.default.func,
        propNameSpace: _propTypes2.default.string,
        validate: _propTypes2.default.func,
        warn: _propTypes2.default.func,
        touchOnBlur: _propTypes2.default.bool,
        touchOnChange: _propTypes2.default.bool,
        triggerSubmit: _propTypes2.default.bool,
        persistentSubmitErrors: _propTypes2.default.bool,
        registeredFields: _propTypes2.default.any
      };

      var connector = (0, _reactRedux.connect)(function (state, props) {
        var form = props.form,
            getFormState = props.getFormState,
            initialValues = props.initialValues,
            enableReinitialize = props.enableReinitialize,
            keepDirtyOnReinitialize = props.keepDirtyOnReinitialize;

        var formState = getIn(getFormState(state) || empty, form) || empty;
        var stateInitial = getIn(formState, 'initial');
        var initialized = !!stateInitial;

        var shouldUpdateInitialValues = enableReinitialize && initialized && !deepEqual(initialValues, stateInitial);
        var shouldResetValues = shouldUpdateInitialValues && !keepDirtyOnReinitialize;

        var initial = initialValues || stateInitial || empty;

        if (shouldUpdateInitialValues) {
          initial = stateInitial || empty;
        }

        var values = getIn(formState, 'values') || initial;

        if (shouldResetValues) {
          values = initial;
        }

        var pristine = shouldResetValues || deepEqual(initial, values);
        var asyncErrors = getIn(formState, 'asyncErrors');
        var syncErrors = getIn(formState, 'syncErrors') || {};
        var syncWarnings = getIn(formState, 'syncWarnings') || {};
        var registeredFields = getIn(formState, 'registeredFields');
        var valid = isValid(form, getFormState, false)(state);
        var validExceptSubmit = isValid(form, getFormState, true)(state);
        var anyTouched = !!getIn(formState, 'anyTouched');
        var submitting = !!getIn(formState, 'submitting');
        var submitFailed = !!getIn(formState, 'submitFailed');
        var submitSucceeded = !!getIn(formState, 'submitSucceeded');
        var error = getIn(formState, 'error');
        var warning = getIn(formState, 'warning');
        var triggerSubmit = getIn(formState, 'triggerSubmit');
        return {
          anyTouched: anyTouched,
          asyncErrors: asyncErrors,
          asyncValidating: getIn(formState, 'asyncValidating') || false,
          dirty: !pristine,
          error: error,
          initialized: initialized,
          invalid: !valid,
          pristine: pristine,
          registeredFields: registeredFields,
          submitting: submitting,
          submitFailed: submitFailed,
          submitSucceeded: submitSucceeded,
          syncErrors: syncErrors,
          syncWarnings: syncWarnings,
          triggerSubmit: triggerSubmit,
          values: values,
          valid: valid,
          validExceptSubmit: validExceptSubmit,
          warning: warning
        };
      }, function (dispatch, initialProps) {
        var bindForm = function bindForm(actionCreator) {
          return actionCreator.bind(null, initialProps.form);
        };

        // Bind the first parameter on `props.form`
        var boundFormACs = (0, _mapValues3.default)(formActions, bindForm);
        var boundArrayACs = (0, _mapValues3.default)(arrayActions, bindForm);
        var boundBlur = function boundBlur(field, value) {
          return blur(initialProps.form, field, value, !!initialProps.touchOnBlur);
        };
        var boundChange = function boundChange(field, value) {
          return change(initialProps.form, field, value, !!initialProps.touchOnChange, !!initialProps.persistentSubmitErrors);
        };
        var boundFocus = bindForm(focus);

        // Wrap action creators with `dispatch`
        var connectedFormACs = (0, _redux.bindActionCreators)(boundFormACs, dispatch);
        var connectedArrayACs = {
          insert: (0, _redux.bindActionCreators)(boundArrayACs.arrayInsert, dispatch),
          move: (0, _redux.bindActionCreators)(boundArrayACs.arrayMove, dispatch),
          pop: (0, _redux.bindActionCreators)(boundArrayACs.arrayPop, dispatch),
          push: (0, _redux.bindActionCreators)(boundArrayACs.arrayPush, dispatch),
          remove: (0, _redux.bindActionCreators)(boundArrayACs.arrayRemove, dispatch),
          removeAll: (0, _redux.bindActionCreators)(boundArrayACs.arrayRemoveAll, dispatch),
          shift: (0, _redux.bindActionCreators)(boundArrayACs.arrayShift, dispatch),
          splice: (0, _redux.bindActionCreators)(boundArrayACs.arraySplice, dispatch),
          swap: (0, _redux.bindActionCreators)(boundArrayACs.arraySwap, dispatch),
          unshift: (0, _redux.bindActionCreators)(boundArrayACs.arrayUnshift, dispatch)
        };

        var computedActions = _extends({}, connectedFormACs, boundArrayACs, {
          blur: boundBlur,
          change: boundChange,
          array: connectedArrayACs,
          focus: boundFocus,
          dispatch: dispatch
        });

        return function () {
          return computedActions;
        };
      }, undefined, { withRef: true });
      var ConnectedForm = (0, _hoistNonReactStatics2.default)(connector(Form), WrappedComponent);
      ConnectedForm.defaultProps = config;

      // build outer component to expose instance api
      return function (_Component2) {
        _inherits(ReduxForm, _Component2);

        function ReduxForm() {
          _classCallCheck(this, ReduxForm);

          return _possibleConstructorReturn(this, (ReduxForm.__proto__ || Object.getPrototypeOf(ReduxForm)).apply(this, arguments));
        }

        _createClass(ReduxForm, [{
          key: 'submit',
          value: function submit() {
            return this.refs.wrapped.getWrappedInstance().submit();
          }
        }, {
          key: 'reset',
          value: function reset() {
            return this.refs.wrapped.getWrappedInstance().reset();
          }
        }, {
          key: 'render',
          value: function render() {
            var _props10 = this.props,
                initialValues = _props10.initialValues,
                rest = _objectWithoutProperties(_props10, ['initialValues']);

            return (0, _react.createElement)(ConnectedForm, _extends({}, rest, {
              ref: 'wrapped',
              // convert initialValues if need to
              initialValues: fromJS(initialValues)
            }));
          }
        }, {
          key: 'valid',
          get: function get() {
            return this.refs.wrapped.getWrappedInstance().isValid();
          }
        }, {
          key: 'invalid',
          get: function get() {
            return !this.valid;
          }
        }, {
          key: 'pristine',
          get: function get() {
            return this.refs.wrapped.getWrappedInstance().isPristine();
          }
        }, {
          key: 'dirty',
          get: function get() {
            return !this.pristine;
          }
        }, {
          key: 'values',
          get: function get() {
            return this.refs.wrapped.getWrappedInstance().getValues();
          }
        }, {
          key: 'fieldList',
          get: function get() {
            // mainly provided for testing
            return this.refs.wrapped.getWrappedInstance().getFieldList();
          }
        }, {
          key: 'wrappedInstance',
          get: function get() {
            // for testine
            return this.refs.wrapped.getWrappedInstance().refs.wrapped;
          }
        }]);

        return ReduxForm;
      }(_react.Component);
    };
  };
};

exports.default = createReduxForm;

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactRedux = __webpack_require__(6);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var createValues = function createValues(_ref) {
  var getIn = _ref.getIn;
  return function (config) {
    var _prop$getFormState$co = _extends({
      prop: 'values',
      getFormState: function getFormState(state) {
        return getIn(state, 'form');
      }
    }, config),
        form = _prop$getFormState$co.form,
        prop = _prop$getFormState$co.prop,
        getFormState = _prop$getFormState$co.getFormState;

    return (0, _reactRedux.connect)(function (state) {
      return _defineProperty({}, prop, getIn(getFormState(state), form + '.values'));
    }, function () {
      return {};
    } // ignore dispatch
    );
  };
};

exports.default = createValues;

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toPath2 = __webpack_require__(22);

var _toPath3 = _interopRequireDefault(_toPath2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createDeleteInWithCleanUp = function createDeleteInWithCleanUp(_ref) {
  var deepEqual = _ref.deepEqual,
      empty = _ref.empty,
      getIn = _ref.getIn,
      deleteIn = _ref.deleteIn,
      setIn = _ref.setIn;

  var deleteInWithCleanUp = function deleteInWithCleanUp(state, path) {
    if (path[path.length - 1] === ']') {
      // array path
      var pathTokens = (0, _toPath3.default)(path);
      pathTokens.pop();
      var parent = getIn(state, pathTokens.join('.'));
      return parent ? setIn(state, path, undefined) : state;
    }

    var result = state;
    if (getIn(state, path) !== undefined) {
      result = deleteIn(state, path);
    }

    var dotIndex = path.lastIndexOf('.');
    if (dotIndex > 0) {
      var parentPath = path.substring(0, dotIndex);
      if (parentPath[parentPath.length - 1] !== ']') {
        var _parent = getIn(result, parentPath);
        if (deepEqual(_parent, empty)) {
          return deleteInWithCleanUp(result, parentPath);
        }
      }
    }
    return result;
  };

  return deleteInWithCleanUp;
};

exports.default = createDeleteInWithCleanUp;

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isEvent = __webpack_require__(71);

var _isEvent2 = _interopRequireDefault(_isEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getSelectedValues = function getSelectedValues(options) {
  var result = [];
  if (options) {
    for (var index = 0; index < options.length; index++) {
      var option = options[index];
      if (option.selected) {
        result.push(option.value);
      }
    }
  }
  return result;
};

var getValue = function getValue(event, isReactNative) {
  if ((0, _isEvent2.default)(event)) {
    if (!isReactNative && event.nativeEvent && event.nativeEvent.text !== undefined) {
      return event.nativeEvent.text;
    }
    if (isReactNative && event.nativeEvent !== undefined) {
      return event.nativeEvent.text;
    }
    var _event$target = event.target,
        type = _event$target.type,
        value = _event$target.value,
        checked = _event$target.checked,
        files = _event$target.files,
        dataTransfer = event.dataTransfer;

    if (type === 'checkbox') {
      return checked || '';
    }
    if (type === 'file') {
      return files || dataTransfer && dataTransfer.files;
    }
    if (type === 'select-multiple') {
      return getSelectedValues(event.target.options);
    }
    return value;
  }
  return event;
};

exports.default = getValue;

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _silenceEvent = __webpack_require__(73);

var _silenceEvent2 = _interopRequireDefault(_silenceEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var silenceEvents = function silenceEvents(fn) {
  return function (event) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return (0, _silenceEvent2.default)(event) ? fn.apply(undefined, args) : fn.apply(undefined, [event].concat(args));
  };
};

exports.default = silenceEvents;

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createFormValueSelector = __webpack_require__(201);

var _createFormValueSelector2 = _interopRequireDefault(_createFormValueSelector);

var _plain = __webpack_require__(0);

var _plain2 = _interopRequireDefault(_plain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _createFormValueSelector2.default)(_plain2.default);

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _plain = __webpack_require__(0);

var _plain2 = _interopRequireDefault(_plain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toArray = function toArray(value) {
  return Array.isArray(value) ? value : [value];
};

var getError = function getError(value, values, props, validators) {
  var array = toArray(validators);
  for (var i = 0; i < array.length; i++) {
    var error = array[i](value, values, props);
    if (error) {
      return error;
    }
  }
};

var generateValidator = function generateValidator(validators, _ref) {
  var getIn = _ref.getIn;
  return function (values, props) {
    var errors = {};
    Object.keys(validators).forEach(function (name) {
      var value = getIn(values, name);
      var error = getError(value, values, props, validators[name]);
      if (error) {
        errors = _plain2.default.setIn(errors, name, error);
      }
    });
    return errors;
  };
};

exports.default = generateValidator;

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getFormAsyncErrors = __webpack_require__(231);

var _getFormAsyncErrors2 = _interopRequireDefault(_getFormAsyncErrors);

var _plain = __webpack_require__(0);

var _plain2 = _interopRequireDefault(_plain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _getFormAsyncErrors2.default)(_plain2.default);

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getFormInitialValues = __webpack_require__(232);

var _getFormInitialValues2 = _interopRequireDefault(_getFormInitialValues);

var _plain = __webpack_require__(0);

var _plain2 = _interopRequireDefault(_plain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _getFormInitialValues2.default)(_plain2.default);

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getFormMeta = __webpack_require__(233);

var _getFormMeta2 = _interopRequireDefault(_getFormMeta);

var _plain = __webpack_require__(0);

var _plain2 = _interopRequireDefault(_plain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _getFormMeta2.default)(_plain2.default);

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getFormNames = __webpack_require__(234);

var _getFormNames2 = _interopRequireDefault(_getFormNames);

var _plain = __webpack_require__(0);

var _plain2 = _interopRequireDefault(_plain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _getFormNames2.default)(_plain2.default);

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getFormSubmitErrors = __webpack_require__(235);

var _getFormSubmitErrors2 = _interopRequireDefault(_getFormSubmitErrors);

var _plain = __webpack_require__(0);

var _plain2 = _interopRequireDefault(_plain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _getFormSubmitErrors2.default)(_plain2.default);

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getFormSyncErrors = __webpack_require__(236);

var _getFormSyncErrors2 = _interopRequireDefault(_getFormSyncErrors);

var _plain = __webpack_require__(0);

var _plain2 = _interopRequireDefault(_plain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _getFormSyncErrors2.default)(_plain2.default);

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getFormSyncWarnings = __webpack_require__(237);

var _getFormSyncWarnings2 = _interopRequireDefault(_getFormSyncWarnings);

var _plain = __webpack_require__(0);

var _plain2 = _interopRequireDefault(_plain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _getFormSyncWarnings2.default)(_plain2.default);

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getFormValues = __webpack_require__(238);

var _getFormValues2 = _interopRequireDefault(_getFormValues);

var _plain = __webpack_require__(0);

var _plain2 = _interopRequireDefault(_plain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _getFormValues2.default)(_plain2.default);

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isPromise = __webpack_require__(26);

var _isPromise2 = _interopRequireDefault(_isPromise);

var _SubmissionError = __webpack_require__(66);

var _SubmissionError2 = _interopRequireDefault(_SubmissionError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var handleSubmit = function handleSubmit(submit, props, valid, asyncValidate, fields) {
  var dispatch = props.dispatch,
      onSubmitFail = props.onSubmitFail,
      onSubmitSuccess = props.onSubmitSuccess,
      startSubmit = props.startSubmit,
      stopSubmit = props.stopSubmit,
      setSubmitFailed = props.setSubmitFailed,
      setSubmitSucceeded = props.setSubmitSucceeded,
      syncErrors = props.syncErrors,
      touch = props.touch,
      values = props.values,
      persistentSubmitErrors = props.persistentSubmitErrors;


  touch.apply(undefined, _toConsumableArray(fields)); // mark all fields as touched

  if (valid || persistentSubmitErrors) {
    var doSubmit = function doSubmit() {
      var result = void 0;
      try {
        result = submit(values, dispatch, props);
      } catch (submitError) {
        var error = submitError instanceof _SubmissionError2.default ? submitError.errors : undefined;
        stopSubmit(error);
        setSubmitFailed.apply(undefined, _toConsumableArray(fields));
        if (onSubmitFail) {
          onSubmitFail(error, dispatch, submitError, props);
        }
        if (error || onSubmitFail) {
          // if you've provided an onSubmitFail callback, don't re-throw the error
          return error;
        } else {
          throw submitError;
        }
      }
      if ((0, _isPromise2.default)(result)) {
        startSubmit();
        return result.then(function (submitResult) {
          stopSubmit();
          setSubmitSucceeded();
          if (onSubmitSuccess) {
            onSubmitSuccess(submitResult, dispatch, props);
          }
          return submitResult;
        }, function (submitError) {
          var error = submitError instanceof _SubmissionError2.default ? submitError.errors : undefined;
          stopSubmit(error);
          setSubmitFailed.apply(undefined, _toConsumableArray(fields));
          if (onSubmitFail) {
            onSubmitFail(error, dispatch, submitError, props);
          }
          if (error || onSubmitFail) {
            // if you've provided an onSubmitFail callback, don't re-throw the error
            return error;
          } else {
            throw submitError;
          }
        });
      } else {
        setSubmitSucceeded();
        if (onSubmitSuccess) {
          onSubmitSuccess(result, dispatch, props);
        }
      }
      return result;
    };

    var asyncValidateResult = asyncValidate && asyncValidate();
    if (asyncValidateResult) {
      return asyncValidateResult.then(function (asyncErrors) {
        if (asyncErrors) {
          throw asyncErrors;
        }
        return doSubmit();
      }).catch(function (asyncErrors) {
        setSubmitFailed.apply(undefined, _toConsumableArray(fields));
        if (onSubmitFail) {
          onSubmitFail(asyncErrors, dispatch, null, props);
        }
        return Promise.reject(asyncErrors);
      });
    } else {
      return doSubmit();
    }
  } else {
    setSubmitFailed.apply(undefined, _toConsumableArray(fields));
    if (onSubmitFail) {
      onSubmitFail(syncErrors, dispatch, null, props);
    }
    return syncErrors;
  }
};

exports.default = handleSubmit;

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getErrorKeys = function getErrorKeys(name, type) {
  switch (type) {
    case 'Field':
      return [name, name + '._error'];
    case 'FieldArray':
      return [name + '._error'];
    default:
      throw new Error('Unknown field type');
  }
};

var createHasError = function createHasError(_ref) {
  var getIn = _ref.getIn;

  var hasError = function hasError(field, syncErrors, asyncErrors, submitErrors) {
    if (!syncErrors && !asyncErrors && !submitErrors) {
      return false;
    }

    var name = getIn(field, 'name');
    var type = getIn(field, 'type');
    return getErrorKeys(name, type).some(function (key) {
      return getIn(syncErrors, key) || getIn(asyncErrors, key) || getIn(submitErrors, key);
    });
  };
  return hasError;
};

exports.default = createHasError;

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hasSubmitFailed = __webpack_require__(239);

var _hasSubmitFailed2 = _interopRequireDefault(_hasSubmitFailed);

var _plain = __webpack_require__(0);

var _plain2 = _interopRequireDefault(_plain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _hasSubmitFailed2.default)(_plain2.default);

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hasSubmitSucceeded = __webpack_require__(240);

var _hasSubmitSucceeded2 = _interopRequireDefault(_hasSubmitSucceeded);

var _plain = __webpack_require__(0);

var _plain2 = _interopRequireDefault(_plain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _hasSubmitSucceeded2.default)(_plain2.default);

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isDirty = __webpack_require__(241);

var _isDirty2 = _interopRequireDefault(_isDirty);

var _plain = __webpack_require__(0);

var _plain2 = _interopRequireDefault(_plain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _isDirty2.default)(_plain2.default);

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isInvalid = __webpack_require__(242);

var _isInvalid2 = _interopRequireDefault(_isInvalid);

var _plain = __webpack_require__(0);

var _plain2 = _interopRequireDefault(_plain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _isInvalid2.default)(_plain2.default);

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isPristine = __webpack_require__(74);

var _isPristine2 = _interopRequireDefault(_isPristine);

var _plain = __webpack_require__(0);

var _plain2 = _interopRequireDefault(_plain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _isPristine2.default)(_plain2.default);

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var isReactNative = typeof window !== 'undefined' && window.navigator && window.navigator.product && window.navigator.product === 'ReactNative';

exports.default = isReactNative;

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isSubmitting = __webpack_require__(243);

var _isSubmitting2 = _interopRequireDefault(_isSubmitting);

var _plain = __webpack_require__(0);

var _plain2 = _interopRequireDefault(_plain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _isSubmitting2.default)(_plain2.default);

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isValid = __webpack_require__(42);

var _isValid2 = _interopRequireDefault(_isValid);

var _plain = __webpack_require__(0);

var _plain2 = _interopRequireDefault(_plain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _isValid2.default)(_plain2.default);

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fieldPropTypes = exports.fieldMetaPropTypes = exports.fieldInputPropTypes = undefined;

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var any = _propTypes2.default.any,
    bool = _propTypes2.default.bool,
    func = _propTypes2.default.func,
    shape = _propTypes2.default.shape,
    string = _propTypes2.default.string,
    oneOfType = _propTypes2.default.oneOfType,
    object = _propTypes2.default.object;


var propTypes = {
  // State:
  anyTouched: bool.isRequired, // true if any of the fields have been marked as touched
  asyncValidating: oneOfType([bool, string]).isRequired, // true if async validation is running, a string if a field triggered async validation
  dirty: bool.isRequired, // true if any values are different from initialValues
  error: any, // form-wide error from '_error' key in validation result
  form: string.isRequired, // the name of the form
  invalid: bool.isRequired, // true if there are any validation errors
  initialized: bool.isRequired, // true if the form has been initialized
  initialValues: object, // the initialValues object passed to reduxForm
  pristine: bool.isRequired, // true if the values are the same as initialValues
  pure: bool.isRequired, // if true, implements shouldComponentUpdate
  submitting: bool.isRequired, // true if the form is in the process of being submitted
  submitFailed: bool.isRequired, // true if the form was submitted and failed for any reason
  submitSucceeded: bool.isRequired, // true if the form was successfully submitted
  valid: bool.isRequired, // true if there are no validation errors
  warning: any, // form-wide warning from '_warning' key in validation result
  // Actions:
  array: shape({
    insert: func.isRequired, // function to insert a value into an array field
    move: func.isRequired, // function to move a value within an array field
    pop: func.isRequired, // function to pop a value off of an array field
    push: func.isRequired, // function to push a value onto an array field
    remove: func.isRequired, // function to remove a value from an array field
    removeAll: func.isRequired, // function to remove all the values from an array field
    shift: func.isRequired, // function to shift a value out of an array field
    splice: func.isRequired, // function to splice a value into an array field
    swap: func.isRequired, // function to swap values in an array field
    unshift: func.isRequired // function to unshift a value into an array field
  }),
  asyncValidate: func.isRequired, // function to trigger async validation
  autofill: func.isRequired, // action to set a value of a field and mark it as autofilled
  blur: func.isRequired, // action to mark a field as blurred
  change: func.isRequired, // action to change the value of a field
  clearAsyncError: func.isRequired, // action to clear the async error of a field
  destroy: func.isRequired, // action to destroy the form's data in Redux
  dispatch: func.isRequired, // the Redux dispatch action
  handleSubmit: func.isRequired, // function to submit the form
  initialize: func.isRequired, // action to initialize form data
  reset: func.isRequired, // action to reset the form data to previously initialized values
  touch: func.isRequired, // action to mark fields as touched
  submit: func.isRequired, // action to trigger a submission of the specified form
  untouch: func.isRequired, // action to mark fields as untouched

  // triggerSubmit
  triggerSubmit: bool, // if true, submits the form on componentWillReceiveProps
  clearSubmit: func.isRequired // called before a triggered submit, by default clears triggerSubmit
};

var fieldInputPropTypes = exports.fieldInputPropTypes = {
  checked: bool,
  name: string.isRequired,
  onBlur: func.isRequired,
  onChange: func.isRequired,
  onDragStart: func.isRequired,
  onDrop: func.isRequired,
  onFocus: func.isRequired,
  value: any
};

var fieldMetaPropTypes = exports.fieldMetaPropTypes = {
  active: bool.isRequired,
  asyncValidating: bool.isRequired,
  autofilled: bool.isRequired,
  dirty: bool.isRequired,
  dispatch: func.isRequired,
  error: string,
  form: string.isRequired,
  invalid: bool.isRequired,
  pristine: bool.isRequired,
  submitting: bool.isRequired,
  submitFailed: bool.isRequired,
  touched: bool.isRequired,
  valid: bool.isRequired,
  visited: bool.isRequired,
  warning: string
};

var fieldPropTypes = exports.fieldPropTypes = {
  input: fieldInputPropTypes.isRequired,
  meta: fieldMetaPropTypes.isRequired,
  custom: object.isRequired
};

exports.default = propTypes;

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createReducer = __webpack_require__(202);

var _createReducer2 = _interopRequireDefault(_createReducer);

var _plain = __webpack_require__(0);

var _plain2 = _interopRequireDefault(_plain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _createReducer2.default)(_plain2.default);

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createReduxForm = __webpack_require__(203);

var _createReduxForm2 = _interopRequireDefault(_createReduxForm);

var _plain = __webpack_require__(0);

var _plain2 = _interopRequireDefault(_plain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _createReduxForm2.default)(_plain2.default);

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var createGetFormAsyncErrors = function createGetFormAsyncErrors(_ref) {
  var getIn = _ref.getIn;
  return function (form) {
    var getFormState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (state) {
      return getIn(state, 'form');
    };
    return function (state) {
      return getIn(getFormState(state), form + '.asyncErrors');
    };
  };
};

exports.default = createGetFormAsyncErrors;

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var createGetFormInitialValues = function createGetFormInitialValues(_ref) {
  var getIn = _ref.getIn;
  return function (form) {
    var getFormState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (state) {
      return getIn(state, 'form');
    };
    return function (state) {
      return getIn(getFormState(state), form + '.initial');
    };
  };
};

exports.default = createGetFormInitialValues;

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var createGetFormMeta = function createGetFormMeta(_ref) {
  var getIn = _ref.getIn;
  return function (form) {
    var getFormState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (state) {
      return getIn(state, 'form');
    };
    return function (state) {
      return getIn(getFormState(state), form + '.fields');
    };
  };
};

exports.default = createGetFormMeta;

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var createGetFormNames = function createGetFormNames(_ref) {
  var getIn = _ref.getIn,
      keys = _ref.keys;
  return function () {
    var getFormState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (state) {
      return getIn(state, 'form');
    };
    return function (state) {
      return keys(getFormState(state));
    };
  };
};

exports.default = createGetFormNames;

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var createGetFormSubmitErrors = function createGetFormSubmitErrors(_ref) {
  var getIn = _ref.getIn;
  return function (form) {
    var getFormState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (state) {
      return getIn(state, 'form');
    };
    return function (state) {
      return getIn(getFormState(state), form + '.submitErrors');
    };
  };
};

exports.default = createGetFormSubmitErrors;

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var createGetFormSyncErrors = function createGetFormSyncErrors(_ref) {
  var getIn = _ref.getIn;
  return function (form) {
    var getFormState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (state) {
      return getIn(state, 'form');
    };
    return function (state) {
      return getIn(getFormState(state), form + '.syncErrors');
    };
  };
};

exports.default = createGetFormSyncErrors;

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var createGetFormSyncWarnings = function createGetFormSyncWarnings(_ref) {
  var getIn = _ref.getIn;
  return function (form) {
    var getFormState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (state) {
      return getIn(state, 'form');
    };
    return function (state) {
      return getIn(getFormState(state), form + '.syncWarnings');
    };
  };
};

exports.default = createGetFormSyncWarnings;

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var createGetFormValues = function createGetFormValues(_ref) {
  var getIn = _ref.getIn;
  return function (form) {
    var getFormState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (state) {
      return getIn(state, 'form');
    };
    return function (state) {
      return getIn(getFormState(state), form + '.values');
    };
  };
};

exports.default = createGetFormValues;

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var createHasSubmitFailed = function createHasSubmitFailed(_ref) {
  var getIn = _ref.getIn;
  return function (form) {
    var getFormState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (state) {
      return getIn(state, 'form');
    };
    return function (state) {
      var formState = getFormState(state);
      return getIn(formState, form + '.submitFailed') || false;
    };
  };
};

exports.default = createHasSubmitFailed;

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var createHasSubmitSucceeded = function createHasSubmitSucceeded(_ref) {
  var getIn = _ref.getIn;
  return function (form) {
    var getFormState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (state) {
      return getIn(state, 'form');
    };
    return function (state) {
      var formState = getFormState(state);
      return getIn(formState, form + '.submitSucceeded') || false;
    };
  };
};

exports.default = createHasSubmitSucceeded;

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isPristine = __webpack_require__(74);

var _isPristine2 = _interopRequireDefault(_isPristine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createIsDirty = function createIsDirty(structure) {
  return function (form, getFormState) {
    var isPristine = (0, _isPristine2.default)(structure)(form, getFormState);
    return function (state) {
      return !isPristine(state);
    };
  };
};

exports.default = createIsDirty;

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isValid = __webpack_require__(42);

var _isValid2 = _interopRequireDefault(_isValid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createIsInvalid = function createIsInvalid(structure) {
  return function (form, getFormState) {
    var isValid = (0, _isValid2.default)(structure)(form, getFormState);
    return function (state) {
      return !isValid(state);
    };
  };
};

exports.default = createIsInvalid;

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var createIsSubmitting = function createIsSubmitting(_ref) {
  var getIn = _ref.getIn;
  return function (form) {
    var getFormState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (state) {
      return getIn(state, 'form');
    };
    return function (state) {
      var formState = getFormState(state);
      return getIn(formState, form + '.submitting') || false;
    };
  };
};

exports.default = createIsSubmitting;

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isEqualWith2 = __webpack_require__(62);

var _isEqualWith3 = _interopRequireDefault(_isEqualWith2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var customizer = function customizer(obj, other) {
  if (obj === other) return true;
  if ((obj == null || obj === '' || obj === false) && (other == null || other === '' || other === false)) return true;

  if (obj && other && obj._error !== other._error) return false;
  if (obj && other && obj._warning !== other._warning) return false;
};

var deepEqual = function deepEqual(a, b) {
  return (0, _isEqualWith3.default)(a, b, customizer);
};

exports.default = deepEqual;

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toPath2 = __webpack_require__(22);

var _toPath3 = _interopRequireDefault(_toPath2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var deleteInWithPath = function deleteInWithPath(state, first) {
  for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    rest[_key - 2] = arguments[_key];
  }

  if (state === undefined || first === undefined) {
    return state;
  }
  if (rest.length) {
    if (Array.isArray(state)) {
      if (first < state.length) {
        var result = deleteInWithPath.apply(undefined, [state && state[first]].concat(rest));
        if (result !== state[first]) {
          var copy = [].concat(_toConsumableArray(state));
          copy[first] = result;
          return copy;
        }
      }
      return state;
    }
    if (first in state) {
      var _result = deleteInWithPath.apply(undefined, [state && state[first]].concat(rest));
      return state[first] === _result ? state : _extends({}, state, _defineProperty({}, first, _result));
    }
    return state;
  }
  if (Array.isArray(state)) {
    if (isNaN(first)) {
      throw new Error('Cannot delete non-numerical index from an array');
    }
    if (first < state.length) {
      var _copy = [].concat(_toConsumableArray(state));
      _copy.splice(first, 1);
      return _copy;
    }
    return state;
  }
  if (first in state) {
    var _copy2 = _extends({}, state);
    delete _copy2[first];
    return _copy2;
  }
  return state;
};

var deleteIn = function deleteIn(state, field) {
  return deleteInWithPath.apply(undefined, [state].concat(_toConsumableArray((0, _toPath3.default)(field))));
};

exports.default = deleteIn;

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toPath2 = __webpack_require__(22);

var _toPath3 = _interopRequireDefault(_toPath2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getIn = function getIn(state, field) {
  if (!state) {
    return state;
  }

  var path = (0, _toPath3.default)(field);
  var length = path.length;
  if (!length) {
    return undefined;
  }

  var result = state;
  for (var i = 0; i < length && !!result; ++i) {
    result = result[path[i]];
  }

  return result;
};

exports.default = getIn;

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var keys = function keys(value) {
  return value ? Object.keys(value) : [];
};

exports.default = keys;

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toPath2 = __webpack_require__(22);

var _toPath3 = _interopRequireDefault(_toPath2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var setInWithPath = function setInWithPath(state, value, path, pathIndex) {
  if (pathIndex >= path.length) {
    return value;
  }

  var first = path[pathIndex];
  var next = setInWithPath(state && state[first], value, path, pathIndex + 1);

  if (!state) {
    var initialized = isNaN(first) ? {} : [];
    initialized[first] = next;
    return initialized;
  }

  if (Array.isArray(state)) {
    var copy = [].concat(state);
    copy[first] = next;
    return copy;
  }

  return _extends({}, state, _defineProperty({}, first, next));
};

var setIn = function setIn(state, field, value) {
  return setInWithPath(state, value, (0, _toPath3.default)(field), 0);
};

exports.default = setIn;

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var splice = function splice(array, index, removeNum, value) {
  array = array || [];

  if (index < array.length) {
    if (value === undefined && !removeNum) {
      // inserting undefined
      var _copy2 = [].concat(_toConsumableArray(array));
      _copy2.splice(index, 0, null);
      _copy2[index] = undefined;
      return _copy2;
    }
    if (value != null) {
      var _copy3 = [].concat(_toConsumableArray(array));
      _copy3.splice(index, removeNum, value); // removing and adding
      return _copy3;
    }
    var _copy = [].concat(_toConsumableArray(array));
    _copy.splice(index, removeNum); // removing
    return _copy;
  }
  if (removeNum) {
    // trying to remove non-existant item: return original array
    return array;
  }
  // trying to add outside of range: just set value
  var copy = [].concat(_toConsumableArray(array));
  copy[index] = value;
  return copy;
};

exports.default = splice;

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var dataKey = exports.dataKey = 'text';

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getDisplayName = function getDisplayName(Comp) {
  return Comp.displayName || Comp.name || 'Component';
};

exports.default = getDisplayName;

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createValues = __webpack_require__(204);

var _createValues2 = _interopRequireDefault(_createValues);

var _plain = __webpack_require__(0);

var _plain2 = _interopRequireDefault(_plain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _createValues2.default)(_plain2.default);

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(152);

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(154);

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(215);

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(216);

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(219);

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(55);

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(89);

/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmUyODU3NjRhODM3ZDNlMWUxYzciLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9zdHJ1Y3R1cmUvcGxhaW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiLi92ZW5kb3JcIiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0L3JlYWN0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FycmF5LmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3Jvb3QuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc09iamVjdC5qcyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXROYXRpdmUuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fdG9LZXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvZXEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldFRhZy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX0xpc3RDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXNzb2NJbmRleE9mLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlQXNzaWduVmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldE1hcERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX25hdGl2ZUNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FycmF5TGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC90b1BhdGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi91dGlsL3ByZWZpeE5hbWUuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9pbnZhcmlhbnQvaW52YXJpYW50LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3RvcmUvQXBwLnRzIiwid2VicGFjazovLy8uL34vaXMtcHJvbWlzZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fTWFwLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19NYXBDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fU3RhY2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc0VxdWFsLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pc0luZGV4LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pc0tleS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNQcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaWRlbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNCdWZmZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0xlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc1R5cGVkQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gva2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL2FjdGlvblR5cGVzLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvc2VsZWN0b3JzL2lzVmFsaWQuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2J1aWxkaW4vbW9kdWxlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvRm9ybS50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbnRhaW5lcnMvTG9naW4udHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9oZWxwZXJzL2FwaUNhbGxzLnRzeCIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fVWludDhBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlMaWtlS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlNYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Fzc2lnbk1lcmdlVmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VGb3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Nhc3RQYXRoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jb3B5QXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19lcXVhbEFycmF5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNTdHJpY3RDb21wYXJhYmxlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXRjaGVzU3RyaWN0Q29tcGFyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RyaW5nVG9QYXRoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL190b1NvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0VxdWFsV2l0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9rZXlzSW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvbWFwVmFsdWVzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL3RvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvU3VibWlzc2lvbkVycm9yLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL2NyZWF0ZUZpZWxkUHJvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9kZWZhdWx0U2hvdWxkQXN5bmNWYWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL2RlZmF1bHRTaG91bGRWYWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL2V2ZW50cy9pc0V2ZW50LmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvZXZlbnRzL29uQ2hhbmdlVmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9ldmVudHMvc2lsZW5jZUV2ZW50LmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvc2VsZWN0b3JzL2lzUHJpc3RpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi91dGlsL3NoYWxsb3dDb21wYXJlLmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1mZXRjaC9mZXRjaC1ucG0tbm9kZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1N5bWJvbC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbmZpZ3VyZVN0b3JlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9yb3V0ZXMudHN4Iiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYXNwbmV0LXByZXJlbmRlcmluZy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vc2VydmVyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYm9vdC1zZXJ2ZXIudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL0lucHV0LnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9Mb2dpbkZvcm0udHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL05hdk1lbnUudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3JlZ2lzdGVyRm9ybS50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbnRhaW5lcnMvSG9tZS50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbnRhaW5lcnMvTGF5b3V0LnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29udGFpbmVycy9SZWdpc3Rlci50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2hlbHBlcnMvZm9ybVZhbGlkYXRpb24udHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9zdG9yZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9+L2VzNi1lcnJvci9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX0RhdGFWaWV3LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19IYXNoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19Qcm9taXNlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19TZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1NldENhY2hlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19XZWFrTWFwLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcHBseS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5UHVzaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlTb21lLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hc3NpZ25WYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUZvck93bi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUdldEFsbEtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VIYXNJbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzQXJndW1lbnRzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSXNFcXVhbERlZXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc01hdGNoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSXNOYXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc1R5cGVkQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJdGVyYXRlZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VLZXlzSW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VNYXRjaGVzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlTWF0Y2hlc1Byb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlTWVyZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VNZXJnZURlZXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZVByb3BlcnR5RGVlcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZVJlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VTZXRUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZVRpbWVzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VVbmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fY2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Nsb25lQXJyYXlCdWZmZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Nsb25lQnVmZmVyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jbG9uZVR5cGVkQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2NvcHlPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2NvcmVKc0RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2NyZWF0ZUFzc2lnbmVyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jcmVhdGVCYXNlRm9yLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19lcXVhbEJ5VGFnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19lcXVhbE9iamVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldEFsbEtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldE1hdGNoRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0U3ltYm9scy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0VGFnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRWYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzUGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzaENsZWFyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNoRGVsZXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNoR2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNoSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNoU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pbml0Q2xvbmVPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzSXRlcmF0ZWVDYWxsLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pc0tleWFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzTWFza2VkLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19saXN0Q2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbGlzdENhY2hlRGVsZXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19saXN0Q2FjaGVHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2xpc3RDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbGlzdENhY2hlU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBDYWNoZUNsZWFyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBDYWNoZURlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWFwQ2FjaGVHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBDYWNoZVNldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWFwVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWVtb2l6ZUNhcHBlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbmF0aXZlS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbmF0aXZlS2V5c0luLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19ub2RlVXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fb3ZlclJlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3NldENhY2hlQWRkLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zZXRDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc2V0VG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc2V0VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3Nob3J0T3V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zdGFja0NsZWFyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zdGFja0RlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RhY2tHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0YWNrSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zdGFja1NldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9jb25zdGFudC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9nZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaGFzSW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNBcnJheUxpa2VPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvbWVtb2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9tZXJnZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9zdHViQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvc3R1YkZhbHNlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL3RvUGxhaW5PYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9Db25uZWN0ZWRGaWVsZC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL0Nvbm5lY3RlZEZpZWxkQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9Db25uZWN0ZWRGaWVsZHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9GaWVsZC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL0ZpZWxkQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9GaWVsZHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9Gb3JtLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvRm9ybVNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9hc3luY1ZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9jcmVhdGVGaWVsZC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL2NyZWF0ZUZpZWxkQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9jcmVhdGVGaWVsZEFycmF5UHJvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9jcmVhdGVGaWVsZHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9jcmVhdGVGb3JtVmFsdWVTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL2NyZWF0ZVJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9jcmVhdGVSZWR1eEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9jcmVhdGVWYWx1ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9kZWxldGVJbldpdGhDbGVhblVwLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvZXZlbnRzL2dldFZhbHVlLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvZXZlbnRzL3NpbGVuY2VFdmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9mb3JtVmFsdWVTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL2dlbmVyYXRlVmFsaWRhdG9yLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvZ2V0Rm9ybUFzeW5jRXJyb3JzLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvZ2V0Rm9ybUluaXRpYWxWYWx1ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9nZXRGb3JtTWV0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL2dldEZvcm1OYW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL2dldEZvcm1TdWJtaXRFcnJvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9nZXRGb3JtU3luY0Vycm9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL2dldEZvcm1TeW5jV2FybmluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9nZXRGb3JtVmFsdWVzLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvaGFuZGxlU3VibWl0LmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvaGFzRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9oYXNTdWJtaXRGYWlsZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9oYXNTdWJtaXRTdWNjZWVkZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9pc0RpcnR5LmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvaXNJbnZhbGlkLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvaXNQcmlzdGluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL2lzUmVhY3ROYXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9pc1N1Ym1pdHRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9pc1ZhbGlkLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvcHJvcFR5cGVzLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL3JlZHV4Rm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL3NlbGVjdG9ycy9nZXRGb3JtQXN5bmNFcnJvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9zZWxlY3RvcnMvZ2V0Rm9ybUluaXRpYWxWYWx1ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9zZWxlY3RvcnMvZ2V0Rm9ybU1ldGEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9zZWxlY3RvcnMvZ2V0Rm9ybU5hbWVzLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvc2VsZWN0b3JzL2dldEZvcm1TdWJtaXRFcnJvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9zZWxlY3RvcnMvZ2V0Rm9ybVN5bmNFcnJvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9zZWxlY3RvcnMvZ2V0Rm9ybVN5bmNXYXJuaW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL3NlbGVjdG9ycy9nZXRGb3JtVmFsdWVzLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvc2VsZWN0b3JzL2hhc1N1Ym1pdEZhaWxlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL3NlbGVjdG9ycy9oYXNTdWJtaXRTdWNjZWVkZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9zZWxlY3RvcnMvaXNEaXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL3NlbGVjdG9ycy9pc0ludmFsaWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9zZWxlY3RvcnMvaXNTdWJtaXR0aW5nLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvc3RydWN0dXJlL3BsYWluL2RlZXBFcXVhbC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL3N0cnVjdHVyZS9wbGFpbi9kZWxldGVJbi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL3N0cnVjdHVyZS9wbGFpbi9nZXRJbi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL3N0cnVjdHVyZS9wbGFpbi9rZXlzLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvc3RydWN0dXJlL3BsYWluL3NldEluLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvc3RydWN0dXJlL3BsYWluL3NwbGljZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL3V0aWwvZXZlbnRDb25zdHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi91dGlsL2dldERpc3BsYXlOYW1lLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvdmFsdWVzLmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLXJlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWR1eC10aHVuay9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvbG9kYXNoL19mcmVlR2xvYmFsLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0UHJvdG90eXBlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb3ZlckFyZy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNQbGFpbk9iamVjdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1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Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxFQUFFO0FBQ2IsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOzs7Ozs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsU0FBUztBQUNwQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQy9HQTs7QUFF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RUFBRSxlQUFlOztBQUUxTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RUFBNkU7QUFDN0Usa0ZBQWtGO0FBQ2xGO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1Qjs7QUFFdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxzQkFBc0IsbUNBQW1DO0FBQ3pEO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztB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UztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEscUhBQXFILEtBQUssd0ZBQXdGLEtBQUs7QUFDdk47QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxvR0FBb0csdUVBQXVFO0FBQzNLO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsMkdBQTJHLDhDQUE4Qyw2QkFBNkIsbUZBQW1GLDBCQUEwQjtBQUNuUztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSx5SUFBeUksZ0RBQWdELDZCQUE2Qix5RkFBeUYsMEJBQTBCO0FBQ3pVLGVBQWU7QUFDZjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxrQ0FBa0MsNkJBQTZCO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLHlDQUF5QyxvQ0FBb0M7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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b0M7Ozs7Ozs7QUNqQkE7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUM7Ozs7Ozs7QUNsQkE7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRDOzs7Ozs7O0FDakJBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQzs7Ozs7OztBQ2pCQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEM7Ozs7Ozs7QUNqQkE7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNDOzs7Ozs7O0FDakJBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7O0FDbEJBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJDOzs7Ozs7O0FDbEJBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdDOzs7Ozs7O0FDckJBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtB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O0FBQ0Q7QUFDQTtBQUNBOztBQUVBLGlDOzs7Ozs7O0FDVEE7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLCtEOzs7Ozs7QUNoQkEsK0M7Ozs7OztBQ0FBLCtDOzs7Ozs7QUNBQSwrQzs7Ozs7O0FDQUEsK0M7Ozs7OztBQ0FBLCtDOzs7Ozs7QUNBQSw4Qzs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoibWFpbi1zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDgyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2ZTI4NTc2NGE4MzdkM2UxZTFjNyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9zcGxpY2UgPSByZXF1aXJlKCcuL3NwbGljZScpO1xuXG52YXIgX3NwbGljZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zcGxpY2UpO1xuXG52YXIgX2dldEluID0gcmVxdWlyZSgnLi9nZXRJbicpO1xuXG52YXIgX2dldEluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldEluKTtcblxudmFyIF9zZXRJbiA9IHJlcXVpcmUoJy4vc2V0SW4nKTtcblxudmFyIF9zZXRJbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zZXRJbik7XG5cbnZhciBfZGVlcEVxdWFsID0gcmVxdWlyZSgnLi9kZWVwRXF1YWwnKTtcblxudmFyIF9kZWVwRXF1YWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVlcEVxdWFsKTtcblxudmFyIF9kZWxldGVJbiA9IHJlcXVpcmUoJy4vZGVsZXRlSW4nKTtcblxudmFyIF9kZWxldGVJbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWxldGVJbik7XG5cbnZhciBfa2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG52YXIgX2tleXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfa2V5cyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBzdHJ1Y3R1cmUgPSB7XG4gIGFsbG93c0FycmF5RXJyb3JzOiB0cnVlLFxuICBlbXB0eToge30sXG4gIGVtcHR5TGlzdDogW10sXG4gIGdldEluOiBfZ2V0SW4yLmRlZmF1bHQsXG4gIHNldEluOiBfc2V0SW4yLmRlZmF1bHQsXG4gIGRlZXBFcXVhbDogX2RlZXBFcXVhbDIuZGVmYXVsdCxcbiAgZGVsZXRlSW46IF9kZWxldGVJbjIuZGVmYXVsdCxcbiAgZnJvbUpTOiBmdW5jdGlvbiBmcm9tSlModmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH0sXG4gIGtleXM6IF9rZXlzMi5kZWZhdWx0LFxuICBzaXplOiBmdW5jdGlvbiBzaXplKGFycmF5KSB7XG4gICAgcmV0dXJuIGFycmF5ID8gYXJyYXkubGVuZ3RoIDogMDtcbiAgfSxcbiAgc3BsaWNlOiBfc3BsaWNlMi5kZWZhdWx0LFxuICB0b0pTOiBmdW5jdGlvbiB0b0pTKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBzdHJ1Y3R1cmU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4LWZvcm0vbGliL3N0cnVjdHVyZS9wbGFpbi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL3ZlbmRvclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIi4vdmVuZG9yXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoNSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0L3JlYWN0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0FycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDk2KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoMjIwKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvbG9kYXNoL19yb290LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgxNTEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc09iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgxNTMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUlzTmF0aXZlID0gcmVxdWlyZSgnLi9fYmFzZUlzTmF0aXZlJyksXG4gICAgZ2V0VmFsdWUgPSByZXF1aXJlKCcuL19nZXRWYWx1ZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBtZXRob2QgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZ1bmN0aW9uIGlmIGl0J3MgbmF0aXZlLCBlbHNlIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBnZXROYXRpdmUob2JqZWN0LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gZ2V0VmFsdWUob2JqZWN0LCBrZXkpO1xuICByZXR1cm4gYmFzZUlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE5hdGl2ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldE5hdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgyMjEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBJTkZJTklUWSA9IDEgLyAwO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcga2V5IGlmIGl0J3Mgbm90IGEgc3RyaW5nIG9yIHN5bWJvbC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtzdHJpbmd8c3ltYm9sfSBSZXR1cm5zIHRoZSBrZXkuXG4gKi9cbmZ1bmN0aW9uIHRvS2V5KHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycgfHwgaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHZhciByZXN1bHQgPSAodmFsdWUgKyAnJyk7XG4gIHJldHVybiAocmVzdWx0ID09ICcwJyAmJiAoMSAvIHZhbHVlKSA9PSAtSU5GSU5JVFkpID8gJy0wJyA6IHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b0tleTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3RvS2V5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFBlcmZvcm1zIGFcbiAqIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmUgZXF1aXZhbGVudC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5lcShvYmplY3QsIG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcShvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcSgnYScsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcSgnYScsIE9iamVjdCgnYScpKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcShOYU4sIE5hTik7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGVxKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gdmFsdWUgPT09IG90aGVyIHx8ICh2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvZXEuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMudW50b3VjaCA9IGV4cG9ydHMudW5yZWdpc3RlckZpZWxkID0gZXhwb3J0cy50b3VjaCA9IGV4cG9ydHMuc3VibWl0ID0gZXhwb3J0cy5zdG9wU3VibWl0ID0gZXhwb3J0cy5zdG9wQXN5bmNWYWxpZGF0aW9uID0gZXhwb3J0cy5zdGFydFN1Ym1pdCA9IGV4cG9ydHMuc3RhcnRBc3luY1ZhbGlkYXRpb24gPSBleHBvcnRzLnNldFN1Ym1pdFN1Y2NlZWRlZCA9IGV4cG9ydHMuc2V0U3VibWl0RmFpbGVkID0gZXhwb3J0cy5yZXNldCA9IGV4cG9ydHMucmVnaXN0ZXJGaWVsZCA9IGV4cG9ydHMuaW5pdGlhbGl6ZSA9IGV4cG9ydHMuZm9jdXMgPSBleHBvcnRzLmRlc3Ryb3kgPSBleHBvcnRzLmNsZWFyU3VibWl0RXJyb3JzID0gZXhwb3J0cy5jaGFuZ2UgPSBleHBvcnRzLmJsdXIgPSBleHBvcnRzLmF1dG9maWxsID0gZXhwb3J0cy5hcnJheVVuc2hpZnQgPSBleHBvcnRzLmFycmF5U3dhcCA9IGV4cG9ydHMuYXJyYXlTcGxpY2UgPSBleHBvcnRzLmFycmF5U2hpZnQgPSBleHBvcnRzLmFycmF5UmVtb3ZlQWxsID0gZXhwb3J0cy5hcnJheVJlbW92ZSA9IGV4cG9ydHMuYXJyYXlQdXNoID0gZXhwb3J0cy5hcnJheVBvcCA9IGV4cG9ydHMuYXJyYXlNb3ZlID0gZXhwb3J0cy5hcnJheUluc2VydCA9IGV4cG9ydHMuYWN0aW9ucyA9IGV4cG9ydHMuYWN0aW9uVHlwZXMgPSBleHBvcnRzLnZhbHVlcyA9IGV4cG9ydHMucmVkdWNlciA9IGV4cG9ydHMucmVkdXhGb3JtID0gZXhwb3J0cy5oYXNTdWJtaXRGYWlsZWQgPSBleHBvcnRzLmhhc1N1Ym1pdFN1Y2NlZWRlZCA9IGV4cG9ydHMuaXNTdWJtaXR0aW5nID0gZXhwb3J0cy5pc1ZhbGlkID0gZXhwb3J0cy5pc1ByaXN0aW5lID0gZXhwb3J0cy5pc0ludmFsaWQgPSBleHBvcnRzLmlzRGlydHkgPSBleHBvcnRzLmdldEZvcm1TdWJtaXRFcnJvcnMgPSBleHBvcnRzLmdldEZvcm1TeW5jV2FybmluZ3MgPSBleHBvcnRzLmdldEZvcm1Bc3luY0Vycm9ycyA9IGV4cG9ydHMuZ2V0Rm9ybU1ldGEgPSBleHBvcnRzLmdldEZvcm1TeW5jRXJyb3JzID0gZXhwb3J0cy5nZXRGb3JtSW5pdGlhbFZhbHVlcyA9IGV4cG9ydHMuZ2V0Rm9ybVZhbHVlcyA9IGV4cG9ydHMuZ2V0Rm9ybU5hbWVzID0gZXhwb3J0cy5mb3JtVmFsdWVTZWxlY3RvciA9IGV4cG9ydHMuRmllbGRBcnJheSA9IGV4cG9ydHMuRmllbGRzID0gZXhwb3J0cy5GaWVsZCA9IGV4cG9ydHMuZmllbGRQcm9wVHlwZXMgPSBleHBvcnRzLmZpZWxkTWV0YVByb3BUeXBlcyA9IGV4cG9ydHMuZmllbGRJbnB1dFByb3BUeXBlcyA9IGV4cG9ydHMucHJvcFR5cGVzID0gZXhwb3J0cy5TdWJtaXNzaW9uRXJyb3IgPSBleHBvcnRzLkZvcm1TZWN0aW9uID0gZXhwb3J0cy5Gb3JtID0gZXhwb3J0cy5kZWZhdWx0U2hvdWxkVmFsaWRhdGUgPSBleHBvcnRzLmRlZmF1bHRTaG91bGRBc3luY1ZhbGlkYXRlID0gdW5kZWZpbmVkO1xuXG52YXIgX2RlZmF1bHRTaG91bGRBc3luY1ZhbGlkYXRlID0gcmVxdWlyZSgnLi9kZWZhdWx0U2hvdWxkQXN5bmNWYWxpZGF0ZScpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2RlZmF1bHRTaG91bGRBc3luY1ZhbGlkYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmYXVsdFNob3VsZEFzeW5jVmFsaWRhdGUpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX2RlZmF1bHRTaG91bGRWYWxpZGF0ZSA9IHJlcXVpcmUoJy4vZGVmYXVsdFNob3VsZFZhbGlkYXRlJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnZGVmYXVsdFNob3VsZFZhbGlkYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmYXVsdFNob3VsZFZhbGlkYXRlKS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9Gb3JtID0gcmVxdWlyZSgnLi9Gb3JtJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Zvcm0pLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX0Zvcm1TZWN0aW9uID0gcmVxdWlyZSgnLi9Gb3JtU2VjdGlvbicpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm1TZWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRm9ybVNlY3Rpb24pLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX1N1Ym1pc3Npb25FcnJvciA9IHJlcXVpcmUoJy4vU3VibWlzc2lvbkVycm9yJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU3VibWlzc2lvbkVycm9yJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU3VibWlzc2lvbkVycm9yKS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCcuL3Byb3BUeXBlcycpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Byb3BUeXBlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcykuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2ZpZWxkSW5wdXRQcm9wVHlwZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfcHJvcFR5cGVzLmZpZWxkSW5wdXRQcm9wVHlwZXM7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdmaWVsZE1ldGFQcm9wVHlwZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfcHJvcFR5cGVzLmZpZWxkTWV0YVByb3BUeXBlcztcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2ZpZWxkUHJvcFR5cGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3Byb3BUeXBlcy5maWVsZFByb3BUeXBlcztcbiAgfVxufSk7XG5cbnZhciBfRmllbGQgPSByZXF1aXJlKCcuL0ZpZWxkJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRmllbGQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9GaWVsZCkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfRmllbGRzID0gcmVxdWlyZSgnLi9GaWVsZHMnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGaWVsZHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9GaWVsZHMpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX0ZpZWxkQXJyYXkgPSByZXF1aXJlKCcuL0ZpZWxkQXJyYXknKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGaWVsZEFycmF5Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRmllbGRBcnJheSkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfZm9ybVZhbHVlU2VsZWN0b3IgPSByZXF1aXJlKCcuL2Zvcm1WYWx1ZVNlbGVjdG9yJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnZm9ybVZhbHVlU2VsZWN0b3InLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mb3JtVmFsdWVTZWxlY3RvcikuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfZ2V0Rm9ybU5hbWVzID0gcmVxdWlyZSgnLi9nZXRGb3JtTmFtZXMnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdnZXRGb3JtTmFtZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRGb3JtTmFtZXMpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX2dldEZvcm1WYWx1ZXMgPSByZXF1aXJlKCcuL2dldEZvcm1WYWx1ZXMnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdnZXRGb3JtVmFsdWVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0Rm9ybVZhbHVlcykuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfZ2V0Rm9ybUluaXRpYWxWYWx1ZXMgPSByZXF1aXJlKCcuL2dldEZvcm1Jbml0aWFsVmFsdWVzJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnZ2V0Rm9ybUluaXRpYWxWYWx1ZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRGb3JtSW5pdGlhbFZhbHVlcykuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfZ2V0Rm9ybVN5bmNFcnJvcnMgPSByZXF1aXJlKCcuL2dldEZvcm1TeW5jRXJyb3JzJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnZ2V0Rm9ybVN5bmNFcnJvcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRGb3JtU3luY0Vycm9ycykuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfZ2V0Rm9ybU1ldGEgPSByZXF1aXJlKCcuL2dldEZvcm1NZXRhJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnZ2V0Rm9ybU1ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRGb3JtTWV0YSkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfZ2V0Rm9ybUFzeW5jRXJyb3JzID0gcmVxdWlyZSgnLi9nZXRGb3JtQXN5bmNFcnJvcnMnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdnZXRGb3JtQXN5bmNFcnJvcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRGb3JtQXN5bmNFcnJvcnMpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX2dldEZvcm1TeW5jV2FybmluZ3MgPSByZXF1aXJlKCcuL2dldEZvcm1TeW5jV2FybmluZ3MnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdnZXRGb3JtU3luY1dhcm5pbmdzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0Rm9ybVN5bmNXYXJuaW5ncykuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfZ2V0Rm9ybVN1Ym1pdEVycm9ycyA9IHJlcXVpcmUoJy4vZ2V0Rm9ybVN1Ym1pdEVycm9ycycpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2dldEZvcm1TdWJtaXRFcnJvcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRGb3JtU3VibWl0RXJyb3JzKS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9pc0RpcnR5ID0gcmVxdWlyZSgnLi9pc0RpcnR5Jyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNEaXJ0eScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzRGlydHkpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX2lzSW52YWxpZCA9IHJlcXVpcmUoJy4vaXNJbnZhbGlkJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNJbnZhbGlkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNJbnZhbGlkKS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9pc1ByaXN0aW5lID0gcmVxdWlyZSgnLi9pc1ByaXN0aW5lJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNQcmlzdGluZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzUHJpc3RpbmUpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX2lzVmFsaWQgPSByZXF1aXJlKCcuL2lzVmFsaWQnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1ZhbGlkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNWYWxpZCkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfaXNTdWJtaXR0aW5nID0gcmVxdWlyZSgnLi9pc1N1Ym1pdHRpbmcnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1N1Ym1pdHRpbmcnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1N1Ym1pdHRpbmcpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX2hhc1N1Ym1pdFN1Y2NlZWRlZCA9IHJlcXVpcmUoJy4vaGFzU3VibWl0U3VjY2VlZGVkJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaGFzU3VibWl0U3VjY2VlZGVkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGFzU3VibWl0U3VjY2VlZGVkKS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9oYXNTdWJtaXRGYWlsZWQgPSByZXF1aXJlKCcuL2hhc1N1Ym1pdEZhaWxlZCcpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2hhc1N1Ym1pdEZhaWxlZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hhc1N1Ym1pdEZhaWxlZCkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfcmVkdXhGb3JtID0gcmVxdWlyZSgnLi9yZWR1eEZvcm0nKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWR1eEZvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWR1eEZvcm0pLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX3JlZHVjZXIgPSByZXF1aXJlKCcuL3JlZHVjZXInKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWR1Y2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVkdWNlcikuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfdmFsdWVzID0gcmVxdWlyZSgnLi92YWx1ZXMnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd2YWx1ZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92YWx1ZXMpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX2FjdGlvbnMyID0gcmVxdWlyZSgnLi9hY3Rpb25zJyk7XG5cbnZhciBfYWN0aW9ucyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9hY3Rpb25zMik7XG5cbnZhciBfYWN0aW9uVHlwZXMyID0gcmVxdWlyZSgnLi9hY3Rpb25UeXBlcycpO1xuXG52YXIgX2FjdGlvblR5cGVzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2FjdGlvblR5cGVzMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBhY3Rpb25UeXBlcyA9IGV4cG9ydHMuYWN0aW9uVHlwZXMgPSBfYWN0aW9uVHlwZXM7XG52YXIgYWN0aW9ucyA9IGV4cG9ydHMuYWN0aW9ucyA9IF9hY3Rpb25zO1xudmFyIGFycmF5SW5zZXJ0ID0gX2FjdGlvbnMuYXJyYXlJbnNlcnQsXG4gICAgYXJyYXlNb3ZlID0gX2FjdGlvbnMuYXJyYXlNb3ZlLFxuICAgIGFycmF5UG9wID0gX2FjdGlvbnMuYXJyYXlQb3AsXG4gICAgYXJyYXlQdXNoID0gX2FjdGlvbnMuYXJyYXlQdXNoLFxuICAgIGFycmF5UmVtb3ZlID0gX2FjdGlvbnMuYXJyYXlSZW1vdmUsXG4gICAgYXJyYXlSZW1vdmVBbGwgPSBfYWN0aW9ucy5hcnJheVJlbW92ZUFsbCxcbiAgICBhcnJheVNoaWZ0ID0gX2FjdGlvbnMuYXJyYXlTaGlmdCxcbiAgICBhcnJheVNwbGljZSA9IF9hY3Rpb25zLmFycmF5U3BsaWNlLFxuICAgIGFycmF5U3dhcCA9IF9hY3Rpb25zLmFycmF5U3dhcCxcbiAgICBhcnJheVVuc2hpZnQgPSBfYWN0aW9ucy5hcnJheVVuc2hpZnQsXG4gICAgYXV0b2ZpbGwgPSBfYWN0aW9ucy5hdXRvZmlsbCxcbiAgICBibHVyID0gX2FjdGlvbnMuYmx1cixcbiAgICBjaGFuZ2UgPSBfYWN0aW9ucy5jaGFuZ2UsXG4gICAgY2xlYXJTdWJtaXRFcnJvcnMgPSBfYWN0aW9ucy5jbGVhclN1Ym1pdEVycm9ycyxcbiAgICBkZXN0cm95ID0gX2FjdGlvbnMuZGVzdHJveSxcbiAgICBmb2N1cyA9IF9hY3Rpb25zLmZvY3VzLFxuICAgIGluaXRpYWxpemUgPSBfYWN0aW9ucy5pbml0aWFsaXplLFxuICAgIHJlZ2lzdGVyRmllbGQgPSBfYWN0aW9ucy5yZWdpc3RlckZpZWxkLFxuICAgIHJlc2V0ID0gX2FjdGlvbnMucmVzZXQsXG4gICAgc2V0U3VibWl0RmFpbGVkID0gX2FjdGlvbnMuc2V0U3VibWl0RmFpbGVkLFxuICAgIHNldFN1Ym1pdFN1Y2NlZWRlZCA9IF9hY3Rpb25zLnNldFN1Ym1pdFN1Y2NlZWRlZCxcbiAgICBzdGFydEFzeW5jVmFsaWRhdGlvbiA9IF9hY3Rpb25zLnN0YXJ0QXN5bmNWYWxpZGF0aW9uLFxuICAgIHN0YXJ0U3VibWl0ID0gX2FjdGlvbnMuc3RhcnRTdWJtaXQsXG4gICAgc3RvcEFzeW5jVmFsaWRhdGlvbiA9IF9hY3Rpb25zLnN0b3BBc3luY1ZhbGlkYXRpb24sXG4gICAgc3RvcFN1Ym1pdCA9IF9hY3Rpb25zLnN0b3BTdWJtaXQsXG4gICAgc3VibWl0ID0gX2FjdGlvbnMuc3VibWl0LFxuICAgIHRvdWNoID0gX2FjdGlvbnMudG91Y2gsXG4gICAgdW5yZWdpc3RlckZpZWxkID0gX2FjdGlvbnMudW5yZWdpc3RlckZpZWxkLFxuICAgIHVudG91Y2ggPSBfYWN0aW9ucy51bnRvdWNoO1xuZXhwb3J0cy5hcnJheUluc2VydCA9IGFycmF5SW5zZXJ0O1xuZXhwb3J0cy5hcnJheU1vdmUgPSBhcnJheU1vdmU7XG5leHBvcnRzLmFycmF5UG9wID0gYXJyYXlQb3A7XG5leHBvcnRzLmFycmF5UHVzaCA9IGFycmF5UHVzaDtcbmV4cG9ydHMuYXJyYXlSZW1vdmUgPSBhcnJheVJlbW92ZTtcbmV4cG9ydHMuYXJyYXlSZW1vdmVBbGwgPSBhcnJheVJlbW92ZUFsbDtcbmV4cG9ydHMuYXJyYXlTaGlmdCA9IGFycmF5U2hpZnQ7XG5leHBvcnRzLmFycmF5U3BsaWNlID0gYXJyYXlTcGxpY2U7XG5leHBvcnRzLmFycmF5U3dhcCA9IGFycmF5U3dhcDtcbmV4cG9ydHMuYXJyYXlVbnNoaWZ0ID0gYXJyYXlVbnNoaWZ0O1xuZXhwb3J0cy5hdXRvZmlsbCA9IGF1dG9maWxsO1xuZXhwb3J0cy5ibHVyID0gYmx1cjtcbmV4cG9ydHMuY2hhbmdlID0gY2hhbmdlO1xuZXhwb3J0cy5jbGVhclN1Ym1pdEVycm9ycyA9IGNsZWFyU3VibWl0RXJyb3JzO1xuZXhwb3J0cy5kZXN0cm95ID0gZGVzdHJveTtcbmV4cG9ydHMuZm9jdXMgPSBmb2N1cztcbmV4cG9ydHMuaW5pdGlhbGl6ZSA9IGluaXRpYWxpemU7XG5leHBvcnRzLnJlZ2lzdGVyRmllbGQgPSByZWdpc3RlckZpZWxkO1xuZXhwb3J0cy5yZXNldCA9IHJlc2V0O1xuZXhwb3J0cy5zZXRTdWJtaXRGYWlsZWQgPSBzZXRTdWJtaXRGYWlsZWQ7XG5leHBvcnRzLnNldFN1Ym1pdFN1Y2NlZWRlZCA9IHNldFN1Ym1pdFN1Y2NlZWRlZDtcbmV4cG9ydHMuc3RhcnRBc3luY1ZhbGlkYXRpb24gPSBzdGFydEFzeW5jVmFsaWRhdGlvbjtcbmV4cG9ydHMuc3RhcnRTdWJtaXQgPSBzdGFydFN1Ym1pdDtcbmV4cG9ydHMuc3RvcEFzeW5jVmFsaWRhdGlvbiA9IHN0b3BBc3luY1ZhbGlkYXRpb247XG5leHBvcnRzLnN0b3BTdWJtaXQgPSBzdG9wU3VibWl0O1xuZXhwb3J0cy5zdWJtaXQgPSBzdWJtaXQ7XG5leHBvcnRzLnRvdWNoID0gdG91Y2g7XG5leHBvcnRzLnVucmVnaXN0ZXJGaWVsZCA9IHVucmVnaXN0ZXJGaWVsZDtcbmV4cG9ydHMudW50b3VjaCA9IHVudG91Y2g7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4LWZvcm0vbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgyMTQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbGlzdENhY2hlQ2xlYXIgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVDbGVhcicpLFxuICAgIGxpc3RDYWNoZURlbGV0ZSA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZURlbGV0ZScpLFxuICAgIGxpc3RDYWNoZUdldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUdldCcpLFxuICAgIGxpc3RDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUhhcycpLFxuICAgIGxpc3RDYWNoZVNldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZVNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gbGlzdCBjYWNoZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIExpc3RDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gTGlzdENhY2hlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fTGlzdENhY2hlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZXEgPSByZXF1aXJlKCcuL2VxJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgaW5kZXggYXQgd2hpY2ggdGhlIGBrZXlgIGlzIGZvdW5kIGluIGBhcnJheWAgb2Yga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0ga2V5IFRoZSBrZXkgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGFzc29jSW5kZXhPZihhcnJheSwga2V5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIGlmIChlcShhcnJheVtsZW5ndGhdWzBdLCBrZXkpKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzb2NJbmRleE9mO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYXNzb2NJbmRleE9mLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19kZWZpbmVQcm9wZXJ0eScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBhc3NpZ25WYWx1ZWAgYW5kIGBhc3NpZ25NZXJnZVZhbHVlYCB3aXRob3V0XG4gKiB2YWx1ZSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGFzc2lnbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFzc2lnbi5cbiAqL1xuZnVuY3Rpb24gYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5ID09ICdfX3Byb3RvX18nICYmIGRlZmluZVByb3BlcnR5KSB7XG4gICAgZGVmaW5lUHJvcGVydHkob2JqZWN0LCBrZXksIHtcbiAgICAgICdjb25maWd1cmFibGUnOiB0cnVlLFxuICAgICAgJ2VudW1lcmFibGUnOiB0cnVlLFxuICAgICAgJ3ZhbHVlJzogdmFsdWUsXG4gICAgICAnd3JpdGFibGUnOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VBc3NpZ25WYWx1ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VBc3NpZ25WYWx1ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzS2V5YWJsZSA9IHJlcXVpcmUoJy4vX2lzS2V5YWJsZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIGRhdGEgZm9yIGBtYXBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSByZWZlcmVuY2Uga2V5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIG1hcCBkYXRhLlxuICovXG5mdW5jdGlvbiBnZXRNYXBEYXRhKG1hcCwga2V5KSB7XG4gIHZhciBkYXRhID0gbWFwLl9fZGF0YV9fO1xuICByZXR1cm4gaXNLZXlhYmxlKGtleSlcbiAgICA/IGRhdGFbdHlwZW9mIGtleSA9PSAnc3RyaW5nJyA/ICdzdHJpbmcnIDogJ2hhc2gnXVxuICAgIDogZGF0YS5tYXA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TWFwRGF0YTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldE1hcERhdGEuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIG5hdGl2ZUNyZWF0ZSA9IGdldE5hdGl2ZShPYmplY3QsICdjcmVhdGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVDcmVhdGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19uYXRpdmVDcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS4gQSB2YWx1ZSBpcyBjb25zaWRlcmVkIGFycmF5LWxpa2UgaWYgaXQnc1xuICogbm90IGEgZnVuY3Rpb24gYW5kIGhhcyBhIGB2YWx1ZS5sZW5ndGhgIHRoYXQncyBhbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiBvclxuICogZXF1YWwgdG8gYDBgIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYE51bWJlci5NQVhfU0FGRV9JTlRFR0VSYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgIWlzRnVuY3Rpb24odmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXlMaWtlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0FycmF5TGlrZS5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3ltYm9sO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc1N5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFycmF5TWFwID0gcmVxdWlyZSgnLi9fYXJyYXlNYXAnKSxcbiAgICBjb3B5QXJyYXkgPSByZXF1aXJlKCcuL19jb3B5QXJyYXknKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyksXG4gICAgc3RyaW5nVG9QYXRoID0gcmVxdWlyZSgnLi9fc3RyaW5nVG9QYXRoJyksXG4gICAgdG9LZXkgPSByZXF1aXJlKCcuL190b0tleScpLFxuICAgIHRvU3RyaW5nID0gcmVxdWlyZSgnLi90b1N0cmluZycpO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBwcm9wZXJ0eSBwYXRoIGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b1BhdGgoJ2EuYi5jJyk7XG4gKiAvLyA9PiBbJ2EnLCAnYicsICdjJ11cbiAqXG4gKiBfLnRvUGF0aCgnYVswXS5iLmMnKTtcbiAqIC8vID0+IFsnYScsICcwJywgJ2InLCAnYyddXG4gKi9cbmZ1bmN0aW9uIHRvUGF0aCh2YWx1ZSkge1xuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gYXJyYXlNYXAodmFsdWUsIHRvS2V5KTtcbiAgfVxuICByZXR1cm4gaXNTeW1ib2wodmFsdWUpID8gW3ZhbHVlXSA6IGNvcHlBcnJheShzdHJpbmdUb1BhdGgodG9TdHJpbmcodmFsdWUpKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9QYXRoO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC90b1BhdGguanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZm9ybWF0TmFtZTtcbmZ1bmN0aW9uIGZvcm1hdE5hbWUoY29udGV4dCwgbmFtZSkge1xuICB2YXIgc2VjdGlvblByZWZpeCA9IGNvbnRleHQuX3JlZHV4Rm9ybS5zZWN0aW9uUHJlZml4O1xuXG4gIHJldHVybiAhc2VjdGlvblByZWZpeCA/IG5hbWUgOiBzZWN0aW9uUHJlZml4ICsgXCIuXCIgKyBuYW1lO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC1mb3JtL2xpYi91dGlsL3ByZWZpeE5hbWUuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9pbnZhcmlhbnQvaW52YXJpYW50LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgUmVkdWNlciB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHsgYnJvd3Nlckhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XG5pbXBvcnQgXCJpc29tb3JwaGljLWZldGNoXCI7XG5pbXBvcnQgQXBpQ2FsbHMgZnJvbSBcIi4uL2hlbHBlcnMvYXBpQ2FsbHNcIjtcbmltcG9ydCB7IEFwcFRodW5rQWN0aW9uIH0gZnJvbSBcIi4vXCI7XG5pbXBvcnQgeyBVc2VyU3RhdGUgfSBmcm9tIFwiLi9Vc2VyXCI7XG5cbi8vIGFwcGxpY2F0aW9uIHN0YXRlXG5leHBvcnQgaW50ZXJmYWNlIEFwcFN0YXRlIHtcbiAgICBsb2dnZWRJbjogYm9vbGVhbixcbiAgICB1c2VyOiBVc2VyU3RhdGVcbn1cblxuLy8gYWN0aW9uc1xuaW50ZXJmYWNlIExvZ2luQWN0aW9uIHtcbiAgICB0eXBlOiBcIkxPR0lOXCIsXG4gICAgdXNlcjogVXNlclN0YXRlXG59XG5cbmludGVyZmFjZSBMb2dvdXRBY3Rpb24ge1xuICAgIHR5cGU6IFwiTE9HT1VUXCJcbn1cblxudHlwZSBLbm93bkFjdGlvbiA9IExvZ2luQWN0aW9uIHwgTG9nb3V0QWN0aW9uO1xuXG4vLyBhY3Rpb24gY3JlYXRvcnNcbmV4cG9ydCBjb25zdCBhY3Rpb25DcmVhdG9ycyA9IHtcbiAgICByZWRpcmVjdFRvSG9tZTogKCkgPT4ge1xuICAgICAgICBicm93c2VySGlzdG9yeS5wdXNoKFwiL1wiKTtcbiAgICB9LFxuICAgIGxvZ291dDogKCk6IEFwcFRodW5rQWN0aW9uPEtub3duQWN0aW9uPiA9PiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgICAgIEFwaUNhbGxzLnJlcXVlc3QoXCJhY2NvdW50L2xvZ291dFwiLCBcInBvc3RcIilcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIkxPR09VVFwifSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIGxvZ2dlZEluOiBmYWxzZSwgdXNlcjogbnVsbFxufTtcblxuLy8gcmVkdWNlclxuZXhwb3J0IGNvbnN0IHJlZHVjZXI6IFJlZHVjZXI8QXBwU3RhdGU+ID0gKHN0YXRlOiBBcHBTdGF0ZSwgYWN0aW9uOiBLbm93bkFjdGlvbikgPT4ge1xuICAgIHZhciBuZXdTdGF0ZSA9IHsuLi5zdGF0ZX1cbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xuICAgICAgICBjYXNlIFwiTE9HSU5cIjpcbiAgICAgICAgICAgIG5ld1N0YXRlLmxvZ2dlZEluID0gdHJ1ZTtcbiAgICAgICAgICAgIG5ld1N0YXRlLnVzZXIgPSBhY3Rpb24udXNlcjtcbiAgICAgICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICAgICAgY2FzZSBcIkxPR09VVFwiOlxuICAgICAgICAgICAgbmV3U3RhdGUubG9nZ2VkSW4gPSBmYWxzZTtcbiAgICAgICAgICAgIG5ld1N0YXRlLnVzZXIgPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgIGNvbnN0IGV4aGF1c3RpdmVDaGVjazogbmV2ZXIgPSBhY3Rpb247XG4gICAgfVxuICAgIC8vIEZvciB1bnJlY29nbml6ZWQgYWN0aW9ucyAob3IgaW4gY2FzZXMgd2hlcmUgYWN0aW9ucyBoYXZlIG5vIGVmZmVjdCksIG11c3QgcmV0dXJuIHRoZSBleGlzdGluZyBzdGF0ZVxuICAgIC8vICAob3IgZGVmYXVsdCBpbml0aWFsIHN0YXRlIGlmIG5vbmUgd2FzIHN1cHBsaWVkKVxuICAgIHJldHVybiBzdGF0ZSB8fCBpbml0aWFsU3RhdGU7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL3N0b3JlL0FwcC50cyIsIm1vZHVsZS5leHBvcnRzID0gaXNQcm9taXNlO1xuXG5mdW5jdGlvbiBpc1Byb21pc2Uob2JqKSB7XG4gIHJldHVybiAhIW9iaiAmJiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJykgJiYgdHlwZW9mIG9iai50aGVuID09PSAnZnVuY3Rpb24nO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2lzLXByb21pc2UvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19NYXAuanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBtYXBDYWNoZUNsZWFyID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVDbGVhcicpLFxuICAgIG1hcENhY2hlRGVsZXRlID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVEZWxldGUnKSxcbiAgICBtYXBDYWNoZUdldCA9IHJlcXVpcmUoJy4vX21hcENhY2hlR2V0JyksXG4gICAgbWFwQ2FjaGVIYXMgPSByZXF1aXJlKCcuL19tYXBDYWNoZUhhcycpLFxuICAgIG1hcENhY2hlU2V0ID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWFwIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIE1hcENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYE1hcENhY2hlYC5cbk1hcENhY2hlLnByb3RvdHlwZS5jbGVhciA9IG1hcENhY2hlQ2xlYXI7XG5NYXBDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbWFwQ2FjaGVEZWxldGU7XG5NYXBDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbWFwQ2FjaGVHZXQ7XG5NYXBDYWNoZS5wcm90b3R5cGUuaGFzID0gbWFwQ2FjaGVIYXM7XG5NYXBDYWNoZS5wcm90b3R5cGUuc2V0ID0gbWFwQ2FjaGVTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwQ2FjaGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19NYXBDYWNoZS5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIHN0YWNrQ2xlYXIgPSByZXF1aXJlKCcuL19zdGFja0NsZWFyJyksXG4gICAgc3RhY2tEZWxldGUgPSByZXF1aXJlKCcuL19zdGFja0RlbGV0ZScpLFxuICAgIHN0YWNrR2V0ID0gcmVxdWlyZSgnLi9fc3RhY2tHZXQnKSxcbiAgICBzdGFja0hhcyA9IHJlcXVpcmUoJy4vX3N0YWNrSGFzJyksXG4gICAgc3RhY2tTZXQgPSByZXF1aXJlKCcuL19zdGFja1NldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzdGFjayBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTdGFjayhlbnRyaWVzKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGUoZW50cmllcyk7XG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYFN0YWNrYC5cblN0YWNrLnByb3RvdHlwZS5jbGVhciA9IHN0YWNrQ2xlYXI7XG5TdGFjay5wcm90b3R5cGVbJ2RlbGV0ZSddID0gc3RhY2tEZWxldGU7XG5TdGFjay5wcm90b3R5cGUuZ2V0ID0gc3RhY2tHZXQ7XG5TdGFjay5wcm90b3R5cGUuaGFzID0gc3RhY2tIYXM7XG5TdGFjay5wcm90b3R5cGUuc2V0ID0gc3RhY2tTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gU3RhY2s7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19TdGFjay5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VJc0VxdWFsRGVlcCA9IHJlcXVpcmUoJy4vX2Jhc2VJc0VxdWFsRGVlcCcpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNFcXVhbGAgd2hpY2ggc3VwcG9ydHMgcGFydGlhbCBjb21wYXJpc29uc1xuICogYW5kIHRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuXG4gKiAgMSAtIFVub3JkZXJlZCBjb21wYXJpc29uXG4gKiAgMiAtIFBhcnRpYWwgY29tcGFyaXNvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIGB2YWx1ZWAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0VxdWFsKHZhbHVlLCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spIHtcbiAgaWYgKHZhbHVlID09PSBvdGhlcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmICh2YWx1ZSA9PSBudWxsIHx8IG90aGVyID09IG51bGwgfHwgKCFpc09iamVjdExpa2UodmFsdWUpICYmICFpc09iamVjdExpa2Uob3RoZXIpKSkge1xuICAgIHJldHVybiB2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyO1xuICB9XG4gIHJldHVybiBiYXNlSXNFcXVhbERlZXAodmFsdWUsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBiYXNlSXNFcXVhbCwgc3RhY2spO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0VxdWFsO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUlzRXF1YWwuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXig/OjB8WzEtOV1cXGQqKSQvO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD1NQVhfU0FGRV9JTlRFR0VSXSBUaGUgdXBwZXIgYm91bmRzIG9mIGEgdmFsaWQgaW5kZXguXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW5kZXgodmFsdWUsIGxlbmd0aCkge1xuICBsZW5ndGggPSBsZW5ndGggPT0gbnVsbCA/IE1BWF9TQUZFX0lOVEVHRVIgOiBsZW5ndGg7XG4gIHJldHVybiAhIWxlbmd0aCAmJlxuICAgICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgfHwgcmVJc1VpbnQudGVzdCh2YWx1ZSkpICYmXG4gICAgKHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPCBsZW5ndGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzSW5kZXg7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19pc0luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCB0byBtYXRjaCBwcm9wZXJ0eSBuYW1lcyB3aXRoaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgcmVJc0RlZXBQcm9wID0gL1xcLnxcXFsoPzpbXltcXF1dKnwoW1wiJ10pKD86KD8hXFwxKVteXFxcXF18XFxcXC4pKj9cXDEpXFxdLyxcbiAgICByZUlzUGxhaW5Qcm9wID0gL15cXHcqJC87XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBwcm9wZXJ0eSBuYW1lIGFuZCBub3QgYSBwcm9wZXJ0eSBwYXRoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5IGtleXMgb24uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3BlcnR5IG5hbWUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXkodmFsdWUsIG9iamVjdCkge1xuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIGlmICh0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicgfHxcbiAgICAgIHZhbHVlID09IG51bGwgfHwgaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIHJlSXNQbGFpblByb3AudGVzdCh2YWx1ZSkgfHwgIXJlSXNEZWVwUHJvcC50ZXN0KHZhbHVlKSB8fFxuICAgIChvYmplY3QgIT0gbnVsbCAmJiB2YWx1ZSBpbiBPYmplY3Qob2JqZWN0KSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNLZXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19pc0tleS5qc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYSBwcm90b3R5cGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvdG90eXBlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzUHJvdG90eXBlKHZhbHVlKSB7XG4gIHZhciBDdG9yID0gdmFsdWUgJiYgdmFsdWUuY29uc3RydWN0b3IsXG4gICAgICBwcm90byA9ICh0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IucHJvdG90eXBlKSB8fCBvYmplY3RQcm90bztcblxuICByZXR1cm4gdmFsdWUgPT09IHByb3RvO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzUHJvdG90eXBlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faXNQcm90b3R5cGUuanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyB0aGUgZmlyc3QgYXJndW1lbnQgaXQgcmVjZWl2ZXMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgQW55IHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgYHZhbHVlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKlxuICogY29uc29sZS5sb2coXy5pZGVudGl0eShvYmplY3QpID09PSBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpZGVudGl0eSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaWRlbnRpdHk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lkZW50aXR5LmpzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9fYmFzZUlzQXJndW1lbnRzJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJndW1lbnRzID0gYmFzZUlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID8gYmFzZUlzQXJndW1lbnRzIDogZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmXG4gICAgIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsICdjYWxsZWUnKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcmd1bWVudHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzQXJndW1lbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKSxcbiAgICBzdHViRmFsc2UgPSByZXF1aXJlKCcuL3N0dWJGYWxzZScpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUlzQnVmZmVyID0gQnVmZmVyID8gQnVmZmVyLmlzQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IEJ1ZmZlcigyKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgVWludDhBcnJheSgyKSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNCdWZmZXIgPSBuYXRpdmVJc0J1ZmZlciB8fCBzdHViRmFsc2U7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNCdWZmZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzQnVmZmVyLmpzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFzeW5jVGFnID0gJ1tvYmplY3QgQXN5bmNGdW5jdGlvbl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgcHJveHlUYWcgPSAnW29iamVjdCBQcm94eV0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXlzIGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBiYXNlR2V0VGFnKHZhbHVlKTtcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWcgfHwgdGFnID09IGFzeW5jVGFnIHx8IHRhZyA9PSBwcm94eVRhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0Z1bmN0aW9uO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0Z1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNMZW5ndGg7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzTGVuZ3RoLmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vX2Jhc2VJc1R5cGVkQXJyYXknKSxcbiAgICBiYXNlVW5hcnkgPSByZXF1aXJlKCcuL19iYXNlVW5hcnknKSxcbiAgICBub2RlVXRpbCA9IHJlcXVpcmUoJy4vX25vZGVVdGlsJyk7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzVHlwZWRBcnJheSA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzVHlwZWRBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgdHlwZWQgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShuZXcgVWludDhBcnJheSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkoW10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzVHlwZWRBcnJheSA9IG5vZGVJc1R5cGVkQXJyYXkgPyBiYXNlVW5hcnkobm9kZUlzVHlwZWRBcnJheSkgOiBiYXNlSXNUeXBlZEFycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzVHlwZWRBcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNUeXBlZEFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXJyYXlMaWtlS2V5cyA9IHJlcXVpcmUoJy4vX2FycmF5TGlrZUtleXMnKSxcbiAgICBiYXNlS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VLZXlzJyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuIFNlZSB0aGVcbiAqIFtFUyBzcGVjXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICpcbiAqIF8ua2V5cygnaGknKTtcbiAqIC8vID0+IFsnMCcsICcxJ11cbiAqL1xuZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCkgOiBiYXNlS2V5cyhvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2tleXMuanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBwcmVmaXggPSBleHBvcnRzLnByZWZpeCA9ICdAQHJlZHV4LWZvcm0vJztcblxudmFyIEFSUkFZX0lOU0VSVCA9IGV4cG9ydHMuQVJSQVlfSU5TRVJUID0gcHJlZml4ICsgJ0FSUkFZX0lOU0VSVCc7XG52YXIgQVJSQVlfTU9WRSA9IGV4cG9ydHMuQVJSQVlfTU9WRSA9IHByZWZpeCArICdBUlJBWV9NT1ZFJztcbnZhciBBUlJBWV9QT1AgPSBleHBvcnRzLkFSUkFZX1BPUCA9IHByZWZpeCArICdBUlJBWV9QT1AnO1xudmFyIEFSUkFZX1BVU0ggPSBleHBvcnRzLkFSUkFZX1BVU0ggPSBwcmVmaXggKyAnQVJSQVlfUFVTSCc7XG52YXIgQVJSQVlfUkVNT1ZFID0gZXhwb3J0cy5BUlJBWV9SRU1PVkUgPSBwcmVmaXggKyAnQVJSQVlfUkVNT1ZFJztcbnZhciBBUlJBWV9SRU1PVkVfQUxMID0gZXhwb3J0cy5BUlJBWV9SRU1PVkVfQUxMID0gcHJlZml4ICsgJ0FSUkFZX1JFTU9WRV9BTEwnO1xudmFyIEFSUkFZX1NISUZUID0gZXhwb3J0cy5BUlJBWV9TSElGVCA9IHByZWZpeCArICdBUlJBWV9TSElGVCc7XG52YXIgQVJSQVlfU1BMSUNFID0gZXhwb3J0cy5BUlJBWV9TUExJQ0UgPSBwcmVmaXggKyAnQVJSQVlfU1BMSUNFJztcbnZhciBBUlJBWV9VTlNISUZUID0gZXhwb3J0cy5BUlJBWV9VTlNISUZUID0gcHJlZml4ICsgJ0FSUkFZX1VOU0hJRlQnO1xudmFyIEFSUkFZX1NXQVAgPSBleHBvcnRzLkFSUkFZX1NXQVAgPSBwcmVmaXggKyAnQVJSQVlfU1dBUCc7XG52YXIgQVVUT0ZJTEwgPSBleHBvcnRzLkFVVE9GSUxMID0gcHJlZml4ICsgJ0FVVE9GSUxMJztcbnZhciBCTFVSID0gZXhwb3J0cy5CTFVSID0gcHJlZml4ICsgJ0JMVVInO1xudmFyIENIQU5HRSA9IGV4cG9ydHMuQ0hBTkdFID0gcHJlZml4ICsgJ0NIQU5HRSc7XG52YXIgQ0xFQVJfU1VCTUlUID0gZXhwb3J0cy5DTEVBUl9TVUJNSVQgPSBwcmVmaXggKyAnQ0xFQVJfU1VCTUlUJztcbnZhciBDTEVBUl9TVUJNSVRfRVJST1JTID0gZXhwb3J0cy5DTEVBUl9TVUJNSVRfRVJST1JTID0gcHJlZml4ICsgJ0NMRUFSX1NVQk1JVF9FUlJPUlMnO1xudmFyIENMRUFSX0FTWU5DX0VSUk9SID0gZXhwb3J0cy5DTEVBUl9BU1lOQ19FUlJPUiA9IHByZWZpeCArICdDTEVBUl9BU1lOQ19FUlJPUic7XG52YXIgREVTVFJPWSA9IGV4cG9ydHMuREVTVFJPWSA9IHByZWZpeCArICdERVNUUk9ZJztcbnZhciBGT0NVUyA9IGV4cG9ydHMuRk9DVVMgPSBwcmVmaXggKyAnRk9DVVMnO1xudmFyIElOSVRJQUxJWkUgPSBleHBvcnRzLklOSVRJQUxJWkUgPSBwcmVmaXggKyAnSU5JVElBTElaRSc7XG52YXIgUkVHSVNURVJfRklFTEQgPSBleHBvcnRzLlJFR0lTVEVSX0ZJRUxEID0gcHJlZml4ICsgJ1JFR0lTVEVSX0ZJRUxEJztcbnZhciBSRVNFVCA9IGV4cG9ydHMuUkVTRVQgPSBwcmVmaXggKyAnUkVTRVQnO1xudmFyIFNFVF9TVUJNSVRfRkFJTEVEID0gZXhwb3J0cy5TRVRfU1VCTUlUX0ZBSUxFRCA9IHByZWZpeCArICdTRVRfU1VCTUlUX0ZBSUxFRCc7XG52YXIgU0VUX1NVQk1JVF9TVUNDRUVERUQgPSBleHBvcnRzLlNFVF9TVUJNSVRfU1VDQ0VFREVEID0gcHJlZml4ICsgJ1NFVF9TVUJNSVRfU1VDQ0VFREVEJztcbnZhciBTVEFSVF9BU1lOQ19WQUxJREFUSU9OID0gZXhwb3J0cy5TVEFSVF9BU1lOQ19WQUxJREFUSU9OID0gcHJlZml4ICsgJ1NUQVJUX0FTWU5DX1ZBTElEQVRJT04nO1xudmFyIFNUQVJUX1NVQk1JVCA9IGV4cG9ydHMuU1RBUlRfU1VCTUlUID0gcHJlZml4ICsgJ1NUQVJUX1NVQk1JVCc7XG52YXIgU1RPUF9BU1lOQ19WQUxJREFUSU9OID0gZXhwb3J0cy5TVE9QX0FTWU5DX1ZBTElEQVRJT04gPSBwcmVmaXggKyAnU1RPUF9BU1lOQ19WQUxJREFUSU9OJztcbnZhciBTVE9QX1NVQk1JVCA9IGV4cG9ydHMuU1RPUF9TVUJNSVQgPSBwcmVmaXggKyAnU1RPUF9TVUJNSVQnO1xudmFyIFNVQk1JVCA9IGV4cG9ydHMuU1VCTUlUID0gcHJlZml4ICsgJ1NVQk1JVCc7XG52YXIgVE9VQ0ggPSBleHBvcnRzLlRPVUNIID0gcHJlZml4ICsgJ1RPVUNIJztcbnZhciBVTlJFR0lTVEVSX0ZJRUxEID0gZXhwb3J0cy5VTlJFR0lTVEVSX0ZJRUxEID0gcHJlZml4ICsgJ1VOUkVHSVNURVJfRklFTEQnO1xudmFyIFVOVE9VQ0ggPSBleHBvcnRzLlVOVE9VQ0ggPSBwcmVmaXggKyAnVU5UT1VDSCc7XG52YXIgVVBEQVRFX1NZTkNfRVJST1JTID0gZXhwb3J0cy5VUERBVEVfU1lOQ19FUlJPUlMgPSBwcmVmaXggKyAnVVBEQVRFX1NZTkNfRVJST1JTJztcbnZhciBVUERBVEVfU1lOQ19XQVJOSU5HUyA9IGV4cG9ydHMuVVBEQVRFX1NZTkNfV0FSTklOR1MgPSBwcmVmaXggKyAnVVBEQVRFX1NZTkNfV0FSTklOR1MnO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC1mb3JtL2xpYi9hY3Rpb25UeXBlcy5qc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2hhc0Vycm9yID0gcmVxdWlyZSgnLi4vaGFzRXJyb3InKTtcblxudmFyIF9oYXNFcnJvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oYXNFcnJvcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBjcmVhdGVJc1ZhbGlkID0gZnVuY3Rpb24gY3JlYXRlSXNWYWxpZChzdHJ1Y3R1cmUpIHtcbiAgdmFyIGdldEluID0gc3RydWN0dXJlLmdldEluLFxuICAgICAga2V5cyA9IHN0cnVjdHVyZS5rZXlzO1xuXG4gIHZhciBoYXNFcnJvciA9ICgwLCBfaGFzRXJyb3IyLmRlZmF1bHQpKHN0cnVjdHVyZSk7XG4gIHJldHVybiBmdW5jdGlvbiAoZm9ybSkge1xuICAgIHZhciBnZXRGb3JtU3RhdGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgcmV0dXJuIGdldEluKHN0YXRlLCAnZm9ybScpO1xuICAgIH07XG4gICAgdmFyIGlnbm9yZVN1Ym1pdEVycm9ycyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogZmFsc2U7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgdmFyIGZvcm1TdGF0ZSA9IGdldEZvcm1TdGF0ZShzdGF0ZSk7XG4gICAgICB2YXIgc3luY0Vycm9yID0gZ2V0SW4oZm9ybVN0YXRlLCBmb3JtICsgJy5zeW5jRXJyb3InKTtcbiAgICAgIGlmIChzeW5jRXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKCFpZ25vcmVTdWJtaXRFcnJvcnMpIHtcbiAgICAgICAgdmFyIGVycm9yID0gZ2V0SW4oZm9ybVN0YXRlLCBmb3JtICsgJy5lcnJvcicpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciBzeW5jRXJyb3JzID0gZ2V0SW4oZm9ybVN0YXRlLCBmb3JtICsgJy5zeW5jRXJyb3JzJyk7XG4gICAgICB2YXIgYXN5bmNFcnJvcnMgPSBnZXRJbihmb3JtU3RhdGUsIGZvcm0gKyAnLmFzeW5jRXJyb3JzJyk7XG4gICAgICB2YXIgc3VibWl0RXJyb3JzID0gaWdub3JlU3VibWl0RXJyb3JzID8gdW5kZWZpbmVkIDogZ2V0SW4oZm9ybVN0YXRlLCBmb3JtICsgJy5zdWJtaXRFcnJvcnMnKTtcbiAgICAgIGlmICghc3luY0Vycm9ycyAmJiAhYXN5bmNFcnJvcnMgJiYgIXN1Ym1pdEVycm9ycykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlZ2lzdGVyZWRGaWVsZHMgPSBnZXRJbihmb3JtU3RhdGUsIGZvcm0gKyAnLnJlZ2lzdGVyZWRGaWVsZHMnKTtcbiAgICAgIGlmICghcmVnaXN0ZXJlZEZpZWxkcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICFrZXlzKHJlZ2lzdGVyZWRGaWVsZHMpLmZpbHRlcihmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICByZXR1cm4gZ2V0SW4ocmVnaXN0ZXJlZEZpZWxkcywgJ1tcXCcnICsgbmFtZSArICdcXCddLmNvdW50JykgPiAwO1xuICAgICAgfSkuc29tZShmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICByZXR1cm4gaGFzRXJyb3IoZ2V0SW4ocmVnaXN0ZXJlZEZpZWxkcywgJ1tcXCcnICsgbmFtZSArICdcXCddJyksIHN5bmNFcnJvcnMsIGFzeW5jRXJyb3JzLCBzdWJtaXRFcnJvcnMpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZUlzVmFsaWQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4LWZvcm0vbGliL3NlbGVjdG9ycy9pc1ZhbGlkLmpzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgzNDYpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2J1aWxkaW4vbW9kdWxlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoNzkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWR1eC9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXBpQ2FsbHMgZnJvbSAnLi4vaGVscGVycy9hcGlDYWxscyc7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9JbnB1dCc7XG5pbXBvcnQgeyBTdWJtaXNzaW9uRXJyb3IgfSBmcm9tICdyZWR1eC1mb3JtJztcblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIHVuZGVmaW5lZD57XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5vblN1Ym1pdCA9IHRoaXMub25TdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zdWJtaXRGb3JtID0gdGhpcy5zdWJtaXRGb3JtLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25TdWJtaXRGYWlsID0gdGhpcy5vblN1Ym1pdEZhaWwuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCl7XG4gICAgICAgIGNvbnN0IHsgaGFuZGxlU3VibWl0IH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KHRoaXMub25TdWJtaXQpfT5cbiAgICAgICAgICAgIHt0aGlzLnJlbmRlckdsb2JhbEVycm9ycygpfVxuICAgICAgICAgICAge3RoaXMucmVuZGVyRm9ybUNvbnRlbnQoKX1cbiAgICAgICAgPC9mb3JtPik7XG4gICAgfVxuXG4gICAgLy8gdGhpcyBtZXRob2QgbXVzdCBiZSBpbXBsZW1lbnRlZCBiZWNhdXNlIGl0IGNvbnRhaW5zIHRoZSBmb3JtJ3MgZmllbGRzXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IHJlbmRlckZvcm1Db250ZW50KCk7XG5cbiAgICBwcm90ZWN0ZWQgQ3JlYXRlSW5wdXQobmFtZSwgdHlwZSwgbGFiZWwsIGRpc2FibGVkID0gZmFsc2Upe1xuICAgICAgICByZXR1cm4gPElucHV0IG5hbWU9e25hbWV9IHR5cGU9e3R5cGV9IGxhYmVsPXtsYWJlbH0gZGlzYWJsZWQ9e2Rpc2FibGVkfS8+XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIENyZWF0ZVN1Ym1pdEJ1dHRvbihsYWJlbCl7XG4gICAgICAgIHJldHVybiA8SW5wdXQgdHlwZT1cInN1Ym1pdFwiIGxhYmVsPXtsYWJlbH0gZGlzYWJsZWQ9e3RoaXMucHJvcHMuc3VibWl0dGluZ30vPlxuICAgIH1cblxuICAgIC8vIHRoaXMgbWV0aG9kIG11c3QgYmUgaW1wbGVtZW50ZWQgYW5kIGNhbGwgc3VibWl0Rm9ybSB3aXRoIHRoZSBjb3JyZWN0IGNvbnRyb2xsZXIgYWRkcmVzc1xuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBvblN1Ym1pdCh2YWx1ZXMpO1xuXG4gICAgLy8gc3VibWl0cyB0aGUgZm9ybSB0byB0aGUgc3BlY2lmaWVkIGNvbnRyb2xsZXIgYWRkcmVzc1xuICAgIHByb3RlY3RlZCBhc3luYyBzdWJtaXRGb3JtKGFkZHJlc3MsIHZhbHVlcyl7XG4gICAgICAgIHZhciByZXN1bHQgPSBhd2FpdCBBcGlDYWxscy5yZXF1ZXN0KGFkZHJlc3MsIFwicG9zdFwiLCB2YWx1ZXMpO1xuICAgICAgICBpZiAocmVzdWx0LnZhbGlkYXRpb25FcnJvcnMpXG4gICAgICAgICAgICAgICAgdGhpcy5vblN1Ym1pdEZhaWwocmVzdWx0KTtcbiAgICAgICAgZWxzZSBcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLy8gaWYgc3VibWlzc2lvbiBmYWlscywgY3JlYXRlcyBzdWJtaXNzaW9uIGVycm9ycyB3aXRoIGluZm9ybWF0aW9uIHJldHJpZXZlZCBmcm9tIGNvbnRyb2xsZXJcbiAgICBwcm90ZWN0ZWQgb25TdWJtaXRGYWlsKGVycm9ycyl7XG4gICAgICAgIHZhciBlcnJvciA9IHsgX2Vycm9yOiBlcnJvcnMudmFsaWRhdGlvbkVycm9yc1tcIlwiXX07XG4gICAgICAgIHRocm93IG5ldyBTdWJtaXNzaW9uRXJyb3IoZXJyb3IpO1xuICAgIH1cblxuICAgIC8vIHJlbmRlcnMgc3VibWlzc2lvbiBlcnJvcnMgcmV0cmlldmVkIGZyb20gY29udHJvbGxlclxuICAgIHByaXZhdGUgcmVuZGVyR2xvYmFsRXJyb3JzKCl7XG4gICAgICAgIHZhciBlcnJvcnMgPSB0aGlzLnByb3BzLmVycm9yO1xuICAgICAgICBpZiAoZXJyb3JzKVxuICAgICAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPlxuICAgICAgICAgICAgICAgIHtlcnJvcnMubWFwKChlcnJvciwgaW5kZXgpID0+IDxwIGtleT17aW5kZXh9PntlcnJvcn08L3A+KX1cbiAgICAgICAgICAgIDwvZGl2Pik7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvRm9ybS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUgfSAgZnJvbSAnLi4vc3RvcmUnO1xyXG5pbXBvcnQgKiBhcyBBcHBTdG9yZSBmcm9tICcuLi9zdG9yZS9BcHAnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tICcuLi9jb21wb25lbnRzL0FwcCc7XHJcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dpbkZvcm0nO1xyXG5cclxuY2xhc3MgTG9naW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8QXBwUHJvcHMsIHVuZGVmaW5lZD4ge1xyXG4gICAgXHJcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKXtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCl7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubG9nZ2VkSW4pXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlckxvZ291dCgpO1xyXG4gICAgICAgIGVsc2UgXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlckxvZ2luKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlckxvZ2luKCl7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoND5GYcOnYSBzZXUgbG9naW48L2g0PlxyXG4gICAgICAgICAgICAgICAgPExvZ2luRm9ybSAvPlxyXG4gICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICA8cD5QYXJhIHNlIGNhZGFzdHJhciwgY2xpcXVlIDxMaW5rIHRvPVwiL3JlZ2lzdGVyXCI+YXF1aTwvTGluaz48L3A+ICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXJMb2dvdXQoKXtcclxuICAgICAgICByZXR1cm4gKDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0PkNsaXF1ZSBhcXVpIHBhcmEgc2FpcjogPC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMubG9nb3V0fT5TYWlyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgKHN0YXRlOiBBcHBsaWNhdGlvblN0YXRlKSA9PiBzdGF0ZS5hcHAsXHJcbiAgICBBcHBTdG9yZS5hY3Rpb25DcmVhdG9yc1xyXG4pKExvZ2luKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbnRhaW5lcnMvTG9naW4udHN4IiwiaW1wb3J0ICdpc29tb3JwaGljLWZldGNoJztcblxuY29uc3QgcmVxdWVzdEhlYWRlciA9IHtcbiAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonLFxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG59O1xuXG5jb25zdCByZXF1ZXN0Q3JlZGVudGlhbHMgPSBcInNhbWUtb3JpZ2luXCI7XG5cbmludGVyZmFjZSBEZWZhdWx0UmVxdWVzdCB7XG4gICAgbWV0aG9kOiBzdHJpbmcsXG4gICAgaGVhZGVyczoge30sXG4gICAgY3JlZGVudGlhbHM6IHN0cmluZ1xuICAgIGJvZHk/OiB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcGlDYWxscyB7XG5cbiAgICAvL1RPRE86IGltcGxlbWVudCBvdGhlciBodHRwIGNvbW1hbmRzXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyByZXF1ZXN0KGFkZHJlc3MsIG1ldGhvZCwgcmVxdWVzdEJvZHkgPSBudWxsKXtcbiAgICAgICAgdmFyIGxvd2VyID0gbWV0aG9kLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHZhciByZXF1ZXN0SW5pdDtcbiAgICAgICAgc3dpdGNoKGxvd2VyKXtcbiAgICAgICAgICAgIGNhc2UgJ3Bvc3QnOlxuICAgICAgICAgICAgICAgIHJlcXVlc3RJbml0ID0gdGhpcy5jcmVhdGVSZXF1ZXN0KHJlcXVlc3RCb2R5LCAncG9zdCcpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZ2V0JzpcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmVxdWVzdEluaXQgPSB0aGlzLmNyZWF0ZVJlcXVlc3QocmVxdWVzdEJvZHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGF3YWl0IGZldGNoKGFkZHJlc3MsIHJlcXVlc3RJbml0KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgY3JlYXRlUmVxdWVzdChib2R5LCByZXF1ZXN0TWV0aG9kID0gJ2dldCcpOiBEZWZhdWx0UmVxdWVzdCB7XG4gICAgICAgIGxldCByZXE6IERlZmF1bHRSZXF1ZXN0ID17XG4gICAgICAgICAgICBtZXRob2Q6IHJlcXVlc3RNZXRob2QsXG4gICAgICAgICAgICBoZWFkZXJzOiByZXF1ZXN0SGVhZGVyLFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6IHJlcXVlc3RDcmVkZW50aWFsc1xuICAgICAgICB9O1xuICAgICAgICBpZiAoYm9keSAhPSBudWxsKVxuICAgICAgICAgICAgcmVxLmJvZHkgPSBKU09OLnN0cmluZ2lmeShib2R5KTtcblxuICAgICAgICByZXR1cm4gcmVxO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvaGVscGVycy9hcGlDYWxscy50c3giLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgVWludDhBcnJheSA9IHJvb3QuVWludDhBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBVaW50OEFycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fVWludDhBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VUaW1lcyA9IHJlcXVpcmUoJy4vX2Jhc2VUaW1lcycpLFxuICAgIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJy4vaXNCdWZmZXInKSxcbiAgICBpc0luZGV4ID0gcmVxdWlyZSgnLi9faXNJbmRleCcpLFxuICAgIGlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vaXNUeXBlZEFycmF5Jyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiB0aGUgYXJyYXktbGlrZSBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5oZXJpdGVkIFNwZWNpZnkgcmV0dXJuaW5nIGluaGVyaXRlZCBwcm9wZXJ0eSBuYW1lcy5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TGlrZUtleXModmFsdWUsIGluaGVyaXRlZCkge1xuICB2YXIgaXNBcnIgPSBpc0FycmF5KHZhbHVlKSxcbiAgICAgIGlzQXJnID0gIWlzQXJyICYmIGlzQXJndW1lbnRzKHZhbHVlKSxcbiAgICAgIGlzQnVmZiA9ICFpc0FyciAmJiAhaXNBcmcgJiYgaXNCdWZmZXIodmFsdWUpLFxuICAgICAgaXNUeXBlID0gIWlzQXJyICYmICFpc0FyZyAmJiAhaXNCdWZmICYmIGlzVHlwZWRBcnJheSh2YWx1ZSksXG4gICAgICBza2lwSW5kZXhlcyA9IGlzQXJyIHx8IGlzQXJnIHx8IGlzQnVmZiB8fCBpc1R5cGUsXG4gICAgICByZXN1bHQgPSBza2lwSW5kZXhlcyA/IGJhc2VUaW1lcyh2YWx1ZS5sZW5ndGgsIFN0cmluZykgOiBbXSxcbiAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG5cbiAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgaWYgKChpbmhlcml0ZWQgfHwgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwga2V5KSkgJiZcbiAgICAgICAgIShza2lwSW5kZXhlcyAmJiAoXG4gICAgICAgICAgIC8vIFNhZmFyaSA5IGhhcyBlbnVtZXJhYmxlIGBhcmd1bWVudHMubGVuZ3RoYCBpbiBzdHJpY3QgbW9kZS5cbiAgICAgICAgICAga2V5ID09ICdsZW5ndGgnIHx8XG4gICAgICAgICAgIC8vIE5vZGUuanMgMC4xMCBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiBidWZmZXJzLlxuICAgICAgICAgICAoaXNCdWZmICYmIChrZXkgPT0gJ29mZnNldCcgfHwga2V5ID09ICdwYXJlbnQnKSkgfHxcbiAgICAgICAgICAgLy8gUGhhbnRvbUpTIDIgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gdHlwZWQgYXJyYXlzLlxuICAgICAgICAgICAoaXNUeXBlICYmIChrZXkgPT0gJ2J1ZmZlcicgfHwga2V5ID09ICdieXRlTGVuZ3RoJyB8fCBrZXkgPT0gJ2J5dGVPZmZzZXQnKSkgfHxcbiAgICAgICAgICAgLy8gU2tpcCBpbmRleCBwcm9wZXJ0aWVzLlxuICAgICAgICAgICBpc0luZGV4KGtleSwgbGVuZ3RoKVxuICAgICAgICApKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUxpa2VLZXlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYXJyYXlMaWtlS2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ubWFwYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWVcbiAqIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBtYXBwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TWFwKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheU1hcDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2FycmF5TWFwLmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUFzc2lnblZhbHVlID0gcmVxdWlyZSgnLi9fYmFzZUFzc2lnblZhbHVlJyksXG4gICAgZXEgPSByZXF1aXJlKCcuL2VxJyk7XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyBsaWtlIGBhc3NpZ25WYWx1ZWAgZXhjZXB0IHRoYXQgaXQgZG9lc24ndCBhc3NpZ25cbiAqIGB1bmRlZmluZWRgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBhc3NpZ25NZXJnZVZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBpZiAoKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgIWVxKG9iamVjdFtrZXldLCB2YWx1ZSkpIHx8XG4gICAgICAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSkge1xuICAgIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzaWduTWVyZ2VWYWx1ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Fzc2lnbk1lcmdlVmFsdWUuanNcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjcmVhdGVCYXNlRm9yID0gcmVxdWlyZSgnLi9fY3JlYXRlQmFzZUZvcicpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBiYXNlRm9yT3duYCB3aGljaCBpdGVyYXRlcyBvdmVyIGBvYmplY3RgXG4gKiBwcm9wZXJ0aWVzIHJldHVybmVkIGJ5IGBrZXlzRnVuY2AgYW5kIGludm9rZXMgYGl0ZXJhdGVlYCBmb3IgZWFjaCBwcm9wZXJ0eS5cbiAqIEl0ZXJhdGVlIGZ1bmN0aW9ucyBtYXkgZXhpdCBpdGVyYXRpb24gZWFybHkgYnkgZXhwbGljaXRseSByZXR1cm5pbmcgYGZhbHNlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXlzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBrZXlzIG9mIGBvYmplY3RgLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xudmFyIGJhc2VGb3IgPSBjcmVhdGVCYXNlRm9yKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUZvcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VGb3IuanNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjYXN0UGF0aCA9IHJlcXVpcmUoJy4vX2Nhc3RQYXRoJyksXG4gICAgdG9LZXkgPSByZXF1aXJlKCcuL190b0tleScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmdldGAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWZhdWx0IHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXNvbHZlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldChvYmplY3QsIHBhdGgpIHtcbiAgcGF0aCA9IGNhc3RQYXRoKHBhdGgsIG9iamVjdCk7XG5cbiAgdmFyIGluZGV4ID0gMCxcbiAgICAgIGxlbmd0aCA9IHBhdGgubGVuZ3RoO1xuXG4gIHdoaWxlIChvYmplY3QgIT0gbnVsbCAmJiBpbmRleCA8IGxlbmd0aCkge1xuICAgIG9iamVjdCA9IG9iamVjdFt0b0tleShwYXRoW2luZGV4KytdKV07XG4gIH1cbiAgcmV0dXJuIChpbmRleCAmJiBpbmRleCA9PSBsZW5ndGgpID8gb2JqZWN0IDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlR2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzS2V5ID0gcmVxdWlyZSgnLi9faXNLZXknKSxcbiAgICBzdHJpbmdUb1BhdGggPSByZXF1aXJlKCcuL19zdHJpbmdUb1BhdGgnKSxcbiAgICB0b1N0cmluZyA9IHJlcXVpcmUoJy4vdG9TdHJpbmcnKTtcblxuLyoqXG4gKiBDYXN0cyBgdmFsdWVgIHRvIGEgcGF0aCBhcnJheSBpZiBpdCdzIG5vdCBvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeSBrZXlzIG9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjYXN0IHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGNhc3RQYXRoKHZhbHVlLCBvYmplY3QpIHtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHJldHVybiBpc0tleSh2YWx1ZSwgb2JqZWN0KSA/IFt2YWx1ZV0gOiBzdHJpbmdUb1BhdGgodG9TdHJpbmcodmFsdWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjYXN0UGF0aDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Nhc3RQYXRoLmpzXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcGllcyB0aGUgdmFsdWVzIG9mIGBzb3VyY2VgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IHNvdXJjZSBUaGUgYXJyYXkgdG8gY29weSB2YWx1ZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheT1bXV0gVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIHRvLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlBcnJheShzb3VyY2UsIGFycmF5KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gc291cmNlLmxlbmd0aDtcblxuICBhcnJheSB8fCAoYXJyYXkgPSBBcnJheShsZW5ndGgpKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtpbmRleF0gPSBzb3VyY2VbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb3B5QXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19jb3B5QXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKTtcblxudmFyIGRlZmluZVByb3BlcnR5ID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIHZhciBmdW5jID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2RlZmluZVByb3BlcnR5Jyk7XG4gICAgZnVuYyh7fSwgJycsIHt9KTtcbiAgICByZXR1cm4gZnVuYztcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmaW5lUHJvcGVydHk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19kZWZpbmVQcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFNldENhY2hlID0gcmVxdWlyZSgnLi9fU2V0Q2FjaGUnKSxcbiAgICBhcnJheVNvbWUgPSByZXF1aXJlKCcuL19hcnJheVNvbWUnKSxcbiAgICBjYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2NhY2hlSGFzJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMSxcbiAgICBDT01QQVJFX1VOT1JERVJFRF9GTEFHID0gMjtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIGFycmF5cyB3aXRoIHN1cHBvcnQgZm9yXG4gKiBwYXJ0aWFsIGRlZXAgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtBcnJheX0gb3RoZXIgVGhlIG90aGVyIGFycmF5IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGFjayBUcmFja3MgdHJhdmVyc2VkIGBhcnJheWAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYXJyYXlzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsQXJyYXlzKGFycmF5LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHLFxuICAgICAgYXJyTGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgb3RoTGVuZ3RoID0gb3RoZXIubGVuZ3RoO1xuXG4gIGlmIChhcnJMZW5ndGggIT0gb3RoTGVuZ3RoICYmICEoaXNQYXJ0aWFsICYmIG90aExlbmd0aCA+IGFyckxlbmd0aCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gQXNzdW1lIGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldChhcnJheSk7XG4gIGlmIChzdGFja2VkICYmIHN0YWNrLmdldChvdGhlcikpIHtcbiAgICByZXR1cm4gc3RhY2tlZCA9PSBvdGhlcjtcbiAgfVxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IHRydWUsXG4gICAgICBzZWVuID0gKGJpdG1hc2sgJiBDT01QQVJFX1VOT1JERVJFRF9GTEFHKSA/IG5ldyBTZXRDYWNoZSA6IHVuZGVmaW5lZDtcblxuICBzdGFjay5zZXQoYXJyYXksIG90aGVyKTtcbiAgc3RhY2suc2V0KG90aGVyLCBhcnJheSk7XG5cbiAgLy8gSWdub3JlIG5vbi1pbmRleCBwcm9wZXJ0aWVzLlxuICB3aGlsZSAoKytpbmRleCA8IGFyckxlbmd0aCkge1xuICAgIHZhciBhcnJWYWx1ZSA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgb3RoVmFsdWUgPSBvdGhlcltpbmRleF07XG5cbiAgICBpZiAoY3VzdG9taXplcikge1xuICAgICAgdmFyIGNvbXBhcmVkID0gaXNQYXJ0aWFsXG4gICAgICAgID8gY3VzdG9taXplcihvdGhWYWx1ZSwgYXJyVmFsdWUsIGluZGV4LCBvdGhlciwgYXJyYXksIHN0YWNrKVxuICAgICAgICA6IGN1c3RvbWl6ZXIoYXJyVmFsdWUsIG90aFZhbHVlLCBpbmRleCwgYXJyYXksIG90aGVyLCBzdGFjayk7XG4gICAgfVxuICAgIGlmIChjb21wYXJlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoY29tcGFyZWQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIGFycmF5cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGlmIChzZWVuKSB7XG4gICAgICBpZiAoIWFycmF5U29tZShvdGhlciwgZnVuY3Rpb24ob3RoVmFsdWUsIG90aEluZGV4KSB7XG4gICAgICAgICAgICBpZiAoIWNhY2hlSGFzKHNlZW4sIG90aEluZGV4KSAmJlxuICAgICAgICAgICAgICAgIChhcnJWYWx1ZSA9PT0gb3RoVmFsdWUgfHwgZXF1YWxGdW5jKGFyclZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spKSkge1xuICAgICAgICAgICAgICByZXR1cm4gc2Vlbi5wdXNoKG90aEluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSkge1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghKFxuICAgICAgICAgIGFyclZhbHVlID09PSBvdGhWYWx1ZSB8fFxuICAgICAgICAgICAgZXF1YWxGdW5jKGFyclZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spXG4gICAgICAgICkpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHN0YWNrWydkZWxldGUnXShhcnJheSk7XG4gIHN0YWNrWydkZWxldGUnXShvdGhlcik7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXF1YWxBcnJheXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19lcXVhbEFycmF5cy5qc1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciBzdHJpY3QgZXF1YWxpdHkgY29tcGFyaXNvbnMsIGkuZS4gYD09PWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaWYgc3VpdGFibGUgZm9yIHN0cmljdFxuICogIGVxdWFsaXR5IGNvbXBhcmlzb25zLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaWN0Q29tcGFyYWJsZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IHZhbHVlICYmICFpc09iamVjdCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTdHJpY3RDb21wYXJhYmxlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faXNTdHJpY3RDb21wYXJhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSA1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgbWF0Y2hlc1Byb3BlcnR5YCBmb3Igc291cmNlIHZhbHVlcyBzdWl0YWJsZVxuICogZm9yIHN0cmljdCBlcXVhbGl0eSBjb21wYXJpc29ucywgaS5lLiBgPT09YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcGFyYW0geyp9IHNyY1ZhbHVlIFRoZSB2YWx1ZSB0byBtYXRjaC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHNwZWMgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlKGtleSwgc3JjVmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0W2tleV0gPT09IHNyY1ZhbHVlICYmXG4gICAgICAoc3JjVmFsdWUgIT09IHVuZGVmaW5lZCB8fCAoa2V5IGluIE9iamVjdChvYmplY3QpKSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWF0Y2hlc1N0cmljdENvbXBhcmFibGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19tYXRjaGVzU3RyaWN0Q29tcGFyYWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG1lbW9pemVDYXBwZWQgPSByZXF1aXJlKCcuL19tZW1vaXplQ2FwcGVkJyk7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIHByb3BlcnR5IG5hbWVzIHdpdGhpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZUxlYWRpbmdEb3QgPSAvXlxcLi8sXG4gICAgcmVQcm9wTmFtZSA9IC9bXi5bXFxdXSt8XFxbKD86KC0/XFxkKyg/OlxcLlxcZCspPyl8KFtcIiddKSgoPzooPyFcXDIpW15cXFxcXXxcXFxcLikqPylcXDIpXFxdfCg/PSg/OlxcLnxcXFtcXF0pKD86XFwufFxcW1xcXXwkKSkvZztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggYmFja3NsYXNoZXMgaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgcmVFc2NhcGVDaGFyID0gL1xcXFwoXFxcXCk/L2c7XG5cbi8qKlxuICogQ29udmVydHMgYHN0cmluZ2AgdG8gYSBwcm9wZXJ0eSBwYXRoIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqL1xudmFyIHN0cmluZ1RvUGF0aCA9IG1lbW9pemVDYXBwZWQoZnVuY3Rpb24oc3RyaW5nKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgaWYgKHJlTGVhZGluZ0RvdC50ZXN0KHN0cmluZykpIHtcbiAgICByZXN1bHQucHVzaCgnJyk7XG4gIH1cbiAgc3RyaW5nLnJlcGxhY2UocmVQcm9wTmFtZSwgZnVuY3Rpb24obWF0Y2gsIG51bWJlciwgcXVvdGUsIHN0cmluZykge1xuICAgIHJlc3VsdC5wdXNoKHF1b3RlID8gc3RyaW5nLnJlcGxhY2UocmVFc2NhcGVDaGFyLCAnJDEnKSA6IChudW1iZXIgfHwgbWF0Y2gpKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpbmdUb1BhdGg7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19zdHJpbmdUb1BhdGguanNcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYGZ1bmNgIHRvIGl0cyBzb3VyY2UgY29kZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHNvdXJjZSBjb2RlLlxuICovXG5mdW5jdGlvbiB0b1NvdXJjZShmdW5jKSB7XG4gIGlmIChmdW5jICE9IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZ1bmNUb1N0cmluZy5jYWxsKGZ1bmMpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoZnVuYyArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiAnJztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1NvdXJjZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3RvU291cmNlLmpzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUlzRXF1YWwgPSByZXF1aXJlKCcuL19iYXNlSXNFcXVhbCcpO1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uaXNFcXVhbGAgZXhjZXB0IHRoYXQgaXQgYWNjZXB0cyBgY3VzdG9taXplcmAgd2hpY2hcbiAqIGlzIGludm9rZWQgdG8gY29tcGFyZSB2YWx1ZXMuIElmIGBjdXN0b21pemVyYCByZXR1cm5zIGB1bmRlZmluZWRgLCBjb21wYXJpc29uc1xuICogYXJlIGhhbmRsZWQgYnkgdGhlIG1ldGhvZCBpbnN0ZWFkLiBUaGUgYGN1c3RvbWl6ZXJgIGlzIGludm9rZWQgd2l0aCB1cCB0b1xuICogc2l4IGFyZ3VtZW50czogKG9ialZhbHVlLCBvdGhWYWx1ZSBbLCBpbmRleHxrZXksIG9iamVjdCwgb3RoZXIsIHN0YWNrXSkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBpc0dyZWV0aW5nKHZhbHVlKSB7XG4gKiAgIHJldHVybiAvXmgoPzppfGVsbG8pJC8udGVzdCh2YWx1ZSk7XG4gKiB9XG4gKlxuICogZnVuY3Rpb24gY3VzdG9taXplcihvYmpWYWx1ZSwgb3RoVmFsdWUpIHtcbiAqICAgaWYgKGlzR3JlZXRpbmcob2JqVmFsdWUpICYmIGlzR3JlZXRpbmcob3RoVmFsdWUpKSB7XG4gKiAgICAgcmV0dXJuIHRydWU7XG4gKiAgIH1cbiAqIH1cbiAqXG4gKiB2YXIgYXJyYXkgPSBbJ2hlbGxvJywgJ2dvb2RieWUnXTtcbiAqIHZhciBvdGhlciA9IFsnaGknLCAnZ29vZGJ5ZSddO1xuICpcbiAqIF8uaXNFcXVhbFdpdGgoYXJyYXksIG90aGVyLCBjdXN0b21pemVyKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaXNFcXVhbFdpdGgodmFsdWUsIG90aGVyLCBjdXN0b21pemVyKSB7XG4gIGN1c3RvbWl6ZXIgPSB0eXBlb2YgY3VzdG9taXplciA9PSAnZnVuY3Rpb24nID8gY3VzdG9taXplciA6IHVuZGVmaW5lZDtcbiAgdmFyIHJlc3VsdCA9IGN1c3RvbWl6ZXIgPyBjdXN0b21pemVyKHZhbHVlLCBvdGhlcikgOiB1bmRlZmluZWQ7XG4gIHJldHVybiByZXN1bHQgPT09IHVuZGVmaW5lZCA/IGJhc2VJc0VxdWFsKHZhbHVlLCBvdGhlciwgdW5kZWZpbmVkLCBjdXN0b21pemVyKSA6ICEhcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRXF1YWxXaXRoO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0VxdWFsV2l0aC5qc1xuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFycmF5TGlrZUtleXMgPSByZXF1aXJlKCcuL19hcnJheUxpa2VLZXlzJyksXG4gICAgYmFzZUtleXNJbiA9IHJlcXVpcmUoJy4vX2Jhc2VLZXlzSW4nKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gYW5kIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5c0luKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InLCAnYyddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKi9cbmZ1bmN0aW9uIGtleXNJbihvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCwgdHJ1ZSkgOiBiYXNlS2V5c0luKG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5c0luO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9rZXlzSW4uanNcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlQXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19iYXNlQXNzaWduVmFsdWUnKSxcbiAgICBiYXNlRm9yT3duID0gcmVxdWlyZSgnLi9fYmFzZUZvck93bicpLFxuICAgIGJhc2VJdGVyYXRlZSA9IHJlcXVpcmUoJy4vX2Jhc2VJdGVyYXRlZScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gb2JqZWN0IHdpdGggdGhlIHNhbWUga2V5cyBhcyBgb2JqZWN0YCBhbmQgdmFsdWVzIGdlbmVyYXRlZFxuICogYnkgcnVubmluZyBlYWNoIG93biBlbnVtZXJhYmxlIHN0cmluZyBrZXllZCBwcm9wZXJ0eSBvZiBgb2JqZWN0YCB0aHJ1XG4gKiBgaXRlcmF0ZWVgLiBUaGUgaXRlcmF0ZWUgaXMgaW52b2tlZCB3aXRoIHRocmVlIGFyZ3VtZW50czpcbiAqICh2YWx1ZSwga2V5LCBvYmplY3QpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbaXRlcmF0ZWU9Xy5pZGVudGl0eV0gVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG5ldyBtYXBwZWQgb2JqZWN0LlxuICogQHNlZSBfLm1hcEtleXNcbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIHVzZXJzID0ge1xuICogICAnZnJlZCc6ICAgIHsgJ3VzZXInOiAnZnJlZCcsICAgICdhZ2UnOiA0MCB9LFxuICogICAncGViYmxlcyc6IHsgJ3VzZXInOiAncGViYmxlcycsICdhZ2UnOiAxIH1cbiAqIH07XG4gKlxuICogXy5tYXBWYWx1ZXModXNlcnMsIGZ1bmN0aW9uKG8pIHsgcmV0dXJuIG8uYWdlOyB9KTtcbiAqIC8vID0+IHsgJ2ZyZWQnOiA0MCwgJ3BlYmJsZXMnOiAxIH0gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqXG4gKiAvLyBUaGUgYF8ucHJvcGVydHlgIGl0ZXJhdGVlIHNob3J0aGFuZC5cbiAqIF8ubWFwVmFsdWVzKHVzZXJzLCAnYWdlJyk7XG4gKiAvLyA9PiB7ICdmcmVkJzogNDAsICdwZWJibGVzJzogMSB9IChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKi9cbmZ1bmN0aW9uIG1hcFZhbHVlcyhvYmplY3QsIGl0ZXJhdGVlKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgaXRlcmF0ZWUgPSBiYXNlSXRlcmF0ZWUoaXRlcmF0ZWUsIDMpO1xuXG4gIGJhc2VGb3JPd24ob2JqZWN0LCBmdW5jdGlvbih2YWx1ZSwga2V5LCBvYmplY3QpIHtcbiAgICBiYXNlQXNzaWduVmFsdWUocmVzdWx0LCBrZXksIGl0ZXJhdGVlKHZhbHVlLCBrZXksIG9iamVjdCkpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBWYWx1ZXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL21hcFZhbHVlcy5qc1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VUb1N0cmluZyA9IHJlcXVpcmUoJy4vX2Jhc2VUb1N0cmluZycpO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcuIEFuIGVtcHR5IHN0cmluZyBpcyByZXR1cm5lZCBmb3IgYG51bGxgXG4gKiBhbmQgYHVuZGVmaW5lZGAgdmFsdWVzLiBUaGUgc2lnbiBvZiBgLTBgIGlzIHByZXNlcnZlZC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9TdHJpbmcobnVsbCk7XG4gKiAvLyA9PiAnJ1xuICpcbiAqIF8udG9TdHJpbmcoLTApO1xuICogLy8gPT4gJy0wJ1xuICpcbiAqIF8udG9TdHJpbmcoWzEsIDIsIDNdKTtcbiAqIC8vID0+ICcxLDIsMydcbiAqL1xuZnVuY3Rpb24gdG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyAnJyA6IGJhc2VUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9TdHJpbmc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL3RvU3RyaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXM2RXJyb3IgPSByZXF1aXJlKCdlczYtZXJyb3InKTtcblxudmFyIF9lczZFcnJvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9lczZFcnJvcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFN1Ym1pc3Npb25FcnJvciA9IGZ1bmN0aW9uIChfRXh0ZW5kYWJsZUVycm9yKSB7XG4gIF9pbmhlcml0cyhTdWJtaXNzaW9uRXJyb3IsIF9FeHRlbmRhYmxlRXJyb3IpO1xuXG4gIGZ1bmN0aW9uIFN1Ym1pc3Npb25FcnJvcihlcnJvcnMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3VibWlzc2lvbkVycm9yKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChTdWJtaXNzaW9uRXJyb3IuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihTdWJtaXNzaW9uRXJyb3IpKS5jYWxsKHRoaXMsICdTdWJtaXQgVmFsaWRhdGlvbiBGYWlsZWQnKSk7XG5cbiAgICBfdGhpcy5lcnJvcnMgPSBlcnJvcnM7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgcmV0dXJuIFN1Ym1pc3Npb25FcnJvcjtcbn0oX2VzNkVycm9yMi5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gU3VibWlzc2lvbkVycm9yO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC1mb3JtL2xpYi9TdWJtaXNzaW9uRXJyb3IuanNcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMudXBkYXRlU3luY1dhcm5pbmdzID0gZXhwb3J0cy51cGRhdGVTeW5jRXJyb3JzID0gZXhwb3J0cy51bnRvdWNoID0gZXhwb3J0cy51bnJlZ2lzdGVyRmllbGQgPSBleHBvcnRzLnRvdWNoID0gZXhwb3J0cy5zZXRTdWJtaXRTdWNjZWVkZWQgPSBleHBvcnRzLnNldFN1Ym1pdEZhaWxlZCA9IGV4cG9ydHMuc3VibWl0ID0gZXhwb3J0cy5zdG9wU3VibWl0ID0gZXhwb3J0cy5zdG9wQXN5bmNWYWxpZGF0aW9uID0gZXhwb3J0cy5zdGFydFN1Ym1pdCA9IGV4cG9ydHMuc3RhcnRBc3luY1ZhbGlkYXRpb24gPSBleHBvcnRzLnJlc2V0ID0gZXhwb3J0cy5yZWdpc3RlckZpZWxkID0gZXhwb3J0cy5pbml0aWFsaXplID0gZXhwb3J0cy5mb2N1cyA9IGV4cG9ydHMuZGVzdHJveSA9IGV4cG9ydHMuY2xlYXJBc3luY0Vycm9yID0gZXhwb3J0cy5jbGVhclN1Ym1pdEVycm9ycyA9IGV4cG9ydHMuY2xlYXJTdWJtaXQgPSBleHBvcnRzLmNoYW5nZSA9IGV4cG9ydHMuYmx1ciA9IGV4cG9ydHMuYXV0b2ZpbGwgPSBleHBvcnRzLmFycmF5VW5zaGlmdCA9IGV4cG9ydHMuYXJyYXlTd2FwID0gZXhwb3J0cy5hcnJheVNwbGljZSA9IGV4cG9ydHMuYXJyYXlTaGlmdCA9IGV4cG9ydHMuYXJyYXlSZW1vdmVBbGwgPSBleHBvcnRzLmFycmF5UmVtb3ZlID0gZXhwb3J0cy5hcnJheVB1c2ggPSBleHBvcnRzLmFycmF5UG9wID0gZXhwb3J0cy5hcnJheU1vdmUgPSBleHBvcnRzLmFycmF5SW5zZXJ0ID0gdW5kZWZpbmVkO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2FjdGlvblR5cGVzID0gcmVxdWlyZSgnLi9hY3Rpb25UeXBlcycpO1xuXG52YXIgYXJyYXlJbnNlcnQgPSBleHBvcnRzLmFycmF5SW5zZXJ0ID0gZnVuY3Rpb24gYXJyYXlJbnNlcnQoZm9ybSwgZmllbGQsIGluZGV4LCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IF9hY3Rpb25UeXBlcy5BUlJBWV9JTlNFUlQsXG4gICAgbWV0YTogeyBmb3JtOiBmb3JtLCBmaWVsZDogZmllbGQsIGluZGV4OiBpbmRleCB9LFxuICAgIHBheWxvYWQ6IHZhbHVlXG4gIH07XG59O1xuXG52YXIgYXJyYXlNb3ZlID0gZXhwb3J0cy5hcnJheU1vdmUgPSBmdW5jdGlvbiBhcnJheU1vdmUoZm9ybSwgZmllbGQsIGZyb20sIHRvKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogX2FjdGlvblR5cGVzLkFSUkFZX01PVkUsXG4gICAgbWV0YTogeyBmb3JtOiBmb3JtLCBmaWVsZDogZmllbGQsIGZyb206IGZyb20sIHRvOiB0byB9XG4gIH07XG59O1xuXG52YXIgYXJyYXlQb3AgPSBleHBvcnRzLmFycmF5UG9wID0gZnVuY3Rpb24gYXJyYXlQb3AoZm9ybSwgZmllbGQpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBfYWN0aW9uVHlwZXMuQVJSQVlfUE9QLFxuICAgIG1ldGE6IHsgZm9ybTogZm9ybSwgZmllbGQ6IGZpZWxkIH1cbiAgfTtcbn07XG5cbnZhciBhcnJheVB1c2ggPSBleHBvcnRzLmFycmF5UHVzaCA9IGZ1bmN0aW9uIGFycmF5UHVzaChmb3JtLCBmaWVsZCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBfYWN0aW9uVHlwZXMuQVJSQVlfUFVTSCxcbiAgICBtZXRhOiB7IGZvcm06IGZvcm0sIGZpZWxkOiBmaWVsZCB9LFxuICAgIHBheWxvYWQ6IHZhbHVlXG4gIH07XG59O1xuXG52YXIgYXJyYXlSZW1vdmUgPSBleHBvcnRzLmFycmF5UmVtb3ZlID0gZnVuY3Rpb24gYXJyYXlSZW1vdmUoZm9ybSwgZmllbGQsIGluZGV4KSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogX2FjdGlvblR5cGVzLkFSUkFZX1JFTU9WRSxcbiAgICBtZXRhOiB7IGZvcm06IGZvcm0sIGZpZWxkOiBmaWVsZCwgaW5kZXg6IGluZGV4IH1cbiAgfTtcbn07XG5cbnZhciBhcnJheVJlbW92ZUFsbCA9IGV4cG9ydHMuYXJyYXlSZW1vdmVBbGwgPSBmdW5jdGlvbiBhcnJheVJlbW92ZUFsbChmb3JtLCBmaWVsZCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IF9hY3Rpb25UeXBlcy5BUlJBWV9SRU1PVkVfQUxMLFxuICAgIG1ldGE6IHsgZm9ybTogZm9ybSwgZmllbGQ6IGZpZWxkIH1cbiAgfTtcbn07XG5cbnZhciBhcnJheVNoaWZ0ID0gZXhwb3J0cy5hcnJheVNoaWZ0ID0gZnVuY3Rpb24gYXJyYXlTaGlmdChmb3JtLCBmaWVsZCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IF9hY3Rpb25UeXBlcy5BUlJBWV9TSElGVCxcbiAgICBtZXRhOiB7IGZvcm06IGZvcm0sIGZpZWxkOiBmaWVsZCB9XG4gIH07XG59O1xuXG52YXIgYXJyYXlTcGxpY2UgPSBleHBvcnRzLmFycmF5U3BsaWNlID0gZnVuY3Rpb24gYXJyYXlTcGxpY2UoZm9ybSwgZmllbGQsIGluZGV4LCByZW1vdmVOdW0sIHZhbHVlKSB7XG4gIHZhciBhY3Rpb24gPSB7XG4gICAgdHlwZTogX2FjdGlvblR5cGVzLkFSUkFZX1NQTElDRSxcbiAgICBtZXRhOiB7IGZvcm06IGZvcm0sIGZpZWxkOiBmaWVsZCwgaW5kZXg6IGluZGV4LCByZW1vdmVOdW06IHJlbW92ZU51bSB9XG4gIH07XG4gIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgYWN0aW9uLnBheWxvYWQgPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gYWN0aW9uO1xufTtcblxudmFyIGFycmF5U3dhcCA9IGV4cG9ydHMuYXJyYXlTd2FwID0gZnVuY3Rpb24gYXJyYXlTd2FwKGZvcm0sIGZpZWxkLCBpbmRleEEsIGluZGV4Qikge1xuICBpZiAoaW5kZXhBID09PSBpbmRleEIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1N3YXAgaW5kaWNlcyBjYW5ub3QgYmUgZXF1YWwnKTtcbiAgfVxuICBpZiAoaW5kZXhBIDwgMCB8fCBpbmRleEIgPCAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTd2FwIGluZGljZXMgY2Fubm90IGJlIG5lZ2F0aXZlJyk7XG4gIH1cbiAgcmV0dXJuIHsgdHlwZTogX2FjdGlvblR5cGVzLkFSUkFZX1NXQVAsIG1ldGE6IHsgZm9ybTogZm9ybSwgZmllbGQ6IGZpZWxkLCBpbmRleEE6IGluZGV4QSwgaW5kZXhCOiBpbmRleEIgfSB9O1xufTtcblxudmFyIGFycmF5VW5zaGlmdCA9IGV4cG9ydHMuYXJyYXlVbnNoaWZ0ID0gZnVuY3Rpb24gYXJyYXlVbnNoaWZ0KGZvcm0sIGZpZWxkLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IF9hY3Rpb25UeXBlcy5BUlJBWV9VTlNISUZULFxuICAgIG1ldGE6IHsgZm9ybTogZm9ybSwgZmllbGQ6IGZpZWxkIH0sXG4gICAgcGF5bG9hZDogdmFsdWVcbiAgfTtcbn07XG5cbnZhciBhdXRvZmlsbCA9IGV4cG9ydHMuYXV0b2ZpbGwgPSBmdW5jdGlvbiBhdXRvZmlsbChmb3JtLCBmaWVsZCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBfYWN0aW9uVHlwZXMuQVVUT0ZJTEwsXG4gICAgbWV0YTogeyBmb3JtOiBmb3JtLCBmaWVsZDogZmllbGQgfSxcbiAgICBwYXlsb2FkOiB2YWx1ZVxuICB9O1xufTtcblxudmFyIGJsdXIgPSBleHBvcnRzLmJsdXIgPSBmdW5jdGlvbiBibHVyKGZvcm0sIGZpZWxkLCB2YWx1ZSwgdG91Y2gpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBfYWN0aW9uVHlwZXMuQkxVUixcbiAgICBtZXRhOiB7IGZvcm06IGZvcm0sIGZpZWxkOiBmaWVsZCwgdG91Y2g6IHRvdWNoIH0sXG4gICAgcGF5bG9hZDogdmFsdWVcbiAgfTtcbn07XG5cbnZhciBjaGFuZ2UgPSBleHBvcnRzLmNoYW5nZSA9IGZ1bmN0aW9uIGNoYW5nZShmb3JtLCBmaWVsZCwgdmFsdWUsIHRvdWNoLCBwZXJzaXN0ZW50U3VibWl0RXJyb3JzKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogX2FjdGlvblR5cGVzLkNIQU5HRSxcbiAgICBtZXRhOiB7IGZvcm06IGZvcm0sIGZpZWxkOiBmaWVsZCwgdG91Y2g6IHRvdWNoLCBwZXJzaXN0ZW50U3VibWl0RXJyb3JzOiBwZXJzaXN0ZW50U3VibWl0RXJyb3JzIH0sXG4gICAgcGF5bG9hZDogdmFsdWVcbiAgfTtcbn07XG5cbnZhciBjbGVhclN1Ym1pdCA9IGV4cG9ydHMuY2xlYXJTdWJtaXQgPSBmdW5jdGlvbiBjbGVhclN1Ym1pdChmb3JtKSB7XG4gIHJldHVybiB7IHR5cGU6IF9hY3Rpb25UeXBlcy5DTEVBUl9TVUJNSVQsIG1ldGE6IHsgZm9ybTogZm9ybSB9IH07XG59O1xuXG52YXIgY2xlYXJTdWJtaXRFcnJvcnMgPSBleHBvcnRzLmNsZWFyU3VibWl0RXJyb3JzID0gZnVuY3Rpb24gY2xlYXJTdWJtaXRFcnJvcnMoZm9ybSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IF9hY3Rpb25UeXBlcy5DTEVBUl9TVUJNSVRfRVJST1JTLFxuICAgIG1ldGE6IHsgZm9ybTogZm9ybSB9XG4gIH07XG59O1xuXG52YXIgY2xlYXJBc3luY0Vycm9yID0gZXhwb3J0cy5jbGVhckFzeW5jRXJyb3IgPSBmdW5jdGlvbiBjbGVhckFzeW5jRXJyb3IoZm9ybSwgZmllbGQpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBfYWN0aW9uVHlwZXMuQ0xFQVJfQVNZTkNfRVJST1IsXG4gICAgbWV0YTogeyBmb3JtOiBmb3JtLCBmaWVsZDogZmllbGQgfVxuICB9O1xufTtcblxudmFyIGRlc3Ryb3kgPSBleHBvcnRzLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95KCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgZm9ybSA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGZvcm1bX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4geyB0eXBlOiBfYWN0aW9uVHlwZXMuREVTVFJPWSwgbWV0YTogeyBmb3JtOiBmb3JtIH0gfTtcbn07XG5cbnZhciBmb2N1cyA9IGV4cG9ydHMuZm9jdXMgPSBmdW5jdGlvbiBmb2N1cyhmb3JtLCBmaWVsZCkge1xuICByZXR1cm4geyB0eXBlOiBfYWN0aW9uVHlwZXMuRk9DVVMsIG1ldGE6IHsgZm9ybTogZm9ybSwgZmllbGQ6IGZpZWxkIH0gfTtcbn07XG5cbnZhciBpbml0aWFsaXplID0gZXhwb3J0cy5pbml0aWFsaXplID0gZnVuY3Rpb24gaW5pdGlhbGl6ZShmb3JtLCB2YWx1ZXMsIGtlZXBEaXJ0eSkge1xuICB2YXIgb3RoZXJNZXRhID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiB7fTtcblxuICBpZiAoa2VlcERpcnR5IGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgb3RoZXJNZXRhID0ga2VlcERpcnR5O1xuICAgIGtlZXBEaXJ0eSA9IGZhbHNlO1xuICB9XG4gIHJldHVybiB7XG4gICAgdHlwZTogX2FjdGlvblR5cGVzLklOSVRJQUxJWkUsXG4gICAgbWV0YTogX2V4dGVuZHMoeyBmb3JtOiBmb3JtLCBrZWVwRGlydHk6IGtlZXBEaXJ0eSB9LCBvdGhlck1ldGEpLFxuICAgIHBheWxvYWQ6IHZhbHVlc1xuICB9O1xufTtcblxudmFyIHJlZ2lzdGVyRmllbGQgPSBleHBvcnRzLnJlZ2lzdGVyRmllbGQgPSBmdW5jdGlvbiByZWdpc3RlckZpZWxkKGZvcm0sIG5hbWUsIHR5cGUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBfYWN0aW9uVHlwZXMuUkVHSVNURVJfRklFTEQsXG4gICAgbWV0YTogeyBmb3JtOiBmb3JtIH0sXG4gICAgcGF5bG9hZDogeyBuYW1lOiBuYW1lLCB0eXBlOiB0eXBlIH1cbiAgfTtcbn07XG5cbnZhciByZXNldCA9IGV4cG9ydHMucmVzZXQgPSBmdW5jdGlvbiByZXNldChmb3JtKSB7XG4gIHJldHVybiB7IHR5cGU6IF9hY3Rpb25UeXBlcy5SRVNFVCwgbWV0YTogeyBmb3JtOiBmb3JtIH0gfTtcbn07XG5cbnZhciBzdGFydEFzeW5jVmFsaWRhdGlvbiA9IGV4cG9ydHMuc3RhcnRBc3luY1ZhbGlkYXRpb24gPSBmdW5jdGlvbiBzdGFydEFzeW5jVmFsaWRhdGlvbihmb3JtLCBmaWVsZCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IF9hY3Rpb25UeXBlcy5TVEFSVF9BU1lOQ19WQUxJREFUSU9OLFxuICAgIG1ldGE6IHsgZm9ybTogZm9ybSwgZmllbGQ6IGZpZWxkIH1cbiAgfTtcbn07XG5cbnZhciBzdGFydFN1Ym1pdCA9IGV4cG9ydHMuc3RhcnRTdWJtaXQgPSBmdW5jdGlvbiBzdGFydFN1Ym1pdChmb3JtKSB7XG4gIHJldHVybiB7IHR5cGU6IF9hY3Rpb25UeXBlcy5TVEFSVF9TVUJNSVQsIG1ldGE6IHsgZm9ybTogZm9ybSB9IH07XG59O1xuXG52YXIgc3RvcEFzeW5jVmFsaWRhdGlvbiA9IGV4cG9ydHMuc3RvcEFzeW5jVmFsaWRhdGlvbiA9IGZ1bmN0aW9uIHN0b3BBc3luY1ZhbGlkYXRpb24oZm9ybSwgZXJyb3JzKSB7XG4gIHZhciBhY3Rpb24gPSB7XG4gICAgdHlwZTogX2FjdGlvblR5cGVzLlNUT1BfQVNZTkNfVkFMSURBVElPTixcbiAgICBtZXRhOiB7IGZvcm06IGZvcm0gfSxcbiAgICBwYXlsb2FkOiBlcnJvcnNcbiAgfTtcbiAgaWYgKGVycm9ycyAmJiBPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCkge1xuICAgIGFjdGlvbi5lcnJvciA9IHRydWU7XG4gIH1cbiAgcmV0dXJuIGFjdGlvbjtcbn07XG5cbnZhciBzdG9wU3VibWl0ID0gZXhwb3J0cy5zdG9wU3VibWl0ID0gZnVuY3Rpb24gc3RvcFN1Ym1pdChmb3JtLCBlcnJvcnMpIHtcbiAgdmFyIGFjdGlvbiA9IHtcbiAgICB0eXBlOiBfYWN0aW9uVHlwZXMuU1RPUF9TVUJNSVQsXG4gICAgbWV0YTogeyBmb3JtOiBmb3JtIH0sXG4gICAgcGF5bG9hZDogZXJyb3JzXG4gIH07XG4gIGlmIChlcnJvcnMgJiYgT2JqZWN0LmtleXMoZXJyb3JzKS5sZW5ndGgpIHtcbiAgICBhY3Rpb24uZXJyb3IgPSB0cnVlO1xuICB9XG4gIHJldHVybiBhY3Rpb247XG59O1xuXG52YXIgc3VibWl0ID0gZXhwb3J0cy5zdWJtaXQgPSBmdW5jdGlvbiBzdWJtaXQoZm9ybSkge1xuICByZXR1cm4geyB0eXBlOiBfYWN0aW9uVHlwZXMuU1VCTUlULCBtZXRhOiB7IGZvcm06IGZvcm0gfSB9O1xufTtcblxudmFyIHNldFN1Ym1pdEZhaWxlZCA9IGV4cG9ydHMuc2V0U3VibWl0RmFpbGVkID0gZnVuY3Rpb24gc2V0U3VibWl0RmFpbGVkKGZvcm0pIHtcbiAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBmaWVsZHMgPSBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgZmllbGRzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBfYWN0aW9uVHlwZXMuU0VUX1NVQk1JVF9GQUlMRUQsXG4gICAgbWV0YTogeyBmb3JtOiBmb3JtLCBmaWVsZHM6IGZpZWxkcyB9LFxuICAgIGVycm9yOiB0cnVlXG4gIH07XG59O1xuXG52YXIgc2V0U3VibWl0U3VjY2VlZGVkID0gZXhwb3J0cy5zZXRTdWJtaXRTdWNjZWVkZWQgPSBmdW5jdGlvbiBzZXRTdWJtaXRTdWNjZWVkZWQoZm9ybSkge1xuICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIGZpZWxkcyA9IEFycmF5KF9sZW4zID4gMSA/IF9sZW4zIC0gMSA6IDApLCBfa2V5MyA9IDE7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICBmaWVsZHNbX2tleTMgLSAxXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHR5cGU6IF9hY3Rpb25UeXBlcy5TRVRfU1VCTUlUX1NVQ0NFRURFRCxcbiAgICBtZXRhOiB7IGZvcm06IGZvcm0sIGZpZWxkczogZmllbGRzIH0sXG4gICAgZXJyb3I6IGZhbHNlXG4gIH07XG59O1xuXG52YXIgdG91Y2ggPSBleHBvcnRzLnRvdWNoID0gZnVuY3Rpb24gdG91Y2goZm9ybSkge1xuICBmb3IgKHZhciBfbGVuNCA9IGFyZ3VtZW50cy5sZW5ndGgsIGZpZWxkcyA9IEFycmF5KF9sZW40ID4gMSA/IF9sZW40IC0gMSA6IDApLCBfa2V5NCA9IDE7IF9rZXk0IDwgX2xlbjQ7IF9rZXk0KyspIHtcbiAgICBmaWVsZHNbX2tleTQgLSAxXSA9IGFyZ3VtZW50c1tfa2V5NF07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHR5cGU6IF9hY3Rpb25UeXBlcy5UT1VDSCxcbiAgICBtZXRhOiB7IGZvcm06IGZvcm0sIGZpZWxkczogZmllbGRzIH1cbiAgfTtcbn07XG5cbnZhciB1bnJlZ2lzdGVyRmllbGQgPSBleHBvcnRzLnVucmVnaXN0ZXJGaWVsZCA9IGZ1bmN0aW9uIHVucmVnaXN0ZXJGaWVsZChmb3JtLCBuYW1lKSB7XG4gIHZhciBkZXN0cm95T25Vbm1vdW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB0cnVlO1xuICByZXR1cm4ge1xuICAgIHR5cGU6IF9hY3Rpb25UeXBlcy5VTlJFR0lTVEVSX0ZJRUxELFxuICAgIG1ldGE6IHsgZm9ybTogZm9ybSB9LFxuICAgIHBheWxvYWQ6IHsgbmFtZTogbmFtZSwgZGVzdHJveU9uVW5tb3VudDogZGVzdHJveU9uVW5tb3VudCB9XG4gIH07XG59O1xuXG52YXIgdW50b3VjaCA9IGV4cG9ydHMudW50b3VjaCA9IGZ1bmN0aW9uIHVudG91Y2goZm9ybSkge1xuICBmb3IgKHZhciBfbGVuNSA9IGFyZ3VtZW50cy5sZW5ndGgsIGZpZWxkcyA9IEFycmF5KF9sZW41ID4gMSA/IF9sZW41IC0gMSA6IDApLCBfa2V5NSA9IDE7IF9rZXk1IDwgX2xlbjU7IF9rZXk1KyspIHtcbiAgICBmaWVsZHNbX2tleTUgLSAxXSA9IGFyZ3VtZW50c1tfa2V5NV07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHR5cGU6IF9hY3Rpb25UeXBlcy5VTlRPVUNILFxuICAgIG1ldGE6IHsgZm9ybTogZm9ybSwgZmllbGRzOiBmaWVsZHMgfVxuICB9O1xufTtcblxudmFyIHVwZGF0ZVN5bmNFcnJvcnMgPSBleHBvcnRzLnVwZGF0ZVN5bmNFcnJvcnMgPSBmdW5jdGlvbiB1cGRhdGVTeW5jRXJyb3JzKGZvcm0pIHtcbiAgdmFyIHN5bmNFcnJvcnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICB2YXIgZXJyb3IgPSBhcmd1bWVudHNbMl07XG4gIHJldHVybiB7XG4gICAgdHlwZTogX2FjdGlvblR5cGVzLlVQREFURV9TWU5DX0VSUk9SUyxcbiAgICBtZXRhOiB7IGZvcm06IGZvcm0gfSxcbiAgICBwYXlsb2FkOiB7IHN5bmNFcnJvcnM6IHN5bmNFcnJvcnMsIGVycm9yOiBlcnJvciB9XG4gIH07XG59O1xuXG52YXIgdXBkYXRlU3luY1dhcm5pbmdzID0gZXhwb3J0cy51cGRhdGVTeW5jV2FybmluZ3MgPSBmdW5jdGlvbiB1cGRhdGVTeW5jV2FybmluZ3MoZm9ybSkge1xuICB2YXIgc3luY1dhcm5pbmdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgdmFyIHdhcm5pbmcgPSBhcmd1bWVudHNbMl07XG4gIHJldHVybiB7XG4gICAgdHlwZTogX2FjdGlvblR5cGVzLlVQREFURV9TWU5DX1dBUk5JTkdTLFxuICAgIG1ldGE6IHsgZm9ybTogZm9ybSB9LFxuICAgIHBheWxvYWQ6IHsgc3luY1dhcm5pbmdzOiBzeW5jV2FybmluZ3MsIHdhcm5pbmc6IHdhcm5pbmcgfVxuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtZm9ybS9saWIvYWN0aW9ucy5qc1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbnZhciBwcm9jZXNzUHJvcHMgPSBmdW5jdGlvbiBwcm9jZXNzUHJvcHModHlwZSwgcHJvcHMsIF92YWx1ZSkge1xuICB2YXIgdmFsdWUgPSBwcm9wcy52YWx1ZTtcblxuICBpZiAodHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgIGNoZWNrZWQ6ICEhdmFsdWVcbiAgICB9KTtcbiAgfVxuICBpZiAodHlwZSA9PT0gJ3JhZGlvJykge1xuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgIGNoZWNrZWQ6IHZhbHVlID09PSBfdmFsdWUsXG4gICAgICB2YWx1ZTogX3ZhbHVlXG4gICAgfSk7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdzZWxlY3QtbXVsdGlwbGUnKSB7XG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgdmFsdWU6IHZhbHVlIHx8IFtdXG4gICAgfSk7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdmaWxlJykge1xuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSB8fCB1bmRlZmluZWRcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gcHJvcHM7XG59O1xuXG52YXIgY3JlYXRlRmllbGRQcm9wcyA9IGZ1bmN0aW9uIGNyZWF0ZUZpZWxkUHJvcHMoX3JlZjIsIG5hbWUsIF9yZWYpIHtcbiAgdmFyIGdldEluID0gX3JlZjIuZ2V0SW4sXG4gICAgICB0b0pTID0gX3JlZjIudG9KUztcblxuICB2YXIgYXN5bmNFcnJvciA9IF9yZWYuYXN5bmNFcnJvcixcbiAgICAgIGFzeW5jVmFsaWRhdGluZyA9IF9yZWYuYXN5bmNWYWxpZGF0aW5nLFxuICAgICAgb25CbHVyID0gX3JlZi5vbkJsdXIsXG4gICAgICBvbkNoYW5nZSA9IF9yZWYub25DaGFuZ2UsXG4gICAgICBvbkRyb3AgPSBfcmVmLm9uRHJvcCxcbiAgICAgIG9uRHJhZ1N0YXJ0ID0gX3JlZi5vbkRyYWdTdGFydCxcbiAgICAgIGRpcnR5ID0gX3JlZi5kaXJ0eSxcbiAgICAgIGRpc3BhdGNoID0gX3JlZi5kaXNwYXRjaCxcbiAgICAgIG9uRm9jdXMgPSBfcmVmLm9uRm9jdXMsXG4gICAgICBmb3JtID0gX3JlZi5mb3JtLFxuICAgICAgZm9ybWF0ID0gX3JlZi5mb3JtYXQsXG4gICAgICBpbml0aWFsID0gX3JlZi5pbml0aWFsLFxuICAgICAgcGFyc2UgPSBfcmVmLnBhcnNlLFxuICAgICAgcHJpc3RpbmUgPSBfcmVmLnByaXN0aW5lLFxuICAgICAgcHJvcHMgPSBfcmVmLnByb3BzLFxuICAgICAgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgc3VibWl0RXJyb3IgPSBfcmVmLnN1Ym1pdEVycm9yLFxuICAgICAgc3VibWl0RmFpbGVkID0gX3JlZi5zdWJtaXRGYWlsZWQsXG4gICAgICBzdWJtaXR0aW5nID0gX3JlZi5zdWJtaXR0aW5nLFxuICAgICAgc3luY0Vycm9yID0gX3JlZi5zeW5jRXJyb3IsXG4gICAgICBzeW5jV2FybmluZyA9IF9yZWYuc3luY1dhcm5pbmcsXG4gICAgICB2YWxpZGF0ZSA9IF9yZWYudmFsaWRhdGUsXG4gICAgICB2YWx1ZSA9IF9yZWYudmFsdWUsXG4gICAgICBfdmFsdWUgPSBfcmVmLl92YWx1ZSxcbiAgICAgIHdhcm4gPSBfcmVmLndhcm4sXG4gICAgICBjdXN0b20gPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgWydhc3luY0Vycm9yJywgJ2FzeW5jVmFsaWRhdGluZycsICdvbkJsdXInLCAnb25DaGFuZ2UnLCAnb25Ecm9wJywgJ29uRHJhZ1N0YXJ0JywgJ2RpcnR5JywgJ2Rpc3BhdGNoJywgJ29uRm9jdXMnLCAnZm9ybScsICdmb3JtYXQnLCAnaW5pdGlhbCcsICdwYXJzZScsICdwcmlzdGluZScsICdwcm9wcycsICdzdGF0ZScsICdzdWJtaXRFcnJvcicsICdzdWJtaXRGYWlsZWQnLCAnc3VibWl0dGluZycsICdzeW5jRXJyb3InLCAnc3luY1dhcm5pbmcnLCAndmFsaWRhdGUnLCAndmFsdWUnLCAnX3ZhbHVlJywgJ3dhcm4nXSk7XG5cbiAgdmFyIGVycm9yID0gc3luY0Vycm9yIHx8IGFzeW5jRXJyb3IgfHwgc3VibWl0RXJyb3I7XG4gIHZhciB3YXJuaW5nID0gc3luY1dhcm5pbmc7XG5cbiAgdmFyIGZvcm1hdEZpZWxkVmFsdWUgPSBmdW5jdGlvbiBmb3JtYXRGaWVsZFZhbHVlKHZhbHVlLCBmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHZhciBkZWZhdWx0Rm9ybWF0dGVkVmFsdWUgPSB2YWx1ZSA9PSBudWxsID8gJycgOiB2YWx1ZTtcbiAgICByZXR1cm4gZm9ybWF0ID8gZm9ybWF0KHZhbHVlLCBuYW1lKSA6IGRlZmF1bHRGb3JtYXR0ZWRWYWx1ZTtcbiAgfTtcblxuICB2YXIgZm9ybWF0dGVkRmllbGRWYWx1ZSA9IGZvcm1hdEZpZWxkVmFsdWUodmFsdWUsIGZvcm1hdCk7XG5cbiAgcmV0dXJuIHtcbiAgICBpbnB1dDogcHJvY2Vzc1Byb3BzKGN1c3RvbS50eXBlLCB7XG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgb25CbHVyOiBvbkJsdXIsXG4gICAgICBvbkNoYW5nZTogb25DaGFuZ2UsXG4gICAgICBvbkRyYWdTdGFydDogb25EcmFnU3RhcnQsXG4gICAgICBvbkRyb3A6IG9uRHJvcCxcbiAgICAgIG9uRm9jdXM6IG9uRm9jdXMsXG4gICAgICB2YWx1ZTogZm9ybWF0dGVkRmllbGRWYWx1ZVxuICAgIH0sIF92YWx1ZSksXG4gICAgbWV0YTogX2V4dGVuZHMoe30sIHRvSlMoc3RhdGUpLCB7XG4gICAgICBhY3RpdmU6ICEhKHN0YXRlICYmIGdldEluKHN0YXRlLCAnYWN0aXZlJykpLFxuICAgICAgYXN5bmNWYWxpZGF0aW5nOiBhc3luY1ZhbGlkYXRpbmcsXG4gICAgICBhdXRvZmlsbGVkOiAhIShzdGF0ZSAmJiBnZXRJbihzdGF0ZSwgJ2F1dG9maWxsZWQnKSksXG4gICAgICBkaXJ0eTogZGlydHksXG4gICAgICBkaXNwYXRjaDogZGlzcGF0Y2gsXG4gICAgICBlcnJvcjogZXJyb3IsXG4gICAgICBmb3JtOiBmb3JtLFxuICAgICAgaW5pdGlhbDogaW5pdGlhbCxcbiAgICAgIHdhcm5pbmc6IHdhcm5pbmcsXG4gICAgICBpbnZhbGlkOiAhIWVycm9yLFxuICAgICAgcHJpc3RpbmU6IHByaXN0aW5lLFxuICAgICAgc3VibWl0dGluZzogISFzdWJtaXR0aW5nLFxuICAgICAgc3VibWl0RmFpbGVkOiAhIXN1Ym1pdEZhaWxlZCxcbiAgICAgIHRvdWNoZWQ6ICEhKHN0YXRlICYmIGdldEluKHN0YXRlLCAndG91Y2hlZCcpKSxcbiAgICAgIHZhbGlkOiAhZXJyb3IsXG4gICAgICB2aXNpdGVkOiAhIShzdGF0ZSAmJiBnZXRJbihzdGF0ZSwgJ3Zpc2l0ZWQnKSlcbiAgICB9KSxcbiAgICBjdXN0b206IF9leHRlbmRzKHt9LCBjdXN0b20sIHByb3BzKVxuICB9O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlRmllbGRQcm9wcztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtZm9ybS9saWIvY3JlYXRlRmllbGRQcm9wcy5qc1xuLy8gbW9kdWxlIGlkID0gNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIGRlZmF1bHRTaG91bGRBc3luY1ZhbGlkYXRlID0gZnVuY3Rpb24gZGVmYXVsdFNob3VsZEFzeW5jVmFsaWRhdGUoX3JlZikge1xuICB2YXIgaW5pdGlhbGl6ZWQgPSBfcmVmLmluaXRpYWxpemVkLFxuICAgICAgdHJpZ2dlciA9IF9yZWYudHJpZ2dlcixcbiAgICAgIHByaXN0aW5lID0gX3JlZi5wcmlzdGluZSxcbiAgICAgIHN5bmNWYWxpZGF0aW9uUGFzc2VzID0gX3JlZi5zeW5jVmFsaWRhdGlvblBhc3NlcztcblxuICBpZiAoIXN5bmNWYWxpZGF0aW9uUGFzc2VzKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN3aXRjaCAodHJpZ2dlcikge1xuICAgIGNhc2UgJ2JsdXInOlxuICAgICAgLy8gYmx1cnJpbmdcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGNhc2UgJ3N1Ym1pdCc6XG4gICAgICAvLyBzdWJtaXR0aW5nLCBzbyBvbmx5IGFzeW5jIHZhbGlkYXRlIGlmIGZvcm0gaXMgZGlydHkgb3Igd2FzIG5ldmVyIGluaXRpYWxpemVkXG4gICAgICAvLyBjb252ZXJzZWx5LCBET04nVCBhc3luYyB2YWxpZGF0ZSBpZiB0aGUgZm9ybSBpcyBwcmlzdGluZSBqdXN0IGFzIGl0IHdhcyBpbml0aWFsaXplZFxuICAgICAgcmV0dXJuICFwcmlzdGluZSB8fCAhaW5pdGlhbGl6ZWQ7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZGVmYXVsdFNob3VsZEFzeW5jVmFsaWRhdGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4LWZvcm0vbGliL2RlZmF1bHRTaG91bGRBc3luY1ZhbGlkYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBkZWZhdWx0U2hvdWxkVmFsaWRhdGUgPSBmdW5jdGlvbiBkZWZhdWx0U2hvdWxkVmFsaWRhdGUoX3JlZikge1xuICB2YXIgdmFsdWVzID0gX3JlZi52YWx1ZXMsXG4gICAgICBuZXh0UHJvcHMgPSBfcmVmLm5leHRQcm9wcyxcbiAgICAgIGluaXRpYWxSZW5kZXIgPSBfcmVmLmluaXRpYWxSZW5kZXIsXG4gICAgICBsYXN0RmllbGRWYWxpZGF0b3JLZXlzID0gX3JlZi5sYXN0RmllbGRWYWxpZGF0b3JLZXlzLFxuICAgICAgZmllbGRWYWxpZGF0b3JLZXlzID0gX3JlZi5maWVsZFZhbGlkYXRvcktleXMsXG4gICAgICBzdHJ1Y3R1cmUgPSBfcmVmLnN0cnVjdHVyZTtcblxuICBpZiAoaW5pdGlhbFJlbmRlcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiAhc3RydWN0dXJlLmRlZXBFcXVhbCh2YWx1ZXMsIG5leHRQcm9wcy52YWx1ZXMpIHx8ICFzdHJ1Y3R1cmUuZGVlcEVxdWFsKGxhc3RGaWVsZFZhbGlkYXRvcktleXMsIGZpZWxkVmFsaWRhdG9yS2V5cyk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBkZWZhdWx0U2hvdWxkVmFsaWRhdGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4LWZvcm0vbGliL2RlZmF1bHRTaG91bGRWYWxpZGF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgaXNFdmVudCA9IGZ1bmN0aW9uIGlzRXZlbnQoY2FuZGlkYXRlKSB7XG4gIHJldHVybiAhIShjYW5kaWRhdGUgJiYgY2FuZGlkYXRlLnN0b3BQcm9wYWdhdGlvbiAmJiBjYW5kaWRhdGUucHJldmVudERlZmF1bHQpO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gaXNFdmVudDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtZm9ybS9saWIvZXZlbnRzL2lzRXZlbnQuanNcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9nZXRWYWx1ZSA9IHJlcXVpcmUoJy4vZ2V0VmFsdWUnKTtcblxudmFyIF9nZXRWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRWYWx1ZSk7XG5cbnZhciBfaXNSZWFjdE5hdGl2ZSA9IHJlcXVpcmUoJy4uL2lzUmVhY3ROYXRpdmUnKTtcblxudmFyIF9pc1JlYWN0TmF0aXZlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzUmVhY3ROYXRpdmUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgb25DaGFuZ2VWYWx1ZSA9IGZ1bmN0aW9uIG9uQ2hhbmdlVmFsdWUoZXZlbnQsIF9yZWYpIHtcbiAgdmFyIG5hbWUgPSBfcmVmLm5hbWUsXG4gICAgICBwYXJzZSA9IF9yZWYucGFyc2UsXG4gICAgICBub3JtYWxpemUgPSBfcmVmLm5vcm1hbGl6ZTtcblxuICAvLyByZWFkIHZhbHVlIGZyb20gaW5wdXRcbiAgdmFyIHZhbHVlID0gKDAsIF9nZXRWYWx1ZTIuZGVmYXVsdCkoZXZlbnQsIF9pc1JlYWN0TmF0aXZlMi5kZWZhdWx0KTtcblxuICAvLyBwYXJzZSB2YWx1ZSBpZiB3ZSBoYXZlIGEgcGFyc2VyXG4gIGlmIChwYXJzZSkge1xuICAgIHZhbHVlID0gcGFyc2UodmFsdWUsIG5hbWUpO1xuICB9XG5cbiAgLy8gbm9ybWFsaXplIHZhbHVlXG4gIGlmIChub3JtYWxpemUpIHtcbiAgICB2YWx1ZSA9IG5vcm1hbGl6ZShuYW1lLCB2YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBvbkNoYW5nZVZhbHVlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC1mb3JtL2xpYi9ldmVudHMvb25DaGFuZ2VWYWx1ZS5qc1xuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2lzRXZlbnQgPSByZXF1aXJlKCcuL2lzRXZlbnQnKTtcblxudmFyIF9pc0V2ZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzRXZlbnQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgc2lsZW5jZUV2ZW50ID0gZnVuY3Rpb24gc2lsZW5jZUV2ZW50KGV2ZW50KSB7XG4gIHZhciBpcyA9ICgwLCBfaXNFdmVudDIuZGVmYXVsdCkoZXZlbnQpO1xuICBpZiAoaXMpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG4gIHJldHVybiBpcztcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHNpbGVuY2VFdmVudDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtZm9ybS9saWIvZXZlbnRzL3NpbGVuY2VFdmVudC5qc1xuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIGNyZWF0ZUlzUHJpc3RpbmUgPSBmdW5jdGlvbiBjcmVhdGVJc1ByaXN0aW5lKF9yZWYpIHtcbiAgdmFyIGRlZXBFcXVhbCA9IF9yZWYuZGVlcEVxdWFsLFxuICAgICAgZW1wdHkgPSBfcmVmLmVtcHR5LFxuICAgICAgZ2V0SW4gPSBfcmVmLmdldEluO1xuICByZXR1cm4gZnVuY3Rpb24gKGZvcm0pIHtcbiAgICB2YXIgZ2V0Rm9ybVN0YXRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgIHJldHVybiBnZXRJbihzdGF0ZSwgJ2Zvcm0nKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgIHZhciBmb3JtU3RhdGUgPSBnZXRGb3JtU3RhdGUoc3RhdGUpO1xuICAgICAgdmFyIGluaXRpYWwgPSBnZXRJbihmb3JtU3RhdGUsIGZvcm0gKyAnLmluaXRpYWwnKSB8fCBlbXB0eTtcbiAgICAgIHZhciB2YWx1ZXMgPSBnZXRJbihmb3JtU3RhdGUsIGZvcm0gKyAnLnZhbHVlcycpIHx8IGluaXRpYWw7XG4gICAgICByZXR1cm4gZGVlcEVxdWFsKGluaXRpYWwsIHZhbHVlcyk7XG4gICAgfTtcbiAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZUlzUHJpc3RpbmU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4LWZvcm0vbGliL3NlbGVjdG9ycy9pc1ByaXN0aW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfaXNFcXVhbFdpdGgyID0gcmVxdWlyZSgnbG9kYXNoL2lzRXF1YWxXaXRoJyk7XG5cbnZhciBfaXNFcXVhbFdpdGgzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNFcXVhbFdpdGgyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGN1c3RvbWl6ZXIgPSBmdW5jdGlvbiBjdXN0b21pemVyKG9iamVjdFZhbHVlLCBvdGhlclZhbHVlLCBpbmRleE9ya2V5LCBvYmplY3QsIG90aGVyLCBzdGFjaykge1xuICAvLyBodHRwczovL2xvZGFzaC5jb20vZG9jcy80LjE3LjQjaXNFcXVhbFdpdGhcbiAgaWYgKHN0YWNrKSB7XG4gICAgLy8gU2hhbGxvdyBjb21wYXJlc1xuICAgIC8vIEZvciAxc3QgbGV2ZWwsIHN0YWNrID09PSB1bmRlZmluZWQuXG4gICAgLy8gICAtPiBEbyBub3RoaW5nIChhbmQgaW1wbGljaXRseSByZXR1cm4gdW5kZWZpbmVkIHNvIHRoYXQgaXQgZ29lcyB0byBjb21wYXJlIDJuZCBsZXZlbClcbiAgICAvLyBGb3IgMm5kIGxldmVsIGFuZCB1cCwgc3RhY2sgIT09IHVuZGVmaW5lZC5cbiAgICAvLyAgIC0+IENvbXBhcmUgYnkgPT09IG9wZXJhdG9yXG4gICAgcmV0dXJuIG9iamVjdFZhbHVlID09PSBvdGhlclZhbHVlO1xuICB9XG59O1xuXG52YXIgc2hhbGxvd0NvbXBhcmUgPSBmdW5jdGlvbiBzaGFsbG93Q29tcGFyZShpbnN0YW5jZSwgbmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgcmV0dXJuICEoMCwgX2lzRXF1YWxXaXRoMy5kZWZhdWx0KShpbnN0YW5jZS5wcm9wcywgbmV4dFByb3BzLCBjdXN0b21pemVyKSB8fCAhKDAsIF9pc0VxdWFsV2l0aDMuZGVmYXVsdCkoaW5zdGFuY2Uuc3RhdGUsIG5leHRTdGF0ZSwgY3VzdG9taXplcik7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBzaGFsbG93Q29tcGFyZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtZm9ybS9saWIvdXRpbC9zaGFsbG93Q29tcGFyZS5qc1xuLy8gbW9kdWxlIGlkID0gNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoMjEzKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1mZXRjaC9mZXRjaC1ucG0tbm9kZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDkyKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TeW1ib2wuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlLCBjb21iaW5lUmVkdWNlcnMsIEdlbmVyaWNTdG9yZUVuaGFuY2VyIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xyXG5pbXBvcnQgeyByb3V0ZXJSZWR1Y2VyIH0gZnJvbSAncmVhY3Qtcm91dGVyLXJlZHV4JztcclxuaW1wb3J0ICogYXMgU3RvcmUgZnJvbSAnLi9zdG9yZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25maWd1cmVTdG9yZShpbml0aWFsU3RhdGU/OiBTdG9yZS5BcHBsaWNhdGlvblN0YXRlKSB7XHJcbiAgICAvLyBCdWlsZCBtaWRkbGV3YXJlLiBUaGVzZSBhcmUgZnVuY3Rpb25zIHRoYXQgY2FuIHByb2Nlc3MgdGhlIGFjdGlvbnMgYmVmb3JlIHRoZXkgcmVhY2ggdGhlIHN0b3JlLlxyXG4gICAgY29uc3Qgd2luZG93SWZEZWZpbmVkID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogd2luZG93IGFzIGFueTtcclxuICAgIC8vIElmIGRldlRvb2xzIGlzIGluc3RhbGxlZCwgY29ubmVjdCB0byBpdFxyXG4gICAgY29uc3QgZGV2VG9vbHNFeHRlbnNpb24gPSB3aW5kb3dJZkRlZmluZWQgJiYgd2luZG93SWZEZWZpbmVkLmRldlRvb2xzRXh0ZW5zaW9uIGFzICgpID0+IEdlbmVyaWNTdG9yZUVuaGFuY2VyO1xyXG4gICAgY29uc3QgY3JlYXRlU3RvcmVXaXRoTWlkZGxld2FyZSA9IGNvbXBvc2UoXHJcbiAgICAgICAgYXBwbHlNaWRkbGV3YXJlKHRodW5rKSxcclxuICAgICAgICBkZXZUb29sc0V4dGVuc2lvbiA/IGRldlRvb2xzRXh0ZW5zaW9uKCkgOiBmID0+IGZcclxuICAgICkoY3JlYXRlU3RvcmUpO1xyXG5cclxuICAgIC8vIENvbWJpbmUgYWxsIHJlZHVjZXJzIGFuZCBpbnN0YW50aWF0ZSB0aGUgYXBwLXdpZGUgc3RvcmUgaW5zdGFuY2VcclxuICAgIGNvbnN0IGFsbFJlZHVjZXJzID0gYnVpbGRSb290UmVkdWNlcihTdG9yZS5yZWR1Y2Vycyk7XHJcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlV2l0aE1pZGRsZXdhcmUoYWxsUmVkdWNlcnMsIGluaXRpYWxTdGF0ZSkgYXMgUmVkdXguU3RvcmU8U3RvcmUuQXBwbGljYXRpb25TdGF0ZT47XHJcblxyXG4gICAgLy8gRW5hYmxlIFdlYnBhY2sgaG90IG1vZHVsZSByZXBsYWNlbWVudCBmb3IgcmVkdWNlcnNcclxuICAgIGlmIChtb2R1bGUuaG90KSB7XHJcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoJy4vc3RvcmUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5leHRSb290UmVkdWNlciA9IHJlcXVpcmU8dHlwZW9mIFN0b3JlPignLi9zdG9yZScpO1xyXG4gICAgICAgICAgICBzdG9yZS5yZXBsYWNlUmVkdWNlcihidWlsZFJvb3RSZWR1Y2VyKG5leHRSb290UmVkdWNlci5yZWR1Y2VycykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdG9yZTtcclxufVxyXG5cclxuZnVuY3Rpb24gYnVpbGRSb290UmVkdWNlcihhbGxSZWR1Y2Vycykge1xyXG4gICAgcmV0dXJuIGNvbWJpbmVSZWR1Y2VyczxTdG9yZS5BcHBsaWNhdGlvblN0YXRlPihPYmplY3QuYXNzaWduKHt9LCBhbGxSZWR1Y2VycywgeyByb3V0aW5nOiByb3V0ZXJSZWR1Y2VyIH0pKTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29uZmlndXJlU3RvcmUudHMiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJvdXRlciwgUm91dGUsIEhpc3RvcnlCYXNlIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnLi9jb250YWluZXJzL0xheW91dCc7XHJcbmltcG9ydCBIb21lIGZyb20gJy4vY29udGFpbmVycy9Ib21lJztcclxuaW1wb3J0IExvZ2luIGZyb20gJy4vY29udGFpbmVycy9Mb2dpbic7XHJcbmltcG9ydCBSZWdpc3RlciBmcm9tICcuL2NvbnRhaW5lcnMvUmVnaXN0ZXInO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IDxSb3V0ZSBjb21wb25lbnQ9eyBMYXlvdXQgfT5cclxuICAgIDxSb3V0ZSBwYXRoPScvJyBjb21wb25lbnRzPXt7IGJvZHk6IEhvbWUgfX0gLz5cclxuICAgIDxSb3V0ZSBwYXRoPScvbG9naW4nIGNvbXBvbmVudHM9e3sgYm9keTogTG9naW4gfX0gLz5cclxuICAgIDxSb3V0ZSBwYXRoPScvcmVnaXN0ZXInIGNvbXBvbmVudHM9e3sgYm9keTogUmVnaXN0ZXIgfX0gLz5cclxuPC9Sb3V0ZT47XHJcblxyXG4vLyBFbmFibGUgSG90IE1vZHVsZSBSZXBsYWNlbWVudCAoSE1SKVxyXG5pZiAobW9kdWxlLmhvdCkge1xyXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvcm91dGVzLnRzeCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDE0NCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2FzcG5ldC1wcmVyZW5kZXJpbmcvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgxNTApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vc2VydmVyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gODFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcclxuaW1wb3J0IHsgbWF0Y2gsIFJvdXRlckNvbnRleHQgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQgY3JlYXRlTWVtb3J5SGlzdG9yeSBmcm9tICdoaXN0b3J5L2xpYi9jcmVhdGVNZW1vcnlIaXN0b3J5JztcclxuaW1wb3J0IHsgY3JlYXRlU2VydmVyUmVuZGVyZXIsIFJlbmRlclJlc3VsdCB9IGZyb20gJ2FzcG5ldC1wcmVyZW5kZXJpbmcnO1xyXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJztcclxuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4vY29uZmlndXJlU3RvcmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2VydmVyUmVuZGVyZXIocGFyYW1zID0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxSZW5kZXJSZXN1bHQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAvLyBNYXRjaCB0aGUgaW5jb21pbmcgcmVxdWVzdCBhZ2FpbnN0IHRoZSBsaXN0IG9mIGNsaWVudC1zaWRlIHJvdXRlc1xyXG4gICAgICAgIGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoKTtcclxuICAgICAgICBtYXRjaCh7IHJvdXRlcywgbG9jYXRpb246IHBhcmFtcy5sb2NhdGlvbiB9LCAoZXJyb3IsIHJlZGlyZWN0TG9jYXRpb24sIHJlbmRlclByb3BzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gSWYgdGhlcmUncyBhIHJlZGlyZWN0aW9uLCBqdXN0IHNlbmQgdGhpcyBpbmZvcm1hdGlvbiBiYWNrIHRvIHRoZSBob3N0IGFwcGxpY2F0aW9uXHJcbiAgICAgICAgICAgIGlmIChyZWRpcmVjdExvY2F0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHsgcmVkaXJlY3RVcmw6IHJlZGlyZWN0TG9jYXRpb24ucGF0aG5hbWUgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIElmIGl0IGRpZG4ndCBtYXRjaCBhbnkgcm91dGUsIHJlbmRlclByb3BzIHdpbGwgYmUgdW5kZWZpbmVkXHJcbiAgICAgICAgICAgIGlmICghcmVuZGVyUHJvcHMpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGxvY2F0aW9uICckeyBwYXJhbXMudXJsIH0nIGRvZXNuJ3QgbWF0Y2ggYW55IHJvdXRlIGNvbmZpZ3VyZWQgaW4gcmVhY3Qtcm91dGVyLmApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBCdWlsZCBhbiBpbnN0YW5jZSBvZiB0aGUgYXBwbGljYXRpb25cclxuICAgICAgICAgICAgY29uc3QgYXBwID0gKFxyXG4gICAgICAgICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXsgc3RvcmUgfT5cclxuICAgICAgICAgICAgICAgICAgICA8Um91dGVyQ29udGV4dCB7Li4ucmVuZGVyUHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgLy8gUGVyZm9ybSBhbiBpbml0aWFsIHJlbmRlciB0aGF0IHdpbGwgY2F1c2UgYW55IGFzeW5jIHRhc2tzIChlLmcuLCBkYXRhIGFjY2VzcykgdG8gYmVnaW5cclxuICAgICAgICAgICAgcmVuZGVyVG9TdHJpbmcoYXBwKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIE9uY2UgdGhlIHRhc2tzIGFyZSBkb25lLCB3ZSBjYW4gcGVyZm9ybSB0aGUgZmluYWwgcmVuZGVyXHJcbiAgICAgICAgICAgIC8vIFdlIGFsc28gc2VuZCB0aGUgcmVkdXggc3RvcmUgc3RhdGUsIHNvIHRoZSBjbGllbnQgY2FuIGNvbnRpbnVlIGV4ZWN1dGlvbiB3aGVyZSB0aGUgc2VydmVyIGxlZnQgb2ZmXHJcbiAgICAgICAgICAgIHBhcmFtcy5kb21haW5UYXNrcy50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGh0bWw6IHJlbmRlclRvU3RyaW5nKGFwcCksXHJcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsczogeyBpbml0aWFsUmVkdXhTdGF0ZTogc3RvcmUuZ2V0U3RhdGUoKSB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSwgcmVqZWN0KTsgLy8gQWxzbyBwcm9wYWdhdGUgYW55IGVycm9ycyBiYWNrIGludG8gdGhlIGhvc3QgYXBwbGljYXRpb25cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAncmVkdXgtZm9ybSc7XG5pbXBvcnQgeyB2YWxpZGF0ZUZpZWxkIH0gZnJvbSAnLi4vaGVscGVycy9mb3JtVmFsaWRhdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0lucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgdW5kZWZpbmVkPntcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKXtcbiAgICAgICAgc3dpdGNoICh0aGlzLnByb3BzLnR5cGUpe1xuICAgICAgICAgICAgY2FzZSBcInRleHRcIjpcbiAgICAgICAgICAgIGNhc2UgXCJwYXNzd29yZFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlclRleHRJbnB1dCgpO1xuICAgICAgICAgICAgY2FzZSBcImNoZWNrYm94XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyQ2hlY2tib3hJbnB1dCgpO1xuICAgICAgICAgICAgY2FzZSBcInN1Ym1pdFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlclN1Ym1pdEJ1dHRvbklucHV0KCk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcmVuZGVyVGV4dElucHV0KCl7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9e3RoaXMucHJvcHMubmFtZX0gY29tcG9uZW50PXt0aGlzLnJlbmRlckZpZWxkfSB0eXBlPXt0aGlzLnByb3BzLnR5cGV9IFxuICAgICAgICAgICAgICAgIGxhYmVsPXt0aGlzLnByb3BzLmxhYmVsfSBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5sYWJlbH0gdmFsaWRhdGU9e3RoaXMudmFsaWRhdGUodGhpcy5wcm9wcy5uYW1lKX0gLz5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbmRlckNoZWNrYm94SW5wdXQoKXtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIiBodG1sRm9yPXt0aGlzLnByb3BzLm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT17dGhpcy5wcm9wcy5uYW1lfSBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCIgY29tcG9uZW50PVwiaW5wdXRcIiB0eXBlPVwiY2hlY2tib3hcIiAvPiB7dGhpcy5wcm9wcy5sYWJlbH1cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW5kZXJTdWJtaXRCdXR0b25JbnB1dCgpe1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdmFsdWU9e3RoaXMucHJvcHMubGFiZWx9IFxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfSAvPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVuZGVyRmllbGQocHJvcHMpe1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPntwcm9wcy5sYWJlbH08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB7Li4ucHJvcHMuaW5wdXR9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPXtwcm9wcy5sYWJlbH0gdHlwZT17cHJvcHMudHlwZX0gLz5cbiAgICAgICAgICAgICAgICB7cHJvcHMubWV0YS50b3VjaGVkICYmIChwcm9wcy5tZXRhLmVycm9yICYmIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyIGhhcy1lcnJvclwiPntwcm9wcy5tZXRhLmVycm9yfTwvc3Bhbj4pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7IFxuICAgIH1cblxuICAgIHByaXZhdGUgdmFsaWRhdGUoZmllbGQpe1xuICAgICAgICByZXR1cm4gKHZhbHVlLCBhbGxWYWx1ZXMpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2YWxpZGF0ZUZpZWxkKHRoaXMucHJvcHMubmFtZSwgdmFsdWUsIGFsbFZhbHVlcyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvSW5wdXQudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYnJvd3Nlckhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHsgcmVkdXhGb3JtIH0gZnJvbSAncmVkdXgtZm9ybSc7XG5pbXBvcnQgRm9ybSBmcm9tICcuL0Zvcm0nO1xuXG5jbGFzcyBMb2dpbkZvcm0gZXh0ZW5kcyBGb3JtIHtcblxuICAgIHByb3RlY3RlZCByZW5kZXJGb3JtQ29udGVudCgpe1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7dGhpcy5DcmVhdGVJbnB1dChcImVtYWlsXCIsIFwidGV4dFwiLCBcIkVtYWlsXCIpfVxuICAgICAgICAgICAgICAgIHt0aGlzLkNyZWF0ZUlucHV0KFwicGFzc3dvcmRcIiwgXCJwYXNzd29yZFwiLCBcIlNlbmhhXCIpfVxuICAgICAgICAgICAgICAgIHt0aGlzLkNyZWF0ZUlucHV0KFwicmVtZW1iZXJcIiwgXCJjaGVja2JveFwiLCBcIkxlbWJyYXIgZGUgbWltXCIpfVxuICAgICAgICAgICAgICAgIHt0aGlzLkNyZWF0ZVN1Ym1pdEJ1dHRvbihcIkVudHJhclwiKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhc3luYyBvblN1Ym1pdCh2YWx1ZXMpe1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zdWJtaXRGb3JtKFwiYWNjb3VudC9hdXRoZW50aWNhdGVcIiwgdmFsdWVzKTsgIFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdXhGb3JtKHtcbiAgICBmb3JtOiAnbG9naW4nLFxuICAgIGZpZWxkczogWydlbWFpbCcsICdwYXNzd29yZCcsICdyZW1lbWJlciddLFxuICAgIG9uU3VibWl0U3VjY2VzczogKHJlc3VsdCwgZGlzcGF0Y2gsIHByb3BzKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6IFwiTE9HSU5cIixcbiAgICAgICAgICAgIHVzZXI6IHJlc3VsdFtcInVzZXJcIl1cbiAgICAgICAgfSk7XG4gICAgICAgIGJyb3dzZXJIaXN0b3J5LnB1c2gocmVzdWx0W1wicmVkaXJlY3RVcmxcIl0pO1xuICAgIH1cbn0pKExvZ2luRm9ybSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9Mb2dpbkZvcm0udHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBOYXZNZW51IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgdm9pZD4ge1xyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J21haW4tbmF2Jz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZiYXIgbmF2YmFyLWludmVyc2UnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdmJhci1oZWFkZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzc05hbWU9J25hdmJhci10b2dnbGUnIGRhdGEtdG9nZ2xlPSdjb2xsYXBzZScgZGF0YS10YXJnZXQ9Jy5uYXZiYXItY29sbGFwc2UnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NyLW9ubHknPlRvZ2dsZSBuYXZpZ2F0aW9uPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ljb24tYmFyJz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naWNvbi1iYXInPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpY29uLWJhcic+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT0nbmF2YmFyLWJyYW5kJyB0bz17ICcvJyB9PlNJU0VWPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2xlYXJmaXgnPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdmJhci1jb2xsYXBzZSBjb2xsYXBzZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nbmF2IG5hdmJhci1uYXYnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17ICcvJyB9IGFjdGl2ZUNsYXNzTmFtZT0nYWN0aXZlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2dseXBoaWNvbiBnbHlwaGljb24taG9tZSc+PC9zcGFuPiBIb21lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvTmF2TWVudS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyByZWR1eEZvcm0gfSBmcm9tICdyZWR1eC1mb3JtJztcbmltcG9ydCBGb3JtIGZyb20gJy4vRm9ybSc7XG5cbmNsYXNzIFJlZ2lzdGVyRm9ybSBleHRlbmRzIEZvcm0ge1xuXG4gICAgcHJvdGVjdGVkIHJlbmRlckZvcm1Db250ZW50KCl7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHt0aGlzLkNyZWF0ZUlucHV0KFwiZmlyc3ROYW1lXCIsIFwidGV4dFwiLCBcIk5vbWVcIil9XG4gICAgICAgICAgICAgICAge3RoaXMuQ3JlYXRlSW5wdXQoXCJsYXN0TmFtZVwiLCBcInRleHRcIiwgXCJTb2JyZW5vbWVcIil9XG4gICAgICAgICAgICAgICAge3RoaXMuQ3JlYXRlSW5wdXQoXCJlbWFpbFwiLCBcInRleHRcIiwgXCJFbWFpbFwiKX1cbiAgICAgICAgICAgICAgICB7dGhpcy5DcmVhdGVJbnB1dChcImNwZlwiLCBcInRleHRcIiwgXCJDUEZcIil9XG4gICAgICAgICAgICAgICAge3RoaXMuQ3JlYXRlSW5wdXQoXCJkZXBhcnRtZW50XCIsIFwidGV4dFwiLCBcIkRlcGFydGFtZW50b1wiKX1cbiAgICAgICAgICAgICAgICB7dGhpcy5DcmVhdGVJbnB1dChcInBhc3N3b3JkXCIsIFwicGFzc3dvcmRcIiwgXCJTZW5oYVwiKX1cbiAgICAgICAgICAgICAgICB7dGhpcy5DcmVhdGVJbnB1dChcInBhc3N3b3JkQ29uZmlybVwiLCBcInBhc3N3b3JkXCIsIFwiQ29uZmlybWFyIHNlbmhhXCIpfVxuICAgICAgICAgICAgICAgIHt0aGlzLkNyZWF0ZVN1Ym1pdEJ1dHRvbihcIlJlZ2lzdHJhclwiKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhc3luYyBvblN1Ym1pdCh2YWx1ZXMpe1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zdWJtaXRGb3JtKFwiYWNjb3VudC9yZWdpc3RlclwiLCB2YWx1ZXMpOyAgXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZWR1eEZvcm0oe1xuICAgIGZvcm06ICdyZWdpc3RlcicsXG4gICAgZmllbGRzOiBbJ2ZpcnN0TmFtZScsICdsYXN0TmFtZScsICdlbWFpbCcsICdkZXBhcnRtZW50JywgJ3Bhc3N3b3JkJ10sXG4gICAgb25TdWJtaXRTdWNjZXNzOiAocmVzdWx0LCBkaXNwYXRjaCwgcHJvcHMpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogXCJMT0dJTlwiLFxuICAgICAgICAgICAgdXNlcjogcmVzdWx0W1widXNlclwiXVxuICAgICAgICB9KTtcbiAgICAgICAgYnJvd3Nlckhpc3RvcnkucHVzaChyZXN1bHRbXCJyZWRpcmVjdFVybFwiXSk7XG4gICAgfVxufSkoUmVnaXN0ZXJGb3JtKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL3JlZ2lzdGVyRm9ybS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSB9ICBmcm9tICcuLi9zdG9yZSc7XG5pbXBvcnQgKiBhcyBBcHBTdG9yZSBmcm9tICcuLi9zdG9yZS9BcHAnO1xuaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tICcuLi9jb21wb25lbnRzL0FwcCc7XG5pbXBvcnQgTG9naW4gZnJvbSAnLi9Mb2dpbic7XG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8QXBwUHJvcHMsIHVuZGVmaW5lZD57XG5cbiAgICBwdWJsaWMgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMj5TaXNldjwvaDI+XG4gICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICAgICAgPExvZ2luIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gICAgKHN0YXRlOiBBcHBsaWNhdGlvblN0YXRlKSA9PiBzdGF0ZS5hcHAsXG4gICAgQXBwU3RvcmUuYWN0aW9uQ3JlYXRvcnNcbikoSG9tZSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29udGFpbmVycy9Ib21lLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTmF2TWVudSB9IGZyb20gJy4uL2NvbXBvbmVudHMvTmF2TWVudSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExheW91dFByb3BzIHtcclxuICAgIGJvZHk6IFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PExheW91dFByb3BzLCB2b2lkPiB7XHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyLWZsdWlkJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXNtLTMnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZNZW51IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtc20tOSc+XHJcbiAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLmJvZHkgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29udGFpbmVycy9MYXlvdXQudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlZ2lzdGVyRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL3JlZ2lzdGVyRm9ybSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZ2lzdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgdW5kZWZpbmVkPntcblxuICAgIHB1YmxpYyByZW5kZXIoKXtcbiAgICAgICAgICAgIHJldHVybiAoPGRpdj5cbiAgICAgICAgICAgICAgICA8aDI+Q2FkYXN0cm88L2gyPlxuICAgICAgICAgICAgICAgIDxoND5DcmllIHVtIG5vdm8gdXN1w6FyaW8uPC9oND5cbiAgICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgICAgICA8UmVnaXN0ZXJGb3JtIC8+XG4gICAgICAgICAgICA8L2Rpdj4pOyBcbiAgICB9XG59XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbnRhaW5lcnMvUmVnaXN0ZXIudHN4IiwiY29uc3QgdmFsaWRhdGVOYW1lID0gbmFtZSA9PiB7XG4gICAgaWYgKCFuYW1lKVxuICAgICAgICByZXR1cm4gXCJDYW1wbyBvYnJpZ2F0w7NyaW9cIjtcbiAgICBpZiAobmFtZS5sZW5ndGggPCA0KVxuICAgICAgICByZXR1cm4gXCJNdWl0byBjdXJ0b1wiO1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmNvbnN0IHZhbGlkYXRlTm90RW1wdHkgPSB0ZXh0ID0+IHtcbiAgICBpZiAoIXRleHQpXG4gICAgICAgIHJldHVybiBcIkNhbXBvIG9icmlnYXTDs3Jpb1wiO1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmNvbnN0IHZhbGlkYXRlRW1haWwgPSBlbWFpbCA9PiB7XG4gICAgaWYgKCFlbWFpbClcbiAgICAgICAgcmV0dXJuIFwiQ2FtcG8gb2JyaWdhdMOzcmlvXCI7XG4gICAgaWYgKCEvXltBLVowLTkuXyUrLV0rQFtBLVowLTkuLV0rXFwuW0EtWl17Miw0fSQvaS50ZXN0KGVtYWlsKSlcbiAgICAgICAgcmV0dXJuIFwiRW1haWwgaW52w6FsaWRvXCI7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuY29uc3QgdmFsaWRhdGVEZXBhcnRtZW50ID0gZGVwYXJ0bWVudCA9PiB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuY29uc3QgdmFsaWRhdGVQYXNzd29yZCA9IChwYXNzd29yZCkgPT4ge1xuICAgIGlmICghcGFzc3dvcmQpXG4gICAgICAgIHJldHVybiBcIkNhbXBvIG9icmlnYXTDs3Jpb1wiO1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmNvbnN0IHZhbGlkYXRlUGFzc3dvcmRDb25maXJtID0gKHZhbHVlcykgPT4ge1xuICAgIGlmICh2YWx1ZXNbXCJwYXNzd29yZFwiXSAhPSB2YWx1ZXNbXCJwYXNzd29yZENvbmZpcm1cIl0pXG4gICAgICAgIHJldHVybiBcIkNvbmZpcm1hw6fDo28gZGlmZXJlbnRlIGRhIHNlbmhhXCI7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDsgXG59XG5cbmNvbnN0IHZhbGlkYXRlR2xvYmFsID0gZ2xvYmFsID0+IHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5jb25zdCB2YWxpZGF0aW9uRnVuY3MgPSB7XG4gICAgXCJlbWFpbFwiOiB2YWxpZGF0ZUVtYWlsLFxuICAgIFwibmFtZVwiOiB2YWxpZGF0ZU5hbWUsXG4gICAgXCJmaXJzdE5hbWVcIjogdmFsaWRhdGVOYW1lLFxuICAgIFwibGFzdE5hbWVcIjogdmFsaWRhdGVOYW1lLFxuICAgIFwiZGVwYXJ0bWVudFwiOiB2YWxpZGF0ZURlcGFydG1lbnQsXG4gICAgXCJwYXNzd29yZFwiOiB2YWxpZGF0ZVBhc3N3b3JkLFxuICAgIFwicGFzc3dvcmRDb25maXJtXCI6IHZhbGlkYXRlUGFzc3dvcmRDb25maXJtLFxuICAgIFwidXNlcm5hbWVcIjogdmFsaWRhdGVOb3RFbXB0eSxcbiAgICBcImdsb2JhbFwiOiB2YWxpZGF0ZUdsb2JhbCxcbiAgICBcInJlbWVtYmVyXCI6IHZhbGlkYXRlR2xvYmFsLFxuICAgIFwiY3BmXCI6IHZhbGlkYXRlR2xvYmFsXG59XG5cbmV4cG9ydCBjb25zdCB2YWxpZGF0ZUZpZWxkID0gKGZpZWxkLCB2YWx1ZSwgYWxsVmFsdWVzKSA9PiB7XG4gICAgaWYgKGZpZWxkID09IFwicGFzc3dvcmRDb25maXJtXCIpXG4gICAgICAgIHJldHVybiB2YWxpZGF0aW9uRnVuY3NbZmllbGRdKGFsbFZhbHVlcyk7XG4gICAgcmV0dXJuIHZhbGlkYXRpb25GdW5jc1tmaWVsZF0odmFsdWUpO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9oZWxwZXJzL2Zvcm1WYWxpZGF0aW9uLnRzeCIsImltcG9ydCB7IHJlZHVjZXIgYXMgcmVkdXhGb3JtUmVkdWNlciB9IGZyb20gJ3JlZHV4LWZvcm0nO1xyXG5pbXBvcnQgKiBhcyBBcHAgZnJvbSAnLi9BcHAnO1xyXG5cclxuXHJcbi8vIFRoZSB0b3AtbGV2ZWwgc3RhdGUgb2JqZWN0XHJcbmV4cG9ydCBpbnRlcmZhY2UgQXBwbGljYXRpb25TdGF0ZSB7XHJcbiAgICBhcHA6IEFwcC5BcHBTdGF0ZVxyXG59XHJcblxyXG4vLyBXaGVuZXZlciBhbiBhY3Rpb24gaXMgZGlzcGF0Y2hlZCwgUmVkdXggd2lsbCB1cGRhdGUgZWFjaCB0b3AtbGV2ZWwgYXBwbGljYXRpb24gc3RhdGUgcHJvcGVydHkgdXNpbmdcclxuLy8gdGhlIHJlZHVjZXIgd2l0aCB0aGUgbWF0Y2hpbmcgbmFtZS4gSXQncyBpbXBvcnRhbnQgdGhhdCB0aGUgbmFtZXMgbWF0Y2ggZXhhY3RseSwgYW5kIHRoYXQgdGhlIHJlZHVjZXJcclxuLy8gYWN0cyBvbiB0aGUgY29ycmVzcG9uZGluZyBBcHBsaWNhdGlvblN0YXRlIHByb3BlcnR5IHR5cGUuXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VycyA9IHtcclxuICAgIGFwcDogQXBwLnJlZHVjZXIsXHJcbiAgICBmb3JtOiByZWR1eEZvcm1SZWR1Y2VyXHJcbn07XHJcblxyXG4vLyBUaGlzIHR5cGUgY2FuIGJlIHVzZWQgYXMgYSBoaW50IG9uIGFjdGlvbiBjcmVhdG9ycyBzbyB0aGF0IGl0cyAnZGlzcGF0Y2gnIGFuZCAnZ2V0U3RhdGUnIHBhcmFtcyBhcmVcclxuLy8gY29ycmVjdGx5IHR5cGVkIHRvIG1hdGNoIHlvdXIgc3RvcmUuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXBwVGh1bmtBY3Rpb248VEFjdGlvbj4ge1xyXG4gICAgKGRpc3BhdGNoOiAoYWN0aW9uOiBUQWN0aW9uKSA9PiB2b2lkLCBnZXRTdGF0ZTogKCkgPT4gQXBwbGljYXRpb25TdGF0ZSk6IHZvaWQ7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL3N0b3JlL2luZGV4LnRzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRhYmxlQnVpbHRpbihjbHMpIHtcbiAgZnVuY3Rpb24gRXh0ZW5kYWJsZUJ1aWx0aW4oKSB7XG4gICAgY2xzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBFeHRlbmRhYmxlQnVpbHRpbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKGNscy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IGNscyxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoRXh0ZW5kYWJsZUJ1aWx0aW4sIGNscyk7XG4gIH0gZWxzZSB7XG4gICAgRXh0ZW5kYWJsZUJ1aWx0aW4uX19wcm90b19fID0gY2xzO1xuICB9XG5cbiAgcmV0dXJuIEV4dGVuZGFibGVCdWlsdGluO1xufVxuXG52YXIgRXh0ZW5kYWJsZUVycm9yID0gZnVuY3Rpb24gKF9leHRlbmRhYmxlQnVpbHRpbjIpIHtcbiAgX2luaGVyaXRzKEV4dGVuZGFibGVFcnJvciwgX2V4dGVuZGFibGVCdWlsdGluMik7XG5cbiAgZnVuY3Rpb24gRXh0ZW5kYWJsZUVycm9yKCkge1xuICAgIHZhciBtZXNzYWdlID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAnJztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFeHRlbmRhYmxlRXJyb3IpO1xuXG4gICAgLy8gZXh0ZW5kaW5nIEVycm9yIGlzIHdlaXJkIGFuZCBkb2VzIG5vdCBwcm9wYWdhdGUgYG1lc3NhZ2VgXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEV4dGVuZGFibGVFcnJvci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEV4dGVuZGFibGVFcnJvcikpLmNhbGwodGhpcywgbWVzc2FnZSkpO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KF90aGlzLCAnbWVzc2FnZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IG1lc3NhZ2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KF90aGlzLCAnbmFtZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IF90aGlzLmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuXG4gICAgaWYgKEVycm9yLmhhc093blByb3BlcnR5KCdjYXB0dXJlU3RhY2tUcmFjZScpKSB7XG4gICAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZShfdGhpcywgX3RoaXMuY29uc3RydWN0b3IpO1xuICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzKTtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoX3RoaXMsICdzdGFjaycsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IG5ldyBFcnJvcihtZXNzYWdlKS5zdGFjayxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgcmV0dXJuIEV4dGVuZGFibGVFcnJvcjtcbn0oX2V4dGVuZGFibGVCdWlsdGluKEVycm9yKSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEV4dGVuZGFibGVFcnJvcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzNi1lcnJvci9saWIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgRGF0YVZpZXcgPSBnZXROYXRpdmUocm9vdCwgJ0RhdGFWaWV3Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGF0YVZpZXc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19EYXRhVmlldy5qc1xuLy8gbW9kdWxlIGlkID0gOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGhhc2hDbGVhciA9IHJlcXVpcmUoJy4vX2hhc2hDbGVhcicpLFxuICAgIGhhc2hEZWxldGUgPSByZXF1aXJlKCcuL19oYXNoRGVsZXRlJyksXG4gICAgaGFzaEdldCA9IHJlcXVpcmUoJy4vX2hhc2hHZXQnKSxcbiAgICBoYXNoSGFzID0gcmVxdWlyZSgnLi9faGFzaEhhcycpLFxuICAgIGhhc2hTZXQgPSByZXF1aXJlKCcuL19oYXNoU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhhc2ggb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBIYXNoKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYEhhc2hgLlxuSGFzaC5wcm90b3R5cGUuY2xlYXIgPSBoYXNoQ2xlYXI7XG5IYXNoLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBoYXNoRGVsZXRlO1xuSGFzaC5wcm90b3R5cGUuZ2V0ID0gaGFzaEdldDtcbkhhc2gucHJvdG90eXBlLmhhcyA9IGhhc2hIYXM7XG5IYXNoLnByb3RvdHlwZS5zZXQgPSBoYXNoU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhhc2g7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19IYXNoLmpzXG4vLyBtb2R1bGUgaWQgPSA5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFByb21pc2UgPSBnZXROYXRpdmUocm9vdCwgJ1Byb21pc2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fUHJvbWlzZS5qc1xuLy8gbW9kdWxlIGlkID0gOTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBTZXQgPSBnZXROYXRpdmUocm9vdCwgJ1NldCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX1NldC5qc1xuLy8gbW9kdWxlIGlkID0gOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIE1hcENhY2hlID0gcmVxdWlyZSgnLi9fTWFwQ2FjaGUnKSxcbiAgICBzZXRDYWNoZUFkZCA9IHJlcXVpcmUoJy4vX3NldENhY2hlQWRkJyksXG4gICAgc2V0Q2FjaGVIYXMgPSByZXF1aXJlKCcuL19zZXRDYWNoZUhhcycpO1xuXG4vKipcbiAqXG4gKiBDcmVhdGVzIGFuIGFycmF5IGNhY2hlIG9iamVjdCB0byBzdG9yZSB1bmlxdWUgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFt2YWx1ZXNdIFRoZSB2YWx1ZXMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFNldENhY2hlKHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcyA9PSBudWxsID8gMCA6IHZhbHVlcy5sZW5ndGg7XG5cbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB0aGlzLmFkZCh2YWx1ZXNbaW5kZXhdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgU2V0Q2FjaGVgLlxuU2V0Q2FjaGUucHJvdG90eXBlLmFkZCA9IFNldENhY2hlLnByb3RvdHlwZS5wdXNoID0gc2V0Q2FjaGVBZGQ7XG5TZXRDYWNoZS5wcm90b3R5cGUuaGFzID0gc2V0Q2FjaGVIYXM7XG5cbm1vZHVsZS5leHBvcnRzID0gU2V0Q2FjaGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19TZXRDYWNoZS5qc1xuLy8gbW9kdWxlIGlkID0gOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBXZWFrTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdXZWFrTWFwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gV2Vha01hcDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX1dlYWtNYXAuanNcbi8vIG1vZHVsZSBpZCA9IDk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQSBmYXN0ZXIgYWx0ZXJuYXRpdmUgdG8gYEZ1bmN0aW9uI2FwcGx5YCwgdGhpcyBmdW5jdGlvbiBpbnZva2VzIGBmdW5jYFxuICogd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgb2YgYHRoaXNBcmdgIGFuZCB0aGUgYXJndW1lbnRzIG9mIGBhcmdzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gaW52b2tlLlxuICogQHBhcmFtIHsqfSB0aGlzQXJnIFRoZSBgdGhpc2AgYmluZGluZyBvZiBgZnVuY2AuXG4gKiBAcGFyYW0ge0FycmF5fSBhcmdzIFRoZSBhcmd1bWVudHMgdG8gaW52b2tlIGBmdW5jYCB3aXRoLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHJlc3VsdCBvZiBgZnVuY2AuXG4gKi9cbmZ1bmN0aW9uIGFwcGx5KGZ1bmMsIHRoaXNBcmcsIGFyZ3MpIHtcbiAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgIGNhc2UgMDogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnKTtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgfVxuICByZXR1cm4gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcHBseTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2FwcGx5LmpzXG4vLyBtb2R1bGUgaWQgPSA5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5maWx0ZXJgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBmaWx0ZXJlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlGaWx0ZXIoYXJyYXksIHByZWRpY2F0ZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzSW5kZXggPSAwLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF07XG4gICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmVzdWx0W3Jlc0luZGV4KytdID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlGaWx0ZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19hcnJheUZpbHRlci5qc1xuLy8gbW9kdWxlIGlkID0gMTAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQXBwZW5kcyB0aGUgZWxlbWVudHMgb2YgYHZhbHVlc2AgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlcyBUaGUgdmFsdWVzIHRvIGFwcGVuZC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheVB1c2goYXJyYXksIHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcy5sZW5ndGgsXG4gICAgICBvZmZzZXQgPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtvZmZzZXQgKyBpbmRleF0gPSB2YWx1ZXNbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVB1c2g7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19hcnJheVB1c2guanNcbi8vIG1vZHVsZSBpZCA9IDEwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5zb21lYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWVcbiAqIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFueSBlbGVtZW50IHBhc3NlcyB0aGUgcHJlZGljYXRlIGNoZWNrLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlTb21lKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5U29tZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2FycmF5U29tZS5qc1xuLy8gbW9kdWxlIGlkID0gMTAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlQXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19iYXNlQXNzaWduVmFsdWUnKSxcbiAgICBlcSA9IHJlcXVpcmUoJy4vZXEnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBc3NpZ25zIGB2YWx1ZWAgdG8gYGtleWAgb2YgYG9iamVjdGAgaWYgdGhlIGV4aXN0aW5nIHZhbHVlIGlzIG5vdCBlcXVpdmFsZW50XG4gKiB1c2luZyBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogZm9yIGVxdWFsaXR5IGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XTtcbiAgaWYgKCEoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYgZXEob2JqVmFsdWUsIHZhbHVlKSkgfHxcbiAgICAgICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmICEoa2V5IGluIG9iamVjdCkpKSB7XG4gICAgYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3NpZ25WYWx1ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Fzc2lnblZhbHVlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RDcmVhdGUgPSBPYmplY3QuY3JlYXRlO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmNyZWF0ZWAgd2l0aG91dCBzdXBwb3J0IGZvciBhc3NpZ25pbmdcbiAqIHByb3BlcnRpZXMgdG8gdGhlIGNyZWF0ZWQgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvdG8gVGhlIG9iamVjdCB0byBpbmhlcml0IGZyb20uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBuZXcgb2JqZWN0LlxuICovXG52YXIgYmFzZUNyZWF0ZSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gb2JqZWN0KCkge31cbiAgcmV0dXJuIGZ1bmN0aW9uKHByb3RvKSB7XG4gICAgaWYgKCFpc09iamVjdChwcm90bykpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgaWYgKG9iamVjdENyZWF0ZSkge1xuICAgICAgcmV0dXJuIG9iamVjdENyZWF0ZShwcm90byk7XG4gICAgfVxuICAgIG9iamVjdC5wcm90b3R5cGUgPSBwcm90bztcbiAgICB2YXIgcmVzdWx0ID0gbmV3IG9iamVjdDtcbiAgICBvYmplY3QucHJvdG90eXBlID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VDcmVhdGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlQ3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VGb3IgPSByZXF1aXJlKCcuL19iYXNlRm9yJyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmZvck93bmAgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VGb3JPd24ob2JqZWN0LCBpdGVyYXRlZSkge1xuICByZXR1cm4gb2JqZWN0ICYmIGJhc2VGb3Iob2JqZWN0LCBpdGVyYXRlZSwga2V5cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUZvck93bjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VGb3JPd24uanNcbi8vIG1vZHVsZSBpZCA9IDEwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXJyYXlQdXNoID0gcmVxdWlyZSgnLi9fYXJyYXlQdXNoJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRBbGxLZXlzYCBhbmQgYGdldEFsbEtleXNJbmAgd2hpY2ggdXNlc1xuICogYGtleXNGdW5jYCBhbmQgYHN5bWJvbHNGdW5jYCB0byBnZXQgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kXG4gKiBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXlzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBrZXlzIG9mIGBvYmplY3RgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3ltYm9sc0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5c0Z1bmMsIHN5bWJvbHNGdW5jKSB7XG4gIHZhciByZXN1bHQgPSBrZXlzRnVuYyhvYmplY3QpO1xuICByZXR1cm4gaXNBcnJheShvYmplY3QpID8gcmVzdWx0IDogYXJyYXlQdXNoKHJlc3VsdCwgc3ltYm9sc0Z1bmMob2JqZWN0KSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldEFsbEtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlR2V0QWxsS2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMTA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaGFzSW5gIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVlcCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30ga2V5IFRoZSBrZXkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VIYXNJbihvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ICE9IG51bGwgJiYga2V5IGluIE9iamVjdChvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VIYXNJbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VIYXNJbi5qc1xuLy8gbW9kdWxlIGlkID0gMTA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNBcmd1bWVudHNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqL1xuZnVuY3Rpb24gYmFzZUlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IGFyZ3NUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzQXJndW1lbnRzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUlzQXJndW1lbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFN0YWNrID0gcmVxdWlyZSgnLi9fU3RhY2snKSxcbiAgICBlcXVhbEFycmF5cyA9IHJlcXVpcmUoJy4vX2VxdWFsQXJyYXlzJyksXG4gICAgZXF1YWxCeVRhZyA9IHJlcXVpcmUoJy4vX2VxdWFsQnlUYWcnKSxcbiAgICBlcXVhbE9iamVjdHMgPSByZXF1aXJlKCcuL19lcXVhbE9iamVjdHMnKSxcbiAgICBnZXRUYWcgPSByZXF1aXJlKCcuL19nZXRUYWcnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9pc1R5cGVkQXJyYXknKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsYCBmb3IgYXJyYXlzIGFuZCBvYmplY3RzIHdoaWNoIHBlcmZvcm1zXG4gKiBkZWVwIGNvbXBhcmlzb25zIGFuZCB0cmFja3MgdHJhdmVyc2VkIG9iamVjdHMgZW5hYmxpbmcgb2JqZWN0cyB3aXRoIGNpcmN1bGFyXG4gKiByZWZlcmVuY2VzIHRvIGJlIGNvbXBhcmVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvdGhlciBUaGUgb3RoZXIgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNFcXVhbERlZXAob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgb2JqSXNBcnIgPSBpc0FycmF5KG9iamVjdCksXG4gICAgICBvdGhJc0FyciA9IGlzQXJyYXkob3RoZXIpLFxuICAgICAgb2JqVGFnID0gb2JqSXNBcnIgPyBhcnJheVRhZyA6IGdldFRhZyhvYmplY3QpLFxuICAgICAgb3RoVGFnID0gb3RoSXNBcnIgPyBhcnJheVRhZyA6IGdldFRhZyhvdGhlcik7XG5cbiAgb2JqVGFnID0gb2JqVGFnID09IGFyZ3NUYWcgPyBvYmplY3RUYWcgOiBvYmpUYWc7XG4gIG90aFRhZyA9IG90aFRhZyA9PSBhcmdzVGFnID8gb2JqZWN0VGFnIDogb3RoVGFnO1xuXG4gIHZhciBvYmpJc09iaiA9IG9ialRhZyA9PSBvYmplY3RUYWcsXG4gICAgICBvdGhJc09iaiA9IG90aFRhZyA9PSBvYmplY3RUYWcsXG4gICAgICBpc1NhbWVUYWcgPSBvYmpUYWcgPT0gb3RoVGFnO1xuXG4gIGlmIChpc1NhbWVUYWcgJiYgaXNCdWZmZXIob2JqZWN0KSkge1xuICAgIGlmICghaXNCdWZmZXIob3RoZXIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIG9iaklzQXJyID0gdHJ1ZTtcbiAgICBvYmpJc09iaiA9IGZhbHNlO1xuICB9XG4gIGlmIChpc1NhbWVUYWcgJiYgIW9iaklzT2JqKSB7XG4gICAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgICByZXR1cm4gKG9iaklzQXJyIHx8IGlzVHlwZWRBcnJheShvYmplY3QpKVxuICAgICAgPyBlcXVhbEFycmF5cyhvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKVxuICAgICAgOiBlcXVhbEJ5VGFnKG9iamVjdCwgb3RoZXIsIG9ialRhZywgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjayk7XG4gIH1cbiAgaWYgKCEoYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHKSkge1xuICAgIHZhciBvYmpJc1dyYXBwZWQgPSBvYmpJc09iaiAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgJ19fd3JhcHBlZF9fJyksXG4gICAgICAgIG90aElzV3JhcHBlZCA9IG90aElzT2JqICYmIGhhc093blByb3BlcnR5LmNhbGwob3RoZXIsICdfX3dyYXBwZWRfXycpO1xuXG4gICAgaWYgKG9iaklzV3JhcHBlZCB8fCBvdGhJc1dyYXBwZWQpIHtcbiAgICAgIHZhciBvYmpVbndyYXBwZWQgPSBvYmpJc1dyYXBwZWQgPyBvYmplY3QudmFsdWUoKSA6IG9iamVjdCxcbiAgICAgICAgICBvdGhVbndyYXBwZWQgPSBvdGhJc1dyYXBwZWQgPyBvdGhlci52YWx1ZSgpIDogb3RoZXI7XG5cbiAgICAgIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gICAgICByZXR1cm4gZXF1YWxGdW5jKG9ialVud3JhcHBlZCwgb3RoVW53cmFwcGVkLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjayk7XG4gICAgfVxuICB9XG4gIGlmICghaXNTYW1lVGFnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gIHJldHVybiBlcXVhbE9iamVjdHMob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjayk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzRXF1YWxEZWVwO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUlzRXF1YWxEZWVwLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFN0YWNrID0gcmVxdWlyZSgnLi9fU3RhY2snKSxcbiAgICBiYXNlSXNFcXVhbCA9IHJlcXVpcmUoJy4vX2Jhc2VJc0VxdWFsJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMSxcbiAgICBDT01QQVJFX1VOT1JERVJFRF9GTEFHID0gMjtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc01hdGNoYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IG9mIHByb3BlcnR5IHZhbHVlcyB0byBtYXRjaC5cbiAqIEBwYXJhbSB7QXJyYXl9IG1hdGNoRGF0YSBUaGUgcHJvcGVydHkgbmFtZXMsIHZhbHVlcywgYW5kIGNvbXBhcmUgZmxhZ3MgdG8gbWF0Y2guXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgb2JqZWN0YCBpcyBhIG1hdGNoLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc01hdGNoKG9iamVjdCwgc291cmNlLCBtYXRjaERhdGEsIGN1c3RvbWl6ZXIpIHtcbiAgdmFyIGluZGV4ID0gbWF0Y2hEYXRhLmxlbmd0aCxcbiAgICAgIGxlbmd0aCA9IGluZGV4LFxuICAgICAgbm9DdXN0b21pemVyID0gIWN1c3RvbWl6ZXI7XG5cbiAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuICFsZW5ndGg7XG4gIH1cbiAgb2JqZWN0ID0gT2JqZWN0KG9iamVjdCk7XG4gIHdoaWxlIChpbmRleC0tKSB7XG4gICAgdmFyIGRhdGEgPSBtYXRjaERhdGFbaW5kZXhdO1xuICAgIGlmICgobm9DdXN0b21pemVyICYmIGRhdGFbMl0pXG4gICAgICAgICAgPyBkYXRhWzFdICE9PSBvYmplY3RbZGF0YVswXV1cbiAgICAgICAgICA6ICEoZGF0YVswXSBpbiBvYmplY3QpXG4gICAgICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGRhdGEgPSBtYXRjaERhdGFbaW5kZXhdO1xuICAgIHZhciBrZXkgPSBkYXRhWzBdLFxuICAgICAgICBvYmpWYWx1ZSA9IG9iamVjdFtrZXldLFxuICAgICAgICBzcmNWYWx1ZSA9IGRhdGFbMV07XG5cbiAgICBpZiAobm9DdXN0b21pemVyICYmIGRhdGFbMl0pIHtcbiAgICAgIGlmIChvYmpWYWx1ZSA9PT0gdW5kZWZpbmVkICYmICEoa2V5IGluIG9iamVjdCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgc3RhY2sgPSBuZXcgU3RhY2s7XG4gICAgICBpZiAoY3VzdG9taXplcikge1xuICAgICAgICB2YXIgcmVzdWx0ID0gY3VzdG9taXplcihvYmpWYWx1ZSwgc3JjVmFsdWUsIGtleSwgb2JqZWN0LCBzb3VyY2UsIHN0YWNrKTtcbiAgICAgIH1cbiAgICAgIGlmICghKHJlc3VsdCA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IGJhc2VJc0VxdWFsKHNyY1ZhbHVlLCBvYmpWYWx1ZSwgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgfCBDT01QQVJFX1VOT1JERVJFRF9GTEFHLCBjdXN0b21pemVyLCBzdGFjaylcbiAgICAgICAgICAgIDogcmVzdWx0XG4gICAgICAgICAgKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc01hdGNoO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUlzTWF0Y2guanNcbi8vIG1vZHVsZSBpZCA9IDExMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTWFza2VkID0gcmVxdWlyZSgnLi9faXNNYXNrZWQnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICB0b1NvdXJjZSA9IHJlcXVpcmUoJy4vX3RvU291cmNlJyk7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBgUmVnRXhwYFxuICogW3N5bnRheCBjaGFyYWN0ZXJzXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wYXR0ZXJucykuXG4gKi9cbnZhciByZVJlZ0V4cENoYXIgPSAvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpKS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hdGl2ZWAgd2l0aG91dCBiYWQgc2hpbSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgaXNNYXNrZWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwYXR0ZXJuID0gaXNGdW5jdGlvbih2YWx1ZSkgPyByZUlzTmF0aXZlIDogcmVJc0hvc3RDdG9yO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KHRvU291cmNlKHZhbHVlKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTmF0aXZlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUlzTmF0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqIFVzZWQgdG8gaWRlbnRpZnkgYHRvU3RyaW5nVGFnYCB2YWx1ZXMgb2YgdHlwZWQgYXJyYXlzLiAqL1xudmFyIHR5cGVkQXJyYXlUYWdzID0ge307XG50eXBlZEFycmF5VGFnc1tmbG9hdDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Zsb2F0NjRUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDhUYWddID0gdHlwZWRBcnJheVRhZ3NbaW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQ4VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50OENsYW1wZWRUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50MzJUYWddID0gdHJ1ZTtcbnR5cGVkQXJyYXlUYWdzW2FyZ3NUYWddID0gdHlwZWRBcnJheVRhZ3NbYXJyYXlUYWddID1cbnR5cGVkQXJyYXlUYWdzW2FycmF5QnVmZmVyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Jvb2xUYWddID1cbnR5cGVkQXJyYXlUYWdzW2RhdGFWaWV3VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2RhdGVUYWddID1cbnR5cGVkQXJyYXlUYWdzW2Vycm9yVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Z1bmNUYWddID1cbnR5cGVkQXJyYXlUYWdzW21hcFRhZ10gPSB0eXBlZEFycmF5VGFnc1tudW1iZXJUYWddID1cbnR5cGVkQXJyYXlUYWdzW29iamVjdFRhZ10gPSB0eXBlZEFycmF5VGFnc1tyZWdleHBUYWddID1cbnR5cGVkQXJyYXlUYWdzW3NldFRhZ10gPSB0eXBlZEFycmF5VGFnc1tzdHJpbmdUYWddID1cbnR5cGVkQXJyYXlUYWdzW3dlYWtNYXBUYWddID0gZmFsc2U7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNUeXBlZEFycmF5YCB3aXRob3V0IE5vZGUuanMgb3B0aW1pemF0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc1R5cGVkQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiZcbiAgICBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICEhdHlwZWRBcnJheVRhZ3NbYmFzZUdldFRhZyh2YWx1ZSldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc1R5cGVkQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlSXNUeXBlZEFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VNYXRjaGVzID0gcmVxdWlyZSgnLi9fYmFzZU1hdGNoZXMnKSxcbiAgICBiYXNlTWF0Y2hlc1Byb3BlcnR5ID0gcmVxdWlyZSgnLi9fYmFzZU1hdGNoZXNQcm9wZXJ0eScpLFxuICAgIGlkZW50aXR5ID0gcmVxdWlyZSgnLi9pZGVudGl0eScpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBwcm9wZXJ0eSA9IHJlcXVpcmUoJy4vcHJvcGVydHknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pdGVyYXRlZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gW3ZhbHVlPV8uaWRlbnRpdHldIFRoZSB2YWx1ZSB0byBjb252ZXJ0IHRvIGFuIGl0ZXJhdGVlLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBpdGVyYXRlZS5cbiAqL1xuZnVuY3Rpb24gYmFzZUl0ZXJhdGVlKHZhbHVlKSB7XG4gIC8vIERvbid0IHN0b3JlIHRoZSBgdHlwZW9mYCByZXN1bHQgaW4gYSB2YXJpYWJsZSB0byBhdm9pZCBhIEpJVCBidWcgaW4gU2FmYXJpIDkuXG4gIC8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTU2MDM0IGZvciBtb3JlIGRldGFpbHMuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiBpZGVudGl0eTtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlID09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodmFsdWUpXG4gICAgICA/IGJhc2VNYXRjaGVzUHJvcGVydHkodmFsdWVbMF0sIHZhbHVlWzFdKVxuICAgICAgOiBiYXNlTWF0Y2hlcyh2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHByb3BlcnR5KHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXRlcmF0ZWU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlSXRlcmF0ZWUuanNcbi8vIG1vZHVsZSBpZCA9IDExM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNQcm90b3R5cGUgPSByZXF1aXJlKCcuL19pc1Byb3RvdHlwZScpLFxuICAgIG5hdGl2ZUtleXMgPSByZXF1aXJlKCcuL19uYXRpdmVLZXlzJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ua2V5c2Agd2hpY2ggZG9lc24ndCB0cmVhdCBzcGFyc2UgYXJyYXlzIGFzIGRlbnNlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBiYXNlS2V5cyhvYmplY3QpIHtcbiAgaWYgKCFpc1Byb3RvdHlwZShvYmplY3QpKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUtleXMob2JqZWN0KTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gW107XG4gIGZvciAodmFyIGtleSBpbiBPYmplY3Qob2JqZWN0KSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBrZXkgIT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlS2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VLZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKSxcbiAgICBuYXRpdmVLZXlzSW4gPSByZXF1aXJlKCcuL19uYXRpdmVLZXlzSW4nKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzSW5gIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXNJbihvYmplY3QpIHtcbiAgaWYgKCFpc09iamVjdChvYmplY3QpKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUtleXNJbihvYmplY3QpO1xuICB9XG4gIHZhciBpc1Byb3RvID0gaXNQcm90b3R5cGUob2JqZWN0KSxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAoIShrZXkgPT0gJ2NvbnN0cnVjdG9yJyAmJiAoaXNQcm90byB8fCAhaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkpKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlS2V5c0luO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUtleXNJbi5qc1xuLy8gbW9kdWxlIGlkID0gMTE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlSXNNYXRjaCA9IHJlcXVpcmUoJy4vX2Jhc2VJc01hdGNoJyksXG4gICAgZ2V0TWF0Y2hEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWF0Y2hEYXRhJyksXG4gICAgbWF0Y2hlc1N0cmljdENvbXBhcmFibGUgPSByZXF1aXJlKCcuL19tYXRjaGVzU3RyaWN0Q29tcGFyYWJsZScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLm1hdGNoZXNgIHdoaWNoIGRvZXNuJ3QgY2xvbmUgYHNvdXJjZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCBvZiBwcm9wZXJ0eSB2YWx1ZXMgdG8gbWF0Y2guXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBzcGVjIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlTWF0Y2hlcyhzb3VyY2UpIHtcbiAgdmFyIG1hdGNoRGF0YSA9IGdldE1hdGNoRGF0YShzb3VyY2UpO1xuICBpZiAobWF0Y2hEYXRhLmxlbmd0aCA9PSAxICYmIG1hdGNoRGF0YVswXVsyXSkge1xuICAgIHJldHVybiBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZShtYXRjaERhdGFbMF1bMF0sIG1hdGNoRGF0YVswXVsxXSk7XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBvYmplY3QgPT09IHNvdXJjZSB8fCBiYXNlSXNNYXRjaChvYmplY3QsIHNvdXJjZSwgbWF0Y2hEYXRhKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlTWF0Y2hlcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VNYXRjaGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VJc0VxdWFsID0gcmVxdWlyZSgnLi9fYmFzZUlzRXF1YWwnKSxcbiAgICBnZXQgPSByZXF1aXJlKCcuL2dldCcpLFxuICAgIGhhc0luID0gcmVxdWlyZSgnLi9oYXNJbicpLFxuICAgIGlzS2V5ID0gcmVxdWlyZSgnLi9faXNLZXknKSxcbiAgICBpc1N0cmljdENvbXBhcmFibGUgPSByZXF1aXJlKCcuL19pc1N0cmljdENvbXBhcmFibGUnKSxcbiAgICBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZSA9IHJlcXVpcmUoJy4vX21hdGNoZXNTdHJpY3RDb21wYXJhYmxlJyksXG4gICAgdG9LZXkgPSByZXF1aXJlKCcuL190b0tleScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDEsXG4gICAgQ09NUEFSRV9VTk9SREVSRURfRkxBRyA9IDI7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ubWF0Y2hlc1Byb3BlcnR5YCB3aGljaCBkb2Vzbid0IGNsb25lIGBzcmNWYWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcGFyYW0geyp9IHNyY1ZhbHVlIFRoZSB2YWx1ZSB0byBtYXRjaC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHNwZWMgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VNYXRjaGVzUHJvcGVydHkocGF0aCwgc3JjVmFsdWUpIHtcbiAgaWYgKGlzS2V5KHBhdGgpICYmIGlzU3RyaWN0Q29tcGFyYWJsZShzcmNWYWx1ZSkpIHtcbiAgICByZXR1cm4gbWF0Y2hlc1N0cmljdENvbXBhcmFibGUodG9LZXkocGF0aCksIHNyY1ZhbHVlKTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIG9ialZhbHVlID0gZ2V0KG9iamVjdCwgcGF0aCk7XG4gICAgcmV0dXJuIChvYmpWYWx1ZSA9PT0gdW5kZWZpbmVkICYmIG9ialZhbHVlID09PSBzcmNWYWx1ZSlcbiAgICAgID8gaGFzSW4ob2JqZWN0LCBwYXRoKVxuICAgICAgOiBiYXNlSXNFcXVhbChzcmNWYWx1ZSwgb2JqVmFsdWUsIENPTVBBUkVfUEFSVElBTF9GTEFHIHwgQ09NUEFSRV9VTk9SREVSRURfRkxBRyk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZU1hdGNoZXNQcm9wZXJ0eTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VNYXRjaGVzUHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDExN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgU3RhY2sgPSByZXF1aXJlKCcuL19TdGFjaycpLFxuICAgIGFzc2lnbk1lcmdlVmFsdWUgPSByZXF1aXJlKCcuL19hc3NpZ25NZXJnZVZhbHVlJyksXG4gICAgYmFzZUZvciA9IHJlcXVpcmUoJy4vX2Jhc2VGb3InKSxcbiAgICBiYXNlTWVyZ2VEZWVwID0gcmVxdWlyZSgnLi9fYmFzZU1lcmdlRGVlcCcpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIGtleXNJbiA9IHJlcXVpcmUoJy4va2V5c0luJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ubWVyZ2VgIHdpdGhvdXQgc3VwcG9ydCBmb3IgbXVsdGlwbGUgc291cmNlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgc291cmNlIG9iamVjdC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzcmNJbmRleCBUaGUgaW5kZXggb2YgYHNvdXJjZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBtZXJnZWQgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBzb3VyY2UgdmFsdWVzIGFuZCB0aGVpciBtZXJnZWRcbiAqICBjb3VudGVycGFydHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VNZXJnZShvYmplY3QsIHNvdXJjZSwgc3JjSW5kZXgsIGN1c3RvbWl6ZXIsIHN0YWNrKSB7XG4gIGlmIChvYmplY3QgPT09IHNvdXJjZSkge1xuICAgIHJldHVybjtcbiAgfVxuICBiYXNlRm9yKHNvdXJjZSwgZnVuY3Rpb24oc3JjVmFsdWUsIGtleSkge1xuICAgIGlmIChpc09iamVjdChzcmNWYWx1ZSkpIHtcbiAgICAgIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gICAgICBiYXNlTWVyZ2VEZWVwKG9iamVjdCwgc291cmNlLCBrZXksIHNyY0luZGV4LCBiYXNlTWVyZ2UsIGN1c3RvbWl6ZXIsIHN0YWNrKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2YXIgbmV3VmFsdWUgPSBjdXN0b21pemVyXG4gICAgICAgID8gY3VzdG9taXplcihvYmplY3Rba2V5XSwgc3JjVmFsdWUsIChrZXkgKyAnJyksIG9iamVjdCwgc291cmNlLCBzdGFjaylcbiAgICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICAgIGlmIChuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG5ld1ZhbHVlID0gc3JjVmFsdWU7XG4gICAgICB9XG4gICAgICBhc3NpZ25NZXJnZVZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSk7XG4gICAgfVxuICB9LCBrZXlzSW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VNZXJnZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VNZXJnZS5qc1xuLy8gbW9kdWxlIGlkID0gMTE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhc3NpZ25NZXJnZVZhbHVlID0gcmVxdWlyZSgnLi9fYXNzaWduTWVyZ2VWYWx1ZScpLFxuICAgIGNsb25lQnVmZmVyID0gcmVxdWlyZSgnLi9fY2xvbmVCdWZmZXInKSxcbiAgICBjbG9uZVR5cGVkQXJyYXkgPSByZXF1aXJlKCcuL19jbG9uZVR5cGVkQXJyYXknKSxcbiAgICBjb3B5QXJyYXkgPSByZXF1aXJlKCcuL19jb3B5QXJyYXknKSxcbiAgICBpbml0Q2xvbmVPYmplY3QgPSByZXF1aXJlKCcuL19pbml0Q2xvbmVPYmplY3QnKSxcbiAgICBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNBcnJheUxpa2VPYmplY3QgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlT2JqZWN0JyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIGlzUGxhaW5PYmplY3QgPSByZXF1aXJlKCcuL2lzUGxhaW5PYmplY3QnKSxcbiAgICBpc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL2lzVHlwZWRBcnJheScpLFxuICAgIHRvUGxhaW5PYmplY3QgPSByZXF1aXJlKCcuL3RvUGxhaW5PYmplY3QnKTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VNZXJnZWAgZm9yIGFycmF5cyBhbmQgb2JqZWN0cyB3aGljaCBwZXJmb3Jtc1xuICogZGVlcCBtZXJnZXMgYW5kIHRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cyBlbmFibGluZyBvYmplY3RzIHdpdGggY2lyY3VsYXJcbiAqIHJlZmVyZW5jZXMgdG8gYmUgbWVyZ2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBtZXJnZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzcmNJbmRleCBUaGUgaW5kZXggb2YgYHNvdXJjZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBtZXJnZUZ1bmMgVGhlIGZ1bmN0aW9uIHRvIG1lcmdlIHZhbHVlcy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGFzc2lnbmVkIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgc291cmNlIHZhbHVlcyBhbmQgdGhlaXIgbWVyZ2VkXG4gKiAgY291bnRlcnBhcnRzLlxuICovXG5mdW5jdGlvbiBiYXNlTWVyZ2VEZWVwKG9iamVjdCwgc291cmNlLCBrZXksIHNyY0luZGV4LCBtZXJnZUZ1bmMsIGN1c3RvbWl6ZXIsIHN0YWNrKSB7XG4gIHZhciBvYmpWYWx1ZSA9IG9iamVjdFtrZXldLFxuICAgICAgc3JjVmFsdWUgPSBzb3VyY2Vba2V5XSxcbiAgICAgIHN0YWNrZWQgPSBzdGFjay5nZXQoc3JjVmFsdWUpO1xuXG4gIGlmIChzdGFja2VkKSB7XG4gICAgYXNzaWduTWVyZ2VWYWx1ZShvYmplY3QsIGtleSwgc3RhY2tlZCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBuZXdWYWx1ZSA9IGN1c3RvbWl6ZXJcbiAgICA/IGN1c3RvbWl6ZXIob2JqVmFsdWUsIHNyY1ZhbHVlLCAoa2V5ICsgJycpLCBvYmplY3QsIHNvdXJjZSwgc3RhY2spXG4gICAgOiB1bmRlZmluZWQ7XG5cbiAgdmFyIGlzQ29tbW9uID0gbmV3VmFsdWUgPT09IHVuZGVmaW5lZDtcblxuICBpZiAoaXNDb21tb24pIHtcbiAgICB2YXIgaXNBcnIgPSBpc0FycmF5KHNyY1ZhbHVlKSxcbiAgICAgICAgaXNCdWZmID0gIWlzQXJyICYmIGlzQnVmZmVyKHNyY1ZhbHVlKSxcbiAgICAgICAgaXNUeXBlZCA9ICFpc0FyciAmJiAhaXNCdWZmICYmIGlzVHlwZWRBcnJheShzcmNWYWx1ZSk7XG5cbiAgICBuZXdWYWx1ZSA9IHNyY1ZhbHVlO1xuICAgIGlmIChpc0FyciB8fCBpc0J1ZmYgfHwgaXNUeXBlZCkge1xuICAgICAgaWYgKGlzQXJyYXkob2JqVmFsdWUpKSB7XG4gICAgICAgIG5ld1ZhbHVlID0gb2JqVmFsdWU7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChpc0FycmF5TGlrZU9iamVjdChvYmpWYWx1ZSkpIHtcbiAgICAgICAgbmV3VmFsdWUgPSBjb3B5QXJyYXkob2JqVmFsdWUpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoaXNCdWZmKSB7XG4gICAgICAgIGlzQ29tbW9uID0gZmFsc2U7XG4gICAgICAgIG5ld1ZhbHVlID0gY2xvbmVCdWZmZXIoc3JjVmFsdWUsIHRydWUpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoaXNUeXBlZCkge1xuICAgICAgICBpc0NvbW1vbiA9IGZhbHNlO1xuICAgICAgICBuZXdWYWx1ZSA9IGNsb25lVHlwZWRBcnJheShzcmNWYWx1ZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbmV3VmFsdWUgPSBbXTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoaXNQbGFpbk9iamVjdChzcmNWYWx1ZSkgfHwgaXNBcmd1bWVudHMoc3JjVmFsdWUpKSB7XG4gICAgICBuZXdWYWx1ZSA9IG9ialZhbHVlO1xuICAgICAgaWYgKGlzQXJndW1lbnRzKG9ialZhbHVlKSkge1xuICAgICAgICBuZXdWYWx1ZSA9IHRvUGxhaW5PYmplY3Qob2JqVmFsdWUpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoIWlzT2JqZWN0KG9ialZhbHVlKSB8fCAoc3JjSW5kZXggJiYgaXNGdW5jdGlvbihvYmpWYWx1ZSkpKSB7XG4gICAgICAgIG5ld1ZhbHVlID0gaW5pdENsb25lT2JqZWN0KHNyY1ZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpc0NvbW1vbiA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBpZiAoaXNDb21tb24pIHtcbiAgICAvLyBSZWN1cnNpdmVseSBtZXJnZSBvYmplY3RzIGFuZCBhcnJheXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBzdGFjay5zZXQoc3JjVmFsdWUsIG5ld1ZhbHVlKTtcbiAgICBtZXJnZUZ1bmMobmV3VmFsdWUsIHNyY1ZhbHVlLCBzcmNJbmRleCwgY3VzdG9taXplciwgc3RhY2spO1xuICAgIHN0YWNrWydkZWxldGUnXShzcmNWYWx1ZSk7XG4gIH1cbiAgYXNzaWduTWVyZ2VWYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VNZXJnZURlZXA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlTWVyZ2VEZWVwLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5wcm9wZXJ0eWAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGFjY2Vzc29yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUHJvcGVydHkoa2V5KSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlUHJvcGVydHk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlUHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDEyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUdldCA9IHJlcXVpcmUoJy4vX2Jhc2VHZXQnKTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VQcm9wZXJ0eWAgd2hpY2ggc3VwcG9ydHMgZGVlcCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGFjY2Vzc29yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUHJvcGVydHlEZWVwKHBhdGgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBiYXNlR2V0KG9iamVjdCwgcGF0aCk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVByb3BlcnR5RGVlcDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VQcm9wZXJ0eURlZXAuanNcbi8vIG1vZHVsZSBpZCA9IDEyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaWRlbnRpdHkgPSByZXF1aXJlKCcuL2lkZW50aXR5JyksXG4gICAgb3ZlclJlc3QgPSByZXF1aXJlKCcuL19vdmVyUmVzdCcpLFxuICAgIHNldFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fc2V0VG9TdHJpbmcnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5yZXN0YCB3aGljaCBkb2Vzbid0IHZhbGlkYXRlIG9yIGNvZXJjZSBhcmd1bWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGFwcGx5IGEgcmVzdCBwYXJhbWV0ZXIgdG8uXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PWZ1bmMubGVuZ3RoLTFdIFRoZSBzdGFydCBwb3NpdGlvbiBvZiB0aGUgcmVzdCBwYXJhbWV0ZXIuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVJlc3QoZnVuYywgc3RhcnQpIHtcbiAgcmV0dXJuIHNldFRvU3RyaW5nKG92ZXJSZXN0KGZ1bmMsIHN0YXJ0LCBpZGVudGl0eSksIGZ1bmMgKyAnJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVJlc3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlUmVzdC5qc1xuLy8gbW9kdWxlIGlkID0gMTIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjb25zdGFudCA9IHJlcXVpcmUoJy4vY29uc3RhbnQnKSxcbiAgICBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2RlZmluZVByb3BlcnR5JyksXG4gICAgaWRlbnRpdHkgPSByZXF1aXJlKCcuL2lkZW50aXR5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYHNldFRvU3RyaW5nYCB3aXRob3V0IHN1cHBvcnQgZm9yIGhvdCBsb29wIHNob3J0aW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzdHJpbmcgVGhlIGB0b1N0cmluZ2AgcmVzdWx0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIGBmdW5jYC5cbiAqL1xudmFyIGJhc2VTZXRUb1N0cmluZyA9ICFkZWZpbmVQcm9wZXJ0eSA/IGlkZW50aXR5IDogZnVuY3Rpb24oZnVuYywgc3RyaW5nKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eShmdW5jLCAndG9TdHJpbmcnLCB7XG4gICAgJ2NvbmZpZ3VyYWJsZSc6IHRydWUsXG4gICAgJ2VudW1lcmFibGUnOiBmYWxzZSxcbiAgICAndmFsdWUnOiBjb25zdGFudChzdHJpbmcpLFxuICAgICd3cml0YWJsZSc6IHRydWVcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VTZXRUb1N0cmluZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VTZXRUb1N0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gMTIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udGltZXNgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kc1xuICogb3IgbWF4IGFycmF5IGxlbmd0aCBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gaW52b2tlIGBpdGVyYXRlZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBiYXNlVGltZXMobiwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShuKTtcblxuICB3aGlsZSAoKytpbmRleCA8IG4pIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoaW5kZXgpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRpbWVzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZVRpbWVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGFycmF5TWFwID0gcmVxdWlyZSgnLi9fYXJyYXlNYXAnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDA7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xUb1N0cmluZyA9IHN5bWJvbFByb3RvID8gc3ltYm9sUHJvdG8udG9TdHJpbmcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udG9TdHJpbmdgIHdoaWNoIGRvZXNuJ3QgY29udmVydCBudWxsaXNoXG4gKiB2YWx1ZXMgdG8gZW1wdHkgc3RyaW5ncy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRvU3RyaW5nKHZhbHVlKSB7XG4gIC8vIEV4aXQgZWFybHkgZm9yIHN0cmluZ3MgdG8gYXZvaWQgYSBwZXJmb3JtYW5jZSBoaXQgaW4gc29tZSBlbnZpcm9ubWVudHMuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgLy8gUmVjdXJzaXZlbHkgY29udmVydCB2YWx1ZXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICByZXR1cm4gYXJyYXlNYXAodmFsdWUsIGJhc2VUb1N0cmluZykgKyAnJztcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHN5bWJvbFRvU3RyaW5nID8gc3ltYm9sVG9TdHJpbmcuY2FsbCh2YWx1ZSkgOiAnJztcbiAgfVxuICB2YXIgcmVzdWx0ID0gKHZhbHVlICsgJycpO1xuICByZXR1cm4gKHJlc3VsdCA9PSAnMCcgJiYgKDEgLyB2YWx1ZSkgPT0gLUlORklOSVRZKSA/ICctMCcgOiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRvU3RyaW5nO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZVRvU3RyaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy51bmFyeWAgd2l0aG91dCBzdXBwb3J0IGZvciBzdG9yaW5nIG1ldGFkYXRhLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYXAgYXJndW1lbnRzIGZvci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNhcHBlZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVVuYXJ5KGZ1bmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmModmFsdWUpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VVbmFyeTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VVbmFyeS5qc1xuLy8gbW9kdWxlIGlkID0gMTI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ2hlY2tzIGlmIGEgYGNhY2hlYCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gY2FjaGUgVGhlIGNhY2hlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGNhY2hlSGFzKGNhY2hlLCBrZXkpIHtcbiAgcmV0dXJuIGNhY2hlLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhY2hlSGFzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fY2FjaGVIYXMuanNcbi8vIG1vZHVsZSBpZCA9IDEyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgVWludDhBcnJheSA9IHJlcXVpcmUoJy4vX1VpbnQ4QXJyYXknKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYGFycmF5QnVmZmVyYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gYXJyYXlCdWZmZXIgVGhlIGFycmF5IGJ1ZmZlciB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtBcnJheUJ1ZmZlcn0gUmV0dXJucyB0aGUgY2xvbmVkIGFycmF5IGJ1ZmZlci5cbiAqL1xuZnVuY3Rpb24gY2xvbmVBcnJheUJ1ZmZlcihhcnJheUJ1ZmZlcikge1xuICB2YXIgcmVzdWx0ID0gbmV3IGFycmF5QnVmZmVyLmNvbnN0cnVjdG9yKGFycmF5QnVmZmVyLmJ5dGVMZW5ndGgpO1xuICBuZXcgVWludDhBcnJheShyZXN1bHQpLnNldChuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcikpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lQXJyYXlCdWZmZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19jbG9uZUFycmF5QnVmZmVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkLFxuICAgIGFsbG9jVW5zYWZlID0gQnVmZmVyID8gQnVmZmVyLmFsbG9jVW5zYWZlIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiAgYGJ1ZmZlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7QnVmZmVyfSBSZXR1cm5zIHRoZSBjbG9uZWQgYnVmZmVyLlxuICovXG5mdW5jdGlvbiBjbG9uZUJ1ZmZlcihidWZmZXIsIGlzRGVlcCkge1xuICBpZiAoaXNEZWVwKSB7XG4gICAgcmV0dXJuIGJ1ZmZlci5zbGljZSgpO1xuICB9XG4gIHZhciBsZW5ndGggPSBidWZmZXIubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gYWxsb2NVbnNhZmUgPyBhbGxvY1Vuc2FmZShsZW5ndGgpIDogbmV3IGJ1ZmZlci5jb25zdHJ1Y3RvcihsZW5ndGgpO1xuXG4gIGJ1ZmZlci5jb3B5KHJlc3VsdCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVCdWZmZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19jbG9uZUJ1ZmZlci5qc1xuLy8gbW9kdWxlIGlkID0gMTI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjbG9uZUFycmF5QnVmZmVyID0gcmVxdWlyZSgnLi9fY2xvbmVBcnJheUJ1ZmZlcicpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgdHlwZWRBcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSB0eXBlZEFycmF5IFRoZSB0eXBlZCBhcnJheSB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgdHlwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGNsb25lVHlwZWRBcnJheSh0eXBlZEFycmF5LCBpc0RlZXApIHtcbiAgdmFyIGJ1ZmZlciA9IGlzRGVlcCA/IGNsb25lQXJyYXlCdWZmZXIodHlwZWRBcnJheS5idWZmZXIpIDogdHlwZWRBcnJheS5idWZmZXI7XG4gIHJldHVybiBuZXcgdHlwZWRBcnJheS5jb25zdHJ1Y3RvcihidWZmZXIsIHR5cGVkQXJyYXkuYnl0ZU9mZnNldCwgdHlwZWRBcnJheS5sZW5ndGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lVHlwZWRBcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Nsb25lVHlwZWRBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMTMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhc3NpZ25WYWx1ZSA9IHJlcXVpcmUoJy4vX2Fzc2lnblZhbHVlJyksXG4gICAgYmFzZUFzc2lnblZhbHVlID0gcmVxdWlyZSgnLi9fYmFzZUFzc2lnblZhbHVlJyk7XG5cbi8qKlxuICogQ29waWVzIHByb3BlcnRpZXMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IHByb3BzIFRoZSBwcm9wZXJ0eSBpZGVudGlmaWVycyB0byBjb3B5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIHRvLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29waWVkIHZhbHVlcy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlPYmplY3Qoc291cmNlLCBwcm9wcywgb2JqZWN0LCBjdXN0b21pemVyKSB7XG4gIHZhciBpc05ldyA9ICFvYmplY3Q7XG4gIG9iamVjdCB8fCAob2JqZWN0ID0ge30pO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHByb3BzW2luZGV4XTtcblxuICAgIHZhciBuZXdWYWx1ZSA9IGN1c3RvbWl6ZXJcbiAgICAgID8gY3VzdG9taXplcihvYmplY3Rba2V5XSwgc291cmNlW2tleV0sIGtleSwgb2JqZWN0LCBzb3VyY2UpXG4gICAgICA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBuZXdWYWx1ZSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgICBpZiAoaXNOZXcpIHtcbiAgICAgIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcHlPYmplY3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19jb3B5T2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvdmVycmVhY2hpbmcgY29yZS1qcyBzaGltcy4gKi9cbnZhciBjb3JlSnNEYXRhID0gcm9vdFsnX19jb3JlLWpzX3NoYXJlZF9fJ107XG5cbm1vZHVsZS5leHBvcnRzID0gY29yZUpzRGF0YTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2NvcmVKc0RhdGEuanNcbi8vIG1vZHVsZSBpZCA9IDEzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZVJlc3QgPSByZXF1aXJlKCcuL19iYXNlUmVzdCcpLFxuICAgIGlzSXRlcmF0ZWVDYWxsID0gcmVxdWlyZSgnLi9faXNJdGVyYXRlZUNhbGwnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gbGlrZSBgXy5hc3NpZ25gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBhc3NpZ25lciBUaGUgZnVuY3Rpb24gdG8gYXNzaWduIHZhbHVlcy5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGFzc2lnbmVyIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVBc3NpZ25lcihhc3NpZ25lcikge1xuICByZXR1cm4gYmFzZVJlc3QoZnVuY3Rpb24ob2JqZWN0LCBzb3VyY2VzKSB7XG4gICAgdmFyIGluZGV4ID0gLTEsXG4gICAgICAgIGxlbmd0aCA9IHNvdXJjZXMubGVuZ3RoLFxuICAgICAgICBjdXN0b21pemVyID0gbGVuZ3RoID4gMSA/IHNvdXJjZXNbbGVuZ3RoIC0gMV0gOiB1bmRlZmluZWQsXG4gICAgICAgIGd1YXJkID0gbGVuZ3RoID4gMiA/IHNvdXJjZXNbMl0gOiB1bmRlZmluZWQ7XG5cbiAgICBjdXN0b21pemVyID0gKGFzc2lnbmVyLmxlbmd0aCA+IDMgJiYgdHlwZW9mIGN1c3RvbWl6ZXIgPT0gJ2Z1bmN0aW9uJylcbiAgICAgID8gKGxlbmd0aC0tLCBjdXN0b21pemVyKVxuICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICBpZiAoZ3VhcmQgJiYgaXNJdGVyYXRlZUNhbGwoc291cmNlc1swXSwgc291cmNlc1sxXSwgZ3VhcmQpKSB7XG4gICAgICBjdXN0b21pemVyID0gbGVuZ3RoIDwgMyA/IHVuZGVmaW5lZCA6IGN1c3RvbWl6ZXI7XG4gICAgICBsZW5ndGggPSAxO1xuICAgIH1cbiAgICBvYmplY3QgPSBPYmplY3Qob2JqZWN0KTtcbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgdmFyIHNvdXJjZSA9IHNvdXJjZXNbaW5kZXhdO1xuICAgICAgaWYgKHNvdXJjZSkge1xuICAgICAgICBhc3NpZ25lcihvYmplY3QsIHNvdXJjZSwgaW5kZXgsIGN1c3RvbWl6ZXIpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0O1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVBc3NpZ25lcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2NyZWF0ZUFzc2lnbmVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDcmVhdGVzIGEgYmFzZSBmdW5jdGlvbiBmb3IgbWV0aG9kcyBsaWtlIGBfLmZvckluYCBhbmQgYF8uZm9yT3duYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBiYXNlIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVCYXNlRm9yKGZyb21SaWdodCkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0LCBpdGVyYXRlZSwga2V5c0Z1bmMpIHtcbiAgICB2YXIgaW5kZXggPSAtMSxcbiAgICAgICAgaXRlcmFibGUgPSBPYmplY3Qob2JqZWN0KSxcbiAgICAgICAgcHJvcHMgPSBrZXlzRnVuYyhvYmplY3QpLFxuICAgICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgIHZhciBrZXkgPSBwcm9wc1tmcm9tUmlnaHQgPyBsZW5ndGggOiArK2luZGV4XTtcbiAgICAgIGlmIChpdGVyYXRlZShpdGVyYWJsZVtrZXldLCBrZXksIGl0ZXJhYmxlKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmplY3Q7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlQmFzZUZvcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2NyZWF0ZUJhc2VGb3IuanNcbi8vIG1vZHVsZSBpZCA9IDEzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgVWludDhBcnJheSA9IHJlcXVpcmUoJy4vX1VpbnQ4QXJyYXknKSxcbiAgICBlcSA9IHJlcXVpcmUoJy4vZXEnKSxcbiAgICBlcXVhbEFycmF5cyA9IHJlcXVpcmUoJy4vX2VxdWFsQXJyYXlzJyksXG4gICAgbWFwVG9BcnJheSA9IHJlcXVpcmUoJy4vX21hcFRvQXJyYXknKSxcbiAgICBzZXRUb0FycmF5ID0gcmVxdWlyZSgnLi9fc2V0VG9BcnJheScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDEsXG4gICAgQ09NUEFSRV9VTk9SREVSRURfRkxBRyA9IDI7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJztcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFZhbHVlT2YgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnZhbHVlT2YgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBjb21wYXJpbmcgb2JqZWN0cyBvZlxuICogdGhlIHNhbWUgYHRvU3RyaW5nVGFnYC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBvbmx5IHN1cHBvcnRzIGNvbXBhcmluZyB2YWx1ZXMgd2l0aCB0YWdzIG9mXG4gKiBgQm9vbGVhbmAsIGBEYXRlYCwgYEVycm9yYCwgYE51bWJlcmAsIGBSZWdFeHBgLCBvciBgU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtzdHJpbmd9IHRhZyBUaGUgYHRvU3RyaW5nVGFnYCBvZiB0aGUgb2JqZWN0cyB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhY2sgVHJhY2tzIHRyYXZlcnNlZCBgb2JqZWN0YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsQnlUYWcob2JqZWN0LCBvdGhlciwgdGFnLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHN3aXRjaCAodGFnKSB7XG4gICAgY2FzZSBkYXRhVmlld1RhZzpcbiAgICAgIGlmICgob2JqZWN0LmJ5dGVMZW5ndGggIT0gb3RoZXIuYnl0ZUxlbmd0aCkgfHxcbiAgICAgICAgICAob2JqZWN0LmJ5dGVPZmZzZXQgIT0gb3RoZXIuYnl0ZU9mZnNldCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgb2JqZWN0ID0gb2JqZWN0LmJ1ZmZlcjtcbiAgICAgIG90aGVyID0gb3RoZXIuYnVmZmVyO1xuXG4gICAgY2FzZSBhcnJheUJ1ZmZlclRhZzpcbiAgICAgIGlmICgob2JqZWN0LmJ5dGVMZW5ndGggIT0gb3RoZXIuYnl0ZUxlbmd0aCkgfHxcbiAgICAgICAgICAhZXF1YWxGdW5jKG5ldyBVaW50OEFycmF5KG9iamVjdCksIG5ldyBVaW50OEFycmF5KG90aGVyKSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICBjYXNlIGJvb2xUYWc6XG4gICAgY2FzZSBkYXRlVGFnOlxuICAgIGNhc2UgbnVtYmVyVGFnOlxuICAgICAgLy8gQ29lcmNlIGJvb2xlYW5zIHRvIGAxYCBvciBgMGAgYW5kIGRhdGVzIHRvIG1pbGxpc2Vjb25kcy5cbiAgICAgIC8vIEludmFsaWQgZGF0ZXMgYXJlIGNvZXJjZWQgdG8gYE5hTmAuXG4gICAgICByZXR1cm4gZXEoK29iamVjdCwgK290aGVyKTtcblxuICAgIGNhc2UgZXJyb3JUYWc6XG4gICAgICByZXR1cm4gb2JqZWN0Lm5hbWUgPT0gb3RoZXIubmFtZSAmJiBvYmplY3QubWVzc2FnZSA9PSBvdGhlci5tZXNzYWdlO1xuXG4gICAgY2FzZSByZWdleHBUYWc6XG4gICAgY2FzZSBzdHJpbmdUYWc6XG4gICAgICAvLyBDb2VyY2UgcmVnZXhlcyB0byBzdHJpbmdzIGFuZCB0cmVhdCBzdHJpbmdzLCBwcmltaXRpdmVzIGFuZCBvYmplY3RzLFxuICAgICAgLy8gYXMgZXF1YWwuIFNlZSBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcmVnZXhwLnByb3RvdHlwZS50b3N0cmluZ1xuICAgICAgLy8gZm9yIG1vcmUgZGV0YWlscy5cbiAgICAgIHJldHVybiBvYmplY3QgPT0gKG90aGVyICsgJycpO1xuXG4gICAgY2FzZSBtYXBUYWc6XG4gICAgICB2YXIgY29udmVydCA9IG1hcFRvQXJyYXk7XG5cbiAgICBjYXNlIHNldFRhZzpcbiAgICAgIHZhciBpc1BhcnRpYWwgPSBiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUc7XG4gICAgICBjb252ZXJ0IHx8IChjb252ZXJ0ID0gc2V0VG9BcnJheSk7XG5cbiAgICAgIGlmIChvYmplY3Quc2l6ZSAhPSBvdGhlci5zaXplICYmICFpc1BhcnRpYWwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgLy8gQXNzdW1lIGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICAgICAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQob2JqZWN0KTtcbiAgICAgIGlmIChzdGFja2VkKSB7XG4gICAgICAgIHJldHVybiBzdGFja2VkID09IG90aGVyO1xuICAgICAgfVxuICAgICAgYml0bWFzayB8PSBDT01QQVJFX1VOT1JERVJFRF9GTEFHO1xuXG4gICAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICAgIHN0YWNrLnNldChvYmplY3QsIG90aGVyKTtcbiAgICAgIHZhciByZXN1bHQgPSBlcXVhbEFycmF5cyhjb252ZXJ0KG9iamVjdCksIGNvbnZlcnQob3RoZXIpLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKTtcbiAgICAgIHN0YWNrWydkZWxldGUnXShvYmplY3QpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIGNhc2Ugc3ltYm9sVGFnOlxuICAgICAgaWYgKHN5bWJvbFZhbHVlT2YpIHtcbiAgICAgICAgcmV0dXJuIHN5bWJvbFZhbHVlT2YuY2FsbChvYmplY3QpID09IHN5bWJvbFZhbHVlT2YuY2FsbChvdGhlcik7XG4gICAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxdWFsQnlUYWc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19lcXVhbEJ5VGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldEFsbEtleXMgPSByZXF1aXJlKCcuL19nZXRBbGxLZXlzJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIG9iamVjdHMgd2l0aCBzdXBwb3J0IGZvclxuICogcGFydGlhbCBkZWVwIGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvdGhlciBUaGUgb3RoZXIgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGFjayBUcmFja3MgdHJhdmVyc2VkIGBvYmplY3RgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdHMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gZXF1YWxPYmplY3RzKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgdmFyIGlzUGFydGlhbCA9IGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRyxcbiAgICAgIG9ialByb3BzID0gZ2V0QWxsS2V5cyhvYmplY3QpLFxuICAgICAgb2JqTGVuZ3RoID0gb2JqUHJvcHMubGVuZ3RoLFxuICAgICAgb3RoUHJvcHMgPSBnZXRBbGxLZXlzKG90aGVyKSxcbiAgICAgIG90aExlbmd0aCA9IG90aFByb3BzLmxlbmd0aDtcblxuICBpZiAob2JqTGVuZ3RoICE9IG90aExlbmd0aCAmJiAhaXNQYXJ0aWFsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBpbmRleCA9IG9iakxlbmd0aDtcbiAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICB2YXIga2V5ID0gb2JqUHJvcHNbaW5kZXhdO1xuICAgIGlmICghKGlzUGFydGlhbCA/IGtleSBpbiBvdGhlciA6IGhhc093blByb3BlcnR5LmNhbGwob3RoZXIsIGtleSkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIC8vIEFzc3VtZSBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQob2JqZWN0KTtcbiAgaWYgKHN0YWNrZWQgJiYgc3RhY2suZ2V0KG90aGVyKSkge1xuICAgIHJldHVybiBzdGFja2VkID09IG90aGVyO1xuICB9XG4gIHZhciByZXN1bHQgPSB0cnVlO1xuICBzdGFjay5zZXQob2JqZWN0LCBvdGhlcik7XG4gIHN0YWNrLnNldChvdGhlciwgb2JqZWN0KTtcblxuICB2YXIgc2tpcEN0b3IgPSBpc1BhcnRpYWw7XG4gIHdoaWxlICgrK2luZGV4IDwgb2JqTGVuZ3RoKSB7XG4gICAga2V5ID0gb2JqUHJvcHNbaW5kZXhdO1xuICAgIHZhciBvYmpWYWx1ZSA9IG9iamVjdFtrZXldLFxuICAgICAgICBvdGhWYWx1ZSA9IG90aGVyW2tleV07XG5cbiAgICBpZiAoY3VzdG9taXplcikge1xuICAgICAgdmFyIGNvbXBhcmVkID0gaXNQYXJ0aWFsXG4gICAgICAgID8gY3VzdG9taXplcihvdGhWYWx1ZSwgb2JqVmFsdWUsIGtleSwgb3RoZXIsIG9iamVjdCwgc3RhY2spXG4gICAgICAgIDogY3VzdG9taXplcihvYmpWYWx1ZSwgb3RoVmFsdWUsIGtleSwgb2JqZWN0LCBvdGhlciwgc3RhY2spO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBpZiAoIShjb21wYXJlZCA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyAob2JqVmFsdWUgPT09IG90aFZhbHVlIHx8IGVxdWFsRnVuYyhvYmpWYWx1ZSwgb3RoVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKSlcbiAgICAgICAgICA6IGNvbXBhcmVkXG4gICAgICAgICkpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHNraXBDdG9yIHx8IChza2lwQ3RvciA9IGtleSA9PSAnY29uc3RydWN0b3InKTtcbiAgfVxuICBpZiAocmVzdWx0ICYmICFza2lwQ3Rvcikge1xuICAgIHZhciBvYmpDdG9yID0gb2JqZWN0LmNvbnN0cnVjdG9yLFxuICAgICAgICBvdGhDdG9yID0gb3RoZXIuY29uc3RydWN0b3I7XG5cbiAgICAvLyBOb24gYE9iamVjdGAgb2JqZWN0IGluc3RhbmNlcyB3aXRoIGRpZmZlcmVudCBjb25zdHJ1Y3RvcnMgYXJlIG5vdCBlcXVhbC5cbiAgICBpZiAob2JqQ3RvciAhPSBvdGhDdG9yICYmXG4gICAgICAgICgnY29uc3RydWN0b3InIGluIG9iamVjdCAmJiAnY29uc3RydWN0b3InIGluIG90aGVyKSAmJlxuICAgICAgICAhKHR5cGVvZiBvYmpDdG9yID09ICdmdW5jdGlvbicgJiYgb2JqQ3RvciBpbnN0YW5jZW9mIG9iakN0b3IgJiZcbiAgICAgICAgICB0eXBlb2Ygb3RoQ3RvciA9PSAnZnVuY3Rpb24nICYmIG90aEN0b3IgaW5zdGFuY2VvZiBvdGhDdG9yKSkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIHN0YWNrWydkZWxldGUnXShvYmplY3QpO1xuICBzdGFja1snZGVsZXRlJ10ob3RoZXIpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxdWFsT2JqZWN0cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2VxdWFsT2JqZWN0cy5qc1xuLy8gbW9kdWxlIGlkID0gMTM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlR2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRBbGxLZXlzJyksXG4gICAgZ2V0U3ltYm9scyA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHMnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gZ2V0QWxsS2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5cywgZ2V0U3ltYm9scyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0QWxsS2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldEFsbEtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDEzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNTdHJpY3RDb21wYXJhYmxlID0gcmVxdWlyZSgnLi9faXNTdHJpY3RDb21wYXJhYmxlJyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG4vKipcbiAqIEdldHMgdGhlIHByb3BlcnR5IG5hbWVzLCB2YWx1ZXMsIGFuZCBjb21wYXJlIGZsYWdzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG1hdGNoIGRhdGEgb2YgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGdldE1hdGNoRGF0YShvYmplY3QpIHtcbiAgdmFyIHJlc3VsdCA9IGtleXMob2JqZWN0KSxcbiAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG5cbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgdmFyIGtleSA9IHJlc3VsdFtsZW5ndGhdLFxuICAgICAgICB2YWx1ZSA9IG9iamVjdFtrZXldO1xuXG4gICAgcmVzdWx0W2xlbmd0aF0gPSBba2V5LCB2YWx1ZSwgaXNTdHJpY3RDb21wYXJhYmxlKHZhbHVlKV07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRNYXRjaERhdGE7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXRNYXRjaERhdGEuanNcbi8vIG1vZHVsZSBpZCA9IDEzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXJyYXlGaWx0ZXIgPSByZXF1aXJlKCcuL19hcnJheUZpbHRlcicpLFxuICAgIHN0dWJBcnJheSA9IHJlcXVpcmUoJy4vc3R1YkFycmF5Jyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVHZXRTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHN5bWJvbHMuXG4gKi9cbnZhciBnZXRTeW1ib2xzID0gIW5hdGl2ZUdldFN5bWJvbHMgPyBzdHViQXJyYXkgOiBmdW5jdGlvbihvYmplY3QpIHtcbiAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICByZXR1cm4gYXJyYXlGaWx0ZXIobmF0aXZlR2V0U3ltYm9scyhvYmplY3QpLCBmdW5jdGlvbihzeW1ib2wpIHtcbiAgICByZXR1cm4gcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChvYmplY3QsIHN5bWJvbCk7XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRTeW1ib2xzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0U3ltYm9scy5qc1xuLy8gbW9kdWxlIGlkID0gMTM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBEYXRhVmlldyA9IHJlcXVpcmUoJy4vX0RhdGFWaWV3JyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyksXG4gICAgUHJvbWlzZSA9IHJlcXVpcmUoJy4vX1Byb21pc2UnKSxcbiAgICBTZXQgPSByZXF1aXJlKCcuL19TZXQnKSxcbiAgICBXZWFrTWFwID0gcmVxdWlyZSgnLi9fV2Vha01hcCcpLFxuICAgIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgdG9Tb3VyY2UgPSByZXF1aXJlKCcuL190b1NvdXJjZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcHJvbWlzZVRhZyA9ICdbb2JqZWN0IFByb21pc2VdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWFwcywgc2V0cywgYW5kIHdlYWttYXBzLiAqL1xudmFyIGRhdGFWaWV3Q3RvclN0cmluZyA9IHRvU291cmNlKERhdGFWaWV3KSxcbiAgICBtYXBDdG9yU3RyaW5nID0gdG9Tb3VyY2UoTWFwKSxcbiAgICBwcm9taXNlQ3RvclN0cmluZyA9IHRvU291cmNlKFByb21pc2UpLFxuICAgIHNldEN0b3JTdHJpbmcgPSB0b1NvdXJjZShTZXQpLFxuICAgIHdlYWtNYXBDdG9yU3RyaW5nID0gdG9Tb3VyY2UoV2Vha01hcCk7XG5cbi8qKlxuICogR2V0cyB0aGUgYHRvU3RyaW5nVGFnYCBvZiBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbnZhciBnZXRUYWcgPSBiYXNlR2V0VGFnO1xuXG4vLyBGYWxsYmFjayBmb3IgZGF0YSB2aWV3cywgbWFwcywgc2V0cywgYW5kIHdlYWsgbWFwcyBpbiBJRSAxMSBhbmQgcHJvbWlzZXMgaW4gTm9kZS5qcyA8IDYuXG5pZiAoKERhdGFWaWV3ICYmIGdldFRhZyhuZXcgRGF0YVZpZXcobmV3IEFycmF5QnVmZmVyKDEpKSkgIT0gZGF0YVZpZXdUYWcpIHx8XG4gICAgKE1hcCAmJiBnZXRUYWcobmV3IE1hcCkgIT0gbWFwVGFnKSB8fFxuICAgIChQcm9taXNlICYmIGdldFRhZyhQcm9taXNlLnJlc29sdmUoKSkgIT0gcHJvbWlzZVRhZykgfHxcbiAgICAoU2V0ICYmIGdldFRhZyhuZXcgU2V0KSAhPSBzZXRUYWcpIHx8XG4gICAgKFdlYWtNYXAgJiYgZ2V0VGFnKG5ldyBXZWFrTWFwKSAhPSB3ZWFrTWFwVGFnKSkge1xuICBnZXRUYWcgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciByZXN1bHQgPSBiYXNlR2V0VGFnKHZhbHVlKSxcbiAgICAgICAgQ3RvciA9IHJlc3VsdCA9PSBvYmplY3RUYWcgPyB2YWx1ZS5jb25zdHJ1Y3RvciA6IHVuZGVmaW5lZCxcbiAgICAgICAgY3RvclN0cmluZyA9IEN0b3IgPyB0b1NvdXJjZShDdG9yKSA6ICcnO1xuXG4gICAgaWYgKGN0b3JTdHJpbmcpIHtcbiAgICAgIHN3aXRjaCAoY3RvclN0cmluZykge1xuICAgICAgICBjYXNlIGRhdGFWaWV3Q3RvclN0cmluZzogcmV0dXJuIGRhdGFWaWV3VGFnO1xuICAgICAgICBjYXNlIG1hcEN0b3JTdHJpbmc6IHJldHVybiBtYXBUYWc7XG4gICAgICAgIGNhc2UgcHJvbWlzZUN0b3JTdHJpbmc6IHJldHVybiBwcm9taXNlVGFnO1xuICAgICAgICBjYXNlIHNldEN0b3JTdHJpbmc6IHJldHVybiBzZXRUYWc7XG4gICAgICAgIGNhc2Ugd2Vha01hcEN0b3JTdHJpbmc6IHJldHVybiB3ZWFrTWFwVGFnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFRhZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldFRhZy5qc1xuLy8gbW9kdWxlIGlkID0gMTQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFZhbHVlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0VmFsdWUuanNcbi8vIG1vZHVsZSBpZCA9IDE0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY2FzdFBhdGggPSByZXF1aXJlKCcuL19jYXN0UGF0aCcpLFxuICAgIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0luZGV4ID0gcmVxdWlyZSgnLi9faXNJbmRleCcpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpLFxuICAgIHRvS2V5ID0gcmVxdWlyZSgnLi9fdG9LZXknKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHBhdGhgIGV4aXN0cyBvbiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gY2hlY2suXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYXNGdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjayBwcm9wZXJ0aWVzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBwYXRoYCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzUGF0aChvYmplY3QsIHBhdGgsIGhhc0Z1bmMpIHtcbiAgcGF0aCA9IGNhc3RQYXRoKHBhdGgsIG9iamVjdCk7XG5cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBwYXRoLmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHRvS2V5KHBhdGhbaW5kZXhdKTtcbiAgICBpZiAoIShyZXN1bHQgPSBvYmplY3QgIT0gbnVsbCAmJiBoYXNGdW5jKG9iamVjdCwga2V5KSkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBvYmplY3QgPSBvYmplY3Rba2V5XTtcbiAgfVxuICBpZiAocmVzdWx0IHx8ICsraW5kZXggIT0gbGVuZ3RoKSB7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBsZW5ndGggPSBvYmplY3QgPT0gbnVsbCA/IDAgOiBvYmplY3QubGVuZ3RoO1xuICByZXR1cm4gISFsZW5ndGggJiYgaXNMZW5ndGgobGVuZ3RoKSAmJiBpc0luZGV4KGtleSwgbGVuZ3RoKSAmJlxuICAgIChpc0FycmF5KG9iamVjdCkgfHwgaXNBcmd1bWVudHMob2JqZWN0KSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzUGF0aDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2hhc1BhdGguanNcbi8vIG1vZHVsZSBpZCA9IDE0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKi9cbmZ1bmN0aW9uIGhhc2hDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5hdGl2ZUNyZWF0ZSA/IG5hdGl2ZUNyZWF0ZShudWxsKSA6IHt9O1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hDbGVhcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2hhc2hDbGVhci5qc1xuLy8gbW9kdWxlIGlkID0gMTQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBoYXNoIFRoZSBoYXNoIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gdGhpcy5oYXMoa2V5KSAmJiBkZWxldGUgdGhpcy5fX2RhdGFfX1trZXldO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaERlbGV0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2hhc2hEZWxldGUuanNcbi8vIG1vZHVsZSBpZCA9IDE0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBHZXRzIHRoZSBoYXNoIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGhhc2hHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKG5hdGl2ZUNyZWF0ZSkge1xuICAgIHZhciByZXN1bHQgPSBkYXRhW2tleV07XG4gICAgcmV0dXJuIHJlc3VsdCA9PT0gSEFTSF9VTkRFRklORUQgPyB1bmRlZmluZWQgOiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KSA/IGRhdGFba2V5XSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoR2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faGFzaEdldC5qc1xuLy8gbW9kdWxlIGlkID0gMTQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBoYXNoIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoSGFzKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHJldHVybiBuYXRpdmVDcmVhdGUgPyAoZGF0YVtrZXldICE9PSB1bmRlZmluZWQpIDogaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hIYXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19oYXNoSGFzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKlxuICogU2V0cyB0aGUgaGFzaCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGhhc2ggaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGhhc2hTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHRoaXMuc2l6ZSArPSB0aGlzLmhhcyhrZXkpID8gMCA6IDE7XG4gIGRhdGFba2V5XSA9IChuYXRpdmVDcmVhdGUgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCkgPyBIQVNIX1VOREVGSU5FRCA6IHZhbHVlO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoU2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faGFzaFNldC5qc1xuLy8gbW9kdWxlIGlkID0gMTQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlQ3JlYXRlID0gcmVxdWlyZSgnLi9fYmFzZUNyZWF0ZScpLFxuICAgIGdldFByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2dldFByb3RvdHlwZScpLFxuICAgIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKTtcblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBvYmplY3QgY2xvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVPYmplY3Qob2JqZWN0KSB7XG4gIHJldHVybiAodHlwZW9mIG9iamVjdC5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmICFpc1Byb3RvdHlwZShvYmplY3QpKVxuICAgID8gYmFzZUNyZWF0ZShnZXRQcm90b3R5cGUob2JqZWN0KSlcbiAgICA6IHt9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluaXRDbG9uZU9iamVjdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2luaXRDbG9uZU9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBlcSA9IHJlcXVpcmUoJy4vZXEnKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKSxcbiAgICBpc0luZGV4ID0gcmVxdWlyZSgnLi9faXNJbmRleCcpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgZ2l2ZW4gYXJndW1lbnRzIGFyZSBmcm9tIGFuIGl0ZXJhdGVlIGNhbGwuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHBvdGVudGlhbCBpdGVyYXRlZSB2YWx1ZSBhcmd1bWVudC5cbiAqIEBwYXJhbSB7Kn0gaW5kZXggVGhlIHBvdGVudGlhbCBpdGVyYXRlZSBpbmRleCBvciBrZXkgYXJndW1lbnQuXG4gKiBAcGFyYW0geyp9IG9iamVjdCBUaGUgcG90ZW50aWFsIGl0ZXJhdGVlIG9iamVjdCBhcmd1bWVudC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYXJndW1lbnRzIGFyZSBmcm9tIGFuIGl0ZXJhdGVlIGNhbGwsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0l0ZXJhdGVlQ2FsbCh2YWx1ZSwgaW5kZXgsIG9iamVjdCkge1xuICBpZiAoIWlzT2JqZWN0KG9iamVjdCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHR5cGUgPSB0eXBlb2YgaW5kZXg7XG4gIGlmICh0eXBlID09ICdudW1iZXInXG4gICAgICAgID8gKGlzQXJyYXlMaWtlKG9iamVjdCkgJiYgaXNJbmRleChpbmRleCwgb2JqZWN0Lmxlbmd0aCkpXG4gICAgICAgIDogKHR5cGUgPT0gJ3N0cmluZycgJiYgaW5kZXggaW4gb2JqZWN0KVxuICAgICAgKSB7XG4gICAgcmV0dXJuIGVxKG9iamVjdFtpbmRleF0sIHZhbHVlKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNJdGVyYXRlZUNhbGw7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19pc0l0ZXJhdGVlQ2FsbC5qc1xuLy8gbW9kdWxlIGlkID0gMTQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHVzZSBhcyB1bmlxdWUgb2JqZWN0IGtleS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleWFibGUodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAodHlwZSA9PSAnc3RyaW5nJyB8fCB0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicpXG4gICAgPyAodmFsdWUgIT09ICdfX3Byb3RvX18nKVxuICAgIDogKHZhbHVlID09PSBudWxsKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0tleWFibGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19pc0tleWFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDE1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY29yZUpzRGF0YSA9IHJlcXVpcmUoJy4vX2NvcmVKc0RhdGEnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1ldGhvZHMgbWFzcXVlcmFkaW5nIGFzIG5hdGl2ZS4gKi9cbnZhciBtYXNrU3JjS2V5ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdWlkID0gL1teLl0rJC8uZXhlYyhjb3JlSnNEYXRhICYmIGNvcmVKc0RhdGEua2V5cyAmJiBjb3JlSnNEYXRhLmtleXMuSUVfUFJPVE8gfHwgJycpO1xuICByZXR1cm4gdWlkID8gKCdTeW1ib2woc3JjKV8xLicgKyB1aWQpIDogJyc7XG59KCkpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgZnVuY2AgaGFzIGl0cyBzb3VyY2UgbWFza2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgZnVuY2AgaXMgbWFza2VkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzTWFza2VkKGZ1bmMpIHtcbiAgcmV0dXJuICEhbWFza1NyY0tleSAmJiAobWFza1NyY0tleSBpbiBmdW5jKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc01hc2tlZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2lzTWFza2VkLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IFtdO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUNsZWFyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbGlzdENhY2hlQ2xlYXIuanNcbi8vIG1vZHVsZSBpZCA9IDE1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzcGxpY2UgPSBhcnJheVByb3RvLnNwbGljZTtcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGxhc3RJbmRleCA9IGRhdGEubGVuZ3RoIC0gMTtcbiAgaWYgKGluZGV4ID09IGxhc3RJbmRleCkge1xuICAgIGRhdGEucG9wKCk7XG4gIH0gZWxzZSB7XG4gICAgc3BsaWNlLmNhbGwoZGF0YSwgaW5kZXgsIDEpO1xuICB9XG4gIC0tdGhpcy5zaXplO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVEZWxldGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19saXN0Q2FjaGVEZWxldGUuanNcbi8vIG1vZHVsZSBpZCA9IDE1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogZGF0YVtpbmRleF1bMV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlR2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbGlzdENhY2hlR2V0LmpzXG4vLyBtb2R1bGUgaWQgPSAxNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gYXNzb2NJbmRleE9mKHRoaXMuX19kYXRhX18sIGtleSkgPiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVIYXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19saXN0Q2FjaGVIYXMuanNcbi8vIG1vZHVsZSBpZCA9IDE1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgbGlzdCBjYWNoZSBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbGlzdCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgKyt0aGlzLnNpemU7XG4gICAgZGF0YS5wdXNoKFtrZXksIHZhbHVlXSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0YVtpbmRleF1bMV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVTZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19saXN0Q2FjaGVTZXQuanNcbi8vIG1vZHVsZSBpZCA9IDE1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgSGFzaCA9IHJlcXVpcmUoJy4vX0hhc2gnKSxcbiAgICBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVDbGVhcigpIHtcbiAgdGhpcy5zaXplID0gMDtcbiAgdGhpcy5fX2RhdGFfXyA9IHtcbiAgICAnaGFzaCc6IG5ldyBIYXNoLFxuICAgICdtYXAnOiBuZXcgKE1hcCB8fCBMaXN0Q2FjaGUpLFxuICAgICdzdHJpbmcnOiBuZXcgSGFzaFxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlQ2xlYXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19tYXBDYWNoZUNsZWFyLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IGdldE1hcERhdGEodGhpcywga2V5KVsnZGVsZXRlJ10oa2V5KTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlRGVsZXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbWFwQ2FjaGVEZWxldGUuanNcbi8vIG1vZHVsZSBpZCA9IDE1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlR2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbWFwQ2FjaGVHZXQuanNcbi8vIG1vZHVsZSBpZCA9IDE1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBtYXAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUhhcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX21hcENhY2hlSGFzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgbWFwIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG1hcCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IGdldE1hcERhdGEodGhpcywga2V5KSxcbiAgICAgIHNpemUgPSBkYXRhLnNpemU7XG5cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSArPSBkYXRhLnNpemUgPT0gc2l6ZSA/IDAgOiAxO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZVNldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX21hcENhY2hlU2V0LmpzXG4vLyBtb2R1bGUgaWQgPSAxNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb252ZXJ0cyBgbWFwYCB0byBpdHMga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUga2V5LXZhbHVlIHBhaXJzLlxuICovXG5mdW5jdGlvbiBtYXBUb0FycmF5KG1hcCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG1hcC5zaXplKTtcblxuICBtYXAuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gW2tleSwgdmFsdWVdO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBUb0FycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbWFwVG9BcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMTYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBtZW1vaXplID0gcmVxdWlyZSgnLi9tZW1vaXplJyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBtYXhpbXVtIG1lbW9pemUgY2FjaGUgc2l6ZS4gKi9cbnZhciBNQVhfTUVNT0laRV9TSVpFID0gNTAwO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5tZW1vaXplYCB3aGljaCBjbGVhcnMgdGhlIG1lbW9pemVkIGZ1bmN0aW9uJ3NcbiAqIGNhY2hlIHdoZW4gaXQgZXhjZWVkcyBgTUFYX01FTU9JWkVfU0laRWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGhhdmUgaXRzIG91dHB1dCBtZW1vaXplZC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IG1lbW9pemVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBtZW1vaXplQ2FwcGVkKGZ1bmMpIHtcbiAgdmFyIHJlc3VsdCA9IG1lbW9pemUoZnVuYywgZnVuY3Rpb24oa2V5KSB7XG4gICAgaWYgKGNhY2hlLnNpemUgPT09IE1BWF9NRU1PSVpFX1NJWkUpIHtcbiAgICAgIGNhY2hlLmNsZWFyKCk7XG4gICAgfVxuICAgIHJldHVybiBrZXk7XG4gIH0pO1xuXG4gIHZhciBjYWNoZSA9IHJlc3VsdC5jYWNoZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtZW1vaXplQ2FwcGVkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbWVtb2l6ZUNhcHBlZC5qc1xuLy8gbW9kdWxlIGlkID0gMTYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBvdmVyQXJnID0gcmVxdWlyZSgnLi9fb3ZlckFyZycpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlS2V5cyA9IG92ZXJBcmcoT2JqZWN0LmtleXMsIE9iamVjdCk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlS2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX25hdGl2ZUtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDE2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgbGlrZVxuICogW2BPYmplY3Qua2V5c2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZXhjZXB0IHRoYXQgaXQgaW5jbHVkZXMgaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydGllcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gbmF0aXZlS2V5c0luKG9iamVjdCkge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIGlmIChvYmplY3QgIT0gbnVsbCkge1xuICAgIGZvciAodmFyIGtleSBpbiBPYmplY3Qob2JqZWN0KSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVLZXlzSW47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19uYXRpdmVLZXlzSW4uanNcbi8vIG1vZHVsZSBpZCA9IDE2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHByb2Nlc3NgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlUHJvY2VzcyA9IG1vZHVsZUV4cG9ydHMgJiYgZnJlZUdsb2JhbC5wcm9jZXNzO1xuXG4vKiogVXNlZCB0byBhY2Nlc3MgZmFzdGVyIE5vZGUuanMgaGVscGVycy4gKi9cbnZhciBub2RlVXRpbCA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZnJlZVByb2Nlc3MgJiYgZnJlZVByb2Nlc3MuYmluZGluZyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nKCd1dGlsJyk7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5vZGVVdGlsO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbm9kZVV0aWwuanNcbi8vIG1vZHVsZSBpZCA9IDE2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXBwbHkgPSByZXF1aXJlKCcuL19hcHBseScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXg7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlUmVzdGAgd2hpY2ggdHJhbnNmb3JtcyB0aGUgcmVzdCBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gYXBwbHkgYSByZXN0IHBhcmFtZXRlciB0by5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9ZnVuYy5sZW5ndGgtMV0gVGhlIHN0YXJ0IHBvc2l0aW9uIG9mIHRoZSByZXN0IHBhcmFtZXRlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgcmVzdCBhcnJheSB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlclJlc3QoZnVuYywgc3RhcnQsIHRyYW5zZm9ybSkge1xuICBzdGFydCA9IG5hdGl2ZU1heChzdGFydCA9PT0gdW5kZWZpbmVkID8gKGZ1bmMubGVuZ3RoIC0gMSkgOiBzdGFydCwgMCk7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAgaW5kZXggPSAtMSxcbiAgICAgICAgbGVuZ3RoID0gbmF0aXZlTWF4KGFyZ3MubGVuZ3RoIC0gc3RhcnQsIDApLFxuICAgICAgICBhcnJheSA9IEFycmF5KGxlbmd0aCk7XG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgYXJyYXlbaW5kZXhdID0gYXJnc1tzdGFydCArIGluZGV4XTtcbiAgICB9XG4gICAgaW5kZXggPSAtMTtcbiAgICB2YXIgb3RoZXJBcmdzID0gQXJyYXkoc3RhcnQgKyAxKTtcbiAgICB3aGlsZSAoKytpbmRleCA8IHN0YXJ0KSB7XG4gICAgICBvdGhlckFyZ3NbaW5kZXhdID0gYXJnc1tpbmRleF07XG4gICAgfVxuICAgIG90aGVyQXJnc1tzdGFydF0gPSB0cmFuc2Zvcm0oYXJyYXkpO1xuICAgIHJldHVybiBhcHBseShmdW5jLCB0aGlzLCBvdGhlckFyZ3MpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG92ZXJSZXN0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fb3ZlclJlc3QuanNcbi8vIG1vZHVsZSBpZCA9IDE2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKlxuICogQWRkcyBgdmFsdWVgIHRvIHRoZSBhcnJheSBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgYWRkXG4gKiBAbWVtYmVyT2YgU2V0Q2FjaGVcbiAqIEBhbGlhcyBwdXNoXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjYWNoZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBzZXRDYWNoZUFkZCh2YWx1ZSkge1xuICB0aGlzLl9fZGF0YV9fLnNldCh2YWx1ZSwgSEFTSF9VTkRFRklORUQpO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRDYWNoZUFkZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3NldENhY2hlQWRkLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBpbiB0aGUgYXJyYXkgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIFNldENhY2hlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzZXRDYWNoZUhhcyh2YWx1ZSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXModmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldENhY2hlSGFzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fc2V0Q2FjaGVIYXMuanNcbi8vIG1vZHVsZSBpZCA9IDE2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvbnZlcnRzIGBzZXRgIHRvIGFuIGFycmF5IG9mIGl0cyB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXQgVGhlIHNldCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIHNldFRvQXJyYXkoc2V0KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkoc2V0LnNpemUpO1xuXG4gIHNldC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldFRvQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19zZXRUb0FycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAxNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VTZXRUb1N0cmluZyA9IHJlcXVpcmUoJy4vX2Jhc2VTZXRUb1N0cmluZycpLFxuICAgIHNob3J0T3V0ID0gcmVxdWlyZSgnLi9fc2hvcnRPdXQnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBgdG9TdHJpbmdgIG1ldGhvZCBvZiBgZnVuY2AgdG8gcmV0dXJuIGBzdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzdHJpbmcgVGhlIGB0b1N0cmluZ2AgcmVzdWx0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIGBmdW5jYC5cbiAqL1xudmFyIHNldFRvU3RyaW5nID0gc2hvcnRPdXQoYmFzZVNldFRvU3RyaW5nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBzZXRUb1N0cmluZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3NldFRvU3RyaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAxNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIFVzZWQgdG8gZGV0ZWN0IGhvdCBmdW5jdGlvbnMgYnkgbnVtYmVyIG9mIGNhbGxzIHdpdGhpbiBhIHNwYW4gb2YgbWlsbGlzZWNvbmRzLiAqL1xudmFyIEhPVF9DT1VOVCA9IDgwMCxcbiAgICBIT1RfU1BBTiA9IDE2O1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTm93ID0gRGF0ZS5ub3c7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQnbGwgc2hvcnQgb3V0IGFuZCBpbnZva2UgYGlkZW50aXR5YCBpbnN0ZWFkXG4gKiBvZiBgZnVuY2Agd2hlbiBpdCdzIGNhbGxlZCBgSE9UX0NPVU5UYCBvciBtb3JlIHRpbWVzIGluIGBIT1RfU1BBTmBcbiAqIG1pbGxpc2Vjb25kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gcmVzdHJpY3QuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBzaG9ydGFibGUgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHNob3J0T3V0KGZ1bmMpIHtcbiAgdmFyIGNvdW50ID0gMCxcbiAgICAgIGxhc3RDYWxsZWQgPSAwO1xuXG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RhbXAgPSBuYXRpdmVOb3coKSxcbiAgICAgICAgcmVtYWluaW5nID0gSE9UX1NQQU4gLSAoc3RhbXAgLSBsYXN0Q2FsbGVkKTtcblxuICAgIGxhc3RDYWxsZWQgPSBzdGFtcDtcbiAgICBpZiAocmVtYWluaW5nID4gMCkge1xuICAgICAgaWYgKCsrY291bnQgPj0gSE9UX0NPVU5UKSB7XG4gICAgICAgIHJldHVybiBhcmd1bWVudHNbMF07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvdW50ID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmMuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3J0T3V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fc2hvcnRPdXQuanNcbi8vIG1vZHVsZSBpZCA9IDE3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqL1xuZnVuY3Rpb24gc3RhY2tDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGU7XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tDbGVhcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3N0YWNrQ2xlYXIuanNcbi8vIG1vZHVsZSBpZCA9IDE3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0RlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgcmVzdWx0ID0gZGF0YVsnZGVsZXRlJ10oa2V5KTtcblxuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tEZWxldGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19zdGFja0RlbGV0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogR2V0cyB0aGUgc3RhY2sgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrR2V0KGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5nZXQoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0dldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3N0YWNrR2V0LmpzXG4vLyBtb2R1bGUgaWQgPSAxNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDaGVja3MgaWYgYSBzdGFjayB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrSGFzKGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0hhcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3N0YWNrSGFzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpLFxuICAgIE1hcENhY2hlID0gcmVxdWlyZSgnLi9fTWFwQ2FjaGUnKTtcblxuLyoqIFVzZWQgYXMgdGhlIHNpemUgdG8gZW5hYmxlIGxhcmdlIGFycmF5IG9wdGltaXphdGlvbnMuICovXG52YXIgTEFSR0VfQVJSQVlfU0laRSA9IDIwMDtcblxuLyoqXG4gKiBTZXRzIHRoZSBzdGFjayBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBzdGFjayBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChkYXRhIGluc3RhbmNlb2YgTGlzdENhY2hlKSB7XG4gICAgdmFyIHBhaXJzID0gZGF0YS5fX2RhdGFfXztcbiAgICBpZiAoIU1hcCB8fCAocGFpcnMubGVuZ3RoIDwgTEFSR0VfQVJSQVlfU0laRSAtIDEpKSB7XG4gICAgICBwYWlycy5wdXNoKFtrZXksIHZhbHVlXSk7XG4gICAgICB0aGlzLnNpemUgPSArK2RhdGEuc2l6ZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZShwYWlycyk7XG4gIH1cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tTZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19zdGFja1NldC5qc1xuLy8gbW9kdWxlIGlkID0gMTc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBgdmFsdWVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byByZXR1cm4gZnJvbSB0aGUgbmV3IGZ1bmN0aW9uLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY29uc3RhbnQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gXy50aW1lcygyLCBfLmNvbnN0YW50KHsgJ2EnOiAxIH0pKTtcbiAqXG4gKiBjb25zb2xlLmxvZyhvYmplY3RzKTtcbiAqIC8vID0+IFt7ICdhJzogMSB9LCB7ICdhJzogMSB9XVxuICpcbiAqIGNvbnNvbGUubG9nKG9iamVjdHNbMF0gPT09IG9iamVjdHNbMV0pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBjb25zdGFudCh2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnN0YW50O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9jb25zdGFudC5qc1xuLy8gbW9kdWxlIGlkID0gMTc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlR2V0ID0gcmVxdWlyZSgnLi9fYmFzZUdldCcpO1xuXG4vKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBwYXRoYCBvZiBgb2JqZWN0YC4gSWYgdGhlIHJlc29sdmVkIHZhbHVlIGlzXG4gKiBgdW5kZWZpbmVkYCwgdGhlIGBkZWZhdWx0VmFsdWVgIGlzIHJldHVybmVkIGluIGl0cyBwbGFjZS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuNy4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHBhcmFtIHsqfSBbZGVmYXVsdFZhbHVlXSBUaGUgdmFsdWUgcmV0dXJuZWQgZm9yIGB1bmRlZmluZWRgIHJlc29sdmVkIHZhbHVlcy5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXNvbHZlZCB2YWx1ZS5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiBbeyAnYic6IHsgJ2MnOiAzIH0gfV0gfTtcbiAqXG4gKiBfLmdldChvYmplY3QsICdhWzBdLmIuYycpO1xuICogLy8gPT4gM1xuICpcbiAqIF8uZ2V0KG9iamVjdCwgWydhJywgJzAnLCAnYicsICdjJ10pO1xuICogLy8gPT4gM1xuICpcbiAqIF8uZ2V0KG9iamVjdCwgJ2EuYi5jJywgJ2RlZmF1bHQnKTtcbiAqIC8vID0+ICdkZWZhdWx0J1xuICovXG5mdW5jdGlvbiBnZXQob2JqZWN0LCBwYXRoLCBkZWZhdWx0VmFsdWUpIHtcbiAgdmFyIHJlc3VsdCA9IG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogYmFzZUdldChvYmplY3QsIHBhdGgpO1xuICByZXR1cm4gcmVzdWx0ID09PSB1bmRlZmluZWQgPyBkZWZhdWx0VmFsdWUgOiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9nZXQuanNcbi8vIG1vZHVsZSBpZCA9IDE3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUhhc0luID0gcmVxdWlyZSgnLi9fYmFzZUhhc0luJyksXG4gICAgaGFzUGF0aCA9IHJlcXVpcmUoJy4vX2hhc1BhdGgnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHBhdGhgIGlzIGEgZGlyZWN0IG9yIGluaGVyaXRlZCBwcm9wZXJ0eSBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgcGF0aGAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSBfLmNyZWF0ZSh7ICdhJzogXy5jcmVhdGUoeyAnYic6IDIgfSkgfSk7XG4gKlxuICogXy5oYXNJbihvYmplY3QsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5oYXNJbihvYmplY3QsICdhLmInKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmhhc0luKG9iamVjdCwgWydhJywgJ2InXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5oYXNJbihvYmplY3QsICdiJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBoYXNJbihvYmplY3QsIHBhdGgpIHtcbiAgcmV0dXJuIG9iamVjdCAhPSBudWxsICYmIGhhc1BhdGgob2JqZWN0LCBwYXRoLCBiYXNlSGFzSW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc0luO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9oYXNJbi5qc1xuLy8gbW9kdWxlIGlkID0gMTgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uaXNBcnJheUxpa2VgIGV4Y2VwdCB0aGF0IGl0IGFsc28gY2hlY2tzIGlmIGB2YWx1ZWBcbiAqIGlzIGFuIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheS1saWtlIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZU9iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBpc0FycmF5TGlrZSh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheUxpa2VPYmplY3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzQXJyYXlMaWtlT2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxODFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIE1hcENhY2hlID0gcmVxdWlyZSgnLi9fTWFwQ2FjaGUnKTtcblxuLyoqIEVycm9yIG1lc3NhZ2UgY29uc3RhbnRzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCBtZW1vaXplcyB0aGUgcmVzdWx0IG9mIGBmdW5jYC4gSWYgYHJlc29sdmVyYCBpc1xuICogcHJvdmlkZWQsIGl0IGRldGVybWluZXMgdGhlIGNhY2hlIGtleSBmb3Igc3RvcmluZyB0aGUgcmVzdWx0IGJhc2VkIG9uIHRoZVxuICogYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBtZW1vaXplZCBmdW5jdGlvbi4gQnkgZGVmYXVsdCwgdGhlIGZpcnN0IGFyZ3VtZW50XG4gKiBwcm92aWRlZCB0byB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24gaXMgdXNlZCBhcyB0aGUgbWFwIGNhY2hlIGtleS4gVGhlIGBmdW5jYFxuICogaXMgaW52b2tlZCB3aXRoIHRoZSBgdGhpc2AgYmluZGluZyBvZiB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24uXG4gKlxuICogKipOb3RlOioqIFRoZSBjYWNoZSBpcyBleHBvc2VkIGFzIHRoZSBgY2FjaGVgIHByb3BlcnR5IG9uIHRoZSBtZW1vaXplZFxuICogZnVuY3Rpb24uIEl0cyBjcmVhdGlvbiBtYXkgYmUgY3VzdG9taXplZCBieSByZXBsYWNpbmcgdGhlIGBfLm1lbW9pemUuQ2FjaGVgXG4gKiBjb25zdHJ1Y3RvciB3aXRoIG9uZSB3aG9zZSBpbnN0YW5jZXMgaW1wbGVtZW50IHRoZVxuICogW2BNYXBgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wcm9wZXJ0aWVzLW9mLXRoZS1tYXAtcHJvdG90eXBlLW9iamVjdClcbiAqIG1ldGhvZCBpbnRlcmZhY2Ugb2YgYGNsZWFyYCwgYGRlbGV0ZWAsIGBnZXRgLCBgaGFzYCwgYW5kIGBzZXRgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gaGF2ZSBpdHMgb3V0cHV0IG1lbW9pemVkLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3Jlc29sdmVyXSBUaGUgZnVuY3Rpb24gdG8gcmVzb2x2ZSB0aGUgY2FjaGUga2V5LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgbWVtb2l6ZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSwgJ2InOiAyIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdjJzogMywgJ2QnOiA0IH07XG4gKlxuICogdmFyIHZhbHVlcyA9IF8ubWVtb2l6ZShfLnZhbHVlcyk7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsxLCAyXVxuICpcbiAqIHZhbHVlcyhvdGhlcik7XG4gKiAvLyA9PiBbMywgNF1cbiAqXG4gKiBvYmplY3QuYSA9IDI7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsxLCAyXVxuICpcbiAqIC8vIE1vZGlmeSB0aGUgcmVzdWx0IGNhY2hlLlxuICogdmFsdWVzLmNhY2hlLnNldChvYmplY3QsIFsnYScsICdiJ10pO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddXG4gKlxuICogLy8gUmVwbGFjZSBgXy5tZW1vaXplLkNhY2hlYC5cbiAqIF8ubWVtb2l6ZS5DYWNoZSA9IFdlYWtNYXA7XG4gKi9cbmZ1bmN0aW9uIG1lbW9pemUoZnVuYywgcmVzb2x2ZXIpIHtcbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicgfHwgKHJlc29sdmVyICE9IG51bGwgJiYgdHlwZW9mIHJlc29sdmVyICE9ICdmdW5jdGlvbicpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHZhciBtZW1vaXplZCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzLFxuICAgICAgICBrZXkgPSByZXNvbHZlciA/IHJlc29sdmVyLmFwcGx5KHRoaXMsIGFyZ3MpIDogYXJnc1swXSxcbiAgICAgICAgY2FjaGUgPSBtZW1vaXplZC5jYWNoZTtcblxuICAgIGlmIChjYWNoZS5oYXMoa2V5KSkge1xuICAgICAgcmV0dXJuIGNhY2hlLmdldChrZXkpO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICBtZW1vaXplZC5jYWNoZSA9IGNhY2hlLnNldChrZXksIHJlc3VsdCkgfHwgY2FjaGU7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgbWVtb2l6ZWQuY2FjaGUgPSBuZXcgKG1lbW9pemUuQ2FjaGUgfHwgTWFwQ2FjaGUpO1xuICByZXR1cm4gbWVtb2l6ZWQ7XG59XG5cbi8vIEV4cG9zZSBgTWFwQ2FjaGVgLlxubWVtb2l6ZS5DYWNoZSA9IE1hcENhY2hlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1lbW9pemU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL21lbW9pemUuanNcbi8vIG1vZHVsZSBpZCA9IDE4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZU1lcmdlID0gcmVxdWlyZSgnLi9fYmFzZU1lcmdlJyksXG4gICAgY3JlYXRlQXNzaWduZXIgPSByZXF1aXJlKCcuL19jcmVhdGVBc3NpZ25lcicpO1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uYXNzaWduYCBleGNlcHQgdGhhdCBpdCByZWN1cnNpdmVseSBtZXJnZXMgb3duIGFuZFxuICogaW5oZXJpdGVkIGVudW1lcmFibGUgc3RyaW5nIGtleWVkIHByb3BlcnRpZXMgb2Ygc291cmNlIG9iamVjdHMgaW50byB0aGVcbiAqIGRlc3RpbmF0aW9uIG9iamVjdC4gU291cmNlIHByb3BlcnRpZXMgdGhhdCByZXNvbHZlIHRvIGB1bmRlZmluZWRgIGFyZVxuICogc2tpcHBlZCBpZiBhIGRlc3RpbmF0aW9uIHZhbHVlIGV4aXN0cy4gQXJyYXkgYW5kIHBsYWluIG9iamVjdCBwcm9wZXJ0aWVzXG4gKiBhcmUgbWVyZ2VkIHJlY3Vyc2l2ZWx5LiBPdGhlciBvYmplY3RzIGFuZCB2YWx1ZSB0eXBlcyBhcmUgb3ZlcnJpZGRlbiBieVxuICogYXNzaWdubWVudC4gU291cmNlIG9iamVjdHMgYXJlIGFwcGxpZWQgZnJvbSBsZWZ0IHRvIHJpZ2h0LiBTdWJzZXF1ZW50XG4gKiBzb3VyY2VzIG92ZXJ3cml0ZSBwcm9wZXJ0eSBhc3NpZ25tZW50cyBvZiBwcmV2aW91cyBzb3VyY2VzLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBtdXRhdGVzIGBvYmplY3RgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC41LjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7Li4uT2JqZWN0fSBbc291cmNlc10gVGhlIHNvdXJjZSBvYmplY3RzLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHtcbiAqICAgJ2EnOiBbeyAnYic6IDIgfSwgeyAnZCc6IDQgfV1cbiAqIH07XG4gKlxuICogdmFyIG90aGVyID0ge1xuICogICAnYSc6IFt7ICdjJzogMyB9LCB7ICdlJzogNSB9XVxuICogfTtcbiAqXG4gKiBfLm1lcmdlKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4geyAnYSc6IFt7ICdiJzogMiwgJ2MnOiAzIH0sIHsgJ2QnOiA0LCAnZSc6IDUgfV0gfVxuICovXG52YXIgbWVyZ2UgPSBjcmVhdGVBc3NpZ25lcihmdW5jdGlvbihvYmplY3QsIHNvdXJjZSwgc3JjSW5kZXgpIHtcbiAgYmFzZU1lcmdlKG9iamVjdCwgc291cmNlLCBzcmNJbmRleCk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBtZXJnZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvbWVyZ2UuanNcbi8vIG1vZHVsZSBpZCA9IDE4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fYmFzZVByb3BlcnR5JyksXG4gICAgYmFzZVByb3BlcnR5RGVlcCA9IHJlcXVpcmUoJy4vX2Jhc2VQcm9wZXJ0eURlZXAnKSxcbiAgICBpc0tleSA9IHJlcXVpcmUoJy4vX2lzS2V5JyksXG4gICAgdG9LZXkgPSByZXF1aXJlKCcuL190b0tleScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIHZhbHVlIGF0IGBwYXRoYCBvZiBhIGdpdmVuIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGFjY2Vzc29yIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0cyA9IFtcbiAqICAgeyAnYSc6IHsgJ2InOiAyIH0gfSxcbiAqICAgeyAnYSc6IHsgJ2InOiAxIH0gfVxuICogXTtcbiAqXG4gKiBfLm1hcChvYmplY3RzLCBfLnByb3BlcnR5KCdhLmInKSk7XG4gKiAvLyA9PiBbMiwgMV1cbiAqXG4gKiBfLm1hcChfLnNvcnRCeShvYmplY3RzLCBfLnByb3BlcnR5KFsnYScsICdiJ10pKSwgJ2EuYicpO1xuICogLy8gPT4gWzEsIDJdXG4gKi9cbmZ1bmN0aW9uIHByb3BlcnR5KHBhdGgpIHtcbiAgcmV0dXJuIGlzS2V5KHBhdGgpID8gYmFzZVByb3BlcnR5KHRvS2V5KHBhdGgpKSA6IGJhc2VQcm9wZXJ0eURlZXAocGF0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcHJvcGVydHk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL3Byb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAxODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGEgbmV3IGVtcHR5IGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZW1wdHkgYXJyYXkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBhcnJheXMgPSBfLnRpbWVzKDIsIF8uc3R1YkFycmF5KTtcbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXMpO1xuICogLy8gPT4gW1tdLCBbXV1cbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXNbMF0gPT09IGFycmF5c1sxXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBzdHViQXJyYXkoKSB7XG4gIHJldHVybiBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHViQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL3N0dWJBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMTg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgZmFsc2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50aW1lcygyLCBfLnN0dWJGYWxzZSk7XG4gKiAvLyA9PiBbZmFsc2UsIGZhbHNlXVxuICovXG5mdW5jdGlvbiBzdHViRmFsc2UoKSB7XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHViRmFsc2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL3N0dWJGYWxzZS5qc1xuLy8gbW9kdWxlIGlkID0gMTg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjb3B5T2JqZWN0ID0gcmVxdWlyZSgnLi9fY29weU9iamVjdCcpLFxuICAgIGtleXNJbiA9IHJlcXVpcmUoJy4va2V5c0luJyk7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHBsYWluIG9iamVjdCBmbGF0dGVuaW5nIGluaGVyaXRlZCBlbnVtZXJhYmxlIHN0cmluZ1xuICoga2V5ZWQgcHJvcGVydGllcyBvZiBgdmFsdWVgIHRvIG93biBwcm9wZXJ0aWVzIG9mIHRoZSBwbGFpbiBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgcGxhaW4gb2JqZWN0LlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmFzc2lnbih7ICdhJzogMSB9LCBuZXcgRm9vKTtcbiAqIC8vID0+IHsgJ2EnOiAxLCAnYic6IDIgfVxuICpcbiAqIF8uYXNzaWduKHsgJ2EnOiAxIH0sIF8udG9QbGFpbk9iamVjdChuZXcgRm9vKSk7XG4gKiAvLyA9PiB7ICdhJzogMSwgJ2InOiAyLCAnYyc6IDMgfVxuICovXG5mdW5jdGlvbiB0b1BsYWluT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiBjb3B5T2JqZWN0KHZhbHVlLCBrZXlzSW4odmFsdWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1BsYWluT2JqZWN0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC90b1BsYWluT2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxODdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfcmVhY3RSZWR1eCA9IHJlcXVpcmUoJ3JlYWN0LXJlZHV4Jyk7XG5cbnZhciBfY3JlYXRlRmllbGRQcm9wczIgPSByZXF1aXJlKCcuL2NyZWF0ZUZpZWxkUHJvcHMnKTtcblxudmFyIF9jcmVhdGVGaWVsZFByb3BzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUZpZWxkUHJvcHMyKTtcblxudmFyIF9vbkNoYW5nZVZhbHVlID0gcmVxdWlyZSgnLi9ldmVudHMvb25DaGFuZ2VWYWx1ZScpO1xuXG52YXIgX29uQ2hhbmdlVmFsdWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb25DaGFuZ2VWYWx1ZSk7XG5cbnZhciBfZXZlbnRDb25zdHMgPSByZXF1aXJlKCcuL3V0aWwvZXZlbnRDb25zdHMnKTtcblxudmFyIF9wbGFpbiA9IHJlcXVpcmUoJy4vc3RydWN0dXJlL3BsYWluJyk7XG5cbnZhciBfcGxhaW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGxhaW4pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIHByb3BzVG9Ob3RVcGRhdGVGb3IgPSBbJ19yZWR1eEZvcm0nXTtcblxudmFyIGNyZWF0ZUNvbm5lY3RlZEZpZWxkID0gZnVuY3Rpb24gY3JlYXRlQ29ubmVjdGVkRmllbGQoX3JlZikge1xuICB2YXIgZGVlcEVxdWFsID0gX3JlZi5kZWVwRXF1YWwsXG4gICAgICBnZXRJbiA9IF9yZWYuZ2V0SW4sXG4gICAgICB0b0pTID0gX3JlZi50b0pTO1xuXG4gIHZhciBnZXRTeW5jRXJyb3IgPSBmdW5jdGlvbiBnZXRTeW5jRXJyb3Ioc3luY0Vycm9ycywgbmFtZSkge1xuICAgIHZhciBlcnJvciA9IF9wbGFpbjIuZGVmYXVsdC5nZXRJbihzeW5jRXJyb3JzLCBuYW1lKTtcbiAgICAvLyBCZWNhdXNlIHRoZSBlcnJvciBmb3IgdGhpcyBmaWVsZCBtaWdodCBub3QgYmUgYXQgYSBsZXZlbCBpbiB0aGUgZXJyb3Igc3RydWN0dXJlIHdoZXJlXG4gICAgLy8gaXQgY2FuIGJlIHNldCBkaXJlY3RseSwgaXQgbWlnaHQgbmVlZCB0byBiZSB1bndyYXBwZWQgZnJvbSB0aGUgX2Vycm9yIHByb3BlcnR5XG4gICAgcmV0dXJuIGVycm9yICYmIGVycm9yLl9lcnJvciA/IGVycm9yLl9lcnJvciA6IGVycm9yO1xuICB9O1xuXG4gIHZhciBnZXRTeW5jV2FybmluZyA9IGZ1bmN0aW9uIGdldFN5bmNXYXJuaW5nKHN5bmNXYXJuaW5ncywgbmFtZSkge1xuICAgIHZhciB3YXJuaW5nID0gZ2V0SW4oc3luY1dhcm5pbmdzLCBuYW1lKTtcbiAgICAvLyBCZWNhdXNlIHRoZSB3YXJuaW5nIGZvciB0aGlzIGZpZWxkIG1pZ2h0IG5vdCBiZSBhdCBhIGxldmVsIGluIHRoZSB3YXJuaW5nIHN0cnVjdHVyZSB3aGVyZVxuICAgIC8vIGl0IGNhbiBiZSBzZXQgZGlyZWN0bHksIGl0IG1pZ2h0IG5lZWQgdG8gYmUgdW53cmFwcGVkIGZyb20gdGhlIF93YXJuaW5nIHByb3BlcnR5XG4gICAgcmV0dXJuIHdhcm5pbmcgJiYgd2FybmluZy5fd2FybmluZyA/IHdhcm5pbmcuX3dhcm5pbmcgOiB3YXJuaW5nO1xuICB9O1xuXG4gIHZhciBDb25uZWN0ZWRGaWVsZCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKENvbm5lY3RlZEZpZWxkLCBfQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIENvbm5lY3RlZEZpZWxkKHByb3BzKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29ubmVjdGVkRmllbGQpO1xuXG4gICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQ29ubmVjdGVkRmllbGQuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihDb25uZWN0ZWRGaWVsZCkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgICAgX3RoaXMuaGFuZGxlQ2hhbmdlID0gX3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQoX3RoaXMpO1xuICAgICAgX3RoaXMuaGFuZGxlRm9jdXMgPSBfdGhpcy5oYW5kbGVGb2N1cy5iaW5kKF90aGlzKTtcbiAgICAgIF90aGlzLmhhbmRsZUJsdXIgPSBfdGhpcy5oYW5kbGVCbHVyLmJpbmQoX3RoaXMpO1xuICAgICAgX3RoaXMuaGFuZGxlRHJhZ1N0YXJ0ID0gX3RoaXMuaGFuZGxlRHJhZ1N0YXJ0LmJpbmQoX3RoaXMpO1xuICAgICAgX3RoaXMuaGFuZGxlRHJvcCA9IF90aGlzLmhhbmRsZURyb3AuYmluZChfdGhpcyk7XG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKENvbm5lY3RlZEZpZWxkLCBbe1xuICAgICAga2V5OiAnc2hvdWxkQ29tcG9uZW50VXBkYXRlJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIHZhciBuZXh0UHJvcHNLZXlzID0gT2JqZWN0LmtleXMobmV4dFByb3BzKTtcbiAgICAgICAgdmFyIHRoaXNQcm9wc0tleXMgPSBPYmplY3Qua2V5cyh0aGlzLnByb3BzKTtcbiAgICAgICAgcmV0dXJuIG5leHRQcm9wc0tleXMubGVuZ3RoICE9PSB0aGlzUHJvcHNLZXlzLmxlbmd0aCB8fCBuZXh0UHJvcHNLZXlzLnNvbWUoZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgICByZXR1cm4gIX5wcm9wc1RvTm90VXBkYXRlRm9yLmluZGV4T2YocHJvcCkgJiYgIWRlZXBFcXVhbChfdGhpczIucHJvcHNbcHJvcF0sIG5leHRQcm9wc1twcm9wXSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2lzUHJpc3RpbmUnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzUHJpc3RpbmUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLnByaXN0aW5lO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2dldFZhbHVlJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMudmFsdWU7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnZ2V0UmVuZGVyZWRDb21wb25lbnQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFJlbmRlcmVkQ29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWZzLnJlbmRlcmVkQ29tcG9uZW50O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2hhbmRsZUNoYW5nZScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgbmFtZSA9IF9wcm9wcy5uYW1lLFxuICAgICAgICAgICAgZGlzcGF0Y2ggPSBfcHJvcHMuZGlzcGF0Y2gsXG4gICAgICAgICAgICBwYXJzZSA9IF9wcm9wcy5wYXJzZSxcbiAgICAgICAgICAgIG5vcm1hbGl6ZSA9IF9wcm9wcy5ub3JtYWxpemUsXG4gICAgICAgICAgICBvbkNoYW5nZSA9IF9wcm9wcy5vbkNoYW5nZSxcbiAgICAgICAgICAgIF9yZWR1eEZvcm0gPSBfcHJvcHMuX3JlZHV4Rm9ybSxcbiAgICAgICAgICAgIHByZXZpb3VzVmFsdWUgPSBfcHJvcHMudmFsdWU7XG5cbiAgICAgICAgdmFyIG5ld1ZhbHVlID0gKDAsIF9vbkNoYW5nZVZhbHVlMi5kZWZhdWx0KShldmVudCwgeyBuYW1lOiBuYW1lLCBwYXJzZTogcGFyc2UsIG5vcm1hbGl6ZTogbm9ybWFsaXplIH0pO1xuXG4gICAgICAgIHZhciBkZWZhdWx0UHJldmVudGVkID0gZmFsc2U7XG4gICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgIG9uQ2hhbmdlKF9leHRlbmRzKHt9LCBldmVudCwge1xuICAgICAgICAgICAgcHJldmVudERlZmF1bHQ6IGZ1bmN0aW9uIHByZXZlbnREZWZhdWx0KCkge1xuICAgICAgICAgICAgICBkZWZhdWx0UHJldmVudGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksIG5ld1ZhbHVlLCBwcmV2aW91c1ZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICAvLyBkaXNwYXRjaCBjaGFuZ2UgYWN0aW9uXG4gICAgICAgICAgZGlzcGF0Y2goX3JlZHV4Rm9ybS5jaGFuZ2UobmFtZSwgbmV3VmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2hhbmRsZUZvY3VzJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVGb2N1cyhldmVudCkge1xuICAgICAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBuYW1lID0gX3Byb3BzMi5uYW1lLFxuICAgICAgICAgICAgZGlzcGF0Y2ggPSBfcHJvcHMyLmRpc3BhdGNoLFxuICAgICAgICAgICAgb25Gb2N1cyA9IF9wcm9wczIub25Gb2N1cyxcbiAgICAgICAgICAgIF9yZWR1eEZvcm0gPSBfcHJvcHMyLl9yZWR1eEZvcm07XG5cblxuICAgICAgICB2YXIgZGVmYXVsdFByZXZlbnRlZCA9IGZhbHNlO1xuICAgICAgICBpZiAob25Gb2N1cykge1xuICAgICAgICAgIG9uRm9jdXMoX2V4dGVuZHMoe30sIGV2ZW50LCB7XG4gICAgICAgICAgICBwcmV2ZW50RGVmYXVsdDogZnVuY3Rpb24gcHJldmVudERlZmF1bHQoKSB7XG4gICAgICAgICAgICAgIGRlZmF1bHRQcmV2ZW50ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICByZXR1cm4gZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICBkaXNwYXRjaChfcmVkdXhGb3JtLmZvY3VzKG5hbWUpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2hhbmRsZUJsdXInLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZUJsdXIoZXZlbnQpIHtcbiAgICAgICAgdmFyIF9wcm9wczMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgbmFtZSA9IF9wcm9wczMubmFtZSxcbiAgICAgICAgICAgIGRpc3BhdGNoID0gX3Byb3BzMy5kaXNwYXRjaCxcbiAgICAgICAgICAgIHBhcnNlID0gX3Byb3BzMy5wYXJzZSxcbiAgICAgICAgICAgIG5vcm1hbGl6ZSA9IF9wcm9wczMubm9ybWFsaXplLFxuICAgICAgICAgICAgb25CbHVyID0gX3Byb3BzMy5vbkJsdXIsXG4gICAgICAgICAgICBfcmVkdXhGb3JtID0gX3Byb3BzMy5fcmVkdXhGb3JtLFxuICAgICAgICAgICAgX3ZhbHVlID0gX3Byb3BzMy5fdmFsdWUsXG4gICAgICAgICAgICBwcmV2aW91c1ZhbHVlID0gX3Byb3BzMy52YWx1ZTtcblxuICAgICAgICB2YXIgbmV3VmFsdWUgPSAoMCwgX29uQ2hhbmdlVmFsdWUyLmRlZmF1bHQpKGV2ZW50LCB7IG5hbWU6IG5hbWUsIHBhcnNlOiBwYXJzZSwgbm9ybWFsaXplOiBub3JtYWxpemUgfSk7XG5cbiAgICAgICAgLy8gZm9yIGNoZWNrYm94IGFuZCByYWRpbywgaWYgdGhlIHZhbHVlIHByb3BlcnR5IG9mIGNoZWNrYm94IG9yIHJhZGlvIGVxdWFsc1xuICAgICAgICAvLyB0aGUgdmFsdWUgcGFzc2VkIGJ5IGJsdXIgZXZlbnQsIHRoZW4gZmlyZSBibHVyIGFjdGlvbiB3aXRoIHByZXZpb3VzVmFsdWUuXG4gICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gX3ZhbHVlICYmIF92YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgbmV3VmFsdWUgPSBwcmV2aW91c1ZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRlZmF1bHRQcmV2ZW50ZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKG9uQmx1cikge1xuICAgICAgICAgIG9uQmx1cihfZXh0ZW5kcyh7fSwgZXZlbnQsIHtcbiAgICAgICAgICAgIHByZXZlbnREZWZhdWx0OiBmdW5jdGlvbiBwcmV2ZW50RGVmYXVsdCgpIHtcbiAgICAgICAgICAgICAgZGVmYXVsdFByZXZlbnRlZCA9IHRydWU7XG4gICAgICAgICAgICAgIHJldHVybiBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLCBuZXdWYWx1ZSwgcHJldmlvdXNWYWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICAvLyBkaXNwYXRjaCBibHVyIGFjdGlvblxuICAgICAgICAgIGRpc3BhdGNoKF9yZWR1eEZvcm0uYmx1cihuYW1lLCBuZXdWYWx1ZSkpO1xuXG4gICAgICAgICAgLy8gY2FsbCBwb3N0LWJsdXIgY2FsbGJhY2tcbiAgICAgICAgICBpZiAoX3JlZHV4Rm9ybS5hc3luY1ZhbGlkYXRlKSB7XG4gICAgICAgICAgICBfcmVkdXhGb3JtLmFzeW5jVmFsaWRhdGUobmFtZSwgbmV3VmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2hhbmRsZURyYWdTdGFydCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlRHJhZ1N0YXJ0KGV2ZW50KSB7XG4gICAgICAgIHZhciBfcHJvcHM0ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIG9uRHJhZ1N0YXJ0ID0gX3Byb3BzNC5vbkRyYWdTdGFydCxcbiAgICAgICAgICAgIHZhbHVlID0gX3Byb3BzNC52YWx1ZTtcblxuICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YShfZXZlbnRDb25zdHMuZGF0YUtleSwgdmFsdWUgPT0gbnVsbCA/ICcnIDogdmFsdWUpO1xuXG4gICAgICAgIGlmIChvbkRyYWdTdGFydCkge1xuICAgICAgICAgIG9uRHJhZ1N0YXJ0KGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2hhbmRsZURyb3AnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZURyb3AoZXZlbnQpIHtcbiAgICAgICAgdmFyIF9wcm9wczUgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgbmFtZSA9IF9wcm9wczUubmFtZSxcbiAgICAgICAgICAgIGRpc3BhdGNoID0gX3Byb3BzNS5kaXNwYXRjaCxcbiAgICAgICAgICAgIG9uRHJvcCA9IF9wcm9wczUub25Ecm9wLFxuICAgICAgICAgICAgX3JlZHV4Rm9ybSA9IF9wcm9wczUuX3JlZHV4Rm9ybSxcbiAgICAgICAgICAgIHByZXZpb3VzVmFsdWUgPSBfcHJvcHM1LnZhbHVlO1xuXG4gICAgICAgIHZhciBuZXdWYWx1ZSA9IGV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKF9ldmVudENvbnN0cy5kYXRhS2V5KTtcblxuICAgICAgICB2YXIgZGVmYXVsdFByZXZlbnRlZCA9IGZhbHNlO1xuICAgICAgICBpZiAob25Ecm9wKSB7XG4gICAgICAgICAgb25Ecm9wKF9leHRlbmRzKHt9LCBldmVudCwge1xuICAgICAgICAgICAgcHJldmVudERlZmF1bHQ6IGZ1bmN0aW9uIHByZXZlbnREZWZhdWx0KCkge1xuICAgICAgICAgICAgICBkZWZhdWx0UHJldmVudGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksIG5ld1ZhbHVlLCBwcmV2aW91c1ZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgIC8vIGRpc3BhdGNoIGNoYW5nZSBhY3Rpb25cbiAgICAgICAgICBkaXNwYXRjaChfcmVkdXhGb3JtLmNoYW5nZShuYW1lLCBuZXdWYWx1ZSkpO1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIF9wcm9wczYgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgY29tcG9uZW50ID0gX3Byb3BzNi5jb21wb25lbnQsXG4gICAgICAgICAgICB3aXRoUmVmID0gX3Byb3BzNi53aXRoUmVmLFxuICAgICAgICAgICAgbmFtZSA9IF9wcm9wczYubmFtZSxcbiAgICAgICAgICAgIF9yZWR1eEZvcm0gPSBfcHJvcHM2Ll9yZWR1eEZvcm0sXG4gICAgICAgICAgICBub3JtYWxpemUgPSBfcHJvcHM2Lm5vcm1hbGl6ZSxcbiAgICAgICAgICAgIG9uQmx1ciA9IF9wcm9wczYub25CbHVyLFxuICAgICAgICAgICAgb25DaGFuZ2UgPSBfcHJvcHM2Lm9uQ2hhbmdlLFxuICAgICAgICAgICAgb25Gb2N1cyA9IF9wcm9wczYub25Gb2N1cyxcbiAgICAgICAgICAgIG9uRHJhZ1N0YXJ0ID0gX3Byb3BzNi5vbkRyYWdTdGFydCxcbiAgICAgICAgICAgIG9uRHJvcCA9IF9wcm9wczYub25Ecm9wLFxuICAgICAgICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHM2LCBbJ2NvbXBvbmVudCcsICd3aXRoUmVmJywgJ25hbWUnLCAnX3JlZHV4Rm9ybScsICdub3JtYWxpemUnLCAnb25CbHVyJywgJ29uQ2hhbmdlJywgJ29uRm9jdXMnLCAnb25EcmFnU3RhcnQnLCAnb25Ecm9wJ10pO1xuXG4gICAgICAgIHZhciBfY3JlYXRlRmllbGRQcm9wcyA9ICgwLCBfY3JlYXRlRmllbGRQcm9wczMuZGVmYXVsdCkoeyBnZXRJbjogZ2V0SW4sIHRvSlM6IHRvSlMgfSwgbmFtZSwgX2V4dGVuZHMoe30sIHJlc3QsIHtcbiAgICAgICAgICBmb3JtOiBfcmVkdXhGb3JtLmZvcm0sXG4gICAgICAgICAgb25CbHVyOiB0aGlzLmhhbmRsZUJsdXIsXG4gICAgICAgICAgb25DaGFuZ2U6IHRoaXMuaGFuZGxlQ2hhbmdlLFxuICAgICAgICAgIG9uRHJvcDogdGhpcy5oYW5kbGVEcm9wLFxuICAgICAgICAgIG9uRHJhZ1N0YXJ0OiB0aGlzLmhhbmRsZURyYWdTdGFydCxcbiAgICAgICAgICBvbkZvY3VzOiB0aGlzLmhhbmRsZUZvY3VzXG4gICAgICAgIH0pKSxcbiAgICAgICAgICAgIGN1c3RvbSA9IF9jcmVhdGVGaWVsZFByb3BzLmN1c3RvbSxcbiAgICAgICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9jcmVhdGVGaWVsZFByb3BzLCBbJ2N1c3RvbSddKTtcblxuICAgICAgICBpZiAod2l0aFJlZikge1xuICAgICAgICAgIGN1c3RvbS5yZWYgPSAncmVuZGVyZWRDb21wb25lbnQnO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHZhciBpbnB1dCA9IHByb3BzLmlucHV0LFxuICAgICAgICAgICAgICBtZXRhID0gcHJvcHMubWV0YTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgICAgICAgIC8vIGZsYXR0ZW4gaW5wdXQgaW50byBvdGhlciBwcm9wc1xuXG4gICAgICAgICAgcmV0dXJuICgwLCBfcmVhY3QuY3JlYXRlRWxlbWVudCkoY29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgaW5wdXQsIGN1c3RvbSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAoMCwgX3JlYWN0LmNyZWF0ZUVsZW1lbnQpKGNvbXBvbmVudCwgX2V4dGVuZHMoe30sIHByb3BzLCBjdXN0b20pKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBDb25uZWN0ZWRGaWVsZDtcbiAgfShfcmVhY3QuQ29tcG9uZW50KTtcblxuICBDb25uZWN0ZWRGaWVsZC5wcm9wVHlwZXMgPSB7XG4gICAgY29tcG9uZW50OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLCBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZ10pLmlzUmVxdWlyZWQsXG4gICAgcHJvcHM6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XG4gIH07XG5cbiAgdmFyIGNvbm5lY3RvciA9ICgwLCBfcmVhY3RSZWR1eC5jb25uZWN0KShmdW5jdGlvbiAoc3RhdGUsIG93blByb3BzKSB7XG4gICAgdmFyIG5hbWUgPSBvd25Qcm9wcy5uYW1lLFxuICAgICAgICBfb3duUHJvcHMkX3JlZHV4Rm9ybSA9IG93blByb3BzLl9yZWR1eEZvcm0sXG4gICAgICAgIGluaXRpYWxWYWx1ZXMgPSBfb3duUHJvcHMkX3JlZHV4Rm9ybS5pbml0aWFsVmFsdWVzLFxuICAgICAgICBnZXRGb3JtU3RhdGUgPSBfb3duUHJvcHMkX3JlZHV4Rm9ybS5nZXRGb3JtU3RhdGU7XG5cbiAgICB2YXIgZm9ybVN0YXRlID0gZ2V0Rm9ybVN0YXRlKHN0YXRlKTtcbiAgICB2YXIgaW5pdGlhbFN0YXRlID0gZ2V0SW4oZm9ybVN0YXRlLCAnaW5pdGlhbC4nICsgbmFtZSk7XG4gICAgdmFyIGluaXRpYWwgPSBpbml0aWFsU3RhdGUgIT09IHVuZGVmaW5lZCA/IGluaXRpYWxTdGF0ZSA6IGluaXRpYWxWYWx1ZXMgJiYgZ2V0SW4oaW5pdGlhbFZhbHVlcywgbmFtZSk7XG4gICAgdmFyIHZhbHVlID0gZ2V0SW4oZm9ybVN0YXRlLCAndmFsdWVzLicgKyBuYW1lKTtcbiAgICB2YXIgc3VibWl0dGluZyA9IGdldEluKGZvcm1TdGF0ZSwgJ3N1Ym1pdHRpbmcnKTtcbiAgICB2YXIgc3luY0Vycm9yID0gZ2V0U3luY0Vycm9yKGdldEluKGZvcm1TdGF0ZSwgJ3N5bmNFcnJvcnMnKSwgbmFtZSk7XG4gICAgdmFyIHN5bmNXYXJuaW5nID0gZ2V0U3luY1dhcm5pbmcoZ2V0SW4oZm9ybVN0YXRlLCAnc3luY1dhcm5pbmdzJyksIG5hbWUpO1xuICAgIHZhciBwcmlzdGluZSA9IGRlZXBFcXVhbCh2YWx1ZSwgaW5pdGlhbCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFzeW5jRXJyb3I6IGdldEluKGZvcm1TdGF0ZSwgJ2FzeW5jRXJyb3JzLicgKyBuYW1lKSxcbiAgICAgIGFzeW5jVmFsaWRhdGluZzogZ2V0SW4oZm9ybVN0YXRlLCAnYXN5bmNWYWxpZGF0aW5nJykgPT09IG5hbWUsXG4gICAgICBkaXJ0eTogIXByaXN0aW5lLFxuICAgICAgcHJpc3RpbmU6IHByaXN0aW5lLFxuICAgICAgc3RhdGU6IGdldEluKGZvcm1TdGF0ZSwgJ2ZpZWxkcy4nICsgbmFtZSksXG4gICAgICBzdWJtaXRFcnJvcjogZ2V0SW4oZm9ybVN0YXRlLCAnc3VibWl0RXJyb3JzLicgKyBuYW1lKSxcbiAgICAgIHN1Ym1pdEZhaWxlZDogZ2V0SW4oZm9ybVN0YXRlLCAnc3VibWl0RmFpbGVkJyksXG4gICAgICBzdWJtaXR0aW5nOiBzdWJtaXR0aW5nLFxuICAgICAgc3luY0Vycm9yOiBzeW5jRXJyb3IsXG4gICAgICBzeW5jV2FybmluZzogc3luY1dhcm5pbmcsXG4gICAgICBpbml0aWFsOiBpbml0aWFsLFxuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgX3ZhbHVlOiBvd25Qcm9wcy52YWx1ZSAvLyBzYXZlIHZhbHVlIHBhc3NlZCBpbiAoZm9yIGNoZWNrYm94ZXMpXG4gICAgfTtcbiAgfSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHsgd2l0aFJlZjogdHJ1ZSB9KTtcbiAgcmV0dXJuIGNvbm5lY3RvcihDb25uZWN0ZWRGaWVsZCk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVDb25uZWN0ZWRGaWVsZDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtZm9ybS9saWIvQ29ubmVjdGVkRmllbGQuanNcbi8vIG1vZHVsZSBpZCA9IDE4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfbWFwVmFsdWVzMiA9IHJlcXVpcmUoJ2xvZGFzaC9tYXBWYWx1ZXMnKTtcblxudmFyIF9tYXBWYWx1ZXMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWFwVmFsdWVzMik7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9yZWFjdFJlZHV4ID0gcmVxdWlyZSgncmVhY3QtcmVkdXgnKTtcblxudmFyIF9yZWR1eCA9IHJlcXVpcmUoJ3JlZHV4Jyk7XG5cbnZhciBfY3JlYXRlRmllbGRBcnJheVByb3BzID0gcmVxdWlyZSgnLi9jcmVhdGVGaWVsZEFycmF5UHJvcHMnKTtcblxudmFyIF9jcmVhdGVGaWVsZEFycmF5UHJvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlRmllbGRBcnJheVByb3BzKTtcblxudmFyIF9wbGFpbiA9IHJlcXVpcmUoJy4vc3RydWN0dXJlL3BsYWluJyk7XG5cbnZhciBfcGxhaW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGxhaW4pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIHByb3BzVG9Ob3RVcGRhdGVGb3IgPSBbJ19yZWR1eEZvcm0nLCAndmFsdWUnXTtcblxudmFyIGNyZWF0ZUNvbm5lY3RlZEZpZWxkQXJyYXkgPSBmdW5jdGlvbiBjcmVhdGVDb25uZWN0ZWRGaWVsZEFycmF5KF9yZWYpIHtcbiAgdmFyIGRlZXBFcXVhbCA9IF9yZWYuZGVlcEVxdWFsLFxuICAgICAgZ2V0SW4gPSBfcmVmLmdldEluLFxuICAgICAgc2l6ZSA9IF9yZWYuc2l6ZTtcblxuICB2YXIgZ2V0U3luY0Vycm9yID0gZnVuY3Rpb24gZ2V0U3luY0Vycm9yKHN5bmNFcnJvcnMsIG5hbWUpIHtcbiAgICAvLyBGb3IgYW4gYXJyYXksIHRoZSBlcnJvciBjYW4gX09OTFlfIGJlIHVuZGVyIF9lcnJvci5cbiAgICAvLyBUaGlzIGlzIHdoeSB0aGlzIGdldFN5bmNFcnJvciBpcyBub3QgdGhlIHNhbWUgYXMgdGhlXG4gICAgLy8gb25lIGluIEZpZWxkLlxuICAgIHJldHVybiBfcGxhaW4yLmRlZmF1bHQuZ2V0SW4oc3luY0Vycm9ycywgbmFtZSArICcuX2Vycm9yJyk7XG4gIH07XG5cbiAgdmFyIGdldFN5bmNXYXJuaW5nID0gZnVuY3Rpb24gZ2V0U3luY1dhcm5pbmcoc3luY1dhcm5pbmdzLCBuYW1lKSB7XG4gICAgLy8gRm9yIGFuIGFycmF5LCB0aGUgd2FybmluZyBjYW4gX09OTFlfIGJlIHVuZGVyIF93YXJuaW5nLlxuICAgIC8vIFRoaXMgaXMgd2h5IHRoaXMgZ2V0U3luY0Vycm9yIGlzIG5vdCB0aGUgc2FtZSBhcyB0aGVcbiAgICAvLyBvbmUgaW4gRmllbGQuXG4gICAgcmV0dXJuIGdldEluKHN5bmNXYXJuaW5ncywgbmFtZSArICcuX3dhcm5pbmcnKTtcbiAgfTtcblxuICB2YXIgQ29ubmVjdGVkRmllbGRBcnJheSA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKENvbm5lY3RlZEZpZWxkQXJyYXksIF9Db21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gQ29ubmVjdGVkRmllbGRBcnJheSgpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb25uZWN0ZWRGaWVsZEFycmF5KTtcblxuICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKENvbm5lY3RlZEZpZWxkQXJyYXkuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihDb25uZWN0ZWRGaWVsZEFycmF5KSkuY2FsbCh0aGlzKSk7XG5cbiAgICAgIF90aGlzLmdldFZhbHVlID0gX3RoaXMuZ2V0VmFsdWUuYmluZChfdGhpcyk7XG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKENvbm5lY3RlZEZpZWxkQXJyYXksIFt7XG4gICAgICBrZXk6ICdzaG91bGRDb21wb25lbnRVcGRhdGUnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgLy8gVXBkYXRlIGlmIHRoZSBlbGVtZW50cyBvZiB0aGUgdmFsdWUgYXJyYXkgd2FzIHVwZGF0ZWQuXG4gICAgICAgIHZhciB0aGlzVmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlO1xuICAgICAgICB2YXIgbmV4dFZhbHVlID0gbmV4dFByb3BzLnZhbHVlO1xuXG4gICAgICAgIGlmICh0aGlzVmFsdWUgJiYgbmV4dFZhbHVlKSB7XG4gICAgICAgICAgaWYgKHRoaXNWYWx1ZS5sZW5ndGggIT09IG5leHRWYWx1ZS5sZW5ndGggfHwgdGhpc1ZhbHVlLmV2ZXJ5KGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXh0VmFsdWUuc29tZShmdW5jdGlvbiAobmV4dCkge1xuICAgICAgICAgICAgICByZXR1cm4gZGVlcEVxdWFsKHZhbCwgbmV4dCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG5leHRQcm9wc0tleXMgPSBPYmplY3Qua2V5cyhuZXh0UHJvcHMpO1xuICAgICAgICB2YXIgdGhpc1Byb3BzS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMucHJvcHMpO1xuICAgICAgICByZXR1cm4gbmV4dFByb3BzS2V5cy5sZW5ndGggIT09IHRoaXNQcm9wc0tleXMubGVuZ3RoIHx8IG5leHRQcm9wc0tleXMuc29tZShmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICAgIC8vIHVzZWZ1bCB0byBkZWJ1ZyByZXJlbmRlcnNcbiAgICAgICAgICAvLyBpZiAoIXBsYWluLmRlZXBFcXVhbCh0aGlzLnByb3BzWyBwcm9wIF0sIG5leHRQcm9wc1sgcHJvcCBdKSkge1xuICAgICAgICAgIC8vICAgY29uc29sZS5pbmZvKHByb3AsICdjaGFuZ2VkJywgdGhpcy5wcm9wc1sgcHJvcCBdLCAnPT0+JywgbmV4dFByb3BzWyBwcm9wIF0pXG4gICAgICAgICAgLy8gfVxuICAgICAgICAgIHJldHVybiAhfnByb3BzVG9Ob3RVcGRhdGVGb3IuaW5kZXhPZihwcm9wKSAmJiAhZGVlcEVxdWFsKF90aGlzMi5wcm9wc1twcm9wXSwgbmV4dFByb3BzW3Byb3BdKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnZ2V0UmVuZGVyZWRDb21wb25lbnQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFJlbmRlcmVkQ29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWZzLnJlbmRlcmVkQ29tcG9uZW50O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2dldFZhbHVlJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRWYWx1ZShpbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy52YWx1ZSAmJiBnZXRJbih0aGlzLnByb3BzLnZhbHVlLCBpbmRleCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgY29tcG9uZW50ID0gX3Byb3BzLmNvbXBvbmVudCxcbiAgICAgICAgICAgIHdpdGhSZWYgPSBfcHJvcHMud2l0aFJlZixcbiAgICAgICAgICAgIG5hbWUgPSBfcHJvcHMubmFtZSxcbiAgICAgICAgICAgIF9yZWR1eEZvcm0gPSBfcHJvcHMuX3JlZHV4Rm9ybSxcbiAgICAgICAgICAgIHZhbGlkYXRlID0gX3Byb3BzLnZhbGlkYXRlLFxuICAgICAgICAgICAgd2FybiA9IF9wcm9wcy53YXJuLFxuICAgICAgICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnY29tcG9uZW50JywgJ3dpdGhSZWYnLCAnbmFtZScsICdfcmVkdXhGb3JtJywgJ3ZhbGlkYXRlJywgJ3dhcm4nXSk7XG5cbiAgICAgICAgdmFyIHByb3BzID0gKDAsIF9jcmVhdGVGaWVsZEFycmF5UHJvcHMyLmRlZmF1bHQpKGdldEluLCBuYW1lLCBfcmVkdXhGb3JtLmZvcm0sIF9yZWR1eEZvcm0uc2VjdGlvblByZWZpeCwgdGhpcy5nZXRWYWx1ZSwgcmVzdCk7XG4gICAgICAgIGlmICh3aXRoUmVmKSB7XG4gICAgICAgICAgcHJvcHMucmVmID0gJ3JlbmRlcmVkQ29tcG9uZW50JztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKDAsIF9yZWFjdC5jcmVhdGVFbGVtZW50KShjb21wb25lbnQsIHByb3BzKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdkaXJ0eScsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZGlydHk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAncHJpc3RpbmUnLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLnByaXN0aW5lO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3ZhbHVlJyxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy52YWx1ZTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQ29ubmVjdGVkRmllbGRBcnJheTtcbiAgfShfcmVhY3QuQ29tcG9uZW50KTtcblxuICBDb25uZWN0ZWRGaWVsZEFycmF5LnByb3BUeXBlcyA9IHtcbiAgICBjb21wb25lbnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsIF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nXSkuaXNSZXF1aXJlZCxcbiAgICBwcm9wczogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3RcbiAgfTtcblxuICBDb25uZWN0ZWRGaWVsZEFycmF5LmNvbnRleHRUeXBlcyA9IHtcbiAgICBfcmVkdXhGb3JtOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdFxuICB9O1xuXG4gIHZhciBjb25uZWN0b3IgPSAoMCwgX3JlYWN0UmVkdXguY29ubmVjdCkoZnVuY3Rpb24gKHN0YXRlLCBvd25Qcm9wcykge1xuICAgIHZhciBuYW1lID0gb3duUHJvcHMubmFtZSxcbiAgICAgICAgX293blByb3BzJF9yZWR1eEZvcm0gPSBvd25Qcm9wcy5fcmVkdXhGb3JtLFxuICAgICAgICBpbml0aWFsVmFsdWVzID0gX293blByb3BzJF9yZWR1eEZvcm0uaW5pdGlhbFZhbHVlcyxcbiAgICAgICAgZ2V0Rm9ybVN0YXRlID0gX293blByb3BzJF9yZWR1eEZvcm0uZ2V0Rm9ybVN0YXRlO1xuXG4gICAgdmFyIGZvcm1TdGF0ZSA9IGdldEZvcm1TdGF0ZShzdGF0ZSk7XG4gICAgdmFyIGluaXRpYWwgPSBnZXRJbihmb3JtU3RhdGUsICdpbml0aWFsLicgKyBuYW1lKSB8fCBpbml0aWFsVmFsdWVzICYmIGdldEluKGluaXRpYWxWYWx1ZXMsIG5hbWUpO1xuICAgIHZhciB2YWx1ZSA9IGdldEluKGZvcm1TdGF0ZSwgJ3ZhbHVlcy4nICsgbmFtZSk7XG4gICAgdmFyIHN1Ym1pdHRpbmcgPSBnZXRJbihmb3JtU3RhdGUsICdzdWJtaXR0aW5nJyk7XG4gICAgdmFyIHN5bmNFcnJvciA9IGdldFN5bmNFcnJvcihnZXRJbihmb3JtU3RhdGUsICdzeW5jRXJyb3JzJyksIG5hbWUpO1xuICAgIHZhciBzeW5jV2FybmluZyA9IGdldFN5bmNXYXJuaW5nKGdldEluKGZvcm1TdGF0ZSwgJ3N5bmNXYXJuaW5ncycpLCBuYW1lKTtcbiAgICB2YXIgcHJpc3RpbmUgPSBkZWVwRXF1YWwodmFsdWUsIGluaXRpYWwpO1xuICAgIHJldHVybiB7XG4gICAgICBhc3luY0Vycm9yOiBnZXRJbihmb3JtU3RhdGUsICdhc3luY0Vycm9ycy4nICsgbmFtZSArICcuX2Vycm9yJyksXG4gICAgICBkaXJ0eTogIXByaXN0aW5lLFxuICAgICAgcHJpc3RpbmU6IHByaXN0aW5lLFxuICAgICAgc3RhdGU6IGdldEluKGZvcm1TdGF0ZSwgJ2ZpZWxkcy4nICsgbmFtZSksXG4gICAgICBzdWJtaXRFcnJvcjogZ2V0SW4oZm9ybVN0YXRlLCAnc3VibWl0RXJyb3JzLicgKyBuYW1lICsgJy5fZXJyb3InKSxcbiAgICAgIHN1Ym1pdEZhaWxlZDogZ2V0SW4oZm9ybVN0YXRlLCAnc3VibWl0RmFpbGVkJyksXG4gICAgICBzdWJtaXR0aW5nOiBzdWJtaXR0aW5nLFxuICAgICAgc3luY0Vycm9yOiBzeW5jRXJyb3IsXG4gICAgICBzeW5jV2FybmluZzogc3luY1dhcm5pbmcsXG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBsZW5ndGg6IHNpemUodmFsdWUpXG4gICAgfTtcbiAgfSwgZnVuY3Rpb24gKGRpc3BhdGNoLCBvd25Qcm9wcykge1xuICAgIHZhciBuYW1lID0gb3duUHJvcHMubmFtZSxcbiAgICAgICAgX3JlZHV4Rm9ybSA9IG93blByb3BzLl9yZWR1eEZvcm07XG4gICAgdmFyIGFycmF5SW5zZXJ0ID0gX3JlZHV4Rm9ybS5hcnJheUluc2VydCxcbiAgICAgICAgYXJyYXlNb3ZlID0gX3JlZHV4Rm9ybS5hcnJheU1vdmUsXG4gICAgICAgIGFycmF5UG9wID0gX3JlZHV4Rm9ybS5hcnJheVBvcCxcbiAgICAgICAgYXJyYXlQdXNoID0gX3JlZHV4Rm9ybS5hcnJheVB1c2gsXG4gICAgICAgIGFycmF5UmVtb3ZlID0gX3JlZHV4Rm9ybS5hcnJheVJlbW92ZSxcbiAgICAgICAgYXJyYXlSZW1vdmVBbGwgPSBfcmVkdXhGb3JtLmFycmF5UmVtb3ZlQWxsLFxuICAgICAgICBhcnJheVNoaWZ0ID0gX3JlZHV4Rm9ybS5hcnJheVNoaWZ0LFxuICAgICAgICBhcnJheVNwbGljZSA9IF9yZWR1eEZvcm0uYXJyYXlTcGxpY2UsXG4gICAgICAgIGFycmF5U3dhcCA9IF9yZWR1eEZvcm0uYXJyYXlTd2FwLFxuICAgICAgICBhcnJheVVuc2hpZnQgPSBfcmVkdXhGb3JtLmFycmF5VW5zaGlmdDtcblxuICAgIHJldHVybiAoMCwgX21hcFZhbHVlczMuZGVmYXVsdCkoe1xuICAgICAgYXJyYXlJbnNlcnQ6IGFycmF5SW5zZXJ0LFxuICAgICAgYXJyYXlNb3ZlOiBhcnJheU1vdmUsXG4gICAgICBhcnJheVBvcDogYXJyYXlQb3AsXG4gICAgICBhcnJheVB1c2g6IGFycmF5UHVzaCxcbiAgICAgIGFycmF5UmVtb3ZlOiBhcnJheVJlbW92ZSxcbiAgICAgIGFycmF5UmVtb3ZlQWxsOiBhcnJheVJlbW92ZUFsbCxcbiAgICAgIGFycmF5U2hpZnQ6IGFycmF5U2hpZnQsXG4gICAgICBhcnJheVNwbGljZTogYXJyYXlTcGxpY2UsXG4gICAgICBhcnJheVN3YXA6IGFycmF5U3dhcCxcbiAgICAgIGFycmF5VW5zaGlmdDogYXJyYXlVbnNoaWZ0XG4gICAgfSwgZnVuY3Rpb24gKGFjdGlvbkNyZWF0b3IpIHtcbiAgICAgIHJldHVybiAoMCwgX3JlZHV4LmJpbmRBY3Rpb25DcmVhdG9ycykoYWN0aW9uQ3JlYXRvci5iaW5kKG51bGwsIG5hbWUpLCBkaXNwYXRjaCk7XG4gICAgfSk7XG4gIH0sIHVuZGVmaW5lZCwgeyB3aXRoUmVmOiB0cnVlIH0pO1xuICByZXR1cm4gY29ubmVjdG9yKENvbm5lY3RlZEZpZWxkQXJyYXkpO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlQ29ubmVjdGVkRmllbGRBcnJheTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtZm9ybS9saWIvQ29ubmVjdGVkRmllbGRBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMTg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3JlYWN0UmVkdXggPSByZXF1aXJlKCdyZWFjdC1yZWR1eCcpO1xuXG52YXIgX2NyZWF0ZUZpZWxkUHJvcHMyID0gcmVxdWlyZSgnLi9jcmVhdGVGaWVsZFByb3BzJyk7XG5cbnZhciBfY3JlYXRlRmllbGRQcm9wczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVGaWVsZFByb3BzMik7XG5cbnZhciBfcGxhaW4gPSByZXF1aXJlKCcuL3N0cnVjdHVyZS9wbGFpbicpO1xuXG52YXIgX3BsYWluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BsYWluKTtcblxudmFyIF9vbkNoYW5nZVZhbHVlID0gcmVxdWlyZSgnLi9ldmVudHMvb25DaGFuZ2VWYWx1ZScpO1xuXG52YXIgX29uQ2hhbmdlVmFsdWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb25DaGFuZ2VWYWx1ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgcHJvcHNUb05vdFVwZGF0ZUZvciA9IFsnX3JlZHV4Rm9ybSddO1xuXG52YXIgY3JlYXRlQ29ubmVjdGVkRmllbGRzID0gZnVuY3Rpb24gY3JlYXRlQ29ubmVjdGVkRmllbGRzKF9yZWYpIHtcbiAgdmFyIGRlZXBFcXVhbCA9IF9yZWYuZGVlcEVxdWFsLFxuICAgICAgZ2V0SW4gPSBfcmVmLmdldEluLFxuICAgICAgdG9KUyA9IF9yZWYudG9KUyxcbiAgICAgIHNpemUgPSBfcmVmLnNpemU7XG5cbiAgdmFyIGdldFN5bmNFcnJvciA9IGZ1bmN0aW9uIGdldFN5bmNFcnJvcihzeW5jRXJyb3JzLCBuYW1lKSB7XG4gICAgLy8gQmVjYXVzZSB0aGUgZXJyb3IgZm9yIHRoaXMgZmllbGQgbWlnaHQgbm90IGJlIGF0IGEgbGV2ZWwgaW4gdGhlIGVycm9yIHN0cnVjdHVyZSB3aGVyZVxuICAgIC8vIGl0IGNhbiBiZSBzZXQgZGlyZWN0bHksIGl0IG1pZ2h0IG5lZWQgdG8gYmUgdW53cmFwcGVkIGZyb20gdGhlIF9lcnJvciBwcm9wZXJ0eVxuICAgIHJldHVybiBfcGxhaW4yLmRlZmF1bHQuZ2V0SW4oc3luY0Vycm9ycywgbmFtZSArICcuX2Vycm9yJykgfHwgX3BsYWluMi5kZWZhdWx0LmdldEluKHN5bmNFcnJvcnMsIG5hbWUpO1xuICB9O1xuXG4gIHZhciBnZXRTeW5jV2FybmluZyA9IGZ1bmN0aW9uIGdldFN5bmNXYXJuaW5nKHN5bmNXYXJuaW5ncywgbmFtZSkge1xuICAgIHZhciB3YXJuaW5nID0gZ2V0SW4oc3luY1dhcm5pbmdzLCBuYW1lKTtcbiAgICAvLyBCZWNhdXNlIHRoZSB3YXJuaW5nIGZvciB0aGlzIGZpZWxkIG1pZ2h0IG5vdCBiZSBhdCBhIGxldmVsIGluIHRoZSB3YXJuaW5nIHN0cnVjdHVyZSB3aGVyZVxuICAgIC8vIGl0IGNhbiBiZSBzZXQgZGlyZWN0bHksIGl0IG1pZ2h0IG5lZWQgdG8gYmUgdW53cmFwcGVkIGZyb20gdGhlIF93YXJuaW5nIHByb3BlcnR5XG4gICAgcmV0dXJuIHdhcm5pbmcgJiYgd2FybmluZy5fd2FybmluZyA/IHdhcm5pbmcuX3dhcm5pbmcgOiB3YXJuaW5nO1xuICB9O1xuXG4gIHZhciBDb25uZWN0ZWRGaWVsZHMgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhDb25uZWN0ZWRGaWVsZHMsIF9Db21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gQ29ubmVjdGVkRmllbGRzKHByb3BzKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29ubmVjdGVkRmllbGRzKTtcblxuICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKENvbm5lY3RlZEZpZWxkcy5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKENvbm5lY3RlZEZpZWxkcykpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgICAgX3RoaXMuaGFuZGxlQ2hhbmdlID0gX3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQoX3RoaXMpO1xuICAgICAgX3RoaXMuaGFuZGxlRm9jdXMgPSBfdGhpcy5oYW5kbGVGb2N1cy5iaW5kKF90aGlzKTtcbiAgICAgIF90aGlzLmhhbmRsZUJsdXIgPSBfdGhpcy5oYW5kbGVCbHVyLmJpbmQoX3RoaXMpO1xuXG4gICAgICBfdGhpcy5vbkNoYW5nZUZucyA9IHByb3BzLm5hbWVzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBuYW1lKSB7XG4gICAgICAgIGFjY1tuYW1lXSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5oYW5kbGVDaGFuZ2UobmFtZSwgZXZlbnQpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwge30pO1xuXG4gICAgICBfdGhpcy5vbkZvY3VzRm5zID0gcHJvcHMubmFtZXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIG5hbWUpIHtcbiAgICAgICAgYWNjW25hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5oYW5kbGVGb2N1cyhuYW1lKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIHt9KTtcblxuICAgICAgX3RoaXMub25CbHVyRm5zID0gcHJvcHMubmFtZXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIG5hbWUpIHtcbiAgICAgICAgYWNjW25hbWVdID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLmhhbmRsZUJsdXIobmFtZSwgZXZlbnQpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwge30pO1xuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhDb25uZWN0ZWRGaWVsZHMsIFt7XG4gICAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5uYW1lcyAhPT0gbmV4dFByb3BzLm5hbWVzICYmIChzaXplKHRoaXMucHJvcHMubmFtZXMpICE9PSBzaXplKG5leHRQcm9wcy5uYW1lcykgfHwgbmV4dFByb3BzLm5hbWVzLnNvbWUoZnVuY3Rpb24gKG5leHROYW1lKSB7XG4gICAgICAgICAgcmV0dXJuICFfdGhpczIucHJvcHMuX2ZpZWxkc1tuZXh0TmFtZV07XG4gICAgICAgIH0pKSkge1xuICAgICAgICAgIC8vIG5hbWVzIGlzIGNoYW5nZWQuIFRoZSBjYWNoZWQgZXZlbnQgaGFuZGxlcnMgbmVlZCB0byBiZSB1cGRhdGVkXG4gICAgICAgICAgdGhpcy5vbkNoYW5nZUZucyA9IG5leHRQcm9wcy5uYW1lcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgbmFtZSkge1xuICAgICAgICAgICAgYWNjW25hbWVdID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdGhpczIuaGFuZGxlQ2hhbmdlKG5hbWUsIGV2ZW50KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH0sIHt9KTtcblxuICAgICAgICAgIHRoaXMub25Gb2N1c0ZucyA9IG5leHRQcm9wcy5uYW1lcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgbmFtZSkge1xuICAgICAgICAgICAgYWNjW25hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3RoaXMyLmhhbmRsZUZvY3VzKG5hbWUpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgfSwge30pO1xuXG4gICAgICAgICAgdGhpcy5vbkJsdXJGbnMgPSBuZXh0UHJvcHMubmFtZXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIG5hbWUpIHtcbiAgICAgICAgICAgIGFjY1tuYW1lXSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3RoaXMyLmhhbmRsZUJsdXIobmFtZSwgZXZlbnQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgfSwge30pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnc2hvdWxkQ29tcG9uZW50VXBkYXRlJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgIHZhciBuZXh0UHJvcHNLZXlzID0gT2JqZWN0LmtleXMobmV4dFByb3BzKTtcbiAgICAgICAgdmFyIHRoaXNQcm9wc0tleXMgPSBPYmplY3Qua2V5cyh0aGlzLnByb3BzKTtcbiAgICAgICAgcmV0dXJuIG5leHRQcm9wc0tleXMubGVuZ3RoICE9PSB0aGlzUHJvcHNLZXlzLmxlbmd0aCB8fCBuZXh0UHJvcHNLZXlzLnNvbWUoZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgICByZXR1cm4gIX5wcm9wc1RvTm90VXBkYXRlRm9yLmluZGV4T2YocHJvcCkgJiYgIWRlZXBFcXVhbChfdGhpczMucHJvcHNbcHJvcF0sIG5leHRQcm9wc1twcm9wXSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2lzRGlydHknLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzRGlydHkoKSB7XG4gICAgICAgIHZhciBfZmllbGRzID0gdGhpcy5wcm9wcy5fZmllbGRzO1xuXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhfZmllbGRzKS5zb21lKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIF9maWVsZHNbbmFtZV0uZGlydHk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2dldFZhbHVlcycsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmFsdWVzKCkge1xuICAgICAgICB2YXIgX2ZpZWxkcyA9IHRoaXMucHJvcHMuX2ZpZWxkcztcblxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoX2ZpZWxkcykucmVkdWNlKGZ1bmN0aW9uIChhY2N1bXVsYXRvciwgbmFtZSkge1xuICAgICAgICAgIHJldHVybiBfcGxhaW4yLmRlZmF1bHQuc2V0SW4oYWNjdW11bGF0b3IsIG5hbWUsIF9maWVsZHNbbmFtZV0udmFsdWUpO1xuICAgICAgICB9LCB7fSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnZ2V0UmVuZGVyZWRDb21wb25lbnQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFJlbmRlcmVkQ29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWZzLnJlbmRlcmVkQ29tcG9uZW50O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2hhbmRsZUNoYW5nZScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKG5hbWUsIGV2ZW50KSB7XG4gICAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgZGlzcGF0Y2ggPSBfcHJvcHMuZGlzcGF0Y2gsXG4gICAgICAgICAgICBwYXJzZSA9IF9wcm9wcy5wYXJzZSxcbiAgICAgICAgICAgIG5vcm1hbGl6ZSA9IF9wcm9wcy5ub3JtYWxpemUsXG4gICAgICAgICAgICBfcmVkdXhGb3JtID0gX3Byb3BzLl9yZWR1eEZvcm07XG5cbiAgICAgICAgdmFyIHZhbHVlID0gKDAsIF9vbkNoYW5nZVZhbHVlMi5kZWZhdWx0KShldmVudCwgeyBuYW1lOiBuYW1lLCBwYXJzZTogcGFyc2UsIG5vcm1hbGl6ZTogbm9ybWFsaXplIH0pO1xuXG4gICAgICAgIGRpc3BhdGNoKF9yZWR1eEZvcm0uY2hhbmdlKG5hbWUsIHZhbHVlKSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnaGFuZGxlRm9jdXMnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZUZvY3VzKG5hbWUpIHtcbiAgICAgICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgZGlzcGF0Y2ggPSBfcHJvcHMyLmRpc3BhdGNoLFxuICAgICAgICAgICAgX3JlZHV4Rm9ybSA9IF9wcm9wczIuX3JlZHV4Rm9ybTtcblxuICAgICAgICBkaXNwYXRjaChfcmVkdXhGb3JtLmZvY3VzKG5hbWUpKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdoYW5kbGVCbHVyJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVCbHVyKG5hbWUsIGV2ZW50KSB7XG4gICAgICAgIHZhciBfcHJvcHMzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGRpc3BhdGNoID0gX3Byb3BzMy5kaXNwYXRjaCxcbiAgICAgICAgICAgIHBhcnNlID0gX3Byb3BzMy5wYXJzZSxcbiAgICAgICAgICAgIG5vcm1hbGl6ZSA9IF9wcm9wczMubm9ybWFsaXplLFxuICAgICAgICAgICAgX3JlZHV4Rm9ybSA9IF9wcm9wczMuX3JlZHV4Rm9ybTtcblxuICAgICAgICB2YXIgdmFsdWUgPSAoMCwgX29uQ2hhbmdlVmFsdWUyLmRlZmF1bHQpKGV2ZW50LCB7IG5hbWU6IG5hbWUsIHBhcnNlOiBwYXJzZSwgbm9ybWFsaXplOiBub3JtYWxpemUgfSk7XG5cbiAgICAgICAgLy8gZGlzcGF0Y2ggYmx1ciBhY3Rpb25cbiAgICAgICAgZGlzcGF0Y2goX3JlZHV4Rm9ybS5ibHVyKG5hbWUsIHZhbHVlKSk7XG5cbiAgICAgICAgLy8gY2FsbCBwb3N0LWJsdXIgY2FsbGJhY2tcbiAgICAgICAgaWYgKF9yZWR1eEZvcm0uYXN5bmNWYWxpZGF0ZSkge1xuICAgICAgICAgIF9yZWR1eEZvcm0uYXN5bmNWYWxpZGF0ZShuYW1lLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgICAgdmFyIF9wcm9wczQgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgY29tcG9uZW50ID0gX3Byb3BzNC5jb21wb25lbnQsXG4gICAgICAgICAgICB3aXRoUmVmID0gX3Byb3BzNC53aXRoUmVmLFxuICAgICAgICAgICAgX2ZpZWxkcyA9IF9wcm9wczQuX2ZpZWxkcyxcbiAgICAgICAgICAgIF9yZWR1eEZvcm0gPSBfcHJvcHM0Ll9yZWR1eEZvcm0sXG4gICAgICAgICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wczQsIFsnY29tcG9uZW50JywgJ3dpdGhSZWYnLCAnX2ZpZWxkcycsICdfcmVkdXhGb3JtJ10pO1xuXG4gICAgICAgIHZhciBzZWN0aW9uUHJlZml4ID0gX3JlZHV4Rm9ybS5zZWN0aW9uUHJlZml4LFxuICAgICAgICAgICAgZm9ybSA9IF9yZWR1eEZvcm0uZm9ybTtcblxuICAgICAgICB2YXIgX09iamVjdCRrZXlzJHJlZHVjZSA9IE9iamVjdC5rZXlzKF9maWVsZHMpLnJlZHVjZShmdW5jdGlvbiAoYWNjdW11bGF0b3IsIG5hbWUpIHtcbiAgICAgICAgICB2YXIgY29ubmVjdGVkUHJvcHMgPSBfZmllbGRzW25hbWVdO1xuXG4gICAgICAgICAgdmFyIF9jcmVhdGVGaWVsZFByb3BzID0gKDAsIF9jcmVhdGVGaWVsZFByb3BzMy5kZWZhdWx0KSh7IGdldEluOiBnZXRJbiwgdG9KUzogdG9KUyB9LCBuYW1lLCBfZXh0ZW5kcyh7fSwgY29ubmVjdGVkUHJvcHMsIHJlc3QsIHtcbiAgICAgICAgICAgIGZvcm06IGZvcm0sXG4gICAgICAgICAgICBvbkJsdXI6IF90aGlzNC5vbkJsdXJGbnNbbmFtZV0sXG4gICAgICAgICAgICBvbkNoYW5nZTogX3RoaXM0Lm9uQ2hhbmdlRm5zW25hbWVdLFxuICAgICAgICAgICAgb25Gb2N1czogX3RoaXM0Lm9uRm9jdXNGbnNbbmFtZV1cbiAgICAgICAgICB9KSksXG4gICAgICAgICAgICAgIGN1c3RvbSA9IF9jcmVhdGVGaWVsZFByb3BzLmN1c3RvbSxcbiAgICAgICAgICAgICAgZmllbGRQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfY3JlYXRlRmllbGRQcm9wcywgWydjdXN0b20nXSk7XG5cbiAgICAgICAgICBhY2N1bXVsYXRvci5jdXN0b20gPSBjdXN0b207XG4gICAgICAgICAgdmFyIGZpZWxkTmFtZSA9IHNlY3Rpb25QcmVmaXggPyBuYW1lLnJlcGxhY2Uoc2VjdGlvblByZWZpeCArICcuJywgJycpIDogbmFtZTtcbiAgICAgICAgICByZXR1cm4gX3BsYWluMi5kZWZhdWx0LnNldEluKGFjY3VtdWxhdG9yLCBmaWVsZE5hbWUsIGZpZWxkUHJvcHMpO1xuICAgICAgICB9LCB7fSksXG4gICAgICAgICAgICBjdXN0b20gPSBfT2JqZWN0JGtleXMkcmVkdWNlLmN1c3RvbSxcbiAgICAgICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9PYmplY3Qka2V5cyRyZWR1Y2UsIFsnY3VzdG9tJ10pO1xuXG4gICAgICAgIGlmICh3aXRoUmVmKSB7XG4gICAgICAgICAgcHJvcHMucmVmID0gJ3JlbmRlcmVkQ29tcG9uZW50JztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoMCwgX3JlYWN0LmNyZWF0ZUVsZW1lbnQpKGNvbXBvbmVudCwgX2V4dGVuZHMoe30sIHByb3BzLCBjdXN0b20pKTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQ29ubmVjdGVkRmllbGRzO1xuICB9KF9yZWFjdC5Db21wb25lbnQpO1xuXG4gIENvbm5lY3RlZEZpZWxkcy5wcm9wVHlwZXMgPSB7XG4gICAgY29tcG9uZW50OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLCBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZ10pLmlzUmVxdWlyZWQsXG4gICAgX2ZpZWxkczogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBwcm9wczogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3RcbiAgfTtcblxuICB2YXIgY29ubmVjdG9yID0gKDAsIF9yZWFjdFJlZHV4LmNvbm5lY3QpKGZ1bmN0aW9uIChzdGF0ZSwgb3duUHJvcHMpIHtcbiAgICB2YXIgbmFtZXMgPSBvd25Qcm9wcy5uYW1lcyxcbiAgICAgICAgX293blByb3BzJF9yZWR1eEZvcm0gPSBvd25Qcm9wcy5fcmVkdXhGb3JtLFxuICAgICAgICBpbml0aWFsVmFsdWVzID0gX293blByb3BzJF9yZWR1eEZvcm0uaW5pdGlhbFZhbHVlcyxcbiAgICAgICAgZ2V0Rm9ybVN0YXRlID0gX293blByb3BzJF9yZWR1eEZvcm0uZ2V0Rm9ybVN0YXRlO1xuXG4gICAgdmFyIGZvcm1TdGF0ZSA9IGdldEZvcm1TdGF0ZShzdGF0ZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIF9maWVsZHM6IG5hbWVzLnJlZHVjZShmdW5jdGlvbiAoYWNjdW11bGF0b3IsIG5hbWUpIHtcbiAgICAgICAgdmFyIGluaXRpYWxTdGF0ZSA9IGdldEluKGZvcm1TdGF0ZSwgJ2luaXRpYWwuJyArIG5hbWUpO1xuICAgICAgICB2YXIgaW5pdGlhbCA9IGluaXRpYWxTdGF0ZSAhPT0gdW5kZWZpbmVkID8gaW5pdGlhbFN0YXRlIDogaW5pdGlhbFZhbHVlcyAmJiBnZXRJbihpbml0aWFsVmFsdWVzLCBuYW1lKTtcbiAgICAgICAgdmFyIHZhbHVlID0gZ2V0SW4oZm9ybVN0YXRlLCAndmFsdWVzLicgKyBuYW1lKTtcbiAgICAgICAgdmFyIHN5bmNFcnJvciA9IGdldFN5bmNFcnJvcihnZXRJbihmb3JtU3RhdGUsICdzeW5jRXJyb3JzJyksIG5hbWUpO1xuICAgICAgICB2YXIgc3luY1dhcm5pbmcgPSBnZXRTeW5jV2FybmluZyhnZXRJbihmb3JtU3RhdGUsICdzeW5jV2FybmluZ3MnKSwgbmFtZSk7XG4gICAgICAgIHZhciBzdWJtaXR0aW5nID0gZ2V0SW4oZm9ybVN0YXRlLCAnc3VibWl0dGluZycpO1xuICAgICAgICB2YXIgcHJpc3RpbmUgPSB2YWx1ZSA9PT0gaW5pdGlhbDtcbiAgICAgICAgYWNjdW11bGF0b3JbbmFtZV0gPSB7XG4gICAgICAgICAgYXN5bmNFcnJvcjogZ2V0SW4oZm9ybVN0YXRlLCAnYXN5bmNFcnJvcnMuJyArIG5hbWUpLFxuICAgICAgICAgIGFzeW5jVmFsaWRhdGluZzogZ2V0SW4oZm9ybVN0YXRlLCAnYXN5bmNWYWxpZGF0aW5nJykgPT09IG5hbWUsXG4gICAgICAgICAgZGlydHk6ICFwcmlzdGluZSxcbiAgICAgICAgICBwcmlzdGluZTogcHJpc3RpbmUsXG4gICAgICAgICAgc3RhdGU6IGdldEluKGZvcm1TdGF0ZSwgJ2ZpZWxkcy4nICsgbmFtZSksXG4gICAgICAgICAgc3VibWl0RXJyb3I6IGdldEluKGZvcm1TdGF0ZSwgJ3N1Ym1pdEVycm9ycy4nICsgbmFtZSksXG4gICAgICAgICAgc3VibWl0RmFpbGVkOiBnZXRJbihmb3JtU3RhdGUsICdzdWJtaXRGYWlsZWQnKSxcbiAgICAgICAgICBzdWJtaXR0aW5nOiBzdWJtaXR0aW5nLFxuICAgICAgICAgIHN5bmNFcnJvcjogc3luY0Vycm9yLFxuICAgICAgICAgIHN5bmNXYXJuaW5nOiBzeW5jV2FybmluZyxcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgX3ZhbHVlOiBvd25Qcm9wcy52YWx1ZSAvLyBzYXZlIHZhbHVlIHBhc3NlZCBpbiAoZm9yIGNoZWNrYm94ZXMpXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgICAgIH0sIHt9KVxuICAgIH07XG4gIH0sIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB7IHdpdGhSZWY6IHRydWUgfSk7XG4gIHJldHVybiBjb25uZWN0b3IoQ29ubmVjdGVkRmllbGRzKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZUNvbm5lY3RlZEZpZWxkcztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtZm9ybS9saWIvQ29ubmVjdGVkRmllbGRzLmpzXG4vLyBtb2R1bGUgaWQgPSAxOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUZpZWxkID0gcmVxdWlyZSgnLi9jcmVhdGVGaWVsZCcpO1xuXG52YXIgX2NyZWF0ZUZpZWxkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUZpZWxkKTtcblxudmFyIF9wbGFpbiA9IHJlcXVpcmUoJy4vc3RydWN0dXJlL3BsYWluJyk7XG5cbnZhciBfcGxhaW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGxhaW4pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSAoMCwgX2NyZWF0ZUZpZWxkMi5kZWZhdWx0KShfcGxhaW4yLmRlZmF1bHQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC1mb3JtL2xpYi9GaWVsZC5qc1xuLy8gbW9kdWxlIGlkID0gMTkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVGaWVsZEFycmF5ID0gcmVxdWlyZSgnLi9jcmVhdGVGaWVsZEFycmF5Jyk7XG5cbnZhciBfY3JlYXRlRmllbGRBcnJheTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVGaWVsZEFycmF5KTtcblxudmFyIF9wbGFpbiA9IHJlcXVpcmUoJy4vc3RydWN0dXJlL3BsYWluJyk7XG5cbnZhciBfcGxhaW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGxhaW4pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSAoMCwgX2NyZWF0ZUZpZWxkQXJyYXkyLmRlZmF1bHQpKF9wbGFpbjIuZGVmYXVsdCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4LWZvcm0vbGliL0ZpZWxkQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDE5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlRmllbGRzID0gcmVxdWlyZSgnLi9jcmVhdGVGaWVsZHMnKTtcblxudmFyIF9jcmVhdGVGaWVsZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlRmllbGRzKTtcblxudmFyIF9wbGFpbiA9IHJlcXVpcmUoJy4vc3RydWN0dXJlL3BsYWluJyk7XG5cbnZhciBfcGxhaW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGxhaW4pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSAoMCwgX2NyZWF0ZUZpZWxkczIuZGVmYXVsdCkoX3BsYWluMi5kZWZhdWx0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtZm9ybS9saWIvRmllbGRzLmpzXG4vLyBtb2R1bGUgaWQgPSAxOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBGb3JtID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEZvcm0sIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEZvcm0ocHJvcHMsIGNvbnRleHQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRm9ybSk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoRm9ybS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEZvcm0pKS5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0KSk7XG5cbiAgICBpZiAoIWNvbnRleHQuX3JlZHV4Rm9ybSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3JtIG11c3QgYmUgaW5zaWRlIGEgY29tcG9uZW50IGRlY29yYXRlZCB3aXRoIHJlZHV4Rm9ybSgpJyk7XG4gICAgfVxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhGb3JtLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgIHRoaXMuY29udGV4dC5fcmVkdXhGb3JtLnJlZ2lzdGVySW5uZXJPblN1Ym1pdCh0aGlzLnByb3BzLm9uU3VibWl0KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nLCB0aGlzLnByb3BzKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRm9ybTtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbkZvcm0ucHJvcFR5cGVzID0ge1xuICBvblN1Ym1pdDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLmlzUmVxdWlyZWRcbn07XG5Gb3JtLmNvbnRleHRUeXBlcyA9IHtcbiAgX3JlZHV4Rm9ybTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3Rcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEZvcm07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4LWZvcm0vbGliL0Zvcm0uanNcbi8vIG1vZHVsZSBpZCA9IDE5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfcHJlZml4TmFtZSA9IHJlcXVpcmUoJy4vdXRpbC9wcmVmaXhOYW1lJyk7XG5cbnZhciBfcHJlZml4TmFtZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVmaXhOYW1lKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBGb3JtU2VjdGlvbiA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhGb3JtU2VjdGlvbiwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRm9ybVNlY3Rpb24ocHJvcHMsIGNvbnRleHQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRm9ybVNlY3Rpb24pO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEZvcm1TZWN0aW9uLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRm9ybVNlY3Rpb24pKS5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0KSk7XG5cbiAgICBpZiAoIWNvbnRleHQuX3JlZHV4Rm9ybSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3JtU2VjdGlvbiBtdXN0IGJlIGluc2lkZSBhIGNvbXBvbmVudCBkZWNvcmF0ZWQgd2l0aCByZWR1eEZvcm0oKScpO1xuICAgIH1cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRm9ybVNlY3Rpb24sIFt7XG4gICAga2V5OiAnZ2V0Q2hpbGRDb250ZXh0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgbmFtZSA9IHRoaXMucHJvcHMubmFtZTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgX3JlZHV4Rm9ybTogX2V4dGVuZHMoe30sIGNvbnRleHQuX3JlZHV4Rm9ybSwge1xuICAgICAgICAgIHNlY3Rpb25QcmVmaXg6ICgwLCBfcHJlZml4TmFtZTIuZGVmYXVsdCkoY29udGV4dCwgbmFtZSlcbiAgICAgICAgfSlcbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgbmFtZSA9IF9wcm9wcy5uYW1lLFxuICAgICAgICAgIGNvbXBvbmVudCA9IF9wcm9wcy5jb21wb25lbnQsXG4gICAgICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnY2hpbGRyZW4nLCAnbmFtZScsICdjb21wb25lbnQnXSk7XG5cbiAgICAgIGlmIChfcmVhY3QyLmRlZmF1bHQuaXNWYWxpZEVsZW1lbnQoY2hpbGRyZW4pKSB7XG4gICAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICgwLCBfcmVhY3QuY3JlYXRlRWxlbWVudCkoY29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgcmVzdCwge1xuICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgICAgIH0pKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRm9ybVNlY3Rpb247XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5Gb3JtU2VjdGlvbi5wcm9wVHlwZXMgPSB7XG4gIG5hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGNvbXBvbmVudDogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYywgX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmddKVxufTtcblxuRm9ybVNlY3Rpb24uZGVmYXVsdFByb3BzID0ge1xuICBjb21wb25lbnQ6ICdkaXYnXG59O1xuXG5Gb3JtU2VjdGlvbi5jaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgX3JlZHV4Rm9ybTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxuRm9ybVNlY3Rpb24uY29udGV4dFR5cGVzID0ge1xuICBfcmVkdXhGb3JtOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdFxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRm9ybVNlY3Rpb247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4LWZvcm0vbGliL0Zvcm1TZWN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAxOTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2lzUHJvbWlzZSA9IHJlcXVpcmUoJ2lzLXByb21pc2UnKTtcblxudmFyIF9pc1Byb21pc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNQcm9taXNlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGFzeW5jVmFsaWRhdGlvbiA9IGZ1bmN0aW9uIGFzeW5jVmFsaWRhdGlvbihmbiwgc3RhcnQsIHN0b3AsIGZpZWxkKSB7XG4gIHN0YXJ0KGZpZWxkKTtcbiAgdmFyIHByb21pc2UgPSBmbigpO1xuICBpZiAoISgwLCBfaXNQcm9taXNlMi5kZWZhdWx0KShwcm9taXNlKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignYXN5bmNWYWxpZGF0ZSBmdW5jdGlvbiBwYXNzZWQgdG8gcmVkdXhGb3JtIG11c3QgcmV0dXJuIGEgcHJvbWlzZScpO1xuICB9XG4gIHZhciBoYW5kbGVFcnJvcnMgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcnMocmVqZWN0ZWQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGVycm9ycykge1xuICAgICAgaWYgKGVycm9ycyAmJiBPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCkge1xuICAgICAgICBzdG9wKGVycm9ycyk7XG4gICAgICAgIHJldHVybiBlcnJvcnM7XG4gICAgICB9IGVsc2UgaWYgKHJlamVjdGVkKSB7XG4gICAgICAgIHN0b3AoKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBc3luY2hyb25vdXMgdmFsaWRhdGlvbiBwcm9taXNlIHdhcyByZWplY3RlZCB3aXRob3V0IGVycm9ycy4nKTtcbiAgICAgIH1cbiAgICAgIHN0b3AoKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9O1xuICB9O1xuICByZXR1cm4gcHJvbWlzZS50aGVuKGhhbmRsZUVycm9ycyhmYWxzZSksIGhhbmRsZUVycm9ycyh0cnVlKSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBhc3luY1ZhbGlkYXRpb247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4LWZvcm0vbGliL2FzeW5jVmFsaWRhdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMTk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX0Nvbm5lY3RlZEZpZWxkID0gcmVxdWlyZSgnLi9Db25uZWN0ZWRGaWVsZCcpO1xuXG52YXIgX0Nvbm5lY3RlZEZpZWxkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Nvbm5lY3RlZEZpZWxkKTtcblxudmFyIF9zaGFsbG93Q29tcGFyZSA9IHJlcXVpcmUoJy4vdXRpbC9zaGFsbG93Q29tcGFyZScpO1xuXG52YXIgX3NoYWxsb3dDb21wYXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NoYWxsb3dDb21wYXJlKTtcblxudmFyIF9wcmVmaXhOYW1lID0gcmVxdWlyZSgnLi91dGlsL3ByZWZpeE5hbWUnKTtcblxudmFyIF9wcmVmaXhOYW1lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZWZpeE5hbWUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBjcmVhdGVGaWVsZCA9IGZ1bmN0aW9uIGNyZWF0ZUZpZWxkKF9yZWYpIHtcbiAgdmFyIGRlZXBFcXVhbCA9IF9yZWYuZGVlcEVxdWFsLFxuICAgICAgZ2V0SW4gPSBfcmVmLmdldEluLFxuICAgICAgc2V0SW4gPSBfcmVmLnNldEluLFxuICAgICAgdG9KUyA9IF9yZWYudG9KUztcblxuICB2YXIgQ29ubmVjdGVkRmllbGQgPSAoMCwgX0Nvbm5lY3RlZEZpZWxkMi5kZWZhdWx0KSh7XG4gICAgZGVlcEVxdWFsOiBkZWVwRXF1YWwsXG4gICAgZ2V0SW46IGdldEluLFxuICAgIHRvSlM6IHRvSlNcbiAgfSk7XG5cbiAgdmFyIEZpZWxkID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoRmllbGQsIF9Db21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gRmllbGQocHJvcHMsIGNvbnRleHQpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGaWVsZCk7XG5cbiAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChGaWVsZC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEZpZWxkKSkuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCkpO1xuXG4gICAgICBpZiAoIWNvbnRleHQuX3JlZHV4Rm9ybSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZpZWxkIG11c3QgYmUgaW5zaWRlIGEgY29tcG9uZW50IGRlY29yYXRlZCB3aXRoIHJlZHV4Rm9ybSgpJyk7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLm5vcm1hbGl6ZSA9IF90aGlzLm5vcm1hbGl6ZS5iaW5kKF90aGlzKTtcbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoRmllbGQsIFt7XG4gICAgICBrZXk6ICdzaG91bGRDb21wb25lbnRVcGRhdGUnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgICByZXR1cm4gKDAsIF9zaGFsbG93Q29tcGFyZTIuZGVmYXVsdCkodGhpcywgbmV4dFByb3BzLCBuZXh0U3RhdGUpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxNb3VudCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICB0aGlzLmNvbnRleHQuX3JlZHV4Rm9ybS5yZWdpc3Rlcih0aGlzLm5hbWUsICdGaWVsZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLnByb3BzLnZhbGlkYXRlO1xuICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMi5wcm9wcy53YXJuO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5uYW1lICE9PSBuZXh0UHJvcHMubmFtZSkge1xuICAgICAgICAgIC8vIHVucmVnaXN0ZXIgb2xkIG5hbWVcbiAgICAgICAgICB0aGlzLmNvbnRleHQuX3JlZHV4Rm9ybS51bnJlZ2lzdGVyKHRoaXMubmFtZSk7XG4gICAgICAgICAgLy8gcmVnaXN0ZXIgbmV3IG5hbWVcbiAgICAgICAgICB0aGlzLmNvbnRleHQuX3JlZHV4Rm9ybS5yZWdpc3RlcigoMCwgX3ByZWZpeE5hbWUyLmRlZmF1bHQpKHRoaXMuY29udGV4dCwgbmV4dFByb3BzLm5hbWUpLCAnRmllbGQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0Ll9yZWR1eEZvcm0udW5yZWdpc3Rlcih0aGlzLm5hbWUpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2dldFJlbmRlcmVkQ29tcG9uZW50JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRSZW5kZXJlZENvbXBvbmVudCgpIHtcbiAgICAgICAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKHRoaXMucHJvcHMud2l0aFJlZiwgJ0lmIHlvdSB3YW50IHRvIGFjY2VzcyBnZXRSZW5kZXJlZENvbXBvbmVudCgpLCAnICsgJ3lvdSBtdXN0IHNwZWNpZnkgYSB3aXRoUmVmIHByb3AgdG8gRmllbGQnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVmcy5jb25uZWN0ZWQuZ2V0V3JhcHBlZEluc3RhbmNlKCkuZ2V0UmVuZGVyZWRDb21wb25lbnQoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdub3JtYWxpemUnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIG5vcm1hbGl6ZShuYW1lLCB2YWx1ZSkge1xuICAgICAgICB2YXIgbm9ybWFsaXplID0gdGhpcy5wcm9wcy5ub3JtYWxpemU7XG5cbiAgICAgICAgaWYgKCFub3JtYWxpemUpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHByZXZpb3VzVmFsdWVzID0gdGhpcy5jb250ZXh0Ll9yZWR1eEZvcm0uZ2V0VmFsdWVzKCk7XG4gICAgICAgIHZhciBwcmV2aW91c1ZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgdmFyIG5leHRWYWx1ZXMgPSBzZXRJbihwcmV2aW91c1ZhbHVlcywgbmFtZSwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gbm9ybWFsaXplKHZhbHVlLCBwcmV2aW91c1ZhbHVlLCBuZXh0VmFsdWVzLCBwcmV2aW91c1ZhbHVlcyk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoMCwgX3JlYWN0LmNyZWF0ZUVsZW1lbnQpKENvbm5lY3RlZEZpZWxkLCBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICBub3JtYWxpemU6IHRoaXMubm9ybWFsaXplLFxuICAgICAgICAgIF9yZWR1eEZvcm06IHRoaXMuY29udGV4dC5fcmVkdXhGb3JtLFxuICAgICAgICAgIHJlZjogJ2Nvbm5lY3RlZCdcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ25hbWUnLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiAoMCwgX3ByZWZpeE5hbWUyLmRlZmF1bHQpKHRoaXMuY29udGV4dCwgdGhpcy5wcm9wcy5uYW1lKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdkaXJ0eScsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLnByaXN0aW5lO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3ByaXN0aW5lJyxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWZzLmNvbm5lY3RlZC5nZXRXcmFwcGVkSW5zdGFuY2UoKS5pc1ByaXN0aW5lKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAndmFsdWUnLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZnMuY29ubmVjdGVkICYmIHRoaXMucmVmcy5jb25uZWN0ZWQuZ2V0V3JhcHBlZEluc3RhbmNlKCkuZ2V0VmFsdWUoKTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gRmllbGQ7XG4gIH0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbiAgRmllbGQucHJvcFR5cGVzID0ge1xuICAgIG5hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgY29tcG9uZW50OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLCBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZ10pLmlzUmVxdWlyZWQsXG4gICAgZm9ybWF0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gICAgbm9ybWFsaXplOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gICAgb25CbHVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gICAgb25DaGFuZ2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgICBvbkZvY3VzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gICAgb25EcmFnU3RhcnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgICBvbkRyb3A6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgICBwYXJzZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAgIHByb3BzOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgICB2YWxpZGF0ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYywgX3Byb3BUeXBlczIuZGVmYXVsdC5hcnJheU9mKF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyldKSxcbiAgICB3YXJuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLCBfcHJvcFR5cGVzMi5kZWZhdWx0LmFycmF5T2YoX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jKV0pLFxuICAgIHdpdGhSZWY6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbFxuICB9O1xuICBGaWVsZC5jb250ZXh0VHlwZXMgPSB7XG4gICAgX3JlZHV4Rm9ybTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3RcbiAgfTtcblxuICByZXR1cm4gRmllbGQ7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVGaWVsZDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtZm9ybS9saWIvY3JlYXRlRmllbGQuanNcbi8vIG1vZHVsZSBpZCA9IDE5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIF9Db25uZWN0ZWRGaWVsZEFycmF5ID0gcmVxdWlyZSgnLi9Db25uZWN0ZWRGaWVsZEFycmF5Jyk7XG5cbnZhciBfQ29ubmVjdGVkRmllbGRBcnJheTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db25uZWN0ZWRGaWVsZEFycmF5KTtcblxudmFyIF9wcmVmaXhOYW1lID0gcmVxdWlyZSgnLi91dGlsL3ByZWZpeE5hbWUnKTtcblxudmFyIF9wcmVmaXhOYW1lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZWZpeE5hbWUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciB0b0FycmF5ID0gZnVuY3Rpb24gdG9BcnJheSh2YWx1ZSkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFt2YWx1ZV07XG59O1xuXG52YXIgd3JhcEVycm9yID0gZnVuY3Rpb24gd3JhcEVycm9yKGZuLCBrZXkpIHtcbiAgcmV0dXJuIGZuICYmIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmFsaWRhdG9ycyA9IHRvQXJyYXkoZm4pO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsaWRhdG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHJlc3VsdCA9IHZhbGlkYXRvcnNbaV0uYXBwbHkodmFsaWRhdG9ycywgYXJndW1lbnRzKTtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuIF9kZWZpbmVQcm9wZXJ0eSh7fSwga2V5LCByZXN1bHQpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5cbnZhciBjcmVhdGVGaWVsZEFycmF5ID0gZnVuY3Rpb24gY3JlYXRlRmllbGRBcnJheShfcmVmMikge1xuICB2YXIgZGVlcEVxdWFsID0gX3JlZjIuZGVlcEVxdWFsLFxuICAgICAgZ2V0SW4gPSBfcmVmMi5nZXRJbixcbiAgICAgIHNpemUgPSBfcmVmMi5zaXplO1xuXG4gIHZhciBDb25uZWN0ZWRGaWVsZEFycmF5ID0gKDAsIF9Db25uZWN0ZWRGaWVsZEFycmF5Mi5kZWZhdWx0KSh7XG4gICAgZGVlcEVxdWFsOiBkZWVwRXF1YWwsXG4gICAgZ2V0SW46IGdldEluLFxuICAgIHNpemU6IHNpemVcbiAgfSk7XG5cbiAgdmFyIEZpZWxkQXJyYXkgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhGaWVsZEFycmF5LCBfQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIEZpZWxkQXJyYXkocHJvcHMsIGNvbnRleHQpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGaWVsZEFycmF5KTtcblxuICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEZpZWxkQXJyYXkuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihGaWVsZEFycmF5KSkuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCkpO1xuXG4gICAgICBpZiAoIWNvbnRleHQuX3JlZHV4Rm9ybSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZpZWxkQXJyYXkgbXVzdCBiZSBpbnNpZGUgYSBjb21wb25lbnQgZGVjb3JhdGVkIHdpdGggcmVkdXhGb3JtKCknKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoRmllbGRBcnJheSwgW3tcbiAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxNb3VudCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICB0aGlzLmNvbnRleHQuX3JlZHV4Rm9ybS5yZWdpc3Rlcih0aGlzLm5hbWUsICdGaWVsZEFycmF5JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiB3cmFwRXJyb3IoX3RoaXMyLnByb3BzLnZhbGlkYXRlLCAnX2Vycm9yJyk7XG4gICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gd3JhcEVycm9yKF90aGlzMi5wcm9wcy53YXJuLCAnX3dhcm5pbmcnKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubmFtZSAhPT0gbmV4dFByb3BzLm5hbWUpIHtcbiAgICAgICAgICAvLyB1bnJlZ2lzdGVyIG9sZCBuYW1lXG4gICAgICAgICAgdGhpcy5jb250ZXh0Ll9yZWR1eEZvcm0udW5yZWdpc3Rlcih0aGlzLm5hbWUpO1xuICAgICAgICAgIC8vIHJlZ2lzdGVyIG5ldyBuYW1lXG4gICAgICAgICAgdGhpcy5jb250ZXh0Ll9yZWR1eEZvcm0ucmVnaXN0ZXIoKDAsIF9wcmVmaXhOYW1lMi5kZWZhdWx0KSh0aGlzLmNvbnRleHQsIG5leHRQcm9wcy5uYW1lKSwgJ0ZpZWxkQXJyYXknKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0Ll9yZWR1eEZvcm0udW5yZWdpc3Rlcih0aGlzLm5hbWUpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2dldFJlbmRlcmVkQ29tcG9uZW50JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRSZW5kZXJlZENvbXBvbmVudCgpIHtcbiAgICAgICAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKHRoaXMucHJvcHMud2l0aFJlZiwgJ0lmIHlvdSB3YW50IHRvIGFjY2VzcyBnZXRSZW5kZXJlZENvbXBvbmVudCgpLCAnICsgJ3lvdSBtdXN0IHNwZWNpZnkgYSB3aXRoUmVmIHByb3AgdG8gRmllbGRBcnJheScpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZWZzLmNvbm5lY3RlZC5nZXRXcmFwcGVkSW5zdGFuY2UoKS5nZXRSZW5kZXJlZENvbXBvbmVudCgpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKDAsIF9yZWFjdC5jcmVhdGVFbGVtZW50KShDb25uZWN0ZWRGaWVsZEFycmF5LCBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICBzeW5jRXJyb3I6IHRoaXMuc3luY0Vycm9yLFxuICAgICAgICAgIHN5bmNXYXJuaW5nOiB0aGlzLnN5bmNXYXJuaW5nLFxuICAgICAgICAgIF9yZWR1eEZvcm06IHRoaXMuY29udGV4dC5fcmVkdXhGb3JtLFxuICAgICAgICAgIHJlZjogJ2Nvbm5lY3RlZCdcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ25hbWUnLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiAoMCwgX3ByZWZpeE5hbWUyLmRlZmF1bHQpKHRoaXMuY29udGV4dCwgdGhpcy5wcm9wcy5uYW1lKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdkaXJ0eScsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVmcy5jb25uZWN0ZWQuZ2V0V3JhcHBlZEluc3RhbmNlKCkuZGlydHk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAncHJpc3RpbmUnLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZnMuY29ubmVjdGVkLmdldFdyYXBwZWRJbnN0YW5jZSgpLnByaXN0aW5lO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3ZhbHVlJyxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWZzLmNvbm5lY3RlZC5nZXRXcmFwcGVkSW5zdGFuY2UoKS52YWx1ZTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gRmllbGRBcnJheTtcbiAgfShfcmVhY3QuQ29tcG9uZW50KTtcblxuICBGaWVsZEFycmF5LnByb3BUeXBlcyA9IHtcbiAgICBuYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGNvbXBvbmVudDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLmlzUmVxdWlyZWQsXG4gICAgcHJvcHM6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAgIHZhbGlkYXRlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLCBfcHJvcFR5cGVzMi5kZWZhdWx0LmFycmF5T2YoX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jKV0pLFxuICAgIHdhcm46IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsIF9wcm9wVHlwZXMyLmRlZmF1bHQuYXJyYXlPZihfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMpXSksXG4gICAgd2l0aFJlZjogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sXG4gIH07XG4gIEZpZWxkQXJyYXkuY29udGV4dFR5cGVzID0ge1xuICAgIF9yZWR1eEZvcm06IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XG4gIH07XG5cbiAgcmV0dXJuIEZpZWxkQXJyYXk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVGaWVsZEFycmF5O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC1mb3JtL2xpYi9jcmVhdGVGaWVsZEFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAxOThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbnZhciBjcmVhdGVGaWVsZEFycmF5UHJvcHMgPSBmdW5jdGlvbiBjcmVhdGVGaWVsZEFycmF5UHJvcHMoZ2V0SW4sIG5hbWUsIGZvcm0sIHNlY3Rpb25QcmVmaXgsIGdldFZhbHVlLCBfcmVmKSB7XG4gIHZhciBhcnJheUluc2VydCA9IF9yZWYuYXJyYXlJbnNlcnQsXG4gICAgICBhcnJheU1vdmUgPSBfcmVmLmFycmF5TW92ZSxcbiAgICAgIGFycmF5UG9wID0gX3JlZi5hcnJheVBvcCxcbiAgICAgIGFycmF5UHVzaCA9IF9yZWYuYXJyYXlQdXNoLFxuICAgICAgYXJyYXlSZW1vdmUgPSBfcmVmLmFycmF5UmVtb3ZlLFxuICAgICAgYXJyYXlSZW1vdmVBbGwgPSBfcmVmLmFycmF5UmVtb3ZlQWxsLFxuICAgICAgYXJyYXlTaGlmdCA9IF9yZWYuYXJyYXlTaGlmdCxcbiAgICAgIGFycmF5U3BsaWNlID0gX3JlZi5hcnJheVNwbGljZSxcbiAgICAgIGFycmF5U3dhcCA9IF9yZWYuYXJyYXlTd2FwLFxuICAgICAgYXJyYXlVbnNoaWZ0ID0gX3JlZi5hcnJheVVuc2hpZnQsXG4gICAgICBhc3luY0Vycm9yID0gX3JlZi5hc3luY0Vycm9yLFxuICAgICAgZGlydHkgPSBfcmVmLmRpcnR5LFxuICAgICAgbGVuZ3RoID0gX3JlZi5sZW5ndGgsXG4gICAgICBwcmlzdGluZSA9IF9yZWYucHJpc3RpbmUsXG4gICAgICBzdWJtaXRFcnJvciA9IF9yZWYuc3VibWl0RXJyb3IsXG4gICAgICBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBzdWJtaXRGYWlsZWQgPSBfcmVmLnN1Ym1pdEZhaWxlZCxcbiAgICAgIHN1Ym1pdHRpbmcgPSBfcmVmLnN1Ym1pdHRpbmcsXG4gICAgICBzeW5jRXJyb3IgPSBfcmVmLnN5bmNFcnJvcixcbiAgICAgIHN5bmNXYXJuaW5nID0gX3JlZi5zeW5jV2FybmluZyxcbiAgICAgIHZhbHVlID0gX3JlZi52YWx1ZSxcbiAgICAgIHByb3BzID0gX3JlZi5wcm9wcyxcbiAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgWydhcnJheUluc2VydCcsICdhcnJheU1vdmUnLCAnYXJyYXlQb3AnLCAnYXJyYXlQdXNoJywgJ2FycmF5UmVtb3ZlJywgJ2FycmF5UmVtb3ZlQWxsJywgJ2FycmF5U2hpZnQnLCAnYXJyYXlTcGxpY2UnLCAnYXJyYXlTd2FwJywgJ2FycmF5VW5zaGlmdCcsICdhc3luY0Vycm9yJywgJ2RpcnR5JywgJ2xlbmd0aCcsICdwcmlzdGluZScsICdzdWJtaXRFcnJvcicsICdzdGF0ZScsICdzdWJtaXRGYWlsZWQnLCAnc3VibWl0dGluZycsICdzeW5jRXJyb3InLCAnc3luY1dhcm5pbmcnLCAndmFsdWUnLCAncHJvcHMnXSk7XG5cbiAgdmFyIGVycm9yID0gc3luY0Vycm9yIHx8IGFzeW5jRXJyb3IgfHwgc3VibWl0RXJyb3I7XG4gIHZhciB3YXJuaW5nID0gc3luY1dhcm5pbmc7XG4gIHZhciBmaWVsZE5hbWUgPSBzZWN0aW9uUHJlZml4ID8gbmFtZS5yZXBsYWNlKHNlY3Rpb25QcmVmaXggKyAnLicsICcnKSA6IG5hbWU7XG4gIHZhciBmaW5hbFByb3BzID0gX2V4dGVuZHMoe1xuICAgIGZpZWxkczoge1xuICAgICAgX2lzRmllbGRBcnJheTogdHJ1ZSxcbiAgICAgIGZvckVhY2g6IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuICh2YWx1ZSB8fCBbXSkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZmllbGROYW1lICsgJ1snICsgaW5kZXggKyAnXScsIGluZGV4LCBmaW5hbFByb3BzLmZpZWxkcyk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGdldDogZ2V0VmFsdWUsXG4gICAgICBnZXRBbGw6IGZ1bmN0aW9uIGdldEFsbCgpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSxcbiAgICAgIGluc2VydDogYXJyYXlJbnNlcnQsXG4gICAgICBsZW5ndGg6IGxlbmd0aCxcbiAgICAgIG1hcDogZnVuY3Rpb24gbWFwKGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiAodmFsdWUgfHwgW10pLm1hcChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZmllbGROYW1lICsgJ1snICsgaW5kZXggKyAnXScsIGluZGV4LCBmaW5hbFByb3BzLmZpZWxkcyk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIG1vdmU6IGFycmF5TW92ZSxcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBwb3A6IGZ1bmN0aW9uIHBvcCgpIHtcbiAgICAgICAgYXJyYXlQb3AoKTtcbiAgICAgICAgcmV0dXJuIGdldEluKHZhbHVlLCBsZW5ndGggLSAxKTtcbiAgICAgIH0sXG4gICAgICBwdXNoOiBhcnJheVB1c2gsXG4gICAgICByZWR1Y2U6IGZ1bmN0aW9uIHJlZHVjZShjYWxsYmFjaywgaW5pdGlhbCkge1xuICAgICAgICByZXR1cm4gKHZhbHVlIHx8IFtdKS5yZWR1Y2UoZnVuY3Rpb24gKGFjY3VtdWxhdG9yLCBpdGVtLCBpbmRleCkge1xuICAgICAgICAgIHJldHVybiBjYWxsYmFjayhhY2N1bXVsYXRvciwgZmllbGROYW1lICsgJ1snICsgaW5kZXggKyAnXScsIGluZGV4LCBmaW5hbFByb3BzLmZpZWxkcyk7XG4gICAgICAgIH0sIGluaXRpYWwpO1xuICAgICAgfSxcbiAgICAgIHJlbW92ZTogYXJyYXlSZW1vdmUsXG4gICAgICByZW1vdmVBbGw6IGFycmF5UmVtb3ZlQWxsLFxuICAgICAgc2hpZnQ6IGZ1bmN0aW9uIHNoaWZ0KCkge1xuICAgICAgICBhcnJheVNoaWZ0KCk7XG4gICAgICAgIHJldHVybiBnZXRJbih2YWx1ZSwgMCk7XG4gICAgICB9LFxuICAgICAgc3dhcDogYXJyYXlTd2FwLFxuICAgICAgdW5zaGlmdDogYXJyYXlVbnNoaWZ0XG4gICAgfSxcbiAgICBtZXRhOiB7XG4gICAgICBkaXJ0eTogZGlydHksXG4gICAgICBlcnJvcjogZXJyb3IsXG4gICAgICBmb3JtOiBmb3JtLFxuICAgICAgd2FybmluZzogd2FybmluZyxcbiAgICAgIGludmFsaWQ6ICEhZXJyb3IsXG4gICAgICBwcmlzdGluZTogcHJpc3RpbmUsXG4gICAgICBzdWJtaXR0aW5nOiBzdWJtaXR0aW5nLFxuICAgICAgc3VibWl0RmFpbGVkOiBzdWJtaXRGYWlsZWQsXG4gICAgICB2YWxpZDogIWVycm9yXG4gICAgfVxuICB9LCBwcm9wcywgcmVzdCk7XG4gIHJldHVybiBmaW5hbFByb3BzO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlRmllbGRBcnJheVByb3BzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC1mb3JtL2xpYi9jcmVhdGVGaWVsZEFycmF5UHJvcHMuanNcbi8vIG1vZHVsZSBpZCA9IDE5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIF9Db25uZWN0ZWRGaWVsZHMgPSByZXF1aXJlKCcuL0Nvbm5lY3RlZEZpZWxkcycpO1xuXG52YXIgX0Nvbm5lY3RlZEZpZWxkczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db25uZWN0ZWRGaWVsZHMpO1xuXG52YXIgX3NoYWxsb3dDb21wYXJlID0gcmVxdWlyZSgnLi91dGlsL3NoYWxsb3dDb21wYXJlJyk7XG5cbnZhciBfc2hhbGxvd0NvbXBhcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2hhbGxvd0NvbXBhcmUpO1xuXG52YXIgX3BsYWluID0gcmVxdWlyZSgnLi9zdHJ1Y3R1cmUvcGxhaW4nKTtcblxudmFyIF9wbGFpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wbGFpbik7XG5cbnZhciBfcHJlZml4TmFtZSA9IHJlcXVpcmUoJy4vdXRpbC9wcmVmaXhOYW1lJyk7XG5cbnZhciBfcHJlZml4TmFtZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVmaXhOYW1lKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgdmFsaWRhdGVOYW1lUHJvcCA9IGZ1bmN0aW9uIHZhbGlkYXRlTmFtZVByb3AocHJvcCkge1xuICBpZiAoIXByb3ApIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKCdObyBcIm5hbWVzXCIgcHJvcCB3YXMgc3BlY2lmaWVkIDxGaWVsZHMvPicpO1xuICB9XG4gIGlmICghQXJyYXkuaXNBcnJheShwcm9wKSAmJiAhcHJvcC5faXNGaWVsZEFycmF5KSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcignSW52YWxpZCBwcm9wIFwibmFtZXNcIiBzdXBwbGllZCB0byA8RmllbGRzLz4uIE11c3QgYmUgZWl0aGVyIGFuIGFycmF5IG9mIHN0cmluZ3Mgb3IgdGhlIGZpZWxkcyBhcnJheSBnZW5lcmF0ZWQgYnkgRmllbGRBcnJheS4nKTtcbiAgfVxufTtcblxudmFyIGNyZWF0ZUZpZWxkcyA9IGZ1bmN0aW9uIGNyZWF0ZUZpZWxkcyhfcmVmKSB7XG4gIHZhciBkZWVwRXF1YWwgPSBfcmVmLmRlZXBFcXVhbCxcbiAgICAgIGdldEluID0gX3JlZi5nZXRJbixcbiAgICAgIHRvSlMgPSBfcmVmLnRvSlMsXG4gICAgICBzaXplID0gX3JlZi5zaXplO1xuXG4gIHZhciBDb25uZWN0ZWRGaWVsZHMgPSAoMCwgX0Nvbm5lY3RlZEZpZWxkczIuZGVmYXVsdCkoe1xuICAgIGRlZXBFcXVhbDogZGVlcEVxdWFsLFxuICAgIGdldEluOiBnZXRJbixcbiAgICB0b0pTOiB0b0pTLFxuICAgIHNpemU6IHNpemVcbiAgfSk7XG5cbiAgdmFyIEZpZWxkcyA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKEZpZWxkcywgX0NvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBGaWVsZHMocHJvcHMsIGNvbnRleHQpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGaWVsZHMpO1xuXG4gICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoRmllbGRzLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRmllbGRzKSkuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCkpO1xuXG4gICAgICBpZiAoIWNvbnRleHQuX3JlZHV4Rm9ybSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZpZWxkcyBtdXN0IGJlIGluc2lkZSBhIGNvbXBvbmVudCBkZWNvcmF0ZWQgd2l0aCByZWR1eEZvcm0oKScpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhGaWVsZHMsIFt7XG4gICAgICBrZXk6ICdzaG91bGRDb21wb25lbnRVcGRhdGUnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgICByZXR1cm4gKDAsIF9zaGFsbG93Q29tcGFyZTIuZGVmYXVsdCkodGhpcywgbmV4dFByb3BzLCBuZXh0U3RhdGUpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxNb3VudCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB2YXIgZXJyb3IgPSB2YWxpZGF0ZU5hbWVQcm9wKHRoaXMucHJvcHMubmFtZXMpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY29udGV4dCA9IHRoaXMuY29udGV4dDtcbiAgICAgICAgdmFyIHJlZ2lzdGVyID0gY29udGV4dC5fcmVkdXhGb3JtLnJlZ2lzdGVyO1xuXG4gICAgICAgIHRoaXMubmFtZXMuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgIHJldHVybiByZWdpc3RlcihuYW1lLCAnRmllbGQnKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYgKCFfcGxhaW4yLmRlZmF1bHQuZGVlcEVxdWFsKHRoaXMucHJvcHMubmFtZXMsIG5leHRQcm9wcy5uYW1lcykpIHtcbiAgICAgICAgICB2YXIgY29udGV4dCA9IHRoaXMuY29udGV4dDtcbiAgICAgICAgICB2YXIgX2NvbnRleHQkX3JlZHV4Rm9ybSA9IGNvbnRleHQuX3JlZHV4Rm9ybSxcbiAgICAgICAgICAgICAgcmVnaXN0ZXIgPSBfY29udGV4dCRfcmVkdXhGb3JtLnJlZ2lzdGVyLFxuICAgICAgICAgICAgICB1bnJlZ2lzdGVyID0gX2NvbnRleHQkX3JlZHV4Rm9ybS51bnJlZ2lzdGVyO1xuICAgICAgICAgIC8vIHVucmVnaXN0ZXIgb2xkIG5hbWVcblxuICAgICAgICAgIHRoaXMucHJvcHMubmFtZXMuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHVucmVnaXN0ZXIoKDAsIF9wcmVmaXhOYW1lMi5kZWZhdWx0KShjb250ZXh0LCBuYW1lKSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgLy8gcmVnaXN0ZXIgbmV3IG5hbWVcbiAgICAgICAgICBuZXh0UHJvcHMubmFtZXMuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlZ2lzdGVyKCgwLCBfcHJlZml4TmFtZTIuZGVmYXVsdCkoY29udGV4dCwgbmFtZSksICdGaWVsZCcpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB2YXIgY29udGV4dCA9IHRoaXMuY29udGV4dDtcbiAgICAgICAgdmFyIHVucmVnaXN0ZXIgPSBjb250ZXh0Ll9yZWR1eEZvcm0udW5yZWdpc3RlcjtcblxuICAgICAgICB0aGlzLnByb3BzLm5hbWVzLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICByZXR1cm4gdW5yZWdpc3RlcigoMCwgX3ByZWZpeE5hbWUyLmRlZmF1bHQpKGNvbnRleHQsIG5hbWUpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnZ2V0UmVuZGVyZWRDb21wb25lbnQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFJlbmRlcmVkQ29tcG9uZW50KCkge1xuICAgICAgICAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkodGhpcy5wcm9wcy53aXRoUmVmLCAnSWYgeW91IHdhbnQgdG8gYWNjZXNzIGdldFJlbmRlcmVkQ29tcG9uZW50KCksICcgKyAneW91IG11c3Qgc3BlY2lmeSBhIHdpdGhSZWYgcHJvcCB0byBGaWVsZHMnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVmcy5jb25uZWN0ZWQuZ2V0V3JhcHBlZEluc3RhbmNlKCkuZ2V0UmVuZGVyZWRDb21wb25lbnQoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XG5cbiAgICAgICAgcmV0dXJuICgwLCBfcmVhY3QuY3JlYXRlRWxlbWVudCkoQ29ubmVjdGVkRmllbGRzLCBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICAgIG5hbWVzOiB0aGlzLnByb3BzLm5hbWVzLm1hcChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuICgwLCBfcHJlZml4TmFtZTIuZGVmYXVsdCkoY29udGV4dCwgbmFtZSk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3JlZHV4Rm9ybTogdGhpcy5jb250ZXh0Ll9yZWR1eEZvcm0sXG4gICAgICAgICAgcmVmOiAnY29ubmVjdGVkJ1xuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnbmFtZXMnLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHZhciBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLm5hbWVzLm1hcChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgIHJldHVybiAoMCwgX3ByZWZpeE5hbWUyLmRlZmF1bHQpKGNvbnRleHQsIG5hbWUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdkaXJ0eScsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVmcy5jb25uZWN0ZWQuZ2V0V3JhcHBlZEluc3RhbmNlKCkuaXNEaXJ0eSgpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3ByaXN0aW5lJyxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gIXRoaXMuZGlydHk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAndmFsdWVzJyxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWZzLmNvbm5lY3RlZCAmJiB0aGlzLnJlZnMuY29ubmVjdGVkLmdldFdyYXBwZWRJbnN0YW5jZSgpLmdldFZhbHVlcygpO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBGaWVsZHM7XG4gIH0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbiAgRmllbGRzLnByb3BUeXBlcyA9IHtcbiAgICBuYW1lczogZnVuY3Rpb24gbmFtZXMocHJvcHMsIHByb3BOYW1lKSB7XG4gICAgICByZXR1cm4gdmFsaWRhdGVOYW1lUHJvcChwcm9wc1twcm9wTmFtZV0pO1xuICAgIH0sXG4gICAgY29tcG9uZW50OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLCBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZ10pLmlzUmVxdWlyZWQsXG4gICAgZm9ybWF0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gICAgcGFyc2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgICBwcm9wczogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gICAgd2l0aFJlZjogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sXG4gIH07XG4gIEZpZWxkcy5jb250ZXh0VHlwZXMgPSB7XG4gICAgX3JlZHV4Rm9ybTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3RcbiAgfTtcblxuICByZXR1cm4gRmllbGRzO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlRmllbGRzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC1mb3JtL2xpYi9jcmVhdGVGaWVsZHMuanNcbi8vIG1vZHVsZSBpZCA9IDIwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBfcGxhaW4gPSByZXF1aXJlKCcuL3N0cnVjdHVyZS9wbGFpbicpO1xuXG52YXIgX3BsYWluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BsYWluKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGNyZWF0ZUZvcm1WYWx1ZVNlbGVjdG9yID0gZnVuY3Rpb24gY3JlYXRlRm9ybVZhbHVlU2VsZWN0b3IoX3JlZikge1xuICB2YXIgZ2V0SW4gPSBfcmVmLmdldEluO1xuICByZXR1cm4gZnVuY3Rpb24gKGZvcm0pIHtcbiAgICB2YXIgZ2V0Rm9ybVN0YXRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgIHJldHVybiBnZXRJbihzdGF0ZSwgJ2Zvcm0nKTtcbiAgICB9O1xuXG4gICAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKGZvcm0sICdGb3JtIHZhbHVlIG11c3QgYmUgc3BlY2lmaWVkJyk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZpZWxkcyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgZmllbGRzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKGZpZWxkcy5sZW5ndGgsICdObyBmaWVsZHMgc3BlY2lmaWVkJyk7XG4gICAgICByZXR1cm4gZmllbGRzLmxlbmd0aCA9PT0gMSA/IC8vIG9ubHkgc2VsZWN0aW5nIG9uZSBmaWVsZCwgc28gcmV0dXJuIGl0cyB2YWx1ZVxuICAgICAgZ2V0SW4oZ2V0Rm9ybVN0YXRlKHN0YXRlKSwgZm9ybSArICcudmFsdWVzLicgKyBmaWVsZHNbMF0pIDogLy8gc2VsZWN0aW5nIG1hbnkgZmllbGRzLCBzbyByZXR1cm4gYW4gb2JqZWN0IG9mIGZpZWxkIHZhbHVlc1xuICAgICAgZmllbGRzLnJlZHVjZShmdW5jdGlvbiAoYWNjdW11bGF0b3IsIGZpZWxkKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGdldEluKGdldEZvcm1TdGF0ZShzdGF0ZSksIGZvcm0gKyAnLnZhbHVlcy4nICsgZmllbGQpO1xuICAgICAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IGFjY3VtdWxhdG9yIDogX3BsYWluMi5kZWZhdWx0LnNldEluKGFjY3VtdWxhdG9yLCBmaWVsZCwgdmFsdWUpO1xuICAgICAgfSwge30pO1xuICAgIH07XG4gIH07XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVGb3JtVmFsdWVTZWxlY3RvcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtZm9ybS9saWIvY3JlYXRlRm9ybVZhbHVlU2VsZWN0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDIwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfYWN0aW9uVHlwZXMgPSByZXF1aXJlKCcuL2FjdGlvblR5cGVzJyk7XG5cbnZhciBfZGVsZXRlSW5XaXRoQ2xlYW5VcCA9IHJlcXVpcmUoJy4vZGVsZXRlSW5XaXRoQ2xlYW5VcCcpO1xuXG52YXIgX2RlbGV0ZUluV2l0aENsZWFuVXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVsZXRlSW5XaXRoQ2xlYW5VcCk7XG5cbnZhciBfcGxhaW4gPSByZXF1aXJlKCcuL3N0cnVjdHVyZS9wbGFpbicpO1xuXG52YXIgX3BsYWluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BsYWluKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG52YXIgaXNSZWR1eEZvcm1BY3Rpb24gPSBmdW5jdGlvbiBpc1JlZHV4Rm9ybUFjdGlvbihhY3Rpb24pIHtcbiAgcmV0dXJuIGFjdGlvbiAmJiBhY3Rpb24udHlwZSAmJiBhY3Rpb24udHlwZS5sZW5ndGggPiBfYWN0aW9uVHlwZXMucHJlZml4Lmxlbmd0aCAmJiBhY3Rpb24udHlwZS5zdWJzdHJpbmcoMCwgX2FjdGlvblR5cGVzLnByZWZpeC5sZW5ndGgpID09PSBfYWN0aW9uVHlwZXMucHJlZml4O1xufTtcblxudmFyIGNyZWF0ZVJlZHVjZXIgPSBmdW5jdGlvbiBjcmVhdGVSZWR1Y2VyKHN0cnVjdHVyZSkge1xuICB2YXIgX2JlaGF2aW9ycztcblxuICB2YXIgZGVlcEVxdWFsID0gc3RydWN0dXJlLmRlZXBFcXVhbCxcbiAgICAgIGVtcHR5ID0gc3RydWN0dXJlLmVtcHR5LFxuICAgICAgZ2V0SW4gPSBzdHJ1Y3R1cmUuZ2V0SW4sXG4gICAgICBzZXRJbiA9IHN0cnVjdHVyZS5zZXRJbixcbiAgICAgIGRlbGV0ZUluID0gc3RydWN0dXJlLmRlbGV0ZUluLFxuICAgICAgZnJvbUpTID0gc3RydWN0dXJlLmZyb21KUyxcbiAgICAgIGtleXMgPSBzdHJ1Y3R1cmUua2V5cyxcbiAgICAgIHNpemUgPSBzdHJ1Y3R1cmUuc2l6ZSxcbiAgICAgIHNwbGljZSA9IHN0cnVjdHVyZS5zcGxpY2U7XG5cbiAgdmFyIGRlbGV0ZUluV2l0aENsZWFuVXAgPSAoMCwgX2RlbGV0ZUluV2l0aENsZWFuVXAyLmRlZmF1bHQpKHN0cnVjdHVyZSk7XG4gIHZhciBkb1NwbGljZSA9IGZ1bmN0aW9uIGRvU3BsaWNlKHN0YXRlLCBrZXksIGZpZWxkLCBpbmRleCwgcmVtb3ZlTnVtLCB2YWx1ZSwgZm9yY2UpIHtcbiAgICB2YXIgZXhpc3RpbmcgPSBnZXRJbihzdGF0ZSwga2V5ICsgJy4nICsgZmllbGQpO1xuICAgIHJldHVybiBleGlzdGluZyB8fCBmb3JjZSA/IHNldEluKHN0YXRlLCBrZXkgKyAnLicgKyBmaWVsZCwgc3BsaWNlKGV4aXN0aW5nLCBpbmRleCwgcmVtb3ZlTnVtLCB2YWx1ZSkpIDogc3RhdGU7XG4gIH07XG4gIHZhciBkb1BsYWluU3BsaWNlID0gZnVuY3Rpb24gZG9QbGFpblNwbGljZShzdGF0ZSwga2V5LCBmaWVsZCwgaW5kZXgsIHJlbW92ZU51bSwgdmFsdWUsIGZvcmNlKSB7XG4gICAgdmFyIHNsaWNlID0gZ2V0SW4oc3RhdGUsIGtleSk7XG4gICAgdmFyIGV4aXN0aW5nID0gX3BsYWluMi5kZWZhdWx0LmdldEluKHNsaWNlLCBmaWVsZCk7XG4gICAgcmV0dXJuIGV4aXN0aW5nIHx8IGZvcmNlID8gc2V0SW4oc3RhdGUsIGtleSwgX3BsYWluMi5kZWZhdWx0LnNldEluKHNsaWNlLCBmaWVsZCwgX3BsYWluMi5kZWZhdWx0LnNwbGljZShleGlzdGluZywgaW5kZXgsIHJlbW92ZU51bSwgdmFsdWUpKSkgOiBzdGF0ZTtcbiAgfTtcbiAgdmFyIHJvb3RLZXlzID0gWyd2YWx1ZXMnLCAnZmllbGRzJywgJ3N1Ym1pdEVycm9ycycsICdhc3luY0Vycm9ycyddO1xuICB2YXIgYXJyYXlTcGxpY2UgPSBmdW5jdGlvbiBhcnJheVNwbGljZShzdGF0ZSwgZmllbGQsIGluZGV4LCByZW1vdmVOdW0sIHZhbHVlKSB7XG4gICAgdmFyIHJlc3VsdCA9IHN0YXRlO1xuICAgIHZhciBub25WYWx1ZXNWYWx1ZSA9IHZhbHVlICE9IG51bGwgPyBlbXB0eSA6IHVuZGVmaW5lZDtcbiAgICByZXN1bHQgPSBkb1NwbGljZShyZXN1bHQsICd2YWx1ZXMnLCBmaWVsZCwgaW5kZXgsIHJlbW92ZU51bSwgdmFsdWUsIHRydWUpO1xuICAgIHJlc3VsdCA9IGRvU3BsaWNlKHJlc3VsdCwgJ2ZpZWxkcycsIGZpZWxkLCBpbmRleCwgcmVtb3ZlTnVtLCBub25WYWx1ZXNWYWx1ZSk7XG4gICAgcmVzdWx0ID0gZG9QbGFpblNwbGljZShyZXN1bHQsICdzeW5jRXJyb3JzJywgZmllbGQsIGluZGV4LCByZW1vdmVOdW0sIHVuZGVmaW5lZCk7XG4gICAgcmVzdWx0ID0gZG9QbGFpblNwbGljZShyZXN1bHQsICdzeW5jV2FybmluZ3MnLCBmaWVsZCwgaW5kZXgsIHJlbW92ZU51bSwgdW5kZWZpbmVkKTtcbiAgICByZXN1bHQgPSBkb1NwbGljZShyZXN1bHQsICdzdWJtaXRFcnJvcnMnLCBmaWVsZCwgaW5kZXgsIHJlbW92ZU51bSwgdW5kZWZpbmVkKTtcbiAgICByZXN1bHQgPSBkb1NwbGljZShyZXN1bHQsICdhc3luY0Vycm9ycycsIGZpZWxkLCBpbmRleCwgcmVtb3ZlTnVtLCB1bmRlZmluZWQpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgdmFyIGJlaGF2aW9ycyA9IChfYmVoYXZpb3JzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfYmVoYXZpb3JzLCBfYWN0aW9uVHlwZXMuQVJSQVlfSU5TRVJULCBmdW5jdGlvbiAoc3RhdGUsIF9yZWYpIHtcbiAgICB2YXIgX3JlZiRtZXRhID0gX3JlZi5tZXRhLFxuICAgICAgICBmaWVsZCA9IF9yZWYkbWV0YS5maWVsZCxcbiAgICAgICAgaW5kZXggPSBfcmVmJG1ldGEuaW5kZXgsXG4gICAgICAgIHBheWxvYWQgPSBfcmVmLnBheWxvYWQ7XG5cbiAgICByZXR1cm4gYXJyYXlTcGxpY2Uoc3RhdGUsIGZpZWxkLCBpbmRleCwgMCwgcGF5bG9hZCk7XG4gIH0pLCBfZGVmaW5lUHJvcGVydHkoX2JlaGF2aW9ycywgX2FjdGlvblR5cGVzLkFSUkFZX01PVkUsIGZ1bmN0aW9uIChzdGF0ZSwgX3JlZjIpIHtcbiAgICB2YXIgX3JlZjIkbWV0YSA9IF9yZWYyLm1ldGEsXG4gICAgICAgIGZpZWxkID0gX3JlZjIkbWV0YS5maWVsZCxcbiAgICAgICAgZnJvbSA9IF9yZWYyJG1ldGEuZnJvbSxcbiAgICAgICAgdG8gPSBfcmVmMiRtZXRhLnRvO1xuXG4gICAgdmFyIGFycmF5ID0gZ2V0SW4oc3RhdGUsICd2YWx1ZXMuJyArIGZpZWxkKTtcbiAgICB2YXIgbGVuZ3RoID0gYXJyYXkgPyBzaXplKGFycmF5KSA6IDA7XG4gICAgdmFyIHJlc3VsdCA9IHN0YXRlO1xuICAgIGlmIChsZW5ndGgpIHtcbiAgICAgIHJvb3RLZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgcGF0aCA9IGtleSArICcuJyArIGZpZWxkO1xuICAgICAgICBpZiAoZ2V0SW4ocmVzdWx0LCBwYXRoKSkge1xuICAgICAgICAgIHZhciB2YWx1ZSA9IGdldEluKHJlc3VsdCwgcGF0aCArICdbJyArIGZyb20gKyAnXScpO1xuICAgICAgICAgIHJlc3VsdCA9IHNldEluKHJlc3VsdCwgcGF0aCwgc3BsaWNlKGdldEluKHJlc3VsdCwgcGF0aCksIGZyb20sIDEpKTsgLy8gcmVtb3ZlXG4gICAgICAgICAgcmVzdWx0ID0gc2V0SW4ocmVzdWx0LCBwYXRoLCBzcGxpY2UoZ2V0SW4ocmVzdWx0LCBwYXRoKSwgdG8sIDAsIHZhbHVlKSk7IC8vIGluc2VydFxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSksIF9kZWZpbmVQcm9wZXJ0eShfYmVoYXZpb3JzLCBfYWN0aW9uVHlwZXMuQVJSQVlfUE9QLCBmdW5jdGlvbiAoc3RhdGUsIF9yZWYzKSB7XG4gICAgdmFyIGZpZWxkID0gX3JlZjMubWV0YS5maWVsZDtcblxuICAgIHZhciBhcnJheSA9IGdldEluKHN0YXRlLCAndmFsdWVzLicgKyBmaWVsZCk7XG4gICAgdmFyIGxlbmd0aCA9IGFycmF5ID8gc2l6ZShhcnJheSkgOiAwO1xuICAgIHJldHVybiBsZW5ndGggPyBhcnJheVNwbGljZShzdGF0ZSwgZmllbGQsIGxlbmd0aCAtIDEsIDEpIDogc3RhdGU7XG4gIH0pLCBfZGVmaW5lUHJvcGVydHkoX2JlaGF2aW9ycywgX2FjdGlvblR5cGVzLkFSUkFZX1BVU0gsIGZ1bmN0aW9uIChzdGF0ZSwgX3JlZjQpIHtcbiAgICB2YXIgZmllbGQgPSBfcmVmNC5tZXRhLmZpZWxkLFxuICAgICAgICBwYXlsb2FkID0gX3JlZjQucGF5bG9hZDtcblxuICAgIHZhciBhcnJheSA9IGdldEluKHN0YXRlLCAndmFsdWVzLicgKyBmaWVsZCk7XG4gICAgdmFyIGxlbmd0aCA9IGFycmF5ID8gc2l6ZShhcnJheSkgOiAwO1xuICAgIHJldHVybiBhcnJheVNwbGljZShzdGF0ZSwgZmllbGQsIGxlbmd0aCwgMCwgcGF5bG9hZCk7XG4gIH0pLCBfZGVmaW5lUHJvcGVydHkoX2JlaGF2aW9ycywgX2FjdGlvblR5cGVzLkFSUkFZX1JFTU9WRSwgZnVuY3Rpb24gKHN0YXRlLCBfcmVmNSkge1xuICAgIHZhciBfcmVmNSRtZXRhID0gX3JlZjUubWV0YSxcbiAgICAgICAgZmllbGQgPSBfcmVmNSRtZXRhLmZpZWxkLFxuICAgICAgICBpbmRleCA9IF9yZWY1JG1ldGEuaW5kZXg7XG5cbiAgICByZXR1cm4gYXJyYXlTcGxpY2Uoc3RhdGUsIGZpZWxkLCBpbmRleCwgMSk7XG4gIH0pLCBfZGVmaW5lUHJvcGVydHkoX2JlaGF2aW9ycywgX2FjdGlvblR5cGVzLkFSUkFZX1JFTU9WRV9BTEwsIGZ1bmN0aW9uIChzdGF0ZSwgX3JlZjYpIHtcbiAgICB2YXIgZmllbGQgPSBfcmVmNi5tZXRhLmZpZWxkO1xuXG4gICAgdmFyIGFycmF5ID0gZ2V0SW4oc3RhdGUsICd2YWx1ZXMuJyArIGZpZWxkKTtcbiAgICB2YXIgbGVuZ3RoID0gYXJyYXkgPyBzaXplKGFycmF5KSA6IDA7XG4gICAgcmV0dXJuIGxlbmd0aCA/IGFycmF5U3BsaWNlKHN0YXRlLCBmaWVsZCwgMCwgbGVuZ3RoKSA6IHN0YXRlO1xuICB9KSwgX2RlZmluZVByb3BlcnR5KF9iZWhhdmlvcnMsIF9hY3Rpb25UeXBlcy5BUlJBWV9TSElGVCwgZnVuY3Rpb24gKHN0YXRlLCBfcmVmNykge1xuICAgIHZhciBmaWVsZCA9IF9yZWY3Lm1ldGEuZmllbGQ7XG5cbiAgICByZXR1cm4gYXJyYXlTcGxpY2Uoc3RhdGUsIGZpZWxkLCAwLCAxKTtcbiAgfSksIF9kZWZpbmVQcm9wZXJ0eShfYmVoYXZpb3JzLCBfYWN0aW9uVHlwZXMuQVJSQVlfU1BMSUNFLCBmdW5jdGlvbiAoc3RhdGUsIF9yZWY4KSB7XG4gICAgdmFyIF9yZWY4JG1ldGEgPSBfcmVmOC5tZXRhLFxuICAgICAgICBmaWVsZCA9IF9yZWY4JG1ldGEuZmllbGQsXG4gICAgICAgIGluZGV4ID0gX3JlZjgkbWV0YS5pbmRleCxcbiAgICAgICAgcmVtb3ZlTnVtID0gX3JlZjgkbWV0YS5yZW1vdmVOdW0sXG4gICAgICAgIHBheWxvYWQgPSBfcmVmOC5wYXlsb2FkO1xuXG4gICAgcmV0dXJuIGFycmF5U3BsaWNlKHN0YXRlLCBmaWVsZCwgaW5kZXgsIHJlbW92ZU51bSwgcGF5bG9hZCk7XG4gIH0pLCBfZGVmaW5lUHJvcGVydHkoX2JlaGF2aW9ycywgX2FjdGlvblR5cGVzLkFSUkFZX1NXQVAsIGZ1bmN0aW9uIChzdGF0ZSwgX3JlZjkpIHtcbiAgICB2YXIgX3JlZjkkbWV0YSA9IF9yZWY5Lm1ldGEsXG4gICAgICAgIGZpZWxkID0gX3JlZjkkbWV0YS5maWVsZCxcbiAgICAgICAgaW5kZXhBID0gX3JlZjkkbWV0YS5pbmRleEEsXG4gICAgICAgIGluZGV4QiA9IF9yZWY5JG1ldGEuaW5kZXhCO1xuXG4gICAgdmFyIHJlc3VsdCA9IHN0YXRlO1xuICAgIHJvb3RLZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIHZhbHVlQSA9IGdldEluKHJlc3VsdCwga2V5ICsgJy4nICsgZmllbGQgKyAnWycgKyBpbmRleEEgKyAnXScpO1xuICAgICAgdmFyIHZhbHVlQiA9IGdldEluKHJlc3VsdCwga2V5ICsgJy4nICsgZmllbGQgKyAnWycgKyBpbmRleEIgKyAnXScpO1xuICAgICAgaWYgKHZhbHVlQSAhPT0gdW5kZWZpbmVkIHx8IHZhbHVlQiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJlc3VsdCA9IHNldEluKHJlc3VsdCwga2V5ICsgJy4nICsgZmllbGQgKyAnWycgKyBpbmRleEEgKyAnXScsIHZhbHVlQik7XG4gICAgICAgIHJlc3VsdCA9IHNldEluKHJlc3VsdCwga2V5ICsgJy4nICsgZmllbGQgKyAnWycgKyBpbmRleEIgKyAnXScsIHZhbHVlQSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSksIF9kZWZpbmVQcm9wZXJ0eShfYmVoYXZpb3JzLCBfYWN0aW9uVHlwZXMuQVJSQVlfVU5TSElGVCwgZnVuY3Rpb24gKHN0YXRlLCBfcmVmMTApIHtcbiAgICB2YXIgZmllbGQgPSBfcmVmMTAubWV0YS5maWVsZCxcbiAgICAgICAgcGF5bG9hZCA9IF9yZWYxMC5wYXlsb2FkO1xuXG4gICAgcmV0dXJuIGFycmF5U3BsaWNlKHN0YXRlLCBmaWVsZCwgMCwgMCwgcGF5bG9hZCk7XG4gIH0pLCBfZGVmaW5lUHJvcGVydHkoX2JlaGF2aW9ycywgX2FjdGlvblR5cGVzLkFVVE9GSUxMLCBmdW5jdGlvbiAoc3RhdGUsIF9yZWYxMSkge1xuICAgIHZhciBmaWVsZCA9IF9yZWYxMS5tZXRhLmZpZWxkLFxuICAgICAgICBwYXlsb2FkID0gX3JlZjExLnBheWxvYWQ7XG5cbiAgICB2YXIgcmVzdWx0ID0gc3RhdGU7XG4gICAgcmVzdWx0ID0gZGVsZXRlSW5XaXRoQ2xlYW5VcChyZXN1bHQsICdhc3luY0Vycm9ycy4nICsgZmllbGQpO1xuICAgIHJlc3VsdCA9IGRlbGV0ZUluV2l0aENsZWFuVXAocmVzdWx0LCAnc3VibWl0RXJyb3JzLicgKyBmaWVsZCk7XG4gICAgcmVzdWx0ID0gc2V0SW4ocmVzdWx0LCAnZmllbGRzLicgKyBmaWVsZCArICcuYXV0b2ZpbGxlZCcsIHRydWUpO1xuICAgIHJlc3VsdCA9IHNldEluKHJlc3VsdCwgJ3ZhbHVlcy4nICsgZmllbGQsIHBheWxvYWQpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH0pLCBfZGVmaW5lUHJvcGVydHkoX2JlaGF2aW9ycywgX2FjdGlvblR5cGVzLkJMVVIsIGZ1bmN0aW9uIChzdGF0ZSwgX3JlZjEyKSB7XG4gICAgdmFyIF9yZWYxMiRtZXRhID0gX3JlZjEyLm1ldGEsXG4gICAgICAgIGZpZWxkID0gX3JlZjEyJG1ldGEuZmllbGQsXG4gICAgICAgIHRvdWNoID0gX3JlZjEyJG1ldGEudG91Y2gsXG4gICAgICAgIHBheWxvYWQgPSBfcmVmMTIucGF5bG9hZDtcblxuICAgIHZhciByZXN1bHQgPSBzdGF0ZTtcbiAgICB2YXIgaW5pdGlhbCA9IGdldEluKHJlc3VsdCwgJ2luaXRpYWwuJyArIGZpZWxkKTtcbiAgICBpZiAoaW5pdGlhbCA9PT0gdW5kZWZpbmVkICYmIHBheWxvYWQgPT09ICcnKSB7XG4gICAgICByZXN1bHQgPSBkZWxldGVJbldpdGhDbGVhblVwKHJlc3VsdCwgJ3ZhbHVlcy4nICsgZmllbGQpO1xuICAgIH0gZWxzZSBpZiAocGF5bG9hZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXN1bHQgPSBzZXRJbihyZXN1bHQsICd2YWx1ZXMuJyArIGZpZWxkLCBwYXlsb2FkKTtcbiAgICB9XG4gICAgaWYgKGZpZWxkID09PSBnZXRJbihyZXN1bHQsICdhY3RpdmUnKSkge1xuICAgICAgcmVzdWx0ID0gZGVsZXRlSW4ocmVzdWx0LCAnYWN0aXZlJyk7XG4gICAgfVxuICAgIHJlc3VsdCA9IGRlbGV0ZUluKHJlc3VsdCwgJ2ZpZWxkcy4nICsgZmllbGQgKyAnLmFjdGl2ZScpO1xuICAgIGlmICh0b3VjaCkge1xuICAgICAgcmVzdWx0ID0gc2V0SW4ocmVzdWx0LCAnZmllbGRzLicgKyBmaWVsZCArICcudG91Y2hlZCcsIHRydWUpO1xuICAgICAgcmVzdWx0ID0gc2V0SW4ocmVzdWx0LCAnYW55VG91Y2hlZCcsIHRydWUpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9KSwgX2RlZmluZVByb3BlcnR5KF9iZWhhdmlvcnMsIF9hY3Rpb25UeXBlcy5DSEFOR0UsIGZ1bmN0aW9uIChzdGF0ZSwgX3JlZjEzKSB7XG4gICAgdmFyIF9yZWYxMyRtZXRhID0gX3JlZjEzLm1ldGEsXG4gICAgICAgIGZpZWxkID0gX3JlZjEzJG1ldGEuZmllbGQsXG4gICAgICAgIHRvdWNoID0gX3JlZjEzJG1ldGEudG91Y2gsXG4gICAgICAgIHBlcnNpc3RlbnRTdWJtaXRFcnJvcnMgPSBfcmVmMTMkbWV0YS5wZXJzaXN0ZW50U3VibWl0RXJyb3JzLFxuICAgICAgICBwYXlsb2FkID0gX3JlZjEzLnBheWxvYWQ7XG5cbiAgICB2YXIgcmVzdWx0ID0gc3RhdGU7XG4gICAgdmFyIGluaXRpYWwgPSBnZXRJbihyZXN1bHQsICdpbml0aWFsLicgKyBmaWVsZCk7XG4gICAgaWYgKGluaXRpYWwgPT09IHVuZGVmaW5lZCAmJiBwYXlsb2FkID09PSAnJykge1xuICAgICAgcmVzdWx0ID0gZGVsZXRlSW5XaXRoQ2xlYW5VcChyZXN1bHQsICd2YWx1ZXMuJyArIGZpZWxkKTtcbiAgICB9IGVsc2UgaWYgKHBheWxvYWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVzdWx0ID0gc2V0SW4ocmVzdWx0LCAndmFsdWVzLicgKyBmaWVsZCwgcGF5bG9hZCk7XG4gICAgfVxuICAgIHJlc3VsdCA9IGRlbGV0ZUluV2l0aENsZWFuVXAocmVzdWx0LCAnYXN5bmNFcnJvcnMuJyArIGZpZWxkKTtcbiAgICBpZiAoIXBlcnNpc3RlbnRTdWJtaXRFcnJvcnMpIHtcbiAgICAgIHJlc3VsdCA9IGRlbGV0ZUluV2l0aENsZWFuVXAocmVzdWx0LCAnc3VibWl0RXJyb3JzLicgKyBmaWVsZCk7XG4gICAgfVxuICAgIHJlc3VsdCA9IGRlbGV0ZUluV2l0aENsZWFuVXAocmVzdWx0LCAnZmllbGRzLicgKyBmaWVsZCArICcuYXV0b2ZpbGxlZCcpO1xuICAgIGlmICh0b3VjaCkge1xuICAgICAgcmVzdWx0ID0gc2V0SW4ocmVzdWx0LCAnZmllbGRzLicgKyBmaWVsZCArICcudG91Y2hlZCcsIHRydWUpO1xuICAgICAgcmVzdWx0ID0gc2V0SW4ocmVzdWx0LCAnYW55VG91Y2hlZCcsIHRydWUpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9KSwgX2RlZmluZVByb3BlcnR5KF9iZWhhdmlvcnMsIF9hY3Rpb25UeXBlcy5DTEVBUl9TVUJNSVQsIGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgIHJldHVybiBkZWxldGVJbihzdGF0ZSwgJ3RyaWdnZXJTdWJtaXQnKTtcbiAgfSksIF9kZWZpbmVQcm9wZXJ0eShfYmVoYXZpb3JzLCBfYWN0aW9uVHlwZXMuQ0xFQVJfU1VCTUlUX0VSUk9SUywgZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgcmV0dXJuIGRlbGV0ZUluV2l0aENsZWFuVXAoc3RhdGUsICdzdWJtaXRFcnJvcnMnKTtcbiAgfSksIF9kZWZpbmVQcm9wZXJ0eShfYmVoYXZpb3JzLCBfYWN0aW9uVHlwZXMuQ0xFQVJfQVNZTkNfRVJST1IsIGZ1bmN0aW9uIChzdGF0ZSwgX3JlZjE0KSB7XG4gICAgdmFyIGZpZWxkID0gX3JlZjE0Lm1ldGEuZmllbGQ7XG5cbiAgICByZXR1cm4gZGVsZXRlSW4oc3RhdGUsICdhc3luY0Vycm9ycy4nICsgZmllbGQpO1xuICB9KSwgX2RlZmluZVByb3BlcnR5KF9iZWhhdmlvcnMsIF9hY3Rpb25UeXBlcy5GT0NVUywgZnVuY3Rpb24gKHN0YXRlLCBfcmVmMTUpIHtcbiAgICB2YXIgZmllbGQgPSBfcmVmMTUubWV0YS5maWVsZDtcblxuICAgIHZhciByZXN1bHQgPSBzdGF0ZTtcbiAgICB2YXIgcHJldmlvdXNseUFjdGl2ZSA9IGdldEluKHN0YXRlLCAnYWN0aXZlJyk7XG4gICAgcmVzdWx0ID0gZGVsZXRlSW4ocmVzdWx0LCAnZmllbGRzLicgKyBwcmV2aW91c2x5QWN0aXZlICsgJy5hY3RpdmUnKTtcbiAgICByZXN1bHQgPSBzZXRJbihyZXN1bHQsICdmaWVsZHMuJyArIGZpZWxkICsgJy52aXNpdGVkJywgdHJ1ZSk7XG4gICAgcmVzdWx0ID0gc2V0SW4ocmVzdWx0LCAnZmllbGRzLicgKyBmaWVsZCArICcuYWN0aXZlJywgdHJ1ZSk7XG4gICAgcmVzdWx0ID0gc2V0SW4ocmVzdWx0LCAnYWN0aXZlJywgZmllbGQpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH0pLCBfZGVmaW5lUHJvcGVydHkoX2JlaGF2aW9ycywgX2FjdGlvblR5cGVzLklOSVRJQUxJWkUsIGZ1bmN0aW9uIChzdGF0ZSwgX3JlZjE2KSB7XG4gICAgdmFyIHBheWxvYWQgPSBfcmVmMTYucGF5bG9hZCxcbiAgICAgICAgX3JlZjE2JG1ldGEgPSBfcmVmMTYubWV0YSxcbiAgICAgICAga2VlcERpcnR5ID0gX3JlZjE2JG1ldGEua2VlcERpcnR5LFxuICAgICAgICBrZWVwU3VibWl0U3VjY2VlZGVkID0gX3JlZjE2JG1ldGEua2VlcFN1Ym1pdFN1Y2NlZWRlZDtcblxuICAgIHZhciBtYXBEYXRhID0gZnJvbUpTKHBheWxvYWQpO1xuICAgIHZhciByZXN1bHQgPSBlbXB0eTsgLy8gY2xlYW4gYWxsIGZpZWxkIHN0YXRlXG5cbiAgICAvLyBwZXJzaXN0IG9sZCB3YXJuaW5ncywgdGhleSB3aWxsIGdldCByZWNhbGN1bGF0ZWQgaWYgdGhlIG5ldyBmb3JtIHZhbHVlcyBhcmUgZGlmZmVyZW50IGZyb20gdGhlIG9sZCB2YWx1ZXNcbiAgICB2YXIgd2FybmluZyA9IGdldEluKHN0YXRlLCAnd2FybmluZycpO1xuICAgIGlmICh3YXJuaW5nKSB7XG4gICAgICByZXN1bHQgPSBzZXRJbihyZXN1bHQsICd3YXJuaW5nJywgd2FybmluZyk7XG4gICAgfVxuICAgIHZhciBzeW5jV2FybmluZ3MgPSBnZXRJbihzdGF0ZSwgJ3N5bmNXYXJuaW5ncycpO1xuICAgIGlmIChzeW5jV2FybmluZ3MpIHtcbiAgICAgIHJlc3VsdCA9IHNldEluKHJlc3VsdCwgJ3N5bmNXYXJuaW5ncycsIHN5bmNXYXJuaW5ncyk7XG4gICAgfVxuXG4gICAgLy8gcGVyc2lzdCBvbGQgZXJyb3JzLCB0aGV5IHdpbGwgZ2V0IHJlY2FsY3VsYXRlZCBpZiB0aGUgbmV3IGZvcm0gdmFsdWVzIGFyZSBkaWZmZXJlbnQgZnJvbSB0aGUgb2xkIHZhbHVlc1xuICAgIHZhciBlcnJvciA9IGdldEluKHN0YXRlLCAnZXJyb3InKTtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHJlc3VsdCA9IHNldEluKHJlc3VsdCwgJ2Vycm9yJywgZXJyb3IpO1xuICAgIH1cbiAgICB2YXIgc3luY0Vycm9ycyA9IGdldEluKHN0YXRlLCAnc3luY0Vycm9ycycpO1xuICAgIGlmIChzeW5jRXJyb3JzKSB7XG4gICAgICByZXN1bHQgPSBzZXRJbihyZXN1bHQsICdzeW5jRXJyb3JzJywgc3luY0Vycm9ycyk7XG4gICAgfVxuXG4gICAgdmFyIHJlZ2lzdGVyZWRGaWVsZHMgPSBnZXRJbihzdGF0ZSwgJ3JlZ2lzdGVyZWRGaWVsZHMnKTtcbiAgICBpZiAocmVnaXN0ZXJlZEZpZWxkcykge1xuICAgICAgcmVzdWx0ID0gc2V0SW4ocmVzdWx0LCAncmVnaXN0ZXJlZEZpZWxkcycsIHJlZ2lzdGVyZWRGaWVsZHMpO1xuICAgIH1cbiAgICB2YXIgbmV3VmFsdWVzID0gbWFwRGF0YTtcbiAgICBpZiAoa2VlcERpcnR5ICYmIHJlZ2lzdGVyZWRGaWVsZHMpIHtcbiAgICAgIC8vXG4gICAgICAvLyBLZWVwIHRoZSB2YWx1ZSBvZiBkaXJ0eSBmaWVsZHMgd2hpbGUgdXBkYXRpbmcgdGhlIHZhbHVlIG9mXG4gICAgICAvLyBwcmlzdGluZSBmaWVsZHMuIFRoaXMgd2F5LCBhcHBzIGNhbiByZWluaXRpYWxpemUgZm9ybXMgd2hpbGVcbiAgICAgIC8vIGF2b2lkaW5nIHN0b21waW5nIG9uIHVzZXIgZWRpdHMuXG4gICAgICAvL1xuICAgICAgLy8gTm90ZSAxOiBUaGUgaW5pdGlhbGl6ZSBhY3Rpb24gcmVwbGFjZXMgYWxsIGluaXRpYWwgdmFsdWVzXG4gICAgICAvLyByZWdhcmRsZXNzIG9mIGtlZXBEaXJ0eS5cbiAgICAgIC8vXG4gICAgICAvLyBOb3RlIDI6IFdoZW4gYSBmaWVsZCBpcyBkaXJ0eSwga2VlcERpcnR5IGlzIGVuYWJsZWQsIGFuZCB0aGUgZmllbGRcbiAgICAgIC8vIHZhbHVlIGlzIHRoZSBzYW1lIGFzIHRoZSBuZXcgaW5pdGlhbCB2YWx1ZSBmb3IgdGhlIGZpZWxkLCB0aGVcbiAgICAgIC8vIGluaXRpYWxpemUgYWN0aW9uIGNhdXNlcyB0aGUgZmllbGQgdG8gYmVjb21lIHByaXN0aW5lLiBUaGF0IGVmZmVjdFxuICAgICAgLy8gaXMgd2hhdCB3ZSB3YW50LlxuICAgICAgLy9cbiAgICAgIHZhciBwcmV2aW91c1ZhbHVlcyA9IGdldEluKHN0YXRlLCAndmFsdWVzJyk7XG4gICAgICB2YXIgcHJldmlvdXNJbml0aWFsVmFsdWVzID0gZ2V0SW4oc3RhdGUsICdpbml0aWFsJyk7XG4gICAgICBrZXlzKHJlZ2lzdGVyZWRGaWVsZHMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgdmFyIHByZXZpb3VzSW5pdGlhbFZhbHVlID0gZ2V0SW4ocHJldmlvdXNJbml0aWFsVmFsdWVzLCBuYW1lKTtcbiAgICAgICAgdmFyIHByZXZpb3VzVmFsdWUgPSBnZXRJbihwcmV2aW91c1ZhbHVlcywgbmFtZSk7XG4gICAgICAgIGlmICghZGVlcEVxdWFsKHByZXZpb3VzVmFsdWUsIHByZXZpb3VzSW5pdGlhbFZhbHVlKSkge1xuICAgICAgICAgIC8vIFRoaXMgZmllbGQgd2FzIGRpcnR5LiBSZXN0b3JlIHRoZSBkaXJ0eSB2YWx1ZS5cbiAgICAgICAgICBuZXdWYWx1ZXMgPSBzZXRJbihuZXdWYWx1ZXMsIG5hbWUsIHByZXZpb3VzVmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGtlZXBTdWJtaXRTdWNjZWVkZWQgJiYgZ2V0SW4oc3RhdGUsICdzdWJtaXRTdWNjZWVkZWQnKSkge1xuICAgICAgcmVzdWx0ID0gc2V0SW4ocmVzdWx0LCAnc3VibWl0U3VjY2VlZGVkJywgdHJ1ZSk7XG4gICAgfVxuICAgIHJlc3VsdCA9IHNldEluKHJlc3VsdCwgJ3ZhbHVlcycsIG5ld1ZhbHVlcyk7XG4gICAgcmVzdWx0ID0gc2V0SW4ocmVzdWx0LCAnaW5pdGlhbCcsIG1hcERhdGEpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH0pLCBfZGVmaW5lUHJvcGVydHkoX2JlaGF2aW9ycywgX2FjdGlvblR5cGVzLlJFR0lTVEVSX0ZJRUxELCBmdW5jdGlvbiAoc3RhdGUsIF9yZWYxNykge1xuICAgIHZhciBfcmVmMTckcGF5bG9hZCA9IF9yZWYxNy5wYXlsb2FkLFxuICAgICAgICBuYW1lID0gX3JlZjE3JHBheWxvYWQubmFtZSxcbiAgICAgICAgdHlwZSA9IF9yZWYxNyRwYXlsb2FkLnR5cGU7XG5cbiAgICB2YXIga2V5ID0gJ3JlZ2lzdGVyZWRGaWVsZHNbXFwnJyArIG5hbWUgKyAnXFwnXSc7XG4gICAgdmFyIGZpZWxkID0gZ2V0SW4oc3RhdGUsIGtleSk7XG4gICAgaWYgKGZpZWxkKSB7XG4gICAgICB2YXIgY291bnQgPSBnZXRJbihmaWVsZCwgJ2NvdW50JykgKyAxO1xuICAgICAgZmllbGQgPSBzZXRJbihmaWVsZCwgJ2NvdW50JywgY291bnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaWVsZCA9IGZyb21KUyh7IG5hbWU6IG5hbWUsIHR5cGU6IHR5cGUsIGNvdW50OiAxIH0pO1xuICAgIH1cbiAgICByZXR1cm4gc2V0SW4oc3RhdGUsIGtleSwgZmllbGQpO1xuICB9KSwgX2RlZmluZVByb3BlcnR5KF9iZWhhdmlvcnMsIF9hY3Rpb25UeXBlcy5SRVNFVCwgZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGVtcHR5O1xuICAgIHZhciByZWdpc3RlcmVkRmllbGRzID0gZ2V0SW4oc3RhdGUsICdyZWdpc3RlcmVkRmllbGRzJyk7XG4gICAgaWYgKHJlZ2lzdGVyZWRGaWVsZHMpIHtcbiAgICAgIHJlc3VsdCA9IHNldEluKHJlc3VsdCwgJ3JlZ2lzdGVyZWRGaWVsZHMnLCByZWdpc3RlcmVkRmllbGRzKTtcbiAgICB9XG4gICAgdmFyIHZhbHVlcyA9IGdldEluKHN0YXRlLCAnaW5pdGlhbCcpO1xuICAgIGlmICh2YWx1ZXMpIHtcbiAgICAgIHJlc3VsdCA9IHNldEluKHJlc3VsdCwgJ3ZhbHVlcycsIHZhbHVlcyk7XG4gICAgICByZXN1bHQgPSBzZXRJbihyZXN1bHQsICdpbml0aWFsJywgdmFsdWVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSksIF9kZWZpbmVQcm9wZXJ0eShfYmVoYXZpb3JzLCBfYWN0aW9uVHlwZXMuU1VCTUlULCBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICByZXR1cm4gc2V0SW4oc3RhdGUsICd0cmlnZ2VyU3VibWl0JywgdHJ1ZSk7XG4gIH0pLCBfZGVmaW5lUHJvcGVydHkoX2JlaGF2aW9ycywgX2FjdGlvblR5cGVzLlNUQVJUX0FTWU5DX1ZBTElEQVRJT04sIGZ1bmN0aW9uIChzdGF0ZSwgX3JlZjE4KSB7XG4gICAgdmFyIGZpZWxkID0gX3JlZjE4Lm1ldGEuZmllbGQ7XG5cbiAgICByZXR1cm4gc2V0SW4oc3RhdGUsICdhc3luY1ZhbGlkYXRpbmcnLCBmaWVsZCB8fCB0cnVlKTtcbiAgfSksIF9kZWZpbmVQcm9wZXJ0eShfYmVoYXZpb3JzLCBfYWN0aW9uVHlwZXMuU1RBUlRfU1VCTUlULCBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICByZXR1cm4gc2V0SW4oc3RhdGUsICdzdWJtaXR0aW5nJywgdHJ1ZSk7XG4gIH0pLCBfZGVmaW5lUHJvcGVydHkoX2JlaGF2aW9ycywgX2FjdGlvblR5cGVzLlNUT1BfQVNZTkNfVkFMSURBVElPTiwgZnVuY3Rpb24gKHN0YXRlLCBfcmVmMTkpIHtcbiAgICB2YXIgcGF5bG9hZCA9IF9yZWYxOS5wYXlsb2FkO1xuXG4gICAgdmFyIHJlc3VsdCA9IHN0YXRlO1xuICAgIHJlc3VsdCA9IGRlbGV0ZUluKHJlc3VsdCwgJ2FzeW5jVmFsaWRhdGluZycpO1xuICAgIGlmIChwYXlsb2FkICYmIE9iamVjdC5rZXlzKHBheWxvYWQpLmxlbmd0aCkge1xuICAgICAgdmFyIF9lcnJvciA9IHBheWxvYWQuX2Vycm9yLFxuICAgICAgICAgIGZpZWxkRXJyb3JzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHBheWxvYWQsIFsnX2Vycm9yJ10pO1xuXG4gICAgICBpZiAoX2Vycm9yKSB7XG4gICAgICAgIHJlc3VsdCA9IHNldEluKHJlc3VsdCwgJ2Vycm9yJywgX2Vycm9yKTtcbiAgICAgIH1cbiAgICAgIGlmIChPYmplY3Qua2V5cyhmaWVsZEVycm9ycykubGVuZ3RoKSB7XG4gICAgICAgIHJlc3VsdCA9IHNldEluKHJlc3VsdCwgJ2FzeW5jRXJyb3JzJywgZnJvbUpTKGZpZWxkRXJyb3JzKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSBkZWxldGVJbihyZXN1bHQsICdhc3luY0Vycm9ycycpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSBkZWxldGVJbihyZXN1bHQsICdlcnJvcicpO1xuICAgICAgcmVzdWx0ID0gZGVsZXRlSW4ocmVzdWx0LCAnYXN5bmNFcnJvcnMnKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSksIF9kZWZpbmVQcm9wZXJ0eShfYmVoYXZpb3JzLCBfYWN0aW9uVHlwZXMuU1RPUF9TVUJNSVQsIGZ1bmN0aW9uIChzdGF0ZSwgX3JlZjIwKSB7XG4gICAgdmFyIHBheWxvYWQgPSBfcmVmMjAucGF5bG9hZDtcblxuICAgIHZhciByZXN1bHQgPSBzdGF0ZTtcbiAgICByZXN1bHQgPSBkZWxldGVJbihyZXN1bHQsICdzdWJtaXR0aW5nJyk7XG4gICAgcmVzdWx0ID0gZGVsZXRlSW4ocmVzdWx0LCAnc3VibWl0RmFpbGVkJyk7XG4gICAgcmVzdWx0ID0gZGVsZXRlSW4ocmVzdWx0LCAnc3VibWl0U3VjY2VlZGVkJyk7XG4gICAgaWYgKHBheWxvYWQgJiYgT2JqZWN0LmtleXMocGF5bG9hZCkubGVuZ3RoKSB7XG4gICAgICB2YXIgX2Vycm9yID0gcGF5bG9hZC5fZXJyb3IsXG4gICAgICAgICAgZmllbGRFcnJvcnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocGF5bG9hZCwgWydfZXJyb3InXSk7XG5cbiAgICAgIGlmIChfZXJyb3IpIHtcbiAgICAgICAgcmVzdWx0ID0gc2V0SW4ocmVzdWx0LCAnZXJyb3InLCBfZXJyb3IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gZGVsZXRlSW4ocmVzdWx0LCAnZXJyb3InKTtcbiAgICAgIH1cbiAgICAgIGlmIChPYmplY3Qua2V5cyhmaWVsZEVycm9ycykubGVuZ3RoKSB7XG4gICAgICAgIHJlc3VsdCA9IHNldEluKHJlc3VsdCwgJ3N1Ym1pdEVycm9ycycsIGZyb21KUyhmaWVsZEVycm9ycykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gZGVsZXRlSW4ocmVzdWx0LCAnc3VibWl0RXJyb3JzJyk7XG4gICAgICB9XG4gICAgICByZXN1bHQgPSBzZXRJbihyZXN1bHQsICdzdWJtaXRGYWlsZWQnLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gc2V0SW4ocmVzdWx0LCAnc3VibWl0U3VjY2VlZGVkJywgdHJ1ZSk7XG4gICAgICByZXN1bHQgPSBkZWxldGVJbihyZXN1bHQsICdlcnJvcicpO1xuICAgICAgcmVzdWx0ID0gZGVsZXRlSW4ocmVzdWx0LCAnc3VibWl0RXJyb3JzJyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0pLCBfZGVmaW5lUHJvcGVydHkoX2JlaGF2aW9ycywgX2FjdGlvblR5cGVzLlNFVF9TVUJNSVRfRkFJTEVELCBmdW5jdGlvbiAoc3RhdGUsIF9yZWYyMSkge1xuICAgIHZhciBmaWVsZHMgPSBfcmVmMjEubWV0YS5maWVsZHM7XG5cbiAgICB2YXIgcmVzdWx0ID0gc3RhdGU7XG4gICAgcmVzdWx0ID0gc2V0SW4ocmVzdWx0LCAnc3VibWl0RmFpbGVkJywgdHJ1ZSk7XG4gICAgcmVzdWx0ID0gZGVsZXRlSW4ocmVzdWx0LCAnc3VibWl0U3VjY2VlZGVkJyk7XG4gICAgcmVzdWx0ID0gZGVsZXRlSW4ocmVzdWx0LCAnc3VibWl0dGluZycpO1xuICAgIGZpZWxkcy5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZCkge1xuICAgICAgcmV0dXJuIHJlc3VsdCA9IHNldEluKHJlc3VsdCwgJ2ZpZWxkcy4nICsgZmllbGQgKyAnLnRvdWNoZWQnLCB0cnVlKTtcbiAgICB9KTtcbiAgICBpZiAoZmllbGRzLmxlbmd0aCkge1xuICAgICAgcmVzdWx0ID0gc2V0SW4ocmVzdWx0LCAnYW55VG91Y2hlZCcsIHRydWUpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9KSwgX2RlZmluZVByb3BlcnR5KF9iZWhhdmlvcnMsIF9hY3Rpb25UeXBlcy5TRVRfU1VCTUlUX1NVQ0NFRURFRCwgZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IHN0YXRlO1xuICAgIHJlc3VsdCA9IGRlbGV0ZUluKHJlc3VsdCwgJ3N1Ym1pdEZhaWxlZCcpO1xuICAgIHJlc3VsdCA9IHNldEluKHJlc3VsdCwgJ3N1Ym1pdFN1Y2NlZWRlZCcsIHRydWUpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH0pLCBfZGVmaW5lUHJvcGVydHkoX2JlaGF2aW9ycywgX2FjdGlvblR5cGVzLlRPVUNILCBmdW5jdGlvbiAoc3RhdGUsIF9yZWYyMikge1xuICAgIHZhciBmaWVsZHMgPSBfcmVmMjIubWV0YS5maWVsZHM7XG5cbiAgICB2YXIgcmVzdWx0ID0gc3RhdGU7XG4gICAgZmllbGRzLmZvckVhY2goZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgICByZXR1cm4gcmVzdWx0ID0gc2V0SW4ocmVzdWx0LCAnZmllbGRzLicgKyBmaWVsZCArICcudG91Y2hlZCcsIHRydWUpO1xuICAgIH0pO1xuICAgIHJlc3VsdCA9IHNldEluKHJlc3VsdCwgJ2FueVRvdWNoZWQnLCB0cnVlKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9KSwgX2RlZmluZVByb3BlcnR5KF9iZWhhdmlvcnMsIF9hY3Rpb25UeXBlcy5VTlJFR0lTVEVSX0ZJRUxELCBmdW5jdGlvbiAoc3RhdGUsIF9yZWYyMykge1xuICAgIHZhciBfcmVmMjMkcGF5bG9hZCA9IF9yZWYyMy5wYXlsb2FkLFxuICAgICAgICBuYW1lID0gX3JlZjIzJHBheWxvYWQubmFtZSxcbiAgICAgICAgZGVzdHJveU9uVW5tb3VudCA9IF9yZWYyMyRwYXlsb2FkLmRlc3Ryb3lPblVubW91bnQ7XG5cbiAgICB2YXIgcmVzdWx0ID0gc3RhdGU7XG4gICAgdmFyIGtleSA9ICdyZWdpc3RlcmVkRmllbGRzW1xcJycgKyBuYW1lICsgJ1xcJ10nO1xuICAgIHZhciBmaWVsZCA9IGdldEluKHJlc3VsdCwga2V5KTtcbiAgICBpZiAoIWZpZWxkKSB7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHZhciBjb3VudCA9IGdldEluKGZpZWxkLCAnY291bnQnKSAtIDE7XG4gICAgaWYgKGNvdW50IDw9IDAgJiYgZGVzdHJveU9uVW5tb3VudCkge1xuICAgICAgLy8gTm90ZTogQ2Fubm90IHVzZSBkZWxldGVXaXRoQ2xlYW5VcCBoZXJlIGJlY2F1c2Ugb2YgdGhlIGZsYXQgbmF0dXJlIG9mIHJlZ2lzdGVyZWRGaWVsZHNcbiAgICAgIHJlc3VsdCA9IGRlbGV0ZUluKHJlc3VsdCwga2V5KTtcbiAgICAgIGlmIChkZWVwRXF1YWwoZ2V0SW4ocmVzdWx0LCAncmVnaXN0ZXJlZEZpZWxkcycpLCBlbXB0eSkpIHtcbiAgICAgICAgcmVzdWx0ID0gZGVsZXRlSW4ocmVzdWx0LCAncmVnaXN0ZXJlZEZpZWxkcycpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmaWVsZCA9IHNldEluKGZpZWxkLCAnY291bnQnLCBjb3VudCk7XG4gICAgICByZXN1bHQgPSBzZXRJbihyZXN1bHQsIGtleSwgZmllbGQpO1xuICAgIH1cbiAgICBpZiAoZGVzdHJveU9uVW5tb3VudCkge1xuICAgICAgcmVzdWx0ID0gZGVsZXRlSW5XaXRoQ2xlYW5VcChyZXN1bHQsICdzeW5jRXJyb3JzLicgKyBuYW1lKTtcbiAgICAgIHJlc3VsdCA9IGRlbGV0ZUluV2l0aENsZWFuVXAocmVzdWx0LCAnc3VibWl0RXJyb3JzLicgKyBuYW1lKTtcbiAgICAgIHJlc3VsdCA9IGRlbGV0ZUluV2l0aENsZWFuVXAocmVzdWx0LCAnYXN5bmNFcnJvcnMuJyArIG5hbWUpO1xuICAgICAgcmVzdWx0ID0gZGVsZXRlSW5XaXRoQ2xlYW5VcChyZXN1bHQsICdzeW5jV2FybmluZ3MuJyArIG5hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9KSwgX2RlZmluZVByb3BlcnR5KF9iZWhhdmlvcnMsIF9hY3Rpb25UeXBlcy5VTlRPVUNILCBmdW5jdGlvbiAoc3RhdGUsIF9yZWYyNCkge1xuICAgIHZhciBmaWVsZHMgPSBfcmVmMjQubWV0YS5maWVsZHM7XG5cbiAgICB2YXIgcmVzdWx0ID0gc3RhdGU7XG4gICAgZmllbGRzLmZvckVhY2goZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgICByZXR1cm4gcmVzdWx0ID0gZGVsZXRlSW4ocmVzdWx0LCAnZmllbGRzLicgKyBmaWVsZCArICcudG91Y2hlZCcpO1xuICAgIH0pO1xuICAgIHZhciBhbnlUb3VjaGVkID0ga2V5cyhnZXRJbihyZXN1bHQsICdyZWdpc3RlcmVkRmllbGRzJykpLnNvbWUoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIGdldEluKHJlc3VsdCwgJ2ZpZWxkcy4nICsga2V5ICsgJy50b3VjaGVkJyk7XG4gICAgfSk7XG4gICAgcmVzdWx0ID0gYW55VG91Y2hlZCA/IHNldEluKHJlc3VsdCwgJ2FueVRvdWNoZWQnLCB0cnVlKSA6IGRlbGV0ZUluKHJlc3VsdCwgJ2FueVRvdWNoZWQnKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9KSwgX2RlZmluZVByb3BlcnR5KF9iZWhhdmlvcnMsIF9hY3Rpb25UeXBlcy5VUERBVEVfU1lOQ19FUlJPUlMsIGZ1bmN0aW9uIChzdGF0ZSwgX3JlZjI1KSB7XG4gICAgdmFyIF9yZWYyNSRwYXlsb2FkID0gX3JlZjI1LnBheWxvYWQsXG4gICAgICAgIHN5bmNFcnJvcnMgPSBfcmVmMjUkcGF5bG9hZC5zeW5jRXJyb3JzLFxuICAgICAgICBlcnJvciA9IF9yZWYyNSRwYXlsb2FkLmVycm9yO1xuXG4gICAgdmFyIHJlc3VsdCA9IHN0YXRlO1xuICAgIGlmIChlcnJvcikge1xuICAgICAgcmVzdWx0ID0gc2V0SW4ocmVzdWx0LCAnZXJyb3InLCBlcnJvcik7XG4gICAgICByZXN1bHQgPSBzZXRJbihyZXN1bHQsICdzeW5jRXJyb3InLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gZGVsZXRlSW4ocmVzdWx0LCAnZXJyb3InKTtcbiAgICAgIHJlc3VsdCA9IGRlbGV0ZUluKHJlc3VsdCwgJ3N5bmNFcnJvcicpO1xuICAgIH1cbiAgICBpZiAoT2JqZWN0LmtleXMoc3luY0Vycm9ycykubGVuZ3RoKSB7XG4gICAgICByZXN1bHQgPSBzZXRJbihyZXN1bHQsICdzeW5jRXJyb3JzJywgc3luY0Vycm9ycyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IGRlbGV0ZUluKHJlc3VsdCwgJ3N5bmNFcnJvcnMnKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSksIF9kZWZpbmVQcm9wZXJ0eShfYmVoYXZpb3JzLCBfYWN0aW9uVHlwZXMuVVBEQVRFX1NZTkNfV0FSTklOR1MsIGZ1bmN0aW9uIChzdGF0ZSwgX3JlZjI2KSB7XG4gICAgdmFyIF9yZWYyNiRwYXlsb2FkID0gX3JlZjI2LnBheWxvYWQsXG4gICAgICAgIHN5bmNXYXJuaW5ncyA9IF9yZWYyNiRwYXlsb2FkLnN5bmNXYXJuaW5ncyxcbiAgICAgICAgd2FybmluZyA9IF9yZWYyNiRwYXlsb2FkLndhcm5pbmc7XG5cbiAgICB2YXIgcmVzdWx0ID0gc3RhdGU7XG4gICAgaWYgKHdhcm5pbmcpIHtcbiAgICAgIHJlc3VsdCA9IHNldEluKHJlc3VsdCwgJ3dhcm5pbmcnLCB3YXJuaW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gZGVsZXRlSW4ocmVzdWx0LCAnd2FybmluZycpO1xuICAgIH1cbiAgICBpZiAoT2JqZWN0LmtleXMoc3luY1dhcm5pbmdzKS5sZW5ndGgpIHtcbiAgICAgIHJlc3VsdCA9IHNldEluKHJlc3VsdCwgJ3N5bmNXYXJuaW5ncycsIHN5bmNXYXJuaW5ncyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IGRlbGV0ZUluKHJlc3VsdCwgJ3N5bmNXYXJuaW5ncycpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9KSwgX2JlaGF2aW9ycyk7XG5cbiAgdmFyIHJlZHVjZXIgPSBmdW5jdGlvbiByZWR1Y2VyKCkge1xuICAgIHZhciBzdGF0ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZW1wdHk7XG4gICAgdmFyIGFjdGlvbiA9IGFyZ3VtZW50c1sxXTtcblxuICAgIHZhciBiZWhhdmlvciA9IGJlaGF2aW9yc1thY3Rpb24udHlwZV07XG4gICAgcmV0dXJuIGJlaGF2aW9yID8gYmVoYXZpb3Ioc3RhdGUsIGFjdGlvbikgOiBzdGF0ZTtcbiAgfTtcblxuICB2YXIgYnlGb3JtID0gZnVuY3Rpb24gYnlGb3JtKHJlZHVjZXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHN0YXRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBlbXB0eTtcbiAgICAgIHZhciBhY3Rpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgICB2YXIgZm9ybSA9IGFjdGlvbiAmJiBhY3Rpb24ubWV0YSAmJiBhY3Rpb24ubWV0YS5mb3JtO1xuICAgICAgaWYgKCFmb3JtIHx8ICFpc1JlZHV4Rm9ybUFjdGlvbihhY3Rpb24pKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cbiAgICAgIGlmIChhY3Rpb24udHlwZSA9PT0gX2FjdGlvblR5cGVzLkRFU1RST1kpIHtcbiAgICAgICAgcmV0dXJuIGFjdGlvbi5tZXRhLmZvcm0ucmVkdWNlKGZ1bmN0aW9uIChyZXN1bHQsIGZvcm0pIHtcbiAgICAgICAgICByZXR1cm4gZGVsZXRlSW5XaXRoQ2xlYW5VcChyZXN1bHQsIGZvcm0pO1xuICAgICAgICB9LCBzdGF0ZSk7XG4gICAgICB9XG4gICAgICB2YXIgZm9ybVN0YXRlID0gZ2V0SW4oc3RhdGUsIGZvcm0pO1xuICAgICAgdmFyIHJlc3VsdCA9IHJlZHVjZXIoZm9ybVN0YXRlLCBhY3Rpb24pO1xuICAgICAgcmV0dXJuIHJlc3VsdCA9PT0gZm9ybVN0YXRlID8gc3RhdGUgOiBzZXRJbihzdGF0ZSwgZm9ybSwgcmVzdWx0KTtcbiAgICB9O1xuICB9O1xuXG4gIC8qKlxuICAgKiBBZGRzIGFkZGl0aW9uYWwgZnVuY3Rpb25hbGl0eSB0byB0aGUgcmVkdWNlclxuICAgKi9cbiAgZnVuY3Rpb24gZGVjb3JhdGUodGFyZ2V0KSB7XG4gICAgdGFyZ2V0LnBsdWdpbiA9IGZ1bmN0aW9uIHBsdWdpbihyZWR1Y2Vycykge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgLy8gdXNlICdmdW5jdGlvbicga2V5d29yZCB0byBlbmFibGUgJ3RoaXMnXG4gICAgICByZXR1cm4gZGVjb3JhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3RhdGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGVtcHR5O1xuICAgICAgICB2YXIgYWN0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHJlZHVjZXJzKS5yZWR1Y2UoZnVuY3Rpb24gKGFjY3VtdWxhdG9yLCBrZXkpIHtcbiAgICAgICAgICB2YXIgcHJldmlvdXNTdGF0ZSA9IGdldEluKGFjY3VtdWxhdG9yLCBrZXkpO1xuICAgICAgICAgIHZhciBuZXh0U3RhdGUgPSByZWR1Y2Vyc1trZXldKHByZXZpb3VzU3RhdGUsIGFjdGlvbiwgZ2V0SW4oc3RhdGUsIGtleSkpO1xuICAgICAgICAgIHJldHVybiBuZXh0U3RhdGUgPT09IHByZXZpb3VzU3RhdGUgPyBhY2N1bXVsYXRvciA6IHNldEluKGFjY3VtdWxhdG9yLCBrZXksIG5leHRTdGF0ZSk7XG4gICAgICAgIH0sIF90aGlzKHN0YXRlLCBhY3Rpb24pKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIGRlY29yYXRlKGJ5Rm9ybShyZWR1Y2VyKSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVSZWR1Y2VyO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC1mb3JtL2xpYi9jcmVhdGVSZWR1Y2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAyMDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX21lcmdlNCA9IHJlcXVpcmUoJ2xvZGFzaC9tZXJnZScpO1xuXG52YXIgX21lcmdlNSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21lcmdlNCk7XG5cbnZhciBfbWFwVmFsdWVzMiA9IHJlcXVpcmUoJ2xvZGFzaC9tYXBWYWx1ZXMnKTtcblxudmFyIF9tYXBWYWx1ZXMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWFwVmFsdWVzMik7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9ob2lzdE5vblJlYWN0U3RhdGljcyA9IHJlcXVpcmUoJ2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzJyk7XG5cbnZhciBfaG9pc3ROb25SZWFjdFN0YXRpY3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaG9pc3ROb25SZWFjdFN0YXRpY3MpO1xuXG52YXIgX2lzUHJvbWlzZSA9IHJlcXVpcmUoJ2lzLXByb21pc2UnKTtcblxudmFyIF9pc1Byb21pc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNQcm9taXNlKTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0UmVkdXggPSByZXF1aXJlKCdyZWFjdC1yZWR1eCcpO1xuXG52YXIgX3JlZHV4ID0gcmVxdWlyZSgncmVkdXgnKTtcblxudmFyIF9hY3Rpb25zID0gcmVxdWlyZSgnLi9hY3Rpb25zJyk7XG5cbnZhciBpbXBvcnRlZEFjdGlvbnMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfYWN0aW9ucyk7XG5cbnZhciBfYXN5bmNWYWxpZGF0aW9uID0gcmVxdWlyZSgnLi9hc3luY1ZhbGlkYXRpb24nKTtcblxudmFyIF9hc3luY1ZhbGlkYXRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXN5bmNWYWxpZGF0aW9uKTtcblxudmFyIF9kZWZhdWx0U2hvdWxkQXN5bmNWYWxpZGF0ZSA9IHJlcXVpcmUoJy4vZGVmYXVsdFNob3VsZEFzeW5jVmFsaWRhdGUnKTtcblxudmFyIF9kZWZhdWx0U2hvdWxkQXN5bmNWYWxpZGF0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZhdWx0U2hvdWxkQXN5bmNWYWxpZGF0ZSk7XG5cbnZhciBfZGVmYXVsdFNob3VsZFZhbGlkYXRlID0gcmVxdWlyZSgnLi9kZWZhdWx0U2hvdWxkVmFsaWRhdGUnKTtcblxudmFyIF9kZWZhdWx0U2hvdWxkVmFsaWRhdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmYXVsdFNob3VsZFZhbGlkYXRlKTtcblxudmFyIF9zaWxlbmNlRXZlbnQgPSByZXF1aXJlKCcuL2V2ZW50cy9zaWxlbmNlRXZlbnQnKTtcblxudmFyIF9zaWxlbmNlRXZlbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2lsZW5jZUV2ZW50KTtcblxudmFyIF9zaWxlbmNlRXZlbnRzID0gcmVxdWlyZSgnLi9ldmVudHMvc2lsZW5jZUV2ZW50cycpO1xuXG52YXIgX3NpbGVuY2VFdmVudHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2lsZW5jZUV2ZW50cyk7XG5cbnZhciBfZ2VuZXJhdGVWYWxpZGF0b3IyID0gcmVxdWlyZSgnLi9nZW5lcmF0ZVZhbGlkYXRvcicpO1xuXG52YXIgX2dlbmVyYXRlVmFsaWRhdG9yMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dlbmVyYXRlVmFsaWRhdG9yMik7XG5cbnZhciBfaGFuZGxlU3VibWl0ID0gcmVxdWlyZSgnLi9oYW5kbGVTdWJtaXQnKTtcblxudmFyIF9oYW5kbGVTdWJtaXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGFuZGxlU3VibWl0KTtcblxudmFyIF9pc1ZhbGlkID0gcmVxdWlyZSgnLi9zZWxlY3RvcnMvaXNWYWxpZCcpO1xuXG52YXIgX2lzVmFsaWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNWYWxpZCk7XG5cbnZhciBfcGxhaW4gPSByZXF1aXJlKCcuL3N0cnVjdHVyZS9wbGFpbicpO1xuXG52YXIgX3BsYWluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BsYWluKTtcblxudmFyIF9nZXREaXNwbGF5TmFtZSA9IHJlcXVpcmUoJy4vdXRpbC9nZXREaXNwbGF5TmFtZScpO1xuXG52YXIgX2dldERpc3BsYXlOYW1lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldERpc3BsYXlOYW1lKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IGVsc2UgeyByZXR1cm4gQXJyYXkuZnJvbShhcnIpOyB9IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG52YXIgaXNDbGFzc0NvbXBvbmVudCA9IGZ1bmN0aW9uIGlzQ2xhc3NDb21wb25lbnQoQ29tcG9uZW50KSB7XG4gIHJldHVybiBCb29sZWFuKENvbXBvbmVudCAmJiBDb21wb25lbnQucHJvdG90eXBlICYmIF90eXBlb2YoQ29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KSA9PT0gJ29iamVjdCcpO1xufTtcblxuLy8gZXh0cmFjdCBmaWVsZC1zcGVjaWZpYyBhY3Rpb25zXG5cbnZhciBhcnJheUluc2VydCA9IGltcG9ydGVkQWN0aW9ucy5hcnJheUluc2VydCxcbiAgICBhcnJheU1vdmUgPSBpbXBvcnRlZEFjdGlvbnMuYXJyYXlNb3ZlLFxuICAgIGFycmF5UG9wID0gaW1wb3J0ZWRBY3Rpb25zLmFycmF5UG9wLFxuICAgIGFycmF5UHVzaCA9IGltcG9ydGVkQWN0aW9ucy5hcnJheVB1c2gsXG4gICAgYXJyYXlSZW1vdmUgPSBpbXBvcnRlZEFjdGlvbnMuYXJyYXlSZW1vdmUsXG4gICAgYXJyYXlSZW1vdmVBbGwgPSBpbXBvcnRlZEFjdGlvbnMuYXJyYXlSZW1vdmVBbGwsXG4gICAgYXJyYXlTaGlmdCA9IGltcG9ydGVkQWN0aW9ucy5hcnJheVNoaWZ0LFxuICAgIGFycmF5U3BsaWNlID0gaW1wb3J0ZWRBY3Rpb25zLmFycmF5U3BsaWNlLFxuICAgIGFycmF5U3dhcCA9IGltcG9ydGVkQWN0aW9ucy5hcnJheVN3YXAsXG4gICAgYXJyYXlVbnNoaWZ0ID0gaW1wb3J0ZWRBY3Rpb25zLmFycmF5VW5zaGlmdCxcbiAgICBibHVyID0gaW1wb3J0ZWRBY3Rpb25zLmJsdXIsXG4gICAgY2hhbmdlID0gaW1wb3J0ZWRBY3Rpb25zLmNoYW5nZSxcbiAgICBmb2N1cyA9IGltcG9ydGVkQWN0aW9ucy5mb2N1cyxcbiAgICBmb3JtQWN0aW9ucyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhpbXBvcnRlZEFjdGlvbnMsIFsnYXJyYXlJbnNlcnQnLCAnYXJyYXlNb3ZlJywgJ2FycmF5UG9wJywgJ2FycmF5UHVzaCcsICdhcnJheVJlbW92ZScsICdhcnJheVJlbW92ZUFsbCcsICdhcnJheVNoaWZ0JywgJ2FycmF5U3BsaWNlJywgJ2FycmF5U3dhcCcsICdhcnJheVVuc2hpZnQnLCAnYmx1cicsICdjaGFuZ2UnLCAnZm9jdXMnXSk7XG5cbnZhciBhcnJheUFjdGlvbnMgPSB7XG4gIGFycmF5SW5zZXJ0OiBhcnJheUluc2VydCxcbiAgYXJyYXlNb3ZlOiBhcnJheU1vdmUsXG4gIGFycmF5UG9wOiBhcnJheVBvcCxcbiAgYXJyYXlQdXNoOiBhcnJheVB1c2gsXG4gIGFycmF5UmVtb3ZlOiBhcnJheVJlbW92ZSxcbiAgYXJyYXlSZW1vdmVBbGw6IGFycmF5UmVtb3ZlQWxsLFxuICBhcnJheVNoaWZ0OiBhcnJheVNoaWZ0LFxuICBhcnJheVNwbGljZTogYXJyYXlTcGxpY2UsXG4gIGFycmF5U3dhcDogYXJyYXlTd2FwLFxuICBhcnJheVVuc2hpZnQ6IGFycmF5VW5zaGlmdFxufTtcblxudmFyIHByb3BzVG9Ob3RVcGRhdGVGb3IgPSBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KE9iamVjdC5rZXlzKGltcG9ydGVkQWN0aW9ucykpLCBbJ2FycmF5JywgJ2FzeW5jRXJyb3JzJywgJ2luaXRpYWxWYWx1ZXMnLCAnc3luY0Vycm9ycycsICdzeW5jV2FybmluZ3MnLCAndmFsdWVzJywgJ3JlZ2lzdGVyZWRGaWVsZHMnXSk7XG5cbnZhciBjaGVja1N1Ym1pdCA9IGZ1bmN0aW9uIGNoZWNrU3VibWl0KHN1Ym1pdCkge1xuICBpZiAoIXN1Ym1pdCB8fCB0eXBlb2Ygc3VibWl0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbXVzdCBlaXRoZXIgcGFzcyBoYW5kbGVTdWJtaXQoKSBhbiBvblN1Ym1pdCBmdW5jdGlvbiBvciBwYXNzIG9uU3VibWl0IGFzIGEgcHJvcCcpO1xuICB9XG4gIHJldHVybiBzdWJtaXQ7XG59O1xuXG4vKipcbiAqIFRoZSBkZWNvcmF0b3IgdGhhdCBpcyB0aGUgbWFpbiBBUEkgdG8gcmVkdXgtZm9ybVxuICovXG52YXIgY3JlYXRlUmVkdXhGb3JtID0gZnVuY3Rpb24gY3JlYXRlUmVkdXhGb3JtKHN0cnVjdHVyZSkge1xuICB2YXIgZGVlcEVxdWFsID0gc3RydWN0dXJlLmRlZXBFcXVhbCxcbiAgICAgIGVtcHR5ID0gc3RydWN0dXJlLmVtcHR5LFxuICAgICAgZ2V0SW4gPSBzdHJ1Y3R1cmUuZ2V0SW4sXG4gICAgICBzZXRJbiA9IHN0cnVjdHVyZS5zZXRJbixcbiAgICAgIGtleXMgPSBzdHJ1Y3R1cmUua2V5cyxcbiAgICAgIGZyb21KUyA9IHN0cnVjdHVyZS5mcm9tSlM7XG5cbiAgdmFyIGlzVmFsaWQgPSAoMCwgX2lzVmFsaWQyLmRlZmF1bHQpKHN0cnVjdHVyZSk7XG4gIHJldHVybiBmdW5jdGlvbiAoaW5pdGlhbENvbmZpZykge1xuICAgIHZhciBjb25maWcgPSBfZXh0ZW5kcyh7XG4gICAgICB0b3VjaE9uQmx1cjogdHJ1ZSxcbiAgICAgIHRvdWNoT25DaGFuZ2U6IGZhbHNlLFxuICAgICAgcGVyc2lzdGVudFN1Ym1pdEVycm9yczogZmFsc2UsXG4gICAgICBkZXN0cm95T25Vbm1vdW50OiB0cnVlLFxuICAgICAgc2hvdWxkQXN5bmNWYWxpZGF0ZTogX2RlZmF1bHRTaG91bGRBc3luY1ZhbGlkYXRlMi5kZWZhdWx0LFxuICAgICAgc2hvdWxkVmFsaWRhdGU6IF9kZWZhdWx0U2hvdWxkVmFsaWRhdGUyLmRlZmF1bHQsXG4gICAgICBlbmFibGVSZWluaXRpYWxpemU6IGZhbHNlLFxuICAgICAga2VlcERpcnR5T25SZWluaXRpYWxpemU6IGZhbHNlLFxuICAgICAgZ2V0Rm9ybVN0YXRlOiBmdW5jdGlvbiBnZXRGb3JtU3RhdGUoc3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIGdldEluKHN0YXRlLCAnZm9ybScpO1xuICAgICAgfSxcbiAgICAgIHB1cmU6IHRydWUsXG4gICAgICBmb3JjZVVucmVnaXN0ZXJPblVubW91bnQ6IGZhbHNlXG4gICAgfSwgaW5pdGlhbENvbmZpZyk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKFdyYXBwZWRDb21wb25lbnQpIHtcbiAgICAgIHZhciBGb3JtID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICAgICAgX2luaGVyaXRzKEZvcm0sIF9Db21wb25lbnQpO1xuXG4gICAgICAgIGZ1bmN0aW9uIEZvcm0ocHJvcHMpIHtcbiAgICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRm9ybSk7XG5cbiAgICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoRm9ybS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEZvcm0pKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICAgICAgICBfdGhpcy5zdWJtaXQgPSBfdGhpcy5zdWJtaXQuYmluZChfdGhpcyk7XG4gICAgICAgICAgX3RoaXMucmVzZXQgPSBfdGhpcy5yZXNldC5iaW5kKF90aGlzKTtcbiAgICAgICAgICBfdGhpcy5hc3luY1ZhbGlkYXRlID0gX3RoaXMuYXN5bmNWYWxpZGF0ZS5iaW5kKF90aGlzKTtcbiAgICAgICAgICBfdGhpcy5nZXRWYWx1ZXMgPSBfdGhpcy5nZXRWYWx1ZXMuYmluZChfdGhpcyk7XG4gICAgICAgICAgX3RoaXMucmVnaXN0ZXIgPSBfdGhpcy5yZWdpc3Rlci5iaW5kKF90aGlzKTtcbiAgICAgICAgICBfdGhpcy51bnJlZ2lzdGVyID0gX3RoaXMudW5yZWdpc3Rlci5iaW5kKF90aGlzKTtcbiAgICAgICAgICBfdGhpcy5zdWJtaXRDb21wbGV0ZWQgPSBfdGhpcy5zdWJtaXRDb21wbGV0ZWQuYmluZChfdGhpcyk7XG4gICAgICAgICAgX3RoaXMuc3VibWl0RmFpbGVkID0gX3RoaXMuc3VibWl0RmFpbGVkLmJpbmQoX3RoaXMpO1xuICAgICAgICAgIF90aGlzLmZpZWxkVmFsaWRhdG9ycyA9IHt9O1xuICAgICAgICAgIF90aGlzLmxhc3RGaWVsZFZhbGlkYXRvcktleXMgPSBbXTtcbiAgICAgICAgICBfdGhpcy5maWVsZFdhcm5lcnMgPSB7fTtcbiAgICAgICAgICBfdGhpcy5sYXN0RmllbGRXYXJuZXJLZXlzID0gW107XG4gICAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgX2NyZWF0ZUNsYXNzKEZvcm0sIFt7XG4gICAgICAgICAga2V5OiAnZ2V0Q2hpbGRDb250ZXh0JyxcbiAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIF9yZWR1eEZvcm06IF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgICAgICAgICAgZ2V0Rm9ybVN0YXRlOiBmdW5jdGlvbiBnZXRGb3JtU3RhdGUoc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRJbihfdGhpczIucHJvcHMuZ2V0Rm9ybVN0YXRlKHN0YXRlKSwgX3RoaXMyLnByb3BzLmZvcm0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYXN5bmNWYWxpZGF0ZTogdGhpcy5hc3luY1ZhbGlkYXRlLFxuICAgICAgICAgICAgICAgIGdldFZhbHVlczogdGhpcy5nZXRWYWx1ZXMsXG4gICAgICAgICAgICAgICAgc2VjdGlvblByZWZpeDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIHJlZ2lzdGVyOiB0aGlzLnJlZ2lzdGVyLFxuICAgICAgICAgICAgICAgIHVucmVnaXN0ZXI6IHRoaXMudW5yZWdpc3RlcixcbiAgICAgICAgICAgICAgICByZWdpc3RlcklubmVyT25TdWJtaXQ6IGZ1bmN0aW9uIHJlZ2lzdGVySW5uZXJPblN1Ym1pdChpbm5lck9uU3VibWl0KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMyLmlubmVyT25TdWJtaXQgPSBpbm5lck9uU3VibWl0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAga2V5OiAnaW5pdElmTmVlZGVkJyxcbiAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdElmTmVlZGVkKG5leHRQcm9wcykge1xuICAgICAgICAgICAgdmFyIGVuYWJsZVJlaW5pdGlhbGl6ZSA9IHRoaXMucHJvcHMuZW5hYmxlUmVpbml0aWFsaXplO1xuXG4gICAgICAgICAgICBpZiAobmV4dFByb3BzKSB7XG4gICAgICAgICAgICAgIGlmICgoZW5hYmxlUmVpbml0aWFsaXplIHx8ICFuZXh0UHJvcHMuaW5pdGlhbGl6ZWQpICYmICFkZWVwRXF1YWwodGhpcy5wcm9wcy5pbml0aWFsVmFsdWVzLCBuZXh0UHJvcHMuaW5pdGlhbFZhbHVlcykpIHtcbiAgICAgICAgICAgICAgICB2YXIga2VlcERpcnR5ID0gbmV4dFByb3BzLmluaXRpYWxpemVkICYmIHRoaXMucHJvcHMua2VlcERpcnR5T25SZWluaXRpYWxpemU7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pbml0aWFsaXplKG5leHRQcm9wcy5pbml0aWFsVmFsdWVzLCBrZWVwRGlydHksIHtcbiAgICAgICAgICAgICAgICAgIGxhc3RJbml0aWFsVmFsdWVzOiB0aGlzLnByb3BzLmluaXRpYWxWYWx1ZXNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLmluaXRpYWxWYWx1ZXMgJiYgKCF0aGlzLnByb3BzLmluaXRpYWxpemVkIHx8IGVuYWJsZVJlaW5pdGlhbGl6ZSkpIHtcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pbml0aWFsaXplKHRoaXMucHJvcHMuaW5pdGlhbFZhbHVlcywgdGhpcy5wcm9wcy5rZWVwRGlydHlPblJlaW5pdGlhbGl6ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAga2V5OiAndXBkYXRlU3luY0Vycm9yc0lmTmVlZGVkJyxcbiAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlU3luY0Vycm9yc0lmTmVlZGVkKG5leHRTeW5jRXJyb3JzLCBuZXh0RXJyb3IsIGxhc3RTeW5jRXJyb3JzKSB7XG4gICAgICAgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBlcnJvciA9IF9wcm9wcy5lcnJvcixcbiAgICAgICAgICAgICAgICB1cGRhdGVTeW5jRXJyb3JzID0gX3Byb3BzLnVwZGF0ZVN5bmNFcnJvcnM7XG5cbiAgICAgICAgICAgIHZhciBub0Vycm9ycyA9ICghbGFzdFN5bmNFcnJvcnMgfHwgIU9iamVjdC5rZXlzKGxhc3RTeW5jRXJyb3JzKS5sZW5ndGgpICYmICFlcnJvcjtcbiAgICAgICAgICAgIHZhciBuZXh0Tm9FcnJvcnMgPSAoIW5leHRTeW5jRXJyb3JzIHx8ICFPYmplY3Qua2V5cyhuZXh0U3luY0Vycm9ycykubGVuZ3RoKSAmJiAhbmV4dEVycm9yO1xuICAgICAgICAgICAgaWYgKCEobm9FcnJvcnMgJiYgbmV4dE5vRXJyb3JzKSAmJiAoIV9wbGFpbjIuZGVmYXVsdC5kZWVwRXF1YWwobGFzdFN5bmNFcnJvcnMsIG5leHRTeW5jRXJyb3JzKSB8fCAhX3BsYWluMi5kZWZhdWx0LmRlZXBFcXVhbChlcnJvciwgbmV4dEVycm9yKSkpIHtcbiAgICAgICAgICAgICAgdXBkYXRlU3luY0Vycm9ycyhuZXh0U3luY0Vycm9ycywgbmV4dEVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBrZXk6ICdjbGVhclN1Ym1pdFByb21pc2VJZk5lZWRlZCcsXG4gICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNsZWFyU3VibWl0UHJvbWlzZUlmTmVlZGVkKG5leHRQcm9wcykge1xuICAgICAgICAgICAgdmFyIHN1Ym1pdHRpbmcgPSB0aGlzLnByb3BzLnN1Ym1pdHRpbmc7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnN1Ym1pdFByb21pc2UgJiYgc3VibWl0dGluZyAmJiAhbmV4dFByb3BzLnN1Ym1pdHRpbmcpIHtcbiAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuc3VibWl0UHJvbWlzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBrZXk6ICdzdWJtaXRJZk5lZWRlZCcsXG4gICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN1Ym1pdElmTmVlZGVkKG5leHRQcm9wcykge1xuICAgICAgICAgICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIGNsZWFyU3VibWl0ID0gX3Byb3BzMi5jbGVhclN1Ym1pdCxcbiAgICAgICAgICAgICAgICB0cmlnZ2VyU3VibWl0ID0gX3Byb3BzMi50cmlnZ2VyU3VibWl0O1xuXG4gICAgICAgICAgICBpZiAoIXRyaWdnZXJTdWJtaXQgJiYgbmV4dFByb3BzLnRyaWdnZXJTdWJtaXQpIHtcbiAgICAgICAgICAgICAgY2xlYXJTdWJtaXQoKTtcbiAgICAgICAgICAgICAgdGhpcy5zdWJtaXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBrZXk6ICd2YWxpZGF0ZUlmTmVlZGVkJyxcbiAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdmFsaWRhdGVJZk5lZWRlZChuZXh0UHJvcHMpIHtcbiAgICAgICAgICAgIHZhciBfcHJvcHMzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBzaG91bGRWYWxpZGF0ZSA9IF9wcm9wczMuc2hvdWxkVmFsaWRhdGUsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGUgPSBfcHJvcHMzLnZhbGlkYXRlLFxuICAgICAgICAgICAgICAgIHZhbHVlcyA9IF9wcm9wczMudmFsdWVzO1xuXG4gICAgICAgICAgICB2YXIgZmllbGRMZXZlbFZhbGlkYXRlID0gdGhpcy5nZW5lcmF0ZVZhbGlkYXRvcigpO1xuICAgICAgICAgICAgaWYgKHZhbGlkYXRlIHx8IGZpZWxkTGV2ZWxWYWxpZGF0ZSkge1xuICAgICAgICAgICAgICB2YXIgaW5pdGlhbFJlbmRlciA9IG5leHRQcm9wcyA9PT0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICB2YXIgZmllbGRWYWxpZGF0b3JLZXlzID0gT2JqZWN0LmtleXModGhpcy5nZXRWYWxpZGF0b3JzKCkpO1xuICAgICAgICAgICAgICB2YXIgc2hvdWxkVmFsaWRhdGVSZXN1bHQgPSBzaG91bGRWYWxpZGF0ZSh7XG4gICAgICAgICAgICAgICAgdmFsdWVzOiB2YWx1ZXMsXG4gICAgICAgICAgICAgICAgbmV4dFByb3BzOiBuZXh0UHJvcHMsXG4gICAgICAgICAgICAgICAgcHJvcHM6IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgaW5pdGlhbFJlbmRlcjogaW5pdGlhbFJlbmRlcixcbiAgICAgICAgICAgICAgICBsYXN0RmllbGRWYWxpZGF0b3JLZXlzOiB0aGlzLmxhc3RGaWVsZFZhbGlkYXRvcktleXMsXG4gICAgICAgICAgICAgICAgZmllbGRWYWxpZGF0b3JLZXlzOiBmaWVsZFZhbGlkYXRvcktleXMsXG4gICAgICAgICAgICAgICAgc3RydWN0dXJlOiBzdHJ1Y3R1cmVcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgaWYgKHNob3VsZFZhbGlkYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgdmFyIHByb3BzVG9WYWxpZGF0ZSA9IGluaXRpYWxSZW5kZXIgPyB0aGlzLnByb3BzIDogbmV4dFByb3BzO1xuXG4gICAgICAgICAgICAgICAgdmFyIF9tZXJnZTIgPSAoMCwgX21lcmdlNS5kZWZhdWx0KSh2YWxpZGF0ZSA/IHZhbGlkYXRlKHByb3BzVG9WYWxpZGF0ZS52YWx1ZXMsIHByb3BzVG9WYWxpZGF0ZSkgfHwge30gOiB7fSwgZmllbGRMZXZlbFZhbGlkYXRlID8gZmllbGRMZXZlbFZhbGlkYXRlKHByb3BzVG9WYWxpZGF0ZS52YWx1ZXMsIHByb3BzVG9WYWxpZGF0ZSkgfHwge30gOiB7fSksXG4gICAgICAgICAgICAgICAgICAgIF9lcnJvciA9IF9tZXJnZTIuX2Vycm9yLFxuICAgICAgICAgICAgICAgICAgICBuZXh0U3luY0Vycm9ycyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfbWVyZ2UyLCBbJ19lcnJvciddKTtcblxuICAgICAgICAgICAgICAgIHRoaXMubGFzdEZpZWxkVmFsaWRhdG9yS2V5cyA9IGZpZWxkVmFsaWRhdG9yS2V5cztcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN5bmNFcnJvcnNJZk5lZWRlZChuZXh0U3luY0Vycm9ycywgX2Vycm9yLCBwcm9wc1RvVmFsaWRhdGUuc3luY0Vycm9ycyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBrZXk6ICd1cGRhdGVTeW5jV2FybmluZ3NJZk5lZWRlZCcsXG4gICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZVN5bmNXYXJuaW5nc0lmTmVlZGVkKG5leHRTeW5jV2FybmluZ3MsIG5leHRXYXJuaW5nLCBsYXN0U3luY1dhcm5pbmdzKSB7XG4gICAgICAgICAgICB2YXIgX3Byb3BzNCA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgd2FybmluZyA9IF9wcm9wczQud2FybmluZyxcbiAgICAgICAgICAgICAgICBzeW5jV2FybmluZ3MgPSBfcHJvcHM0LnN5bmNXYXJuaW5ncyxcbiAgICAgICAgICAgICAgICB1cGRhdGVTeW5jV2FybmluZ3MgPSBfcHJvcHM0LnVwZGF0ZVN5bmNXYXJuaW5ncztcblxuICAgICAgICAgICAgdmFyIG5vV2FybmluZ3MgPSAoIXN5bmNXYXJuaW5ncyB8fCAhT2JqZWN0LmtleXMoc3luY1dhcm5pbmdzKS5sZW5ndGgpICYmICF3YXJuaW5nO1xuICAgICAgICAgICAgdmFyIG5leHROb1dhcm5pbmdzID0gKCFuZXh0U3luY1dhcm5pbmdzIHx8ICFPYmplY3Qua2V5cyhuZXh0U3luY1dhcm5pbmdzKS5sZW5ndGgpICYmICFuZXh0V2FybmluZztcbiAgICAgICAgICAgIGlmICghKG5vV2FybmluZ3MgJiYgbmV4dE5vV2FybmluZ3MpICYmICghX3BsYWluMi5kZWZhdWx0LmRlZXBFcXVhbChsYXN0U3luY1dhcm5pbmdzLCBuZXh0U3luY1dhcm5pbmdzKSB8fCAhX3BsYWluMi5kZWZhdWx0LmRlZXBFcXVhbCh3YXJuaW5nLCBuZXh0V2FybmluZykpKSB7XG4gICAgICAgICAgICAgIHVwZGF0ZVN5bmNXYXJuaW5ncyhuZXh0U3luY1dhcm5pbmdzLCBuZXh0V2FybmluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAga2V5OiAnd2FybklmTmVlZGVkJyxcbiAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gd2FybklmTmVlZGVkKG5leHRQcm9wcykge1xuICAgICAgICAgICAgdmFyIF9wcm9wczUgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIHNob3VsZFZhbGlkYXRlID0gX3Byb3BzNS5zaG91bGRWYWxpZGF0ZSxcbiAgICAgICAgICAgICAgICB3YXJuID0gX3Byb3BzNS53YXJuLFxuICAgICAgICAgICAgICAgIHZhbHVlcyA9IF9wcm9wczUudmFsdWVzO1xuXG4gICAgICAgICAgICB2YXIgZmllbGRMZXZlbFdhcm4gPSB0aGlzLmdlbmVyYXRlV2FybmVyKCk7XG4gICAgICAgICAgICBpZiAod2FybiB8fCBmaWVsZExldmVsV2Fybikge1xuICAgICAgICAgICAgICB2YXIgaW5pdGlhbFJlbmRlciA9IG5leHRQcm9wcyA9PT0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICB2YXIgZmllbGRXYXJuZXJLZXlzID0gT2JqZWN0LmtleXModGhpcy5nZXRXYXJuZXJzKCkpO1xuICAgICAgICAgICAgICB2YXIgc2hvdWxkV2FyblJlc3VsdCA9IHNob3VsZFZhbGlkYXRlKHtcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IHZhbHVlcyxcbiAgICAgICAgICAgICAgICBuZXh0UHJvcHM6IG5leHRQcm9wcyxcbiAgICAgICAgICAgICAgICBwcm9wczogdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBpbml0aWFsUmVuZGVyOiBpbml0aWFsUmVuZGVyLFxuICAgICAgICAgICAgICAgIGxhc3RGaWVsZFZhbGlkYXRvcktleXM6IHRoaXMubGFzdEZpZWxkV2FybmVyS2V5cyxcbiAgICAgICAgICAgICAgICBmaWVsZFZhbGlkYXRvcktleXM6IGZpZWxkV2FybmVyS2V5cyxcbiAgICAgICAgICAgICAgICBzdHJ1Y3R1cmU6IHN0cnVjdHVyZVxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBpZiAoc2hvdWxkV2FyblJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHZhciBwcm9wc1RvV2FybiA9IGluaXRpYWxSZW5kZXIgPyB0aGlzLnByb3BzIDogbmV4dFByb3BzO1xuXG4gICAgICAgICAgICAgICAgdmFyIF9tZXJnZTMgPSAoMCwgX21lcmdlNS5kZWZhdWx0KSh3YXJuID8gd2Fybihwcm9wc1RvV2Fybi52YWx1ZXMsIHByb3BzVG9XYXJuKSA6IHt9LCBmaWVsZExldmVsV2FybiA/IGZpZWxkTGV2ZWxXYXJuKHByb3BzVG9XYXJuLnZhbHVlcywgcHJvcHNUb1dhcm4pIDoge30pLFxuICAgICAgICAgICAgICAgICAgICBfd2FybmluZyA9IF9tZXJnZTMuX3dhcm5pbmcsXG4gICAgICAgICAgICAgICAgICAgIG5leHRTeW5jV2FybmluZ3MgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX21lcmdlMywgWydfd2FybmluZyddKTtcblxuICAgICAgICAgICAgICAgIHRoaXMubGFzdEZpZWxkV2FybmVyS2V5cyA9IGZpZWxkV2FybmVyS2V5cztcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN5bmNXYXJuaW5nc0lmTmVlZGVkKG5leHRTeW5jV2FybmluZ3MsIF93YXJuaW5nLCBwcm9wc1RvV2Fybi5zeW5jV2FybmluZ3MpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAga2V5OiAnY29tcG9uZW50V2lsbE1vdW50JyxcbiAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICAgICAgdGhpcy5pbml0SWZOZWVkZWQoKTtcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGVJZk5lZWRlZCgpO1xuICAgICAgICAgICAgdGhpcy53YXJuSWZOZWVkZWQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdElmTmVlZGVkKG5leHRQcm9wcyk7XG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRlSWZOZWVkZWQobmV4dFByb3BzKTtcbiAgICAgICAgICAgIHRoaXMud2FybklmTmVlZGVkKG5leHRQcm9wcyk7XG4gICAgICAgICAgICB0aGlzLmNsZWFyU3VibWl0UHJvbWlzZUlmTmVlZGVkKG5leHRQcm9wcyk7XG4gICAgICAgICAgICB0aGlzLnN1Ym1pdElmTmVlZGVkKG5leHRQcm9wcyk7XG4gICAgICAgICAgICBpZiAobmV4dFByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgIGlmICghZGVlcEVxdWFsKG5leHRQcm9wcy52YWx1ZXMsIHRoaXMucHJvcHMudmFsdWVzKSkge1xuICAgICAgICAgICAgICAgIG5leHRQcm9wcy5vbkNoYW5nZShuZXh0UHJvcHMudmFsdWVzLCBuZXh0UHJvcHMuZGlzcGF0Y2gsIG5leHRQcm9wcyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBrZXk6ICdzaG91bGRDb21wb25lbnRVcGRhdGUnLFxuICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgICAgaWYgKCF0aGlzLnByb3BzLnB1cmUpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKG5leHRQcm9wcykuc29tZShmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICAgICAgICAvLyB1c2VmdWwgdG8gZGVidWcgcmVyZW5kZXJzXG4gICAgICAgICAgICAgIC8vIGlmICghcGxhaW4uZGVlcEVxdWFsKHRoaXMucHJvcHNbIHByb3AgXSwgbmV4dFByb3BzWyBwcm9wIF0pKSB7XG4gICAgICAgICAgICAgIC8vICAgY29uc29sZS5pbmZvKHByb3AsICdjaGFuZ2VkJywgdGhpcy5wcm9wc1sgcHJvcCBdLCAnPT0+JywgbmV4dFByb3BzWyBwcm9wIF0pXG4gICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgcmV0dXJuICF+cHJvcHNUb05vdFVwZGF0ZUZvci5pbmRleE9mKHByb3ApICYmICFkZWVwRXF1YWwoX3RoaXMzLnByb3BzW3Byb3BdLCBuZXh0UHJvcHNbcHJvcF0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgICAgIHZhciBfcHJvcHM2ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBkZXN0cm95T25Vbm1vdW50ID0gX3Byb3BzNi5kZXN0cm95T25Vbm1vdW50LFxuICAgICAgICAgICAgICAgIGRlc3Ryb3kgPSBfcHJvcHM2LmRlc3Ryb3k7XG5cbiAgICAgICAgICAgIGlmIChkZXN0cm95T25Vbm1vdW50KSB7XG4gICAgICAgICAgICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgIGtleTogJ2dldFZhbHVlcycsXG4gICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFZhbHVlcygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLnZhbHVlcztcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBrZXk6ICdpc1ZhbGlkJyxcbiAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaXNWYWxpZCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLnZhbGlkO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgIGtleTogJ2lzUHJpc3RpbmUnLFxuICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc1ByaXN0aW5lKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMucHJpc3RpbmU7XG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAga2V5OiAncmVnaXN0ZXInLFxuICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZWdpc3RlcihuYW1lLCB0eXBlLCBnZXRWYWxpZGF0b3IsIGdldFdhcm5lcikge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5yZWdpc3RlckZpZWxkKG5hbWUsIHR5cGUpO1xuICAgICAgICAgICAgaWYgKGdldFZhbGlkYXRvcikge1xuICAgICAgICAgICAgICB0aGlzLmZpZWxkVmFsaWRhdG9yc1tuYW1lXSA9IGdldFZhbGlkYXRvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChnZXRXYXJuZXIpIHtcbiAgICAgICAgICAgICAgdGhpcy5maWVsZFdhcm5lcnNbbmFtZV0gPSBnZXRXYXJuZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAga2V5OiAndW5yZWdpc3RlcicsXG4gICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVucmVnaXN0ZXIobmFtZSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmRlc3Ryb3llZCkge1xuICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5kZXN0cm95T25Vbm1vdW50IHx8IHRoaXMucHJvcHMuZm9yY2VVbnJlZ2lzdGVyT25Vbm1vdW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51bnJlZ2lzdGVyRmllbGQobmFtZSk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuZmllbGRWYWxpZGF0b3JzW25hbWVdO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmZpZWxkV2FybmVyc1tuYW1lXTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnVucmVnaXN0ZXJGaWVsZChuYW1lLCBmYWxzZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBrZXk6ICdnZXRGaWVsZExpc3QnLFxuICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRGaWVsZExpc3Qob3B0aW9ucykge1xuICAgICAgICAgICAgdmFyIHJlZ2lzdGVyZWRGaWVsZHMgPSB0aGlzLnByb3BzLnJlZ2lzdGVyZWRGaWVsZHM7XG4gICAgICAgICAgICB2YXIgbGlzdCA9IFtdO1xuICAgICAgICAgICAgaWYgKCFyZWdpc3RlcmVkRmllbGRzKSB7XG4gICAgICAgICAgICAgIHJldHVybiBsaXN0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGtleVNlcSA9IGtleXMocmVnaXN0ZXJlZEZpZWxkcyk7XG4gICAgICAgICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmV4Y2x1ZGVGaWVsZEFycmF5KSB7XG4gICAgICAgICAgICAgIGtleVNlcSA9IGtleVNlcS5maWx0ZXIoZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0SW4ocmVnaXN0ZXJlZEZpZWxkcywgJ1tcXCcnICsgbmFtZSArICdcXCddLnR5cGUnKSAhPT0gJ0ZpZWxkQXJyYXknO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmcm9tSlMoa2V5U2VxLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBrZXkpIHtcbiAgICAgICAgICAgICAgYWNjLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICAgIH0sIGxpc3QpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBrZXk6ICdnZXRWYWxpZGF0b3JzJyxcbiAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmFsaWRhdG9ycygpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgdmFsaWRhdG9ycyA9IHt9O1xuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5maWVsZFZhbGlkYXRvcnMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgdmFyIHZhbGlkYXRvciA9IF90aGlzNC5maWVsZFZhbGlkYXRvcnNbbmFtZV0oKTtcbiAgICAgICAgICAgICAgaWYgKHZhbGlkYXRvcikge1xuICAgICAgICAgICAgICAgIHZhbGlkYXRvcnNbbmFtZV0gPSB2YWxpZGF0b3I7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRvcnM7XG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAga2V5OiAnZ2VuZXJhdGVWYWxpZGF0b3InLFxuICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZW5lcmF0ZVZhbGlkYXRvcigpIHtcbiAgICAgICAgICAgIHZhciB2YWxpZGF0b3JzID0gdGhpcy5nZXRWYWxpZGF0b3JzKCk7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModmFsaWRhdG9ycykubGVuZ3RoID8gKDAsIF9nZW5lcmF0ZVZhbGlkYXRvcjMuZGVmYXVsdCkodmFsaWRhdG9ycywgc3RydWN0dXJlKSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBrZXk6ICdnZXRXYXJuZXJzJyxcbiAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0V2FybmVycygpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgd2FybmVycyA9IHt9O1xuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5maWVsZFdhcm5lcnMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgdmFyIHdhcm5lciA9IF90aGlzNS5maWVsZFdhcm5lcnNbbmFtZV0oKTtcbiAgICAgICAgICAgICAgaWYgKHdhcm5lcikge1xuICAgICAgICAgICAgICAgIHdhcm5lcnNbbmFtZV0gPSB3YXJuZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHdhcm5lcnM7XG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAga2V5OiAnZ2VuZXJhdGVXYXJuZXInLFxuICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZW5lcmF0ZVdhcm5lcigpIHtcbiAgICAgICAgICAgIHZhciB3YXJuZXJzID0gdGhpcy5nZXRXYXJuZXJzKCk7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMod2FybmVycykubGVuZ3RoID8gKDAsIF9nZW5lcmF0ZVZhbGlkYXRvcjMuZGVmYXVsdCkod2FybmVycywgc3RydWN0dXJlKSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBrZXk6ICdhc3luY1ZhbGlkYXRlJyxcbiAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYXN5bmNWYWxpZGF0ZShuYW1lLCB2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIF90aGlzNiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBfcHJvcHM3ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBhc3luY0JsdXJGaWVsZHMgPSBfcHJvcHM3LmFzeW5jQmx1ckZpZWxkcyxcbiAgICAgICAgICAgICAgICBhc3luY0Vycm9ycyA9IF9wcm9wczcuYXN5bmNFcnJvcnMsXG4gICAgICAgICAgICAgICAgYXN5bmNWYWxpZGF0ZSA9IF9wcm9wczcuYXN5bmNWYWxpZGF0ZSxcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCA9IF9wcm9wczcuZGlzcGF0Y2gsXG4gICAgICAgICAgICAgICAgaW5pdGlhbGl6ZWQgPSBfcHJvcHM3LmluaXRpYWxpemVkLFxuICAgICAgICAgICAgICAgIHByaXN0aW5lID0gX3Byb3BzNy5wcmlzdGluZSxcbiAgICAgICAgICAgICAgICBzaG91bGRBc3luY1ZhbGlkYXRlID0gX3Byb3BzNy5zaG91bGRBc3luY1ZhbGlkYXRlLFxuICAgICAgICAgICAgICAgIHN0YXJ0QXN5bmNWYWxpZGF0aW9uID0gX3Byb3BzNy5zdGFydEFzeW5jVmFsaWRhdGlvbixcbiAgICAgICAgICAgICAgICBzdG9wQXN5bmNWYWxpZGF0aW9uID0gX3Byb3BzNy5zdG9wQXN5bmNWYWxpZGF0aW9uLFxuICAgICAgICAgICAgICAgIHN5bmNFcnJvcnMgPSBfcHJvcHM3LnN5bmNFcnJvcnMsXG4gICAgICAgICAgICAgICAgdmFsdWVzID0gX3Byb3BzNy52YWx1ZXM7XG5cbiAgICAgICAgICAgIHZhciBzdWJtaXR0aW5nID0gIW5hbWU7XG4gICAgICAgICAgICBpZiAoYXN5bmNWYWxpZGF0ZSkge1xuICAgICAgICAgICAgICB2YXIgdmFsdWVzVG9WYWxpZGF0ZSA9IHN1Ym1pdHRpbmcgPyB2YWx1ZXMgOiBzZXRJbih2YWx1ZXMsIG5hbWUsIHZhbHVlKTtcbiAgICAgICAgICAgICAgdmFyIHN5bmNWYWxpZGF0aW9uUGFzc2VzID0gc3VibWl0dGluZyB8fCAhZ2V0SW4oc3luY0Vycm9ycywgbmFtZSk7XG4gICAgICAgICAgICAgIHZhciBpc0JsdXJyZWRGaWVsZCA9ICFzdWJtaXR0aW5nICYmICghYXN5bmNCbHVyRmllbGRzIHx8IH5hc3luY0JsdXJGaWVsZHMuaW5kZXhPZihuYW1lLnJlcGxhY2UoL1xcW1swLTldK1xcXS9nLCAnW10nKSkpO1xuICAgICAgICAgICAgICBpZiAoKGlzQmx1cnJlZEZpZWxkIHx8IHN1Ym1pdHRpbmcpICYmIHNob3VsZEFzeW5jVmFsaWRhdGUoe1xuICAgICAgICAgICAgICAgIGFzeW5jRXJyb3JzOiBhc3luY0Vycm9ycyxcbiAgICAgICAgICAgICAgICBpbml0aWFsaXplZDogaW5pdGlhbGl6ZWQsXG4gICAgICAgICAgICAgICAgdHJpZ2dlcjogc3VibWl0dGluZyA/ICdzdWJtaXQnIDogJ2JsdXInLFxuICAgICAgICAgICAgICAgIGJsdXJyZWRGaWVsZDogbmFtZSxcbiAgICAgICAgICAgICAgICBwcmlzdGluZTogcHJpc3RpbmUsXG4gICAgICAgICAgICAgICAgc3luY1ZhbGlkYXRpb25QYXNzZXM6IHN5bmNWYWxpZGF0aW9uUGFzc2VzXG4gICAgICAgICAgICAgIH0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgwLCBfYXN5bmNWYWxpZGF0aW9uMi5kZWZhdWx0KShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gYXN5bmNWYWxpZGF0ZSh2YWx1ZXNUb1ZhbGlkYXRlLCBkaXNwYXRjaCwgX3RoaXM2LnByb3BzLCBuYW1lKTtcbiAgICAgICAgICAgICAgICB9LCBzdGFydEFzeW5jVmFsaWRhdGlvbiwgc3RvcEFzeW5jVmFsaWRhdGlvbiwgbmFtZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBrZXk6ICdzdWJtaXRDb21wbGV0ZWQnLFxuICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzdWJtaXRDb21wbGV0ZWQocmVzdWx0KSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zdWJtaXRQcm9taXNlO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBrZXk6ICdzdWJtaXRGYWlsZWQnLFxuICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzdWJtaXRGYWlsZWQoZXJyb3IpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnN1Ym1pdFByb21pc2U7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBrZXk6ICdsaXN0ZW5Ub1N1Ym1pdCcsXG4gICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxpc3RlblRvU3VibWl0KHByb21pc2UpIHtcbiAgICAgICAgICAgIGlmICghKDAsIF9pc1Byb21pc2UyLmRlZmF1bHQpKHByb21pc2UpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zdWJtaXRQcm9taXNlID0gcHJvbWlzZTtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnRoZW4odGhpcy5zdWJtaXRDb21wbGV0ZWQsIHRoaXMuc3VibWl0RmFpbGVkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBrZXk6ICdzdWJtaXQnLFxuICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzdWJtaXQoc3VibWl0T3JFdmVudCkge1xuICAgICAgICAgICAgdmFyIF90aGlzNyA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBfcHJvcHM4ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBvblN1Ym1pdCA9IF9wcm9wczgub25TdWJtaXQsXG4gICAgICAgICAgICAgICAgYmx1ciA9IF9wcm9wczguYmx1cixcbiAgICAgICAgICAgICAgICBjaGFuZ2UgPSBfcHJvcHM4LmNoYW5nZSxcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCA9IF9wcm9wczguZGlzcGF0Y2g7XG5cblxuICAgICAgICAgICAgaWYgKCFzdWJtaXRPckV2ZW50IHx8ICgwLCBfc2lsZW5jZUV2ZW50Mi5kZWZhdWx0KShzdWJtaXRPckV2ZW50KSkge1xuICAgICAgICAgICAgICAvLyBzdWJtaXRPckV2ZW50IGlzIGFuIGV2ZW50OiBmaXJlIHN1Ym1pdCBpZiBub3QgYWxyZWFkeSBzdWJtaXR0aW5nXG4gICAgICAgICAgICAgIGlmICghdGhpcy5zdWJtaXRQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaW5uZXJPblN1Ym1pdCkge1xuICAgICAgICAgICAgICAgICAgLy8gd2lsbCBjYWxsIFwic3VibWl0T3JFdmVudCBpcyB0aGUgc3VibWl0IGZ1bmN0aW9uXCIgYmxvY2sgYmVsb3dcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmlubmVyT25TdWJtaXQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubGlzdGVuVG9TdWJtaXQoKDAsIF9oYW5kbGVTdWJtaXQyLmRlZmF1bHQpKGNoZWNrU3VibWl0KG9uU3VibWl0KSwgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsICgwLCBfcmVkdXguYmluZEFjdGlvbkNyZWF0b3JzKSh7IGJsdXI6IGJsdXIsIGNoYW5nZTogY2hhbmdlIH0sIGRpc3BhdGNoKSksIHRoaXMucHJvcHMudmFsaWRFeGNlcHRTdWJtaXQsIHRoaXMuYXN5bmNWYWxpZGF0ZSwgdGhpcy5nZXRGaWVsZExpc3QoeyBleGNsdWRlRmllbGRBcnJheTogdHJ1ZSB9KSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gc3VibWl0T3JFdmVudCBpcyB0aGUgc3VibWl0IGZ1bmN0aW9uOiByZXR1cm4gZGVmZXJyZWQgc3VibWl0IHRodW5rXG4gICAgICAgICAgICAgIHJldHVybiAoMCwgX3NpbGVuY2VFdmVudHMyLmRlZmF1bHQpKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIV90aGlzNy5zdWJtaXRQcm9taXNlICYmIF90aGlzNy5saXN0ZW5Ub1N1Ym1pdCgoMCwgX2hhbmRsZVN1Ym1pdDIuZGVmYXVsdCkoY2hlY2tTdWJtaXQoc3VibWl0T3JFdmVudCksIF9leHRlbmRzKHt9LCBfdGhpczcucHJvcHMsICgwLCBfcmVkdXguYmluZEFjdGlvbkNyZWF0b3JzKSh7IGJsdXI6IGJsdXIsIGNoYW5nZTogY2hhbmdlIH0sIGRpc3BhdGNoKSksIF90aGlzNy5wcm9wcy52YWxpZEV4Y2VwdFN1Ym1pdCwgX3RoaXM3LmFzeW5jVmFsaWRhdGUsIF90aGlzNy5nZXRGaWVsZExpc3QoeyBleGNsdWRlRmllbGRBcnJheTogdHJ1ZSB9KSkpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBrZXk6ICdyZXNldCcsXG4gICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5yZXNldCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIC8vIHJlbW92ZSBzb21lIHJlZHV4LWZvcm0gY29uZmlnLW9ubHkgcHJvcHNcbiAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG4gICAgICAgICAgICB2YXIgX3Byb3BzOSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgYW55VG91Y2hlZCA9IF9wcm9wczkuYW55VG91Y2hlZCxcbiAgICAgICAgICAgICAgICBhcnJheUluc2VydCA9IF9wcm9wczkuYXJyYXlJbnNlcnQsXG4gICAgICAgICAgICAgICAgYXJyYXlNb3ZlID0gX3Byb3BzOS5hcnJheU1vdmUsXG4gICAgICAgICAgICAgICAgYXJyYXlQb3AgPSBfcHJvcHM5LmFycmF5UG9wLFxuICAgICAgICAgICAgICAgIGFycmF5UHVzaCA9IF9wcm9wczkuYXJyYXlQdXNoLFxuICAgICAgICAgICAgICAgIGFycmF5UmVtb3ZlID0gX3Byb3BzOS5hcnJheVJlbW92ZSxcbiAgICAgICAgICAgICAgICBhcnJheVJlbW92ZUFsbCA9IF9wcm9wczkuYXJyYXlSZW1vdmVBbGwsXG4gICAgICAgICAgICAgICAgYXJyYXlTaGlmdCA9IF9wcm9wczkuYXJyYXlTaGlmdCxcbiAgICAgICAgICAgICAgICBhcnJheVNwbGljZSA9IF9wcm9wczkuYXJyYXlTcGxpY2UsXG4gICAgICAgICAgICAgICAgYXJyYXlTd2FwID0gX3Byb3BzOS5hcnJheVN3YXAsXG4gICAgICAgICAgICAgICAgYXJyYXlVbnNoaWZ0ID0gX3Byb3BzOS5hcnJheVVuc2hpZnQsXG4gICAgICAgICAgICAgICAgYXN5bmNFcnJvcnMgPSBfcHJvcHM5LmFzeW5jRXJyb3JzLFxuICAgICAgICAgICAgICAgIGFzeW5jVmFsaWRhdGUgPSBfcHJvcHM5LmFzeW5jVmFsaWRhdGUsXG4gICAgICAgICAgICAgICAgYXN5bmNWYWxpZGF0aW5nID0gX3Byb3BzOS5hc3luY1ZhbGlkYXRpbmcsXG4gICAgICAgICAgICAgICAgYmx1ciA9IF9wcm9wczkuYmx1cixcbiAgICAgICAgICAgICAgICBjaGFuZ2UgPSBfcHJvcHM5LmNoYW5nZSxcbiAgICAgICAgICAgICAgICBkZXN0cm95ID0gX3Byb3BzOS5kZXN0cm95LFxuICAgICAgICAgICAgICAgIGRlc3Ryb3lPblVubW91bnQgPSBfcHJvcHM5LmRlc3Ryb3lPblVubW91bnQsXG4gICAgICAgICAgICAgICAgZm9yY2VVbnJlZ2lzdGVyT25Vbm1vdW50ID0gX3Byb3BzOS5mb3JjZVVucmVnaXN0ZXJPblVubW91bnQsXG4gICAgICAgICAgICAgICAgZGlydHkgPSBfcHJvcHM5LmRpcnR5LFxuICAgICAgICAgICAgICAgIGRpc3BhdGNoID0gX3Byb3BzOS5kaXNwYXRjaCxcbiAgICAgICAgICAgICAgICBlbmFibGVSZWluaXRpYWxpemUgPSBfcHJvcHM5LmVuYWJsZVJlaW5pdGlhbGl6ZSxcbiAgICAgICAgICAgICAgICBlcnJvciA9IF9wcm9wczkuZXJyb3IsXG4gICAgICAgICAgICAgICAgZm9jdXMgPSBfcHJvcHM5LmZvY3VzLFxuICAgICAgICAgICAgICAgIGZvcm0gPSBfcHJvcHM5LmZvcm0sXG4gICAgICAgICAgICAgICAgZ2V0Rm9ybVN0YXRlID0gX3Byb3BzOS5nZXRGb3JtU3RhdGUsXG4gICAgICAgICAgICAgICAgaW5pdGlhbGl6ZSA9IF9wcm9wczkuaW5pdGlhbGl6ZSxcbiAgICAgICAgICAgICAgICBpbml0aWFsaXplZCA9IF9wcm9wczkuaW5pdGlhbGl6ZWQsXG4gICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcyA9IF9wcm9wczkuaW5pdGlhbFZhbHVlcyxcbiAgICAgICAgICAgICAgICBpbnZhbGlkID0gX3Byb3BzOS5pbnZhbGlkLFxuICAgICAgICAgICAgICAgIGtlZXBEaXJ0eU9uUmVpbml0aWFsaXplID0gX3Byb3BzOS5rZWVwRGlydHlPblJlaW5pdGlhbGl6ZSxcbiAgICAgICAgICAgICAgICBwcmlzdGluZSA9IF9wcm9wczkucHJpc3RpbmUsXG4gICAgICAgICAgICAgICAgcHJvcE5hbWVzcGFjZSA9IF9wcm9wczkucHJvcE5hbWVzcGFjZSxcbiAgICAgICAgICAgICAgICByZWdpc3RlcmVkRmllbGRzID0gX3Byb3BzOS5yZWdpc3RlcmVkRmllbGRzLFxuICAgICAgICAgICAgICAgIHJlZ2lzdGVyRmllbGQgPSBfcHJvcHM5LnJlZ2lzdGVyRmllbGQsXG4gICAgICAgICAgICAgICAgcmVzZXQgPSBfcHJvcHM5LnJlc2V0LFxuICAgICAgICAgICAgICAgIHNldFN1Ym1pdEZhaWxlZCA9IF9wcm9wczkuc2V0U3VibWl0RmFpbGVkLFxuICAgICAgICAgICAgICAgIHNldFN1Ym1pdFN1Y2NlZWRlZCA9IF9wcm9wczkuc2V0U3VibWl0U3VjY2VlZGVkLFxuICAgICAgICAgICAgICAgIHNob3VsZEFzeW5jVmFsaWRhdGUgPSBfcHJvcHM5LnNob3VsZEFzeW5jVmFsaWRhdGUsXG4gICAgICAgICAgICAgICAgc2hvdWxkVmFsaWRhdGUgPSBfcHJvcHM5LnNob3VsZFZhbGlkYXRlLFxuICAgICAgICAgICAgICAgIHN0YXJ0QXN5bmNWYWxpZGF0aW9uID0gX3Byb3BzOS5zdGFydEFzeW5jVmFsaWRhdGlvbixcbiAgICAgICAgICAgICAgICBzdGFydFN1Ym1pdCA9IF9wcm9wczkuc3RhcnRTdWJtaXQsXG4gICAgICAgICAgICAgICAgc3RvcEFzeW5jVmFsaWRhdGlvbiA9IF9wcm9wczkuc3RvcEFzeW5jVmFsaWRhdGlvbixcbiAgICAgICAgICAgICAgICBzdG9wU3VibWl0ID0gX3Byb3BzOS5zdG9wU3VibWl0LFxuICAgICAgICAgICAgICAgIHN1Ym1pdHRpbmcgPSBfcHJvcHM5LnN1Ym1pdHRpbmcsXG4gICAgICAgICAgICAgICAgc3VibWl0RmFpbGVkID0gX3Byb3BzOS5zdWJtaXRGYWlsZWQsXG4gICAgICAgICAgICAgICAgc3VibWl0U3VjY2VlZGVkID0gX3Byb3BzOS5zdWJtaXRTdWNjZWVkZWQsXG4gICAgICAgICAgICAgICAgdG91Y2ggPSBfcHJvcHM5LnRvdWNoLFxuICAgICAgICAgICAgICAgIHRvdWNoT25CbHVyID0gX3Byb3BzOS50b3VjaE9uQmx1cixcbiAgICAgICAgICAgICAgICB0b3VjaE9uQ2hhbmdlID0gX3Byb3BzOS50b3VjaE9uQ2hhbmdlLFxuICAgICAgICAgICAgICAgIHBlcnNpc3RlbnRTdWJtaXRFcnJvcnMgPSBfcHJvcHM5LnBlcnNpc3RlbnRTdWJtaXRFcnJvcnMsXG4gICAgICAgICAgICAgICAgc3luY0Vycm9ycyA9IF9wcm9wczkuc3luY0Vycm9ycyxcbiAgICAgICAgICAgICAgICBzeW5jV2FybmluZ3MgPSBfcHJvcHM5LnN5bmNXYXJuaW5ncyxcbiAgICAgICAgICAgICAgICB1bnJlZ2lzdGVyRmllbGQgPSBfcHJvcHM5LnVucmVnaXN0ZXJGaWVsZCxcbiAgICAgICAgICAgICAgICB1bnRvdWNoID0gX3Byb3BzOS51bnRvdWNoLFxuICAgICAgICAgICAgICAgIHVwZGF0ZVN5bmNFcnJvcnMgPSBfcHJvcHM5LnVwZGF0ZVN5bmNFcnJvcnMsXG4gICAgICAgICAgICAgICAgdXBkYXRlU3luY1dhcm5pbmdzID0gX3Byb3BzOS51cGRhdGVTeW5jV2FybmluZ3MsXG4gICAgICAgICAgICAgICAgdmFsaWQgPSBfcHJvcHM5LnZhbGlkLFxuICAgICAgICAgICAgICAgIHZhbGlkRXhjZXB0U3VibWl0ID0gX3Byb3BzOS52YWxpZEV4Y2VwdFN1Ym1pdCxcbiAgICAgICAgICAgICAgICB2YWx1ZXMgPSBfcHJvcHM5LnZhbHVlcyxcbiAgICAgICAgICAgICAgICB3YXJuaW5nID0gX3Byb3BzOS53YXJuaW5nLFxuICAgICAgICAgICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzOSwgWydhbnlUb3VjaGVkJywgJ2FycmF5SW5zZXJ0JywgJ2FycmF5TW92ZScsICdhcnJheVBvcCcsICdhcnJheVB1c2gnLCAnYXJyYXlSZW1vdmUnLCAnYXJyYXlSZW1vdmVBbGwnLCAnYXJyYXlTaGlmdCcsICdhcnJheVNwbGljZScsICdhcnJheVN3YXAnLCAnYXJyYXlVbnNoaWZ0JywgJ2FzeW5jRXJyb3JzJywgJ2FzeW5jVmFsaWRhdGUnLCAnYXN5bmNWYWxpZGF0aW5nJywgJ2JsdXInLCAnY2hhbmdlJywgJ2Rlc3Ryb3knLCAnZGVzdHJveU9uVW5tb3VudCcsICdmb3JjZVVucmVnaXN0ZXJPblVubW91bnQnLCAnZGlydHknLCAnZGlzcGF0Y2gnLCAnZW5hYmxlUmVpbml0aWFsaXplJywgJ2Vycm9yJywgJ2ZvY3VzJywgJ2Zvcm0nLCAnZ2V0Rm9ybVN0YXRlJywgJ2luaXRpYWxpemUnLCAnaW5pdGlhbGl6ZWQnLCAnaW5pdGlhbFZhbHVlcycsICdpbnZhbGlkJywgJ2tlZXBEaXJ0eU9uUmVpbml0aWFsaXplJywgJ3ByaXN0aW5lJywgJ3Byb3BOYW1lc3BhY2UnLCAncmVnaXN0ZXJlZEZpZWxkcycsICdyZWdpc3RlckZpZWxkJywgJ3Jlc2V0JywgJ3NldFN1Ym1pdEZhaWxlZCcsICdzZXRTdWJtaXRTdWNjZWVkZWQnLCAnc2hvdWxkQXN5bmNWYWxpZGF0ZScsICdzaG91bGRWYWxpZGF0ZScsICdzdGFydEFzeW5jVmFsaWRhdGlvbicsICdzdGFydFN1Ym1pdCcsICdzdG9wQXN5bmNWYWxpZGF0aW9uJywgJ3N0b3BTdWJtaXQnLCAnc3VibWl0dGluZycsICdzdWJtaXRGYWlsZWQnLCAnc3VibWl0U3VjY2VlZGVkJywgJ3RvdWNoJywgJ3RvdWNoT25CbHVyJywgJ3RvdWNoT25DaGFuZ2UnLCAncGVyc2lzdGVudFN1Ym1pdEVycm9ycycsICdzeW5jRXJyb3JzJywgJ3N5bmNXYXJuaW5ncycsICd1bnJlZ2lzdGVyRmllbGQnLCAndW50b3VjaCcsICd1cGRhdGVTeW5jRXJyb3JzJywgJ3VwZGF0ZVN5bmNXYXJuaW5ncycsICd2YWxpZCcsICd2YWxpZEV4Y2VwdFN1Ym1pdCcsICd2YWx1ZXMnLCAnd2FybmluZyddKTtcbiAgICAgICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuXG4gICAgICAgICAgICB2YXIgcmVkdXhGb3JtUHJvcHMgPSBfZXh0ZW5kcyh7XG4gICAgICAgICAgICAgIGFueVRvdWNoZWQ6IGFueVRvdWNoZWQsXG4gICAgICAgICAgICAgIGFzeW5jVmFsaWRhdGU6IHRoaXMuYXN5bmNWYWxpZGF0ZSxcbiAgICAgICAgICAgICAgYXN5bmNWYWxpZGF0aW5nOiBhc3luY1ZhbGlkYXRpbmdcbiAgICAgICAgICAgIH0sICgwLCBfcmVkdXguYmluZEFjdGlvbkNyZWF0b3JzKSh7IGJsdXI6IGJsdXIsIGNoYW5nZTogY2hhbmdlIH0sIGRpc3BhdGNoKSwge1xuICAgICAgICAgICAgICBkZXN0cm95OiBkZXN0cm95LFxuICAgICAgICAgICAgICBkaXJ0eTogZGlydHksXG4gICAgICAgICAgICAgIGRpc3BhdGNoOiBkaXNwYXRjaCxcbiAgICAgICAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgICBmb3JtOiBmb3JtLFxuICAgICAgICAgICAgICBoYW5kbGVTdWJtaXQ6IHRoaXMuc3VibWl0LFxuICAgICAgICAgICAgICBpbml0aWFsaXplOiBpbml0aWFsaXplLFxuICAgICAgICAgICAgICBpbml0aWFsaXplZDogaW5pdGlhbGl6ZWQsXG4gICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM6IGluaXRpYWxWYWx1ZXMsXG4gICAgICAgICAgICAgIGludmFsaWQ6IGludmFsaWQsXG4gICAgICAgICAgICAgIHByaXN0aW5lOiBwcmlzdGluZSxcbiAgICAgICAgICAgICAgcmVzZXQ6IHJlc2V0LFxuICAgICAgICAgICAgICBzdWJtaXR0aW5nOiBzdWJtaXR0aW5nLFxuICAgICAgICAgICAgICBzdWJtaXRGYWlsZWQ6IHN1Ym1pdEZhaWxlZCxcbiAgICAgICAgICAgICAgc3VibWl0U3VjY2VlZGVkOiBzdWJtaXRTdWNjZWVkZWQsXG4gICAgICAgICAgICAgIHRvdWNoOiB0b3VjaCxcbiAgICAgICAgICAgICAgdW50b3VjaDogdW50b3VjaCxcbiAgICAgICAgICAgICAgdmFsaWQ6IHZhbGlkLFxuICAgICAgICAgICAgICB3YXJuaW5nOiB3YXJuaW5nXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBwcm9wc1RvUGFzcyA9IF9leHRlbmRzKHt9LCBwcm9wTmFtZXNwYWNlID8gX2RlZmluZVByb3BlcnR5KHt9LCBwcm9wTmFtZXNwYWNlLCByZWR1eEZvcm1Qcm9wcykgOiByZWR1eEZvcm1Qcm9wcywgcmVzdCk7XG4gICAgICAgICAgICBpZiAoaXNDbGFzc0NvbXBvbmVudChXcmFwcGVkQ29tcG9uZW50KSkge1xuICAgICAgICAgICAgICBwcm9wc1RvUGFzcy5yZWYgPSAnd3JhcHBlZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKDAsIF9yZWFjdC5jcmVhdGVFbGVtZW50KShXcmFwcGVkQ29tcG9uZW50LCBwcm9wc1RvUGFzcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XSk7XG5cbiAgICAgICAgcmV0dXJuIEZvcm07XG4gICAgICB9KF9yZWFjdC5Db21wb25lbnQpO1xuXG4gICAgICBGb3JtLmRpc3BsYXlOYW1lID0gJ0Zvcm0oJyArICgwLCBfZ2V0RGlzcGxheU5hbWUyLmRlZmF1bHQpKFdyYXBwZWRDb21wb25lbnQpICsgJyknO1xuICAgICAgRm9ybS5XcmFwcGVkQ29tcG9uZW50ID0gV3JhcHBlZENvbXBvbmVudDtcbiAgICAgIEZvcm0uY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gICAgICAgIF9yZWR1eEZvcm06IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWRcbiAgICAgIH07XG4gICAgICBGb3JtLnByb3BUeXBlcyA9IHtcbiAgICAgICAgZGVzdHJveU9uVW5tb3VudDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAgICAgICBmb3JjZVVucmVnaXN0ZXJPblVubW91bnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgICAgICAgZm9ybTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgaW5pdGlhbFZhbHVlczogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gICAgICAgIGdldEZvcm1TdGF0ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAgICAgICBvblN1Ym1pdEZhaWw6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgICAgICAgb25TdWJtaXRTdWNjZXNzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gICAgICAgIHByb3BOYW1lU3BhY2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAgICAgICB2YWxpZGF0ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAgICAgICB3YXJuOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gICAgICAgIHRvdWNoT25CbHVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gICAgICAgIHRvdWNoT25DaGFuZ2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgICAgICAgdHJpZ2dlclN1Ym1pdDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAgICAgICBwZXJzaXN0ZW50U3VibWl0RXJyb3JzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gICAgICAgIHJlZ2lzdGVyZWRGaWVsZHM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYW55XG4gICAgICB9O1xuXG4gICAgICB2YXIgY29ubmVjdG9yID0gKDAsIF9yZWFjdFJlZHV4LmNvbm5lY3QpKGZ1bmN0aW9uIChzdGF0ZSwgcHJvcHMpIHtcbiAgICAgICAgdmFyIGZvcm0gPSBwcm9wcy5mb3JtLFxuICAgICAgICAgICAgZ2V0Rm9ybVN0YXRlID0gcHJvcHMuZ2V0Rm9ybVN0YXRlLFxuICAgICAgICAgICAgaW5pdGlhbFZhbHVlcyA9IHByb3BzLmluaXRpYWxWYWx1ZXMsXG4gICAgICAgICAgICBlbmFibGVSZWluaXRpYWxpemUgPSBwcm9wcy5lbmFibGVSZWluaXRpYWxpemUsXG4gICAgICAgICAgICBrZWVwRGlydHlPblJlaW5pdGlhbGl6ZSA9IHByb3BzLmtlZXBEaXJ0eU9uUmVpbml0aWFsaXplO1xuXG4gICAgICAgIHZhciBmb3JtU3RhdGUgPSBnZXRJbihnZXRGb3JtU3RhdGUoc3RhdGUpIHx8IGVtcHR5LCBmb3JtKSB8fCBlbXB0eTtcbiAgICAgICAgdmFyIHN0YXRlSW5pdGlhbCA9IGdldEluKGZvcm1TdGF0ZSwgJ2luaXRpYWwnKTtcbiAgICAgICAgdmFyIGluaXRpYWxpemVkID0gISFzdGF0ZUluaXRpYWw7XG5cbiAgICAgICAgdmFyIHNob3VsZFVwZGF0ZUluaXRpYWxWYWx1ZXMgPSBlbmFibGVSZWluaXRpYWxpemUgJiYgaW5pdGlhbGl6ZWQgJiYgIWRlZXBFcXVhbChpbml0aWFsVmFsdWVzLCBzdGF0ZUluaXRpYWwpO1xuICAgICAgICB2YXIgc2hvdWxkUmVzZXRWYWx1ZXMgPSBzaG91bGRVcGRhdGVJbml0aWFsVmFsdWVzICYmICFrZWVwRGlydHlPblJlaW5pdGlhbGl6ZTtcblxuICAgICAgICB2YXIgaW5pdGlhbCA9IGluaXRpYWxWYWx1ZXMgfHwgc3RhdGVJbml0aWFsIHx8IGVtcHR5O1xuXG4gICAgICAgIGlmIChzaG91bGRVcGRhdGVJbml0aWFsVmFsdWVzKSB7XG4gICAgICAgICAgaW5pdGlhbCA9IHN0YXRlSW5pdGlhbCB8fCBlbXB0eTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB2YWx1ZXMgPSBnZXRJbihmb3JtU3RhdGUsICd2YWx1ZXMnKSB8fCBpbml0aWFsO1xuXG4gICAgICAgIGlmIChzaG91bGRSZXNldFZhbHVlcykge1xuICAgICAgICAgIHZhbHVlcyA9IGluaXRpYWw7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcHJpc3RpbmUgPSBzaG91bGRSZXNldFZhbHVlcyB8fCBkZWVwRXF1YWwoaW5pdGlhbCwgdmFsdWVzKTtcbiAgICAgICAgdmFyIGFzeW5jRXJyb3JzID0gZ2V0SW4oZm9ybVN0YXRlLCAnYXN5bmNFcnJvcnMnKTtcbiAgICAgICAgdmFyIHN5bmNFcnJvcnMgPSBnZXRJbihmb3JtU3RhdGUsICdzeW5jRXJyb3JzJykgfHwge307XG4gICAgICAgIHZhciBzeW5jV2FybmluZ3MgPSBnZXRJbihmb3JtU3RhdGUsICdzeW5jV2FybmluZ3MnKSB8fCB7fTtcbiAgICAgICAgdmFyIHJlZ2lzdGVyZWRGaWVsZHMgPSBnZXRJbihmb3JtU3RhdGUsICdyZWdpc3RlcmVkRmllbGRzJyk7XG4gICAgICAgIHZhciB2YWxpZCA9IGlzVmFsaWQoZm9ybSwgZ2V0Rm9ybVN0YXRlLCBmYWxzZSkoc3RhdGUpO1xuICAgICAgICB2YXIgdmFsaWRFeGNlcHRTdWJtaXQgPSBpc1ZhbGlkKGZvcm0sIGdldEZvcm1TdGF0ZSwgdHJ1ZSkoc3RhdGUpO1xuICAgICAgICB2YXIgYW55VG91Y2hlZCA9ICEhZ2V0SW4oZm9ybVN0YXRlLCAnYW55VG91Y2hlZCcpO1xuICAgICAgICB2YXIgc3VibWl0dGluZyA9ICEhZ2V0SW4oZm9ybVN0YXRlLCAnc3VibWl0dGluZycpO1xuICAgICAgICB2YXIgc3VibWl0RmFpbGVkID0gISFnZXRJbihmb3JtU3RhdGUsICdzdWJtaXRGYWlsZWQnKTtcbiAgICAgICAgdmFyIHN1Ym1pdFN1Y2NlZWRlZCA9ICEhZ2V0SW4oZm9ybVN0YXRlLCAnc3VibWl0U3VjY2VlZGVkJyk7XG4gICAgICAgIHZhciBlcnJvciA9IGdldEluKGZvcm1TdGF0ZSwgJ2Vycm9yJyk7XG4gICAgICAgIHZhciB3YXJuaW5nID0gZ2V0SW4oZm9ybVN0YXRlLCAnd2FybmluZycpO1xuICAgICAgICB2YXIgdHJpZ2dlclN1Ym1pdCA9IGdldEluKGZvcm1TdGF0ZSwgJ3RyaWdnZXJTdWJtaXQnKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBhbnlUb3VjaGVkOiBhbnlUb3VjaGVkLFxuICAgICAgICAgIGFzeW5jRXJyb3JzOiBhc3luY0Vycm9ycyxcbiAgICAgICAgICBhc3luY1ZhbGlkYXRpbmc6IGdldEluKGZvcm1TdGF0ZSwgJ2FzeW5jVmFsaWRhdGluZycpIHx8IGZhbHNlLFxuICAgICAgICAgIGRpcnR5OiAhcHJpc3RpbmUsXG4gICAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgICAgIGluaXRpYWxpemVkOiBpbml0aWFsaXplZCxcbiAgICAgICAgICBpbnZhbGlkOiAhdmFsaWQsXG4gICAgICAgICAgcHJpc3RpbmU6IHByaXN0aW5lLFxuICAgICAgICAgIHJlZ2lzdGVyZWRGaWVsZHM6IHJlZ2lzdGVyZWRGaWVsZHMsXG4gICAgICAgICAgc3VibWl0dGluZzogc3VibWl0dGluZyxcbiAgICAgICAgICBzdWJtaXRGYWlsZWQ6IHN1Ym1pdEZhaWxlZCxcbiAgICAgICAgICBzdWJtaXRTdWNjZWVkZWQ6IHN1Ym1pdFN1Y2NlZWRlZCxcbiAgICAgICAgICBzeW5jRXJyb3JzOiBzeW5jRXJyb3JzLFxuICAgICAgICAgIHN5bmNXYXJuaW5nczogc3luY1dhcm5pbmdzLFxuICAgICAgICAgIHRyaWdnZXJTdWJtaXQ6IHRyaWdnZXJTdWJtaXQsXG4gICAgICAgICAgdmFsdWVzOiB2YWx1ZXMsXG4gICAgICAgICAgdmFsaWQ6IHZhbGlkLFxuICAgICAgICAgIHZhbGlkRXhjZXB0U3VibWl0OiB2YWxpZEV4Y2VwdFN1Ym1pdCxcbiAgICAgICAgICB3YXJuaW5nOiB3YXJuaW5nXG4gICAgICAgIH07XG4gICAgICB9LCBmdW5jdGlvbiAoZGlzcGF0Y2gsIGluaXRpYWxQcm9wcykge1xuICAgICAgICB2YXIgYmluZEZvcm0gPSBmdW5jdGlvbiBiaW5kRm9ybShhY3Rpb25DcmVhdG9yKSB7XG4gICAgICAgICAgcmV0dXJuIGFjdGlvbkNyZWF0b3IuYmluZChudWxsLCBpbml0aWFsUHJvcHMuZm9ybSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gQmluZCB0aGUgZmlyc3QgcGFyYW1ldGVyIG9uIGBwcm9wcy5mb3JtYFxuICAgICAgICB2YXIgYm91bmRGb3JtQUNzID0gKDAsIF9tYXBWYWx1ZXMzLmRlZmF1bHQpKGZvcm1BY3Rpb25zLCBiaW5kRm9ybSk7XG4gICAgICAgIHZhciBib3VuZEFycmF5QUNzID0gKDAsIF9tYXBWYWx1ZXMzLmRlZmF1bHQpKGFycmF5QWN0aW9ucywgYmluZEZvcm0pO1xuICAgICAgICB2YXIgYm91bmRCbHVyID0gZnVuY3Rpb24gYm91bmRCbHVyKGZpZWxkLCB2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiBibHVyKGluaXRpYWxQcm9wcy5mb3JtLCBmaWVsZCwgdmFsdWUsICEhaW5pdGlhbFByb3BzLnRvdWNoT25CbHVyKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGJvdW5kQ2hhbmdlID0gZnVuY3Rpb24gYm91bmRDaGFuZ2UoZmllbGQsIHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIGNoYW5nZShpbml0aWFsUHJvcHMuZm9ybSwgZmllbGQsIHZhbHVlLCAhIWluaXRpYWxQcm9wcy50b3VjaE9uQ2hhbmdlLCAhIWluaXRpYWxQcm9wcy5wZXJzaXN0ZW50U3VibWl0RXJyb3JzKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGJvdW5kRm9jdXMgPSBiaW5kRm9ybShmb2N1cyk7XG5cbiAgICAgICAgLy8gV3JhcCBhY3Rpb24gY3JlYXRvcnMgd2l0aCBgZGlzcGF0Y2hgXG4gICAgICAgIHZhciBjb25uZWN0ZWRGb3JtQUNzID0gKDAsIF9yZWR1eC5iaW5kQWN0aW9uQ3JlYXRvcnMpKGJvdW5kRm9ybUFDcywgZGlzcGF0Y2gpO1xuICAgICAgICB2YXIgY29ubmVjdGVkQXJyYXlBQ3MgPSB7XG4gICAgICAgICAgaW5zZXJ0OiAoMCwgX3JlZHV4LmJpbmRBY3Rpb25DcmVhdG9ycykoYm91bmRBcnJheUFDcy5hcnJheUluc2VydCwgZGlzcGF0Y2gpLFxuICAgICAgICAgIG1vdmU6ICgwLCBfcmVkdXguYmluZEFjdGlvbkNyZWF0b3JzKShib3VuZEFycmF5QUNzLmFycmF5TW92ZSwgZGlzcGF0Y2gpLFxuICAgICAgICAgIHBvcDogKDAsIF9yZWR1eC5iaW5kQWN0aW9uQ3JlYXRvcnMpKGJvdW5kQXJyYXlBQ3MuYXJyYXlQb3AsIGRpc3BhdGNoKSxcbiAgICAgICAgICBwdXNoOiAoMCwgX3JlZHV4LmJpbmRBY3Rpb25DcmVhdG9ycykoYm91bmRBcnJheUFDcy5hcnJheVB1c2gsIGRpc3BhdGNoKSxcbiAgICAgICAgICByZW1vdmU6ICgwLCBfcmVkdXguYmluZEFjdGlvbkNyZWF0b3JzKShib3VuZEFycmF5QUNzLmFycmF5UmVtb3ZlLCBkaXNwYXRjaCksXG4gICAgICAgICAgcmVtb3ZlQWxsOiAoMCwgX3JlZHV4LmJpbmRBY3Rpb25DcmVhdG9ycykoYm91bmRBcnJheUFDcy5hcnJheVJlbW92ZUFsbCwgZGlzcGF0Y2gpLFxuICAgICAgICAgIHNoaWZ0OiAoMCwgX3JlZHV4LmJpbmRBY3Rpb25DcmVhdG9ycykoYm91bmRBcnJheUFDcy5hcnJheVNoaWZ0LCBkaXNwYXRjaCksXG4gICAgICAgICAgc3BsaWNlOiAoMCwgX3JlZHV4LmJpbmRBY3Rpb25DcmVhdG9ycykoYm91bmRBcnJheUFDcy5hcnJheVNwbGljZSwgZGlzcGF0Y2gpLFxuICAgICAgICAgIHN3YXA6ICgwLCBfcmVkdXguYmluZEFjdGlvbkNyZWF0b3JzKShib3VuZEFycmF5QUNzLmFycmF5U3dhcCwgZGlzcGF0Y2gpLFxuICAgICAgICAgIHVuc2hpZnQ6ICgwLCBfcmVkdXguYmluZEFjdGlvbkNyZWF0b3JzKShib3VuZEFycmF5QUNzLmFycmF5VW5zaGlmdCwgZGlzcGF0Y2gpXG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGNvbXB1dGVkQWN0aW9ucyA9IF9leHRlbmRzKHt9LCBjb25uZWN0ZWRGb3JtQUNzLCBib3VuZEFycmF5QUNzLCB7XG4gICAgICAgICAgYmx1cjogYm91bmRCbHVyLFxuICAgICAgICAgIGNoYW5nZTogYm91bmRDaGFuZ2UsXG4gICAgICAgICAgYXJyYXk6IGNvbm5lY3RlZEFycmF5QUNzLFxuICAgICAgICAgIGZvY3VzOiBib3VuZEZvY3VzLFxuICAgICAgICAgIGRpc3BhdGNoOiBkaXNwYXRjaFxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb21wdXRlZEFjdGlvbnM7XG4gICAgICAgIH07XG4gICAgICB9LCB1bmRlZmluZWQsIHsgd2l0aFJlZjogdHJ1ZSB9KTtcbiAgICAgIHZhciBDb25uZWN0ZWRGb3JtID0gKDAsIF9ob2lzdE5vblJlYWN0U3RhdGljczIuZGVmYXVsdCkoY29ubmVjdG9yKEZvcm0pLCBXcmFwcGVkQ29tcG9uZW50KTtcbiAgICAgIENvbm5lY3RlZEZvcm0uZGVmYXVsdFByb3BzID0gY29uZmlnO1xuXG4gICAgICAvLyBidWlsZCBvdXRlciBjb21wb25lbnQgdG8gZXhwb3NlIGluc3RhbmNlIGFwaVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChfQ29tcG9uZW50Mikge1xuICAgICAgICBfaW5oZXJpdHMoUmVkdXhGb3JtLCBfQ29tcG9uZW50Mik7XG5cbiAgICAgICAgZnVuY3Rpb24gUmVkdXhGb3JtKCkge1xuICAgICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSZWR1eEZvcm0pO1xuXG4gICAgICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChSZWR1eEZvcm0uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihSZWR1eEZvcm0pKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9jcmVhdGVDbGFzcyhSZWR1eEZvcm0sIFt7XG4gICAgICAgICAga2V5OiAnc3VibWl0JyxcbiAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc3VibWl0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVmcy53cmFwcGVkLmdldFdyYXBwZWRJbnN0YW5jZSgpLnN1Ym1pdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgIGtleTogJ3Jlc2V0JyxcbiAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWZzLndyYXBwZWQuZ2V0V3JhcHBlZEluc3RhbmNlKCkucmVzZXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICB2YXIgX3Byb3BzMTAgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXMgPSBfcHJvcHMxMC5pbml0aWFsVmFsdWVzLFxuICAgICAgICAgICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzMTAsIFsnaW5pdGlhbFZhbHVlcyddKTtcblxuICAgICAgICAgICAgcmV0dXJuICgwLCBfcmVhY3QuY3JlYXRlRWxlbWVudCkoQ29ubmVjdGVkRm9ybSwgX2V4dGVuZHMoe30sIHJlc3QsIHtcbiAgICAgICAgICAgICAgcmVmOiAnd3JhcHBlZCcsXG4gICAgICAgICAgICAgIC8vIGNvbnZlcnQgaW5pdGlhbFZhbHVlcyBpZiBuZWVkIHRvXG4gICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM6IGZyb21KUyhpbml0aWFsVmFsdWVzKVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgIGtleTogJ3ZhbGlkJyxcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlZnMud3JhcHBlZC5nZXRXcmFwcGVkSW5zdGFuY2UoKS5pc1ZhbGlkKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAga2V5OiAnaW52YWxpZCcsXG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gIXRoaXMudmFsaWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAga2V5OiAncHJpc3RpbmUnLFxuICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVmcy53cmFwcGVkLmdldFdyYXBwZWRJbnN0YW5jZSgpLmlzUHJpc3RpbmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBrZXk6ICdkaXJ0eScsXG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gIXRoaXMucHJpc3RpbmU7XG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAga2V5OiAndmFsdWVzJyxcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlZnMud3JhcHBlZC5nZXRXcmFwcGVkSW5zdGFuY2UoKS5nZXRWYWx1ZXMoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBrZXk6ICdmaWVsZExpc3QnLFxuICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgLy8gbWFpbmx5IHByb3ZpZGVkIGZvciB0ZXN0aW5nXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWZzLndyYXBwZWQuZ2V0V3JhcHBlZEluc3RhbmNlKCkuZ2V0RmllbGRMaXN0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAga2V5OiAnd3JhcHBlZEluc3RhbmNlJyxcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIC8vIGZvciB0ZXN0aW5lXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWZzLndyYXBwZWQuZ2V0V3JhcHBlZEluc3RhbmNlKCkucmVmcy53cmFwcGVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfV0pO1xuXG4gICAgICAgIHJldHVybiBSZWR1eEZvcm07XG4gICAgICB9KF9yZWFjdC5Db21wb25lbnQpO1xuICAgIH07XG4gIH07XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVSZWR1eEZvcm07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4LWZvcm0vbGliL2NyZWF0ZVJlZHV4Rm9ybS5qc1xuLy8gbW9kdWxlIGlkID0gMjAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdFJlZHV4ID0gcmVxdWlyZSgncmVhY3QtcmVkdXgnKTtcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIGNyZWF0ZVZhbHVlcyA9IGZ1bmN0aW9uIGNyZWF0ZVZhbHVlcyhfcmVmKSB7XG4gIHZhciBnZXRJbiA9IF9yZWYuZ2V0SW47XG4gIHJldHVybiBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgdmFyIF9wcm9wJGdldEZvcm1TdGF0ZSRjbyA9IF9leHRlbmRzKHtcbiAgICAgIHByb3A6ICd2YWx1ZXMnLFxuICAgICAgZ2V0Rm9ybVN0YXRlOiBmdW5jdGlvbiBnZXRGb3JtU3RhdGUoc3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIGdldEluKHN0YXRlLCAnZm9ybScpO1xuICAgICAgfVxuICAgIH0sIGNvbmZpZyksXG4gICAgICAgIGZvcm0gPSBfcHJvcCRnZXRGb3JtU3RhdGUkY28uZm9ybSxcbiAgICAgICAgcHJvcCA9IF9wcm9wJGdldEZvcm1TdGF0ZSRjby5wcm9wLFxuICAgICAgICBnZXRGb3JtU3RhdGUgPSBfcHJvcCRnZXRGb3JtU3RhdGUkY28uZ2V0Rm9ybVN0YXRlO1xuXG4gICAgcmV0dXJuICgwLCBfcmVhY3RSZWR1eC5jb25uZWN0KShmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgIHJldHVybiBfZGVmaW5lUHJvcGVydHkoe30sIHByb3AsIGdldEluKGdldEZvcm1TdGF0ZShzdGF0ZSksIGZvcm0gKyAnLnZhbHVlcycpKTtcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfSAvLyBpZ25vcmUgZGlzcGF0Y2hcbiAgICApO1xuICB9O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlVmFsdWVzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC1mb3JtL2xpYi9jcmVhdGVWYWx1ZXMuanNcbi8vIG1vZHVsZSBpZCA9IDIwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdG9QYXRoMiA9IHJlcXVpcmUoJ2xvZGFzaC90b1BhdGgnKTtcblxudmFyIF90b1BhdGgzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdG9QYXRoMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBjcmVhdGVEZWxldGVJbldpdGhDbGVhblVwID0gZnVuY3Rpb24gY3JlYXRlRGVsZXRlSW5XaXRoQ2xlYW5VcChfcmVmKSB7XG4gIHZhciBkZWVwRXF1YWwgPSBfcmVmLmRlZXBFcXVhbCxcbiAgICAgIGVtcHR5ID0gX3JlZi5lbXB0eSxcbiAgICAgIGdldEluID0gX3JlZi5nZXRJbixcbiAgICAgIGRlbGV0ZUluID0gX3JlZi5kZWxldGVJbixcbiAgICAgIHNldEluID0gX3JlZi5zZXRJbjtcblxuICB2YXIgZGVsZXRlSW5XaXRoQ2xlYW5VcCA9IGZ1bmN0aW9uIGRlbGV0ZUluV2l0aENsZWFuVXAoc3RhdGUsIHBhdGgpIHtcbiAgICBpZiAocGF0aFtwYXRoLmxlbmd0aCAtIDFdID09PSAnXScpIHtcbiAgICAgIC8vIGFycmF5IHBhdGhcbiAgICAgIHZhciBwYXRoVG9rZW5zID0gKDAsIF90b1BhdGgzLmRlZmF1bHQpKHBhdGgpO1xuICAgICAgcGF0aFRva2Vucy5wb3AoKTtcbiAgICAgIHZhciBwYXJlbnQgPSBnZXRJbihzdGF0ZSwgcGF0aFRva2Vucy5qb2luKCcuJykpO1xuICAgICAgcmV0dXJuIHBhcmVudCA/IHNldEluKHN0YXRlLCBwYXRoLCB1bmRlZmluZWQpIDogc3RhdGU7XG4gICAgfVxuXG4gICAgdmFyIHJlc3VsdCA9IHN0YXRlO1xuICAgIGlmIChnZXRJbihzdGF0ZSwgcGF0aCkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVzdWx0ID0gZGVsZXRlSW4oc3RhdGUsIHBhdGgpO1xuICAgIH1cblxuICAgIHZhciBkb3RJbmRleCA9IHBhdGgubGFzdEluZGV4T2YoJy4nKTtcbiAgICBpZiAoZG90SW5kZXggPiAwKSB7XG4gICAgICB2YXIgcGFyZW50UGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIGRvdEluZGV4KTtcbiAgICAgIGlmIChwYXJlbnRQYXRoW3BhcmVudFBhdGgubGVuZ3RoIC0gMV0gIT09ICddJykge1xuICAgICAgICB2YXIgX3BhcmVudCA9IGdldEluKHJlc3VsdCwgcGFyZW50UGF0aCk7XG4gICAgICAgIGlmIChkZWVwRXF1YWwoX3BhcmVudCwgZW1wdHkpKSB7XG4gICAgICAgICAgcmV0dXJuIGRlbGV0ZUluV2l0aENsZWFuVXAocmVzdWx0LCBwYXJlbnRQYXRoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIHJldHVybiBkZWxldGVJbldpdGhDbGVhblVwO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlRGVsZXRlSW5XaXRoQ2xlYW5VcDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtZm9ybS9saWIvZGVsZXRlSW5XaXRoQ2xlYW5VcC5qc1xuLy8gbW9kdWxlIGlkID0gMjA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9pc0V2ZW50ID0gcmVxdWlyZSgnLi9pc0V2ZW50Jyk7XG5cbnZhciBfaXNFdmVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc0V2ZW50KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGdldFNlbGVjdGVkVmFsdWVzID0gZnVuY3Rpb24gZ2V0U2VsZWN0ZWRWYWx1ZXMob3B0aW9ucykge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIGlmIChvcHRpb25zKSB7XG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IG9wdGlvbnMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB2YXIgb3B0aW9uID0gb3B0aW9uc1tpbmRleF07XG4gICAgICBpZiAob3B0aW9uLnNlbGVjdGVkKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKG9wdGlvbi52YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG52YXIgZ2V0VmFsdWUgPSBmdW5jdGlvbiBnZXRWYWx1ZShldmVudCwgaXNSZWFjdE5hdGl2ZSkge1xuICBpZiAoKDAsIF9pc0V2ZW50Mi5kZWZhdWx0KShldmVudCkpIHtcbiAgICBpZiAoIWlzUmVhY3ROYXRpdmUgJiYgZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQudGV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZXZlbnQubmF0aXZlRXZlbnQudGV4dDtcbiAgICB9XG4gICAgaWYgKGlzUmVhY3ROYXRpdmUgJiYgZXZlbnQubmF0aXZlRXZlbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGV2ZW50Lm5hdGl2ZUV2ZW50LnRleHQ7XG4gICAgfVxuICAgIHZhciBfZXZlbnQkdGFyZ2V0ID0gZXZlbnQudGFyZ2V0LFxuICAgICAgICB0eXBlID0gX2V2ZW50JHRhcmdldC50eXBlLFxuICAgICAgICB2YWx1ZSA9IF9ldmVudCR0YXJnZXQudmFsdWUsXG4gICAgICAgIGNoZWNrZWQgPSBfZXZlbnQkdGFyZ2V0LmNoZWNrZWQsXG4gICAgICAgIGZpbGVzID0gX2V2ZW50JHRhcmdldC5maWxlcyxcbiAgICAgICAgZGF0YVRyYW5zZmVyID0gZXZlbnQuZGF0YVRyYW5zZmVyO1xuXG4gICAgaWYgKHR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgIHJldHVybiBjaGVja2VkIHx8ICcnO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ2ZpbGUnKSB7XG4gICAgICByZXR1cm4gZmlsZXMgfHwgZGF0YVRyYW5zZmVyICYmIGRhdGFUcmFuc2Zlci5maWxlcztcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdzZWxlY3QtbXVsdGlwbGUnKSB7XG4gICAgICByZXR1cm4gZ2V0U2VsZWN0ZWRWYWx1ZXMoZXZlbnQudGFyZ2V0Lm9wdGlvbnMpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIGV2ZW50O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZ2V0VmFsdWU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4LWZvcm0vbGliL2V2ZW50cy9nZXRWYWx1ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9zaWxlbmNlRXZlbnQgPSByZXF1aXJlKCcuL3NpbGVuY2VFdmVudCcpO1xuXG52YXIgX3NpbGVuY2VFdmVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaWxlbmNlRXZlbnQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgc2lsZW5jZUV2ZW50cyA9IGZ1bmN0aW9uIHNpbGVuY2VFdmVudHMoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuICgwLCBfc2lsZW5jZUV2ZW50Mi5kZWZhdWx0KShldmVudCkgPyBmbi5hcHBseSh1bmRlZmluZWQsIGFyZ3MpIDogZm4uYXBwbHkodW5kZWZpbmVkLCBbZXZlbnRdLmNvbmNhdChhcmdzKSk7XG4gIH07XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBzaWxlbmNlRXZlbnRzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC1mb3JtL2xpYi9ldmVudHMvc2lsZW5jZUV2ZW50cy5qc1xuLy8gbW9kdWxlIGlkID0gMjA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVGb3JtVmFsdWVTZWxlY3RvciA9IHJlcXVpcmUoJy4vY3JlYXRlRm9ybVZhbHVlU2VsZWN0b3InKTtcblxudmFyIF9jcmVhdGVGb3JtVmFsdWVTZWxlY3RvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVGb3JtVmFsdWVTZWxlY3Rvcik7XG5cbnZhciBfcGxhaW4gPSByZXF1aXJlKCcuL3N0cnVjdHVyZS9wbGFpbicpO1xuXG52YXIgX3BsYWluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BsYWluKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gKDAsIF9jcmVhdGVGb3JtVmFsdWVTZWxlY3RvcjIuZGVmYXVsdCkoX3BsYWluMi5kZWZhdWx0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtZm9ybS9saWIvZm9ybVZhbHVlU2VsZWN0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDIwOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfcGxhaW4gPSByZXF1aXJlKCcuL3N0cnVjdHVyZS9wbGFpbicpO1xuXG52YXIgX3BsYWluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BsYWluKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHRvQXJyYXkgPSBmdW5jdGlvbiB0b0FycmF5KHZhbHVlKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlXTtcbn07XG5cbnZhciBnZXRFcnJvciA9IGZ1bmN0aW9uIGdldEVycm9yKHZhbHVlLCB2YWx1ZXMsIHByb3BzLCB2YWxpZGF0b3JzKSB7XG4gIHZhciBhcnJheSA9IHRvQXJyYXkodmFsaWRhdG9ycyk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZXJyb3IgPSBhcnJheVtpXSh2YWx1ZSwgdmFsdWVzLCBwcm9wcyk7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICByZXR1cm4gZXJyb3I7XG4gICAgfVxuICB9XG59O1xuXG52YXIgZ2VuZXJhdGVWYWxpZGF0b3IgPSBmdW5jdGlvbiBnZW5lcmF0ZVZhbGlkYXRvcih2YWxpZGF0b3JzLCBfcmVmKSB7XG4gIHZhciBnZXRJbiA9IF9yZWYuZ2V0SW47XG4gIHJldHVybiBmdW5jdGlvbiAodmFsdWVzLCBwcm9wcykge1xuICAgIHZhciBlcnJvcnMgPSB7fTtcbiAgICBPYmplY3Qua2V5cyh2YWxpZGF0b3JzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICB2YXIgdmFsdWUgPSBnZXRJbih2YWx1ZXMsIG5hbWUpO1xuICAgICAgdmFyIGVycm9yID0gZ2V0RXJyb3IodmFsdWUsIHZhbHVlcywgcHJvcHMsIHZhbGlkYXRvcnNbbmFtZV0pO1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGVycm9ycyA9IF9wbGFpbjIuZGVmYXVsdC5zZXRJbihlcnJvcnMsIG5hbWUsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZXJyb3JzO1xuICB9O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZ2VuZXJhdGVWYWxpZGF0b3I7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4LWZvcm0vbGliL2dlbmVyYXRlVmFsaWRhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAyMDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2dldEZvcm1Bc3luY0Vycm9ycyA9IHJlcXVpcmUoJy4vc2VsZWN0b3JzL2dldEZvcm1Bc3luY0Vycm9ycycpO1xuXG52YXIgX2dldEZvcm1Bc3luY0Vycm9yczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRGb3JtQXN5bmNFcnJvcnMpO1xuXG52YXIgX3BsYWluID0gcmVxdWlyZSgnLi9zdHJ1Y3R1cmUvcGxhaW4nKTtcblxudmFyIF9wbGFpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wbGFpbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9ICgwLCBfZ2V0Rm9ybUFzeW5jRXJyb3JzMi5kZWZhdWx0KShfcGxhaW4yLmRlZmF1bHQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC1mb3JtL2xpYi9nZXRGb3JtQXN5bmNFcnJvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDIxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZ2V0Rm9ybUluaXRpYWxWYWx1ZXMgPSByZXF1aXJlKCcuL3NlbGVjdG9ycy9nZXRGb3JtSW5pdGlhbFZhbHVlcycpO1xuXG52YXIgX2dldEZvcm1Jbml0aWFsVmFsdWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldEZvcm1Jbml0aWFsVmFsdWVzKTtcblxudmFyIF9wbGFpbiA9IHJlcXVpcmUoJy4vc3RydWN0dXJlL3BsYWluJyk7XG5cbnZhciBfcGxhaW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGxhaW4pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSAoMCwgX2dldEZvcm1Jbml0aWFsVmFsdWVzMi5kZWZhdWx0KShfcGxhaW4yLmRlZmF1bHQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC1mb3JtL2xpYi9nZXRGb3JtSW5pdGlhbFZhbHVlcy5qc1xuLy8gbW9kdWxlIGlkID0gMjExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9nZXRGb3JtTWV0YSA9IHJlcXVpcmUoJy4vc2VsZWN0b3JzL2dldEZvcm1NZXRhJyk7XG5cbnZhciBfZ2V0Rm9ybU1ldGEyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0Rm9ybU1ldGEpO1xuXG52YXIgX3BsYWluID0gcmVxdWlyZSgnLi9zdHJ1Y3R1cmUvcGxhaW4nKTtcblxudmFyIF9wbGFpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wbGFpbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9ICgwLCBfZ2V0Rm9ybU1ldGEyLmRlZmF1bHQpKF9wbGFpbjIuZGVmYXVsdCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4LWZvcm0vbGliL2dldEZvcm1NZXRhLmpzXG4vLyBtb2R1bGUgaWQgPSAyMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2dldEZvcm1OYW1lcyA9IHJlcXVpcmUoJy4vc2VsZWN0b3JzL2dldEZvcm1OYW1lcycpO1xuXG52YXIgX2dldEZvcm1OYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRGb3JtTmFtZXMpO1xuXG52YXIgX3BsYWluID0gcmVxdWlyZSgnLi9zdHJ1Y3R1cmUvcGxhaW4nKTtcblxudmFyIF9wbGFpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wbGFpbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9ICgwLCBfZ2V0Rm9ybU5hbWVzMi5kZWZhdWx0KShfcGxhaW4yLmRlZmF1bHQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC1mb3JtL2xpYi9nZXRGb3JtTmFtZXMuanNcbi8vIG1vZHVsZSBpZCA9IDIxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZ2V0Rm9ybVN1Ym1pdEVycm9ycyA9IHJlcXVpcmUoJy4vc2VsZWN0b3JzL2dldEZvcm1TdWJtaXRFcnJvcnMnKTtcblxudmFyIF9nZXRGb3JtU3VibWl0RXJyb3JzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldEZvcm1TdWJtaXRFcnJvcnMpO1xuXG52YXIgX3BsYWluID0gcmVxdWlyZSgnLi9zdHJ1Y3R1cmUvcGxhaW4nKTtcblxudmFyIF9wbGFpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wbGFpbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9ICgwLCBfZ2V0Rm9ybVN1Ym1pdEVycm9yczIuZGVmYXVsdCkoX3BsYWluMi5kZWZhdWx0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtZm9ybS9saWIvZ2V0Rm9ybVN1Ym1pdEVycm9ycy5qc1xuLy8gbW9kdWxlIGlkID0gMjE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9nZXRGb3JtU3luY0Vycm9ycyA9IHJlcXVpcmUoJy4vc2VsZWN0b3JzL2dldEZvcm1TeW5jRXJyb3JzJyk7XG5cbnZhciBfZ2V0Rm9ybVN5bmNFcnJvcnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0Rm9ybVN5bmNFcnJvcnMpO1xuXG52YXIgX3BsYWluID0gcmVxdWlyZSgnLi9zdHJ1Y3R1cmUvcGxhaW4nKTtcblxudmFyIF9wbGFpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wbGFpbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9ICgwLCBfZ2V0Rm9ybVN5bmNFcnJvcnMyLmRlZmF1bHQpKF9wbGFpbjIuZGVmYXVsdCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4LWZvcm0vbGliL2dldEZvcm1TeW5jRXJyb3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2dldEZvcm1TeW5jV2FybmluZ3MgPSByZXF1aXJlKCcuL3NlbGVjdG9ycy9nZXRGb3JtU3luY1dhcm5pbmdzJyk7XG5cbnZhciBfZ2V0Rm9ybVN5bmNXYXJuaW5nczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRGb3JtU3luY1dhcm5pbmdzKTtcblxudmFyIF9wbGFpbiA9IHJlcXVpcmUoJy4vc3RydWN0dXJlL3BsYWluJyk7XG5cbnZhciBfcGxhaW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGxhaW4pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSAoMCwgX2dldEZvcm1TeW5jV2FybmluZ3MyLmRlZmF1bHQpKF9wbGFpbjIuZGVmYXVsdCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4LWZvcm0vbGliL2dldEZvcm1TeW5jV2FybmluZ3MuanNcbi8vIG1vZHVsZSBpZCA9IDIxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZ2V0Rm9ybVZhbHVlcyA9IHJlcXVpcmUoJy4vc2VsZWN0b3JzL2dldEZvcm1WYWx1ZXMnKTtcblxudmFyIF9nZXRGb3JtVmFsdWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldEZvcm1WYWx1ZXMpO1xuXG52YXIgX3BsYWluID0gcmVxdWlyZSgnLi9zdHJ1Y3R1cmUvcGxhaW4nKTtcblxudmFyIF9wbGFpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wbGFpbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9ICgwLCBfZ2V0Rm9ybVZhbHVlczIuZGVmYXVsdCkoX3BsYWluMi5kZWZhdWx0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtZm9ybS9saWIvZ2V0Rm9ybVZhbHVlcy5qc1xuLy8gbW9kdWxlIGlkID0gMjE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9pc1Byb21pc2UgPSByZXF1aXJlKCdpcy1wcm9taXNlJyk7XG5cbnZhciBfaXNQcm9taXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzUHJvbWlzZSk7XG5cbnZhciBfU3VibWlzc2lvbkVycm9yID0gcmVxdWlyZSgnLi9TdWJtaXNzaW9uRXJyb3InKTtcblxudmFyIF9TdWJtaXNzaW9uRXJyb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU3VibWlzc2lvbkVycm9yKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSBlbHNlIHsgcmV0dXJuIEFycmF5LmZyb20oYXJyKTsgfSB9XG5cbnZhciBoYW5kbGVTdWJtaXQgPSBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoc3VibWl0LCBwcm9wcywgdmFsaWQsIGFzeW5jVmFsaWRhdGUsIGZpZWxkcykge1xuICB2YXIgZGlzcGF0Y2ggPSBwcm9wcy5kaXNwYXRjaCxcbiAgICAgIG9uU3VibWl0RmFpbCA9IHByb3BzLm9uU3VibWl0RmFpbCxcbiAgICAgIG9uU3VibWl0U3VjY2VzcyA9IHByb3BzLm9uU3VibWl0U3VjY2VzcyxcbiAgICAgIHN0YXJ0U3VibWl0ID0gcHJvcHMuc3RhcnRTdWJtaXQsXG4gICAgICBzdG9wU3VibWl0ID0gcHJvcHMuc3RvcFN1Ym1pdCxcbiAgICAgIHNldFN1Ym1pdEZhaWxlZCA9IHByb3BzLnNldFN1Ym1pdEZhaWxlZCxcbiAgICAgIHNldFN1Ym1pdFN1Y2NlZWRlZCA9IHByb3BzLnNldFN1Ym1pdFN1Y2NlZWRlZCxcbiAgICAgIHN5bmNFcnJvcnMgPSBwcm9wcy5zeW5jRXJyb3JzLFxuICAgICAgdG91Y2ggPSBwcm9wcy50b3VjaCxcbiAgICAgIHZhbHVlcyA9IHByb3BzLnZhbHVlcyxcbiAgICAgIHBlcnNpc3RlbnRTdWJtaXRFcnJvcnMgPSBwcm9wcy5wZXJzaXN0ZW50U3VibWl0RXJyb3JzO1xuXG5cbiAgdG91Y2guYXBwbHkodW5kZWZpbmVkLCBfdG9Db25zdW1hYmxlQXJyYXkoZmllbGRzKSk7IC8vIG1hcmsgYWxsIGZpZWxkcyBhcyB0b3VjaGVkXG5cbiAgaWYgKHZhbGlkIHx8IHBlcnNpc3RlbnRTdWJtaXRFcnJvcnMpIHtcbiAgICB2YXIgZG9TdWJtaXQgPSBmdW5jdGlvbiBkb1N1Ym1pdCgpIHtcbiAgICAgIHZhciByZXN1bHQgPSB2b2lkIDA7XG4gICAgICB0cnkge1xuICAgICAgICByZXN1bHQgPSBzdWJtaXQodmFsdWVzLCBkaXNwYXRjaCwgcHJvcHMpO1xuICAgICAgfSBjYXRjaCAoc3VibWl0RXJyb3IpIHtcbiAgICAgICAgdmFyIGVycm9yID0gc3VibWl0RXJyb3IgaW5zdGFuY2VvZiBfU3VibWlzc2lvbkVycm9yMi5kZWZhdWx0ID8gc3VibWl0RXJyb3IuZXJyb3JzIDogdW5kZWZpbmVkO1xuICAgICAgICBzdG9wU3VibWl0KGVycm9yKTtcbiAgICAgICAgc2V0U3VibWl0RmFpbGVkLmFwcGx5KHVuZGVmaW5lZCwgX3RvQ29uc3VtYWJsZUFycmF5KGZpZWxkcykpO1xuICAgICAgICBpZiAob25TdWJtaXRGYWlsKSB7XG4gICAgICAgICAgb25TdWJtaXRGYWlsKGVycm9yLCBkaXNwYXRjaCwgc3VibWl0RXJyb3IsIHByb3BzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgfHwgb25TdWJtaXRGYWlsKSB7XG4gICAgICAgICAgLy8gaWYgeW91J3ZlIHByb3ZpZGVkIGFuIG9uU3VibWl0RmFpbCBjYWxsYmFjaywgZG9uJ3QgcmUtdGhyb3cgdGhlIGVycm9yXG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IHN1Ym1pdEVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoKDAsIF9pc1Byb21pc2UyLmRlZmF1bHQpKHJlc3VsdCkpIHtcbiAgICAgICAgc3RhcnRTdWJtaXQoKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC50aGVuKGZ1bmN0aW9uIChzdWJtaXRSZXN1bHQpIHtcbiAgICAgICAgICBzdG9wU3VibWl0KCk7XG4gICAgICAgICAgc2V0U3VibWl0U3VjY2VlZGVkKCk7XG4gICAgICAgICAgaWYgKG9uU3VibWl0U3VjY2Vzcykge1xuICAgICAgICAgICAgb25TdWJtaXRTdWNjZXNzKHN1Ym1pdFJlc3VsdCwgZGlzcGF0Y2gsIHByb3BzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHN1Ym1pdFJlc3VsdDtcbiAgICAgICAgfSwgZnVuY3Rpb24gKHN1Ym1pdEVycm9yKSB7XG4gICAgICAgICAgdmFyIGVycm9yID0gc3VibWl0RXJyb3IgaW5zdGFuY2VvZiBfU3VibWlzc2lvbkVycm9yMi5kZWZhdWx0ID8gc3VibWl0RXJyb3IuZXJyb3JzIDogdW5kZWZpbmVkO1xuICAgICAgICAgIHN0b3BTdWJtaXQoZXJyb3IpO1xuICAgICAgICAgIHNldFN1Ym1pdEZhaWxlZC5hcHBseSh1bmRlZmluZWQsIF90b0NvbnN1bWFibGVBcnJheShmaWVsZHMpKTtcbiAgICAgICAgICBpZiAob25TdWJtaXRGYWlsKSB7XG4gICAgICAgICAgICBvblN1Ym1pdEZhaWwoZXJyb3IsIGRpc3BhdGNoLCBzdWJtaXRFcnJvciwgcHJvcHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZXJyb3IgfHwgb25TdWJtaXRGYWlsKSB7XG4gICAgICAgICAgICAvLyBpZiB5b3UndmUgcHJvdmlkZWQgYW4gb25TdWJtaXRGYWlsIGNhbGxiYWNrLCBkb24ndCByZS10aHJvdyB0aGUgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgc3VibWl0RXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFN1Ym1pdFN1Y2NlZWRlZCgpO1xuICAgICAgICBpZiAob25TdWJtaXRTdWNjZXNzKSB7XG4gICAgICAgICAgb25TdWJtaXRTdWNjZXNzKHJlc3VsdCwgZGlzcGF0Y2gsIHByb3BzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgdmFyIGFzeW5jVmFsaWRhdGVSZXN1bHQgPSBhc3luY1ZhbGlkYXRlICYmIGFzeW5jVmFsaWRhdGUoKTtcbiAgICBpZiAoYXN5bmNWYWxpZGF0ZVJlc3VsdCkge1xuICAgICAgcmV0dXJuIGFzeW5jVmFsaWRhdGVSZXN1bHQudGhlbihmdW5jdGlvbiAoYXN5bmNFcnJvcnMpIHtcbiAgICAgICAgaWYgKGFzeW5jRXJyb3JzKSB7XG4gICAgICAgICAgdGhyb3cgYXN5bmNFcnJvcnM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRvU3VibWl0KCk7XG4gICAgICB9KS5jYXRjaChmdW5jdGlvbiAoYXN5bmNFcnJvcnMpIHtcbiAgICAgICAgc2V0U3VibWl0RmFpbGVkLmFwcGx5KHVuZGVmaW5lZCwgX3RvQ29uc3VtYWJsZUFycmF5KGZpZWxkcykpO1xuICAgICAgICBpZiAob25TdWJtaXRGYWlsKSB7XG4gICAgICAgICAgb25TdWJtaXRGYWlsKGFzeW5jRXJyb3JzLCBkaXNwYXRjaCwgbnVsbCwgcHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChhc3luY0Vycm9ycyk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRvU3VibWl0KCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHNldFN1Ym1pdEZhaWxlZC5hcHBseSh1bmRlZmluZWQsIF90b0NvbnN1bWFibGVBcnJheShmaWVsZHMpKTtcbiAgICBpZiAob25TdWJtaXRGYWlsKSB7XG4gICAgICBvblN1Ym1pdEZhaWwoc3luY0Vycm9ycywgZGlzcGF0Y2gsIG51bGwsIHByb3BzKTtcbiAgICB9XG4gICAgcmV0dXJuIHN5bmNFcnJvcnM7XG4gIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGhhbmRsZVN1Ym1pdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtZm9ybS9saWIvaGFuZGxlU3VibWl0LmpzXG4vLyBtb2R1bGUgaWQgPSAyMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIGdldEVycm9yS2V5cyA9IGZ1bmN0aW9uIGdldEVycm9yS2V5cyhuYW1lLCB0eXBlKSB7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ0ZpZWxkJzpcbiAgICAgIHJldHVybiBbbmFtZSwgbmFtZSArICcuX2Vycm9yJ107XG4gICAgY2FzZSAnRmllbGRBcnJheSc6XG4gICAgICByZXR1cm4gW25hbWUgKyAnLl9lcnJvciddO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gZmllbGQgdHlwZScpO1xuICB9XG59O1xuXG52YXIgY3JlYXRlSGFzRXJyb3IgPSBmdW5jdGlvbiBjcmVhdGVIYXNFcnJvcihfcmVmKSB7XG4gIHZhciBnZXRJbiA9IF9yZWYuZ2V0SW47XG5cbiAgdmFyIGhhc0Vycm9yID0gZnVuY3Rpb24gaGFzRXJyb3IoZmllbGQsIHN5bmNFcnJvcnMsIGFzeW5jRXJyb3JzLCBzdWJtaXRFcnJvcnMpIHtcbiAgICBpZiAoIXN5bmNFcnJvcnMgJiYgIWFzeW5jRXJyb3JzICYmICFzdWJtaXRFcnJvcnMpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgbmFtZSA9IGdldEluKGZpZWxkLCAnbmFtZScpO1xuICAgIHZhciB0eXBlID0gZ2V0SW4oZmllbGQsICd0eXBlJyk7XG4gICAgcmV0dXJuIGdldEVycm9yS2V5cyhuYW1lLCB0eXBlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBnZXRJbihzeW5jRXJyb3JzLCBrZXkpIHx8IGdldEluKGFzeW5jRXJyb3JzLCBrZXkpIHx8IGdldEluKHN1Ym1pdEVycm9ycywga2V5KTtcbiAgICB9KTtcbiAgfTtcbiAgcmV0dXJuIGhhc0Vycm9yO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlSGFzRXJyb3I7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4LWZvcm0vbGliL2hhc0Vycm9yLmpzXG4vLyBtb2R1bGUgaWQgPSAyMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2hhc1N1Ym1pdEZhaWxlZCA9IHJlcXVpcmUoJy4vc2VsZWN0b3JzL2hhc1N1Ym1pdEZhaWxlZCcpO1xuXG52YXIgX2hhc1N1Ym1pdEZhaWxlZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oYXNTdWJtaXRGYWlsZWQpO1xuXG52YXIgX3BsYWluID0gcmVxdWlyZSgnLi9zdHJ1Y3R1cmUvcGxhaW4nKTtcblxudmFyIF9wbGFpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wbGFpbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9ICgwLCBfaGFzU3VibWl0RmFpbGVkMi5kZWZhdWx0KShfcGxhaW4yLmRlZmF1bHQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC1mb3JtL2xpYi9oYXNTdWJtaXRGYWlsZWQuanNcbi8vIG1vZHVsZSBpZCA9IDIyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfaGFzU3VibWl0U3VjY2VlZGVkID0gcmVxdWlyZSgnLi9zZWxlY3RvcnMvaGFzU3VibWl0U3VjY2VlZGVkJyk7XG5cbnZhciBfaGFzU3VibWl0U3VjY2VlZGVkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hhc1N1Ym1pdFN1Y2NlZWRlZCk7XG5cbnZhciBfcGxhaW4gPSByZXF1aXJlKCcuL3N0cnVjdHVyZS9wbGFpbicpO1xuXG52YXIgX3BsYWluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BsYWluKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gKDAsIF9oYXNTdWJtaXRTdWNjZWVkZWQyLmRlZmF1bHQpKF9wbGFpbjIuZGVmYXVsdCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4LWZvcm0vbGliL2hhc1N1Ym1pdFN1Y2NlZWRlZC5qc1xuLy8gbW9kdWxlIGlkID0gMjIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9pc0RpcnR5ID0gcmVxdWlyZSgnLi9zZWxlY3RvcnMvaXNEaXJ0eScpO1xuXG52YXIgX2lzRGlydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNEaXJ0eSk7XG5cbnZhciBfcGxhaW4gPSByZXF1aXJlKCcuL3N0cnVjdHVyZS9wbGFpbicpO1xuXG52YXIgX3BsYWluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BsYWluKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gKDAsIF9pc0RpcnR5Mi5kZWZhdWx0KShfcGxhaW4yLmRlZmF1bHQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC1mb3JtL2xpYi9pc0RpcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAyMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2lzSW52YWxpZCA9IHJlcXVpcmUoJy4vc2VsZWN0b3JzL2lzSW52YWxpZCcpO1xuXG52YXIgX2lzSW52YWxpZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc0ludmFsaWQpO1xuXG52YXIgX3BsYWluID0gcmVxdWlyZSgnLi9zdHJ1Y3R1cmUvcGxhaW4nKTtcblxudmFyIF9wbGFpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wbGFpbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9ICgwLCBfaXNJbnZhbGlkMi5kZWZhdWx0KShfcGxhaW4yLmRlZmF1bHQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC1mb3JtL2xpYi9pc0ludmFsaWQuanNcbi8vIG1vZHVsZSBpZCA9IDIyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfaXNQcmlzdGluZSA9IHJlcXVpcmUoJy4vc2VsZWN0b3JzL2lzUHJpc3RpbmUnKTtcblxudmFyIF9pc1ByaXN0aW5lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzUHJpc3RpbmUpO1xuXG52YXIgX3BsYWluID0gcmVxdWlyZSgnLi9zdHJ1Y3R1cmUvcGxhaW4nKTtcblxudmFyIF9wbGFpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wbGFpbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9ICgwLCBfaXNQcmlzdGluZTIuZGVmYXVsdCkoX3BsYWluMi5kZWZhdWx0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtZm9ybS9saWIvaXNQcmlzdGluZS5qc1xuLy8gbW9kdWxlIGlkID0gMjI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBpc1JlYWN0TmF0aXZlID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lm5hdmlnYXRvciAmJiB3aW5kb3cubmF2aWdhdG9yLnByb2R1Y3QgJiYgd2luZG93Lm5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBpc1JlYWN0TmF0aXZlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC1mb3JtL2xpYi9pc1JlYWN0TmF0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSAyMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2lzU3VibWl0dGluZyA9IHJlcXVpcmUoJy4vc2VsZWN0b3JzL2lzU3VibWl0dGluZycpO1xuXG52YXIgX2lzU3VibWl0dGluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1N1Ym1pdHRpbmcpO1xuXG52YXIgX3BsYWluID0gcmVxdWlyZSgnLi9zdHJ1Y3R1cmUvcGxhaW4nKTtcblxudmFyIF9wbGFpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wbGFpbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9ICgwLCBfaXNTdWJtaXR0aW5nMi5kZWZhdWx0KShfcGxhaW4yLmRlZmF1bHQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC1mb3JtL2xpYi9pc1N1Ym1pdHRpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDIyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfaXNWYWxpZCA9IHJlcXVpcmUoJy4vc2VsZWN0b3JzL2lzVmFsaWQnKTtcblxudmFyIF9pc1ZhbGlkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzVmFsaWQpO1xuXG52YXIgX3BsYWluID0gcmVxdWlyZSgnLi9zdHJ1Y3R1cmUvcGxhaW4nKTtcblxudmFyIF9wbGFpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wbGFpbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9ICgwLCBfaXNWYWxpZDIuZGVmYXVsdCkoX3BsYWluMi5kZWZhdWx0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtZm9ybS9saWIvaXNWYWxpZC5qc1xuLy8gbW9kdWxlIGlkID0gMjI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZmllbGRQcm9wVHlwZXMgPSBleHBvcnRzLmZpZWxkTWV0YVByb3BUeXBlcyA9IGV4cG9ydHMuZmllbGRJbnB1dFByb3BUeXBlcyA9IHVuZGVmaW5lZDtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBhbnkgPSBfcHJvcFR5cGVzMi5kZWZhdWx0LmFueSxcbiAgICBib29sID0gX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAgIGZ1bmMgPSBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gICAgc2hhcGUgPSBfcHJvcFR5cGVzMi5kZWZhdWx0LnNoYXBlLFxuICAgIHN0cmluZyA9IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAgIG9uZU9mVHlwZSA9IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlLFxuICAgIG9iamVjdCA9IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0O1xuXG5cbnZhciBwcm9wVHlwZXMgPSB7XG4gIC8vIFN0YXRlOlxuICBhbnlUb3VjaGVkOiBib29sLmlzUmVxdWlyZWQsIC8vIHRydWUgaWYgYW55IG9mIHRoZSBmaWVsZHMgaGF2ZSBiZWVuIG1hcmtlZCBhcyB0b3VjaGVkXG4gIGFzeW5jVmFsaWRhdGluZzogb25lT2ZUeXBlKFtib29sLCBzdHJpbmddKS5pc1JlcXVpcmVkLCAvLyB0cnVlIGlmIGFzeW5jIHZhbGlkYXRpb24gaXMgcnVubmluZywgYSBzdHJpbmcgaWYgYSBmaWVsZCB0cmlnZ2VyZWQgYXN5bmMgdmFsaWRhdGlvblxuICBkaXJ0eTogYm9vbC5pc1JlcXVpcmVkLCAvLyB0cnVlIGlmIGFueSB2YWx1ZXMgYXJlIGRpZmZlcmVudCBmcm9tIGluaXRpYWxWYWx1ZXNcbiAgZXJyb3I6IGFueSwgLy8gZm9ybS13aWRlIGVycm9yIGZyb20gJ19lcnJvcicga2V5IGluIHZhbGlkYXRpb24gcmVzdWx0XG4gIGZvcm06IHN0cmluZy5pc1JlcXVpcmVkLCAvLyB0aGUgbmFtZSBvZiB0aGUgZm9ybVxuICBpbnZhbGlkOiBib29sLmlzUmVxdWlyZWQsIC8vIHRydWUgaWYgdGhlcmUgYXJlIGFueSB2YWxpZGF0aW9uIGVycm9yc1xuICBpbml0aWFsaXplZDogYm9vbC5pc1JlcXVpcmVkLCAvLyB0cnVlIGlmIHRoZSBmb3JtIGhhcyBiZWVuIGluaXRpYWxpemVkXG4gIGluaXRpYWxWYWx1ZXM6IG9iamVjdCwgLy8gdGhlIGluaXRpYWxWYWx1ZXMgb2JqZWN0IHBhc3NlZCB0byByZWR1eEZvcm1cbiAgcHJpc3RpbmU6IGJvb2wuaXNSZXF1aXJlZCwgLy8gdHJ1ZSBpZiB0aGUgdmFsdWVzIGFyZSB0aGUgc2FtZSBhcyBpbml0aWFsVmFsdWVzXG4gIHB1cmU6IGJvb2wuaXNSZXF1aXJlZCwgLy8gaWYgdHJ1ZSwgaW1wbGVtZW50cyBzaG91bGRDb21wb25lbnRVcGRhdGVcbiAgc3VibWl0dGluZzogYm9vbC5pc1JlcXVpcmVkLCAvLyB0cnVlIGlmIHRoZSBmb3JtIGlzIGluIHRoZSBwcm9jZXNzIG9mIGJlaW5nIHN1Ym1pdHRlZFxuICBzdWJtaXRGYWlsZWQ6IGJvb2wuaXNSZXF1aXJlZCwgLy8gdHJ1ZSBpZiB0aGUgZm9ybSB3YXMgc3VibWl0dGVkIGFuZCBmYWlsZWQgZm9yIGFueSByZWFzb25cbiAgc3VibWl0U3VjY2VlZGVkOiBib29sLmlzUmVxdWlyZWQsIC8vIHRydWUgaWYgdGhlIGZvcm0gd2FzIHN1Y2Nlc3NmdWxseSBzdWJtaXR0ZWRcbiAgdmFsaWQ6IGJvb2wuaXNSZXF1aXJlZCwgLy8gdHJ1ZSBpZiB0aGVyZSBhcmUgbm8gdmFsaWRhdGlvbiBlcnJvcnNcbiAgd2FybmluZzogYW55LCAvLyBmb3JtLXdpZGUgd2FybmluZyBmcm9tICdfd2FybmluZycga2V5IGluIHZhbGlkYXRpb24gcmVzdWx0XG4gIC8vIEFjdGlvbnM6XG4gIGFycmF5OiBzaGFwZSh7XG4gICAgaW5zZXJ0OiBmdW5jLmlzUmVxdWlyZWQsIC8vIGZ1bmN0aW9uIHRvIGluc2VydCBhIHZhbHVlIGludG8gYW4gYXJyYXkgZmllbGRcbiAgICBtb3ZlOiBmdW5jLmlzUmVxdWlyZWQsIC8vIGZ1bmN0aW9uIHRvIG1vdmUgYSB2YWx1ZSB3aXRoaW4gYW4gYXJyYXkgZmllbGRcbiAgICBwb3A6IGZ1bmMuaXNSZXF1aXJlZCwgLy8gZnVuY3Rpb24gdG8gcG9wIGEgdmFsdWUgb2ZmIG9mIGFuIGFycmF5IGZpZWxkXG4gICAgcHVzaDogZnVuYy5pc1JlcXVpcmVkLCAvLyBmdW5jdGlvbiB0byBwdXNoIGEgdmFsdWUgb250byBhbiBhcnJheSBmaWVsZFxuICAgIHJlbW92ZTogZnVuYy5pc1JlcXVpcmVkLCAvLyBmdW5jdGlvbiB0byByZW1vdmUgYSB2YWx1ZSBmcm9tIGFuIGFycmF5IGZpZWxkXG4gICAgcmVtb3ZlQWxsOiBmdW5jLmlzUmVxdWlyZWQsIC8vIGZ1bmN0aW9uIHRvIHJlbW92ZSBhbGwgdGhlIHZhbHVlcyBmcm9tIGFuIGFycmF5IGZpZWxkXG4gICAgc2hpZnQ6IGZ1bmMuaXNSZXF1aXJlZCwgLy8gZnVuY3Rpb24gdG8gc2hpZnQgYSB2YWx1ZSBvdXQgb2YgYW4gYXJyYXkgZmllbGRcbiAgICBzcGxpY2U6IGZ1bmMuaXNSZXF1aXJlZCwgLy8gZnVuY3Rpb24gdG8gc3BsaWNlIGEgdmFsdWUgaW50byBhbiBhcnJheSBmaWVsZFxuICAgIHN3YXA6IGZ1bmMuaXNSZXF1aXJlZCwgLy8gZnVuY3Rpb24gdG8gc3dhcCB2YWx1ZXMgaW4gYW4gYXJyYXkgZmllbGRcbiAgICB1bnNoaWZ0OiBmdW5jLmlzUmVxdWlyZWQgLy8gZnVuY3Rpb24gdG8gdW5zaGlmdCBhIHZhbHVlIGludG8gYW4gYXJyYXkgZmllbGRcbiAgfSksXG4gIGFzeW5jVmFsaWRhdGU6IGZ1bmMuaXNSZXF1aXJlZCwgLy8gZnVuY3Rpb24gdG8gdHJpZ2dlciBhc3luYyB2YWxpZGF0aW9uXG4gIGF1dG9maWxsOiBmdW5jLmlzUmVxdWlyZWQsIC8vIGFjdGlvbiB0byBzZXQgYSB2YWx1ZSBvZiBhIGZpZWxkIGFuZCBtYXJrIGl0IGFzIGF1dG9maWxsZWRcbiAgYmx1cjogZnVuYy5pc1JlcXVpcmVkLCAvLyBhY3Rpb24gdG8gbWFyayBhIGZpZWxkIGFzIGJsdXJyZWRcbiAgY2hhbmdlOiBmdW5jLmlzUmVxdWlyZWQsIC8vIGFjdGlvbiB0byBjaGFuZ2UgdGhlIHZhbHVlIG9mIGEgZmllbGRcbiAgY2xlYXJBc3luY0Vycm9yOiBmdW5jLmlzUmVxdWlyZWQsIC8vIGFjdGlvbiB0byBjbGVhciB0aGUgYXN5bmMgZXJyb3Igb2YgYSBmaWVsZFxuICBkZXN0cm95OiBmdW5jLmlzUmVxdWlyZWQsIC8vIGFjdGlvbiB0byBkZXN0cm95IHRoZSBmb3JtJ3MgZGF0YSBpbiBSZWR1eFxuICBkaXNwYXRjaDogZnVuYy5pc1JlcXVpcmVkLCAvLyB0aGUgUmVkdXggZGlzcGF0Y2ggYWN0aW9uXG4gIGhhbmRsZVN1Ym1pdDogZnVuYy5pc1JlcXVpcmVkLCAvLyBmdW5jdGlvbiB0byBzdWJtaXQgdGhlIGZvcm1cbiAgaW5pdGlhbGl6ZTogZnVuYy5pc1JlcXVpcmVkLCAvLyBhY3Rpb24gdG8gaW5pdGlhbGl6ZSBmb3JtIGRhdGFcbiAgcmVzZXQ6IGZ1bmMuaXNSZXF1aXJlZCwgLy8gYWN0aW9uIHRvIHJlc2V0IHRoZSBmb3JtIGRhdGEgdG8gcHJldmlvdXNseSBpbml0aWFsaXplZCB2YWx1ZXNcbiAgdG91Y2g6IGZ1bmMuaXNSZXF1aXJlZCwgLy8gYWN0aW9uIHRvIG1hcmsgZmllbGRzIGFzIHRvdWNoZWRcbiAgc3VibWl0OiBmdW5jLmlzUmVxdWlyZWQsIC8vIGFjdGlvbiB0byB0cmlnZ2VyIGEgc3VibWlzc2lvbiBvZiB0aGUgc3BlY2lmaWVkIGZvcm1cbiAgdW50b3VjaDogZnVuYy5pc1JlcXVpcmVkLCAvLyBhY3Rpb24gdG8gbWFyayBmaWVsZHMgYXMgdW50b3VjaGVkXG5cbiAgLy8gdHJpZ2dlclN1Ym1pdFxuICB0cmlnZ2VyU3VibWl0OiBib29sLCAvLyBpZiB0cnVlLCBzdWJtaXRzIHRoZSBmb3JtIG9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHNcbiAgY2xlYXJTdWJtaXQ6IGZ1bmMuaXNSZXF1aXJlZCAvLyBjYWxsZWQgYmVmb3JlIGEgdHJpZ2dlcmVkIHN1Ym1pdCwgYnkgZGVmYXVsdCBjbGVhcnMgdHJpZ2dlclN1Ym1pdFxufTtcblxudmFyIGZpZWxkSW5wdXRQcm9wVHlwZXMgPSBleHBvcnRzLmZpZWxkSW5wdXRQcm9wVHlwZXMgPSB7XG4gIGNoZWNrZWQ6IGJvb2wsXG4gIG5hbWU6IHN0cmluZy5pc1JlcXVpcmVkLFxuICBvbkJsdXI6IGZ1bmMuaXNSZXF1aXJlZCxcbiAgb25DaGFuZ2U6IGZ1bmMuaXNSZXF1aXJlZCxcbiAgb25EcmFnU3RhcnQ6IGZ1bmMuaXNSZXF1aXJlZCxcbiAgb25Ecm9wOiBmdW5jLmlzUmVxdWlyZWQsXG4gIG9uRm9jdXM6IGZ1bmMuaXNSZXF1aXJlZCxcbiAgdmFsdWU6IGFueVxufTtcblxudmFyIGZpZWxkTWV0YVByb3BUeXBlcyA9IGV4cG9ydHMuZmllbGRNZXRhUHJvcFR5cGVzID0ge1xuICBhY3RpdmU6IGJvb2wuaXNSZXF1aXJlZCxcbiAgYXN5bmNWYWxpZGF0aW5nOiBib29sLmlzUmVxdWlyZWQsXG4gIGF1dG9maWxsZWQ6IGJvb2wuaXNSZXF1aXJlZCxcbiAgZGlydHk6IGJvb2wuaXNSZXF1aXJlZCxcbiAgZGlzcGF0Y2g6IGZ1bmMuaXNSZXF1aXJlZCxcbiAgZXJyb3I6IHN0cmluZyxcbiAgZm9ybTogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGludmFsaWQ6IGJvb2wuaXNSZXF1aXJlZCxcbiAgcHJpc3RpbmU6IGJvb2wuaXNSZXF1aXJlZCxcbiAgc3VibWl0dGluZzogYm9vbC5pc1JlcXVpcmVkLFxuICBzdWJtaXRGYWlsZWQ6IGJvb2wuaXNSZXF1aXJlZCxcbiAgdG91Y2hlZDogYm9vbC5pc1JlcXVpcmVkLFxuICB2YWxpZDogYm9vbC5pc1JlcXVpcmVkLFxuICB2aXNpdGVkOiBib29sLmlzUmVxdWlyZWQsXG4gIHdhcm5pbmc6IHN0cmluZ1xufTtcblxudmFyIGZpZWxkUHJvcFR5cGVzID0gZXhwb3J0cy5maWVsZFByb3BUeXBlcyA9IHtcbiAgaW5wdXQ6IGZpZWxkSW5wdXRQcm9wVHlwZXMuaXNSZXF1aXJlZCxcbiAgbWV0YTogZmllbGRNZXRhUHJvcFR5cGVzLmlzUmVxdWlyZWQsXG4gIGN1c3RvbTogb2JqZWN0LmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHByb3BUeXBlcztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtZm9ybS9saWIvcHJvcFR5cGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZVJlZHVjZXIgPSByZXF1aXJlKCcuL2NyZWF0ZVJlZHVjZXInKTtcblxudmFyIF9jcmVhdGVSZWR1Y2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZVJlZHVjZXIpO1xuXG52YXIgX3BsYWluID0gcmVxdWlyZSgnLi9zdHJ1Y3R1cmUvcGxhaW4nKTtcblxudmFyIF9wbGFpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wbGFpbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9ICgwLCBfY3JlYXRlUmVkdWNlcjIuZGVmYXVsdCkoX3BsYWluMi5kZWZhdWx0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtZm9ybS9saWIvcmVkdWNlci5qc1xuLy8gbW9kdWxlIGlkID0gMjI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVSZWR1eEZvcm0gPSByZXF1aXJlKCcuL2NyZWF0ZVJlZHV4Rm9ybScpO1xuXG52YXIgX2NyZWF0ZVJlZHV4Rm9ybTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVSZWR1eEZvcm0pO1xuXG52YXIgX3BsYWluID0gcmVxdWlyZSgnLi9zdHJ1Y3R1cmUvcGxhaW4nKTtcblxudmFyIF9wbGFpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wbGFpbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9ICgwLCBfY3JlYXRlUmVkdXhGb3JtMi5kZWZhdWx0KShfcGxhaW4yLmRlZmF1bHQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC1mb3JtL2xpYi9yZWR1eEZvcm0uanNcbi8vIG1vZHVsZSBpZCA9IDIzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgY3JlYXRlR2V0Rm9ybUFzeW5jRXJyb3JzID0gZnVuY3Rpb24gY3JlYXRlR2V0Rm9ybUFzeW5jRXJyb3JzKF9yZWYpIHtcbiAgdmFyIGdldEluID0gX3JlZi5nZXRJbjtcbiAgcmV0dXJuIGZ1bmN0aW9uIChmb3JtKSB7XG4gICAgdmFyIGdldEZvcm1TdGF0ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICByZXR1cm4gZ2V0SW4oc3RhdGUsICdmb3JtJyk7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICByZXR1cm4gZ2V0SW4oZ2V0Rm9ybVN0YXRlKHN0YXRlKSwgZm9ybSArICcuYXN5bmNFcnJvcnMnKTtcbiAgICB9O1xuICB9O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlR2V0Rm9ybUFzeW5jRXJyb3JzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC1mb3JtL2xpYi9zZWxlY3RvcnMvZ2V0Rm9ybUFzeW5jRXJyb3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIGNyZWF0ZUdldEZvcm1Jbml0aWFsVmFsdWVzID0gZnVuY3Rpb24gY3JlYXRlR2V0Rm9ybUluaXRpYWxWYWx1ZXMoX3JlZikge1xuICB2YXIgZ2V0SW4gPSBfcmVmLmdldEluO1xuICByZXR1cm4gZnVuY3Rpb24gKGZvcm0pIHtcbiAgICB2YXIgZ2V0Rm9ybVN0YXRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgIHJldHVybiBnZXRJbihzdGF0ZSwgJ2Zvcm0nKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgIHJldHVybiBnZXRJbihnZXRGb3JtU3RhdGUoc3RhdGUpLCBmb3JtICsgJy5pbml0aWFsJyk7XG4gICAgfTtcbiAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZUdldEZvcm1Jbml0aWFsVmFsdWVzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC1mb3JtL2xpYi9zZWxlY3RvcnMvZ2V0Rm9ybUluaXRpYWxWYWx1ZXMuanNcbi8vIG1vZHVsZSBpZCA9IDIzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgY3JlYXRlR2V0Rm9ybU1ldGEgPSBmdW5jdGlvbiBjcmVhdGVHZXRGb3JtTWV0YShfcmVmKSB7XG4gIHZhciBnZXRJbiA9IF9yZWYuZ2V0SW47XG4gIHJldHVybiBmdW5jdGlvbiAoZm9ybSkge1xuICAgIHZhciBnZXRGb3JtU3RhdGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgcmV0dXJuIGdldEluKHN0YXRlLCAnZm9ybScpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgcmV0dXJuIGdldEluKGdldEZvcm1TdGF0ZShzdGF0ZSksIGZvcm0gKyAnLmZpZWxkcycpO1xuICAgIH07XG4gIH07XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVHZXRGb3JtTWV0YTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtZm9ybS9saWIvc2VsZWN0b3JzL2dldEZvcm1NZXRhLmpzXG4vLyBtb2R1bGUgaWQgPSAyMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIGNyZWF0ZUdldEZvcm1OYW1lcyA9IGZ1bmN0aW9uIGNyZWF0ZUdldEZvcm1OYW1lcyhfcmVmKSB7XG4gIHZhciBnZXRJbiA9IF9yZWYuZ2V0SW4sXG4gICAgICBrZXlzID0gX3JlZi5rZXlzO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBnZXRGb3JtU3RhdGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgcmV0dXJuIGdldEluKHN0YXRlLCAnZm9ybScpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgcmV0dXJuIGtleXMoZ2V0Rm9ybVN0YXRlKHN0YXRlKSk7XG4gICAgfTtcbiAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZUdldEZvcm1OYW1lcztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtZm9ybS9saWIvc2VsZWN0b3JzL2dldEZvcm1OYW1lcy5qc1xuLy8gbW9kdWxlIGlkID0gMjM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBjcmVhdGVHZXRGb3JtU3VibWl0RXJyb3JzID0gZnVuY3Rpb24gY3JlYXRlR2V0Rm9ybVN1Ym1pdEVycm9ycyhfcmVmKSB7XG4gIHZhciBnZXRJbiA9IF9yZWYuZ2V0SW47XG4gIHJldHVybiBmdW5jdGlvbiAoZm9ybSkge1xuICAgIHZhciBnZXRGb3JtU3RhdGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgcmV0dXJuIGdldEluKHN0YXRlLCAnZm9ybScpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgcmV0dXJuIGdldEluKGdldEZvcm1TdGF0ZShzdGF0ZSksIGZvcm0gKyAnLnN1Ym1pdEVycm9ycycpO1xuICAgIH07XG4gIH07XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVHZXRGb3JtU3VibWl0RXJyb3JzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC1mb3JtL2xpYi9zZWxlY3RvcnMvZ2V0Rm9ybVN1Ym1pdEVycm9ycy5qc1xuLy8gbW9kdWxlIGlkID0gMjM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBjcmVhdGVHZXRGb3JtU3luY0Vycm9ycyA9IGZ1bmN0aW9uIGNyZWF0ZUdldEZvcm1TeW5jRXJyb3JzKF9yZWYpIHtcbiAgdmFyIGdldEluID0gX3JlZi5nZXRJbjtcbiAgcmV0dXJuIGZ1bmN0aW9uIChmb3JtKSB7XG4gICAgdmFyIGdldEZvcm1TdGF0ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICByZXR1cm4gZ2V0SW4oc3RhdGUsICdmb3JtJyk7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICByZXR1cm4gZ2V0SW4oZ2V0Rm9ybVN0YXRlKHN0YXRlKSwgZm9ybSArICcuc3luY0Vycm9ycycpO1xuICAgIH07XG4gIH07XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVHZXRGb3JtU3luY0Vycm9ycztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtZm9ybS9saWIvc2VsZWN0b3JzL2dldEZvcm1TeW5jRXJyb3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIGNyZWF0ZUdldEZvcm1TeW5jV2FybmluZ3MgPSBmdW5jdGlvbiBjcmVhdGVHZXRGb3JtU3luY1dhcm5pbmdzKF9yZWYpIHtcbiAgdmFyIGdldEluID0gX3JlZi5nZXRJbjtcbiAgcmV0dXJuIGZ1bmN0aW9uIChmb3JtKSB7XG4gICAgdmFyIGdldEZvcm1TdGF0ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICByZXR1cm4gZ2V0SW4oc3RhdGUsICdmb3JtJyk7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICByZXR1cm4gZ2V0SW4oZ2V0Rm9ybVN0YXRlKHN0YXRlKSwgZm9ybSArICcuc3luY1dhcm5pbmdzJyk7XG4gICAgfTtcbiAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZUdldEZvcm1TeW5jV2FybmluZ3M7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4LWZvcm0vbGliL3NlbGVjdG9ycy9nZXRGb3JtU3luY1dhcm5pbmdzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIGNyZWF0ZUdldEZvcm1WYWx1ZXMgPSBmdW5jdGlvbiBjcmVhdGVHZXRGb3JtVmFsdWVzKF9yZWYpIHtcbiAgdmFyIGdldEluID0gX3JlZi5nZXRJbjtcbiAgcmV0dXJuIGZ1bmN0aW9uIChmb3JtKSB7XG4gICAgdmFyIGdldEZvcm1TdGF0ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICByZXR1cm4gZ2V0SW4oc3RhdGUsICdmb3JtJyk7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICByZXR1cm4gZ2V0SW4oZ2V0Rm9ybVN0YXRlKHN0YXRlKSwgZm9ybSArICcudmFsdWVzJyk7XG4gICAgfTtcbiAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZUdldEZvcm1WYWx1ZXM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4LWZvcm0vbGliL3NlbGVjdG9ycy9nZXRGb3JtVmFsdWVzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIGNyZWF0ZUhhc1N1Ym1pdEZhaWxlZCA9IGZ1bmN0aW9uIGNyZWF0ZUhhc1N1Ym1pdEZhaWxlZChfcmVmKSB7XG4gIHZhciBnZXRJbiA9IF9yZWYuZ2V0SW47XG4gIHJldHVybiBmdW5jdGlvbiAoZm9ybSkge1xuICAgIHZhciBnZXRGb3JtU3RhdGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgcmV0dXJuIGdldEluKHN0YXRlLCAnZm9ybScpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgdmFyIGZvcm1TdGF0ZSA9IGdldEZvcm1TdGF0ZShzdGF0ZSk7XG4gICAgICByZXR1cm4gZ2V0SW4oZm9ybVN0YXRlLCBmb3JtICsgJy5zdWJtaXRGYWlsZWQnKSB8fCBmYWxzZTtcbiAgICB9O1xuICB9O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlSGFzU3VibWl0RmFpbGVkO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC1mb3JtL2xpYi9zZWxlY3RvcnMvaGFzU3VibWl0RmFpbGVkLmpzXG4vLyBtb2R1bGUgaWQgPSAyMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIGNyZWF0ZUhhc1N1Ym1pdFN1Y2NlZWRlZCA9IGZ1bmN0aW9uIGNyZWF0ZUhhc1N1Ym1pdFN1Y2NlZWRlZChfcmVmKSB7XG4gIHZhciBnZXRJbiA9IF9yZWYuZ2V0SW47XG4gIHJldHVybiBmdW5jdGlvbiAoZm9ybSkge1xuICAgIHZhciBnZXRGb3JtU3RhdGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgcmV0dXJuIGdldEluKHN0YXRlLCAnZm9ybScpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgdmFyIGZvcm1TdGF0ZSA9IGdldEZvcm1TdGF0ZShzdGF0ZSk7XG4gICAgICByZXR1cm4gZ2V0SW4oZm9ybVN0YXRlLCBmb3JtICsgJy5zdWJtaXRTdWNjZWVkZWQnKSB8fCBmYWxzZTtcbiAgICB9O1xuICB9O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlSGFzU3VibWl0U3VjY2VlZGVkO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC1mb3JtL2xpYi9zZWxlY3RvcnMvaGFzU3VibWl0U3VjY2VlZGVkLmpzXG4vLyBtb2R1bGUgaWQgPSAyNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2lzUHJpc3RpbmUgPSByZXF1aXJlKCcuL2lzUHJpc3RpbmUnKTtcblxudmFyIF9pc1ByaXN0aW5lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzUHJpc3RpbmUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgY3JlYXRlSXNEaXJ0eSA9IGZ1bmN0aW9uIGNyZWF0ZUlzRGlydHkoc3RydWN0dXJlKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZm9ybSwgZ2V0Rm9ybVN0YXRlKSB7XG4gICAgdmFyIGlzUHJpc3RpbmUgPSAoMCwgX2lzUHJpc3RpbmUyLmRlZmF1bHQpKHN0cnVjdHVyZSkoZm9ybSwgZ2V0Rm9ybVN0YXRlKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICByZXR1cm4gIWlzUHJpc3RpbmUoc3RhdGUpO1xuICAgIH07XG4gIH07XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVJc0RpcnR5O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC1mb3JtL2xpYi9zZWxlY3RvcnMvaXNEaXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMjQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9pc1ZhbGlkID0gcmVxdWlyZSgnLi9pc1ZhbGlkJyk7XG5cbnZhciBfaXNWYWxpZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1ZhbGlkKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGNyZWF0ZUlzSW52YWxpZCA9IGZ1bmN0aW9uIGNyZWF0ZUlzSW52YWxpZChzdHJ1Y3R1cmUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChmb3JtLCBnZXRGb3JtU3RhdGUpIHtcbiAgICB2YXIgaXNWYWxpZCA9ICgwLCBfaXNWYWxpZDIuZGVmYXVsdCkoc3RydWN0dXJlKShmb3JtLCBnZXRGb3JtU3RhdGUpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgIHJldHVybiAhaXNWYWxpZChzdGF0ZSk7XG4gICAgfTtcbiAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZUlzSW52YWxpZDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtZm9ybS9saWIvc2VsZWN0b3JzL2lzSW52YWxpZC5qc1xuLy8gbW9kdWxlIGlkID0gMjQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBjcmVhdGVJc1N1Ym1pdHRpbmcgPSBmdW5jdGlvbiBjcmVhdGVJc1N1Ym1pdHRpbmcoX3JlZikge1xuICB2YXIgZ2V0SW4gPSBfcmVmLmdldEluO1xuICByZXR1cm4gZnVuY3Rpb24gKGZvcm0pIHtcbiAgICB2YXIgZ2V0Rm9ybVN0YXRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgIHJldHVybiBnZXRJbihzdGF0ZSwgJ2Zvcm0nKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgIHZhciBmb3JtU3RhdGUgPSBnZXRGb3JtU3RhdGUoc3RhdGUpO1xuICAgICAgcmV0dXJuIGdldEluKGZvcm1TdGF0ZSwgZm9ybSArICcuc3VibWl0dGluZycpIHx8IGZhbHNlO1xuICAgIH07XG4gIH07XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVJc1N1Ym1pdHRpbmc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4LWZvcm0vbGliL3NlbGVjdG9ycy9pc1N1Ym1pdHRpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDI0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfaXNFcXVhbFdpdGgyID0gcmVxdWlyZSgnbG9kYXNoL2lzRXF1YWxXaXRoJyk7XG5cbnZhciBfaXNFcXVhbFdpdGgzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNFcXVhbFdpdGgyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGN1c3RvbWl6ZXIgPSBmdW5jdGlvbiBjdXN0b21pemVyKG9iaiwgb3RoZXIpIHtcbiAgaWYgKG9iaiA9PT0gb3RoZXIpIHJldHVybiB0cnVlO1xuICBpZiAoKG9iaiA9PSBudWxsIHx8IG9iaiA9PT0gJycgfHwgb2JqID09PSBmYWxzZSkgJiYgKG90aGVyID09IG51bGwgfHwgb3RoZXIgPT09ICcnIHx8IG90aGVyID09PSBmYWxzZSkpIHJldHVybiB0cnVlO1xuXG4gIGlmIChvYmogJiYgb3RoZXIgJiYgb2JqLl9lcnJvciAhPT0gb3RoZXIuX2Vycm9yKSByZXR1cm4gZmFsc2U7XG4gIGlmIChvYmogJiYgb3RoZXIgJiYgb2JqLl93YXJuaW5nICE9PSBvdGhlci5fd2FybmluZykgcmV0dXJuIGZhbHNlO1xufTtcblxudmFyIGRlZXBFcXVhbCA9IGZ1bmN0aW9uIGRlZXBFcXVhbChhLCBiKSB7XG4gIHJldHVybiAoMCwgX2lzRXF1YWxXaXRoMy5kZWZhdWx0KShhLCBiLCBjdXN0b21pemVyKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGRlZXBFcXVhbDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtZm9ybS9saWIvc3RydWN0dXJlL3BsYWluL2RlZXBFcXVhbC5qc1xuLy8gbW9kdWxlIGlkID0gMjQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF90b1BhdGgyID0gcmVxdWlyZSgnbG9kYXNoL3RvUGF0aCcpO1xuXG52YXIgX3RvUGF0aDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90b1BhdGgyKTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSBlbHNlIHsgcmV0dXJuIEFycmF5LmZyb20oYXJyKTsgfSB9XG5cbnZhciBkZWxldGVJbldpdGhQYXRoID0gZnVuY3Rpb24gZGVsZXRlSW5XaXRoUGF0aChzdGF0ZSwgZmlyc3QpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHJlc3QgPSBBcnJheShfbGVuID4gMiA/IF9sZW4gLSAyIDogMCksIF9rZXkgPSAyOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgcmVzdFtfa2V5IC0gMl0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBpZiAoc3RhdGUgPT09IHVuZGVmaW5lZCB8fCBmaXJzdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG4gIGlmIChyZXN0Lmxlbmd0aCkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHN0YXRlKSkge1xuICAgICAgaWYgKGZpcnN0IDwgc3RhdGUubGVuZ3RoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBkZWxldGVJbldpdGhQYXRoLmFwcGx5KHVuZGVmaW5lZCwgW3N0YXRlICYmIHN0YXRlW2ZpcnN0XV0uY29uY2F0KHJlc3QpKTtcbiAgICAgICAgaWYgKHJlc3VsdCAhPT0gc3RhdGVbZmlyc3RdKSB7XG4gICAgICAgICAgdmFyIGNvcHkgPSBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KHN0YXRlKSk7XG4gICAgICAgICAgY29weVtmaXJzdF0gPSByZXN1bHQ7XG4gICAgICAgICAgcmV0dXJuIGNvcHk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gICAgaWYgKGZpcnN0IGluIHN0YXRlKSB7XG4gICAgICB2YXIgX3Jlc3VsdCA9IGRlbGV0ZUluV2l0aFBhdGguYXBwbHkodW5kZWZpbmVkLCBbc3RhdGUgJiYgc3RhdGVbZmlyc3RdXS5jb25jYXQocmVzdCkpO1xuICAgICAgcmV0dXJuIHN0YXRlW2ZpcnN0XSA9PT0gX3Jlc3VsdCA/IHN0YXRlIDogX2V4dGVuZHMoe30sIHN0YXRlLCBfZGVmaW5lUHJvcGVydHkoe30sIGZpcnN0LCBfcmVzdWx0KSk7XG4gICAgfVxuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheShzdGF0ZSkpIHtcbiAgICBpZiAoaXNOYU4oZmlyc3QpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWxldGUgbm9uLW51bWVyaWNhbCBpbmRleCBmcm9tIGFuIGFycmF5Jyk7XG4gICAgfVxuICAgIGlmIChmaXJzdCA8IHN0YXRlLmxlbmd0aCkge1xuICAgICAgdmFyIF9jb3B5ID0gW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShzdGF0ZSkpO1xuICAgICAgX2NvcHkuc3BsaWNlKGZpcnN0LCAxKTtcbiAgICAgIHJldHVybiBfY29weTtcbiAgICB9XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG4gIGlmIChmaXJzdCBpbiBzdGF0ZSkge1xuICAgIHZhciBfY29weTIgPSBfZXh0ZW5kcyh7fSwgc3RhdGUpO1xuICAgIGRlbGV0ZSBfY29weTJbZmlyc3RdO1xuICAgIHJldHVybiBfY29weTI7XG4gIH1cbiAgcmV0dXJuIHN0YXRlO1xufTtcblxudmFyIGRlbGV0ZUluID0gZnVuY3Rpb24gZGVsZXRlSW4oc3RhdGUsIGZpZWxkKSB7XG4gIHJldHVybiBkZWxldGVJbldpdGhQYXRoLmFwcGx5KHVuZGVmaW5lZCwgW3N0YXRlXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KCgwLCBfdG9QYXRoMy5kZWZhdWx0KShmaWVsZCkpKSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBkZWxldGVJbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtZm9ybS9saWIvc3RydWN0dXJlL3BsYWluL2RlbGV0ZUluLmpzXG4vLyBtb2R1bGUgaWQgPSAyNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3RvUGF0aDIgPSByZXF1aXJlKCdsb2Rhc2gvdG9QYXRoJyk7XG5cbnZhciBfdG9QYXRoMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RvUGF0aDIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgZ2V0SW4gPSBmdW5jdGlvbiBnZXRJbihzdGF0ZSwgZmllbGQpIHtcbiAgaWYgKCFzdGF0ZSkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIHZhciBwYXRoID0gKDAsIF90b1BhdGgzLmRlZmF1bHQpKGZpZWxkKTtcbiAgdmFyIGxlbmd0aCA9IHBhdGgubGVuZ3RoO1xuICBpZiAoIWxlbmd0aCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICB2YXIgcmVzdWx0ID0gc3RhdGU7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoICYmICEhcmVzdWx0OyArK2kpIHtcbiAgICByZXN1bHQgPSByZXN1bHRbcGF0aFtpXV07XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZ2V0SW47XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4LWZvcm0vbGliL3N0cnVjdHVyZS9wbGFpbi9nZXRJbi5qc1xuLy8gbW9kdWxlIGlkID0gMjQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIGtleXMgPSBmdW5jdGlvbiBrZXlzKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA/IE9iamVjdC5rZXlzKHZhbHVlKSA6IFtdO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ga2V5cztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtZm9ybS9saWIvc3RydWN0dXJlL3BsYWluL2tleXMuanNcbi8vIG1vZHVsZSBpZCA9IDI0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdG9QYXRoMiA9IHJlcXVpcmUoJ2xvZGFzaC90b1BhdGgnKTtcblxudmFyIF90b1BhdGgzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdG9QYXRoMik7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBzZXRJbldpdGhQYXRoID0gZnVuY3Rpb24gc2V0SW5XaXRoUGF0aChzdGF0ZSwgdmFsdWUsIHBhdGgsIHBhdGhJbmRleCkge1xuICBpZiAocGF0aEluZGV4ID49IHBhdGgubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgdmFyIGZpcnN0ID0gcGF0aFtwYXRoSW5kZXhdO1xuICB2YXIgbmV4dCA9IHNldEluV2l0aFBhdGgoc3RhdGUgJiYgc3RhdGVbZmlyc3RdLCB2YWx1ZSwgcGF0aCwgcGF0aEluZGV4ICsgMSk7XG5cbiAgaWYgKCFzdGF0ZSkge1xuICAgIHZhciBpbml0aWFsaXplZCA9IGlzTmFOKGZpcnN0KSA/IHt9IDogW107XG4gICAgaW5pdGlhbGl6ZWRbZmlyc3RdID0gbmV4dDtcbiAgICByZXR1cm4gaW5pdGlhbGl6ZWQ7XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShzdGF0ZSkpIHtcbiAgICB2YXIgY29weSA9IFtdLmNvbmNhdChzdGF0ZSk7XG4gICAgY29weVtmaXJzdF0gPSBuZXh0O1xuICAgIHJldHVybiBjb3B5O1xuICB9XG5cbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwgX2RlZmluZVByb3BlcnR5KHt9LCBmaXJzdCwgbmV4dCkpO1xufTtcblxudmFyIHNldEluID0gZnVuY3Rpb24gc2V0SW4oc3RhdGUsIGZpZWxkLCB2YWx1ZSkge1xuICByZXR1cm4gc2V0SW5XaXRoUGF0aChzdGF0ZSwgdmFsdWUsICgwLCBfdG9QYXRoMy5kZWZhdWx0KShmaWVsZCksIDApO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gc2V0SW47XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4LWZvcm0vbGliL3N0cnVjdHVyZS9wbGFpbi9zZXRJbi5qc1xuLy8gbW9kdWxlIGlkID0gMjQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IGVsc2UgeyByZXR1cm4gQXJyYXkuZnJvbShhcnIpOyB9IH1cblxudmFyIHNwbGljZSA9IGZ1bmN0aW9uIHNwbGljZShhcnJheSwgaW5kZXgsIHJlbW92ZU51bSwgdmFsdWUpIHtcbiAgYXJyYXkgPSBhcnJheSB8fCBbXTtcblxuICBpZiAoaW5kZXggPCBhcnJheS5sZW5ndGgpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhcmVtb3ZlTnVtKSB7XG4gICAgICAvLyBpbnNlcnRpbmcgdW5kZWZpbmVkXG4gICAgICB2YXIgX2NvcHkyID0gW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShhcnJheSkpO1xuICAgICAgX2NvcHkyLnNwbGljZShpbmRleCwgMCwgbnVsbCk7XG4gICAgICBfY29weTJbaW5kZXhdID0gdW5kZWZpbmVkO1xuICAgICAgcmV0dXJuIF9jb3B5MjtcbiAgICB9XG4gICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgIHZhciBfY29weTMgPSBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGFycmF5KSk7XG4gICAgICBfY29weTMuc3BsaWNlKGluZGV4LCByZW1vdmVOdW0sIHZhbHVlKTsgLy8gcmVtb3ZpbmcgYW5kIGFkZGluZ1xuICAgICAgcmV0dXJuIF9jb3B5MztcbiAgICB9XG4gICAgdmFyIF9jb3B5ID0gW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShhcnJheSkpO1xuICAgIF9jb3B5LnNwbGljZShpbmRleCwgcmVtb3ZlTnVtKTsgLy8gcmVtb3ZpbmdcbiAgICByZXR1cm4gX2NvcHk7XG4gIH1cbiAgaWYgKHJlbW92ZU51bSkge1xuICAgIC8vIHRyeWluZyB0byByZW1vdmUgbm9uLWV4aXN0YW50IGl0ZW06IHJldHVybiBvcmlnaW5hbCBhcnJheVxuICAgIHJldHVybiBhcnJheTtcbiAgfVxuICAvLyB0cnlpbmcgdG8gYWRkIG91dHNpZGUgb2YgcmFuZ2U6IGp1c3Qgc2V0IHZhbHVlXG4gIHZhciBjb3B5ID0gW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShhcnJheSkpO1xuICBjb3B5W2luZGV4XSA9IHZhbHVlO1xuICByZXR1cm4gY29weTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHNwbGljZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtZm9ybS9saWIvc3RydWN0dXJlL3BsYWluL3NwbGljZS5qc1xuLy8gbW9kdWxlIGlkID0gMjQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBkYXRhS2V5ID0gZXhwb3J0cy5kYXRhS2V5ID0gJ3RleHQnO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC1mb3JtL2xpYi91dGlsL2V2ZW50Q29uc3RzLmpzXG4vLyBtb2R1bGUgaWQgPSAyNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIGdldERpc3BsYXlOYW1lID0gZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoQ29tcCkge1xuICByZXR1cm4gQ29tcC5kaXNwbGF5TmFtZSB8fCBDb21wLm5hbWUgfHwgJ0NvbXBvbmVudCc7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBnZXREaXNwbGF5TmFtZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtZm9ybS9saWIvdXRpbC9nZXREaXNwbGF5TmFtZS5qc1xuLy8gbW9kdWxlIGlkID0gMjUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVWYWx1ZXMgPSByZXF1aXJlKCcuL2NyZWF0ZVZhbHVlcycpO1xuXG52YXIgX2NyZWF0ZVZhbHVlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVWYWx1ZXMpO1xuXG52YXIgX3BsYWluID0gcmVxdWlyZSgnLi9zdHJ1Y3R1cmUvcGxhaW4nKTtcblxudmFyIF9wbGFpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wbGFpbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9ICgwLCBfY3JlYXRlVmFsdWVzMi5kZWZhdWx0KShfcGxhaW4yLmRlZmF1bHQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC1mb3JtL2xpYi92YWx1ZXMuanNcbi8vIG1vZHVsZSBpZCA9IDI1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgxNTIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItcmVkdXgvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMjUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDE1NCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4LXRodW5rL2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDI1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgyMTUpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2ZyZWVHbG9iYWwuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAyNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoMjE2KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRQcm90b3R5cGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAyNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoMjE5KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvbG9kYXNoL19vdmVyQXJnLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMjU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDU1KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzUGxhaW5PYmplY3QuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAyNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoODkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDI1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9