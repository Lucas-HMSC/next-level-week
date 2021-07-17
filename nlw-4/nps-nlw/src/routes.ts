import { Router } from 'express';

import { SendMailController } from './controllers/SendMailController';
import { SurveysController } from './controllers/SurveysController';
import { AnswerController } from './controllers/AnswerController';
import { UsersController } from './controllers/UsersController';
import { NpsController } from './controllers/NpsController';

const router = Router();

const sendMailController = new SendMailController();
const surveysController = new SurveysController();
const answerController = new AnswerController();
const userController = new UsersController();
const npsController = new NpsController();

router.post('/surveys', surveysController.create);
router.post('/users', userController.create);
router.post('/sendMail', sendMailController.execute);

router.get('/surveys', surveysController.show);
router.get('/answers/:value', answerController.execute);
router.get('/nps/:survey_id', npsController.execute);

export { 
  router
}
