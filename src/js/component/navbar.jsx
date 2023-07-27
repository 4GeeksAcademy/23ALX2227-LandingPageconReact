import React from "react";

export function NavBar() {
	return (
		<div className="text-center mt-5">
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
				<a className="navbar-brand" href="#">
					Start Bootstrap
				</a>

				<div className="navbar-nav ml-auto" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<a className="nav-link" href="#">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								About
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Service
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link"
								href="#"
								tabIndex={-1}
								aria-disabled="true">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}

