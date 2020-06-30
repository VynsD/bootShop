import React from 'react';

function Header() {
  return (  
    <div className="header-wrapper">
      {<div className="header_flex-center">{/*Menu*/}</div>}
      <h1 className="header_flex-center">Bootshop</h1>
      <div className="header_flex-center">{/*Search*/}</div>
    </div>
  );
}

export default Header;