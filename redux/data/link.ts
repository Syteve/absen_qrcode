import { createSlice } from "@reduxjs/toolkit";

const link = createSlice({
    name: 'link',
    initialState: {
        value: ''
    },
    reducers: {
        setLink: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setLink } = link.actions
export default link.reducer