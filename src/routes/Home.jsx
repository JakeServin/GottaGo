import React from 'react'
import picture3 from "../../src/pictures/map picture.png"
import picture4 from "../../src/pictures/maps-icon-8214.png"
import picture5 from "../../src/pictures/add.png"
import picture6 from "../../src/pictures/review.png"
import Footer from '../components/Footer'

const Home = () => {
  return (
		<>
			<div class="content-div">
				<div className="">
					<div id="home">
						<div class="rounded">
							<div className="hero-section px-5 d-flex justify-content-center align-items-center">
								<div class="col-12 col-lg-5 text-white">
									<h1 className="text-left">
										Find a Local Public Bathroom
									</h1>
									<p class="pt-3 pe-4">
										Find, rate, and review local Public
										Bathrooms in your area harnessing the
										power of Google Maps and our
										application!
									</p>
									<div class="d-flex">
										<Link
											to="/find"
											class="btn my-3 p-2 btn-warning home-btn btn-lg btn-block"
										>
											Find a bathroom
										</Link>
									</div>
								</div>
								<div class="col-lg-7">
									<img
										src={picture3}
										height="auto"
										width="100%"
										alt="map picture"
										class="img-thumbail rounded"
									/>
								</div>
							</div>
							<div className="how-it-works mt-4 p-3 p-md-5 d-flex flex-column justify-content-center align-items-center">
								<div class="text-center mb-5 text-primary">
									<h1>How GottaGo Works</h1>
								</div>
								<div class="container">
									<div class="row justify-content-md-center">
										<div class="col-lg-3 me-5 mb-5">
											<div class="mb-3 text-center">
												<img width="175px" src={picture4}></img>
											</div>
											<div class="card-body">
												<h3 class="card-title text-danger">Look</h3>
												<p class="card-text">
													Search using the power of
													Google Maps to find local
													restrooms in your area
												</p>
											</div>
										</div>
										<div class="col-lg-3 me-5 mb-5">
											<div class="mb-3 text-center">
												<img width="175px" src={picture5}></img>
											</div>
											<div class="card-body ">
												<h3 class="card-title text-success">Add</h3>
												<p class="card-text">
													Our app depends on users
													adding new restrooms for
													more comprehensive maps
												</p>
											</div>
										</div>
										<div class="col-lg-3 mb-5">
											<div class=" mb-3 text-center ">
											  <img width="175px" height="175px" src={picture6}></img>
											</div>
											<div class="card-body">
												<h3 class="card-title text-warning">
													Review
												</h3>
												<p class="card-text">
													Leave reviews so users can
													know what to expect
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
  );
}

export default Home