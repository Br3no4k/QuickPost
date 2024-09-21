import React from "react";
import { ContainerImage } from "./StyledBanner";

export class Banner extends React.Component {
  render() {
    const { imageUrl } = this.props;
    return (
      <>
        <ContainerImage>
          <img src={imageUrl} alt="Imagem urso dançando" />
        </ContainerImage>
      </>
    );
  }
}