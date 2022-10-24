import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import { PostAuthor } from "./PostAuthor";

export const PostsList = () => {
    const posts: any = useSelector(selectAllPosts);

    const renderedPosts = posts.map((post: any, index: number) => (
        <article key={post.id} className="posts">
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
            <p>
                <PostAuthor userId={post.userId}/>
            </p>
            <h6>Post {index + 1} of {posts.length}</h6>
        </article>
    ));

    return (
        <section >
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )
};