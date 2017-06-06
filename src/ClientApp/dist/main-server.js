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
                dispatch({ type: 'LOGOUT' });
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
        case 'LOGIN':
            newState.loggedIn = true;
            newState.user = action.user;
            return newState;
        case 'LOGOUT':
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
                                return this.submitForm("account/login", values);

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
    "remember": validateGlobal
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODM0ZGEzODEyMGFhMGU1NGE2YjciLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9zdHJ1Y3R1cmUvcGxhaW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiLi92ZW5kb3JcIiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0L3JlYWN0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FycmF5LmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3Jvb3QuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc09iamVjdC5qcyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXROYXRpdmUuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fdG9LZXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvZXEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldFRhZy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX0xpc3RDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXNzb2NJbmRleE9mLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlQXNzaWduVmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldE1hcERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX25hdGl2ZUNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FycmF5TGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC90b1BhdGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi91dGlsL3ByZWZpeE5hbWUuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9pbnZhcmlhbnQvaW52YXJpYW50LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3RvcmUvQXBwLnRzIiwid2VicGFjazovLy8uL34vaXMtcHJvbWlzZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fTWFwLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19NYXBDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fU3RhY2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc0VxdWFsLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pc0luZGV4LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pc0tleS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNQcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaWRlbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNCdWZmZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0xlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc1R5cGVkQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gva2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL2FjdGlvblR5cGVzLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvc2VsZWN0b3JzL2lzVmFsaWQuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2J1aWxkaW4vbW9kdWxlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvRm9ybS50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbnRhaW5lcnMvTG9naW4udHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9oZWxwZXJzL2FwaUNhbGxzLnRzeCIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fVWludDhBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlMaWtlS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlNYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Fzc2lnbk1lcmdlVmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VGb3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Nhc3RQYXRoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jb3B5QXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19lcXVhbEFycmF5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNTdHJpY3RDb21wYXJhYmxlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXRjaGVzU3RyaWN0Q29tcGFyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RyaW5nVG9QYXRoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL190b1NvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0VxdWFsV2l0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9rZXlzSW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvbWFwVmFsdWVzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL3RvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvU3VibWlzc2lvbkVycm9yLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL2NyZWF0ZUZpZWxkUHJvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9kZWZhdWx0U2hvdWxkQXN5bmNWYWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL2RlZmF1bHRTaG91bGRWYWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL2V2ZW50cy9pc0V2ZW50LmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvZXZlbnRzL29uQ2hhbmdlVmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9ldmVudHMvc2lsZW5jZUV2ZW50LmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvc2VsZWN0b3JzL2lzUHJpc3RpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi91dGlsL3NoYWxsb3dDb21wYXJlLmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1mZXRjaC9mZXRjaC1ucG0tbm9kZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1N5bWJvbC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbmZpZ3VyZVN0b3JlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9yb3V0ZXMudHN4Iiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYXNwbmV0LXByZXJlbmRlcmluZy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vc2VydmVyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYm9vdC1zZXJ2ZXIudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL0lucHV0LnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9Mb2dpbkZvcm0udHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL05hdk1lbnUudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3JlZ2lzdGVyRm9ybS50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbnRhaW5lcnMvSG9tZS50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbnRhaW5lcnMvTGF5b3V0LnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29udGFpbmVycy9SZWdpc3Rlci50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2hlbHBlcnMvZm9ybVZhbGlkYXRpb24udHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9zdG9yZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9+L2VzNi1lcnJvci9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX0RhdGFWaWV3LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19IYXNoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19Qcm9taXNlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19TZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1NldENhY2hlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19XZWFrTWFwLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcHBseS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5UHVzaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlTb21lLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hc3NpZ25WYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUZvck93bi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUdldEFsbEtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VIYXNJbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzQXJndW1lbnRzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSXNFcXVhbERlZXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc01hdGNoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSXNOYXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc1R5cGVkQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJdGVyYXRlZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VLZXlzSW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VNYXRjaGVzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlTWF0Y2hlc1Byb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlTWVyZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VNZXJnZURlZXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZVByb3BlcnR5RGVlcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZVJlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VTZXRUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZVRpbWVzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VVbmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fY2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Nsb25lQXJyYXlCdWZmZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Nsb25lQnVmZmVyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jbG9uZVR5cGVkQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2NvcHlPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2NvcmVKc0RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2NyZWF0ZUFzc2lnbmVyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jcmVhdGVCYXNlRm9yLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19lcXVhbEJ5VGFnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19lcXVhbE9iamVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldEFsbEtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldE1hdGNoRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0U3ltYm9scy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0VGFnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRWYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzUGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzaENsZWFyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNoRGVsZXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNoR2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNoSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNoU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pbml0Q2xvbmVPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzSXRlcmF0ZWVDYWxsLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pc0tleWFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzTWFza2VkLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19saXN0Q2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbGlzdENhY2hlRGVsZXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19saXN0Q2FjaGVHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2xpc3RDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbGlzdENhY2hlU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBDYWNoZUNsZWFyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBDYWNoZURlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWFwQ2FjaGVHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBDYWNoZVNldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWFwVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWVtb2l6ZUNhcHBlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbmF0aXZlS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbmF0aXZlS2V5c0luLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19ub2RlVXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fb3ZlclJlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3NldENhY2hlQWRkLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zZXRDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc2V0VG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc2V0VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3Nob3J0T3V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zdGFja0NsZWFyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zdGFja0RlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RhY2tHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0YWNrSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zdGFja1NldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9jb25zdGFudC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9nZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaGFzSW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNBcnJheUxpa2VPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvbWVtb2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9tZXJnZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9zdHViQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvc3R1YkZhbHNlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL3RvUGxhaW5PYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9Db25uZWN0ZWRGaWVsZC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL0Nvbm5lY3RlZEZpZWxkQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9Db25uZWN0ZWRGaWVsZHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9GaWVsZC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL0ZpZWxkQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9GaWVsZHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9Gb3JtLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvRm9ybVNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9hc3luY1ZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9jcmVhdGVGaWVsZC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL2NyZWF0ZUZpZWxkQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9jcmVhdGVGaWVsZEFycmF5UHJvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9jcmVhdGVGaWVsZHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9jcmVhdGVGb3JtVmFsdWVTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL2NyZWF0ZVJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9jcmVhdGVSZWR1eEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9jcmVhdGVWYWx1ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9kZWxldGVJbldpdGhDbGVhblVwLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvZXZlbnRzL2dldFZhbHVlLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvZXZlbnRzL3NpbGVuY2VFdmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9mb3JtVmFsdWVTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL2dlbmVyYXRlVmFsaWRhdG9yLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvZ2V0Rm9ybUFzeW5jRXJyb3JzLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvZ2V0Rm9ybUluaXRpYWxWYWx1ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9nZXRGb3JtTWV0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL2dldEZvcm1OYW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL2dldEZvcm1TdWJtaXRFcnJvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9nZXRGb3JtU3luY0Vycm9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL2dldEZvcm1TeW5jV2FybmluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9nZXRGb3JtVmFsdWVzLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvaGFuZGxlU3VibWl0LmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvaGFzRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9oYXNTdWJtaXRGYWlsZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9oYXNTdWJtaXRTdWNjZWVkZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9pc0RpcnR5LmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvaXNJbnZhbGlkLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvaXNQcmlzdGluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL2lzUmVhY3ROYXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9pc1N1Ym1pdHRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9pc1ZhbGlkLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvcHJvcFR5cGVzLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL3JlZHV4Rm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL3NlbGVjdG9ycy9nZXRGb3JtQXN5bmNFcnJvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9zZWxlY3RvcnMvZ2V0Rm9ybUluaXRpYWxWYWx1ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9zZWxlY3RvcnMvZ2V0Rm9ybU1ldGEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9zZWxlY3RvcnMvZ2V0Rm9ybU5hbWVzLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvc2VsZWN0b3JzL2dldEZvcm1TdWJtaXRFcnJvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9zZWxlY3RvcnMvZ2V0Rm9ybVN5bmNFcnJvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9zZWxlY3RvcnMvZ2V0Rm9ybVN5bmNXYXJuaW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL3NlbGVjdG9ycy9nZXRGb3JtVmFsdWVzLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvc2VsZWN0b3JzL2hhc1N1Ym1pdEZhaWxlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL3NlbGVjdG9ycy9oYXNTdWJtaXRTdWNjZWVkZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9zZWxlY3RvcnMvaXNEaXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL3NlbGVjdG9ycy9pc0ludmFsaWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi9zZWxlY3RvcnMvaXNTdWJtaXR0aW5nLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvc3RydWN0dXJlL3BsYWluL2RlZXBFcXVhbC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL3N0cnVjdHVyZS9wbGFpbi9kZWxldGVJbi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL3N0cnVjdHVyZS9wbGFpbi9nZXRJbi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL3N0cnVjdHVyZS9wbGFpbi9rZXlzLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvc3RydWN0dXJlL3BsYWluL3NldEluLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvc3RydWN0dXJlL3BsYWluL3NwbGljZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LWZvcm0vbGliL3V0aWwvZXZlbnRDb25zdHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC1mb3JtL2xpYi91dGlsL2dldERpc3BsYXlOYW1lLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZm9ybS9saWIvdmFsdWVzLmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLXJlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWR1eC10aHVuay9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvbG9kYXNoL19mcmVlR2xvYmFsLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0UHJvdG90eXBlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb3ZlckFyZy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNQbGFpbk9iamVjdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBdUMsNkJBQTZCLFlBQVksRUFBRSxPQUFPLGlCQUFpQixtQkFBbUIsdUJBQXVCLDRFQUE0RSxFQUFFLEVBQUUsc0JBQXNCLGVBQWUsRUFBRTs7QUFFM1Esc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQjs7Ozs7O0FDNVZBLCtDOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQy9CQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNwQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxFQUFFO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDeEJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2pCQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7O0FDTEE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2hDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDaENBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7O0FDVkEsNkM7Ozs7Ozs7Ozs7Ozs7O0FDQzhDO0FBQ3BCO0FBQ2lCO0FBc0J6QjtBQUNaLElBQXFCO0FBQ1Qsb0JBQUU7QUFDRSxxRUFBSyxLQUN2QjtBQUFDO0FBQ0s7QUFBRSxlQUFtQyxVQUFTLFVBQVU7QUFDbEQsK0VBQVEsUUFBaUIsa0JBQVMsUUFDckMsS0FBUztBQUNGLHlCQUFDLEVBQU0sTUFDbkI7QUFDSjtBQUNIOztBQVY2QixDQUF2QjtBQVlQLElBQWtCO0FBQ04sY0FBTyxPQUFNLE1BQ3ZCO0FBRm1CO0FBSVg7QUFDSixJQUFjLFVBQXNCLGlCQUFnQixPQUFxQjtBQUMzRSxRQUFZLDZCQUFhO0FBQ25CLFlBQU8sT0FBTztBQUNoQixhQUFZO0FBQ0EscUJBQVMsV0FBUTtBQUNqQixxQkFBSyxPQUFTLE9BQU07QUFDdEIsbUJBQVU7QUFDcEIsYUFBYTtBQUNELHFCQUFTLFdBQVM7QUFDbEIscUJBQUssT0FBUTtBQUNmLG1CQUFVO0FBQ3BCO0FBQ0ssZ0JBQXFCLGtCQUM3Qjs7QUFDcUc7QUFDbkQ7QUFDN0MsV0FBTSxTQUNoQjtBQUFDLENBakJNLEM7Ozs7OztBQzNDUDs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNKQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQzFCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYixXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDM0JBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNyQkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDNUJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNwQkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsa0JBQWtCLEVBQUU7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxrQkFBa0IsRUFBRTtBQUNsRTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNuQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQ3JDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ3BDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2xDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUNwQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEY7Ozs7Ozs7QUN2Q0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUEsZ0M7Ozs7OztBQ3ZEQSwrQzs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ErQjtBQUNZO0FBQ2Y7QUFHZDs7SUFBcUI7OztBQUUvQixrQkFBaUI7QUFDUjs7Z0hBQVE7O0FBQ1QsY0FBUyxXQUFPLE1BQVMsU0FBWTtBQUNyQyxjQUFXLGFBQU8sTUFBVyxXQUFZO0FBQ3pDLGNBQWEsZUFBTyxNQUFhLGFBQ3pDOztBQUVhOzs7OztBQUNILGdCQUFnQixlQUFPLEtBQU87O0FBQzdCO0FBQ0Y7a0JBQVUsVUFBYSxhQUFLLEtBQzdCO0FBQUsscUJBQ0w7QUFBSyxxQkFFYjs7QUFLcUI7OztvQ0FBSyxNQUFNLE1BQU87Z0JBQVUsK0VBQVE7O0FBQy9DLG1CQUFDLHFEQUFNLDJEQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU8sT0FBTyxPQUFVLFVBQ2pFO0FBRTRCOzs7MkNBQU07QUFDeEIsbUJBQUMscURBQU0sMkRBQUssTUFBUyxVQUFPLE9BQU8sT0FBVSxVQUFLLEtBQU0sTUFDbEU7QUFBQztBQU15Qjs7OzttQ0FBUSxTQUFROztBQUN0Qzs7Ozs7O3VDQUEyQixtRUFBUSxRQUFRLFNBQVEsUUFDaEQ7OztBQURVOztxQ0FDSCxPQUFrQjs7Ozs7QUFDaEIscUNBQWEsYUFFZjs7Ozs7aUVBQ2I7Ozs7Ozs7OztBQUFBO0FBR3FCOzs7O3FDQUFPO0FBQ3pCLGdCQUFTLFFBQUcsRUFBUSxRQUFRLE9BQWlCLGlCQUFNO0FBQ25ELGtCQUFNLElBQW1CLDREQUM3QjtBQUFDO0FBR3lCOzs7OztBQUN0QixnQkFBVSxTQUFPLEtBQU0sTUFBTztBQUMzQixnQkFBUTtBQUNLO2tCQUFVLFdBQ2xCO0FBQU8sdUJBQUksY0FBTyxPQUFPO0FBQWI7QUFBb0I7MEJBQUssS0FBUTtBQUV6RDs7O2FBSGU7QUFJbEI7Ozs7RUF2RCtDLGdEQUEwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0wzQztBQUNPO0FBRUc7QUFDTDtBQUlwQzs7SUFBWTs7Ozs7Ozs7Ozs7NkNBSVIsQ0FFYTs7OztBQUNOLGdCQUFLLEtBQU0sTUFBVSxVQUNkLE9BQUssS0FDWCxvQkFDTSxPQUFLLEtBQ25CO0FBRWtCOzs7O0FBQ1A7QUFFQzs7QUFDQTs7Ozs7QUFBQSxxRUFDQTtBQUNBO0FBQUc7Ozs7QUFBMEI7QUFBSzswQkFBRyxJQUdqRDs7Ozs7QUFFbUI7Ozs7QUFDUjtBQUNLOztBQUNBOzs7OztBQUFPOztzQkFBUyxTQUFLLEtBQU0sTUFFM0M7Ozs7QUFDSDs7OztFQTlCd0IsZ0RBRUg7O0FBOEJ0QiwrSUFDNEI7QUFBeEIsV0FBa0MsTUFBSTtDQURwQixFQUVWLGtFQUNYLEVBQVEsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDaUI7QUFFMUIsSUFBbUI7QUFDSCxjQUFxQztBQUMvQixvQkFDcEI7QUFIb0I7QUFLdEIsSUFBd0IscUJBU1Y7Ozs7Ozs7Ozs7QUFHaUI7Z0NBQVEsU0FBUTtnQkFBYSxrRkFBTzs7O0FBQzNEOzs7OztBQUFTLHdDQUFTLE9BRVo7OENBQ0Y7Z0VBQVcsNkJBSVg7Ozs7QUFIZSw4Q0FBTyxLQUFjLGNBQVksYUFFaEQ7Ozs7QUFFZSw4Q0FBTyxLQUFjLGNBR2pDOzs7OzZDQUFtQixTQUFjLGFBQUs7QUFBUywyQ0FBWSxTQUNyRTtpQ0FEcUI7Ozs7Ozs7Ozs7OztBQUdNOzs7c0NBQUs7Z0JBQWUsb0ZBQVE7O0FBQ3BELGdCQUFPO0FBQ0csd0JBQWU7QUFDZCx5QkFBZTtBQUNYLDZCQUNiO0FBSnVCO0FBS3RCLGdCQUFLLFFBQVMsTUFDVixJQUFLLE9BQU8sS0FBVSxVQUFPO0FBRTlCLG1CQUNWO0FBQ0g7Ozs7Ozs7Ozs7OztBQzdDRDs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsUUFBUTtBQUNuQixhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLFNBQVM7QUFDcEIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ3BCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsRUFBRTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDbkJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxTQUFTO0FBQ3BCLGFBQWEsT0FBTztBQUNwQjtBQUNBOztBQUVBOzs7Ozs7O0FDZkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLGFBQWE7QUFDeEIsYUFBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsT0FBTztBQUNsQixhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxNQUFNO0FBQ2pCLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNuQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNsRkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxFQUFFO0FBQ2IsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDbkJBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDs7Ozs7OztBQzNCQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUN6QkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYixXQUFXLFNBQVM7QUFDcEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUN4Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDL0JBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLCtCQUErQjtBQUNoRCxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLG1DQUFtQyxjQUFjLEVBQUU7QUFDbkQsVUFBVSwyQkFBMkI7QUFDckM7QUFDQTtBQUNBO0FBQ0EsVUFBVSwyQkFBMkI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBOzs7Ozs7O0FDMUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUMzQkE7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLGlEQUFpRCxhQUFhLHVGQUF1RixFQUFFLHVGQUF1Rjs7QUFFOU8sMENBQTBDLCtEQUErRCxxR0FBcUcsRUFBRSx5RUFBeUUsZUFBZSx5RUFBeUUsRUFBRSxFQUFFLHVIQUF1SDs7QUFFNWU7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQsa0M7Ozs7Ozs7QUNqQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQSxtREFBbUQsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELDJCQUEyQixFQUFFLEVBQUUsRUFBRSxlQUFlOztBQUU5UDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHlDQUF5QztBQUNwRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVywyQkFBMkI7QUFDdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLHVDQUF1QywyREFBMkQ7QUFDNUc7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVywyQkFBMkI7QUFDdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsMkJBQTJCO0FBQ3RDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHlDQUF5QztBQUNwRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyx5RkFBeUY7QUFDcEc7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVSx5Q0FBeUMsYUFBYTtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBLGlFQUFpRSxhQUFhO0FBQzlFO0FBQ0E7O0FBRUEsVUFBVSxvQ0FBb0MsYUFBYTtBQUMzRDs7QUFFQTtBQUNBLFVBQVUsa0NBQWtDLDJCQUEyQjtBQUN2RTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixtQ0FBbUM7QUFDdkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBLFVBQVUsa0NBQWtDLGFBQWE7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQSxVQUFVLHlDQUF5QyxhQUFhO0FBQ2hFOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVLG1DQUFtQyxhQUFhO0FBQzFEOztBQUVBO0FBQ0EsMEZBQTBGLGVBQWU7QUFDekc7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyw2QkFBNkI7QUFDeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEZBQTBGLGVBQWU7QUFDekc7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyw2QkFBNkI7QUFDeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEZBQTBGLGVBQWU7QUFDekc7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQSwwRkFBMEYsZUFBZTtBQUN6RztBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsY0FBYztBQUNkO0FBQ0EsRTs7Ozs7OztBQzNSQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxtREFBbUQsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELDJCQUEyQixFQUFFLEVBQUUsRUFBRSxlQUFlOztBQUU5UCw4Q0FBOEMsaUJBQWlCLHFCQUFxQixvQ0FBb0MsNkRBQTZELG9CQUFvQixFQUFFLGVBQWU7O0FBRTFOO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHVCQUF1QjtBQUN2QjtBQUNBOztBQUVBLG1DOzs7Ozs7O0FDakhBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkM7Ozs7Ozs7QUMzQkE7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7O0FDbkJBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBLDBCOzs7Ozs7O0FDVEE7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxnQzs7Ozs7OztBQ3JDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0I7Ozs7Ozs7QUNwQkE7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQzs7Ozs7OztBQ3RCQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUM7Ozs7OztBQzVCQSwrQzs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7Ozs7OztBQ0FxRztBQUNyRTtBQUNtQjtBQUNsQjtBQUVuQix3QkFBOEQ7QUFDMEI7QUFDbEcsUUFBcUIsa0JBQUcsT0FBYSxXQUFnQixjQUFPLE9BQWlCO0FBQ25DO0FBQzFDLFFBQXVCLG9CQUFrQixtQkFBbUIsZ0JBQWlEO0FBQzdHLFFBQStCLGtHQUNaLDhFQUFPLHNEQUNMLG9CQUFzQjtBQUFJLGVBQzlDO0tBSHdDLEVBRzFCO0FBRW9EO0FBQ25FLFFBQWlCLGNBQW1CLGlCQUFNLHdEQUFXO0FBQ3JELFFBQVcsUUFBNEIsMEJBQVksYUFBdUQ7QUFFckQ7QUFDbEQsUUFBTyxLQUFLLEVBQUU7QUFDUCxlQUFJLElBQU8sT0FBVSxXQUFFO0FBQ3pCLGdCQUFxQixrQkFBVSxRQUEwQjtBQUNwRCxrQkFBZSxlQUFpQixpQkFBZ0IsZ0JBQ3pEO0FBQ0o7QUFBQztBQUVLLFdBQ1Y7QUFBQztBQUVELDBCQUFxQztBQUMzQixXQUFnQiw4RUFBK0IsT0FBTyxPQUFHLElBQWEsYUFBRSxFQUFTLFNBQzNGO0FBQUMsQzs7Ozs7Ozs7Ozs7Ozs7O0FDaEM4QjtBQUMyQjtBQUNiO0FBQ1I7QUFDRTtBQUNNO3lEQUc3QztBQUFxQjtBQUFOLE1BQWlCLFdBQzVCO0FBQUEseURBQU0sdURBQUssTUFBSSxLQUFZLFlBQUMsRUFBTSxNQUNsQztBQUFBLHlEQUFNLHVEQUFLLE1BQVMsVUFBWSxZQUFDLEVBQU0sTUFDdkM7QUFBQSx5REFBTSx1REFBSyxNQUFZLGFBQVksWUFBQyxFQUFNLE1BQ3JDOztBQUU2QjtBQUNuQyxJQUFPLEtBQUssRUFBRTtBQUNQLFdBQUksSUFDZDtBQUFDLEM7Ozs7OztBQ2pCRCwrQzs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQStCO0FBQ1E7QUFDVztBQUNFO0FBRXFCO0FBQzNDO0FBQ2dCO0FBRTlDLGdLQUEwQztBQUNoQyxlQUFZLFFBQWUsVUFBUSxTQUFRO0FBQ3VCO0FBQ3BFLFlBQVcsUUFBb0I7QUFDMUIsbUZBQUMsRUFBUSxrRUFBVSxVQUFRLE9BQVcsWUFBRSxVQUFNLE9BQWtCLGtCQUFrQjtBQUNoRixnQkFBTyxPQUFFO0FBQ1Isc0JBQ0o7QUFBQztBQUVtRjtBQUNqRixnQkFBa0Isa0JBQUU7QUFDWix3QkFBQyxFQUFhLGFBQWtCLGlCQUFhO0FBRXhEO0FBQUM7QUFFNkQ7QUFDM0QsZ0JBQUMsQ0FBYSxhQUFFO0FBQ2Ysc0JBQU0sSUFBVSwwQkFBd0IsT0FDNUM7QUFBQztBQUVzQztBQUN2QyxnQkFBWTtBQUNDO0FBQVQsa0JBQWdCLE9BQ1o7QUFBQSxxRUFBZSw2REFFckI7O0FBRXVGO0FBQzNFLG9HQUFNO0FBRXVDO0FBQzBDO0FBQy9GLG1CQUFZLFlBQUssS0FBQztBQUNiO0FBQ0MsMEJBQWdCLHdGQUFLO0FBQ2xCLDZCQUFFLEVBQW1CLG1CQUFPLE1BRTNDO0FBSlk7QUFJWCxlQUFVLFNBQ2Y7QUFDSjtBQUNKLEtBdkNXO0FBdUNSLENBeENnQyxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEo7QUFDSTtBQUdyQjs7SUFBZ0I7OztBQUUxQixzQkFBaUI7QUFDUjs7bUhBQ1Q7QUFFYTs7Ozs7QUFDRixvQkFBSyxLQUFNLE1BQU87QUFDckIscUJBQVk7QUFDWixxQkFBZTtBQUNMLDJCQUFLLEtBQW1CO0FBQ2xDLHFCQUFlO0FBQ0wsMkJBQUssS0FBdUI7QUFDdEMscUJBQWE7QUFDSCwyQkFBSyxLQUEyQjtBQUMxQztBQUNVLDJCQUVsQjs7QUFFdUI7Ozs7QUFDWixtQkFDQyxxREFBTSxxREFBTSxNQUFLLEtBQU0sTUFBTSxNQUFXLFdBQUssS0FBYSxhQUFNLE1BQUssS0FBTSxNQUFNLE1BQzNFLE9BQUssS0FBTSxNQUFPLE9BQWEsYUFBSyxLQUFNLE1BQU8sT0FBVSxVQUFLLEtBQVMsU0FBSyxLQUFNLE1BRXRHO0FBRTJCOzs7O0FBQ2hCO0FBQ0E7a0JBQVUsV0FDVDtBQUFNOztzQkFBVSxXQUFtQixvQkFBUyxTQUFLLEtBQU0sTUFDbkQ7QUFBQSx5RUFBTSxxREFBTSxNQUFLLEtBQU0sTUFBTSxNQUFVLFdBQW1CLG9CQUFVLFdBQVEsU0FBSyxNQUFlOztBQUFLLHlCQUFNLE1BSTNIOzs7QUFFK0I7Ozs7QUFDcEIsbUJBQ08sZ0VBQUssTUFBUyxVQUFVLFdBQWtCLG1CQUFPLE9BQUssS0FBTSxNQUFPLE9BQ2hFLFVBQUssS0FBTSxNQUVoQztBQUVtQjs7O29DQUFNO0FBQ2Q7QUFDQztrQkFBVSxXQUNWO0FBQU87OztBQUFNLDBCQUNiOztBQUFPLDJGQUFTLE1BQU8sU0FBVSxXQUFlLGdCQUFhLGFBQU0sTUFBTyxPQUFNLE1BQU0sTUFDdEY7QUFBTSxzQkFBSyxLQUFZLFdBQU0sTUFBSyxLQUFNO0FBQVM7c0JBQVUsV0FBeUI7QUFBTSwwQkFBSyxLQUczRzs7O0FBRWdCOzs7aUNBQU07OztBQUNaLG1CQUFDLFVBQU0sT0FBVztBQUNkLHVCQUFjLHNHQUFLLE9BQU0sTUFBSyxNQUFPLE9BQy9DO0FBQ0o7QUFDSDs7OztFQTNEMEMsZ0RBQTBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKdEM7QUFDZTtBQUNQO0FBR3ZDOztJQUFnQjs7Ozs7Ozs7Ozs7O0FBR0Q7QUFFQzs7QUFBSyxxQkFBWSxZQUFRLFNBQVEsUUFDakM7QUFBSyxxQkFBWSxZQUFXLFlBQVksWUFDeEM7QUFBSyxxQkFBWSxZQUFXLFlBQVksWUFDeEM7QUFBSyxxQkFBbUIsbUJBR3BDOztBQUV3Qjs7O2lDQUFPOztBQUNwQjs7Ozs7dUNBQVUsS0FBVyxXQUFnQixpQkFDL0M7Ozs7Ozs7Ozs7OztBQUNKOzs7O0VBZDhCOztBQWdCL0I7QUFDUSxVQUFTO0FBQ1AsWUFBRSxDQUFRLFNBQVksWUFBYTtBQUMxQixxQkFBRSx5QkFBTyxRQUFVLFVBQU87QUFDN0I7QUFDQSxrQkFBUztBQUNULGtCQUFRLE9BQ2I7QUFITTtBQUlLLHFFQUFLLEtBQU8sT0FDOUI7QUFDRjtBQVZ1QixDQUFELEVBVVYsWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ2lCO0FBQ0s7QUFFOUIsSUFBZTs7Ozs7Ozs7Ozs7O0FBRVA7QUFBSztrQkFBVSxXQUNiO0FBQUk7O3NCQUFVLFdBQ2Q7QUFBSTs7MEJBQVUsV0FDVjtBQUFPOzs4QkFBSyxNQUFTLFVBQVUsV0FBZ0IsaUJBQVksZUFBVyxZQUFZLGVBQzlFO0FBQUs7O2tDQUFVLFdBQ2Y7OztBQUFLLDJGQUFVLFdBQ2Y7QUFBSywyRkFBVSxXQUNmO0FBQUssMkZBQVUsV0FFbkI7O0FBQUE7QUFBSzs4QkFBVSxXQUFlLGdCQUFJLElBRXRDOzs7O0FBQUksa0ZBQVUsV0FDZDtBQUFJOzswQkFBVSxXQUNWO0FBQUc7OzhCQUFVLFdBQ1Q7QUFDSTs7O0FBQUE7QUFBSztzQ0FBSSxJQUFPLEtBQWdCLGlCQUM1QjtBQUFLLG1HQUFVLFdBTzNDOzs7Ozs7OztBQUNIOzs7O0VBMUJpQyxnREFDakIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pjO0FBQ2U7QUFDUDtBQUd2Qzs7SUFBbUI7Ozs7Ozs7Ozs7OztBQUdKO0FBRUM7O0FBQUsscUJBQVksWUFBWSxhQUFRLFFBQ3JDO0FBQUsscUJBQVksWUFBVyxZQUFRLFFBQ3BDO0FBQUsscUJBQVksWUFBUSxTQUFRLFFBQ2pDO0FBQUsscUJBQVksWUFBYSxjQUFRLFFBQ3RDO0FBQUsscUJBQVksWUFBVyxZQUFZLFlBQ3hDO0FBQUsscUJBQVksWUFBa0IsbUJBQVksWUFDL0M7QUFBSyxxQkFBbUIsbUJBR3BDOztBQUV3Qjs7O2lDQUFPOztBQUNwQjs7Ozs7dUNBQVUsS0FBVyxXQUFtQixvQkFDbEQ7Ozs7Ozs7Ozs7OztBQUNKOzs7O0VBakI4Qjs7QUFtQi9CO0FBQ1EsVUFBWTtBQUNWLFlBQUUsQ0FBWSxhQUFZLFlBQVMsU0FBYyxjQUFhO0FBQ3JELHFCQUFFLHlCQUFPLFFBQVUsVUFBTztBQUM3QjtBQUNBLGtCQUFTO0FBQ1Qsa0JBQVEsT0FDYjtBQUhNO0FBSUsscUVBQUssS0FBTyxPQUM5QjtBQUNGO0FBVnVCLENBQUQsRUFVUCxlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ2M7QUFDTztBQUVHO0FBSXpDOztJQUFXOzs7Ozs7Ozs7Ozs7QUFHSTtBQUVDOztBQUNBOzs7OztBQUNBO0FBQUEscUVBR1o7O0FBQ0g7Ozs7RUFYdUIsZ0RBRVA7O0FBV2pCLCtJQUM0QjtBQUF4QixXQUFrQyxNQUFJO0NBRHBCLEVBRVYsa0VBQ1gsRUFBTyxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJ1QjtBQUNpQjtBQU0xQyxJQUFjOzs7Ozs7Ozs7Ozs7QUFFTjtBQUFLO2tCQUFVLFdBQ2pCO0FBQUk7O3NCQUFVLFdBQ1Y7QUFBSTs7MEJBQVUsV0FDVjtBQUFBLDZFQUVKOztBQUFJOzswQkFBVSxXQUNWO0FBQU0sNkJBQU0sTUFJNUI7Ozs7QUFDSDs7OztFQWJnQyxnREFDaEIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUmM7QUFHakI7O0lBQWdCOzs7Ozs7Ozs7Ozs7QUFHWDtBQUNIOztBQUNBOzs7OztBQUNBOzs7OztBQUNBO0FBQUEscUVBRVo7O0FBQ0g7Ozs7RUFWMEMsZ0RBRTFCOzs7Ozs7Ozs7QUNMakI7QUFBQSxJQUFrQixlQUFPO0FBQ2xCLFFBQUMsQ0FBTSxNQUNBLE9BQXFCO0FBQzVCLFFBQUssS0FBTyxTQUFLLEdBQ1YsT0FBZTtBQUNuQixXQUNWO0FBQUM7QUFFRCxJQUFzQixtQkFBTztBQUN0QixRQUFDLENBQU0sTUFDQSxPQUFxQjtBQUN6QixXQUNWO0FBQUM7QUFFRCxJQUFtQixnQkFBUTtBQUNwQixRQUFDLENBQU8sT0FDRCxPQUFxQjtBQUM1QixRQUFDLENBQTRDLDRDQUFLLEtBQVEsUUFDbkQsT0FBa0I7QUFDdEIsV0FDVjtBQUFDO0FBRUQsSUFBd0IscUJBQWE7QUFDM0IsV0FDVjtBQUFDO0FBRUQsSUFBc0IsbUJBQUcsMEJBQVM7QUFDM0IsUUFBQyxDQUFVLFVBQ0osT0FBcUI7QUFDekIsV0FDVjtBQUFDO0FBRUQsSUFBNkIsMEJBQUcsaUNBQU87QUFDaEMsUUFBTyxPQUFZLGVBQVUsT0FBb0Isb0JBQzFDLE9BQWtDO0FBQ3RDLFdBQ1Y7QUFBQztBQUVELElBQW9CLGlCQUFTO0FBQ25CLFdBQ1Y7QUFBQztBQUVELElBQXFCO0FBQ1YsYUFBZTtBQUNoQixZQUFjO0FBQ1QsaUJBQWM7QUFDZixnQkFBYztBQUNaLGtCQUFvQjtBQUN0QixnQkFBa0I7QUFDWCx1QkFBeUI7QUFDaEMsZ0JBQWtCO0FBQ3BCLGNBQWdCO0FBQ2QsZ0JBQ2I7QUFYdUI7QUFhbEIsSUFBb0IsZ0JBQUcsdUJBQU0sT0FBTyxPQUFXO0FBQzlDLFFBQU0sU0FBc0IsbUJBQ3JCLE9BQWdCLGdCQUFPLE9BQVk7QUFDdkMsV0FBZ0IsZ0JBQU8sT0FDakM7QUFBQyxDQUpNLEM7Ozs7Ozs7Ozs7O0FDdkRrRDtBQUM1QjtBQVF5RTtBQUNFO0FBQzVDO0FBQ3RELElBQWU7QUFDZCxTQUFLLHFEQUFRO0FBQ1osVUFDTjtBQUhzQixDQUFqQixDOzs7Ozs7O0FDWlA7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQsaURBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdkosaURBQWlELGFBQWEsdUZBQXVGLEVBQUUsdUZBQXVGOztBQUU5TywwQ0FBMEMsK0RBQStELHFHQUFxRyxFQUFFLHlFQUF5RSxlQUFlLHlFQUF5RSxFQUFFLEVBQUUsdUhBQXVIOztBQUU1ZTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOzs7Ozs7O0FDOUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDL0JBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7OztBQ05BO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7OztBQ05BO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUMxQkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixXQUFXLEVBQUU7QUFDYixXQUFXLE1BQU07QUFDakIsYUFBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLFNBQVM7QUFDcEIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsTUFBTTtBQUNqQixhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxTQUFTO0FBQ3BCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDdEJBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxFQUFFO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQzNCQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7QUM3QkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDZkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsU0FBUztBQUNwQixhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLGFBQWE7QUFDeEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDWkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsU0FBUztBQUNwQixXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNsRkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsTUFBTTtBQUNqQixXQUFXLFNBQVM7QUFDcEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7O0FBRXBDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQzlDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQzlCQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNoQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxFQUFFO0FBQ2IsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOzs7Ozs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsU0FBUztBQUNwQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQy9HQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNB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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RUFBNkU7QUFDN0Usa0ZBQWtGO0FBQ2xGO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1Qjs7QUFFdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxzQkFBc0IsbUNBQW1DO0FBQ3pEO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGdDOzs7Ozs7O0FDbmhCQTs7QUFFQTtBQUNBO0FBQ0EsQ0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEscUhBQXFILEtBQUssd0ZBQXdGLEtBQUs7QUFDdk47QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxvR0FBb0csdUVBQXVFO0FBQzNLO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsMkdBQTJHLDhDQUE4Qyw2QkFBNkIsbUZBQW1GLDBCQUEwQjtBQUNuUztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSx5SUFBeUksZ0RBQWdELDZCQUE2Qix5RkFBeUYsMEJBQTBCO0FBQ3pVLGVBQWU7QUFDZjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxrQ0FBa0MsNkJBQTZCO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLHlDQUF5QyxvQ0FBb0M7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLE9BQU8sY0FBYyxnQkFBZ0I7QUFDckM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1RUFBdUU7QUFDdkU7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBLGtDOzs7Ozs7O0FDbjRCQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxtREFBbUQsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELDJCQUEyQixFQUFFLEVBQUUsRUFBRSxlQUFlOztBQUU5UDs7QUFFQSwyQ0FBMkMsa0JBQWtCLGtDQUFrQyxxRUFBcUUsRUFBRSxFQUFFLE9BQU8sa0JBQWtCLEVBQUUsWUFBWTs7QUFFL007QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0I7QUFDL0IsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQSwrQjs7Ozs7OztBQ2xDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsNEM7Ozs7Ozs7QUNqREE7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix3QkFBd0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJCOzs7Ozs7O0FDdERBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0Esc0ZBQXNGLGFBQWE7QUFDbkc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZ0M7Ozs7Ozs7QUN0QkE7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLDBFOzs7Ozs7O0FDaEJBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQSxvQzs7Ozs7OztBQ3pDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0YscUU7Ozs7Ozs7QUNoQkE7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLHVFOzs7Ozs7O0FDaEJBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3Riw4RDs7Ozs7OztBQ2hCQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0YsK0Q7Ozs7Ozs7QUNoQkE7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLHNFOzs7Ozs7O0FDaEJBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RixvRTs7Ozs7OztBQ2hCQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Ysc0U7Ozs7Ozs7QUNoQkE7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLGdFOzs7Ozs7O0FDaEJBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RixrQ0FBa0MsMEJBQTBCLDBDQUEwQyxnQkFBZ0IsT0FBTyxrQkFBa0IsRUFBRSxhQUFhLEVBQUUsT0FBTyx3QkFBd0IsRUFBRTs7QUFFak07QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxxREFBcUQ7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQjs7Ozs7OztBQy9HQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBLGlDOzs7Ozs7O0FDakNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RixrRTs7Ozs7OztBQ2hCQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0YscUU7Ozs7Ozs7QUNoQkE7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLDBEOzs7Ozs7O0FDaEJBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3Riw0RDs7Ozs7OztBQ2hCQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0YsNkQ7Ozs7Ozs7QUNoQkE7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQSxnQzs7Ozs7OztBQ1BBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RiwrRDs7Ozs7OztBQ2hCQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0YsMEQ7Ozs7Ozs7QUNoQkE7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRCOzs7Ozs7O0FDMUdBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RixnRTs7Ozs7OztBQ2hCQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Ysa0U7Ozs7Ozs7QUNoQkE7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJDOzs7Ozs7O0FDakJBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2Qzs7Ozs7OztBQ2pCQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0M7Ozs7Ozs7QUNqQkE7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUM7Ozs7Ozs7QUNsQkE7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRDOzs7Ozs7O0FDakJBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQzs7Ozs7OztBQ2pCQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEM7Ozs7Ozs7QUNqQkE7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNDOzs7Ozs7O0FDakJBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7O0FDbEJBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJDOzs7Ozs7O0FDbEJBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdDOzs7Ozs7O0FDckJBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVB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RUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLCtEOzs7Ozs7QUNoQkEsK0M7Ozs7OztBQ0FBLCtDOzs7Ozs7QUNBQSwrQzs7Ozs7O0FDQUEsK0M7Ozs7OztBQ0FBLCtDOzs7Ozs7QUNBQSw4Qzs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoibWFpbi1zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDgyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA4MzRkYTM4MTIwYWEwZTU0YTZiNyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9zcGxpY2UgPSByZXF1aXJlKCcuL3NwbGljZScpO1xuXG52YXIgX3NwbGljZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zcGxpY2UpO1xuXG52YXIgX2dldEluID0gcmVxdWlyZSgnLi9nZXRJbicpO1xuXG52YXIgX2dldEluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldEluKTtcblxudmFyIF9zZXRJbiA9IHJlcXVpcmUoJy4vc2V0SW4nKTtcblxudmFyIF9zZXRJbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zZXRJbik7XG5cbnZhciBfZGVlcEVxdWFsID0gcmVxdWlyZSgnLi9kZWVwRXF1YWwnKTtcblxudmFyIF9kZWVwRXF1YWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVlcEVxdWFsKTtcblxudmFyIF9kZWxldGVJbiA9IHJlcXVpcmUoJy4vZGVsZXRlSW4nKTtcblxudmFyIF9kZWxldGVJbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWxldGVJbik7XG5cbnZhciBfa2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG52YXIgX2tleXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfa2V5cyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBzdHJ1Y3R1cmUgPSB7XG4gIGFsbG93c0FycmF5RXJyb3JzOiB0cnVlLFxuICBlbXB0eToge30sXG4gIGVtcHR5TGlzdDogW10sXG4gIGdldEluOiBfZ2V0SW4yLmRlZmF1bHQsXG4gIHNldEluOiBfc2V0SW4yLmRlZmF1bHQsXG4gIGRlZXBFcXVhbDogX2RlZXBFcXVhbDIuZGVmYXVsdCxcbiAgZGVsZXRlSW46IF9kZWxldGVJbjIuZGVmYXVsdCxcbiAgZnJvbUpTOiBmdW5jdGlvbiBmcm9tSlModmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH0sXG4gIGtleXM6IF9rZXlzMi5kZWZhdWx0LFxuICBzaXplOiBmdW5jdGlvbiBzaXplKGFycmF5KSB7XG4gICAgcmV0dXJuIGFycmF5ID8gYXJyYXkubGVuZ3RoIDogMDtcbiAgfSxcbiAgc3BsaWNlOiBfc3BsaWNlMi5kZWZhdWx0LFxuICB0b0pTOiBmdW5jdGlvbiB0b0pTKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBzdHJ1Y3R1cmU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4LWZvcm0vbGliL3N0cnVjdHVyZS9wbGFpbi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL3ZlbmRvclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIi4vdmVuZG9yXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoNSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0L3JlYWN0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0FycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDk2KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoMjIwKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvbG9kYXNoL19yb290LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgxNTEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc09iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgxNTMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUlzTmF0aXZlID0gcmVxdWlyZSgnLi9fYmFzZUlzTmF0aXZlJyksXG4gICAgZ2V0VmFsdWUgPSByZXF1aXJlKCcuL19nZXRWYWx1ZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBtZXRob2QgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZ1bmN0aW9uIGlmIGl0J3MgbmF0aXZlLCBlbHNlIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBnZXROYXRpdmUob2JqZWN0LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gZ2V0VmFsdWUob2JqZWN0LCBrZXkpO1xuICByZXR1cm4gYmFzZUlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE5hdGl2ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldE5hdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgyMjEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBJTkZJTklUWSA9IDEgLyAwO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcga2V5IGlmIGl0J3Mgbm90IGEgc3RyaW5nIG9yIHN5bWJvbC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtzdHJpbmd8c3ltYm9sfSBSZXR1cm5zIHRoZSBrZXkuXG4gKi9cbmZ1bmN0aW9uIHRvS2V5KHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycgfHwgaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHZhciByZXN1bHQgPSAodmFsdWUgKyAnJyk7XG4gIHJldHVybiAocmVzdWx0ID09ICcwJyAmJiAoMSAvIHZhbHVlKSA9PSAtSU5GSU5JVFkpID8gJy0wJyA6IHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b0tleTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3RvS2V5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFBlcmZvcm1zIGFcbiAqIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmUgZXF1aXZhbGVudC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5lcShvYmplY3QsIG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcShvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcSgnYScsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcSgnYScsIE9iamVjdCgnYScpKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcShOYU4sIE5hTik7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGVxKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gdmFsdWUgPT09IG90aGVyIHx8ICh2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvZXEuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMudW50b3VjaCA9IGV4cG9ydHMudW5yZWdpc3RlckZpZWxkID0gZXhwb3J0cy50b3VjaCA9IGV4cG9ydHMuc3VibWl0ID0gZXhwb3J0cy5zdG9wU3VibWl0ID0gZXhwb3J0cy5zdG9wQXN5bmNWYWxpZGF0aW9uID0gZXhwb3J0cy5zdGFydFN1Ym1pdCA9IGV4cG9ydHMuc3RhcnRBc3luY1ZhbGlkYXRpb24gPSBleHBvcnRzLnNldFN1Ym1pdFN1Y2NlZWRlZCA9IGV4cG9ydHMuc2V0U3VibWl0RmFpbGVkID0gZXhwb3J0cy5yZXNldCA9IGV4cG9ydHMucmVnaXN0ZXJGaWVsZCA9IGV4cG9ydHMuaW5pdGlhbGl6ZSA9IGV4cG9ydHMuZm9jdXMgPSBleHBvcnRzLmRlc3Ryb3kgPSBleHBvcnRzLmNsZWFyU3VibWl0RXJyb3JzID0gZXhwb3J0cy5jaGFuZ2UgPSBleHBvcnRzLmJsdXIgPSBleHBvcnRzLmF1dG9maWxsID0gZXhwb3J0cy5hcnJheVVuc2hpZnQgPSBleHBvcnRzLmFycmF5U3dhcCA9IGV4cG9ydHMuYXJyYXlTcGxpY2UgPSBleHBvcnRzLmFycmF5U2hpZnQgPSBleHBvcnRzLmFycmF5UmVtb3ZlQWxsID0gZXhwb3J0cy5hcnJheVJlbW92ZSA9IGV4cG9ydHMuYXJyYXlQdXNoID0gZXhwb3J0cy5hcnJheVBvcCA9IGV4cG9ydHMuYXJyYXlNb3ZlID0gZXhwb3J0cy5hcnJheUluc2VydCA9IGV4cG9ydHMuYWN0aW9ucyA9IGV4cG9ydHMuYWN0aW9uVHlwZXMgPSBleHBvcnRzLnZhbHVlcyA9IGV4cG9ydHMucmVkdWNlciA9IGV4cG9ydHMucmVkdXhGb3JtID0gZXhwb3J0cy5oYXNTdWJtaXRGYWlsZWQgPSBleHBvcnRzLmhhc1N1Ym1pdFN1Y2NlZWRlZCA9IGV4cG9ydHMuaXNTdWJtaXR0aW5nID0gZXhwb3J0cy5pc1ZhbGlkID0gZXhwb3J0cy5pc1ByaXN0aW5lID0gZXhwb3J0cy5pc0ludmFsaWQgPSBleHBvcnRzLmlzRGlydHkgPSBleHBvcnRzLmdldEZvcm1TdWJtaXRFcnJvcnMgPSBleHBvcnRzLmdldEZvcm1TeW5jV2FybmluZ3MgPSBleHBvcnRzLmdldEZvcm1Bc3luY0Vycm9ycyA9IGV4cG9ydHMuZ2V0Rm9ybU1ldGEgPSBleHBvcnRzLmdldEZvcm1TeW5jRXJyb3JzID0gZXhwb3J0cy5nZXRGb3JtSW5pdGlhbFZhbHVlcyA9IGV4cG9ydHMuZ2V0Rm9ybVZhbHVlcyA9IGV4cG9ydHMuZ2V0Rm9ybU5hbWVzID0gZXhwb3J0cy5mb3JtVmFsdWVTZWxlY3RvciA9IGV4cG9ydHMuRmllbGRBcnJheSA9IGV4cG9ydHMuRmllbGRzID0gZXhwb3J0cy5GaWVsZCA9IGV4cG9ydHMuZmllbGRQcm9wVHlwZXMgPSBleHBvcnRzLmZpZWxkTWV0YVByb3BUeXBlcyA9IGV4cG9ydHMuZmllbGRJbnB1dFByb3BUeXBlcyA9IGV4cG9ydHMucHJvcFR5cGVzID0gZXhwb3J0cy5TdWJtaXNzaW9uRXJyb3IgPSBleHBvcnRzLkZvcm1TZWN0aW9uID0gZXhwb3J0cy5Gb3JtID0gZXhwb3J0cy5kZWZhdWx0U2hvdWxkVmFsaWRhdGUgPSBleHBvcnRzLmRlZmF1bHRTaG91bGRBc3luY1ZhbGlkYXRlID0gdW5kZWZpbmVkO1xuXG52YXIgX2RlZmF1bHRTaG91bGRBc3luY1ZhbGlkYXRlID0gcmVxdWlyZSgnLi9kZWZhdWx0U2hvdWxkQXN5bmNWYWxpZGF0ZScpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2RlZmF1bHRTaG91bGRBc3luY1ZhbGlkYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmYXVsdFNob3VsZEFzeW5jVmFsaWRhdGUpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX2RlZmF1bHRTaG91bGRWYWxpZGF0ZSA9IHJlcXVpcmUoJy4vZGVmYXVsdFNob3VsZFZhbGlkYXRlJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnZGVmYXVsdFNob3VsZFZhbGlkYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmYXVsdFNob3VsZFZhbGlkYXRlKS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9Gb3JtID0gcmVxdWlyZSgnLi9Gb3JtJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Zvcm0pLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX0Zvcm1TZWN0aW9uID0gcmVxdWlyZSgnLi9Gb3JtU2VjdGlvbicpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm1TZWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRm9ybVNlY3Rpb24pLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX1N1Ym1pc3Npb25FcnJvciA9IHJlcXVpcmUoJy4vU3VibWlzc2lvbkVycm9yJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU3VibWlzc2lvbkVycm9yJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU3VibWlzc2lvbkVycm9yKS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCcuL3Byb3BUeXBlcycpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Byb3BUeXBlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcykuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2ZpZWxkSW5wdXRQcm9wVHlwZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfcHJvcFR5cGVzLmZpZWxkSW5wdXRQcm9wVHlwZXM7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdmaWVsZE1ldGFQcm9wVHlwZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfcHJvcFR5cGVzLmZpZWxkTWV0YVByb3BUeXBlcztcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2ZpZWxkUHJvcFR5cGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3Byb3BUeXBlcy5maWVsZFByb3BUeXBlcztcbiAgfVxufSk7XG5cbnZhciBfRmllbGQgPSByZXF1aXJlKCcuL0ZpZWxkJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRmllbGQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9GaWVsZCkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfRmllbGRzID0gcmVxdWlyZSgnLi9GaWVsZHMnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGaWVsZHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9GaWVsZHMpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX0ZpZWxkQXJyYXkgPSByZXF1aXJlKCcuL0ZpZWxkQXJyYXknKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGaWVsZEFycmF5Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRmllbGRBcnJheSkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfZm9ybVZhbHVlU2VsZWN0b3IgPSByZXF1aXJlKCcuL2Zvcm1WYWx1ZVNlbGVjdG9yJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnZm9ybVZhbHVlU2VsZWN0b3InLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mb3JtVmFsdWVTZWxlY3RvcikuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfZ2V0Rm9ybU5hbWVzID0gcmVxdWlyZSgnLi9nZXRGb3JtTmFtZXMnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdnZXRGb3JtTmFtZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRGb3JtTmFtZXMpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX2dldEZvcm1WYWx1ZXMgPSByZXF1aXJlKCcuL2dldEZvcm1WYWx1ZXMnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdnZXRGb3JtVmFsdWVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0Rm9ybVZhbHVlcykuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfZ2V0Rm9ybUluaXRpYWxWYWx1ZXMgPSByZXF1aXJlKCcuL2dldEZvcm1Jbml0aWFsVmFsdWVzJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnZ2V0Rm9ybUluaXRpYWxWYWx1ZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRGb3JtSW5pdGlhbFZhbHVlcykuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfZ2V0Rm9ybVN5bmNFcnJvcnMgPSByZXF1aXJlKCcuL2dldEZvcm1TeW5jRXJyb3JzJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnZ2V0Rm9ybVN5bmNFcnJvcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRGb3JtU3luY0Vycm9ycykuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfZ2V0Rm9ybU1ldGEgPSByZXF1aXJlKCcuL2dldEZvcm1NZXRhJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnZ2V0Rm9ybU1ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRGb3JtTWV0YSkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfZ2V0Rm9ybUFzeW5jRXJyb3JzID0gcmVxdWlyZSgnLi9nZXRGb3JtQXN5bmNFcnJvcnMnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdnZXRGb3JtQXN5bmNFcnJvcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRGb3JtQXN5bmNFcnJvcnMpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX2dldEZvcm1TeW5jV2FybmluZ3MgPSByZXF1aXJlKCcuL2dldEZvcm1TeW5jV2FybmluZ3MnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdnZXRGb3JtU3luY1dhcm5pbmdzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0Rm9ybVN5bmNXYXJuaW5ncykuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfZ2V0Rm9ybVN1Ym1pdEVycm9ycyA9IHJlcXVpcmUoJy4vZ2V0Rm9ybVN1Ym1pdEVycm9ycycpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2dldEZvcm1TdWJtaXRFcnJvcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRGb3JtU3VibWl0RXJyb3JzKS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9pc0RpcnR5ID0gcmVxdWlyZSgnLi9pc0RpcnR5Jyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNEaXJ0eScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzRGlydHkpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX2lzSW52YWxpZCA9IHJlcXVpcmUoJy4vaXNJbnZhbGlkJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNJbnZhbGlkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNJbnZhbGlkKS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9pc1ByaXN0aW5lID0gcmVxdWlyZSgnLi9pc1ByaXN0aW5lJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNQcmlzdGluZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzUHJpc3RpbmUpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX2lzVmFsaWQgPSByZXF1aXJlKCcuL2lzVmFsaWQnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1ZhbGlkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNWYWxpZCkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfaXNTdWJtaXR0aW5nID0gcmVxdWlyZSgnLi9pc1N1Ym1pdHRpbmcnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1N1Ym1pdHRpbmcnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1N1Ym1pdHRpbmcpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX2hhc1N1Ym1pdFN1Y2NlZWRlZCA9IHJlcXVpcmUoJy4vaGFzU3VibWl0U3VjY2VlZGVkJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaGFzU3VibWl0U3VjY2VlZGVkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGFzU3VibWl0U3VjY2VlZGVkKS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9oYXNTdWJtaXRGYWlsZWQgPSByZXF1aXJlKCcuL2hhc1N1Ym1pdEZhaWxlZCcpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2hhc1N1Ym1pdEZhaWxlZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hhc1N1Ym1pdEZhaWxlZCkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfcmVkdXhGb3JtID0gcmVxdWlyZSgnLi9yZWR1eEZvcm0nKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWR1eEZvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWR1eEZvcm0pLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX3JlZHVjZXIgPSByZXF1aXJlKCcuL3JlZHVjZXInKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWR1Y2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVkdWNlcikuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfdmFsdWVzID0gcmVxdWlyZSgnLi92YWx1ZXMnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd2YWx1ZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92YWx1ZXMpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX2FjdGlvbnMyID0gcmVxdWlyZSgnLi9hY3Rpb25zJyk7XG5cbnZhciBfYWN0aW9ucyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9hY3Rpb25zMik7XG5cbnZhciBfYWN0aW9uVHlwZXMyID0gcmVxdWlyZSgnLi9hY3Rpb25UeXBlcycpO1xuXG52YXIgX2FjdGlvblR5cGVzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2FjdGlvblR5cGVzMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBhY3Rpb25UeXBlcyA9IGV4cG9ydHMuYWN0aW9uVHlwZXMgPSBfYWN0aW9uVHlwZXM7XG52YXIgYWN0aW9ucyA9IGV4cG9ydHMuYWN0aW9ucyA9IF9hY3Rpb25zO1xudmFyIGFycmF5SW5zZXJ0ID0gX2FjdGlvbnMuYXJyYXlJbnNlcnQsXG4gICAgYXJyYXlNb3ZlID0gX2FjdGlvbnMuYXJyYXlNb3ZlLFxuICAgIGFycmF5UG9wID0gX2FjdGlvbnMuYXJyYXlQb3AsXG4gICAgYXJyYXlQdXNoID0gX2FjdGlvbnMuYXJyYXlQdXNoLFxuICAgIGFycmF5UmVtb3ZlID0gX2FjdGlvbnMuYXJyYXlSZW1vdmUsXG4gICAgYXJyYXlSZW1vdmVBbGwgPSBfYWN0aW9ucy5hcnJheVJlbW92ZUFsbCxcbiAgICBhcnJheVNoaWZ0ID0gX2FjdGlvbnMuYXJyYXlTaGlmdCxcbiAgICBhcnJheVNwbGljZSA9IF9hY3Rpb25zLmFycmF5U3BsaWNlLFxuICAgIGFycmF5U3dhcCA9IF9hY3Rpb25zLmFycmF5U3dhcCxcbiAgICBhcnJheVVuc2hpZnQgPSBfYWN0aW9ucy5hcnJheVVuc2hpZnQsXG4gICAgYXV0b2ZpbGwgPSBfYWN0aW9ucy5hdXRvZmlsbCxcbiAgICBibHVyID0gX2FjdGlvbnMuYmx1cixcbiAgICBjaGFuZ2UgPSBfYWN0aW9ucy5jaGFuZ2UsXG4gICAgY2xlYXJTdWJtaXRFcnJvcnMgPSBfYWN0aW9ucy5jbGVhclN1Ym1pdEVycm9ycyxcbiAgICBkZXN0cm95ID0gX2FjdGlvbnMuZGVzdHJveSxcbiAgICBmb2N1cyA9IF9hY3Rpb25zLmZvY3VzLFxuICAgIGluaXRpYWxpemUgPSBfYWN0aW9ucy5pbml0aWFsaXplLFxuICAgIHJlZ2lzdGVyRmllbGQgPSBfYWN0aW9ucy5yZWdpc3RlckZpZWxkLFxuICAgIHJlc2V0ID0gX2FjdGlvbnMucmVzZXQsXG4gICAgc2V0U3VibWl0RmFpbGVkID0gX2FjdGlvbnMuc2V0U3VibWl0RmFpbGVkLFxuICAgIHNldFN1Ym1pdFN1Y2NlZWRlZCA9IF9hY3Rpb25zLnNldFN1Ym1pdFN1Y2NlZWRlZCxcbiAgICBzdGFydEFzeW5jVmFsaWRhdGlvbiA9IF9hY3Rpb25zLnN0YXJ0QXN5bmNWYWxpZGF0aW9uLFxuICAgIHN0YXJ0U3VibWl0ID0gX2FjdGlvbnMuc3RhcnRTdWJtaXQsXG4gICAgc3RvcEFzeW5jVmFsaWRhdGlvbiA9IF9hY3Rpb25zLnN0b3BBc3luY1ZhbGlkYXRpb24sXG4gICAgc3RvcFN1Ym1pdCA9IF9hY3Rpb25zLnN0b3BTdWJtaXQsXG4gICAgc3VibWl0ID0gX2FjdGlvbnMuc3VibWl0LFxuICAgIHRvdWNoID0gX2FjdGlvbnMudG91Y2gsXG4gICAgdW5yZWdpc3RlckZpZWxkID0gX2FjdGlvbnMudW5yZWdpc3RlckZpZWxkLFxuICAgIHVudG91Y2ggPSBfYWN0aW9ucy51bnRvdWNoO1xuZXhwb3J0cy5hcnJheUluc2VydCA9IGFycmF5SW5zZXJ0O1xuZXhwb3J0cy5hcnJheU1vdmUgPSBhcnJheU1vdmU7XG5leHBvcnRzLmFycmF5UG9wID0gYXJyYXlQb3A7XG5leHBvcnRzLmFycmF5UHVzaCA9IGFycmF5UHVzaDtcbmV4cG9ydHMuYXJyYXlSZW1vdmUgPSBhcnJheVJlbW92ZTtcbmV4cG9ydHMuYXJyYXlSZW1vdmVBbGwgPSBhcnJheVJlbW92ZUFsbDtcbmV4cG9ydHMuYXJyYXlTaGlmdCA9IGFycmF5U2hpZnQ7XG5leHBvcnRzLmFycmF5U3BsaWNlID0gYXJyYXlTcGxpY2U7XG5leHBvcnRzLmFycmF5U3dhcCA9IGFycmF5U3dhcDtcbmV4cG9ydHMuYXJyYXlVbnNoaWZ0ID0gYXJyYXlVbnNoaWZ0O1xuZXhwb3J0cy5hdXRvZmlsbCA9IGF1dG9maWxsO1xuZXhwb3J0cy5ibHVyID0gYmx1cjtcbmV4cG9ydHMuY2hhbmdlID0gY2hhbmdlO1xuZXhwb3J0cy5jbGVhclN1Ym1pdEVycm9ycyA9IGNsZWFyU3VibWl0RXJyb3JzO1xuZXhwb3J0cy5kZXN0cm95ID0gZGVzdHJveTtcbmV4cG9ydHMuZm9jdXMgPSBmb2N1cztcbmV4cG9ydHMuaW5pdGlhbGl6ZSA9IGluaXRpYWxpemU7XG5leHBvcnRzLnJlZ2lzdGVyRmllbGQgPSByZWdpc3RlckZpZWxkO1xuZXhwb3J0cy5yZXNldCA9IHJlc2V0O1xuZXhwb3J0cy5zZXRTdWJtaXRGYWlsZWQgPSBzZXRTdWJtaXRGYWlsZWQ7XG5leHBvcnRzLnNldFN1Ym1pdFN1Y2NlZWRlZCA9IHNldFN1Ym1pdFN1Y2NlZWRlZDtcbmV4cG9ydHMuc3RhcnRBc3luY1ZhbGlkYXRpb24gPSBzdGFydEFzeW5jVmFsaWRhdGlvbjtcbmV4cG9ydHMuc3RhcnRTdWJtaXQgPSBzdGFydFN1Ym1pdDtcbmV4cG9ydHMuc3RvcEFzeW5jVmFsaWRhdGlvbiA9IHN0b3BBc3luY1ZhbGlkYXRpb247XG5leHBvcnRzLnN0b3BTdWJtaXQgPSBzdG9wU3VibWl0O1xuZXhwb3J0cy5zdWJtaXQgPSBzdWJtaXQ7XG5leHBvcnRzLnRvdWNoID0gdG91Y2g7XG5leHBvcnRzLnVucmVnaXN0ZXJGaWVsZCA9IHVucmVnaXN0ZXJGaWVsZDtcbmV4cG9ydHMudW50b3VjaCA9IHVudG91Y2g7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4LWZvcm0vbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgyMTQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbGlzdENhY2hlQ2xlYXIgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVDbGVhcicpLFxuICAgIGxpc3RDYWNoZURlbGV0ZSA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZURlbGV0ZScpLFxuICAgIGxpc3RDYWNoZUdldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUdldCcpLFxuICAgIGxpc3RDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUhhcycpLFxuICAgIGxpc3RDYWNoZVNldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZVNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gbGlzdCBjYWNoZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIExpc3RDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gTGlzdENhY2hlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fTGlzdENhY2hlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZXEgPSByZXF1aXJlKCcuL2VxJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgaW5kZXggYXQgd2hpY2ggdGhlIGBrZXlgIGlzIGZvdW5kIGluIGBhcnJheWAgb2Yga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0ga2V5IFRoZSBrZXkgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGFzc29jSW5kZXhPZihhcnJheSwga2V5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIGlmIChlcShhcnJheVtsZW5ndGhdWzBdLCBrZXkpKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzb2NJbmRleE9mO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYXNzb2NJbmRleE9mLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19kZWZpbmVQcm9wZXJ0eScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBhc3NpZ25WYWx1ZWAgYW5kIGBhc3NpZ25NZXJnZVZhbHVlYCB3aXRob3V0XG4gKiB2YWx1ZSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGFzc2lnbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFzc2lnbi5cbiAqL1xuZnVuY3Rpb24gYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5ID09ICdfX3Byb3RvX18nICYmIGRlZmluZVByb3BlcnR5KSB7XG4gICAgZGVmaW5lUHJvcGVydHkob2JqZWN0LCBrZXksIHtcbiAgICAgICdjb25maWd1cmFibGUnOiB0cnVlLFxuICAgICAgJ2VudW1lcmFibGUnOiB0cnVlLFxuICAgICAgJ3ZhbHVlJzogdmFsdWUsXG4gICAgICAnd3JpdGFibGUnOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VBc3NpZ25WYWx1ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VBc3NpZ25WYWx1ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzS2V5YWJsZSA9IHJlcXVpcmUoJy4vX2lzS2V5YWJsZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIGRhdGEgZm9yIGBtYXBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSByZWZlcmVuY2Uga2V5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIG1hcCBkYXRhLlxuICovXG5mdW5jdGlvbiBnZXRNYXBEYXRhKG1hcCwga2V5KSB7XG4gIHZhciBkYXRhID0gbWFwLl9fZGF0YV9fO1xuICByZXR1cm4gaXNLZXlhYmxlKGtleSlcbiAgICA/IGRhdGFbdHlwZW9mIGtleSA9PSAnc3RyaW5nJyA/ICdzdHJpbmcnIDogJ2hhc2gnXVxuICAgIDogZGF0YS5tYXA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TWFwRGF0YTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldE1hcERhdGEuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIG5hdGl2ZUNyZWF0ZSA9IGdldE5hdGl2ZShPYmplY3QsICdjcmVhdGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVDcmVhdGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19uYXRpdmVDcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS4gQSB2YWx1ZSBpcyBjb25zaWRlcmVkIGFycmF5LWxpa2UgaWYgaXQnc1xuICogbm90IGEgZnVuY3Rpb24gYW5kIGhhcyBhIGB2YWx1ZS5sZW5ndGhgIHRoYXQncyBhbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiBvclxuICogZXF1YWwgdG8gYDBgIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYE51bWJlci5NQVhfU0FGRV9JTlRFR0VSYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgIWlzRnVuY3Rpb24odmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXlMaWtlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0FycmF5TGlrZS5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3ltYm9sO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc1N5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFycmF5TWFwID0gcmVxdWlyZSgnLi9fYXJyYXlNYXAnKSxcbiAgICBjb3B5QXJyYXkgPSByZXF1aXJlKCcuL19jb3B5QXJyYXknKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyksXG4gICAgc3RyaW5nVG9QYXRoID0gcmVxdWlyZSgnLi9fc3RyaW5nVG9QYXRoJyksXG4gICAgdG9LZXkgPSByZXF1aXJlKCcuL190b0tleScpLFxuICAgIHRvU3RyaW5nID0gcmVxdWlyZSgnLi90b1N0cmluZycpO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBwcm9wZXJ0eSBwYXRoIGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b1BhdGgoJ2EuYi5jJyk7XG4gKiAvLyA9PiBbJ2EnLCAnYicsICdjJ11cbiAqXG4gKiBfLnRvUGF0aCgnYVswXS5iLmMnKTtcbiAqIC8vID0+IFsnYScsICcwJywgJ2InLCAnYyddXG4gKi9cbmZ1bmN0aW9uIHRvUGF0aCh2YWx1ZSkge1xuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gYXJyYXlNYXAodmFsdWUsIHRvS2V5KTtcbiAgfVxuICByZXR1cm4gaXNTeW1ib2wodmFsdWUpID8gW3ZhbHVlXSA6IGNvcHlBcnJheShzdHJpbmdUb1BhdGgodG9TdHJpbmcodmFsdWUpKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9QYXRoO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC90b1BhdGguanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZm9ybWF0TmFtZTtcbmZ1bmN0aW9uIGZvcm1hdE5hbWUoY29udGV4dCwgbmFtZSkge1xuICB2YXIgc2VjdGlvblByZWZpeCA9IGNvbnRleHQuX3JlZHV4Rm9ybS5zZWN0aW9uUHJlZml4O1xuXG4gIHJldHVybiAhc2VjdGlvblByZWZpeCA/IG5hbWUgOiBzZWN0aW9uUHJlZml4ICsgXCIuXCIgKyBuYW1lO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC1mb3JtL2xpYi91dGlsL3ByZWZpeE5hbWUuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9pbnZhcmlhbnQvaW52YXJpYW50LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgUmVkdWNlciB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGJyb3dzZXJIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCc7XG5pbXBvcnQgQXBpQ2FsbHMgZnJvbSAnLi4vaGVscGVycy9hcGlDYWxscyc7XG5pbXBvcnQgeyBBcHBUaHVua0FjdGlvbiB9IGZyb20gJy4vJztcbmltcG9ydCB7IFVzZXJTdGF0ZSB9IGZyb20gXCIuL1VzZXJcIjtcblxuLy8gYXBwbGljYXRpb24gc3RhdGVcbmV4cG9ydCBpbnRlcmZhY2UgQXBwU3RhdGUge1xuICAgIGxvZ2dlZEluOiBib29sZWFuLFxuICAgIHVzZXI6IFVzZXJTdGF0ZVxufVxuXG4vLyBhY3Rpb25zXG5pbnRlcmZhY2UgTG9naW5BY3Rpb24ge1xuICAgIHR5cGU6ICdMT0dJTicsXG4gICAgdXNlcjogVXNlclN0YXRlXG59XG5cbmludGVyZmFjZSBMb2dvdXRBY3Rpb24ge1xuICAgIHR5cGU6ICdMT0dPVVQnXG59XG5cbnR5cGUgS25vd25BY3Rpb24gPSBMb2dpbkFjdGlvbiB8IExvZ291dEFjdGlvbjtcblxuLy8gYWN0aW9uIGNyZWF0b3JzXG5leHBvcnQgY29uc3QgYWN0aW9uQ3JlYXRvcnMgPSB7XG4gICAgcmVkaXJlY3RUb0hvbWU6ICgpID0+IHtcbiAgICAgICAgYnJvd3Nlckhpc3RvcnkucHVzaChcIi9cIik7XG4gICAgfSxcbiAgICBsb2dvdXQ6ICgpOiBBcHBUaHVua0FjdGlvbjxLbm93bkFjdGlvbj4gPT4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgICAgICBBcGlDYWxscy5yZXF1ZXN0KFwiYWNjb3VudC9sb2dvdXRcIiwgXCJwb3N0XCIpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0xPR09VVCd9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgbG9nZ2VkSW46IGZhbHNlLCB1c2VyOiBudWxsXG59O1xuXG4vLyByZWR1Y2VyXG5leHBvcnQgY29uc3QgcmVkdWNlcjogUmVkdWNlcjxBcHBTdGF0ZT4gPSAoc3RhdGU6IEFwcFN0YXRlLCBhY3Rpb246IEtub3duQWN0aW9uKSA9PiB7XG4gICAgdmFyIG5ld1N0YXRlID0gey4uLnN0YXRlfVxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XG4gICAgICAgIGNhc2UgJ0xPR0lOJzpcbiAgICAgICAgICAgIG5ld1N0YXRlLmxvZ2dlZEluID0gdHJ1ZTtcbiAgICAgICAgICAgIG5ld1N0YXRlLnVzZXIgPSBhY3Rpb24udXNlcjtcbiAgICAgICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICAgICAgY2FzZSAnTE9HT1VUJzpcbiAgICAgICAgICAgIG5ld1N0YXRlLmxvZ2dlZEluID0gZmFsc2U7XG4gICAgICAgICAgICBuZXdTdGF0ZS51c2VyID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICBjb25zdCBleGhhdXN0aXZlQ2hlY2s6IG5ldmVyID0gYWN0aW9uO1xuICAgIH1cbiAgICAvLyBGb3IgdW5yZWNvZ25pemVkIGFjdGlvbnMgKG9yIGluIGNhc2VzIHdoZXJlIGFjdGlvbnMgaGF2ZSBubyBlZmZlY3QpLCBtdXN0IHJldHVybiB0aGUgZXhpc3Rpbmcgc3RhdGVcbiAgICAvLyAgKG9yIGRlZmF1bHQgaW5pdGlhbCBzdGF0ZSBpZiBub25lIHdhcyBzdXBwbGllZClcbiAgICByZXR1cm4gc3RhdGUgfHwgaW5pdGlhbFN0YXRlO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9zdG9yZS9BcHAudHMiLCJtb2R1bGUuZXhwb3J0cyA9IGlzUHJvbWlzZTtcblxuZnVuY3Rpb24gaXNQcm9taXNlKG9iaikge1xuICByZXR1cm4gISFvYmogJiYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnIHx8IHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbicpICYmIHR5cGVvZiBvYmoudGhlbiA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pcy1wcm9taXNlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIE1hcCA9IGdldE5hdGl2ZShyb290LCAnTWFwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fTWFwLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbWFwQ2FjaGVDbGVhciA9IHJlcXVpcmUoJy4vX21hcENhY2hlQ2xlYXInKSxcbiAgICBtYXBDYWNoZURlbGV0ZSA9IHJlcXVpcmUoJy4vX21hcENhY2hlRGVsZXRlJyksXG4gICAgbWFwQ2FjaGVHZXQgPSByZXF1aXJlKCcuL19tYXBDYWNoZUdldCcpLFxuICAgIG1hcENhY2hlSGFzID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVIYXMnKSxcbiAgICBtYXBDYWNoZVNldCA9IHJlcXVpcmUoJy4vX21hcENhY2hlU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcENhY2hlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fTWFwQ2FjaGUuanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBzdGFja0NsZWFyID0gcmVxdWlyZSgnLi9fc3RhY2tDbGVhcicpLFxuICAgIHN0YWNrRGVsZXRlID0gcmVxdWlyZSgnLi9fc3RhY2tEZWxldGUnKSxcbiAgICBzdGFja0dldCA9IHJlcXVpcmUoJy4vX3N0YWNrR2V0JyksXG4gICAgc3RhY2tIYXMgPSByZXF1aXJlKCcuL19zdGFja0hhcycpLFxuICAgIHN0YWNrU2V0ID0gcmVxdWlyZSgnLi9fc3RhY2tTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgc3RhY2sgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gU3RhY2soZW50cmllcykge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlKGVudHJpZXMpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBTdGFja2AuXG5TdGFjay5wcm90b3R5cGUuY2xlYXIgPSBzdGFja0NsZWFyO1xuU3RhY2sucHJvdG90eXBlWydkZWxldGUnXSA9IHN0YWNrRGVsZXRlO1xuU3RhY2sucHJvdG90eXBlLmdldCA9IHN0YWNrR2V0O1xuU3RhY2sucHJvdG90eXBlLmhhcyA9IHN0YWNrSGFzO1xuU3RhY2sucHJvdG90eXBlLnNldCA9IHN0YWNrU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YWNrO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fU3RhY2suanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlSXNFcXVhbERlZXAgPSByZXF1aXJlKCcuL19iYXNlSXNFcXVhbERlZXAnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzRXF1YWxgIHdoaWNoIHN1cHBvcnRzIHBhcnRpYWwgY29tcGFyaXNvbnNcbiAqIGFuZCB0cmFja3MgdHJhdmVyc2VkIG9iamVjdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtib29sZWFufSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLlxuICogIDEgLSBVbm9yZGVyZWQgY29tcGFyaXNvblxuICogIDIgLSBQYXJ0aWFsIGNvbXBhcmlzb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBgdmFsdWVgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNFcXVhbCh2YWx1ZSwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKSB7XG4gIGlmICh2YWx1ZSA9PT0gb3RoZXIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAodmFsdWUgPT0gbnVsbCB8fCBvdGhlciA9PSBudWxsIHx8ICghaXNPYmplY3RMaWtlKHZhbHVlKSAmJiAhaXNPYmplY3RMaWtlKG90aGVyKSkpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcjtcbiAgfVxuICByZXR1cm4gYmFzZUlzRXF1YWxEZWVwKHZhbHVlLCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgYmFzZUlzRXF1YWwsIHN0YWNrKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNFcXVhbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc0VxdWFsLmpzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHVuc2lnbmVkIGludGVnZXIgdmFsdWVzLiAqL1xudmFyIHJlSXNVaW50ID0gL14oPzowfFsxLTldXFxkKikkLztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgaW5kZXguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9TUFYX1NBRkVfSU5URUdFUl0gVGhlIHVwcGVyIGJvdW5kcyBvZiBhIHZhbGlkIGluZGV4LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBpbmRleCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0luZGV4KHZhbHVlLCBsZW5ndGgpIHtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuICByZXR1cm4gISFsZW5ndGggJiZcbiAgICAodHlwZW9mIHZhbHVlID09ICdudW1iZXInIHx8IHJlSXNVaW50LnRlc3QodmFsdWUpKSAmJlxuICAgICh2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0luZGV4O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faXNJbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggcHJvcGVydHkgbmFtZXMgd2l0aGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlSXNEZWVwUHJvcCA9IC9cXC58XFxbKD86W15bXFxdXSp8KFtcIiddKSg/Oig/IVxcMSlbXlxcXFxdfFxcXFwuKSo/XFwxKVxcXS8sXG4gICAgcmVJc1BsYWluUHJvcCA9IC9eXFx3KiQvO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgcHJvcGVydHkgbmFtZSBhbmQgbm90IGEgcHJvcGVydHkgcGF0aC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeSBrZXlzIG9uLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm9wZXJ0eSBuYW1lLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5KHZhbHVlLCBvYmplY3QpIHtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICBpZiAodHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nIHx8XG4gICAgICB2YWx1ZSA9PSBudWxsIHx8IGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiByZUlzUGxhaW5Qcm9wLnRlc3QodmFsdWUpIHx8ICFyZUlzRGVlcFByb3AudGVzdCh2YWx1ZSkgfHxcbiAgICAob2JqZWN0ICE9IG51bGwgJiYgdmFsdWUgaW4gT2JqZWN0KG9iamVjdCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzS2V5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faXNLZXkuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGEgcHJvdG90eXBlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3RvdHlwZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1Byb3RvdHlwZSh2YWx1ZSkge1xuICB2YXIgQ3RvciA9IHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLFxuICAgICAgcHJvdG8gPSAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSkgfHwgb2JqZWN0UHJvdG87XG5cbiAgcmV0dXJuIHZhbHVlID09PSBwcm90bztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1Byb3RvdHlwZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2lzUHJvdG90eXBlLmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgdGhlIGZpcnN0IGFyZ3VtZW50IGl0IHJlY2VpdmVzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0geyp9IHZhbHVlIEFueSB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIGB2YWx1ZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICpcbiAqIGNvbnNvbGUubG9nKF8uaWRlbnRpdHkob2JqZWN0KSA9PT0gb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaWRlbnRpdHkodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlkZW50aXR5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pZGVudGl0eS5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VJc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vX2Jhc2VJc0FyZ3VtZW50cycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FyZ3VtZW50cyA9IGJhc2VJc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA/IGJhc2VJc0FyZ3VtZW50cyA6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJlxuICAgICFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJndW1lbnRzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0FyZ3VtZW50cy5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290JyksXG4gICAgc3R1YkZhbHNlID0gcmVxdWlyZSgnLi9zdHViRmFsc2UnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBCdWZmZXIgPSBtb2R1bGVFeHBvcnRzID8gcm9vdC5CdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVJc0J1ZmZlciA9IEJ1ZmZlciA/IEJ1ZmZlci5pc0J1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMy4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlciwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBCdWZmZXIoMikpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IFVpbnQ4QXJyYXkoMikpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQnVmZmVyID0gbmF0aXZlSXNCdWZmZXIgfHwgc3R1YkZhbHNlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQnVmZmVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0J1ZmZlci5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhc3luY1RhZyA9ICdbb2JqZWN0IEFzeW5jRnVuY3Rpb25dJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIHByb3h5VGFnID0gJ1tvYmplY3QgUHJveHldJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA5IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5cyBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gYmFzZUdldFRhZyh2YWx1ZSk7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnIHx8IHRhZyA9PSBhc3luY1RhZyB8fCB0YWcgPT0gcHJveHlUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGdW5jdGlvbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNGdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTGVuZ3RoKDMpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNMZW5ndGgoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoSW5maW5pdHkpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKCczJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmXG4gICAgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTGVuZ3RoO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0xlbmd0aC5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VJc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL19iYXNlSXNUeXBlZEFycmF5JyksXG4gICAgYmFzZVVuYXJ5ID0gcmVxdWlyZSgnLi9fYmFzZVVuYXJ5JyksXG4gICAgbm9kZVV0aWwgPSByZXF1aXJlKCcuL19ub2RlVXRpbCcpO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc1R5cGVkQXJyYXkgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc1R5cGVkQXJyYXk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIHR5cGVkIGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkobmV3IFVpbnQ4QXJyYXkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KFtdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc1R5cGVkQXJyYXkgPSBub2RlSXNUeXBlZEFycmF5ID8gYmFzZVVuYXJ5KG5vZGVJc1R5cGVkQXJyYXkpIDogYmFzZUlzVHlwZWRBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc1R5cGVkQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzVHlwZWRBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFycmF5TGlrZUtleXMgPSByZXF1aXJlKCcuL19hcnJheUxpa2VLZXlzJyksXG4gICAgYmFzZUtleXMgPSByZXF1aXJlKCcuL19iYXNlS2V5cycpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLiBTZWUgdGhlXG4gKiBbRVMgc3BlY10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LmtleXMpXG4gKiBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5cyhuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqXG4gKiBfLmtleXMoJ2hpJyk7XG4gKiAvLyA9PiBbJzAnLCAnMSddXG4gKi9cbmZ1bmN0aW9uIGtleXMob2JqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5TGlrZShvYmplY3QpID8gYXJyYXlMaWtlS2V5cyhvYmplY3QpIDogYmFzZUtleXMob2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBrZXlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgcHJlZml4ID0gZXhwb3J0cy5wcmVmaXggPSAnQEByZWR1eC1mb3JtLyc7XG5cbnZhciBBUlJBWV9JTlNFUlQgPSBleHBvcnRzLkFSUkFZX0lOU0VSVCA9IHByZWZpeCArICdBUlJBWV9JTlNFUlQnO1xudmFyIEFSUkFZX01PVkUgPSBleHBvcnRzLkFSUkFZX01PVkUgPSBwcmVmaXggKyAnQVJSQVlfTU9WRSc7XG52YXIgQVJSQVlfUE9QID0gZXhwb3J0cy5BUlJBWV9QT1AgPSBwcmVmaXggKyAnQVJSQVlfUE9QJztcbnZhciBBUlJBWV9QVVNIID0gZXhwb3J0cy5BUlJBWV9QVVNIID0gcHJlZml4ICsgJ0FSUkFZX1BVU0gnO1xudmFyIEFSUkFZX1JFTU9WRSA9IGV4cG9ydHMuQVJSQVlfUkVNT1ZFID0gcHJlZml4ICsgJ0FSUkFZX1JFTU9WRSc7XG52YXIgQVJSQVlfUkVNT1ZFX0FMTCA9IGV4cG9ydHMuQVJSQVlfUkVNT1ZFX0FMTCA9IHByZWZpeCArICdBUlJBWV9SRU1PVkVfQUxMJztcbnZhciBBUlJBWV9TSElGVCA9IGV4cG9ydHMuQVJSQVlfU0hJRlQgPSBwcmVmaXggKyAnQVJSQVlfU0hJRlQnO1xudmFyIEFSUkFZX1NQTElDRSA9IGV4cG9ydHMuQVJSQVlfU1BMSUNFID0gcHJlZml4ICsgJ0FSUkFZX1NQTElDRSc7XG52YXIgQVJSQVlfVU5TSElGVCA9IGV4cG9ydHMuQVJSQVlfVU5TSElGVCA9IHByZWZpeCArICdBUlJBWV9VTlNISUZUJztcbnZhciBBUlJBWV9TV0FQID0gZXhwb3J0cy5BUlJBWV9TV0FQID0gcHJlZml4ICsgJ0FSUkFZX1NXQVAnO1xudmFyIEFVVE9GSUxMID0gZXhwb3J0cy5BVVRPRklMTCA9IHByZWZpeCArICdBVVRPRklMTCc7XG52YXIgQkxVUiA9IGV4cG9ydHMuQkxVUiA9IHByZWZpeCArICdCTFVSJztcbnZhciBDSEFOR0UgPSBleHBvcnRzLkNIQU5HRSA9IHByZWZpeCArICdDSEFOR0UnO1xudmFyIENMRUFSX1NVQk1JVCA9IGV4cG9ydHMuQ0xFQVJfU1VCTUlUID0gcHJlZml4ICsgJ0NMRUFSX1NVQk1JVCc7XG52YXIgQ0xFQVJfU1VCTUlUX0VSUk9SUyA9IGV4cG9ydHMuQ0xFQVJfU1VCTUlUX0VSUk9SUyA9IHByZWZpeCArICdDTEVBUl9TVUJNSVRfRVJST1JTJztcbnZhciBDTEVBUl9BU1lOQ19FUlJPUiA9IGV4cG9ydHMuQ0xFQVJfQVNZTkNfRVJST1IgPSBwcmVmaXggKyAnQ0xFQVJfQVNZTkNfRVJST1InO1xudmFyIERFU1RST1kgPSBleHBvcnRzLkRFU1RST1kgPSBwcmVmaXggKyAnREVTVFJPWSc7XG52YXIgRk9DVVMgPSBleHBvcnRzLkZPQ1VTID0gcHJlZml4ICsgJ0ZPQ1VTJztcbnZhciBJTklUSUFMSVpFID0gZXhwb3J0cy5JTklUSUFMSVpFID0gcHJlZml4ICsgJ0lOSVRJQUxJWkUnO1xudmFyIFJFR0lTVEVSX0ZJRUxEID0gZXhwb3J0cy5SRUdJU1RFUl9GSUVMRCA9IHByZWZpeCArICdSRUdJU1RFUl9GSUVMRCc7XG52YXIgUkVTRVQgPSBleHBvcnRzLlJFU0VUID0gcHJlZml4ICsgJ1JFU0VUJztcbnZhciBTRVRfU1VCTUlUX0ZBSUxFRCA9IGV4cG9ydHMuU0VUX1NVQk1JVF9GQUlMRUQgPSBwcmVmaXggKyAnU0VUX1NVQk1JVF9GQUlMRUQnO1xudmFyIFNFVF9TVUJNSVRfU1VDQ0VFREVEID0gZXhwb3J0cy5TRVRfU1VCTUlUX1NVQ0NFRURFRCA9IHByZWZpeCArICdTRVRfU1VCTUlUX1NVQ0NFRURFRCc7XG52YXIgU1RBUlRfQVNZTkNfVkFMSURBVElPTiA9IGV4cG9ydHMuU1RBUlRfQVNZTkNfVkFMSURBVElPTiA9IHByZWZpeCArICdTVEFSVF9BU1lOQ19WQUxJREFUSU9OJztcbnZhciBTVEFSVF9TVUJNSVQgPSBleHBvcnRzLlNUQVJUX1NVQk1JVCA9IHByZWZpeCArICdTVEFSVF9TVUJNSVQnO1xudmFyIFNUT1BfQVNZTkNfVkFMSURBVElPTiA9IGV4cG9ydHMuU1RPUF9BU1lOQ19WQUxJREFUSU9OID0gcHJlZml4ICsgJ1NUT1BfQVNZTkNfVkFMSURBVElPTic7XG52YXIgU1RPUF9TVUJNSVQgPSBleHBvcnRzLlNUT1BfU1VCTUlUID0gcHJlZml4ICsgJ1NUT1BfU1VCTUlUJztcbnZhciBTVUJNSVQgPSBleHBvcnRzLlNVQk1JVCA9IHByZWZpeCArICdTVUJNSVQnO1xudmFyIFRPVUNIID0gZXhwb3J0cy5UT1VDSCA9IHByZWZpeCArICdUT1VDSCc7XG52YXIgVU5SRUdJU1RFUl9GSUVMRCA9IGV4cG9ydHMuVU5SRUdJU1RFUl9GSUVMRCA9IHByZWZpeCArICdVTlJFR0lTVEVSX0ZJRUxEJztcbnZhciBVTlRPVUNIID0gZXhwb3J0cy5VTlRPVUNIID0gcHJlZml4ICsgJ1VOVE9VQ0gnO1xudmFyIFVQREFURV9TWU5DX0VSUk9SUyA9IGV4cG9ydHMuVVBEQVRFX1NZTkNfRVJST1JTID0gcHJlZml4ICsgJ1VQREFURV9TWU5DX0VSUk9SUyc7XG52YXIgVVBEQVRFX1NZTkNfV0FSTklOR1MgPSBleHBvcnRzLlVQREFURV9TWU5DX1dBUk5JTkdTID0gcHJlZml4ICsgJ1VQREFURV9TWU5DX1dBUk5JTkdTJztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtZm9ybS9saWIvYWN0aW9uVHlwZXMuanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9oYXNFcnJvciA9IHJlcXVpcmUoJy4uL2hhc0Vycm9yJyk7XG5cbnZhciBfaGFzRXJyb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGFzRXJyb3IpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgY3JlYXRlSXNWYWxpZCA9IGZ1bmN0aW9uIGNyZWF0ZUlzVmFsaWQoc3RydWN0dXJlKSB7XG4gIHZhciBnZXRJbiA9IHN0cnVjdHVyZS5nZXRJbixcbiAgICAgIGtleXMgPSBzdHJ1Y3R1cmUua2V5cztcblxuICB2YXIgaGFzRXJyb3IgPSAoMCwgX2hhc0Vycm9yMi5kZWZhdWx0KShzdHJ1Y3R1cmUpO1xuICByZXR1cm4gZnVuY3Rpb24gKGZvcm0pIHtcbiAgICB2YXIgZ2V0Rm9ybVN0YXRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgIHJldHVybiBnZXRJbihzdGF0ZSwgJ2Zvcm0nKTtcbiAgICB9O1xuICAgIHZhciBpZ25vcmVTdWJtaXRFcnJvcnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IGZhbHNlO1xuICAgIHJldHVybiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgIHZhciBmb3JtU3RhdGUgPSBnZXRGb3JtU3RhdGUoc3RhdGUpO1xuICAgICAgdmFyIHN5bmNFcnJvciA9IGdldEluKGZvcm1TdGF0ZSwgZm9ybSArICcuc3luY0Vycm9yJyk7XG4gICAgICBpZiAoc3luY0Vycm9yKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmICghaWdub3JlU3VibWl0RXJyb3JzKSB7XG4gICAgICAgIHZhciBlcnJvciA9IGdldEluKGZvcm1TdGF0ZSwgZm9ybSArICcuZXJyb3InKTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB2YXIgc3luY0Vycm9ycyA9IGdldEluKGZvcm1TdGF0ZSwgZm9ybSArICcuc3luY0Vycm9ycycpO1xuICAgICAgdmFyIGFzeW5jRXJyb3JzID0gZ2V0SW4oZm9ybVN0YXRlLCBmb3JtICsgJy5hc3luY0Vycm9ycycpO1xuICAgICAgdmFyIHN1Ym1pdEVycm9ycyA9IGlnbm9yZVN1Ym1pdEVycm9ycyA/IHVuZGVmaW5lZCA6IGdldEluKGZvcm1TdGF0ZSwgZm9ybSArICcuc3VibWl0RXJyb3JzJyk7XG4gICAgICBpZiAoIXN5bmNFcnJvcnMgJiYgIWFzeW5jRXJyb3JzICYmICFzdWJtaXRFcnJvcnMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWdpc3RlcmVkRmllbGRzID0gZ2V0SW4oZm9ybVN0YXRlLCBmb3JtICsgJy5yZWdpc3RlcmVkRmllbGRzJyk7XG4gICAgICBpZiAoIXJlZ2lzdGVyZWRGaWVsZHMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAha2V5cyhyZWdpc3RlcmVkRmllbGRzKS5maWx0ZXIoZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGdldEluKHJlZ2lzdGVyZWRGaWVsZHMsICdbXFwnJyArIG5hbWUgKyAnXFwnXS5jb3VudCcpID4gMDtcbiAgICAgIH0pLnNvbWUoZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGhhc0Vycm9yKGdldEluKHJlZ2lzdGVyZWRGaWVsZHMsICdbXFwnJyArIG5hbWUgKyAnXFwnXScpLCBzeW5jRXJyb3JzLCBhc3luY0Vycm9ycywgc3VibWl0RXJyb3JzKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVJc1ZhbGlkO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC1mb3JtL2xpYi9zZWxlY3RvcnMvaXNWYWxpZC5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoMzQ2KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL21vZHVsZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDc5KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVkdXgvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFwaUNhbGxzIGZyb20gJy4uL2hlbHBlcnMvYXBpQ2FsbHMnO1xuaW1wb3J0IElucHV0IGZyb20gJy4vSW5wdXQnO1xuaW1wb3J0IHsgU3VibWlzc2lvbkVycm9yIH0gZnJvbSAncmVkdXgtZm9ybSc7XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCB1bmRlZmluZWQ+e1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMub25TdWJtaXQgPSB0aGlzLm9uU3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc3VibWl0Rm9ybSA9IHRoaXMuc3VibWl0Rm9ybS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uU3VibWl0RmFpbCA9IHRoaXMub25TdWJtaXRGYWlsLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpe1xuICAgICAgICBjb25zdCB7IGhhbmRsZVN1Ym1pdCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdCh0aGlzLm9uU3VibWl0KX0+XG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJHbG9iYWxFcnJvcnMoKX1cbiAgICAgICAgICAgIHt0aGlzLnJlbmRlckZvcm1Db250ZW50KCl9XG4gICAgICAgIDwvZm9ybT4pO1xuICAgIH1cblxuICAgIC8vIHRoaXMgbWV0aG9kIG11c3QgYmUgaW1wbGVtZW50ZWQgYmVjYXVzZSBpdCBjb250YWlucyB0aGUgZm9ybSdzIGZpZWxkc1xuICAgIHByb3RlY3RlZCBhYnN0cmFjdCByZW5kZXJGb3JtQ29udGVudCgpO1xuXG4gICAgcHJvdGVjdGVkIENyZWF0ZUlucHV0KG5hbWUsIHR5cGUsIGxhYmVsLCBkaXNhYmxlZCA9IGZhbHNlKXtcbiAgICAgICAgcmV0dXJuIDxJbnB1dCBuYW1lPXtuYW1lfSB0eXBlPXt0eXBlfSBsYWJlbD17bGFiZWx9IGRpc2FibGVkPXtkaXNhYmxlZH0vPlxuICAgIH1cblxuICAgIHByb3RlY3RlZCBDcmVhdGVTdWJtaXRCdXR0b24obGFiZWwpe1xuICAgICAgICByZXR1cm4gPElucHV0IHR5cGU9XCJzdWJtaXRcIiBsYWJlbD17bGFiZWx9IGRpc2FibGVkPXt0aGlzLnByb3BzLnN1Ym1pdHRpbmd9Lz5cbiAgICB9XG5cbiAgICAvLyB0aGlzIG1ldGhvZCBtdXN0IGJlIGltcGxlbWVudGVkIGFuZCBjYWxsIHN1Ym1pdEZvcm0gd2l0aCB0aGUgY29ycmVjdCBjb250cm9sbGVyIGFkZHJlc3NcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3Qgb25TdWJtaXQodmFsdWVzKTtcblxuICAgIC8vIHN1Ym1pdHMgdGhlIGZvcm0gdG8gdGhlIHNwZWNpZmllZCBjb250cm9sbGVyIGFkZHJlc3NcbiAgICBwcm90ZWN0ZWQgYXN5bmMgc3VibWl0Rm9ybShhZGRyZXNzLCB2YWx1ZXMpe1xuICAgICAgICB2YXIgcmVzdWx0ID0gYXdhaXQgQXBpQ2FsbHMucmVxdWVzdChhZGRyZXNzLCBcInBvc3RcIiwgdmFsdWVzKTtcbiAgICAgICAgaWYgKHJlc3VsdC52YWxpZGF0aW9uRXJyb3JzKVxuICAgICAgICAgICAgICAgIHRoaXMub25TdWJtaXRGYWlsKHJlc3VsdCk7XG4gICAgICAgIGVsc2UgXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8vIGlmIHN1Ym1pc3Npb24gZmFpbHMsIGNyZWF0ZXMgc3VibWlzc2lvbiBlcnJvcnMgd2l0aCBpbmZvcm1hdGlvbiByZXRyaWV2ZWQgZnJvbSBjb250cm9sbGVyXG4gICAgcHJvdGVjdGVkIG9uU3VibWl0RmFpbChlcnJvcnMpe1xuICAgICAgICB2YXIgZXJyb3IgPSB7IF9lcnJvcjogZXJyb3JzLnZhbGlkYXRpb25FcnJvcnNbXCJcIl19O1xuICAgICAgICB0aHJvdyBuZXcgU3VibWlzc2lvbkVycm9yKGVycm9yKTtcbiAgICB9XG5cbiAgICAvLyByZW5kZXJzIHN1Ym1pc3Npb24gZXJyb3JzIHJldHJpZXZlZCBmcm9tIGNvbnRyb2xsZXJcbiAgICBwcml2YXRlIHJlbmRlckdsb2JhbEVycm9ycygpe1xuICAgICAgICB2YXIgZXJyb3JzID0gdGhpcy5wcm9wcy5lcnJvcjtcbiAgICAgICAgaWYgKGVycm9ycylcbiAgICAgICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5cbiAgICAgICAgICAgICAgICB7ZXJyb3JzLm1hcCgoZXJyb3IsIGluZGV4KSA9PiA8cCBrZXk9e2luZGV4fT57ZXJyb3J9PC9wPil9XG4gICAgICAgICAgICA8L2Rpdj4pO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL0Zvcm0udHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlIH0gIGZyb20gJy4uL3N0b3JlJztcclxuaW1wb3J0ICogYXMgQXBwU3RvcmUgZnJvbSAnLi4vc3RvcmUvQXBwJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9BcHAnO1xyXG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvTG9naW5Gb3JtJztcclxuXHJcbmNsYXNzIExvZ2luIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PEFwcFByb3BzLCB1bmRlZmluZWQ+IHtcclxuICAgIFxyXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCl7XHJcblxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgcmVuZGVyKCl7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubG9nZ2VkSW4pXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlckxvZ291dCgpO1xyXG4gICAgICAgIGVsc2UgXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlckxvZ2luKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlckxvZ2luKCl7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoND5GYcOnYSBzZXUgbG9naW48L2g0PlxyXG4gICAgICAgICAgICAgICAgPExvZ2luRm9ybSAvPlxyXG4gICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICA8cD5QYXJhIHNlIGNhZGFzdHJhciwgY2xpcXVlIDxMaW5rIHRvPVwiL3JlZ2lzdGVyXCI+YXF1aTwvTGluaz48L3A+ICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXJMb2dvdXQoKXtcclxuICAgICAgICByZXR1cm4gKDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0PkNsaXF1ZSBhcXVpIHBhcmEgc2FpcjogPC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMubG9nb3V0fT5TYWlyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgKHN0YXRlOiBBcHBsaWNhdGlvblN0YXRlKSA9PiBzdGF0ZS5hcHAsXHJcbiAgICBBcHBTdG9yZS5hY3Rpb25DcmVhdG9yc1xyXG4pKExvZ2luKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbnRhaW5lcnMvTG9naW4udHN4IiwiaW1wb3J0ICdpc29tb3JwaGljLWZldGNoJztcblxuY29uc3QgcmVxdWVzdEhlYWRlciA9IHtcbiAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonLFxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG59O1xuXG5jb25zdCByZXF1ZXN0Q3JlZGVudGlhbHMgPSBcInNhbWUtb3JpZ2luXCI7XG5cbmludGVyZmFjZSBEZWZhdWx0UmVxdWVzdCB7XG4gICAgbWV0aG9kOiBzdHJpbmcsXG4gICAgaGVhZGVyczoge30sXG4gICAgY3JlZGVudGlhbHM6IHN0cmluZ1xuICAgIGJvZHk/OiB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcGlDYWxscyB7XG5cbiAgICAvL1RPRE86IGltcGxlbWVudCBvdGhlciBodHRwIGNvbW1hbmRzXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyByZXF1ZXN0KGFkZHJlc3MsIG1ldGhvZCwgcmVxdWVzdEJvZHkgPSBudWxsKXtcbiAgICAgICAgdmFyIGxvd2VyID0gbWV0aG9kLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHZhciByZXF1ZXN0SW5pdDtcbiAgICAgICAgc3dpdGNoKGxvd2VyKXtcbiAgICAgICAgICAgIGNhc2UgJ3Bvc3QnOlxuICAgICAgICAgICAgICAgIHJlcXVlc3RJbml0ID0gdGhpcy5jcmVhdGVSZXF1ZXN0KHJlcXVlc3RCb2R5LCAncG9zdCcpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZ2V0JzpcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmVxdWVzdEluaXQgPSB0aGlzLmNyZWF0ZVJlcXVlc3QocmVxdWVzdEJvZHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGF3YWl0IGZldGNoKGFkZHJlc3MsIHJlcXVlc3RJbml0KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgY3JlYXRlUmVxdWVzdChib2R5LCByZXF1ZXN0TWV0aG9kID0gJ2dldCcpOiBEZWZhdWx0UmVxdWVzdCB7XG4gICAgICAgIGxldCByZXE6IERlZmF1bHRSZXF1ZXN0ID17XG4gICAgICAgICAgICBtZXRob2Q6IHJlcXVlc3RNZXRob2QsXG4gICAgICAgICAgICBoZWFkZXJzOiByZXF1ZXN0SGVhZGVyLFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6IHJlcXVlc3RDcmVkZW50aWFsc1xuICAgICAgICB9O1xuICAgICAgICBpZiAoYm9keSAhPSBudWxsKVxuICAgICAgICAgICAgcmVxLmJvZHkgPSBKU09OLnN0cmluZ2lmeShib2R5KTtcblxuICAgICAgICByZXR1cm4gcmVxO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvaGVscGVycy9hcGlDYWxscy50c3giLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgVWludDhBcnJheSA9IHJvb3QuVWludDhBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBVaW50OEFycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fVWludDhBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VUaW1lcyA9IHJlcXVpcmUoJy4vX2Jhc2VUaW1lcycpLFxuICAgIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJy4vaXNCdWZmZXInKSxcbiAgICBpc0luZGV4ID0gcmVxdWlyZSgnLi9faXNJbmRleCcpLFxuICAgIGlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vaXNUeXBlZEFycmF5Jyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiB0aGUgYXJyYXktbGlrZSBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5oZXJpdGVkIFNwZWNpZnkgcmV0dXJuaW5nIGluaGVyaXRlZCBwcm9wZXJ0eSBuYW1lcy5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TGlrZUtleXModmFsdWUsIGluaGVyaXRlZCkge1xuICB2YXIgaXNBcnIgPSBpc0FycmF5KHZhbHVlKSxcbiAgICAgIGlzQXJnID0gIWlzQXJyICYmIGlzQXJndW1lbnRzKHZhbHVlKSxcbiAgICAgIGlzQnVmZiA9ICFpc0FyciAmJiAhaXNBcmcgJiYgaXNCdWZmZXIodmFsdWUpLFxuICAgICAgaXNUeXBlID0gIWlzQXJyICYmICFpc0FyZyAmJiAhaXNCdWZmICYmIGlzVHlwZWRBcnJheSh2YWx1ZSksXG4gICAgICBza2lwSW5kZXhlcyA9IGlzQXJyIHx8IGlzQXJnIHx8IGlzQnVmZiB8fCBpc1R5cGUsXG4gICAgICByZXN1bHQgPSBza2lwSW5kZXhlcyA/IGJhc2VUaW1lcyh2YWx1ZS5sZW5ndGgsIFN0cmluZykgOiBbXSxcbiAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG5cbiAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgaWYgKChpbmhlcml0ZWQgfHwgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwga2V5KSkgJiZcbiAgICAgICAgIShza2lwSW5kZXhlcyAmJiAoXG4gICAgICAgICAgIC8vIFNhZmFyaSA5IGhhcyBlbnVtZXJhYmxlIGBhcmd1bWVudHMubGVuZ3RoYCBpbiBzdHJpY3QgbW9kZS5cbiAgICAgICAgICAga2V5ID09ICdsZW5ndGgnIHx8XG4gICAgICAgICAgIC8vIE5vZGUuanMgMC4xMCBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiBidWZmZXJzLlxuICAgICAgICAgICAoaXNCdWZmICYmIChrZXkgPT0gJ29mZnNldCcgfHwga2V5ID09ICdwYXJlbnQnKSkgfHxcbiAgICAgICAgICAgLy8gUGhhbnRvbUpTIDIgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gdHlwZWQgYXJyYXlzLlxuICAgICAgICAgICAoaXNUeXBlICYmIChrZXkgPT0gJ2J1ZmZlcicgfHwga2V5ID09ICdieXRlTGVuZ3RoJyB8fCBrZXkgPT0gJ2J5dGVPZmZzZXQnKSkgfHxcbiAgICAgICAgICAgLy8gU2tpcCBpbmRleCBwcm9wZXJ0aWVzLlxuICAgICAgICAgICBpc0luZGV4KGtleSwgbGVuZ3RoKVxuICAgICAgICApKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUxpa2VLZXlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYXJyYXlMaWtlS2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ubWFwYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWVcbiAqIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBtYXBwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TWFwKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheU1hcDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2FycmF5TWFwLmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUFzc2lnblZhbHVlID0gcmVxdWlyZSgnLi9fYmFzZUFzc2lnblZhbHVlJyksXG4gICAgZXEgPSByZXF1aXJlKCcuL2VxJyk7XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyBsaWtlIGBhc3NpZ25WYWx1ZWAgZXhjZXB0IHRoYXQgaXQgZG9lc24ndCBhc3NpZ25cbiAqIGB1bmRlZmluZWRgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBhc3NpZ25NZXJnZVZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBpZiAoKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgIWVxKG9iamVjdFtrZXldLCB2YWx1ZSkpIHx8XG4gICAgICAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSkge1xuICAgIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzaWduTWVyZ2VWYWx1ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Fzc2lnbk1lcmdlVmFsdWUuanNcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjcmVhdGVCYXNlRm9yID0gcmVxdWlyZSgnLi9fY3JlYXRlQmFzZUZvcicpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBiYXNlRm9yT3duYCB3aGljaCBpdGVyYXRlcyBvdmVyIGBvYmplY3RgXG4gKiBwcm9wZXJ0aWVzIHJldHVybmVkIGJ5IGBrZXlzRnVuY2AgYW5kIGludm9rZXMgYGl0ZXJhdGVlYCBmb3IgZWFjaCBwcm9wZXJ0eS5cbiAqIEl0ZXJhdGVlIGZ1bmN0aW9ucyBtYXkgZXhpdCBpdGVyYXRpb24gZWFybHkgYnkgZXhwbGljaXRseSByZXR1cm5pbmcgYGZhbHNlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXlzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBrZXlzIG9mIGBvYmplY3RgLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xudmFyIGJhc2VGb3IgPSBjcmVhdGVCYXNlRm9yKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUZvcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VGb3IuanNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjYXN0UGF0aCA9IHJlcXVpcmUoJy4vX2Nhc3RQYXRoJyksXG4gICAgdG9LZXkgPSByZXF1aXJlKCcuL190b0tleScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmdldGAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWZhdWx0IHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXNvbHZlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldChvYmplY3QsIHBhdGgpIHtcbiAgcGF0aCA9IGNhc3RQYXRoKHBhdGgsIG9iamVjdCk7XG5cbiAgdmFyIGluZGV4ID0gMCxcbiAgICAgIGxlbmd0aCA9IHBhdGgubGVuZ3RoO1xuXG4gIHdoaWxlIChvYmplY3QgIT0gbnVsbCAmJiBpbmRleCA8IGxlbmd0aCkge1xuICAgIG9iamVjdCA9IG9iamVjdFt0b0tleShwYXRoW2luZGV4KytdKV07XG4gIH1cbiAgcmV0dXJuIChpbmRleCAmJiBpbmRleCA9PSBsZW5ndGgpID8gb2JqZWN0IDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlR2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzS2V5ID0gcmVxdWlyZSgnLi9faXNLZXknKSxcbiAgICBzdHJpbmdUb1BhdGggPSByZXF1aXJlKCcuL19zdHJpbmdUb1BhdGgnKSxcbiAgICB0b1N0cmluZyA9IHJlcXVpcmUoJy4vdG9TdHJpbmcnKTtcblxuLyoqXG4gKiBDYXN0cyBgdmFsdWVgIHRvIGEgcGF0aCBhcnJheSBpZiBpdCdzIG5vdCBvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeSBrZXlzIG9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjYXN0IHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGNhc3RQYXRoKHZhbHVlLCBvYmplY3QpIHtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHJldHVybiBpc0tleSh2YWx1ZSwgb2JqZWN0KSA/IFt2YWx1ZV0gOiBzdHJpbmdUb1BhdGgodG9TdHJpbmcodmFsdWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjYXN0UGF0aDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Nhc3RQYXRoLmpzXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcGllcyB0aGUgdmFsdWVzIG9mIGBzb3VyY2VgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IHNvdXJjZSBUaGUgYXJyYXkgdG8gY29weSB2YWx1ZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheT1bXV0gVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIHRvLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlBcnJheShzb3VyY2UsIGFycmF5KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gc291cmNlLmxlbmd0aDtcblxuICBhcnJheSB8fCAoYXJyYXkgPSBBcnJheShsZW5ndGgpKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtpbmRleF0gPSBzb3VyY2VbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb3B5QXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19jb3B5QXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKTtcblxudmFyIGRlZmluZVByb3BlcnR5ID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIHZhciBmdW5jID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2RlZmluZVByb3BlcnR5Jyk7XG4gICAgZnVuYyh7fSwgJycsIHt9KTtcbiAgICByZXR1cm4gZnVuYztcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmaW5lUHJvcGVydHk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19kZWZpbmVQcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFNldENhY2hlID0gcmVxdWlyZSgnLi9fU2V0Q2FjaGUnKSxcbiAgICBhcnJheVNvbWUgPSByZXF1aXJlKCcuL19hcnJheVNvbWUnKSxcbiAgICBjYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2NhY2hlSGFzJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMSxcbiAgICBDT01QQVJFX1VOT1JERVJFRF9GTEFHID0gMjtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIGFycmF5cyB3aXRoIHN1cHBvcnQgZm9yXG4gKiBwYXJ0aWFsIGRlZXAgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtBcnJheX0gb3RoZXIgVGhlIG90aGVyIGFycmF5IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGFjayBUcmFja3MgdHJhdmVyc2VkIGBhcnJheWAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYXJyYXlzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsQXJyYXlzKGFycmF5LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHLFxuICAgICAgYXJyTGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgb3RoTGVuZ3RoID0gb3RoZXIubGVuZ3RoO1xuXG4gIGlmIChhcnJMZW5ndGggIT0gb3RoTGVuZ3RoICYmICEoaXNQYXJ0aWFsICYmIG90aExlbmd0aCA+IGFyckxlbmd0aCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gQXNzdW1lIGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldChhcnJheSk7XG4gIGlmIChzdGFja2VkICYmIHN0YWNrLmdldChvdGhlcikpIHtcbiAgICByZXR1cm4gc3RhY2tlZCA9PSBvdGhlcjtcbiAgfVxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IHRydWUsXG4gICAgICBzZWVuID0gKGJpdG1hc2sgJiBDT01QQVJFX1VOT1JERVJFRF9GTEFHKSA/IG5ldyBTZXRDYWNoZSA6IHVuZGVmaW5lZDtcblxuICBzdGFjay5zZXQoYXJyYXksIG90aGVyKTtcbiAgc3RhY2suc2V0KG90aGVyLCBhcnJheSk7XG5cbiAgLy8gSWdub3JlIG5vbi1pbmRleCBwcm9wZXJ0aWVzLlxuICB3aGlsZSAoKytpbmRleCA8IGFyckxlbmd0aCkge1xuICAgIHZhciBhcnJWYWx1ZSA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgb3RoVmFsdWUgPSBvdGhlcltpbmRleF07XG5cbiAgICBpZiAoY3VzdG9taXplcikge1xuICAgICAgdmFyIGNvbXBhcmVkID0gaXNQYXJ0aWFsXG4gICAgICAgID8gY3VzdG9taXplcihvdGhWYWx1ZSwgYXJyVmFsdWUsIGluZGV4LCBvdGhlciwgYXJyYXksIHN0YWNrKVxuICAgICAgICA6IGN1c3RvbWl6ZXIoYXJyVmFsdWUsIG90aFZhbHVlLCBpbmRleCwgYXJyYXksIG90aGVyLCBzdGFjayk7XG4gICAgfVxuICAgIGlmIChjb21wYXJlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoY29tcGFyZWQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIGFycmF5cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGlmIChzZWVuKSB7XG4gICAgICBpZiAoIWFycmF5U29tZShvdGhlciwgZnVuY3Rpb24ob3RoVmFsdWUsIG90aEluZGV4KSB7XG4gICAgICAgICAgICBpZiAoIWNhY2hlSGFzKHNlZW4sIG90aEluZGV4KSAmJlxuICAgICAgICAgICAgICAgIChhcnJWYWx1ZSA9PT0gb3RoVmFsdWUgfHwgZXF1YWxGdW5jKGFyclZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spKSkge1xuICAgICAgICAgICAgICByZXR1cm4gc2Vlbi5wdXNoKG90aEluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSkge1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghKFxuICAgICAgICAgIGFyclZhbHVlID09PSBvdGhWYWx1ZSB8fFxuICAgICAgICAgICAgZXF1YWxGdW5jKGFyclZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spXG4gICAgICAgICkpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHN0YWNrWydkZWxldGUnXShhcnJheSk7XG4gIHN0YWNrWydkZWxldGUnXShvdGhlcik7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXF1YWxBcnJheXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19lcXVhbEFycmF5cy5qc1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciBzdHJpY3QgZXF1YWxpdHkgY29tcGFyaXNvbnMsIGkuZS4gYD09PWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaWYgc3VpdGFibGUgZm9yIHN0cmljdFxuICogIGVxdWFsaXR5IGNvbXBhcmlzb25zLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaWN0Q29tcGFyYWJsZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IHZhbHVlICYmICFpc09iamVjdCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTdHJpY3RDb21wYXJhYmxlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faXNTdHJpY3RDb21wYXJhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSA1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgbWF0Y2hlc1Byb3BlcnR5YCBmb3Igc291cmNlIHZhbHVlcyBzdWl0YWJsZVxuICogZm9yIHN0cmljdCBlcXVhbGl0eSBjb21wYXJpc29ucywgaS5lLiBgPT09YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcGFyYW0geyp9IHNyY1ZhbHVlIFRoZSB2YWx1ZSB0byBtYXRjaC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHNwZWMgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlKGtleSwgc3JjVmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0W2tleV0gPT09IHNyY1ZhbHVlICYmXG4gICAgICAoc3JjVmFsdWUgIT09IHVuZGVmaW5lZCB8fCAoa2V5IGluIE9iamVjdChvYmplY3QpKSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWF0Y2hlc1N0cmljdENvbXBhcmFibGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19tYXRjaGVzU3RyaWN0Q29tcGFyYWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG1lbW9pemVDYXBwZWQgPSByZXF1aXJlKCcuL19tZW1vaXplQ2FwcGVkJyk7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIHByb3BlcnR5IG5hbWVzIHdpdGhpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZUxlYWRpbmdEb3QgPSAvXlxcLi8sXG4gICAgcmVQcm9wTmFtZSA9IC9bXi5bXFxdXSt8XFxbKD86KC0/XFxkKyg/OlxcLlxcZCspPyl8KFtcIiddKSgoPzooPyFcXDIpW15cXFxcXXxcXFxcLikqPylcXDIpXFxdfCg/PSg/OlxcLnxcXFtcXF0pKD86XFwufFxcW1xcXXwkKSkvZztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggYmFja3NsYXNoZXMgaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgcmVFc2NhcGVDaGFyID0gL1xcXFwoXFxcXCk/L2c7XG5cbi8qKlxuICogQ29udmVydHMgYHN0cmluZ2AgdG8gYSBwcm9wZXJ0eSBwYXRoIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqL1xudmFyIHN0cmluZ1RvUGF0aCA9IG1lbW9pemVDYXBwZWQoZnVuY3Rpb24oc3RyaW5nKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgaWYgKHJlTGVhZGluZ0RvdC50ZXN0KHN0cmluZykpIHtcbiAgICByZXN1bHQucHVzaCgnJyk7XG4gIH1cbiAgc3RyaW5nLnJlcGxhY2UocmVQcm9wTmFtZSwgZnVuY3Rpb24obWF0Y2gsIG51bWJlciwgcXVvdGUsIHN0cmluZykge1xuICAgIHJlc3VsdC5wdXNoKHF1b3RlID8gc3RyaW5nLnJlcGxhY2UocmVFc2NhcGVDaGFyLCAnJDEnKSA6IChudW1iZXIgfHwgbWF0Y2gpKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpbmdUb1BhdGg7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19zdHJpbmdUb1BhdGguanNcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYGZ1bmNgIHRvIGl0cyBzb3VyY2UgY29kZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHNvdXJjZSBjb2RlLlxuICovXG5mdW5jdGlvbiB0b1NvdXJjZShmdW5jKSB7XG4gIGlmIChmdW5jICE9IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZ1bmNUb1N0cmluZy5jYWxsKGZ1bmMpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoZnVuYyArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiAnJztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1NvdXJjZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3RvU291cmNlLmpzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUlzRXF1YWwgPSByZXF1aXJlKCcuL19iYXNlSXNFcXVhbCcpO1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uaXNFcXVhbGAgZXhjZXB0IHRoYXQgaXQgYWNjZXB0cyBgY3VzdG9taXplcmAgd2hpY2hcbiAqIGlzIGludm9rZWQgdG8gY29tcGFyZSB2YWx1ZXMuIElmIGBjdXN0b21pemVyYCByZXR1cm5zIGB1bmRlZmluZWRgLCBjb21wYXJpc29uc1xuICogYXJlIGhhbmRsZWQgYnkgdGhlIG1ldGhvZCBpbnN0ZWFkLiBUaGUgYGN1c3RvbWl6ZXJgIGlzIGludm9rZWQgd2l0aCB1cCB0b1xuICogc2l4IGFyZ3VtZW50czogKG9ialZhbHVlLCBvdGhWYWx1ZSBbLCBpbmRleHxrZXksIG9iamVjdCwgb3RoZXIsIHN0YWNrXSkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBpc0dyZWV0aW5nKHZhbHVlKSB7XG4gKiAgIHJldHVybiAvXmgoPzppfGVsbG8pJC8udGVzdCh2YWx1ZSk7XG4gKiB9XG4gKlxuICogZnVuY3Rpb24gY3VzdG9taXplcihvYmpWYWx1ZSwgb3RoVmFsdWUpIHtcbiAqICAgaWYgKGlzR3JlZXRpbmcob2JqVmFsdWUpICYmIGlzR3JlZXRpbmcob3RoVmFsdWUpKSB7XG4gKiAgICAgcmV0dXJuIHRydWU7XG4gKiAgIH1cbiAqIH1cbiAqXG4gKiB2YXIgYXJyYXkgPSBbJ2hlbGxvJywgJ2dvb2RieWUnXTtcbiAqIHZhciBvdGhlciA9IFsnaGknLCAnZ29vZGJ5ZSddO1xuICpcbiAqIF8uaXNFcXVhbFdpdGgoYXJyYXksIG90aGVyLCBjdXN0b21pemVyKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaXNFcXVhbFdpdGgodmFsdWUsIG90aGVyLCBjdXN0b21pemVyKSB7XG4gIGN1c3RvbWl6ZXIgPSB0eXBlb2YgY3VzdG9taXplciA9PSAnZnVuY3Rpb24nID8gY3VzdG9taXplciA6IHVuZGVmaW5lZDtcbiAgdmFyIHJlc3VsdCA9IGN1c3RvbWl6ZXIgPyBjdXN0b21pemVyKHZhbHVlLCBvdGhlcikgOiB1bmRlZmluZWQ7XG4gIHJldHVybiByZXN1bHQgPT09IHVuZGVmaW5lZCA/IGJhc2VJc0VxdWFsKHZhbHVlLCBvdGhlciwgdW5kZWZpbmVkLCBjdXN0b21pemVyKSA6ICEhcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRXF1YWxXaXRoO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0VxdWFsV2l0aC5qc1xuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFycmF5TGlrZUtleXMgPSByZXF1aXJlKCcuL19hcnJheUxpa2VLZXlzJyksXG4gICAgYmFzZUtleXNJbiA9IHJlcXVpcmUoJy4vX2Jhc2VLZXlzSW4nKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gYW5kIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5c0luKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InLCAnYyddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKi9cbmZ1bmN0aW9uIGtleXNJbihvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCwgdHJ1ZSkgOiBiYXNlS2V5c0luKG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5c0luO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9rZXlzSW4uanNcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlQXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19iYXNlQXNzaWduVmFsdWUnKSxcbiAgICBiYXNlRm9yT3duID0gcmVxdWlyZSgnLi9fYmFzZUZvck93bicpLFxuICAgIGJhc2VJdGVyYXRlZSA9IHJlcXVpcmUoJy4vX2Jhc2VJdGVyYXRlZScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gb2JqZWN0IHdpdGggdGhlIHNhbWUga2V5cyBhcyBgb2JqZWN0YCBhbmQgdmFsdWVzIGdlbmVyYXRlZFxuICogYnkgcnVubmluZyBlYWNoIG93biBlbnVtZXJhYmxlIHN0cmluZyBrZXllZCBwcm9wZXJ0eSBvZiBgb2JqZWN0YCB0aHJ1XG4gKiBgaXRlcmF0ZWVgLiBUaGUgaXRlcmF0ZWUgaXMgaW52b2tlZCB3aXRoIHRocmVlIGFyZ3VtZW50czpcbiAqICh2YWx1ZSwga2V5LCBvYmplY3QpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbaXRlcmF0ZWU9Xy5pZGVudGl0eV0gVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG5ldyBtYXBwZWQgb2JqZWN0LlxuICogQHNlZSBfLm1hcEtleXNcbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIHVzZXJzID0ge1xuICogICAnZnJlZCc6ICAgIHsgJ3VzZXInOiAnZnJlZCcsICAgICdhZ2UnOiA0MCB9LFxuICogICAncGViYmxlcyc6IHsgJ3VzZXInOiAncGViYmxlcycsICdhZ2UnOiAxIH1cbiAqIH07XG4gKlxuICogXy5tYXBWYWx1ZXModXNlcnMsIGZ1bmN0aW9uKG8pIHsgcmV0dXJuIG8uYWdlOyB9KTtcbiAqIC8vID0+IHsgJ2ZyZWQnOiA0MCwgJ3BlYmJsZXMnOiAxIH0gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqXG4gKiAvLyBUaGUgYF8ucHJvcGVydHlgIGl0ZXJhdGVlIHNob3J0aGFuZC5cbiAqIF8ubWFwVmFsdWVzKHVzZXJzLCAnYWdlJyk7XG4gKiAvLyA9PiB7ICdmcmVkJzogNDAsICdwZWJibGVzJzogMSB9IChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKi9cbmZ1bmN0aW9uIG1hcFZhbHVlcyhvYmplY3QsIGl0ZXJhdGVlKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgaXRlcmF0ZWUgPSBiYXNlSXRlcmF0ZWUoaXRlcmF0ZWUsIDMpO1xuXG4gIGJhc2VGb3JPd24ob2JqZWN0LCBmdW5jdGlvbih2YWx1ZSwga2V5LCBvYmplY3QpIHtcbiAgICBiYXNlQXNzaWduVmFsdWUocmVzdWx0LCBrZXksIGl0ZXJhdGVlKHZhbHVlLCBrZXksIG9iamVjdCkpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBWYWx1ZXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL21hcFZhbHVlcy5qc1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VUb1N0cmluZyA9IHJlcXVpcmUoJy4vX2Jhc2VUb1N0cmluZycpO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcuIEFuIGVtcHR5IHN0cmluZyBpcyByZXR1cm5lZCBmb3IgYG51bGxgXG4gKiBhbmQgYHVuZGVmaW5lZGAgdmFsdWVzLiBUaGUgc2lnbiBvZiBgLTBgIGlzIHByZXNlcnZlZC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9TdHJpbmcobnVsbCk7XG4gKiAvLyA9PiAnJ1xuICpcbiAqIF8udG9TdHJpbmcoLTApO1xuICogLy8gPT4gJy0wJ1xuICpcbiAqIF8udG9TdHJpbmcoWzEsIDIsIDNdKTtcbiAqIC8vID0+ICcxLDIsMydcbiAqL1xuZnVuY3Rpb24gdG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyAnJyA6IGJhc2VUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9TdHJpbmc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL3RvU3RyaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXM2RXJyb3IgPSByZXF1aXJlKCdlczYtZXJyb3InKTtcblxudmFyIF9lczZFcnJvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9lczZFcnJvcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFN1Ym1pc3Npb25FcnJvciA9IGZ1bmN0aW9uIChfRXh0ZW5kYWJsZUVycm9yKSB7XG4gIF9pbmhlcml0cyhTdWJtaXNzaW9uRXJyb3IsIF9FeHRlbmRhYmxlRXJyb3IpO1xuXG4gIGZ1bmN0aW9uIFN1Ym1pc3Npb25FcnJvcihlcnJvcnMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3VibWlzc2lvbkVycm9yKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChTdWJtaXNzaW9uRXJyb3IuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihTdWJtaXNzaW9uRXJyb3IpKS5jYWxsKHRoaXMsICdTdWJtaXQgVmFsaWRhdGlvbiBGYWlsZWQnKSk7XG5cbiAgICBfdGhpcy5lcnJvcnMgPSBlcnJvcnM7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgcmV0dXJuIFN1Ym1pc3Npb25FcnJvcjtcbn0oX2VzNkVycm9yMi5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gU3VibWlzc2lvbkVycm9yO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC1mb3JtL2xpYi9TdWJtaXNzaW9uRXJyb3IuanNcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMudXBkYXRlU3luY1dhcm5pbmdzID0gZXhwb3J0cy51cGRhdGVTeW5jRXJyb3JzID0gZXhwb3J0cy51bnRvdWNoID0gZXhwb3J0cy51bnJlZ2lzdGVyRmllbGQgPSBleHBvcnRzLnRvdWNoID0gZXhwb3J0cy5zZXRTdWJtaXRTdWNjZWVkZWQgPSBleHBvcnRzLnNldFN1Ym1pdEZhaWxlZCA9IGV4cG9ydHMuc3VibWl0ID0gZXhwb3J0cy5zdG9wU3VibWl0ID0gZXhwb3J0cy5zdG9wQXN5bmNWYWxpZGF0aW9uID0gZXhwb3J0cy5zdGFydFN1Ym1pdCA9IGV4cG9ydHMuc3RhcnRBc3luY1ZhbGlkYXRpb24gPSBleHBvcnRzLnJlc2V0ID0gZXhwb3J0cy5yZWdpc3RlckZpZWxkID0gZXhwb3J0cy5pbml0aWFsaXplID0gZXhwb3J0cy5mb2N1cyA9IGV4cG9ydHMuZGVzdHJveSA9IGV4cG9ydHMuY2xlYXJBc3luY0Vycm9yID0gZXhwb3J0cy5jbGVhclN1Ym1pdEVycm9ycyA9IGV4cG9ydHMuY2xlYXJTdWJtaXQgPSBleHBvcnRzLmNoYW5nZSA9IGV4cG9ydHMuYmx1ciA9IGV4cG9ydHMuYXV0b2ZpbGwgPSBleHBvcnRzLmFycmF5VW5zaGlmdCA9IGV4cG9ydHMuYXJyYXlTd2FwID0gZXhwb3J0cy5hcnJheVNwbGljZSA9IGV4cG9ydHMuYXJyYXlTaGlmdCA9IGV4cG9ydHMuYXJyYXlSZW1vdmVBbGwgPSBleHBvcnRzLmFycmF5UmVtb3ZlID0gZXhwb3J0cy5hcnJheVB1c2ggPSBleHBvcnRzLmFycmF5UG9wID0gZXhwb3J0cy5hcnJheU1vdmUgPSBleHBvcnRzLmFycmF5SW5zZXJ0ID0gdW5kZWZpbmVkO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2FjdGlvblR5cGVzID0gcmVxdWlyZSgnLi9hY3Rpb25UeXBlcycpO1xuXG52YXIgYXJyYXlJbnNlcnQgPSBleHBvcnRzLmFycmF5SW5zZXJ0ID0gZnVuY3Rpb24gYXJyYXlJbnNlcnQoZm9ybSwgZmllbGQsIGluZGV4LCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IF9hY3Rpb25UeXBlcy5BUlJBWV9JTlNFUlQsXG4gICAgbWV0YTogeyBmb3JtOiBmb3JtLCBmaWVsZDogZmllbGQsIGluZGV4OiBpbmRleCB9LFxuICAgIHBheWxvYWQ6IHZhbHVlXG4gIH07XG59O1xuXG52YXIgYXJyYXlNb3ZlID0gZXhwb3J0cy5hcnJheU1vdmUgPSBmdW5jdGlvbiBhcnJheU1vdmUoZm9ybSwgZmllbGQsIGZyb20sIHRvKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogX2FjdGlvblR5cGVzLkFSUkFZX01PVkUsXG4gICAgbWV0YTogeyBmb3JtOiBmb3JtLCBmaWVsZDogZmllbGQsIGZyb206IGZyb20sIHRvOiB0byB9XG4gIH07XG59O1xuXG52YXIgYXJyYXlQb3AgPSBleHBvcnRzLmFycmF5UG9wID0gZnVuY3Rpb24gYXJyYXlQb3AoZm9ybSwgZmllbGQpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBfYWN0aW9uVHlwZXMuQVJSQVlfUE9QLFxuICAgIG1ldGE6IHsgZm9ybTogZm9ybSwgZmllbGQ6IGZpZWxkIH1cbiAgfTtcbn07XG5cbnZhciBhcnJheVB1c2ggPSBleHBvcnRzLmFycmF5UHVzaCA9IGZ1bmN0aW9uIGFycmF5UHVzaChmb3JtLCBmaWVsZCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBfYWN0aW9uVHlwZXMuQVJSQVlfUFVTSCxcbiAgICBtZXRhOiB7IGZvcm06IGZvcm0sIGZpZWxkOiBmaWVsZCB9LFxuICAgIHBheWxvYWQ6IHZhbHVlXG4gIH07XG59O1xuXG52YXIgYXJyYXlSZW1vdmUgPSBleHBvcnRzLmFycmF5UmVtb3ZlID0gZnVuY3Rpb24gYXJyYXlSZW1vdmUoZm9ybSwgZmllbGQsIGluZGV4KSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogX2FjdGlvblR5cGVzLkFSUkFZX1JFTU9WRSxcbiAgICBtZXRhOiB7IGZvcm06IGZvcm0sIGZpZWxkOiBmaWVsZCwgaW5kZXg6IGluZGV4IH1cbiAgfTtcbn07XG5cbnZhciBhcnJheVJlbW92ZUFsbCA9IGV4cG9ydHMuYXJyYXlSZW1vdmVBbGwgPSBmdW5jdGlvbiBhcnJheVJlbW92ZUFsbChmb3JtLCBmaWVsZCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IF9hY3Rpb25UeXBlcy5BUlJBWV9SRU1PVkVfQUxMLFxuICAgIG1ldGE6IHsgZm9ybTogZm9ybSwgZmllbGQ6IGZpZWxkIH1cbiAgfTtcbn07XG5cbnZhciBhcnJheVNoaWZ0ID0gZXhwb3J0cy5hcnJheVNoaWZ0ID0gZnVuY3Rpb24gYXJyYXlTaGlmdChmb3JtLCBmaWVsZCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IF9hY3Rpb25UeXBlcy5BUlJBWV9TSElGVCxcbiAgICBtZXRhOiB7IGZvcm06IGZvcm0sIGZpZWxkOiBmaWVsZCB9XG4gIH07XG59O1xuXG52YXIgYXJyYXlTcGxpY2UgPSBleHBvcnRzLmFycmF5U3BsaWNlID0gZnVuY3Rpb24gYXJyYXlTcGxpY2UoZm9ybSwgZmllbGQsIGluZGV4LCByZW1vdmVOdW0sIHZhbHVlKSB7XG4gIHZhciBhY3Rpb24gPSB7XG4gICAgdHlwZTogX2FjdGlvblR5cGVzLkFSUkFZX1NQTElDRSxcbiAgICBtZXRhOiB7IGZvcm06IGZvcm0sIGZpZWxkOiBmaWVsZCwgaW5kZXg6IGluZGV4LCByZW1vdmVOdW06IHJlbW92ZU51bSB9XG4gIH07XG4gIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgYWN0aW9uLnBheWxvYWQgPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gYWN0aW9uO1xufTtcblxudmFyIGFycmF5U3dhcCA9IGV4cG9ydHMuYXJyYXlTd2FwID0gZnVuY3Rpb24gYXJyYXlTd2FwKGZvcm0sIGZpZWxkLCBpbmRleEEsIGluZGV4Qikge1xuICBpZiAoaW5kZXhBID09PSBpbmRleEIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1N3YXAgaW5kaWNlcyBjYW5ub3QgYmUgZXF1YWwnKTtcbiAgfVxuICBpZiAoaW5kZXhBIDwgMCB8fCBpbmRleEIgPCAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTd2FwIGluZGljZXMgY2Fubm90IGJlIG5lZ2F0aXZlJyk7XG4gIH1cbiAgcmV0dXJuIHsgdHlwZTogX2FjdGlvblR5cGVzLkFSUkFZX1NXQVAsIG1ldGE6IHsgZm9ybTogZm9ybSwgZmllbGQ6IGZpZWxkLCBpbmRleEE6IGluZGV4QSwgaW5kZXhCOiBpbmRleEIgfSB9O1xufTtcblxudmFyIGFycmF5VW5zaGlmdCA9IGV4cG9ydHMuYXJyYXlVbnNoaWZ0ID0gZnVuY3Rpb24gYXJyYXlVbnNoaWZ0KGZvcm0sIGZpZWxkLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IF9hY3Rpb25UeXBlcy5BUlJBWV9VTlNISUZULFxuICAgIG1ldGE6IHsgZm9ybTogZm9ybSwgZmllbGQ6IGZpZWxkIH0sXG4gICAgcGF5bG9hZDogdmFsdWVcbiAgfTtcbn07XG5cbnZhciBhdXRvZmlsbCA9IGV4cG9ydHMuYXV0b2ZpbGwgPSBmdW5jdGlvbiBhdXRvZmlsbChmb3JtLCBmaWVsZCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBfYWN0aW9uVHlwZXMuQVVUT0ZJTEwsXG4gICAgbWV0YTogeyBmb3JtOiBmb3JtLCBmaWVsZDogZmllbGQgfSxcbiAgICBwYXlsb2FkOiB2YWx1ZVxuICB9O1xufTtcblxudmFyIGJsdXIgPSBleHBvcnRzLmJsdXIgPSBmdW5jdGlvbiBibHVyKGZvcm0sIGZpZWxkLCB2YWx1ZSwgdG91Y2gpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBfYWN0aW9uVHlwZXMuQkxVUixcbiAgICBtZXRhOiB7IGZvcm06IGZvcm0sIGZpZWxkOiBmaWVsZCwgdG91Y2g6IHRvdWNoIH0sXG4gICAgcGF5bG9hZDogdmFsdWVcbiAgfTtcbn07XG5cbnZhciBjaGFuZ2UgPSBleHBvcnRzLmNoYW5nZSA9IGZ1bmN0aW9uIGNoYW5nZShmb3JtLCBmaWVsZCwgdmFsdWUsIHRvdWNoLCBwZXJzaXN0ZW50U3VibWl0RXJyb3JzKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogX2FjdGlvblR5cGVzLkNIQU5HRSxcbiAgICBtZXRhOiB7IGZvcm06IGZvcm0sIGZpZWxkOiBmaWVsZCwgdG91Y2g6IHRvdWNoLCBwZXJzaXN0ZW50U3VibWl0RXJyb3JzOiBwZXJzaXN0ZW50U3VibWl0RXJyb3JzIH0sXG4gICAgcGF5bG9hZDogdmFsdWVcbiAgfTtcbn07XG5cbnZhciBjbGVhclN1Ym1pdCA9IGV4cG9ydHMuY2xlYXJTdWJtaXQgPSBmdW5jdGlvbiBjbGVhclN1Ym1pdChmb3JtKSB7XG4gIHJldHVybiB7IHR5cGU6IF9hY3Rpb25UeXBlcy5DTEVBUl9TVUJNSVQsIG1ldGE6IHsgZm9ybTogZm9ybSB9IH07XG59O1xuXG52YXIgY2xlYXJTdWJtaXRFcnJvcnMgPSBleHBvcnRzLmNsZWFyU3VibWl0RXJyb3JzID0gZnVuY3Rpb24gY2xlYXJTdWJtaXRFcnJvcnMoZm9ybSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IF9hY3Rpb25UeXBlcy5DTEVBUl9TVUJNSVRfRVJST1JTLFxuICAgIG1ldGE6IHsgZm9ybTogZm9ybSB9XG4gIH07XG59O1xuXG52YXIgY2xlYXJBc3luY0Vycm9yID0gZXhwb3J0cy5jbGVhckFzeW5jRXJyb3IgPSBmdW5jdGlvbiBjbGVhckFzeW5jRXJyb3IoZm9ybSwgZmllbGQpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBfYWN0aW9uVHlwZXMuQ0xFQVJfQVNZTkNfRVJST1IsXG4gICAgbWV0YTogeyBmb3JtOiBmb3JtLCBmaWVsZDogZmllbGQgfVxuICB9O1xufTtcblxudmFyIGRlc3Ryb3kgPSBleHBvcnRzLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95KCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgZm9ybSA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGZvcm1bX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4geyB0eXBlOiBfYWN0aW9uVHlwZXMuREVTVFJPWSwgbWV0YTogeyBmb3JtOiBmb3JtIH0gfTtcbn07XG5cbnZhciBmb2N1cyA9IGV4cG9ydHMuZm9jdXMgPSBmdW5jdGlvbiBmb2N1cyhmb3JtLCBmaWVsZCkge1xuICByZXR1cm4geyB0eXBlOiBfYWN0aW9uVHlwZXMuRk9DVVMsIG1ldGE6IHsgZm9ybTogZm9ybSwgZmllbGQ6IGZpZWxkIH0gfTtcbn07XG5cbnZhciBpbml0aWFsaXplID0gZXhwb3J0cy5pbml0aWFsaXplID0gZnVuY3Rpb24gaW5pdGlhbGl6ZShmb3JtLCB2YWx1ZXMsIGtlZXBEaXJ0eSkge1xuICB2YXIgb3RoZXJNZXRhID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiB7fTtcblxuICBpZiAoa2VlcERpcnR5IGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgb3RoZXJNZXRhID0ga2VlcERpcnR5O1xuICAgIGtlZXBEaXJ0eSA9IGZhbHNlO1xuICB9XG4gIHJldHVybiB7XG4gICAgdHlwZTogX2FjdGlvblR5cGVzLklOSVRJQUxJWkUsXG4gICAgbWV0YTogX2V4dGVuZHMoeyBmb3JtOiBmb3JtLCBrZWVwRGlydHk6IGtlZXBEaXJ0eSB9LCBvdGhlck1ldGEpLFxuICAgIHBheWxvYWQ6IHZhbHVlc1xuICB9O1xufTtcblxudmFyIHJlZ2lzdGVyRmllbGQgPSBleHBvcnRzLnJlZ2lzdGVyRmllbGQgPSBmdW5jdGlvbiByZWdpc3RlckZpZWxkKGZvcm0sIG5hbWUsIHR5cGUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBfYWN0aW9uVHlwZXMuUkVHSVNURVJfRklFTEQsXG4gICAgbWV0YTogeyBmb3JtOiBmb3JtIH0sXG4gICAgcGF5bG9hZDogeyBuYW1lOiBuYW1lLCB0eXBlOiB0eXBlIH1cbiAgfTtcbn07XG5cbnZhciByZXNldCA9IGV4cG9ydHMucmVzZXQgPSBmdW5jdGlvbiByZXNldChmb3JtKSB7XG4gIHJldHVybiB7IHR5cGU6IF9hY3Rpb25UeXBlcy5SRVNFVCwgbWV0YTogeyBmb3JtOiBmb3JtIH0gfTtcbn07XG5cbnZhciBzdGFydEFzeW5jVmFsaWRhdGlvbiA9IGV4cG9ydHMuc3RhcnRBc3luY1ZhbGlkYXRpb24gPSBmdW5jdGlvbiBzdGFydEFzeW5jVmFsaWRhdGlvbihmb3JtLCBmaWVsZCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IF9hY3Rpb25UeXBlcy5TVEFSVF9BU1lOQ19WQUxJREFUSU9OLFxuICAgIG1ldGE6IHsgZm9ybTogZm9ybSwgZmllbGQ6IGZpZWxkIH1cbiAgfTtcbn07XG5cbnZhciBzdGFydFN1Ym1pdCA9IGV4cG9ydHMuc3RhcnRTdWJtaXQgPSBmdW5jdGlvbiBzdGFydFN1Ym1pdChmb3JtKSB7XG4gIHJldHVybiB7IHR5cGU6IF9hY3Rpb25UeXBlcy5TVEFSVF9TVUJNSVQsIG1ldGE6IHsgZm9ybTogZm9ybSB9IH07XG59O1xuXG52YXIgc3RvcEFzeW5jVmFsaWRhdGlvbiA9IGV4cG9ydHMuc3RvcEFzeW5jVmFsaWRhdGlvbiA9IGZ1bmN0aW9uIHN0b3BBc3luY1ZhbGlkYXRpb24oZm9ybSwgZXJyb3JzKSB7XG4gIHZhciBhY3Rpb24gPSB7XG4gICAgdHlwZTogX2FjdGlvblR5cGVzLlNUT1BfQVNZTkNfVkFMSURBVElPTixcbiAgICBtZXRhOiB7IGZvcm06IGZvcm0gfSxcbiAgICBwYXlsb2FkOiBlcnJvcnNcbiAgfTtcbiAgaWYgKGVycm9ycyAmJiBPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCkge1xuICAgIGFjdGlvbi5lcnJvciA9IHRydWU7XG4gIH1cbiAgcmV0dXJuIGFjdGlvbjtcbn07XG5cbnZhciBzdG9wU3VibWl0ID0gZXhwb3J0cy5zdG9wU3VibWl0ID0gZnVuY3Rpb24gc3RvcFN1Ym1pdChmb3JtLCBlcnJvcnMpIHtcbiAgdmFyIGFjdGlvbiA9IHtcbiAgICB0eXBlOiBfYWN0aW9uVHlwZXMuU1RPUF9TVUJNSVQsXG4gICAgbWV0YTogeyBmb3JtOiBmb3JtIH0sXG4gICAgcGF5bG9hZDogZXJyb3JzXG4gIH07XG4gIGlmIChlcnJvcnMgJiYgT2JqZWN0LmtleXMoZXJyb3JzKS5sZW5ndGgpIHtcbiAgICBhY3Rpb24uZXJyb3IgPSB0cnVlO1xuICB9XG4gIHJldHVybiBhY3Rpb247XG59O1xuXG52YXIgc3VibWl0ID0gZXhwb3J0cy5zdWJtaXQgPSBmdW5jdGlvbiBzdWJtaXQoZm9ybSkge1xuICByZXR1cm4geyB0eXBlOiBfYWN0aW9uVHlwZXMuU1VCTUlULCBtZXRhOiB7IGZvcm06IGZvcm0gfSB9O1xufTtcblxudmFyIHNldFN1Ym1pdEZhaWxlZCA9IGV4cG9ydHMuc2V0U3VibWl0RmFpbGVkID0gZnVuY3Rpb24gc2V0U3VibWl0RmFpbGVkKGZvcm0pIHtcbiAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBmaWVsZHMgPSBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgZmllbGRzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBfYWN0aW9uVHlwZXMuU0VUX1NVQk1JVF9GQUlMRUQsXG4gICAgbWV0YTogeyBmb3JtOiBmb3JtLCBmaWVsZHM6IGZpZWxkcyB9LFxuICAgIGVycm9yOiB0cnVlXG4gIH07XG59O1xuXG52YXIgc2V0U3VibWl0U3VjY2VlZGVkID0gZXhwb3J0cy5zZXRTdWJtaXRTdWNjZWVkZWQgPSBmdW5jdGlvbiBzZXRTdWJtaXRTdWNjZWVkZWQoZm9ybSkge1xuICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIGZpZWxkcyA9IEFycmF5KF9sZW4zID4gMSA/IF9sZW4zIC0gMSA6IDApLCBfa2V5MyA9IDE7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICBmaWVsZHNbX2tleTMgLSAxXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHR5cGU6IF9hY3Rpb25UeXBlcy5TRVRfU1VCTUlUX1NVQ0NFRURFRCxcbiAgICBtZXRhOiB7IGZvcm06IGZvcm0sIGZpZWxkczogZmllbGRzIH0sXG4gICAgZXJyb3I6IGZhbHNlXG4gIH07XG59O1xuXG52YXIgdG91Y2ggPSBleHBvcnRzLnRvdWNoID0gZnVuY3Rpb24gdG91Y2goZm9ybSkge1xuICBmb3IgKHZhciBfbGVuNCA9IGFyZ3VtZW50cy5sZW5ndGgsIGZpZWxkcyA9IEFycmF5KF9sZW40ID4gMSA/IF9sZW40IC0gMSA6IDApLCBfa2V5NCA9IDE7IF9rZXk0IDwgX2xlbjQ7IF9rZXk0KyspIHtcbiAgICBmaWVsZHNbX2tleTQgLSAxXSA9IGFyZ3VtZW50c1tfa2V5NF07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHR5cGU6IF9hY3Rpb25UeXBlcy5UT1VDSCxcbiAgICBtZXRhOiB7IGZvcm06IGZvcm0sIGZpZWxkczogZmllbGRzIH1cbiAgfTtcbn07XG5cbnZhciB1bnJlZ2lzdGVyRmllbGQgPSBleHBvcnRzLnVucmVnaXN0ZXJGaWVsZCA9IGZ1bmN0aW9uIHVucmVnaXN0ZXJGaWVsZChmb3JtLCBuYW1lKSB7XG4gIHZhciBkZXN0cm95T25Vbm1vdW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB0cnVlO1xuICByZXR1cm4ge1xuICAgIHR5cGU6IF9hY3Rpb25UeXBlcy5VTlJFR0lTVEVSX0ZJRUxELFxuICAgIG1ldGE6IHsgZm9ybTogZm9ybSB9LFxuICAgIHBheWxvYWQ6IHsgbmFtZTogbmFtZSwgZGVzdHJveU9uVW5tb3VudDogZGVzdHJveU9uVW5tb3VudCB9XG4gIH07XG59O1xuXG52YXIgdW50b3VjaCA9IGV4cG9ydHMudW50b3VjaCA9IGZ1bmN0aW9uIHVudG91Y2goZm9ybSkge1xuICBmb3IgKHZhciBfbGVuNSA9IGFyZ3VtZW50cy5sZW5ndGgsIGZpZWxkcyA9IEFycmF5KF9sZW41ID4gMSA/IF9sZW41IC0gMSA6IDApLCBfa2V5NSA9IDE7IF9rZXk1IDwgX2xlbjU7IF9rZXk1KyspIHtcbiAgICBmaWVsZHNbX2tleTUgLSAxXSA9IGFyZ3VtZW50c1tfa2V5NV07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHR5cGU6IF9hY3Rpb25UeXBlcy5VTlRPVUNILFxuICAgIG1ldGE6IHsgZm9ybTogZm9ybSwgZmllbGRzOiBmaWVsZHMgfVxuICB9O1xufTtcblxudmFyIHVwZGF0ZVN5bmNFcnJvcnMgPSBleHBvcnRzLnVwZGF0ZVN5bmNFcnJvcnMgPSBmdW5jdGlvbiB1cGRhdGVTeW5jRXJyb3JzKGZvcm0pIHtcbiAgdmFyIHN5bmNFcnJvcnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICB2YXIgZXJyb3IgPSBhcmd1bWVudHNbMl07XG4gIHJldHVybiB7XG4gICAgdHlwZTogX2FjdGlvblR5cGVzLlVQREFURV9TWU5DX0VSUk9SUyxcbiAgICBtZXRhOiB7IGZvcm06IGZvcm0gfSxcbiAgICBwYXlsb2FkOiB7IHN5bmNFcnJvcnM6IHN5bmNFcnJvcnMsIGVycm9yOiBlcnJvciB9XG4gIH07XG59O1xuXG52YXIgdXBkYXRlU3luY1dhcm5pbmdzID0gZXhwb3J0cy51cGRhdGVTeW5jV2FybmluZ3MgPSBmdW5jdGlvbiB1cGRhdGVTeW5jV2FybmluZ3MoZm9ybSkge1xuICB2YXIgc3luY1dhcm5pbmdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgdmFyIHdhcm5pbmcgPSBhcmd1bWVudHNbMl07XG4gIHJldHVybiB7XG4gICAgdHlwZTogX2FjdGlvblR5cGVzLlVQREFURV9TWU5DX1dBUk5JTkdTLFxuICAgIG1ldGE6IHsgZm9ybTogZm9ybSB9LFxuICAgIHBheWxvYWQ6IHsgc3luY1dhcm5pbmdzOiBzeW5jV2FybmluZ3MsIHdhcm5pbmc6IHdhcm5pbmcgfVxuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtZm9ybS9saWIvYWN0aW9ucy5qc1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbnZhciBwcm9jZXNzUHJvcHMgPSBmdW5jdGlvbiBwcm9jZXNzUHJvcHModHlwZSwgcHJvcHMsIF92YWx1ZSkge1xuICB2YXIgdmFsdWUgPSBwcm9wcy52YWx1ZTtcblxuICBpZiAodHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgIGNoZWNrZWQ6ICEhdmFsdWVcbiAgICB9KTtcbiAgfVxuICBpZiAodHlwZSA9PT0gJ3JhZGlvJykge1xuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgIGNoZWNrZWQ6IHZhbHVlID09PSBfdmFsdWUsXG4gICAgICB2YWx1ZTogX3ZhbHVlXG4gICAgfSk7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdzZWxlY3QtbXVsdGlwbGUnKSB7XG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgdmFsdWU6IHZhbHVlIHx8IFtdXG4gICAgfSk7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdmaWxlJykge1xuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSB8fCB1bmRlZmluZWRcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gcHJvcHM7XG59O1xuXG52YXIgY3JlYXRlRmllbGRQcm9wcyA9IGZ1bmN0aW9uIGNyZWF0ZUZpZWxkUHJvcHMoX3JlZjIsIG5hbWUsIF9yZWYpIHtcbiAgdmFyIGdldEluID0gX3JlZjIuZ2V0SW4sXG4gICAgICB0b0pTID0gX3JlZjIudG9KUztcblxuICB2YXIgYXN5bmNFcnJvciA9IF9yZWYuYXN5bmNFcnJvcixcbiAgICAgIGFzeW5jVmFsaWRhdGluZyA9IF9yZWYuYXN5bmNWYWxpZGF0aW5nLFxuICAgICAgb25CbHVyID0gX3JlZi5vbkJsdXIsXG4gICAgICBvbkNoYW5nZSA9IF9yZWYub25DaGFuZ2UsXG4gICAgICBvbkRyb3AgPSBfcmVmLm9uRHJvcCxcbiAgICAgIG9uRHJhZ1N0YXJ0ID0gX3JlZi5vbkRyYWdTdGFydCxcbiAgICAgIGRpcnR5ID0gX3JlZi5kaXJ0eSxcbiAgICAgIGRpc3BhdGNoID0gX3JlZi5kaXNwYXRjaCxcbiAgICAgIG9uRm9jdXMgPSBfcmVmLm9uRm9jdXMsXG4gICAgICBmb3JtID0gX3JlZi5mb3JtLFxuICAgICAgZm9ybWF0ID0gX3JlZi5mb3JtYXQsXG4gICAgICBpbml0aWFsID0gX3JlZi5pbml0aWFsLFxuICAgICAgcGFyc2UgPSBfcmVmLnBhcnNlLFxuICAgICAgcHJpc3RpbmUgPSBfcmVmLnByaXN0aW5lLFxuICAgICAgcHJvcHMgPSBfcmVmLnByb3BzLFxuICAgICAgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgc3VibWl0RXJyb3IgPSBfcmVmLnN1Ym1pdEVycm9yLFxuICAgICAgc3VibWl0RmFpbGVkID0gX3JlZi5zdWJtaXRGYWlsZWQsXG4gICAgICBzdWJtaXR0aW5nID0gX3JlZi5zdWJtaXR0aW5nLFxuICAgICAgc3luY0Vycm9yID0gX3JlZi5zeW5jRXJyb3IsXG4gICAgICBzeW5jV2FybmluZyA9IF9yZWYuc3luY1dhcm5pbmcsXG4gICAgICB2YWxpZGF0ZSA9IF9yZWYudmFsaWRhdGUsXG4gICAgICB2YWx1ZSA9IF9yZWYudmFsdWUsXG4gICAgICBfdmFsdWUgPSBfcmVmLl92YWx1ZSxcbiAgICAgIHdhcm4gPSBfcmVmLndhcm4sXG4gICAgICBjdXN0b20gPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgWydhc3luY0Vycm9yJywgJ2FzeW5jVmFsaWRhdGluZycsICdvbkJsdXInLCAnb25DaGFuZ2UnLCAnb25Ecm9wJywgJ29uRHJhZ1N0YXJ0JywgJ2RpcnR5JywgJ2Rpc3BhdGNoJywgJ29uRm9jdXMnLCAnZm9ybScsICdmb3JtYXQnLCAnaW5pdGlhbCcsICdwYXJzZScsICdwcmlzdGluZScsICdwcm9wcycsICdzdGF0ZScsICdzdWJtaXRFcnJvcicsICdzdWJtaXRGYWlsZWQnLCAnc3VibWl0dGluZycsICdzeW5jRXJyb3InLCAnc3luY1dhcm5pbmcnLCAndmFsaWRhdGUnLCAndmFsdWUnLCAnX3ZhbHVlJywgJ3dhcm4nXSk7XG5cbiAgdmFyIGVycm9yID0gc3luY0Vycm9yIHx8IGFzeW5jRXJyb3IgfHwgc3VibWl0RXJyb3I7XG4gIHZhciB3YXJuaW5nID0gc3luY1dhcm5pbmc7XG5cbiAgdmFyIGZvcm1hdEZpZWxkVmFsdWUgPSBmdW5jdGlvbiBmb3JtYXRGaWVsZFZhbHVlKHZhbHVlLCBmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHZhciBkZWZhdWx0Rm9ybWF0dGVkVmFsdWUgPSB2YWx1ZSA9PSBudWxsID8gJycgOiB2YWx1ZTtcbiAgICByZXR1cm4gZm9ybWF0ID8gZm9ybWF0KHZhbHVlLCBuYW1lKSA6IGRlZmF1bHRGb3JtYXR0ZWRWYWx1ZTtcbiAgfTtcblxuICB2YXIgZm9ybWF0dGVkRmllbGRWYWx1ZSA9IGZvcm1hdEZpZWxkVmFsdWUodmFsdWUsIGZvcm1hdCk7XG5cbiAgcmV0dXJuIHtcbiAgICBpbnB1dDogcHJvY2Vzc1Byb3BzKGN1c3RvbS50eXBlLCB7XG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgb25CbHVyOiBvbkJsdXIsXG4gICAgICBvbkNoYW5nZTogb25DaGFuZ2UsXG4gICAgICBvbkRyYWdTdGFydDogb25EcmFnU3RhcnQsXG4gICAgICBvbkRyb3A6IG9uRHJvcCxcbiAgICAgIG9uRm9jdXM6IG9uRm9jdXMsXG4gICAgICB2YWx1ZTogZm9ybWF0dGVkRmllbGRWYWx1ZVxuICAgIH0sIF92YWx1ZSksXG4gICAgbWV0YTogX2V4dGVuZHMoe30sIHRvSlMoc3RhdGUpLCB7XG4gICAgICBhY3RpdmU6ICEhKHN0YXRlICYmIGdldEluKHN0YXRlLCAnYWN0aXZlJykpLFxuICAgICAgYXN5bmNWYWxpZGF0aW5nOiBhc3luY1ZhbGlkYXRpbmcsXG4gICAgICBhdXRvZmlsbGVkOiAhIShzdGF0ZSAmJiBnZXRJbihzdGF0ZSwgJ2F1dG9maWxsZWQnKSksXG4gICAgICBkaXJ0eTogZGlydHksXG4gICAgICBkaXNwYXRjaDogZGlzcGF0Y2gsXG4gICAgICBlcnJvcjogZXJyb3IsXG4gICAgICBmb3JtOiBmb3JtLFxuICAgICAgaW5pdGlhbDogaW5pdGlhbCxcbiAgICAgIHdhcm5pbmc6IHdhcm5pbmcsXG4gICAgICBpbnZhbGlkOiAhIWVycm9yLFxuICAgICAgcHJpc3RpbmU6IHByaXN0aW5lLFxuICAgICAgc3VibWl0dGluZzogISFzdWJtaXR0aW5nLFxuICAgICAgc3VibWl0RmFpbGVkOiAhIXN1Ym1pdEZhaWxlZCxcbiAgICAgIHRvdWNoZWQ6ICEhKHN0YXRlICYmIGdldEluKHN0YXRlLCAndG91Y2hlZCcpKSxcbiAgICAgIHZhbGlkOiAhZXJyb3IsXG4gICAgICB2aXNpdGVkOiAhIShzdGF0ZSAmJiBnZXRJbihzdGF0ZSwgJ3Zpc2l0ZWQnKSlcbiAgICB9KSxcbiAgICBjdXN0b206IF9leHRlbmRzKHt9LCBjdXN0b20sIHByb3BzKVxuICB9O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlRmllbGRQcm9wcztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtZm9ybS9saWIvY3JlYXRlRmllbGRQcm9wcy5qc1xuLy8gbW9kdWxlIGlkID0gNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIGRlZmF1bHRTaG91bGRBc3luY1ZhbGlkYXRlID0gZnVuY3Rpb24gZGVmYXVsdFNob3VsZEFzeW5jVmFsaWRhdGUoX3JlZikge1xuICB2YXIgaW5pdGlhbGl6ZWQgPSBfcmVmLmluaXRpYWxpemVkLFxuICAgICAgdHJpZ2dlciA9IF9yZWYudHJpZ2dlcixcbiAgICAgIHByaXN0aW5lID0gX3JlZi5wcmlzdGluZSxcbiAgICAgIHN5bmNWYWxpZGF0aW9uUGFzc2VzID0gX3JlZi5zeW5jVmFsaWRhdGlvblBhc3NlcztcblxuICBpZiAoIXN5bmNWYWxpZGF0aW9uUGFzc2VzKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN3aXRjaCAodHJpZ2dlcikge1xuICAgIGNhc2UgJ2JsdXInOlxuICAgICAgLy8gYmx1cnJpbmdcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGNhc2UgJ3N1Ym1pdCc6XG4gICAgICAvLyBzdWJtaXR0aW5nLCBzbyBvbmx5IGFzeW5jIHZhbGlkYXRlIGlmIGZvcm0gaXMgZGlydHkgb3Igd2FzIG5ldmVyIGluaXRpYWxpemVkXG4gICAgICAvLyBjb252ZXJzZWx5LCBET04nVCBhc3luYyB2YWxpZGF0ZSBpZiB0aGUgZm9ybSBpcyBwcmlzdGluZSBqdXN0IGFzIGl0IHdhcyBpbml0aWFsaXplZFxuICAgICAgcmV0dXJuICFwcmlzdGluZSB8fCAhaW5pdGlhbGl6ZWQ7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZGVmYXVsdFNob3VsZEFzeW5jVmFsaWRhdGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4LWZvcm0vbGliL2RlZmF1bHRTaG91bGRBc3luY1ZhbGlkYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBkZWZhdWx0U2hvdWxkVmFsaWRhdGUgPSBmdW5jdGlvbiBkZWZhdWx0U2hvdWxkVmFsaWRhdGUoX3JlZikge1xuICB2YXIgdmFsdWVzID0gX3JlZi52YWx1ZXMsXG4gICAgICBuZXh0UHJvcHMgPSBfcmVmLm5leHRQcm9wcyxcbiAgICAgIGluaXRpYWxSZW5kZXIgPSBfcmVmLmluaXRpYWxSZW5kZXIsXG4gICAgICBsYXN0RmllbGRWYWxpZGF0b3JLZXlzID0gX3JlZi5sYXN0RmllbGRWYWxpZGF0b3JLZXlzLFxuICAgICAgZmllbGRWYWxpZGF0b3JLZXlzID0gX3JlZi5maWVsZFZhbGlkYXRvcktleXMsXG4gICAgICBzdHJ1Y3R1cmUgPSBfcmVmLnN0cnVjdHVyZTtcblxuICBpZiAoaW5pdGlhbFJlbmRlcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiAhc3RydWN0dXJlLmRlZXBFcXVhbCh2YWx1ZXMsIG5leHRQcm9wcy52YWx1ZXMpIHx8ICFzdHJ1Y3R1cmUuZGVlcEVxdWFsKGxhc3RGaWVsZFZhbGlkYXRvcktleXMsIGZpZWxkVmFsaWRhdG9yS2V5cyk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBkZWZhdWx0U2hvdWxkVmFsaWRhdGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4LWZvcm0vbGliL2RlZmF1bHRTaG91bGRWYWxpZGF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgaXNFdmVudCA9IGZ1bmN0aW9uIGlzRXZlbnQoY2FuZGlkYXRlKSB7XG4gIHJldHVybiAhIShjYW5kaWRhdGUgJiYgY2FuZGlkYXRlLnN0b3BQcm9wYWdhdGlvbiAmJiBjYW5kaWRhdGUucHJldmVudERlZmF1bHQpO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gaXNFdmVudDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtZm9ybS9saWIvZXZlbnRzL2lzRXZlbnQuanNcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9nZXRWYWx1ZSA9IHJlcXVpcmUoJy4vZ2V0VmFsdWUnKTtcblxudmFyIF9nZXRWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRWYWx1ZSk7XG5cbnZhciBfaXNSZWFjdE5hdGl2ZSA9IHJlcXVpcmUoJy4uL2lzUmVhY3ROYXRpdmUnKTtcblxudmFyIF9pc1JlYWN0TmF0aXZlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzUmVhY3ROYXRpdmUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgb25DaGFuZ2VWYWx1ZSA9IGZ1bmN0aW9uIG9uQ2hhbmdlVmFsdWUoZXZlbnQsIF9yZWYpIHtcbiAgdmFyIG5hbWUgPSBfcmVmLm5hbWUsXG4gICAgICBwYXJzZSA9IF9yZWYucGFyc2UsXG4gICAgICBub3JtYWxpemUgPSBfcmVmLm5vcm1hbGl6ZTtcblxuICAvLyByZWFkIHZhbHVlIGZyb20gaW5wdXRcbiAgdmFyIHZhbHVlID0gKDAsIF9nZXRWYWx1ZTIuZGVmYXVsdCkoZXZlbnQsIF9pc1JlYWN0TmF0aXZlMi5kZWZhdWx0KTtcblxuICAvLyBwYXJzZSB2YWx1ZSBpZiB3ZSBoYXZlIGEgcGFyc2VyXG4gIGlmIChwYXJzZSkge1xuICAgIHZhbHVlID0gcGFyc2UodmFsdWUsIG5hbWUpO1xuICB9XG5cbiAgLy8gbm9ybWFsaXplIHZhbHVlXG4gIGlmIChub3JtYWxpemUpIHtcbiAgICB2YWx1ZSA9IG5vcm1hbGl6ZShuYW1lLCB2YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBvbkNoYW5nZVZhbHVlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC1mb3JtL2xpYi9ldmVudHMvb25DaGFuZ2VWYWx1ZS5qc1xuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2lzRXZlbnQgPSByZXF1aXJlKCcuL2lzRXZlbnQnKTtcblxudmFyIF9pc0V2ZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzRXZlbnQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgc2lsZW5jZUV2ZW50ID0gZnVuY3Rpb24gc2lsZW5jZUV2ZW50KGV2ZW50KSB7XG4gIHZhciBpcyA9ICgwLCBfaXNFdmVudDIuZGVmYXVsdCkoZXZlbnQpO1xuICBpZiAoaXMpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG4gIHJldHVybiBpcztcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHNpbGVuY2VFdmVudDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtZm9ybS9saWIvZXZlbnRzL3NpbGVuY2VFdmVudC5qc1xuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIGNyZWF0ZUlzUHJpc3RpbmUgPSBmdW5jdGlvbiBjcmVhdGVJc1ByaXN0aW5lKF9yZWYpIHtcbiAgdmFyIGRlZXBFcXVhbCA9IF9yZWYuZGVlcEVxdWFsLFxuICAgICAgZW1wdHkgPSBfcmVmLmVtcHR5LFxuICAgICAgZ2V0SW4gPSBfcmVmLmdldEluO1xuICByZXR1cm4gZnVuY3Rpb24gKGZvcm0pIHtcbiAgICB2YXIgZ2V0Rm9ybVN0YXRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgIHJldHVybiBnZXRJbihzdGF0ZSwgJ2Zvcm0nKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgIHZhciBmb3JtU3RhdGUgPSBnZXRGb3JtU3RhdGUoc3RhdGUpO1xuICAgICAgdmFyIGluaXRpYWwgPSBnZXRJbihmb3JtU3RhdGUsIGZvcm0gKyAnLmluaXRpYWwnKSB8fCBlbXB0eTtcbiAgICAgIHZhciB2YWx1ZXMgPSBnZXRJbihmb3JtU3RhdGUsIGZvcm0gKyAnLnZhbHVlcycpIHx8IGluaXRpYWw7XG4gICAgICByZXR1cm4gZGVlcEVxdWFsKGluaXRpYWwsIHZhbHVlcyk7XG4gICAgfTtcbiAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZUlzUHJpc3RpbmU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4LWZvcm0vbGliL3NlbGVjdG9ycy9pc1ByaXN0aW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfaXNFcXVhbFdpdGgyID0gcmVxdWlyZSgnbG9kYXNoL2lzRXF1YWxXaXRoJyk7XG5cbnZhciBfaXNFcXVhbFdpdGgzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNFcXVhbFdpdGgyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGN1c3RvbWl6ZXIgPSBmdW5jdGlvbiBjdXN0b21pemVyKG9iamVjdFZhbHVlLCBvdGhlclZhbHVlLCBpbmRleE9ya2V5LCBvYmplY3QsIG90aGVyLCBzdGFjaykge1xuICAvLyBodHRwczovL2xvZGFzaC5jb20vZG9jcy80LjE3LjQjaXNFcXVhbFdpdGhcbiAgaWYgKHN0YWNrKSB7XG4gICAgLy8gU2hhbGxvdyBjb21wYXJlc1xuICAgIC8vIEZvciAxc3QgbGV2ZWwsIHN0YWNrID09PSB1bmRlZmluZWQuXG4gICAgLy8gICAtPiBEbyBub3RoaW5nIChhbmQgaW1wbGljaXRseSByZXR1cm4gdW5kZWZpbmVkIHNvIHRoYXQgaXQgZ29lcyB0byBjb21wYXJlIDJuZCBsZXZlbClcbiAgICAvLyBGb3IgMm5kIGxldmVsIGFuZCB1cCwgc3RhY2sgIT09IHVuZGVmaW5lZC5cbiAgICAvLyAgIC0+IENvbXBhcmUgYnkgPT09IG9wZXJhdG9yXG4gICAgcmV0dXJuIG9iamVjdFZhbHVlID09PSBvdGhlclZhbHVlO1xuICB9XG59O1xuXG52YXIgc2hhbGxvd0NvbXBhcmUgPSBmdW5jdGlvbiBzaGFsbG93Q29tcGFyZShpbnN0YW5jZSwgbmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgcmV0dXJuICEoMCwgX2lzRXF1YWxXaXRoMy5kZWZhdWx0KShpbnN0YW5jZS5wcm9wcywgbmV4dFByb3BzLCBjdXN0b21pemVyKSB8fCAhKDAsIF9pc0VxdWFsV2l0aDMuZGVmYXVsdCkoaW5zdGFuY2Uuc3RhdGUsIG5leHRTdGF0ZSwgY3VzdG9taXplcik7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBzaGFsbG93Q29tcGFyZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtZm9ybS9saWIvdXRpbC9zaGFsbG93Q29tcGFyZS5qc1xuLy8gbW9kdWxlIGlkID0gNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoMjEzKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1mZXRjaC9mZXRjaC1ucG0tbm9kZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDkyKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TeW1ib2wuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlLCBjb21iaW5lUmVkdWNlcnMsIEdlbmVyaWNTdG9yZUVuaGFuY2VyIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xyXG5pbXBvcnQgeyByb3V0ZXJSZWR1Y2VyIH0gZnJvbSAncmVhY3Qtcm91dGVyLXJlZHV4JztcclxuaW1wb3J0ICogYXMgU3RvcmUgZnJvbSAnLi9zdG9yZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25maWd1cmVTdG9yZShpbml0aWFsU3RhdGU/OiBTdG9yZS5BcHBsaWNhdGlvblN0YXRlKSB7XHJcbiAgICAvLyBCdWlsZCBtaWRkbGV3YXJlLiBUaGVzZSBhcmUgZnVuY3Rpb25zIHRoYXQgY2FuIHByb2Nlc3MgdGhlIGFjdGlvbnMgYmVmb3JlIHRoZXkgcmVhY2ggdGhlIHN0b3JlLlxyXG4gICAgY29uc3Qgd2luZG93SWZEZWZpbmVkID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogd2luZG93IGFzIGFueTtcclxuICAgIC8vIElmIGRldlRvb2xzIGlzIGluc3RhbGxlZCwgY29ubmVjdCB0byBpdFxyXG4gICAgY29uc3QgZGV2VG9vbHNFeHRlbnNpb24gPSB3aW5kb3dJZkRlZmluZWQgJiYgd2luZG93SWZEZWZpbmVkLmRldlRvb2xzRXh0ZW5zaW9uIGFzICgpID0+IEdlbmVyaWNTdG9yZUVuaGFuY2VyO1xyXG4gICAgY29uc3QgY3JlYXRlU3RvcmVXaXRoTWlkZGxld2FyZSA9IGNvbXBvc2UoXHJcbiAgICAgICAgYXBwbHlNaWRkbGV3YXJlKHRodW5rKSxcclxuICAgICAgICBkZXZUb29sc0V4dGVuc2lvbiA/IGRldlRvb2xzRXh0ZW5zaW9uKCkgOiBmID0+IGZcclxuICAgICkoY3JlYXRlU3RvcmUpO1xyXG5cclxuICAgIC8vIENvbWJpbmUgYWxsIHJlZHVjZXJzIGFuZCBpbnN0YW50aWF0ZSB0aGUgYXBwLXdpZGUgc3RvcmUgaW5zdGFuY2VcclxuICAgIGNvbnN0IGFsbFJlZHVjZXJzID0gYnVpbGRSb290UmVkdWNlcihTdG9yZS5yZWR1Y2Vycyk7XHJcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlV2l0aE1pZGRsZXdhcmUoYWxsUmVkdWNlcnMsIGluaXRpYWxTdGF0ZSkgYXMgUmVkdXguU3RvcmU8U3RvcmUuQXBwbGljYXRpb25TdGF0ZT47XHJcblxyXG4gICAgLy8gRW5hYmxlIFdlYnBhY2sgaG90IG1vZHVsZSByZXBsYWNlbWVudCBmb3IgcmVkdWNlcnNcclxuICAgIGlmIChtb2R1bGUuaG90KSB7XHJcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoJy4vc3RvcmUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5leHRSb290UmVkdWNlciA9IHJlcXVpcmU8dHlwZW9mIFN0b3JlPignLi9zdG9yZScpO1xyXG4gICAgICAgICAgICBzdG9yZS5yZXBsYWNlUmVkdWNlcihidWlsZFJvb3RSZWR1Y2VyKG5leHRSb290UmVkdWNlci5yZWR1Y2VycykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdG9yZTtcclxufVxyXG5cclxuZnVuY3Rpb24gYnVpbGRSb290UmVkdWNlcihhbGxSZWR1Y2Vycykge1xyXG4gICAgcmV0dXJuIGNvbWJpbmVSZWR1Y2VyczxTdG9yZS5BcHBsaWNhdGlvblN0YXRlPihPYmplY3QuYXNzaWduKHt9LCBhbGxSZWR1Y2VycywgeyByb3V0aW5nOiByb3V0ZXJSZWR1Y2VyIH0pKTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29uZmlndXJlU3RvcmUudHMiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJvdXRlciwgUm91dGUsIEhpc3RvcnlCYXNlIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnLi9jb250YWluZXJzL0xheW91dCc7XHJcbmltcG9ydCBIb21lIGZyb20gJy4vY29udGFpbmVycy9Ib21lJztcclxuaW1wb3J0IExvZ2luIGZyb20gJy4vY29udGFpbmVycy9Mb2dpbic7XHJcbmltcG9ydCBSZWdpc3RlciBmcm9tICcuL2NvbnRhaW5lcnMvUmVnaXN0ZXInO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IDxSb3V0ZSBjb21wb25lbnQ9eyBMYXlvdXQgfT5cclxuICAgIDxSb3V0ZSBwYXRoPScvJyBjb21wb25lbnRzPXt7IGJvZHk6IEhvbWUgfX0gLz5cclxuICAgIDxSb3V0ZSBwYXRoPScvbG9naW4nIGNvbXBvbmVudHM9e3sgYm9keTogTG9naW4gfX0gLz5cclxuICAgIDxSb3V0ZSBwYXRoPScvcmVnaXN0ZXInIGNvbXBvbmVudHM9e3sgYm9keTogUmVnaXN0ZXIgfX0gLz5cclxuPC9Sb3V0ZT47XHJcblxyXG4vLyBFbmFibGUgSG90IE1vZHVsZSBSZXBsYWNlbWVudCAoSE1SKVxyXG5pZiAobW9kdWxlLmhvdCkge1xyXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvcm91dGVzLnRzeCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDE0NCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2FzcG5ldC1wcmVyZW5kZXJpbmcvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgxNTApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vc2VydmVyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gODFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcclxuaW1wb3J0IHsgbWF0Y2gsIFJvdXRlckNvbnRleHQgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQgY3JlYXRlTWVtb3J5SGlzdG9yeSBmcm9tICdoaXN0b3J5L2xpYi9jcmVhdGVNZW1vcnlIaXN0b3J5JztcclxuaW1wb3J0IHsgY3JlYXRlU2VydmVyUmVuZGVyZXIsIFJlbmRlclJlc3VsdCB9IGZyb20gJ2FzcG5ldC1wcmVyZW5kZXJpbmcnO1xyXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJztcclxuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4vY29uZmlndXJlU3RvcmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2VydmVyUmVuZGVyZXIocGFyYW1zID0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxSZW5kZXJSZXN1bHQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAvLyBNYXRjaCB0aGUgaW5jb21pbmcgcmVxdWVzdCBhZ2FpbnN0IHRoZSBsaXN0IG9mIGNsaWVudC1zaWRlIHJvdXRlc1xyXG4gICAgICAgIGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoKTtcclxuICAgICAgICBtYXRjaCh7IHJvdXRlcywgbG9jYXRpb246IHBhcmFtcy5sb2NhdGlvbiB9LCAoZXJyb3IsIHJlZGlyZWN0TG9jYXRpb24sIHJlbmRlclByb3BzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gSWYgdGhlcmUncyBhIHJlZGlyZWN0aW9uLCBqdXN0IHNlbmQgdGhpcyBpbmZvcm1hdGlvbiBiYWNrIHRvIHRoZSBob3N0IGFwcGxpY2F0aW9uXHJcbiAgICAgICAgICAgIGlmIChyZWRpcmVjdExvY2F0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHsgcmVkaXJlY3RVcmw6IHJlZGlyZWN0TG9jYXRpb24ucGF0aG5hbWUgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIElmIGl0IGRpZG4ndCBtYXRjaCBhbnkgcm91dGUsIHJlbmRlclByb3BzIHdpbGwgYmUgdW5kZWZpbmVkXHJcbiAgICAgICAgICAgIGlmICghcmVuZGVyUHJvcHMpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGxvY2F0aW9uICckeyBwYXJhbXMudXJsIH0nIGRvZXNuJ3QgbWF0Y2ggYW55IHJvdXRlIGNvbmZpZ3VyZWQgaW4gcmVhY3Qtcm91dGVyLmApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBCdWlsZCBhbiBpbnN0YW5jZSBvZiB0aGUgYXBwbGljYXRpb25cclxuICAgICAgICAgICAgY29uc3QgYXBwID0gKFxyXG4gICAgICAgICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXsgc3RvcmUgfT5cclxuICAgICAgICAgICAgICAgICAgICA8Um91dGVyQ29udGV4dCB7Li4ucmVuZGVyUHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgLy8gUGVyZm9ybSBhbiBpbml0aWFsIHJlbmRlciB0aGF0IHdpbGwgY2F1c2UgYW55IGFzeW5jIHRhc2tzIChlLmcuLCBkYXRhIGFjY2VzcykgdG8gYmVnaW5cclxuICAgICAgICAgICAgcmVuZGVyVG9TdHJpbmcoYXBwKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIE9uY2UgdGhlIHRhc2tzIGFyZSBkb25lLCB3ZSBjYW4gcGVyZm9ybSB0aGUgZmluYWwgcmVuZGVyXHJcbiAgICAgICAgICAgIC8vIFdlIGFsc28gc2VuZCB0aGUgcmVkdXggc3RvcmUgc3RhdGUsIHNvIHRoZSBjbGllbnQgY2FuIGNvbnRpbnVlIGV4ZWN1dGlvbiB3aGVyZSB0aGUgc2VydmVyIGxlZnQgb2ZmXHJcbiAgICAgICAgICAgIHBhcmFtcy5kb21haW5UYXNrcy50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGh0bWw6IHJlbmRlclRvU3RyaW5nKGFwcCksXHJcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsczogeyBpbml0aWFsUmVkdXhTdGF0ZTogc3RvcmUuZ2V0U3RhdGUoKSB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSwgcmVqZWN0KTsgLy8gQWxzbyBwcm9wYWdhdGUgYW55IGVycm9ycyBiYWNrIGludG8gdGhlIGhvc3QgYXBwbGljYXRpb25cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAncmVkdXgtZm9ybSc7XG5pbXBvcnQgeyB2YWxpZGF0ZUZpZWxkIH0gZnJvbSAnLi4vaGVscGVycy9mb3JtVmFsaWRhdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0lucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgdW5kZWZpbmVkPntcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKXtcbiAgICAgICAgc3dpdGNoICh0aGlzLnByb3BzLnR5cGUpe1xuICAgICAgICAgICAgY2FzZSBcInRleHRcIjpcbiAgICAgICAgICAgIGNhc2UgXCJwYXNzd29yZFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlclRleHRJbnB1dCgpO1xuICAgICAgICAgICAgY2FzZSBcImNoZWNrYm94XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyQ2hlY2tib3hJbnB1dCgpO1xuICAgICAgICAgICAgY2FzZSBcInN1Ym1pdFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlclN1Ym1pdEJ1dHRvbklucHV0KCk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcmVuZGVyVGV4dElucHV0KCl7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9e3RoaXMucHJvcHMubmFtZX0gY29tcG9uZW50PXt0aGlzLnJlbmRlckZpZWxkfSB0eXBlPXt0aGlzLnByb3BzLnR5cGV9IFxuICAgICAgICAgICAgICAgIGxhYmVsPXt0aGlzLnByb3BzLmxhYmVsfSBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5sYWJlbH0gdmFsaWRhdGU9e3RoaXMudmFsaWRhdGUodGhpcy5wcm9wcy5uYW1lKX0gLz5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbmRlckNoZWNrYm94SW5wdXQoKXtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIiBodG1sRm9yPXt0aGlzLnByb3BzLm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT17dGhpcy5wcm9wcy5uYW1lfSBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCIgY29tcG9uZW50PVwiaW5wdXRcIiB0eXBlPVwiY2hlY2tib3hcIiAvPiB7dGhpcy5wcm9wcy5sYWJlbH1cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW5kZXJTdWJtaXRCdXR0b25JbnB1dCgpe1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdmFsdWU9e3RoaXMucHJvcHMubGFiZWx9IFxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfSAvPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVuZGVyRmllbGQocHJvcHMpe1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPntwcm9wcy5sYWJlbH08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB7Li4ucHJvcHMuaW5wdXR9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPXtwcm9wcy5sYWJlbH0gdHlwZT17cHJvcHMudHlwZX0gLz5cbiAgICAgICAgICAgICAgICB7cHJvcHMubWV0YS50b3VjaGVkICYmIChwcm9wcy5tZXRhLmVycm9yICYmIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyIGhhcy1lcnJvclwiPntwcm9wcy5tZXRhLmVycm9yfTwvc3Bhbj4pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7IFxuICAgIH1cblxuICAgIHByaXZhdGUgdmFsaWRhdGUoZmllbGQpe1xuICAgICAgICByZXR1cm4gKHZhbHVlLCBhbGxWYWx1ZXMpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2YWxpZGF0ZUZpZWxkKHRoaXMucHJvcHMubmFtZSwgdmFsdWUsIGFsbFZhbHVlcyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvSW5wdXQudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYnJvd3Nlckhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHsgcmVkdXhGb3JtIH0gZnJvbSAncmVkdXgtZm9ybSc7XG5pbXBvcnQgRm9ybSBmcm9tICcuL0Zvcm0nO1xuXG5jbGFzcyBMb2dpbkZvcm0gZXh0ZW5kcyBGb3JtIHtcblxuICAgIHByb3RlY3RlZCByZW5kZXJGb3JtQ29udGVudCgpe1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7dGhpcy5DcmVhdGVJbnB1dChcImVtYWlsXCIsIFwidGV4dFwiLCBcIkVtYWlsXCIpfVxuICAgICAgICAgICAgICAgIHt0aGlzLkNyZWF0ZUlucHV0KFwicGFzc3dvcmRcIiwgXCJwYXNzd29yZFwiLCBcIlNlbmhhXCIpfVxuICAgICAgICAgICAgICAgIHt0aGlzLkNyZWF0ZUlucHV0KFwicmVtZW1iZXJcIiwgXCJjaGVja2JveFwiLCBcIkxlbWJyYXIgZGUgbWltXCIpfVxuICAgICAgICAgICAgICAgIHt0aGlzLkNyZWF0ZVN1Ym1pdEJ1dHRvbihcIkVudHJhclwiKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhc3luYyBvblN1Ym1pdCh2YWx1ZXMpe1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zdWJtaXRGb3JtKFwiYWNjb3VudC9sb2dpblwiLCB2YWx1ZXMpOyAgXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZWR1eEZvcm0oe1xuICAgIGZvcm06ICdsb2dpbicsXG4gICAgZmllbGRzOiBbJ2VtYWlsJywgJ3Bhc3N3b3JkJywgJ3JlbWVtYmVyJ10sXG4gICAgb25TdWJtaXRTdWNjZXNzOiAocmVzdWx0LCBkaXNwYXRjaCwgcHJvcHMpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogXCJMT0dJTlwiLFxuICAgICAgICAgICAgdXNlcjogcmVzdWx0W1widXNlclwiXVxuICAgICAgICB9KTtcbiAgICAgICAgYnJvd3Nlckhpc3RvcnkucHVzaChyZXN1bHRbXCJyZWRpcmVjdFVybFwiXSk7XG4gICAgfVxufSkoTG9naW5Gb3JtKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL0xvZ2luRm9ybS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5hdk1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCB2b2lkPiB7XHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nbWFpbi1uYXYnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdmJhciBuYXZiYXItaW52ZXJzZSc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2YmFyLWhlYWRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzTmFtZT0nbmF2YmFyLXRvZ2dsZScgZGF0YS10b2dnbGU9J2NvbGxhcHNlJyBkYXRhLXRhcmdldD0nLm5hdmJhci1jb2xsYXBzZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc3Itb25seSc+VG9nZ2xlIG5hdmlnYXRpb248L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naWNvbi1iYXInPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpY29uLWJhcic+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ljb24tYmFyJz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPSduYXZiYXItYnJhbmQnIHRvPXsgJy8nIH0+U0lTRVY8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjbGVhcmZpeCc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2YmFyLWNvbGxhcHNlIGNvbGxhcHNlJz5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSduYXYgbmF2YmFyLW5hdic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXsgJy8nIH0gYWN0aXZlQ2xhc3NOYW1lPSdhY3RpdmUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZ2x5cGhpY29uIGdseXBoaWNvbi1ob21lJz48L3NwYW4+IEhvbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9OYXZNZW51LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGJyb3dzZXJIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IHJlZHV4Rm9ybSB9IGZyb20gJ3JlZHV4LWZvcm0nO1xuaW1wb3J0IEZvcm0gZnJvbSAnLi9Gb3JtJztcblxuY2xhc3MgUmVnaXN0ZXJGb3JtIGV4dGVuZHMgRm9ybSB7XG5cbiAgICBwcm90ZWN0ZWQgcmVuZGVyRm9ybUNvbnRlbnQoKXtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge3RoaXMuQ3JlYXRlSW5wdXQoXCJmaXJzdE5hbWVcIiwgXCJ0ZXh0XCIsIFwiTm9tZVwiKX1cbiAgICAgICAgICAgICAgICB7dGhpcy5DcmVhdGVJbnB1dChcImxhc3ROYW1lXCIsIFwidGV4dFwiLCBcIlNvYnJlbm9tZVwiKX1cbiAgICAgICAgICAgICAgICB7dGhpcy5DcmVhdGVJbnB1dChcImVtYWlsXCIsIFwidGV4dFwiLCBcIkVtYWlsXCIpfVxuICAgICAgICAgICAgICAgIHt0aGlzLkNyZWF0ZUlucHV0KFwiZGVwYXJ0bWVudFwiLCBcInRleHRcIiwgXCJEZXBhcnRhbWVudG9cIil9XG4gICAgICAgICAgICAgICAge3RoaXMuQ3JlYXRlSW5wdXQoXCJwYXNzd29yZFwiLCBcInBhc3N3b3JkXCIsIFwiU2VuaGFcIil9XG4gICAgICAgICAgICAgICAge3RoaXMuQ3JlYXRlSW5wdXQoXCJwYXNzd29yZENvbmZpcm1cIiwgXCJwYXNzd29yZFwiLCBcIkNvbmZpcm1hciBzZW5oYVwiKX1cbiAgICAgICAgICAgICAgICB7dGhpcy5DcmVhdGVTdWJtaXRCdXR0b24oXCJSZWdpc3RyYXJcIil9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYXN5bmMgb25TdWJtaXQodmFsdWVzKXtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc3VibWl0Rm9ybShcImFjY291bnQvcmVnaXN0ZXJcIiwgdmFsdWVzKTsgIFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdXhGb3JtKHtcbiAgICBmb3JtOiAncmVnaXN0ZXInLFxuICAgIGZpZWxkczogWydmaXJzdE5hbWUnLCAnbGFzdE5hbWUnLCAnZW1haWwnLCAnZGVwYXJ0bWVudCcsICdwYXNzd29yZCddLFxuICAgIG9uU3VibWl0U3VjY2VzczogKHJlc3VsdCwgZGlzcGF0Y2gsIHByb3BzKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6IFwiTE9HSU5cIixcbiAgICAgICAgICAgIHVzZXI6IHJlc3VsdFtcInVzZXJcIl1cbiAgICAgICAgfSk7XG4gICAgICAgIGJyb3dzZXJIaXN0b3J5LnB1c2gocmVzdWx0W1wicmVkaXJlY3RVcmxcIl0pO1xuICAgIH1cbn0pKFJlZ2lzdGVyRm9ybSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9yZWdpc3RlckZvcm0udHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUgfSAgZnJvbSAnLi4vc3RvcmUnO1xuaW1wb3J0ICogYXMgQXBwU3RvcmUgZnJvbSAnLi4vc3RvcmUvQXBwJztcbmltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9BcHAnO1xuaW1wb3J0IExvZ2luIGZyb20gJy4vTG9naW4nO1xuXG5jbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PEFwcFByb3BzLCB1bmRlZmluZWQ+e1xuXG4gICAgcHVibGljIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDI+U2lzZXY8L2gyPlxuICAgICAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgICAgIDxMb2dpbiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAgIChzdGF0ZTogQXBwbGljYXRpb25TdGF0ZSkgPT4gc3RhdGUuYXBwLFxuICAgIEFwcFN0b3JlLmFjdGlvbkNyZWF0b3JzXG4pKEhvbWUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbnRhaW5lcnMvSG9tZS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE5hdk1lbnUgfSBmcm9tICcuLi9jb21wb25lbnRzL05hdk1lbnUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMYXlvdXRQcm9wcyB7XHJcbiAgICBib2R5OiBSZWFjdC5SZWFjdEVsZW1lbnQ8YW55PjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxMYXlvdXRQcm9wcywgdm9pZD4ge1xyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lci1mbHVpZCc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1zbS0zJz5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2TWVudSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXNtLTknPlxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5ib2R5IH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbnRhaW5lcnMvTGF5b3V0LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWdpc3RlckZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9yZWdpc3RlckZvcm0nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWdpc3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIHVuZGVmaW5lZD57XG5cbiAgICBwdWJsaWMgcmVuZGVyKCl7XG4gICAgICAgICAgICByZXR1cm4gKDxkaXY+XG4gICAgICAgICAgICAgICAgPGgyPkNhZGFzdHJvPC9oMj5cbiAgICAgICAgICAgICAgICA8aDQ+Q3JpZSB1bSBub3ZvIHVzdcOhcmlvLjwvaDQ+XG4gICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICAgICAgPFJlZ2lzdGVyRm9ybSAvPlxuICAgICAgICAgICAgPC9kaXY+KTsgXG4gICAgfVxufVxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb250YWluZXJzL1JlZ2lzdGVyLnRzeCIsImNvbnN0IHZhbGlkYXRlTmFtZSA9IG5hbWUgPT4ge1xuICAgIGlmICghbmFtZSlcbiAgICAgICAgcmV0dXJuIFwiQ2FtcG8gb2JyaWdhdMOzcmlvXCI7XG4gICAgaWYgKG5hbWUubGVuZ3RoIDwgNClcbiAgICAgICAgcmV0dXJuIFwiTXVpdG8gY3VydG9cIjtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5jb25zdCB2YWxpZGF0ZU5vdEVtcHR5ID0gdGV4dCA9PiB7XG4gICAgaWYgKCF0ZXh0KVxuICAgICAgICByZXR1cm4gXCJDYW1wbyBvYnJpZ2F0w7NyaW9cIjtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5jb25zdCB2YWxpZGF0ZUVtYWlsID0gZW1haWwgPT4ge1xuICAgIGlmICghZW1haWwpXG4gICAgICAgIHJldHVybiBcIkNhbXBvIG9icmlnYXTDs3Jpb1wiO1xuICAgIGlmICghL15bQS1aMC05Ll8lKy1dK0BbQS1aMC05Li1dK1xcLltBLVpdezIsNH0kL2kudGVzdChlbWFpbCkpXG4gICAgICAgIHJldHVybiBcIkVtYWlsIGludsOhbGlkb1wiO1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmNvbnN0IHZhbGlkYXRlRGVwYXJ0bWVudCA9IGRlcGFydG1lbnQgPT4ge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmNvbnN0IHZhbGlkYXRlUGFzc3dvcmQgPSAocGFzc3dvcmQpID0+IHtcbiAgICBpZiAoIXBhc3N3b3JkKVxuICAgICAgICByZXR1cm4gXCJDYW1wbyBvYnJpZ2F0w7NyaW9cIjtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5jb25zdCB2YWxpZGF0ZVBhc3N3b3JkQ29uZmlybSA9ICh2YWx1ZXMpID0+IHtcbiAgICBpZiAodmFsdWVzW1wicGFzc3dvcmRcIl0gIT0gdmFsdWVzW1wicGFzc3dvcmRDb25maXJtXCJdKVxuICAgICAgICByZXR1cm4gXCJDb25maXJtYcOnw6NvIGRpZmVyZW50ZSBkYSBzZW5oYVwiO1xuICAgIHJldHVybiB1bmRlZmluZWQ7IFxufVxuXG5jb25zdCB2YWxpZGF0ZUdsb2JhbCA9IGdsb2JhbCA9PiB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuY29uc3QgdmFsaWRhdGlvbkZ1bmNzID0ge1xuICAgIFwiZW1haWxcIjogdmFsaWRhdGVFbWFpbCxcbiAgICBcIm5hbWVcIjogdmFsaWRhdGVOYW1lLFxuICAgIFwiZmlyc3ROYW1lXCI6IHZhbGlkYXRlTmFtZSxcbiAgICBcImxhc3ROYW1lXCI6IHZhbGlkYXRlTmFtZSxcbiAgICBcImRlcGFydG1lbnRcIjogdmFsaWRhdGVEZXBhcnRtZW50LFxuICAgIFwicGFzc3dvcmRcIjogdmFsaWRhdGVQYXNzd29yZCxcbiAgICBcInBhc3N3b3JkQ29uZmlybVwiOiB2YWxpZGF0ZVBhc3N3b3JkQ29uZmlybSxcbiAgICBcInVzZXJuYW1lXCI6IHZhbGlkYXRlTm90RW1wdHksXG4gICAgXCJnbG9iYWxcIjogdmFsaWRhdGVHbG9iYWwsXG4gICAgXCJyZW1lbWJlclwiOiB2YWxpZGF0ZUdsb2JhbFxufVxuXG5leHBvcnQgY29uc3QgdmFsaWRhdGVGaWVsZCA9IChmaWVsZCwgdmFsdWUsIGFsbFZhbHVlcykgPT4ge1xuICAgIGlmIChmaWVsZCA9PSBcInBhc3N3b3JkQ29uZmlybVwiKVxuICAgICAgICByZXR1cm4gdmFsaWRhdGlvbkZ1bmNzW2ZpZWxkXShhbGxWYWx1ZXMpO1xuICAgIHJldHVybiB2YWxpZGF0aW9uRnVuY3NbZmllbGRdKHZhbHVlKTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvaGVscGVycy9mb3JtVmFsaWRhdGlvbi50c3giLCJpbXBvcnQgeyByZWR1Y2VyIGFzIHJlZHV4Rm9ybVJlZHVjZXIgfSBmcm9tICdyZWR1eC1mb3JtJztcclxuaW1wb3J0ICogYXMgQXBwIGZyb20gJy4vQXBwJztcclxuXHJcblxyXG4vLyBUaGUgdG9wLWxldmVsIHN0YXRlIG9iamVjdFxyXG5leHBvcnQgaW50ZXJmYWNlIEFwcGxpY2F0aW9uU3RhdGUge1xyXG4gICAgYXBwOiBBcHAuQXBwU3RhdGVcclxufVxyXG5cclxuLy8gV2hlbmV2ZXIgYW4gYWN0aW9uIGlzIGRpc3BhdGNoZWQsIFJlZHV4IHdpbGwgdXBkYXRlIGVhY2ggdG9wLWxldmVsIGFwcGxpY2F0aW9uIHN0YXRlIHByb3BlcnR5IHVzaW5nXHJcbi8vIHRoZSByZWR1Y2VyIHdpdGggdGhlIG1hdGNoaW5nIG5hbWUuIEl0J3MgaW1wb3J0YW50IHRoYXQgdGhlIG5hbWVzIG1hdGNoIGV4YWN0bHksIGFuZCB0aGF0IHRoZSByZWR1Y2VyXHJcbi8vIGFjdHMgb24gdGhlIGNvcnJlc3BvbmRpbmcgQXBwbGljYXRpb25TdGF0ZSBwcm9wZXJ0eSB0eXBlLlxyXG5leHBvcnQgY29uc3QgcmVkdWNlcnMgPSB7XHJcbiAgICBhcHA6IEFwcC5yZWR1Y2VyLFxyXG4gICAgZm9ybTogcmVkdXhGb3JtUmVkdWNlclxyXG59O1xyXG5cclxuLy8gVGhpcyB0eXBlIGNhbiBiZSB1c2VkIGFzIGEgaGludCBvbiBhY3Rpb24gY3JlYXRvcnMgc28gdGhhdCBpdHMgJ2Rpc3BhdGNoJyBhbmQgJ2dldFN0YXRlJyBwYXJhbXMgYXJlXHJcbi8vIGNvcnJlY3RseSB0eXBlZCB0byBtYXRjaCB5b3VyIHN0b3JlLlxyXG5leHBvcnQgaW50ZXJmYWNlIEFwcFRodW5rQWN0aW9uPFRBY3Rpb24+IHtcclxuICAgIChkaXNwYXRjaDogKGFjdGlvbjogVEFjdGlvbikgPT4gdm9pZCwgZ2V0U3RhdGU6ICgpID0+IEFwcGxpY2F0aW9uU3RhdGUpOiB2b2lkO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9zdG9yZS9pbmRleC50cyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kYWJsZUJ1aWx0aW4oY2xzKSB7XG4gIGZ1bmN0aW9uIEV4dGVuZGFibGVCdWlsdGluKCkge1xuICAgIGNscy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgRXh0ZW5kYWJsZUJ1aWx0aW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShjbHMucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBjbHMsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcblxuICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKEV4dGVuZGFibGVCdWlsdGluLCBjbHMpO1xuICB9IGVsc2Uge1xuICAgIEV4dGVuZGFibGVCdWlsdGluLl9fcHJvdG9fXyA9IGNscztcbiAgfVxuXG4gIHJldHVybiBFeHRlbmRhYmxlQnVpbHRpbjtcbn1cblxudmFyIEV4dGVuZGFibGVFcnJvciA9IGZ1bmN0aW9uIChfZXh0ZW5kYWJsZUJ1aWx0aW4yKSB7XG4gIF9pbmhlcml0cyhFeHRlbmRhYmxlRXJyb3IsIF9leHRlbmRhYmxlQnVpbHRpbjIpO1xuXG4gIGZ1bmN0aW9uIEV4dGVuZGFibGVFcnJvcigpIHtcbiAgICB2YXIgbWVzc2FnZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogJyc7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRXh0ZW5kYWJsZUVycm9yKTtcblxuICAgIC8vIGV4dGVuZGluZyBFcnJvciBpcyB3ZWlyZCBhbmQgZG9lcyBub3QgcHJvcGFnYXRlIGBtZXNzYWdlYFxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChFeHRlbmRhYmxlRXJyb3IuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihFeHRlbmRhYmxlRXJyb3IpKS5jYWxsKHRoaXMsIG1lc3NhZ2UpKTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfdGhpcywgJ21lc3NhZ2UnLCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBtZXNzYWdlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfdGhpcywgJ25hbWUnLCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBfdGhpcy5jb25zdHJ1Y3Rvci5uYW1lLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcblxuICAgIGlmIChFcnJvci5oYXNPd25Qcm9wZXJ0eSgnY2FwdHVyZVN0YWNrVHJhY2UnKSkge1xuICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UoX3RoaXMsIF90aGlzLmNvbnN0cnVjdG9yKTtcbiAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcyk7XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KF90aGlzLCAnc3RhY2snLCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBuZXcgRXJyb3IobWVzc2FnZSkuc3RhY2ssXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHJldHVybiBFeHRlbmRhYmxlRXJyb3I7XG59KF9leHRlbmRhYmxlQnVpbHRpbihFcnJvcikpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBFeHRlbmRhYmxlRXJyb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lczYtZXJyb3IvbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIERhdGFWaWV3ID0gZ2V0TmF0aXZlKHJvb3QsICdEYXRhVmlldycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERhdGFWaWV3O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fRGF0YVZpZXcuanNcbi8vIG1vZHVsZSBpZCA9IDkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBoYXNoQ2xlYXIgPSByZXF1aXJlKCcuL19oYXNoQ2xlYXInKSxcbiAgICBoYXNoRGVsZXRlID0gcmVxdWlyZSgnLi9faGFzaERlbGV0ZScpLFxuICAgIGhhc2hHZXQgPSByZXF1aXJlKCcuL19oYXNoR2V0JyksXG4gICAgaGFzaEhhcyA9IHJlcXVpcmUoJy4vX2hhc2hIYXMnKSxcbiAgICBoYXNoU2V0ID0gcmVxdWlyZSgnLi9faGFzaFNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBoYXNoIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gSGFzaChlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBIYXNoO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fSGFzaC5qc1xuLy8gbW9kdWxlIGlkID0gOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBQcm9taXNlID0gZ2V0TmF0aXZlKHJvb3QsICdQcm9taXNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvbWlzZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX1Byb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IDk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgU2V0ID0gZ2V0TmF0aXZlKHJvb3QsICdTZXQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19TZXQuanNcbi8vIG1vZHVsZSBpZCA9IDk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBNYXBDYWNoZSA9IHJlcXVpcmUoJy4vX01hcENhY2hlJyksXG4gICAgc2V0Q2FjaGVBZGQgPSByZXF1aXJlKCcuL19zZXRDYWNoZUFkZCcpLFxuICAgIHNldENhY2hlSGFzID0gcmVxdWlyZSgnLi9fc2V0Q2FjaGVIYXMnKTtcblxuLyoqXG4gKlxuICogQ3JlYXRlcyBhbiBhcnJheSBjYWNoZSBvYmplY3QgdG8gc3RvcmUgdW5pcXVlIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbdmFsdWVzXSBUaGUgdmFsdWVzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTZXRDYWNoZSh2YWx1ZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSB2YWx1ZXMgPT0gbnVsbCA/IDAgOiB2YWx1ZXMubGVuZ3RoO1xuXG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGU7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdGhpcy5hZGQodmFsdWVzW2luZGV4XSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYFNldENhY2hlYC5cblNldENhY2hlLnByb3RvdHlwZS5hZGQgPSBTZXRDYWNoZS5wcm90b3R5cGUucHVzaCA9IHNldENhY2hlQWRkO1xuU2V0Q2FjaGUucHJvdG90eXBlLmhhcyA9IHNldENhY2hlSGFzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNldENhY2hlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fU2V0Q2FjaGUuanNcbi8vIG1vZHVsZSBpZCA9IDk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgV2Vha01hcCA9IGdldE5hdGl2ZShyb290LCAnV2Vha01hcCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdlYWtNYXA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19XZWFrTWFwLmpzXG4vLyBtb2R1bGUgaWQgPSA5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEEgZmFzdGVyIGFsdGVybmF0aXZlIHRvIGBGdW5jdGlvbiNhcHBseWAsIHRoaXMgZnVuY3Rpb24gaW52b2tlcyBgZnVuY2BcbiAqIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIGB0aGlzQXJnYCBhbmQgdGhlIGFyZ3VtZW50cyBvZiBgYXJnc2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGludm9rZS5cbiAqIEBwYXJhbSB7Kn0gdGhpc0FyZyBUaGUgYHRoaXNgIGJpbmRpbmcgb2YgYGZ1bmNgLlxuICogQHBhcmFtIHtBcnJheX0gYXJncyBUaGUgYXJndW1lbnRzIHRvIGludm9rZSBgZnVuY2Agd2l0aC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXN1bHQgb2YgYGZ1bmNgLlxuICovXG5mdW5jdGlvbiBhcHBseShmdW5jLCB0aGlzQXJnLCBhcmdzKSB7XG4gIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICBjYXNlIDA6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZyk7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gIH1cbiAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXBwbHk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19hcHBseS5qc1xuLy8gbW9kdWxlIGlkID0gOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uZmlsdGVyYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZmlsdGVyZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5RmlsdGVyKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc0luZGV4ID0gMCxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuICAgIGlmIChwcmVkaWNhdGUodmFsdWUsIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJlc3VsdFtyZXNJbmRleCsrXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5RmlsdGVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYXJyYXlGaWx0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDEwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEFwcGVuZHMgdGhlIGVsZW1lbnRzIG9mIGB2YWx1ZXNgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0FycmF5fSB2YWx1ZXMgVGhlIHZhbHVlcyB0byBhcHBlbmQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlQdXNoKGFycmF5LCB2YWx1ZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSB2YWx1ZXMubGVuZ3RoLFxuICAgICAgb2Zmc2V0ID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbb2Zmc2V0ICsgaW5kZXhdID0gdmFsdWVzW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlQdXNoO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYXJyYXlQdXNoLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uc29tZWAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlXG4gKiBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbnkgZWxlbWVudCBwYXNzZXMgdGhlIHByZWRpY2F0ZSBjaGVjayxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5U29tZShhcnJheSwgcHJlZGljYXRlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVNvbWU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19hcnJheVNvbWUuanNcbi8vIG1vZHVsZSBpZCA9IDEwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUFzc2lnblZhbHVlID0gcmVxdWlyZSgnLi9fYmFzZUFzc2lnblZhbHVlJyksXG4gICAgZXEgPSByZXF1aXJlKCcuL2VxJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQXNzaWducyBgdmFsdWVgIHRvIGBrZXlgIG9mIGBvYmplY3RgIGlmIHRoZSBleGlzdGluZyB2YWx1ZSBpcyBub3QgZXF1aXZhbGVudFxuICogdXNpbmcgW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGZvciBlcXVhbGl0eSBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgdmFyIG9ialZhbHVlID0gb2JqZWN0W2tleV07XG4gIGlmICghKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGVxKG9ialZhbHVlLCB2YWx1ZSkpIHx8XG4gICAgICAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSkge1xuICAgIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzaWduVmFsdWU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19hc3NpZ25WYWx1ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0Q3JlYXRlID0gT2JqZWN0LmNyZWF0ZTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5jcmVhdGVgIHdpdGhvdXQgc3VwcG9ydCBmb3IgYXNzaWduaW5nXG4gKiBwcm9wZXJ0aWVzIHRvIHRoZSBjcmVhdGVkIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHByb3RvIFRoZSBvYmplY3QgdG8gaW5oZXJpdCBmcm9tLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IG9iamVjdC5cbiAqL1xudmFyIGJhc2VDcmVhdGUgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIG9iamVjdCgpIHt9XG4gIHJldHVybiBmdW5jdGlvbihwcm90bykge1xuICAgIGlmICghaXNPYmplY3QocHJvdG8pKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIGlmIChvYmplY3RDcmVhdGUpIHtcbiAgICAgIHJldHVybiBvYmplY3RDcmVhdGUocHJvdG8pO1xuICAgIH1cbiAgICBvYmplY3QucHJvdG90eXBlID0gcHJvdG87XG4gICAgdmFyIHJlc3VsdCA9IG5ldyBvYmplY3Q7XG4gICAgb2JqZWN0LnByb3RvdHlwZSA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQ3JlYXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlRm9yID0gcmVxdWlyZSgnLi9fYmFzZUZvcicpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5mb3JPd25gIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBiYXNlRm9yT3duKG9iamVjdCwgaXRlcmF0ZWUpIHtcbiAgcmV0dXJuIG9iamVjdCAmJiBiYXNlRm9yKG9iamVjdCwgaXRlcmF0ZWUsIGtleXMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VGb3JPd247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlRm9yT3duLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFycmF5UHVzaCA9IHJlcXVpcmUoJy4vX2FycmF5UHVzaCcpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0QWxsS2V5c2AgYW5kIGBnZXRBbGxLZXlzSW5gIHdoaWNoIHVzZXNcbiAqIGBrZXlzRnVuY2AgYW5kIGBzeW1ib2xzRnVuY2AgdG8gZ2V0IHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZFxuICogc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0ga2V5c0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUga2V5cyBvZiBgb2JqZWN0YC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN5bWJvbHNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXNGdW5jLCBzeW1ib2xzRnVuYykge1xuICB2YXIgcmVzdWx0ID0ga2V5c0Z1bmMob2JqZWN0KTtcbiAgcmV0dXJuIGlzQXJyYXkob2JqZWN0KSA/IHJlc3VsdCA6IGFycmF5UHVzaChyZXN1bHQsIHN5bWJvbHNGdW5jKG9iamVjdCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRBbGxLZXlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUdldEFsbEtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDEwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmhhc0luYCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IGtleSBUaGUga2V5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSGFzSW4ob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCAhPSBudWxsICYmIGtleSBpbiBPYmplY3Qob2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSGFzSW47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlSGFzSW4uanNcbi8vIG1vZHVsZSBpZCA9IDEwN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzQXJndW1lbnRzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0FyZ3VtZW50cyh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBhcmdzVGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0FyZ3VtZW50cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc0FyZ3VtZW50cy5qc1xuLy8gbW9kdWxlIGlkID0gMTA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBTdGFjayA9IHJlcXVpcmUoJy4vX1N0YWNrJyksXG4gICAgZXF1YWxBcnJheXMgPSByZXF1aXJlKCcuL19lcXVhbEFycmF5cycpLFxuICAgIGVxdWFsQnlUYWcgPSByZXF1aXJlKCcuL19lcXVhbEJ5VGFnJyksXG4gICAgZXF1YWxPYmplY3RzID0gcmVxdWlyZSgnLi9fZXF1YWxPYmplY3RzJyksXG4gICAgZ2V0VGFnID0gcmVxdWlyZSgnLi9fZ2V0VGFnJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzQnVmZmVyID0gcmVxdWlyZSgnLi9pc0J1ZmZlcicpLFxuICAgIGlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vaXNUeXBlZEFycmF5Jyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XSc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbGAgZm9yIGFycmF5cyBhbmQgb2JqZWN0cyB3aGljaCBwZXJmb3Jtc1xuICogZGVlcCBjb21wYXJpc29ucyBhbmQgdHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzIGVuYWJsaW5nIG9iamVjdHMgd2l0aCBjaXJjdWxhclxuICogcmVmZXJlbmNlcyB0byBiZSBjb21wYXJlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIGBvYmplY3RgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdHMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzRXF1YWxEZWVwKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgdmFyIG9iaklzQXJyID0gaXNBcnJheShvYmplY3QpLFxuICAgICAgb3RoSXNBcnIgPSBpc0FycmF5KG90aGVyKSxcbiAgICAgIG9ialRhZyA9IG9iaklzQXJyID8gYXJyYXlUYWcgOiBnZXRUYWcob2JqZWN0KSxcbiAgICAgIG90aFRhZyA9IG90aElzQXJyID8gYXJyYXlUYWcgOiBnZXRUYWcob3RoZXIpO1xuXG4gIG9ialRhZyA9IG9ialRhZyA9PSBhcmdzVGFnID8gb2JqZWN0VGFnIDogb2JqVGFnO1xuICBvdGhUYWcgPSBvdGhUYWcgPT0gYXJnc1RhZyA/IG9iamVjdFRhZyA6IG90aFRhZztcblxuICB2YXIgb2JqSXNPYmogPSBvYmpUYWcgPT0gb2JqZWN0VGFnLFxuICAgICAgb3RoSXNPYmogPSBvdGhUYWcgPT0gb2JqZWN0VGFnLFxuICAgICAgaXNTYW1lVGFnID0gb2JqVGFnID09IG90aFRhZztcblxuICBpZiAoaXNTYW1lVGFnICYmIGlzQnVmZmVyKG9iamVjdCkpIHtcbiAgICBpZiAoIWlzQnVmZmVyKG90aGVyKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBvYmpJc0FyciA9IHRydWU7XG4gICAgb2JqSXNPYmogPSBmYWxzZTtcbiAgfVxuICBpZiAoaXNTYW1lVGFnICYmICFvYmpJc09iaikge1xuICAgIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gICAgcmV0dXJuIChvYmpJc0FyciB8fCBpc1R5cGVkQXJyYXkob2JqZWN0KSlcbiAgICAgID8gZXF1YWxBcnJheXMob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaylcbiAgICAgIDogZXF1YWxCeVRhZyhvYmplY3QsIG90aGVyLCBvYmpUYWcsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spO1xuICB9XG4gIGlmICghKGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRykpIHtcbiAgICB2YXIgb2JqSXNXcmFwcGVkID0gb2JqSXNPYmogJiYgaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsICdfX3dyYXBwZWRfXycpLFxuICAgICAgICBvdGhJc1dyYXBwZWQgPSBvdGhJc09iaiAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG90aGVyLCAnX193cmFwcGVkX18nKTtcblxuICAgIGlmIChvYmpJc1dyYXBwZWQgfHwgb3RoSXNXcmFwcGVkKSB7XG4gICAgICB2YXIgb2JqVW53cmFwcGVkID0gb2JqSXNXcmFwcGVkID8gb2JqZWN0LnZhbHVlKCkgOiBvYmplY3QsXG4gICAgICAgICAgb3RoVW53cmFwcGVkID0gb3RoSXNXcmFwcGVkID8gb3RoZXIudmFsdWUoKSA6IG90aGVyO1xuXG4gICAgICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICAgICAgcmV0dXJuIGVxdWFsRnVuYyhvYmpVbndyYXBwZWQsIG90aFVud3JhcHBlZCwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spO1xuICAgIH1cbiAgfVxuICBpZiAoIWlzU2FtZVRhZykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICByZXR1cm4gZXF1YWxPYmplY3RzKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0VxdWFsRGVlcDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc0VxdWFsRGVlcC5qc1xuLy8gbW9kdWxlIGlkID0gMTA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBTdGFjayA9IHJlcXVpcmUoJy4vX1N0YWNrJyksXG4gICAgYmFzZUlzRXF1YWwgPSByZXF1aXJlKCcuL19iYXNlSXNFcXVhbCcpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDEsXG4gICAgQ09NUEFSRV9VTk9SREVSRURfRkxBRyA9IDI7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNNYXRjaGAgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCBvZiBwcm9wZXJ0eSB2YWx1ZXMgdG8gbWF0Y2guXG4gKiBAcGFyYW0ge0FycmF5fSBtYXRjaERhdGEgVGhlIHByb3BlcnR5IG5hbWVzLCB2YWx1ZXMsIGFuZCBjb21wYXJlIGZsYWdzIHRvIG1hdGNoLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYG9iamVjdGAgaXMgYSBtYXRjaCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNNYXRjaChvYmplY3QsIHNvdXJjZSwgbWF0Y2hEYXRhLCBjdXN0b21pemVyKSB7XG4gIHZhciBpbmRleCA9IG1hdGNoRGF0YS5sZW5ndGgsXG4gICAgICBsZW5ndGggPSBpbmRleCxcbiAgICAgIG5vQ3VzdG9taXplciA9ICFjdXN0b21pemVyO1xuXG4gIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybiAhbGVuZ3RoO1xuICB9XG4gIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIHZhciBkYXRhID0gbWF0Y2hEYXRhW2luZGV4XTtcbiAgICBpZiAoKG5vQ3VzdG9taXplciAmJiBkYXRhWzJdKVxuICAgICAgICAgID8gZGF0YVsxXSAhPT0gb2JqZWN0W2RhdGFbMF1dXG4gICAgICAgICAgOiAhKGRhdGFbMF0gaW4gb2JqZWN0KVxuICAgICAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBkYXRhID0gbWF0Y2hEYXRhW2luZGV4XTtcbiAgICB2YXIga2V5ID0gZGF0YVswXSxcbiAgICAgICAgb2JqVmFsdWUgPSBvYmplY3Rba2V5XSxcbiAgICAgICAgc3JjVmFsdWUgPSBkYXRhWzFdO1xuXG4gICAgaWYgKG5vQ3VzdG9taXplciAmJiBkYXRhWzJdKSB7XG4gICAgICBpZiAob2JqVmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHN0YWNrID0gbmV3IFN0YWNrO1xuICAgICAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGN1c3RvbWl6ZXIob2JqVmFsdWUsIHNyY1ZhbHVlLCBrZXksIG9iamVjdCwgc291cmNlLCBzdGFjayk7XG4gICAgICB9XG4gICAgICBpZiAoIShyZXN1bHQgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBiYXNlSXNFcXVhbChzcmNWYWx1ZSwgb2JqVmFsdWUsIENPTVBBUkVfUEFSVElBTF9GTEFHIHwgQ09NUEFSRV9VTk9SREVSRURfRkxBRywgY3VzdG9taXplciwgc3RhY2spXG4gICAgICAgICAgICA6IHJlc3VsdFxuICAgICAgICAgICkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNNYXRjaDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc01hdGNoLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc01hc2tlZCA9IHJlcXVpcmUoJy4vX2lzTWFza2VkJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgdG9Tb3VyY2UgPSByZXF1aXJlKCcuL190b1NvdXJjZScpO1xuXG4vKipcbiAqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGBcbiAqIFtzeW50YXggY2hhcmFjdGVyc10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcGF0dGVybnMpLlxuICovXG52YXIgcmVSZWdFeHBDaGFyID0gL1tcXFxcXiQuKis/KClbXFxde318XS9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBpZiBhIG1ldGhvZCBpcyBuYXRpdmUuICovXG52YXIgcmVJc05hdGl2ZSA9IFJlZ0V4cCgnXicgK1xuICBmdW5jVG9TdHJpbmcuY2FsbChoYXNPd25Qcm9wZXJ0eSkucmVwbGFjZShyZVJlZ0V4cENoYXIsICdcXFxcJCYnKVxuICAucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZywgJyQxLio/JykgKyAnJCdcbik7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYXRpdmVgIHdpdGhvdXQgYmFkIHNoaW0gY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTmF0aXZlKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpIHx8IGlzTWFza2VkKHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcGF0dGVybiA9IGlzRnVuY3Rpb24odmFsdWUpID8gcmVJc05hdGl2ZSA6IHJlSXNIb3N0Q3RvcjtcbiAgcmV0dXJuIHBhdHRlcm4udGVzdCh0b1NvdXJjZSh2YWx1ZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc05hdGl2ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc05hdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKiBVc2VkIHRvIGlkZW50aWZ5IGB0b1N0cmluZ1RhZ2AgdmFsdWVzIG9mIHR5cGVkIGFycmF5cy4gKi9cbnZhciB0eXBlZEFycmF5VGFncyA9IHt9O1xudHlwZWRBcnJheVRhZ3NbZmxvYXQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1tmbG9hdDY0VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQ4VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2ludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50OFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDMyVGFnXSA9IHRydWU7XG50eXBlZEFycmF5VGFnc1thcmdzVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2FycmF5VGFnXSA9XG50eXBlZEFycmF5VGFnc1thcnJheUJ1ZmZlclRhZ10gPSB0eXBlZEFycmF5VGFnc1tib29sVGFnXSA9XG50eXBlZEFycmF5VGFnc1tkYXRhVmlld1RhZ10gPSB0eXBlZEFycmF5VGFnc1tkYXRlVGFnXSA9XG50eXBlZEFycmF5VGFnc1tlcnJvclRhZ10gPSB0eXBlZEFycmF5VGFnc1tmdW5jVGFnXSA9XG50eXBlZEFycmF5VGFnc1ttYXBUYWddID0gdHlwZWRBcnJheVRhZ3NbbnVtYmVyVGFnXSA9XG50eXBlZEFycmF5VGFnc1tvYmplY3RUYWddID0gdHlwZWRBcnJheVRhZ3NbcmVnZXhwVGFnXSA9XG50eXBlZEFycmF5VGFnc1tzZXRUYWddID0gdHlwZWRBcnJheVRhZ3Nbc3RyaW5nVGFnXSA9XG50eXBlZEFycmF5VGFnc1t3ZWFrTWFwVGFnXSA9IGZhbHNlO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzVHlwZWRBcnJheWAgd2l0aG91dCBOb2RlLmpzIG9wdGltaXphdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNUeXBlZEFycmF5KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmXG4gICAgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhIXR5cGVkQXJyYXlUYWdzW2Jhc2VHZXRUYWcodmFsdWUpXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNUeXBlZEFycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUlzVHlwZWRBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMTEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlTWF0Y2hlcyA9IHJlcXVpcmUoJy4vX2Jhc2VNYXRjaGVzJyksXG4gICAgYmFzZU1hdGNoZXNQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2Jhc2VNYXRjaGVzUHJvcGVydHknKSxcbiAgICBpZGVudGl0eSA9IHJlcXVpcmUoJy4vaWRlbnRpdHknKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgcHJvcGVydHkgPSByZXF1aXJlKCcuL3Byb3BlcnR5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXRlcmF0ZWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IFt2YWx1ZT1fLmlkZW50aXR5XSBUaGUgdmFsdWUgdG8gY29udmVydCB0byBhbiBpdGVyYXRlZS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgaXRlcmF0ZWUuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJdGVyYXRlZSh2YWx1ZSkge1xuICAvLyBEb24ndCBzdG9yZSB0aGUgYHR5cGVvZmAgcmVzdWx0IGluIGEgdmFyaWFibGUgdG8gYXZvaWQgYSBKSVQgYnVnIGluIFNhZmFyaSA5LlxuICAvLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE1NjAzNCBmb3IgbW9yZSBkZXRhaWxzLlxuICBpZiAodHlwZW9mIHZhbHVlID09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gaWRlbnRpdHk7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBpc0FycmF5KHZhbHVlKVxuICAgICAgPyBiYXNlTWF0Y2hlc1Byb3BlcnR5KHZhbHVlWzBdLCB2YWx1ZVsxXSlcbiAgICAgIDogYmFzZU1hdGNoZXModmFsdWUpO1xuICB9XG4gIHJldHVybiBwcm9wZXJ0eSh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUl0ZXJhdGVlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUl0ZXJhdGVlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKSxcbiAgICBuYXRpdmVLZXlzID0gcmVxdWlyZSgnLi9fbmF0aXZlS2V5cycpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNgIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXMob2JqZWN0KSB7XG4gIGlmICghaXNQcm90b3R5cGUob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzKG9iamVjdCk7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYga2V5ICE9ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlS2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMTE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBpc1Byb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2lzUHJvdG90eXBlJyksXG4gICAgbmF0aXZlS2V5c0luID0gcmVxdWlyZSgnLi9fbmF0aXZlS2V5c0luJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ua2V5c0luYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzSW4ob2JqZWN0KSB7XG4gIGlmICghaXNPYmplY3Qob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzSW4ob2JqZWN0KTtcbiAgfVxuICB2YXIgaXNQcm90byA9IGlzUHJvdG90eXBlKG9iamVjdCksXG4gICAgICByZXN1bHQgPSBbXTtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKCEoa2V5ID09ICdjb25zdHJ1Y3RvcicgJiYgKGlzUHJvdG8gfHwgIWhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUtleXNJbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VLZXlzSW4uanNcbi8vIG1vZHVsZSBpZCA9IDExNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUlzTWF0Y2ggPSByZXF1aXJlKCcuL19iYXNlSXNNYXRjaCcpLFxuICAgIGdldE1hdGNoRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hdGNoRGF0YScpLFxuICAgIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlID0gcmVxdWlyZSgnLi9fbWF0Y2hlc1N0cmljdENvbXBhcmFibGUnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5tYXRjaGVzYCB3aGljaCBkb2Vzbid0IGNsb25lIGBzb3VyY2VgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3Qgb2YgcHJvcGVydHkgdmFsdWVzIHRvIG1hdGNoLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgc3BlYyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZU1hdGNoZXMoc291cmNlKSB7XG4gIHZhciBtYXRjaERhdGEgPSBnZXRNYXRjaERhdGEoc291cmNlKTtcbiAgaWYgKG1hdGNoRGF0YS5sZW5ndGggPT0gMSAmJiBtYXRjaERhdGFbMF1bMl0pIHtcbiAgICByZXR1cm4gbWF0Y2hlc1N0cmljdENvbXBhcmFibGUobWF0Y2hEYXRhWzBdWzBdLCBtYXRjaERhdGFbMF1bMV0pO1xuICB9XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0ID09PSBzb3VyY2UgfHwgYmFzZUlzTWF0Y2gob2JqZWN0LCBzb3VyY2UsIG1hdGNoRGF0YSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZU1hdGNoZXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlTWF0Y2hlcy5qc1xuLy8gbW9kdWxlIGlkID0gMTE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlSXNFcXVhbCA9IHJlcXVpcmUoJy4vX2Jhc2VJc0VxdWFsJyksXG4gICAgZ2V0ID0gcmVxdWlyZSgnLi9nZXQnKSxcbiAgICBoYXNJbiA9IHJlcXVpcmUoJy4vaGFzSW4nKSxcbiAgICBpc0tleSA9IHJlcXVpcmUoJy4vX2lzS2V5JyksXG4gICAgaXNTdHJpY3RDb21wYXJhYmxlID0gcmVxdWlyZSgnLi9faXNTdHJpY3RDb21wYXJhYmxlJyksXG4gICAgbWF0Y2hlc1N0cmljdENvbXBhcmFibGUgPSByZXF1aXJlKCcuL19tYXRjaGVzU3RyaWN0Q29tcGFyYWJsZScpLFxuICAgIHRvS2V5ID0gcmVxdWlyZSgnLi9fdG9LZXknKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxLFxuICAgIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcgPSAyO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLm1hdGNoZXNQcm9wZXJ0eWAgd2hpY2ggZG9lc24ndCBjbG9uZSBgc3JjVmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHBhcmFtIHsqfSBzcmNWYWx1ZSBUaGUgdmFsdWUgdG8gbWF0Y2guXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBzcGVjIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlTWF0Y2hlc1Byb3BlcnR5KHBhdGgsIHNyY1ZhbHVlKSB7XG4gIGlmIChpc0tleShwYXRoKSAmJiBpc1N0cmljdENvbXBhcmFibGUoc3JjVmFsdWUpKSB7XG4gICAgcmV0dXJuIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlKHRvS2V5KHBhdGgpLCBzcmNWYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBvYmpWYWx1ZSA9IGdldChvYmplY3QsIHBhdGgpO1xuICAgIHJldHVybiAob2JqVmFsdWUgPT09IHVuZGVmaW5lZCAmJiBvYmpWYWx1ZSA9PT0gc3JjVmFsdWUpXG4gICAgICA/IGhhc0luKG9iamVjdCwgcGF0aClcbiAgICAgIDogYmFzZUlzRXF1YWwoc3JjVmFsdWUsIG9ialZhbHVlLCBDT01QQVJFX1BBUlRJQUxfRkxBRyB8IENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VNYXRjaGVzUHJvcGVydHk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlTWF0Y2hlc1Byb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFN0YWNrID0gcmVxdWlyZSgnLi9fU3RhY2snKSxcbiAgICBhc3NpZ25NZXJnZVZhbHVlID0gcmVxdWlyZSgnLi9fYXNzaWduTWVyZ2VWYWx1ZScpLFxuICAgIGJhc2VGb3IgPSByZXF1aXJlKCcuL19iYXNlRm9yJyksXG4gICAgYmFzZU1lcmdlRGVlcCA9IHJlcXVpcmUoJy4vX2Jhc2VNZXJnZURlZXAnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBrZXlzSW4gPSByZXF1aXJlKCcuL2tleXNJbicpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLm1lcmdlYCB3aXRob3V0IHN1cHBvcnQgZm9yIG11bHRpcGxlIHNvdXJjZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QuXG4gKiBAcGFyYW0ge251bWJlcn0gc3JjSW5kZXggVGhlIGluZGV4IG9mIGBzb3VyY2VgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgbWVyZ2VkIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgc291cmNlIHZhbHVlcyBhbmQgdGhlaXIgbWVyZ2VkXG4gKiAgY291bnRlcnBhcnRzLlxuICovXG5mdW5jdGlvbiBiYXNlTWVyZ2Uob2JqZWN0LCBzb3VyY2UsIHNyY0luZGV4LCBjdXN0b21pemVyLCBzdGFjaykge1xuICBpZiAob2JqZWN0ID09PSBzb3VyY2UpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgYmFzZUZvcihzb3VyY2UsIGZ1bmN0aW9uKHNyY1ZhbHVlLCBrZXkpIHtcbiAgICBpZiAoaXNPYmplY3Qoc3JjVmFsdWUpKSB7XG4gICAgICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICAgICAgYmFzZU1lcmdlRGVlcChvYmplY3QsIHNvdXJjZSwga2V5LCBzcmNJbmRleCwgYmFzZU1lcmdlLCBjdXN0b21pemVyLCBzdGFjayk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdmFyIG5ld1ZhbHVlID0gY3VzdG9taXplclxuICAgICAgICA/IGN1c3RvbWl6ZXIob2JqZWN0W2tleV0sIHNyY1ZhbHVlLCAoa2V5ICsgJycpLCBvYmplY3QsIHNvdXJjZSwgc3RhY2spXG4gICAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgICBpZiAobmV3VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBuZXdWYWx1ZSA9IHNyY1ZhbHVlO1xuICAgICAgfVxuICAgICAgYXNzaWduTWVyZ2VWYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUpO1xuICAgIH1cbiAgfSwga2V5c0luKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlTWVyZ2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlTWVyZ2UuanNcbi8vIG1vZHVsZSBpZCA9IDExOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXNzaWduTWVyZ2VWYWx1ZSA9IHJlcXVpcmUoJy4vX2Fzc2lnbk1lcmdlVmFsdWUnKSxcbiAgICBjbG9uZUJ1ZmZlciA9IHJlcXVpcmUoJy4vX2Nsb25lQnVmZmVyJyksXG4gICAgY2xvbmVUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9fY2xvbmVUeXBlZEFycmF5JyksXG4gICAgY29weUFycmF5ID0gcmVxdWlyZSgnLi9fY29weUFycmF5JyksXG4gICAgaW5pdENsb25lT2JqZWN0ID0gcmVxdWlyZSgnLi9faW5pdENsb25lT2JqZWN0JyksXG4gICAgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzQXJyYXlMaWtlT2JqZWN0ID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZU9iamVjdCcpLFxuICAgIGlzQnVmZmVyID0gcmVxdWlyZSgnLi9pc0J1ZmZlcicpLFxuICAgIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBpc1BsYWluT2JqZWN0ID0gcmVxdWlyZSgnLi9pc1BsYWluT2JqZWN0JyksXG4gICAgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9pc1R5cGVkQXJyYXknKSxcbiAgICB0b1BsYWluT2JqZWN0ID0gcmVxdWlyZSgnLi90b1BsYWluT2JqZWN0Jyk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlTWVyZ2VgIGZvciBhcnJheXMgYW5kIG9iamVjdHMgd2hpY2ggcGVyZm9ybXNcbiAqIGRlZXAgbWVyZ2VzIGFuZCB0cmFja3MgdHJhdmVyc2VkIG9iamVjdHMgZW5hYmxpbmcgb2JqZWN0cyB3aXRoIGNpcmN1bGFyXG4gKiByZWZlcmVuY2VzIHRvIGJlIG1lcmdlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgc291cmNlIG9iamVjdC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gbWVyZ2UuXG4gKiBAcGFyYW0ge251bWJlcn0gc3JjSW5kZXggVGhlIGluZGV4IG9mIGBzb3VyY2VgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gbWVyZ2VGdW5jIFRoZSBmdW5jdGlvbiB0byBtZXJnZSB2YWx1ZXMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBhc3NpZ25lZCB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIHNvdXJjZSB2YWx1ZXMgYW5kIHRoZWlyIG1lcmdlZFxuICogIGNvdW50ZXJwYXJ0cy5cbiAqL1xuZnVuY3Rpb24gYmFzZU1lcmdlRGVlcChvYmplY3QsIHNvdXJjZSwga2V5LCBzcmNJbmRleCwgbWVyZ2VGdW5jLCBjdXN0b21pemVyLCBzdGFjaykge1xuICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XSxcbiAgICAgIHNyY1ZhbHVlID0gc291cmNlW2tleV0sXG4gICAgICBzdGFja2VkID0gc3RhY2suZ2V0KHNyY1ZhbHVlKTtcblxuICBpZiAoc3RhY2tlZCkge1xuICAgIGFzc2lnbk1lcmdlVmFsdWUob2JqZWN0LCBrZXksIHN0YWNrZWQpO1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbmV3VmFsdWUgPSBjdXN0b21pemVyXG4gICAgPyBjdXN0b21pemVyKG9ialZhbHVlLCBzcmNWYWx1ZSwgKGtleSArICcnKSwgb2JqZWN0LCBzb3VyY2UsIHN0YWNrKVxuICAgIDogdW5kZWZpbmVkO1xuXG4gIHZhciBpc0NvbW1vbiA9IG5ld1ZhbHVlID09PSB1bmRlZmluZWQ7XG5cbiAgaWYgKGlzQ29tbW9uKSB7XG4gICAgdmFyIGlzQXJyID0gaXNBcnJheShzcmNWYWx1ZSksXG4gICAgICAgIGlzQnVmZiA9ICFpc0FyciAmJiBpc0J1ZmZlcihzcmNWYWx1ZSksXG4gICAgICAgIGlzVHlwZWQgPSAhaXNBcnIgJiYgIWlzQnVmZiAmJiBpc1R5cGVkQXJyYXkoc3JjVmFsdWUpO1xuXG4gICAgbmV3VmFsdWUgPSBzcmNWYWx1ZTtcbiAgICBpZiAoaXNBcnIgfHwgaXNCdWZmIHx8IGlzVHlwZWQpIHtcbiAgICAgIGlmIChpc0FycmF5KG9ialZhbHVlKSkge1xuICAgICAgICBuZXdWYWx1ZSA9IG9ialZhbHVlO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoaXNBcnJheUxpa2VPYmplY3Qob2JqVmFsdWUpKSB7XG4gICAgICAgIG5ld1ZhbHVlID0gY29weUFycmF5KG9ialZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGlzQnVmZikge1xuICAgICAgICBpc0NvbW1vbiA9IGZhbHNlO1xuICAgICAgICBuZXdWYWx1ZSA9IGNsb25lQnVmZmVyKHNyY1ZhbHVlLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGlzVHlwZWQpIHtcbiAgICAgICAgaXNDb21tb24gPSBmYWxzZTtcbiAgICAgICAgbmV3VmFsdWUgPSBjbG9uZVR5cGVkQXJyYXkoc3JjVmFsdWUsIHRydWUpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG5ld1ZhbHVlID0gW107XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzUGxhaW5PYmplY3Qoc3JjVmFsdWUpIHx8IGlzQXJndW1lbnRzKHNyY1ZhbHVlKSkge1xuICAgICAgbmV3VmFsdWUgPSBvYmpWYWx1ZTtcbiAgICAgIGlmIChpc0FyZ3VtZW50cyhvYmpWYWx1ZSkpIHtcbiAgICAgICAgbmV3VmFsdWUgPSB0b1BsYWluT2JqZWN0KG9ialZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKCFpc09iamVjdChvYmpWYWx1ZSkgfHwgKHNyY0luZGV4ICYmIGlzRnVuY3Rpb24ob2JqVmFsdWUpKSkge1xuICAgICAgICBuZXdWYWx1ZSA9IGluaXRDbG9uZU9iamVjdChzcmNWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaXNDb21tb24gPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgaWYgKGlzQ29tbW9uKSB7XG4gICAgLy8gUmVjdXJzaXZlbHkgbWVyZ2Ugb2JqZWN0cyBhbmQgYXJyYXlzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgc3RhY2suc2V0KHNyY1ZhbHVlLCBuZXdWYWx1ZSk7XG4gICAgbWVyZ2VGdW5jKG5ld1ZhbHVlLCBzcmNWYWx1ZSwgc3JjSW5kZXgsIGN1c3RvbWl6ZXIsIHN0YWNrKTtcbiAgICBzdGFja1snZGVsZXRlJ10oc3JjVmFsdWUpO1xuICB9XG4gIGFzc2lnbk1lcmdlVmFsdWUob2JqZWN0LCBrZXksIG5ld1ZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlTWVyZ2VEZWVwO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZU1lcmdlRGVlcC5qc1xuLy8gbW9kdWxlIGlkID0gMTE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ucHJvcGVydHlgIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVlcCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhY2Nlc3NvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVByb3BlcnR5KGtleSkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVByb3BlcnR5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZVByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VHZXQgPSByZXF1aXJlKCcuL19iYXNlR2V0Jyk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlUHJvcGVydHlgIHdoaWNoIHN1cHBvcnRzIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhY2Nlc3NvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVByb3BlcnR5RGVlcChwYXRoKSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gYmFzZUdldChvYmplY3QsIHBhdGgpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VQcm9wZXJ0eURlZXA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlUHJvcGVydHlEZWVwLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlkZW50aXR5ID0gcmVxdWlyZSgnLi9pZGVudGl0eScpLFxuICAgIG92ZXJSZXN0ID0gcmVxdWlyZSgnLi9fb3ZlclJlc3QnKSxcbiAgICBzZXRUb1N0cmluZyA9IHJlcXVpcmUoJy4vX3NldFRvU3RyaW5nJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ucmVzdGAgd2hpY2ggZG9lc24ndCB2YWxpZGF0ZSBvciBjb2VyY2UgYXJndW1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBhcHBseSBhIHJlc3QgcGFyYW1ldGVyIHRvLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD1mdW5jLmxlbmd0aC0xXSBUaGUgc3RhcnQgcG9zaXRpb24gb2YgdGhlIHJlc3QgcGFyYW1ldGVyLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VSZXN0KGZ1bmMsIHN0YXJ0KSB7XG4gIHJldHVybiBzZXRUb1N0cmluZyhvdmVyUmVzdChmdW5jLCBzdGFydCwgaWRlbnRpdHkpLCBmdW5jICsgJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VSZXN0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZVJlc3QuanNcbi8vIG1vZHVsZSBpZCA9IDEyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY29uc3RhbnQgPSByZXF1aXJlKCcuL2NvbnN0YW50JyksXG4gICAgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19kZWZpbmVQcm9wZXJ0eScpLFxuICAgIGlkZW50aXR5ID0gcmVxdWlyZSgnLi9pZGVudGl0eScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBzZXRUb1N0cmluZ2Agd2l0aG91dCBzdXBwb3J0IGZvciBob3QgbG9vcCBzaG9ydGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3RyaW5nIFRoZSBgdG9TdHJpbmdgIHJlc3VsdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyBgZnVuY2AuXG4gKi9cbnZhciBiYXNlU2V0VG9TdHJpbmcgPSAhZGVmaW5lUHJvcGVydHkgPyBpZGVudGl0eSA6IGZ1bmN0aW9uKGZ1bmMsIHN0cmluZykge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHkoZnVuYywgJ3RvU3RyaW5nJywge1xuICAgICdjb25maWd1cmFibGUnOiB0cnVlLFxuICAgICdlbnVtZXJhYmxlJzogZmFsc2UsXG4gICAgJ3ZhbHVlJzogY29uc3RhbnQoc3RyaW5nKSxcbiAgICAnd3JpdGFibGUnOiB0cnVlXG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlU2V0VG9TdHJpbmc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlU2V0VG9TdHJpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDEyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRpbWVzYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHNcbiAqIG9yIG1heCBhcnJheSBsZW5ndGggY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGludm9rZSBgaXRlcmF0ZWVgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRpbWVzKG4sIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobik7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBuKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGluZGV4KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUaW1lcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VUaW1lcy5qc1xuLy8gbW9kdWxlIGlkID0gMTI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBhcnJheU1hcCA9IHJlcXVpcmUoJy4vX2FycmF5TWFwJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBJTkZJTklUWSA9IDEgLyAwO1xuXG4vKiogVXNlZCB0byBjb252ZXJ0IHN5bWJvbHMgdG8gcHJpbWl0aXZlcyBhbmQgc3RyaW5ncy4gKi9cbnZhciBzeW1ib2xQcm90byA9IFN5bWJvbCA/IFN5bWJvbC5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG4gICAgc3ltYm9sVG9TdHJpbmcgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnRvU3RyaW5nIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRvU3RyaW5nYCB3aGljaCBkb2Vzbid0IGNvbnZlcnQgbnVsbGlzaFxuICogdmFsdWVzIHRvIGVtcHR5IHN0cmluZ3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUb1N0cmluZyh2YWx1ZSkge1xuICAvLyBFeGl0IGVhcmx5IGZvciBzdHJpbmdzIHRvIGF2b2lkIGEgcGVyZm9ybWFuY2UgaGl0IGluIHNvbWUgZW52aXJvbm1lbnRzLlxuICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbnZlcnQgdmFsdWVzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgcmV0dXJuIGFycmF5TWFwKHZhbHVlLCBiYXNlVG9TdHJpbmcpICsgJyc7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBzeW1ib2xUb1N0cmluZyA/IHN5bWJvbFRvU3RyaW5nLmNhbGwodmFsdWUpIDogJyc7XG4gIH1cbiAgdmFyIHJlc3VsdCA9ICh2YWx1ZSArICcnKTtcbiAgcmV0dXJuIChyZXN1bHQgPT0gJzAnICYmICgxIC8gdmFsdWUpID09IC1JTkZJTklUWSkgPyAnLTAnIDogcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUb1N0cmluZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VUb1N0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gMTI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udW5hcnlgIHdpdGhvdXQgc3VwcG9ydCBmb3Igc3RvcmluZyBtZXRhZGF0YS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FwIGFyZ3VtZW50cyBmb3IuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjYXBwZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VVbmFyeShmdW5jKSB7XG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBmdW5jKHZhbHVlKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVW5hcnk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlVW5hcnkuanNcbi8vIG1vZHVsZSBpZCA9IDEyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENoZWNrcyBpZiBhIGBjYWNoZWAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGNhY2hlIFRoZSBjYWNoZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBjYWNoZUhhcyhjYWNoZSwga2V5KSB7XG4gIHJldHVybiBjYWNoZS5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjYWNoZUhhcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2NhY2hlSGFzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFVpbnQ4QXJyYXkgPSByZXF1aXJlKCcuL19VaW50OEFycmF5Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBhcnJheUJ1ZmZlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGFycmF5QnVmZmVyIFRoZSBhcnJheSBidWZmZXIgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7QXJyYXlCdWZmZXJ9IFJldHVybnMgdGhlIGNsb25lZCBhcnJheSBidWZmZXIuXG4gKi9cbmZ1bmN0aW9uIGNsb25lQXJyYXlCdWZmZXIoYXJyYXlCdWZmZXIpIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyBhcnJheUJ1ZmZlci5jb25zdHJ1Y3RvcihhcnJheUJ1ZmZlci5ieXRlTGVuZ3RoKTtcbiAgbmV3IFVpbnQ4QXJyYXkocmVzdWx0KS5zZXQobmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZUFycmF5QnVmZmVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fY2xvbmVBcnJheUJ1ZmZlci5qc1xuLy8gbW9kdWxlIGlkID0gMTI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZCxcbiAgICBhbGxvY1Vuc2FmZSA9IEJ1ZmZlciA/IEJ1ZmZlci5hbGxvY1Vuc2FmZSA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgIGBidWZmZXJgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0J1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge0J1ZmZlcn0gUmV0dXJucyB0aGUgY2xvbmVkIGJ1ZmZlci5cbiAqL1xuZnVuY3Rpb24gY2xvbmVCdWZmZXIoYnVmZmVyLCBpc0RlZXApIHtcbiAgaWYgKGlzRGVlcCkge1xuICAgIHJldHVybiBidWZmZXIuc2xpY2UoKTtcbiAgfVxuICB2YXIgbGVuZ3RoID0gYnVmZmVyLmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IGFsbG9jVW5zYWZlID8gYWxsb2NVbnNhZmUobGVuZ3RoKSA6IG5ldyBidWZmZXIuY29uc3RydWN0b3IobGVuZ3RoKTtcblxuICBidWZmZXIuY29weShyZXN1bHQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lQnVmZmVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fY2xvbmVCdWZmZXIuanNcbi8vIG1vZHVsZSBpZCA9IDEyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY2xvbmVBcnJheUJ1ZmZlciA9IHJlcXVpcmUoJy4vX2Nsb25lQXJyYXlCdWZmZXInKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYHR5cGVkQXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gdHlwZWRBcnJheSBUaGUgdHlwZWQgYXJyYXkgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHR5cGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBjbG9uZVR5cGVkQXJyYXkodHlwZWRBcnJheSwgaXNEZWVwKSB7XG4gIHZhciBidWZmZXIgPSBpc0RlZXAgPyBjbG9uZUFycmF5QnVmZmVyKHR5cGVkQXJyYXkuYnVmZmVyKSA6IHR5cGVkQXJyYXkuYnVmZmVyO1xuICByZXR1cm4gbmV3IHR5cGVkQXJyYXkuY29uc3RydWN0b3IoYnVmZmVyLCB0eXBlZEFycmF5LmJ5dGVPZmZzZXQsIHR5cGVkQXJyYXkubGVuZ3RoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZVR5cGVkQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19jbG9uZVR5cGVkQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDEzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19hc3NpZ25WYWx1ZScpLFxuICAgIGJhc2VBc3NpZ25WYWx1ZSA9IHJlcXVpcmUoJy4vX2Jhc2VBc3NpZ25WYWx1ZScpO1xuXG4vKipcbiAqIENvcGllcyBwcm9wZXJ0aWVzIG9mIGBzb3VyY2VgIHRvIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb20uXG4gKiBAcGFyYW0ge0FycmF5fSBwcm9wcyBUaGUgcHJvcGVydHkgaWRlbnRpZmllcnMgdG8gY29weS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0PXt9XSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyB0by5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvcGllZCB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBjb3B5T2JqZWN0KHNvdXJjZSwgcHJvcHMsIG9iamVjdCwgY3VzdG9taXplcikge1xuICB2YXIgaXNOZXcgPSAhb2JqZWN0O1xuICBvYmplY3QgfHwgKG9iamVjdCA9IHt9KTtcblxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBrZXkgPSBwcm9wc1tpbmRleF07XG5cbiAgICB2YXIgbmV3VmFsdWUgPSBjdXN0b21pemVyXG4gICAgICA/IGN1c3RvbWl6ZXIob2JqZWN0W2tleV0sIHNvdXJjZVtrZXldLCBrZXksIG9iamVjdCwgc291cmNlKVxuICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICBpZiAobmV3VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgbmV3VmFsdWUgPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gICAgaWYgKGlzTmV3KSB7XG4gICAgICBiYXNlQXNzaWduVmFsdWUob2JqZWN0LCBrZXksIG5ld1ZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXNzaWduVmFsdWUob2JqZWN0LCBrZXksIG5ld1ZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb3B5T2JqZWN0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fY29weU9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb3ZlcnJlYWNoaW5nIGNvcmUtanMgc2hpbXMuICovXG52YXIgY29yZUpzRGF0YSA9IHJvb3RbJ19fY29yZS1qc19zaGFyZWRfXyddO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcmVKc0RhdGE7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19jb3JlSnNEYXRhLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VSZXN0ID0gcmVxdWlyZSgnLi9fYmFzZVJlc3QnKSxcbiAgICBpc0l0ZXJhdGVlQ2FsbCA9IHJlcXVpcmUoJy4vX2lzSXRlcmF0ZWVDYWxsJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIGxpa2UgYF8uYXNzaWduYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gYXNzaWduZXIgVGhlIGZ1bmN0aW9uIHRvIGFzc2lnbiB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhc3NpZ25lciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQXNzaWduZXIoYXNzaWduZXIpIHtcbiAgcmV0dXJuIGJhc2VSZXN0KGZ1bmN0aW9uKG9iamVjdCwgc291cmNlcykge1xuICAgIHZhciBpbmRleCA9IC0xLFxuICAgICAgICBsZW5ndGggPSBzb3VyY2VzLmxlbmd0aCxcbiAgICAgICAgY3VzdG9taXplciA9IGxlbmd0aCA+IDEgPyBzb3VyY2VzW2xlbmd0aCAtIDFdIDogdW5kZWZpbmVkLFxuICAgICAgICBndWFyZCA9IGxlbmd0aCA+IDIgPyBzb3VyY2VzWzJdIDogdW5kZWZpbmVkO1xuXG4gICAgY3VzdG9taXplciA9IChhc3NpZ25lci5sZW5ndGggPiAzICYmIHR5cGVvZiBjdXN0b21pemVyID09ICdmdW5jdGlvbicpXG4gICAgICA/IChsZW5ndGgtLSwgY3VzdG9taXplcilcbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKGd1YXJkICYmIGlzSXRlcmF0ZWVDYWxsKHNvdXJjZXNbMF0sIHNvdXJjZXNbMV0sIGd1YXJkKSkge1xuICAgICAgY3VzdG9taXplciA9IGxlbmd0aCA8IDMgPyB1bmRlZmluZWQgOiBjdXN0b21pemVyO1xuICAgICAgbGVuZ3RoID0gMTtcbiAgICB9XG4gICAgb2JqZWN0ID0gT2JqZWN0KG9iamVjdCk7XG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIHZhciBzb3VyY2UgPSBzb3VyY2VzW2luZGV4XTtcbiAgICAgIGlmIChzb3VyY2UpIHtcbiAgICAgICAgYXNzaWduZXIob2JqZWN0LCBzb3VyY2UsIGluZGV4LCBjdXN0b21pemVyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlQXNzaWduZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19jcmVhdGVBc3NpZ25lci5qc1xuLy8gbW9kdWxlIGlkID0gMTMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ3JlYXRlcyBhIGJhc2UgZnVuY3Rpb24gZm9yIG1ldGhvZHMgbGlrZSBgXy5mb3JJbmAgYW5kIGBfLmZvck93bmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Zyb21SaWdodF0gU3BlY2lmeSBpdGVyYXRpbmcgZnJvbSByaWdodCB0byBsZWZ0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYmFzZSBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQmFzZUZvcihmcm9tUmlnaHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCwgaXRlcmF0ZWUsIGtleXNGdW5jKSB7XG4gICAgdmFyIGluZGV4ID0gLTEsXG4gICAgICAgIGl0ZXJhYmxlID0gT2JqZWN0KG9iamVjdCksXG4gICAgICAgIHByb3BzID0ga2V5c0Z1bmMob2JqZWN0KSxcbiAgICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICB2YXIga2V5ID0gcHJvcHNbZnJvbVJpZ2h0ID8gbGVuZ3RoIDogKytpbmRleF07XG4gICAgICBpZiAoaXRlcmF0ZWUoaXRlcmFibGVba2V5XSwga2V5LCBpdGVyYWJsZSkgPT09IGZhbHNlKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0O1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUJhc2VGb3I7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19jcmVhdGVCYXNlRm9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIFVpbnQ4QXJyYXkgPSByZXF1aXJlKCcuL19VaW50OEFycmF5JyksXG4gICAgZXEgPSByZXF1aXJlKCcuL2VxJyksXG4gICAgZXF1YWxBcnJheXMgPSByZXF1aXJlKCcuL19lcXVhbEFycmF5cycpLFxuICAgIG1hcFRvQXJyYXkgPSByZXF1aXJlKCcuL19tYXBUb0FycmF5JyksXG4gICAgc2V0VG9BcnJheSA9IHJlcXVpcmUoJy4vX3NldFRvQXJyYXknKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxLFxuICAgIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcgPSAyO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XSc7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xWYWx1ZU9mID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by52YWx1ZU9mIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3IgY29tcGFyaW5nIG9iamVjdHMgb2ZcbiAqIHRoZSBzYW1lIGB0b1N0cmluZ1RhZ2AuXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gb25seSBzdXBwb3J0cyBjb21wYXJpbmcgdmFsdWVzIHdpdGggdGFncyBvZlxuICogYEJvb2xlYW5gLCBgRGF0ZWAsIGBFcnJvcmAsIGBOdW1iZXJgLCBgUmVnRXhwYCwgb3IgYFN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgVGhlIGB0b1N0cmluZ1RhZ2Agb2YgdGhlIG9iamVjdHMgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YWNrIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbEJ5VGFnKG9iamVjdCwgb3RoZXIsIHRhZywgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICBzd2l0Y2ggKHRhZykge1xuICAgIGNhc2UgZGF0YVZpZXdUYWc6XG4gICAgICBpZiAoKG9iamVjdC5ieXRlTGVuZ3RoICE9IG90aGVyLmJ5dGVMZW5ndGgpIHx8XG4gICAgICAgICAgKG9iamVjdC5ieXRlT2Zmc2V0ICE9IG90aGVyLmJ5dGVPZmZzZXQpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIG9iamVjdCA9IG9iamVjdC5idWZmZXI7XG4gICAgICBvdGhlciA9IG90aGVyLmJ1ZmZlcjtcblxuICAgIGNhc2UgYXJyYXlCdWZmZXJUYWc6XG4gICAgICBpZiAoKG9iamVjdC5ieXRlTGVuZ3RoICE9IG90aGVyLmJ5dGVMZW5ndGgpIHx8XG4gICAgICAgICAgIWVxdWFsRnVuYyhuZXcgVWludDhBcnJheShvYmplY3QpLCBuZXcgVWludDhBcnJheShvdGhlcikpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgY2FzZSBib29sVGFnOlxuICAgIGNhc2UgZGF0ZVRhZzpcbiAgICBjYXNlIG51bWJlclRhZzpcbiAgICAgIC8vIENvZXJjZSBib29sZWFucyB0byBgMWAgb3IgYDBgIGFuZCBkYXRlcyB0byBtaWxsaXNlY29uZHMuXG4gICAgICAvLyBJbnZhbGlkIGRhdGVzIGFyZSBjb2VyY2VkIHRvIGBOYU5gLlxuICAgICAgcmV0dXJuIGVxKCtvYmplY3QsICtvdGhlcik7XG5cbiAgICBjYXNlIGVycm9yVGFnOlxuICAgICAgcmV0dXJuIG9iamVjdC5uYW1lID09IG90aGVyLm5hbWUgJiYgb2JqZWN0Lm1lc3NhZ2UgPT0gb3RoZXIubWVzc2FnZTtcblxuICAgIGNhc2UgcmVnZXhwVGFnOlxuICAgIGNhc2Ugc3RyaW5nVGFnOlxuICAgICAgLy8gQ29lcmNlIHJlZ2V4ZXMgdG8gc3RyaW5ncyBhbmQgdHJlYXQgc3RyaW5ncywgcHJpbWl0aXZlcyBhbmQgb2JqZWN0cyxcbiAgICAgIC8vIGFzIGVxdWFsLiBTZWUgaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXJlZ2V4cC5wcm90b3R5cGUudG9zdHJpbmdcbiAgICAgIC8vIGZvciBtb3JlIGRldGFpbHMuXG4gICAgICByZXR1cm4gb2JqZWN0ID09IChvdGhlciArICcnKTtcblxuICAgIGNhc2UgbWFwVGFnOlxuICAgICAgdmFyIGNvbnZlcnQgPSBtYXBUb0FycmF5O1xuXG4gICAgY2FzZSBzZXRUYWc6XG4gICAgICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHO1xuICAgICAgY29udmVydCB8fCAoY29udmVydCA9IHNldFRvQXJyYXkpO1xuXG4gICAgICBpZiAob2JqZWN0LnNpemUgIT0gb3RoZXIuc2l6ZSAmJiAhaXNQYXJ0aWFsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIC8vIEFzc3VtZSBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgICAgIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KG9iamVjdCk7XG4gICAgICBpZiAoc3RhY2tlZCkge1xuICAgICAgICByZXR1cm4gc3RhY2tlZCA9PSBvdGhlcjtcbiAgICAgIH1cbiAgICAgIGJpdG1hc2sgfD0gQ09NUEFSRV9VTk9SREVSRURfRkxBRztcblxuICAgICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBvYmplY3RzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgICBzdGFjay5zZXQob2JqZWN0LCBvdGhlcik7XG4gICAgICB2YXIgcmVzdWx0ID0gZXF1YWxBcnJheXMoY29udmVydChvYmplY3QpLCBjb252ZXJ0KG90aGVyKSwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjayk7XG4gICAgICBzdGFja1snZGVsZXRlJ10ob2JqZWN0KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICBjYXNlIHN5bWJvbFRhZzpcbiAgICAgIGlmIChzeW1ib2xWYWx1ZU9mKSB7XG4gICAgICAgIHJldHVybiBzeW1ib2xWYWx1ZU9mLmNhbGwob2JqZWN0KSA9PSBzeW1ib2xWYWx1ZU9mLmNhbGwob3RoZXIpO1xuICAgICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcXVhbEJ5VGFnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZXF1YWxCeVRhZy5qc1xuLy8gbW9kdWxlIGlkID0gMTM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXRBbGxLZXlzID0gcmVxdWlyZSgnLi9fZ2V0QWxsS2V5cycpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDE7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBvYmplY3RzIHdpdGggc3VwcG9ydCBmb3JcbiAqIHBhcnRpYWwgZGVlcCBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhY2sgVHJhY2tzIHRyYXZlcnNlZCBgb2JqZWN0YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsT2JqZWN0cyhvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHZhciBpc1BhcnRpYWwgPSBiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUcsXG4gICAgICBvYmpQcm9wcyA9IGdldEFsbEtleXMob2JqZWN0KSxcbiAgICAgIG9iakxlbmd0aCA9IG9ialByb3BzLmxlbmd0aCxcbiAgICAgIG90aFByb3BzID0gZ2V0QWxsS2V5cyhvdGhlciksXG4gICAgICBvdGhMZW5ndGggPSBvdGhQcm9wcy5sZW5ndGg7XG5cbiAgaWYgKG9iakxlbmd0aCAhPSBvdGhMZW5ndGggJiYgIWlzUGFydGlhbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgaW5kZXggPSBvYmpMZW5ndGg7XG4gIHdoaWxlIChpbmRleC0tKSB7XG4gICAgdmFyIGtleSA9IG9ialByb3BzW2luZGV4XTtcbiAgICBpZiAoIShpc1BhcnRpYWwgPyBrZXkgaW4gb3RoZXIgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG90aGVyLCBrZXkpKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICAvLyBBc3N1bWUgY3ljbGljIHZhbHVlcyBhcmUgZXF1YWwuXG4gIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KG9iamVjdCk7XG4gIGlmIChzdGFja2VkICYmIHN0YWNrLmdldChvdGhlcikpIHtcbiAgICByZXR1cm4gc3RhY2tlZCA9PSBvdGhlcjtcbiAgfVxuICB2YXIgcmVzdWx0ID0gdHJ1ZTtcbiAgc3RhY2suc2V0KG9iamVjdCwgb3RoZXIpO1xuICBzdGFjay5zZXQob3RoZXIsIG9iamVjdCk7XG5cbiAgdmFyIHNraXBDdG9yID0gaXNQYXJ0aWFsO1xuICB3aGlsZSAoKytpbmRleCA8IG9iakxlbmd0aCkge1xuICAgIGtleSA9IG9ialByb3BzW2luZGV4XTtcbiAgICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XSxcbiAgICAgICAgb3RoVmFsdWUgPSBvdGhlcltrZXldO1xuXG4gICAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICAgIHZhciBjb21wYXJlZCA9IGlzUGFydGlhbFxuICAgICAgICA/IGN1c3RvbWl6ZXIob3RoVmFsdWUsIG9ialZhbHVlLCBrZXksIG90aGVyLCBvYmplY3QsIHN0YWNrKVxuICAgICAgICA6IGN1c3RvbWl6ZXIob2JqVmFsdWUsIG90aFZhbHVlLCBrZXksIG9iamVjdCwgb3RoZXIsIHN0YWNrKTtcbiAgICB9XG4gICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBvYmplY3RzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgaWYgKCEoY29tcGFyZWQgPT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gKG9ialZhbHVlID09PSBvdGhWYWx1ZSB8fCBlcXVhbEZ1bmMob2JqVmFsdWUsIG90aFZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaykpXG4gICAgICAgICAgOiBjb21wYXJlZFxuICAgICAgICApKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBza2lwQ3RvciB8fCAoc2tpcEN0b3IgPSBrZXkgPT0gJ2NvbnN0cnVjdG9yJyk7XG4gIH1cbiAgaWYgKHJlc3VsdCAmJiAhc2tpcEN0b3IpIHtcbiAgICB2YXIgb2JqQ3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcixcbiAgICAgICAgb3RoQ3RvciA9IG90aGVyLmNvbnN0cnVjdG9yO1xuXG4gICAgLy8gTm9uIGBPYmplY3RgIG9iamVjdCBpbnN0YW5jZXMgd2l0aCBkaWZmZXJlbnQgY29uc3RydWN0b3JzIGFyZSBub3QgZXF1YWwuXG4gICAgaWYgKG9iakN0b3IgIT0gb3RoQ3RvciAmJlxuICAgICAgICAoJ2NvbnN0cnVjdG9yJyBpbiBvYmplY3QgJiYgJ2NvbnN0cnVjdG9yJyBpbiBvdGhlcikgJiZcbiAgICAgICAgISh0eXBlb2Ygb2JqQ3RvciA9PSAnZnVuY3Rpb24nICYmIG9iakN0b3IgaW5zdGFuY2VvZiBvYmpDdG9yICYmXG4gICAgICAgICAgdHlwZW9mIG90aEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBvdGhDdG9yIGluc3RhbmNlb2Ygb3RoQ3RvcikpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBzdGFja1snZGVsZXRlJ10ob2JqZWN0KTtcbiAgc3RhY2tbJ2RlbGV0ZSddKG90aGVyKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcXVhbE9iamVjdHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19lcXVhbE9iamVjdHMuanNcbi8vIG1vZHVsZSBpZCA9IDEzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUdldEFsbEtleXMgPSByZXF1aXJlKCcuL19iYXNlR2V0QWxsS2V5cycpLFxuICAgIGdldFN5bWJvbHMgPSByZXF1aXJlKCcuL19nZXRTeW1ib2xzJyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2Ygb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGdldEFsbEtleXMob2JqZWN0KSB7XG4gIHJldHVybiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXMsIGdldFN5bWJvbHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEFsbEtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXRBbGxLZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzU3RyaWN0Q29tcGFyYWJsZSA9IHJlcXVpcmUoJy4vX2lzU3RyaWN0Q29tcGFyYWJsZScpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBwcm9wZXJ0eSBuYW1lcywgdmFsdWVzLCBhbmQgY29tcGFyZSBmbGFncyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBtYXRjaCBkYXRhIG9mIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBnZXRNYXRjaERhdGEob2JqZWN0KSB7XG4gIHZhciByZXN1bHQgPSBrZXlzKG9iamVjdCksXG4gICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuXG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIHZhciBrZXkgPSByZXN1bHRbbGVuZ3RoXSxcbiAgICAgICAgdmFsdWUgPSBvYmplY3Rba2V5XTtcblxuICAgIHJlc3VsdFtsZW5ndGhdID0gW2tleSwgdmFsdWUsIGlzU3RyaWN0Q29tcGFyYWJsZSh2YWx1ZSldO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TWF0Y2hEYXRhO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0TWF0Y2hEYXRhLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFycmF5RmlsdGVyID0gcmVxdWlyZSgnLi9fYXJyYXlGaWx0ZXInKSxcbiAgICBzdHViQXJyYXkgPSByZXF1aXJlKCcuL3N0dWJBcnJheScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlR2V0U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBzeW1ib2xzLlxuICovXG52YXIgZ2V0U3ltYm9scyA9ICFuYXRpdmVHZXRTeW1ib2xzID8gc3R1YkFycmF5IDogZnVuY3Rpb24ob2JqZWN0KSB7XG4gIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBvYmplY3QgPSBPYmplY3Qob2JqZWN0KTtcbiAgcmV0dXJuIGFycmF5RmlsdGVyKG5hdGl2ZUdldFN5bWJvbHMob2JqZWN0KSwgZnVuY3Rpb24oc3ltYm9sKSB7XG4gICAgcmV0dXJuIHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwob2JqZWN0LCBzeW1ib2wpO1xuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0U3ltYm9scztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldFN5bWJvbHMuanNcbi8vIG1vZHVsZSBpZCA9IDEzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgRGF0YVZpZXcgPSByZXF1aXJlKCcuL19EYXRhVmlldycpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpLFxuICAgIFByb21pc2UgPSByZXF1aXJlKCcuL19Qcm9taXNlJyksXG4gICAgU2V0ID0gcmVxdWlyZSgnLi9fU2V0JyksXG4gICAgV2Vha01hcCA9IHJlcXVpcmUoJy4vX1dlYWtNYXAnKSxcbiAgICBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIHRvU291cmNlID0gcmVxdWlyZSgnLi9fdG9Tb3VyY2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHByb21pc2VUYWcgPSAnW29iamVjdCBQcm9taXNlXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1hcHMsIHNldHMsIGFuZCB3ZWFrbWFwcy4gKi9cbnZhciBkYXRhVmlld0N0b3JTdHJpbmcgPSB0b1NvdXJjZShEYXRhVmlldyksXG4gICAgbWFwQ3RvclN0cmluZyA9IHRvU291cmNlKE1hcCksXG4gICAgcHJvbWlzZUN0b3JTdHJpbmcgPSB0b1NvdXJjZShQcm9taXNlKSxcbiAgICBzZXRDdG9yU3RyaW5nID0gdG9Tb3VyY2UoU2V0KSxcbiAgICB3ZWFrTWFwQ3RvclN0cmluZyA9IHRvU291cmNlKFdlYWtNYXApO1xuXG4vKipcbiAqIEdldHMgdGhlIGB0b1N0cmluZ1RhZ2Agb2YgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG52YXIgZ2V0VGFnID0gYmFzZUdldFRhZztcblxuLy8gRmFsbGJhY2sgZm9yIGRhdGEgdmlld3MsIG1hcHMsIHNldHMsIGFuZCB3ZWFrIG1hcHMgaW4gSUUgMTEgYW5kIHByb21pc2VzIGluIE5vZGUuanMgPCA2LlxuaWYgKChEYXRhVmlldyAmJiBnZXRUYWcobmV3IERhdGFWaWV3KG5ldyBBcnJheUJ1ZmZlcigxKSkpICE9IGRhdGFWaWV3VGFnKSB8fFxuICAgIChNYXAgJiYgZ2V0VGFnKG5ldyBNYXApICE9IG1hcFRhZykgfHxcbiAgICAoUHJvbWlzZSAmJiBnZXRUYWcoUHJvbWlzZS5yZXNvbHZlKCkpICE9IHByb21pc2VUYWcpIHx8XG4gICAgKFNldCAmJiBnZXRUYWcobmV3IFNldCkgIT0gc2V0VGFnKSB8fFxuICAgIChXZWFrTWFwICYmIGdldFRhZyhuZXcgV2Vha01hcCkgIT0gd2Vha01hcFRhZykpIHtcbiAgZ2V0VGFnID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gYmFzZUdldFRhZyh2YWx1ZSksXG4gICAgICAgIEN0b3IgPSByZXN1bHQgPT0gb2JqZWN0VGFnID8gdmFsdWUuY29uc3RydWN0b3IgOiB1bmRlZmluZWQsXG4gICAgICAgIGN0b3JTdHJpbmcgPSBDdG9yID8gdG9Tb3VyY2UoQ3RvcikgOiAnJztcblxuICAgIGlmIChjdG9yU3RyaW5nKSB7XG4gICAgICBzd2l0Y2ggKGN0b3JTdHJpbmcpIHtcbiAgICAgICAgY2FzZSBkYXRhVmlld0N0b3JTdHJpbmc6IHJldHVybiBkYXRhVmlld1RhZztcbiAgICAgICAgY2FzZSBtYXBDdG9yU3RyaW5nOiByZXR1cm4gbWFwVGFnO1xuICAgICAgICBjYXNlIHByb21pc2VDdG9yU3RyaW5nOiByZXR1cm4gcHJvbWlzZVRhZztcbiAgICAgICAgY2FzZSBzZXRDdG9yU3RyaW5nOiByZXR1cm4gc2V0VGFnO1xuICAgICAgICBjYXNlIHdlYWtNYXBDdG9yU3RyaW5nOiByZXR1cm4gd2Vha01hcFRhZztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRUYWc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXRUYWcuanNcbi8vIG1vZHVsZSBpZCA9IDE0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZShvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRWYWx1ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldFZhbHVlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNhc3RQYXRoID0gcmVxdWlyZSgnLi9fY2FzdFBhdGgnKSxcbiAgICBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4vX2lzSW5kZXgnKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKSxcbiAgICB0b0tleSA9IHJlcXVpcmUoJy4vX3RvS2V5Jyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBwYXRoYCBleGlzdHMgb24gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIHRvIGNoZWNrLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaGFzRnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2sgcHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgcGF0aGAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc1BhdGgob2JqZWN0LCBwYXRoLCBoYXNGdW5jKSB7XG4gIHBhdGggPSBjYXN0UGF0aChwYXRoLCBvYmplY3QpO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcGF0aC5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBmYWxzZTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBrZXkgPSB0b0tleShwYXRoW2luZGV4XSk7XG4gICAgaWYgKCEocmVzdWx0ID0gb2JqZWN0ICE9IG51bGwgJiYgaGFzRnVuYyhvYmplY3QsIGtleSkpKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgb2JqZWN0ID0gb2JqZWN0W2tleV07XG4gIH1cbiAgaWYgKHJlc3VsdCB8fCArK2luZGV4ICE9IGxlbmd0aCkge1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgbGVuZ3RoID0gb2JqZWN0ID09IG51bGwgPyAwIDogb2JqZWN0Lmxlbmd0aDtcbiAgcmV0dXJuICEhbGVuZ3RoICYmIGlzTGVuZ3RoKGxlbmd0aCkgJiYgaXNJbmRleChrZXksIGxlbmd0aCkgJiZcbiAgICAoaXNBcnJheShvYmplY3QpIHx8IGlzQXJndW1lbnRzKG9iamVjdCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc1BhdGg7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19oYXNQYXRoLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgSGFzaFxuICovXG5mdW5jdGlvbiBoYXNoQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuYXRpdmVDcmVhdGUgPyBuYXRpdmVDcmVhdGUobnVsbCkgOiB7fTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoQ2xlYXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19oYXNoQ2xlYXIuanNcbi8vIG1vZHVsZSBpZCA9IDE0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge09iamVjdH0gaGFzaCBUaGUgaGFzaCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaERlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IHRoaXMuaGFzKGtleSkgJiYgZGVsZXRlIHRoaXMuX19kYXRhX19ba2V5XTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hEZWxldGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19oYXNoRGVsZXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogR2V0cyB0aGUgaGFzaCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBoYXNoR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChuYXRpdmVDcmVhdGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gZGF0YVtrZXldO1xuICAgIHJldHVybiByZXN1bHQgPT09IEhBU0hfVU5ERUZJTkVEID8gdW5kZWZpbmVkIDogcmVzdWx0O1xuICB9XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSkgPyBkYXRhW2tleV0gOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaEdldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2hhc2hHZXQuanNcbi8vIG1vZHVsZSBpZCA9IDE0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgaGFzaCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaEhhcyhrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICByZXR1cm4gbmF0aXZlQ3JlYXRlID8gKGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkKSA6IGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoSGFzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faGFzaEhhcy5qc1xuLy8gbW9kdWxlIGlkID0gMTQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICB0aGlzLnNpemUgKz0gdGhpcy5oYXMoa2V5KSA/IDAgOiAxO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaFNldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2hhc2hTZXQuanNcbi8vIG1vZHVsZSBpZCA9IDE0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX2Jhc2VDcmVhdGUnKSxcbiAgICBnZXRQcm90b3R5cGUgPSByZXF1aXJlKCcuL19nZXRQcm90b3R5cGUnKSxcbiAgICBpc1Byb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2lzUHJvdG90eXBlJyk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgYW4gb2JqZWN0IGNsb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBpbml0aWFsaXplZCBjbG9uZS5cbiAqL1xuZnVuY3Rpb24gaW5pdENsb25lT2JqZWN0KG9iamVjdCkge1xuICByZXR1cm4gKHR5cGVvZiBvYmplY3QuY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNQcm90b3R5cGUob2JqZWN0KSlcbiAgICA/IGJhc2VDcmVhdGUoZ2V0UHJvdG90eXBlKG9iamVjdCkpXG4gICAgOiB7fTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbml0Q2xvbmVPYmplY3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19pbml0Q2xvbmVPYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDE0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZXEgPSByZXF1aXJlKCcuL2VxJyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4vX2lzSW5kZXgnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGdpdmVuIGFyZ3VtZW50cyBhcmUgZnJvbSBhbiBpdGVyYXRlZSBjYWxsLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSBwb3RlbnRpYWwgaXRlcmF0ZWUgdmFsdWUgYXJndW1lbnQuXG4gKiBAcGFyYW0geyp9IGluZGV4IFRoZSBwb3RlbnRpYWwgaXRlcmF0ZWUgaW5kZXggb3Iga2V5IGFyZ3VtZW50LlxuICogQHBhcmFtIHsqfSBvYmplY3QgVGhlIHBvdGVudGlhbCBpdGVyYXRlZSBvYmplY3QgYXJndW1lbnQuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGFyZ3VtZW50cyBhcmUgZnJvbSBhbiBpdGVyYXRlZSBjYWxsLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJdGVyYXRlZUNhbGwodmFsdWUsIGluZGV4LCBvYmplY3QpIHtcbiAgaWYgKCFpc09iamVjdChvYmplY3QpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciB0eXBlID0gdHlwZW9mIGluZGV4O1xuICBpZiAodHlwZSA9PSAnbnVtYmVyJ1xuICAgICAgICA/IChpc0FycmF5TGlrZShvYmplY3QpICYmIGlzSW5kZXgoaW5kZXgsIG9iamVjdC5sZW5ndGgpKVxuICAgICAgICA6ICh0eXBlID09ICdzdHJpbmcnICYmIGluZGV4IGluIG9iamVjdClcbiAgICAgICkge1xuICAgIHJldHVybiBlcShvYmplY3RbaW5kZXhdLCB2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzSXRlcmF0ZWVDYWxsO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faXNJdGVyYXRlZUNhbGwuanNcbi8vIG1vZHVsZSBpZCA9IDE0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciB1c2UgYXMgdW5pcXVlIG9iamVjdCBrZXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXlhYmxlKHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gKHR5cGUgPT0gJ3N0cmluZycgfHwgdHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nKVxuICAgID8gKHZhbHVlICE9PSAnX19wcm90b19fJylcbiAgICA6ICh2YWx1ZSA9PT0gbnVsbCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNLZXlhYmxlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faXNLZXlhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNvcmVKc0RhdGEgPSByZXF1aXJlKCcuL19jb3JlSnNEYXRhJyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtZXRob2RzIG1hc3F1ZXJhZGluZyBhcyBuYXRpdmUuICovXG52YXIgbWFza1NyY0tleSA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHVpZCA9IC9bXi5dKyQvLmV4ZWMoY29yZUpzRGF0YSAmJiBjb3JlSnNEYXRhLmtleXMgJiYgY29yZUpzRGF0YS5rZXlzLklFX1BST1RPIHx8ICcnKTtcbiAgcmV0dXJuIHVpZCA/ICgnU3ltYm9sKHNyYylfMS4nICsgdWlkKSA6ICcnO1xufSgpKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYGZ1bmNgIGhhcyBpdHMgc291cmNlIG1hc2tlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGZ1bmNgIGlzIG1hc2tlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc01hc2tlZChmdW5jKSB7XG4gIHJldHVybiAhIW1hc2tTcmNLZXkgJiYgKG1hc2tTcmNLZXkgaW4gZnVuYyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNNYXNrZWQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19pc01hc2tlZC5qc1xuLy8gbW9kdWxlIGlkID0gMTUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBbXTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVDbGVhcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2xpc3RDYWNoZUNsZWFyLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2U7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBsYXN0SW5kZXggPSBkYXRhLmxlbmd0aCAtIDE7XG4gIGlmIChpbmRleCA9PSBsYXN0SW5kZXgpIHtcbiAgICBkYXRhLnBvcCgpO1xuICB9IGVsc2Uge1xuICAgIHNwbGljZS5jYWxsKGRhdGEsIGluZGV4LCAxKTtcbiAgfVxuICAtLXRoaXMuc2l6ZTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlRGVsZXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbGlzdENhY2hlRGVsZXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIEdldHMgdGhlIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgcmV0dXJuIGluZGV4IDwgMCA/IHVuZGVmaW5lZCA6IGRhdGFbaW5kZXhdWzFdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUdldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qc1xuLy8gbW9kdWxlIGlkID0gMTU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGFzc29jSW5kZXhPZih0aGlzLl9fZGF0YV9fLCBrZXkpID4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlSGFzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbGlzdENhY2hlSGFzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgICsrdGhpcy5zaXplO1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlU2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbGlzdENhY2hlU2V0LmpzXG4vLyBtb2R1bGUgaWQgPSAxNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIEhhc2ggPSByZXF1aXJlKCcuL19IYXNoJyksXG4gICAgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuc2l6ZSA9IDA7XG4gIHRoaXMuX19kYXRhX18gPSB7XG4gICAgJ2hhc2gnOiBuZXcgSGFzaCxcbiAgICAnbWFwJzogbmV3IChNYXAgfHwgTGlzdENhY2hlKSxcbiAgICAnc3RyaW5nJzogbmV3IEhhc2hcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUNsZWFyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbWFwQ2FjaGVDbGVhci5qc1xuLy8gbW9kdWxlIGlkID0gMTU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSlbJ2RlbGV0ZSddKGtleSk7XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZURlbGV0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX21hcENhY2hlRGVsZXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbWFwIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUdldChrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5nZXQoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUdldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX21hcENhY2hlR2V0LmpzXG4vLyBtb2R1bGUgaWQgPSAxNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbWFwIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVIYXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19tYXBDYWNoZUhhcy5qc1xuLy8gbW9kdWxlIGlkID0gMTYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIFNldHMgdGhlIG1hcCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBtYXAgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSksXG4gICAgICBzaXplID0gZGF0YS5zaXplO1xuXG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgKz0gZGF0YS5zaXplID09IHNpemUgPyAwIDogMTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVTZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19tYXBDYWNoZVNldC5qc1xuLy8gbW9kdWxlIGlkID0gMTYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29udmVydHMgYG1hcGAgdG8gaXRzIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGtleS12YWx1ZSBwYWlycy5cbiAqL1xuZnVuY3Rpb24gbWFwVG9BcnJheShtYXApIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShtYXAuc2l6ZSk7XG5cbiAgbWFwLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IFtrZXksIHZhbHVlXTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwVG9BcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX21hcFRvQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDE2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbWVtb2l6ZSA9IHJlcXVpcmUoJy4vbWVtb2l6ZScpO1xuXG4vKiogVXNlZCBhcyB0aGUgbWF4aW11bSBtZW1vaXplIGNhY2hlIHNpemUuICovXG52YXIgTUFYX01FTU9JWkVfU0laRSA9IDUwMDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ubWVtb2l6ZWAgd2hpY2ggY2xlYXJzIHRoZSBtZW1vaXplZCBmdW5jdGlvbidzXG4gKiBjYWNoZSB3aGVuIGl0IGV4Y2VlZHMgYE1BWF9NRU1PSVpFX1NJWkVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBoYXZlIGl0cyBvdXRwdXQgbWVtb2l6ZWQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBtZW1vaXplZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gbWVtb2l6ZUNhcHBlZChmdW5jKSB7XG4gIHZhciByZXN1bHQgPSBtZW1vaXplKGZ1bmMsIGZ1bmN0aW9uKGtleSkge1xuICAgIGlmIChjYWNoZS5zaXplID09PSBNQVhfTUVNT0laRV9TSVpFKSB7XG4gICAgICBjYWNoZS5jbGVhcigpO1xuICAgIH1cbiAgICByZXR1cm4ga2V5O1xuICB9KTtcblxuICB2YXIgY2FjaGUgPSByZXN1bHQuY2FjaGU7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWVtb2l6ZUNhcHBlZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX21lbW9pemVDYXBwZWQuanNcbi8vIG1vZHVsZSBpZCA9IDE2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgb3ZlckFyZyA9IHJlcXVpcmUoJy4vX292ZXJBcmcnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUtleXMgPSBvdmVyQXJnKE9iamVjdC5rZXlzLCBPYmplY3QpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19uYXRpdmVLZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGxpa2VcbiAqIFtgT2JqZWN0LmtleXNgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGV4Y2VwdCB0aGF0IGl0IGluY2x1ZGVzIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnRpZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIG5hdGl2ZUtleXNJbihvYmplY3QpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBpZiAob2JqZWN0ICE9IG51bGwpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlS2V5c0luO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbmF0aXZlS2V5c0luLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBwcm9jZXNzYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZVByb2Nlc3MgPSBtb2R1bGVFeHBvcnRzICYmIGZyZWVHbG9iYWwucHJvY2VzcztcblxuLyoqIFVzZWQgdG8gYWNjZXNzIGZhc3RlciBOb2RlLmpzIGhlbHBlcnMuICovXG52YXIgbm9kZVV0aWwgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGZyZWVQcm9jZXNzICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcgJiYgZnJlZVByb2Nlc3MuYmluZGluZygndXRpbCcpO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBub2RlVXRpbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX25vZGVVdGlsLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFwcGx5ID0gcmVxdWlyZSgnLi9fYXBwbHknKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4O1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZVJlc3RgIHdoaWNoIHRyYW5zZm9ybXMgdGhlIHJlc3QgYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGFwcGx5IGEgcmVzdCBwYXJhbWV0ZXIgdG8uXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PWZ1bmMubGVuZ3RoLTFdIFRoZSBzdGFydCBwb3NpdGlvbiBvZiB0aGUgcmVzdCBwYXJhbWV0ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIHJlc3QgYXJyYXkgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJSZXN0KGZ1bmMsIHN0YXJ0LCB0cmFuc2Zvcm0pIHtcbiAgc3RhcnQgPSBuYXRpdmVNYXgoc3RhcnQgPT09IHVuZGVmaW5lZCA/IChmdW5jLmxlbmd0aCAtIDEpIDogc3RhcnQsIDApO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgIGluZGV4ID0gLTEsXG4gICAgICAgIGxlbmd0aCA9IG5hdGl2ZU1heChhcmdzLmxlbmd0aCAtIHN0YXJ0LCAwKSxcbiAgICAgICAgYXJyYXkgPSBBcnJheShsZW5ndGgpO1xuXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGFycmF5W2luZGV4XSA9IGFyZ3Nbc3RhcnQgKyBpbmRleF07XG4gICAgfVxuICAgIGluZGV4ID0gLTE7XG4gICAgdmFyIG90aGVyQXJncyA9IEFycmF5KHN0YXJ0ICsgMSk7XG4gICAgd2hpbGUgKCsraW5kZXggPCBzdGFydCkge1xuICAgICAgb3RoZXJBcmdzW2luZGV4XSA9IGFyZ3NbaW5kZXhdO1xuICAgIH1cbiAgICBvdGhlckFyZ3Nbc3RhcnRdID0gdHJhbnNmb3JtKGFycmF5KTtcbiAgICByZXR1cm4gYXBwbHkoZnVuYywgdGhpcywgb3RoZXJBcmdzKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvdmVyUmVzdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX292ZXJSZXN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKipcbiAqIEFkZHMgYHZhbHVlYCB0byB0aGUgYXJyYXkgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGFkZFxuICogQG1lbWJlck9mIFNldENhY2hlXG4gKiBAYWxpYXMgcHVzaFxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2FjaGUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc2V0Q2FjaGVBZGQodmFsdWUpIHtcbiAgdGhpcy5fX2RhdGFfXy5zZXQodmFsdWUsIEhBU0hfVU5ERUZJTkVEKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0Q2FjaGVBZGQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19zZXRDYWNoZUFkZC5qc1xuLy8gbW9kdWxlIGlkID0gMTY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgaW4gdGhlIGFycmF5IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTZXRDYWNoZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc2V0Q2FjaGVIYXModmFsdWUpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRDYWNoZUhhcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3NldENhY2hlSGFzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb252ZXJ0cyBgc2V0YCB0byBhbiBhcnJheSBvZiBpdHMgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0IFRoZSBzZXQgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgdmFsdWVzLlxuICovXG5mdW5jdGlvbiBzZXRUb0FycmF5KHNldCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KHNldC5zaXplKTtcblxuICBzZXQuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRUb0FycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fc2V0VG9BcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMTcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlU2V0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19iYXNlU2V0VG9TdHJpbmcnKSxcbiAgICBzaG9ydE91dCA9IHJlcXVpcmUoJy4vX3Nob3J0T3V0Jyk7XG5cbi8qKlxuICogU2V0cyB0aGUgYHRvU3RyaW5nYCBtZXRob2Qgb2YgYGZ1bmNgIHRvIHJldHVybiBgc3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3RyaW5nIFRoZSBgdG9TdHJpbmdgIHJlc3VsdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyBgZnVuY2AuXG4gKi9cbnZhciBzZXRUb1N0cmluZyA9IHNob3J0T3V0KGJhc2VTZXRUb1N0cmluZyk7XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0VG9TdHJpbmc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19zZXRUb1N0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gMTcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBVc2VkIHRvIGRldGVjdCBob3QgZnVuY3Rpb25zIGJ5IG51bWJlciBvZiBjYWxscyB3aXRoaW4gYSBzcGFuIG9mIG1pbGxpc2Vjb25kcy4gKi9cbnZhciBIT1RfQ09VTlQgPSA4MDAsXG4gICAgSE9UX1NQQU4gPSAxNjtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU5vdyA9IERhdGUubm93O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0J2xsIHNob3J0IG91dCBhbmQgaW52b2tlIGBpZGVudGl0eWAgaW5zdGVhZFxuICogb2YgYGZ1bmNgIHdoZW4gaXQncyBjYWxsZWQgYEhPVF9DT1VOVGAgb3IgbW9yZSB0aW1lcyBpbiBgSE9UX1NQQU5gXG4gKiBtaWxsaXNlY29uZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHJlc3RyaWN0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgc2hvcnRhYmxlIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBzaG9ydE91dChmdW5jKSB7XG4gIHZhciBjb3VudCA9IDAsXG4gICAgICBsYXN0Q2FsbGVkID0gMDtcblxuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN0YW1wID0gbmF0aXZlTm93KCksXG4gICAgICAgIHJlbWFpbmluZyA9IEhPVF9TUEFOIC0gKHN0YW1wIC0gbGFzdENhbGxlZCk7XG5cbiAgICBsYXN0Q2FsbGVkID0gc3RhbXA7XG4gICAgaWYgKHJlbWFpbmluZyA+IDApIHtcbiAgICAgIGlmICgrK2NvdW50ID49IEhPVF9DT1VOVCkge1xuICAgICAgICByZXR1cm4gYXJndW1lbnRzWzBdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb3VudCA9IDA7XG4gICAgfVxuICAgIHJldHVybiBmdW5jLmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG9ydE91dDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3Nob3J0T3V0LmpzXG4vLyBtb2R1bGUgaWQgPSAxNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIFN0YWNrXG4gKi9cbmZ1bmN0aW9uIHN0YWNrQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrQ2xlYXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19zdGFja0NsZWFyLmpzXG4vLyBtb2R1bGUgaWQgPSAxNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIHJlc3VsdCA9IGRhdGFbJ2RlbGV0ZSddKGtleSk7XG5cbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrRGVsZXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fc3RhY2tEZWxldGUuanNcbi8vIG1vZHVsZSBpZCA9IDE3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEdldHMgdGhlIHN0YWNrIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBzdGFja0dldChrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uZ2V0KGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tHZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19zdGFja0dldC5qc1xuLy8gbW9kdWxlIGlkID0gMTc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ2hlY2tzIGlmIGEgc3RhY2sgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0hhcyhrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tIYXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19zdGFja0hhcy5qc1xuLy8gbW9kdWxlIGlkID0gMTc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKSxcbiAgICBNYXBDYWNoZSA9IHJlcXVpcmUoJy4vX01hcENhY2hlJyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBzaXplIHRvIGVuYWJsZSBsYXJnZSBhcnJheSBvcHRpbWl6YXRpb25zLiAqL1xudmFyIExBUkdFX0FSUkFZX1NJWkUgPSAyMDA7XG5cbi8qKlxuICogU2V0cyB0aGUgc3RhY2sgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgc3RhY2sgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAoZGF0YSBpbnN0YW5jZW9mIExpc3RDYWNoZSkge1xuICAgIHZhciBwYWlycyA9IGRhdGEuX19kYXRhX187XG4gICAgaWYgKCFNYXAgfHwgKHBhaXJzLmxlbmd0aCA8IExBUkdFX0FSUkFZX1NJWkUgLSAxKSkge1xuICAgICAgcGFpcnMucHVzaChba2V5LCB2YWx1ZV0pO1xuICAgICAgdGhpcy5zaXplID0gKytkYXRhLnNpemU7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGUocGFpcnMpO1xuICB9XG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrU2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fc3RhY2tTZXQuanNcbi8vIG1vZHVsZSBpZCA9IDE3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYHZhbHVlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcmV0dXJuIGZyb20gdGhlIG5ldyBmdW5jdGlvbi5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNvbnN0YW50IGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0cyA9IF8udGltZXMoMiwgXy5jb25zdGFudCh7ICdhJzogMSB9KSk7XG4gKlxuICogY29uc29sZS5sb2cob2JqZWN0cyk7XG4gKiAvLyA9PiBbeyAnYSc6IDEgfSwgeyAnYSc6IDEgfV1cbiAqXG4gKiBjb25zb2xlLmxvZyhvYmplY3RzWzBdID09PSBvYmplY3RzWzFdKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gY29uc3RhbnQodmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb25zdGFudDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvY29uc3RhbnQuanNcbi8vIG1vZHVsZSBpZCA9IDE3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUdldCA9IHJlcXVpcmUoJy4vX2Jhc2VHZXQnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBgcGF0aGAgb2YgYG9iamVjdGAuIElmIHRoZSByZXNvbHZlZCB2YWx1ZSBpc1xuICogYHVuZGVmaW5lZGAsIHRoZSBgZGVmYXVsdFZhbHVlYCBpcyByZXR1cm5lZCBpbiBpdHMgcGxhY2UuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjcuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEBwYXJhbSB7Kn0gW2RlZmF1bHRWYWx1ZV0gVGhlIHZhbHVlIHJldHVybmVkIGZvciBgdW5kZWZpbmVkYCByZXNvbHZlZCB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzb2x2ZWQgdmFsdWUuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogW3sgJ2InOiB7ICdjJzogMyB9IH1dIH07XG4gKlxuICogXy5nZXQob2JqZWN0LCAnYVswXS5iLmMnKTtcbiAqIC8vID0+IDNcbiAqXG4gKiBfLmdldChvYmplY3QsIFsnYScsICcwJywgJ2InLCAnYyddKTtcbiAqIC8vID0+IDNcbiAqXG4gKiBfLmdldChvYmplY3QsICdhLmIuYycsICdkZWZhdWx0Jyk7XG4gKiAvLyA9PiAnZGVmYXVsdCdcbiAqL1xuZnVuY3Rpb24gZ2V0KG9iamVjdCwgcGF0aCwgZGVmYXVsdFZhbHVlKSB7XG4gIHZhciByZXN1bHQgPSBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IGJhc2VHZXQob2JqZWN0LCBwYXRoKTtcbiAgcmV0dXJuIHJlc3VsdCA9PT0gdW5kZWZpbmVkID8gZGVmYXVsdFZhbHVlIDogcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvZ2V0LmpzXG4vLyBtb2R1bGUgaWQgPSAxNzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VIYXNJbiA9IHJlcXVpcmUoJy4vX2Jhc2VIYXNJbicpLFxuICAgIGhhc1BhdGggPSByZXF1aXJlKCcuL19oYXNQYXRoJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBwYXRoYCBpcyBhIGRpcmVjdCBvciBpbmhlcml0ZWQgcHJvcGVydHkgb2YgYG9iamVjdGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHBhdGhgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0gXy5jcmVhdGUoeyAnYSc6IF8uY3JlYXRlKHsgJ2InOiAyIH0pIH0pO1xuICpcbiAqIF8uaGFzSW4ob2JqZWN0LCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaGFzSW4ob2JqZWN0LCAnYS5iJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5oYXNJbihvYmplY3QsIFsnYScsICdiJ10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaGFzSW4ob2JqZWN0LCAnYicpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaGFzSW4ob2JqZWN0LCBwYXRoKSB7XG4gIHJldHVybiBvYmplY3QgIT0gbnVsbCAmJiBoYXNQYXRoKG9iamVjdCwgcGF0aCwgYmFzZUhhc0luKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNJbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaGFzSW4uanNcbi8vIG1vZHVsZSBpZCA9IDE4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLmlzQXJyYXlMaWtlYCBleGNlcHQgdGhhdCBpdCBhbHNvIGNoZWNrcyBpZiBgdmFsdWVgXG4gKiBpcyBhbiBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXktbGlrZSBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2VPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaXNBcnJheUxpa2UodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXlMaWtlT2JqZWN0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0FycmF5TGlrZU9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBNYXBDYWNoZSA9IHJlcXVpcmUoJy4vX01hcENhY2hlJyk7XG5cbi8qKiBFcnJvciBtZXNzYWdlIGNvbnN0YW50cy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgbWVtb2l6ZXMgdGhlIHJlc3VsdCBvZiBgZnVuY2AuIElmIGByZXNvbHZlcmAgaXNcbiAqIHByb3ZpZGVkLCBpdCBkZXRlcm1pbmVzIHRoZSBjYWNoZSBrZXkgZm9yIHN0b3JpbmcgdGhlIHJlc3VsdCBiYXNlZCBvbiB0aGVcbiAqIGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24uIEJ5IGRlZmF1bHQsIHRoZSBmaXJzdCBhcmd1bWVudFxuICogcHJvdmlkZWQgdG8gdGhlIG1lbW9pemVkIGZ1bmN0aW9uIGlzIHVzZWQgYXMgdGhlIG1hcCBjYWNoZSBrZXkuIFRoZSBgZnVuY2BcbiAqIGlzIGludm9rZWQgd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgb2YgdGhlIG1lbW9pemVkIGZ1bmN0aW9uLlxuICpcbiAqICoqTm90ZToqKiBUaGUgY2FjaGUgaXMgZXhwb3NlZCBhcyB0aGUgYGNhY2hlYCBwcm9wZXJ0eSBvbiB0aGUgbWVtb2l6ZWRcbiAqIGZ1bmN0aW9uLiBJdHMgY3JlYXRpb24gbWF5IGJlIGN1c3RvbWl6ZWQgYnkgcmVwbGFjaW5nIHRoZSBgXy5tZW1vaXplLkNhY2hlYFxuICogY29uc3RydWN0b3Igd2l0aCBvbmUgd2hvc2UgaW5zdGFuY2VzIGltcGxlbWVudCB0aGVcbiAqIFtgTWFwYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcHJvcGVydGllcy1vZi10aGUtbWFwLXByb3RvdHlwZS1vYmplY3QpXG4gKiBtZXRob2QgaW50ZXJmYWNlIG9mIGBjbGVhcmAsIGBkZWxldGVgLCBgZ2V0YCwgYGhhc2AsIGFuZCBgc2V0YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGhhdmUgaXRzIG91dHB1dCBtZW1vaXplZC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtyZXNvbHZlcl0gVGhlIGZ1bmN0aW9uIHRvIHJlc29sdmUgdGhlIGNhY2hlIGtleS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IG1lbW9pemVkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEsICdiJzogMiB9O1xuICogdmFyIG90aGVyID0geyAnYyc6IDMsICdkJzogNCB9O1xuICpcbiAqIHZhciB2YWx1ZXMgPSBfLm1lbW9pemUoXy52YWx1ZXMpO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqXG4gKiB2YWx1ZXMob3RoZXIpO1xuICogLy8gPT4gWzMsIDRdXG4gKlxuICogb2JqZWN0LmEgPSAyO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqXG4gKiAvLyBNb2RpZnkgdGhlIHJlc3VsdCBjYWNoZS5cbiAqIHZhbHVlcy5jYWNoZS5zZXQob2JqZWN0LCBbJ2EnLCAnYiddKTtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWydhJywgJ2InXVxuICpcbiAqIC8vIFJlcGxhY2UgYF8ubWVtb2l6ZS5DYWNoZWAuXG4gKiBfLm1lbW9pemUuQ2FjaGUgPSBXZWFrTWFwO1xuICovXG5mdW5jdGlvbiBtZW1vaXplKGZ1bmMsIHJlc29sdmVyKSB7XG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nIHx8IChyZXNvbHZlciAhPSBudWxsICYmIHR5cGVvZiByZXNvbHZlciAhPSAnZnVuY3Rpb24nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB2YXIgbWVtb2l6ZWQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAga2V5ID0gcmVzb2x2ZXIgPyByZXNvbHZlci5hcHBseSh0aGlzLCBhcmdzKSA6IGFyZ3NbMF0sXG4gICAgICAgIGNhY2hlID0gbWVtb2l6ZWQuY2FjaGU7XG5cbiAgICBpZiAoY2FjaGUuaGFzKGtleSkpIHtcbiAgICAgIHJldHVybiBjYWNoZS5nZXQoa2V5KTtcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XG4gICAgbWVtb2l6ZWQuY2FjaGUgPSBjYWNoZS5zZXQoa2V5LCByZXN1bHQpIHx8IGNhY2hlO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIG1lbW9pemVkLmNhY2hlID0gbmV3IChtZW1vaXplLkNhY2hlIHx8IE1hcENhY2hlKTtcbiAgcmV0dXJuIG1lbW9pemVkO1xufVxuXG4vLyBFeHBvc2UgYE1hcENhY2hlYC5cbm1lbW9pemUuQ2FjaGUgPSBNYXBDYWNoZTtcblxubW9kdWxlLmV4cG9ydHMgPSBtZW1vaXplO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9tZW1vaXplLmpzXG4vLyBtb2R1bGUgaWQgPSAxODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VNZXJnZSA9IHJlcXVpcmUoJy4vX2Jhc2VNZXJnZScpLFxuICAgIGNyZWF0ZUFzc2lnbmVyID0gcmVxdWlyZSgnLi9fY3JlYXRlQXNzaWduZXInKTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLmFzc2lnbmAgZXhjZXB0IHRoYXQgaXQgcmVjdXJzaXZlbHkgbWVyZ2VzIG93biBhbmRcbiAqIGluaGVyaXRlZCBlbnVtZXJhYmxlIHN0cmluZyBrZXllZCBwcm9wZXJ0aWVzIG9mIHNvdXJjZSBvYmplY3RzIGludG8gdGhlXG4gKiBkZXN0aW5hdGlvbiBvYmplY3QuIFNvdXJjZSBwcm9wZXJ0aWVzIHRoYXQgcmVzb2x2ZSB0byBgdW5kZWZpbmVkYCBhcmVcbiAqIHNraXBwZWQgaWYgYSBkZXN0aW5hdGlvbiB2YWx1ZSBleGlzdHMuIEFycmF5IGFuZCBwbGFpbiBvYmplY3QgcHJvcGVydGllc1xuICogYXJlIG1lcmdlZCByZWN1cnNpdmVseS4gT3RoZXIgb2JqZWN0cyBhbmQgdmFsdWUgdHlwZXMgYXJlIG92ZXJyaWRkZW4gYnlcbiAqIGFzc2lnbm1lbnQuIFNvdXJjZSBvYmplY3RzIGFyZSBhcHBsaWVkIGZyb20gbGVmdCB0byByaWdodC4gU3Vic2VxdWVudFxuICogc291cmNlcyBvdmVyd3JpdGUgcHJvcGVydHkgYXNzaWdubWVudHMgb2YgcHJldmlvdXMgc291cmNlcy5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgbXV0YXRlcyBgb2JqZWN0YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuNS4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0gey4uLk9iamVjdH0gW3NvdXJjZXNdIFRoZSBzb3VyY2Ugb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7XG4gKiAgICdhJzogW3sgJ2InOiAyIH0sIHsgJ2QnOiA0IH1dXG4gKiB9O1xuICpcbiAqIHZhciBvdGhlciA9IHtcbiAqICAgJ2EnOiBbeyAnYyc6IDMgfSwgeyAnZSc6IDUgfV1cbiAqIH07XG4gKlxuICogXy5tZXJnZShvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IHsgJ2EnOiBbeyAnYic6IDIsICdjJzogMyB9LCB7ICdkJzogNCwgJ2UnOiA1IH1dIH1cbiAqL1xudmFyIG1lcmdlID0gY3JlYXRlQXNzaWduZXIoZnVuY3Rpb24ob2JqZWN0LCBzb3VyY2UsIHNyY0luZGV4KSB7XG4gIGJhc2VNZXJnZShvYmplY3QsIHNvdXJjZSwgc3JjSW5kZXgpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gbWVyZ2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL21lcmdlLmpzXG4vLyBtb2R1bGUgaWQgPSAxODNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2Jhc2VQcm9wZXJ0eScpLFxuICAgIGJhc2VQcm9wZXJ0eURlZXAgPSByZXF1aXJlKCcuL19iYXNlUHJvcGVydHlEZWVwJyksXG4gICAgaXNLZXkgPSByZXF1aXJlKCcuL19pc0tleScpLFxuICAgIHRvS2V5ID0gcmVxdWlyZSgnLi9fdG9LZXknKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSB2YWx1ZSBhdCBgcGF0aGAgb2YgYSBnaXZlbiBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhY2Nlc3NvciBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdHMgPSBbXG4gKiAgIHsgJ2EnOiB7ICdiJzogMiB9IH0sXG4gKiAgIHsgJ2EnOiB7ICdiJzogMSB9IH1cbiAqIF07XG4gKlxuICogXy5tYXAob2JqZWN0cywgXy5wcm9wZXJ0eSgnYS5iJykpO1xuICogLy8gPT4gWzIsIDFdXG4gKlxuICogXy5tYXAoXy5zb3J0Qnkob2JqZWN0cywgXy5wcm9wZXJ0eShbJ2EnLCAnYiddKSksICdhLmInKTtcbiAqIC8vID0+IFsxLCAyXVxuICovXG5mdW5jdGlvbiBwcm9wZXJ0eShwYXRoKSB7XG4gIHJldHVybiBpc0tleShwYXRoKSA/IGJhc2VQcm9wZXJ0eSh0b0tleShwYXRoKSkgOiBiYXNlUHJvcGVydHlEZWVwKHBhdGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHByb3BlcnR5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMTg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBhIG5ldyBlbXB0eSBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGVtcHR5IGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgYXJyYXlzID0gXy50aW1lcygyLCBfLnN0dWJBcnJheSk7XG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzKTtcbiAqIC8vID0+IFtbXSwgW11dXG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzWzBdID09PSBhcnJheXNbMV0pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gc3R1YkFycmF5KCkge1xuICByZXR1cm4gW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R1YkFycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9zdHViQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDE4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYGZhbHNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGltZXMoMiwgXy5zdHViRmFsc2UpO1xuICogLy8gPT4gW2ZhbHNlLCBmYWxzZV1cbiAqL1xuZnVuY3Rpb24gc3R1YkZhbHNlKCkge1xuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R1YkZhbHNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9zdHViRmFsc2UuanNcbi8vIG1vZHVsZSBpZCA9IDE4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY29weU9iamVjdCA9IHJlcXVpcmUoJy4vX2NvcHlPYmplY3QnKSxcbiAgICBrZXlzSW4gPSByZXF1aXJlKCcuL2tleXNJbicpO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBwbGFpbiBvYmplY3QgZmxhdHRlbmluZyBpbmhlcml0ZWQgZW51bWVyYWJsZSBzdHJpbmdcbiAqIGtleWVkIHByb3BlcnRpZXMgb2YgYHZhbHVlYCB0byBvd24gcHJvcGVydGllcyBvZiB0aGUgcGxhaW4gb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY29udmVydGVkIHBsYWluIG9iamVjdC5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5hc3NpZ24oeyAnYSc6IDEgfSwgbmV3IEZvbyk7XG4gKiAvLyA9PiB7ICdhJzogMSwgJ2InOiAyIH1cbiAqXG4gKiBfLmFzc2lnbih7ICdhJzogMSB9LCBfLnRvUGxhaW5PYmplY3QobmV3IEZvbykpO1xuICogLy8gPT4geyAnYSc6IDEsICdiJzogMiwgJ2MnOiAzIH1cbiAqL1xuZnVuY3Rpb24gdG9QbGFpbk9iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gY29weU9iamVjdCh2YWx1ZSwga2V5c0luKHZhbHVlKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9QbGFpbk9iamVjdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvdG9QbGFpbk9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3JlYWN0UmVkdXggPSByZXF1aXJlKCdyZWFjdC1yZWR1eCcpO1xuXG52YXIgX2NyZWF0ZUZpZWxkUHJvcHMyID0gcmVxdWlyZSgnLi9jcmVhdGVGaWVsZFByb3BzJyk7XG5cbnZhciBfY3JlYXRlRmllbGRQcm9wczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVGaWVsZFByb3BzMik7XG5cbnZhciBfb25DaGFuZ2VWYWx1ZSA9IHJlcXVpcmUoJy4vZXZlbnRzL29uQ2hhbmdlVmFsdWUnKTtcblxudmFyIF9vbkNoYW5nZVZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29uQ2hhbmdlVmFsdWUpO1xuXG52YXIgX2V2ZW50Q29uc3RzID0gcmVxdWlyZSgnLi91dGlsL2V2ZW50Q29uc3RzJyk7XG5cbnZhciBfcGxhaW4gPSByZXF1aXJlKCcuL3N0cnVjdHVyZS9wbGFpbicpO1xuXG52YXIgX3BsYWluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BsYWluKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBwcm9wc1RvTm90VXBkYXRlRm9yID0gWydfcmVkdXhGb3JtJ107XG5cbnZhciBjcmVhdGVDb25uZWN0ZWRGaWVsZCA9IGZ1bmN0aW9uIGNyZWF0ZUNvbm5lY3RlZEZpZWxkKF9yZWYpIHtcbiAgdmFyIGRlZXBFcXVhbCA9IF9yZWYuZGVlcEVxdWFsLFxuICAgICAgZ2V0SW4gPSBfcmVmLmdldEluLFxuICAgICAgdG9KUyA9IF9yZWYudG9KUztcblxuICB2YXIgZ2V0U3luY0Vycm9yID0gZnVuY3Rpb24gZ2V0U3luY0Vycm9yKHN5bmNFcnJvcnMsIG5hbWUpIHtcbiAgICB2YXIgZXJyb3IgPSBfcGxhaW4yLmRlZmF1bHQuZ2V0SW4oc3luY0Vycm9ycywgbmFtZSk7XG4gICAgLy8gQmVjYXVzZSB0aGUgZXJyb3IgZm9yIHRoaXMgZmllbGQgbWlnaHQgbm90IGJlIGF0IGEgbGV2ZWwgaW4gdGhlIGVycm9yIHN0cnVjdHVyZSB3aGVyZVxuICAgIC8vIGl0IGNhbiBiZSBzZXQgZGlyZWN0bHksIGl0IG1pZ2h0IG5lZWQgdG8gYmUgdW53cmFwcGVkIGZyb20gdGhlIF9lcnJvciBwcm9wZXJ0eVxuICAgIHJldHVybiBlcnJvciAmJiBlcnJvci5fZXJyb3IgPyBlcnJvci5fZXJyb3IgOiBlcnJvcjtcbiAgfTtcblxuICB2YXIgZ2V0U3luY1dhcm5pbmcgPSBmdW5jdGlvbiBnZXRTeW5jV2FybmluZyhzeW5jV2FybmluZ3MsIG5hbWUpIHtcbiAgICB2YXIgd2FybmluZyA9IGdldEluKHN5bmNXYXJuaW5ncywgbmFtZSk7XG4gICAgLy8gQmVjYXVzZSB0aGUgd2FybmluZyBmb3IgdGhpcyBmaWVsZCBtaWdodCBub3QgYmUgYXQgYSBsZXZlbCBpbiB0aGUgd2FybmluZyBzdHJ1Y3R1cmUgd2hlcmVcbiAgICAvLyBpdCBjYW4gYmUgc2V0IGRpcmVjdGx5LCBpdCBtaWdodCBuZWVkIHRvIGJlIHVud3JhcHBlZCBmcm9tIHRoZSBfd2FybmluZyBwcm9wZXJ0eVxuICAgIHJldHVybiB3YXJuaW5nICYmIHdhcm5pbmcuX3dhcm5pbmcgPyB3YXJuaW5nLl93YXJuaW5nIDogd2FybmluZztcbiAgfTtcblxuICB2YXIgQ29ubmVjdGVkRmllbGQgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhDb25uZWN0ZWRGaWVsZCwgX0NvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBDb25uZWN0ZWRGaWVsZChwcm9wcykge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbm5lY3RlZEZpZWxkKTtcblxuICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKENvbm5lY3RlZEZpZWxkLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ29ubmVjdGVkRmllbGQpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICAgIF90aGlzLmhhbmRsZUNoYW5nZSA9IF90aGlzLmhhbmRsZUNoYW5nZS5iaW5kKF90aGlzKTtcbiAgICAgIF90aGlzLmhhbmRsZUZvY3VzID0gX3RoaXMuaGFuZGxlRm9jdXMuYmluZChfdGhpcyk7XG4gICAgICBfdGhpcy5oYW5kbGVCbHVyID0gX3RoaXMuaGFuZGxlQmx1ci5iaW5kKF90aGlzKTtcbiAgICAgIF90aGlzLmhhbmRsZURyYWdTdGFydCA9IF90aGlzLmhhbmRsZURyYWdTdGFydC5iaW5kKF90aGlzKTtcbiAgICAgIF90aGlzLmhhbmRsZURyb3AgPSBfdGhpcy5oYW5kbGVEcm9wLmJpbmQoX3RoaXMpO1xuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhDb25uZWN0ZWRGaWVsZCwgW3tcbiAgICAgIGtleTogJ3Nob3VsZENvbXBvbmVudFVwZGF0ZScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICB2YXIgbmV4dFByb3BzS2V5cyA9IE9iamVjdC5rZXlzKG5leHRQcm9wcyk7XG4gICAgICAgIHZhciB0aGlzUHJvcHNLZXlzID0gT2JqZWN0LmtleXModGhpcy5wcm9wcyk7XG4gICAgICAgIHJldHVybiBuZXh0UHJvcHNLZXlzLmxlbmd0aCAhPT0gdGhpc1Byb3BzS2V5cy5sZW5ndGggfHwgbmV4dFByb3BzS2V5cy5zb21lKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgICAgcmV0dXJuICF+cHJvcHNUb05vdFVwZGF0ZUZvci5pbmRleE9mKHByb3ApICYmICFkZWVwRXF1YWwoX3RoaXMyLnByb3BzW3Byb3BdLCBuZXh0UHJvcHNbcHJvcF0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdpc1ByaXN0aW5lJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc1ByaXN0aW5lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5wcmlzdGluZTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdnZXRWYWx1ZScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLnZhbHVlO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2dldFJlbmRlcmVkQ29tcG9uZW50JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRSZW5kZXJlZENvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVmcy5yZW5kZXJlZENvbXBvbmVudDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdoYW5kbGVDaGFuZ2UnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIG5hbWUgPSBfcHJvcHMubmFtZSxcbiAgICAgICAgICAgIGRpc3BhdGNoID0gX3Byb3BzLmRpc3BhdGNoLFxuICAgICAgICAgICAgcGFyc2UgPSBfcHJvcHMucGFyc2UsXG4gICAgICAgICAgICBub3JtYWxpemUgPSBfcHJvcHMubm9ybWFsaXplLFxuICAgICAgICAgICAgb25DaGFuZ2UgPSBfcHJvcHMub25DaGFuZ2UsXG4gICAgICAgICAgICBfcmVkdXhGb3JtID0gX3Byb3BzLl9yZWR1eEZvcm0sXG4gICAgICAgICAgICBwcmV2aW91c1ZhbHVlID0gX3Byb3BzLnZhbHVlO1xuXG4gICAgICAgIHZhciBuZXdWYWx1ZSA9ICgwLCBfb25DaGFuZ2VWYWx1ZTIuZGVmYXVsdCkoZXZlbnQsIHsgbmFtZTogbmFtZSwgcGFyc2U6IHBhcnNlLCBub3JtYWxpemU6IG5vcm1hbGl6ZSB9KTtcblxuICAgICAgICB2YXIgZGVmYXVsdFByZXZlbnRlZCA9IGZhbHNlO1xuICAgICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgICBvbkNoYW5nZShfZXh0ZW5kcyh7fSwgZXZlbnQsIHtcbiAgICAgICAgICAgIHByZXZlbnREZWZhdWx0OiBmdW5jdGlvbiBwcmV2ZW50RGVmYXVsdCgpIHtcbiAgICAgICAgICAgICAgZGVmYXVsdFByZXZlbnRlZCA9IHRydWU7XG4gICAgICAgICAgICAgIHJldHVybiBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLCBuZXdWYWx1ZSwgcHJldmlvdXNWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFkZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgLy8gZGlzcGF0Y2ggY2hhbmdlIGFjdGlvblxuICAgICAgICAgIGRpc3BhdGNoKF9yZWR1eEZvcm0uY2hhbmdlKG5hbWUsIG5ld1ZhbHVlKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdoYW5kbGVGb2N1cycsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlRm9jdXMoZXZlbnQpIHtcbiAgICAgICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgbmFtZSA9IF9wcm9wczIubmFtZSxcbiAgICAgICAgICAgIGRpc3BhdGNoID0gX3Byb3BzMi5kaXNwYXRjaCxcbiAgICAgICAgICAgIG9uRm9jdXMgPSBfcHJvcHMyLm9uRm9jdXMsXG4gICAgICAgICAgICBfcmVkdXhGb3JtID0gX3Byb3BzMi5fcmVkdXhGb3JtO1xuXG5cbiAgICAgICAgdmFyIGRlZmF1bHRQcmV2ZW50ZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKG9uRm9jdXMpIHtcbiAgICAgICAgICBvbkZvY3VzKF9leHRlbmRzKHt9LCBldmVudCwge1xuICAgICAgICAgICAgcHJldmVudERlZmF1bHQ6IGZ1bmN0aW9uIHByZXZlbnREZWZhdWx0KCkge1xuICAgICAgICAgICAgICBkZWZhdWx0UHJldmVudGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgZGlzcGF0Y2goX3JlZHV4Rm9ybS5mb2N1cyhuYW1lKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdoYW5kbGVCbHVyJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVCbHVyKGV2ZW50KSB7XG4gICAgICAgIHZhciBfcHJvcHMzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIG5hbWUgPSBfcHJvcHMzLm5hbWUsXG4gICAgICAgICAgICBkaXNwYXRjaCA9IF9wcm9wczMuZGlzcGF0Y2gsXG4gICAgICAgICAgICBwYXJzZSA9IF9wcm9wczMucGFyc2UsXG4gICAgICAgICAgICBub3JtYWxpemUgPSBfcHJvcHMzLm5vcm1hbGl6ZSxcbiAgICAgICAgICAgIG9uQmx1ciA9IF9wcm9wczMub25CbHVyLFxuICAgICAgICAgICAgX3JlZHV4Rm9ybSA9IF9wcm9wczMuX3JlZHV4Rm9ybSxcbiAgICAgICAgICAgIF92YWx1ZSA9IF9wcm9wczMuX3ZhbHVlLFxuICAgICAgICAgICAgcHJldmlvdXNWYWx1ZSA9IF9wcm9wczMudmFsdWU7XG5cbiAgICAgICAgdmFyIG5ld1ZhbHVlID0gKDAsIF9vbkNoYW5nZVZhbHVlMi5kZWZhdWx0KShldmVudCwgeyBuYW1lOiBuYW1lLCBwYXJzZTogcGFyc2UsIG5vcm1hbGl6ZTogbm9ybWFsaXplIH0pO1xuXG4gICAgICAgIC8vIGZvciBjaGVja2JveCBhbmQgcmFkaW8sIGlmIHRoZSB2YWx1ZSBwcm9wZXJ0eSBvZiBjaGVja2JveCBvciByYWRpbyBlcXVhbHNcbiAgICAgICAgLy8gdGhlIHZhbHVlIHBhc3NlZCBieSBibHVyIGV2ZW50LCB0aGVuIGZpcmUgYmx1ciBhY3Rpb24gd2l0aCBwcmV2aW91c1ZhbHVlLlxuICAgICAgICBpZiAobmV3VmFsdWUgPT09IF92YWx1ZSAmJiBfdmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIG5ld1ZhbHVlID0gcHJldmlvdXNWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkZWZhdWx0UHJldmVudGVkID0gZmFsc2U7XG4gICAgICAgIGlmIChvbkJsdXIpIHtcbiAgICAgICAgICBvbkJsdXIoX2V4dGVuZHMoe30sIGV2ZW50LCB7XG4gICAgICAgICAgICBwcmV2ZW50RGVmYXVsdDogZnVuY3Rpb24gcHJldmVudERlZmF1bHQoKSB7XG4gICAgICAgICAgICAgIGRlZmF1bHRQcmV2ZW50ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICByZXR1cm4gZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSwgbmV3VmFsdWUsIHByZXZpb3VzVmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgLy8gZGlzcGF0Y2ggYmx1ciBhY3Rpb25cbiAgICAgICAgICBkaXNwYXRjaChfcmVkdXhGb3JtLmJsdXIobmFtZSwgbmV3VmFsdWUpKTtcblxuICAgICAgICAgIC8vIGNhbGwgcG9zdC1ibHVyIGNhbGxiYWNrXG4gICAgICAgICAgaWYgKF9yZWR1eEZvcm0uYXN5bmNWYWxpZGF0ZSkge1xuICAgICAgICAgICAgX3JlZHV4Rm9ybS5hc3luY1ZhbGlkYXRlKG5hbWUsIG5ld1ZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdoYW5kbGVEcmFnU3RhcnQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZURyYWdTdGFydChldmVudCkge1xuICAgICAgICB2YXIgX3Byb3BzNCA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBvbkRyYWdTdGFydCA9IF9wcm9wczQub25EcmFnU3RhcnQsXG4gICAgICAgICAgICB2YWx1ZSA9IF9wcm9wczQudmFsdWU7XG5cbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoX2V2ZW50Q29uc3RzLmRhdGFLZXksIHZhbHVlID09IG51bGwgPyAnJyA6IHZhbHVlKTtcblxuICAgICAgICBpZiAob25EcmFnU3RhcnQpIHtcbiAgICAgICAgICBvbkRyYWdTdGFydChldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdoYW5kbGVEcm9wJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVEcm9wKGV2ZW50KSB7XG4gICAgICAgIHZhciBfcHJvcHM1ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIG5hbWUgPSBfcHJvcHM1Lm5hbWUsXG4gICAgICAgICAgICBkaXNwYXRjaCA9IF9wcm9wczUuZGlzcGF0Y2gsXG4gICAgICAgICAgICBvbkRyb3AgPSBfcHJvcHM1Lm9uRHJvcCxcbiAgICAgICAgICAgIF9yZWR1eEZvcm0gPSBfcHJvcHM1Ll9yZWR1eEZvcm0sXG4gICAgICAgICAgICBwcmV2aW91c1ZhbHVlID0gX3Byb3BzNS52YWx1ZTtcblxuICAgICAgICB2YXIgbmV3VmFsdWUgPSBldmVudC5kYXRhVHJhbnNmZXIuZ2V0RGF0YShfZXZlbnRDb25zdHMuZGF0YUtleSk7XG5cbiAgICAgICAgdmFyIGRlZmF1bHRQcmV2ZW50ZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKG9uRHJvcCkge1xuICAgICAgICAgIG9uRHJvcChfZXh0ZW5kcyh7fSwgZXZlbnQsIHtcbiAgICAgICAgICAgIHByZXZlbnREZWZhdWx0OiBmdW5jdGlvbiBwcmV2ZW50RGVmYXVsdCgpIHtcbiAgICAgICAgICAgICAgZGVmYXVsdFByZXZlbnRlZCA9IHRydWU7XG4gICAgICAgICAgICAgIHJldHVybiBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLCBuZXdWYWx1ZSwgcHJldmlvdXNWYWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICAvLyBkaXNwYXRjaCBjaGFuZ2UgYWN0aW9uXG4gICAgICAgICAgZGlzcGF0Y2goX3JlZHV4Rm9ybS5jaGFuZ2UobmFtZSwgbmV3VmFsdWUpKTtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciBfcHJvcHM2ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGNvbXBvbmVudCA9IF9wcm9wczYuY29tcG9uZW50LFxuICAgICAgICAgICAgd2l0aFJlZiA9IF9wcm9wczYud2l0aFJlZixcbiAgICAgICAgICAgIG5hbWUgPSBfcHJvcHM2Lm5hbWUsXG4gICAgICAgICAgICBfcmVkdXhGb3JtID0gX3Byb3BzNi5fcmVkdXhGb3JtLFxuICAgICAgICAgICAgbm9ybWFsaXplID0gX3Byb3BzNi5ub3JtYWxpemUsXG4gICAgICAgICAgICBvbkJsdXIgPSBfcHJvcHM2Lm9uQmx1cixcbiAgICAgICAgICAgIG9uQ2hhbmdlID0gX3Byb3BzNi5vbkNoYW5nZSxcbiAgICAgICAgICAgIG9uRm9jdXMgPSBfcHJvcHM2Lm9uRm9jdXMsXG4gICAgICAgICAgICBvbkRyYWdTdGFydCA9IF9wcm9wczYub25EcmFnU3RhcnQsXG4gICAgICAgICAgICBvbkRyb3AgPSBfcHJvcHM2Lm9uRHJvcCxcbiAgICAgICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzNiwgWydjb21wb25lbnQnLCAnd2l0aFJlZicsICduYW1lJywgJ19yZWR1eEZvcm0nLCAnbm9ybWFsaXplJywgJ29uQmx1cicsICdvbkNoYW5nZScsICdvbkZvY3VzJywgJ29uRHJhZ1N0YXJ0JywgJ29uRHJvcCddKTtcblxuICAgICAgICB2YXIgX2NyZWF0ZUZpZWxkUHJvcHMgPSAoMCwgX2NyZWF0ZUZpZWxkUHJvcHMzLmRlZmF1bHQpKHsgZ2V0SW46IGdldEluLCB0b0pTOiB0b0pTIH0sIG5hbWUsIF9leHRlbmRzKHt9LCByZXN0LCB7XG4gICAgICAgICAgZm9ybTogX3JlZHV4Rm9ybS5mb3JtLFxuICAgICAgICAgIG9uQmx1cjogdGhpcy5oYW5kbGVCbHVyLFxuICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLmhhbmRsZUNoYW5nZSxcbiAgICAgICAgICBvbkRyb3A6IHRoaXMuaGFuZGxlRHJvcCxcbiAgICAgICAgICBvbkRyYWdTdGFydDogdGhpcy5oYW5kbGVEcmFnU3RhcnQsXG4gICAgICAgICAgb25Gb2N1czogdGhpcy5oYW5kbGVGb2N1c1xuICAgICAgICB9KSksXG4gICAgICAgICAgICBjdXN0b20gPSBfY3JlYXRlRmllbGRQcm9wcy5jdXN0b20sXG4gICAgICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfY3JlYXRlRmllbGRQcm9wcywgWydjdXN0b20nXSk7XG5cbiAgICAgICAgaWYgKHdpdGhSZWYpIHtcbiAgICAgICAgICBjdXN0b20ucmVmID0gJ3JlbmRlcmVkQ29tcG9uZW50JztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGNvbXBvbmVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB2YXIgaW5wdXQgPSBwcm9wcy5pbnB1dCxcbiAgICAgICAgICAgICAgbWV0YSA9IHByb3BzLm1ldGE7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICAgICAgICAvLyBmbGF0dGVuIGlucHV0IGludG8gb3RoZXIgcHJvcHNcblxuICAgICAgICAgIHJldHVybiAoMCwgX3JlYWN0LmNyZWF0ZUVsZW1lbnQpKGNvbXBvbmVudCwgX2V4dGVuZHMoe30sIGlucHV0LCBjdXN0b20pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gKDAsIF9yZWFjdC5jcmVhdGVFbGVtZW50KShjb21wb25lbnQsIF9leHRlbmRzKHt9LCBwcm9wcywgY3VzdG9tKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQ29ubmVjdGVkRmllbGQ7XG4gIH0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbiAgQ29ubmVjdGVkRmllbGQucHJvcFR5cGVzID0ge1xuICAgIGNvbXBvbmVudDogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYywgX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmddKS5pc1JlcXVpcmVkLFxuICAgIHByb3BzOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdFxuICB9O1xuXG4gIHZhciBjb25uZWN0b3IgPSAoMCwgX3JlYWN0UmVkdXguY29ubmVjdCkoZnVuY3Rpb24gKHN0YXRlLCBvd25Qcm9wcykge1xuICAgIHZhciBuYW1lID0gb3duUHJvcHMubmFtZSxcbiAgICAgICAgX293blByb3BzJF9yZWR1eEZvcm0gPSBvd25Qcm9wcy5fcmVkdXhGb3JtLFxuICAgICAgICBpbml0aWFsVmFsdWVzID0gX293blByb3BzJF9yZWR1eEZvcm0uaW5pdGlhbFZhbHVlcyxcbiAgICAgICAgZ2V0Rm9ybVN0YXRlID0gX293blByb3BzJF9yZWR1eEZvcm0uZ2V0Rm9ybVN0YXRlO1xuXG4gICAgdmFyIGZvcm1TdGF0ZSA9IGdldEZvcm1TdGF0ZShzdGF0ZSk7XG4gICAgdmFyIGluaXRpYWxTdGF0ZSA9IGdldEluKGZvcm1TdGF0ZSwgJ2luaXRpYWwuJyArIG5hbWUpO1xuICAgIHZhciBpbml0aWFsID0gaW5pdGlhbFN0YXRlICE9PSB1bmRlZmluZWQgPyBpbml0aWFsU3RhdGUgOiBpbml0aWFsVmFsdWVzICYmIGdldEluKGluaXRpYWxWYWx1ZXMsIG5hbWUpO1xuICAgIHZhciB2YWx1ZSA9IGdldEluKGZvcm1TdGF0ZSwgJ3ZhbHVlcy4nICsgbmFtZSk7XG4gICAgdmFyIHN1Ym1pdHRpbmcgPSBnZXRJbihmb3JtU3RhdGUsICdzdWJtaXR0aW5nJyk7XG4gICAgdmFyIHN5bmNFcnJvciA9IGdldFN5bmNFcnJvcihnZXRJbihmb3JtU3RhdGUsICdzeW5jRXJyb3JzJyksIG5hbWUpO1xuICAgIHZhciBzeW5jV2FybmluZyA9IGdldFN5bmNXYXJuaW5nKGdldEluKGZvcm1TdGF0ZSwgJ3N5bmNXYXJuaW5ncycpLCBuYW1lKTtcbiAgICB2YXIgcHJpc3RpbmUgPSBkZWVwRXF1YWwodmFsdWUsIGluaXRpYWwpO1xuICAgIHJldHVybiB7XG4gICAgICBhc3luY0Vycm9yOiBnZXRJbihmb3JtU3RhdGUsICdhc3luY0Vycm9ycy4nICsgbmFtZSksXG4gICAgICBhc3luY1ZhbGlkYXRpbmc6IGdldEluKGZvcm1TdGF0ZSwgJ2FzeW5jVmFsaWRhdGluZycpID09PSBuYW1lLFxuICAgICAgZGlydHk6ICFwcmlzdGluZSxcbiAgICAgIHByaXN0aW5lOiBwcmlzdGluZSxcbiAgICAgIHN0YXRlOiBnZXRJbihmb3JtU3RhdGUsICdmaWVsZHMuJyArIG5hbWUpLFxuICAgICAgc3VibWl0RXJyb3I6IGdldEluKGZvcm1TdGF0ZSwgJ3N1Ym1pdEVycm9ycy4nICsgbmFtZSksXG4gICAgICBzdWJtaXRGYWlsZWQ6IGdldEluKGZvcm1TdGF0ZSwgJ3N1Ym1pdEZhaWxlZCcpLFxuICAgICAgc3VibWl0dGluZzogc3VibWl0dGluZyxcbiAgICAgIHN5bmNFcnJvcjogc3luY0Vycm9yLFxuICAgICAgc3luY1dhcm5pbmc6IHN5bmNXYXJuaW5nLFxuICAgICAgaW5pdGlhbDogaW5pdGlhbCxcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIF92YWx1ZTogb3duUHJvcHMudmFsdWUgLy8gc2F2ZSB2YWx1ZSBwYXNzZWQgaW4gKGZvciBjaGVja2JveGVzKVxuICAgIH07XG4gIH0sIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB7IHdpdGhSZWY6IHRydWUgfSk7XG4gIHJldHVybiBjb25uZWN0b3IoQ29ubmVjdGVkRmllbGQpO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlQ29ubmVjdGVkRmllbGQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4LWZvcm0vbGliL0Nvbm5lY3RlZEZpZWxkLmpzXG4vLyBtb2R1bGUgaWQgPSAxODhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX21hcFZhbHVlczIgPSByZXF1aXJlKCdsb2Rhc2gvbWFwVmFsdWVzJyk7XG5cbnZhciBfbWFwVmFsdWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21hcFZhbHVlczIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfcmVhY3RSZWR1eCA9IHJlcXVpcmUoJ3JlYWN0LXJlZHV4Jyk7XG5cbnZhciBfcmVkdXggPSByZXF1aXJlKCdyZWR1eCcpO1xuXG52YXIgX2NyZWF0ZUZpZWxkQXJyYXlQcm9wcyA9IHJlcXVpcmUoJy4vY3JlYXRlRmllbGRBcnJheVByb3BzJyk7XG5cbnZhciBfY3JlYXRlRmllbGRBcnJheVByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUZpZWxkQXJyYXlQcm9wcyk7XG5cbnZhciBfcGxhaW4gPSByZXF1aXJlKCcuL3N0cnVjdHVyZS9wbGFpbicpO1xuXG52YXIgX3BsYWluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BsYWluKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBwcm9wc1RvTm90VXBkYXRlRm9yID0gWydfcmVkdXhGb3JtJywgJ3ZhbHVlJ107XG5cbnZhciBjcmVhdGVDb25uZWN0ZWRGaWVsZEFycmF5ID0gZnVuY3Rpb24gY3JlYXRlQ29ubmVjdGVkRmllbGRBcnJheShfcmVmKSB7XG4gIHZhciBkZWVwRXF1YWwgPSBfcmVmLmRlZXBFcXVhbCxcbiAgICAgIGdldEluID0gX3JlZi5nZXRJbixcbiAgICAgIHNpemUgPSBfcmVmLnNpemU7XG5cbiAgdmFyIGdldFN5bmNFcnJvciA9IGZ1bmN0aW9uIGdldFN5bmNFcnJvcihzeW5jRXJyb3JzLCBuYW1lKSB7XG4gICAgLy8gRm9yIGFuIGFycmF5LCB0aGUgZXJyb3IgY2FuIF9PTkxZXyBiZSB1bmRlciBfZXJyb3IuXG4gICAgLy8gVGhpcyBpcyB3aHkgdGhpcyBnZXRTeW5jRXJyb3IgaXMgbm90IHRoZSBzYW1lIGFzIHRoZVxuICAgIC8vIG9uZSBpbiBGaWVsZC5cbiAgICByZXR1cm4gX3BsYWluMi5kZWZhdWx0LmdldEluKHN5bmNFcnJvcnMsIG5hbWUgKyAnLl9lcnJvcicpO1xuICB9O1xuXG4gIHZhciBnZXRTeW5jV2FybmluZyA9IGZ1bmN0aW9uIGdldFN5bmNXYXJuaW5nKHN5bmNXYXJuaW5ncywgbmFtZSkge1xuICAgIC8vIEZvciBhbiBhcnJheSwgdGhlIHdhcm5pbmcgY2FuIF9PTkxZXyBiZSB1bmRlciBfd2FybmluZy5cbiAgICAvLyBUaGlzIGlzIHdoeSB0aGlzIGdldFN5bmNFcnJvciBpcyBub3QgdGhlIHNhbWUgYXMgdGhlXG4gICAgLy8gb25lIGluIEZpZWxkLlxuICAgIHJldHVybiBnZXRJbihzeW5jV2FybmluZ3MsIG5hbWUgKyAnLl93YXJuaW5nJyk7XG4gIH07XG5cbiAgdmFyIENvbm5lY3RlZEZpZWxkQXJyYXkgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhDb25uZWN0ZWRGaWVsZEFycmF5LCBfQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIENvbm5lY3RlZEZpZWxkQXJyYXkoKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29ubmVjdGVkRmllbGRBcnJheSk7XG5cbiAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChDb25uZWN0ZWRGaWVsZEFycmF5Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ29ubmVjdGVkRmllbGRBcnJheSkpLmNhbGwodGhpcykpO1xuXG4gICAgICBfdGhpcy5nZXRWYWx1ZSA9IF90aGlzLmdldFZhbHVlLmJpbmQoX3RoaXMpO1xuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhDb25uZWN0ZWRGaWVsZEFycmF5LCBbe1xuICAgICAga2V5OiAnc2hvdWxkQ29tcG9uZW50VXBkYXRlJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBpZiB0aGUgZWxlbWVudHMgb2YgdGhlIHZhbHVlIGFycmF5IHdhcyB1cGRhdGVkLlxuICAgICAgICB2YXIgdGhpc1ZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZTtcbiAgICAgICAgdmFyIG5leHRWYWx1ZSA9IG5leHRQcm9wcy52YWx1ZTtcblxuICAgICAgICBpZiAodGhpc1ZhbHVlICYmIG5leHRWYWx1ZSkge1xuICAgICAgICAgIGlmICh0aGlzVmFsdWUubGVuZ3RoICE9PSBuZXh0VmFsdWUubGVuZ3RoIHx8IHRoaXNWYWx1ZS5ldmVyeShmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV4dFZhbHVlLnNvbWUoZnVuY3Rpb24gKG5leHQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGRlZXBFcXVhbCh2YWwsIG5leHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBuZXh0UHJvcHNLZXlzID0gT2JqZWN0LmtleXMobmV4dFByb3BzKTtcbiAgICAgICAgdmFyIHRoaXNQcm9wc0tleXMgPSBPYmplY3Qua2V5cyh0aGlzLnByb3BzKTtcbiAgICAgICAgcmV0dXJuIG5leHRQcm9wc0tleXMubGVuZ3RoICE9PSB0aGlzUHJvcHNLZXlzLmxlbmd0aCB8fCBuZXh0UHJvcHNLZXlzLnNvbWUoZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgICAvLyB1c2VmdWwgdG8gZGVidWcgcmVyZW5kZXJzXG4gICAgICAgICAgLy8gaWYgKCFwbGFpbi5kZWVwRXF1YWwodGhpcy5wcm9wc1sgcHJvcCBdLCBuZXh0UHJvcHNbIHByb3AgXSkpIHtcbiAgICAgICAgICAvLyAgIGNvbnNvbGUuaW5mbyhwcm9wLCAnY2hhbmdlZCcsIHRoaXMucHJvcHNbIHByb3AgXSwgJz09PicsIG5leHRQcm9wc1sgcHJvcCBdKVxuICAgICAgICAgIC8vIH1cbiAgICAgICAgICByZXR1cm4gIX5wcm9wc1RvTm90VXBkYXRlRm9yLmluZGV4T2YocHJvcCkgJiYgIWRlZXBFcXVhbChfdGhpczIucHJvcHNbcHJvcF0sIG5leHRQcm9wc1twcm9wXSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2dldFJlbmRlcmVkQ29tcG9uZW50JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRSZW5kZXJlZENvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVmcy5yZW5kZXJlZENvbXBvbmVudDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdnZXRWYWx1ZScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmFsdWUoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMudmFsdWUgJiYgZ2V0SW4odGhpcy5wcm9wcy52YWx1ZSwgaW5kZXgpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGNvbXBvbmVudCA9IF9wcm9wcy5jb21wb25lbnQsXG4gICAgICAgICAgICB3aXRoUmVmID0gX3Byb3BzLndpdGhSZWYsXG4gICAgICAgICAgICBuYW1lID0gX3Byb3BzLm5hbWUsXG4gICAgICAgICAgICBfcmVkdXhGb3JtID0gX3Byb3BzLl9yZWR1eEZvcm0sXG4gICAgICAgICAgICB2YWxpZGF0ZSA9IF9wcm9wcy52YWxpZGF0ZSxcbiAgICAgICAgICAgIHdhcm4gPSBfcHJvcHMud2FybixcbiAgICAgICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ2NvbXBvbmVudCcsICd3aXRoUmVmJywgJ25hbWUnLCAnX3JlZHV4Rm9ybScsICd2YWxpZGF0ZScsICd3YXJuJ10pO1xuXG4gICAgICAgIHZhciBwcm9wcyA9ICgwLCBfY3JlYXRlRmllbGRBcnJheVByb3BzMi5kZWZhdWx0KShnZXRJbiwgbmFtZSwgX3JlZHV4Rm9ybS5mb3JtLCBfcmVkdXhGb3JtLnNlY3Rpb25QcmVmaXgsIHRoaXMuZ2V0VmFsdWUsIHJlc3QpO1xuICAgICAgICBpZiAod2l0aFJlZikge1xuICAgICAgICAgIHByb3BzLnJlZiA9ICdyZW5kZXJlZENvbXBvbmVudCc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICgwLCBfcmVhY3QuY3JlYXRlRWxlbWVudCkoY29tcG9uZW50LCBwcm9wcyk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnZGlydHknLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmRpcnR5O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3ByaXN0aW5lJyxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5wcmlzdGluZTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICd2YWx1ZScsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMudmFsdWU7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIENvbm5lY3RlZEZpZWxkQXJyYXk7XG4gIH0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbiAgQ29ubmVjdGVkRmllbGRBcnJheS5wcm9wVHlwZXMgPSB7XG4gICAgY29tcG9uZW50OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLCBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZ10pLmlzUmVxdWlyZWQsXG4gICAgcHJvcHM6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XG4gIH07XG5cbiAgQ29ubmVjdGVkRmllbGRBcnJheS5jb250ZXh0VHlwZXMgPSB7XG4gICAgX3JlZHV4Rm9ybTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3RcbiAgfTtcblxuICB2YXIgY29ubmVjdG9yID0gKDAsIF9yZWFjdFJlZHV4LmNvbm5lY3QpKGZ1bmN0aW9uIChzdGF0ZSwgb3duUHJvcHMpIHtcbiAgICB2YXIgbmFtZSA9IG93blByb3BzLm5hbWUsXG4gICAgICAgIF9vd25Qcm9wcyRfcmVkdXhGb3JtID0gb3duUHJvcHMuX3JlZHV4Rm9ybSxcbiAgICAgICAgaW5pdGlhbFZhbHVlcyA9IF9vd25Qcm9wcyRfcmVkdXhGb3JtLmluaXRpYWxWYWx1ZXMsXG4gICAgICAgIGdldEZvcm1TdGF0ZSA9IF9vd25Qcm9wcyRfcmVkdXhGb3JtLmdldEZvcm1TdGF0ZTtcblxuICAgIHZhciBmb3JtU3RhdGUgPSBnZXRGb3JtU3RhdGUoc3RhdGUpO1xuICAgIHZhciBpbml0aWFsID0gZ2V0SW4oZm9ybVN0YXRlLCAnaW5pdGlhbC4nICsgbmFtZSkgfHwgaW5pdGlhbFZhbHVlcyAmJiBnZXRJbihpbml0aWFsVmFsdWVzLCBuYW1lKTtcbiAgICB2YXIgdmFsdWUgPSBnZXRJbihmb3JtU3RhdGUsICd2YWx1ZXMuJyArIG5hbWUpO1xuICAgIHZhciBzdWJtaXR0aW5nID0gZ2V0SW4oZm9ybVN0YXRlLCAnc3VibWl0dGluZycpO1xuICAgIHZhciBzeW5jRXJyb3IgPSBnZXRTeW5jRXJyb3IoZ2V0SW4oZm9ybVN0YXRlLCAnc3luY0Vycm9ycycpLCBuYW1lKTtcbiAgICB2YXIgc3luY1dhcm5pbmcgPSBnZXRTeW5jV2FybmluZyhnZXRJbihmb3JtU3RhdGUsICdzeW5jV2FybmluZ3MnKSwgbmFtZSk7XG4gICAgdmFyIHByaXN0aW5lID0gZGVlcEVxdWFsKHZhbHVlLCBpbml0aWFsKTtcbiAgICByZXR1cm4ge1xuICAgICAgYXN5bmNFcnJvcjogZ2V0SW4oZm9ybVN0YXRlLCAnYXN5bmNFcnJvcnMuJyArIG5hbWUgKyAnLl9lcnJvcicpLFxuICAgICAgZGlydHk6ICFwcmlzdGluZSxcbiAgICAgIHByaXN0aW5lOiBwcmlzdGluZSxcbiAgICAgIHN0YXRlOiBnZXRJbihmb3JtU3RhdGUsICdmaWVsZHMuJyArIG5hbWUpLFxuICAgICAgc3VibWl0RXJyb3I6IGdldEluKGZvcm1TdGF0ZSwgJ3N1Ym1pdEVycm9ycy4nICsgbmFtZSArICcuX2Vycm9yJyksXG4gICAgICBzdWJtaXRGYWlsZWQ6IGdldEluKGZvcm1TdGF0ZSwgJ3N1Ym1pdEZhaWxlZCcpLFxuICAgICAgc3VibWl0dGluZzogc3VibWl0dGluZyxcbiAgICAgIHN5bmNFcnJvcjogc3luY0Vycm9yLFxuICAgICAgc3luY1dhcm5pbmc6IHN5bmNXYXJuaW5nLFxuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgbGVuZ3RoOiBzaXplKHZhbHVlKVxuICAgIH07XG4gIH0sIGZ1bmN0aW9uIChkaXNwYXRjaCwgb3duUHJvcHMpIHtcbiAgICB2YXIgbmFtZSA9IG93blByb3BzLm5hbWUsXG4gICAgICAgIF9yZWR1eEZvcm0gPSBvd25Qcm9wcy5fcmVkdXhGb3JtO1xuICAgIHZhciBhcnJheUluc2VydCA9IF9yZWR1eEZvcm0uYXJyYXlJbnNlcnQsXG4gICAgICAgIGFycmF5TW92ZSA9IF9yZWR1eEZvcm0uYXJyYXlNb3ZlLFxuICAgICAgICBhcnJheVBvcCA9IF9yZWR1eEZvcm0uYXJyYXlQb3AsXG4gICAgICAgIGFycmF5UHVzaCA9IF9yZWR1eEZvcm0uYXJyYXlQdXNoLFxuICAgICAgICBhcnJheVJlbW92ZSA9IF9yZWR1eEZvcm0uYXJyYXlSZW1vdmUsXG4gICAgICAgIGFycmF5UmVtb3ZlQWxsID0gX3JlZHV4Rm9ybS5hcnJheVJlbW92ZUFsbCxcbiAgICAgICAgYXJyYXlTaGlmdCA9IF9yZWR1eEZvcm0uYXJyYXlTaGlmdCxcbiAgICAgICAgYXJyYXlTcGxpY2UgPSBfcmVkdXhGb3JtLmFycmF5U3BsaWNlLFxuICAgICAgICBhcnJheVN3YXAgPSBfcmVkdXhGb3JtLmFycmF5U3dhcCxcbiAgICAgICAgYXJyYXlVbnNoaWZ0ID0gX3JlZHV4Rm9ybS5hcnJheVVuc2hpZnQ7XG5cbiAgICByZXR1cm4gKDAsIF9tYXBWYWx1ZXMzLmRlZmF1bHQpKHtcbiAgICAgIGFycmF5SW5zZXJ0OiBhcnJheUluc2VydCxcbiAgICAgIGFycmF5TW92ZTogYXJyYXlNb3ZlLFxuICAgICAgYXJyYXlQb3A6IGFycmF5UG9wLFxuICAgICAgYXJyYXlQdXNoOiBhcnJheVB1c2gsXG4gICAgICBhcnJheVJlbW92ZTogYXJyYXlSZW1vdmUsXG4gICAgICBhcnJheVJlbW92ZUFsbDogYXJyYXlSZW1vdmVBbGwsXG4gICAgICBhcnJheVNoaWZ0OiBhcnJheVNoaWZ0LFxuICAgICAgYXJyYXlTcGxpY2U6IGFycmF5U3BsaWNlLFxuICAgICAgYXJyYXlTd2FwOiBhcnJheVN3YXAsXG4gICAgICBhcnJheVVuc2hpZnQ6IGFycmF5VW5zaGlmdFxuICAgIH0sIGZ1bmN0aW9uIChhY3Rpb25DcmVhdG9yKSB7XG4gICAgICByZXR1cm4gKDAsIF9yZWR1eC5iaW5kQWN0aW9uQ3JlYXRvcnMpKGFjdGlvbkNyZWF0b3IuYmluZChudWxsLCBuYW1lKSwgZGlzcGF0Y2gpO1xuICAgIH0pO1xuICB9LCB1bmRlZmluZWQsIHsgd2l0aFJlZjogdHJ1ZSB9KTtcbiAgcmV0dXJuIGNvbm5lY3RvcihDb25uZWN0ZWRGaWVsZEFycmF5KTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZUNvbm5lY3RlZEZpZWxkQXJyYXk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4LWZvcm0vbGliL0Nvbm5lY3RlZEZpZWxkQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDE4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9yZWFjdFJlZHV4ID0gcmVxdWlyZSgncmVhY3QtcmVkdXgnKTtcblxudmFyIF9jcmVhdGVGaWVsZFByb3BzMiA9IHJlcXVpcmUoJy4vY3JlYXRlRmllbGRQcm9wcycpO1xuXG52YXIgX2NyZWF0ZUZpZWxkUHJvcHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlRmllbGRQcm9wczIpO1xuXG52YXIgX3BsYWluID0gcmVxdWlyZSgnLi9zdHJ1Y3R1cmUvcGxhaW4nKTtcblxudmFyIF9wbGFpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wbGFpbik7XG5cbnZhciBfb25DaGFuZ2VWYWx1ZSA9IHJlcXVpcmUoJy4vZXZlbnRzL29uQ2hhbmdlVmFsdWUnKTtcblxudmFyIF9vbkNoYW5nZVZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29uQ2hhbmdlVmFsdWUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIHByb3BzVG9Ob3RVcGRhdGVGb3IgPSBbJ19yZWR1eEZvcm0nXTtcblxudmFyIGNyZWF0ZUNvbm5lY3RlZEZpZWxkcyA9IGZ1bmN0aW9uIGNyZWF0ZUNvbm5lY3RlZEZpZWxkcyhfcmVmKSB7XG4gIHZhciBkZWVwRXF1YWwgPSBfcmVmLmRlZXBFcXVhbCxcbiAgICAgIGdldEluID0gX3JlZi5nZXRJbixcbiAgICAgIHRvSlMgPSBfcmVmLnRvSlMsXG4gICAgICBzaXplID0gX3JlZi5zaXplO1xuXG4gIHZhciBnZXRTeW5jRXJyb3IgPSBmdW5jdGlvbiBnZXRTeW5jRXJyb3Ioc3luY0Vycm9ycywgbmFtZSkge1xuICAgIC8vIEJlY2F1c2UgdGhlIGVycm9yIGZvciB0aGlzIGZpZWxkIG1pZ2h0IG5vdCBiZSBhdCBhIGxldmVsIGluIHRoZSBlcnJvciBzdHJ1Y3R1cmUgd2hlcmVcbiAgICAvLyBpdCBjYW4gYmUgc2V0IGRpcmVjdGx5LCBpdCBtaWdodCBuZWVkIHRvIGJlIHVud3JhcHBlZCBmcm9tIHRoZSBfZXJyb3IgcHJvcGVydHlcbiAgICByZXR1cm4gX3BsYWluMi5kZWZhdWx0LmdldEluKHN5bmNFcnJvcnMsIG5hbWUgKyAnLl9lcnJvcicpIHx8IF9wbGFpbjIuZGVmYXVsdC5nZXRJbihzeW5jRXJyb3JzLCBuYW1lKTtcbiAgfTtcblxuICB2YXIgZ2V0U3luY1dhcm5pbmcgPSBmdW5jdGlvbiBnZXRTeW5jV2FybmluZyhzeW5jV2FybmluZ3MsIG5hbWUpIHtcbiAgICB2YXIgd2FybmluZyA9IGdldEluKHN5bmNXYXJuaW5ncywgbmFtZSk7XG4gICAgLy8gQmVjYXVzZSB0aGUgd2FybmluZyBmb3IgdGhpcyBmaWVsZCBtaWdodCBub3QgYmUgYXQgYSBsZXZlbCBpbiB0aGUgd2FybmluZyBzdHJ1Y3R1cmUgd2hlcmVcbiAgICAvLyBpdCBjYW4gYmUgc2V0IGRpcmVjdGx5LCBpdCBtaWdodCBuZWVkIHRvIGJlIHVud3JhcHBlZCBmcm9tIHRoZSBfd2FybmluZyBwcm9wZXJ0eVxuICAgIHJldHVybiB3YXJuaW5nICYmIHdhcm5pbmcuX3dhcm5pbmcgPyB3YXJuaW5nLl93YXJuaW5nIDogd2FybmluZztcbiAgfTtcblxuICB2YXIgQ29ubmVjdGVkRmllbGRzID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoQ29ubmVjdGVkRmllbGRzLCBfQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIENvbm5lY3RlZEZpZWxkcyhwcm9wcykge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbm5lY3RlZEZpZWxkcyk7XG5cbiAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChDb25uZWN0ZWRGaWVsZHMuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihDb25uZWN0ZWRGaWVsZHMpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICAgIF90aGlzLmhhbmRsZUNoYW5nZSA9IF90aGlzLmhhbmRsZUNoYW5nZS5iaW5kKF90aGlzKTtcbiAgICAgIF90aGlzLmhhbmRsZUZvY3VzID0gX3RoaXMuaGFuZGxlRm9jdXMuYmluZChfdGhpcyk7XG4gICAgICBfdGhpcy5oYW5kbGVCbHVyID0gX3RoaXMuaGFuZGxlQmx1ci5iaW5kKF90aGlzKTtcblxuICAgICAgX3RoaXMub25DaGFuZ2VGbnMgPSBwcm9wcy5uYW1lcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgbmFtZSkge1xuICAgICAgICBhY2NbbmFtZV0gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMuaGFuZGxlQ2hhbmdlKG5hbWUsIGV2ZW50KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIHt9KTtcblxuICAgICAgX3RoaXMub25Gb2N1c0ZucyA9IHByb3BzLm5hbWVzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBuYW1lKSB7XG4gICAgICAgIGFjY1tuYW1lXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMuaGFuZGxlRm9jdXMobmFtZSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LCB7fSk7XG5cbiAgICAgIF90aGlzLm9uQmx1ckZucyA9IHByb3BzLm5hbWVzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBuYW1lKSB7XG4gICAgICAgIGFjY1tuYW1lXSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5oYW5kbGVCbHVyKG5hbWUsIGV2ZW50KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIHt9KTtcbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQ29ubmVjdGVkRmllbGRzLCBbe1xuICAgICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMubmFtZXMgIT09IG5leHRQcm9wcy5uYW1lcyAmJiAoc2l6ZSh0aGlzLnByb3BzLm5hbWVzKSAhPT0gc2l6ZShuZXh0UHJvcHMubmFtZXMpIHx8IG5leHRQcm9wcy5uYW1lcy5zb21lKGZ1bmN0aW9uIChuZXh0TmFtZSkge1xuICAgICAgICAgIHJldHVybiAhX3RoaXMyLnByb3BzLl9maWVsZHNbbmV4dE5hbWVdO1xuICAgICAgICB9KSkpIHtcbiAgICAgICAgICAvLyBuYW1lcyBpcyBjaGFuZ2VkLiBUaGUgY2FjaGVkIGV2ZW50IGhhbmRsZXJzIG5lZWQgdG8gYmUgdXBkYXRlZFxuICAgICAgICAgIHRoaXMub25DaGFuZ2VGbnMgPSBuZXh0UHJvcHMubmFtZXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIG5hbWUpIHtcbiAgICAgICAgICAgIGFjY1tuYW1lXSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3RoaXMyLmhhbmRsZUNoYW5nZShuYW1lLCBldmVudCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICB9LCB7fSk7XG5cbiAgICAgICAgICB0aGlzLm9uRm9jdXNGbnMgPSBuZXh0UHJvcHMubmFtZXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIG5hbWUpIHtcbiAgICAgICAgICAgIGFjY1tuYW1lXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5oYW5kbGVGb2N1cyhuYW1lKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH0sIHt9KTtcblxuICAgICAgICAgIHRoaXMub25CbHVyRm5zID0gbmV4dFByb3BzLm5hbWVzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBuYW1lKSB7XG4gICAgICAgICAgICBhY2NbbmFtZV0gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5oYW5kbGVCbHVyKG5hbWUsIGV2ZW50KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH0sIHt9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3Nob3VsZENvbXBvbmVudFVwZGF0ZScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICB2YXIgbmV4dFByb3BzS2V5cyA9IE9iamVjdC5rZXlzKG5leHRQcm9wcyk7XG4gICAgICAgIHZhciB0aGlzUHJvcHNLZXlzID0gT2JqZWN0LmtleXModGhpcy5wcm9wcyk7XG4gICAgICAgIHJldHVybiBuZXh0UHJvcHNLZXlzLmxlbmd0aCAhPT0gdGhpc1Byb3BzS2V5cy5sZW5ndGggfHwgbmV4dFByb3BzS2V5cy5zb21lKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgICAgcmV0dXJuICF+cHJvcHNUb05vdFVwZGF0ZUZvci5pbmRleE9mKHByb3ApICYmICFkZWVwRXF1YWwoX3RoaXMzLnByb3BzW3Byb3BdLCBuZXh0UHJvcHNbcHJvcF0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdpc0RpcnR5JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc0RpcnR5KCkge1xuICAgICAgICB2YXIgX2ZpZWxkcyA9IHRoaXMucHJvcHMuX2ZpZWxkcztcblxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoX2ZpZWxkcykuc29tZShmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgIHJldHVybiBfZmllbGRzW25hbWVdLmRpcnR5O1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdnZXRWYWx1ZXMnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFZhbHVlcygpIHtcbiAgICAgICAgdmFyIF9maWVsZHMgPSB0aGlzLnByb3BzLl9maWVsZHM7XG5cbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKF9maWVsZHMpLnJlZHVjZShmdW5jdGlvbiAoYWNjdW11bGF0b3IsIG5hbWUpIHtcbiAgICAgICAgICByZXR1cm4gX3BsYWluMi5kZWZhdWx0LnNldEluKGFjY3VtdWxhdG9yLCBuYW1lLCBfZmllbGRzW25hbWVdLnZhbHVlKTtcbiAgICAgICAgfSwge30pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2dldFJlbmRlcmVkQ29tcG9uZW50JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRSZW5kZXJlZENvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVmcy5yZW5kZXJlZENvbXBvbmVudDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdoYW5kbGVDaGFuZ2UnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShuYW1lLCBldmVudCkge1xuICAgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGRpc3BhdGNoID0gX3Byb3BzLmRpc3BhdGNoLFxuICAgICAgICAgICAgcGFyc2UgPSBfcHJvcHMucGFyc2UsXG4gICAgICAgICAgICBub3JtYWxpemUgPSBfcHJvcHMubm9ybWFsaXplLFxuICAgICAgICAgICAgX3JlZHV4Rm9ybSA9IF9wcm9wcy5fcmVkdXhGb3JtO1xuXG4gICAgICAgIHZhciB2YWx1ZSA9ICgwLCBfb25DaGFuZ2VWYWx1ZTIuZGVmYXVsdCkoZXZlbnQsIHsgbmFtZTogbmFtZSwgcGFyc2U6IHBhcnNlLCBub3JtYWxpemU6IG5vcm1hbGl6ZSB9KTtcblxuICAgICAgICBkaXNwYXRjaChfcmVkdXhGb3JtLmNoYW5nZShuYW1lLCB2YWx1ZSkpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2hhbmRsZUZvY3VzJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVGb2N1cyhuYW1lKSB7XG4gICAgICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGRpc3BhdGNoID0gX3Byb3BzMi5kaXNwYXRjaCxcbiAgICAgICAgICAgIF9yZWR1eEZvcm0gPSBfcHJvcHMyLl9yZWR1eEZvcm07XG5cbiAgICAgICAgZGlzcGF0Y2goX3JlZHV4Rm9ybS5mb2N1cyhuYW1lKSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnaGFuZGxlQmx1cicsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlQmx1cihuYW1lLCBldmVudCkge1xuICAgICAgICB2YXIgX3Byb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBkaXNwYXRjaCA9IF9wcm9wczMuZGlzcGF0Y2gsXG4gICAgICAgICAgICBwYXJzZSA9IF9wcm9wczMucGFyc2UsXG4gICAgICAgICAgICBub3JtYWxpemUgPSBfcHJvcHMzLm5vcm1hbGl6ZSxcbiAgICAgICAgICAgIF9yZWR1eEZvcm0gPSBfcHJvcHMzLl9yZWR1eEZvcm07XG5cbiAgICAgICAgdmFyIHZhbHVlID0gKDAsIF9vbkNoYW5nZVZhbHVlMi5kZWZhdWx0KShldmVudCwgeyBuYW1lOiBuYW1lLCBwYXJzZTogcGFyc2UsIG5vcm1hbGl6ZTogbm9ybWFsaXplIH0pO1xuXG4gICAgICAgIC8vIGRpc3BhdGNoIGJsdXIgYWN0aW9uXG4gICAgICAgIGRpc3BhdGNoKF9yZWR1eEZvcm0uYmx1cihuYW1lLCB2YWx1ZSkpO1xuXG4gICAgICAgIC8vIGNhbGwgcG9zdC1ibHVyIGNhbGxiYWNrXG4gICAgICAgIGlmIChfcmVkdXhGb3JtLmFzeW5jVmFsaWRhdGUpIHtcbiAgICAgICAgICBfcmVkdXhGb3JtLmFzeW5jVmFsaWRhdGUobmFtZSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICAgIHZhciBfcHJvcHM0ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGNvbXBvbmVudCA9IF9wcm9wczQuY29tcG9uZW50LFxuICAgICAgICAgICAgd2l0aFJlZiA9IF9wcm9wczQud2l0aFJlZixcbiAgICAgICAgICAgIF9maWVsZHMgPSBfcHJvcHM0Ll9maWVsZHMsXG4gICAgICAgICAgICBfcmVkdXhGb3JtID0gX3Byb3BzNC5fcmVkdXhGb3JtLFxuICAgICAgICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHM0LCBbJ2NvbXBvbmVudCcsICd3aXRoUmVmJywgJ19maWVsZHMnLCAnX3JlZHV4Rm9ybSddKTtcblxuICAgICAgICB2YXIgc2VjdGlvblByZWZpeCA9IF9yZWR1eEZvcm0uc2VjdGlvblByZWZpeCxcbiAgICAgICAgICAgIGZvcm0gPSBfcmVkdXhGb3JtLmZvcm07XG5cbiAgICAgICAgdmFyIF9PYmplY3Qka2V5cyRyZWR1Y2UgPSBPYmplY3Qua2V5cyhfZmllbGRzKS5yZWR1Y2UoZnVuY3Rpb24gKGFjY3VtdWxhdG9yLCBuYW1lKSB7XG4gICAgICAgICAgdmFyIGNvbm5lY3RlZFByb3BzID0gX2ZpZWxkc1tuYW1lXTtcblxuICAgICAgICAgIHZhciBfY3JlYXRlRmllbGRQcm9wcyA9ICgwLCBfY3JlYXRlRmllbGRQcm9wczMuZGVmYXVsdCkoeyBnZXRJbjogZ2V0SW4sIHRvSlM6IHRvSlMgfSwgbmFtZSwgX2V4dGVuZHMoe30sIGNvbm5lY3RlZFByb3BzLCByZXN0LCB7XG4gICAgICAgICAgICBmb3JtOiBmb3JtLFxuICAgICAgICAgICAgb25CbHVyOiBfdGhpczQub25CbHVyRm5zW25hbWVdLFxuICAgICAgICAgICAgb25DaGFuZ2U6IF90aGlzNC5vbkNoYW5nZUZuc1tuYW1lXSxcbiAgICAgICAgICAgIG9uRm9jdXM6IF90aGlzNC5vbkZvY3VzRm5zW25hbWVdXG4gICAgICAgICAgfSkpLFxuICAgICAgICAgICAgICBjdXN0b20gPSBfY3JlYXRlRmllbGRQcm9wcy5jdXN0b20sXG4gICAgICAgICAgICAgIGZpZWxkUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX2NyZWF0ZUZpZWxkUHJvcHMsIFsnY3VzdG9tJ10pO1xuXG4gICAgICAgICAgYWNjdW11bGF0b3IuY3VzdG9tID0gY3VzdG9tO1xuICAgICAgICAgIHZhciBmaWVsZE5hbWUgPSBzZWN0aW9uUHJlZml4ID8gbmFtZS5yZXBsYWNlKHNlY3Rpb25QcmVmaXggKyAnLicsICcnKSA6IG5hbWU7XG4gICAgICAgICAgcmV0dXJuIF9wbGFpbjIuZGVmYXVsdC5zZXRJbihhY2N1bXVsYXRvciwgZmllbGROYW1lLCBmaWVsZFByb3BzKTtcbiAgICAgICAgfSwge30pLFxuICAgICAgICAgICAgY3VzdG9tID0gX09iamVjdCRrZXlzJHJlZHVjZS5jdXN0b20sXG4gICAgICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfT2JqZWN0JGtleXMkcmVkdWNlLCBbJ2N1c3RvbSddKTtcblxuICAgICAgICBpZiAod2l0aFJlZikge1xuICAgICAgICAgIHByb3BzLnJlZiA9ICdyZW5kZXJlZENvbXBvbmVudCc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKDAsIF9yZWFjdC5jcmVhdGVFbGVtZW50KShjb21wb25lbnQsIF9leHRlbmRzKHt9LCBwcm9wcywgY3VzdG9tKSk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIENvbm5lY3RlZEZpZWxkcztcbiAgfShfcmVhY3QuQ29tcG9uZW50KTtcblxuICBDb25uZWN0ZWRGaWVsZHMucHJvcFR5cGVzID0ge1xuICAgIGNvbXBvbmVudDogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYywgX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmddKS5pc1JlcXVpcmVkLFxuICAgIF9maWVsZHM6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgcHJvcHM6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XG4gIH07XG5cbiAgdmFyIGNvbm5lY3RvciA9ICgwLCBfcmVhY3RSZWR1eC5jb25uZWN0KShmdW5jdGlvbiAoc3RhdGUsIG93blByb3BzKSB7XG4gICAgdmFyIG5hbWVzID0gb3duUHJvcHMubmFtZXMsXG4gICAgICAgIF9vd25Qcm9wcyRfcmVkdXhGb3JtID0gb3duUHJvcHMuX3JlZHV4Rm9ybSxcbiAgICAgICAgaW5pdGlhbFZhbHVlcyA9IF9vd25Qcm9wcyRfcmVkdXhGb3JtLmluaXRpYWxWYWx1ZXMsXG4gICAgICAgIGdldEZvcm1TdGF0ZSA9IF9vd25Qcm9wcyRfcmVkdXhGb3JtLmdldEZvcm1TdGF0ZTtcblxuICAgIHZhciBmb3JtU3RhdGUgPSBnZXRGb3JtU3RhdGUoc3RhdGUpO1xuICAgIHJldHVybiB7XG4gICAgICBfZmllbGRzOiBuYW1lcy5yZWR1Y2UoZnVuY3Rpb24gKGFjY3VtdWxhdG9yLCBuYW1lKSB7XG4gICAgICAgIHZhciBpbml0aWFsU3RhdGUgPSBnZXRJbihmb3JtU3RhdGUsICdpbml0aWFsLicgKyBuYW1lKTtcbiAgICAgICAgdmFyIGluaXRpYWwgPSBpbml0aWFsU3RhdGUgIT09IHVuZGVmaW5lZCA/IGluaXRpYWxTdGF0ZSA6IGluaXRpYWxWYWx1ZXMgJiYgZ2V0SW4oaW5pdGlhbFZhbHVlcywgbmFtZSk7XG4gICAgICAgIHZhciB2YWx1ZSA9IGdldEluKGZvcm1TdGF0ZSwgJ3ZhbHVlcy4nICsgbmFtZSk7XG4gICAgICAgIHZhciBzeW5jRXJyb3IgPSBnZXRTeW5jRXJyb3IoZ2V0SW4oZm9ybVN0YXRlLCAnc3luY0Vycm9ycycpLCBuYW1lKTtcbiAgICAgICAgdmFyIHN5bmNXYXJuaW5nID0gZ2V0U3luY1dhcm5pbmcoZ2V0SW4oZm9ybVN0YXRlLCAnc3luY1dhcm5pbmdzJyksIG5hbWUpO1xuICAgICAgICB2YXIgc3VibWl0dGluZyA9IGdldEluKGZvcm1TdGF0ZSwgJ3N1Ym1pdHRpbmcnKTtcbiAgICAgICAgdmFyIHByaXN0aW5lID0gdmFsdWUgPT09IGluaXRpYWw7XG4gICAgICAgIGFjY3VtdWxhdG9yW25hbWVdID0ge1xuICAgICAgICAgIGFzeW5jRXJyb3I6IGdldEluKGZvcm1TdGF0ZSwgJ2FzeW5jRXJyb3JzLicgKyBuYW1lKSxcbiAgICAgICAgICBhc3luY1ZhbGlkYXRpbmc6IGdldEluKGZvcm1TdGF0ZSwgJ2FzeW5jVmFsaWRhdGluZycpID09PSBuYW1lLFxuICAgICAgICAgIGRpcnR5OiAhcHJpc3RpbmUsXG4gICAgICAgICAgcHJpc3RpbmU6IHByaXN0aW5lLFxuICAgICAgICAgIHN0YXRlOiBnZXRJbihmb3JtU3RhdGUsICdmaWVsZHMuJyArIG5hbWUpLFxuICAgICAgICAgIHN1Ym1pdEVycm9yOiBnZXRJbihmb3JtU3RhdGUsICdzdWJtaXRFcnJvcnMuJyArIG5hbWUpLFxuICAgICAgICAgIHN1Ym1pdEZhaWxlZDogZ2V0SW4oZm9ybVN0YXRlLCAnc3VibWl0RmFpbGVkJyksXG4gICAgICAgICAgc3VibWl0dGluZzogc3VibWl0dGluZyxcbiAgICAgICAgICBzeW5jRXJyb3I6IHN5bmNFcnJvcixcbiAgICAgICAgICBzeW5jV2FybmluZzogc3luY1dhcm5pbmcsXG4gICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgIF92YWx1ZTogb3duUHJvcHMudmFsdWUgLy8gc2F2ZSB2YWx1ZSBwYXNzZWQgaW4gKGZvciBjaGVja2JveGVzKVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gYWNjdW11bGF0b3I7XG4gICAgICB9LCB7fSlcbiAgICB9O1xuICB9LCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgeyB3aXRoUmVmOiB0cnVlIH0pO1xuICByZXR1cm4gY29ubmVjdG9yKENvbm5lY3RlZEZpZWxkcyk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVDb25uZWN0ZWRGaWVsZHM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4LWZvcm0vbGliL0Nvbm5lY3RlZEZpZWxkcy5qc1xuLy8gbW9kdWxlIGlkID0gMTkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVGaWVsZCA9IHJlcXVpcmUoJy4vY3JlYXRlRmllbGQnKTtcblxudmFyIF9jcmVhdGVGaWVsZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVGaWVsZCk7XG5cbnZhciBfcGxhaW4gPSByZXF1aXJlKCcuL3N0cnVjdHVyZS9wbGFpbicpO1xuXG52YXIgX3BsYWluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BsYWluKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gKDAsIF9jcmVhdGVGaWVsZDIuZGVmYXVsdCkoX3BsYWluMi5kZWZhdWx0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtZm9ybS9saWIvRmllbGQuanNcbi8vIG1vZHVsZSBpZCA9IDE5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlRmllbGRBcnJheSA9IHJlcXVpcmUoJy4vY3JlYXRlRmllbGRBcnJheScpO1xuXG52YXIgX2NyZWF0ZUZpZWxkQXJyYXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlRmllbGRBcnJheSk7XG5cbnZhciBfcGxhaW4gPSByZXF1aXJlKCcuL3N0cnVjdHVyZS9wbGFpbicpO1xuXG52YXIgX3BsYWluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BsYWluKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gKDAsIF9jcmVhdGVGaWVsZEFycmF5Mi5kZWZhdWx0KShfcGxhaW4yLmRlZmF1bHQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC1mb3JtL2xpYi9GaWVsZEFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAxOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUZpZWxkcyA9IHJlcXVpcmUoJy4vY3JlYXRlRmllbGRzJyk7XG5cbnZhciBfY3JlYXRlRmllbGRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUZpZWxkcyk7XG5cbnZhciBfcGxhaW4gPSByZXF1aXJlKCcuL3N0cnVjdHVyZS9wbGFpbicpO1xuXG52YXIgX3BsYWluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BsYWluKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gKDAsIF9jcmVhdGVGaWVsZHMyLmRlZmF1bHQpKF9wbGFpbjIuZGVmYXVsdCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4LWZvcm0vbGliL0ZpZWxkcy5qc1xuLy8gbW9kdWxlIGlkID0gMTkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgRm9ybSA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhGb3JtLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBGb3JtKHByb3BzLCBjb250ZXh0KSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZvcm0pO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEZvcm0uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihGb3JtKSkuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCkpO1xuXG4gICAgaWYgKCFjb250ZXh0Ll9yZWR1eEZvcm0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRm9ybSBtdXN0IGJlIGluc2lkZSBhIGNvbXBvbmVudCBkZWNvcmF0ZWQgd2l0aCByZWR1eEZvcm0oKScpO1xuICAgIH1cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRm9ybSwgW3tcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICB0aGlzLmNvbnRleHQuX3JlZHV4Rm9ybS5yZWdpc3RlcklubmVyT25TdWJtaXQodGhpcy5wcm9wcy5vblN1Ym1pdCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdmb3JtJywgdGhpcy5wcm9wcyk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEZvcm07XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5Gb3JtLnByb3BUeXBlcyA9IHtcbiAgb25TdWJtaXQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYy5pc1JlcXVpcmVkXG59O1xuRm9ybS5jb250ZXh0VHlwZXMgPSB7XG4gIF9yZWR1eEZvcm06IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBGb3JtO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC1mb3JtL2xpYi9Gb3JtLmpzXG4vLyBtb2R1bGUgaWQgPSAxOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3ByZWZpeE5hbWUgPSByZXF1aXJlKCcuL3V0aWwvcHJlZml4TmFtZScpO1xuXG52YXIgX3ByZWZpeE5hbWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlZml4TmFtZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgRm9ybVNlY3Rpb24gPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoRm9ybVNlY3Rpb24sIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEZvcm1TZWN0aW9uKHByb3BzLCBjb250ZXh0KSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZvcm1TZWN0aW9uKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChGb3JtU2VjdGlvbi5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEZvcm1TZWN0aW9uKSkuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCkpO1xuXG4gICAgaWYgKCFjb250ZXh0Ll9yZWR1eEZvcm0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRm9ybVNlY3Rpb24gbXVzdCBiZSBpbnNpZGUgYSBjb21wb25lbnQgZGVjb3JhdGVkIHdpdGggcmVkdXhGb3JtKCknKTtcbiAgICB9XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEZvcm1TZWN0aW9uLCBbe1xuICAgIGtleTogJ2dldENoaWxkQ29udGV4dCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICAgIG5hbWUgPSB0aGlzLnByb3BzLm5hbWU7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIF9yZWR1eEZvcm06IF9leHRlbmRzKHt9LCBjb250ZXh0Ll9yZWR1eEZvcm0sIHtcbiAgICAgICAgICBzZWN0aW9uUHJlZml4OiAoMCwgX3ByZWZpeE5hbWUyLmRlZmF1bHQpKGNvbnRleHQsIG5hbWUpXG4gICAgICAgIH0pXG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICAgIG5hbWUgPSBfcHJvcHMubmFtZSxcbiAgICAgICAgICBjb21wb25lbnQgPSBfcHJvcHMuY29tcG9uZW50LFxuICAgICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ2NoaWxkcmVuJywgJ25hbWUnLCAnY29tcG9uZW50J10pO1xuXG4gICAgICBpZiAoX3JlYWN0Mi5kZWZhdWx0LmlzVmFsaWRFbGVtZW50KGNoaWxkcmVuKSkge1xuICAgICAgICByZXR1cm4gY2hpbGRyZW47XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoMCwgX3JlYWN0LmNyZWF0ZUVsZW1lbnQpKGNvbXBvbmVudCwgX2V4dGVuZHMoe30sIHJlc3QsIHtcbiAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gICAgICB9KSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEZvcm1TZWN0aW9uO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuRm9ybVNlY3Rpb24ucHJvcFR5cGVzID0ge1xuICBuYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZy5pc1JlcXVpcmVkLFxuICBjb21wb25lbnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsIF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nXSlcbn07XG5cbkZvcm1TZWN0aW9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgY29tcG9uZW50OiAnZGl2J1xufTtcblxuRm9ybVNlY3Rpb24uY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gIF9yZWR1eEZvcm06IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5cbkZvcm1TZWN0aW9uLmNvbnRleHRUeXBlcyA9IHtcbiAgX3JlZHV4Rm9ybTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3Rcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEZvcm1TZWN0aW9uO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC1mb3JtL2xpYi9Gb3JtU2VjdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMTk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9pc1Byb21pc2UgPSByZXF1aXJlKCdpcy1wcm9taXNlJyk7XG5cbnZhciBfaXNQcm9taXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzUHJvbWlzZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBhc3luY1ZhbGlkYXRpb24gPSBmdW5jdGlvbiBhc3luY1ZhbGlkYXRpb24oZm4sIHN0YXJ0LCBzdG9wLCBmaWVsZCkge1xuICBzdGFydChmaWVsZCk7XG4gIHZhciBwcm9taXNlID0gZm4oKTtcbiAgaWYgKCEoMCwgX2lzUHJvbWlzZTIuZGVmYXVsdCkocHJvbWlzZSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2FzeW5jVmFsaWRhdGUgZnVuY3Rpb24gcGFzc2VkIHRvIHJlZHV4Rm9ybSBtdXN0IHJldHVybiBhIHByb21pc2UnKTtcbiAgfVxuICB2YXIgaGFuZGxlRXJyb3JzID0gZnVuY3Rpb24gaGFuZGxlRXJyb3JzKHJlamVjdGVkKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChlcnJvcnMpIHtcbiAgICAgIGlmIChlcnJvcnMgJiYgT2JqZWN0LmtleXMoZXJyb3JzKS5sZW5ndGgpIHtcbiAgICAgICAgc3RvcChlcnJvcnMpO1xuICAgICAgICByZXR1cm4gZXJyb3JzO1xuICAgICAgfSBlbHNlIGlmIChyZWplY3RlZCkge1xuICAgICAgICBzdG9wKCk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQXN5bmNocm9ub3VzIHZhbGlkYXRpb24gcHJvbWlzZSB3YXMgcmVqZWN0ZWQgd2l0aG91dCBlcnJvcnMuJyk7XG4gICAgICB9XG4gICAgICBzdG9wKCk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfTtcbiAgfTtcbiAgcmV0dXJuIHByb21pc2UudGhlbihoYW5kbGVFcnJvcnMoZmFsc2UpLCBoYW5kbGVFcnJvcnModHJ1ZSkpO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gYXN5bmNWYWxpZGF0aW9uO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC1mb3JtL2xpYi9hc3luY1ZhbGlkYXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IDE5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIF9Db25uZWN0ZWRGaWVsZCA9IHJlcXVpcmUoJy4vQ29ubmVjdGVkRmllbGQnKTtcblxudmFyIF9Db25uZWN0ZWRGaWVsZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db25uZWN0ZWRGaWVsZCk7XG5cbnZhciBfc2hhbGxvd0NvbXBhcmUgPSByZXF1aXJlKCcuL3V0aWwvc2hhbGxvd0NvbXBhcmUnKTtcblxudmFyIF9zaGFsbG93Q29tcGFyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaGFsbG93Q29tcGFyZSk7XG5cbnZhciBfcHJlZml4TmFtZSA9IHJlcXVpcmUoJy4vdXRpbC9wcmVmaXhOYW1lJyk7XG5cbnZhciBfcHJlZml4TmFtZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVmaXhOYW1lKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgY3JlYXRlRmllbGQgPSBmdW5jdGlvbiBjcmVhdGVGaWVsZChfcmVmKSB7XG4gIHZhciBkZWVwRXF1YWwgPSBfcmVmLmRlZXBFcXVhbCxcbiAgICAgIGdldEluID0gX3JlZi5nZXRJbixcbiAgICAgIHNldEluID0gX3JlZi5zZXRJbixcbiAgICAgIHRvSlMgPSBfcmVmLnRvSlM7XG5cbiAgdmFyIENvbm5lY3RlZEZpZWxkID0gKDAsIF9Db25uZWN0ZWRGaWVsZDIuZGVmYXVsdCkoe1xuICAgIGRlZXBFcXVhbDogZGVlcEVxdWFsLFxuICAgIGdldEluOiBnZXRJbixcbiAgICB0b0pTOiB0b0pTXG4gIH0pO1xuXG4gIHZhciBGaWVsZCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKEZpZWxkLCBfQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIEZpZWxkKHByb3BzLCBjb250ZXh0KSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRmllbGQpO1xuXG4gICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoRmllbGQuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihGaWVsZCkpLmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpKTtcblxuICAgICAgaWYgKCFjb250ZXh0Ll9yZWR1eEZvcm0pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGaWVsZCBtdXN0IGJlIGluc2lkZSBhIGNvbXBvbmVudCBkZWNvcmF0ZWQgd2l0aCByZWR1eEZvcm0oKScpO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5ub3JtYWxpemUgPSBfdGhpcy5ub3JtYWxpemUuYmluZChfdGhpcyk7XG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEZpZWxkLCBbe1xuICAgICAga2V5OiAnc2hvdWxkQ29tcG9uZW50VXBkYXRlJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfc2hhbGxvd0NvbXBhcmUyLmRlZmF1bHQpKHRoaXMsIG5leHRQcm9wcywgbmV4dFN0YXRlKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdjb21wb25lbnRXaWxsTW91bnQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5jb250ZXh0Ll9yZWR1eEZvcm0ucmVnaXN0ZXIodGhpcy5uYW1lLCAnRmllbGQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMi5wcm9wcy52YWxpZGF0ZTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczIucHJvcHMud2FybjtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubmFtZSAhPT0gbmV4dFByb3BzLm5hbWUpIHtcbiAgICAgICAgICAvLyB1bnJlZ2lzdGVyIG9sZCBuYW1lXG4gICAgICAgICAgdGhpcy5jb250ZXh0Ll9yZWR1eEZvcm0udW5yZWdpc3Rlcih0aGlzLm5hbWUpO1xuICAgICAgICAgIC8vIHJlZ2lzdGVyIG5ldyBuYW1lXG4gICAgICAgICAgdGhpcy5jb250ZXh0Ll9yZWR1eEZvcm0ucmVnaXN0ZXIoKDAsIF9wcmVmaXhOYW1lMi5kZWZhdWx0KSh0aGlzLmNvbnRleHQsIG5leHRQcm9wcy5uYW1lKSwgJ0ZpZWxkJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5fcmVkdXhGb3JtLnVucmVnaXN0ZXIodGhpcy5uYW1lKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdnZXRSZW5kZXJlZENvbXBvbmVudCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UmVuZGVyZWRDb21wb25lbnQoKSB7XG4gICAgICAgICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KSh0aGlzLnByb3BzLndpdGhSZWYsICdJZiB5b3Ugd2FudCB0byBhY2Nlc3MgZ2V0UmVuZGVyZWRDb21wb25lbnQoKSwgJyArICd5b3UgbXVzdCBzcGVjaWZ5IGEgd2l0aFJlZiBwcm9wIHRvIEZpZWxkJyk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZnMuY29ubmVjdGVkLmdldFdyYXBwZWRJbnN0YW5jZSgpLmdldFJlbmRlcmVkQ29tcG9uZW50KCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnbm9ybWFsaXplJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBub3JtYWxpemUobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIG5vcm1hbGl6ZSA9IHRoaXMucHJvcHMubm9ybWFsaXplO1xuXG4gICAgICAgIGlmICghbm9ybWFsaXplKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwcmV2aW91c1ZhbHVlcyA9IHRoaXMuY29udGV4dC5fcmVkdXhGb3JtLmdldFZhbHVlcygpO1xuICAgICAgICB2YXIgcHJldmlvdXNWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgIHZhciBuZXh0VmFsdWVzID0gc2V0SW4ocHJldmlvdXNWYWx1ZXMsIG5hbWUsIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZSh2YWx1ZSwgcHJldmlvdXNWYWx1ZSwgbmV4dFZhbHVlcywgcHJldmlvdXNWYWx1ZXMpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKDAsIF9yZWFjdC5jcmVhdGVFbGVtZW50KShDb25uZWN0ZWRGaWVsZCwgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgbm9ybWFsaXplOiB0aGlzLm5vcm1hbGl6ZSxcbiAgICAgICAgICBfcmVkdXhGb3JtOiB0aGlzLmNvbnRleHQuX3JlZHV4Rm9ybSxcbiAgICAgICAgICByZWY6ICdjb25uZWN0ZWQnXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICduYW1lJyxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gKDAsIF9wcmVmaXhOYW1lMi5kZWZhdWx0KSh0aGlzLmNvbnRleHQsIHRoaXMucHJvcHMubmFtZSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnZGlydHknLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5wcmlzdGluZTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdwcmlzdGluZScsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVmcy5jb25uZWN0ZWQuZ2V0V3JhcHBlZEluc3RhbmNlKCkuaXNQcmlzdGluZSgpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3ZhbHVlJyxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWZzLmNvbm5lY3RlZCAmJiB0aGlzLnJlZnMuY29ubmVjdGVkLmdldFdyYXBwZWRJbnN0YW5jZSgpLmdldFZhbHVlKCk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEZpZWxkO1xuICB9KF9yZWFjdC5Db21wb25lbnQpO1xuXG4gIEZpZWxkLnByb3BUeXBlcyA9IHtcbiAgICBuYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGNvbXBvbmVudDogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYywgX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmddKS5pc1JlcXVpcmVkLFxuICAgIGZvcm1hdDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAgIG5vcm1hbGl6ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAgIG9uQmx1cjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAgIG9uQ2hhbmdlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gICAgb25Gb2N1czogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAgIG9uRHJhZ1N0YXJ0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gICAgb25Ecm9wOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gICAgcGFyc2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgICBwcm9wczogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gICAgdmFsaWRhdGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsIF9wcm9wVHlwZXMyLmRlZmF1bHQuYXJyYXlPZihfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMpXSksXG4gICAgd2FybjogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYywgX3Byb3BUeXBlczIuZGVmYXVsdC5hcnJheU9mKF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyldKSxcbiAgICB3aXRoUmVmOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2xcbiAgfTtcbiAgRmllbGQuY29udGV4dFR5cGVzID0ge1xuICAgIF9yZWR1eEZvcm06IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XG4gIH07XG5cbiAgcmV0dXJuIEZpZWxkO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlRmllbGQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4LWZvcm0vbGliL2NyZWF0ZUZpZWxkLmpzXG4vLyBtb2R1bGUgaWQgPSAxOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBfQ29ubmVjdGVkRmllbGRBcnJheSA9IHJlcXVpcmUoJy4vQ29ubmVjdGVkRmllbGRBcnJheScpO1xuXG52YXIgX0Nvbm5lY3RlZEZpZWxkQXJyYXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29ubmVjdGVkRmllbGRBcnJheSk7XG5cbnZhciBfcHJlZml4TmFtZSA9IHJlcXVpcmUoJy4vdXRpbC9wcmVmaXhOYW1lJyk7XG5cbnZhciBfcHJlZml4TmFtZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVmaXhOYW1lKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgdG9BcnJheSA9IGZ1bmN0aW9uIHRvQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdO1xufTtcblxudmFyIHdyYXBFcnJvciA9IGZ1bmN0aW9uIHdyYXBFcnJvcihmbiwga2V5KSB7XG4gIHJldHVybiBmbiAmJiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbGlkYXRvcnMgPSB0b0FycmF5KGZuKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbGlkYXRvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciByZXN1bHQgPSB2YWxpZGF0b3JzW2ldLmFwcGx5KHZhbGlkYXRvcnMsIGFyZ3VtZW50cyk7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHJldHVybiBfZGVmaW5lUHJvcGVydHkoe30sIGtleSwgcmVzdWx0KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xuXG52YXIgY3JlYXRlRmllbGRBcnJheSA9IGZ1bmN0aW9uIGNyZWF0ZUZpZWxkQXJyYXkoX3JlZjIpIHtcbiAgdmFyIGRlZXBFcXVhbCA9IF9yZWYyLmRlZXBFcXVhbCxcbiAgICAgIGdldEluID0gX3JlZjIuZ2V0SW4sXG4gICAgICBzaXplID0gX3JlZjIuc2l6ZTtcblxuICB2YXIgQ29ubmVjdGVkRmllbGRBcnJheSA9ICgwLCBfQ29ubmVjdGVkRmllbGRBcnJheTIuZGVmYXVsdCkoe1xuICAgIGRlZXBFcXVhbDogZGVlcEVxdWFsLFxuICAgIGdldEluOiBnZXRJbixcbiAgICBzaXplOiBzaXplXG4gIH0pO1xuXG4gIHZhciBGaWVsZEFycmF5ID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoRmllbGRBcnJheSwgX0NvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBGaWVsZEFycmF5KHByb3BzLCBjb250ZXh0KSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRmllbGRBcnJheSk7XG5cbiAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChGaWVsZEFycmF5Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRmllbGRBcnJheSkpLmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpKTtcblxuICAgICAgaWYgKCFjb250ZXh0Ll9yZWR1eEZvcm0pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGaWVsZEFycmF5IG11c3QgYmUgaW5zaWRlIGEgY29tcG9uZW50IGRlY29yYXRlZCB3aXRoIHJlZHV4Rm9ybSgpJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEZpZWxkQXJyYXksIFt7XG4gICAgICBrZXk6ICdjb21wb25lbnRXaWxsTW91bnQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5jb250ZXh0Ll9yZWR1eEZvcm0ucmVnaXN0ZXIodGhpcy5uYW1lLCAnRmllbGRBcnJheScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gd3JhcEVycm9yKF90aGlzMi5wcm9wcy52YWxpZGF0ZSwgJ19lcnJvcicpO1xuICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHdyYXBFcnJvcihfdGhpczIucHJvcHMud2FybiwgJ193YXJuaW5nJyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm5hbWUgIT09IG5leHRQcm9wcy5uYW1lKSB7XG4gICAgICAgICAgLy8gdW5yZWdpc3RlciBvbGQgbmFtZVxuICAgICAgICAgIHRoaXMuY29udGV4dC5fcmVkdXhGb3JtLnVucmVnaXN0ZXIodGhpcy5uYW1lKTtcbiAgICAgICAgICAvLyByZWdpc3RlciBuZXcgbmFtZVxuICAgICAgICAgIHRoaXMuY29udGV4dC5fcmVkdXhGb3JtLnJlZ2lzdGVyKCgwLCBfcHJlZml4TmFtZTIuZGVmYXVsdCkodGhpcy5jb250ZXh0LCBuZXh0UHJvcHMubmFtZSksICdGaWVsZEFycmF5Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5fcmVkdXhGb3JtLnVucmVnaXN0ZXIodGhpcy5uYW1lKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdnZXRSZW5kZXJlZENvbXBvbmVudCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UmVuZGVyZWRDb21wb25lbnQoKSB7XG4gICAgICAgICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KSh0aGlzLnByb3BzLndpdGhSZWYsICdJZiB5b3Ugd2FudCB0byBhY2Nlc3MgZ2V0UmVuZGVyZWRDb21wb25lbnQoKSwgJyArICd5b3UgbXVzdCBzcGVjaWZ5IGEgd2l0aFJlZiBwcm9wIHRvIEZpZWxkQXJyYXknKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVmcy5jb25uZWN0ZWQuZ2V0V3JhcHBlZEluc3RhbmNlKCkuZ2V0UmVuZGVyZWRDb21wb25lbnQoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfcmVhY3QuY3JlYXRlRWxlbWVudCkoQ29ubmVjdGVkRmllbGRBcnJheSwgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgc3luY0Vycm9yOiB0aGlzLnN5bmNFcnJvcixcbiAgICAgICAgICBzeW5jV2FybmluZzogdGhpcy5zeW5jV2FybmluZyxcbiAgICAgICAgICBfcmVkdXhGb3JtOiB0aGlzLmNvbnRleHQuX3JlZHV4Rm9ybSxcbiAgICAgICAgICByZWY6ICdjb25uZWN0ZWQnXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICduYW1lJyxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gKDAsIF9wcmVmaXhOYW1lMi5kZWZhdWx0KSh0aGlzLmNvbnRleHQsIHRoaXMucHJvcHMubmFtZSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnZGlydHknLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZnMuY29ubmVjdGVkLmdldFdyYXBwZWRJbnN0YW5jZSgpLmRpcnR5O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3ByaXN0aW5lJyxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWZzLmNvbm5lY3RlZC5nZXRXcmFwcGVkSW5zdGFuY2UoKS5wcmlzdGluZTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICd2YWx1ZScsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVmcy5jb25uZWN0ZWQuZ2V0V3JhcHBlZEluc3RhbmNlKCkudmFsdWU7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEZpZWxkQXJyYXk7XG4gIH0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbiAgRmllbGRBcnJheS5wcm9wVHlwZXMgPSB7XG4gICAgbmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBjb21wb25lbnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHByb3BzOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgICB2YWxpZGF0ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYywgX3Byb3BUeXBlczIuZGVmYXVsdC5hcnJheU9mKF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyldKSxcbiAgICB3YXJuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLCBfcHJvcFR5cGVzMi5kZWZhdWx0LmFycmF5T2YoX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jKV0pLFxuICAgIHdpdGhSZWY6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbFxuICB9O1xuICBGaWVsZEFycmF5LmNvbnRleHRUeXBlcyA9IHtcbiAgICBfcmVkdXhGb3JtOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdFxuICB9O1xuXG4gIHJldHVybiBGaWVsZEFycmF5O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlRmllbGRBcnJheTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtZm9ybS9saWIvY3JlYXRlRmllbGRBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMTk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG52YXIgY3JlYXRlRmllbGRBcnJheVByb3BzID0gZnVuY3Rpb24gY3JlYXRlRmllbGRBcnJheVByb3BzKGdldEluLCBuYW1lLCBmb3JtLCBzZWN0aW9uUHJlZml4LCBnZXRWYWx1ZSwgX3JlZikge1xuICB2YXIgYXJyYXlJbnNlcnQgPSBfcmVmLmFycmF5SW5zZXJ0LFxuICAgICAgYXJyYXlNb3ZlID0gX3JlZi5hcnJheU1vdmUsXG4gICAgICBhcnJheVBvcCA9IF9yZWYuYXJyYXlQb3AsXG4gICAgICBhcnJheVB1c2ggPSBfcmVmLmFycmF5UHVzaCxcbiAgICAgIGFycmF5UmVtb3ZlID0gX3JlZi5hcnJheVJlbW92ZSxcbiAgICAgIGFycmF5UmVtb3ZlQWxsID0gX3JlZi5hcnJheVJlbW92ZUFsbCxcbiAgICAgIGFycmF5U2hpZnQgPSBfcmVmLmFycmF5U2hpZnQsXG4gICAgICBhcnJheVNwbGljZSA9IF9yZWYuYXJyYXlTcGxpY2UsXG4gICAgICBhcnJheVN3YXAgPSBfcmVmLmFycmF5U3dhcCxcbiAgICAgIGFycmF5VW5zaGlmdCA9IF9yZWYuYXJyYXlVbnNoaWZ0LFxuICAgICAgYXN5bmNFcnJvciA9IF9yZWYuYXN5bmNFcnJvcixcbiAgICAgIGRpcnR5ID0gX3JlZi5kaXJ0eSxcbiAgICAgIGxlbmd0aCA9IF9yZWYubGVuZ3RoLFxuICAgICAgcHJpc3RpbmUgPSBfcmVmLnByaXN0aW5lLFxuICAgICAgc3VibWl0RXJyb3IgPSBfcmVmLnN1Ym1pdEVycm9yLFxuICAgICAgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgc3VibWl0RmFpbGVkID0gX3JlZi5zdWJtaXRGYWlsZWQsXG4gICAgICBzdWJtaXR0aW5nID0gX3JlZi5zdWJtaXR0aW5nLFxuICAgICAgc3luY0Vycm9yID0gX3JlZi5zeW5jRXJyb3IsXG4gICAgICBzeW5jV2FybmluZyA9IF9yZWYuc3luY1dhcm5pbmcsXG4gICAgICB2YWx1ZSA9IF9yZWYudmFsdWUsXG4gICAgICBwcm9wcyA9IF9yZWYucHJvcHMsXG4gICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFsnYXJyYXlJbnNlcnQnLCAnYXJyYXlNb3ZlJywgJ2FycmF5UG9wJywgJ2FycmF5UHVzaCcsICdhcnJheVJlbW92ZScsICdhcnJheVJlbW92ZUFsbCcsICdhcnJheVNoaWZ0JywgJ2FycmF5U3BsaWNlJywgJ2FycmF5U3dhcCcsICdhcnJheVVuc2hpZnQnLCAnYXN5bmNFcnJvcicsICdkaXJ0eScsICdsZW5ndGgnLCAncHJpc3RpbmUnLCAnc3VibWl0RXJyb3InLCAnc3RhdGUnLCAnc3VibWl0RmFpbGVkJywgJ3N1Ym1pdHRpbmcnLCAnc3luY0Vycm9yJywgJ3N5bmNXYXJuaW5nJywgJ3ZhbHVlJywgJ3Byb3BzJ10pO1xuXG4gIHZhciBlcnJvciA9IHN5bmNFcnJvciB8fCBhc3luY0Vycm9yIHx8IHN1Ym1pdEVycm9yO1xuICB2YXIgd2FybmluZyA9IHN5bmNXYXJuaW5nO1xuICB2YXIgZmllbGROYW1lID0gc2VjdGlvblByZWZpeCA/IG5hbWUucmVwbGFjZShzZWN0aW9uUHJlZml4ICsgJy4nLCAnJykgOiBuYW1lO1xuICB2YXIgZmluYWxQcm9wcyA9IF9leHRlbmRzKHtcbiAgICBmaWVsZHM6IHtcbiAgICAgIF9pc0ZpZWxkQXJyYXk6IHRydWUsXG4gICAgICBmb3JFYWNoOiBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiAodmFsdWUgfHwgW10pLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGZpZWxkTmFtZSArICdbJyArIGluZGV4ICsgJ10nLCBpbmRleCwgZmluYWxQcm9wcy5maWVsZHMpO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBnZXQ6IGdldFZhbHVlLFxuICAgICAgZ2V0QWxsOiBmdW5jdGlvbiBnZXRBbGwoKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0sXG4gICAgICBpbnNlcnQ6IGFycmF5SW5zZXJ0LFxuICAgICAgbGVuZ3RoOiBsZW5ndGgsXG4gICAgICBtYXA6IGZ1bmN0aW9uIG1hcChjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gKHZhbHVlIHx8IFtdKS5tYXAoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGZpZWxkTmFtZSArICdbJyArIGluZGV4ICsgJ10nLCBpbmRleCwgZmluYWxQcm9wcy5maWVsZHMpO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBtb3ZlOiBhcnJheU1vdmUsXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgcG9wOiBmdW5jdGlvbiBwb3AoKSB7XG4gICAgICAgIGFycmF5UG9wKCk7XG4gICAgICAgIHJldHVybiBnZXRJbih2YWx1ZSwgbGVuZ3RoIC0gMSk7XG4gICAgICB9LFxuICAgICAgcHVzaDogYXJyYXlQdXNoLFxuICAgICAgcmVkdWNlOiBmdW5jdGlvbiByZWR1Y2UoY2FsbGJhY2ssIGluaXRpYWwpIHtcbiAgICAgICAgcmV0dXJuICh2YWx1ZSB8fCBbXSkucmVkdWNlKGZ1bmN0aW9uIChhY2N1bXVsYXRvciwgaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gY2FsbGJhY2soYWNjdW11bGF0b3IsIGZpZWxkTmFtZSArICdbJyArIGluZGV4ICsgJ10nLCBpbmRleCwgZmluYWxQcm9wcy5maWVsZHMpO1xuICAgICAgICB9LCBpbml0aWFsKTtcbiAgICAgIH0sXG4gICAgICByZW1vdmU6IGFycmF5UmVtb3ZlLFxuICAgICAgcmVtb3ZlQWxsOiBhcnJheVJlbW92ZUFsbCxcbiAgICAgIHNoaWZ0OiBmdW5jdGlvbiBzaGlmdCgpIHtcbiAgICAgICAgYXJyYXlTaGlmdCgpO1xuICAgICAgICByZXR1cm4gZ2V0SW4odmFsdWUsIDApO1xuICAgICAgfSxcbiAgICAgIHN3YXA6IGFycmF5U3dhcCxcbiAgICAgIHVuc2hpZnQ6IGFycmF5VW5zaGlmdFxuICAgIH0sXG4gICAgbWV0YToge1xuICAgICAgZGlydHk6IGRpcnR5LFxuICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgZm9ybTogZm9ybSxcbiAgICAgIHdhcm5pbmc6IHdhcm5pbmcsXG4gICAgICBpbnZhbGlkOiAhIWVycm9yLFxuICAgICAgcHJpc3RpbmU6IHByaXN0aW5lLFxuICAgICAgc3VibWl0dGluZzogc3VibWl0dGluZyxcbiAgICAgIHN1Ym1pdEZhaWxlZDogc3VibWl0RmFpbGVkLFxuICAgICAgdmFsaWQ6ICFlcnJvclxuICAgIH1cbiAgfSwgcHJvcHMsIHJlc3QpO1xuICByZXR1cm4gZmluYWxQcm9wcztcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZUZpZWxkQXJyYXlQcm9wcztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtZm9ybS9saWIvY3JlYXRlRmllbGRBcnJheVByb3BzLmpzXG4vLyBtb2R1bGUgaWQgPSAxOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBfQ29ubmVjdGVkRmllbGRzID0gcmVxdWlyZSgnLi9Db25uZWN0ZWRGaWVsZHMnKTtcblxudmFyIF9Db25uZWN0ZWRGaWVsZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29ubmVjdGVkRmllbGRzKTtcblxudmFyIF9zaGFsbG93Q29tcGFyZSA9IHJlcXVpcmUoJy4vdXRpbC9zaGFsbG93Q29tcGFyZScpO1xuXG52YXIgX3NoYWxsb3dDb21wYXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NoYWxsb3dDb21wYXJlKTtcblxudmFyIF9wbGFpbiA9IHJlcXVpcmUoJy4vc3RydWN0dXJlL3BsYWluJyk7XG5cbnZhciBfcGxhaW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGxhaW4pO1xuXG52YXIgX3ByZWZpeE5hbWUgPSByZXF1aXJlKCcuL3V0aWwvcHJlZml4TmFtZScpO1xuXG52YXIgX3ByZWZpeE5hbWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlZml4TmFtZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIHZhbGlkYXRlTmFtZVByb3AgPSBmdW5jdGlvbiB2YWxpZGF0ZU5hbWVQcm9wKHByb3ApIHtcbiAgaWYgKCFwcm9wKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcignTm8gXCJuYW1lc1wiIHByb3Agd2FzIHNwZWNpZmllZCA8RmllbGRzLz4nKTtcbiAgfVxuICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcCkgJiYgIXByb3AuX2lzRmllbGRBcnJheSkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoJ0ludmFsaWQgcHJvcCBcIm5hbWVzXCIgc3VwcGxpZWQgdG8gPEZpZWxkcy8+LiBNdXN0IGJlIGVpdGhlciBhbiBhcnJheSBvZiBzdHJpbmdzIG9yIHRoZSBmaWVsZHMgYXJyYXkgZ2VuZXJhdGVkIGJ5IEZpZWxkQXJyYXkuJyk7XG4gIH1cbn07XG5cbnZhciBjcmVhdGVGaWVsZHMgPSBmdW5jdGlvbiBjcmVhdGVGaWVsZHMoX3JlZikge1xuICB2YXIgZGVlcEVxdWFsID0gX3JlZi5kZWVwRXF1YWwsXG4gICAgICBnZXRJbiA9IF9yZWYuZ2V0SW4sXG4gICAgICB0b0pTID0gX3JlZi50b0pTLFxuICAgICAgc2l6ZSA9IF9yZWYuc2l6ZTtcblxuICB2YXIgQ29ubmVjdGVkRmllbGRzID0gKDAsIF9Db25uZWN0ZWRGaWVsZHMyLmRlZmF1bHQpKHtcbiAgICBkZWVwRXF1YWw6IGRlZXBFcXVhbCxcbiAgICBnZXRJbjogZ2V0SW4sXG4gICAgdG9KUzogdG9KUyxcbiAgICBzaXplOiBzaXplXG4gIH0pO1xuXG4gIHZhciBGaWVsZHMgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhGaWVsZHMsIF9Db21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gRmllbGRzKHByb3BzLCBjb250ZXh0KSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRmllbGRzKTtcblxuICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEZpZWxkcy5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEZpZWxkcykpLmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpKTtcblxuICAgICAgaWYgKCFjb250ZXh0Ll9yZWR1eEZvcm0pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGaWVsZHMgbXVzdCBiZSBpbnNpZGUgYSBjb21wb25lbnQgZGVjb3JhdGVkIHdpdGggcmVkdXhGb3JtKCknKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoRmllbGRzLCBbe1xuICAgICAga2V5OiAnc2hvdWxkQ29tcG9uZW50VXBkYXRlJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfc2hhbGxvd0NvbXBhcmUyLmRlZmF1bHQpKHRoaXMsIG5leHRQcm9wcywgbmV4dFN0YXRlKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdjb21wb25lbnRXaWxsTW91bnQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgdmFyIGVycm9yID0gdmFsaWRhdGVOYW1lUHJvcCh0aGlzLnByb3BzLm5hbWVzKTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XG4gICAgICAgIHZhciByZWdpc3RlciA9IGNvbnRleHQuX3JlZHV4Rm9ybS5yZWdpc3RlcjtcblxuICAgICAgICB0aGlzLm5hbWVzLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICByZXR1cm4gcmVnaXN0ZXIobmFtZSwgJ0ZpZWxkJyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGlmICghX3BsYWluMi5kZWZhdWx0LmRlZXBFcXVhbCh0aGlzLnByb3BzLm5hbWVzLCBuZXh0UHJvcHMubmFtZXMpKSB7XG4gICAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XG4gICAgICAgICAgdmFyIF9jb250ZXh0JF9yZWR1eEZvcm0gPSBjb250ZXh0Ll9yZWR1eEZvcm0sXG4gICAgICAgICAgICAgIHJlZ2lzdGVyID0gX2NvbnRleHQkX3JlZHV4Rm9ybS5yZWdpc3RlcixcbiAgICAgICAgICAgICAgdW5yZWdpc3RlciA9IF9jb250ZXh0JF9yZWR1eEZvcm0udW5yZWdpc3RlcjtcbiAgICAgICAgICAvLyB1bnJlZ2lzdGVyIG9sZCBuYW1lXG5cbiAgICAgICAgICB0aGlzLnByb3BzLm5hbWVzLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB1bnJlZ2lzdGVyKCgwLCBfcHJlZml4TmFtZTIuZGVmYXVsdCkoY29udGV4dCwgbmFtZSkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIC8vIHJlZ2lzdGVyIG5ldyBuYW1lXG4gICAgICAgICAgbmV4dFByb3BzLm5hbWVzLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiByZWdpc3RlcigoMCwgX3ByZWZpeE5hbWUyLmRlZmF1bHQpKGNvbnRleHQsIG5hbWUpLCAnRmllbGQnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XG4gICAgICAgIHZhciB1bnJlZ2lzdGVyID0gY29udGV4dC5fcmVkdXhGb3JtLnVucmVnaXN0ZXI7XG5cbiAgICAgICAgdGhpcy5wcm9wcy5uYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIHVucmVnaXN0ZXIoKDAsIF9wcmVmaXhOYW1lMi5kZWZhdWx0KShjb250ZXh0LCBuYW1lKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2dldFJlbmRlcmVkQ29tcG9uZW50JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRSZW5kZXJlZENvbXBvbmVudCgpIHtcbiAgICAgICAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKHRoaXMucHJvcHMud2l0aFJlZiwgJ0lmIHlvdSB3YW50IHRvIGFjY2VzcyBnZXRSZW5kZXJlZENvbXBvbmVudCgpLCAnICsgJ3lvdSBtdXN0IHNwZWNpZnkgYSB3aXRoUmVmIHByb3AgdG8gRmllbGRzJyk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZnMuY29ubmVjdGVkLmdldFdyYXBwZWRJbnN0YW5jZSgpLmdldFJlbmRlcmVkQ29tcG9uZW50KCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgICAgIHJldHVybiAoMCwgX3JlYWN0LmNyZWF0ZUVsZW1lbnQpKENvbm5lY3RlZEZpZWxkcywgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgICBuYW1lczogdGhpcy5wcm9wcy5uYW1lcy5tYXAoZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiAoMCwgX3ByZWZpeE5hbWUyLmRlZmF1bHQpKGNvbnRleHQsIG5hbWUpO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9yZWR1eEZvcm06IHRoaXMuY29udGV4dC5fcmVkdXhGb3JtLFxuICAgICAgICAgIHJlZjogJ2Nvbm5lY3RlZCdcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ25hbWVzJyxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICB2YXIgY29udGV4dCA9IHRoaXMuY29udGV4dDtcblxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5uYW1lcy5tYXAoZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICByZXR1cm4gKDAsIF9wcmVmaXhOYW1lMi5kZWZhdWx0KShjb250ZXh0LCBuYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnZGlydHknLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZnMuY29ubmVjdGVkLmdldFdyYXBwZWRJbnN0YW5jZSgpLmlzRGlydHkoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdwcmlzdGluZScsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmRpcnR5O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3ZhbHVlcycsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVmcy5jb25uZWN0ZWQgJiYgdGhpcy5yZWZzLmNvbm5lY3RlZC5nZXRXcmFwcGVkSW5zdGFuY2UoKS5nZXRWYWx1ZXMoKTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gRmllbGRzO1xuICB9KF9yZWFjdC5Db21wb25lbnQpO1xuXG4gIEZpZWxkcy5wcm9wVHlwZXMgPSB7XG4gICAgbmFtZXM6IGZ1bmN0aW9uIG5hbWVzKHByb3BzLCBwcm9wTmFtZSkge1xuICAgICAgcmV0dXJuIHZhbGlkYXRlTmFtZVByb3AocHJvcHNbcHJvcE5hbWVdKTtcbiAgICB9LFxuICAgIGNvbXBvbmVudDogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYywgX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmddKS5pc1JlcXVpcmVkLFxuICAgIGZvcm1hdDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAgIHBhcnNlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gICAgcHJvcHM6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAgIHdpdGhSZWY6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbFxuICB9O1xuICBGaWVsZHMuY29udGV4dFR5cGVzID0ge1xuICAgIF9yZWR1eEZvcm06IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XG4gIH07XG5cbiAgcmV0dXJuIEZpZWxkcztcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZUZpZWxkcztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtZm9ybS9saWIvY3JlYXRlRmllbGRzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX3BsYWluID0gcmVxdWlyZSgnLi9zdHJ1Y3R1cmUvcGxhaW4nKTtcblxudmFyIF9wbGFpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wbGFpbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBjcmVhdGVGb3JtVmFsdWVTZWxlY3RvciA9IGZ1bmN0aW9uIGNyZWF0ZUZvcm1WYWx1ZVNlbGVjdG9yKF9yZWYpIHtcbiAgdmFyIGdldEluID0gX3JlZi5nZXRJbjtcbiAgcmV0dXJuIGZ1bmN0aW9uIChmb3JtKSB7XG4gICAgdmFyIGdldEZvcm1TdGF0ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICByZXR1cm4gZ2V0SW4oc3RhdGUsICdmb3JtJyk7XG4gICAgfTtcblxuICAgICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KShmb3JtLCAnRm9ybSB2YWx1ZSBtdXN0IGJlIHNwZWNpZmllZCcpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBmaWVsZHMgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGZpZWxkc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KShmaWVsZHMubGVuZ3RoLCAnTm8gZmllbGRzIHNwZWNpZmllZCcpO1xuICAgICAgcmV0dXJuIGZpZWxkcy5sZW5ndGggPT09IDEgPyAvLyBvbmx5IHNlbGVjdGluZyBvbmUgZmllbGQsIHNvIHJldHVybiBpdHMgdmFsdWVcbiAgICAgIGdldEluKGdldEZvcm1TdGF0ZShzdGF0ZSksIGZvcm0gKyAnLnZhbHVlcy4nICsgZmllbGRzWzBdKSA6IC8vIHNlbGVjdGluZyBtYW55IGZpZWxkcywgc28gcmV0dXJuIGFuIG9iamVjdCBvZiBmaWVsZCB2YWx1ZXNcbiAgICAgIGZpZWxkcy5yZWR1Y2UoZnVuY3Rpb24gKGFjY3VtdWxhdG9yLCBmaWVsZCkge1xuICAgICAgICB2YXIgdmFsdWUgPSBnZXRJbihnZXRGb3JtU3RhdGUoc3RhdGUpLCBmb3JtICsgJy52YWx1ZXMuJyArIGZpZWxkKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyBhY2N1bXVsYXRvciA6IF9wbGFpbjIuZGVmYXVsdC5zZXRJbihhY2N1bXVsYXRvciwgZmllbGQsIHZhbHVlKTtcbiAgICAgIH0sIHt9KTtcbiAgICB9O1xuICB9O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlRm9ybVZhbHVlU2VsZWN0b3I7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4LWZvcm0vbGliL2NyZWF0ZUZvcm1WYWx1ZVNlbGVjdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAyMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2FjdGlvblR5cGVzID0gcmVxdWlyZSgnLi9hY3Rpb25UeXBlcycpO1xuXG52YXIgX2RlbGV0ZUluV2l0aENsZWFuVXAgPSByZXF1aXJlKCcuL2RlbGV0ZUluV2l0aENsZWFuVXAnKTtcblxudmFyIF9kZWxldGVJbldpdGhDbGVhblVwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlbGV0ZUluV2l0aENsZWFuVXApO1xuXG52YXIgX3BsYWluID0gcmVxdWlyZSgnLi9zdHJ1Y3R1cmUvcGxhaW4nKTtcblxudmFyIF9wbGFpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wbGFpbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxudmFyIGlzUmVkdXhGb3JtQWN0aW9uID0gZnVuY3Rpb24gaXNSZWR1eEZvcm1BY3Rpb24oYWN0aW9uKSB7XG4gIHJldHVybiBhY3Rpb24gJiYgYWN0aW9uLnR5cGUgJiYgYWN0aW9uLnR5cGUubGVuZ3RoID4gX2FjdGlvblR5cGVzLnByZWZpeC5sZW5ndGggJiYgYWN0aW9uLnR5cGUuc3Vic3RyaW5nKDAsIF9hY3Rpb25UeXBlcy5wcmVmaXgubGVuZ3RoKSA9PT0gX2FjdGlvblR5cGVzLnByZWZpeDtcbn07XG5cbnZhciBjcmVhdGVSZWR1Y2VyID0gZnVuY3Rpb24gY3JlYXRlUmVkdWNlcihzdHJ1Y3R1cmUpIHtcbiAgdmFyIF9iZWhhdmlvcnM7XG5cbiAgdmFyIGRlZXBFcXVhbCA9IHN0cnVjdHVyZS5kZWVwRXF1YWwsXG4gICAgICBlbXB0eSA9IHN0cnVjdHVyZS5lbXB0eSxcbiAgICAgIGdldEluID0gc3RydWN0dXJlLmdldEluLFxuICAgICAgc2V0SW4gPSBzdHJ1Y3R1cmUuc2V0SW4sXG4gICAgICBkZWxldGVJbiA9IHN0cnVjdHVyZS5kZWxldGVJbixcbiAgICAgIGZyb21KUyA9IHN0cnVjdHVyZS5mcm9tSlMsXG4gICAgICBrZXlzID0gc3RydWN0dXJlLmtleXMsXG4gICAgICBzaXplID0gc3RydWN0dXJlLnNpemUsXG4gICAgICBzcGxpY2UgPSBzdHJ1Y3R1cmUuc3BsaWNlO1xuXG4gIHZhciBkZWxldGVJbldpdGhDbGVhblVwID0gKDAsIF9kZWxldGVJbldpdGhDbGVhblVwMi5kZWZhdWx0KShzdHJ1Y3R1cmUpO1xuICB2YXIgZG9TcGxpY2UgPSBmdW5jdGlvbiBkb1NwbGljZShzdGF0ZSwga2V5LCBmaWVsZCwgaW5kZXgsIHJlbW92ZU51bSwgdmFsdWUsIGZvcmNlKSB7XG4gICAgdmFyIGV4aXN0aW5nID0gZ2V0SW4oc3RhdGUsIGtleSArICcuJyArIGZpZWxkKTtcbiAgICByZXR1cm4gZXhpc3RpbmcgfHwgZm9yY2UgPyBzZXRJbihzdGF0ZSwga2V5ICsgJy4nICsgZmllbGQsIHNwbGljZShleGlzdGluZywgaW5kZXgsIHJlbW92ZU51bSwgdmFsdWUpKSA6IHN0YXRlO1xuICB9O1xuICB2YXIgZG9QbGFpblNwbGljZSA9IGZ1bmN0aW9uIGRvUGxhaW5TcGxpY2Uoc3RhdGUsIGtleSwgZmllbGQsIGluZGV4LCByZW1vdmVOdW0sIHZhbHVlLCBmb3JjZSkge1xuICAgIHZhciBzbGljZSA9IGdldEluKHN0YXRlLCBrZXkpO1xuICAgIHZhciBleGlzdGluZyA9IF9wbGFpbjIuZGVmYXVsdC5nZXRJbihzbGljZSwgZmllbGQpO1xuICAgIHJldHVybiBleGlzdGluZyB8fCBmb3JjZSA/IHNldEluKHN0YXRlLCBrZXksIF9wbGFpbjIuZGVmYXVsdC5zZXRJbihzbGljZSwgZmllbGQsIF9wbGFpbjIuZGVmYXVsdC5zcGxpY2UoZXhpc3RpbmcsIGluZGV4LCByZW1vdmVOdW0sIHZhbHVlKSkpIDogc3RhdGU7XG4gIH07XG4gIHZhciByb290S2V5cyA9IFsndmFsdWVzJywgJ2ZpZWxkcycsICdzdWJtaXRFcnJvcnMnLCAnYXN5bmNFcnJvcnMnXTtcbiAgdmFyIGFycmF5U3BsaWNlID0gZnVuY3Rpb24gYXJyYXlTcGxpY2Uoc3RhdGUsIGZpZWxkLCBpbmRleCwgcmVtb3ZlTnVtLCB2YWx1ZSkge1xuICAgIHZhciByZXN1bHQgPSBzdGF0ZTtcbiAgICB2YXIgbm9uVmFsdWVzVmFsdWUgPSB2YWx1ZSAhPSBudWxsID8gZW1wdHkgOiB1bmRlZmluZWQ7XG4gICAgcmVzdWx0ID0gZG9TcGxpY2UocmVzdWx0LCAndmFsdWVzJywgZmllbGQsIGluZGV4LCByZW1vdmVOdW0sIHZhbHVlLCB0cnVlKTtcbiAgICByZXN1bHQgPSBkb1NwbGljZShyZXN1bHQsICdmaWVsZHMnLCBmaWVsZCwgaW5kZXgsIHJlbW92ZU51bSwgbm9uVmFsdWVzVmFsdWUpO1xuICAgIHJlc3VsdCA9IGRvUGxhaW5TcGxpY2UocmVzdWx0LCAnc3luY0Vycm9ycycsIGZpZWxkLCBpbmRleCwgcmVtb3ZlTnVtLCB1bmRlZmluZWQpO1xuICAgIHJlc3VsdCA9IGRvUGxhaW5TcGxpY2UocmVzdWx0LCAnc3luY1dhcm5pbmdzJywgZmllbGQsIGluZGV4LCByZW1vdmVOdW0sIHVuZGVmaW5lZCk7XG4gICAgcmVzdWx0ID0gZG9TcGxpY2UocmVzdWx0LCAnc3VibWl0RXJyb3JzJywgZmllbGQsIGluZGV4LCByZW1vdmVOdW0sIHVuZGVmaW5lZCk7XG4gICAgcmVzdWx0ID0gZG9TcGxpY2UocmVzdWx0LCAnYXN5bmNFcnJvcnMnLCBmaWVsZCwgaW5kZXgsIHJlbW92ZU51bSwgdW5kZWZpbmVkKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIHZhciBiZWhhdmlvcnMgPSAoX2JlaGF2aW9ycyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2JlaGF2aW9ycywgX2FjdGlvblR5cGVzLkFSUkFZX0lOU0VSVCwgZnVuY3Rpb24gKHN0YXRlLCBfcmVmKSB7XG4gICAgdmFyIF9yZWYkbWV0YSA9IF9yZWYubWV0YSxcbiAgICAgICAgZmllbGQgPSBfcmVmJG1ldGEuZmllbGQsXG4gICAgICAgIGluZGV4ID0gX3JlZiRtZXRhLmluZGV4LFxuICAgICAgICBwYXlsb2FkID0gX3JlZi5wYXlsb2FkO1xuXG4gICAgcmV0dXJuIGFycmF5U3BsaWNlKHN0YXRlLCBmaWVsZCwgaW5kZXgsIDAsIHBheWxvYWQpO1xuICB9KSwgX2RlZmluZVByb3BlcnR5KF9iZWhhdmlvcnMsIF9hY3Rpb25UeXBlcy5BUlJBWV9NT1ZFLCBmdW5jdGlvbiAoc3RhdGUsIF9yZWYyKSB7XG4gICAgdmFyIF9yZWYyJG1ldGEgPSBfcmVmMi5tZXRhLFxuICAgICAgICBmaWVsZCA9IF9yZWYyJG1ldGEuZmllbGQsXG4gICAgICAgIGZyb20gPSBfcmVmMiRtZXRhLmZyb20sXG4gICAgICAgIHRvID0gX3JlZjIkbWV0YS50bztcblxuICAgIHZhciBhcnJheSA9IGdldEluKHN0YXRlLCAndmFsdWVzLicgKyBmaWVsZCk7XG4gICAgdmFyIGxlbmd0aCA9IGFycmF5ID8gc2l6ZShhcnJheSkgOiAwO1xuICAgIHZhciByZXN1bHQgPSBzdGF0ZTtcbiAgICBpZiAobGVuZ3RoKSB7XG4gICAgICByb290S2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIHBhdGggPSBrZXkgKyAnLicgKyBmaWVsZDtcbiAgICAgICAgaWYgKGdldEluKHJlc3VsdCwgcGF0aCkpIHtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBnZXRJbihyZXN1bHQsIHBhdGggKyAnWycgKyBmcm9tICsgJ10nKTtcbiAgICAgICAgICByZXN1bHQgPSBzZXRJbihyZXN1bHQsIHBhdGgsIHNwbGljZShnZXRJbihyZXN1bHQsIHBhdGgpLCBmcm9tLCAxKSk7IC8vIHJlbW92ZVxuICAgICAgICAgIHJlc3VsdCA9IHNldEluKHJlc3VsdCwgcGF0aCwgc3BsaWNlKGdldEluKHJlc3VsdCwgcGF0aCksIHRvLCAwLCB2YWx1ZSkpOyAvLyBpbnNlcnRcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0pLCBfZGVmaW5lUHJvcGVydHkoX2JlaGF2aW9ycywgX2FjdGlvblR5cGVzLkFSUkFZX1BPUCwgZnVuY3Rpb24gKHN0YXRlLCBfcmVmMykge1xuICAgIHZhciBmaWVsZCA9IF9yZWYzLm1ldGEuZmllbGQ7XG5cbiAgICB2YXIgYXJyYXkgPSBnZXRJbihzdGF0ZSwgJ3ZhbHVlcy4nICsgZmllbGQpO1xuICAgIHZhciBsZW5ndGggPSBhcnJheSA/IHNpemUoYXJyYXkpIDogMDtcbiAgICByZXR1cm4gbGVuZ3RoID8gYXJyYXlTcGxpY2Uoc3RhdGUsIGZpZWxkLCBsZW5ndGggLSAxLCAxKSA6IHN0YXRlO1xuICB9KSwgX2RlZmluZVByb3BlcnR5KF9iZWhhdmlvcnMsIF9hY3Rpb25UeXBlcy5BUlJBWV9QVVNILCBmdW5jdGlvbiAoc3RhdGUsIF9yZWY0KSB7XG4gICAgdmFyIGZpZWxkID0gX3JlZjQubWV0YS5maWVsZCxcbiAgICAgICAgcGF5bG9hZCA9IF9yZWY0LnBheWxvYWQ7XG5cbiAgICB2YXIgYXJyYXkgPSBnZXRJbihzdGF0ZSwgJ3ZhbHVlcy4nICsgZmllbGQpO1xuICAgIHZhciBsZW5ndGggPSBhcnJheSA/IHNpemUoYXJyYXkpIDogMDtcbiAgICByZXR1cm4gYXJyYXlTcGxpY2Uoc3RhdGUsIGZpZWxkLCBsZW5ndGgsIDAsIHBheWxvYWQpO1xuICB9KSwgX2RlZmluZVByb3BlcnR5KF9iZWhhdmlvcnMsIF9hY3Rpb25UeXBlcy5BUlJBWV9SRU1PVkUsIGZ1bmN0aW9uIChzdGF0ZSwgX3JlZjUpIHtcbiAgICB2YXIgX3JlZjUkbWV0YSA9IF9yZWY1Lm1ldGEsXG4gICAgICAgIGZpZWxkID0gX3JlZjUkbWV0YS5maWVsZCxcbiAgICAgICAgaW5kZXggPSBfcmVmNSRtZXRhLmluZGV4O1xuXG4gICAgcmV0dXJuIGFycmF5U3BsaWNlKHN0YXRlLCBmaWVsZCwgaW5kZXgsIDEpO1xuICB9KSwgX2RlZmluZVByb3BlcnR5KF9iZWhhdmlvcnMsIF9hY3Rpb25UeXBlcy5BUlJBWV9SRU1PVkVfQUxMLCBmdW5jdGlvbiAoc3RhdGUsIF9yZWY2KSB7XG4gICAgdmFyIGZpZWxkID0gX3JlZjYubWV0YS5maWVsZDtcblxuICAgIHZhciBhcnJheSA9IGdldEluKHN0YXRlLCAndmFsdWVzLicgKyBmaWVsZCk7XG4gICAgdmFyIGxlbmd0aCA9IGFycmF5ID8gc2l6ZShhcnJheSkgOiAwO1xuICAgIHJldHVybiBsZW5ndGggPyBhcnJheVNwbGljZShzdGF0ZSwgZmllbGQsIDAsIGxlbmd0aCkgOiBzdGF0ZTtcbiAgfSksIF9kZWZpbmVQcm9wZXJ0eShfYmVoYXZpb3JzLCBfYWN0aW9uVHlwZXMuQVJSQVlfU0hJRlQsIGZ1bmN0aW9uIChzdGF0ZSwgX3JlZjcpIHtcbiAgICB2YXIgZmllbGQgPSBfcmVmNy5tZXRhLmZpZWxkO1xuXG4gICAgcmV0dXJuIGFycmF5U3BsaWNlKHN0YXRlLCBmaWVsZCwgMCwgMSk7XG4gIH0pLCBfZGVmaW5lUHJvcGVydHkoX2JlaGF2aW9ycywgX2FjdGlvblR5cGVzLkFSUkFZX1NQTElDRSwgZnVuY3Rpb24gKHN0YXRlLCBfcmVmOCkge1xuICAgIHZhciBfcmVmOCRtZXRhID0gX3JlZjgubWV0YSxcbiAgICAgICAgZmllbGQgPSBfcmVmOCRtZXRhLmZpZWxkLFxuICAgICAgICBpbmRleCA9IF9yZWY4JG1ldGEuaW5kZXgsXG4gICAgICAgIHJlbW92ZU51bSA9IF9yZWY4JG1ldGEucmVtb3ZlTnVtLFxuICAgICAgICBwYXlsb2FkID0gX3JlZjgucGF5bG9hZDtcblxuICAgIHJldHVybiBhcnJheVNwbGljZShzdGF0ZSwgZmllbGQsIGluZGV4LCByZW1vdmVOdW0sIHBheWxvYWQpO1xuICB9KSwgX2RlZmluZVByb3BlcnR5KF9iZWhhdmlvcnMsIF9hY3Rpb25UeXBlcy5BUlJBWV9TV0FQLCBmdW5jdGlvbiAoc3RhdGUsIF9yZWY5KSB7XG4gICAgdmFyIF9yZWY5JG1ldGEgPSBfcmVmOS5tZXRhLFxuICAgICAgICBmaWVsZCA9IF9yZWY5JG1ldGEuZmllbGQsXG4gICAgICAgIGluZGV4QSA9IF9yZWY5JG1ldGEuaW5kZXhBLFxuICAgICAgICBpbmRleEIgPSBfcmVmOSRtZXRhLmluZGV4QjtcblxuICAgIHZhciByZXN1bHQgPSBzdGF0ZTtcbiAgICByb290S2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciB2YWx1ZUEgPSBnZXRJbihyZXN1bHQsIGtleSArICcuJyArIGZpZWxkICsgJ1snICsgaW5kZXhBICsgJ10nKTtcbiAgICAgIHZhciB2YWx1ZUIgPSBnZXRJbihyZXN1bHQsIGtleSArICcuJyArIGZpZWxkICsgJ1snICsgaW5kZXhCICsgJ10nKTtcbiAgICAgIGlmICh2YWx1ZUEgIT09IHVuZGVmaW5lZCB8fCB2YWx1ZUIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXN1bHQgPSBzZXRJbihyZXN1bHQsIGtleSArICcuJyArIGZpZWxkICsgJ1snICsgaW5kZXhBICsgJ10nLCB2YWx1ZUIpO1xuICAgICAgICByZXN1bHQgPSBzZXRJbihyZXN1bHQsIGtleSArICcuJyArIGZpZWxkICsgJ1snICsgaW5kZXhCICsgJ10nLCB2YWx1ZUEpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH0pLCBfZGVmaW5lUHJvcGVydHkoX2JlaGF2aW9ycywgX2FjdGlvblR5cGVzLkFSUkFZX1VOU0hJRlQsIGZ1bmN0aW9uIChzdGF0ZSwgX3JlZjEwKSB7XG4gICAgdmFyIGZpZWxkID0gX3JlZjEwLm1ldGEuZmllbGQsXG4gICAgICAgIHBheWxvYWQgPSBfcmVmMTAucGF5bG9hZDtcblxuICAgIHJldHVybiBhcnJheVNwbGljZShzdGF0ZSwgZmllbGQsIDAsIDAsIHBheWxvYWQpO1xuICB9KSwgX2RlZmluZVByb3BlcnR5KF9iZWhhdmlvcnMsIF9hY3Rpb25UeXBlcy5BVVRPRklMTCwgZnVuY3Rpb24gKHN0YXRlLCBfcmVmMTEpIHtcbiAgICB2YXIgZmllbGQgPSBfcmVmMTEubWV0YS5maWVsZCxcbiAgICAgICAgcGF5bG9hZCA9IF9yZWYxMS5wYXlsb2FkO1xuXG4gICAgdmFyIHJlc3VsdCA9IHN0YXRlO1xuICAgIHJlc3VsdCA9IGRlbGV0ZUluV2l0aENsZWFuVXAocmVzdWx0LCAnYXN5bmNFcnJvcnMuJyArIGZpZWxkKTtcbiAgICByZXN1bHQgPSBkZWxldGVJbldpdGhDbGVhblVwKHJlc3VsdCwgJ3N1Ym1pdEVycm9ycy4nICsgZmllbGQpO1xuICAgIHJlc3VsdCA9IHNldEluKHJlc3VsdCwgJ2ZpZWxkcy4nICsgZmllbGQgKyAnLmF1dG9maWxsZWQnLCB0cnVlKTtcbiAgICByZXN1bHQgPSBzZXRJbihyZXN1bHQsICd2YWx1ZXMuJyArIGZpZWxkLCBwYXlsb2FkKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9KSwgX2RlZmluZVByb3BlcnR5KF9iZWhhdmlvcnMsIF9hY3Rpb25UeXBlcy5CTFVSLCBmdW5jdGlvbiAoc3RhdGUsIF9yZWYxMikge1xuICAgIHZhciBfcmVmMTIkbWV0YSA9IF9yZWYxMi5tZXRhLFxuICAgICAgICBmaWVsZCA9IF9yZWYxMiRtZXRhLmZpZWxkLFxuICAgICAgICB0b3VjaCA9IF9yZWYxMiRtZXRhLnRvdWNoLFxuICAgICAgICBwYXlsb2FkID0gX3JlZjEyLnBheWxvYWQ7XG5cbiAgICB2YXIgcmVzdWx0ID0gc3RhdGU7XG4gICAgdmFyIGluaXRpYWwgPSBnZXRJbihyZXN1bHQsICdpbml0aWFsLicgKyBmaWVsZCk7XG4gICAgaWYgKGluaXRpYWwgPT09IHVuZGVmaW5lZCAmJiBwYXlsb2FkID09PSAnJykge1xuICAgICAgcmVzdWx0ID0gZGVsZXRlSW5XaXRoQ2xlYW5VcChyZXN1bHQsICd2YWx1ZXMuJyArIGZpZWxkKTtcbiAgICB9IGVsc2UgaWYgKHBheWxvYWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVzdWx0ID0gc2V0SW4ocmVzdWx0LCAndmFsdWVzLicgKyBmaWVsZCwgcGF5bG9hZCk7XG4gICAgfVxuICAgIGlmIChmaWVsZCA9PT0gZ2V0SW4ocmVzdWx0LCAnYWN0aXZlJykpIHtcbiAgICAgIHJlc3VsdCA9IGRlbGV0ZUluKHJlc3VsdCwgJ2FjdGl2ZScpO1xuICAgIH1cbiAgICByZXN1bHQgPSBkZWxldGVJbihyZXN1bHQsICdmaWVsZHMuJyArIGZpZWxkICsgJy5hY3RpdmUnKTtcbiAgICBpZiAodG91Y2gpIHtcbiAgICAgIHJlc3VsdCA9IHNldEluKHJlc3VsdCwgJ2ZpZWxkcy4nICsgZmllbGQgKyAnLnRvdWNoZWQnLCB0cnVlKTtcbiAgICAgIHJlc3VsdCA9IHNldEluKHJlc3VsdCwgJ2FueVRvdWNoZWQnLCB0cnVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSksIF9kZWZpbmVQcm9wZXJ0eShfYmVoYXZpb3JzLCBfYWN0aW9uVHlwZXMuQ0hBTkdFLCBmdW5jdGlvbiAoc3RhdGUsIF9yZWYxMykge1xuICAgIHZhciBfcmVmMTMkbWV0YSA9IF9yZWYxMy5tZXRhLFxuICAgICAgICBmaWVsZCA9IF9yZWYxMyRtZXRhLmZpZWxkLFxuICAgICAgICB0b3VjaCA9IF9yZWYxMyRtZXRhLnRvdWNoLFxuICAgICAgICBwZXJzaXN0ZW50U3VibWl0RXJyb3JzID0gX3JlZjEzJG1ldGEucGVyc2lzdGVudFN1Ym1pdEVycm9ycyxcbiAgICAgICAgcGF5bG9hZCA9IF9yZWYxMy5wYXlsb2FkO1xuXG4gICAgdmFyIHJlc3VsdCA9IHN0YXRlO1xuICAgIHZhciBpbml0aWFsID0gZ2V0SW4ocmVzdWx0LCAnaW5pdGlhbC4nICsgZmllbGQpO1xuICAgIGlmIChpbml0aWFsID09PSB1bmRlZmluZWQgJiYgcGF5bG9hZCA9PT0gJycpIHtcbiAgICAgIHJlc3VsdCA9IGRlbGV0ZUluV2l0aENsZWFuVXAocmVzdWx0LCAndmFsdWVzLicgKyBmaWVsZCk7XG4gICAgfSBlbHNlIGlmIChwYXlsb2FkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlc3VsdCA9IHNldEluKHJlc3VsdCwgJ3ZhbHVlcy4nICsgZmllbGQsIHBheWxvYWQpO1xuICAgIH1cbiAgICByZXN1bHQgPSBkZWxldGVJbldpdGhDbGVhblVwKHJlc3VsdCwgJ2FzeW5jRXJyb3JzLicgKyBmaWVsZCk7XG4gICAgaWYgKCFwZXJzaXN0ZW50U3VibWl0RXJyb3JzKSB7XG4gICAgICByZXN1bHQgPSBkZWxldGVJbldpdGhDbGVhblVwKHJlc3VsdCwgJ3N1Ym1pdEVycm9ycy4nICsgZmllbGQpO1xuICAgIH1cbiAgICByZXN1bHQgPSBkZWxldGVJbldpdGhDbGVhblVwKHJlc3VsdCwgJ2ZpZWxkcy4nICsgZmllbGQgKyAnLmF1dG9maWxsZWQnKTtcbiAgICBpZiAodG91Y2gpIHtcbiAgICAgIHJlc3VsdCA9IHNldEluKHJlc3VsdCwgJ2ZpZWxkcy4nICsgZmllbGQgKyAnLnRvdWNoZWQnLCB0cnVlKTtcbiAgICAgIHJlc3VsdCA9IHNldEluKHJlc3VsdCwgJ2FueVRvdWNoZWQnLCB0cnVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSksIF9kZWZpbmVQcm9wZXJ0eShfYmVoYXZpb3JzLCBfYWN0aW9uVHlwZXMuQ0xFQVJfU1VCTUlULCBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICByZXR1cm4gZGVsZXRlSW4oc3RhdGUsICd0cmlnZ2VyU3VibWl0Jyk7XG4gIH0pLCBfZGVmaW5lUHJvcGVydHkoX2JlaGF2aW9ycywgX2FjdGlvblR5cGVzLkNMRUFSX1NVQk1JVF9FUlJPUlMsIGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgIHJldHVybiBkZWxldGVJbldpdGhDbGVhblVwKHN0YXRlLCAnc3VibWl0RXJyb3JzJyk7XG4gIH0pLCBfZGVmaW5lUHJvcGVydHkoX2JlaGF2aW9ycywgX2FjdGlvblR5cGVzLkNMRUFSX0FTWU5DX0VSUk9SLCBmdW5jdGlvbiAoc3RhdGUsIF9yZWYxNCkge1xuICAgIHZhciBmaWVsZCA9IF9yZWYxNC5tZXRhLmZpZWxkO1xuXG4gICAgcmV0dXJuIGRlbGV0ZUluKHN0YXRlLCAnYXN5bmNFcnJvcnMuJyArIGZpZWxkKTtcbiAgfSksIF9kZWZpbmVQcm9wZXJ0eShfYmVoYXZpb3JzLCBfYWN0aW9uVHlwZXMuRk9DVVMsIGZ1bmN0aW9uIChzdGF0ZSwgX3JlZjE1KSB7XG4gICAgdmFyIGZpZWxkID0gX3JlZjE1Lm1ldGEuZmllbGQ7XG5cbiAgICB2YXIgcmVzdWx0ID0gc3RhdGU7XG4gICAgdmFyIHByZXZpb3VzbHlBY3RpdmUgPSBnZXRJbihzdGF0ZSwgJ2FjdGl2ZScpO1xuICAgIHJlc3VsdCA9IGRlbGV0ZUluKHJlc3VsdCwgJ2ZpZWxkcy4nICsgcHJldmlvdXNseUFjdGl2ZSArICcuYWN0aXZlJyk7XG4gICAgcmVzdWx0ID0gc2V0SW4ocmVzdWx0LCAnZmllbGRzLicgKyBmaWVsZCArICcudmlzaXRlZCcsIHRydWUpO1xuICAgIHJlc3VsdCA9IHNldEluKHJlc3VsdCwgJ2ZpZWxkcy4nICsgZmllbGQgKyAnLmFjdGl2ZScsIHRydWUpO1xuICAgIHJlc3VsdCA9IHNldEluKHJlc3VsdCwgJ2FjdGl2ZScsIGZpZWxkKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9KSwgX2RlZmluZVByb3BlcnR5KF9iZWhhdmlvcnMsIF9hY3Rpb25UeXBlcy5JTklUSUFMSVpFLCBmdW5jdGlvbiAoc3RhdGUsIF9yZWYxNikge1xuICAgIHZhciBwYXlsb2FkID0gX3JlZjE2LnBheWxvYWQsXG4gICAgICAgIF9yZWYxNiRtZXRhID0gX3JlZjE2Lm1ldGEsXG4gICAgICAgIGtlZXBEaXJ0eSA9IF9yZWYxNiRtZXRhLmtlZXBEaXJ0eSxcbiAgICAgICAga2VlcFN1Ym1pdFN1Y2NlZWRlZCA9IF9yZWYxNiRtZXRhLmtlZXBTdWJtaXRTdWNjZWVkZWQ7XG5cbiAgICB2YXIgbWFwRGF0YSA9IGZyb21KUyhwYXlsb2FkKTtcbiAgICB2YXIgcmVzdWx0ID0gZW1wdHk7IC8vIGNsZWFuIGFsbCBmaWVsZCBzdGF0ZVxuXG4gICAgLy8gcGVyc2lzdCBvbGQgd2FybmluZ3MsIHRoZXkgd2lsbCBnZXQgcmVjYWxjdWxhdGVkIGlmIHRoZSBuZXcgZm9ybSB2YWx1ZXMgYXJlIGRpZmZlcmVudCBmcm9tIHRoZSBvbGQgdmFsdWVzXG4gICAgdmFyIHdhcm5pbmcgPSBnZXRJbihzdGF0ZSwgJ3dhcm5pbmcnKTtcbiAgICBpZiAod2FybmluZykge1xuICAgICAgcmVzdWx0ID0gc2V0SW4ocmVzdWx0LCAnd2FybmluZycsIHdhcm5pbmcpO1xuICAgIH1cbiAgICB2YXIgc3luY1dhcm5pbmdzID0gZ2V0SW4oc3RhdGUsICdzeW5jV2FybmluZ3MnKTtcbiAgICBpZiAoc3luY1dhcm5pbmdzKSB7XG4gICAgICByZXN1bHQgPSBzZXRJbihyZXN1bHQsICdzeW5jV2FybmluZ3MnLCBzeW5jV2FybmluZ3MpO1xuICAgIH1cblxuICAgIC8vIHBlcnNpc3Qgb2xkIGVycm9ycywgdGhleSB3aWxsIGdldCByZWNhbGN1bGF0ZWQgaWYgdGhlIG5ldyBmb3JtIHZhbHVlcyBhcmUgZGlmZmVyZW50IGZyb20gdGhlIG9sZCB2YWx1ZXNcbiAgICB2YXIgZXJyb3IgPSBnZXRJbihzdGF0ZSwgJ2Vycm9yJyk7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICByZXN1bHQgPSBzZXRJbihyZXN1bHQsICdlcnJvcicsIGVycm9yKTtcbiAgICB9XG4gICAgdmFyIHN5bmNFcnJvcnMgPSBnZXRJbihzdGF0ZSwgJ3N5bmNFcnJvcnMnKTtcbiAgICBpZiAoc3luY0Vycm9ycykge1xuICAgICAgcmVzdWx0ID0gc2V0SW4ocmVzdWx0LCAnc3luY0Vycm9ycycsIHN5bmNFcnJvcnMpO1xuICAgIH1cblxuICAgIHZhciByZWdpc3RlcmVkRmllbGRzID0gZ2V0SW4oc3RhdGUsICdyZWdpc3RlcmVkRmllbGRzJyk7XG4gICAgaWYgKHJlZ2lzdGVyZWRGaWVsZHMpIHtcbiAgICAgIHJlc3VsdCA9IHNldEluKHJlc3VsdCwgJ3JlZ2lzdGVyZWRGaWVsZHMnLCByZWdpc3RlcmVkRmllbGRzKTtcbiAgICB9XG4gICAgdmFyIG5ld1ZhbHVlcyA9IG1hcERhdGE7XG4gICAgaWYgKGtlZXBEaXJ0eSAmJiByZWdpc3RlcmVkRmllbGRzKSB7XG4gICAgICAvL1xuICAgICAgLy8gS2VlcCB0aGUgdmFsdWUgb2YgZGlydHkgZmllbGRzIHdoaWxlIHVwZGF0aW5nIHRoZSB2YWx1ZSBvZlxuICAgICAgLy8gcHJpc3RpbmUgZmllbGRzLiBUaGlzIHdheSwgYXBwcyBjYW4gcmVpbml0aWFsaXplIGZvcm1zIHdoaWxlXG4gICAgICAvLyBhdm9pZGluZyBzdG9tcGluZyBvbiB1c2VyIGVkaXRzLlxuICAgICAgLy9cbiAgICAgIC8vIE5vdGUgMTogVGhlIGluaXRpYWxpemUgYWN0aW9uIHJlcGxhY2VzIGFsbCBpbml0aWFsIHZhbHVlc1xuICAgICAgLy8gcmVnYXJkbGVzcyBvZiBrZWVwRGlydHkuXG4gICAgICAvL1xuICAgICAgLy8gTm90ZSAyOiBXaGVuIGEgZmllbGQgaXMgZGlydHksIGtlZXBEaXJ0eSBpcyBlbmFibGVkLCBhbmQgdGhlIGZpZWxkXG4gICAgICAvLyB2YWx1ZSBpcyB0aGUgc2FtZSBhcyB0aGUgbmV3IGluaXRpYWwgdmFsdWUgZm9yIHRoZSBmaWVsZCwgdGhlXG4gICAgICAvLyBpbml0aWFsaXplIGFjdGlvbiBjYXVzZXMgdGhlIGZpZWxkIHRvIGJlY29tZSBwcmlzdGluZS4gVGhhdCBlZmZlY3RcbiAgICAgIC8vIGlzIHdoYXQgd2Ugd2FudC5cbiAgICAgIC8vXG4gICAgICB2YXIgcHJldmlvdXNWYWx1ZXMgPSBnZXRJbihzdGF0ZSwgJ3ZhbHVlcycpO1xuICAgICAgdmFyIHByZXZpb3VzSW5pdGlhbFZhbHVlcyA9IGdldEluKHN0YXRlLCAnaW5pdGlhbCcpO1xuICAgICAga2V5cyhyZWdpc3RlcmVkRmllbGRzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHZhciBwcmV2aW91c0luaXRpYWxWYWx1ZSA9IGdldEluKHByZXZpb3VzSW5pdGlhbFZhbHVlcywgbmFtZSk7XG4gICAgICAgIHZhciBwcmV2aW91c1ZhbHVlID0gZ2V0SW4ocHJldmlvdXNWYWx1ZXMsIG5hbWUpO1xuICAgICAgICBpZiAoIWRlZXBFcXVhbChwcmV2aW91c1ZhbHVlLCBwcmV2aW91c0luaXRpYWxWYWx1ZSkpIHtcbiAgICAgICAgICAvLyBUaGlzIGZpZWxkIHdhcyBkaXJ0eS4gUmVzdG9yZSB0aGUgZGlydHkgdmFsdWUuXG4gICAgICAgICAgbmV3VmFsdWVzID0gc2V0SW4obmV3VmFsdWVzLCBuYW1lLCBwcmV2aW91c1ZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChrZWVwU3VibWl0U3VjY2VlZGVkICYmIGdldEluKHN0YXRlLCAnc3VibWl0U3VjY2VlZGVkJykpIHtcbiAgICAgIHJlc3VsdCA9IHNldEluKHJlc3VsdCwgJ3N1Ym1pdFN1Y2NlZWRlZCcsIHRydWUpO1xuICAgIH1cbiAgICByZXN1bHQgPSBzZXRJbihyZXN1bHQsICd2YWx1ZXMnLCBuZXdWYWx1ZXMpO1xuICAgIHJlc3VsdCA9IHNldEluKHJlc3VsdCwgJ2luaXRpYWwnLCBtYXBEYXRhKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9KSwgX2RlZmluZVByb3BlcnR5KF9iZWhhdmlvcnMsIF9hY3Rpb25UeXBlcy5SRUdJU1RFUl9GSUVMRCwgZnVuY3Rpb24gKHN0YXRlLCBfcmVmMTcpIHtcbiAgICB2YXIgX3JlZjE3JHBheWxvYWQgPSBfcmVmMTcucGF5bG9hZCxcbiAgICAgICAgbmFtZSA9IF9yZWYxNyRwYXlsb2FkLm5hbWUsXG4gICAgICAgIHR5cGUgPSBfcmVmMTckcGF5bG9hZC50eXBlO1xuXG4gICAgdmFyIGtleSA9ICdyZWdpc3RlcmVkRmllbGRzW1xcJycgKyBuYW1lICsgJ1xcJ10nO1xuICAgIHZhciBmaWVsZCA9IGdldEluKHN0YXRlLCBrZXkpO1xuICAgIGlmIChmaWVsZCkge1xuICAgICAgdmFyIGNvdW50ID0gZ2V0SW4oZmllbGQsICdjb3VudCcpICsgMTtcbiAgICAgIGZpZWxkID0gc2V0SW4oZmllbGQsICdjb3VudCcsIGNvdW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmllbGQgPSBmcm9tSlMoeyBuYW1lOiBuYW1lLCB0eXBlOiB0eXBlLCBjb3VudDogMSB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHNldEluKHN0YXRlLCBrZXksIGZpZWxkKTtcbiAgfSksIF9kZWZpbmVQcm9wZXJ0eShfYmVoYXZpb3JzLCBfYWN0aW9uVHlwZXMuUkVTRVQsIGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgIHZhciByZXN1bHQgPSBlbXB0eTtcbiAgICB2YXIgcmVnaXN0ZXJlZEZpZWxkcyA9IGdldEluKHN0YXRlLCAncmVnaXN0ZXJlZEZpZWxkcycpO1xuICAgIGlmIChyZWdpc3RlcmVkRmllbGRzKSB7XG4gICAgICByZXN1bHQgPSBzZXRJbihyZXN1bHQsICdyZWdpc3RlcmVkRmllbGRzJywgcmVnaXN0ZXJlZEZpZWxkcyk7XG4gICAgfVxuICAgIHZhciB2YWx1ZXMgPSBnZXRJbihzdGF0ZSwgJ2luaXRpYWwnKTtcbiAgICBpZiAodmFsdWVzKSB7XG4gICAgICByZXN1bHQgPSBzZXRJbihyZXN1bHQsICd2YWx1ZXMnLCB2YWx1ZXMpO1xuICAgICAgcmVzdWx0ID0gc2V0SW4ocmVzdWx0LCAnaW5pdGlhbCcsIHZhbHVlcyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0pLCBfZGVmaW5lUHJvcGVydHkoX2JlaGF2aW9ycywgX2FjdGlvblR5cGVzLlNVQk1JVCwgZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgcmV0dXJuIHNldEluKHN0YXRlLCAndHJpZ2dlclN1Ym1pdCcsIHRydWUpO1xuICB9KSwgX2RlZmluZVByb3BlcnR5KF9iZWhhdmlvcnMsIF9hY3Rpb25UeXBlcy5TVEFSVF9BU1lOQ19WQUxJREFUSU9OLCBmdW5jdGlvbiAoc3RhdGUsIF9yZWYxOCkge1xuICAgIHZhciBmaWVsZCA9IF9yZWYxOC5tZXRhLmZpZWxkO1xuXG4gICAgcmV0dXJuIHNldEluKHN0YXRlLCAnYXN5bmNWYWxpZGF0aW5nJywgZmllbGQgfHwgdHJ1ZSk7XG4gIH0pLCBfZGVmaW5lUHJvcGVydHkoX2JlaGF2aW9ycywgX2FjdGlvblR5cGVzLlNUQVJUX1NVQk1JVCwgZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgcmV0dXJuIHNldEluKHN0YXRlLCAnc3VibWl0dGluZycsIHRydWUpO1xuICB9KSwgX2RlZmluZVByb3BlcnR5KF9iZWhhdmlvcnMsIF9hY3Rpb25UeXBlcy5TVE9QX0FTWU5DX1ZBTElEQVRJT04sIGZ1bmN0aW9uIChzdGF0ZSwgX3JlZjE5KSB7XG4gICAgdmFyIHBheWxvYWQgPSBfcmVmMTkucGF5bG9hZDtcblxuICAgIHZhciByZXN1bHQgPSBzdGF0ZTtcbiAgICByZXN1bHQgPSBkZWxldGVJbihyZXN1bHQsICdhc3luY1ZhbGlkYXRpbmcnKTtcbiAgICBpZiAocGF5bG9hZCAmJiBPYmplY3Qua2V5cyhwYXlsb2FkKS5sZW5ndGgpIHtcbiAgICAgIHZhciBfZXJyb3IgPSBwYXlsb2FkLl9lcnJvcixcbiAgICAgICAgICBmaWVsZEVycm9ycyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwYXlsb2FkLCBbJ19lcnJvciddKTtcblxuICAgICAgaWYgKF9lcnJvcikge1xuICAgICAgICByZXN1bHQgPSBzZXRJbihyZXN1bHQsICdlcnJvcicsIF9lcnJvcik7XG4gICAgICB9XG4gICAgICBpZiAoT2JqZWN0LmtleXMoZmllbGRFcnJvcnMpLmxlbmd0aCkge1xuICAgICAgICByZXN1bHQgPSBzZXRJbihyZXN1bHQsICdhc3luY0Vycm9ycycsIGZyb21KUyhmaWVsZEVycm9ycykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gZGVsZXRlSW4ocmVzdWx0LCAnYXN5bmNFcnJvcnMnKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gZGVsZXRlSW4ocmVzdWx0LCAnZXJyb3InKTtcbiAgICAgIHJlc3VsdCA9IGRlbGV0ZUluKHJlc3VsdCwgJ2FzeW5jRXJyb3JzJyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0pLCBfZGVmaW5lUHJvcGVydHkoX2JlaGF2aW9ycywgX2FjdGlvblR5cGVzLlNUT1BfU1VCTUlULCBmdW5jdGlvbiAoc3RhdGUsIF9yZWYyMCkge1xuICAgIHZhciBwYXlsb2FkID0gX3JlZjIwLnBheWxvYWQ7XG5cbiAgICB2YXIgcmVzdWx0ID0gc3RhdGU7XG4gICAgcmVzdWx0ID0gZGVsZXRlSW4ocmVzdWx0LCAnc3VibWl0dGluZycpO1xuICAgIHJlc3VsdCA9IGRlbGV0ZUluKHJlc3VsdCwgJ3N1Ym1pdEZhaWxlZCcpO1xuICAgIHJlc3VsdCA9IGRlbGV0ZUluKHJlc3VsdCwgJ3N1Ym1pdFN1Y2NlZWRlZCcpO1xuICAgIGlmIChwYXlsb2FkICYmIE9iamVjdC5rZXlzKHBheWxvYWQpLmxlbmd0aCkge1xuICAgICAgdmFyIF9lcnJvciA9IHBheWxvYWQuX2Vycm9yLFxuICAgICAgICAgIGZpZWxkRXJyb3JzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHBheWxvYWQsIFsnX2Vycm9yJ10pO1xuXG4gICAgICBpZiAoX2Vycm9yKSB7XG4gICAgICAgIHJlc3VsdCA9IHNldEluKHJlc3VsdCwgJ2Vycm9yJywgX2Vycm9yKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IGRlbGV0ZUluKHJlc3VsdCwgJ2Vycm9yJyk7XG4gICAgICB9XG4gICAgICBpZiAoT2JqZWN0LmtleXMoZmllbGRFcnJvcnMpLmxlbmd0aCkge1xuICAgICAgICByZXN1bHQgPSBzZXRJbihyZXN1bHQsICdzdWJtaXRFcnJvcnMnLCBmcm9tSlMoZmllbGRFcnJvcnMpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IGRlbGV0ZUluKHJlc3VsdCwgJ3N1Ym1pdEVycm9ycycpO1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gc2V0SW4ocmVzdWx0LCAnc3VibWl0RmFpbGVkJywgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IHNldEluKHJlc3VsdCwgJ3N1Ym1pdFN1Y2NlZWRlZCcsIHRydWUpO1xuICAgICAgcmVzdWx0ID0gZGVsZXRlSW4ocmVzdWx0LCAnZXJyb3InKTtcbiAgICAgIHJlc3VsdCA9IGRlbGV0ZUluKHJlc3VsdCwgJ3N1Ym1pdEVycm9ycycpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9KSwgX2RlZmluZVByb3BlcnR5KF9iZWhhdmlvcnMsIF9hY3Rpb25UeXBlcy5TRVRfU1VCTUlUX0ZBSUxFRCwgZnVuY3Rpb24gKHN0YXRlLCBfcmVmMjEpIHtcbiAgICB2YXIgZmllbGRzID0gX3JlZjIxLm1ldGEuZmllbGRzO1xuXG4gICAgdmFyIHJlc3VsdCA9IHN0YXRlO1xuICAgIHJlc3VsdCA9IHNldEluKHJlc3VsdCwgJ3N1Ym1pdEZhaWxlZCcsIHRydWUpO1xuICAgIHJlc3VsdCA9IGRlbGV0ZUluKHJlc3VsdCwgJ3N1Ym1pdFN1Y2NlZWRlZCcpO1xuICAgIHJlc3VsdCA9IGRlbGV0ZUluKHJlc3VsdCwgJ3N1Ym1pdHRpbmcnKTtcbiAgICBmaWVsZHMuZm9yRWFjaChmdW5jdGlvbiAoZmllbGQpIHtcbiAgICAgIHJldHVybiByZXN1bHQgPSBzZXRJbihyZXN1bHQsICdmaWVsZHMuJyArIGZpZWxkICsgJy50b3VjaGVkJywgdHJ1ZSk7XG4gICAgfSk7XG4gICAgaWYgKGZpZWxkcy5sZW5ndGgpIHtcbiAgICAgIHJlc3VsdCA9IHNldEluKHJlc3VsdCwgJ2FueVRvdWNoZWQnLCB0cnVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSksIF9kZWZpbmVQcm9wZXJ0eShfYmVoYXZpb3JzLCBfYWN0aW9uVHlwZXMuU0VUX1NVQk1JVF9TVUNDRUVERUQsIGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgIHZhciByZXN1bHQgPSBzdGF0ZTtcbiAgICByZXN1bHQgPSBkZWxldGVJbihyZXN1bHQsICdzdWJtaXRGYWlsZWQnKTtcbiAgICByZXN1bHQgPSBzZXRJbihyZXN1bHQsICdzdWJtaXRTdWNjZWVkZWQnLCB0cnVlKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9KSwgX2RlZmluZVByb3BlcnR5KF9iZWhhdmlvcnMsIF9hY3Rpb25UeXBlcy5UT1VDSCwgZnVuY3Rpb24gKHN0YXRlLCBfcmVmMjIpIHtcbiAgICB2YXIgZmllbGRzID0gX3JlZjIyLm1ldGEuZmllbGRzO1xuXG4gICAgdmFyIHJlc3VsdCA9IHN0YXRlO1xuICAgIGZpZWxkcy5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZCkge1xuICAgICAgcmV0dXJuIHJlc3VsdCA9IHNldEluKHJlc3VsdCwgJ2ZpZWxkcy4nICsgZmllbGQgKyAnLnRvdWNoZWQnLCB0cnVlKTtcbiAgICB9KTtcbiAgICByZXN1bHQgPSBzZXRJbihyZXN1bHQsICdhbnlUb3VjaGVkJywgdHJ1ZSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSksIF9kZWZpbmVQcm9wZXJ0eShfYmVoYXZpb3JzLCBfYWN0aW9uVHlwZXMuVU5SRUdJU1RFUl9GSUVMRCwgZnVuY3Rpb24gKHN0YXRlLCBfcmVmMjMpIHtcbiAgICB2YXIgX3JlZjIzJHBheWxvYWQgPSBfcmVmMjMucGF5bG9hZCxcbiAgICAgICAgbmFtZSA9IF9yZWYyMyRwYXlsb2FkLm5hbWUsXG4gICAgICAgIGRlc3Ryb3lPblVubW91bnQgPSBfcmVmMjMkcGF5bG9hZC5kZXN0cm95T25Vbm1vdW50O1xuXG4gICAgdmFyIHJlc3VsdCA9IHN0YXRlO1xuICAgIHZhciBrZXkgPSAncmVnaXN0ZXJlZEZpZWxkc1tcXCcnICsgbmFtZSArICdcXCddJztcbiAgICB2YXIgZmllbGQgPSBnZXRJbihyZXN1bHQsIGtleSk7XG4gICAgaWYgKCFmaWVsZCkge1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICB2YXIgY291bnQgPSBnZXRJbihmaWVsZCwgJ2NvdW50JykgLSAxO1xuICAgIGlmIChjb3VudCA8PSAwICYmIGRlc3Ryb3lPblVubW91bnQpIHtcbiAgICAgIC8vIE5vdGU6IENhbm5vdCB1c2UgZGVsZXRlV2l0aENsZWFuVXAgaGVyZSBiZWNhdXNlIG9mIHRoZSBmbGF0IG5hdHVyZSBvZiByZWdpc3RlcmVkRmllbGRzXG4gICAgICByZXN1bHQgPSBkZWxldGVJbihyZXN1bHQsIGtleSk7XG4gICAgICBpZiAoZGVlcEVxdWFsKGdldEluKHJlc3VsdCwgJ3JlZ2lzdGVyZWRGaWVsZHMnKSwgZW1wdHkpKSB7XG4gICAgICAgIHJlc3VsdCA9IGRlbGV0ZUluKHJlc3VsdCwgJ3JlZ2lzdGVyZWRGaWVsZHMnKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZmllbGQgPSBzZXRJbihmaWVsZCwgJ2NvdW50JywgY291bnQpO1xuICAgICAgcmVzdWx0ID0gc2V0SW4ocmVzdWx0LCBrZXksIGZpZWxkKTtcbiAgICB9XG4gICAgaWYgKGRlc3Ryb3lPblVubW91bnQpIHtcbiAgICAgIHJlc3VsdCA9IGRlbGV0ZUluV2l0aENsZWFuVXAocmVzdWx0LCAnc3luY0Vycm9ycy4nICsgbmFtZSk7XG4gICAgICByZXN1bHQgPSBkZWxldGVJbldpdGhDbGVhblVwKHJlc3VsdCwgJ3N1Ym1pdEVycm9ycy4nICsgbmFtZSk7XG4gICAgICByZXN1bHQgPSBkZWxldGVJbldpdGhDbGVhblVwKHJlc3VsdCwgJ2FzeW5jRXJyb3JzLicgKyBuYW1lKTtcbiAgICAgIHJlc3VsdCA9IGRlbGV0ZUluV2l0aENsZWFuVXAocmVzdWx0LCAnc3luY1dhcm5pbmdzLicgKyBuYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSksIF9kZWZpbmVQcm9wZXJ0eShfYmVoYXZpb3JzLCBfYWN0aW9uVHlwZXMuVU5UT1VDSCwgZnVuY3Rpb24gKHN0YXRlLCBfcmVmMjQpIHtcbiAgICB2YXIgZmllbGRzID0gX3JlZjI0Lm1ldGEuZmllbGRzO1xuXG4gICAgdmFyIHJlc3VsdCA9IHN0YXRlO1xuICAgIGZpZWxkcy5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZCkge1xuICAgICAgcmV0dXJuIHJlc3VsdCA9IGRlbGV0ZUluKHJlc3VsdCwgJ2ZpZWxkcy4nICsgZmllbGQgKyAnLnRvdWNoZWQnKTtcbiAgICB9KTtcbiAgICB2YXIgYW55VG91Y2hlZCA9IGtleXMoZ2V0SW4ocmVzdWx0LCAncmVnaXN0ZXJlZEZpZWxkcycpKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBnZXRJbihyZXN1bHQsICdmaWVsZHMuJyArIGtleSArICcudG91Y2hlZCcpO1xuICAgIH0pO1xuICAgIHJlc3VsdCA9IGFueVRvdWNoZWQgPyBzZXRJbihyZXN1bHQsICdhbnlUb3VjaGVkJywgdHJ1ZSkgOiBkZWxldGVJbihyZXN1bHQsICdhbnlUb3VjaGVkJyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSksIF9kZWZpbmVQcm9wZXJ0eShfYmVoYXZpb3JzLCBfYWN0aW9uVHlwZXMuVVBEQVRFX1NZTkNfRVJST1JTLCBmdW5jdGlvbiAoc3RhdGUsIF9yZWYyNSkge1xuICAgIHZhciBfcmVmMjUkcGF5bG9hZCA9IF9yZWYyNS5wYXlsb2FkLFxuICAgICAgICBzeW5jRXJyb3JzID0gX3JlZjI1JHBheWxvYWQuc3luY0Vycm9ycyxcbiAgICAgICAgZXJyb3IgPSBfcmVmMjUkcGF5bG9hZC5lcnJvcjtcblxuICAgIHZhciByZXN1bHQgPSBzdGF0ZTtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHJlc3VsdCA9IHNldEluKHJlc3VsdCwgJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgcmVzdWx0ID0gc2V0SW4ocmVzdWx0LCAnc3luY0Vycm9yJywgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IGRlbGV0ZUluKHJlc3VsdCwgJ2Vycm9yJyk7XG4gICAgICByZXN1bHQgPSBkZWxldGVJbihyZXN1bHQsICdzeW5jRXJyb3InKTtcbiAgICB9XG4gICAgaWYgKE9iamVjdC5rZXlzKHN5bmNFcnJvcnMpLmxlbmd0aCkge1xuICAgICAgcmVzdWx0ID0gc2V0SW4ocmVzdWx0LCAnc3luY0Vycm9ycycsIHN5bmNFcnJvcnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSBkZWxldGVJbihyZXN1bHQsICdzeW5jRXJyb3JzJyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0pLCBfZGVmaW5lUHJvcGVydHkoX2JlaGF2aW9ycywgX2FjdGlvblR5cGVzLlVQREFURV9TWU5DX1dBUk5JTkdTLCBmdW5jdGlvbiAoc3RhdGUsIF9yZWYyNikge1xuICAgIHZhciBfcmVmMjYkcGF5bG9hZCA9IF9yZWYyNi5wYXlsb2FkLFxuICAgICAgICBzeW5jV2FybmluZ3MgPSBfcmVmMjYkcGF5bG9hZC5zeW5jV2FybmluZ3MsXG4gICAgICAgIHdhcm5pbmcgPSBfcmVmMjYkcGF5bG9hZC53YXJuaW5nO1xuXG4gICAgdmFyIHJlc3VsdCA9IHN0YXRlO1xuICAgIGlmICh3YXJuaW5nKSB7XG4gICAgICByZXN1bHQgPSBzZXRJbihyZXN1bHQsICd3YXJuaW5nJywgd2FybmluZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IGRlbGV0ZUluKHJlc3VsdCwgJ3dhcm5pbmcnKTtcbiAgICB9XG4gICAgaWYgKE9iamVjdC5rZXlzKHN5bmNXYXJuaW5ncykubGVuZ3RoKSB7XG4gICAgICByZXN1bHQgPSBzZXRJbihyZXN1bHQsICdzeW5jV2FybmluZ3MnLCBzeW5jV2FybmluZ3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSBkZWxldGVJbihyZXN1bHQsICdzeW5jV2FybmluZ3MnKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSksIF9iZWhhdmlvcnMpO1xuXG4gIHZhciByZWR1Y2VyID0gZnVuY3Rpb24gcmVkdWNlcigpIHtcbiAgICB2YXIgc3RhdGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGVtcHR5O1xuICAgIHZhciBhY3Rpb24gPSBhcmd1bWVudHNbMV07XG5cbiAgICB2YXIgYmVoYXZpb3IgPSBiZWhhdmlvcnNbYWN0aW9uLnR5cGVdO1xuICAgIHJldHVybiBiZWhhdmlvciA/IGJlaGF2aW9yKHN0YXRlLCBhY3Rpb24pIDogc3RhdGU7XG4gIH07XG5cbiAgdmFyIGJ5Rm9ybSA9IGZ1bmN0aW9uIGJ5Rm9ybShyZWR1Y2VyKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzdGF0ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZW1wdHk7XG4gICAgICB2YXIgYWN0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICAgICAgdmFyIGZvcm0gPSBhY3Rpb24gJiYgYWN0aW9uLm1ldGEgJiYgYWN0aW9uLm1ldGEuZm9ybTtcbiAgICAgIGlmICghZm9ybSB8fCAhaXNSZWR1eEZvcm1BY3Rpb24oYWN0aW9uKSkge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG4gICAgICBpZiAoYWN0aW9uLnR5cGUgPT09IF9hY3Rpb25UeXBlcy5ERVNUUk9ZKSB7XG4gICAgICAgIHJldHVybiBhY3Rpb24ubWV0YS5mb3JtLnJlZHVjZShmdW5jdGlvbiAocmVzdWx0LCBmb3JtKSB7XG4gICAgICAgICAgcmV0dXJuIGRlbGV0ZUluV2l0aENsZWFuVXAocmVzdWx0LCBmb3JtKTtcbiAgICAgICAgfSwgc3RhdGUpO1xuICAgICAgfVxuICAgICAgdmFyIGZvcm1TdGF0ZSA9IGdldEluKHN0YXRlLCBmb3JtKTtcbiAgICAgIHZhciByZXN1bHQgPSByZWR1Y2VyKGZvcm1TdGF0ZSwgYWN0aW9uKTtcbiAgICAgIHJldHVybiByZXN1bHQgPT09IGZvcm1TdGF0ZSA/IHN0YXRlIDogc2V0SW4oc3RhdGUsIGZvcm0sIHJlc3VsdCk7XG4gICAgfTtcbiAgfTtcblxuICAvKipcbiAgICogQWRkcyBhZGRpdGlvbmFsIGZ1bmN0aW9uYWxpdHkgdG8gdGhlIHJlZHVjZXJcbiAgICovXG4gIGZ1bmN0aW9uIGRlY29yYXRlKHRhcmdldCkge1xuICAgIHRhcmdldC5wbHVnaW4gPSBmdW5jdGlvbiBwbHVnaW4ocmVkdWNlcnMpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIC8vIHVzZSAnZnVuY3Rpb24nIGtleXdvcmQgdG8gZW5hYmxlICd0aGlzJ1xuICAgICAgcmV0dXJuIGRlY29yYXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHN0YXRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBlbXB0eTtcbiAgICAgICAgdmFyIGFjdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhyZWR1Y2VycykucmVkdWNlKGZ1bmN0aW9uIChhY2N1bXVsYXRvciwga2V5KSB7XG4gICAgICAgICAgdmFyIHByZXZpb3VzU3RhdGUgPSBnZXRJbihhY2N1bXVsYXRvciwga2V5KTtcbiAgICAgICAgICB2YXIgbmV4dFN0YXRlID0gcmVkdWNlcnNba2V5XShwcmV2aW91c1N0YXRlLCBhY3Rpb24sIGdldEluKHN0YXRlLCBrZXkpKTtcbiAgICAgICAgICByZXR1cm4gbmV4dFN0YXRlID09PSBwcmV2aW91c1N0YXRlID8gYWNjdW11bGF0b3IgOiBzZXRJbihhY2N1bXVsYXRvciwga2V5LCBuZXh0U3RhdGUpO1xuICAgICAgICB9LCBfdGhpcyhzdGF0ZSwgYWN0aW9uKSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBkZWNvcmF0ZShieUZvcm0ocmVkdWNlcikpO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlUmVkdWNlcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtZm9ybS9saWIvY3JlYXRlUmVkdWNlci5qc1xuLy8gbW9kdWxlIGlkID0gMjAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9tZXJnZTQgPSByZXF1aXJlKCdsb2Rhc2gvbWVyZ2UnKTtcblxudmFyIF9tZXJnZTUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tZXJnZTQpO1xuXG52YXIgX21hcFZhbHVlczIgPSByZXF1aXJlKCdsb2Rhc2gvbWFwVmFsdWVzJyk7XG5cbnZhciBfbWFwVmFsdWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21hcFZhbHVlczIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfaG9pc3ROb25SZWFjdFN0YXRpY3MgPSByZXF1aXJlKCdob2lzdC1ub24tcmVhY3Qtc3RhdGljcycpO1xuXG52YXIgX2hvaXN0Tm9uUmVhY3RTdGF0aWNzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hvaXN0Tm9uUmVhY3RTdGF0aWNzKTtcblxudmFyIF9pc1Byb21pc2UgPSByZXF1aXJlKCdpcy1wcm9taXNlJyk7XG5cbnZhciBfaXNQcm9taXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzUHJvbWlzZSk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdFJlZHV4ID0gcmVxdWlyZSgncmVhY3QtcmVkdXgnKTtcblxudmFyIF9yZWR1eCA9IHJlcXVpcmUoJ3JlZHV4Jyk7XG5cbnZhciBfYWN0aW9ucyA9IHJlcXVpcmUoJy4vYWN0aW9ucycpO1xuXG52YXIgaW1wb3J0ZWRBY3Rpb25zID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2FjdGlvbnMpO1xuXG52YXIgX2FzeW5jVmFsaWRhdGlvbiA9IHJlcXVpcmUoJy4vYXN5bmNWYWxpZGF0aW9uJyk7XG5cbnZhciBfYXN5bmNWYWxpZGF0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FzeW5jVmFsaWRhdGlvbik7XG5cbnZhciBfZGVmYXVsdFNob3VsZEFzeW5jVmFsaWRhdGUgPSByZXF1aXJlKCcuL2RlZmF1bHRTaG91bGRBc3luY1ZhbGlkYXRlJyk7XG5cbnZhciBfZGVmYXVsdFNob3VsZEFzeW5jVmFsaWRhdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmYXVsdFNob3VsZEFzeW5jVmFsaWRhdGUpO1xuXG52YXIgX2RlZmF1bHRTaG91bGRWYWxpZGF0ZSA9IHJlcXVpcmUoJy4vZGVmYXVsdFNob3VsZFZhbGlkYXRlJyk7XG5cbnZhciBfZGVmYXVsdFNob3VsZFZhbGlkYXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmF1bHRTaG91bGRWYWxpZGF0ZSk7XG5cbnZhciBfc2lsZW5jZUV2ZW50ID0gcmVxdWlyZSgnLi9ldmVudHMvc2lsZW5jZUV2ZW50Jyk7XG5cbnZhciBfc2lsZW5jZUV2ZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NpbGVuY2VFdmVudCk7XG5cbnZhciBfc2lsZW5jZUV2ZW50cyA9IHJlcXVpcmUoJy4vZXZlbnRzL3NpbGVuY2VFdmVudHMnKTtcblxudmFyIF9zaWxlbmNlRXZlbnRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NpbGVuY2VFdmVudHMpO1xuXG52YXIgX2dlbmVyYXRlVmFsaWRhdG9yMiA9IHJlcXVpcmUoJy4vZ2VuZXJhdGVWYWxpZGF0b3InKTtcblxudmFyIF9nZW5lcmF0ZVZhbGlkYXRvcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZW5lcmF0ZVZhbGlkYXRvcjIpO1xuXG52YXIgX2hhbmRsZVN1Ym1pdCA9IHJlcXVpcmUoJy4vaGFuZGxlU3VibWl0Jyk7XG5cbnZhciBfaGFuZGxlU3VibWl0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hhbmRsZVN1Ym1pdCk7XG5cbnZhciBfaXNWYWxpZCA9IHJlcXVpcmUoJy4vc2VsZWN0b3JzL2lzVmFsaWQnKTtcblxudmFyIF9pc1ZhbGlkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzVmFsaWQpO1xuXG52YXIgX3BsYWluID0gcmVxdWlyZSgnLi9zdHJ1Y3R1cmUvcGxhaW4nKTtcblxudmFyIF9wbGFpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wbGFpbik7XG5cbnZhciBfZ2V0RGlzcGxheU5hbWUgPSByZXF1aXJlKCcuL3V0aWwvZ2V0RGlzcGxheU5hbWUnKTtcblxudmFyIF9nZXREaXNwbGF5TmFtZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXREaXNwbGF5TmFtZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSBlbHNlIHsgcmV0dXJuIEFycmF5LmZyb20oYXJyKTsgfSB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxudmFyIGlzQ2xhc3NDb21wb25lbnQgPSBmdW5jdGlvbiBpc0NsYXNzQ29tcG9uZW50KENvbXBvbmVudCkge1xuICByZXR1cm4gQm9vbGVhbihDb21wb25lbnQgJiYgQ29tcG9uZW50LnByb3RvdHlwZSAmJiBfdHlwZW9mKENvbXBvbmVudC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCkgPT09ICdvYmplY3QnKTtcbn07XG5cbi8vIGV4dHJhY3QgZmllbGQtc3BlY2lmaWMgYWN0aW9uc1xuXG52YXIgYXJyYXlJbnNlcnQgPSBpbXBvcnRlZEFjdGlvbnMuYXJyYXlJbnNlcnQsXG4gICAgYXJyYXlNb3ZlID0gaW1wb3J0ZWRBY3Rpb25zLmFycmF5TW92ZSxcbiAgICBhcnJheVBvcCA9IGltcG9ydGVkQWN0aW9ucy5hcnJheVBvcCxcbiAgICBhcnJheVB1c2ggPSBpbXBvcnRlZEFjdGlvbnMuYXJyYXlQdXNoLFxuICAgIGFycmF5UmVtb3ZlID0gaW1wb3J0ZWRBY3Rpb25zLmFycmF5UmVtb3ZlLFxuICAgIGFycmF5UmVtb3ZlQWxsID0gaW1wb3J0ZWRBY3Rpb25zLmFycmF5UmVtb3ZlQWxsLFxuICAgIGFycmF5U2hpZnQgPSBpbXBvcnRlZEFjdGlvbnMuYXJyYXlTaGlmdCxcbiAgICBhcnJheVNwbGljZSA9IGltcG9ydGVkQWN0aW9ucy5hcnJheVNwbGljZSxcbiAgICBhcnJheVN3YXAgPSBpbXBvcnRlZEFjdGlvbnMuYXJyYXlTd2FwLFxuICAgIGFycmF5VW5zaGlmdCA9IGltcG9ydGVkQWN0aW9ucy5hcnJheVVuc2hpZnQsXG4gICAgYmx1ciA9IGltcG9ydGVkQWN0aW9ucy5ibHVyLFxuICAgIGNoYW5nZSA9IGltcG9ydGVkQWN0aW9ucy5jaGFuZ2UsXG4gICAgZm9jdXMgPSBpbXBvcnRlZEFjdGlvbnMuZm9jdXMsXG4gICAgZm9ybUFjdGlvbnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoaW1wb3J0ZWRBY3Rpb25zLCBbJ2FycmF5SW5zZXJ0JywgJ2FycmF5TW92ZScsICdhcnJheVBvcCcsICdhcnJheVB1c2gnLCAnYXJyYXlSZW1vdmUnLCAnYXJyYXlSZW1vdmVBbGwnLCAnYXJyYXlTaGlmdCcsICdhcnJheVNwbGljZScsICdhcnJheVN3YXAnLCAnYXJyYXlVbnNoaWZ0JywgJ2JsdXInLCAnY2hhbmdlJywgJ2ZvY3VzJ10pO1xuXG52YXIgYXJyYXlBY3Rpb25zID0ge1xuICBhcnJheUluc2VydDogYXJyYXlJbnNlcnQsXG4gIGFycmF5TW92ZTogYXJyYXlNb3ZlLFxuICBhcnJheVBvcDogYXJyYXlQb3AsXG4gIGFycmF5UHVzaDogYXJyYXlQdXNoLFxuICBhcnJheVJlbW92ZTogYXJyYXlSZW1vdmUsXG4gIGFycmF5UmVtb3ZlQWxsOiBhcnJheVJlbW92ZUFsbCxcbiAgYXJyYXlTaGlmdDogYXJyYXlTaGlmdCxcbiAgYXJyYXlTcGxpY2U6IGFycmF5U3BsaWNlLFxuICBhcnJheVN3YXA6IGFycmF5U3dhcCxcbiAgYXJyYXlVbnNoaWZ0OiBhcnJheVVuc2hpZnRcbn07XG5cbnZhciBwcm9wc1RvTm90VXBkYXRlRm9yID0gW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShPYmplY3Qua2V5cyhpbXBvcnRlZEFjdGlvbnMpKSwgWydhcnJheScsICdhc3luY0Vycm9ycycsICdpbml0aWFsVmFsdWVzJywgJ3N5bmNFcnJvcnMnLCAnc3luY1dhcm5pbmdzJywgJ3ZhbHVlcycsICdyZWdpc3RlcmVkRmllbGRzJ10pO1xuXG52YXIgY2hlY2tTdWJtaXQgPSBmdW5jdGlvbiBjaGVja1N1Ym1pdChzdWJtaXQpIHtcbiAgaWYgKCFzdWJtaXQgfHwgdHlwZW9mIHN1Ym1pdCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignWW91IG11c3QgZWl0aGVyIHBhc3MgaGFuZGxlU3VibWl0KCkgYW4gb25TdWJtaXQgZnVuY3Rpb24gb3IgcGFzcyBvblN1Ym1pdCBhcyBhIHByb3AnKTtcbiAgfVxuICByZXR1cm4gc3VibWl0O1xufTtcblxuLyoqXG4gKiBUaGUgZGVjb3JhdG9yIHRoYXQgaXMgdGhlIG1haW4gQVBJIHRvIHJlZHV4LWZvcm1cbiAqL1xudmFyIGNyZWF0ZVJlZHV4Rm9ybSA9IGZ1bmN0aW9uIGNyZWF0ZVJlZHV4Rm9ybShzdHJ1Y3R1cmUpIHtcbiAgdmFyIGRlZXBFcXVhbCA9IHN0cnVjdHVyZS5kZWVwRXF1YWwsXG4gICAgICBlbXB0eSA9IHN0cnVjdHVyZS5lbXB0eSxcbiAgICAgIGdldEluID0gc3RydWN0dXJlLmdldEluLFxuICAgICAgc2V0SW4gPSBzdHJ1Y3R1cmUuc2V0SW4sXG4gICAgICBrZXlzID0gc3RydWN0dXJlLmtleXMsXG4gICAgICBmcm9tSlMgPSBzdHJ1Y3R1cmUuZnJvbUpTO1xuXG4gIHZhciBpc1ZhbGlkID0gKDAsIF9pc1ZhbGlkMi5kZWZhdWx0KShzdHJ1Y3R1cmUpO1xuICByZXR1cm4gZnVuY3Rpb24gKGluaXRpYWxDb25maWcpIHtcbiAgICB2YXIgY29uZmlnID0gX2V4dGVuZHMoe1xuICAgICAgdG91Y2hPbkJsdXI6IHRydWUsXG4gICAgICB0b3VjaE9uQ2hhbmdlOiBmYWxzZSxcbiAgICAgIHBlcnNpc3RlbnRTdWJtaXRFcnJvcnM6IGZhbHNlLFxuICAgICAgZGVzdHJveU9uVW5tb3VudDogdHJ1ZSxcbiAgICAgIHNob3VsZEFzeW5jVmFsaWRhdGU6IF9kZWZhdWx0U2hvdWxkQXN5bmNWYWxpZGF0ZTIuZGVmYXVsdCxcbiAgICAgIHNob3VsZFZhbGlkYXRlOiBfZGVmYXVsdFNob3VsZFZhbGlkYXRlMi5kZWZhdWx0LFxuICAgICAgZW5hYmxlUmVpbml0aWFsaXplOiBmYWxzZSxcbiAgICAgIGtlZXBEaXJ0eU9uUmVpbml0aWFsaXplOiBmYWxzZSxcbiAgICAgIGdldEZvcm1TdGF0ZTogZnVuY3Rpb24gZ2V0Rm9ybVN0YXRlKHN0YXRlKSB7XG4gICAgICAgIHJldHVybiBnZXRJbihzdGF0ZSwgJ2Zvcm0nKTtcbiAgICAgIH0sXG4gICAgICBwdXJlOiB0cnVlLFxuICAgICAgZm9yY2VVbnJlZ2lzdGVyT25Vbm1vdW50OiBmYWxzZVxuICAgIH0sIGluaXRpYWxDb25maWcpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChXcmFwcGVkQ29tcG9uZW50KSB7XG4gICAgICB2YXIgRm9ybSA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgICAgIF9pbmhlcml0cyhGb3JtLCBfQ29tcG9uZW50KTtcblxuICAgICAgICBmdW5jdGlvbiBGb3JtKHByb3BzKSB7XG4gICAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZvcm0pO1xuXG4gICAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEZvcm0uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihGb3JtKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgICAgICAgX3RoaXMuc3VibWl0ID0gX3RoaXMuc3VibWl0LmJpbmQoX3RoaXMpO1xuICAgICAgICAgIF90aGlzLnJlc2V0ID0gX3RoaXMucmVzZXQuYmluZChfdGhpcyk7XG4gICAgICAgICAgX3RoaXMuYXN5bmNWYWxpZGF0ZSA9IF90aGlzLmFzeW5jVmFsaWRhdGUuYmluZChfdGhpcyk7XG4gICAgICAgICAgX3RoaXMuZ2V0VmFsdWVzID0gX3RoaXMuZ2V0VmFsdWVzLmJpbmQoX3RoaXMpO1xuICAgICAgICAgIF90aGlzLnJlZ2lzdGVyID0gX3RoaXMucmVnaXN0ZXIuYmluZChfdGhpcyk7XG4gICAgICAgICAgX3RoaXMudW5yZWdpc3RlciA9IF90aGlzLnVucmVnaXN0ZXIuYmluZChfdGhpcyk7XG4gICAgICAgICAgX3RoaXMuc3VibWl0Q29tcGxldGVkID0gX3RoaXMuc3VibWl0Q29tcGxldGVkLmJpbmQoX3RoaXMpO1xuICAgICAgICAgIF90aGlzLnN1Ym1pdEZhaWxlZCA9IF90aGlzLnN1Ym1pdEZhaWxlZC5iaW5kKF90aGlzKTtcbiAgICAgICAgICBfdGhpcy5maWVsZFZhbGlkYXRvcnMgPSB7fTtcbiAgICAgICAgICBfdGhpcy5sYXN0RmllbGRWYWxpZGF0b3JLZXlzID0gW107XG4gICAgICAgICAgX3RoaXMuZmllbGRXYXJuZXJzID0ge307XG4gICAgICAgICAgX3RoaXMubGFzdEZpZWxkV2FybmVyS2V5cyA9IFtdO1xuICAgICAgICAgIHJldHVybiBfdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIF9jcmVhdGVDbGFzcyhGb3JtLCBbe1xuICAgICAgICAgIGtleTogJ2dldENoaWxkQ29udGV4dCcsXG4gICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBfcmVkdXhGb3JtOiBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICAgICAgICAgIGdldEZvcm1TdGF0ZTogZnVuY3Rpb24gZ2V0Rm9ybVN0YXRlKHN0YXRlKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0SW4oX3RoaXMyLnByb3BzLmdldEZvcm1TdGF0ZShzdGF0ZSksIF90aGlzMi5wcm9wcy5mb3JtKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGFzeW5jVmFsaWRhdGU6IHRoaXMuYXN5bmNWYWxpZGF0ZSxcbiAgICAgICAgICAgICAgICBnZXRWYWx1ZXM6IHRoaXMuZ2V0VmFsdWVzLFxuICAgICAgICAgICAgICAgIHNlY3Rpb25QcmVmaXg6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICByZWdpc3RlcjogdGhpcy5yZWdpc3RlcixcbiAgICAgICAgICAgICAgICB1bnJlZ2lzdGVyOiB0aGlzLnVucmVnaXN0ZXIsXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJJbm5lck9uU3VibWl0OiBmdW5jdGlvbiByZWdpc3RlcklubmVyT25TdWJtaXQoaW5uZXJPblN1Ym1pdCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5pbm5lck9uU3VibWl0ID0gaW5uZXJPblN1Ym1pdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgIGtleTogJ2luaXRJZk5lZWRlZCcsXG4gICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGluaXRJZk5lZWRlZChuZXh0UHJvcHMpIHtcbiAgICAgICAgICAgIHZhciBlbmFibGVSZWluaXRpYWxpemUgPSB0aGlzLnByb3BzLmVuYWJsZVJlaW5pdGlhbGl6ZTtcblxuICAgICAgICAgICAgaWYgKG5leHRQcm9wcykge1xuICAgICAgICAgICAgICBpZiAoKGVuYWJsZVJlaW5pdGlhbGl6ZSB8fCAhbmV4dFByb3BzLmluaXRpYWxpemVkKSAmJiAhZGVlcEVxdWFsKHRoaXMucHJvcHMuaW5pdGlhbFZhbHVlcywgbmV4dFByb3BzLmluaXRpYWxWYWx1ZXMpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGtlZXBEaXJ0eSA9IG5leHRQcm9wcy5pbml0aWFsaXplZCAmJiB0aGlzLnByb3BzLmtlZXBEaXJ0eU9uUmVpbml0aWFsaXplO1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaW5pdGlhbGl6ZShuZXh0UHJvcHMuaW5pdGlhbFZhbHVlcywga2VlcERpcnR5LCB7XG4gICAgICAgICAgICAgICAgICBsYXN0SW5pdGlhbFZhbHVlczogdGhpcy5wcm9wcy5pbml0aWFsVmFsdWVzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5pbml0aWFsVmFsdWVzICYmICghdGhpcy5wcm9wcy5pbml0aWFsaXplZCB8fCBlbmFibGVSZWluaXRpYWxpemUpKSB7XG4gICAgICAgICAgICAgIHRoaXMucHJvcHMuaW5pdGlhbGl6ZSh0aGlzLnByb3BzLmluaXRpYWxWYWx1ZXMsIHRoaXMucHJvcHMua2VlcERpcnR5T25SZWluaXRpYWxpemUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgIGtleTogJ3VwZGF0ZVN5bmNFcnJvcnNJZk5lZWRlZCcsXG4gICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZVN5bmNFcnJvcnNJZk5lZWRlZChuZXh0U3luY0Vycm9ycywgbmV4dEVycm9yLCBsYXN0U3luY0Vycm9ycykge1xuICAgICAgICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgZXJyb3IgPSBfcHJvcHMuZXJyb3IsXG4gICAgICAgICAgICAgICAgdXBkYXRlU3luY0Vycm9ycyA9IF9wcm9wcy51cGRhdGVTeW5jRXJyb3JzO1xuXG4gICAgICAgICAgICB2YXIgbm9FcnJvcnMgPSAoIWxhc3RTeW5jRXJyb3JzIHx8ICFPYmplY3Qua2V5cyhsYXN0U3luY0Vycm9ycykubGVuZ3RoKSAmJiAhZXJyb3I7XG4gICAgICAgICAgICB2YXIgbmV4dE5vRXJyb3JzID0gKCFuZXh0U3luY0Vycm9ycyB8fCAhT2JqZWN0LmtleXMobmV4dFN5bmNFcnJvcnMpLmxlbmd0aCkgJiYgIW5leHRFcnJvcjtcbiAgICAgICAgICAgIGlmICghKG5vRXJyb3JzICYmIG5leHROb0Vycm9ycykgJiYgKCFfcGxhaW4yLmRlZmF1bHQuZGVlcEVxdWFsKGxhc3RTeW5jRXJyb3JzLCBuZXh0U3luY0Vycm9ycykgfHwgIV9wbGFpbjIuZGVmYXVsdC5kZWVwRXF1YWwoZXJyb3IsIG5leHRFcnJvcikpKSB7XG4gICAgICAgICAgICAgIHVwZGF0ZVN5bmNFcnJvcnMobmV4dFN5bmNFcnJvcnMsIG5leHRFcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAga2V5OiAnY2xlYXJTdWJtaXRQcm9taXNlSWZOZWVkZWQnLFxuICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjbGVhclN1Ym1pdFByb21pc2VJZk5lZWRlZChuZXh0UHJvcHMpIHtcbiAgICAgICAgICAgIHZhciBzdWJtaXR0aW5nID0gdGhpcy5wcm9wcy5zdWJtaXR0aW5nO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zdWJtaXRQcm9taXNlICYmIHN1Ym1pdHRpbmcgJiYgIW5leHRQcm9wcy5zdWJtaXR0aW5nKSB7XG4gICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnN1Ym1pdFByb21pc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAga2V5OiAnc3VibWl0SWZOZWVkZWQnLFxuICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzdWJtaXRJZk5lZWRlZChuZXh0UHJvcHMpIHtcbiAgICAgICAgICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBjbGVhclN1Ym1pdCA9IF9wcm9wczIuY2xlYXJTdWJtaXQsXG4gICAgICAgICAgICAgICAgdHJpZ2dlclN1Ym1pdCA9IF9wcm9wczIudHJpZ2dlclN1Ym1pdDtcblxuICAgICAgICAgICAgaWYgKCF0cmlnZ2VyU3VibWl0ICYmIG5leHRQcm9wcy50cmlnZ2VyU3VibWl0KSB7XG4gICAgICAgICAgICAgIGNsZWFyU3VibWl0KCk7XG4gICAgICAgICAgICAgIHRoaXMuc3VibWl0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAga2V5OiAndmFsaWRhdGVJZk5lZWRlZCcsXG4gICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHZhbGlkYXRlSWZOZWVkZWQobmV4dFByb3BzKSB7XG4gICAgICAgICAgICB2YXIgX3Byb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgc2hvdWxkVmFsaWRhdGUgPSBfcHJvcHMzLnNob3VsZFZhbGlkYXRlLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlID0gX3Byb3BzMy52YWxpZGF0ZSxcbiAgICAgICAgICAgICAgICB2YWx1ZXMgPSBfcHJvcHMzLnZhbHVlcztcblxuICAgICAgICAgICAgdmFyIGZpZWxkTGV2ZWxWYWxpZGF0ZSA9IHRoaXMuZ2VuZXJhdGVWYWxpZGF0b3IoKTtcbiAgICAgICAgICAgIGlmICh2YWxpZGF0ZSB8fCBmaWVsZExldmVsVmFsaWRhdGUpIHtcbiAgICAgICAgICAgICAgdmFyIGluaXRpYWxSZW5kZXIgPSBuZXh0UHJvcHMgPT09IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgdmFyIGZpZWxkVmFsaWRhdG9yS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuZ2V0VmFsaWRhdG9ycygpKTtcbiAgICAgICAgICAgICAgdmFyIHNob3VsZFZhbGlkYXRlUmVzdWx0ID0gc2hvdWxkVmFsaWRhdGUoe1xuICAgICAgICAgICAgICAgIHZhbHVlczogdmFsdWVzLFxuICAgICAgICAgICAgICAgIG5leHRQcm9wczogbmV4dFByb3BzLFxuICAgICAgICAgICAgICAgIHByb3BzOiB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIGluaXRpYWxSZW5kZXI6IGluaXRpYWxSZW5kZXIsXG4gICAgICAgICAgICAgICAgbGFzdEZpZWxkVmFsaWRhdG9yS2V5czogdGhpcy5sYXN0RmllbGRWYWxpZGF0b3JLZXlzLFxuICAgICAgICAgICAgICAgIGZpZWxkVmFsaWRhdG9yS2V5czogZmllbGRWYWxpZGF0b3JLZXlzLFxuICAgICAgICAgICAgICAgIHN0cnVjdHVyZTogc3RydWN0dXJlXG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIGlmIChzaG91bGRWYWxpZGF0ZVJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHZhciBwcm9wc1RvVmFsaWRhdGUgPSBpbml0aWFsUmVuZGVyID8gdGhpcy5wcm9wcyA6IG5leHRQcm9wcztcblxuICAgICAgICAgICAgICAgIHZhciBfbWVyZ2UyID0gKDAsIF9tZXJnZTUuZGVmYXVsdCkodmFsaWRhdGUgPyB2YWxpZGF0ZShwcm9wc1RvVmFsaWRhdGUudmFsdWVzLCBwcm9wc1RvVmFsaWRhdGUpIHx8IHt9IDoge30sIGZpZWxkTGV2ZWxWYWxpZGF0ZSA/IGZpZWxkTGV2ZWxWYWxpZGF0ZShwcm9wc1RvVmFsaWRhdGUudmFsdWVzLCBwcm9wc1RvVmFsaWRhdGUpIHx8IHt9IDoge30pLFxuICAgICAgICAgICAgICAgICAgICBfZXJyb3IgPSBfbWVyZ2UyLl9lcnJvcixcbiAgICAgICAgICAgICAgICAgICAgbmV4dFN5bmNFcnJvcnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX21lcmdlMiwgWydfZXJyb3InXSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RGaWVsZFZhbGlkYXRvcktleXMgPSBmaWVsZFZhbGlkYXRvcktleXM7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTeW5jRXJyb3JzSWZOZWVkZWQobmV4dFN5bmNFcnJvcnMsIF9lcnJvciwgcHJvcHNUb1ZhbGlkYXRlLnN5bmNFcnJvcnMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAga2V5OiAndXBkYXRlU3luY1dhcm5pbmdzSWZOZWVkZWQnLFxuICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVTeW5jV2FybmluZ3NJZk5lZWRlZChuZXh0U3luY1dhcm5pbmdzLCBuZXh0V2FybmluZywgbGFzdFN5bmNXYXJuaW5ncykge1xuICAgICAgICAgICAgdmFyIF9wcm9wczQgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIHdhcm5pbmcgPSBfcHJvcHM0Lndhcm5pbmcsXG4gICAgICAgICAgICAgICAgc3luY1dhcm5pbmdzID0gX3Byb3BzNC5zeW5jV2FybmluZ3MsXG4gICAgICAgICAgICAgICAgdXBkYXRlU3luY1dhcm5pbmdzID0gX3Byb3BzNC51cGRhdGVTeW5jV2FybmluZ3M7XG5cbiAgICAgICAgICAgIHZhciBub1dhcm5pbmdzID0gKCFzeW5jV2FybmluZ3MgfHwgIU9iamVjdC5rZXlzKHN5bmNXYXJuaW5ncykubGVuZ3RoKSAmJiAhd2FybmluZztcbiAgICAgICAgICAgIHZhciBuZXh0Tm9XYXJuaW5ncyA9ICghbmV4dFN5bmNXYXJuaW5ncyB8fCAhT2JqZWN0LmtleXMobmV4dFN5bmNXYXJuaW5ncykubGVuZ3RoKSAmJiAhbmV4dFdhcm5pbmc7XG4gICAgICAgICAgICBpZiAoIShub1dhcm5pbmdzICYmIG5leHROb1dhcm5pbmdzKSAmJiAoIV9wbGFpbjIuZGVmYXVsdC5kZWVwRXF1YWwobGFzdFN5bmNXYXJuaW5ncywgbmV4dFN5bmNXYXJuaW5ncykgfHwgIV9wbGFpbjIuZGVmYXVsdC5kZWVwRXF1YWwod2FybmluZywgbmV4dFdhcm5pbmcpKSkge1xuICAgICAgICAgICAgICB1cGRhdGVTeW5jV2FybmluZ3MobmV4dFN5bmNXYXJuaW5ncywgbmV4dFdhcm5pbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgIGtleTogJ3dhcm5JZk5lZWRlZCcsXG4gICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHdhcm5JZk5lZWRlZChuZXh0UHJvcHMpIHtcbiAgICAgICAgICAgIHZhciBfcHJvcHM1ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBzaG91bGRWYWxpZGF0ZSA9IF9wcm9wczUuc2hvdWxkVmFsaWRhdGUsXG4gICAgICAgICAgICAgICAgd2FybiA9IF9wcm9wczUud2FybixcbiAgICAgICAgICAgICAgICB2YWx1ZXMgPSBfcHJvcHM1LnZhbHVlcztcblxuICAgICAgICAgICAgdmFyIGZpZWxkTGV2ZWxXYXJuID0gdGhpcy5nZW5lcmF0ZVdhcm5lcigpO1xuICAgICAgICAgICAgaWYgKHdhcm4gfHwgZmllbGRMZXZlbFdhcm4pIHtcbiAgICAgICAgICAgICAgdmFyIGluaXRpYWxSZW5kZXIgPSBuZXh0UHJvcHMgPT09IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgdmFyIGZpZWxkV2FybmVyS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuZ2V0V2FybmVycygpKTtcbiAgICAgICAgICAgICAgdmFyIHNob3VsZFdhcm5SZXN1bHQgPSBzaG91bGRWYWxpZGF0ZSh7XG4gICAgICAgICAgICAgICAgdmFsdWVzOiB2YWx1ZXMsXG4gICAgICAgICAgICAgICAgbmV4dFByb3BzOiBuZXh0UHJvcHMsXG4gICAgICAgICAgICAgICAgcHJvcHM6IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgaW5pdGlhbFJlbmRlcjogaW5pdGlhbFJlbmRlcixcbiAgICAgICAgICAgICAgICBsYXN0RmllbGRWYWxpZGF0b3JLZXlzOiB0aGlzLmxhc3RGaWVsZFdhcm5lcktleXMsXG4gICAgICAgICAgICAgICAgZmllbGRWYWxpZGF0b3JLZXlzOiBmaWVsZFdhcm5lcktleXMsXG4gICAgICAgICAgICAgICAgc3RydWN0dXJlOiBzdHJ1Y3R1cmVcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgaWYgKHNob3VsZFdhcm5SZXN1bHQpIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJvcHNUb1dhcm4gPSBpbml0aWFsUmVuZGVyID8gdGhpcy5wcm9wcyA6IG5leHRQcm9wcztcblxuICAgICAgICAgICAgICAgIHZhciBfbWVyZ2UzID0gKDAsIF9tZXJnZTUuZGVmYXVsdCkod2FybiA/IHdhcm4ocHJvcHNUb1dhcm4udmFsdWVzLCBwcm9wc1RvV2FybikgOiB7fSwgZmllbGRMZXZlbFdhcm4gPyBmaWVsZExldmVsV2Fybihwcm9wc1RvV2Fybi52YWx1ZXMsIHByb3BzVG9XYXJuKSA6IHt9KSxcbiAgICAgICAgICAgICAgICAgICAgX3dhcm5pbmcgPSBfbWVyZ2UzLl93YXJuaW5nLFxuICAgICAgICAgICAgICAgICAgICBuZXh0U3luY1dhcm5pbmdzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9tZXJnZTMsIFsnX3dhcm5pbmcnXSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RGaWVsZFdhcm5lcktleXMgPSBmaWVsZFdhcm5lcktleXM7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTeW5jV2FybmluZ3NJZk5lZWRlZChuZXh0U3luY1dhcm5pbmdzLCBfd2FybmluZywgcHJvcHNUb1dhcm4uc3luY1dhcm5pbmdzKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxNb3VudCcsXG4gICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdElmTmVlZGVkKCk7XG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRlSWZOZWVkZWQoKTtcbiAgICAgICAgICAgIHRoaXMud2FybklmTmVlZGVkKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRJZk5lZWRlZChuZXh0UHJvcHMpO1xuICAgICAgICAgICAgdGhpcy52YWxpZGF0ZUlmTmVlZGVkKG5leHRQcm9wcyk7XG4gICAgICAgICAgICB0aGlzLndhcm5JZk5lZWRlZChuZXh0UHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5jbGVhclN1Ym1pdFByb21pc2VJZk5lZWRlZChuZXh0UHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5zdWJtaXRJZk5lZWRlZChuZXh0UHJvcHMpO1xuICAgICAgICAgICAgaWYgKG5leHRQcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICAgICAgICBpZiAoIWRlZXBFcXVhbChuZXh0UHJvcHMudmFsdWVzLCB0aGlzLnByb3BzLnZhbHVlcykpIHtcbiAgICAgICAgICAgICAgICBuZXh0UHJvcHMub25DaGFuZ2UobmV4dFByb3BzLnZhbHVlcywgbmV4dFByb3BzLmRpc3BhdGNoLCBuZXh0UHJvcHMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAga2V5OiAnc2hvdWxkQ29tcG9uZW50VXBkYXRlJyxcbiAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgICAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5wcm9wcy5wdXJlKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhuZXh0UHJvcHMpLnNvbWUoZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgICAgICAgLy8gdXNlZnVsIHRvIGRlYnVnIHJlcmVuZGVyc1xuICAgICAgICAgICAgICAvLyBpZiAoIXBsYWluLmRlZXBFcXVhbCh0aGlzLnByb3BzWyBwcm9wIF0sIG5leHRQcm9wc1sgcHJvcCBdKSkge1xuICAgICAgICAgICAgICAvLyAgIGNvbnNvbGUuaW5mbyhwcm9wLCAnY2hhbmdlZCcsIHRoaXMucHJvcHNbIHByb3AgXSwgJz09PicsIG5leHRQcm9wc1sgcHJvcCBdKVxuICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgIHJldHVybiAhfnByb3BzVG9Ob3RVcGRhdGVGb3IuaW5kZXhPZihwcm9wKSAmJiAhZGVlcEVxdWFsKF90aGlzMy5wcm9wc1twcm9wXSwgbmV4dFByb3BzW3Byb3BdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgICAgICB2YXIgX3Byb3BzNiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgZGVzdHJveU9uVW5tb3VudCA9IF9wcm9wczYuZGVzdHJveU9uVW5tb3VudCxcbiAgICAgICAgICAgICAgICBkZXN0cm95ID0gX3Byb3BzNi5kZXN0cm95O1xuXG4gICAgICAgICAgICBpZiAoZGVzdHJveU9uVW5tb3VudCkge1xuICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWU7XG4gICAgICAgICAgICAgIGRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBrZXk6ICdnZXRWYWx1ZXMnLFxuICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRWYWx1ZXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy52YWx1ZXM7XG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAga2V5OiAnaXNWYWxpZCcsXG4gICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzVmFsaWQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy52YWxpZDtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBrZXk6ICdpc1ByaXN0aW5lJyxcbiAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaXNQcmlzdGluZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLnByaXN0aW5lO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgIGtleTogJ3JlZ2lzdGVyJyxcbiAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVnaXN0ZXIobmFtZSwgdHlwZSwgZ2V0VmFsaWRhdG9yLCBnZXRXYXJuZXIpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMucmVnaXN0ZXJGaWVsZChuYW1lLCB0eXBlKTtcbiAgICAgICAgICAgIGlmIChnZXRWYWxpZGF0b3IpIHtcbiAgICAgICAgICAgICAgdGhpcy5maWVsZFZhbGlkYXRvcnNbbmFtZV0gPSBnZXRWYWxpZGF0b3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZ2V0V2FybmVyKSB7XG4gICAgICAgICAgICAgIHRoaXMuZmllbGRXYXJuZXJzW25hbWVdID0gZ2V0V2FybmVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgIGtleTogJ3VucmVnaXN0ZXInLFxuICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiB1bnJlZ2lzdGVyKG5hbWUpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuZGVzdHJveU9uVW5tb3VudCB8fCB0aGlzLnByb3BzLmZvcmNlVW5yZWdpc3Rlck9uVW5tb3VudCkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudW5yZWdpc3RlckZpZWxkKG5hbWUpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmZpZWxkVmFsaWRhdG9yc1tuYW1lXTtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5maWVsZFdhcm5lcnNbbmFtZV07XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51bnJlZ2lzdGVyRmllbGQobmFtZSwgZmFsc2UpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAga2V5OiAnZ2V0RmllbGRMaXN0JyxcbiAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RmllbGRMaXN0KG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHZhciByZWdpc3RlcmVkRmllbGRzID0gdGhpcy5wcm9wcy5yZWdpc3RlcmVkRmllbGRzO1xuICAgICAgICAgICAgdmFyIGxpc3QgPSBbXTtcbiAgICAgICAgICAgIGlmICghcmVnaXN0ZXJlZEZpZWxkcykge1xuICAgICAgICAgICAgICByZXR1cm4gbGlzdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBrZXlTZXEgPSBrZXlzKHJlZ2lzdGVyZWRGaWVsZHMpO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5leGNsdWRlRmllbGRBcnJheSkge1xuICAgICAgICAgICAgICBrZXlTZXEgPSBrZXlTZXEuZmlsdGVyKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldEluKHJlZ2lzdGVyZWRGaWVsZHMsICdbXFwnJyArIG5hbWUgKyAnXFwnXS50eXBlJykgIT09ICdGaWVsZEFycmF5JztcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZnJvbUpTKGtleVNlcS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywga2V5KSB7XG4gICAgICAgICAgICAgIGFjYy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICB9LCBsaXN0KSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAga2V5OiAnZ2V0VmFsaWRhdG9ycycsXG4gICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFZhbGlkYXRvcnMoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIHZhbGlkYXRvcnMgPSB7fTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZmllbGRWYWxpZGF0b3JzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgIHZhciB2YWxpZGF0b3IgPSBfdGhpczQuZmllbGRWYWxpZGF0b3JzW25hbWVdKCk7XG4gICAgICAgICAgICAgIGlmICh2YWxpZGF0b3IpIHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3JzW25hbWVdID0gdmFsaWRhdG9yO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB2YWxpZGF0b3JzO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgIGtleTogJ2dlbmVyYXRlVmFsaWRhdG9yJyxcbiAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2VuZXJhdGVWYWxpZGF0b3IoKSB7XG4gICAgICAgICAgICB2YXIgdmFsaWRhdG9ycyA9IHRoaXMuZ2V0VmFsaWRhdG9ycygpO1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHZhbGlkYXRvcnMpLmxlbmd0aCA/ICgwLCBfZ2VuZXJhdGVWYWxpZGF0b3IzLmRlZmF1bHQpKHZhbGlkYXRvcnMsIHN0cnVjdHVyZSkgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAga2V5OiAnZ2V0V2FybmVycycsXG4gICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFdhcm5lcnMoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIHdhcm5lcnMgPSB7fTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZmllbGRXYXJuZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgIHZhciB3YXJuZXIgPSBfdGhpczUuZmllbGRXYXJuZXJzW25hbWVdKCk7XG4gICAgICAgICAgICAgIGlmICh3YXJuZXIpIHtcbiAgICAgICAgICAgICAgICB3YXJuZXJzW25hbWVdID0gd2FybmVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB3YXJuZXJzO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgIGtleTogJ2dlbmVyYXRlV2FybmVyJyxcbiAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2VuZXJhdGVXYXJuZXIoKSB7XG4gICAgICAgICAgICB2YXIgd2FybmVycyA9IHRoaXMuZ2V0V2FybmVycygpO1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHdhcm5lcnMpLmxlbmd0aCA/ICgwLCBfZ2VuZXJhdGVWYWxpZGF0b3IzLmRlZmF1bHQpKHdhcm5lcnMsIHN0cnVjdHVyZSkgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAga2V5OiAnYXN5bmNWYWxpZGF0ZScsXG4gICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFzeW5jVmFsaWRhdGUobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczYgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgX3Byb3BzNyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgYXN5bmNCbHVyRmllbGRzID0gX3Byb3BzNy5hc3luY0JsdXJGaWVsZHMsXG4gICAgICAgICAgICAgICAgYXN5bmNFcnJvcnMgPSBfcHJvcHM3LmFzeW5jRXJyb3JzLFxuICAgICAgICAgICAgICAgIGFzeW5jVmFsaWRhdGUgPSBfcHJvcHM3LmFzeW5jVmFsaWRhdGUsXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2ggPSBfcHJvcHM3LmRpc3BhdGNoLFxuICAgICAgICAgICAgICAgIGluaXRpYWxpemVkID0gX3Byb3BzNy5pbml0aWFsaXplZCxcbiAgICAgICAgICAgICAgICBwcmlzdGluZSA9IF9wcm9wczcucHJpc3RpbmUsXG4gICAgICAgICAgICAgICAgc2hvdWxkQXN5bmNWYWxpZGF0ZSA9IF9wcm9wczcuc2hvdWxkQXN5bmNWYWxpZGF0ZSxcbiAgICAgICAgICAgICAgICBzdGFydEFzeW5jVmFsaWRhdGlvbiA9IF9wcm9wczcuc3RhcnRBc3luY1ZhbGlkYXRpb24sXG4gICAgICAgICAgICAgICAgc3RvcEFzeW5jVmFsaWRhdGlvbiA9IF9wcm9wczcuc3RvcEFzeW5jVmFsaWRhdGlvbixcbiAgICAgICAgICAgICAgICBzeW5jRXJyb3JzID0gX3Byb3BzNy5zeW5jRXJyb3JzLFxuICAgICAgICAgICAgICAgIHZhbHVlcyA9IF9wcm9wczcudmFsdWVzO1xuXG4gICAgICAgICAgICB2YXIgc3VibWl0dGluZyA9ICFuYW1lO1xuICAgICAgICAgICAgaWYgKGFzeW5jVmFsaWRhdGUpIHtcbiAgICAgICAgICAgICAgdmFyIHZhbHVlc1RvVmFsaWRhdGUgPSBzdWJtaXR0aW5nID8gdmFsdWVzIDogc2V0SW4odmFsdWVzLCBuYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICAgIHZhciBzeW5jVmFsaWRhdGlvblBhc3NlcyA9IHN1Ym1pdHRpbmcgfHwgIWdldEluKHN5bmNFcnJvcnMsIG5hbWUpO1xuICAgICAgICAgICAgICB2YXIgaXNCbHVycmVkRmllbGQgPSAhc3VibWl0dGluZyAmJiAoIWFzeW5jQmx1ckZpZWxkcyB8fCB+YXN5bmNCbHVyRmllbGRzLmluZGV4T2YobmFtZS5yZXBsYWNlKC9cXFtbMC05XStcXF0vZywgJ1tdJykpKTtcbiAgICAgICAgICAgICAgaWYgKChpc0JsdXJyZWRGaWVsZCB8fCBzdWJtaXR0aW5nKSAmJiBzaG91bGRBc3luY1ZhbGlkYXRlKHtcbiAgICAgICAgICAgICAgICBhc3luY0Vycm9yczogYXN5bmNFcnJvcnMsXG4gICAgICAgICAgICAgICAgaW5pdGlhbGl6ZWQ6IGluaXRpYWxpemVkLFxuICAgICAgICAgICAgICAgIHRyaWdnZXI6IHN1Ym1pdHRpbmcgPyAnc3VibWl0JyA6ICdibHVyJyxcbiAgICAgICAgICAgICAgICBibHVycmVkRmllbGQ6IG5hbWUsXG4gICAgICAgICAgICAgICAgcHJpc3RpbmU6IHByaXN0aW5lLFxuICAgICAgICAgICAgICAgIHN5bmNWYWxpZGF0aW9uUGFzc2VzOiBzeW5jVmFsaWRhdGlvblBhc3Nlc1xuICAgICAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoMCwgX2FzeW5jVmFsaWRhdGlvbjIuZGVmYXVsdCkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGFzeW5jVmFsaWRhdGUodmFsdWVzVG9WYWxpZGF0ZSwgZGlzcGF0Y2gsIF90aGlzNi5wcm9wcywgbmFtZSk7XG4gICAgICAgICAgICAgICAgfSwgc3RhcnRBc3luY1ZhbGlkYXRpb24sIHN0b3BBc3luY1ZhbGlkYXRpb24sIG5hbWUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAga2V5OiAnc3VibWl0Q29tcGxldGVkJyxcbiAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc3VibWl0Q29tcGxldGVkKHJlc3VsdCkge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc3VibWl0UHJvbWlzZTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAga2V5OiAnc3VibWl0RmFpbGVkJyxcbiAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc3VibWl0RmFpbGVkKGVycm9yKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zdWJtaXRQcm9taXNlO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAga2V5OiAnbGlzdGVuVG9TdWJtaXQnLFxuICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsaXN0ZW5Ub1N1Ym1pdChwcm9taXNlKSB7XG4gICAgICAgICAgICBpZiAoISgwLCBfaXNQcm9taXNlMi5kZWZhdWx0KShwcm9taXNlKSkge1xuICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc3VibWl0UHJvbWlzZSA9IHByb21pc2U7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZS50aGVuKHRoaXMuc3VibWl0Q29tcGxldGVkLCB0aGlzLnN1Ym1pdEZhaWxlZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAga2V5OiAnc3VibWl0JyxcbiAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc3VibWl0KHN1Ym1pdE9yRXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczcgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgX3Byb3BzOCA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgb25TdWJtaXQgPSBfcHJvcHM4Lm9uU3VibWl0LFxuICAgICAgICAgICAgICAgIGJsdXIgPSBfcHJvcHM4LmJsdXIsXG4gICAgICAgICAgICAgICAgY2hhbmdlID0gX3Byb3BzOC5jaGFuZ2UsXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2ggPSBfcHJvcHM4LmRpc3BhdGNoO1xuXG5cbiAgICAgICAgICAgIGlmICghc3VibWl0T3JFdmVudCB8fCAoMCwgX3NpbGVuY2VFdmVudDIuZGVmYXVsdCkoc3VibWl0T3JFdmVudCkpIHtcbiAgICAgICAgICAgICAgLy8gc3VibWl0T3JFdmVudCBpcyBhbiBldmVudDogZmlyZSBzdWJtaXQgaWYgbm90IGFscmVhZHkgc3VibWl0dGluZ1xuICAgICAgICAgICAgICBpZiAoIXRoaXMuc3VibWl0UHJvbWlzZSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlubmVyT25TdWJtaXQpIHtcbiAgICAgICAgICAgICAgICAgIC8vIHdpbGwgY2FsbCBcInN1Ym1pdE9yRXZlbnQgaXMgdGhlIHN1Ym1pdCBmdW5jdGlvblwiIGJsb2NrIGJlbG93XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pbm5lck9uU3VibWl0KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxpc3RlblRvU3VibWl0KCgwLCBfaGFuZGxlU3VibWl0Mi5kZWZhdWx0KShjaGVja1N1Ym1pdChvblN1Ym1pdCksIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCAoMCwgX3JlZHV4LmJpbmRBY3Rpb25DcmVhdG9ycykoeyBibHVyOiBibHVyLCBjaGFuZ2U6IGNoYW5nZSB9LCBkaXNwYXRjaCkpLCB0aGlzLnByb3BzLnZhbGlkRXhjZXB0U3VibWl0LCB0aGlzLmFzeW5jVmFsaWRhdGUsIHRoaXMuZ2V0RmllbGRMaXN0KHsgZXhjbHVkZUZpZWxkQXJyYXk6IHRydWUgfSkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIHN1Ym1pdE9yRXZlbnQgaXMgdGhlIHN1Ym1pdCBmdW5jdGlvbjogcmV0dXJuIGRlZmVycmVkIHN1Ym1pdCB0aHVua1xuICAgICAgICAgICAgICByZXR1cm4gKDAsIF9zaWxlbmNlRXZlbnRzMi5kZWZhdWx0KShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICFfdGhpczcuc3VibWl0UHJvbWlzZSAmJiBfdGhpczcubGlzdGVuVG9TdWJtaXQoKDAsIF9oYW5kbGVTdWJtaXQyLmRlZmF1bHQpKGNoZWNrU3VibWl0KHN1Ym1pdE9yRXZlbnQpLCBfZXh0ZW5kcyh7fSwgX3RoaXM3LnByb3BzLCAoMCwgX3JlZHV4LmJpbmRBY3Rpb25DcmVhdG9ycykoeyBibHVyOiBibHVyLCBjaGFuZ2U6IGNoYW5nZSB9LCBkaXNwYXRjaCkpLCBfdGhpczcucHJvcHMudmFsaWRFeGNlcHRTdWJtaXQsIF90aGlzNy5hc3luY1ZhbGlkYXRlLCBfdGhpczcuZ2V0RmllbGRMaXN0KHsgZXhjbHVkZUZpZWxkQXJyYXk6IHRydWUgfSkpKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAga2V5OiAncmVzZXQnLFxuICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMucmVzZXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICAvLyByZW1vdmUgc29tZSByZWR1eC1mb3JtIGNvbmZpZy1vbmx5IHByb3BzXG4gICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuICAgICAgICAgICAgdmFyIF9wcm9wczkgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIGFueVRvdWNoZWQgPSBfcHJvcHM5LmFueVRvdWNoZWQsXG4gICAgICAgICAgICAgICAgYXJyYXlJbnNlcnQgPSBfcHJvcHM5LmFycmF5SW5zZXJ0LFxuICAgICAgICAgICAgICAgIGFycmF5TW92ZSA9IF9wcm9wczkuYXJyYXlNb3ZlLFxuICAgICAgICAgICAgICAgIGFycmF5UG9wID0gX3Byb3BzOS5hcnJheVBvcCxcbiAgICAgICAgICAgICAgICBhcnJheVB1c2ggPSBfcHJvcHM5LmFycmF5UHVzaCxcbiAgICAgICAgICAgICAgICBhcnJheVJlbW92ZSA9IF9wcm9wczkuYXJyYXlSZW1vdmUsXG4gICAgICAgICAgICAgICAgYXJyYXlSZW1vdmVBbGwgPSBfcHJvcHM5LmFycmF5UmVtb3ZlQWxsLFxuICAgICAgICAgICAgICAgIGFycmF5U2hpZnQgPSBfcHJvcHM5LmFycmF5U2hpZnQsXG4gICAgICAgICAgICAgICAgYXJyYXlTcGxpY2UgPSBfcHJvcHM5LmFycmF5U3BsaWNlLFxuICAgICAgICAgICAgICAgIGFycmF5U3dhcCA9IF9wcm9wczkuYXJyYXlTd2FwLFxuICAgICAgICAgICAgICAgIGFycmF5VW5zaGlmdCA9IF9wcm9wczkuYXJyYXlVbnNoaWZ0LFxuICAgICAgICAgICAgICAgIGFzeW5jRXJyb3JzID0gX3Byb3BzOS5hc3luY0Vycm9ycyxcbiAgICAgICAgICAgICAgICBhc3luY1ZhbGlkYXRlID0gX3Byb3BzOS5hc3luY1ZhbGlkYXRlLFxuICAgICAgICAgICAgICAgIGFzeW5jVmFsaWRhdGluZyA9IF9wcm9wczkuYXN5bmNWYWxpZGF0aW5nLFxuICAgICAgICAgICAgICAgIGJsdXIgPSBfcHJvcHM5LmJsdXIsXG4gICAgICAgICAgICAgICAgY2hhbmdlID0gX3Byb3BzOS5jaGFuZ2UsXG4gICAgICAgICAgICAgICAgZGVzdHJveSA9IF9wcm9wczkuZGVzdHJveSxcbiAgICAgICAgICAgICAgICBkZXN0cm95T25Vbm1vdW50ID0gX3Byb3BzOS5kZXN0cm95T25Vbm1vdW50LFxuICAgICAgICAgICAgICAgIGZvcmNlVW5yZWdpc3Rlck9uVW5tb3VudCA9IF9wcm9wczkuZm9yY2VVbnJlZ2lzdGVyT25Vbm1vdW50LFxuICAgICAgICAgICAgICAgIGRpcnR5ID0gX3Byb3BzOS5kaXJ0eSxcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCA9IF9wcm9wczkuZGlzcGF0Y2gsXG4gICAgICAgICAgICAgICAgZW5hYmxlUmVpbml0aWFsaXplID0gX3Byb3BzOS5lbmFibGVSZWluaXRpYWxpemUsXG4gICAgICAgICAgICAgICAgZXJyb3IgPSBfcHJvcHM5LmVycm9yLFxuICAgICAgICAgICAgICAgIGZvY3VzID0gX3Byb3BzOS5mb2N1cyxcbiAgICAgICAgICAgICAgICBmb3JtID0gX3Byb3BzOS5mb3JtLFxuICAgICAgICAgICAgICAgIGdldEZvcm1TdGF0ZSA9IF9wcm9wczkuZ2V0Rm9ybVN0YXRlLFxuICAgICAgICAgICAgICAgIGluaXRpYWxpemUgPSBfcHJvcHM5LmluaXRpYWxpemUsXG4gICAgICAgICAgICAgICAgaW5pdGlhbGl6ZWQgPSBfcHJvcHM5LmluaXRpYWxpemVkLFxuICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXMgPSBfcHJvcHM5LmluaXRpYWxWYWx1ZXMsXG4gICAgICAgICAgICAgICAgaW52YWxpZCA9IF9wcm9wczkuaW52YWxpZCxcbiAgICAgICAgICAgICAgICBrZWVwRGlydHlPblJlaW5pdGlhbGl6ZSA9IF9wcm9wczkua2VlcERpcnR5T25SZWluaXRpYWxpemUsXG4gICAgICAgICAgICAgICAgcHJpc3RpbmUgPSBfcHJvcHM5LnByaXN0aW5lLFxuICAgICAgICAgICAgICAgIHByb3BOYW1lc3BhY2UgPSBfcHJvcHM5LnByb3BOYW1lc3BhY2UsXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJlZEZpZWxkcyA9IF9wcm9wczkucmVnaXN0ZXJlZEZpZWxkcyxcbiAgICAgICAgICAgICAgICByZWdpc3RlckZpZWxkID0gX3Byb3BzOS5yZWdpc3RlckZpZWxkLFxuICAgICAgICAgICAgICAgIHJlc2V0ID0gX3Byb3BzOS5yZXNldCxcbiAgICAgICAgICAgICAgICBzZXRTdWJtaXRGYWlsZWQgPSBfcHJvcHM5LnNldFN1Ym1pdEZhaWxlZCxcbiAgICAgICAgICAgICAgICBzZXRTdWJtaXRTdWNjZWVkZWQgPSBfcHJvcHM5LnNldFN1Ym1pdFN1Y2NlZWRlZCxcbiAgICAgICAgICAgICAgICBzaG91bGRBc3luY1ZhbGlkYXRlID0gX3Byb3BzOS5zaG91bGRBc3luY1ZhbGlkYXRlLFxuICAgICAgICAgICAgICAgIHNob3VsZFZhbGlkYXRlID0gX3Byb3BzOS5zaG91bGRWYWxpZGF0ZSxcbiAgICAgICAgICAgICAgICBzdGFydEFzeW5jVmFsaWRhdGlvbiA9IF9wcm9wczkuc3RhcnRBc3luY1ZhbGlkYXRpb24sXG4gICAgICAgICAgICAgICAgc3RhcnRTdWJtaXQgPSBfcHJvcHM5LnN0YXJ0U3VibWl0LFxuICAgICAgICAgICAgICAgIHN0b3BBc3luY1ZhbGlkYXRpb24gPSBfcHJvcHM5LnN0b3BBc3luY1ZhbGlkYXRpb24sXG4gICAgICAgICAgICAgICAgc3RvcFN1Ym1pdCA9IF9wcm9wczkuc3RvcFN1Ym1pdCxcbiAgICAgICAgICAgICAgICBzdWJtaXR0aW5nID0gX3Byb3BzOS5zdWJtaXR0aW5nLFxuICAgICAgICAgICAgICAgIHN1Ym1pdEZhaWxlZCA9IF9wcm9wczkuc3VibWl0RmFpbGVkLFxuICAgICAgICAgICAgICAgIHN1Ym1pdFN1Y2NlZWRlZCA9IF9wcm9wczkuc3VibWl0U3VjY2VlZGVkLFxuICAgICAgICAgICAgICAgIHRvdWNoID0gX3Byb3BzOS50b3VjaCxcbiAgICAgICAgICAgICAgICB0b3VjaE9uQmx1ciA9IF9wcm9wczkudG91Y2hPbkJsdXIsXG4gICAgICAgICAgICAgICAgdG91Y2hPbkNoYW5nZSA9IF9wcm9wczkudG91Y2hPbkNoYW5nZSxcbiAgICAgICAgICAgICAgICBwZXJzaXN0ZW50U3VibWl0RXJyb3JzID0gX3Byb3BzOS5wZXJzaXN0ZW50U3VibWl0RXJyb3JzLFxuICAgICAgICAgICAgICAgIHN5bmNFcnJvcnMgPSBfcHJvcHM5LnN5bmNFcnJvcnMsXG4gICAgICAgICAgICAgICAgc3luY1dhcm5pbmdzID0gX3Byb3BzOS5zeW5jV2FybmluZ3MsXG4gICAgICAgICAgICAgICAgdW5yZWdpc3RlckZpZWxkID0gX3Byb3BzOS51bnJlZ2lzdGVyRmllbGQsXG4gICAgICAgICAgICAgICAgdW50b3VjaCA9IF9wcm9wczkudW50b3VjaCxcbiAgICAgICAgICAgICAgICB1cGRhdGVTeW5jRXJyb3JzID0gX3Byb3BzOS51cGRhdGVTeW5jRXJyb3JzLFxuICAgICAgICAgICAgICAgIHVwZGF0ZVN5bmNXYXJuaW5ncyA9IF9wcm9wczkudXBkYXRlU3luY1dhcm5pbmdzLFxuICAgICAgICAgICAgICAgIHZhbGlkID0gX3Byb3BzOS52YWxpZCxcbiAgICAgICAgICAgICAgICB2YWxpZEV4Y2VwdFN1Ym1pdCA9IF9wcm9wczkudmFsaWRFeGNlcHRTdWJtaXQsXG4gICAgICAgICAgICAgICAgdmFsdWVzID0gX3Byb3BzOS52YWx1ZXMsXG4gICAgICAgICAgICAgICAgd2FybmluZyA9IF9wcm9wczkud2FybmluZyxcbiAgICAgICAgICAgICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wczksIFsnYW55VG91Y2hlZCcsICdhcnJheUluc2VydCcsICdhcnJheU1vdmUnLCAnYXJyYXlQb3AnLCAnYXJyYXlQdXNoJywgJ2FycmF5UmVtb3ZlJywgJ2FycmF5UmVtb3ZlQWxsJywgJ2FycmF5U2hpZnQnLCAnYXJyYXlTcGxpY2UnLCAnYXJyYXlTd2FwJywgJ2FycmF5VW5zaGlmdCcsICdhc3luY0Vycm9ycycsICdhc3luY1ZhbGlkYXRlJywgJ2FzeW5jVmFsaWRhdGluZycsICdibHVyJywgJ2NoYW5nZScsICdkZXN0cm95JywgJ2Rlc3Ryb3lPblVubW91bnQnLCAnZm9yY2VVbnJlZ2lzdGVyT25Vbm1vdW50JywgJ2RpcnR5JywgJ2Rpc3BhdGNoJywgJ2VuYWJsZVJlaW5pdGlhbGl6ZScsICdlcnJvcicsICdmb2N1cycsICdmb3JtJywgJ2dldEZvcm1TdGF0ZScsICdpbml0aWFsaXplJywgJ2luaXRpYWxpemVkJywgJ2luaXRpYWxWYWx1ZXMnLCAnaW52YWxpZCcsICdrZWVwRGlydHlPblJlaW5pdGlhbGl6ZScsICdwcmlzdGluZScsICdwcm9wTmFtZXNwYWNlJywgJ3JlZ2lzdGVyZWRGaWVsZHMnLCAncmVnaXN0ZXJGaWVsZCcsICdyZXNldCcsICdzZXRTdWJtaXRGYWlsZWQnLCAnc2V0U3VibWl0U3VjY2VlZGVkJywgJ3Nob3VsZEFzeW5jVmFsaWRhdGUnLCAnc2hvdWxkVmFsaWRhdGUnLCAnc3RhcnRBc3luY1ZhbGlkYXRpb24nLCAnc3RhcnRTdWJtaXQnLCAnc3RvcEFzeW5jVmFsaWRhdGlvbicsICdzdG9wU3VibWl0JywgJ3N1Ym1pdHRpbmcnLCAnc3VibWl0RmFpbGVkJywgJ3N1Ym1pdFN1Y2NlZWRlZCcsICd0b3VjaCcsICd0b3VjaE9uQmx1cicsICd0b3VjaE9uQ2hhbmdlJywgJ3BlcnNpc3RlbnRTdWJtaXRFcnJvcnMnLCAnc3luY0Vycm9ycycsICdzeW5jV2FybmluZ3MnLCAndW5yZWdpc3RlckZpZWxkJywgJ3VudG91Y2gnLCAndXBkYXRlU3luY0Vycm9ycycsICd1cGRhdGVTeW5jV2FybmluZ3MnLCAndmFsaWQnLCAndmFsaWRFeGNlcHRTdWJtaXQnLCAndmFsdWVzJywgJ3dhcm5pbmcnXSk7XG4gICAgICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG5cblxuICAgICAgICAgICAgdmFyIHJlZHV4Rm9ybVByb3BzID0gX2V4dGVuZHMoe1xuICAgICAgICAgICAgICBhbnlUb3VjaGVkOiBhbnlUb3VjaGVkLFxuICAgICAgICAgICAgICBhc3luY1ZhbGlkYXRlOiB0aGlzLmFzeW5jVmFsaWRhdGUsXG4gICAgICAgICAgICAgIGFzeW5jVmFsaWRhdGluZzogYXN5bmNWYWxpZGF0aW5nXG4gICAgICAgICAgICB9LCAoMCwgX3JlZHV4LmJpbmRBY3Rpb25DcmVhdG9ycykoeyBibHVyOiBibHVyLCBjaGFuZ2U6IGNoYW5nZSB9LCBkaXNwYXRjaCksIHtcbiAgICAgICAgICAgICAgZGVzdHJveTogZGVzdHJveSxcbiAgICAgICAgICAgICAgZGlydHk6IGRpcnR5LFxuICAgICAgICAgICAgICBkaXNwYXRjaDogZGlzcGF0Y2gsXG4gICAgICAgICAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgICAgICAgICAgZm9ybTogZm9ybSxcbiAgICAgICAgICAgICAgaGFuZGxlU3VibWl0OiB0aGlzLnN1Ym1pdCxcbiAgICAgICAgICAgICAgaW5pdGlhbGl6ZTogaW5pdGlhbGl6ZSxcbiAgICAgICAgICAgICAgaW5pdGlhbGl6ZWQ6IGluaXRpYWxpemVkLFxuICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzOiBpbml0aWFsVmFsdWVzLFxuICAgICAgICAgICAgICBpbnZhbGlkOiBpbnZhbGlkLFxuICAgICAgICAgICAgICBwcmlzdGluZTogcHJpc3RpbmUsXG4gICAgICAgICAgICAgIHJlc2V0OiByZXNldCxcbiAgICAgICAgICAgICAgc3VibWl0dGluZzogc3VibWl0dGluZyxcbiAgICAgICAgICAgICAgc3VibWl0RmFpbGVkOiBzdWJtaXRGYWlsZWQsXG4gICAgICAgICAgICAgIHN1Ym1pdFN1Y2NlZWRlZDogc3VibWl0U3VjY2VlZGVkLFxuICAgICAgICAgICAgICB0b3VjaDogdG91Y2gsXG4gICAgICAgICAgICAgIHVudG91Y2g6IHVudG91Y2gsXG4gICAgICAgICAgICAgIHZhbGlkOiB2YWxpZCxcbiAgICAgICAgICAgICAgd2FybmluZzogd2FybmluZ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgcHJvcHNUb1Bhc3MgPSBfZXh0ZW5kcyh7fSwgcHJvcE5hbWVzcGFjZSA/IF9kZWZpbmVQcm9wZXJ0eSh7fSwgcHJvcE5hbWVzcGFjZSwgcmVkdXhGb3JtUHJvcHMpIDogcmVkdXhGb3JtUHJvcHMsIHJlc3QpO1xuICAgICAgICAgICAgaWYgKGlzQ2xhc3NDb21wb25lbnQoV3JhcHBlZENvbXBvbmVudCkpIHtcbiAgICAgICAgICAgICAgcHJvcHNUb1Bhc3MucmVmID0gJ3dyYXBwZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICgwLCBfcmVhY3QuY3JlYXRlRWxlbWVudCkoV3JhcHBlZENvbXBvbmVudCwgcHJvcHNUb1Bhc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfV0pO1xuXG4gICAgICAgIHJldHVybiBGb3JtO1xuICAgICAgfShfcmVhY3QuQ29tcG9uZW50KTtcblxuICAgICAgRm9ybS5kaXNwbGF5TmFtZSA9ICdGb3JtKCcgKyAoMCwgX2dldERpc3BsYXlOYW1lMi5kZWZhdWx0KShXcmFwcGVkQ29tcG9uZW50KSArICcpJztcbiAgICAgIEZvcm0uV3JhcHBlZENvbXBvbmVudCA9IFdyYXBwZWRDb21wb25lbnQ7XG4gICAgICBGb3JtLmNoaWxkQ29udGV4dFR5cGVzID0ge1xuICAgICAgICBfcmVkdXhGb3JtOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG4gICAgICB9O1xuICAgICAgRm9ybS5wcm9wVHlwZXMgPSB7XG4gICAgICAgIGRlc3Ryb3lPblVubW91bnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgICAgICAgZm9yY2VVbnJlZ2lzdGVyT25Vbm1vdW50OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gICAgICAgIGZvcm06IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgIGluaXRpYWxWYWx1ZXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAgICAgICBnZXRGb3JtU3RhdGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgICAgICAgb25TdWJtaXRGYWlsOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gICAgICAgIG9uU3VibWl0U3VjY2VzczogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAgICAgICBwcm9wTmFtZVNwYWNlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgICAgICAgdmFsaWRhdGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgICAgICAgd2FybjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAgICAgICB0b3VjaE9uQmx1cjogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAgICAgICB0b3VjaE9uQ2hhbmdlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gICAgICAgIHRyaWdnZXJTdWJtaXQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgICAgICAgcGVyc2lzdGVudFN1Ym1pdEVycm9yczogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAgICAgICByZWdpc3RlcmVkRmllbGRzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFueVxuICAgICAgfTtcblxuICAgICAgdmFyIGNvbm5lY3RvciA9ICgwLCBfcmVhY3RSZWR1eC5jb25uZWN0KShmdW5jdGlvbiAoc3RhdGUsIHByb3BzKSB7XG4gICAgICAgIHZhciBmb3JtID0gcHJvcHMuZm9ybSxcbiAgICAgICAgICAgIGdldEZvcm1TdGF0ZSA9IHByb3BzLmdldEZvcm1TdGF0ZSxcbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZXMgPSBwcm9wcy5pbml0aWFsVmFsdWVzLFxuICAgICAgICAgICAgZW5hYmxlUmVpbml0aWFsaXplID0gcHJvcHMuZW5hYmxlUmVpbml0aWFsaXplLFxuICAgICAgICAgICAga2VlcERpcnR5T25SZWluaXRpYWxpemUgPSBwcm9wcy5rZWVwRGlydHlPblJlaW5pdGlhbGl6ZTtcblxuICAgICAgICB2YXIgZm9ybVN0YXRlID0gZ2V0SW4oZ2V0Rm9ybVN0YXRlKHN0YXRlKSB8fCBlbXB0eSwgZm9ybSkgfHwgZW1wdHk7XG4gICAgICAgIHZhciBzdGF0ZUluaXRpYWwgPSBnZXRJbihmb3JtU3RhdGUsICdpbml0aWFsJyk7XG4gICAgICAgIHZhciBpbml0aWFsaXplZCA9ICEhc3RhdGVJbml0aWFsO1xuXG4gICAgICAgIHZhciBzaG91bGRVcGRhdGVJbml0aWFsVmFsdWVzID0gZW5hYmxlUmVpbml0aWFsaXplICYmIGluaXRpYWxpemVkICYmICFkZWVwRXF1YWwoaW5pdGlhbFZhbHVlcywgc3RhdGVJbml0aWFsKTtcbiAgICAgICAgdmFyIHNob3VsZFJlc2V0VmFsdWVzID0gc2hvdWxkVXBkYXRlSW5pdGlhbFZhbHVlcyAmJiAha2VlcERpcnR5T25SZWluaXRpYWxpemU7XG5cbiAgICAgICAgdmFyIGluaXRpYWwgPSBpbml0aWFsVmFsdWVzIHx8IHN0YXRlSW5pdGlhbCB8fCBlbXB0eTtcblxuICAgICAgICBpZiAoc2hvdWxkVXBkYXRlSW5pdGlhbFZhbHVlcykge1xuICAgICAgICAgIGluaXRpYWwgPSBzdGF0ZUluaXRpYWwgfHwgZW1wdHk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdmFsdWVzID0gZ2V0SW4oZm9ybVN0YXRlLCAndmFsdWVzJykgfHwgaW5pdGlhbDtcblxuICAgICAgICBpZiAoc2hvdWxkUmVzZXRWYWx1ZXMpIHtcbiAgICAgICAgICB2YWx1ZXMgPSBpbml0aWFsO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHByaXN0aW5lID0gc2hvdWxkUmVzZXRWYWx1ZXMgfHwgZGVlcEVxdWFsKGluaXRpYWwsIHZhbHVlcyk7XG4gICAgICAgIHZhciBhc3luY0Vycm9ycyA9IGdldEluKGZvcm1TdGF0ZSwgJ2FzeW5jRXJyb3JzJyk7XG4gICAgICAgIHZhciBzeW5jRXJyb3JzID0gZ2V0SW4oZm9ybVN0YXRlLCAnc3luY0Vycm9ycycpIHx8IHt9O1xuICAgICAgICB2YXIgc3luY1dhcm5pbmdzID0gZ2V0SW4oZm9ybVN0YXRlLCAnc3luY1dhcm5pbmdzJykgfHwge307XG4gICAgICAgIHZhciByZWdpc3RlcmVkRmllbGRzID0gZ2V0SW4oZm9ybVN0YXRlLCAncmVnaXN0ZXJlZEZpZWxkcycpO1xuICAgICAgICB2YXIgdmFsaWQgPSBpc1ZhbGlkKGZvcm0sIGdldEZvcm1TdGF0ZSwgZmFsc2UpKHN0YXRlKTtcbiAgICAgICAgdmFyIHZhbGlkRXhjZXB0U3VibWl0ID0gaXNWYWxpZChmb3JtLCBnZXRGb3JtU3RhdGUsIHRydWUpKHN0YXRlKTtcbiAgICAgICAgdmFyIGFueVRvdWNoZWQgPSAhIWdldEluKGZvcm1TdGF0ZSwgJ2FueVRvdWNoZWQnKTtcbiAgICAgICAgdmFyIHN1Ym1pdHRpbmcgPSAhIWdldEluKGZvcm1TdGF0ZSwgJ3N1Ym1pdHRpbmcnKTtcbiAgICAgICAgdmFyIHN1Ym1pdEZhaWxlZCA9ICEhZ2V0SW4oZm9ybVN0YXRlLCAnc3VibWl0RmFpbGVkJyk7XG4gICAgICAgIHZhciBzdWJtaXRTdWNjZWVkZWQgPSAhIWdldEluKGZvcm1TdGF0ZSwgJ3N1Ym1pdFN1Y2NlZWRlZCcpO1xuICAgICAgICB2YXIgZXJyb3IgPSBnZXRJbihmb3JtU3RhdGUsICdlcnJvcicpO1xuICAgICAgICB2YXIgd2FybmluZyA9IGdldEluKGZvcm1TdGF0ZSwgJ3dhcm5pbmcnKTtcbiAgICAgICAgdmFyIHRyaWdnZXJTdWJtaXQgPSBnZXRJbihmb3JtU3RhdGUsICd0cmlnZ2VyU3VibWl0Jyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgYW55VG91Y2hlZDogYW55VG91Y2hlZCxcbiAgICAgICAgICBhc3luY0Vycm9yczogYXN5bmNFcnJvcnMsXG4gICAgICAgICAgYXN5bmNWYWxpZGF0aW5nOiBnZXRJbihmb3JtU3RhdGUsICdhc3luY1ZhbGlkYXRpbmcnKSB8fCBmYWxzZSxcbiAgICAgICAgICBkaXJ0eTogIXByaXN0aW5lLFxuICAgICAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgICAgICBpbml0aWFsaXplZDogaW5pdGlhbGl6ZWQsXG4gICAgICAgICAgaW52YWxpZDogIXZhbGlkLFxuICAgICAgICAgIHByaXN0aW5lOiBwcmlzdGluZSxcbiAgICAgICAgICByZWdpc3RlcmVkRmllbGRzOiByZWdpc3RlcmVkRmllbGRzLFxuICAgICAgICAgIHN1Ym1pdHRpbmc6IHN1Ym1pdHRpbmcsXG4gICAgICAgICAgc3VibWl0RmFpbGVkOiBzdWJtaXRGYWlsZWQsXG4gICAgICAgICAgc3VibWl0U3VjY2VlZGVkOiBzdWJtaXRTdWNjZWVkZWQsXG4gICAgICAgICAgc3luY0Vycm9yczogc3luY0Vycm9ycyxcbiAgICAgICAgICBzeW5jV2FybmluZ3M6IHN5bmNXYXJuaW5ncyxcbiAgICAgICAgICB0cmlnZ2VyU3VibWl0OiB0cmlnZ2VyU3VibWl0LFxuICAgICAgICAgIHZhbHVlczogdmFsdWVzLFxuICAgICAgICAgIHZhbGlkOiB2YWxpZCxcbiAgICAgICAgICB2YWxpZEV4Y2VwdFN1Ym1pdDogdmFsaWRFeGNlcHRTdWJtaXQsXG4gICAgICAgICAgd2FybmluZzogd2FybmluZ1xuICAgICAgICB9O1xuICAgICAgfSwgZnVuY3Rpb24gKGRpc3BhdGNoLCBpbml0aWFsUHJvcHMpIHtcbiAgICAgICAgdmFyIGJpbmRGb3JtID0gZnVuY3Rpb24gYmluZEZvcm0oYWN0aW9uQ3JlYXRvcikge1xuICAgICAgICAgIHJldHVybiBhY3Rpb25DcmVhdG9yLmJpbmQobnVsbCwgaW5pdGlhbFByb3BzLmZvcm0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEJpbmQgdGhlIGZpcnN0IHBhcmFtZXRlciBvbiBgcHJvcHMuZm9ybWBcbiAgICAgICAgdmFyIGJvdW5kRm9ybUFDcyA9ICgwLCBfbWFwVmFsdWVzMy5kZWZhdWx0KShmb3JtQWN0aW9ucywgYmluZEZvcm0pO1xuICAgICAgICB2YXIgYm91bmRBcnJheUFDcyA9ICgwLCBfbWFwVmFsdWVzMy5kZWZhdWx0KShhcnJheUFjdGlvbnMsIGJpbmRGb3JtKTtcbiAgICAgICAgdmFyIGJvdW5kQmx1ciA9IGZ1bmN0aW9uIGJvdW5kQmx1cihmaWVsZCwgdmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gYmx1cihpbml0aWFsUHJvcHMuZm9ybSwgZmllbGQsIHZhbHVlLCAhIWluaXRpYWxQcm9wcy50b3VjaE9uQmx1cik7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBib3VuZENoYW5nZSA9IGZ1bmN0aW9uIGJvdW5kQ2hhbmdlKGZpZWxkLCB2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiBjaGFuZ2UoaW5pdGlhbFByb3BzLmZvcm0sIGZpZWxkLCB2YWx1ZSwgISFpbml0aWFsUHJvcHMudG91Y2hPbkNoYW5nZSwgISFpbml0aWFsUHJvcHMucGVyc2lzdGVudFN1Ym1pdEVycm9ycyk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBib3VuZEZvY3VzID0gYmluZEZvcm0oZm9jdXMpO1xuXG4gICAgICAgIC8vIFdyYXAgYWN0aW9uIGNyZWF0b3JzIHdpdGggYGRpc3BhdGNoYFxuICAgICAgICB2YXIgY29ubmVjdGVkRm9ybUFDcyA9ICgwLCBfcmVkdXguYmluZEFjdGlvbkNyZWF0b3JzKShib3VuZEZvcm1BQ3MsIGRpc3BhdGNoKTtcbiAgICAgICAgdmFyIGNvbm5lY3RlZEFycmF5QUNzID0ge1xuICAgICAgICAgIGluc2VydDogKDAsIF9yZWR1eC5iaW5kQWN0aW9uQ3JlYXRvcnMpKGJvdW5kQXJyYXlBQ3MuYXJyYXlJbnNlcnQsIGRpc3BhdGNoKSxcbiAgICAgICAgICBtb3ZlOiAoMCwgX3JlZHV4LmJpbmRBY3Rpb25DcmVhdG9ycykoYm91bmRBcnJheUFDcy5hcnJheU1vdmUsIGRpc3BhdGNoKSxcbiAgICAgICAgICBwb3A6ICgwLCBfcmVkdXguYmluZEFjdGlvbkNyZWF0b3JzKShib3VuZEFycmF5QUNzLmFycmF5UG9wLCBkaXNwYXRjaCksXG4gICAgICAgICAgcHVzaDogKDAsIF9yZWR1eC5iaW5kQWN0aW9uQ3JlYXRvcnMpKGJvdW5kQXJyYXlBQ3MuYXJyYXlQdXNoLCBkaXNwYXRjaCksXG4gICAgICAgICAgcmVtb3ZlOiAoMCwgX3JlZHV4LmJpbmRBY3Rpb25DcmVhdG9ycykoYm91bmRBcnJheUFDcy5hcnJheVJlbW92ZSwgZGlzcGF0Y2gpLFxuICAgICAgICAgIHJlbW92ZUFsbDogKDAsIF9yZWR1eC5iaW5kQWN0aW9uQ3JlYXRvcnMpKGJvdW5kQXJyYXlBQ3MuYXJyYXlSZW1vdmVBbGwsIGRpc3BhdGNoKSxcbiAgICAgICAgICBzaGlmdDogKDAsIF9yZWR1eC5iaW5kQWN0aW9uQ3JlYXRvcnMpKGJvdW5kQXJyYXlBQ3MuYXJyYXlTaGlmdCwgZGlzcGF0Y2gpLFxuICAgICAgICAgIHNwbGljZTogKDAsIF9yZWR1eC5iaW5kQWN0aW9uQ3JlYXRvcnMpKGJvdW5kQXJyYXlBQ3MuYXJyYXlTcGxpY2UsIGRpc3BhdGNoKSxcbiAgICAgICAgICBzd2FwOiAoMCwgX3JlZHV4LmJpbmRBY3Rpb25DcmVhdG9ycykoYm91bmRBcnJheUFDcy5hcnJheVN3YXAsIGRpc3BhdGNoKSxcbiAgICAgICAgICB1bnNoaWZ0OiAoMCwgX3JlZHV4LmJpbmRBY3Rpb25DcmVhdG9ycykoYm91bmRBcnJheUFDcy5hcnJheVVuc2hpZnQsIGRpc3BhdGNoKVxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBjb21wdXRlZEFjdGlvbnMgPSBfZXh0ZW5kcyh7fSwgY29ubmVjdGVkRm9ybUFDcywgYm91bmRBcnJheUFDcywge1xuICAgICAgICAgIGJsdXI6IGJvdW5kQmx1cixcbiAgICAgICAgICBjaGFuZ2U6IGJvdW5kQ2hhbmdlLFxuICAgICAgICAgIGFycmF5OiBjb25uZWN0ZWRBcnJheUFDcyxcbiAgICAgICAgICBmb2N1czogYm91bmRGb2N1cyxcbiAgICAgICAgICBkaXNwYXRjaDogZGlzcGF0Y2hcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29tcHV0ZWRBY3Rpb25zO1xuICAgICAgICB9O1xuICAgICAgfSwgdW5kZWZpbmVkLCB7IHdpdGhSZWY6IHRydWUgfSk7XG4gICAgICB2YXIgQ29ubmVjdGVkRm9ybSA9ICgwLCBfaG9pc3ROb25SZWFjdFN0YXRpY3MyLmRlZmF1bHQpKGNvbm5lY3RvcihGb3JtKSwgV3JhcHBlZENvbXBvbmVudCk7XG4gICAgICBDb25uZWN0ZWRGb3JtLmRlZmF1bHRQcm9wcyA9IGNvbmZpZztcblxuICAgICAgLy8gYnVpbGQgb3V0ZXIgY29tcG9uZW50IHRvIGV4cG9zZSBpbnN0YW5jZSBhcGlcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoX0NvbXBvbmVudDIpIHtcbiAgICAgICAgX2luaGVyaXRzKFJlZHV4Rm9ybSwgX0NvbXBvbmVudDIpO1xuXG4gICAgICAgIGZ1bmN0aW9uIFJlZHV4Rm9ybSgpIHtcbiAgICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVkdXhGb3JtKTtcblxuICAgICAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoUmVkdXhGb3JtLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUmVkdXhGb3JtKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgICAgIH1cblxuICAgICAgICBfY3JlYXRlQ2xhc3MoUmVkdXhGb3JtLCBbe1xuICAgICAgICAgIGtleTogJ3N1Ym1pdCcsXG4gICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN1Ym1pdCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlZnMud3JhcHBlZC5nZXRXcmFwcGVkSW5zdGFuY2UoKS5zdWJtaXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBrZXk6ICdyZXNldCcsXG4gICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVmcy53cmFwcGVkLmdldFdyYXBwZWRJbnN0YW5jZSgpLnJlc2V0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgdmFyIF9wcm9wczEwID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzID0gX3Byb3BzMTAuaW5pdGlhbFZhbHVlcyxcbiAgICAgICAgICAgICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wczEwLCBbJ2luaXRpYWxWYWx1ZXMnXSk7XG5cbiAgICAgICAgICAgIHJldHVybiAoMCwgX3JlYWN0LmNyZWF0ZUVsZW1lbnQpKENvbm5lY3RlZEZvcm0sIF9leHRlbmRzKHt9LCByZXN0LCB7XG4gICAgICAgICAgICAgIHJlZjogJ3dyYXBwZWQnLFxuICAgICAgICAgICAgICAvLyBjb252ZXJ0IGluaXRpYWxWYWx1ZXMgaWYgbmVlZCB0b1xuICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzOiBmcm9tSlMoaW5pdGlhbFZhbHVlcylcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBrZXk6ICd2YWxpZCcsXG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWZzLndyYXBwZWQuZ2V0V3JhcHBlZEluc3RhbmNlKCkuaXNWYWxpZCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgIGtleTogJ2ludmFsaWQnLFxuICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuICF0aGlzLnZhbGlkO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgIGtleTogJ3ByaXN0aW5lJyxcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlZnMud3JhcHBlZC5nZXRXcmFwcGVkSW5zdGFuY2UoKS5pc1ByaXN0aW5lKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAga2V5OiAnZGlydHknLFxuICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuICF0aGlzLnByaXN0aW5lO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgIGtleTogJ3ZhbHVlcycsXG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWZzLndyYXBwZWQuZ2V0V3JhcHBlZEluc3RhbmNlKCkuZ2V0VmFsdWVzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAga2V5OiAnZmllbGRMaXN0JyxcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIC8vIG1haW5seSBwcm92aWRlZCBmb3IgdGVzdGluZ1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVmcy53cmFwcGVkLmdldFdyYXBwZWRJbnN0YW5jZSgpLmdldEZpZWxkTGlzdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgIGtleTogJ3dyYXBwZWRJbnN0YW5jZScsXG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAvLyBmb3IgdGVzdGluZVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVmcy53cmFwcGVkLmdldFdyYXBwZWRJbnN0YW5jZSgpLnJlZnMud3JhcHBlZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1dKTtcblxuICAgICAgICByZXR1cm4gUmVkdXhGb3JtO1xuICAgICAgfShfcmVhY3QuQ29tcG9uZW50KTtcbiAgICB9O1xuICB9O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlUmVkdXhGb3JtO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC1mb3JtL2xpYi9jcmVhdGVSZWR1eEZvcm0uanNcbi8vIG1vZHVsZSBpZCA9IDIwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3RSZWR1eCA9IHJlcXVpcmUoJ3JlYWN0LXJlZHV4Jyk7XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBjcmVhdGVWYWx1ZXMgPSBmdW5jdGlvbiBjcmVhdGVWYWx1ZXMoX3JlZikge1xuICB2YXIgZ2V0SW4gPSBfcmVmLmdldEluO1xuICByZXR1cm4gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgIHZhciBfcHJvcCRnZXRGb3JtU3RhdGUkY28gPSBfZXh0ZW5kcyh7XG4gICAgICBwcm9wOiAndmFsdWVzJyxcbiAgICAgIGdldEZvcm1TdGF0ZTogZnVuY3Rpb24gZ2V0Rm9ybVN0YXRlKHN0YXRlKSB7XG4gICAgICAgIHJldHVybiBnZXRJbihzdGF0ZSwgJ2Zvcm0nKTtcbiAgICAgIH1cbiAgICB9LCBjb25maWcpLFxuICAgICAgICBmb3JtID0gX3Byb3AkZ2V0Rm9ybVN0YXRlJGNvLmZvcm0sXG4gICAgICAgIHByb3AgPSBfcHJvcCRnZXRGb3JtU3RhdGUkY28ucHJvcCxcbiAgICAgICAgZ2V0Rm9ybVN0YXRlID0gX3Byb3AkZ2V0Rm9ybVN0YXRlJGNvLmdldEZvcm1TdGF0ZTtcblxuICAgIHJldHVybiAoMCwgX3JlYWN0UmVkdXguY29ubmVjdCkoZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICByZXR1cm4gX2RlZmluZVByb3BlcnR5KHt9LCBwcm9wLCBnZXRJbihnZXRGb3JtU3RhdGUoc3RhdGUpLCBmb3JtICsgJy52YWx1ZXMnKSk7XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH0gLy8gaWdub3JlIGRpc3BhdGNoXG4gICAgKTtcbiAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZVZhbHVlcztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtZm9ybS9saWIvY3JlYXRlVmFsdWVzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3RvUGF0aDIgPSByZXF1aXJlKCdsb2Rhc2gvdG9QYXRoJyk7XG5cbnZhciBfdG9QYXRoMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RvUGF0aDIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgY3JlYXRlRGVsZXRlSW5XaXRoQ2xlYW5VcCA9IGZ1bmN0aW9uIGNyZWF0ZURlbGV0ZUluV2l0aENsZWFuVXAoX3JlZikge1xuICB2YXIgZGVlcEVxdWFsID0gX3JlZi5kZWVwRXF1YWwsXG4gICAgICBlbXB0eSA9IF9yZWYuZW1wdHksXG4gICAgICBnZXRJbiA9IF9yZWYuZ2V0SW4sXG4gICAgICBkZWxldGVJbiA9IF9yZWYuZGVsZXRlSW4sXG4gICAgICBzZXRJbiA9IF9yZWYuc2V0SW47XG5cbiAgdmFyIGRlbGV0ZUluV2l0aENsZWFuVXAgPSBmdW5jdGlvbiBkZWxldGVJbldpdGhDbGVhblVwKHN0YXRlLCBwYXRoKSB7XG4gICAgaWYgKHBhdGhbcGF0aC5sZW5ndGggLSAxXSA9PT0gJ10nKSB7XG4gICAgICAvLyBhcnJheSBwYXRoXG4gICAgICB2YXIgcGF0aFRva2VucyA9ICgwLCBfdG9QYXRoMy5kZWZhdWx0KShwYXRoKTtcbiAgICAgIHBhdGhUb2tlbnMucG9wKCk7XG4gICAgICB2YXIgcGFyZW50ID0gZ2V0SW4oc3RhdGUsIHBhdGhUb2tlbnMuam9pbignLicpKTtcbiAgICAgIHJldHVybiBwYXJlbnQgPyBzZXRJbihzdGF0ZSwgcGF0aCwgdW5kZWZpbmVkKSA6IHN0YXRlO1xuICAgIH1cblxuICAgIHZhciByZXN1bHQgPSBzdGF0ZTtcbiAgICBpZiAoZ2V0SW4oc3RhdGUsIHBhdGgpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlc3VsdCA9IGRlbGV0ZUluKHN0YXRlLCBwYXRoKTtcbiAgICB9XG5cbiAgICB2YXIgZG90SW5kZXggPSBwYXRoLmxhc3RJbmRleE9mKCcuJyk7XG4gICAgaWYgKGRvdEluZGV4ID4gMCkge1xuICAgICAgdmFyIHBhcmVudFBhdGggPSBwYXRoLnN1YnN0cmluZygwLCBkb3RJbmRleCk7XG4gICAgICBpZiAocGFyZW50UGF0aFtwYXJlbnRQYXRoLmxlbmd0aCAtIDFdICE9PSAnXScpIHtcbiAgICAgICAgdmFyIF9wYXJlbnQgPSBnZXRJbihyZXN1bHQsIHBhcmVudFBhdGgpO1xuICAgICAgICBpZiAoZGVlcEVxdWFsKF9wYXJlbnQsIGVtcHR5KSkge1xuICAgICAgICAgIHJldHVybiBkZWxldGVJbldpdGhDbGVhblVwKHJlc3VsdCwgcGFyZW50UGF0aCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICByZXR1cm4gZGVsZXRlSW5XaXRoQ2xlYW5VcDtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZURlbGV0ZUluV2l0aENsZWFuVXA7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4LWZvcm0vbGliL2RlbGV0ZUluV2l0aENsZWFuVXAuanNcbi8vIG1vZHVsZSBpZCA9IDIwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfaXNFdmVudCA9IHJlcXVpcmUoJy4vaXNFdmVudCcpO1xuXG52YXIgX2lzRXZlbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNFdmVudCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBnZXRTZWxlY3RlZFZhbHVlcyA9IGZ1bmN0aW9uIGdldFNlbGVjdGVkVmFsdWVzKG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBpZiAob3B0aW9ucykge1xuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBvcHRpb25zLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdmFyIG9wdGlvbiA9IG9wdGlvbnNbaW5kZXhdO1xuICAgICAgaWYgKG9wdGlvbi5zZWxlY3RlZCkge1xuICAgICAgICByZXN1bHQucHVzaChvcHRpb24udmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxudmFyIGdldFZhbHVlID0gZnVuY3Rpb24gZ2V0VmFsdWUoZXZlbnQsIGlzUmVhY3ROYXRpdmUpIHtcbiAgaWYgKCgwLCBfaXNFdmVudDIuZGVmYXVsdCkoZXZlbnQpKSB7XG4gICAgaWYgKCFpc1JlYWN0TmF0aXZlICYmIGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LnRleHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGV2ZW50Lm5hdGl2ZUV2ZW50LnRleHQ7XG4gICAgfVxuICAgIGlmIChpc1JlYWN0TmF0aXZlICYmIGV2ZW50Lm5hdGl2ZUV2ZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBldmVudC5uYXRpdmVFdmVudC50ZXh0O1xuICAgIH1cbiAgICB2YXIgX2V2ZW50JHRhcmdldCA9IGV2ZW50LnRhcmdldCxcbiAgICAgICAgdHlwZSA9IF9ldmVudCR0YXJnZXQudHlwZSxcbiAgICAgICAgdmFsdWUgPSBfZXZlbnQkdGFyZ2V0LnZhbHVlLFxuICAgICAgICBjaGVja2VkID0gX2V2ZW50JHRhcmdldC5jaGVja2VkLFxuICAgICAgICBmaWxlcyA9IF9ldmVudCR0YXJnZXQuZmlsZXMsXG4gICAgICAgIGRhdGFUcmFuc2ZlciA9IGV2ZW50LmRhdGFUcmFuc2ZlcjtcblxuICAgIGlmICh0eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICByZXR1cm4gY2hlY2tlZCB8fCAnJztcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdmaWxlJykge1xuICAgICAgcmV0dXJuIGZpbGVzIHx8IGRhdGFUcmFuc2ZlciAmJiBkYXRhVHJhbnNmZXIuZmlsZXM7XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAnc2VsZWN0LW11bHRpcGxlJykge1xuICAgICAgcmV0dXJuIGdldFNlbGVjdGVkVmFsdWVzKGV2ZW50LnRhcmdldC5vcHRpb25zKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHJldHVybiBldmVudDtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGdldFZhbHVlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC1mb3JtL2xpYi9ldmVudHMvZ2V0VmFsdWUuanNcbi8vIG1vZHVsZSBpZCA9IDIwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfc2lsZW5jZUV2ZW50ID0gcmVxdWlyZSgnLi9zaWxlbmNlRXZlbnQnKTtcblxudmFyIF9zaWxlbmNlRXZlbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2lsZW5jZUV2ZW50KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHNpbGVuY2VFdmVudHMgPSBmdW5jdGlvbiBzaWxlbmNlRXZlbnRzKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiAoMCwgX3NpbGVuY2VFdmVudDIuZGVmYXVsdCkoZXZlbnQpID8gZm4uYXBwbHkodW5kZWZpbmVkLCBhcmdzKSA6IGZuLmFwcGx5KHVuZGVmaW5lZCwgW2V2ZW50XS5jb25jYXQoYXJncykpO1xuICB9O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gc2lsZW5jZUV2ZW50cztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtZm9ybS9saWIvZXZlbnRzL3NpbGVuY2VFdmVudHMuanNcbi8vIG1vZHVsZSBpZCA9IDIwN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlRm9ybVZhbHVlU2VsZWN0b3IgPSByZXF1aXJlKCcuL2NyZWF0ZUZvcm1WYWx1ZVNlbGVjdG9yJyk7XG5cbnZhciBfY3JlYXRlRm9ybVZhbHVlU2VsZWN0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlRm9ybVZhbHVlU2VsZWN0b3IpO1xuXG52YXIgX3BsYWluID0gcmVxdWlyZSgnLi9zdHJ1Y3R1cmUvcGxhaW4nKTtcblxudmFyIF9wbGFpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wbGFpbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9ICgwLCBfY3JlYXRlRm9ybVZhbHVlU2VsZWN0b3IyLmRlZmF1bHQpKF9wbGFpbjIuZGVmYXVsdCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4LWZvcm0vbGliL2Zvcm1WYWx1ZVNlbGVjdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAyMDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3BsYWluID0gcmVxdWlyZSgnLi9zdHJ1Y3R1cmUvcGxhaW4nKTtcblxudmFyIF9wbGFpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wbGFpbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciB0b0FycmF5ID0gZnVuY3Rpb24gdG9BcnJheSh2YWx1ZSkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFt2YWx1ZV07XG59O1xuXG52YXIgZ2V0RXJyb3IgPSBmdW5jdGlvbiBnZXRFcnJvcih2YWx1ZSwgdmFsdWVzLCBwcm9wcywgdmFsaWRhdG9ycykge1xuICB2YXIgYXJyYXkgPSB0b0FycmF5KHZhbGlkYXRvcnMpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGVycm9yID0gYXJyYXlbaV0odmFsdWUsIHZhbHVlcywgcHJvcHMpO1xuICAgIGlmIChlcnJvcikge1xuICAgICAgcmV0dXJuIGVycm9yO1xuICAgIH1cbiAgfVxufTtcblxudmFyIGdlbmVyYXRlVmFsaWRhdG9yID0gZnVuY3Rpb24gZ2VuZXJhdGVWYWxpZGF0b3IodmFsaWRhdG9ycywgX3JlZikge1xuICB2YXIgZ2V0SW4gPSBfcmVmLmdldEluO1xuICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlcywgcHJvcHMpIHtcbiAgICB2YXIgZXJyb3JzID0ge307XG4gICAgT2JqZWN0LmtleXModmFsaWRhdG9ycykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgdmFyIHZhbHVlID0gZ2V0SW4odmFsdWVzLCBuYW1lKTtcbiAgICAgIHZhciBlcnJvciA9IGdldEVycm9yKHZhbHVlLCB2YWx1ZXMsIHByb3BzLCB2YWxpZGF0b3JzW25hbWVdKTtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBlcnJvcnMgPSBfcGxhaW4yLmRlZmF1bHQuc2V0SW4oZXJyb3JzLCBuYW1lLCBlcnJvcik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGVycm9ycztcbiAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGdlbmVyYXRlVmFsaWRhdG9yO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC1mb3JtL2xpYi9nZW5lcmF0ZVZhbGlkYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMjA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9nZXRGb3JtQXN5bmNFcnJvcnMgPSByZXF1aXJlKCcuL3NlbGVjdG9ycy9nZXRGb3JtQXN5bmNFcnJvcnMnKTtcblxudmFyIF9nZXRGb3JtQXN5bmNFcnJvcnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0Rm9ybUFzeW5jRXJyb3JzKTtcblxudmFyIF9wbGFpbiA9IHJlcXVpcmUoJy4vc3RydWN0dXJlL3BsYWluJyk7XG5cbnZhciBfcGxhaW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGxhaW4pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSAoMCwgX2dldEZvcm1Bc3luY0Vycm9yczIuZGVmYXVsdCkoX3BsYWluMi5kZWZhdWx0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtZm9ybS9saWIvZ2V0Rm9ybUFzeW5jRXJyb3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2dldEZvcm1Jbml0aWFsVmFsdWVzID0gcmVxdWlyZSgnLi9zZWxlY3RvcnMvZ2V0Rm9ybUluaXRpYWxWYWx1ZXMnKTtcblxudmFyIF9nZXRGb3JtSW5pdGlhbFZhbHVlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRGb3JtSW5pdGlhbFZhbHVlcyk7XG5cbnZhciBfcGxhaW4gPSByZXF1aXJlKCcuL3N0cnVjdHVyZS9wbGFpbicpO1xuXG52YXIgX3BsYWluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BsYWluKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gKDAsIF9nZXRGb3JtSW5pdGlhbFZhbHVlczIuZGVmYXVsdCkoX3BsYWluMi5kZWZhdWx0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtZm9ybS9saWIvZ2V0Rm9ybUluaXRpYWxWYWx1ZXMuanNcbi8vIG1vZHVsZSBpZCA9IDIxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZ2V0Rm9ybU1ldGEgPSByZXF1aXJlKCcuL3NlbGVjdG9ycy9nZXRGb3JtTWV0YScpO1xuXG52YXIgX2dldEZvcm1NZXRhMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldEZvcm1NZXRhKTtcblxudmFyIF9wbGFpbiA9IHJlcXVpcmUoJy4vc3RydWN0dXJlL3BsYWluJyk7XG5cbnZhciBfcGxhaW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGxhaW4pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSAoMCwgX2dldEZvcm1NZXRhMi5kZWZhdWx0KShfcGxhaW4yLmRlZmF1bHQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC1mb3JtL2xpYi9nZXRGb3JtTWV0YS5qc1xuLy8gbW9kdWxlIGlkID0gMjEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9nZXRGb3JtTmFtZXMgPSByZXF1aXJlKCcuL3NlbGVjdG9ycy9nZXRGb3JtTmFtZXMnKTtcblxudmFyIF9nZXRGb3JtTmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0Rm9ybU5hbWVzKTtcblxudmFyIF9wbGFpbiA9IHJlcXVpcmUoJy4vc3RydWN0dXJlL3BsYWluJyk7XG5cbnZhciBfcGxhaW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGxhaW4pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSAoMCwgX2dldEZvcm1OYW1lczIuZGVmYXVsdCkoX3BsYWluMi5kZWZhdWx0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtZm9ybS9saWIvZ2V0Rm9ybU5hbWVzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2dldEZvcm1TdWJtaXRFcnJvcnMgPSByZXF1aXJlKCcuL3NlbGVjdG9ycy9nZXRGb3JtU3VibWl0RXJyb3JzJyk7XG5cbnZhciBfZ2V0Rm9ybVN1Ym1pdEVycm9yczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRGb3JtU3VibWl0RXJyb3JzKTtcblxudmFyIF9wbGFpbiA9IHJlcXVpcmUoJy4vc3RydWN0dXJlL3BsYWluJyk7XG5cbnZhciBfcGxhaW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGxhaW4pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSAoMCwgX2dldEZvcm1TdWJtaXRFcnJvcnMyLmRlZmF1bHQpKF9wbGFpbjIuZGVmYXVsdCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4LWZvcm0vbGliL2dldEZvcm1TdWJtaXRFcnJvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDIxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZ2V0Rm9ybVN5bmNFcnJvcnMgPSByZXF1aXJlKCcuL3NlbGVjdG9ycy9nZXRGb3JtU3luY0Vycm9ycycpO1xuXG52YXIgX2dldEZvcm1TeW5jRXJyb3JzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldEZvcm1TeW5jRXJyb3JzKTtcblxudmFyIF9wbGFpbiA9IHJlcXVpcmUoJy4vc3RydWN0dXJlL3BsYWluJyk7XG5cbnZhciBfcGxhaW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGxhaW4pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSAoMCwgX2dldEZvcm1TeW5jRXJyb3JzMi5kZWZhdWx0KShfcGxhaW4yLmRlZmF1bHQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC1mb3JtL2xpYi9nZXRGb3JtU3luY0Vycm9ycy5qc1xuLy8gbW9kdWxlIGlkID0gMjE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9nZXRGb3JtU3luY1dhcm5pbmdzID0gcmVxdWlyZSgnLi9zZWxlY3RvcnMvZ2V0Rm9ybVN5bmNXYXJuaW5ncycpO1xuXG52YXIgX2dldEZvcm1TeW5jV2FybmluZ3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0Rm9ybVN5bmNXYXJuaW5ncyk7XG5cbnZhciBfcGxhaW4gPSByZXF1aXJlKCcuL3N0cnVjdHVyZS9wbGFpbicpO1xuXG52YXIgX3BsYWluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BsYWluKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gKDAsIF9nZXRGb3JtU3luY1dhcm5pbmdzMi5kZWZhdWx0KShfcGxhaW4yLmRlZmF1bHQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC1mb3JtL2xpYi9nZXRGb3JtU3luY1dhcm5pbmdzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2dldEZvcm1WYWx1ZXMgPSByZXF1aXJlKCcuL3NlbGVjdG9ycy9nZXRGb3JtVmFsdWVzJyk7XG5cbnZhciBfZ2V0Rm9ybVZhbHVlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRGb3JtVmFsdWVzKTtcblxudmFyIF9wbGFpbiA9IHJlcXVpcmUoJy4vc3RydWN0dXJlL3BsYWluJyk7XG5cbnZhciBfcGxhaW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGxhaW4pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSAoMCwgX2dldEZvcm1WYWx1ZXMyLmRlZmF1bHQpKF9wbGFpbjIuZGVmYXVsdCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4LWZvcm0vbGliL2dldEZvcm1WYWx1ZXMuanNcbi8vIG1vZHVsZSBpZCA9IDIxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfaXNQcm9taXNlID0gcmVxdWlyZSgnaXMtcHJvbWlzZScpO1xuXG52YXIgX2lzUHJvbWlzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1Byb21pc2UpO1xuXG52YXIgX1N1Ym1pc3Npb25FcnJvciA9IHJlcXVpcmUoJy4vU3VibWlzc2lvbkVycm9yJyk7XG5cbnZhciBfU3VibWlzc2lvbkVycm9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1N1Ym1pc3Npb25FcnJvcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gZWxzZSB7IHJldHVybiBBcnJheS5mcm9tKGFycik7IH0gfVxuXG52YXIgaGFuZGxlU3VibWl0ID0gZnVuY3Rpb24gaGFuZGxlU3VibWl0KHN1Ym1pdCwgcHJvcHMsIHZhbGlkLCBhc3luY1ZhbGlkYXRlLCBmaWVsZHMpIHtcbiAgdmFyIGRpc3BhdGNoID0gcHJvcHMuZGlzcGF0Y2gsXG4gICAgICBvblN1Ym1pdEZhaWwgPSBwcm9wcy5vblN1Ym1pdEZhaWwsXG4gICAgICBvblN1Ym1pdFN1Y2Nlc3MgPSBwcm9wcy5vblN1Ym1pdFN1Y2Nlc3MsXG4gICAgICBzdGFydFN1Ym1pdCA9IHByb3BzLnN0YXJ0U3VibWl0LFxuICAgICAgc3RvcFN1Ym1pdCA9IHByb3BzLnN0b3BTdWJtaXQsXG4gICAgICBzZXRTdWJtaXRGYWlsZWQgPSBwcm9wcy5zZXRTdWJtaXRGYWlsZWQsXG4gICAgICBzZXRTdWJtaXRTdWNjZWVkZWQgPSBwcm9wcy5zZXRTdWJtaXRTdWNjZWVkZWQsXG4gICAgICBzeW5jRXJyb3JzID0gcHJvcHMuc3luY0Vycm9ycyxcbiAgICAgIHRvdWNoID0gcHJvcHMudG91Y2gsXG4gICAgICB2YWx1ZXMgPSBwcm9wcy52YWx1ZXMsXG4gICAgICBwZXJzaXN0ZW50U3VibWl0RXJyb3JzID0gcHJvcHMucGVyc2lzdGVudFN1Ym1pdEVycm9ycztcblxuXG4gIHRvdWNoLmFwcGx5KHVuZGVmaW5lZCwgX3RvQ29uc3VtYWJsZUFycmF5KGZpZWxkcykpOyAvLyBtYXJrIGFsbCBmaWVsZHMgYXMgdG91Y2hlZFxuXG4gIGlmICh2YWxpZCB8fCBwZXJzaXN0ZW50U3VibWl0RXJyb3JzKSB7XG4gICAgdmFyIGRvU3VibWl0ID0gZnVuY3Rpb24gZG9TdWJtaXQoKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gdm9pZCAwO1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVzdWx0ID0gc3VibWl0KHZhbHVlcywgZGlzcGF0Y2gsIHByb3BzKTtcbiAgICAgIH0gY2F0Y2ggKHN1Ym1pdEVycm9yKSB7XG4gICAgICAgIHZhciBlcnJvciA9IHN1Ym1pdEVycm9yIGluc3RhbmNlb2YgX1N1Ym1pc3Npb25FcnJvcjIuZGVmYXVsdCA/IHN1Ym1pdEVycm9yLmVycm9ycyA6IHVuZGVmaW5lZDtcbiAgICAgICAgc3RvcFN1Ym1pdChlcnJvcik7XG4gICAgICAgIHNldFN1Ym1pdEZhaWxlZC5hcHBseSh1bmRlZmluZWQsIF90b0NvbnN1bWFibGVBcnJheShmaWVsZHMpKTtcbiAgICAgICAgaWYgKG9uU3VibWl0RmFpbCkge1xuICAgICAgICAgIG9uU3VibWl0RmFpbChlcnJvciwgZGlzcGF0Y2gsIHN1Ym1pdEVycm9yLCBwcm9wcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yIHx8IG9uU3VibWl0RmFpbCkge1xuICAgICAgICAgIC8vIGlmIHlvdSd2ZSBwcm92aWRlZCBhbiBvblN1Ym1pdEZhaWwgY2FsbGJhY2ssIGRvbid0IHJlLXRocm93IHRoZSBlcnJvclxuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBzdWJtaXRFcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCgwLCBfaXNQcm9taXNlMi5kZWZhdWx0KShyZXN1bHQpKSB7XG4gICAgICAgIHN0YXJ0U3VibWl0KCk7XG4gICAgICAgIHJldHVybiByZXN1bHQudGhlbihmdW5jdGlvbiAoc3VibWl0UmVzdWx0KSB7XG4gICAgICAgICAgc3RvcFN1Ym1pdCgpO1xuICAgICAgICAgIHNldFN1Ym1pdFN1Y2NlZWRlZCgpO1xuICAgICAgICAgIGlmIChvblN1Ym1pdFN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIG9uU3VibWl0U3VjY2VzcyhzdWJtaXRSZXN1bHQsIGRpc3BhdGNoLCBwcm9wcyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBzdWJtaXRSZXN1bHQ7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChzdWJtaXRFcnJvcikge1xuICAgICAgICAgIHZhciBlcnJvciA9IHN1Ym1pdEVycm9yIGluc3RhbmNlb2YgX1N1Ym1pc3Npb25FcnJvcjIuZGVmYXVsdCA/IHN1Ym1pdEVycm9yLmVycm9ycyA6IHVuZGVmaW5lZDtcbiAgICAgICAgICBzdG9wU3VibWl0KGVycm9yKTtcbiAgICAgICAgICBzZXRTdWJtaXRGYWlsZWQuYXBwbHkodW5kZWZpbmVkLCBfdG9Db25zdW1hYmxlQXJyYXkoZmllbGRzKSk7XG4gICAgICAgICAgaWYgKG9uU3VibWl0RmFpbCkge1xuICAgICAgICAgICAgb25TdWJtaXRGYWlsKGVycm9yLCBkaXNwYXRjaCwgc3VibWl0RXJyb3IsIHByb3BzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGVycm9yIHx8IG9uU3VibWl0RmFpbCkge1xuICAgICAgICAgICAgLy8gaWYgeW91J3ZlIHByb3ZpZGVkIGFuIG9uU3VibWl0RmFpbCBjYWxsYmFjaywgZG9uJ3QgcmUtdGhyb3cgdGhlIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IHN1Ym1pdEVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRTdWJtaXRTdWNjZWVkZWQoKTtcbiAgICAgICAgaWYgKG9uU3VibWl0U3VjY2Vzcykge1xuICAgICAgICAgIG9uU3VibWl0U3VjY2VzcyhyZXN1bHQsIGRpc3BhdGNoLCBwcm9wcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIHZhciBhc3luY1ZhbGlkYXRlUmVzdWx0ID0gYXN5bmNWYWxpZGF0ZSAmJiBhc3luY1ZhbGlkYXRlKCk7XG4gICAgaWYgKGFzeW5jVmFsaWRhdGVSZXN1bHQpIHtcbiAgICAgIHJldHVybiBhc3luY1ZhbGlkYXRlUmVzdWx0LnRoZW4oZnVuY3Rpb24gKGFzeW5jRXJyb3JzKSB7XG4gICAgICAgIGlmIChhc3luY0Vycm9ycykge1xuICAgICAgICAgIHRocm93IGFzeW5jRXJyb3JzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkb1N1Ym1pdCgpO1xuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGFzeW5jRXJyb3JzKSB7XG4gICAgICAgIHNldFN1Ym1pdEZhaWxlZC5hcHBseSh1bmRlZmluZWQsIF90b0NvbnN1bWFibGVBcnJheShmaWVsZHMpKTtcbiAgICAgICAgaWYgKG9uU3VibWl0RmFpbCkge1xuICAgICAgICAgIG9uU3VibWl0RmFpbChhc3luY0Vycm9ycywgZGlzcGF0Y2gsIG51bGwsIHByb3BzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoYXN5bmNFcnJvcnMpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkb1N1Ym1pdCgpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzZXRTdWJtaXRGYWlsZWQuYXBwbHkodW5kZWZpbmVkLCBfdG9Db25zdW1hYmxlQXJyYXkoZmllbGRzKSk7XG4gICAgaWYgKG9uU3VibWl0RmFpbCkge1xuICAgICAgb25TdWJtaXRGYWlsKHN5bmNFcnJvcnMsIGRpc3BhdGNoLCBudWxsLCBwcm9wcyk7XG4gICAgfVxuICAgIHJldHVybiBzeW5jRXJyb3JzO1xuICB9XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBoYW5kbGVTdWJtaXQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4LWZvcm0vbGliL2hhbmRsZVN1Ym1pdC5qc1xuLy8gbW9kdWxlIGlkID0gMjE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBnZXRFcnJvcktleXMgPSBmdW5jdGlvbiBnZXRFcnJvcktleXMobmFtZSwgdHlwZSkge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICdGaWVsZCc6XG4gICAgICByZXR1cm4gW25hbWUsIG5hbWUgKyAnLl9lcnJvciddO1xuICAgIGNhc2UgJ0ZpZWxkQXJyYXknOlxuICAgICAgcmV0dXJuIFtuYW1lICsgJy5fZXJyb3InXTtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGZpZWxkIHR5cGUnKTtcbiAgfVxufTtcblxudmFyIGNyZWF0ZUhhc0Vycm9yID0gZnVuY3Rpb24gY3JlYXRlSGFzRXJyb3IoX3JlZikge1xuICB2YXIgZ2V0SW4gPSBfcmVmLmdldEluO1xuXG4gIHZhciBoYXNFcnJvciA9IGZ1bmN0aW9uIGhhc0Vycm9yKGZpZWxkLCBzeW5jRXJyb3JzLCBhc3luY0Vycm9ycywgc3VibWl0RXJyb3JzKSB7XG4gICAgaWYgKCFzeW5jRXJyb3JzICYmICFhc3luY0Vycm9ycyAmJiAhc3VibWl0RXJyb3JzKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIG5hbWUgPSBnZXRJbihmaWVsZCwgJ25hbWUnKTtcbiAgICB2YXIgdHlwZSA9IGdldEluKGZpZWxkLCAndHlwZScpO1xuICAgIHJldHVybiBnZXRFcnJvcktleXMobmFtZSwgdHlwZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gZ2V0SW4oc3luY0Vycm9ycywga2V5KSB8fCBnZXRJbihhc3luY0Vycm9ycywga2V5KSB8fCBnZXRJbihzdWJtaXRFcnJvcnMsIGtleSk7XG4gICAgfSk7XG4gIH07XG4gIHJldHVybiBoYXNFcnJvcjtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZUhhc0Vycm9yO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC1mb3JtL2xpYi9oYXNFcnJvci5qc1xuLy8gbW9kdWxlIGlkID0gMjE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9oYXNTdWJtaXRGYWlsZWQgPSByZXF1aXJlKCcuL3NlbGVjdG9ycy9oYXNTdWJtaXRGYWlsZWQnKTtcblxudmFyIF9oYXNTdWJtaXRGYWlsZWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGFzU3VibWl0RmFpbGVkKTtcblxudmFyIF9wbGFpbiA9IHJlcXVpcmUoJy4vc3RydWN0dXJlL3BsYWluJyk7XG5cbnZhciBfcGxhaW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGxhaW4pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSAoMCwgX2hhc1N1Ym1pdEZhaWxlZDIuZGVmYXVsdCkoX3BsYWluMi5kZWZhdWx0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtZm9ybS9saWIvaGFzU3VibWl0RmFpbGVkLmpzXG4vLyBtb2R1bGUgaWQgPSAyMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2hhc1N1Ym1pdFN1Y2NlZWRlZCA9IHJlcXVpcmUoJy4vc2VsZWN0b3JzL2hhc1N1Ym1pdFN1Y2NlZWRlZCcpO1xuXG52YXIgX2hhc1N1Ym1pdFN1Y2NlZWRlZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oYXNTdWJtaXRTdWNjZWVkZWQpO1xuXG52YXIgX3BsYWluID0gcmVxdWlyZSgnLi9zdHJ1Y3R1cmUvcGxhaW4nKTtcblxudmFyIF9wbGFpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wbGFpbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9ICgwLCBfaGFzU3VibWl0U3VjY2VlZGVkMi5kZWZhdWx0KShfcGxhaW4yLmRlZmF1bHQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC1mb3JtL2xpYi9oYXNTdWJtaXRTdWNjZWVkZWQuanNcbi8vIG1vZHVsZSBpZCA9IDIyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfaXNEaXJ0eSA9IHJlcXVpcmUoJy4vc2VsZWN0b3JzL2lzRGlydHknKTtcblxudmFyIF9pc0RpcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzRGlydHkpO1xuXG52YXIgX3BsYWluID0gcmVxdWlyZSgnLi9zdHJ1Y3R1cmUvcGxhaW4nKTtcblxudmFyIF9wbGFpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wbGFpbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9ICgwLCBfaXNEaXJ0eTIuZGVmYXVsdCkoX3BsYWluMi5kZWZhdWx0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtZm9ybS9saWIvaXNEaXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMjIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9pc0ludmFsaWQgPSByZXF1aXJlKCcuL3NlbGVjdG9ycy9pc0ludmFsaWQnKTtcblxudmFyIF9pc0ludmFsaWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNJbnZhbGlkKTtcblxudmFyIF9wbGFpbiA9IHJlcXVpcmUoJy4vc3RydWN0dXJlL3BsYWluJyk7XG5cbnZhciBfcGxhaW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGxhaW4pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSAoMCwgX2lzSW52YWxpZDIuZGVmYXVsdCkoX3BsYWluMi5kZWZhdWx0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtZm9ybS9saWIvaXNJbnZhbGlkLmpzXG4vLyBtb2R1bGUgaWQgPSAyMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2lzUHJpc3RpbmUgPSByZXF1aXJlKCcuL3NlbGVjdG9ycy9pc1ByaXN0aW5lJyk7XG5cbnZhciBfaXNQcmlzdGluZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1ByaXN0aW5lKTtcblxudmFyIF9wbGFpbiA9IHJlcXVpcmUoJy4vc3RydWN0dXJlL3BsYWluJyk7XG5cbnZhciBfcGxhaW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGxhaW4pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSAoMCwgX2lzUHJpc3RpbmUyLmRlZmF1bHQpKF9wbGFpbjIuZGVmYXVsdCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4LWZvcm0vbGliL2lzUHJpc3RpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDIyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgaXNSZWFjdE5hdGl2ZSA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5uYXZpZ2F0b3IgJiYgd2luZG93Lm5hdmlnYXRvci5wcm9kdWN0ICYmIHdpbmRvdy5uYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ1JlYWN0TmF0aXZlJztcblxuZXhwb3J0cy5kZWZhdWx0ID0gaXNSZWFjdE5hdGl2ZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtZm9ybS9saWIvaXNSZWFjdE5hdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9pc1N1Ym1pdHRpbmcgPSByZXF1aXJlKCcuL3NlbGVjdG9ycy9pc1N1Ym1pdHRpbmcnKTtcblxudmFyIF9pc1N1Ym1pdHRpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNTdWJtaXR0aW5nKTtcblxudmFyIF9wbGFpbiA9IHJlcXVpcmUoJy4vc3RydWN0dXJlL3BsYWluJyk7XG5cbnZhciBfcGxhaW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGxhaW4pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSAoMCwgX2lzU3VibWl0dGluZzIuZGVmYXVsdCkoX3BsYWluMi5kZWZhdWx0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtZm9ybS9saWIvaXNTdWJtaXR0aW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAyMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2lzVmFsaWQgPSByZXF1aXJlKCcuL3NlbGVjdG9ycy9pc1ZhbGlkJyk7XG5cbnZhciBfaXNWYWxpZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1ZhbGlkKTtcblxudmFyIF9wbGFpbiA9IHJlcXVpcmUoJy4vc3RydWN0dXJlL3BsYWluJyk7XG5cbnZhciBfcGxhaW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGxhaW4pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSAoMCwgX2lzVmFsaWQyLmRlZmF1bHQpKF9wbGFpbjIuZGVmYXVsdCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4LWZvcm0vbGliL2lzVmFsaWQuanNcbi8vIG1vZHVsZSBpZCA9IDIyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmZpZWxkUHJvcFR5cGVzID0gZXhwb3J0cy5maWVsZE1ldGFQcm9wVHlwZXMgPSBleHBvcnRzLmZpZWxkSW5wdXRQcm9wVHlwZXMgPSB1bmRlZmluZWQ7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgYW55ID0gX3Byb3BUeXBlczIuZGVmYXVsdC5hbnksXG4gICAgYm9vbCA9IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgICBmdW5jID0gX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAgIHNoYXBlID0gX3Byb3BUeXBlczIuZGVmYXVsdC5zaGFwZSxcbiAgICBzdHJpbmcgPSBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgICBvbmVPZlR5cGUgPSBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZSxcbiAgICBvYmplY3QgPSBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdDtcblxuXG52YXIgcHJvcFR5cGVzID0ge1xuICAvLyBTdGF0ZTpcbiAgYW55VG91Y2hlZDogYm9vbC5pc1JlcXVpcmVkLCAvLyB0cnVlIGlmIGFueSBvZiB0aGUgZmllbGRzIGhhdmUgYmVlbiBtYXJrZWQgYXMgdG91Y2hlZFxuICBhc3luY1ZhbGlkYXRpbmc6IG9uZU9mVHlwZShbYm9vbCwgc3RyaW5nXSkuaXNSZXF1aXJlZCwgLy8gdHJ1ZSBpZiBhc3luYyB2YWxpZGF0aW9uIGlzIHJ1bm5pbmcsIGEgc3RyaW5nIGlmIGEgZmllbGQgdHJpZ2dlcmVkIGFzeW5jIHZhbGlkYXRpb25cbiAgZGlydHk6IGJvb2wuaXNSZXF1aXJlZCwgLy8gdHJ1ZSBpZiBhbnkgdmFsdWVzIGFyZSBkaWZmZXJlbnQgZnJvbSBpbml0aWFsVmFsdWVzXG4gIGVycm9yOiBhbnksIC8vIGZvcm0td2lkZSBlcnJvciBmcm9tICdfZXJyb3InIGtleSBpbiB2YWxpZGF0aW9uIHJlc3VsdFxuICBmb3JtOiBzdHJpbmcuaXNSZXF1aXJlZCwgLy8gdGhlIG5hbWUgb2YgdGhlIGZvcm1cbiAgaW52YWxpZDogYm9vbC5pc1JlcXVpcmVkLCAvLyB0cnVlIGlmIHRoZXJlIGFyZSBhbnkgdmFsaWRhdGlvbiBlcnJvcnNcbiAgaW5pdGlhbGl6ZWQ6IGJvb2wuaXNSZXF1aXJlZCwgLy8gdHJ1ZSBpZiB0aGUgZm9ybSBoYXMgYmVlbiBpbml0aWFsaXplZFxuICBpbml0aWFsVmFsdWVzOiBvYmplY3QsIC8vIHRoZSBpbml0aWFsVmFsdWVzIG9iamVjdCBwYXNzZWQgdG8gcmVkdXhGb3JtXG4gIHByaXN0aW5lOiBib29sLmlzUmVxdWlyZWQsIC8vIHRydWUgaWYgdGhlIHZhbHVlcyBhcmUgdGhlIHNhbWUgYXMgaW5pdGlhbFZhbHVlc1xuICBwdXJlOiBib29sLmlzUmVxdWlyZWQsIC8vIGlmIHRydWUsIGltcGxlbWVudHMgc2hvdWxkQ29tcG9uZW50VXBkYXRlXG4gIHN1Ym1pdHRpbmc6IGJvb2wuaXNSZXF1aXJlZCwgLy8gdHJ1ZSBpZiB0aGUgZm9ybSBpcyBpbiB0aGUgcHJvY2VzcyBvZiBiZWluZyBzdWJtaXR0ZWRcbiAgc3VibWl0RmFpbGVkOiBib29sLmlzUmVxdWlyZWQsIC8vIHRydWUgaWYgdGhlIGZvcm0gd2FzIHN1Ym1pdHRlZCBhbmQgZmFpbGVkIGZvciBhbnkgcmVhc29uXG4gIHN1Ym1pdFN1Y2NlZWRlZDogYm9vbC5pc1JlcXVpcmVkLCAvLyB0cnVlIGlmIHRoZSBmb3JtIHdhcyBzdWNjZXNzZnVsbHkgc3VibWl0dGVkXG4gIHZhbGlkOiBib29sLmlzUmVxdWlyZWQsIC8vIHRydWUgaWYgdGhlcmUgYXJlIG5vIHZhbGlkYXRpb24gZXJyb3JzXG4gIHdhcm5pbmc6IGFueSwgLy8gZm9ybS13aWRlIHdhcm5pbmcgZnJvbSAnX3dhcm5pbmcnIGtleSBpbiB2YWxpZGF0aW9uIHJlc3VsdFxuICAvLyBBY3Rpb25zOlxuICBhcnJheTogc2hhcGUoe1xuICAgIGluc2VydDogZnVuYy5pc1JlcXVpcmVkLCAvLyBmdW5jdGlvbiB0byBpbnNlcnQgYSB2YWx1ZSBpbnRvIGFuIGFycmF5IGZpZWxkXG4gICAgbW92ZTogZnVuYy5pc1JlcXVpcmVkLCAvLyBmdW5jdGlvbiB0byBtb3ZlIGEgdmFsdWUgd2l0aGluIGFuIGFycmF5IGZpZWxkXG4gICAgcG9wOiBmdW5jLmlzUmVxdWlyZWQsIC8vIGZ1bmN0aW9uIHRvIHBvcCBhIHZhbHVlIG9mZiBvZiBhbiBhcnJheSBmaWVsZFxuICAgIHB1c2g6IGZ1bmMuaXNSZXF1aXJlZCwgLy8gZnVuY3Rpb24gdG8gcHVzaCBhIHZhbHVlIG9udG8gYW4gYXJyYXkgZmllbGRcbiAgICByZW1vdmU6IGZ1bmMuaXNSZXF1aXJlZCwgLy8gZnVuY3Rpb24gdG8gcmVtb3ZlIGEgdmFsdWUgZnJvbSBhbiBhcnJheSBmaWVsZFxuICAgIHJlbW92ZUFsbDogZnVuYy5pc1JlcXVpcmVkLCAvLyBmdW5jdGlvbiB0byByZW1vdmUgYWxsIHRoZSB2YWx1ZXMgZnJvbSBhbiBhcnJheSBmaWVsZFxuICAgIHNoaWZ0OiBmdW5jLmlzUmVxdWlyZWQsIC8vIGZ1bmN0aW9uIHRvIHNoaWZ0IGEgdmFsdWUgb3V0IG9mIGFuIGFycmF5IGZpZWxkXG4gICAgc3BsaWNlOiBmdW5jLmlzUmVxdWlyZWQsIC8vIGZ1bmN0aW9uIHRvIHNwbGljZSBhIHZhbHVlIGludG8gYW4gYXJyYXkgZmllbGRcbiAgICBzd2FwOiBmdW5jLmlzUmVxdWlyZWQsIC8vIGZ1bmN0aW9uIHRvIHN3YXAgdmFsdWVzIGluIGFuIGFycmF5IGZpZWxkXG4gICAgdW5zaGlmdDogZnVuYy5pc1JlcXVpcmVkIC8vIGZ1bmN0aW9uIHRvIHVuc2hpZnQgYSB2YWx1ZSBpbnRvIGFuIGFycmF5IGZpZWxkXG4gIH0pLFxuICBhc3luY1ZhbGlkYXRlOiBmdW5jLmlzUmVxdWlyZWQsIC8vIGZ1bmN0aW9uIHRvIHRyaWdnZXIgYXN5bmMgdmFsaWRhdGlvblxuICBhdXRvZmlsbDogZnVuYy5pc1JlcXVpcmVkLCAvLyBhY3Rpb24gdG8gc2V0IGEgdmFsdWUgb2YgYSBmaWVsZCBhbmQgbWFyayBpdCBhcyBhdXRvZmlsbGVkXG4gIGJsdXI6IGZ1bmMuaXNSZXF1aXJlZCwgLy8gYWN0aW9uIHRvIG1hcmsgYSBmaWVsZCBhcyBibHVycmVkXG4gIGNoYW5nZTogZnVuYy5pc1JlcXVpcmVkLCAvLyBhY3Rpb24gdG8gY2hhbmdlIHRoZSB2YWx1ZSBvZiBhIGZpZWxkXG4gIGNsZWFyQXN5bmNFcnJvcjogZnVuYy5pc1JlcXVpcmVkLCAvLyBhY3Rpb24gdG8gY2xlYXIgdGhlIGFzeW5jIGVycm9yIG9mIGEgZmllbGRcbiAgZGVzdHJveTogZnVuYy5pc1JlcXVpcmVkLCAvLyBhY3Rpb24gdG8gZGVzdHJveSB0aGUgZm9ybSdzIGRhdGEgaW4gUmVkdXhcbiAgZGlzcGF0Y2g6IGZ1bmMuaXNSZXF1aXJlZCwgLy8gdGhlIFJlZHV4IGRpc3BhdGNoIGFjdGlvblxuICBoYW5kbGVTdWJtaXQ6IGZ1bmMuaXNSZXF1aXJlZCwgLy8gZnVuY3Rpb24gdG8gc3VibWl0IHRoZSBmb3JtXG4gIGluaXRpYWxpemU6IGZ1bmMuaXNSZXF1aXJlZCwgLy8gYWN0aW9uIHRvIGluaXRpYWxpemUgZm9ybSBkYXRhXG4gIHJlc2V0OiBmdW5jLmlzUmVxdWlyZWQsIC8vIGFjdGlvbiB0byByZXNldCB0aGUgZm9ybSBkYXRhIHRvIHByZXZpb3VzbHkgaW5pdGlhbGl6ZWQgdmFsdWVzXG4gIHRvdWNoOiBmdW5jLmlzUmVxdWlyZWQsIC8vIGFjdGlvbiB0byBtYXJrIGZpZWxkcyBhcyB0b3VjaGVkXG4gIHN1Ym1pdDogZnVuYy5pc1JlcXVpcmVkLCAvLyBhY3Rpb24gdG8gdHJpZ2dlciBhIHN1Ym1pc3Npb24gb2YgdGhlIHNwZWNpZmllZCBmb3JtXG4gIHVudG91Y2g6IGZ1bmMuaXNSZXF1aXJlZCwgLy8gYWN0aW9uIHRvIG1hcmsgZmllbGRzIGFzIHVudG91Y2hlZFxuXG4gIC8vIHRyaWdnZXJTdWJtaXRcbiAgdHJpZ2dlclN1Ym1pdDogYm9vbCwgLy8gaWYgdHJ1ZSwgc3VibWl0cyB0aGUgZm9ybSBvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzXG4gIGNsZWFyU3VibWl0OiBmdW5jLmlzUmVxdWlyZWQgLy8gY2FsbGVkIGJlZm9yZSBhIHRyaWdnZXJlZCBzdWJtaXQsIGJ5IGRlZmF1bHQgY2xlYXJzIHRyaWdnZXJTdWJtaXRcbn07XG5cbnZhciBmaWVsZElucHV0UHJvcFR5cGVzID0gZXhwb3J0cy5maWVsZElucHV0UHJvcFR5cGVzID0ge1xuICBjaGVja2VkOiBib29sLFxuICBuYW1lOiBzdHJpbmcuaXNSZXF1aXJlZCxcbiAgb25CbHVyOiBmdW5jLmlzUmVxdWlyZWQsXG4gIG9uQ2hhbmdlOiBmdW5jLmlzUmVxdWlyZWQsXG4gIG9uRHJhZ1N0YXJ0OiBmdW5jLmlzUmVxdWlyZWQsXG4gIG9uRHJvcDogZnVuYy5pc1JlcXVpcmVkLFxuICBvbkZvY3VzOiBmdW5jLmlzUmVxdWlyZWQsXG4gIHZhbHVlOiBhbnlcbn07XG5cbnZhciBmaWVsZE1ldGFQcm9wVHlwZXMgPSBleHBvcnRzLmZpZWxkTWV0YVByb3BUeXBlcyA9IHtcbiAgYWN0aXZlOiBib29sLmlzUmVxdWlyZWQsXG4gIGFzeW5jVmFsaWRhdGluZzogYm9vbC5pc1JlcXVpcmVkLFxuICBhdXRvZmlsbGVkOiBib29sLmlzUmVxdWlyZWQsXG4gIGRpcnR5OiBib29sLmlzUmVxdWlyZWQsXG4gIGRpc3BhdGNoOiBmdW5jLmlzUmVxdWlyZWQsXG4gIGVycm9yOiBzdHJpbmcsXG4gIGZvcm06IHN0cmluZy5pc1JlcXVpcmVkLFxuICBpbnZhbGlkOiBib29sLmlzUmVxdWlyZWQsXG4gIHByaXN0aW5lOiBib29sLmlzUmVxdWlyZWQsXG4gIHN1Ym1pdHRpbmc6IGJvb2wuaXNSZXF1aXJlZCxcbiAgc3VibWl0RmFpbGVkOiBib29sLmlzUmVxdWlyZWQsXG4gIHRvdWNoZWQ6IGJvb2wuaXNSZXF1aXJlZCxcbiAgdmFsaWQ6IGJvb2wuaXNSZXF1aXJlZCxcbiAgdmlzaXRlZDogYm9vbC5pc1JlcXVpcmVkLFxuICB3YXJuaW5nOiBzdHJpbmdcbn07XG5cbnZhciBmaWVsZFByb3BUeXBlcyA9IGV4cG9ydHMuZmllbGRQcm9wVHlwZXMgPSB7XG4gIGlucHV0OiBmaWVsZElucHV0UHJvcFR5cGVzLmlzUmVxdWlyZWQsXG4gIG1ldGE6IGZpZWxkTWV0YVByb3BUeXBlcy5pc1JlcXVpcmVkLFxuICBjdXN0b206IG9iamVjdC5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBwcm9wVHlwZXM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4LWZvcm0vbGliL3Byb3BUeXBlcy5qc1xuLy8gbW9kdWxlIGlkID0gMjI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVSZWR1Y2VyID0gcmVxdWlyZSgnLi9jcmVhdGVSZWR1Y2VyJyk7XG5cbnZhciBfY3JlYXRlUmVkdWNlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVSZWR1Y2VyKTtcblxudmFyIF9wbGFpbiA9IHJlcXVpcmUoJy4vc3RydWN0dXJlL3BsYWluJyk7XG5cbnZhciBfcGxhaW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGxhaW4pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSAoMCwgX2NyZWF0ZVJlZHVjZXIyLmRlZmF1bHQpKF9wbGFpbjIuZGVmYXVsdCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4LWZvcm0vbGliL3JlZHVjZXIuanNcbi8vIG1vZHVsZSBpZCA9IDIyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlUmVkdXhGb3JtID0gcmVxdWlyZSgnLi9jcmVhdGVSZWR1eEZvcm0nKTtcblxudmFyIF9jcmVhdGVSZWR1eEZvcm0yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlUmVkdXhGb3JtKTtcblxudmFyIF9wbGFpbiA9IHJlcXVpcmUoJy4vc3RydWN0dXJlL3BsYWluJyk7XG5cbnZhciBfcGxhaW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGxhaW4pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSAoMCwgX2NyZWF0ZVJlZHV4Rm9ybTIuZGVmYXVsdCkoX3BsYWluMi5kZWZhdWx0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtZm9ybS9saWIvcmVkdXhGb3JtLmpzXG4vLyBtb2R1bGUgaWQgPSAyMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIGNyZWF0ZUdldEZvcm1Bc3luY0Vycm9ycyA9IGZ1bmN0aW9uIGNyZWF0ZUdldEZvcm1Bc3luY0Vycm9ycyhfcmVmKSB7XG4gIHZhciBnZXRJbiA9IF9yZWYuZ2V0SW47XG4gIHJldHVybiBmdW5jdGlvbiAoZm9ybSkge1xuICAgIHZhciBnZXRGb3JtU3RhdGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgcmV0dXJuIGdldEluKHN0YXRlLCAnZm9ybScpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgcmV0dXJuIGdldEluKGdldEZvcm1TdGF0ZShzdGF0ZSksIGZvcm0gKyAnLmFzeW5jRXJyb3JzJyk7XG4gICAgfTtcbiAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZUdldEZvcm1Bc3luY0Vycm9ycztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtZm9ybS9saWIvc2VsZWN0b3JzL2dldEZvcm1Bc3luY0Vycm9ycy5qc1xuLy8gbW9kdWxlIGlkID0gMjMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBjcmVhdGVHZXRGb3JtSW5pdGlhbFZhbHVlcyA9IGZ1bmN0aW9uIGNyZWF0ZUdldEZvcm1Jbml0aWFsVmFsdWVzKF9yZWYpIHtcbiAgdmFyIGdldEluID0gX3JlZi5nZXRJbjtcbiAgcmV0dXJuIGZ1bmN0aW9uIChmb3JtKSB7XG4gICAgdmFyIGdldEZvcm1TdGF0ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICByZXR1cm4gZ2V0SW4oc3RhdGUsICdmb3JtJyk7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICByZXR1cm4gZ2V0SW4oZ2V0Rm9ybVN0YXRlKHN0YXRlKSwgZm9ybSArICcuaW5pdGlhbCcpO1xuICAgIH07XG4gIH07XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVHZXRGb3JtSW5pdGlhbFZhbHVlcztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtZm9ybS9saWIvc2VsZWN0b3JzL2dldEZvcm1Jbml0aWFsVmFsdWVzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIGNyZWF0ZUdldEZvcm1NZXRhID0gZnVuY3Rpb24gY3JlYXRlR2V0Rm9ybU1ldGEoX3JlZikge1xuICB2YXIgZ2V0SW4gPSBfcmVmLmdldEluO1xuICByZXR1cm4gZnVuY3Rpb24gKGZvcm0pIHtcbiAgICB2YXIgZ2V0Rm9ybVN0YXRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgIHJldHVybiBnZXRJbihzdGF0ZSwgJ2Zvcm0nKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgIHJldHVybiBnZXRJbihnZXRGb3JtU3RhdGUoc3RhdGUpLCBmb3JtICsgJy5maWVsZHMnKTtcbiAgICB9O1xuICB9O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlR2V0Rm9ybU1ldGE7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4LWZvcm0vbGliL3NlbGVjdG9ycy9nZXRGb3JtTWV0YS5qc1xuLy8gbW9kdWxlIGlkID0gMjMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBjcmVhdGVHZXRGb3JtTmFtZXMgPSBmdW5jdGlvbiBjcmVhdGVHZXRGb3JtTmFtZXMoX3JlZikge1xuICB2YXIgZ2V0SW4gPSBfcmVmLmdldEluLFxuICAgICAga2V5cyA9IF9yZWYua2V5cztcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZ2V0Rm9ybVN0YXRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgIHJldHVybiBnZXRJbihzdGF0ZSwgJ2Zvcm0nKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgIHJldHVybiBrZXlzKGdldEZvcm1TdGF0ZShzdGF0ZSkpO1xuICAgIH07XG4gIH07XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVHZXRGb3JtTmFtZXM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4LWZvcm0vbGliL3NlbGVjdG9ycy9nZXRGb3JtTmFtZXMuanNcbi8vIG1vZHVsZSBpZCA9IDIzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgY3JlYXRlR2V0Rm9ybVN1Ym1pdEVycm9ycyA9IGZ1bmN0aW9uIGNyZWF0ZUdldEZvcm1TdWJtaXRFcnJvcnMoX3JlZikge1xuICB2YXIgZ2V0SW4gPSBfcmVmLmdldEluO1xuICByZXR1cm4gZnVuY3Rpb24gKGZvcm0pIHtcbiAgICB2YXIgZ2V0Rm9ybVN0YXRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgIHJldHVybiBnZXRJbihzdGF0ZSwgJ2Zvcm0nKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgIHJldHVybiBnZXRJbihnZXRGb3JtU3RhdGUoc3RhdGUpLCBmb3JtICsgJy5zdWJtaXRFcnJvcnMnKTtcbiAgICB9O1xuICB9O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlR2V0Rm9ybVN1Ym1pdEVycm9ycztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtZm9ybS9saWIvc2VsZWN0b3JzL2dldEZvcm1TdWJtaXRFcnJvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDIzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgY3JlYXRlR2V0Rm9ybVN5bmNFcnJvcnMgPSBmdW5jdGlvbiBjcmVhdGVHZXRGb3JtU3luY0Vycm9ycyhfcmVmKSB7XG4gIHZhciBnZXRJbiA9IF9yZWYuZ2V0SW47XG4gIHJldHVybiBmdW5jdGlvbiAoZm9ybSkge1xuICAgIHZhciBnZXRGb3JtU3RhdGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgcmV0dXJuIGdldEluKHN0YXRlLCAnZm9ybScpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgcmV0dXJuIGdldEluKGdldEZvcm1TdGF0ZShzdGF0ZSksIGZvcm0gKyAnLnN5bmNFcnJvcnMnKTtcbiAgICB9O1xuICB9O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlR2V0Rm9ybVN5bmNFcnJvcnM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4LWZvcm0vbGliL3NlbGVjdG9ycy9nZXRGb3JtU3luY0Vycm9ycy5qc1xuLy8gbW9kdWxlIGlkID0gMjM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBjcmVhdGVHZXRGb3JtU3luY1dhcm5pbmdzID0gZnVuY3Rpb24gY3JlYXRlR2V0Rm9ybVN5bmNXYXJuaW5ncyhfcmVmKSB7XG4gIHZhciBnZXRJbiA9IF9yZWYuZ2V0SW47XG4gIHJldHVybiBmdW5jdGlvbiAoZm9ybSkge1xuICAgIHZhciBnZXRGb3JtU3RhdGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgcmV0dXJuIGdldEluKHN0YXRlLCAnZm9ybScpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgcmV0dXJuIGdldEluKGdldEZvcm1TdGF0ZShzdGF0ZSksIGZvcm0gKyAnLnN5bmNXYXJuaW5ncycpO1xuICAgIH07XG4gIH07XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVHZXRGb3JtU3luY1dhcm5pbmdzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC1mb3JtL2xpYi9zZWxlY3RvcnMvZ2V0Rm9ybVN5bmNXYXJuaW5ncy5qc1xuLy8gbW9kdWxlIGlkID0gMjM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBjcmVhdGVHZXRGb3JtVmFsdWVzID0gZnVuY3Rpb24gY3JlYXRlR2V0Rm9ybVZhbHVlcyhfcmVmKSB7XG4gIHZhciBnZXRJbiA9IF9yZWYuZ2V0SW47XG4gIHJldHVybiBmdW5jdGlvbiAoZm9ybSkge1xuICAgIHZhciBnZXRGb3JtU3RhdGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgcmV0dXJuIGdldEluKHN0YXRlLCAnZm9ybScpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgcmV0dXJuIGdldEluKGdldEZvcm1TdGF0ZShzdGF0ZSksIGZvcm0gKyAnLnZhbHVlcycpO1xuICAgIH07XG4gIH07XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVHZXRGb3JtVmFsdWVzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC1mb3JtL2xpYi9zZWxlY3RvcnMvZ2V0Rm9ybVZhbHVlcy5qc1xuLy8gbW9kdWxlIGlkID0gMjM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBjcmVhdGVIYXNTdWJtaXRGYWlsZWQgPSBmdW5jdGlvbiBjcmVhdGVIYXNTdWJtaXRGYWlsZWQoX3JlZikge1xuICB2YXIgZ2V0SW4gPSBfcmVmLmdldEluO1xuICByZXR1cm4gZnVuY3Rpb24gKGZvcm0pIHtcbiAgICB2YXIgZ2V0Rm9ybVN0YXRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgIHJldHVybiBnZXRJbihzdGF0ZSwgJ2Zvcm0nKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgIHZhciBmb3JtU3RhdGUgPSBnZXRGb3JtU3RhdGUoc3RhdGUpO1xuICAgICAgcmV0dXJuIGdldEluKGZvcm1TdGF0ZSwgZm9ybSArICcuc3VibWl0RmFpbGVkJykgfHwgZmFsc2U7XG4gICAgfTtcbiAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZUhhc1N1Ym1pdEZhaWxlZDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtZm9ybS9saWIvc2VsZWN0b3JzL2hhc1N1Ym1pdEZhaWxlZC5qc1xuLy8gbW9kdWxlIGlkID0gMjM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBjcmVhdGVIYXNTdWJtaXRTdWNjZWVkZWQgPSBmdW5jdGlvbiBjcmVhdGVIYXNTdWJtaXRTdWNjZWVkZWQoX3JlZikge1xuICB2YXIgZ2V0SW4gPSBfcmVmLmdldEluO1xuICByZXR1cm4gZnVuY3Rpb24gKGZvcm0pIHtcbiAgICB2YXIgZ2V0Rm9ybVN0YXRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgIHJldHVybiBnZXRJbihzdGF0ZSwgJ2Zvcm0nKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgIHZhciBmb3JtU3RhdGUgPSBnZXRGb3JtU3RhdGUoc3RhdGUpO1xuICAgICAgcmV0dXJuIGdldEluKGZvcm1TdGF0ZSwgZm9ybSArICcuc3VibWl0U3VjY2VlZGVkJykgfHwgZmFsc2U7XG4gICAgfTtcbiAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZUhhc1N1Ym1pdFN1Y2NlZWRlZDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtZm9ybS9saWIvc2VsZWN0b3JzL2hhc1N1Ym1pdFN1Y2NlZWRlZC5qc1xuLy8gbW9kdWxlIGlkID0gMjQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9pc1ByaXN0aW5lID0gcmVxdWlyZSgnLi9pc1ByaXN0aW5lJyk7XG5cbnZhciBfaXNQcmlzdGluZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1ByaXN0aW5lKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGNyZWF0ZUlzRGlydHkgPSBmdW5jdGlvbiBjcmVhdGVJc0RpcnR5KHN0cnVjdHVyZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGZvcm0sIGdldEZvcm1TdGF0ZSkge1xuICAgIHZhciBpc1ByaXN0aW5lID0gKDAsIF9pc1ByaXN0aW5lMi5kZWZhdWx0KShzdHJ1Y3R1cmUpKGZvcm0sIGdldEZvcm1TdGF0ZSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgcmV0dXJuICFpc1ByaXN0aW5lKHN0YXRlKTtcbiAgICB9O1xuICB9O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlSXNEaXJ0eTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtZm9ybS9saWIvc2VsZWN0b3JzL2lzRGlydHkuanNcbi8vIG1vZHVsZSBpZCA9IDI0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfaXNWYWxpZCA9IHJlcXVpcmUoJy4vaXNWYWxpZCcpO1xuXG52YXIgX2lzVmFsaWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNWYWxpZCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBjcmVhdGVJc0ludmFsaWQgPSBmdW5jdGlvbiBjcmVhdGVJc0ludmFsaWQoc3RydWN0dXJlKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZm9ybSwgZ2V0Rm9ybVN0YXRlKSB7XG4gICAgdmFyIGlzVmFsaWQgPSAoMCwgX2lzVmFsaWQyLmRlZmF1bHQpKHN0cnVjdHVyZSkoZm9ybSwgZ2V0Rm9ybVN0YXRlKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICByZXR1cm4gIWlzVmFsaWQoc3RhdGUpO1xuICAgIH07XG4gIH07XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVJc0ludmFsaWQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4LWZvcm0vbGliL3NlbGVjdG9ycy9pc0ludmFsaWQuanNcbi8vIG1vZHVsZSBpZCA9IDI0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgY3JlYXRlSXNTdWJtaXR0aW5nID0gZnVuY3Rpb24gY3JlYXRlSXNTdWJtaXR0aW5nKF9yZWYpIHtcbiAgdmFyIGdldEluID0gX3JlZi5nZXRJbjtcbiAgcmV0dXJuIGZ1bmN0aW9uIChmb3JtKSB7XG4gICAgdmFyIGdldEZvcm1TdGF0ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICByZXR1cm4gZ2V0SW4oc3RhdGUsICdmb3JtJyk7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICB2YXIgZm9ybVN0YXRlID0gZ2V0Rm9ybVN0YXRlKHN0YXRlKTtcbiAgICAgIHJldHVybiBnZXRJbihmb3JtU3RhdGUsIGZvcm0gKyAnLnN1Ym1pdHRpbmcnKSB8fCBmYWxzZTtcbiAgICB9O1xuICB9O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlSXNTdWJtaXR0aW5nO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC1mb3JtL2xpYi9zZWxlY3RvcnMvaXNTdWJtaXR0aW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAyNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2lzRXF1YWxXaXRoMiA9IHJlcXVpcmUoJ2xvZGFzaC9pc0VxdWFsV2l0aCcpO1xuXG52YXIgX2lzRXF1YWxXaXRoMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzRXF1YWxXaXRoMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBjdXN0b21pemVyID0gZnVuY3Rpb24gY3VzdG9taXplcihvYmosIG90aGVyKSB7XG4gIGlmIChvYmogPT09IG90aGVyKSByZXR1cm4gdHJ1ZTtcbiAgaWYgKChvYmogPT0gbnVsbCB8fCBvYmogPT09ICcnIHx8IG9iaiA9PT0gZmFsc2UpICYmIChvdGhlciA9PSBudWxsIHx8IG90aGVyID09PSAnJyB8fCBvdGhlciA9PT0gZmFsc2UpKSByZXR1cm4gdHJ1ZTtcblxuICBpZiAob2JqICYmIG90aGVyICYmIG9iai5fZXJyb3IgIT09IG90aGVyLl9lcnJvcikgcmV0dXJuIGZhbHNlO1xuICBpZiAob2JqICYmIG90aGVyICYmIG9iai5fd2FybmluZyAhPT0gb3RoZXIuX3dhcm5pbmcpIHJldHVybiBmYWxzZTtcbn07XG5cbnZhciBkZWVwRXF1YWwgPSBmdW5jdGlvbiBkZWVwRXF1YWwoYSwgYikge1xuICByZXR1cm4gKDAsIF9pc0VxdWFsV2l0aDMuZGVmYXVsdCkoYSwgYiwgY3VzdG9taXplcik7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBkZWVwRXF1YWw7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4LWZvcm0vbGliL3N0cnVjdHVyZS9wbGFpbi9kZWVwRXF1YWwuanNcbi8vIG1vZHVsZSBpZCA9IDI0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdG9QYXRoMiA9IHJlcXVpcmUoJ2xvZGFzaC90b1BhdGgnKTtcblxudmFyIF90b1BhdGgzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdG9QYXRoMik7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gZWxzZSB7IHJldHVybiBBcnJheS5mcm9tKGFycik7IH0gfVxuXG52YXIgZGVsZXRlSW5XaXRoUGF0aCA9IGZ1bmN0aW9uIGRlbGV0ZUluV2l0aFBhdGgoc3RhdGUsIGZpcnN0KSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCByZXN0ID0gQXJyYXkoX2xlbiA+IDIgPyBfbGVuIC0gMiA6IDApLCBfa2V5ID0gMjsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHJlc3RbX2tleSAtIDJdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgaWYgKHN0YXRlID09PSB1bmRlZmluZWQgfHwgZmlyc3QgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuICBpZiAocmVzdC5sZW5ndGgpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShzdGF0ZSkpIHtcbiAgICAgIGlmIChmaXJzdCA8IHN0YXRlLmxlbmd0aCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gZGVsZXRlSW5XaXRoUGF0aC5hcHBseSh1bmRlZmluZWQsIFtzdGF0ZSAmJiBzdGF0ZVtmaXJzdF1dLmNvbmNhdChyZXN0KSk7XG4gICAgICAgIGlmIChyZXN1bHQgIT09IHN0YXRlW2ZpcnN0XSkge1xuICAgICAgICAgIHZhciBjb3B5ID0gW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShzdGF0ZSkpO1xuICAgICAgICAgIGNvcHlbZmlyc3RdID0gcmVzdWx0O1xuICAgICAgICAgIHJldHVybiBjb3B5O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICAgIGlmIChmaXJzdCBpbiBzdGF0ZSkge1xuICAgICAgdmFyIF9yZXN1bHQgPSBkZWxldGVJbldpdGhQYXRoLmFwcGx5KHVuZGVmaW5lZCwgW3N0YXRlICYmIHN0YXRlW2ZpcnN0XV0uY29uY2F0KHJlc3QpKTtcbiAgICAgIHJldHVybiBzdGF0ZVtmaXJzdF0gPT09IF9yZXN1bHQgPyBzdGF0ZSA6IF9leHRlbmRzKHt9LCBzdGF0ZSwgX2RlZmluZVByb3BlcnR5KHt9LCBmaXJzdCwgX3Jlc3VsdCkpO1xuICAgIH1cbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkoc3RhdGUpKSB7XG4gICAgaWYgKGlzTmFOKGZpcnN0KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZGVsZXRlIG5vbi1udW1lcmljYWwgaW5kZXggZnJvbSBhbiBhcnJheScpO1xuICAgIH1cbiAgICBpZiAoZmlyc3QgPCBzdGF0ZS5sZW5ndGgpIHtcbiAgICAgIHZhciBfY29weSA9IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoc3RhdGUpKTtcbiAgICAgIF9jb3B5LnNwbGljZShmaXJzdCwgMSk7XG4gICAgICByZXR1cm4gX2NvcHk7XG4gICAgfVxuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuICBpZiAoZmlyc3QgaW4gc3RhdGUpIHtcbiAgICB2YXIgX2NvcHkyID0gX2V4dGVuZHMoe30sIHN0YXRlKTtcbiAgICBkZWxldGUgX2NvcHkyW2ZpcnN0XTtcbiAgICByZXR1cm4gX2NvcHkyO1xuICB9XG4gIHJldHVybiBzdGF0ZTtcbn07XG5cbnZhciBkZWxldGVJbiA9IGZ1bmN0aW9uIGRlbGV0ZUluKHN0YXRlLCBmaWVsZCkge1xuICByZXR1cm4gZGVsZXRlSW5XaXRoUGF0aC5hcHBseSh1bmRlZmluZWQsIFtzdGF0ZV0uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheSgoMCwgX3RvUGF0aDMuZGVmYXVsdCkoZmllbGQpKSkpO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZGVsZXRlSW47XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4LWZvcm0vbGliL3N0cnVjdHVyZS9wbGFpbi9kZWxldGVJbi5qc1xuLy8gbW9kdWxlIGlkID0gMjQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF90b1BhdGgyID0gcmVxdWlyZSgnbG9kYXNoL3RvUGF0aCcpO1xuXG52YXIgX3RvUGF0aDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90b1BhdGgyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGdldEluID0gZnVuY3Rpb24gZ2V0SW4oc3RhdGUsIGZpZWxkKSB7XG4gIGlmICghc3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICB2YXIgcGF0aCA9ICgwLCBfdG9QYXRoMy5kZWZhdWx0KShmaWVsZCk7XG4gIHZhciBsZW5ndGggPSBwYXRoLmxlbmd0aDtcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IHN0YXRlO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aCAmJiAhIXJlc3VsdDsgKytpKSB7XG4gICAgcmVzdWx0ID0gcmVzdWx0W3BhdGhbaV1dO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGdldEluO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC1mb3JtL2xpYi9zdHJ1Y3R1cmUvcGxhaW4vZ2V0SW4uanNcbi8vIG1vZHVsZSBpZCA9IDI0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBrZXlzID0gZnVuY3Rpb24ga2V5cyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPyBPYmplY3Qua2V5cyh2YWx1ZSkgOiBbXTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGtleXM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4LWZvcm0vbGliL3N0cnVjdHVyZS9wbGFpbi9rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAyNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3RvUGF0aDIgPSByZXF1aXJlKCdsb2Rhc2gvdG9QYXRoJyk7XG5cbnZhciBfdG9QYXRoMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RvUGF0aDIpO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgc2V0SW5XaXRoUGF0aCA9IGZ1bmN0aW9uIHNldEluV2l0aFBhdGgoc3RhdGUsIHZhbHVlLCBwYXRoLCBwYXRoSW5kZXgpIHtcbiAgaWYgKHBhdGhJbmRleCA+PSBwYXRoLmxlbmd0aCkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHZhciBmaXJzdCA9IHBhdGhbcGF0aEluZGV4XTtcbiAgdmFyIG5leHQgPSBzZXRJbldpdGhQYXRoKHN0YXRlICYmIHN0YXRlW2ZpcnN0XSwgdmFsdWUsIHBhdGgsIHBhdGhJbmRleCArIDEpO1xuXG4gIGlmICghc3RhdGUpIHtcbiAgICB2YXIgaW5pdGlhbGl6ZWQgPSBpc05hTihmaXJzdCkgPyB7fSA6IFtdO1xuICAgIGluaXRpYWxpemVkW2ZpcnN0XSA9IG5leHQ7XG4gICAgcmV0dXJuIGluaXRpYWxpemVkO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoc3RhdGUpKSB7XG4gICAgdmFyIGNvcHkgPSBbXS5jb25jYXQoc3RhdGUpO1xuICAgIGNvcHlbZmlyc3RdID0gbmV4dDtcbiAgICByZXR1cm4gY29weTtcbiAgfVxuXG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgZmlyc3QsIG5leHQpKTtcbn07XG5cbnZhciBzZXRJbiA9IGZ1bmN0aW9uIHNldEluKHN0YXRlLCBmaWVsZCwgdmFsdWUpIHtcbiAgcmV0dXJuIHNldEluV2l0aFBhdGgoc3RhdGUsIHZhbHVlLCAoMCwgX3RvUGF0aDMuZGVmYXVsdCkoZmllbGQpLCAwKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHNldEluO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC1mb3JtL2xpYi9zdHJ1Y3R1cmUvcGxhaW4vc2V0SW4uanNcbi8vIG1vZHVsZSBpZCA9IDI0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSBlbHNlIHsgcmV0dXJuIEFycmF5LmZyb20oYXJyKTsgfSB9XG5cbnZhciBzcGxpY2UgPSBmdW5jdGlvbiBzcGxpY2UoYXJyYXksIGluZGV4LCByZW1vdmVOdW0sIHZhbHVlKSB7XG4gIGFycmF5ID0gYXJyYXkgfHwgW107XG5cbiAgaWYgKGluZGV4IDwgYXJyYXkubGVuZ3RoKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgJiYgIXJlbW92ZU51bSkge1xuICAgICAgLy8gaW5zZXJ0aW5nIHVuZGVmaW5lZFxuICAgICAgdmFyIF9jb3B5MiA9IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoYXJyYXkpKTtcbiAgICAgIF9jb3B5Mi5zcGxpY2UoaW5kZXgsIDAsIG51bGwpO1xuICAgICAgX2NvcHkyW2luZGV4XSA9IHVuZGVmaW5lZDtcbiAgICAgIHJldHVybiBfY29weTI7XG4gICAgfVxuICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICB2YXIgX2NvcHkzID0gW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShhcnJheSkpO1xuICAgICAgX2NvcHkzLnNwbGljZShpbmRleCwgcmVtb3ZlTnVtLCB2YWx1ZSk7IC8vIHJlbW92aW5nIGFuZCBhZGRpbmdcbiAgICAgIHJldHVybiBfY29weTM7XG4gICAgfVxuICAgIHZhciBfY29weSA9IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoYXJyYXkpKTtcbiAgICBfY29weS5zcGxpY2UoaW5kZXgsIHJlbW92ZU51bSk7IC8vIHJlbW92aW5nXG4gICAgcmV0dXJuIF9jb3B5O1xuICB9XG4gIGlmIChyZW1vdmVOdW0pIHtcbiAgICAvLyB0cnlpbmcgdG8gcmVtb3ZlIG5vbi1leGlzdGFudCBpdGVtOiByZXR1cm4gb3JpZ2luYWwgYXJyYXlcbiAgICByZXR1cm4gYXJyYXk7XG4gIH1cbiAgLy8gdHJ5aW5nIHRvIGFkZCBvdXRzaWRlIG9mIHJhbmdlOiBqdXN0IHNldCB2YWx1ZVxuICB2YXIgY29weSA9IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoYXJyYXkpKTtcbiAgY29weVtpbmRleF0gPSB2YWx1ZTtcbiAgcmV0dXJuIGNvcHk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBzcGxpY2U7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4LWZvcm0vbGliL3N0cnVjdHVyZS9wbGFpbi9zcGxpY2UuanNcbi8vIG1vZHVsZSBpZCA9IDI0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgZGF0YUtleSA9IGV4cG9ydHMuZGF0YUtleSA9ICd0ZXh0JztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtZm9ybS9saWIvdXRpbC9ldmVudENvbnN0cy5qc1xuLy8gbW9kdWxlIGlkID0gMjUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBnZXREaXNwbGF5TmFtZSA9IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKENvbXApIHtcbiAgcmV0dXJuIENvbXAuZGlzcGxheU5hbWUgfHwgQ29tcC5uYW1lIHx8ICdDb21wb25lbnQnO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZ2V0RGlzcGxheU5hbWU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4LWZvcm0vbGliL3V0aWwvZ2V0RGlzcGxheU5hbWUuanNcbi8vIG1vZHVsZSBpZCA9IDI1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlVmFsdWVzID0gcmVxdWlyZSgnLi9jcmVhdGVWYWx1ZXMnKTtcblxudmFyIF9jcmVhdGVWYWx1ZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlVmFsdWVzKTtcblxudmFyIF9wbGFpbiA9IHJlcXVpcmUoJy4vc3RydWN0dXJlL3BsYWluJyk7XG5cbnZhciBfcGxhaW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGxhaW4pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSAoMCwgX2NyZWF0ZVZhbHVlczIuZGVmYXVsdCkoX3BsYWluMi5kZWZhdWx0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtZm9ybS9saWIvdmFsdWVzLmpzXG4vLyBtb2R1bGUgaWQgPSAyNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoMTUyKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLXJlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDI1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgxNTQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWR1eC10aHVuay9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAyNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoMjE1KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvbG9kYXNoL19mcmVlR2xvYmFsLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMjU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDIxNik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0UHJvdG90eXBlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMjU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDIxOSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb3ZlckFyZy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDI1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSg1NSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1BsYWluT2JqZWN0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMjU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDg5KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAyNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==