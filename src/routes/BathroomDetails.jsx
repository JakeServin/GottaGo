import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {connect} from 'react-redux'
import {
	GoogleMap,
	Marker,
	LoadScript,
} from "@react-google-maps/api";
import axios from "axios";
import Rating from 'react-rating'
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import Review from "../components/Review";
const libraries = ["places"];
let mapOptions = {
	zoom: 15,
};

const BathroomDetails = ({connectedUser,
		loggedIn}) => {
	const [map, setMap] = React.useState(null);
	const [searchParams, setSearchParams] = useSearchParams();
	const [show, setShow] = useState(false)
	const [rate, setRate] = useState(0);
	const [average, setAverage] = useState(0)
	const [reviews, setReviews] = useState([])
	const [bathroomDetails, setBathroomDetails] = useState({})
	const [reviewTitle, setReviewTitle] = useState("");
	const [reviewDescription, setreviewDescription] = useState("")
    const bathroomId = searchParams.get("id");
	console.log(bathroomId);
	console.log(bathroomDetails.long)
	const [center, setCenter] = useState({
	});
	const [newMarker, setNewMarker] = useState({
	});
	const navigate = useNavigate();
	const isLoaded = true;

	const containerStyle = {
		width: "100%",
		height: "100%",
		minHeight: "332px",
		borderRadius: "5px",
	};
    
	
    useEffect(() => {
		const getBathroomInfo = async () => {
			await axios
				.get(
					`https://gotta-go-app.herokuapp.com/get_bathroom?id=${bathroomId}`
				)
				.then((res) => {
					setBathroomDetails(res.data);
					setCenter({
						lat: parseFloat(res.data.lat),
						lng: parseFloat(res.data.long),
					});
					setNewMarker({
						lat: parseFloat(res.data.lat),
						lng: parseFloat(res.data.long),
					});
				});
		};
		const getReviews = async () => {
			await axios
				.get(
					`https://gotta-go-app.herokuapp.com/get_reviews?id=${bathroomId}`
				)
				.then((res) => setReviews(res.data));
		}
		getBathroomInfo();
		getReviews();
	}, []);

	useEffect(() => {
		let avg = 0;
		reviews.map((review) => avg += review.rating);
		avg /= reviews.length;
		setAverage(avg);
	},)
	
	
	const onUnmount = React.useCallback(function callback(map) {
		setMap(null);
	}, []);
	
	const handleSubmit = async () => {
		console.log(connectedUser)
		const review = {
			title: reviewTitle,
			rating: rate,
			review: reviewDescription,
			bathroomId: bathroomDetails._id,
			userId: connectedUser._id,
			username: connectedUser.userName

		}
		const response = await axios.post("http://localhost:5500/newreview", review).then(res=> res.data);
    	if (response != null) window.location.reload(false);
	}

	const handleReviewClick = () => {
	show ? setShow(false) : setShow(true)
	}
	console.log(reviews)
	return (
		<div className="content-div d-flex justify-content-center align-items-center bg-grey">
			<div className="container m-2 m-sm-5 p-3 p-sm-5 py-5 newbathroom-wrapper bg-white ">
				<div className="row d-flex justify-content-center ">
					<div className="col">
						<h1 className="">{bathroomDetails.name} </h1>
						<div className="d-flex align-items-end">
							<h3>
								<Rating
									{...{
										emptySymbol: (
											<AiOutlineStar color="gold" />
										),
										fullSymbol: <AiFillStar color="gold" />,
										fractions: 2,
										initialRating: average,
									}}
									readonly
								/>
							</h3>
							<h3>({reviews.length})</h3>
						</div>

						<div className="mb-2">
							<strong>Type:</strong> {bathroomDetails.type}
						</div>
						<div className="mb-2">
							<strong>Description:</strong>
							<div>{bathroomDetails.description}</div>
						</div>
					</div>
					<div className="col-12 col-sm">
						{isLoaded ? (
							<LoadScript
								googleMapsApiKey="AIzaSyDXZWVRUBqSZpQk8uAqlPqxjZrQ6i45yCc"
								libraries={libraries}
							>
								<GoogleMap
									options={mapOptions}
									mapContainerStyle={containerStyle}
									onUnmount={onUnmount}
									center={center}
								>
									{/* Child components, such as markers, info windows, etc. */}
									{newMarker ? (
										<Marker
											position={{
												lat: newMarker.lat,
												lng: newMarker.lng,
											}}
										/>
									) : null}
								</GoogleMap>
							</LoadScript>
						) : (
							<></>
						)}
					</div>
					<div>
						<button
							class="btn btn-primary mt-5 col-12"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseExample"
							aria-expanded="false"
							aria-controls="collapseExample"
						>
							See Reviews
						</button>
						<div class="collapse" id="collapseExample">
							<div class="card card-body">
								{reviews ? (
									reviews.map((review) => (
										<Review review={review} />
									))
								) : (
									<div>No reviews yet</div>
								)}
								{loggedIn ? (
									<a
										href="#"
										onClick={handleReviewClick}
										className="text-center"
									>
										Click here to add a new review
									</a>
								) : (
										<Link
											to="/signin"
										className="text-center"
									>
										Sign in to add review
									</Link>
								)}
								<div
									style={{ display: show ? "" : "none" }}
									className="p-4"
								>
									<div className="form-floating mb-2 col-4">
										<input
											type="text"
											className="form-control"
											id="floatingInput"
											placeholder="Park Bathroom"
											value={reviewTitle}
											onChange={(e) =>
												setReviewTitle(e.target.value)
											}
										/>
										<label for="floatingInput">
											Review Title
										</label>
									</div>
									<div className="mb-2">
										<div className="rating">
											<Rating
												{...{
													emptySymbol: (
														<AiOutlineStar color="gold" />
													),
													fullSymbol: (
														<AiFillStar color="gold" />
													),
													fractions: 2,
												}}
												onChange={(rate) =>
													setRate(rate)
												}
											/>{" "}
										</div>
										<span>(Select a rating)</span>
									</div>
									<div class="form-floating mb-2">
										<textarea
											class="form-control"
											placeholder="Leave a comment here"
											id="floatingTextarea2"
											style={{ height: "100px" }}
											value={reviewDescription}
											onChange={(e) =>
												setreviewDescription(
													e.target.value
												)
											}
										></textarea>
										<label for="floatingTextarea2">
											Enter a bathroom review
										</label>
									</div>
									<div className="col-12">
										<button
											onClick={handleSubmit}
											className="btn btn-success col-12"
										>
											Add Review
										</button>
									</div>
									<div></div>
								</div>
								{/* Map through all reviews */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
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

export default connect(mapStateToProps, null)(BathroomDetails);
