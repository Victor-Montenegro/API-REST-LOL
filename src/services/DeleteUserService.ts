import { getCustomRepository} from "typeorm";

import { SummonerRepository} from "../repositories/SummonerRepository";

class DeleteUserService{

    async execute(summonerId){

        const summonerRepository = getCustomRepository(SummonerRepository);

        const user = await summonerRepository.findOne({summonerId});

        if(!user){
            throw new Error("jogador não existe!");
        }

        await summonerRepository.remove(user);

        return {message: "successfully deleted"};

    }
}


export { DeleteUserService};