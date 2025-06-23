// src/components/ConstructionLoader.jsx
import React from 'react';
import '../styles/loader.css';
import { FaHardHat, FaTools } from 'react-icons/fa';

function ConstructionLoader() {
  return (
    <div className="construction-loader">
      <div className="loader-content">
        <div className="loader-icons">
          <FaHardHat className="hard-hat" />
          <FaTools className="tools" />
        </div>
        <div className="loader-bar">
          <div className="progress"></div>
        </div>
        <p className="loader-text">Building Your Experience...</p>
      </div>
    </div>
  );
}

export default ConstructionLoader;