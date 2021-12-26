import {createStore, combineReducers} from "redux"
import authReducer from "./authReducer";
import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";

const reducers = combineReducers({
    "profile": profileReducer,
    "dialogs": dialogReducer,
    "users": usersReducer,
    "auth": authReducer
})

const store = createStore(reducers);


export default store