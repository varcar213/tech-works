import React, { useState } from 'react';
import '../styles/Carousel.scss';
import ImageCard from './ImageCard';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1740560051549-cc6799220d48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Cybersecurity Services',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1670402130476-25aa8c1986c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Cloud Security Solutions',
  },
  {
    url: 'https://images.unsplash.com/photo-1589128560340-b66ae74e4fc4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/',
    caption: 'DPDP & Compliance',
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <button className="carousel-button left" onClick={goToPrevious}>&lt;</button>

      <div className="carousel-slide">
        <ImageCard
          imageUrl={images[currentIndex].url}
          title="Cloud Security"
          description="Secure your cloud infrastructure with our expert solutions."
        />
        <p className="caption">{images[currentIndex].caption}</p>
      </div>

      <button className="carousel-button right" onClick={goToNext}>&gt;</button>
    </div>
  );
};

export default Carousel;
