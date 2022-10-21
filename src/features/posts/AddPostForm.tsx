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
                    value="title"
                    onChange={onTitleChanged}
                />
            </form>
        </section>
    )
}
