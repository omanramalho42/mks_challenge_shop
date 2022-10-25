import dynamic from 'next/dynamic'
import React, { useState, Suspense } from 'react'

import { TiShoppingCart } from 'react-icons/ti'

const DynamicSidebar = dynamic(() => import('../Sidebar'), {
  suspense: true,
})

import { 
  CartContent, 
  Container, 
  ContentLogo, 
  Logo, 
  LogoTitle 
} from './styled'

const Header:React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <Container>
      <ContentLogo>
        <Logo>MKS</Logo> <LogoTitle>Sistemas</LogoTitle>
      </ContentLogo>
      <CartContent onClick={() => setShowMenu((value) => !value)}>
        <TiShoppingCart />
        <p style={{ cursor: 'pointer' }}>0</p>
      </CartContent>
      <Suspense fallback={`Loading...`}>
        <DynamicSidebar
          showMenu={showMenu} 
          closeSidebar={() => setShowMenu((value) => !value)} 
        />
      </Suspense>
    </Container>
  )
}

export default Header