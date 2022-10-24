import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";

const reactionEmoji = {
    thumbsUp: '👍',
    heart: '❤️',
};

export const ReactionButtons = (props: any) => {
    const dispatch = useDispatch();

    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button
                key={name}
                type="button"
                className="reactionButton"
                onClick={() => 
                    dispatch(reactionAdded({ postId: props.post.id, reaction: name }))
                }
            >
                {emoji} {props.post.reactions[name]}
            </button>
        )
    })

    return (
        <div>ReactionButtons</div>
    )
};
