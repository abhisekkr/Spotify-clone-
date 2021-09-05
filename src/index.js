import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { DataLayer } from "./Resources/DataLayer";
import reducer, { initialState } from "./Resources/reducer";

ReactDOM.render(
	<React.StrictMode>
		<DataLayer initialState={initialState} reducer={reducer}>
			<App />
		</DataLayer>
	</React.StrictMode>,
	document.getElementById("root")
);

reportWebVitals();
