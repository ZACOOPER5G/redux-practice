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
        date: sub(new Date(), {minutes: 10}).toISOString(),
        reactions: {
            thumbsUp: 0,
            heart: 0,
        }
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
                        reactions: {
                            thumbsUp: 0,
                            heart: 0,
                        }
                    }
                }
            }
        },
        reactionAdded (state, action) {
            const { postId, reaction } = action.payload;
            const existingPost: any = state.find((post: any) => post.id === postId);
            if (existingPost) {
                existingPost.reactions[reaction]++
            };
        },
    }
});

export const selectAllPosts = (state: any) => {
    return state.posts;
};

export const { postAdded, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;