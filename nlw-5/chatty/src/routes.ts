import { Router } from "express";

import { SettingsController } from "./controllers/SettingsController";
import { MessagesController } from "./controllers/MessagesController";
import { UsersController } from "./controllers/UsersController";

const routes = Router();

const settingsController = new SettingsController();
const messagesController = new MessagesController();
const usersController = new UsersController();

routes.post('/settings', settingsController.create);
routes.post('/users', usersController.create);
routes.post('/messages', messagesController.create);

routes.get('/settings/:username', settingsController.findByUsername);
routes.get('/messages/:id', messagesController.showByUser);

routes.put('/settings/:username', settingsController.update);

export {
  routes
}
