import { GOT_CARD } from "../actions";

const initialState = {
	image: "",
	name: "",
	cmc: "",
	typeLine: "",
	oracleText: "",
	cardFound: false,
};

export const cardInfoReducer = (state = initialState, action) => {
	switch (action.type) {
		case GOT_CARD:
			console.log(action);
			return {
				...state,
				name: action.name,
				cmc: action.cmc,
				typeLine: action.typeLine,
				oracleText: action.oracleText,
				image: action.img,
				cardFound: true,
			};
		default:
			return state;
	}
};
