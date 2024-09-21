import React from "react";
import { PostItem } from "../postitem/PostItem";

export class PostList extends React.Component {
  render() {
    const { posts, onDeletePost } = this.props; // Acessando posts e onDeletePost via props

    return (
      <>
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id}>
              <PostItem 
                title={post.title}
                content={post.content}
                imageUrl={post.imageUrl}
              />
              {/* Botão para deletar o post */}
              <button onClick={() => onDeletePost(post.id)}>Deletar</button>
            </div>
          ))
        ) : (
          <p>Nenhum post disponível.</p> // Exibe mensagem se não houver posts
        )}
      </>
    );
  }
} 