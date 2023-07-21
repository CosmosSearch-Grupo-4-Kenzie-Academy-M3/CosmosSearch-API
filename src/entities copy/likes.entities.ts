import { PrimaryGeneratedColumn, Entity, ManyToOne } from "typeorm";

import { Post, User } from ".";
@Entity("likes")
class Like {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Post, (post) => post.likes, {
    onDelete: "CASCADE",
  })
  post: Post;

  @ManyToOne(() => User, (user) => user.likes, {
    onDelete: "CASCADE",
  })
  user: User;
}

export default Like;
