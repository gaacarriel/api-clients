import { Request, Response, NextFunction } from "express";
import { AnySchema } from "yup";

const checkDataMiddleware =
    (schema) =>
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const validatedData = await schema.validate(req.body, {
                abortEarly: false,
                stripUnknown: true,
            });

            req.body = validatedData;

            return next();
        } catch (err: any) {
            return res.status(401).json({ message: err.errors });
        }
    };

export default checkDataMiddleware;
