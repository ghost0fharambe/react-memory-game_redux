import React from "react";
import "./style.css";

function Navbar(props) {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<a className="navbar-brand" rel="noopener noreferrer" href="http://adamkarman.com" target="_blank" id="logo">Created by: Adam Karman</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
					aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
					<ul className="navbar-nav ml-auto mt-2 mt-lg-0">
						<li className="nav-item">
							<p className="nav-link" id="reset-button" onClick={() => props.resetGame()}>Reset Game</p>
						</li>
						<li className="nav-item">
							<p className="nav-link">Score: {props.score}</p>
						</li>
						<li className="nav-item">
							<p className="nav-link">Wins: {props.wins}</p>
						</li>
						<li className="nav-item">
							<p className="nav-link">Losses: {props.losses}</p>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navbar;