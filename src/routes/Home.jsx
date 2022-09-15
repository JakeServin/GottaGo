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
				<div className="container">
					<div id="home">
						<div class="row mt-4 rounded">
							<div class="col-lg-5">
								<h1 class="text-left">
									Find a Local Public Bathroom
								</h1>
								<p class="pt-3">
									Find, rate, and review local Public
									Bathrooms in your area harnessing the power
									of Google Maps and our application!
								</p>
								<div class="d-flex justify-content-center">
									<a
										href="/find"
										class="btn my-3 p-2 btn-warning home-btn btn-lg btn-block"
									>
										FIND A BATHROOM
									</a>
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
							<div class="howitworks container text-center">
								<h1>How GottaGo Works</h1>
							</div>
							<div class="container">
								<div class="row justify-content-md-center">
									<div class="col-lg-3 mr-3">
										<div class="card m-b-3">
											<img src={picture4}></img>
										</div>
										<div class="card-body">
											<h3 class="card-title">Look</h3>
											<p class="card-text">
												Search using the power of Google
												Maps to find local restrooms in
												your area
											</p>
										</div>
									</div>
									<div class="col-lg-3 mr-3">
										<div class="card m-b-3">
											<img src={picture5}></img>
										</div>
										<div class="card-body">
											<h3 class="card-title">Add</h3>
											<p class="card-text">
												Our app depends on users adding
												new restrooms for more
												comprehensive maps
											</p>
										</div>
									</div>
									<div class="col-lg-3 mr-3">
										<div class="card m-b-3">
											<img src={picture6}></img>
										</div>
										<div class="card-body">
											<h3 class="card-title">Review</h3>
											<p class="card-text">
												Leave reviews so users can know
												what to expect (Feature Coming
												Soon)
											</p>
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