import { createSlice } from '@reduxjs/toolkit'
//creatAsyncThunk next to do

const initialState = {
    goals: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

export const goalSlice = createSlice({
    name: 'goal',
    initialState,
    deducers: {
        reset: (state) => initialState
    }
})

export const {reset} = goalSlice.actions
export default goalSlice.reducer