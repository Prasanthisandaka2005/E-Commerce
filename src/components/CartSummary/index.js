// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      console.log(cartList)
      const totalCost = cartList.reduce(
        (sum, item) => sum + item.quantity * item.price,
        0,
      )

      return (
        <div>
          <div className="cart-product-title-brand-container">
            <h1 className="cart-product-title">Order Total:</h1>
            <h1 className="cart-total-price">RS {totalCost}</h1>
          </div>
          <p className="cart-product-brand">{cartList.length} Items in cart</p>
          <button type="button" className="shop-now-btn">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
