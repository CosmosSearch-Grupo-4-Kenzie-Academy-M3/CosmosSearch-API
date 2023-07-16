import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity ("posts")
class Post {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: "varchar", length: 120})
    title: string

    @Column({type: "varchar", length: 120})
    topic: string

    @Column({type: "text"})
    text: string

    @CreateDateColumn({type: "date"})
    createdAt: string

    @UpdateDateColumn({type: "date"})
    updatedAt: string

    @DeleteDateColumn({type: "date"})
    deletedAt: string      
}