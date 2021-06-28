import { Request, Response } from "express";

import { CreateUserService} from "../services/CreateUserService"

class CreateUserController{

    async handle(req: Request, res: Response){

        const {email,name,password} = req.body;

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({email,name,password});

        return res.status(201).json(user);


    }

}

export { CreateUserController};