import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = {
    token: string;
};

const initialState: State = {
    token: JSON.parse(localStorage.getItem('token')|| '[]')
};

export const authSlice = createSlice({
    name: "token",
    initialState,
    reducers: {
        set: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
            localStorage.setItem('token', JSON.stringify(action.payload));
        },
        logout: (state, action: PayloadAction<string>) => {
            state.token = ''
            localStorage.removeItem('token'), JSON.stringify(action.payload)
        }
    }
});

export const { reducer: Reducer } = authSlice;
export const { set, logout } = authSlice.actions;
export default authSlice.reducer