import { getCustomRepository} from "typeorm";

import {SummonerRepository} from "../repositories/SummonerRepository";

import axios from "axios";

class ExportSummonerService{

    async execute(api_key){
        
        if(!api_key){

            throw new Error(`API key incorreta!`);
        }

        const summonerRepository = getCustomRepository(SummonerRepository);

        const summoner = await summonerRepository.find();

        let exportSummoner = [];

        summoner.forEach(async records =>{

            const { data } = await axios(`https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/${records.summonerId}/?api_key=${api_key}`);

            if(!(data.length == 0)){
                
                let wins = 0;
                let losses = 0;
                
                data.forEach(la =>{

                    wins += la.wins;
                    losses += la.losses;

                    
                })

                const teste = {
                    summonerId: records.summonerId,
                    wins: wins.toString(),
                    losses: losses.toString(),
                }

                console.log(teste);

                exportSummoner.push(teste);

                console.log(exportSummoner);
            }

        })


        return summoner;
        /*
        
         const wb = new xl.Workbook();
        const ws = wb.addWorksheet(`Summoners`);

        const data = [
            {
                summonerId: "1892ioehjkdnsa",
                vitorias: "122",
                derrotas: "90"
            },
            {
                summonerId: "112739uewjriodsfmcxzp",
                vitorias: "222",
                derrotas: "111"
            }
        ];

        const headingColumnNames = [
            "summonerId",
            "vitorias",
            "derrotas",
        ];

        let headingColumnnIndex = 1;

        headingColumnNames.forEach( heading =>{
            
            ws.cell(1,headingColumnnIndex++).string(heading);
        })

        let rowIndex = 2;        
        data.forEach(records =>{

            let columnIndex = 1;
            Object.keys(records).forEach( columnNames =>{

                ws.cell(rowIndex,columnIndex++).string(records[columnNames]);
            })
            rowIndex++;
        })

        await wb.write(`arquivo.xlsx`);
        
        
        */
    }
}

export { ExportSummonerService};