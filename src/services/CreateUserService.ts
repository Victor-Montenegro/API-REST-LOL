import { getCustomRepository } from "typeorm"
import { hash } from "bcryptjs"
import { UserRepository } from "../repositories/UserRepository";


interface IUserRequest{
    email: string;
    name: string;
    password: string;
}

class CreateUserService{

    async execute({email,name,password}:IUserRequest){

        const userRepository = getCustomRepository(UserRepository);

        if(!email){

            throw new Error("email incorreto!");
        }

        if(!name){
            throw new Error("name incorreto!");
        }

        if(!password){

            throw new Error("password incorreto!");
        }


        const emailNotExist = await userRepository.findOne({
            email
        });

        if(emailNotExist){
           throw new Error("email já cadastrado!"); 
        }

        const  passwordCript = await hash(password,8);

        const user = userRepository.create({
            email,
            name, 
            password: passwordCript
        })

        await userRepository.save(user);

        return user;

    }

}

export {CreateUserService};