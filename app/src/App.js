import "./App.css";
import CardForm from "./components/CardForm";
import CardInfo from "./components/CardInfo";

function App() {
	return (
		<div className="App">
			<h1 className="Title">Magic: The Gathering Searcher</h1>
			<CardForm />
			<CardInfo />
		</div>
	);
}

export default App;
