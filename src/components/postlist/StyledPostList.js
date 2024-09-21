import styled from 'styled-components';

export const PostContainer = styled.div`
  display: flex;
  justify-content: space-between; /* Ajuste para que o conteúdo não empurre para a direita */
  align-items: flex-start; /* Alinha os itens ao topo */
  margin-bottom: 20px; /* Espaçamento entre os posts */
  max-width: 100%; /* Impede que o container empurre o layout */
`;

