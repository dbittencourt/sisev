import {Action, Reducer, ActionCreator} from 'redux';
import { browserHistory } from 'react-router';
import 'isomorphic-fetch';
import ApiCalls from '../helpers/apiCalls';
import { AppThunkAction } from './';

// Formulary state data
export interface FormState {
    controllerAddress: string,
    fields: string[],
    values: any
    errors: any,
    submitting: boolean,
    submitted: boolean,
    response: any
}

// actions
interface InitializeFormAction {
    type: 'INITIALIZE_FORM',
    controllerAddress: string,
    formFields: string[]
}

interface ChangeFieldValueAction {
    type: 'CHANGE_VALUE',
    changedField: string,
    newValue: any
}

interface UpdateFieldErrorAction {
    type: 'UPDATE_ERROR',
    fieldErrors: any 
}

interface SubmitFormAction {
    type: 'SUBMIT_FORM'
}

interface SubmitFulfilledAction {
    type: 'SUBMIT_FULFILLED',
    payload: any
}

interface SubmitRejectedAction { 
    type: 'SUBMIT_REJECTED',
    errors: any
}

interface ResetFormAction {
    type: 'RESET_FORM'
}


type KnownAction = UpdateFieldErrorAction | InitializeFormAction | ChangeFieldValueAction 
| SubmitFormAction | SubmitFulfilledAction | SubmitRejectedAction | ResetFormAction;

export const actionCreators = {
    initilize: (address: string, fields: string[]) => <InitializeFormAction>{
        type: 'INITIALIZE_FORM',
        controllerAddress: address,
        formFields: fields
    },
    change: (field: string, value: any) => <ChangeFieldValueAction>{
        type: 'CHANGE_VALUE',
        changedField: field,
        newValue: value
    },
    updateErrors: (errors: any) => <UpdateFieldErrorAction>{
        type: 'UPDATE_ERROR',
        fieldErrors: errors
    },
    submit: (state: FormState): AppThunkAction<KnownAction> => (dispatch, getState) => {
        var submitted = true;
        if (!state.submitting){
            ApiCalls.request(state.controllerAddress, "post", state.values)
            .then(response => {
                if (!response.ok)
                    submitted = false;
                return response.json()
            })
            .then(data => {
                if (submitted){
                    dispatch({
                    type: 'SUBMIT_FULFILLED',
                    payload: data
                    })
                }
                else {
                    dispatch({
                    type: 'SUBMIT_REJECTED',
                    errors: data
                    })}
                })
            dispatch({ type: 'SUBMIT_FORM'});
        }   
    },
    reset: () => <ResetFormAction>{
        type: 'RESET_FORM'
    }
}

const initialState = { controllerAddress: "", fields: [], values: {}, errors: {}, 
    submitting: false, submitted: false, response: null };

export const reducer: Reducer<FormState> = (state: FormState, action: KnownAction) => {
    let newState = {...state};
    switch(action.type){
        case 'INITIALIZE_FORM':
            newState.controllerAddress = action.controllerAddress;
            newState.fields = action.formFields;
            newState.fields.forEach(f => newState.values[f] = "");
            return newState;
        case 'CHANGE_VALUE':
            newState.values = {...state.values};
            newState.values[action.changedField] = action.newValue;
            return newState;
        case 'UPDATE_ERROR':
            newState.errors = {...state.errors};
            Object.keys(action.fieldErrors).forEach(f => 
                newState.errors[f] = action.fieldErrors[f]);
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
            newState.errors = {...state.errors};
            newState.errors["global"] = action.errors[""];
            return newState;
        case 'RESET_FORM':
            newState = {...initialState};
            return newState;
        default:
            const exhaustiveCheck: never = action;
    }
    // For unrecognized actions (or in cases where actions have no effect), must return the existing state
    //  (or default initial state if none was supplied)
    return state || initialState;
}