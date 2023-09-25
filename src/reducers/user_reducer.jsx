//
// ACTION
import { POST_USER, POST_USER_SEC } from "#/actions/user_action";
import { RESET_CONTENT } from "#/actions/reset_action";
//
// VARIABLE
//
const initialState = [];
//
//
export default function userReducer(state = initialState, action){
    switch (action.type) {
        case POST_USER:
            return [...state, action.payload];
        case POST_USER_SEC:
            return action.payload;
        case RESET_CONTENT:
            return initialState;    
        default:
            return state; 
    }
}