import { Request, Response } from 'express';

import * as authService from '../services/authService';
import * as userRepository from '../repositories/userRepository';

export async function signup(req: Request, res: Response) {
    const data : userRepository.UserInsertData = req.body;
    await authService.signup(data);
    res.sendStatus(201);
}

export async function login(req: Request, res: Response) {
    const data : userRepository.UserLoginData = req.body;
    const { token } = await authService.login(data);
    res.status(200).send({ token });
}