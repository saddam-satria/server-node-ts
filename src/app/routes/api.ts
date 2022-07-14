import { Router } from 'express';
import WelcomeController from '../controllers/welcomeController';

const router = Router();

router.get('/', (req, res) => WelcomeController.get(req, res));

export default router;
