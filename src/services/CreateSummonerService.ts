import { getCustomRepository} from "typeorm";

import { SummonerRepository } from "../repositories/SummonerRepository";

interface ISummonerRequest{
    NickName: string;
    AccountId: string;
    SummonerLevel: number;
    ProfileIconId: number;
    summonerId: string;
    userId:string;
}

class CreateSummonerService{

    async execute({AccountId,NickName,ProfileIconId,SummonerLevel,summonerId,userId}: ISummonerRequest){
        
    }
}

export {CreateSummonerService};