import { getRounds, hashSync } from "bcryptjs";
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity ("users")
class USer {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: "varchar", length: 120})
    email: string

    @Column({type: "varchar", length: 120})
    name: string

    @Column({type: "varchar", length: 120})
    password: string

    @CreateDateColumn({type: "date"})
    createdAt: string

    @UpdateDateColumn({type: "date"})
    updatedAt: string

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        const isHashed = getRounds(this.password)

        if(!isHashed) this.password = hashSync(this.password, 10)
    }
}