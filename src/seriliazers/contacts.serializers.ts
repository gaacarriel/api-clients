import * as yup from "yup";
import { newUserSchemaRes } from "./users.serializers";

export const newContactSchemaReq = yup.object().shape({
    email: yup.string().email().required(),
    name: yup.string().required(),
    phone: yup.string().required(),
});

export const newConcactSchemaRes = yup.object().shape({
    id: yup.string().notRequired(),
    name: yup.string().notRequired(),
    email: yup.string().notRequired(),
    phone: yup.string().notRequired(),
    created_at: yup.date().notRequired(),
    user: newUserSchemaRes,
});

export const contactArraySchema = yup.array(newConcactSchemaRes);

export const updateContactSchema = yup
    .object()
    .shape({
        name: yup.string(),
        email: yup.string(),
        phone: yup.string(),
    })
    .noUnknown(
        true,
        (keys: any) =>
            `The following key is not allowed or don't exist: ${keys.unknown}`
    )
    .strict();
