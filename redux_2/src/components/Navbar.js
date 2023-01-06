import React from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Navbar() {
  const products = useSelector((state) => {
    return state.cart
  });
  return (
    <div>
        <NavLink to="/">
            Home
        </NavLink>
        <NavLink  to="/checkout">
            Checkout
        </NavLink>
        <span>Cart Value: {products.length}</span>
    </div>
  )
}

export default Navbar

/* redux-core 

  usecontext + useReducer

  useContext + useReducer + react query api

*/