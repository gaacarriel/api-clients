import * as yup from "yup";
import { newConcactSchemaRes } from "./contacts.serializers";

export const newUserSchemaReq = yup.object().shape({
    email: yup.string().email().required(),
    name: yup.string().required(),
    password: yup.string().required(),
    phone: yup.string().required(),
});

export const newUserSchemaRes = yup.object().shape({
    id: yup.string().notRequired(),
    name: yup.string().notRequired(),
    email: yup.string().notRequired(),
    phone: yup.string().notRequired(),
    created_at: yup.date().notRequired(),
    contacts: yup.array(newConcactSchemaRes),
});

export const usersArraySchema = yup.array(newUserSchemaRes);

export const updateUserSchema = yup
    .object()
    .shape({
        name: yup.string(),
        email: yup.string(),
        password: yup.string(),
        phone: yup.string(),
    })
    .noUnknown(
        true,
        (keys: any) =>
            `The following key is not allowed or don't exist: ${keys.unknown}`
    )
    .strict();
