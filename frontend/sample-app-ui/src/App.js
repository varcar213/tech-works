import React from 'react';
import './styles/App.scss';
import ServiceCard from './components/ServiceCard';
import ImageCard from './components/ImageCard';


const App = () => {
  return (
    <div className="app-container">
      <h1>Welcome to Sahasra Synergy</h1>

      <h2>Cards</h2>
      <div className="card-wrapper">
        <ImageCard
          imageUrl="https://images.unsplash.com/photo-1740560051549-cc6799220d48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Cloud Security"
          description="Secure your cloud infrastructure with our expert solutions."
        />
        
        <ImageCard
          imageUrl="https://plus.unsplash.com/premium_photo-1670402130476-25aa8c1986c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Cloud Security"
          description="Secure your cloud infrastructure with our expert solutions."
        />
        
        <ImageCard
        imageUrl="https://images.unsplash.com/photo-1589128560340-b66ae74e4fc4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/"
        title="Cloud Security"
        description="Secure your cloud infrastructure with our expert solutions."
      />
      </div>
      <div className="card-wrapper">
        <ServiceCard
          title="Vulnerability Assessment"
          description="Identify and mitigate security weaknesses in your system."
        />
        <ServiceCard
          title="DPDP Compliance"
          description="Ensure compliance with India's Data Protection regulations."
        />
        <ServiceCard
          title="Application Security"
          description="Protect your applications from threats and vulnerabilities."
        />
      </div>
    </div>
  );
};

export default App;
