import React from 'react'
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Review = ({ review }) => {
    console.log(review)
  return (
		<>
			<div className="p-4">
				<div>{review.title}</div>
				<Rating
					{...{
						emptySymbol: <AiOutlineStar color="gold" />,
						fullSymbol: <AiFillStar color="gold" />,
						fractions: 2,
						initialRating: review.rating,
					}}
					readonly
				/>
				<p>{review.review}</p>
				<div>Posted by {review.username}</div>
			</div>
			<hr />
		</>
  );
}

export default Review