import { Request, Response } from 'express';
import {
  BASE_URL,
  PORT,
  BASE_ASSET,
  BASE_PATH,
  ASSET_URL,
} from '../config/utils/constant';

class WelcomeController {
  public get(_request: Request, response: Response) {
    response.status(200).json({
      message: 'welcome to server node TS boilerplate',
      status: 'success',
      owner: 'Saddam Satria',
      github: 'https://github.com/saddam-satria',
      linkedIn: 'https://www.linkedin.com/in/saddam-satria-ardhi-837570170/',
      instagram: 'https://instagram.com/saddamsatria_12',
      BASE_URL,
      PORT,
      BASE_PATH,
      ASSET_URL,
      BASE_ASSET,
    });
  }
}

export default new WelcomeController();
