import { compare } from "bcryptjs";
import AppDataSource from "../../data-source";
import User from "../../entities/users";
import AppError from "../../errors/AppError";
import jwt from "jsonwebtoken";
import { IUserLogin } from "../../interfaces/users.interface";
import { newUserSchemaRes } from "../../seriliazers/users.serializers";

const loginService = async ({
    email,
    password,
}: IUserLogin): Promise<{}> => {
    const userRepository = AppDataSource.getRepository(User);

    const userData = await userRepository.findOneBy({ email: email });

    if (!userData) {
        throw new AppError("Email or password invalid", 403);
    }

    const passwordMatch = await compare(password, userData.password);

    if (!passwordMatch) {
        throw new AppError("Email or password invalid", 403);
    }

    const token = jwt.sign(
        {
            phone: userData.phone,
            contacts: userData.contacts,
        },
        process.env.SECRET_KEY,
        {
            subject: userData.id,
            expiresIn: "24h",
        }
    );

    const user = await newUserSchemaRes.validate(userData, {
        stripUnknown: true,
    });

    return { token: token, user };
};

export default loginService;
