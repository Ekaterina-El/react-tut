import {createStore, combineReducers} from "redux"
import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";

const reducers = combineReducers({
    "profile": profileReducer,
    "dialogs": dialogReducer,
    "users": usersReducer
})

const store = createStore(reducers);


export default store