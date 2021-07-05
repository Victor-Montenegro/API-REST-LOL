import { Router } from "express";


import { check } from "express-validator";

import { ensureEmail } from "./middlewares/ensureEmail";
import {ensureAuthenticated  } from "./middlewares/ensureAuthenticated";

import { CreateUserController } from "./controllers/CreateUserController";
import { AuthenticateController} from "./controllers/AuthenticateController"
import { CreateSummonerController } from "./controllers/CreateSummonerController";
import { ListUsersController } from "./controllers/ListUsersController";
import { UpdateUserController } from "./controllers/UpdateUserController";
import { DeleteUserController } from "./controllers/DeleteUserController"

const createUserController = new CreateUserController();
const authenticateController = new AuthenticateController();
const createSummonerController = new CreateSummonerController()
const listUsersController = new ListUsersController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

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
router.get(`/summoner`, ensureAuthenticated, listUsersController.handle);
router.put(`/summoner`,ensureAuthenticated,updateUserController.handle);
router.delete(`/summoner/:summonerId`,ensureAuthenticated,deleteUserController.handle);

export { router};