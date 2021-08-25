import axios from "axios";

export const UPDATE_CARD = "Update Card";
export const GET_CARD = "Get Card";
export const GOT_CARD = "Got Card";

export const updateCard = (text) => {
	return { type: UPDATE_CARD, text };
};

export const getCard = (name) => (dispatch) => {
	axios
		.get(
			`https://api.scryfall.com/cards/search?order=set&q=${name}&include_extras`
		)
		.then((result) => {
			console.log(result);
			const name = result.data.data[0].name;
			const img = result.data.data[0].image_uris.normal;
			const cmc = result.data.data[0].cmc;
			const typeLine = result.data.data[0].type_line;
			const oracleText = result.data.data[0].oracle_text;
			console.log("results.data here", name, img, cmc, typeLine, oracleText);
			dispatch(gotCard(name, img, cmc, typeLine, oracleText));
		})
		.catch((err) => {
			console.log(err);
		});
};

export const gotCard = (name, img, cmc, typeLine, oracleText) => {
	console.log(
		"gotCard functionality ======",
		name,
		img,
		cmc,
		typeLine,
		oracleText
	);
	return { type: GOT_CARD, name, img, cmc, typeLine, oracleText };
};
