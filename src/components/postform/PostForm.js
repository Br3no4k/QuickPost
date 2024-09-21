import React from "react";
import { PostList } from "../postlist/PostList";
import {
  FormContent,
  Form,
  FormTitle,
  FormText,
  FormUrl,
  Btn,
} from "./StyledPostForm";

export class PostForm extends React.Component {
  state = {
    post: [],
    title: '',
    content: '',
    imageUrl: ''
  }

  onChangeTitle = (event) => {
    this.setState({ title: event.target.value });
  };

  onChangeContent = (event) => {
    this.setState({ content: event.target.value });
  };

  onChangeImageUrl = (event) => {
    this.setState({ imageUrl: event.target.value });
  };

  addPost = () => {
    let title = this.state.title;
    let content = this.state.content;
    let imageUrl = this.state.imageUrl;
    let id = Math.random();

    let post = [
      ...this.state.post,
      { title, content, imageUrl, id },
    ];
    this.setState({ post: post });

    this.setState({
      title: "",
      content: "",
      imageUrl: ""
    });
  };

  deletePost = (id) => {
    const updatedPosts = this.state.post.filter((post) => post.id !== id);
    this.setState({ post: updatedPosts });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.addPost();
  }

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <FormContent>
            <FormTitle 
              type="text" 
              name="title"
              value={this.state.title}
              onChange={this.onChangeTitle}
              placeholder="Digite seu titulo" 
              maxLength={50}
            />

            <FormText 
              type="text" 
              name="content"
              value={this.state.content}
              onChange={this.onChangeContent}
              placeholder="Descrição do post" 
            />

            <FormUrl 
              type="text" 
              name="imageUrl"
              value={this.state.imageUrl}
              onChange={this.onChangeImageUrl}
              placeholder="Url da imagem (opicional)" 
            />
          </FormContent>
          <Btn type="submit">Postar</Btn>
        </Form>

        <PostList posts={this.state.post} onDeletePost={this.deletePost} />
      </>
    );
  }
}