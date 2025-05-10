import React, { useEffect, useState } from 'react';
import styles from '../styles/StatsCounter.scss';

const CounterCard = ({ label, target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 20);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className={styles.card}>
      <h3>{count}</h3>
      <p>{label}</p>
    </div>
  );
};

const StatsCounter = () => {
  const stats = [
    { label: 'Users', target: 1200 },
    { label: 'Downloads', target: 3500 },
    { label: 'Subscribers', target: 875 },
    { label: 'Reviews', target: 420 },
  ];

  return (
    <div className={styles.counterSection}>
      {stats.map((stat, index) => (
        <CounterCard key={index} label={stat.label} target={stat.target} />
      ))}
    </div>
  );
};

export default StatsCounter;
