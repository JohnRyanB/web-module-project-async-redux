import { UPDATE_CARD } from "../actions";

const initialState = {
	name: "Search",
};

export const cardFormReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_CARD:
			return { ...state, name: action.text };
		default:
			return state;
	}
};
