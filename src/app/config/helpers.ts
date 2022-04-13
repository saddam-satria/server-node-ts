import Hash from '../helpers/hash';
import JwtHelper from '../helpers/jwtHelpers';
import { IHelpers } from '../interfaces/helpers';

const helpers: IHelpers = {
  jwt: new JwtHelper(),
  hash: new Hash(),
};

export default helpers;
