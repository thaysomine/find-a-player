import client from "../config/database.js";
import { User, UserProfile } from "@prisma/client";

export type ProfileInsertData = Omit<UserProfile, "id">;

// export async function insert(profileData: ProfileInsertData) {
//     const { userId, gameId, modeId, eloId } = profileData; 
// }