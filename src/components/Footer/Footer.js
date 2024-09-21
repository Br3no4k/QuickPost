import React from 'react';
import { FooterContainer, FooterText } from './FooterStyles';

export class Footer extends React.Component {
  render() {
    return (
      <FooterContainer>
        <FooterText>@ QuickPost. Todos os direitos reservados.</FooterText>
      </FooterContainer>
    );
  }
}