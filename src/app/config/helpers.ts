import Hash from '../helpers/hash';
import JwtHelper from '../helpers/jwtHelpers';
import { DatabaseLog, ServerLog } from '../helpers/log';
import { IHelpers } from '../interfaces/helpers';

const helpers: IHelpers = {
  jwt: new JwtHelper(),
  hash: new Hash(),
  logger: {
    server: new ServerLog(),
    database: new DatabaseLog(),
  },
};

export default helpers;
