import React, { useState } from 'react';
import '../styles/CardGrid.scss';

const data = [
  { id: 1, title: 'Cloud Security', category: 'Security', imageUrl: 'https://images.unsplash.com/photo-1740560051549-cc6799220d48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 2, title: 'Web Development', category: 'Development', imageUrl: 'https://plus.unsplash.com/premium_photo-1670402130476-25aa8c1986c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 3, title: 'DevOps Setup', category: 'DevOps', imageUrl: 'https://images.unsplash.com/photo-1589128560340-b66ae74e4fc4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/' },
  { id: 4, title: 'Mobile App', category: 'Development', imageUrl: 'https://images.unsplash.com/photo-1614064642578-7faacdc6336e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 5, title: 'Network Security', category: 'Security', imageUrl: 'https://plus.unsplash.com/premium_photo-1670402130476-25aa8c1986c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
];

const CardGrid = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');

  const filteredCards = data.filter(card => {
    const matchesSearch = card.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'All' || card.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="card-grid-wrapper">
      <div className="controls">
        <input
          type="text"
          placeholder="Search cards..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Security">Security</option>
          <option value="Development">Development</option>
          <option value="DevOps">DevOps</option>
        </select>
      </div>

      <div className="card-grid">
        {filteredCards.map(card => (
          <div key={card.id} className="card">
            <img src={card.imageUrl} alt={card.title} />
            <div className="card-body">
              <h3>{card.title}</h3>
              <p>{card.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
