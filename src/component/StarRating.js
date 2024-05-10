import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (starRating) => {
    setRating(starRating);
  };

  return (
    <div>
      <h2>
        {rating === 1 && "Terrible"}
        {rating === 2 && "Poor"}
        {rating === 3 && "Okay"}
        {rating === 4 && "Good"}
        {rating === 5 && "Excellent"}
      </h2>
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          isSelected={index < rating}
          onClick={() => handleStarClick(index + 1)}
        />
      ))}
    </div>
  );
};

const Star = ({ isSelected, onClick }) => {
  return (
    <FaStar
      className="star"
      color={isSelected ? "#ffc107" : "#e4e5e9"}
      size={20}
      onClick={onClick}
    />
  );
};

const Dialog = ({ onClose }) => {
  return (
    <div>
      <button onClick={onClose}>
        <FaTimes />
      </button>
    </div>
  );
};

export default StarRating;
