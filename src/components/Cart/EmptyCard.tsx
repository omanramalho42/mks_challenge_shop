import React from 'react'

import { CgShoppingCart } from 'react-icons/cg'

const EmptyCard = () => {
  
  return (
    <div style={ { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' } }>
      <CgShoppingCart size={60} color='#FFF' />
      <h1 style={{ fontSize: '1.5em', fontWeight: 'normal', color: '#FFF', margin: 5 }}>
        Cart Empty
      </h1>
    </div>
  )
}

export default EmptyCard