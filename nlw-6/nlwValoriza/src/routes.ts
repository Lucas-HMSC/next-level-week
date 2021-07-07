import { Router } from "express";

import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveCompliments";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateUserController } from "./controllers/CreateUserControllers";
import { CreateTagController } from "./controllers/CreateTagController";
import { ListUsersController } from "./controllers/ListUsersController";
import { ListTagsController } from "./controllers/ListTagsController";

import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ensureAdmin } from "./middlewares/ensureAdmin";

const router = Router();

const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const listUsersController = new ListUsersController();
const listTagsController = new ListTagsController();

router.post('/users', createUserController.handle);
router.post('/tags', ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post('/login', authenticateUserController.handle);  
router.post('/compliments', ensureAuthenticated, createComplimentController.handle);

router.get('/users/compliments/send', ensureAuthenticated, listUserSendComplimentsController.handle);
router.get('/users/compliments/receive', ensureAuthenticated, listUserReceiveComplimentsController.handle);
router.get('/tags', ensureAuthenticated, listTagsController.handle);
router.get('/users', ensureAuthenticated, listUsersController.handle);

export {
  router
}
