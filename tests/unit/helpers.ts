import { expect } from 'chai';
import helpers from '../../src/app/config/helpers';

describe('helpers trial', () => {
  describe('bcrypt', () => {
    const expectedValue = {
      value: 'saddam',
      encryptedValue:
        '$2b$10$rbUZUG9Y4OxF9CvriL1UsOF2hhvJ2ZnfT767sQq7m23.VoKVgRBqq',
    };

    describe('hashing string', () => {
      it('expect return string', async () => {
        const hash = await helpers.hash.hash('saddam');

        expect(hash).to.be.a('string');
      });
    });

    describe('matching string', () => {
      it('matching with correct value', async () => {
        const compare = await helpers.hash.match(
          expectedValue.value,
          expectedValue.encryptedValue
        );
        expect(compare).to.eq(true);
      });
      it('matching with incorrect value', async () => {
        const compare = await helpers.hash.match(
          'sadddam',
          expectedValue.encryptedValue
        );
        expect(compare).to.eq(false);
      });
      it('matching with incorrect encrypted value', async () => {
        const compare = await helpers.hash.match(
          expectedValue.value,
          'asdasssssss'
        );
        expect(compare).to.eq(false);
      });
    });
  });
  // describe('jwt', () => {
  //   const payload = {
  //     name: 'saddam',
  //     id: 1,
  //   };
  //   const falsyPayload = {
  //     name: 'sadddam',
  //     id: 1,
  //   };
  //   const expectedToken =
  //     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic2FkZGFtIiwiaWQiOjEsImlhdCI6MTY0OTgxNDA5OSwiZXhwIjoxNjQ5OTAwNDk5fQ.52Wg_nsCBhs3IHW1bV_HHGy8b5GQ-TVyiGaUzexKg_E';
  //   const secreyKey = 'dam';

  //   describe('generate token', () => {
  //     it('expect return string jwt token', () => {
  //       const token = helpers.jwt.generateToken(payload, secreyKey);

  //       expect(token).to.be.a('string');
  //     });
  //   });

  //   describe('verify token', () => {
  //     it('given correct payload', () => {
  //       const token = helpers.jwt.verifyToken(expectedToken, secreyKey);
  //       expect(token).include(payload);
  //     });
  //     it('given incorrect payload', () => {
  //       const token = helpers.jwt.verifyToken(expectedToken, secreyKey);
  //       expect(token).not.include(falsyPayload);
  //     });
  //   });

  //   describe('decode token', () => {
  //     it('given correct payload', () => {
  //       const token = helpers.jwt.decodeToken(expectedToken);
  //       expect(token).include(payload);
  //     });
  //     it('given incorrect payload', () => {
  //       const token = helpers.jwt.decodeToken(expectedToken);
  //       expect(token).not.include(falsyPayload);
  //     });
  //   });
  // });
});
