import AppDataSource from "../../data-source";
import Contact from "../../entities/contacts.entitie";

const deleteContactService = async (contact_id) => {
    const contactRepository = AppDataSource.getRepository(Contact)

    await contactRepository.delete(contact_id)

    return {}
};

export default deleteContactService;
