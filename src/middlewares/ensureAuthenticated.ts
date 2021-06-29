import { Request, Response, NextFunction} from "express";

import { verify } from "jsonwebtoken";


interface IPayload{
    sub: string;
}

export async function ensureAuthenticated(request:Request, response:Response, next:NextFunction){

    const tokenAuth = request.headers.authorization;

    if(!tokenAuth){

        response.status(401).end();
    }

    const [,token] = tokenAuth.split(" ");

    try {
        
        const { sub } = verify(token, "1228e9596867a43a24208ef95d37c6ca") as IPayload;

        request.user_id = sub;

        return next();
    } catch (error) {

        response.status(401).end();        
    }

}

