import { classToPlain} from "class-transformer";
import {  getCustomRepository } from "typeorm";

import { SummonerRepository } from "../repositories/SummonerRepository";

class ListUsersService{

    async execute(){
        
        const summonerRepository = getCustomRepository(SummonerRepository);

        const summoner = await summonerRepository.find();

        return classToPlain(summoner);

    }

}

export { ListUsersService }; 