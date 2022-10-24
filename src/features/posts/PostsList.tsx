import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import { PostAuthor } from "./PostAuthor";
import { TimeAgo } from "./TimeAgo";
import { ReactionButtons } from "./ReactionButtons";

export const PostsList = () => {
    const posts: any = useSelector(selectAllPosts);
    const orderedPosts = posts.slice().sort((a: any, b: any) => b.date.localeCompare(a.date))

    const renderedPosts = orderedPosts.map((post: any, index: number) => (
        <article key={post.id} className="posts">
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
            <p>
                <PostAuthor userId={post.userId}/>
                <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButtons post={post} />
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