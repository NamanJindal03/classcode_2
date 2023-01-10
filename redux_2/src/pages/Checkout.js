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


/* 
  smaple project/ personal

  company level -> 
    frotned backend -> 

    backend -> external librarires -> 
      db schema structuring -> 
    
      Db -> 5 values, name, age, gener
    api -> put 
      {
        payload:
      }
    patch{
      age: 20,
      id: 
    }


    backend -> 

      system state pure -> 
        DB -> 

        Frontend -> {
          id: 23hrhfufjew

        }


    frotnend -> 10 combinations ->
        payload validator -> 

        standard structure -> 


        backend -> products -> 
          object ->
          function 

          api expoe ->
          
          frotnend {

            product:[],
            requestId: 10,
            ecomStoreName: 'rhfijfif'
          }


          backend {
            product: {}
          }



          product.title

        if(typeof === 'object'){
          
        }
        else{
          res.status(400).json({message: 'message went wrong'})
        }

        frotnend -> css html 
          tedious -> 


        backend -> 40-50 fields 
          data engineer 

          generic backend engineer -> 

        
          Sunday: 11:00 am -> 2-3 assigment -> 
          Redux -> 2 
          React -> 1 

          

*/
