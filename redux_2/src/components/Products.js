import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import { add, remove } from '../store/cartSlice';

function Products() {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([])
    const callProductsAPI = async() =>{
        const dataJson = await fetch('https://fakestoreapi.com/products');
        const data = await dataJson.json();
        // console.log(data[0])
        setProducts(data)
    }
    useEffect(()=>{
        callProductsAPI();
    }, [])

    const handleAdd = (product) =>{
        /* dispatch(action.type, payload ) */
        // dispatch({type:'cart/add', payload: product})
        dispatch(add(product))
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
  )
}

export default Products