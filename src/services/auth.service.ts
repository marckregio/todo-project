import jwt from "jsonwebtoken";
import express from 'express';
import { Login } from "../interfaces/authentication";

export const key = "you and i against the world.";

export function AuthService() {
  function authenticate(requestObject: Login): Promise<any> {
    const token = jwt.sign(requestObject, key, {
      expiresIn: "30 days",
    });
    return token;
  }

  return { authenticate }
}

export function expressAuthentication(
  request: express.Request,
  securityName: string,
  scopes?: string[]
): Promise<any> {
  return Promise.resolve();
}