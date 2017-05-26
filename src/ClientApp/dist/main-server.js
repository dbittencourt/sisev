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

module.exports = (__webpack_require__(1))(153);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(151);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return reducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_apiCalls__ = __webpack_require__(22);



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
    submit: function submit() {
        return function (dispatch, getState) {
            var state = getState().form;
            var submitted = true;
            if (!state.submitting) {
                __WEBPACK_IMPORTED_MODULE_2__helpers_apiCalls__["a" /* default */].request(state.controllerAddress, "post", state.values).then(function (response) {
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
    redirect: function redirect() {
        return function (dispatch, getState) {
            var url = getState().form.redirectUrl;
            /*dispatch({
                type: 'RESET_FORM'
            });*/
            __WEBPACK_IMPORTED_MODULE_0_react_router__["browserHistory"].push(url);
        };
    },
    reset: function reset() {
        return {
            type: 'RESET_FORM'
        };
    }
};
var initialState = { controllerAddress: "", fields: [], values: {}, errors: {},
    submitting: false, submitted: false, redirectUrl: "" };
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
            newState.redirectUrl = action.payload["redirectUrl"];
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Input__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_formValidation__ = __webpack_require__(6);
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
            if (this.props.submitted) this.props.redirect();
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
            if (hasError) this.props.updateErrors(errors);else this.props.submit();
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
/* 6 */
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return reducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_domain_task__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_domain_task___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_domain_task__);

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).
var actionCreators = {
    requestWeatherForecasts: function requestWeatherForecasts(startDateIndex) {
        return function (dispatch, getState) {
            // Only load data if it's something we don't already have (and are not already loading)
            if (startDateIndex !== getState().weatherForecasts.startDateIndex) {
                var fetchTask = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_domain_task__["fetch"])('/api/SampleData/WeatherForecasts?startDateIndex=' + startDateIndex).then(function (response) {
                    return response.json();
                }).then(function (data) {
                    dispatch({ type: 'RECEIVE_WEATHER_FORECASTS', startDateIndex: startDateIndex, forecasts: data });
                });
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_domain_task__["addTask"])(fetchTask); // Ensure server-side prerendering waits for this to complete
                dispatch({ type: 'REQUEST_WEATHER_FORECASTS', startDateIndex: startDateIndex });
            }
        };
    }
};
// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.
var unloadedState = { startDateIndex: null, forecasts: [], isLoading: false };
var reducer = function reducer(state, action) {
    switch (action.type) {
        case 'REQUEST_WEATHER_FORECASTS':
            return {
                startDateIndex: action.startDateIndex,
                forecasts: state.forecasts,
                isLoading: true
            };
        case 'RECEIVE_WEATHER_FORECASTS':
            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
            // handle out-of-order responses.
            if (action.startDateIndex === state.startDateIndex) {
                return {
                    startDateIndex: action.startDateIndex,
                    forecasts: action.forecasts,
                    isLoading: false
                };
            }
            break;
        default:
            // The following line guarantees that every action in the KnownAction union has been covered by a case above
            var exhaustiveCheck = action;
    }
    return state || unloadedState;
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(213);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = configureStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux__ = __webpack_require__(25);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers_Layout__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__containers_Home__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__containers_Register__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_FetchData__ = __webpack_require__(14);






/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
    __WEBPACK_IMPORTED_MODULE_1_react_router__["Route"],
    { component: __WEBPACK_IMPORTED_MODULE_2__containers_Layout__["a" /* Layout */] },
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '/', components: { body: __WEBPACK_IMPORTED_MODULE_3__containers_Home__["a" /* default */] } }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '/register', components: { body: __WEBPACK_IMPORTED_MODULE_4__containers_Register__["a" /* default */] } }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
        __WEBPACK_IMPORTED_MODULE_1_react_router__["Route"],
        { path: '/fetchdata', components: { body: __WEBPACK_IMPORTED_MODULE_5__components_FetchData__["a" /* default */] } },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '(:startDateIndex)' })
    )
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router__ = __webpack_require__(2);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_WeatherForecasts__ = __webpack_require__(7);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var FetchData = function (_React$Component) {
    _inherits(FetchData, _React$Component);

    function FetchData() {
        _classCallCheck(this, FetchData);

        return _possibleConstructorReturn(this, (FetchData.__proto__ || Object.getPrototypeOf(FetchData)).apply(this, arguments));
    }

    _createClass(FetchData, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            // This method runs when the component is first added to the page
            var startDateIndex = parseInt(this.props.params.startDateIndex) || 0;
            this.props.requestWeatherForecasts(startDateIndex);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            // This method runs when incoming props (e.g., route params) change
            var startDateIndex = parseInt(nextProps.params.startDateIndex) || 0;
            this.props.requestWeatherForecasts(startDateIndex);
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'h1',
                    null,
                    'Weather forecast'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'p',
                    null,
                    'This component demonstrates fetching data from the server and working with URL parameters.'
                ),
                this.renderForecastsTable(),
                this.renderPagination()
            );
        }
    }, {
        key: 'renderForecastsTable',
        value: function renderForecastsTable() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'table',
                { className: 'table' },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'thead',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        'tr',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'th',
                            null,
                            'Date'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'th',
                            null,
                            'Temp. (C)'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'th',
                            null,
                            'Temp. (F)'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'th',
                            null,
                            'Summary'
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'tbody',
                    null,
                    this.props.forecasts.map(function (forecast) {
                        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'tr',
                            { key: forecast.dateFormatted },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                'td',
                                null,
                                forecast.dateFormatted
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                'td',
                                null,
                                forecast.temperatureC
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                'td',
                                null,
                                forecast.temperatureF
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                'td',
                                null,
                                forecast.summary
                            )
                        );
                    })
                )
            );
        }
    }, {
        key: 'renderPagination',
        value: function renderPagination() {
            var prevStartDateIndex = this.props.startDateIndex - 5;
            var nextStartDateIndex = this.props.startDateIndex + 5;
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'p',
                { className: 'clearfix text-center' },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                    { className: 'btn btn-default pull-left', to: '/fetchdata/' + prevStartDateIndex },
                    'Previous'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                    { className: 'btn btn-default pull-right', to: '/fetchdata/' + nextStartDateIndex },
                    'Next'
                ),
                this.props.isLoading ? __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'span',
                    null,
                    'Loading...'
                ) : []
            );
        }
    }]);

    return FetchData;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(function (state) {
    return state.weatherForecasts;
}, // Selects which state properties are merged into the component's props
__WEBPACK_IMPORTED_MODULE_3__store_WeatherForecasts__["a" /* actionCreators */] // Selects which action creators are merged into the component's props
)(FetchData));

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_formValidation__ = __webpack_require__(6);
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
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Form__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(3);
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
    return state.form;
}, __WEBPACK_IMPORTED_MODULE_3__store_Form__["a" /* actionCreators */])(LoginForm));

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(2);
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
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                'li',
                                null,
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                    __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                                    { to: '/fetchdata', activeClassName: 'active' },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('span', { className: 'glyphicon glyphicon-th-list' }),
                                    ' Fetch data'
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
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Form__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(3);
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
    return state.form;
}, // Selects which state properties are merged into the component's props
__WEBPACK_IMPORTED_MODULE_3__store_Form__["a" /* actionCreators */] // Selects which action creators are merged into the component's props
)(RegisterForm));

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_LoginForm__ = __webpack_require__(16);
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
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Layout; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_NavMenu__ = __webpack_require__(17);
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
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_registerForm__ = __webpack_require__(18);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__ = __webpack_require__(8);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__WeatherForecasts__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Form__ = __webpack_require__(4);


// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
var reducers = {
    weatherForecasts: __WEBPACK_IMPORTED_MODULE_0__WeatherForecasts__["b" /* reducer */],
    form: __WEBPACK_IMPORTED_MODULE_1__Form__["b" /* reducer */]
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(147);

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(152);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(154);

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(79);

/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTk5ZTI2YWI5NmY1YWZkNmJlZjIiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC9yZWFjdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiLi92ZW5kb3JcIiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3RvcmUvRm9ybS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9Gb3JtLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvaGVscGVycy9mb3JtVmFsaWRhdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3N0b3JlL1dlYXRoZXJGb3JlY2FzdHMudHMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLWZldGNoL2ZldGNoLW5wbS1ub2RlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29uZmlndXJlU3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3JvdXRlcy50c3giLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9hc3BuZXQtcHJlcmVuZGVyaW5nL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9zZXJ2ZXIuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9ib290LXNlcnZlci50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvRmV0Y2hEYXRhLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9JbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvTG9naW5Gb3JtLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9OYXZNZW51LnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9yZWdpc3RlckZvcm0udHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb250YWluZXJzL0hvbWUudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb250YWluZXJzL0xheW91dC50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbnRhaW5lcnMvUmVnaXN0ZXIudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9oZWxwZXJzL2FwaUNhbGxzLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3RvcmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9kb21haW4tdGFzay9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItcmVkdXgvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4LXRodW5rL2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWR1eC9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIl0s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QUFLO2tCQUFVLFdBQ2pCO0FBQUk7O3NCQUFVLFdBQ1Y7QUFBSTs7MEJBQVUsV0FDVjtBQUFBLDZFQUVKOztBQUFJOzswQkFBVSxXQUNWO0FBQU0sNkJBQU0sTUFJNUI7Ozs7QUFDSDs7OztFQWJnQyxnREFDaEIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUmM7QUFHakI7O0lBQWdCOzs7Ozs7Ozs7Ozs7QUFHZjtBQUNLOztBQUNBOzs7OztBQUNBOzs7OztBQUNBO0FBQUEscUVBRWhCOztBQUNIOzs7O0VBVjBDLGdEQUUxQjs7Ozs7Ozs7Ozs7Ozs7O0FDTFM7QUFFMUIsSUFBbUI7QUFDSCxjQUFxQztBQUMvQixvQkFTUjtBQVhROzs7Ozs7Ozs7O0FBY0c7Z0NBQVEsU0FBUSxRQUFhO0FBQzlDLGdCQUFTLFFBQVMsT0FBZTtBQUNqQyxnQkFBZ0I7QUFDVixvQkFBUTtBQUNWLHFCQUFXO0FBQ0ksa0NBQU8sS0FBYyxjQUFPLFFBQWU7QUFDaEQ7QUFDVixxQkFBVztBQUNYO0FBQ2Usa0NBQU8sS0FDekI7O0FBQ0ssbUJBQU0sTUFBUSxTQUN4QjtBQUU0Qjs7OztnQkFBYyxvRkFBUTtnQkFBTSwyRUFBTzs7QUFDM0QsZ0JBQU87QUFDRyx3QkFBZTtBQUNkLHlCQUNUO0FBSHVCO0FBSXRCLGdCQUFLLFFBQVMsTUFDVixJQUFLLE9BQU8sS0FBVSxVQUFPO0FBRTlCLG1CQUNWO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q3NEO0FBQ3hCO0FBUXVFO0FBQ0U7QUFDNUM7QUFDdEQsSUFBZTtBQUNELHNCQUFrQixrRUFBUTtBQUN0QyxVQUFNLHNEQUNaO0FBSHNCLENBQWpCLEM7Ozs7OztBQ1pQLCtDOzs7Ozs7QUNBQSwrQzs7Ozs7O0FDQUEsK0M7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6Im1haW4tc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMTk5ZTI2YWI5NmY1YWZkNmJlZjIiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSg1KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QvcmVhY3QuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vdmVuZG9yXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiLi92ZW5kb3JcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgxNTMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgxNTEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7QWN0aW9uLCBSZWR1Y2VyLCBBY3Rpb25DcmVhdG9yfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnO1xuaW1wb3J0IEFwaUNhbGxzIGZyb20gJy4uL2hlbHBlcnMvYXBpQ2FsbHMnO1xuaW1wb3J0IHsgQXBwVGh1bmtBY3Rpb24gfSBmcm9tICcuLyc7XG5cbi8vIEZvcm11bGFyeSBzdGF0ZSBkYXRhXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1TdGF0ZSB7XG4gICAgY29udHJvbGxlckFkZHJlc3M6IHN0cmluZyxcbiAgICBmaWVsZHM6IHN0cmluZ1tdLFxuICAgIHZhbHVlczoge31cbiAgICBlcnJvcnM6IHt9LFxuICAgIHN1Ym1pdHRpbmc6IGJvb2xlYW4sXG4gICAgc3VibWl0dGVkOiBib29sZWFuLFxuICAgIHJlZGlyZWN0VXJsOiBzdHJpbmdcbn1cblxuLy8gYWN0aW9uc1xuaW50ZXJmYWNlIEluaXRpYWxpemVGb3JtQWN0aW9uIHtcbiAgICB0eXBlOiAnSU5JVElBTElaRV9GT1JNJyxcbiAgICBjb250cm9sbGVyQWRkcmVzczogc3RyaW5nLFxuICAgIGZvcm1GaWVsZHM6IHN0cmluZ1tdXG59XG5cbmludGVyZmFjZSBDaGFuZ2VGaWVsZFZhbHVlQWN0aW9uIHtcbiAgICB0eXBlOiAnQ0hBTkdFX1ZBTFVFJyxcbiAgICBjaGFuZ2VkRmllbGQ6IHN0cmluZyxcbiAgICBuZXdWYWx1ZTogYW55XG59XG5cbmludGVyZmFjZSBVcGRhdGVGaWVsZEVycm9yQWN0aW9uIHtcbiAgICB0eXBlOiAnVVBEQVRFX0VSUk9SJyxcbiAgICBmaWVsZEVycm9yczoge30gXG59XG5cbmludGVyZmFjZSBTdWJtaXRGb3JtQWN0aW9uIHtcbiAgICB0eXBlOiAnU1VCTUlUX0ZPUk0nXG59XG5cbmludGVyZmFjZSBTdWJtaXRGdWxmaWxsZWRBY3Rpb24ge1xuICAgIHR5cGU6ICdTVUJNSVRfRlVMRklMTEVEJyxcbiAgICBwYXlsb2FkOiBhbnlcbn1cblxuaW50ZXJmYWNlIFN1Ym1pdFJlamVjdGVkQWN0aW9uIHsgXG4gICAgdHlwZTogJ1NVQk1JVF9SRUpFQ1RFRCcsXG4gICAgZXJyb3JzOiBhbnlcbn1cblxuaW50ZXJmYWNlIFJlc2V0Rm9ybUFjdGlvbiB7XG4gICAgdHlwZTogJ1JFU0VUX0ZPUk0nXG59XG5cblxudHlwZSBLbm93bkFjdGlvbiA9IFVwZGF0ZUZpZWxkRXJyb3JBY3Rpb24gfCBJbml0aWFsaXplRm9ybUFjdGlvbiB8IENoYW5nZUZpZWxkVmFsdWVBY3Rpb24gXG58IFN1Ym1pdEZvcm1BY3Rpb24gfCBTdWJtaXRGdWxmaWxsZWRBY3Rpb24gfCBTdWJtaXRSZWplY3RlZEFjdGlvbiB8IFJlc2V0Rm9ybUFjdGlvbjtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbkNyZWF0b3JzID0ge1xuICAgIGluaXRpbGl6ZTogKGFkZHJlc3M6IHN0cmluZywgZmllbGRzOiBzdHJpbmdbXSkgPT4gPEluaXRpYWxpemVGb3JtQWN0aW9uPntcbiAgICAgICAgdHlwZTogJ0lOSVRJQUxJWkVfRk9STScsXG4gICAgICAgIGNvbnRyb2xsZXJBZGRyZXNzOiBhZGRyZXNzLFxuICAgICAgICBmb3JtRmllbGRzOiBmaWVsZHNcbiAgICB9LFxuICAgIGNoYW5nZTogKGZpZWxkOiBzdHJpbmcsIHZhbHVlOiBhbnkpID0+IDxDaGFuZ2VGaWVsZFZhbHVlQWN0aW9uPntcbiAgICAgICAgdHlwZTogJ0NIQU5HRV9WQUxVRScsXG4gICAgICAgIGNoYW5nZWRGaWVsZDogZmllbGQsXG4gICAgICAgIG5ld1ZhbHVlOiB2YWx1ZVxuICAgIH0sXG4gICAgdXBkYXRlRXJyb3JzOiAoZXJyb3JzOiBhbnkpID0+IDxVcGRhdGVGaWVsZEVycm9yQWN0aW9uPntcbiAgICAgICAgdHlwZTogJ1VQREFURV9FUlJPUicsXG4gICAgICAgIGZpZWxkRXJyb3JzOiBlcnJvcnNcbiAgICB9LFxuICAgIHN1Ym1pdDogKCk6IEFwcFRodW5rQWN0aW9uPEtub3duQWN0aW9uPiA9PiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgICAgIHZhciBzdGF0ZSA9IGdldFN0YXRlKCkuZm9ybTtcbiAgICAgICAgdmFyIHN1Ym1pdHRlZCA9IHRydWU7XG4gICAgICAgIGlmICghc3RhdGUuc3VibWl0dGluZyl7XG4gICAgICAgICAgICBBcGlDYWxscy5yZXF1ZXN0KHN0YXRlLmNvbnRyb2xsZXJBZGRyZXNzLCBcInBvc3RcIiwgc3RhdGUudmFsdWVzKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spXG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdHRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc3VibWl0dGVkKXtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnU1VCTUlUX0ZVTEZJTExFRCcsXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IGRhdGFcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1NVQk1JVF9SRUpFQ1RFRCcsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yczogZGF0YVxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnU1VCTUlUX0ZPUk0nfSk7XG4gICAgICAgIH0gICBcbiAgICB9LFxuICAgIHJlZGlyZWN0OiAoKTogQXBwVGh1bmtBY3Rpb248S25vd25BY3Rpb24+ID0+IChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICAgICAgdmFyIHVybCA9IGdldFN0YXRlKCkuZm9ybS5yZWRpcmVjdFVybDtcbiAgICAgICAgLypkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiAnUkVTRVRfRk9STSdcbiAgICAgICAgfSk7Ki9cbiAgICAgICAgYnJvd3Nlckhpc3RvcnkucHVzaCh1cmwpO1xuICAgIH0sXG4gICAgcmVzZXQ6ICgpID0+IDxSZXNldEZvcm1BY3Rpb24+e1xuICAgICAgICB0eXBlOiAnUkVTRVRfRk9STSdcbiAgICB9XG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHsgY29udHJvbGxlckFkZHJlc3M6IFwiXCIsIGZpZWxkczogW10sIHZhbHVlczoge30sIGVycm9yczoge30sIFxuICAgIHN1Ym1pdHRpbmc6IGZhbHNlLCBzdWJtaXR0ZWQ6IGZhbHNlLCByZWRpcmVjdFVybDogXCJcIiB9O1xuXG5leHBvcnQgY29uc3QgcmVkdWNlcjogUmVkdWNlcjxGb3JtU3RhdGU+ID0gKHN0YXRlOiBGb3JtU3RhdGUsIGFjdGlvbjogS25vd25BY3Rpb24pID0+IHtcbiAgICBsZXQgbmV3U3RhdGUgPSB7Li4uc3RhdGV9O1xuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XG4gICAgICAgIGNhc2UgJ0lOSVRJQUxJWkVfRk9STSc6XG4gICAgICAgICAgICBuZXdTdGF0ZS5jb250cm9sbGVyQWRkcmVzcyA9IGFjdGlvbi5jb250cm9sbGVyQWRkcmVzcztcbiAgICAgICAgICAgIG5ld1N0YXRlLmZpZWxkcyA9IGFjdGlvbi5mb3JtRmllbGRzO1xuICAgICAgICAgICAgbmV3U3RhdGUuZmllbGRzLmZvckVhY2goZiA9PiBuZXdTdGF0ZS52YWx1ZXNbZl0gPSBcIlwiKTtcbiAgICAgICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICAgICAgY2FzZSAnQ0hBTkdFX1ZBTFVFJzpcbiAgICAgICAgICAgIG5ld1N0YXRlLnZhbHVlcyA9IHsuLi5zdGF0ZS52YWx1ZXN9O1xuICAgICAgICAgICAgbmV3U3RhdGUudmFsdWVzW2FjdGlvbi5jaGFuZ2VkRmllbGRdID0gYWN0aW9uLm5ld1ZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgICAgICBjYXNlICdVUERBVEVfRVJST1InOlxuICAgICAgICAgICAgbmV3U3RhdGUuZXJyb3JzID0gey4uLnN0YXRlLmVycm9yc307XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhhY3Rpb24uZmllbGRFcnJvcnMpLmZvckVhY2goZiA9PiBcbiAgICAgICAgICAgICAgICBuZXdTdGF0ZS5lcnJvcnNbZl0gPSBhY3Rpb24uZmllbGRFcnJvcnNbZl0pO1xuICAgICAgICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgICAgICBjYXNlICdTVUJNSVRfRk9STSc6XG4gICAgICAgICAgICBuZXdTdGF0ZS5zdWJtaXR0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICAgICAgY2FzZSAnU1VCTUlUX0ZVTEZJTExFRCc6XG4gICAgICAgICAgICBuZXdTdGF0ZS5zdWJtaXR0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICBuZXdTdGF0ZS5zdWJtaXR0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgbmV3U3RhdGUucmVkaXJlY3RVcmwgPSBhY3Rpb24ucGF5bG9hZFtcInJlZGlyZWN0VXJsXCJdO1xuICAgICAgICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgICAgICBjYXNlICdTVUJNSVRfUkVKRUNURUQnOlxuICAgICAgICAgICAgbmV3U3RhdGUuc3VibWl0dGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgbmV3U3RhdGUuZXJyb3JzID0gey4uLnN0YXRlLmVycm9yc307XG4gICAgICAgICAgICBuZXdTdGF0ZS5lcnJvcnNbXCJnbG9iYWxcIl0gPSBhY3Rpb24uZXJyb3JzW1wiXCJdO1xuICAgICAgICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgICAgICBjYXNlICdSRVNFVF9GT1JNJzpcbiAgICAgICAgICAgIG5ld1N0YXRlID0gey4uLmluaXRpYWxTdGF0ZX07XG4gICAgICAgICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjb25zdCBleGhhdXN0aXZlQ2hlY2s6IG5ldmVyID0gYWN0aW9uO1xuICAgIH1cbiAgICAvLyBGb3IgdW5yZWNvZ25pemVkIGFjdGlvbnMgKG9yIGluIGNhc2VzIHdoZXJlIGFjdGlvbnMgaGF2ZSBubyBlZmZlY3QpLCBtdXN0IHJldHVybiB0aGUgZXhpc3Rpbmcgc3RhdGVcbiAgICAvLyAgKG9yIGRlZmF1bHQgaW5pdGlhbCBzdGF0ZSBpZiBub25lIHdhcyBzdXBwbGllZClcbiAgICByZXR1cm4gc3RhdGUgfHwgaW5pdGlhbFN0YXRlO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9zdG9yZS9Gb3JtLnRzIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUgfSAgZnJvbSAnLi4vc3RvcmUnO1xuaW1wb3J0ICogYXMgRm9ybVN0b3JlIGZyb20gJy4uL3N0b3JlL0Zvcm0nO1xuaW1wb3J0IElucHV0IGZyb20gJy4vSW5wdXQnO1xuaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4uL2hlbHBlcnMvZm9ybVZhbGlkYXRpb24nO1xuXG50eXBlIEZvcm1Qcm9wcyA9IEZvcm1TdG9yZS5Gb3JtU3RhdGUgJiB0eXBlb2YgRm9ybVN0b3JlLmFjdGlvbkNyZWF0b3JzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PEZvcm1Qcm9wcywgdW5kZWZpbmVkPntcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNyZWF0ZUlucHV0ID0gdGhpcy5jcmVhdGVJbnB1dC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlbmRlckdsb2JhbEVycm9ycyA9IHRoaXMucmVuZGVyR2xvYmFsRXJyb3JzLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpe1xuICAgICAgICBpZih0aGlzLnByb3BzLnN1Ym1pdHRlZClcbiAgICAgICAgICAgIHRoaXMucHJvcHMucmVkaXJlY3QoKTtcbiAgICAgICAgcmV0dXJuICg8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJHbG9iYWxFcnJvcnMoKX1cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyRm9ybUNvbnRlbnQoKX1cbiAgICAgICAgICAgICAgICA8L2Zvcm0+KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVuZGVyRm9ybUNvbnRlbnQoKXtcblxuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVJbnB1dChuYW1lLCB0eXBlLCBsYWJlbCwgdmFsdWUsIGVycm9yKXtcbiAgICAgICAgcmV0dXJuIDxJbnB1dCBuYW1lPXtuYW1lfSB0eXBlPXt0eXBlfSBsYWJlbD17bGFiZWx9IG9uQ2hhbmdlPXt0aGlzLnByb3BzLmNoYW5nZX0gXG4gICAgICAgIG9uRXJyb3I9e3RoaXMucHJvcHMudXBkYXRlRXJyb3JzfSB2YWx1ZT17dmFsdWV9IGVycm9yPXtlcnJvcn0gLz5cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlUGFzc3dvcmRXaXRoQ29uZmlybWF0aW9uSW5wdXQobmFtZSwgbGFiZWwsIHZhbHVlLCBjb25maXJtVmFsdWUsIGVycm9yLCBjb25maXJtRXJyb3Ipe1xuICAgICAgICByZXR1cm4gKDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBuYW1lPXtuYW1lfSB0eXBlPVwicGFzc3dvcmRcIiBsYWJlbD17bGFiZWx9IFxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wcm9wcy5jaGFuZ2V9IG9uRXJyb3I9e3RoaXMucHJvcHMudXBkYXRlRXJyb3JzfSBcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfSBlcnJvcj17ZXJyb3J9IGNvbXBhcmF0b3I9e2NvbmZpcm1WYWx1ZX0vPlxuXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBuYW1lPXtuYW1lICsgXCJDb25maXJtXCJ9IHR5cGU9XCJwYXNzd29yZFwiIGxhYmVsPVwiQ29uZmlybWHDp8Ojb1wiIFxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wcm9wcy5jaGFuZ2V9IG9uRXJyb3I9e3RoaXMucHJvcHMudXBkYXRlRXJyb3JzfSBcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbmZpcm1WYWx1ZX0gZXJyb3I9e2NvbmZpcm1FcnJvcn0gY29tcGFyYXRvcj17dmFsdWV9Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj4pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVDaGVja2JveChuYW1lLCBsYWJlbCwgdmFsdWUpe1xuICAgICAgICByZXR1cm4gPElucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9e25hbWV9IGxhYmVsPXtsYWJlbH0gXG4gICAgICAgIHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9e3RoaXMucHJvcHMuY2hhbmdlfS8+XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZVN1Ym1pdEJ1dHRvbihsYWJlbCl7XG4gICAgICAgIHJldHVybiA8SW5wdXQgdHlwZT1cInN1Ym1pdEJ1dHRvblwiIGxhYmVsPXtsYWJlbH0vPlxuICAgIH1cblxuICAgIHByb3RlY3RlZCBoYW5kbGVTdWJtaXQoZXZlbnQpe1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgZXJyb3JzID0gdmFsaWRhdGUodGhpcy5wcm9wcy52YWx1ZXMpO1xuICAgICAgICB2YXIgaGFzRXJyb3IgPSBPYmplY3Qua2V5cyhlcnJvcnMpLmZpbHRlcihmaWVsZCA9PiBlcnJvcnNbZmllbGRdICE9IFwiXCIpLmxlbmd0aCA+IDA7XG4gICAgICAgIGlmIChoYXNFcnJvcilcbiAgICAgICAgICAgIHRoaXMucHJvcHMudXBkYXRlRXJyb3JzKGVycm9ycyk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc3VibWl0KCk7IFxuICAgIH1cblxuICAgIHByb3RlY3RlZCByZW5kZXJHbG9iYWxFcnJvcnMoKXtcbiAgICAgICAgdmFyIGVycm9ycyA9IHRoaXMucHJvcHMuZXJyb3JzW1wiZ2xvYmFsXCJdO1xuICAgICAgICBpZiAoZXJyb3JzICE9IG51bGwgJiYgZXJyb3JzICE9IHVuZGVmaW5lZCAmJiBlcnJvcnMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+XG4gICAgICAgICAgICAgICAgICAgIHtlcnJvcnMubWFwKChlcnJvciwgaW5kZXgpID0+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAga2V5PXtpbmRleH0+e2Vycm9yfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xuICAgICAgICB0aGlzLnByb3BzLnJlc2V0KCk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL0Zvcm0udHN4IiwiY29uc3QgdmFsaWRhdGVOYW1lID0gbmFtZSA9PiB7XG4gICAgaWYgKCFuYW1lKVxuICAgICAgICByZXR1cm4gXCJDYW1wbyBvYnJpZ2F0w7NyaW9cIjtcbiAgICBpZiAobmFtZS5sZW5ndGggPCA0KVxuICAgICAgICByZXR1cm4gXCJNdWl0byBjdXJ0b1wiO1xuICAgIHJldHVybiBcIlwiO1xufVxuXG5jb25zdCB2YWxpZGF0ZU5vdEVtcHR5ID0gdGV4dCA9PiB7XG4gICAgaWYgKCF0ZXh0KVxuICAgICAgICByZXR1cm4gXCJDYW1wbyBvYnJpZ2F0w7NyaW9cIjtcbiAgICByZXR1cm4gXCJcIjtcbn1cblxuY29uc3QgdmFsaWRhdGVFbWFpbCA9IGVtYWlsID0+IHtcbiAgICBpZiAoIWVtYWlsKVxuICAgICAgICByZXR1cm4gXCJDYW1wbyBvYnJpZ2F0w7NyaW9cIjtcbiAgICBpZiAoIS9eW0EtWjAtOS5fJSstXStAW0EtWjAtOS4tXStcXC5bQS1aXXsyLDR9JC9pLnRlc3QoZW1haWwpKVxuICAgICAgICByZXR1cm4gXCJFbWFpbCBpbnbDoWxpZG9cIjtcbiAgICByZXR1cm4gXCJcIjtcbn1cblxuY29uc3QgdmFsaWRhdGVEZXBhcnRtZW50ID0gZGVwYXJ0bWVudCA9PiB7XG4gICAgcmV0dXJuIFwiXCI7XG59XG5cbmNvbnN0IHZhbGlkYXRlUGFzc3dvcmQgPSAocGFzc3dvcmQsIHBhc3N3b3JkQ29uZmlybSA9IG51bGwpID0+IHtcbiAgICBpZiAoIXBhc3N3b3JkKVxuICAgICAgICByZXR1cm4gXCJDYW1wbyBvYnJpZ2F0w7NyaW9cIjtcbiAgICBpZiAocGFzc3dvcmQgIT0gcGFzc3dvcmRDb25maXJtICYmIHBhc3N3b3JkQ29uZmlybSAhPSBudWxsKVxuICAgICAgICByZXR1cm4gXCJDb25maXJtYcOnw6NvIGRpZmVyZW50ZSBkYSBzZW5oYVwiO1xuICAgIHJldHVybiBcIlwiO1xufVxuXG5jb25zdCB2YWxpZGF0ZUdsb2JhbCA9IGdsb2JhbCA9PiB7XG4gICAgcmV0dXJuIFwiXCI7XG59XG5cbmNvbnN0IHZhbGlkYXRpb25GdW5jcyA9IHtcbiAgICAnZW1haWwnOiB2YWxpZGF0ZUVtYWlsLFxuICAgICduYW1lJzogdmFsaWRhdGVOYW1lLFxuICAgICdmaXJzdE5hbWUnOiB2YWxpZGF0ZU5hbWUsXG4gICAgJ2xhc3ROYW1lJzogdmFsaWRhdGVOYW1lLFxuICAgICdkZXBhcnRtZW50JzogdmFsaWRhdGVEZXBhcnRtZW50LFxuICAgICdwYXNzd29yZCc6IHZhbGlkYXRlUGFzc3dvcmQsXG4gICAgJ3Bhc3N3b3JkQ29uZmlybSc6IHZhbGlkYXRlUGFzc3dvcmQsXG4gICAgJ3VzZXJuYW1lJzogdmFsaWRhdGVOb3RFbXB0eSxcbiAgICAncGFzc3dvcmRMb2dpbic6IHZhbGlkYXRlTm90RW1wdHksXG4gICAgJ2dsb2JhbCc6IHZhbGlkYXRlR2xvYmFsLFxuICAgICdyZW1lbWJlcic6IHZhbGlkYXRlR2xvYmFsXG59XG5cblxuY29uc3QgdmFsaWRhdGUgPSAodmFsdWVzLCBjb21wYXJhdG9yPykgPT4ge1xuICAgIHZhciBlcnJvcnMgPSB7fTtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlcyk7XG4gICAgaWYgKGtleXMubGVuZ3RoIDwgMil7XG4gICAgICAgIGxldCBrZXkgPSBrZXlzWzBdO1xuICAgICAgICBpZiAoa2V5ID09IFwicGFzc3dvcmRcIil7XG4gICAgICAgICAgICBlcnJvcnNba2V5XSA9IHZhbGlkYXRpb25GdW5jc1trZXldKHZhbHVlc1trZXldKTtcbiAgICAgICAgICAgIGlmIChjb21wYXJhdG9yICE9IHVuZGVmaW5lZCAmJiBjb21wYXJhdG9yICE9IG51bGwpXG4gICAgICAgICAgICAgICAgZXJyb3JzW1wicGFzc3dvcmRDb25maXJtXCJdID0gdmFsaWRhdGlvbkZ1bmNzW2tleV0odmFsdWVzW2tleV0sIGNvbXBhcmF0b3IpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGtleSA9PSBcInBhc3N3b3JkQ29uZmlybVwiKXtcblxuICAgICAgICAgICAgZXJyb3JzW2tleV0gPSB2YWxpZGF0aW9uRnVuY3Nba2V5XShjb21wYXJhdG9yLCB2YWx1ZXNba2V5XSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgZXJyb3JzW2tleV0gPSB2YWxpZGF0aW9uRnVuY3Nba2V5XSh2YWx1ZXNba2V5XSk7IFxuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICBrZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGlmIChrZXkgPT0gXCJwYXNzd29yZFwiKXtcbiAgICAgICAgICAgICAgICBlcnJvcnNba2V5XSA9IHZhbGlkYXRpb25GdW5jc1trZXldKHZhbHVlc1trZXldKTtcbiAgICAgICAgICAgICAgICBlcnJvcnNbXCJwYXNzd29yZENvbmZpcm1cIl0gPSB2YWxpZGF0aW9uRnVuY3Nba2V5XSh2YWx1ZXNba2V5XSwgdmFsdWVzW1wicGFzc3dvcmRDb25maXJtXCJdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGtleSA9PSBcInBhc3N3b3JkQ29uZmlybVwiKVxuICAgICAgICAgICAgICAgIGVycm9yc1trZXldID0gdmFsaWRhdGlvbkZ1bmNzW2tleV0odmFsdWVzW1wicGFzc3dvcmRDb25maXJtXCJdLCB2YWx1ZXNba2V5XSk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgZXJyb3JzW2tleV0gPSB2YWxpZGF0aW9uRnVuY3Nba2V5XSh2YWx1ZXNba2V5XSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gZXJyb3JzO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvaGVscGVycy9mb3JtVmFsaWRhdGlvbi50c3giLCJpbXBvcnQgeyBmZXRjaCwgYWRkVGFzayB9IGZyb20gJ2RvbWFpbi10YXNrJztcclxuaW1wb3J0IHsgQWN0aW9uLCBSZWR1Y2VyLCBBY3Rpb25DcmVhdG9yIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBBcHBUaHVua0FjdGlvbiB9IGZyb20gJy4vJztcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFNUQVRFIC0gVGhpcyBkZWZpbmVzIHRoZSB0eXBlIG9mIGRhdGEgbWFpbnRhaW5lZCBpbiB0aGUgUmVkdXggc3RvcmUuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFdlYXRoZXJGb3JlY2FzdHNTdGF0ZSB7XHJcbiAgICBpc0xvYWRpbmc6IGJvb2xlYW47XHJcbiAgICBzdGFydERhdGVJbmRleDogbnVtYmVyO1xyXG4gICAgZm9yZWNhc3RzOiBXZWF0aGVyRm9yZWNhc3RbXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXZWF0aGVyRm9yZWNhc3Qge1xyXG4gICAgZGF0ZUZvcm1hdHRlZDogc3RyaW5nO1xyXG4gICAgdGVtcGVyYXR1cmVDOiBudW1iZXI7XHJcbiAgICB0ZW1wZXJhdHVyZUY6IG51bWJlcjtcclxuICAgIHN1bW1hcnk6IHN0cmluZztcclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQUNUSU9OUyAtIFRoZXNlIGFyZSBzZXJpYWxpemFibGUgKGhlbmNlIHJlcGxheWFibGUpIGRlc2NyaXB0aW9ucyBvZiBzdGF0ZSB0cmFuc2l0aW9ucy5cclxuLy8gVGhleSBkbyBub3QgdGhlbXNlbHZlcyBoYXZlIGFueSBzaWRlLWVmZmVjdHM7IHRoZXkganVzdCBkZXNjcmliZSBzb21ldGhpbmcgdGhhdCBpcyBnb2luZyB0byBoYXBwZW4uXHJcblxyXG5pbnRlcmZhY2UgUmVxdWVzdFdlYXRoZXJGb3JlY2FzdHNBY3Rpb24ge1xyXG4gICAgdHlwZTogJ1JFUVVFU1RfV0VBVEhFUl9GT1JFQ0FTVFMnLFxyXG4gICAgc3RhcnREYXRlSW5kZXg6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIFJlY2VpdmVXZWF0aGVyRm9yZWNhc3RzQWN0aW9uIHtcclxuICAgIHR5cGU6ICdSRUNFSVZFX1dFQVRIRVJfRk9SRUNBU1RTJyxcclxuICAgIHN0YXJ0RGF0ZUluZGV4OiBudW1iZXI7XHJcbiAgICBmb3JlY2FzdHM6IFdlYXRoZXJGb3JlY2FzdFtdXHJcbn1cclxuXHJcbi8vIERlY2xhcmUgYSAnZGlzY3JpbWluYXRlZCB1bmlvbicgdHlwZS4gVGhpcyBndWFyYW50ZWVzIHRoYXQgYWxsIHJlZmVyZW5jZXMgdG8gJ3R5cGUnIHByb3BlcnRpZXMgY29udGFpbiBvbmUgb2YgdGhlXHJcbi8vIGRlY2xhcmVkIHR5cGUgc3RyaW5ncyAoYW5kIG5vdCBhbnkgb3RoZXIgYXJiaXRyYXJ5IHN0cmluZykuXHJcbnR5cGUgS25vd25BY3Rpb24gPSBSZXF1ZXN0V2VhdGhlckZvcmVjYXN0c0FjdGlvbiB8IFJlY2VpdmVXZWF0aGVyRm9yZWNhc3RzQWN0aW9uO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBBQ1RJT04gQ1JFQVRPUlMgLSBUaGVzZSBhcmUgZnVuY3Rpb25zIGV4cG9zZWQgdG8gVUkgY29tcG9uZW50cyB0aGF0IHdpbGwgdHJpZ2dlciBhIHN0YXRlIHRyYW5zaXRpb24uXHJcbi8vIFRoZXkgZG9uJ3QgZGlyZWN0bHkgbXV0YXRlIHN0YXRlLCBidXQgdGhleSBjYW4gaGF2ZSBleHRlcm5hbCBzaWRlLWVmZmVjdHMgKHN1Y2ggYXMgbG9hZGluZyBkYXRhKS5cclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25DcmVhdG9ycyA9IHtcclxuICAgIHJlcXVlc3RXZWF0aGVyRm9yZWNhc3RzOiAoc3RhcnREYXRlSW5kZXg6IG51bWJlcik6IEFwcFRodW5rQWN0aW9uPEtub3duQWN0aW9uPiA9PiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcbiAgICAgICAgLy8gT25seSBsb2FkIGRhdGEgaWYgaXQncyBzb21ldGhpbmcgd2UgZG9uJ3QgYWxyZWFkeSBoYXZlIChhbmQgYXJlIG5vdCBhbHJlYWR5IGxvYWRpbmcpXHJcbiAgICAgICAgaWYgKHN0YXJ0RGF0ZUluZGV4ICE9PSBnZXRTdGF0ZSgpLndlYXRoZXJGb3JlY2FzdHMuc3RhcnREYXRlSW5kZXgpIHtcclxuICAgICAgICAgICAgbGV0IGZldGNoVGFzayA9IGZldGNoKGAvYXBpL1NhbXBsZURhdGEvV2VhdGhlckZvcmVjYXN0cz9zdGFydERhdGVJbmRleD0keyBzdGFydERhdGVJbmRleCB9YClcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSBhcyBQcm9taXNlPFdlYXRoZXJGb3JlY2FzdFtdPilcclxuICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1JFQ0VJVkVfV0VBVEhFUl9GT1JFQ0FTVFMnLCBzdGFydERhdGVJbmRleDogc3RhcnREYXRlSW5kZXgsIGZvcmVjYXN0czogZGF0YSB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgYWRkVGFzayhmZXRjaFRhc2spOyAvLyBFbnN1cmUgc2VydmVyLXNpZGUgcHJlcmVuZGVyaW5nIHdhaXRzIGZvciB0aGlzIHRvIGNvbXBsZXRlXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1JFUVVFU1RfV0VBVEhFUl9GT1JFQ0FTVFMnLCBzdGFydERhdGVJbmRleDogc3RhcnREYXRlSW5kZXggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBSRURVQ0VSIC0gRm9yIGEgZ2l2ZW4gc3RhdGUgYW5kIGFjdGlvbiwgcmV0dXJucyB0aGUgbmV3IHN0YXRlLiBUbyBzdXBwb3J0IHRpbWUgdHJhdmVsLCB0aGlzIG11c3Qgbm90IG11dGF0ZSB0aGUgb2xkIHN0YXRlLlxyXG5cclxuY29uc3QgdW5sb2FkZWRTdGF0ZTogV2VhdGhlckZvcmVjYXN0c1N0YXRlID0geyBzdGFydERhdGVJbmRleDogbnVsbCwgZm9yZWNhc3RzOiBbXSwgaXNMb2FkaW5nOiBmYWxzZSB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlZHVjZXI6IFJlZHVjZXI8V2VhdGhlckZvcmVjYXN0c1N0YXRlPiA9IChzdGF0ZTogV2VhdGhlckZvcmVjYXN0c1N0YXRlLCBhY3Rpb246IEtub3duQWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnUkVRVUVTVF9XRUFUSEVSX0ZPUkVDQVNUUyc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBzdGFydERhdGVJbmRleDogYWN0aW9uLnN0YXJ0RGF0ZUluZGV4LFxyXG4gICAgICAgICAgICAgICAgZm9yZWNhc3RzOiBzdGF0ZS5mb3JlY2FzdHMsXHJcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmc6IHRydWVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlICdSRUNFSVZFX1dFQVRIRVJfRk9SRUNBU1RTJzpcclxuICAgICAgICAgICAgLy8gT25seSBhY2NlcHQgdGhlIGluY29taW5nIGRhdGEgaWYgaXQgbWF0Y2hlcyB0aGUgbW9zdCByZWNlbnQgcmVxdWVzdC4gVGhpcyBlbnN1cmVzIHdlIGNvcnJlY3RseVxyXG4gICAgICAgICAgICAvLyBoYW5kbGUgb3V0LW9mLW9yZGVyIHJlc3BvbnNlcy5cclxuICAgICAgICAgICAgaWYgKGFjdGlvbi5zdGFydERhdGVJbmRleCA9PT0gc3RhdGUuc3RhcnREYXRlSW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnREYXRlSW5kZXg6IGFjdGlvbi5zdGFydERhdGVJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICBmb3JlY2FzdHM6IGFjdGlvbi5mb3JlY2FzdHMsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGxpbmUgZ3VhcmFudGVlcyB0aGF0IGV2ZXJ5IGFjdGlvbiBpbiB0aGUgS25vd25BY3Rpb24gdW5pb24gaGFzIGJlZW4gY292ZXJlZCBieSBhIGNhc2UgYWJvdmVcclxuICAgICAgICAgICAgY29uc3QgZXhoYXVzdGl2ZUNoZWNrOiBuZXZlciA9IGFjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3RhdGUgfHwgdW5sb2FkZWRTdGF0ZTtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL3N0b3JlL1dlYXRoZXJGb3JlY2FzdHMudHMiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgyMTMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLWZldGNoL2ZldGNoLW5wbS1ub2RlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlLCBjb21iaW5lUmVkdWNlcnMsIEdlbmVyaWNTdG9yZUVuaGFuY2VyIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xyXG5pbXBvcnQgeyByb3V0ZXJSZWR1Y2VyIH0gZnJvbSAncmVhY3Qtcm91dGVyLXJlZHV4JztcclxuaW1wb3J0ICogYXMgU3RvcmUgZnJvbSAnLi9zdG9yZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25maWd1cmVTdG9yZShpbml0aWFsU3RhdGU/OiBTdG9yZS5BcHBsaWNhdGlvblN0YXRlKSB7XHJcbiAgICAvLyBCdWlsZCBtaWRkbGV3YXJlLiBUaGVzZSBhcmUgZnVuY3Rpb25zIHRoYXQgY2FuIHByb2Nlc3MgdGhlIGFjdGlvbnMgYmVmb3JlIHRoZXkgcmVhY2ggdGhlIHN0b3JlLlxyXG4gICAgY29uc3Qgd2luZG93SWZEZWZpbmVkID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogd2luZG93IGFzIGFueTtcclxuICAgIC8vIElmIGRldlRvb2xzIGlzIGluc3RhbGxlZCwgY29ubmVjdCB0byBpdFxyXG4gICAgY29uc3QgZGV2VG9vbHNFeHRlbnNpb24gPSB3aW5kb3dJZkRlZmluZWQgJiYgd2luZG93SWZEZWZpbmVkLmRldlRvb2xzRXh0ZW5zaW9uIGFzICgpID0+IEdlbmVyaWNTdG9yZUVuaGFuY2VyO1xyXG4gICAgY29uc3QgY3JlYXRlU3RvcmVXaXRoTWlkZGxld2FyZSA9IGNvbXBvc2UoXHJcbiAgICAgICAgYXBwbHlNaWRkbGV3YXJlKHRodW5rKSxcclxuICAgICAgICBkZXZUb29sc0V4dGVuc2lvbiA/IGRldlRvb2xzRXh0ZW5zaW9uKCkgOiBmID0+IGZcclxuICAgICkoY3JlYXRlU3RvcmUpO1xyXG5cclxuICAgIC8vIENvbWJpbmUgYWxsIHJlZHVjZXJzIGFuZCBpbnN0YW50aWF0ZSB0aGUgYXBwLXdpZGUgc3RvcmUgaW5zdGFuY2VcclxuICAgIGNvbnN0IGFsbFJlZHVjZXJzID0gYnVpbGRSb290UmVkdWNlcihTdG9yZS5yZWR1Y2Vycyk7XHJcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlV2l0aE1pZGRsZXdhcmUoYWxsUmVkdWNlcnMsIGluaXRpYWxTdGF0ZSkgYXMgUmVkdXguU3RvcmU8U3RvcmUuQXBwbGljYXRpb25TdGF0ZT47XHJcblxyXG4gICAgLy8gRW5hYmxlIFdlYnBhY2sgaG90IG1vZHVsZSByZXBsYWNlbWVudCBmb3IgcmVkdWNlcnNcclxuICAgIGlmIChtb2R1bGUuaG90KSB7XHJcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoJy4vc3RvcmUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5leHRSb290UmVkdWNlciA9IHJlcXVpcmU8dHlwZW9mIFN0b3JlPignLi9zdG9yZScpO1xyXG4gICAgICAgICAgICBzdG9yZS5yZXBsYWNlUmVkdWNlcihidWlsZFJvb3RSZWR1Y2VyKG5leHRSb290UmVkdWNlci5yZWR1Y2VycykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdG9yZTtcclxufVxyXG5cclxuZnVuY3Rpb24gYnVpbGRSb290UmVkdWNlcihhbGxSZWR1Y2Vycykge1xyXG4gICAgcmV0dXJuIGNvbWJpbmVSZWR1Y2VyczxTdG9yZS5BcHBsaWNhdGlvblN0YXRlPihPYmplY3QuYXNzaWduKHt9LCBhbGxSZWR1Y2VycywgeyByb3V0aW5nOiByb3V0ZXJSZWR1Y2VyIH0pKTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29uZmlndXJlU3RvcmUudHMiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJvdXRlciwgUm91dGUsIEhpc3RvcnlCYXNlIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnLi9jb250YWluZXJzL0xheW91dCc7XHJcbmltcG9ydCBIb21lIGZyb20gJy4vY29udGFpbmVycy9Ib21lJztcclxuaW1wb3J0IFJlZ2lzdGVyIGZyb20gJy4vY29udGFpbmVycy9SZWdpc3Rlcic7XHJcbmltcG9ydCBGZXRjaERhdGEgZnJvbSAnLi9jb21wb25lbnRzL0ZldGNoRGF0YSc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgPFJvdXRlIGNvbXBvbmVudD17IExheW91dCB9PlxyXG4gICAgPFJvdXRlIHBhdGg9Jy8nIGNvbXBvbmVudHM9e3sgYm9keTogSG9tZSB9fSAvPlxyXG4gICAgPFJvdXRlIHBhdGg9Jy9yZWdpc3RlcicgY29tcG9uZW50cz17e2JvZHk6IFJlZ2lzdGVyIH19IC8+XHJcbiAgICA8Um91dGUgcGF0aD0nL2ZldGNoZGF0YScgY29tcG9uZW50cz17eyBib2R5OiBGZXRjaERhdGEgfX0+XHJcbiAgICAgICAgPFJvdXRlIHBhdGg9Jyg6c3RhcnREYXRlSW5kZXgpJyAvPiB7IC8qIE9wdGlvbmFsIHJvdXRlIHNlZ21lbnQgdGhhdCBkb2VzIG5vdCBhZmZlY3QgTmF2TWVudSBoaWdobGlnaHRpbmcgKi8gfVxyXG4gICAgPC9Sb3V0ZT5cclxuPC9Sb3V0ZT47XHJcblxyXG4vLyBFbmFibGUgSG90IE1vZHVsZSBSZXBsYWNlbWVudCAoSE1SKVxyXG5pZiAobW9kdWxlLmhvdCkge1xyXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvcm91dGVzLnRzeCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDE0NCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2FzcG5ldC1wcmVyZW5kZXJpbmcvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgxNTApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vc2VydmVyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcclxuaW1wb3J0IHsgbWF0Y2gsIFJvdXRlckNvbnRleHQgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQgY3JlYXRlTWVtb3J5SGlzdG9yeSBmcm9tICdoaXN0b3J5L2xpYi9jcmVhdGVNZW1vcnlIaXN0b3J5JztcclxuaW1wb3J0IHsgY3JlYXRlU2VydmVyUmVuZGVyZXIsIFJlbmRlclJlc3VsdCB9IGZyb20gJ2FzcG5ldC1wcmVyZW5kZXJpbmcnO1xyXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJztcclxuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4vY29uZmlndXJlU3RvcmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2VydmVyUmVuZGVyZXIocGFyYW1zID0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxSZW5kZXJSZXN1bHQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAvLyBNYXRjaCB0aGUgaW5jb21pbmcgcmVxdWVzdCBhZ2FpbnN0IHRoZSBsaXN0IG9mIGNsaWVudC1zaWRlIHJvdXRlc1xyXG4gICAgICAgIGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoKTtcclxuICAgICAgICBtYXRjaCh7IHJvdXRlcywgbG9jYXRpb246IHBhcmFtcy5sb2NhdGlvbiB9LCAoZXJyb3IsIHJlZGlyZWN0TG9jYXRpb24sIHJlbmRlclByb3BzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gSWYgdGhlcmUncyBhIHJlZGlyZWN0aW9uLCBqdXN0IHNlbmQgdGhpcyBpbmZvcm1hdGlvbiBiYWNrIHRvIHRoZSBob3N0IGFwcGxpY2F0aW9uXHJcbiAgICAgICAgICAgIGlmIChyZWRpcmVjdExvY2F0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHsgcmVkaXJlY3RVcmw6IHJlZGlyZWN0TG9jYXRpb24ucGF0aG5hbWUgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIElmIGl0IGRpZG4ndCBtYXRjaCBhbnkgcm91dGUsIHJlbmRlclByb3BzIHdpbGwgYmUgdW5kZWZpbmVkXHJcbiAgICAgICAgICAgIGlmICghcmVuZGVyUHJvcHMpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGxvY2F0aW9uICckeyBwYXJhbXMudXJsIH0nIGRvZXNuJ3QgbWF0Y2ggYW55IHJvdXRlIGNvbmZpZ3VyZWQgaW4gcmVhY3Qtcm91dGVyLmApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBCdWlsZCBhbiBpbnN0YW5jZSBvZiB0aGUgYXBwbGljYXRpb25cclxuICAgICAgICAgICAgY29uc3QgYXBwID0gKFxyXG4gICAgICAgICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXsgc3RvcmUgfT5cclxuICAgICAgICAgICAgICAgICAgICA8Um91dGVyQ29udGV4dCB7Li4ucmVuZGVyUHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgLy8gUGVyZm9ybSBhbiBpbml0aWFsIHJlbmRlciB0aGF0IHdpbGwgY2F1c2UgYW55IGFzeW5jIHRhc2tzIChlLmcuLCBkYXRhIGFjY2VzcykgdG8gYmVnaW5cclxuICAgICAgICAgICAgcmVuZGVyVG9TdHJpbmcoYXBwKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIE9uY2UgdGhlIHRhc2tzIGFyZSBkb25lLCB3ZSBjYW4gcGVyZm9ybSB0aGUgZmluYWwgcmVuZGVyXHJcbiAgICAgICAgICAgIC8vIFdlIGFsc28gc2VuZCB0aGUgcmVkdXggc3RvcmUgc3RhdGUsIHNvIHRoZSBjbGllbnQgY2FuIGNvbnRpbnVlIGV4ZWN1dGlvbiB3aGVyZSB0aGUgc2VydmVyIGxlZnQgb2ZmXHJcbiAgICAgICAgICAgIHBhcmFtcy5kb21haW5UYXNrcy50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGh0bWw6IHJlbmRlclRvU3RyaW5nKGFwcCksXHJcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsczogeyBpbml0aWFsUmVkdXhTdGF0ZTogc3RvcmUuZ2V0U3RhdGUoKSB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSwgcmVqZWN0KTsgLy8gQWxzbyBwcm9wYWdhdGUgYW55IGVycm9ycyBiYWNrIGludG8gdGhlIGhvc3QgYXBwbGljYXRpb25cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUgfSAgZnJvbSAnLi4vc3RvcmUnO1xyXG5pbXBvcnQgKiBhcyBXZWF0aGVyRm9yZWNhc3RzU3RhdGUgZnJvbSAnLi4vc3RvcmUvV2VhdGhlckZvcmVjYXN0cyc7XHJcblxyXG4vLyBBdCBydW50aW1lLCBSZWR1eCB3aWxsIG1lcmdlIHRvZ2V0aGVyLi4uXHJcbnR5cGUgV2VhdGhlckZvcmVjYXN0UHJvcHMgPVxyXG4gICAgV2VhdGhlckZvcmVjYXN0c1N0YXRlLldlYXRoZXJGb3JlY2FzdHNTdGF0ZSAgICAgLy8gLi4uIHN0YXRlIHdlJ3ZlIHJlcXVlc3RlZCBmcm9tIHRoZSBSZWR1eCBzdG9yZVxyXG4gICAgJiB0eXBlb2YgV2VhdGhlckZvcmVjYXN0c1N0YXRlLmFjdGlvbkNyZWF0b3JzICAgLy8gLi4uIHBsdXMgYWN0aW9uIGNyZWF0b3JzIHdlJ3ZlIHJlcXVlc3RlZFxyXG4gICAgJiB7IHBhcmFtczogeyBzdGFydERhdGVJbmRleDogc3RyaW5nIH0gfTsgICAgICAgLy8gLi4uIHBsdXMgaW5jb21pbmcgcm91dGluZyBwYXJhbWV0ZXJzXHJcblxyXG5jbGFzcyBGZXRjaERhdGEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8V2VhdGhlckZvcmVjYXN0UHJvcHMsIHZvaWQ+IHtcclxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgICAgICAvLyBUaGlzIG1ldGhvZCBydW5zIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBmaXJzdCBhZGRlZCB0byB0aGUgcGFnZVxyXG4gICAgICAgIGxldCBzdGFydERhdGVJbmRleCA9IHBhcnNlSW50KHRoaXMucHJvcHMucGFyYW1zLnN0YXJ0RGF0ZUluZGV4KSB8fCAwO1xyXG4gICAgICAgIHRoaXMucHJvcHMucmVxdWVzdFdlYXRoZXJGb3JlY2FzdHMoc3RhcnREYXRlSW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzOiBXZWF0aGVyRm9yZWNhc3RQcm9wcykge1xyXG4gICAgICAgIC8vIFRoaXMgbWV0aG9kIHJ1bnMgd2hlbiBpbmNvbWluZyBwcm9wcyAoZS5nLiwgcm91dGUgcGFyYW1zKSBjaGFuZ2VcclxuICAgICAgICBsZXQgc3RhcnREYXRlSW5kZXggPSBwYXJzZUludChuZXh0UHJvcHMucGFyYW1zLnN0YXJ0RGF0ZUluZGV4KSB8fCAwO1xyXG4gICAgICAgIHRoaXMucHJvcHMucmVxdWVzdFdlYXRoZXJGb3JlY2FzdHMoc3RhcnREYXRlSW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMT5XZWF0aGVyIGZvcmVjYXN0PC9oMT5cclxuICAgICAgICAgICAgPHA+VGhpcyBjb21wb25lbnQgZGVtb25zdHJhdGVzIGZldGNoaW5nIGRhdGEgZnJvbSB0aGUgc2VydmVyIGFuZCB3b3JraW5nIHdpdGggVVJMIHBhcmFtZXRlcnMuPC9wPlxyXG4gICAgICAgICAgICB7IHRoaXMucmVuZGVyRm9yZWNhc3RzVGFibGUoKSB9XHJcbiAgICAgICAgICAgIHsgdGhpcy5yZW5kZXJQYWdpbmF0aW9uKCkgfVxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbmRlckZvcmVjYXN0c1RhYmxlKCkge1xyXG4gICAgICAgIHJldHVybiA8dGFibGUgY2xhc3NOYW1lPSd0YWJsZSc+XHJcbiAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+RGF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPlRlbXAuIChDKTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPlRlbXAuIChGKTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPlN1bW1hcnk8L3RoPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5mb3JlY2FzdHMubWFwKGZvcmVjYXN0ID0+XHJcbiAgICAgICAgICAgICAgICA8dHIga2V5PXsgZm9yZWNhc3QuZGF0ZUZvcm1hdHRlZCB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57IGZvcmVjYXN0LmRhdGVGb3JtYXR0ZWQgfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPnsgZm9yZWNhc3QudGVtcGVyYXR1cmVDIH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57IGZvcmVjYXN0LnRlbXBlcmF0dXJlRiB9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+eyBmb3JlY2FzdC5zdW1tYXJ5IH08L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8L3RhYmxlPjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbmRlclBhZ2luYXRpb24oKSB7XHJcbiAgICAgICAgbGV0IHByZXZTdGFydERhdGVJbmRleCA9IHRoaXMucHJvcHMuc3RhcnREYXRlSW5kZXggLSA1O1xyXG4gICAgICAgIGxldCBuZXh0U3RhcnREYXRlSW5kZXggPSB0aGlzLnByb3BzLnN0YXJ0RGF0ZUluZGV4ICsgNTtcclxuXHJcbiAgICAgICAgcmV0dXJuIDxwIGNsYXNzTmFtZT0nY2xlYXJmaXggdGV4dC1jZW50ZXInPlxyXG4gICAgICAgICAgICA8TGluayBjbGFzc05hbWU9J2J0biBidG4tZGVmYXVsdCBwdWxsLWxlZnQnIHRvPXsgYC9mZXRjaGRhdGEvJHsgcHJldlN0YXJ0RGF0ZUluZGV4IH1gIH0+UHJldmlvdXM8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT0nYnRuIGJ0bi1kZWZhdWx0IHB1bGwtcmlnaHQnIHRvPXsgYC9mZXRjaGRhdGEvJHsgbmV4dFN0YXJ0RGF0ZUluZGV4IH1gIH0+TmV4dDwvTGluaz5cclxuICAgICAgICAgICAgeyB0aGlzLnByb3BzLmlzTG9hZGluZyA/IDxzcGFuPkxvYWRpbmcuLi48L3NwYW4+IDogW10gfVxyXG4gICAgICAgIDwvcD47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICAoc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUpID0+IHN0YXRlLndlYXRoZXJGb3JlY2FzdHMsIC8vIFNlbGVjdHMgd2hpY2ggc3RhdGUgcHJvcGVydGllcyBhcmUgbWVyZ2VkIGludG8gdGhlIGNvbXBvbmVudCdzIHByb3BzXHJcbiAgICBXZWF0aGVyRm9yZWNhc3RzU3RhdGUuYWN0aW9uQ3JlYXRvcnMgICAgICAgICAgICAgICAgIC8vIFNlbGVjdHMgd2hpY2ggYWN0aW9uIGNyZWF0b3JzIGFyZSBtZXJnZWQgaW50byB0aGUgY29tcG9uZW50J3MgcHJvcHNcclxuKShGZXRjaERhdGEpO1xyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvRmV0Y2hEYXRhLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB2YWxpZGF0ZSBmcm9tICcuLi9oZWxwZXJzL2Zvcm1WYWxpZGF0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCB1bmRlZmluZWQ+e1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcklucHV0KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW5kZXJJbnB1dCgpe1xuICAgICAgICBzd2l0Y2ggKHRoaXMucHJvcHMudHlwZSl7XG4gICAgICAgICAgICBjYXNlIFwidGV4dFwiOlxuICAgICAgICAgICAgY2FzZSBcInBhc3N3b3JkXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyVGV4dElucHV0KCk7XG4gICAgICAgICAgICBjYXNlIFwiY2hlY2tib3hcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJDaGVja2JveElucHV0KCk7XG4gICAgICAgICAgICBjYXNlIFwic3VibWl0QnV0dG9uXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyU3VibWl0QnV0dG9uSW5wdXQoKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbmRlclRleHRJbnB1dCgpe1xuICAgICAgICByZXR1cm4gKDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXt0aGlzLnByb3BzLm5hbWV9Pnt0aGlzLnByb3BzLmxhYmVsfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPXt0aGlzLnByb3BzLnR5cGV9IG5hbWU9e3RoaXMucHJvcHMubmFtZX0gdmFsdWU9e3RoaXMucHJvcHMudmFsdWV9IFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5sYWJlbH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckVycm9yKHRoaXMucHJvcHMuZXJyb3IpfVxuICAgICAgICAgICAgICAgIDwvZGl2Pik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW5kZXJDaGVja2JveElucHV0KCl7XG4gICAgICAgIHJldHVybiAoPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e3RoaXMucHJvcHMubmFtZX0+e3RoaXMucHJvcHMubGFiZWx9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9e3RoaXMucHJvcHMubmFtZX0gdmFsdWU9e3RoaXMucHJvcHMudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPlxuICAgICAgICAgICAgICAgIDwvZGl2Pik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW5kZXJTdWJtaXRCdXR0b25JbnB1dCgpe1xuICAgICAgICByZXR1cm4gKDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9e3RoaXMucHJvcHMubGFiZWx9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbmRlckVycm9yKGVycm9yKXtcbiAgICAgICAgaWYgKGVycm9yICE9IG51bGwgJiYgZXJyb3IgIT0gdW5kZWZpbmVkICYmIGVycm9yICE9IFwiXCIpXG4gICAgICAgICAgICByZXR1cm4gPHNwYW4+e2Vycm9yfTwvc3Bhbj47XG4gICAgfVxuXG4gICAgLy8gY2FsbHMgdGhlIHN0b3JlIHRvIHVwZGF0ZSB0aGUgZm9ybSBzdGF0ZSBhbmQgdGhlbiB2YWxpZGF0ZXMgdGhlIGZpZWxkIHZhbHVlXG4gICAgcHJpdmF0ZSBoYW5kbGVDaGFuZ2UoZXZlbnQpe1xuICAgICAgICB2YXIgZmllbGQgPSB7fTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMudHlwZSA9PSBcImNoZWNrYm94XCIpXG4gICAgICAgICAgICBmaWVsZFt0aGlzLnByb3BzLm5hbWVdID0gZXZlbnQudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGZpZWxkW3RoaXMucHJvcHMubmFtZV0gPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgIC8vIHRoaXMucHJvcHMuY29tcGFyYXRvciBpcyBvcHRpb25hbCBhbmQgb25seSB1c2VkIGluIGZldyBjYXNlcywgXG4gICAgICAgIC8vIGxpa2UgcGFzc3dvcmQgY29uZmlybWF0aW9uIGZpZWxkc1xuICAgICAgICB2YXIgZXJyb3IgPSB2YWxpZGF0ZShmaWVsZCwgdGhpcy5wcm9wcy5jb21wYXJhdG9yKTtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnByb3BzLm5hbWUsIGZpZWxkW3RoaXMucHJvcHMubmFtZV0pO1xuICAgICAgICB0aGlzLnByb3BzLm9uRXJyb3IoZXJyb3IpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9JbnB1dC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9ybSBmcm9tICcuL0Zvcm0nO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUgfSAgZnJvbSAnLi4vc3RvcmUnO1xuaW1wb3J0ICogYXMgRm9ybVN0b3JlIGZyb20gJy4uL3N0b3JlL0Zvcm0nO1xuXG5jbGFzcyBMb2dpbkZvcm0gZXh0ZW5kcyBGb3JtIHtcblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIHRoaXMucHJvcHMuaW5pdGlsaXplKFwiL2FjY291bnQvbG9naW5cIiwgW1wiZW1haWxcIiwgXCJwYXNzd29yZExvZ2luXCIsIFwicmVtZW1iZXJcIl0pO1xuICAgIH1cblxuICAgIHJlbmRlckZvcm1Db250ZW50KCl7XG4gICAgICAgICByZXR1cm4gKDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLmNyZWF0ZUlucHV0KFwiZW1haWxcIiwgXCJ0ZXh0XCIsIFwiRW1haWxcIiwgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnZhbHVlc1tcImVtYWlsXCJdLCB0aGlzLnByb3BzLmVycm9yc1tcImVtYWlsXCJdKX1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLmNyZWF0ZUlucHV0KFwicGFzc3dvcmRMb2dpblwiLCBcInBhc3N3b3JkXCIsIFwiU2VuaGFcIiwgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnZhbHVlc1tcInBhc3N3b3JkTG9naW5cIl0sIHRoaXMucHJvcHMuZXJyb3JzW1wicGFzc3dvcmRMb2dpblwiXSl9XG5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuY3JlYXRlQ2hlY2tib3goXCJyZW1lbWJlclwiLCBcIkxlbWJyYXIgZGUgbWltXCIsIHRoaXMucHJvcHMudmFsdWVzW1wicmVtZW1iZXJcIl0pfVxuXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLmNyZWF0ZVN1Ym1pdEJ1dHRvbihcIkVudHJhclwiKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj4pO1xuICAgICB9XG4gfVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAgIChzdGF0ZTogQXBwbGljYXRpb25TdGF0ZSkgPT4gc3RhdGUuZm9ybSxcbiAgICBGb3JtU3RvcmUuYWN0aW9uQ3JlYXRvcnNcbikoTG9naW5Gb3JtKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9Mb2dpbkZvcm0udHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBOYXZNZW51IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgdm9pZD4ge1xyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J21haW4tbmF2Jz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZiYXIgbmF2YmFyLWludmVyc2UnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdmJhci1oZWFkZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzc05hbWU9J25hdmJhci10b2dnbGUnIGRhdGEtdG9nZ2xlPSdjb2xsYXBzZScgZGF0YS10YXJnZXQ9Jy5uYXZiYXItY29sbGFwc2UnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NyLW9ubHknPlRvZ2dsZSBuYXZpZ2F0aW9uPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ljb24tYmFyJz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naWNvbi1iYXInPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpY29uLWJhcic+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT0nbmF2YmFyLWJyYW5kJyB0bz17ICcvJyB9PlNJU0VWPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2xlYXJmaXgnPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdmJhci1jb2xsYXBzZSBjb2xsYXBzZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nbmF2IG5hdmJhci1uYXYnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17ICcvJyB9IGFjdGl2ZUNsYXNzTmFtZT0nYWN0aXZlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2dseXBoaWNvbiBnbHlwaGljb24taG9tZSc+PC9zcGFuPiBIb21lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXsgJy9yZWdpc3RlcicgfSBhY3RpdmVDbGFzc05hbWU9J2FjdGl2ZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdnbHlwaGljb24gZ2x5cGhpY29uLWxlYWYnPjwvc3Bhbj4gQ2FkYXN0cmFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXsgJy9mZXRjaGRhdGEnIH0gYWN0aXZlQ2xhc3NOYW1lPSdhY3RpdmUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZ2x5cGhpY29uIGdseXBoaWNvbi10aC1saXN0Jz48L3NwYW4+IEZldGNoIGRhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9OYXZNZW51LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGb3JtIGZyb20gJy4vRm9ybSc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSB9ICBmcm9tICcuLi9zdG9yZSc7XG5pbXBvcnQgKiBhcyBGb3JtU3RvcmUgZnJvbSAnLi4vc3RvcmUvRm9ybSc7XG5cbmNsYXNzIFJlZ2lzdGVyRm9ybSBleHRlbmRzIEZvcm0ge1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgLy8gdGhpcyBtZXRob2QgTVVTVCBiZSBjYWxsZWQgd2l0aCB0aGUgY29udHJvbGxlciBtZXRob2QgYWRkcmVzcyBhbmQgdGhlXG4gICAgICAgIC8vIGZvcm0gZmllbGQgbmFtZXMsIG90aGVyd2lzZSB0aGUgZm9ybSB3b250IHdvcmsgcHJvcGVybHlcbiAgICAgICAgdGhpcy5wcm9wcy5pbml0aWxpemUoXCIvYWNjb3VudC9yZWdpc3RlclwiLFxuICAgICAgICAgICAgW1wiZmlyc3ROYW1lXCIsIFwibGFzdE5hbWVcIiwgXCJlbWFpbFwiLCBcImRlcGFydG1lbnRcIiwgXCJwYXNzd29yZFwiLCBcInBhc3N3b3JkQ29uZmlybVwiXSk7XG4gICAgfVxuXG4gICAgcmVuZGVyRm9ybUNvbnRlbnQoKXtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge3RoaXMuY3JlYXRlSW5wdXQoXCJmaXJzdE5hbWVcIiwgXCJ0ZXh0XCIsIFwiTm9tZVwiLCBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy52YWx1ZXNbXCJmaXJzdE5hbWVcIl0sIHRoaXMucHJvcHMuZXJyb3JzW1wiZmlyc3ROYW1lXCJdKX1cblxuICAgICAgICAgICAgICAgIHt0aGlzLmNyZWF0ZUlucHV0KFwibGFzdE5hbWVcIiwgXCJ0ZXh0XCIsIFwiU29icmVub21lXCIsIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnZhbHVlc1tcImxhc3ROYW1lXCJdLCB0aGlzLnByb3BzLmVycm9yc1tcImxhc3ROYW1lXCJdKX1cblxuICAgICAgICAgICAgICAgIHt0aGlzLmNyZWF0ZUlucHV0KFwiZW1haWxcIiwgXCJ0ZXh0XCIsIFwiRW1haWxcIiwgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudmFsdWVzW1wiZW1haWxcIl0sIHRoaXMucHJvcHMuZXJyb3JzW1wiZW1haWxcIl0pfVxuXG4gICAgICAgICAgICAgICAge3RoaXMuY3JlYXRlSW5wdXQoXCJkZXBhcnRtZW50XCIsIFwidGV4dFwiLCBcIkRlcGFydGFtZW50b1wiLCBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy52YWx1ZXNbXCJkZXBhcnRtZW50XCJdLCB0aGlzLnByb3BzLmVycm9yc1tcImRlcGFydG1lbnRcIl0pfVxuXG4gICAgICAgICAgICAgICAge3RoaXMuY3JlYXRlUGFzc3dvcmRXaXRoQ29uZmlybWF0aW9uSW5wdXQoXCJwYXNzd29yZFwiLCBcIlNlbmhhXCIsIHRoaXMucHJvcHMudmFsdWVzW1wicGFzc3dvcmRcIl0sXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudmFsdWVzW1wicGFzc3dvcmRDb25maXJtXCJdLCB0aGlzLnByb3BzLmVycm9yc1tcInBhc3N3b3JkXCJdLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmVycm9yc1tcInBhc3N3b3JkQ29uZmlybVwiXSl9XG5cbiAgICAgICAgICAgICAgICB7dGhpcy5jcmVhdGVTdWJtaXRCdXR0b24oXCJDYWRhc3RyYXJcIil9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbi8vIFdpcmUgdXAgdGhlIFJlYWN0IGNvbXBvbmVudCB0byB0aGUgUmVkdXggc3RvcmVcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gICAgKHN0YXRlOiBBcHBsaWNhdGlvblN0YXRlKSA9PiBzdGF0ZS5mb3JtLCAvLyBTZWxlY3RzIHdoaWNoIHN0YXRlIHByb3BlcnRpZXMgYXJlIG1lcmdlZCBpbnRvIHRoZSBjb21wb25lbnQncyBwcm9wc1xuICAgIEZvcm1TdG9yZS5hY3Rpb25DcmVhdG9ycyAgICAgICAgICAgICAgICAgLy8gU2VsZWN0cyB3aGljaCBhY3Rpb24gY3JlYXRvcnMgYXJlIG1lcmdlZCBpbnRvIHRoZSBjb21wb25lbnQncyBwcm9wc1xuKShSZWdpc3RlckZvcm0pO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9yZWdpc3RlckZvcm0udHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvTG9naW5Gb3JtJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8dm9pZCwgdm9pZD4ge1xyXG4gICAgXHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+U2lzZXY8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoND5GYcOnYSBzZXUgbG9naW48L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMb2dpbkZvcm0gLz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2Pik7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbnRhaW5lcnMvSG9tZS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE5hdk1lbnUgfSBmcm9tICcuLi9jb21wb25lbnRzL05hdk1lbnUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMYXlvdXRQcm9wcyB7XHJcbiAgICBib2R5OiBSZWFjdC5SZWFjdEVsZW1lbnQ8YW55PjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxMYXlvdXRQcm9wcywgdm9pZD4ge1xyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lci1mbHVpZCc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1zbS0zJz5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2TWVudSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXNtLTknPlxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5ib2R5IH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2NvbnRhaW5lcnMvTGF5b3V0LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWdpc3RlckZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9yZWdpc3RlckZvcm0nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWdpc3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIHZvaWQ+e1xuXG4gICAgcHVibGljIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4gKDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5DYWRhc3RybzwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxoND5DcmllIHVtIG5vdm8gdXN1w6FyaW8uPC9oND5cbiAgICAgICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxSZWdpc3RlckZvcm0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj4pOyBcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29udGFpbmVycy9SZWdpc3Rlci50c3giLCJpbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnO1xuXG5jb25zdCByZXF1ZXN0SGVhZGVyID0ge1xuICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKicsXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbn07XG5cbmludGVyZmFjZSBEZWZhdWx0UmVxdWVzdCB7XG4gICAgbWV0aG9kOiBzdHJpbmcsXG4gICAgaGVhZGVyczoge30sXG4gICAgYm9keT86IHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwaUNhbGxzIHtcblxuICAgIC8vVE9ETzogaW1wbGVtZW50IG90aGVyIGh0dHAgY29tbWFuZHNcbiAgICBwdWJsaWMgc3RhdGljIHJlcXVlc3QoYWRkcmVzcywgbWV0aG9kLCByZXF1ZXN0Qm9keSl7XG4gICAgICAgIHZhciBsb3dlciA9IG1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB2YXIgcmVxdWVzdEluaXQ7XG4gICAgICAgIHN3aXRjaChsb3dlcil7XG4gICAgICAgICAgICBjYXNlICdwb3N0JzpcbiAgICAgICAgICAgICAgICByZXF1ZXN0SW5pdCA9IHRoaXMuY3JlYXRlUmVxdWVzdCgncG9zdCcsIHJlcXVlc3RCb2R5KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2dldCc6XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJlcXVlc3RJbml0ID0gdGhpcy5jcmVhdGVSZXF1ZXN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZldGNoKGFkZHJlc3MsIHJlcXVlc3RJbml0KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBjcmVhdGVSZXF1ZXN0KHJlcXVlc3RNZXRob2QgPSAnZ2V0JywgYm9keSA9IG51bGwpOiBEZWZhdWx0UmVxdWVzdCB7XG4gICAgICAgIGxldCByZXE6IERlZmF1bHRSZXF1ZXN0ID17XG4gICAgICAgICAgICBtZXRob2Q6IHJlcXVlc3RNZXRob2QsXG4gICAgICAgICAgICBoZWFkZXJzOiByZXF1ZXN0SGVhZGVyXG4gICAgICAgIH07XG4gICAgICAgIGlmIChib2R5ICE9IG51bGwpXG4gICAgICAgICAgICByZXEuYm9keSA9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xuXG4gICAgICAgIHJldHVybiByZXE7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9oZWxwZXJzL2FwaUNhbGxzLnRzeCIsImltcG9ydCAqIGFzIFdlYXRoZXJGb3JlY2FzdHMgZnJvbSAnLi9XZWF0aGVyRm9yZWNhc3RzJztcclxuaW1wb3J0ICogYXMgRm9ybSBmcm9tICcuL0Zvcm0nO1xyXG5cclxuLy8gVGhlIHRvcC1sZXZlbCBzdGF0ZSBvYmplY3RcclxuZXhwb3J0IGludGVyZmFjZSBBcHBsaWNhdGlvblN0YXRlIHtcclxuICAgIHdlYXRoZXJGb3JlY2FzdHM6IFdlYXRoZXJGb3JlY2FzdHMuV2VhdGhlckZvcmVjYXN0c1N0YXRlLFxyXG4gICAgZm9ybTogRm9ybS5Gb3JtU3RhdGVcclxufVxyXG5cclxuLy8gV2hlbmV2ZXIgYW4gYWN0aW9uIGlzIGRpc3BhdGNoZWQsIFJlZHV4IHdpbGwgdXBkYXRlIGVhY2ggdG9wLWxldmVsIGFwcGxpY2F0aW9uIHN0YXRlIHByb3BlcnR5IHVzaW5nXHJcbi8vIHRoZSByZWR1Y2VyIHdpdGggdGhlIG1hdGNoaW5nIG5hbWUuIEl0J3MgaW1wb3J0YW50IHRoYXQgdGhlIG5hbWVzIG1hdGNoIGV4YWN0bHksIGFuZCB0aGF0IHRoZSByZWR1Y2VyXHJcbi8vIGFjdHMgb24gdGhlIGNvcnJlc3BvbmRpbmcgQXBwbGljYXRpb25TdGF0ZSBwcm9wZXJ0eSB0eXBlLlxyXG5leHBvcnQgY29uc3QgcmVkdWNlcnMgPSB7XHJcbiAgICB3ZWF0aGVyRm9yZWNhc3RzOiBXZWF0aGVyRm9yZWNhc3RzLnJlZHVjZXIsXHJcbiAgICBmb3JtOiBGb3JtLnJlZHVjZXJcclxufTtcclxuXHJcbi8vIFRoaXMgdHlwZSBjYW4gYmUgdXNlZCBhcyBhIGhpbnQgb24gYWN0aW9uIGNyZWF0b3JzIHNvIHRoYXQgaXRzICdkaXNwYXRjaCcgYW5kICdnZXRTdGF0ZScgcGFyYW1zIGFyZVxyXG4vLyBjb3JyZWN0bHkgdHlwZWQgdG8gbWF0Y2ggeW91ciBzdG9yZS5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBUaHVua0FjdGlvbjxUQWN0aW9uPiB7XHJcbiAgICAoZGlzcGF0Y2g6IChhY3Rpb246IFRBY3Rpb24pID0+IHZvaWQsIGdldFN0YXRlOiAoKSA9PiBBcHBsaWNhdGlvblN0YXRlKTogdm9pZDtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvc3RvcmUvaW5kZXgudHMiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgxNDcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9kb21haW4tdGFzay9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDE1Mik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1yZWR1eC9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgxNTQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWR1eC10aHVuay9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSg3OSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=