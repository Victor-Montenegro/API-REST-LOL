import { getCustomRepository} from "typeorm";

import {SummonerRepository} from "../repositories/SummonerRepository";

import axios from "axios";
import xl from "excel4node";

class ExportSummonerService{

    async execute(api_key){
        
        if(!api_key){

            throw new Error(`API key incorreta!`);
        }

        const summonerRepository = getCustomRepository(SummonerRepository);

        const summoner = await summonerRepository.find();

        if(!summoner){

            throw new Error(`não existem jogadores!`);
        }

        let dataExport = [];

        let summonersLeague = summoner.map(async records =>{

            let { data } = await axios.get(`https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/${records.summonerId}/?api_key=${api_key}`)

            if(!(data.length == 0)){
                
                let wins = 0;
                let losses = 0;

                data.forEach(la =>{

                    wins += la.wins;
                    losses += la.losses;  
                })

                const exportSummoner = {
                    summonerName: records.NickName,
                    summonerId: records.summonerId,
                    wins: wins.toString(),
                    losses: losses.toString(),
                }
                dataExport.push(exportSummoner);
            }else{
                const exportSummoner = {
                    summonerName: records.NickName,
                    summonerId: records.summonerId,
                    wins: "0",
                    losses: "0",
                }
                dataExport.push(exportSummoner);
            }
        
        })
    
        await Promise.all(summonersLeague);

        const wb = new xl.Workbook();
        const ws = wb.addWorksheet(`Summoners`);

        const headingColumnNames = [
            "summonerName",
            "summonerId",
            "vitorias",
            "derrotas",
        ];

        let headingColumnnIndex = 1;

        headingColumnNames.forEach( heading =>{
            
            ws.cell(1,headingColumnnIndex++).string(heading);
        })

        let rowIndex = 2;        
        dataExport.forEach(records =>{

            let columnIndex = 1;
            Object.keys(records).forEach( columnNames =>{

                ws.cell(rowIndex,columnIndex++).string(records[columnNames]);
            })
            rowIndex++;
        })

        return wb;

    }
}

export { ExportSummonerService};