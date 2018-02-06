import React from 'react';

function NavBar() {
  return(
    <nav className="center">
      <style jsx>
        {`
          .center {
            margin: 6rem auto 3rem;
            width: 80%;
            text-align: center;
          }
          a {
            margin: .5rem;
            padding: 1rem;
            color: #5f3812;
            transition:  all .4s ease-in-out;
          }
          a:hover {
            text-decoration: none;
            background-color: #5f3812;
            color: #fff;
          }
          `}
      </style>
      <a href="#">Markets</a>
      <a href="#">Vendors</a>
      <a href="#">Community</a>
      <a href="#">Programs & Events</a>
      <a href="#">About Us</a>
      <a href="#">Shop</a>
    </nav>
  );
}

export default NavBar;
