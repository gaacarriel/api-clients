import * as yup from "yup";

export const loginSchemaReq = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
});
