import BaseController from '../config/controller';

class WelcomeController extends BaseController {
  public get() {
    this.response.send('welcome to server node TS');
  }
}

export default WelcomeController;
