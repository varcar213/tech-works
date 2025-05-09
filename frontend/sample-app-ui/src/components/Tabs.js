import React, { useState } from 'react';
import '../styles/Tabs.scss';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <p>This is the Overview content.</p>;
      case 'services':
        return <p>Here are our Services listed out in detail.</p>;
      case 'contact':
        return <p>Contact us at contact@sahasrasynergy.com.</p>;
      default:
        return null;
    }
  };

  return (
    <div className="tabs-container">
      <div className="tabs-header">
        <button className={activeTab === 'overview' ? 'active' : ''} onClick={() => setActiveTab('overview')}>Overview</button>
        <button className={activeTab === 'services' ? 'active' : ''} onClick={() => setActiveTab('services')}>Services</button>
        <button className={activeTab === 'contact' ? 'active' : ''} onClick={() => setActiveTab('contact')}>Contact</button>
      </div>
      <div className="tabs-content">{renderContent()}</div>
    </div>
  );
};

export default Tabs;
