import { Reducer } from "redux";
import { browserHistory } from "react-router";
import "isomorphic-fetch";
import ApiCalls from "../helpers/apiCalls";
import { AppThunkAction } from "./";
import { UserState } from "./User";

// application state
export interface AppState {
    loggedIn: boolean,
    user: UserState,
    statusMessage: string
}

// actions
interface LoginAction {
    type: "LOGIN",
    user: UserState
}

interface LogoutAction {
    type: "LOGOUT"
}

interface SetStatusMessage {
    type: "SET_STATUS_MESSAGE",
    message: string
}

interface ClearStatusMessage {
    type: "CLEAR_STATUS_MESSAGE"
}

type KnownAction = LoginAction | LogoutAction | SetStatusMessage | ClearStatusMessage;

// action creators
export const actionCreators = {
    redirectToHome: () => {
        browserHistory.push("/");
    },
    logout: (): AppThunkAction<KnownAction> => (dispatch, getState) => {
        ApiCalls.request("account/logout", "post");
        dispatch({ type: "LOGOUT"});
        if (typeof window !== "undefined")
            window.localStorage.removeItem("user");
    },
    getStatusMessage: (): AppThunkAction<KnownAction> => (dispatch, getState) => {
        return getState().app.statusMessage;
    },
    clearStatusMessage: (): AppThunkAction<KnownAction> => (dispatch, getState) => {
        dispatch({ type: "CLEAR_STATUS_MESSAGE"});
    }
}

const initialState = { user: null, loggedIn: false, statusMessage: null }
// reducer
export const reducer: Reducer<AppState> = (state: AppState, action: KnownAction) => {
    var newState = {...state};
    switch(action.type){
        case "LOGIN":
            newState.loggedIn = true;
            newState.user = action.user;
            return newState;
        case "LOGOUT":
            newState.loggedIn = false;
            newState.user = null;
            return newState;
        case "SET_STATUS_MESSAGE":
            newState.statusMessage = action.message;
            return newState;
        case "CLEAR_STATUS_MESSAGE":
            newState.statusMessage = null;
            return newState;
        default:
             const exhaustiveCheck: never = action;
    }
    // For unrecognized actions (or in cases where actions have no effect), must return the existing state
    //  (or default initial state if none was supplied)
    return state || initialState;
}