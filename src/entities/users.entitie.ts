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

    @Column({ length: 60,  type: "string"})
    name: string;

    @Column({ length: 60, unique: true, type: "string"})
    email: string;

    @Column({type: "string"})
    password: string;

    @Column({type: "string"})
    phone: string;

    @CreateDateColumn({type: "date"})
    created_at: Date;

    @OneToMany(() => Contact, (contact) => contact.user)
    contacts: Contact[]

    @BeforeInsert()
    hashPassword() {
        this.password = hashSync(this.password, 10);
    }
}

export default User;
