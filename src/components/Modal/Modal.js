import React from 'react';
import { ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody } from './StyledModal';

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <h2>Detalhes do Post</h2>
          <ModalCloseButton onClick={onClose}>X</ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          <p>{content}</p>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;