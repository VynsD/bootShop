import React from 'react';
import ErrorLogo from '../../assets/icons/error.svg';

function ErrorFetchData() {
  return (  
    <div className="grid-onlyElement">
      <div className="error_wrapper">
        <ErrorLogo
          className="error_img" 
          alt="error icon" 
        />
        <div className="error_text">
          <h2 className="error_text-header">Error During Data fetch</h2>
          <div className="error_text-message">
            <p>Something went wrong during retrieve data, please reload.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErrorFetchData;