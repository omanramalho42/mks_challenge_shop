import React from 'react'
import { Container } from './styled'

const Sidebar:React.FC = () => {
  return (
    <Container>
      <h1>carrinho de compras</h1>
      <span>x</span>


      <div>
        <h1>title</h1>
      </div>

      <div>
        <h1>title</h1>
      </div>

      <h3>total</h3>
      <span>r$789</span>

      <button>FINALIZAR COMPRA</button>
    </Container>
  )
}

export default Sidebar