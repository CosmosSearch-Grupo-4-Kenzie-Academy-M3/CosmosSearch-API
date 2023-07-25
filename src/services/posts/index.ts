import createPost from "./createPost.service";
import deletePost from "./deletePost.service";
import findAllPost from "./findAllPost.service";
import updatePost from "./updatePost.service";

const postsServices = {
  createPost,
  findAllPost,
  updatePost,
  deletePost,
};
export default postsServices;
