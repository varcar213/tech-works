import React from 'react';
import '../styles/ImageCard.scss';

const ImageCard = ({ imageUrl, title, description }) => {
  return (
    <div className="image-card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <button>Explore</button>
      </div>
    </div>
  );
};

export default ImageCard;
