import "reflect-metadata";
import express from "express";
import "express-async-errors";
import userRoutes from "./routes/users.routes";
import loginRoutes from "./routes/login.routes";
import handleError from "./errors/handleError";
import contactRoutes from "./routes/contacts.routes";
import SwaggerUi from "swagger-ui-express";
import swaggerDocs from "./swagger.json";

const app = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/contacts", contactRoutes);
app.use("/docs", SwaggerUi.serve, SwaggerUi.setup(swaggerDocs));

app.use(handleError);

export default app;
