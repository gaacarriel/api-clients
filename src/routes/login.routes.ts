import { Router } from "express";
import { loginController } from "../controllers/login.controller";
import checkDataMiddleware from "../middlewares/checkData.middleware";
import { loginSchemaReq } from "../seriliazers/login.serializers";

const loginRoutes = Router();

loginRoutes.post("", checkDataMiddleware(loginSchemaReq), loginController);

export default loginRoutes;
