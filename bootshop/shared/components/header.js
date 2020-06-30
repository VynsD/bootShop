import React from 'react';

function Header() {
  return (  
    <div className="header-wrapper">
      <div className="header_flex-center header_filler">{/*Menu*/}</div>
      <h1 className="header_flex-center">Bootshop</h1>
      <div className="header_flex-center header_filler">{/*Search*/}</div>
    </div>
  );
}

export default Header;