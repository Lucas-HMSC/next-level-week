import { Router } from 'express';

import { SurveysController } from './controllers/SurveysController';
import { UsersController } from './controllers/UsersController';

const router = Router();

const surveysController = new SurveysController();
const userController = new UsersController();

router.post('/surveys', surveysController.create);
router.post('/users', userController.create);

router.get('/surveys', surveysController.show);

export { 
  router
}