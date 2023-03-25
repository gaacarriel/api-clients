import { Request, Response } from "express";
import Contact from "../entities/contacts.entitie";
import createContactService from "../services/contacts/createContact.service";
import deleteContactService from "../services/contacts/deleteContact.service";
import listContactsService from "../services/contacts/listContacts.service";
import retrieveContactService from "../services/contacts/retrieveContact.service";
import updateContactService from "../services/contacts/updateContact.service";

export const createContactController = async (req: Request, res: Response) => {
    const body: IContactReq = req.body;
    const userId: string = String(req.user.id);
    const newContact: Contact = await createContactService(body, userId);
    return res.status(201).json(newContact);
};

export const listContactsController = async (req: Request, res: Response) => {
    const userId: string = String(req.user.id);
    const contacts = await listContactsService(userId);
    return res.status(200).json(contacts);
};

export const retrieveContactController = async (
    req: Request,
    res: Response
) => {
    const contactId: string = req.params.contact_id;
    const contact: Contact = await retrieveContactService(contactId);
    return res.status(200).json(contact);
};

export const updateContactController = async (req: Request, res: Response) => {
    const contactId: string = req.params.contact_id;
    const body: IContactUpdate = req.body;
    const updatedContact: Contact = await updateContactService(contactId, body);
    return res.status(200).json(updatedContact);
};

export const deleteContactController = (req: Request, res: Response) => {
    const contactId: string = req.params.contact_id;
    const deletedContact = deleteContactService(contactId);
    return res.status(204).json(deletedContact);
};
