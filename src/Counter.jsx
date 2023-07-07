import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [counterName, setCounterName] = useState('');
  const [setNameMode, setSetNameMode] = useState(false);
  const [setValueMode, setSetValueMode] = useState(false);
  const [startValue, setStartValue] = useState('');

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const setValue = () => {
    if (startValue !== '') {
      setCount(Number(startValue));
      setSetValueMode(false);
      setStartValue('');
    }
  };

  const handleCounterNameChange = (event) => {
    setCounterName(event.target.value);
  };

  const handleStartValueChange = (event) => {
    setStartValue(event.target.value);
  };

  return (
    <div className="counter-container">
      <div className="counter-header">
        <div className="counter-name">
          {counterName ? counterName : 'Counter'}
        </div>
      </div>
      <div className="counter-value">{count}</div>
      <div className="counter-controls">
        <button className="control-button" onClick={increment}>
          +
        </button>
        <button className="control-button" onClick={decrement}>
          -
        </button>
      </div>
      {!setNameMode && !setValueMode && (
        <div className="counter-options">
          <button className="option-button" onClick={() => setSetNameMode(true)}>
            Set Name
          </button>
          <button className="option-button" onClick={() => setSetValueMode(true)}>
            Set Value
          </button>
        </div>
      )}
      {setNameMode && (
        <div className="counter-input">
          <input
            type="text"
            placeholder="Counter Name"
            value={counterName}
            onChange={handleCounterNameChange}
          />
          <button className="input-button" onClick={() => setSetNameMode(false)}>
            Save
          </button>
        </div>
      )}
      {setValueMode && (
        <div className="counter-input">
          <input
            type="number"
            placeholder="Starting Value"
            value={startValue}
            onChange={handleStartValueChange}
          />
          <button className="input-button" onClick={setValue}>
            Set
          </button>
          <button className="input-button" onClick={() => setSetValueMode(false)}>
            Cancel
          </button>
        </div>
      )}
      <div className="counter-footer">
        <button className="reset-button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
