import React, { useState } from 'react';

function Card({ image, title, content }) {
  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const handleCardClick = () => {
    console.log('Card clicked'); // Debugging: check if this runs
    setIsModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = (e) => {
    e.stopPropagation(); // Prevent closing when clicking inside modal content
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Card for displaying destination information */}
      <div className="card" onClick={handleCardClick}>
        <img src={image} alt={title} />
        <h3>{title}</h3>
      </div>

      {/* Modal for displaying more details about the destination */}
      {isModalOpen && (
        <div className="modal" style={{ display: 'flex' }} onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>
              &times;
            </button>
            <h2>{title}</h2>
            <ul>
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
