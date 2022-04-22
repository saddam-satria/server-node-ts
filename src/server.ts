import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './app/config/router';
import path from 'path';

(() => {
  dotenv.config();
  const app = express();
  const PORT: undefined | string | number = process.env.PORT || 5000;

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use('/static', express.static(path.join(__dirname, '../public')));
  app.use(routes);

  app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
  });
})();
