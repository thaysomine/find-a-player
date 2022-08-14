import * as profileRepository from '../repositories/profileRepository.js';

export async function insertProfile(profileData: profileRepository.ProfileInsertData, userId: number) {
    const { gameId, nickname, modeId, eloId } = profileData; 
    
    await profileRepository.insert({
        gameId,
        nickname,
        modeId,
        eloId
    }, userId);
}

export async function matchProfile(userId: number) {
    const similarProfiles = await profileRepository.match(userId);
    return similarProfiles;
}