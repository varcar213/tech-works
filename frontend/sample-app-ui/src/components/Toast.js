import React from 'react';
import '../styles/Toast.scss';

const Toast = ({ message, type }) => {
  return (
    <div className={`toast ${type}`}>
      {type === 'success' ? '✅' : '⚠️'} {message}
    </div>
  );
};

export default Toast;
