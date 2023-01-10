/* 

    is a combination of what two things? 

    2 export -> 
        actions
        reducers

        1,2,3,4,5
*/
import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers:{
        add(state, action){

            //check if the product exist in the state or not
            //if exists -> just add the qty field in the object
            //else append the object after creating one more field which is qty



            /* {type: 'cart/add', payload: {…}} */
            console.log(action) /*  */
            // return [...state, action.payload]
            state.push(action.payload)
        },
        remove(state, action){
            /* action.payload =3  */
            return state.filter((prod)=>{ return prod.id !== action.payload})
        }

    }
})
/* cart/add 
    cart/remove
*/

export const {add, remove} = cartSlice.actions;
export default cartSlice.reducer;
/* default -> can import using any nmae */