import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

export const PostAuthor = () => {
    const users = useSelector(selectAllUsers);

    const author = users.find((user: any) => user.id === users.id)

    return (
        <span>
            by {author ? author.name : 'Unknown author'}
        </span>
    )
};
