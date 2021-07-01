import { getCustomRepository} from "typeorm";

import { SummonerRepository } from "../repositories/SummonerRepository";

interface ISummonerRequest{
    NickName: string;
    AccountId: string;
    SummonerLevel: number;
    ProfileIconId: number;
    summonerId: number;
    userId:string;
}

class CreateSummonerService{

    async execute({AccountId,NickName,ProfileIconId,SummonerLevel,summonerId,userId}: ISummonerRequest){

        const summonerRepository = getCustomRepository(SummonerRepository);

        if((!NickName) || NickName === " " ){

            throw new Error(`Nick name incorreto!`);
        }

        const summoner = summonerRepository.create({
            AccountId,
            NickName,
            ProfileIconId,
            SummonerLevel,
            summonerId,
            userId
            
        });

        await summonerRepository.save(summoner);

        return summoner;

    }
}

export {CreateSummonerService};