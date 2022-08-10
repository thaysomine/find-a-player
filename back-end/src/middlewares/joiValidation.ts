import joi from 'joi';

import { Request, Response, NextFunction } from 'express';

export async function validateSignup(req: Request, res: Response, next: NextFunction) {
    const data: {email: string, password: string, confirmPassword: string} = req.body;
    const schema = joi.object({
        name: joi.string().max(50).required(),
        email: joi.string().email().required(),
        password: joi.string().min(8).required(),
        confirmPassword: joi.string().min(8).valid(joi.ref('password')).required()
    });
    const { error } = schema.validate(data);
    if (error) throw new Error(error.message);
    next();
}

export async function validateLogin(req: Request, res: Response, next: NextFunction) {
    const data: {email: string, password: string} = req.body;
    const schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(8).required()
    });
    const { error } = schema.validate(data);
    if (error) throw new Error(error.message);
    next();
}