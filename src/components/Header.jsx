import React from 'react';
import Button from './Button'

function Header() {
  const purpleButton = {
    backgroundColor: 'purple',
    color: 'white'
  }

  const brownButton = {
    backgroundColor: 'brown',
    color: 'white'
  }

  return(
    <div>
      <h1>Epicodus Farmer's Market</h1>
      <Button bgColor={purpleButton}
              text="Subscribe to our newsletter"/>
      <Button bgColor={brownButton}
              text="Current Vendors"/>
    </div>
  );
}

export default Header;
