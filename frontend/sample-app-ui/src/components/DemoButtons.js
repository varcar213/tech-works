import React from 'react';
import { useToast } from './ToastContext';

const DemoButtons = () => {
  const { showToast } = useToast();

  return (
    <div style={{ padding: '1rem' }}>
      <button onClick={() => showToast("Data saved successfully!", "success")}>
        Show Success
      </button>
      <button onClick={() => showToast("Invalid input!", "warning")}>
        Show Warning
      </button>
      <button onClick={() => showToast("Something went wrong!", "error")}>
        Show Error
      </button>
    </div>
  );
};



export default DemoButtons;
