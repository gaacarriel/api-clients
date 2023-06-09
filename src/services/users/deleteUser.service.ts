import AppDataSource from "../../data-source";
import User from "../../entities/users";
import AppError from "../../errors/AppError";

const deleteUserService = async (userId: string): Promise<{}> => {
    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOneBy({ id: userId });

    if (!user) {
        throw new AppError("User not found", 404);
    }

    await userRepository.delete(userId);

    return {};
};

export default deleteUserService;
