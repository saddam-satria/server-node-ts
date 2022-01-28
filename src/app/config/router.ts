import { Router } from 'express';
import WelcomeController from '../controllers/welcomeController';

const router = Router();

router.get('/', (req, res) => new WelcomeController(req, res).get());

export default router;
