import AppDataSource from "../../data-source";
import Contact from "../../entities/contacts";
import { contactArraySchema } from "../../seriliazers/contacts.serializers";

const listContactsService = async (userId: string): Promise<Contact[]> => {
    const contactReposiroty = AppDataSource.getRepository(Contact);

    const contacts = await contactReposiroty.find({
        relations: { user: true },
    });

    const contactsFiltered = [];
    contacts.forEach((element) => {
        if (element.user.id === userId) {
            contactsFiltered.push(element);
        }
    });

    const contactsArray = await contactArraySchema.validate(contactsFiltered, {
        stripUnknown: true,
    });

    return contactsArray;
};

export default listContactsService;
