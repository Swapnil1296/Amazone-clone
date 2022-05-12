import React from 'react'
import '../CSSfiles/Subtotal.css'
import CurrencyFormat from 'react-currency-format'

function Subtotal() {
  return (
      <div className='subtotal'>
          <CurrencyFormat>
              renderText= {(value) => (
                  <>
                      <p></p>
                  </>
              )}
          </CurrencyFormat>
      
    </div>
  )
}

export default Subtotal
