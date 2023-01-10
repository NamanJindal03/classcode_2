import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../store/cartSlice';
import { getProducts } from '../store/productSlice';

function Products() {
    const dispatch = useDispatch();
    const {data: products, status} = useSelector((state)=> state.product )
    // const [products, setProducts] = useState([])
    const callProductsAPI = () =>{
        dispatch(getProducts())
    }
    useEffect(()=>{
        callProductsAPI();
    }, [])

    const handleAdd = (product) =>{
        /* dispatch(action.type, payload ) */
        // dispatch({type:'cart/add', payload: product})
        dispatch(add(product))
    }
    if(status === 'loading'){
        return 'loading'
    }
    if(status === 'error'){
        return 'error in fetching products'
    }

  return (
    <div className='productsWrapper'>
        {products.map((product, id)=>{
           return( 
            <div className='card' key={product.id}>
                <h4>{product.title}</h4>
                {/* <p>{product.description}</p> */}
                <p>{product.category}</p>
                <button className='btn' onClick={()=> handleAdd(product)}>Add to Cart</button>
            </div>
           )
        })}
    </div>
    /* component -> reloading ->  */
    /*  */
  )
}

export default Products