import { IUserRequest } from "../../interfaces/users.interface";
import User from "../../entities/users";
import AppDataSource from "../../data-source";
import AppError from "../../errors/AppError";
import { newUserSchemaRes } from "../../seriliazers/users.serializers";

const createUserService = async (userData: IUserRequest): Promise<User> => {
    const userRepository = AppDataSource.getRepository(User);

    const userAlreadyExisting = await userRepository.findOneBy({
        email: userData.email,
    });

    if (userAlreadyExisting) {
        throw new AppError("Email already registred", 409);
    }

    const newUser = userRepository.create(userData);
    await userRepository.save(newUser);

    const newUserResp = await newUserSchemaRes.validate(newUser, {
        stripUnknown: true,
    });

    return newUserResp;
};

export default createUserService;
