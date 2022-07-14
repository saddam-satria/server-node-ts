import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRoutes from './app/routes/api';
import path from 'path';
import { BASE_URL, PORT } from './app/config/utils/constant';

(() => {
  dotenv.config();
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use('/assets', express.static(path.join(__dirname, '../public')));
  app.use('/api', apiRoutes);

  app.listen(PORT, () => {
    console.log(`server running on ${BASE_URL}`);
  });
})();
