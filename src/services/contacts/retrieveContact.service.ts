import AppDataSource from "../../data-source";
import Contact from "../../entities/contacts.entitie";
import AppError from "../../errors/AppError";

const retrieveContactService = async (contactId: string): Promise<Contact> => {
    const contactReposiroty = AppDataSource.getRepository(Contact);

    const contact = await contactReposiroty.findOneBy({ id: contactId });

    if (!contact) {
        throw new AppError("User not found", 404);
    }

    return contact;
};

export default retrieveContactService;
