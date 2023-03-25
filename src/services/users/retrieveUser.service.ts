import AppDataSource from "../../data-source";
import User from "../../entities/users.entitie";
import AppError from "../../errors/AppError";
import { newUserSchemaRes } from "../../seriliazers/users.serializers";

const retrieveUserService = async (userId: string): Promise<User> => {
    const userReposiroty = AppDataSource.getRepository(User);

    const user = await userReposiroty.findOne({
        where: { id: userId },
        relations: { contacts: true },
    });

    if (!user) {
        throw new AppError("User not found", 404);
    }

    const userValidated = await newUserSchemaRes.validate(user, {
        stripUnknown: true,
    });

    return userValidated;
};

export default retrieveUserService;
