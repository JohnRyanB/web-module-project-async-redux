import { connect } from "react-redux";
import { updateCard, getCard } from "../actions";

const CardForm = (props) => {
	return (
		<div>
			<input
				type="text"
				value={props.name}
				onChange={(e) => props.updateCard(e.target.value)}
			/>
			<button onClick={() => props.getCard(props.name)}>Scry</button>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		name: state.form.name,
	};
};

export default connect(mapStateToProps, { updateCard, getCard })(CardForm);
//this will give us functionality to search for a card by name
