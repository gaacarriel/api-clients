import { Router } from "express";
import {
    createContactController,
    deleteContactController,
    listContactsController,
    retrieveContactController,
    updateContactController,
} from "../controllers/contacts.controllers";
import checkAuthMiddleware from "../middlewares/checkAuth.middleware";
import checkContactMiddleware from "../middlewares/checkContact.middleware";
import checkDataMiddleware from "../middlewares/checkData.middleware";
import {
    newContactSchemaReq,
    updateContactSchema,
} from "../seriliazers/contacts.serializers";

const contactRoutes = Router();

contactRoutes.post(
    "",
    checkAuthMiddleware,
    checkDataMiddleware(newContactSchemaReq),
    createContactController
);
contactRoutes.get("", checkAuthMiddleware, listContactsController);
contactRoutes.get(
    "/:contact_id",
    checkAuthMiddleware,
    checkContactMiddleware,
    retrieveContactController
);
contactRoutes.patch(
    "/:contact_id",
    checkAuthMiddleware,
    checkContactMiddleware,
    checkDataMiddleware(updateContactSchema),
    updateContactController
);
contactRoutes.delete(
    "/:contact_id",
    checkAuthMiddleware,
    checkContactMiddleware,
    deleteContactController
);

export default contactRoutes;
