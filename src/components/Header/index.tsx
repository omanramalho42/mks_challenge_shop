import React, { useState } from 'react'

import { BsBagCheck } from 'react-icons/bs'
import { FaShoppingCart } from 'react-icons/fa'
import Sidebar from '../Sidebar'

import { CartContent, Container, ContentLogo, Logo, LogoTitle } from './styled'

const Header:React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <Container>
      <ContentLogo>
        <Logo>MKS</Logo> <LogoTitle>Sistemas</LogoTitle>
      </ContentLogo>
      <CartContent onClick={() => setShowMenu((value) => !value)}>
        <FaShoppingCart />
        <p style={{ cursor: 'pointer' }}>0</p>
      </CartContent>
      {showMenu && (
        <Sidebar />
      )}
    </Container>
  )
}

export default Header