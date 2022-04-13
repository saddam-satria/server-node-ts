import { compare, genSalt, hash } from 'bcrypt';
import { IHash } from '../interfaces/helpers';

class Hash implements IHash {
  async hash(value: string | Buffer, salt?: string | number): Promise<string> {
    return await hash(value, salt ? salt : await genSalt(10));
  }

  async match(
    value: string | Buffer,
    encryptedValue: string
  ): Promise<boolean> {
    return await compare(value, encryptedValue);
  }
}

export default Hash;
