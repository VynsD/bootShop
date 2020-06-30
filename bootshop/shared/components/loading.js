import React from 'react';

function LoadingData() {
  return (  
    <div className="grid-onlyElement">
      <div className="loading_wrapper">
        <h2 className="loading_text">Loading Data</h2>
        <div className="loading_spinner"></div>
      </div>
    </div>
  );
}

export default LoadingData;