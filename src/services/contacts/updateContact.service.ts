import AppDataSource from "../../data-source";
import Contact from "../../entities/contacts.entitie";
import AppError from "../../errors/AppError";

const updateContactService = async (user_id, body) => {
    const contactRepository = AppDataSource.getRepository(Contact);

    const contact = await contactRepository.findOneBy({ id: user_id });

    const updatedContact = contactRepository.create({
        ...contact,
        ...body,
    });
    await contactRepository.save(updatedContact);

    return updatedContact;
};

export default updateContactService;
