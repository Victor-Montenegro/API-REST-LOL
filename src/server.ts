import "reflect-metadata";
import cors  from "cors";

import express,{ Request, Response, NextFunction } from "express";

import "express-async-errors";

import { router } from "./routes"

import "./database";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.use(express.urlencoded({ extended:true}));



app.use((error:Error,req:Request, res:Response, next: NextFunction)=>{

    if(error instanceof Error){
        
        return res.status(400).json({
            error: error.message
        });
    }

    return res.status(500).json({status:"error",error: "Error no servidor"});


})

app.listen(3000,()=>{

    console.log(`Server ON na port 3000`);
});
