import { AppDataSource } from "../data-source";

import { Repository } from "typeorm";
import { PostLike, Post, User, PostComment } from "../entities";

const user: Repository<User> = AppDataSource.getRepository(User);
const post: Repository<Post> = AppDataSource.getRepository(Post);
const comment: Repository<PostComment> = AppDataSource.getRepository(PostComment);
const like: Repository<PostLike> = AppDataSource.getRepository(PostLike);

const repositories = {
    user,
    post,
    comment,
    like
};

export default repositories;