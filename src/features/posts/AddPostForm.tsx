import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "./postsSlice";

export const AddPostForm = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');

    const onTitleChanged = (e: any) => {
        setTitle(e.target.value)
    };

    const onContentChanged = (e: any) => {
        setContent(e.target.value)
    };

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(
                postAdded({
                    id: nanoid(),
                    title,
                    content
                })
            )
            setTitle('')
            setContent('')
        }
    }

    return (
        <section>
            <h2>Add a New Post</h2>
            <form>
                <label htmlFor="postTitle" >Post Title:</label>
                <input 
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    placeholder="Title..."
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="postContent" >Post Content:</label>
                <input 
                    type="text"
                    id="postContent"
                    name="postContent"
                    placeholder="Content..."
                    value={content}
                    onChange={onContentChanged}
                />
                <button 
                    type="button" 
                    onClick={onSavePostClicked}
                >Save Post</button>
            </form>
        </section>
    )
};