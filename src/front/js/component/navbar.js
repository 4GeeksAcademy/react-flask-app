import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {

	const { actions } = useContext(Context)

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					<button onClick={actions.onLogin} className="btn btn-primary">Login</button>
					<button onClick={actions.onRegister} className="btn btn-secondary">Register</button>
				</div>
			</div>
		</nav>
	);
};
