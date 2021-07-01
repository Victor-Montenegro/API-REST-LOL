import { Router } from "express";


import { check } from "express-validator";

import { ensureEmail } from "./middlewares/ensureEmail";
import {ensureAuthenticated  } from "./middlewares/ensureAuthenticated";

import { CreateUserController } from "./controllers/CreateUserController";
import { AuthenticateController} from "./controllers/AuthenticateController"
import { CreateSummonerController } from "./controllers/CreateSummonerController";

const createUserController = new CreateUserController();
const authenticateController = new AuthenticateController();
const createSummonerController = new CreateSummonerController()
const router = Router();

router.post(
    `/users`,
     check(`email`).
     isEmail().
     withMessage(`Email incorreto!`),
     ensureEmail,
     createUserController.handle);

router.post(`/login`, authenticateController.handle);

router.post(`/summoners`, ensureAuthenticated, createSummonerController.handle);

export { router};