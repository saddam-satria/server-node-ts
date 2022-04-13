import {
  sign,
  verify,
  decode,
  Secret,
  SignOptions,
  Jwt,
  VerifyOptions,
  DecodeOptions,
  JwtPayload,
} from 'jsonwebtoken';
import { IJwt } from '../interfaces/helpers';

class JwtHelper implements IJwt {
  generateToken(
    payload: string | Buffer | object,
    secretKey: Secret,
    options?: SignOptions
  ): string {
    return sign(payload, secretKey, options ? options : { expiresIn: '1d' });
  }
  verifyToken(
    token: string,
    secretKey: string,
    options?: VerifyOptions & { complete: true }
  ): Jwt | JwtPayload | string {
    return verify(token, secretKey, options);
  }
  decodeToken(
    token: string,
    options?: DecodeOptions & { complete: true }
  ): Jwt | JwtPayload | string | null {
    return decode(token, options);
  }
}

export default JwtHelper;
