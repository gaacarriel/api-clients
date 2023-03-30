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

    @Column({ length: 60, type: "string" })
    name: string;

    @Column({ length: 60, unique: true, type: "string" })
    email: string;

    @Column({ type: "string" })
    phone: string;

    @CreateDateColumn({ type: "date" })
    created_at: Date;

    @ManyToOne(() => User, (user) => user.contacts, { onDelete: "CASCADE" })
    user: User;
}

export default Contact;
