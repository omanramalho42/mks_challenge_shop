import React from 'react'
import { 
  Container,
  ContainerHeader,
  Title,
  Button,
  ListProducts,
  Image,
  ItemProduct,
  Description,
  ContainerActions,
  Quantity,
  Price,
  ContentAmount,
  Amount,
  Close,
  AmountTitle,
  ListFooter,
  ContentBody
} from './styled'

interface SidebarProps {
  showMenu?: boolean;
  closeSidebar: () => void;
}

const Sidebar= ({ showMenu = false, closeSidebar }: SidebarProps) => {
  return (
    <>
      <Container show={showMenu}>
        <ContentBody>
          <ContainerHeader>
            <Title>
              carrinho de compras
            </Title>
            <Close onClick={closeSidebar}>
              x
            </Close>
          </ContainerHeader>

          <ListProducts>
          
            {['1','2','3'].map((i, idx) => (
              <ItemProduct key={idx}>
                <Image />
                <Description></Description>
                <ContainerActions>
                  <Button></Button>
                  <Quantity></Quantity>
                  <Button></Button>
                </ContainerActions>
                <Price></Price>
              </ItemProduct>
            ))}
          
          </ListProducts>

        </ContentBody>

        <ContentAmount>
          <AmountTitle>total</AmountTitle>
          <Amount>R$789</Amount>
        </ContentAmount>
        
        <ListFooter>
          <Button>
            FINALIZAR COMPRA
          </Button>
        </ListFooter>
        
      </Container>
  </>
  )
}

export default Sidebar