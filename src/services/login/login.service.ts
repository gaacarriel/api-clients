import { compare } from "bcryptjs";
import AppDataSource from "../../data-source";
import User from "../../entities/users.entitie";
import AppError from "../../errors/AppError";
import jwt from "jsonwebtoken";
import { IUserLogin } from "../../interfaces/users.interface";

const loginService = async ({ email, password }: IUserLogin) => {
    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOneBy({ email: email });

    if (!user) {
        throw new AppError("Email or password invalid", 403);
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
        throw new AppError("Email or password invalid", 403);
    }

    const token = jwt.sign(
        {
            phone: user.phone,
        },
        process.env.SECRET_KEY,
        {
            subject: user.id,
            expiresIn: "24h",
        }
    );

    return token
};

export default loginService;
