import React from 'react';

function LoadingData() {
  return (  
    <div className="grid-onlyElement">
      <div>
        <h2 className="loading_text">Loading Data</h2>
      </div>
      <div className="loading_spinner"></div>
    </div>
  );
}

export default LoadingData;