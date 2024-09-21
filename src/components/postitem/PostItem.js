import React from "react";
import { PostContainer, PostImage, PostContent , Button } from './StyledPostItem';

export class PostItem extends React.Component {
  render() {
    const { imageUrl, title, content, onDelete } = this.props; 
    return (
      <PostContainer>
        <PostImage 
          src={imageUrl || 'https://media4.giphy.com/media/3BwNcKOTAVWBa/200.webp?cid=ecf05e47xig6r112mar261u7a15c91w2ydgf4n594nrbk2oi&ep=v1_gifs_search&rid=200.webp&ct=g'} 
          alt="Pokemon Lucario comendo rosas"
        />
        <PostContent>
          <h3>{title}</h3>
          <p>{content}</p>
          <Button onClick={onDelete} style={{ marginTop: '10px' }}>Deletar</Button> 
        </PostContent>
      </PostContainer>
    );
  }
}