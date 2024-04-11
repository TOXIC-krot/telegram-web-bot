import {totalPrice} from '../../units/total-price'
import Button from '../button/Button'
import './Cart.css'

function Cart({cartItems, onCheckout}) {
  return (
  <div className='cart__container'>
    <p>Umumiy narx: {totalPrice(cartItems).toLocaleString("en-US", {style:'currency', currency:'USD',})}</p>    

    <Button title={`${cartItems.length === 0 ? "Buyurtma berish" : "To`lov"}`} disable={cartItems.length === 0 ? true : false} type={'checkout'} onClick={onCheckout  }/>
  </div>
  )
}

export default Cart
