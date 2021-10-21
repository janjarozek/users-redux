import { combineReducers } from 'redux'

import usersReducer from "./components/Users/redux";

const rootReducer = combineReducers({
    usersReducer: usersReducer
});

export default rootReducer;