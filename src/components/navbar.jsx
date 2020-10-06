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
          <li className='nav-item active mx-3 green-underline'>
            Hulk-Huffman Compressor
          </li>
        </ul>
      </Link>
      <ul className='navbar-nav d-flex flex-row ml-auto'>
        <li className='nav-item font-weight-bold mx-3'>
          <Link className='nav-link' to='/how-it-works'>
            <i className='fas fa-cogs m-1' style={{ fontSize: "15px" }}></i>
            How it works <span className='sr-only'>(current)</span>
          </Link>
        </li>
        <li className='nav-item font-weight-bold mx-3'>
          <Link className='nav-link' to='/about'>
            <i
              className='far fa-address-card m-1'
              style={{ fontSize: "15px" }}></i>
            About <span className='sr-only'>(current)</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
