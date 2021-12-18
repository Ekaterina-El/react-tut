import {createStore, combineReducers} from "redux"
import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";

const reducers = combineReducers({
    "profile": profileReducer,
    "dialogs": dialogReducer
})

const store = createStore(reducers);


export default store