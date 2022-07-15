import { NextFunction, Request, Response } from 'express';
import helpers from '../config/helpers';

export const logging = (
  request: Request,
  _response: Response,
  next: NextFunction
) => {
  helpers.logger.server.setLog(
    'info',
    `request ${request.protocol} ${
      request.originalUrl
    } ${request.method.toUpperCase()}`,
    `header: content-type(${request.header(
      'Content-Type'
    )}) agent(${request.header('user-agent')}) auth(${
      request.headers.authorization ? request.headers.authorization : 'No Auth'
    })`
  );

  next();
};
