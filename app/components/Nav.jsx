import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

const Nav = (props) => {
  return (
    <div className="nav animated slideInDown">
      <h2 className="title"> <FontAwesomeIcon icon={faLink} />smol</h2>
    </div>
  )
}

export default Nav;