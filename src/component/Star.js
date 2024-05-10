import { FaStar } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

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

export default Star;
