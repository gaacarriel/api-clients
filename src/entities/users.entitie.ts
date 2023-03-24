import { hashSync } from "bcryptjs";
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    BeforeInsert,
    OneToMany
} from "typeorm";
import Contact from "./contacts.entitie";

@Entity("users")
class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ length: 60 })
    name: string;

    @Column({ length: 60, unique: true })
    email: string;

    @Column()
    password: string;

    @Column()
    phone: string;

    @CreateDateColumn()
    created_at: Date;

    @OneToMany(() => Contact, contact => contact.user)
    contacts: Contact[]

    @BeforeInsert()
    hashPassword() {
        this.password = hashSync(this.password, 10);
    }
}

export default User;
