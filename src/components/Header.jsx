import React from 'react';
import Button from './Button'
import SocialIcons from './SocialIcons';
import NavBar from './NavBar';

function Header() {
  const orangeButton = {
    backgroundColor: '#e15f26',
    color: 'white'
  }

  const brownButton = {
    backgroundColor: '#5f3812',
    color: 'white'
  }

  return(
    <div>
      <style jsx>
        {`
          .wrapper {
            display: flex;
            justify-content: space-around;
            align-items: flex-end;
          }
          .brownBtn {
            background-color: #5f3812;
            color: #fff;
          }
          `}
      </style>
      <div className="wrapper">
        <div>
          <SocialIcons/>
        </div>
        <div>
          <Button bgColor={orangeButton}
            text="Subscribe to our newsletter"/>
          <Button bgColor={brownButton}
            text="Current Vendors"/>
        </div>
      </div>
      <div>
        <NavBar/>
      </div>
    </div>
  );
}

export default Header;
