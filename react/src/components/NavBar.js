import React from 'react';
import { Link } from 'react-router';
import BackButton from './BackButton';
import PlacesForm from './PlacesForm';
import GooglePlaces from "../containers/GooglePlaces"

const NavBar = props => {


  return(
    <div className="nav-bar-pad">
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Tim's AirBnB</li>
            <li>
              Welcome
            </li>
          </ul>
        </div>
        <div className="dropdown top-bar-right">
          <ul className="dropdown menu" data-dropdown-menu>
            <li><Link to='/host'>Become a Host</Link></li>
            <li><Link to='/saved_places'>Saved</Link></li>
            <li><Link to='/trips'>Trips</Link></li>
            <li><Link to='/messages'>Messages</Link></li>
            <li><Link to='/help'>Help</Link></li>
          </ul>
        </div>
      </div>
      <div>{props.children}</div>
    </div>
  )
}

export default NavBar;
