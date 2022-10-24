import { createSlice, nanoid } from '@reduxjs/toolkit';
import { sub } from 'date-fns';

// interface postsStateProps {
//     id: string
//     title: string
//     content: string
// }

const initialState = [
    {
        id: '1',
        title: 'Learning Redux Toolkit',
        content: 'I\'ve heard good things',
        date: sub(new Date(), {minutes: 10}).toISOString()
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
                        date: new Date().toISOString(),
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