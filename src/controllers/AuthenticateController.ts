import { Request, Response } from "express";

import { AuthenticateUserService } from "../services/AuthenticateUserService";


class AuthenticateController{


    async handle(request: Request, response: Response){

        const authenticateUserService = new AuthenticateUserService();

        const {  email,password } = request.body;

        const token = await authenticateUserService.execute({email,password});

        return response.status(200).json({token:token});

    }

}

export {AuthenticateController};