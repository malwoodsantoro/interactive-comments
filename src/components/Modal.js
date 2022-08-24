import React from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: .5;
`

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`

const ModalMain = styled.div`
  z-index: 100;
  width: 20rem;
  background: white;
  position: relative;
  margin: 10rem auto;
  border-radius: 3px;
  max-width: 500px;
  padding: 2rem;

  > p {
    color: gray;
  }
`

const ModalHeader = styled.div`
  font-size: 1.5rem;
  text-decoration: bold; 
`

const ModalCloseButton = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  opacity: .3;
  cursor: pointer;
  border: none;
`
const ButtonYes = styled.button`
  background: hsl(238, 40%, 52%);
  border-radius: 3px;
  border: none;
  color: white;
  background-color: hsl(358, 79%, 66%);
  font-size: 1em;
  padding: 0.5em 1.5em;
  text-transform: uppercase;
  margin-right: 10px;
`;

const ButtonNo= styled.button`
  background-color: gray;
  border-radius: 3px;
  border: none;
  color: white;
  font-size: 1em;
  padding: 0.5em 1.5em;
  text-transform: uppercase;
`;


const Modal = ({ isShowing, hide, yesAction }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <ModalOverlay />
    <ModalWrapper>
      <ModalMain>
        <ModalHeader>
          Delete comment
        </ModalHeader>
        <p>
          Are you sure you want to delete this comment? This will remove the comment and can't be undone.
        </p>
        <ButtonYes onClick={hide}>No, cancel</ButtonYes>
        <ButtonNo onClick={yesAction}>Yes, delete</ButtonNo>
      </ModalMain>
    </ModalWrapper>
  </React.Fragment>, document.body
) : null;

export default Modal;