
import { Request, Response} from "express";

import { DeleteUserService} from "../services/DeleteUserService";

class DeleteUserController{

    async handle(request: Request, response: Response){

        const { summonerId } = request.params; 

        const deleteuserService = new DeleteUserService();

        const result = await deleteuserService.execute(summonerId);

        response.status(200).json(result);

    }
}

export {DeleteUserController};