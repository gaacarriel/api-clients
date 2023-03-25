import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    ManyToOne,
} from "typeorm";
import User from "./users.entitie";

@Entity("contacts")
class Contact {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ length: 60 })
    name: string;

    @Column({ length: 60, unique: true })
    email: string;

    @Column({})
    phone: string;

    @CreateDateColumn({})
    created_at: Date;

    @ManyToOne(() => User, (user) => user.contacts, { onDelete: "CASCADE" })
    user: User;
}

export default Contact;
