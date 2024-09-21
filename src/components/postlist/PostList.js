import React from "react";
import { PostItem } from "../postitem/PostItem";
import { PostContainer } from './StyledPostList'; // Importando o styled component

export class PostList extends React.Component {
  render() {
    const { posts, onDeletePost } = this.props; // Acessando posts e onDeletePost via props

    return (
      <>
        {posts.length > 0 ? (
          posts.map((post) => (
            <PostContainer key={post.id}>
              <PostItem 
                title={post.title}
                content={post.content}
                imageUrl={post.imageUrl}
              />
              <button onClick={() => onDeletePost(post.id)}>Deletar</button>
            </PostContainer>
          ))
        ) : (
          <p>Nenhum post disponível.</p> // Exibe mensagem se não houver posts
        )}
      </>
    );
  }
}