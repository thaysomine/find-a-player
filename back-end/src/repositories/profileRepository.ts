import client from "../config/database.js";
import { User, UserProfile, Game, Mode, Elo } from "@prisma/client";

export type ProfileInsertData = Omit<UserProfile, "id" | "userId">;

export async function insert(profileData: ProfileInsertData, userId: User["id"]) {
    const { gameId, nickname, modeId, eloId } = profileData; 
    
    await client.userProfile.create({
        data: {
            userId,
            gameId,
            nickname,
            modeId,
            eloId
        }
    });
}

// get user profile by userId   
async function getByUserId(userId: User["id"]) {
    const profile = await client.userProfile.findFirst({
        where: {
            userId
        }
    });
    console.log(profile);
    return profile;
}

export async function match(userId: User["id"]) {
    const profile = await getByUserId(userId);
    const similarProfiles = await client.userProfile.findMany({
        where: {
            gameId: profile.gameId,
            modeId: profile.modeId,
            eloId: profile.eloId,
            userId: {
                not: userId
            }
        }
    });
    return similarProfiles;
}

// get all games
export async function getAllGames() {
    const games = await client.game.findMany();
    console.log(games);
    return games;
}

// get all modes
export async function getAllModes() {
    const modes = await client.mode.findMany();
    return modes;
}

// get all elos
export async function getAllElos() {
    const elos = await client.elo.findMany();
    return elos;
}