import { PrimaryGeneratedColumn, Entity, ManyToOne } from "typeorm";

import { Post, User } from "../entities";

@Entity("likes")
class PostLike {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Post, (post) => post.likes)
  post: Post;

  @ManyToOne(() => User, (user) => user.likes, {
    onDelete: "CASCADE"
  })
  user: User;
}

export { PostLike };
