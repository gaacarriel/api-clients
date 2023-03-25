import AppDataSource from "../../data-source";
import Contact from "../../entities/contacts.entitie";

const deleteContactService = async (contactId: string): Promise<{}> => {
    const contactRepository = AppDataSource.getRepository(Contact);

    await contactRepository.delete(contactId);

    return {};
};

export default deleteContactService;
