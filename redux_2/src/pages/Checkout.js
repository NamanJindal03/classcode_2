import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';

/* 
  useDispatch () -> remove functionality
  useSelector () -> subscribe -> cart -> all cart products will be displayed
*/
function Checkout() {
  const dispatch = useDispatch();
  const products = useSelector((state)=> state.cart)

  const handleRemove = (id) => {
    dispatch(remove(id))
  }
  return (
    <div>
      <h3>Checkout</h3>
      <div className='productsWrapper'>
        {products.map((product, id)=>{
           return( 
            <div className='card' key={product.id}>
                <h4>{product.title}</h4>
                {/* <p>{product.description}</p> */}
                <p>{product.category}</p>
                <button className='btn' onClick={()=> handleRemove(product.id)}>Remove</button>
            </div>
           )
        })}
    </div>
    </div>
  )
}

export default Checkout
