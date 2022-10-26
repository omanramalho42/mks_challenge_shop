import React from 'react'
import EmptyCard from '../Cart/EmptyCard';
import { 
  Container,
  ContainerHeader,
  Title,
  Button,
  ListProducts,
  ImageProduct,
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
  ContentBody,
  ButtonAction,
  Separator
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
            <Close 
              size={38} 
              fontSize={2}
              onClick={closeSidebar}
            >
              x
            </Close>
          </ContainerHeader>

          <ListProducts>
          
            {['1'].map((i: any, idx) => i.length > 0 ? (
              <ItemProduct key={idx}>
                <div style={{ position: 'absolute', left: 435, top: 200 }}>
                  <Close 
                    size={22}
                    fontSize={1}
                    onClick={() => {}}
                  > x </Close>
                </div>
                <ImageProduct 
                  src={'data:image/jpeg;base64,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CAU'} 
                  alt='data/image_product'
                  width='42'
                  height='42' 
                />
                <Description>lorem osum dolar usbmi</Description>
                <div style={{ display: 'flex' ,flexDirection: 'column', marginBottom: '10px'}}>
                  <label htmlFor="" style={{ fontSize: '8px', color: '#000', fontWeight: 400 }}>Qtd:</label>
                  <ContainerActions>
                    <ButtonAction>-</ButtonAction>
                    <Separator />
                    <Quantity>2</Quantity>
                    <Separator />
                    <ButtonAction>+</ButtonAction>
                  </ContainerActions>
                </div>
                <Price>R$399</Price>
              </ItemProduct>
            ) : ( 
              <EmptyCard /> 
            ))}
          
          </ListProducts>

        </ContentBody>

        <ContentAmount>
          <AmountTitle>total</AmountTitle>
          <Amount>R$789</Amount>
        </ContentAmount>
        
        <ListFooter>
          <Button>
            Finalizar compra
          </Button>
        </ListFooter>
        
      </Container>
  </>
  )
}

export default Sidebar