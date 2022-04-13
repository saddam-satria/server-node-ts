import Hash from '../helpers/hash';
import JwtHelper from '../helpers/jwtHelpers';
import {
  DecodeOptions,
  Jwt,
  JwtPayload,
  Secret,
  SignOptions,
  VerifyOptions,
} from 'jsonwebtoken';

interface IHelpers {
  hash: Hash;
  jwt: JwtHelper;
}

interface IHash {
  hash(value: string | Buffer, salt?: string | number): Promise<string>;
  match(value: string | Buffer, encryptedValue: string): Promise<boolean>;
}

interface IJwt {
  generateToken(
    payload: string | Buffer | object,
    secretKey: Secret,
    options?: SignOptions
  ): string;
  verifyToken(
    token: string,
    secretKey: string,
    options?: VerifyOptions & { complete: true }
  ): Jwt | string | JwtPayload;
  decodeToken(
    token: string,
    options?: DecodeOptions & {
      complete: true;
    }
  ): null | Jwt | JwtPayload | string;
}

export { IHelpers, IHash, IJwt };
