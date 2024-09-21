import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`
;

export const ModalContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  max-width: 600px; 
  width: 90%; 
  max-height: 80vh; 
  overflow-y: auto; 
  overflow-x: hidden; 
  word-wrap: break-word; 

`;

export const CloseButton =  styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  position: absolute;
  top: 10px;
  right: 10px;


`;