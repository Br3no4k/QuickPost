import styled from 'styled-components';

export const PostContainer = styled.div`
  display: flex;
  align-items: flex-start; /* Alinha a imagem e o conteúdo no início */
  margin: 20px 0; /* Espaçamento entre postagens */
`;

export const PostImage = styled.img`
  max-width: 350px; /* Ajuste o tamanho da imagem conforme necessário */
  margin-right: 30px; /* Espaçamento entre a imagem e o texto */
`;

export const PostContent = styled.div`
  flex: 1; /* O conteúdo ocupará o espaço restante */
`;