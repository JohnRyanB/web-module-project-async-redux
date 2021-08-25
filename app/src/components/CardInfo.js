import { connect } from "react-redux";
import "../App.css";

const CardInfo = (props) => {
	return (
		<div>
			{props.cardFound ? (
				<div className="CardContainer">
					<div className="CardHeading">
						<h2 className="Cardname">{props.name} </h2>
						<h2 className="CMC">{props.cmc}</h2>
					</div>

					<img src={props.image} alt={props.name} />
					<div className="TypeLine">Type: {props.typeLine}</div>
					<div className="OracleText">{props.oracleText}</div>
				</div>
			) : (
				<div>Search for a card by name!</div>
			)}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		name: state.info.name,
		image: state.info.image,
		cmc: state.info.cmc,
		typeLine: state.info.typeLine,
		oracleText: state.info.oracleText,
		cardFound: state.info.cardFound,
	};
};

export default connect(mapStateToProps, {})(CardInfo);
