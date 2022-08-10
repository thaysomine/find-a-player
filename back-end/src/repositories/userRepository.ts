import client from "../config/database.js";
import { User } from "@prisma/client";

export type UserInsertData = Omit<User, "id">;
export type UserLoginData = Pick<User, "email" | "password">;

export async function insert(userData: UserInsertData) {
    const { name, email, password } = userData;

    await client.user.create({
        data: {
            name,
            email,
            password
        }
    });
}

export async function findByEmail(email: string) {
    return await client.user.findFirst({
        where: {
            email
        }
    });
}