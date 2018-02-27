import React from "react";

import "./App.css";

import Nav from "./Nav/Nav";
import routes from '../router';

export function App( { children } ) {
	return (
		<div className="app">
			<Nav />
			{ routes }
		</div>
	);
}

export default App;
