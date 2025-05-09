import React from 'react';
import '../styles/ServiceCard.scss';

const ServiceCard = ({ title, description }) => {
  return (
    <div className="service-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <button>Learn More</button>
    </div>
  );
};

export default ServiceCard;
