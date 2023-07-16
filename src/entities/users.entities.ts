import { getRounds, hashSync } from "bcryptjs";
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity ("users")
class USer {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: "varchar", length: 120})
    email: string

    @Column({type: "varchar", length: 120})
    username: string

    @Column({type: "varchar", length: 120})
    firstName: string

    @Column({type: "varchar", length: 120})
    lastName: string

    @Column({type: "varchar", length: 120})
    password: string

    @CreateDateColumn({type: "date"})
    createdAt: string

    @UpdateDateColumn({type: "date"})
    updatedAt: string

    @DeleteDateColumn({type: "date"})
    deletedAt: string    

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        const isHashed = getRounds(this.password)

        if(!isHashed) this.password = hashSync(this.password, 10)
    }
}