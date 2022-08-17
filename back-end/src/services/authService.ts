import bcrypt from 'bcrypt';

import * as userRepository from "../repositories/userRepository.js";
import { generateToken } from "../utils/jwtUtil.js";

export async function signup(data: userRepository.UserInsertData) {
    const { name, email, password } = data;
    const checkEmail = await userRepository.findByEmail(email);
    if (checkEmail) throw new Error("Email already exists");

    const hash = await bcrypt.hash(password, 10);
    await userRepository.insert({ name, email, password: hash });
}

export async function login(data: userRepository.UserLoginData) {
    const { email, password } = data;
    const user = await userRepository.findByEmail(email);
    if (!user) throw new Error("Email not found");
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Password is incorrect");
    const token = await generateToken(user);
    const userData = {
        userId: user.id,
        name: user.name,
        token,
    }
    return userData;
}