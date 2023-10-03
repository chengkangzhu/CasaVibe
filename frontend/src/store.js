import { createSlice, configureStore  } from "@reduxjs/toolkit";

const productInitialState = {
    pdp: {
        testing: "cheng kang2kd"
    },
}

export const productSlice = createSlice({
    name: "product",
    initialState :productInitialState,
    reducers :{
        updatePdp : (state,action)=>{
            state.pdp =  action.payload
        }
    },
})

export const { updatePdp } = productSlice.actions
export default productSlice.reducer

