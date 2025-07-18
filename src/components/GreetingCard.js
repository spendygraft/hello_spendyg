import React, { useState } from 'react';
import './GreetingCard.css';

function GreetingCard({ person }) {
  // PATTERN: Loading state for images
  const [imageLoaded, setImageLoaded] = useState(false);
  
  if (!person) {
    return <div className="greeting-card">Loading...</div>;
  }
  
  return (
    <div className="greeting-card">
      <h2 className="greeting-text">{person.greeting}</h2>
      <div className="image-container">
        <img 
          src={person.image}
          alt={`${person.name}'s profile`}
          className={`person-image ${imageLoaded ? 'loaded' : 'loading'}`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageLoaded(false)}
        />
      </div>
    </div>
  );
}

export default GreetingCard;