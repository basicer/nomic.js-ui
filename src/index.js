import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./store";

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
