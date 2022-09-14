import React from 'react'
import picture7 from "../../src/pictures/icon.png"

const Navbar = () => {
  return (
		<nav className="navbar sticky-top navbar-expand-sm navbar-dark bg-primary">
			<div className="container d-flex align-items-center">
				<a href="/" className="navbar-brand mb-0 h1 d-flex align-items-center">
					<img
						className="d-inline-block align-top"
						src={picture7}
						width="30"
						height="30"
					/>
					<span>GottaGo</span>
				</a>
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
							<a href="/" className="nav-link active">
								Home
							</a>
						</li>
						<li className="nav-item active">
							<a href="/about" className="nav-link">
								About
							</a>
						</li>
						<li className="nav-item active">
							<a href="/find" className="nav-link">
								Find a Bathroom
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
  );
}

export default Navbar