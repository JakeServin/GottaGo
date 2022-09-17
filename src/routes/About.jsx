import React from 'react'
import picture from "../../src/pictures/drew.jpeg"
import picture2 from "../../src/pictures/jake.jpeg"
import Footer from '../components/Footer';

const About = () => {
  return (
		<>
			<div className="content-div">
				<div className="text-left">
					<div className="about-header mb-5 p-5 d-flex flex-column justify-content-center align-items-center ">
						<div className="col-10 ">
							<div className="text-left mx-3 ">
								<h1 className="mb-3 text-primary">
									<strong>Gotta go?</strong>
								</h1>
								<h4 className="text-success">
									We've got a Solution for you
								</h4>
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
					<div className="container mt-5">
						<h3>About Us</h3>
						<div className="row">
							<div class="row aboutContent col-12 col-md-6   d-flex justify-content-center align-items-center">
								<div class="col-12 col-md-4  d-flex flex-column justify-content-center align-items-center">
									<img
										src={picture2}
										class="headshot mb-4"
										width="100%"
									/>
								</div>
								<div class="aboutText col-11 col-md mt-3 my-sm-5 mx-2 mb-5">
									<h4>Jake Servin</h4>
									<p>
										A software engineer with a passion for
										problem-solving, learning new concepts,
										and creating innovative new projects.
									</p>
									<p></p>
								</div>
							</div>
							<div class="row aboutContent col-md-6  d-flex justify-content-center align-items-center">
								<div class="col-12 col-md-4  d-flex flex-column justify-content-center align-items-center">
									<img
										src={picture}
										class="headshot mb-4"
										width="100%"
										height="auto"
									/>
								</div>
								<div class="aboutText col-11 col-md mt-3 my-sm-5 mx-2 mb-5">
									<h4>Drew Butler</h4>
									<p>
										Salesperson and now Software Engineer - my passion is linking people to solutions and creating mutually beneficial relationships. I live in San Antonio but still eat Chipotle three times a week. Love a good simile.
									</p>
									<p></p>
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

export default About

// copy for about me page
// Gotta go?
// Gotta go was born out of a simple premise. Oftentimes construction workers are out at job sites and need to use a restroom, but cannot do so at the Homeowner's house. Gotta go solves that problem by allowing the user to find local public restrooms that are rated and reviewed by other users. No more googling and wasting time at lunch breaks. When you've gotta go, You've gotta go!