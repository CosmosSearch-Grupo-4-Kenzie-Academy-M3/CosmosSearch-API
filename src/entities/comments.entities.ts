import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity ("comments")
class Commet {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: "text"})
    text: string

    @CreateDateColumn({type: "date"})
    createdAt: string

    @UpdateDateColumn({type: "date"})
    updatedAt: string
    
    @DeleteDateColumn({type: "date"})
    deletedAt: string   
}