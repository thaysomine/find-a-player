import { Request, Response } from "express";

import * as profileRepository from "../repositories/profileRepository.js";
import * as profileService from "../services/profileService.js";

export async function insertProfile(req: Request, res: Response) {
    const data : profileRepository.ProfileInsertData = req.body;
    //const userId = res.locals.userData.id;
    const userId = 1;
    await profileService.insertProfile(data, userId);
    res.sendStatus(201);
}

export async function matchProfile(req: Request, res: Response) {
    //const userId = res.locals.userData.id;
    const userId = 2;
    const similarProfiles = await profileService.matchProfile(userId);
    res.json(similarProfiles);
}

export async function getAllGames(req: Request, res: Response) {
    const games = await profileRepository.getAllGames();
    res.json(games);
}

export async function getAllModes(req: Request, res: Response) {
    const modes = await profileRepository.getAllModes();
    res.json(modes);
}

export async function getAllElos(req: Request, res: Response) {
    const elos = await profileRepository.getAllElos();
    res.json(elos);
}