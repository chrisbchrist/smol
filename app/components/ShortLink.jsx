import React, { useState, useRef, useCallback } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCut, faCheck } from '@fortawesome/free-solid-svg-icons';

const ShortLink = (props) => {
  const [copied, setCopied] = useState(false);
  const linkRef = useRef(null);
  
//   const copyToClipboard = (e) => {
//     console.log(linkRef.current);
       // Select will only work on input elements :(
//     linkRef.select();
//     document.execCommand('copy');
//     e.target.focus();
//   }
  
  const handleCopy = (e) => {
    e.preventDefault();
    setCopied(true);
    setTimeout(() => { setCopied(false) }, 3000);
  }
  
  return (
    <li className='shortener__link animated fadeIn'>
      <span className='shortener__original-url'>{props.link.original_url}</span>
      <a target='_blank' className='shortener__short-url' href={'/api/shorturl/' + props.link.short_url} ref={linkRef}>{window.location.href + 'api/shorturl/' + props.link.short_url}</a>
      <CopyToClipboard text={window.location.href + 'api/shorturl/' + props.link.short_url}>
        <button className={copied ? 'shortener__copy shortener__copied' : 'shortener__copy'} onClick={(e) => handleCopy(e)}>{copied ? 'Copied!' : 'Copy'}</button>
      </CopyToClipboard>
      
    </li>
  )
}

export default ShortLink;