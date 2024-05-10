import { FaTimes } from "react-icons/fa";
import { useState } from "react";

const Dialog = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="dialog-button">
        <button onClick={handleButtonClick} className="dialog-button">
          Open Dialog
        </button>
      </div>
      {isOpen && (
        <div className="dialog-text">
          <button onClick={handleClose}>
            <FaTimes />
          </button>
          <p>Hi</p>
        </div>
      )}
    </div>
  );
};

export default Dialog;
