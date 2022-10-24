import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: '0',
        name: 'Johnny Bravo',
    },
    {
        id: '1',
        name: 'Ging Freecss'
    }
];

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    }
});

export const selectAllUsers = (state: any) => state.users;

export default usersSlice.reducer;