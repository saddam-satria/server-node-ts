import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './app/config/router';

(() => {
  dotenv.config();
  const app = express();
  const PORT: undefined | string | number = process.env.PORT || 5000;

  app.use(cors());
  app.use(routes);

  app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
  });
})();
