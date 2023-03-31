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

    @Column({ length: 60, type: "character" })
    name: string;

    @Column({ length: 60, unique: true, type: "character" })
    email: string;

    @Column({ type: "character" })
    phone: string;

    @CreateDateColumn({ type: "date" })
    created_at: Date;

    @ManyToOne(() => User, (user) => user.contacts, { onDelete: "CASCADE" })
    user: User;
}

export default Contact;
