import React, { useState, useRef } from 'react';
import ShortLinkList from './ShortLinkList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareSquare, faClipboard, faCut } from '@fortawesome/free-solid-svg-icons';

const Shortener = (props) => {
  const [links, setLinks] = useState([]);
  const [input, setInput] = useState('');
  const [customPath, setCustomPath] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const inputRef = useRef(null);
  
  
  function addLink(url) {
    let newLinks = [...links, url];
    setLinks(newLinks);
  }
  
  function handleChange(e) {
    const value = e.target.value;
    setInput(value);
  }
  
  const shortenLink = () => {
    console.log(input);
    const url = input;
    const data = { 
      url: url
    };
    
    fetch('/api/shorturl/new', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
      if (response.error) {
        setError(true);
      } else {
        addLink(response);
        error && setError(false);
        setSuccess(true);
      }
        
    })
      .catch(err => console.log(err));

  }
  
  
  
  return (
      
        <div className="input-wrapper">
         <div className="shortener__form" action="api/shorturl/new" method="POST">
          <label className='shortener__label' for="url_input">Try it!</label>
          <input id="url_input" class="shortener__input" type="text" name="url" value={input} onChange={handleChange} placeholder="Tell me your longest URL"/>
          <button id="submit" class="shortener__submit" onClick={input.length > 3 ? shortenLink : undefined}>
            <FontAwesomeIcon icon={faShareSquare}/> Shorten
           </button>
         </div>
        {error && <div className='shortener__error'>Invalid URL, try again!</div>}
        <ShortLinkList links={links}/>
      </div>
  )
}

export default Shortener;