import { Request, Response } from 'express';

class BaseController {
  protected request: Request;
  protected response: Response;

  constructor(request: Request, response: Response) {
    this.request = request;
    this.response = response;
  }
}

export default BaseController;
