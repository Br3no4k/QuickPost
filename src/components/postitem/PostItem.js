import React from "react";

export class PostItem extends React.Component {
  render() {
    const { imageUrl, title, content } = this.props;
    return (
      <>
        <div>
        <img src={imageUrl || 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2ZwNTlyN3ZiOTNpb3p4amRmcHBwd3VibXFkb3Q5NTluOWp5NW5qZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/25LbA5gcDNM5N7sHHy/giphy.gif'} alt="Post"/>
        </div>
        <div>
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
      </>
    );
  }
}
