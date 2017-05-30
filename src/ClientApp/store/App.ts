import {Action, Reducer, ActionCreator} from 'redux';
import { browserHistory } from 'react-router';
import 'isomorphic-fetch';
import ApiCalls from '../helpers/apiCalls';
import { AppThunkAction } from './';
import { UserState } from "./User";

// application state
export interface AppState {
    loggedIn: boolean,
    user: UserState
}

// actions
interface LoginAction {
    type: 'LOGIN',
    user: UserState
}

interface LogoutAction {
    type: 'LOGOUT'
}

type KnownAction = LoginAction | LogoutAction;

// action creators
export const actionCreators = {
    login: (response: any) => <LoginAction>{
        type: 'LOGIN',
        user: response["user"]
    },
    logout: () => <LogoutAction>{
        type: 'LOGOUT'
    }
}

const initialState = {
    loggedIn: false, user: null
};

// reducer
export const reducer: Reducer<AppState> = (state: AppState, action: KnownAction) => {
    var newState = {...state}
    switch(action.type){
        case 'LOGIN':
            newState.loggedIn = true;
            newState.user = action.user;
            return newState;
        case 'LOGOUT':
            newState.loggedIn = false;
            newState.user = null;
            return newState;
        default:
             const exhaustiveCheck: never = action;
    }
    // For unrecognized actions (or in cases where actions have no effect), must return the existing state
    //  (or default initial state if none was supplied)
    return state || initialState;
}