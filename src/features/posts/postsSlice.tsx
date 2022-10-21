import { createSlice } from '@reduxjs/toolkit'

// interface postsStateProps {
//     id: string
//     title: string
//     content: string
// }

const initialState = [
    {
        id: '1',
        title: 'Learning Redux Toolkit',
        content: 'I\'ve heard good things'
    }
];

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded(state, action) {
            state.push(action.payload)
        }
    }
});

export const selectAllPosts = (state: any) => {
    return state.posts;
};

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;