import React from 'react';
import './ButtonsCard.css';

function ButtonsCard({ people, currentPerson, onPersonChange }) {
  // PATTERN: Filter out current person from button options
  const otherPeople = people.filter(p => p.id !== currentPerson);
  
  return (
    <div className="buttons-card">
      <div className="buttons-container">
        {otherPeople.map(person => (
          <button
            key={person.id}
            className="person-button"
            onClick={() => onPersonChange(person.id)}
            aria-label={`Switch to ${person.name}`}
          >
            {person.greeting}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ButtonsCard;