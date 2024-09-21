import React from 'react';
import { ModalOverlay, ModalContainer, CloseButton } from './StyledModal';

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}> {/* Evita que o clique no container feche o modal */}
        <CloseButton onClick={onClose}>×</CloseButton>
        <div>{content}</div>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;