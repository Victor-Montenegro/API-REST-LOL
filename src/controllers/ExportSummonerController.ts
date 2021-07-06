import { Request, Response } from "express";

import { ExportSummonerService} from "../services/ExportSummonerService";


class ExportSummonerController{

    async handle(request: Request, response: Response){

        const { api_key } = request.query;

        const exportSummonerService = new ExportSummonerService();

        const summoner = await exportSummonerService.execute(api_key);

        return response.status(200).json(summoner);
    }
}

export {ExportSummonerController};