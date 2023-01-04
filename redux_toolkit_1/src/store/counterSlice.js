/* 
    we get a createSlice from the redux toolkit and this createSlice helps in generating both action and reducer
*/
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increament(state, action) {
            /* redux toolkit relaxation */
            // state = state+ action.payload;
            // return state
            return state + action.payload;

        },
        decreament(state, action){
            return state - action.payload;
        }
    }
})
export const {increament, decreament} = counterSlice.actions;
export default counterSlice.reducer;