import React from "react";
import { Link } from "react-router-dom";

import hulkLogo from "./../assets/hulk-icon.png";

function Navbar() {
  return (
    <nav className='navbar navbar-light bg-light'>
      <Link className='navbar-brand d-flex flex-row' to='/home'>
        <img
          src={hulkLogo}
          className='d-inline-block align-top hulk-logo'
          alt='Main App Hulk Logo'
        />
        <ul className='navbar-nav'>
          <li class='nav-item active mx-3'>
            <Link class='nav-link' to='/home'>
              Hulk-Huffman Compressor
            </Link>
          </li>
        </ul>
      </Link>
      <ul class='navbar-nav ml-auto'>
        <li class='nav-item active mx-3'>
          <Link class='nav-link' to='/about'>
            About <span class='sr-only'>(current)</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
