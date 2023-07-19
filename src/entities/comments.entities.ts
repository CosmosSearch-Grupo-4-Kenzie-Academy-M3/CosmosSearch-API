import { 
    Column, 
    CreateDateColumn, 
    Entity, 
    ManyToOne, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn 
} from "typeorm";

import { Post, User } from "../entities";

@Entity("comments")
class PostComment {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "text"})
    title: string

    @CreateDateColumn({ type: "date" })
    createdAt: string;
  
    @UpdateDateColumn({ type: "date" })
    updatedAt: string;

    @ManyToOne(() => User, (user) => user.comments, {
        onDelete: "CASCADE",
    })
    user: User;

    @ManyToOne(() => Post, (post) => post.comments)
    post: Post;
}

export { PostComment };