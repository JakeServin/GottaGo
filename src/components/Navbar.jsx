import React, { useEffect } from "react";
import axios from "axios";
import picture7 from "../../src/pictures/icon.png";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = (props) => {
    const { setUser, setLoggedIn, setLoggedOut, loggedIn } =
		props;
	console.log(props);
	// Check req.user to see if user is currently logged in
	useEffect(() => {
		const getUser = async () => {
			await axios
				.get("https://gotta-go-app.herokuapp.com/current_user")
				.then((res) => {
					setUser(res.data);
					if (!res.data._id) {
						setLoggedOut();
					} else {
						setLoggedIn();
					}
				});
		};
		getUser();
	}, [loggedIn, setLoggedOut]);
    

	// Signout if button is pressed;
	const handleSignout = async () => {
		await axios.get("https://gotta-go-app.herokuapp.com/logout");
		setLoggedOut();
	};
	return (
		<nav className="navbar sticky-top navbar-expand-sm navbar-dark bg-primary">
			<div className="container-fluid d-flex align-items-center">
				<Link
					to="/"
					className="navbar-brand mb-0 h1 d-flex align-items-center"
				>
					<img
						className="d-inline-block align-top"
						src={picture7}
						width="30"
						height="30"
					/>
					<span>GottaGo</span>
				</Link>
				<button
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					className="navbar-toggler"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<Link to="/" className="nav-link active">
								Home
							</Link>
						</li>
						<li className="nav-item active">
							<Link to="/about" className="nav-link">
								About
							</Link>
						</li>
						<li className="nav-item active">
							<Link to="/find" className="nav-link">
								Find a Bathroom
							</Link>
						</li>
					</ul>
					<ul className="navbar-nav ms-auto">
						<li className="nav-item active">
							{!loggedIn ? (
								<Link className="nav-link" to="/signin">
									Sign In/Register
								</Link>
							) : (
								<Link
									className="nav-link"
									to="/"
									onClick={handleSignout}
								>
									Sign Out
								</Link>
							)}
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
const mapStateToProps = (state) => {
	const connectedUser = state.userReducer;
	const loggedIn = state.loginReducer;
	return {
		connectedUser,
		loggedIn,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setUser: (user) => {
			dispatch({
				type: "SET_USER",
				payload: user,
			});
		},
		setLoggedIn: () => {
			dispatch({
				type: "LOG_IN",
			});
		},
		setLoggedOut: () => {
			dispatch({
				type: "LOG_OUT",
			});
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
