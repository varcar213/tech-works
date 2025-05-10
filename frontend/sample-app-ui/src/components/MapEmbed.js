import React, { useState, useEffect } from 'react';
import '../styles/MapEmbed.scss';

const MapEmbed = () => {
  const [address, setAddress] = useState('IIT Kanpur');
  const [coordinates, setCoordinates] = useState({ lat: '', lng: '' });

  const getMapSrc = (location) =>
    `https://www.google.com/maps?q=${encodeURIComponent(location)}&output=embed`;
  useEffect(() => {
    const fetchCoordinates = async () => {
      if (!address) return;
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&limit=1`,
          {
            headers: {
              'User-Agent': 'MyReactApp/1.0 (your@email.com)', // Recommended
            },
          }
        );
        const data = await response.json();
        if (data.length > 0) {
          const { lat, lon } = data[0];
          setCoordinates({ lat, lng: lon });
        } else {
          setCoordinates({ lat: 'N/A', lng: 'N/A' });
          console.warn('No results found.');
        }
      } catch (error) {
        console.error('Error fetching coordinates:', error);
        setCoordinates({ lat: 'Error', lng: 'Error' });
      }
    };
  
    fetchCoordinates();
  }, [address]);
  
  // useEffect(() => {
  //   const fetchCoordinates = async () => {
  //     if (!address) return;
  //     try {
  //       const apiKey = 'AIzaSyCbKmOceKtnxu0zOHWmUS3K3pbR-9jO7RQ'; // Your Google Maps API Key
  //       const response = await fetch(
  //         `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`
  //       );
  //       const data = await response.json();
  //       if (data.status === 'OK' && data.results.length > 0) {
  //         const { lat, lng } = data.results[0].geometry.location;
  //         setCoordinates({ lat, lng });
  //       } else {
  //         setCoordinates({ lat: 'N/A', lng: 'N/A' });
  //         console.warn('No results found:', data.status);
  //       }
  //     } catch (error) {
  //       console.error('Error fetching coordinates:', error);
  //       setCoordinates({ lat: 'Error', lng: 'Error' });
  //     }
  //   };
  
  //   fetchCoordinates();
  // }, [address]);
  

  return (
    <div className="mapWrapper">
      <input
        type="text"
        value={address}
        placeholder="Enter an address or location..."
        onChange={(e) => setAddress(e.target.value)}
      />
      <iframe
        title="Google Map"
        src={getMapSrc(address)}
        loading="lazy"
        allowFullScreen
      />
      <div className="coords">
        <strong>Coordinates:</strong>{' '}
        {coordinates.lat && coordinates.lng
          ? `${coordinates.lat}, ${coordinates.lng}`
          : 'Loading...'}
      </div>
    </div>
  );
};

export default MapEmbed;
