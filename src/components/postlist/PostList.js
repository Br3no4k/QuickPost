import React from "react";
import { PostItem } from "../postitem/PostItem";
import { PostContainer } from './StyledPostList';
import Modal from '../Modal/Modal';

export class PostList extends React.Component {
  state = {
    isModalOpen: false,
    modalContent: '',
  };

  openModal = (content) => {
    this.setState({ isModalOpen: true, modalContent: content });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false, modalContent: '' });
  };

  render() {
    const { posts, onDeletePost } = this.props;
    const { isModalOpen, modalContent } = this.state;

    return (
      <>
        {posts.length > 0 ? (
          posts.map((post) => (
            <PostContainer key={post.id}>
              <PostItem 
                title={post.title}
                content={post.content.length > 300 ? post.content.slice(0, 300) + "..." : post.content}
                imageUrl={post.imageUrl}
              />
              {post.content.length > 300 && (
                <button onClick={() => this.openModal(post.content)}>Ver mais</button>
              )}
              <button onClick={() => onDeletePost(post.id)}>Deletar</button>
            </PostContainer>
          ))
        ) : (
          <p>Nenhum post disponível.</p>
        )}

        <Modal 
          isOpen={isModalOpen} 
          onClose={this.closeModal} 
          content={modalContent} 
        />
      </>
    );
  }
}