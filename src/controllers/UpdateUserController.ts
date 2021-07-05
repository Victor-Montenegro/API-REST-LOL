
import { Request, Response} from "express";

import { UpdateUserService }  from "../services/UpdateUserService"


class UpdateUserController{

    async handle(request: Request, response: Response){

        const { summonerName, summonerLevel} = request.body;

        const { user_id } = request;

        const updateUserService = new UpdateUserService();

        const user = await updateUserService.execute({SummonerLevel:summonerLevel, NickName:summonerName,userId:user_id});

        response.status(200).json(user);
    }
}

export { UpdateUserController};