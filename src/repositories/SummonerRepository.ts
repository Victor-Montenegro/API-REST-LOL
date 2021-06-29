import { EntityRepository, Repository } from "typeorm";

import {Summoner } from "../entities/Summoner";

@EntityRepository(Summoner)
class SummonerRepository extends Repository<Summoner>{ }

export {SummonerRepository};


