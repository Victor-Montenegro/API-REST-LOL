import { classToPlain} from "class-transformer"
import { getCustomRepository } from "typeorm";

import {SummonerRepository} from "../repositories/SummonerRepository";

interface IUserRequest{

    userId: string;
    SummonerLevel: number; 
    NickName: string;
}

class UpdateUserService{

    async execute({NickName,userId,SummonerLevel}:IUserRequest){
        const summonerRepository = getCustomRepository(SummonerRepository); 

        if(!NickName || NickName == " "){

            throw new Error("summonerName incorreto!");
        }

        if(!SummonerLevel){

            throw new Error("summonerLevel incorreto!");
        }

        let userToUpdate = await summonerRepository.findOne({
            userId
        });

        userToUpdate.NickName = NickName;
        userToUpdate.SummonerLevel = SummonerLevel;

        await summonerRepository.save(userToUpdate);

        return classToPlain(userToUpdate);


    }
}

export { UpdateUserService};