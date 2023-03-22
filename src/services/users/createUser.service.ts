import { IUserRequest, IUserResponse } from "../../interfaces/users.interface";

const createUserService = (body: IUserRequest): IUserResponse => {
    console.log(body);

    return {
        id: "1",
        name: body.name,
        email: body.email,
        phone: body.phone,
        created_at: "12/12/12",
    };
};

export default createUserService;
