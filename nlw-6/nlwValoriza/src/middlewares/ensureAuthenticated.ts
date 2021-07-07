import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  // Receive token
  const authToken = request.headers.authorization;

  // Check if token is filled
  if (!authToken) {
    return response.status(401).end();
  }

  const [,token] = authToken.split(' ');
  
  try {
    // Check is token is valid
    const { sub } = verify(token, 'c5ad2505da60d3ce451d7f0a44242ba5') as IPayload;
    
    // Retrieve user data
    request.user_id = sub;

    return next();
  } catch (err) {
    return response.status(401).end();
  }
}