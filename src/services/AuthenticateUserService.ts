import { getCustomRepository } from "typeorm";
import {UserRepository } from "../repositories/UserRepository";

import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken"
interface IAuthUserRequest{

    email: string;
    password: string;
}

class AuthenticateUserService{

    async execute({email,password}: IAuthUserRequest){

        const userRepository = getCustomRepository(UserRepository);

        if(!email){

            throw new Error("email/password incorreto!");
        }

        if(!password){

            throw new Error("email/password incorreto!")
        }
        

        const user = await userRepository.findOne({ 
            email
        });

        if(!user){

            throw new Error("Usuario não existe!");
        }

        const passwordMath = await compare(password, user.password);

        if(!passwordMath){

            throw new Error("email/password incorreto!");
        }

        const token = sign(
            {
                email: user.email,
            },
            "1228e9596867a43a24208ef95d37c6ca",
            {
                subject: user.id,
                expiresIn: "1d"
            }
        );
        console.log(user)
        return token;
    }

}

export { AuthenticateUserService};
