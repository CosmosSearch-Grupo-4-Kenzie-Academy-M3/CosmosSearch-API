import { Post } from "../../entities";
import { TPostResponse } from "../../interfaces/posts.interfaces";

import repositories from "../../utils/respositorys";

const findByUserIdPost = async (userId: number): Promise<TPostResponse[]> => {
  const posts: Post[] = await repositories.post.find({
    where: {
      user: {
        id: userId,
      },
    },
  });

  return posts;
};

export default findByUserIdPost;
