import AppDataSource from "../../data-source";
import User from "../../entities/users.entitie";
import { IUserRequestUpdate } from "../../interfaces/users.interface";
import { newUserSchemaRes } from "../../seriliazers/users.serializers";

const updateUserService = async (
    userId: string,
    body: IUserRequestUpdate
): Promise<User> => {
    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOneBy({ id: userId });

    const updatedUser = userRepository.create({
        ...user,
        ...body,
    });

    await userRepository.save(updatedUser);

    const updatedUserResp = await newUserSchemaRes.validate(updatedUser, {
        stripUnknown: true,
    });

    return updatedUserResp;
};

export default updateUserService;
