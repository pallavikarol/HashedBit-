import React, { useState } from 'react';
import './App.css';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const validateInputs = () => {
    if (num1 === '' || num2 === '') {
      setResult('Please enter both numbers');
      return false;
    }
    return true;
  };

  const handleAddition = () => {
    if (validateInputs()) {
      setResult(parseFloat(num1) + parseFloat(num2));
    }
  };

  const handleSubtraction = () => {
    if (validateInputs()) {
      setResult(parseFloat(num1) - parseFloat(num2));
    }
  };

  const handleMultiply = () => {
    if (validateInputs()) {
      setResult(parseFloat(num1) * parseFloat(num2));
    }
  };

  const handleDivide = () => {
    if (validateInputs()) {
      if (parseFloat(num2) === 0) {
        setResult('Cannot divide by zero');
        return;
      }
      setResult(parseFloat(num1) / parseFloat(num2));
    }
  };

  return (
    <div className="container">
      <h2>Calculator</h2>
      <input
        type="number"
        placeholder="Enter First Number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      /><br />
      <input
        type="number"
        placeholder="Enter Second Number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      /><br />
      <div className="buttons">
        <button onClick={handleAddition}>Add</button>
        <button onClick={handleSubtraction}>Subtract</button>
        <button onClick={handleMultiply}>Multiply</button>
        <button onClick={handleDivide}>Divide</button>
      </div>
      <p><strong>Result:</strong> {result !== null ? result : ''}</p>
    </div>
  );
}

export default Calculator;