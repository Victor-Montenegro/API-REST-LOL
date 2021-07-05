import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";

import { hash } from "bcryptjs"


interface IUserRequest{
    email: string;
    name: string;
    password: string;
}

class CreateUserService{

    async execute({email,name,password}:IUserRequest){

        const userRepository = getCustomRepository(UserRepository);

        if(!name || name === " "){
            throw new Error("name incorreto!");
        }

        if(!password){

            throw new Error("password incorreto!");
        }


        const userAlreadyExists = await userRepository.findOne({
            email
        });

        if(userAlreadyExists){
           throw new Error("email já cadastrado!"); 
        }

        const  passwordHash = await hash(password,8);

        const user = userRepository.create({
            email,
            name, 
            password: passwordHash
        })

        await userRepository.save(user);

        

        return user;

    }

}

export {CreateUserService};