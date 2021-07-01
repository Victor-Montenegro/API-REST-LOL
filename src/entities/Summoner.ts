import { Entity, PrimaryColumn, Column, JoinColumn,ManyToOne } from "typeorm"

import { Exclude } from "class-transformer"
import { v4 as uuid} from "uuid"

import { User} from "./User"

@Entity("Summoner")
class Summoner{

    @PrimaryColumn()
    id: string;

    @Column()
    NickName: string;

    @Column({unique:true})
    AccountId: string;

    @Column()
    SummonerLevel: number;

    @Column()
    ProfileIconId: number;

    @Column({unique:true})
    summonerId: number;

    @Exclude()
    @Column()
    userId: string;

    @JoinColumn({name: "id"})
    @ManyToOne(() => User)
    userID: User;

    constructor(){

        if(!this.id){
            this.id = uuid();
        }

    }

}

export { Summoner};