import { combineReducers } from "redux";
import userReducer from "./user_reducer";
import updateReducer from "./update_user";

export default combineReducers({
    userReducer,
    updateReducer,
});