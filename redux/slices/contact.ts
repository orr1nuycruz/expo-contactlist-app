
import { createAsyncThunk, createSlice} from "@reduxjs/toolkit"

export const contact = createAsyncThunk(
    "user/contact",

    async (params: any) =>{

    }
);

const contactState = {
    data: {},
    error: false,
    success: false,
    pending: false
}

export const contactSlice = createSlice({
    name: "contact",
    initialState: contactState,
    reducers: {
        storeContactState(state, action){
            state.data = action.payload;
        }
    }
});

export const selectContact = (state : any) => state.contact

export default contactSlice.reducer;