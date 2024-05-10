import React from "react";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Star from "./Star";

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (starRating) => {
    setRating(starRating);
  };

  return (
    <div className="container">
      <div className="star-sign">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            isSelected={index < rating}
            onClick={() => handleStarClick(index + 1)}
          />
        ))}
      </div>
      <div className="title">
        <h2>
          {rating === 1 && "Terrible"}
          {rating === 2 && "Poor"}
          {rating === 3 && "Okay"}
          {rating === 4 && "Good"}
          {rating === 5 && "Excellent"}
        </h2>
      </div>
    </div>
  );
};

export default StarRating;
