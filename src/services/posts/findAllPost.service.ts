import { Post } from "../../entities";
import { TPostResponse } from "../../interfaces/posts.interfaces";

import repositories from "../../utils/respositorys";

const findAllPost = async (): Promise<TPostResponse[]> => {
  const posts: Post[] = await repositories.post.find();

  return posts;
};

export default findAllPost;
