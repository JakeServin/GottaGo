import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";
import { loginReducer } from "./reducers/loginReducer";

const rootReducer = combineReducers({
	userReducer,
	loginReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
