import {createStore, combineReducers} from "redux"
import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";

const reducers = combineReducers({
    "profile": profileReducer,
    "dialog": dialogReducer
})

const store = createStore(reducers);


export default store