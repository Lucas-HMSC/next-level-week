import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UserRepositories";
import { classToPlain } from 'class-transformer';

class ListUsersService {

  async execute() {
    const usersRepositories = getCustomRepository(UsersRepositories);

    const users = await usersRepositories.find();

    return classToPlain(users);
  }
}

export {
  ListUsersService
}