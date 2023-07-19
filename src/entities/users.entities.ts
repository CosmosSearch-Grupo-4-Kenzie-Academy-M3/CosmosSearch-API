import { getRounds, hashSync } from "bcryptjs";
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { PostLike, Post, PostComment } from "../entities";

@Entity("users")
class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 120 })
  email: string;

  @Column({ type: "varchar", length: 120 })
  username: string;

  @Column({ type: "varchar", length: 120 })
  firstName: string;

  @Column({ type: "varchar", length: 120 })
  lastName: string;

  @Column({ type: "varchar", length: 120 })
  password: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @UpdateDateColumn({ type: "date" })
  updatedAt: string;

  @DeleteDateColumn({ type: "date" })
  deletedAt: string;

  @OneToMany(() => Post, (post) => post.user, {
    eager: true,
  })
  posts: Post[];

  @OneToMany(() => PostLike, (like) => like.user, {
    eager: true,
  })
  likes: PostLike[];

  @OneToMany(() => PostComment, (postComment) => postComment.user, {
    eager: true,
  })
  comments: PostComment[];

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const isHashed = getRounds(this.password);

    if (!isHashed) this.password = hashSync(this.password, 10);
  }
}

export { User };
