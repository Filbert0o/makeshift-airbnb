import React from 'react';
import { Link } from 'react-router';
import BackButton from './BackButton';

const Layout = (props) => {
 return(
  <div className="top-bar">
    <div className="top-bar-left">
      <ul className="menu">
        <li className="menu-text">Tim's AirBnB</li>
        <li><input type="search" placeholder="Search"/></li>
        <li><button type="button" className="button">Search</button></li>
      </ul>
    </div>
    <div className="dropdown top-bar-right">
      <ul className="dropdown menu" data-dropdown-menu>
        <li>
          <a href="#">Become a Host</a>
          {/* <ul className="menu vertical" data-dropdown-menu>
            <li><a href="#">List your Home</a></li>
            <li><a href="#">Host Quesions</a></li>
          </ul> */}
        </li>
        <li><a href="#">Saved</a></li>
        <li><a href="#">Trips</a></li>
        <li><a href="#">Messages</a></li>
        <li><a href="#">Help</a></li>
      </ul>
    </div>
  </div>
 )
}

export default Layout;
