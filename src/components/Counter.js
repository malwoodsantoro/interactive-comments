import styled from "styled-components";
import React, { useRef } from 'react';

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

  const count = useRef(0)

    const handleIncrement = () => {
      count.current ++
    };
  
    const handleDecrement = () => {
      count.current --
    };

  return (
    <Toggle>
      <CounterButton onClick={handleIncrement}>
        +
      </CounterButton>
      <span>{count}</span>
      <CounterButton disabled={count <= 0 && true} onClick={handleDecrement}>
        -
      </CounterButton>
    </Toggle>
  )
}

export default Counter