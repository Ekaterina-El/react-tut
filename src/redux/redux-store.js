import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import authReducer from "./authReducer";
import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";

const reducers = combineReducers({
  profile: profileReducer,
  dialogs: dialogReducer,
  users: usersReducer,
  auth: authReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
