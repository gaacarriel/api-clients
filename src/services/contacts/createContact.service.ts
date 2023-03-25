import AppDataSource from "../../data-source";
import Contact from "../../entities/contacts.entitie";
import User from "../../entities/users.entitie";
import AppError from "../../errors/AppError";

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
