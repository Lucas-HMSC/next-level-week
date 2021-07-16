import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { resolve } from 'path';

import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";
import { SurveysRepository } from "../repositories/SurveysRepository";
import { UsersRepository } from "../repositories/UsersRepository";

import SendMailService from "../services/SendMailService";

class SendMailController {
  async execute(request: Request, response: Response) {
    const { email, survey_id } = request.body;

    const usersRepository = getCustomRepository(UsersRepository);
    const surveysRepository = getCustomRepository(SurveysRepository);
    const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

    const userExists = await usersRepository.findOne({
      email
    });

    if (!userExists) {
      return response.status(400).json({ 
        error: 'User does not exists!',
      })
    }

    const surveyExists = await surveysRepository.findOne({
      id: survey_id
    });

    if (!surveyExists) {
      return response.status(400).json({
        error: 'Survey does not exists!',
      });
    }

    const variables = {
      name: userExists.name,
      title: surveyExists.title, 
      description: surveyExists.description,
      user_id: userExists.id,
      link: process.env.URL_MAIL
    }

    const npsPath = resolve(__dirname, '..', 'views', 'emails', 'npsMail.hbs');

    const surveyUserAlreadyExists = await surveysRepository.findOne({
      where: [ {user_id: userExists.id}, {value: null} ],
      relations: ['user', 'survey']
    });

    if (surveyUserAlreadyExists) {
      await SendMailService.execute(email, surveyExists.title, variables, npsPath);
      return response.json(surveyUserAlreadyExists);
    }

    // Save data into table 'survey_user'
    const surveyUser = surveysUsersRepository.create({
      user_id: userExists.id,
      survey_id
    });
    
    await surveysUsersRepository.save(surveyUser);

    // Send email to user
    await SendMailService.execute(email, surveyExists.title, variables, npsPath);

    return response.json(surveyUser);
  }
}

export {
  SendMailController
}