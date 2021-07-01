import axios from "axios";

import { Request, Response } from "express"

import { CreateSummonerService } from "../services/CreateSummonerService";


class CreateSummonerController{

    async handle(request: Request, response: Response){

        const { summonerName } = request.body;

        const { user_id } = request;

        const {data } = await axios(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=RGAPI-2b9dcf08-746c-4b9c-b14b-ffe3694bbe8c`); 
        
        const {id,accountId,name,profileIconId,summonerLevel} = data;

        const createSummonerService = new CreateSummonerService();

        const summoner = await createSummonerService.execute({
            AccountId: accountId,
            NickName : name,
            ProfileIconId: profileIconId,
            SummonerLevel: summonerLevel,
            summonerId: id,
            userId: user_id
        }) 



        response.status(200).json(summoner);
    }

}

export { CreateSummonerController };