import {Entity, PrimaryColumn, Column} from "typeorm";
import { v4 as uuid} from "uuid";

@Entity("User")
class User {

    @PrimaryColumn()
    readonly id: string;

    @Column({unique: true})
    email: string;

    @Column()    
    name: string;

    @Column()
    password: string;

    constructor(){

        if(!this.id){
            this.id = uuid();
        }
    }
}

export { User };
