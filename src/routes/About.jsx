import React from 'react'
import picture from "../../src/pictures/drew.jpeg"
import picture2 from "../../src/pictures/jake.jpeg"

const About = () => {
  return (
		<div className='content-div'>
			<div class="container text-left mt-5">
				<div class="row">
					<div className="col">
						<div class="card-body">
							<div class="text-left mx-3">
								<h1 class="mb-3">
									<strong>Gotta go?</strong>
								</h1>
								<h4>We've got a Solution for you</h4>
								<p>
									Gotta go was born out of a simple premise.
									Oftentimes construction workers are out at
									job sites and need to use a restroom, but
									cannot do so at the Homeowner's house. Gotta
									go solves that problem by allowing the user
									to find local public restrooms that are
									rated and reviewed by other users. No more
									googling and wasting time at lunch breaks.
									When you've gotta go, You've gotta go!
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="container mt-5">
					<h3>Project Creators</h3>
					<div class="row">
						<div class="col-lg-3">
							<div className="card m-b-3">
								<img
									src={picture2}
									alt="author picture"
									class="card-img-top img-thumbnail"
								/>
								<div className="card-body">
									<h5 className="card-title">Jake Servin</h5>
									<p class="card-text">
										Full Stack Developer
									</p>
									<a
										href="https://www.linkedin.com/in/jakeservin/"
										class="btn btn-primary"
										role="button"
									>
										View LinkedIn
									</a>
								</div>
							</div>
						</div>
						<div class="col-lg-3">
							<div className="card m-b-3">
								<img
									src={picture}
									alt="author picture"
									class="card-img-top img-thumbnail"
								/>
								<div className="card-body">
									<h5 className="card-title">Drew Butler</h5>
									<p class="card-text">
										Full Stack Developer
									</p>
									<a
										href="https://www.linkedin.com/in/drewbutlermba/"
										class="btn btn-primary"
										role="button"
									>
										View LinkedIn
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
  );
}

export default About

// copy for about me page
// Gotta go?
// Gotta go was born out of a simple premise. Oftentimes construction workers are out at job sites and need to use a restroom, but cannot do so at the Homeowner's house. Gotta go solves that problem by allowing the user to find local public restrooms that are rated and reviewed by other users. No more googling and wasting time at lunch breaks. When you've gotta go, You've gotta go!