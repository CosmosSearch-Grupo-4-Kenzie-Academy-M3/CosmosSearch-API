import users from "./users.controllers";
import posts from "./posts.controllers";
import likes from "./likes.controllers";
import comments from "./comments.controllers";

const controllers = {
    ...users,
    ...posts,
    ...likes,
    ...comments
}

export default controllers