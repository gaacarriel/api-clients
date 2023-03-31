import { Router } from "express";
import {
    createUserController,
    deleteUserController,
    listUsersController,
    retrieveUserController,
    updateUserController,
} from "../controllers/users.controllers";
import checkAuthMiddleware from "../middlewares/checkAuth.middleware";
import checkDataMiddleware from "../middlewares/checkData.middleware";
import checkOnwerMiddleware from "../middlewares/checkOnwer.middleware";
import {
    newUserSchemaReq,
    updateUserSchema,
} from "../seriliazers/users.serializers";

const userRoutes = Router();

userRoutes.post(
    "",
    checkDataMiddleware(newUserSchemaReq),
    createUserController
);
userRoutes.get("", listUsersController);
userRoutes.get("/:user_id", retrieveUserController);
userRoutes.patch(
    "/:user_id",
    checkAuthMiddleware,
    checkOnwerMiddleware,
    checkDataMiddleware(updateUserSchema),
    updateUserController
);
userRoutes.delete(
    "/:user_id",
    checkAuthMiddleware,
    checkOnwerMiddleware,
    deleteUserController
);

export default userRoutes;
