import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { PostLike, User, PostComment } from "../entities";

@Entity("posts")
class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 120 })
  title: string;

  @Column({ type: "varchar", length: 120 })
  topic: string;

  @Column({ type: "text" })
  text: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @UpdateDateColumn({ type: "date" })
  updatedAt: string;

  @DeleteDateColumn({ type: "date" })
  deletedAt: string;

  @ManyToOne(() => User, (user) => user.posts, {
    onDelete: "CASCADE"
  })
  user: User;

  @ManyToOne(() => PostComment, (comment) => comment.post)
  comments: PostComment;

  @OneToMany(() => PostLike, (like) => like.post)
  likes: PostLike[];
}

export { Post };
