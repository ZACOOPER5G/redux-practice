import { createSlice, nanoid } from '@reduxjs/toolkit'

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

const postsSlice: any = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer (state, action) {
                state.push(action.payload)
            },
            // @ts-expect-error
            prepare (title: any, content: any, userId: any) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        userId,
                    }
                }
            }
        }
    }
});

export const selectAllPosts = (state: any) => {
    return state.posts;
};

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;