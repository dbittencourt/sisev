import { Reducer } from "redux";
import { AppThunkAction } from "./";

export interface UserState {
    cpf: string,
    department: string,
    email: string,
    firstName: string,
    lastName: string,
    claims: {}
}

// actions
interface EditUserAction {
    type: "EDIT_USER",
    user: UserState
}

type KnownAction = EditUserAction;

export const actionCreators = {

}

const initialState = { cpf: "", department: "", email: "", firstName: "", lastName: "", claims: null };

export const reducer: Reducer<UserState> = (state: UserState, action: KnownAction) => {
    switch(action.type){
        case "EDIT_USER":
            return action.user;
    }
        
    // For unrecognized actions (or in cases where actions have no effect), must return the existing state
    //  (or default initial state if none was supplied)
    return state || initialState;
}
