import React, { useState } from 'react';
import GreetingCard from './components/GreetingCard';
import ButtonsCard from './components/ButtonsCard';
import './App.css';

function App() {
  // PATTERN: Define data structure for people
  const people = [
    {
      id: 'spendyg',
      name: 'SPendyG',
      displayName: 'SPendyG',
      image: '/images/pics/spendyg.png',
      greeting: 'Hello SPendyG'
    },
    {
      id: 'jason',
      name: 'Jason',
      displayName: 'Jason', 
      image: '/images/pics/jason_neo_square.png',
      greeting: 'Hello Jason'
    },
    {
      id: 'jd',
      name: 'JD',
      displayName: 'JD',
      image: '/images/pics/jd_airforce.png',
      greeting: 'Hello JD'
    }
  ];
  
  // PATTERN: State management with useState
  const [currentPerson, setCurrentPerson] = useState('spendyg');
  
  // PATTERN: Derived state - find current person object
  const currentPersonData = people.find(p => p.id === currentPerson);
  
  // PATTERN: Event handler for person switching
  const handlePersonChange = (personId) => {
    setCurrentPerson(personId);
  };
  
  return (
    <div className="app">
      <div className="card-container">
        <GreetingCard person={currentPersonData} />
        <ButtonsCard 
          people={people} 
          currentPerson={currentPerson} 
          onPersonChange={handlePersonChange} 
        />
      </div>
    </div>
  );
}

export default App;