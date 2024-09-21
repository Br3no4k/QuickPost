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
                content={
                  post.content.length > 200
                    ? (
                      <>
                        {post.content.slice(0, 200)}...
                        <button onClick={() => this.openModal(post.content)} style={{ marginLeft: '5px' }}>Ver mais</button>
                      </>
                    )
                    : post.content
                }
                imageUrl={post.imageUrl}
                onDelete={() => onDeletePost(post.id)} // Passando a função de deletar
              />
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