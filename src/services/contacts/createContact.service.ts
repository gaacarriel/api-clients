import AppDataSource from "../../data-source";
import Contact from "../../entities/contacts";
import User from "../../entities/users";
import AppError from "../../errors/AppError";
import { IContactReq } from "../../interfaces/contacts.interface";

const createContactService = async (
    body: IContactReq,
    user_id: string
): Promise<Contact> => {
    const userRepository = AppDataSource.getRepository(User);
    const contactRepository = AppDataSource.getRepository(Contact);

    const contactAlreadyExisting = await contactRepository.findOneBy({
        email: body.email,
    });

    if (contactAlreadyExisting) {
        throw new AppError("Email already registred", 409);
    }

    const user = await userRepository.findOneBy({ id: user_id });

    if (!user) {
        throw new AppError("User not found", 404);
    }

    const newContact = contactRepository.create({
        ...body,
        user,
    });
    await contactRepository.save(newContact);

    return newContact;
};

export default createContactService;
