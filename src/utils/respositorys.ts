import { AppDataSource } from "../data-source";

import { Repository } from "typeorm";
import { Like, Post, User, Comment } from "../entities";

const user: Repository<User> = AppDataSource.getRepository(User);
const post: Repository<Post> = AppDataSource.getRepository(Post);
const comment: Repository<Comment> = AppDataSource.getRepository(Comment);
const like: Repository<Like> = AppDataSource.getRepository(Like);

const repositories = {
    user,
    post,
    comment,
    like
};

export default repositories;