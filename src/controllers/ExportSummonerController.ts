import { Request, Response } from "express";

import { ExportSummonerService} from "../services/ExportSummonerService";


class ExportSummonerController{

    async handle(request: Request, response: Response){

        const { api_key } = request.query;

        const exportSummonerService = new ExportSummonerService();

        const wb = await exportSummonerService.execute(api_key);

        const time = new Date().getTime();
        
        return wb.write(`${time}_summoner.xlsx`,response);
    }
}

export {ExportSummonerController};