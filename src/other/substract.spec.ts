import { substract } from './substract';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import 'mocha';

chai.use(chaiHttp);
const expect = chai.expect;

describe('Substract Function', () => {
  it('should return 1', () => {
    const result = substract(2, 1);
    expect(result).to.eq(1);
  })
})