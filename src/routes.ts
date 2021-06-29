import { Router } from "express";

import { CreateUserController } from "./controllers/CreateUserController";
import { AuthenticateController} from "./controllers/AuthenticateController"

const createUserController = new CreateUserController();
const authenticateController = new AuthenticateController();

const router = Router();

router.post(`/users`, createUserController.handle);

router.post(`/login`, authenticateController.handle);

export { router};