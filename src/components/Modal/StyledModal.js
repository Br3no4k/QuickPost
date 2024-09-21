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
`;

export const ModalContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  max-width: 600px; /* Limite de largura para o modal */
  width: 90%; /* 90% da largura da tela */
  max-height: 80vh; /* Limite de altura */
  overflow-y: auto; /* Adiciona rolagem se o conteúdo ultrapassar a altura */
  overflow-x: hidden; /* Impede rolagem horizontal */
  word-wrap: break-word; /* Quebra palavras longas */
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  position: absolute;
  top: 10px;
  right: 10px;
`;