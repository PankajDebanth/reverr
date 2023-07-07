import React, { useState } from 'react';
import Counter from './Counter';
import './Home.css';

const Home = () => {
  const [counters, setCounters] = useState([]);

  const addCounter = () => {
    setCounters([...counters, <Counter key={counters.length} />]);
  };

  const removeCounter = (index) => {
    const updatedCounters = [...counters];
    updatedCounters.splice(index, 1);
    setCounters(updatedCounters);
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Counting Web App</h1>
      {counters.map((counter, index) => (
        <div className="counter-wrapper" key={index}>
          {counter}
          <button className="close-button" onClick={() => removeCounter(index)}>
            &times;
          </button>
        </div>
      ))}
      <button className="add-counter-button" onClick={addCounter}>
        Add Counter
      </button>
    </div>
  );
};

export default Home;
