import { PrimaryGeneratedColumn, Entity } from "typeorm"

@Entity ("likes")
class Like {
    @PrimaryGeneratedColumn()
    id: number
}