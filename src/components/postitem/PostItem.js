import React from "react";

export class PostItem extends React.Component {
  render() {
    const { imageUrl, title, content } = this.props;
    return (
      <>
        <div>
        <img src={imageUrl || ''
        <div>
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
      </>
    );
  }
}
