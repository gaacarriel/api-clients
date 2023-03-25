import AppDataSource from "../../data-source";
import User from "../../entities/users.entitie";
import { usersArraySchema } from "../../seriliazers/users.serializers";

const listUsersService = async (): Promise<User[]> => {
    const userReposiroty = AppDataSource.getRepository(User);

    const users = await userReposiroty.find();

    const usersResp = await usersArraySchema.validate(users, {
        stripUnknown: true,
    });

    return usersResp;
};

export default listUsersService;
