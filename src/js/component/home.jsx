import React from "react";
import { Jumbotron } from "./jumbotron.jsx";
import { Cards } from "./cards.jsx";
import { NavBar } from "./navbar.jsx";
import { Footer } from "./footer.jsx";

export function Home() {
	return (
		<div className="container">
			<NavBar />
			<Jumbotron />
			<div className="row justify-content-around">
				<Cards />
				<Cards />
				<Cards />
				<Cards />
			</div>
			<Footer />
		</div>
	);
}