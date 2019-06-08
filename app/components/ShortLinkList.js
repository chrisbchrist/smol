import React from 'react';
import ShortLink from './ShortLink';

const ShortLinkList = (props) => {
  return (
    <ul className="shortener__list">
      {props.links.map((link, i) => <ShortLink key={"link" + i} link={link}/>)}
    </ul>
  )
}

export default ShortLinkList;