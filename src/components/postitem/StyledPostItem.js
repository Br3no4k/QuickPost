import styled from 'styled-components';

export const PostContainer = styled.div`
  display: flex;
  justify-content: space-aroud;
  align-items: flex-start;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 5px;
  background-color: #f9f9f9;
  max-width: 100%;
`;

export const PostImage = styled.img`
  max-width: 40%; /* Ajuste a largura da imagem */
  height: auto; /* Mantém a proporção da imagem */
  margin-right: 5px; /* Espaço entre a imagem e os itens de texto */
`;

export const PostContent = styled.div`
  flex: 1;
  word-wrap: break-word;
  overflow-wrap: break-word;
  max-width: 350px;

  p {
    margin: 0;
    line-height: 1.5;
  }

  button {
    display: inline;
    margin-left: 20px; /* Espaço entre o texto e o botão */
    background-color: transparent;
    border: none;
    color: blue;
    cursor: pointer;
  }
`;
