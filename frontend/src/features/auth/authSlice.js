import {createSlice} from '@reduxjs/toolkit'

//Get user from locaStorage
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user: user ? user : null,
    isError: false,
    isSucccess: false,
    isLoading: false,
    message: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSucccess = false
            state.isError = false
            state.message = ''
        }
    },
    extraReducers: () => {}
})

//that way we can use reset in a component to get the actions
export const {reset} = authSlice.actions
export default authSlice.reducer