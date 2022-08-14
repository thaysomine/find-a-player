import client from '../src/config/database.js';

const games = [
    {name: 'League of Legends'},
    {name: 'Valorant'}, 
    {name: 'CS:GO'}, 
    {name: 'Fortnite'}, 
    {name: 'Overwatch'}, 
    {name: 'Dota 2'}, 
    {name: 'Hearthstone'}, 
    {name: 'Among Us'},
    {name: 'Fall Guys'},
    {name: 'Rocket League'},
    {name: 'PUBG'},
];

const modes = [
    {name: 'Unranked'},
    {name: 'Ranked'},
    {name: 'Flex'},
];

const elos = [
    {name: 'Unranked'},
    {name: 'Beginner'},
    {name: 'Intermediate'},
    {name: 'Advanced'},
    {name: 'Expert'},
];

async function main() {
    await client.$connect();
    await client.game.createMany({data: games});
    await client.mode.createMany({data: modes});
    await client.elo.createMany({data: elos});
}

main()
    .catch((error) => {
        console.log(error);
        process.exit(1);
    })
    .finally(async () => {
        await client.$disconnect();
    });