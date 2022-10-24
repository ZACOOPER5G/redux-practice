import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

export const PostAuthor = (props: any) => {
    const users = useSelector(selectAllUsers);

    const author = users.find((user: any) => user.id === props.userId)

    return (
        <span>
            by {author ? author.name : 'Unknown author'}
        </span>
    )
};
