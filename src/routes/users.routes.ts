import { Router } from "express";
import { createUserController, listUsersController, updateUserController } from "../controllers/users.controllers";

const userRoutes = Router();

// CRUD -> Criar / Listar / Atualizar / Deletar
userRoutes.post("", createUserController)
userRoutes.get("", listUsersController)
userRoutes.patch("/:user_id", updateUserController)
userRoutes.delete("/:user_id")

export default userRoutes;
