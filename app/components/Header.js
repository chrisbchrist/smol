import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';


const Header = (props) => {
  
  const handleClick = () => {
    alert("Coming soon!");
  }
  
  return (
          <div className="hero">
          <img className="hero__img" src="https://res.cloudinary.com/dgeb3iekh/image/upload/v1559963024/undraw_link_shortener_mvf6_ddgcv8.svg"/>
          <div className=" content-wrapper animated fadeIn">

           <h1 className="tagline">
              The internet is easy now.
          </h1>
          <p className="tagline-text">
            Shorter URL's, a peaceful and flourishing world.
          </p>
          
          <a className="btn" onClick={handleClick}>
            <FontAwesomeIcon icon={faUserPlus}/> 
            Sign Up
          </a>
        </div>
        </div>
    )
}

export default Header;