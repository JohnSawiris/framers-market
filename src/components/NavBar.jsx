import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {

  return(
    <nav className="center">
      <style global jsx>
        {`
         .anchor, a {
            margin: .5rem;
            padding: 1rem;
            color: #5f3812;
            transition:  all .4s ease-in-out;
          }
          .anchor:hover, a:hover {
            text-decoration: none;
            background-color: #5f3812;
            color: #fff;
          }
          `}
      </style>
      <style  jsx>
        {`
          .center {
            margin: 6rem auto 3rem;
            width: 80%;
            text-align: center;
          }
          `}
      </style>

      <Link className="anchor" to="/">Home</Link>
    <Link activeClassName="anchor" to="/events">Events</Link>
      <Link className="anchor" to="/events">Community</Link>
      <a href="#">Programs & Events</a>
      <a href="#">About Us</a>
      <a href="#">Shop</a>
    </nav>
  );
}

export default NavBar;
