import AppDataSource from "../../data-source";
import User from "../../entities/users.entitie";
import AppError from "../../errors/AppError";
import { newUserSchemaRes } from "../../seriliazers/users.serializers";

const updateUserService = async (user_id, body) => {
    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOneBy({ id: user_id });

    if (!user) {
        throw new AppError("User not found", 404);
    }

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
