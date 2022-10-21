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

    }
});

export const selectAllPosts = (state: any) => {
    return state.posts;
};

export default postsSlice.reducer