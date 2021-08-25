import { applyMiddleware, combineReducers, createStore } from "redux";
import { cardFormReducer } from "./cardform.reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { cardInfoReducer } from "./cardinfo.reducer";

const reducer = combineReducers({
	form: cardFormReducer,
	info: cardInfoReducer,
});

export const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(thunk))
);
