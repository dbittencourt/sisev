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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(5);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("./vendor");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(151);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(153);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return reducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_apiCalls__ = __webpack_require__(22);


var actionCreators = {
    initilize: function initilize(address, fields) {
        return {
            type: 'INITIALIZE_FORM',
            controllerAddress: address,
            formFields: fields
        };
    },
    change: function change(field, value) {
        return {
            type: 'CHANGE_VALUE',
            changedField: field,
            newValue: value
        };
    },
    updateErrors: function updateErrors(errors) {
        return {
            type: 'UPDATE_ERROR',
            fieldErrors: errors
        };
    },
    submit: function submit(state) {
        return function (dispatch, getState) {
            var submitted = true;
            if (!state.submitting) {
                __WEBPACK_IMPORTED_MODULE_1__helpers_apiCalls__["a" /* default */].request(state.controllerAddress, "post", state.values).then(function (response) {
                    if (!response.ok) submitted = false;
                    return response.json();
                }).then(function (data) {
                    if (submitted) {
                        dispatch({
                            type: 'SUBMIT_FULFILLED',
                            payload: data
                        });
                    } else {
                        dispatch({
                            type: 'SUBMIT_REJECTED',
                            errors: data
                        });
                    }
                });
                dispatch({ type: 'SUBMIT_FORM' });
            }
        };
    },
    reset: function reset() {
        return {
            type: 'RESET_FORM'
        };
    }
};
var initialState = { controllerAddress: "", fields: [], values: {}, errors: {},
    submitting: false, submitted: false, response: null };
var reducer = function reducer(state, action) {
    var newState = Object.assign({}, state);
    switch (action.type) {
        case 'INITIALIZE_FORM':
            newState.controllerAddress = action.controllerAddress;
            newState.fields = action.formFields;
            newState.fields.forEach(function (f) {
                return newState.values[f] = "";
            });
            return newState;
        case 'CHANGE_VALUE':
            newState.values = Object.assign({}, state.values);
            newState.values[action.changedField] = action.newValue;
            return newState;
        case 'UPDATE_ERROR':
            newState.errors = Object.assign({}, state.errors);
            Object.keys(action.fieldErrors).forEach(function (f) {
                return newState.errors[f] = action.fieldErrors[f];
            });
            return newState;
        case 'SUBMIT_FORM':
            newState.submitting = true;
            return newState;
        case 'SUBMIT_FULFILLED':
            newState.submitting = false;
            newState.submitted = true;
            newState.response = action.payload;
            return newState;
        case 'SUBMIT_REJECTED':
            newState.submitting = false;
            newState.errors = Object.assign({}, state.errors);
            newState.errors["global"] = action.errors[""];
            return newState;
        case 'RESET_FORM':
            newState = Object.assign({}, initialState);
            return newState;
        default:
            var exhaustiveCheck = action;
    }
    // For unrecognized actions (or in cases where actions have no effect), must return the existing state
    //  (or default initial state if none was supplied)
    return state || initialState;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(213);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Input__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_formValidation__ = __webpack_require__(7);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Form = function (_React$Component) {
    _inherits(Form, _React$Component);

    function Form(props) {
        _classCallCheck(this, Form);

        var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.createInput = _this.createInput.bind(_this);
        _this.renderGlobalErrors = _this.renderGlobalErrors.bind(_this);
        return _this;
    }

    _createClass(Form, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'form',
                { onSubmit: this.handleSubmit },
                this.renderGlobalErrors(),
                this.renderFormContent()
            );
        }
    }, {
        key: 'renderFormContent',
        value: function renderFormContent() {}
    }, {
        key: 'createInput',
        value: function createInput(name, type, label, value, error) {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__Input__["a" /* default */], { name: name, type: type, label: label, onChange: this.props.change, onError: this.props.updateErrors, value: value, error: error });
        }
    }, {
        key: 'createPasswordWithConfirmationInput',
        value: function createPasswordWithConfirmationInput(name, label, value, confirmValue, error, confirmError) {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__Input__["a" /* default */], { name: name, type: 'password', label: label, onChange: this.props.change, onError: this.props.updateErrors, value: value, error: error, comparator: confirmValue }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__Input__["a" /* default */], { name: name + "Confirm", type: 'password', label: 'Confirma\xE7\xE3o', onChange: this.props.change, onError: this.props.updateErrors, value: confirmValue, error: confirmError, comparator: value })
            );
        }
    }, {
        key: 'createCheckbox',
        value: function createCheckbox(name, label, value) {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__Input__["a" /* default */], { type: 'checkbox', name: name, label: label, value: value, onChange: this.props.change });
        }
    }, {
        key: 'createSubmitButton',
        value: function createSubmitButton(label) {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__Input__["a" /* default */], { type: 'submitButton', label: label });
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            event.preventDefault();
            var errors = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__helpers_formValidation__["a" /* default */])(this.props.values);
            var hasError = Object.keys(errors).filter(function (field) {
                return errors[field] != "";
            }).length > 0;
            if (hasError) this.props.updateErrors(errors);else this.props.submit(this.props);
        }
    }, {
        key: 'renderGlobalErrors',
        value: function renderGlobalErrors() {
            var errors = this.props.errors["global"];
            if (errors != null && errors != undefined && errors.length > 0) {
                return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
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
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.props.reset();
        }
    }]);

    return Form;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Form);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var validateName = function validateName(name) {
    if (!name) return "Campo obrigatório";
    if (name.length < 4) return "Muito curto";
    return "";
};
var validateNotEmpty = function validateNotEmpty(text) {
    if (!text) return "Campo obrigatório";
    return "";
};
var validateEmail = function validateEmail(email) {
    if (!email) return "Campo obrigatório";
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) return "Email inválido";
    return "";
};
var validateDepartment = function validateDepartment(department) {
    return "";
};
var validatePassword = function validatePassword(password) {
    var passwordConfirm = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    if (!password) return "Campo obrigatório";
    if (password != passwordConfirm && passwordConfirm != null) return "Confirmação diferente da senha";
    return "";
};
var validateGlobal = function validateGlobal(global) {
    return "";
};
var validationFuncs = {
    'email': validateEmail,
    'name': validateName,
    'firstName': validateName,
    'lastName': validateName,
    'department': validateDepartment,
    'password': validatePassword,
    'passwordConfirm': validatePassword,
    'username': validateNotEmpty,
    'passwordLogin': validateNotEmpty,
    'global': validateGlobal,
    'remember': validateGlobal
};
var validate = function validate(values, comparator) {
    var errors = {};
    var keys = Object.keys(values);
    if (keys.length < 2) {
        var key = keys[0];
        if (key == "password") {
            errors[key] = validationFuncs[key](values[key]);
            if (comparator != undefined && comparator != null) errors["passwordConfirm"] = validationFuncs[key](values[key], comparator);
        } else if (key == "passwordConfirm") {
            errors[key] = validationFuncs[key](comparator, values[key]);
        } else errors[key] = validationFuncs[key](values[key]);
    } else {
        keys.forEach(function (key) {
            if (key == "password") {
                errors[key] = validationFuncs[key](values[key]);
                errors["passwordConfirm"] = validationFuncs[key](values[key], values["passwordConfirm"]);
            } else if (key == "passwordConfirm") errors[key] = validationFuncs[key](values["passwordConfirm"], values[key]);else errors[key] = validationFuncs[key](values[key]);
        });
    }
    return errors;
};
/* harmony default export */ __webpack_exports__["a"] = (validate);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return reducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__);

// action creators
var actionCreators = {
    login: function login(response) {
        return {
            type: 'LOGIN',
            user: response["user"]
        };
    },
    logout: function logout() {
        return {
            type: 'LOGOUT'
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
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = configureStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(23);




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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers_Layout__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__containers_App__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__containers_Register__ = __webpack_require__(21);





/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
    __WEBPACK_IMPORTED_MODULE_1_react_router__["Route"],
    { component: __WEBPACK_IMPORTED_MODULE_2__containers_Layout__["a" /* Layout */] },
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '/', components: { body: __WEBPACK_IMPORTED_MODULE_3__containers_App__["a" /* default */] } }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '/register', components: { body: __WEBPACK_IMPORTED_MODULE_4__containers_Register__["a" /* default */] } })
));
// Enable Hot Module Replacement (HMR)
if (false) {
    module.hot.accept();
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(144);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(150);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aspnet_prerendering__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aspnet_prerendering___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_aspnet_prerendering__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__configureStore__ = __webpack_require__(9);







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
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_formValidation__ = __webpack_require__(7);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Input = function (_React$Component) {
    _inherits(Input, _React$Component);

    function Input(props) {
        _classCallCheck(this, Input);

        var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }

    _createClass(Input, [{
        key: 'render',
        value: function render() {
            return this.renderInput();
        }
    }, {
        key: 'renderInput',
        value: function renderInput() {
            switch (this.props.type) {
                case "text":
                case "password":
                    return this.renderTextInput();
                case "checkbox":
                    return this.renderCheckboxInput();
                case "submitButton":
                    return this.renderSubmitButtonInput();
                default:
                    return null;
            }
        }
    }, {
        key: 'renderTextInput',
        value: function renderTextInput() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'label',
                    { htmlFor: this.props.name },
                    this.props.label
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('input', { type: this.props.type, name: this.props.name, value: this.props.value, placeholder: this.props.label, onChange: this.handleChange }),
                this.renderError(this.props.error)
            );
        }
    }, {
        key: 'renderCheckboxInput',
        value: function renderCheckboxInput() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'label',
                    { htmlFor: this.props.name },
                    this.props.label
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('input', { type: 'checkbox', name: this.props.name, value: this.props.value, onChange: this.handleChange })
            );
        }
    }, {
        key: 'renderSubmitButtonInput',
        value: function renderSubmitButtonInput() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('input', { type: 'submit', value: this.props.label })
            );
        }
    }, {
        key: 'renderError',
        value: function renderError(error) {
            if (error != null && error != undefined && error != "") return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'span',
                null,
                error
            );
        }
        // calls the store to update the form state and then validates the field value

    }, {
        key: 'handleChange',
        value: function handleChange(event) {
            var field = {};
            if (this.props.type == "checkbox") field[this.props.name] = event.target.checked;else field[this.props.name] = event.target.value;
            // this.props.comparator is optional and only used in few cases, 
            // like password confirmation fields
            var error = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__helpers_formValidation__["a" /* default */])(field, this.props.comparator);
            this.props.onChange(this.props.name, field[this.props.name]);
            this.props.onError(error);
        }
    }]);

    return Input;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Input);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Form__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_Form__ = __webpack_require__(4);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var LoginForm = function (_Form) {
    _inherits(LoginForm, _Form);

    function LoginForm() {
        _classCallCheck(this, LoginForm);

        return _possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).apply(this, arguments));
    }

    _createClass(LoginForm, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.initilize("/account/login", ["email", "passwordLogin", "remember"]);
        }
    }, {
        key: 'renderFormContent',
        value: function renderFormContent() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'div',
                null,
                this.createInput("email", "text", "Email", this.props.values["email"], this.props.errors["email"]),
                this.createInput("passwordLogin", "password", "Senha", this.props.values["passwordLogin"], this.props.errors["passwordLogin"]),
                this.createCheckbox("remember", "Lembrar de mim", this.props.values["remember"]),
                this.createSubmitButton("Entrar")
            );
        }
    }]);

    return LoginForm;
}(__WEBPACK_IMPORTED_MODULE_1__Form__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(function (state) {
    return state.loginForm;
}, __WEBPACK_IMPORTED_MODULE_3__store_Form__["a" /* actionCreators */])(LoginForm));

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(3);
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
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                'li',
                                null,
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                    __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                                    { to: '/register', activeClassName: 'active' },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('span', { className: 'glyphicon glyphicon-leaf' }),
                                    ' Cadastrar'
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
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Form__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_Form__ = __webpack_require__(4);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var RegisterForm = function (_Form) {
    _inherits(RegisterForm, _Form);

    function RegisterForm() {
        _classCallCheck(this, RegisterForm);

        return _possibleConstructorReturn(this, (RegisterForm.__proto__ || Object.getPrototypeOf(RegisterForm)).apply(this, arguments));
    }

    _createClass(RegisterForm, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // this method MUST be called with the controller method address and the
            // form field names, otherwise the form wont work properly
            this.props.initilize("/account/register", ["firstName", "lastName", "email", "department", "password", "passwordConfirm"]);
        }
    }, {
        key: 'renderFormContent',
        value: function renderFormContent() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'div',
                null,
                this.createInput("firstName", "text", "Nome", this.props.values["firstName"], this.props.errors["firstName"]),
                this.createInput("lastName", "text", "Sobrenome", this.props.values["lastName"], this.props.errors["lastName"]),
                this.createInput("email", "text", "Email", this.props.values["email"], this.props.errors["email"]),
                this.createInput("department", "text", "Departamento", this.props.values["department"], this.props.errors["department"]),
                this.createPasswordWithConfirmationInput("password", "Senha", this.props.values["password"], this.props.values["passwordConfirm"], this.props.errors["password"], this.props.errors["passwordConfirm"]),
                this.createSubmitButton("Cadastrar")
            );
        }
    }]);

    return RegisterForm;
}(__WEBPACK_IMPORTED_MODULE_1__Form__["a" /* default */]);
// Wire up the React component to the Redux store


/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(function (state) {
    return state.registerForm;
}, // Selects which state properties are merged into the component's props
__WEBPACK_IMPORTED_MODULE_3__store_Form__["a" /* actionCreators */] // Selects which action creators are merged into the component's props
)(RegisterForm));

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_App__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Login__ = __webpack_require__(20);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            if (this.props.app.loggedIn) return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'div',
                null,
                'Clique aqui para sair:',
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'button',
                    { onClick: this.props.logout },
                    'Sair'
                )
            );
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__Login__["a" /* default */], null);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.loginForm.submitted) this.props.login(nextProps.loginForm.response);
        }
    }]);

    return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(function (state) {
    return state;
}, __WEBPACK_IMPORTED_MODULE_2__store_App__["a" /* actionCreators */])(App));

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Layout; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_NavMenu__ = __webpack_require__(16);
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
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_LoginForm__ = __webpack_require__(15);
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
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'h4',
                    null,
                    'Fa\xE7a seu login'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('hr', null),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__components_LoginForm__["a" /* default */], null)
            );
        }
    }]);

    return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_registerForm__ = __webpack_require__(17);
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
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


var requestHeader = {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
};

var ApiCalls = function () {
    function ApiCalls() {
        _classCallCheck(this, ApiCalls);
    }

    _createClass(ApiCalls, null, [{
        key: 'request',

        //TODO: implement other http commands
        value: function request(address, method, requestBody) {
            var lower = method.toLowerCase();
            var requestInit;
            switch (lower) {
                case 'post':
                    requestInit = this.createRequest('post', requestBody);
                    break;
                case 'get':
                default:
                    requestInit = this.createRequest();
            }
            return fetch(address, requestInit);
        }
    }, {
        key: 'createRequest',
        value: function createRequest() {
            var requestMethod = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'get';
            var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            var req = {
                method: requestMethod,
                headers: requestHeader
            };
            if (body != null) req.body = JSON.stringify(body);
            return req;
        }
    }]);

    return ApiCalls;
}();

/* harmony default export */ __webpack_exports__["a"] = (ApiCalls);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__App__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Form__ = __webpack_require__(4);


// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
var reducers = {
    app: __WEBPACK_IMPORTED_MODULE_0__App__["b" /* reducer */],
    registerForm: __WEBPACK_IMPORTED_MODULE_1__Form__["b" /* reducer */],
    loginForm: __WEBPACK_IMPORTED_MODULE_1__Form__["b" /* reducer */]
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(152);

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(154);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(79);

/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYmFkODM0OTllZTUyNTk3OTk5MjYiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC9yZWFjdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiLi92ZW5kb3JcIiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3RvcmUvRm9ybS50cyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtZmV0Y2gvZmV0Y2gtbnBtLW5vZGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL0Zvcm0udHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9oZWxwZXJzL2Zvcm1WYWxpZGF0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3RvcmUvQXBwLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb25maWd1cmVTdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvcm91dGVzLnRzeCIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2FzcG5ldC1wcmVyZW5kZXJpbmcvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL3NlcnZlci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9JbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvTG9naW5Gb3JtLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9OYXZNZW51LnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9yZWdpc3RlckZvcm0udHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb250YWluZXJzL0FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbnRhaW5lcnMvTGF5b3V0LnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29udGFpbmVycy9Mb2dpbi50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbnRhaW5lcnMvUmVnaXN0ZXIudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9oZWxwZXJzL2FwaUNhbGxzLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3RvcmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItcmVkdXgvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4LXRodW5rL2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWR1eC9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFD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QUUxQixJQUFtQjtBQUNILGNBQXFDO0FBQy9CLG9CQVNSO0FBWFE7Ozs7Ozs7Ozs7QUFjRztnQ0FBUSxTQUFRLFFBQWE7QUFDOUMsZ0JBQVMsUUFBUyxPQUFlO0FBQ2pDLGdCQUFnQjtBQUNWLG9CQUFRO0FBQ1YscUJBQVc7QUFDSSxrQ0FBTyxLQUFjLGNBQU8sUUFBZTtBQUNoRDtBQUNWLHFCQUFXO0FBQ1g7QUFDZSxrQ0FBTyxLQUN6Qjs7QUFDSyxtQkFBTSxNQUFRLFNBQ3hCO0FBRTRCOzs7O2dCQUFjLG9GQUFRO2dCQUFNLDJFQUFPOztBQUMzRCxnQkFBTztBQUNHLHdCQUFlO0FBQ2QseUJBQ1Q7QUFIdUI7QUFJdEIsZ0JBQUssUUFBUyxNQUNWLElBQUssT0FBTyxLQUFVLFVBQU87QUFFOUIsbUJBQ1Y7QUFDSDs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDNEI7QUFDRTtBQVV1RTtBQUNFO0FBQzVDO0FBQ3RELElBQWU7QUFDZCxTQUFLLHFEQUFRO0FBQ0osa0JBQU0sc0RBQVE7QUFDakIsZUFBTSxzREFDakI7QUFKc0IsQ0FBakIsQzs7Ozs7O0FDZFAsK0M7Ozs7OztBQ0FBLCtDOzs7Ozs7QUNBQSw4QyIsImZpbGUiOiJtYWluLXNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGJhZDgzNDk5ZWU1MjU5Nzk5OTI2IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoNSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0L3JlYWN0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL3ZlbmRvclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIi4vdmVuZG9yXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoMTUxKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgxNTMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge0FjdGlvbiwgUmVkdWNlciwgQWN0aW9uQ3JlYXRvcn0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgYnJvd3Nlckhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0ICdpc29tb3JwaGljLWZldGNoJztcbmltcG9ydCBBcGlDYWxscyBmcm9tICcuLi9oZWxwZXJzL2FwaUNhbGxzJztcbmltcG9ydCB7IEFwcFRodW5rQWN0aW9uIH0gZnJvbSAnLi8nO1xuXG4vLyBGb3JtdWxhcnkgc3RhdGUgZGF0YVxuZXhwb3J0IGludGVyZmFjZSBGb3JtU3RhdGUge1xuICAgIGNvbnRyb2xsZXJBZGRyZXNzOiBzdHJpbmcsXG4gICAgZmllbGRzOiBzdHJpbmdbXSxcbiAgICB2YWx1ZXM6IGFueVxuICAgIGVycm9yczogYW55LFxuICAgIHN1Ym1pdHRpbmc6IGJvb2xlYW4sXG4gICAgc3VibWl0dGVkOiBib29sZWFuLFxuICAgIHJlc3BvbnNlOiBhbnlcbn1cblxuLy8gYWN0aW9uc1xuaW50ZXJmYWNlIEluaXRpYWxpemVGb3JtQWN0aW9uIHtcbiAgICB0eXBlOiAnSU5JVElBTElaRV9GT1JNJyxcbiAgICBjb250cm9sbGVyQWRkcmVzczogc3RyaW5nLFxuICAgIGZvcm1GaWVsZHM6IHN0cmluZ1tdXG59XG5cbmludGVyZmFjZSBDaGFuZ2VGaWVsZFZhbHVlQWN0aW9uIHtcbiAgICB0eXBlOiAnQ0hBTkdFX1ZBTFVFJyxcbiAgICBjaGFuZ2VkRmllbGQ6IHN0cmluZyxcbiAgICBuZXdWYWx1ZTogYW55XG59XG5cbmludGVyZmFjZSBVcGRhdGVGaWVsZEVycm9yQWN0aW9uIHtcbiAgICB0eXBlOiAnVVBEQVRFX0VSUk9SJyxcbiAgICBmaWVsZEVycm9yczogYW55IFxufVxuXG5pbnRlcmZhY2UgU3VibWl0Rm9ybUFjdGlvbiB7XG4gICAgdHlwZTogJ1NVQk1JVF9GT1JNJ1xufVxuXG5pbnRlcmZhY2UgU3VibWl0RnVsZmlsbGVkQWN0aW9uIHtcbiAgICB0eXBlOiAnU1VCTUlUX0ZVTEZJTExFRCcsXG4gICAgcGF5bG9hZDogYW55XG59XG5cbmludGVyZmFjZSBTdWJtaXRSZWplY3RlZEFjdGlvbiB7IFxuICAgIHR5cGU6ICdTVUJNSVRfUkVKRUNURUQnLFxuICAgIGVycm9yczogYW55XG59XG5cbmludGVyZmFjZSBSZXNldEZvcm1BY3Rpb24ge1xuICAgIHR5cGU6ICdSRVNFVF9GT1JNJ1xufVxuXG5cbnR5cGUgS25vd25BY3Rpb24gPSBVcGRhdGVGaWVsZEVycm9yQWN0aW9uIHwgSW5pdGlhbGl6ZUZvcm1BY3Rpb24gfCBDaGFuZ2VGaWVsZFZhbHVlQWN0aW9uIFxufCBTdWJtaXRGb3JtQWN0aW9uIHwgU3VibWl0RnVsZmlsbGVkQWN0aW9uIHwgU3VibWl0UmVqZWN0ZWRBY3Rpb24gfCBSZXNldEZvcm1BY3Rpb247XG5cbmV4cG9ydCBjb25zdCBhY3Rpb25DcmVhdG9ycyA9IHtcbiAgICBpbml0aWxpemU6IChhZGRyZXNzOiBzdHJpbmcsIGZpZWxkczogc3RyaW5nW10pID0+IDxJbml0aWFsaXplRm9ybUFjdGlvbj57XG4gICAgICAgIHR5cGU6ICdJTklUSUFMSVpFX0ZPUk0nLFxuICAgICAgICBjb250cm9sbGVyQWRkcmVzczogYWRkcmVzcyxcbiAgICAgICAgZm9ybUZpZWxkczogZmllbGRzXG4gICAgfSxcbiAgICBjaGFuZ2U6IChmaWVsZDogc3RyaW5nLCB2YWx1ZTogYW55KSA9PiA8Q2hhbmdlRmllbGRWYWx1ZUFjdGlvbj57XG4gICAgICAgIHR5cGU6ICdDSEFOR0VfVkFMVUUnLFxuICAgICAgICBjaGFuZ2VkRmllbGQ6IGZpZWxkLFxuICAgICAgICBuZXdWYWx1ZTogdmFsdWVcbiAgICB9LFxuICAgIHVwZGF0ZUVycm9yczogKGVycm9yczogYW55KSA9PiA8VXBkYXRlRmllbGRFcnJvckFjdGlvbj57XG4gICAgICAgIHR5cGU6ICdVUERBVEVfRVJST1InLFxuICAgICAgICBmaWVsZEVycm9yczogZXJyb3JzXG4gICAgfSxcbiAgICBzdWJtaXQ6IChzdGF0ZTogRm9ybVN0YXRlKTogQXBwVGh1bmtBY3Rpb248S25vd25BY3Rpb24+ID0+IChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICAgICAgdmFyIHN1Ym1pdHRlZCA9IHRydWU7XG4gICAgICAgIGlmICghc3RhdGUuc3VibWl0dGluZyl7XG4gICAgICAgICAgICBBcGlDYWxscy5yZXF1ZXN0KHN0YXRlLmNvbnRyb2xsZXJBZGRyZXNzLCBcInBvc3RcIiwgc3RhdGUudmFsdWVzKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spXG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdHRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc3VibWl0dGVkKXtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnU1VCTUlUX0ZVTEZJTExFRCcsXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IGRhdGFcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1NVQk1JVF9SRUpFQ1RFRCcsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yczogZGF0YVxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnU1VCTUlUX0ZPUk0nfSk7XG4gICAgICAgIH0gICBcbiAgICB9LFxuICAgIHJlc2V0OiAoKSA9PiA8UmVzZXRGb3JtQWN0aW9uPntcbiAgICAgICAgdHlwZTogJ1JFU0VUX0ZPUk0nXG4gICAgfVxufVxuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7IGNvbnRyb2xsZXJBZGRyZXNzOiBcIlwiLCBmaWVsZHM6IFtdLCB2YWx1ZXM6IHt9LCBlcnJvcnM6IHt9LCBcbiAgICBzdWJtaXR0aW5nOiBmYWxzZSwgc3VibWl0dGVkOiBmYWxzZSwgcmVzcG9uc2U6IG51bGwgfTtcblxuZXhwb3J0IGNvbnN0IHJlZHVjZXI6IFJlZHVjZXI8Rm9ybVN0YXRlPiA9IChzdGF0ZTogRm9ybVN0YXRlLCBhY3Rpb246IEtub3duQWN0aW9uKSA9PiB7XG4gICAgbGV0IG5ld1N0YXRlID0gey4uLnN0YXRlfTtcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xuICAgICAgICBjYXNlICdJTklUSUFMSVpFX0ZPUk0nOlxuICAgICAgICAgICAgbmV3U3RhdGUuY29udHJvbGxlckFkZHJlc3MgPSBhY3Rpb24uY29udHJvbGxlckFkZHJlc3M7XG4gICAgICAgICAgICBuZXdTdGF0ZS5maWVsZHMgPSBhY3Rpb24uZm9ybUZpZWxkcztcbiAgICAgICAgICAgIG5ld1N0YXRlLmZpZWxkcy5mb3JFYWNoKGYgPT4gbmV3U3RhdGUudmFsdWVzW2ZdID0gXCJcIik7XG4gICAgICAgICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgICAgIGNhc2UgJ0NIQU5HRV9WQUxVRSc6XG4gICAgICAgICAgICBuZXdTdGF0ZS52YWx1ZXMgPSB7Li4uc3RhdGUudmFsdWVzfTtcbiAgICAgICAgICAgIG5ld1N0YXRlLnZhbHVlc1thY3Rpb24uY2hhbmdlZEZpZWxkXSA9IGFjdGlvbi5uZXdWYWx1ZTtcbiAgICAgICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICAgICAgY2FzZSAnVVBEQVRFX0VSUk9SJzpcbiAgICAgICAgICAgIG5ld1N0YXRlLmVycm9ycyA9IHsuLi5zdGF0ZS5lcnJvcnN9O1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoYWN0aW9uLmZpZWxkRXJyb3JzKS5mb3JFYWNoKGYgPT4gXG4gICAgICAgICAgICAgICAgbmV3U3RhdGUuZXJyb3JzW2ZdID0gYWN0aW9uLmZpZWxkRXJyb3JzW2ZdKTtcbiAgICAgICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICAgICAgY2FzZSAnU1VCTUlUX0ZPUk0nOlxuICAgICAgICAgICAgbmV3U3RhdGUuc3VibWl0dGluZyA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgICAgIGNhc2UgJ1NVQk1JVF9GVUxGSUxMRUQnOlxuICAgICAgICAgICAgbmV3U3RhdGUuc3VibWl0dGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgbmV3U3RhdGUuc3VibWl0dGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIG5ld1N0YXRlLnJlc3BvbnNlID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICAgICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgICAgIGNhc2UgJ1NVQk1JVF9SRUpFQ1RFRCc6XG4gICAgICAgICAgICBuZXdTdGF0ZS5zdWJtaXR0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICBuZXdTdGF0ZS5lcnJvcnMgPSB7Li4uc3RhdGUuZXJyb3JzfTtcbiAgICAgICAgICAgIG5ld1N0YXRlLmVycm9yc1tcImdsb2JhbFwiXSA9IGFjdGlvbi5lcnJvcnNbXCJcIl07XG4gICAgICAgICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgICAgIGNhc2UgJ1JFU0VUX0ZPUk0nOlxuICAgICAgICAgICAgbmV3U3RhdGUgPSB7Li4uaW5pdGlhbFN0YXRlfTtcbiAgICAgICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNvbnN0IGV4aGF1c3RpdmVDaGVjazogbmV2ZXIgPSBhY3Rpb247XG4gICAgfVxuICAgIC8vIEZvciB1bnJlY29nbml6ZWQgYWN0aW9ucyAob3IgaW4gY2FzZXMgd2hlcmUgYWN0aW9ucyBoYXZlIG5vIGVmZmVjdCksIG11c3QgcmV0dXJuIHRoZSBleGlzdGluZyBzdGF0ZVxuICAgIC8vICAob3IgZGVmYXVsdCBpbml0aWFsIHN0YXRlIGlmIG5vbmUgd2FzIHN1cHBsaWVkKVxuICAgIHJldHVybiBzdGF0ZSB8fCBpbml0aWFsU3RhdGU7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL3N0b3JlL0Zvcm0udHMiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgyMTMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLWZldGNoL2ZldGNoLW5wbS1ub2RlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSB9ICBmcm9tICcuLi9zdG9yZSc7XG5pbXBvcnQgKiBhcyBGb3JtU3RvcmUgZnJvbSAnLi4vc3RvcmUvRm9ybSc7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9JbnB1dCc7XG5pbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi4vaGVscGVycy9mb3JtVmFsaWRhdGlvbic7XG5cbnR5cGUgRm9ybVByb3BzID0gRm9ybVN0b3JlLkZvcm1TdGF0ZSAmIHR5cGVvZiBGb3JtU3RvcmUuYWN0aW9uQ3JlYXRvcnM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8Rm9ybVByb3BzLCB1bmRlZmluZWQ+e1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY3JlYXRlSW5wdXQgPSB0aGlzLmNyZWF0ZUlucHV0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVuZGVyR2xvYmFsRXJyb3JzID0gdGhpcy5yZW5kZXJHbG9iYWxFcnJvcnMuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCl7XG5cbiAgICAgICAgcmV0dXJuICg8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJHbG9iYWxFcnJvcnMoKX1cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyRm9ybUNvbnRlbnQoKX1cbiAgICAgICAgICAgICAgICA8L2Zvcm0+KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVuZGVyRm9ybUNvbnRlbnQoKXtcblxuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVJbnB1dChuYW1lLCB0eXBlLCBsYWJlbCwgdmFsdWUsIGVycm9yKXtcbiAgICAgICAgcmV0dXJuIDxJbnB1dCBuYW1lPXtuYW1lfSB0eXBlPXt0eXBlfSBsYWJlbD17bGFiZWx9IG9uQ2hhbmdlPXt0aGlzLnByb3BzLmNoYW5nZX0gXG4gICAgICAgIG9uRXJyb3I9e3RoaXMucHJvcHMudXBkYXRlRXJyb3JzfSB2YWx1ZT17dmFsdWV9IGVycm9yPXtlcnJvcn0gLz5cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlUGFzc3dvcmRXaXRoQ29uZmlybWF0aW9uSW5wdXQobmFtZSwgbGFiZWwsIHZhbHVlLCBjb25maXJtVmFsdWUsIGVycm9yLCBjb25maXJtRXJyb3Ipe1xuICAgICAgICByZXR1cm4gKDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBuYW1lPXtuYW1lfSB0eXBlPVwicGFzc3dvcmRcIiBsYWJlbD17bGFiZWx9IFxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wcm9wcy5jaGFuZ2V9IG9uRXJyb3I9e3RoaXMucHJvcHMudXBkYXRlRXJyb3JzfSBcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfSBlcnJvcj17ZXJyb3J9IGNvbXBhcmF0b3I9e2NvbmZpcm1WYWx1ZX0vPlxuXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBuYW1lPXtuYW1lICsgXCJDb25maXJtXCJ9IHR5cGU9XCJwYXNzd29yZFwiIGxhYmVsPVwiQ29uZmlybWHDp8Ojb1wiIFxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wcm9wcy5jaGFuZ2V9IG9uRXJyb3I9e3RoaXMucHJvcHMudXBkYXRlRXJyb3JzfSBcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbmZpcm1WYWx1ZX0gZXJyb3I9e2NvbmZpcm1FcnJvcn0gY29tcGFyYXRvcj17dmFsdWV9Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj4pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVDaGVja2JveChuYW1lLCBsYWJlbCwgdmFsdWUpe1xuICAgICAgICByZXR1cm4gPElucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9e25hbWV9IGxhYmVsPXtsYWJlbH0gXG4gICAgICAgIHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9e3RoaXMucHJvcHMuY2hhbmdlfS8+XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZVN1Ym1pdEJ1dHRvbihsYWJlbCl7XG4gICAgICAgIHJldHVybiA8SW5wdXQgdHlwZT1cInN1Ym1pdEJ1dHRvblwiIGxhYmVsPXtsYWJlbH0vPlxuICAgIH1cblxuICAgIHByb3RlY3RlZCBoYW5kbGVTdWJtaXQoZXZlbnQpe1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgZXJyb3JzID0gdmFsaWRhdGUodGhpcy5wcm9wcy52YWx1ZXMpO1xuICAgICAgICB2YXIgaGFzRXJyb3IgPSBPYmplY3Qua2V5cyhlcnJvcnMpLmZpbHRlcihmaWVsZCA9PiBlcnJvcnNbZmllbGRdICE9IFwiXCIpLmxlbmd0aCA+IDA7XG4gICAgICAgIGlmIChoYXNFcnJvcilcbiAgICAgICAgICAgIHRoaXMucHJvcHMudXBkYXRlRXJyb3JzKGVycm9ycyk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc3VibWl0KHRoaXMucHJvcHMpOyBcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVuZGVyR2xvYmFsRXJyb3JzKCl7XG4gICAgICAgIHZhciBlcnJvcnMgPSB0aGlzLnByb3BzLmVycm9yc1tcImdsb2JhbFwiXTtcbiAgICAgICAgaWYgKGVycm9ycyAhPSBudWxsICYmIGVycm9ycyAhPSB1bmRlZmluZWQgJiYgZXJyb3JzLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPlxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLm1hcCgoZXJyb3IsIGluZGV4KSA9PiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGtleT17aW5kZXh9PntlcnJvcn08L3A+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcbiAgICAgICAgdGhpcy5wcm9wcy5yZXNldCgpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9Gb3JtLnRzeCIsImNvbnN0IHZhbGlkYXRlTmFtZSA9IG5hbWUgPT4ge1xuICAgIGlmICghbmFtZSlcbiAgICAgICAgcmV0dXJuIFwiQ2FtcG8gb2JyaWdhdMOzcmlvXCI7XG4gICAgaWYgKG5hbWUubGVuZ3RoIDwgNClcbiAgICAgICAgcmV0dXJuIFwiTXVpdG8gY3VydG9cIjtcbiAgICByZXR1cm4gXCJcIjtcbn1cblxuY29uc3QgdmFsaWRhdGVOb3RFbXB0eSA9IHRleHQgPT4ge1xuICAgIGlmICghdGV4dClcbiAgICAgICAgcmV0dXJuIFwiQ2FtcG8gb2JyaWdhdMOzcmlvXCI7XG4gICAgcmV0dXJuIFwiXCI7XG59XG5cbmNvbnN0IHZhbGlkYXRlRW1haWwgPSBlbWFpbCA9PiB7XG4gICAgaWYgKCFlbWFpbClcbiAgICAgICAgcmV0dXJuIFwiQ2FtcG8gb2JyaWdhdMOzcmlvXCI7XG4gICAgaWYgKCEvXltBLVowLTkuXyUrLV0rQFtBLVowLTkuLV0rXFwuW0EtWl17Miw0fSQvaS50ZXN0KGVtYWlsKSlcbiAgICAgICAgcmV0dXJuIFwiRW1haWwgaW52w6FsaWRvXCI7XG4gICAgcmV0dXJuIFwiXCI7XG59XG5cbmNvbnN0IHZhbGlkYXRlRGVwYXJ0bWVudCA9IGRlcGFydG1lbnQgPT4ge1xuICAgIHJldHVybiBcIlwiO1xufVxuXG5jb25zdCB2YWxpZGF0ZVBhc3N3b3JkID0gKHBhc3N3b3JkLCBwYXNzd29yZENvbmZpcm0gPSBudWxsKSA9PiB7XG4gICAgaWYgKCFwYXNzd29yZClcbiAgICAgICAgcmV0dXJuIFwiQ2FtcG8gb2JyaWdhdMOzcmlvXCI7XG4gICAgaWYgKHBhc3N3b3JkICE9IHBhc3N3b3JkQ29uZmlybSAmJiBwYXNzd29yZENvbmZpcm0gIT0gbnVsbClcbiAgICAgICAgcmV0dXJuIFwiQ29uZmlybWHDp8OjbyBkaWZlcmVudGUgZGEgc2VuaGFcIjtcbiAgICByZXR1cm4gXCJcIjtcbn1cblxuY29uc3QgdmFsaWRhdGVHbG9iYWwgPSBnbG9iYWwgPT4ge1xuICAgIHJldHVybiBcIlwiO1xufVxuXG5jb25zdCB2YWxpZGF0aW9uRnVuY3MgPSB7XG4gICAgJ2VtYWlsJzogdmFsaWRhdGVFbWFpbCxcbiAgICAnbmFtZSc6IHZhbGlkYXRlTmFtZSxcbiAgICAnZmlyc3ROYW1lJzogdmFsaWRhdGVOYW1lLFxuICAgICdsYXN0TmFtZSc6IHZhbGlkYXRlTmFtZSxcbiAgICAnZGVwYXJ0bWVudCc6IHZhbGlkYXRlRGVwYXJ0bWVudCxcbiAgICAncGFzc3dvcmQnOiB2YWxpZGF0ZVBhc3N3b3JkLFxuICAgICdwYXNzd29yZENvbmZpcm0nOiB2YWxpZGF0ZVBhc3N3b3JkLFxuICAgICd1c2VybmFtZSc6IHZhbGlkYXRlTm90RW1wdHksXG4gICAgJ3Bhc3N3b3JkTG9naW4nOiB2YWxpZGF0ZU5vdEVtcHR5LFxuICAgICdnbG9iYWwnOiB2YWxpZGF0ZUdsb2JhbCxcbiAgICAncmVtZW1iZXInOiB2YWxpZGF0ZUdsb2JhbFxufVxuXG5cbmNvbnN0IHZhbGlkYXRlID0gKHZhbHVlcywgY29tcGFyYXRvcj8pID0+IHtcbiAgICB2YXIgZXJyb3JzID0ge307XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZXMpO1xuICAgIGlmIChrZXlzLmxlbmd0aCA8IDIpe1xuICAgICAgICBsZXQga2V5ID0ga2V5c1swXTtcbiAgICAgICAgaWYgKGtleSA9PSBcInBhc3N3b3JkXCIpe1xuICAgICAgICAgICAgZXJyb3JzW2tleV0gPSB2YWxpZGF0aW9uRnVuY3Nba2V5XSh2YWx1ZXNba2V5XSk7XG4gICAgICAgICAgICBpZiAoY29tcGFyYXRvciAhPSB1bmRlZmluZWQgJiYgY29tcGFyYXRvciAhPSBudWxsKVxuICAgICAgICAgICAgICAgIGVycm9yc1tcInBhc3N3b3JkQ29uZmlybVwiXSA9IHZhbGlkYXRpb25GdW5jc1trZXldKHZhbHVlc1trZXldLCBjb21wYXJhdG9yKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChrZXkgPT0gXCJwYXNzd29yZENvbmZpcm1cIil7XG5cbiAgICAgICAgICAgIGVycm9yc1trZXldID0gdmFsaWRhdGlvbkZ1bmNzW2tleV0oY29tcGFyYXRvciwgdmFsdWVzW2tleV0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGVycm9yc1trZXldID0gdmFsaWRhdGlvbkZ1bmNzW2tleV0odmFsdWVzW2tleV0pOyBcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAga2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBpZiAoa2V5ID09IFwicGFzc3dvcmRcIil7XG4gICAgICAgICAgICAgICAgZXJyb3JzW2tleV0gPSB2YWxpZGF0aW9uRnVuY3Nba2V5XSh2YWx1ZXNba2V5XSk7XG4gICAgICAgICAgICAgICAgZXJyb3JzW1wicGFzc3dvcmRDb25maXJtXCJdID0gdmFsaWRhdGlvbkZ1bmNzW2tleV0odmFsdWVzW2tleV0sIHZhbHVlc1tcInBhc3N3b3JkQ29uZmlybVwiXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChrZXkgPT0gXCJwYXNzd29yZENvbmZpcm1cIilcbiAgICAgICAgICAgICAgICBlcnJvcnNba2V5XSA9IHZhbGlkYXRpb25GdW5jc1trZXldKHZhbHVlc1tcInBhc3N3b3JkQ29uZmlybVwiXSwgdmFsdWVzW2tleV0pO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGVycm9yc1trZXldID0gdmFsaWRhdGlvbkZ1bmNzW2tleV0odmFsdWVzW2tleV0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGVycm9ycztcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2hlbHBlcnMvZm9ybVZhbGlkYXRpb24udHN4IiwiaW1wb3J0IHtBY3Rpb24sIFJlZHVjZXIsIEFjdGlvbkNyZWF0b3J9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGJyb3dzZXJIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCc7XG5pbXBvcnQgQXBpQ2FsbHMgZnJvbSAnLi4vaGVscGVycy9hcGlDYWxscyc7XG5pbXBvcnQgeyBBcHBUaHVua0FjdGlvbiB9IGZyb20gJy4vJztcbmltcG9ydCB7IFVzZXJTdGF0ZSB9IGZyb20gXCIuL1VzZXJcIjtcblxuLy8gYXBwbGljYXRpb24gc3RhdGVcbmV4cG9ydCBpbnRlcmZhY2UgQXBwU3RhdGUge1xuICAgIGxvZ2dlZEluOiBib29sZWFuLFxuICAgIHVzZXI6IFVzZXJTdGF0ZVxufVxuXG4vLyBhY3Rpb25zXG5pbnRlcmZhY2UgTG9naW5BY3Rpb24ge1xuICAgIHR5cGU6ICdMT0dJTicsXG4gICAgdXNlcjogVXNlclN0YXRlXG59XG5cbmludGVyZmFjZSBMb2dvdXRBY3Rpb24ge1xuICAgIHR5cGU6ICdMT0dPVVQnXG59XG5cbnR5cGUgS25vd25BY3Rpb24gPSBMb2dpbkFjdGlvbiB8IExvZ291dEFjdGlvbjtcblxuLy8gYWN0aW9uIGNyZWF0b3JzXG5leHBvcnQgY29uc3QgYWN0aW9uQ3JlYXRvcnMgPSB7XG4gICAgbG9naW46IChyZXNwb25zZTogYW55KSA9PiA8TG9naW5BY3Rpb24+e1xuICAgICAgICB0eXBlOiAnTE9HSU4nLFxuICAgICAgICB1c2VyOiByZXNwb25zZVtcInVzZXJcIl1cbiAgICB9LFxuICAgIGxvZ291dDogKCkgPT4gPExvZ291dEFjdGlvbj57XG4gICAgICAgIHR5cGU6ICdMT0dPVVQnXG4gICAgfVxufVxuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgbG9nZ2VkSW46IGZhbHNlLCB1c2VyOiBudWxsXG59O1xuXG4vLyByZWR1Y2VyXG5leHBvcnQgY29uc3QgcmVkdWNlcjogUmVkdWNlcjxBcHBTdGF0ZT4gPSAoc3RhdGU6IEFwcFN0YXRlLCBhY3Rpb246IEtub3duQWN0aW9uKSA9PiB7XG4gICAgdmFyIG5ld1N0YXRlID0gey4uLnN0YXRlfVxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XG4gICAgICAgIGNhc2UgJ0xPR0lOJzpcbiAgICAgICAgICAgIG5ld1N0YXRlLmxvZ2dlZEluID0gdHJ1ZTtcbiAgICAgICAgICAgIG5ld1N0YXRlLnVzZXIgPSBhY3Rpb24udXNlcjtcbiAgICAgICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICAgICAgY2FzZSAnTE9HT1VUJzpcbiAgICAgICAgICAgIG5ld1N0YXRlLmxvZ2dlZEluID0gZmFsc2U7XG4gICAgICAgICAgICBuZXdTdGF0ZS51c2VyID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICBjb25zdCBleGhhdXN0aXZlQ2hlY2s6IG5ldmVyID0gYWN0aW9uO1xuICAgIH1cbiAgICAvLyBGb3IgdW5yZWNvZ25pemVkIGFjdGlvbnMgKG9yIGluIGNhc2VzIHdoZXJlIGFjdGlvbnMgaGF2ZSBubyBlZmZlY3QpLCBtdXN0IHJldHVybiB0aGUgZXhpc3Rpbmcgc3RhdGVcbiAgICAvLyAgKG9yIGRlZmF1bHQgaW5pdGlhbCBzdGF0ZSBpZiBub25lIHdhcyBzdXBwbGllZClcbiAgICByZXR1cm4gc3RhdGUgfHwgaW5pdGlhbFN0YXRlO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9zdG9yZS9BcHAudHMiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlLCBjb21iaW5lUmVkdWNlcnMsIEdlbmVyaWNTdG9yZUVuaGFuY2VyIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xyXG5pbXBvcnQgeyByb3V0ZXJSZWR1Y2VyIH0gZnJvbSAncmVhY3Qtcm91dGVyLXJlZHV4JztcclxuaW1wb3J0ICogYXMgU3RvcmUgZnJvbSAnLi9zdG9yZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25maWd1cmVTdG9yZShpbml0aWFsU3RhdGU/OiBTdG9yZS5BcHBsaWNhdGlvblN0YXRlKSB7XHJcbiAgICAvLyBCdWlsZCBtaWRkbGV3YXJlLiBUaGVzZSBhcmUgZnVuY3Rpb25zIHRoYXQgY2FuIHByb2Nlc3MgdGhlIGFjdGlvbnMgYmVmb3JlIHRoZXkgcmVhY2ggdGhlIHN0b3JlLlxyXG4gICAgY29uc3Qgd2luZG93SWZEZWZpbmVkID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogd2luZG93IGFzIGFueTtcclxuICAgIC8vIElmIGRldlRvb2xzIGlzIGluc3RhbGxlZCwgY29ubmVjdCB0byBpdFxyXG4gICAgY29uc3QgZGV2VG9vbHNFeHRlbnNpb24gPSB3aW5kb3dJZkRlZmluZWQgJiYgd2luZG93SWZEZWZpbmVkLmRldlRvb2xzRXh0ZW5zaW9uIGFzICgpID0+IEdlbmVyaWNTdG9yZUVuaGFuY2VyO1xyXG4gICAgY29uc3QgY3JlYXRlU3RvcmVXaXRoTWlkZGxld2FyZSA9IGNvbXBvc2UoXHJcbiAgICAgICAgYXBwbHlNaWRkbGV3YXJlKHRodW5rKSxcclxuICAgICAgICBkZXZUb29sc0V4dGVuc2lvbiA/IGRldlRvb2xzRXh0ZW5zaW9uKCkgOiBmID0+IGZcclxuICAgICkoY3JlYXRlU3RvcmUpO1xyXG5cclxuICAgIC8vIENvbWJpbmUgYWxsIHJlZHVjZXJzIGFuZCBpbnN0YW50aWF0ZSB0aGUgYXBwLXdpZGUgc3RvcmUgaW5zdGFuY2VcclxuICAgIGNvbnN0IGFsbFJlZHVjZXJzID0gYnVpbGRSb290UmVkdWNlcihTdG9yZS5yZWR1Y2Vycyk7XHJcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlV2l0aE1pZGRsZXdhcmUoYWxsUmVkdWNlcnMsIGluaXRpYWxTdGF0ZSkgYXMgUmVkdXguU3RvcmU8U3RvcmUuQXBwbGljYXRpb25TdGF0ZT47XHJcblxyXG4gICAgLy8gRW5hYmxlIFdlYnBhY2sgaG90IG1vZHVsZSByZXBsYWNlbWVudCBmb3IgcmVkdWNlcnNcclxuICAgIGlmIChtb2R1bGUuaG90KSB7XHJcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoJy4vc3RvcmUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5leHRSb290UmVkdWNlciA9IHJlcXVpcmU8dHlwZW9mIFN0b3JlPignLi9zdG9yZScpO1xyXG4gICAgICAgICAgICBzdG9yZS5yZXBsYWNlUmVkdWNlcihidWlsZFJvb3RSZWR1Y2VyKG5leHRSb290UmVkdWNlci5yZWR1Y2VycykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdG9yZTtcclxufVxyXG5cclxuZnVuY3Rpb24gYnVpbGRSb290UmVkdWNlcihhbGxSZWR1Y2Vycykge1xyXG4gICAgcmV0dXJuIGNvbWJpbmVSZWR1Y2VyczxTdG9yZS5BcHBsaWNhdGlvblN0YXRlPihPYmplY3QuYXNzaWduKHt9LCBhbGxSZWR1Y2VycywgeyByb3V0aW5nOiByb3V0ZXJSZWR1Y2VyIH0pKTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29uZmlndXJlU3RvcmUudHMiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJvdXRlciwgUm91dGUsIEhpc3RvcnlCYXNlIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnLi9jb250YWluZXJzL0xheW91dCc7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi9jb250YWluZXJzL0FwcCc7XHJcbmltcG9ydCBSZWdpc3RlciBmcm9tICcuL2NvbnRhaW5lcnMvUmVnaXN0ZXInO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IDxSb3V0ZSBjb21wb25lbnQ9eyBMYXlvdXQgfT5cclxuICAgIDxSb3V0ZSBwYXRoPScvJyBjb21wb25lbnRzPXt7IGJvZHk6IEFwcCB9fSAvPlxyXG4gICAgPFJvdXRlIHBhdGg9Jy9yZWdpc3RlcicgY29tcG9uZW50cz17e2JvZHk6IFJlZ2lzdGVyIH19IC8+XHJcbjwvUm91dGU+O1xyXG5cclxuLy8gRW5hYmxlIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnQgKEhNUilcclxuaWYgKG1vZHVsZS5ob3QpIHtcclxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL3JvdXRlcy50c3giLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgxNDQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9hc3BuZXQtcHJlcmVuZGVyaW5nL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoMTUwKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL3NlcnZlci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XHJcbmltcG9ydCB7IG1hdGNoLCBSb3V0ZXJDb250ZXh0IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuaW1wb3J0IGNyZWF0ZU1lbW9yeUhpc3RvcnkgZnJvbSAnaGlzdG9yeS9saWIvY3JlYXRlTWVtb3J5SGlzdG9yeSc7XHJcbmltcG9ydCB7IGNyZWF0ZVNlcnZlclJlbmRlcmVyLCBSZW5kZXJSZXN1bHQgfSBmcm9tICdhc3BuZXQtcHJlcmVuZGVyaW5nJztcclxuaW1wb3J0IHJvdXRlcyBmcm9tICcuL3JvdXRlcyc7XHJcbmltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tICcuL2NvbmZpZ3VyZVN0b3JlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNlcnZlclJlbmRlcmVyKHBhcmFtcyA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8UmVuZGVyUmVzdWx0PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgLy8gTWF0Y2ggdGhlIGluY29taW5nIHJlcXVlc3QgYWdhaW5zdCB0aGUgbGlzdCBvZiBjbGllbnQtc2lkZSByb3V0ZXNcclxuICAgICAgICBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKCk7XHJcbiAgICAgICAgbWF0Y2goeyByb3V0ZXMsIGxvY2F0aW9uOiBwYXJhbXMubG9jYXRpb24gfSwgKGVycm9yLCByZWRpcmVjdExvY2F0aW9uLCByZW5kZXJQcm9wczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIElmIHRoZXJlJ3MgYSByZWRpcmVjdGlvbiwganVzdCBzZW5kIHRoaXMgaW5mb3JtYXRpb24gYmFjayB0byB0aGUgaG9zdCBhcHBsaWNhdGlvblxyXG4gICAgICAgICAgICBpZiAocmVkaXJlY3RMb2NhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7IHJlZGlyZWN0VXJsOiByZWRpcmVjdExvY2F0aW9uLnBhdGhuYW1lIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBJZiBpdCBkaWRuJ3QgbWF0Y2ggYW55IHJvdXRlLCByZW5kZXJQcm9wcyB3aWxsIGJlIHVuZGVmaW5lZFxyXG4gICAgICAgICAgICBpZiAoIXJlbmRlclByb3BzKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBsb2NhdGlvbiAnJHsgcGFyYW1zLnVybCB9JyBkb2Vzbid0IG1hdGNoIGFueSByb3V0ZSBjb25maWd1cmVkIGluIHJlYWN0LXJvdXRlci5gKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQnVpbGQgYW4gaW5zdGFuY2Ugb2YgdGhlIGFwcGxpY2F0aW9uXHJcbiAgICAgICAgICAgIGNvbnN0IGFwcCA9IChcclxuICAgICAgICAgICAgICAgIDxQcm92aWRlciBzdG9yZT17IHN0b3JlIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlckNvbnRleHQgey4uLnJlbmRlclByb3BzfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFBlcmZvcm0gYW4gaW5pdGlhbCByZW5kZXIgdGhhdCB3aWxsIGNhdXNlIGFueSBhc3luYyB0YXNrcyAoZS5nLiwgZGF0YSBhY2Nlc3MpIHRvIGJlZ2luXHJcbiAgICAgICAgICAgIHJlbmRlclRvU3RyaW5nKGFwcCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBPbmNlIHRoZSB0YXNrcyBhcmUgZG9uZSwgd2UgY2FuIHBlcmZvcm0gdGhlIGZpbmFsIHJlbmRlclxyXG4gICAgICAgICAgICAvLyBXZSBhbHNvIHNlbmQgdGhlIHJlZHV4IHN0b3JlIHN0YXRlLCBzbyB0aGUgY2xpZW50IGNhbiBjb250aW51ZSBleGVjdXRpb24gd2hlcmUgdGhlIHNlcnZlciBsZWZ0IG9mZlxyXG4gICAgICAgICAgICBwYXJhbXMuZG9tYWluVGFza3MudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHtcclxuICAgICAgICAgICAgICAgICAgICBodG1sOiByZW5kZXJUb1N0cmluZyhhcHApLFxyXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbHM6IHsgaW5pdGlhbFJlZHV4U3RhdGU6IHN0b3JlLmdldFN0YXRlKCkgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sIHJlamVjdCk7IC8vIEFsc28gcHJvcGFnYXRlIGFueSBlcnJvcnMgYmFjayBpbnRvIHRoZSBob3N0IGFwcGxpY2F0aW9uXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9ib290LXNlcnZlci50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi4vaGVscGVycy9mb3JtVmFsaWRhdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgdW5kZWZpbmVkPntcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJJbnB1dCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVuZGVySW5wdXQoKXtcbiAgICAgICAgc3dpdGNoICh0aGlzLnByb3BzLnR5cGUpe1xuICAgICAgICAgICAgY2FzZSBcInRleHRcIjpcbiAgICAgICAgICAgIGNhc2UgXCJwYXNzd29yZFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlclRleHRJbnB1dCgpO1xuICAgICAgICAgICAgY2FzZSBcImNoZWNrYm94XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyQ2hlY2tib3hJbnB1dCgpO1xuICAgICAgICAgICAgY2FzZSBcInN1Ym1pdEJ1dHRvblwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlclN1Ym1pdEJ1dHRvbklucHV0KCk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW5kZXJUZXh0SW5wdXQoKXtcbiAgICAgICAgcmV0dXJuICg8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17dGhpcy5wcm9wcy5uYW1lfT57dGhpcy5wcm9wcy5sYWJlbH08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT17dGhpcy5wcm9wcy50eXBlfSBuYW1lPXt0aGlzLnByb3BzLm5hbWV9IHZhbHVlPXt0aGlzLnByb3BzLnZhbHVlfSBcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMubGFiZWx9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJFcnJvcih0aGlzLnByb3BzLmVycm9yKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj4pO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVuZGVyQ2hlY2tib3hJbnB1dCgpe1xuICAgICAgICByZXR1cm4gKDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXt0aGlzLnByb3BzLm5hbWV9Pnt0aGlzLnByb3BzLmxhYmVsfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPXt0aGlzLnByb3BzLm5hbWV9IHZhbHVlPXt0aGlzLnByb3BzLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj4pO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVuZGVyU3VibWl0QnV0dG9uSW5wdXQoKXtcbiAgICAgICAgcmV0dXJuICg8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPXt0aGlzLnByb3BzLmxhYmVsfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2Pik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW5kZXJFcnJvcihlcnJvcil7XG4gICAgICAgIGlmIChlcnJvciAhPSBudWxsICYmIGVycm9yICE9IHVuZGVmaW5lZCAmJiBlcnJvciAhPSBcIlwiKVxuICAgICAgICAgICAgcmV0dXJuIDxzcGFuPntlcnJvcn08L3NwYW4+O1xuICAgIH1cblxuICAgIC8vIGNhbGxzIHRoZSBzdG9yZSB0byB1cGRhdGUgdGhlIGZvcm0gc3RhdGUgYW5kIHRoZW4gdmFsaWRhdGVzIHRoZSBmaWVsZCB2YWx1ZVxuICAgIHByaXZhdGUgaGFuZGxlQ2hhbmdlKGV2ZW50KXtcbiAgICAgICAgdmFyIGZpZWxkID0ge307XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnR5cGUgPT0gXCJjaGVja2JveFwiKVxuICAgICAgICAgICAgZmllbGRbdGhpcy5wcm9wcy5uYW1lXSA9IGV2ZW50LnRhcmdldC5jaGVja2VkO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBmaWVsZFt0aGlzLnByb3BzLm5hbWVdID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICAvLyB0aGlzLnByb3BzLmNvbXBhcmF0b3IgaXMgb3B0aW9uYWwgYW5kIG9ubHkgdXNlZCBpbiBmZXcgY2FzZXMsIFxuICAgICAgICAvLyBsaWtlIHBhc3N3b3JkIGNvbmZpcm1hdGlvbiBmaWVsZHNcbiAgICAgICAgdmFyIGVycm9yID0gdmFsaWRhdGUoZmllbGQsIHRoaXMucHJvcHMuY29tcGFyYXRvcik7XG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5wcm9wcy5uYW1lLCBmaWVsZFt0aGlzLnByb3BzLm5hbWVdKTtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkVycm9yKGVycm9yKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvSW5wdXQudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZvcm0gZnJvbSAnLi9Gb3JtJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlIH0gIGZyb20gJy4uL3N0b3JlJztcbmltcG9ydCAqIGFzIEZvcm1TdG9yZSBmcm9tICcuLi9zdG9yZS9Gb3JtJztcblxuY2xhc3MgTG9naW5Gb3JtIGV4dGVuZHMgRm9ybSB7XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICB0aGlzLnByb3BzLmluaXRpbGl6ZShcIi9hY2NvdW50L2xvZ2luXCIsIFtcImVtYWlsXCIsIFwicGFzc3dvcmRMb2dpblwiLCBcInJlbWVtYmVyXCJdKTtcbiAgICB9XG5cbiAgICByZW5kZXJGb3JtQ29udGVudCgpe1xuICAgICAgICAgcmV0dXJuICg8ZGl2PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5jcmVhdGVJbnB1dChcImVtYWlsXCIsIFwidGV4dFwiLCBcIkVtYWlsXCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy52YWx1ZXNbXCJlbWFpbFwiXSwgdGhpcy5wcm9wcy5lcnJvcnNbXCJlbWFpbFwiXSl9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5jcmVhdGVJbnB1dChcInBhc3N3b3JkTG9naW5cIiwgXCJwYXNzd29yZFwiLCBcIlNlbmhhXCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy52YWx1ZXNbXCJwYXNzd29yZExvZ2luXCJdLCB0aGlzLnByb3BzLmVycm9yc1tcInBhc3N3b3JkTG9naW5cIl0pfVxuXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLmNyZWF0ZUNoZWNrYm94KFwicmVtZW1iZXJcIiwgXCJMZW1icmFyIGRlIG1pbVwiLCB0aGlzLnByb3BzLnZhbHVlc1tcInJlbWVtYmVyXCJdKX1cblxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5jcmVhdGVTdWJtaXRCdXR0b24oXCJFbnRyYXJcIil9XG4gICAgICAgICAgICAgICAgPC9kaXY+KTtcbiAgICAgfVxuIH1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgICAoc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUpID0+IHN0YXRlLmxvZ2luRm9ybSxcbiAgICBGb3JtU3RvcmUuYWN0aW9uQ3JlYXRvcnNcbikoTG9naW5Gb3JtKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9Mb2dpbkZvcm0udHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBOYXZNZW51IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgdm9pZD4ge1xyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J21haW4tbmF2Jz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZiYXIgbmF2YmFyLWludmVyc2UnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdmJhci1oZWFkZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzc05hbWU9J25hdmJhci10b2dnbGUnIGRhdGEtdG9nZ2xlPSdjb2xsYXBzZScgZGF0YS10YXJnZXQ9Jy5uYXZiYXItY29sbGFwc2UnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NyLW9ubHknPlRvZ2dsZSBuYXZpZ2F0aW9uPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ljb24tYmFyJz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naWNvbi1iYXInPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpY29uLWJhcic+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT0nbmF2YmFyLWJyYW5kJyB0bz17ICcvJyB9PlNJU0VWPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2xlYXJmaXgnPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdmJhci1jb2xsYXBzZSBjb2xsYXBzZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nbmF2IG5hdmJhci1uYXYnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17ICcvJyB9IGFjdGl2ZUNsYXNzTmFtZT0nYWN0aXZlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2dseXBoaWNvbiBnbHlwaGljb24taG9tZSc+PC9zcGFuPiBIb21lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXsgJy9yZWdpc3RlcicgfSBhY3RpdmVDbGFzc05hbWU9J2FjdGl2ZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdnbHlwaGljb24gZ2x5cGhpY29uLWxlYWYnPjwvc3Bhbj4gQ2FkYXN0cmFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvTmF2TWVudS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9ybSBmcm9tICcuL0Zvcm0nO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUgfSAgZnJvbSAnLi4vc3RvcmUnO1xuaW1wb3J0ICogYXMgRm9ybVN0b3JlIGZyb20gJy4uL3N0b3JlL0Zvcm0nO1xuXG5jbGFzcyBSZWdpc3RlckZvcm0gZXh0ZW5kcyBGb3JtIHtcblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIC8vIHRoaXMgbWV0aG9kIE1VU1QgYmUgY2FsbGVkIHdpdGggdGhlIGNvbnRyb2xsZXIgbWV0aG9kIGFkZHJlc3MgYW5kIHRoZVxuICAgICAgICAvLyBmb3JtIGZpZWxkIG5hbWVzLCBvdGhlcndpc2UgdGhlIGZvcm0gd29udCB3b3JrIHByb3Blcmx5XG4gICAgICAgIHRoaXMucHJvcHMuaW5pdGlsaXplKFwiL2FjY291bnQvcmVnaXN0ZXJcIixcbiAgICAgICAgICAgIFtcImZpcnN0TmFtZVwiLCBcImxhc3ROYW1lXCIsIFwiZW1haWxcIiwgXCJkZXBhcnRtZW50XCIsIFwicGFzc3dvcmRcIiwgXCJwYXNzd29yZENvbmZpcm1cIl0pO1xuICAgIH1cblxuICAgIHJlbmRlckZvcm1Db250ZW50KCl7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHt0aGlzLmNyZWF0ZUlucHV0KFwiZmlyc3ROYW1lXCIsIFwidGV4dFwiLCBcIk5vbWVcIiwgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudmFsdWVzW1wiZmlyc3ROYW1lXCJdLCB0aGlzLnByb3BzLmVycm9yc1tcImZpcnN0TmFtZVwiXSl9XG5cbiAgICAgICAgICAgICAgICB7dGhpcy5jcmVhdGVJbnB1dChcImxhc3ROYW1lXCIsIFwidGV4dFwiLCBcIlNvYnJlbm9tZVwiLCBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy52YWx1ZXNbXCJsYXN0TmFtZVwiXSwgdGhpcy5wcm9wcy5lcnJvcnNbXCJsYXN0TmFtZVwiXSl9XG5cbiAgICAgICAgICAgICAgICB7dGhpcy5jcmVhdGVJbnB1dChcImVtYWlsXCIsIFwidGV4dFwiLCBcIkVtYWlsXCIsIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnZhbHVlc1tcImVtYWlsXCJdLCB0aGlzLnByb3BzLmVycm9yc1tcImVtYWlsXCJdKX1cblxuICAgICAgICAgICAgICAgIHt0aGlzLmNyZWF0ZUlucHV0KFwiZGVwYXJ0bWVudFwiLCBcInRleHRcIiwgXCJEZXBhcnRhbWVudG9cIiwgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudmFsdWVzW1wiZGVwYXJ0bWVudFwiXSwgdGhpcy5wcm9wcy5lcnJvcnNbXCJkZXBhcnRtZW50XCJdKX1cblxuICAgICAgICAgICAgICAgIHt0aGlzLmNyZWF0ZVBhc3N3b3JkV2l0aENvbmZpcm1hdGlvbklucHV0KFwicGFzc3dvcmRcIiwgXCJTZW5oYVwiLCB0aGlzLnByb3BzLnZhbHVlc1tcInBhc3N3b3JkXCJdLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnZhbHVlc1tcInBhc3N3b3JkQ29uZmlybVwiXSwgdGhpcy5wcm9wcy5lcnJvcnNbXCJwYXNzd29yZFwiXSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5lcnJvcnNbXCJwYXNzd29yZENvbmZpcm1cIl0pfVxuXG4gICAgICAgICAgICAgICAge3RoaXMuY3JlYXRlU3VibWl0QnV0dG9uKFwiQ2FkYXN0cmFyXCIpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG4vLyBXaXJlIHVwIHRoZSBSZWFjdCBjb21wb25lbnQgdG8gdGhlIFJlZHV4IHN0b3JlXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAgIChzdGF0ZTogQXBwbGljYXRpb25TdGF0ZSkgPT4gc3RhdGUucmVnaXN0ZXJGb3JtLCAvLyBTZWxlY3RzIHdoaWNoIHN0YXRlIHByb3BlcnRpZXMgYXJlIG1lcmdlZCBpbnRvIHRoZSBjb21wb25lbnQncyBwcm9wc1xuICAgIEZvcm1TdG9yZS5hY3Rpb25DcmVhdG9ycyAgICAgICAgICAgICAgICAgLy8gU2VsZWN0cyB3aGljaCBhY3Rpb24gY3JlYXRvcnMgYXJlIG1lcmdlZCBpbnRvIHRoZSBjb21wb25lbnQncyBwcm9wc1xuKShSZWdpc3RlckZvcm0pO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9yZWdpc3RlckZvcm0udHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUgfSAgZnJvbSAnLi4vc3RvcmUnO1xuaW1wb3J0ICogYXMgQXBwU3RvcmUgZnJvbSAnLi4vc3RvcmUvQXBwJztcbmltcG9ydCBMb2dpbiBmcm9tICcuL0xvZ2luJzsgXG5cbnR5cGUgQXBwUHJvcHMgPSBBcHBsaWNhdGlvblN0YXRlICYgdHlwZW9mIEFwcFN0b3JlLmFjdGlvbkNyZWF0b3JzO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8QXBwUHJvcHMsIHVuZGVmaW5lZD57XG5cbiAgICBwdWJsaWMgcmVuZGVyKCl7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmFwcC5sb2dnZWRJbilcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgQ2xpcXVlIGFxdWkgcGFyYSBzYWlyOlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMubG9nb3V0fT5TYWlyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiA8TG9naW4gLz47XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgICAgICBpZiAobmV4dFByb3BzLmxvZ2luRm9ybS5zdWJtaXR0ZWQpXG4gICAgICAgICAgICB0aGlzLnByb3BzLmxvZ2luKG5leHRQcm9wcy5sb2dpbkZvcm0ucmVzcG9uc2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgICAoc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUpID0+IHN0YXRlLFxuICAgIEFwcFN0b3JlLmFjdGlvbkNyZWF0b3JzXG4pKEFwcCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbnRhaW5lcnMvQXBwLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTmF2TWVudSB9IGZyb20gJy4uL2NvbXBvbmVudHMvTmF2TWVudSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExheW91dFByb3BzIHtcclxuICAgIGJvZHk6IFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PExheW91dFByb3BzLCB2b2lkPiB7XHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyLWZsdWlkJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXNtLTMnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZNZW51IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtc20tOSc+XHJcbiAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLmJvZHkgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29udGFpbmVycy9MYXlvdXQudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvTG9naW5Gb3JtJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCB1bmRlZmluZWQ+IHtcclxuICAgIFxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPlNpc2V2PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQ+RmHDp2Egc2V1IGxvZ2luPC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8TG9naW5Gb3JtIC8+ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29udGFpbmVycy9Mb2dpbi50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVnaXN0ZXJGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvcmVnaXN0ZXJGb3JtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVnaXN0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCB1bmRlZmluZWQ+e1xuXG4gICAgcHVibGljIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4gKDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5DYWRhc3RybzwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxoND5DcmllIHVtIG5vdm8gdXN1w6FyaW8uPC9oND5cbiAgICAgICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxSZWdpc3RlckZvcm0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj4pOyBcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29udGFpbmVycy9SZWdpc3Rlci50c3giLCJpbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnO1xuXG5jb25zdCByZXF1ZXN0SGVhZGVyID0ge1xuICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKicsXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbn07XG5cbmludGVyZmFjZSBEZWZhdWx0UmVxdWVzdCB7XG4gICAgbWV0aG9kOiBzdHJpbmcsXG4gICAgaGVhZGVyczoge30sXG4gICAgYm9keT86IHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwaUNhbGxzIHtcblxuICAgIC8vVE9ETzogaW1wbGVtZW50IG90aGVyIGh0dHAgY29tbWFuZHNcbiAgICBwdWJsaWMgc3RhdGljIHJlcXVlc3QoYWRkcmVzcywgbWV0aG9kLCByZXF1ZXN0Qm9keSl7XG4gICAgICAgIHZhciBsb3dlciA9IG1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB2YXIgcmVxdWVzdEluaXQ7XG4gICAgICAgIHN3aXRjaChsb3dlcil7XG4gICAgICAgICAgICBjYXNlICdwb3N0JzpcbiAgICAgICAgICAgICAgICByZXF1ZXN0SW5pdCA9IHRoaXMuY3JlYXRlUmVxdWVzdCgncG9zdCcsIHJlcXVlc3RCb2R5KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2dldCc6XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJlcXVlc3RJbml0ID0gdGhpcy5jcmVhdGVSZXF1ZXN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZldGNoKGFkZHJlc3MsIHJlcXVlc3RJbml0KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBjcmVhdGVSZXF1ZXN0KHJlcXVlc3RNZXRob2QgPSAnZ2V0JywgYm9keSA9IG51bGwpOiBEZWZhdWx0UmVxdWVzdCB7XG4gICAgICAgIGxldCByZXE6IERlZmF1bHRSZXF1ZXN0ID17XG4gICAgICAgICAgICBtZXRob2Q6IHJlcXVlc3RNZXRob2QsXG4gICAgICAgICAgICBoZWFkZXJzOiByZXF1ZXN0SGVhZGVyXG4gICAgICAgIH07XG4gICAgICAgIGlmIChib2R5ICE9IG51bGwpXG4gICAgICAgICAgICByZXEuYm9keSA9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xuXG4gICAgICAgIHJldHVybiByZXE7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9oZWxwZXJzL2FwaUNhbGxzLnRzeCIsImltcG9ydCAqIGFzIEFwcCBmcm9tICcuL0FwcCc7XHJcbmltcG9ydCAqIGFzIEZvcm0gZnJvbSAnLi9Gb3JtJztcclxuXHJcblxyXG4vLyBUaGUgdG9wLWxldmVsIHN0YXRlIG9iamVjdFxyXG5leHBvcnQgaW50ZXJmYWNlIEFwcGxpY2F0aW9uU3RhdGUge1xyXG4gICAgYXBwOiBBcHAuQXBwU3RhdGUsXHJcbiAgICBsb2dpbkZvcm06IEZvcm0uRm9ybVN0YXRlLFxyXG4gICAgcmVnaXN0ZXJGb3JtOiBGb3JtLkZvcm1TdGF0ZVxyXG59XHJcblxyXG4vLyBXaGVuZXZlciBhbiBhY3Rpb24gaXMgZGlzcGF0Y2hlZCwgUmVkdXggd2lsbCB1cGRhdGUgZWFjaCB0b3AtbGV2ZWwgYXBwbGljYXRpb24gc3RhdGUgcHJvcGVydHkgdXNpbmdcclxuLy8gdGhlIHJlZHVjZXIgd2l0aCB0aGUgbWF0Y2hpbmcgbmFtZS4gSXQncyBpbXBvcnRhbnQgdGhhdCB0aGUgbmFtZXMgbWF0Y2ggZXhhY3RseSwgYW5kIHRoYXQgdGhlIHJlZHVjZXJcclxuLy8gYWN0cyBvbiB0aGUgY29ycmVzcG9uZGluZyBBcHBsaWNhdGlvblN0YXRlIHByb3BlcnR5IHR5cGUuXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VycyA9IHtcclxuICAgIGFwcDogQXBwLnJlZHVjZXIsXHJcbiAgICByZWdpc3RlckZvcm06IEZvcm0ucmVkdWNlcixcclxuICAgIGxvZ2luRm9ybTogRm9ybS5yZWR1Y2VyXHJcbn07XHJcblxyXG4vLyBUaGlzIHR5cGUgY2FuIGJlIHVzZWQgYXMgYSBoaW50IG9uIGFjdGlvbiBjcmVhdG9ycyBzbyB0aGF0IGl0cyAnZGlzcGF0Y2gnIGFuZCAnZ2V0U3RhdGUnIHBhcmFtcyBhcmVcclxuLy8gY29ycmVjdGx5IHR5cGVkIHRvIG1hdGNoIHlvdXIgc3RvcmUuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXBwVGh1bmtBY3Rpb248VEFjdGlvbj4ge1xyXG4gICAgKGRpc3BhdGNoOiAoYWN0aW9uOiBUQWN0aW9uKSA9PiB2b2lkLCBnZXRTdGF0ZTogKCkgPT4gQXBwbGljYXRpb25TdGF0ZSk6IHZvaWQ7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL3N0b3JlL2luZGV4LnRzIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoMTUyKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLXJlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDE1NCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4LXRodW5rL2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDc5KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVkdXgvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==