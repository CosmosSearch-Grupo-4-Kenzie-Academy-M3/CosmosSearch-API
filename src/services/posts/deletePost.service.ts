import repositories from "../../utils/respositorys";

const deletePost = async (postId: number): Promise<void> => {
  await repositories.post.delete({
    id: postId,
  });

  return;
};

export default deletePost;
