import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UserRepositories";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

const { PRIVATE_KEY } = process.env;

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {

  async execute({ email, password }: IAuthenticateRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    // Check if email exists
    const user = await usersRepositories.findOne({
      email
    });

    if (!user) {
      throw new Error('Email/Password incorrect');
    }

    // Check is password is correct
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('Email/Password incorrect');
    }

    // Generate token
    const token = sign(
    {
      email: user.email,
    }, 
    "c5ad2505da60d3ce451d7f0a44242ba5", 
    {
      subject: user.id,
      expiresIn: '1d'
    });

    return token;
  }
}

export {
  AuthenticateUserService
}