import styled from "styled-components";
import React, { useState } from 'react';

const Toggle = styled.div`
  display: flex;
  flex-direction: column;
  background-color: hsl(223, 19%, 93%);
  padding: 10px;
  border-radius: 3px;
  margin-right: 10px;
  color: hsl(238, 40%, 52%);
  font-weight: bold;

  @media (max-width: 480px) {
    flex-direction: row;
     align-self: flex-start;
     align-items: center;
     padding: 5px 10px;
  }
`

const CounterButton = styled.button`
  padding: 0;
  border: none;
  background: none; 
  padding: 5px;
  color: hsl(238, 40%, 52%);

  @media (max-width: 480px) {
     padding: 5px 10px;
  }

`

const Counter = ({score}) => {

  const [count, setCount] = useState(score)

    const handleIncrement = () => {
      setCount(prevCount => prevCount + 1)
    };
  
    const handleDecrement = () => {
      setCount(prevCount => prevCount - 1)
    };

  return (
    <Toggle>
      <CounterButton onClick={handleIncrement}>
        +
      </CounterButton>
      <div data-testid='count'>{count}</div>
      <CounterButton disabled={count <= 0 && true} onClick={handleDecrement}>
        -
      </CounterButton>
    </Toggle>
  )
}

export default Counter