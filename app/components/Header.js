import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {
  return (
          <div className="hero">
          <div className=" content-wrapper animated fadeIn">

           <h1 className="tagline">
              The internet is easy now.
          </h1>
          <p className="tagline-text">
            Shorter URL's, a peaceful and flourishing world.
          </p>
          
          <a className="btn">
            <FontAwesomeIcon icon={faUserPlus}/> 
            Sign Up
          </a>
        </div>
        </div>
    )
}

export default Header;