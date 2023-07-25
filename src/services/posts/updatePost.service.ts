import { Post } from "../../entities";
import { TPostUpdate } from "../../interfaces/posts.interfaces";
import repositories from "../../utils/respositorys";

const updatePost = async (postId: number, data: TPostUpdate) => {
  const post: Post | null = await repositories.post.findOneBy({
    id: postId,
  });

  const postNewData = {
    ...post!,
    ...data,
  };

  const postResponse: TPostUpdate = await repositories.post.save(postNewData);
  return postResponse;
};

export default updatePost;
