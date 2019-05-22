import { add } from './add';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import 'mocha';

chai.use(chaiHttp);
const expect = chai.expect;

describe('Add Function', () => {
  it('should return 3', () => {
    const result = add(1, 2);
    expect(result).to.eq(3);
  })
})