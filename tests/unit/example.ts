import { expect } from 'chai';
import { sum } from '../../src/app/helpers/example';

describe('testing function sum ', () => {
  it('should return 4', (done) => {
    expect(sum(2, 2)).to.eq(4);
    done();
  });
});
