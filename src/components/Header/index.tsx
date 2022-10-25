import React from 'react'

import { CartContent, Container, ContentLogo, Logo, LogoTitle } from './styled'

const Header:React.FC = () => {
  return (
    <Container>
      <ContentLogo>
        <Logo>MKS</Logo> <LogoTitle>Sistemas</LogoTitle>
      </ContentLogo>
      <CartContent>
        cart
        0
      </CartContent>
    </Container>
  )
}

export default Header