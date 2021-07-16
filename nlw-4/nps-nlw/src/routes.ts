import { Router } from 'express';

import { SendMailController } from './controllers/SendMailController';
import { SurveysController } from './controllers/SurveysController';
import { UsersController } from './controllers/UsersController';

const router = Router();

const sendMailController = new SendMailController();
const surveysController = new SurveysController();
const userController = new UsersController();

router.post('/surveys', surveysController.create);
router.post('/users', userController.create);
router.post('/sendMail', sendMailController.execute);

router.get('/surveys', surveysController.show);

export { 
  router
}