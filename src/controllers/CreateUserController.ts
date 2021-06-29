import { Request, Response } from "express";

import { CreateUserService} from "../services/CreateUserService"

class CreateUserController{

    async handle(request: Request, response: Response){

        const {email,name,password} = request.body;

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({email,name,password});

        return response.status(201).json(user);


    }

}

export { CreateUserController};