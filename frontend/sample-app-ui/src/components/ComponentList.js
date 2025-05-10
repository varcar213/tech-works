import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ComponentList.scss';

const componentLinks = [
  { name: 'Card Grid with Filter/Search', path: '/cardgrid' },
  // { name: 'Modal', path: '/modal' },
  { name: 'Carousel / Slider', path: '/carousel' },
  { name: 'Accordion (FAQs)', path: '/accordion' },
  { name: 'Dark Mode Toggle', path: '/darkmodetoggle' },
  // { name: 'Toast Notifications', path: '/toast' },
  // { name: 'Loader / Spinner', path: '/loader' },
  // { name: 'Card Grid with Filter/Search', path: '/filter-cards' },
  { name: 'Pricing Plans', path: '/pricing' },
  // { name: 'Component List', path: '/componentlist' },
  // { name: 'Service Card', path: '/serviceCard' },
  // { name: 'Image Card', path: '/imageCard' },
  { name: 'Header', path: '/header' },
  { name: 'Hero', path: '/hero' },
  { name: 'Contact Form', path: '/contactform' },
  { name: 'Footer', path: '/footer' },
  { name: 'Sidebar', path: '/sidebar' },
  { name: 'Tabs', path: '/tabs' },
  // { name: 'Demo Buttons', path: '/demobuttons' },
  { name: 'Multi-Step Form', path: '/multi-step-form' },
  { name: 'Image Uploader', path: '/image-uploader' },
  { name: 'Stats Counter', path: '/stats-counter' },
  { name: 'Map Embed', path: '/map-embed' },
  { name: 'Invoice Generator', path: '/invoice-generator' },
  { name: 'Date Range Picker', path: '/date-range-picker' },

];

const ComponentList = () => {
  const navigate = useNavigate();

  return (
    <div className="component-list">
      <h2>UI Components</h2>
      <ul>
        {componentLinks.map((comp, idx) => (
          <li key={idx} onClick={() => navigate(comp.path)}>
            {comp.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ComponentList;
