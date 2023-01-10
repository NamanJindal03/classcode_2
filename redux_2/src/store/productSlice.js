
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// const IDLE = 'idle';
const productSlice = createSlice({
name: 'product',
    initialState: {
        data: [],
        status: 'idle'
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                // state.data = action.payload,
                // state.status = IDLE
                return {data: action.payload, status: 'idle'}
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.status = 'error'
            })
    }
})
/* cart/add 
    cart/remove
*/
export const getProducts = createAsyncThunk('product/plo', async () => {
    const dataJson = await fetch('https://fakestoreapi.com/products');
    const data = await dataJson.json();
    return data;
})
/* 
    3 states -> fulfilled
    rejected 
    pending 
*/


export default productSlice.reducer;
/* default -> can import using any nmae */