//
// ACTION
import { GET_USER } from "#/actions/user_action";
import { RESET_CONTENT } from "#/actions/reset_action";
//
// VARIABLE
//
const initialState = {};
//
//
export default function updateReducer(state = initialState, action){
    switch (action.type) {
        case GET_USER:
            return action.payload;
        case RESET_CONTENT:
            return initialState;    
        default:
            return state; 
    }
}