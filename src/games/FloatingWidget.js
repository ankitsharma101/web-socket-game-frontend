import React from 'react';
import Draggable from 'react-draggable'; // Import react-draggable
import './FloatingWidget.css'; // You'll create this CSS file

const FloatingWidget = () => {
  return (
    <Draggable>
      <div className="floating-widget">
        {/* Widget content goes here */}
      </div>
    </Draggable>
  );
};

export default FloatingWidget;