import { Post, User } from "../../entities";
import { TPostRequest, TPostResponse } from "../../interfaces/posts.interfaces";

import schemas from "../../schemas";
import repositories from "../../utils/respositorys";

const createPost = async (
  data: TPostRequest,
  userId: number
): Promise<TPostResponse> => {
  const user: User | null = await repositories.user.findOneBy({ id: userId });

  const newPostData = {
    user: user!,
    ...data,
  };

  const newPost: Post = repositories.post.create(newPostData);
  await repositories.post.save(newPost);

  const postResponse: TPostResponse = schemas.posts.post.parse(newPost);

  return postResponse;
};

export default createPost;
