import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    username: '',
    password: ''
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        // setUsername: (state, action) => {
        //     console.log(action.type);
        //     state.username = action.payload;
        // },
        // setPassword: (state, action) => {
        //     state.password = action.payload;
        // }
        setFormState: (state, action) => {
            const { name, value } = action.payload;
            state[name] = value;
        }
    }
});

export const { setFormState } = loginSlice.actions;

export default loginSlice.reducer;