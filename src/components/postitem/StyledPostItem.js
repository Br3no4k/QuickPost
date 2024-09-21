import styled from 'styled-components';

export const PostContainer = styled.div`
  display: flex;
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid;
  border-radius: 10px;
  width: 94%;
;`

export const PostImage = styled.img`
  width: 40%;
  img{
    width: 100%;
    height: auto;
  }
`;


export const PostContent = styled.div`
 width: 60%;
  padding: 14px;
   verflow-wrap: break-word;
  max-width: 100px;
`;

export const Button = styled.button`
  background-color: #853041;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 0, 0, 1);
  }

 &:active {
    background-color: rgba(200, 0, 0, 1);
  }

 &:disabled {
    background-color: rgba(255, 0, 0, 0.4);
    cursor: not-allowed;
  }
`;
