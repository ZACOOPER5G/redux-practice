import { useState } from "react";

export const AddPostForm = () => {
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');

    const onTitleChanged = (e: any) => {
        setTitle(e.target.value)
    };

    const onContentChanged = (e: any) => {
        setContent(e.target.value)
    };

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
                <button type="button" >Save Post</button>
            </form>
        </section>
    )
}
