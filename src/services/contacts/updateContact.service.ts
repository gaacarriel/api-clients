import AppDataSource from "../../data-source";
import Contact from "../../entities/contacts";
import { IContactUpdate } from "../../interfaces/contacts.interface";

const updateContactService = async (
    contactId: string,
    body: IContactUpdate
): Promise<Contact> => {
    const contactRepository = AppDataSource.getRepository(Contact);

    const contact = await contactRepository.findOneBy({ id: contactId });

    const updatedContact = contactRepository.create({
        ...contact,
        ...body,
    });
    await contactRepository.save(updatedContact);

    return updatedContact;
};

export default updateContactService;
