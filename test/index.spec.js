/* global describe, it, before */
import chai from 'chai';
import {solid, regular, brands} from '../lib/fa-list.js';

chai.expect();

const expect = chai.expect;

describe('should be array', () => {
  it('regular should be an array', () => {
    expect(regular).to.be.an('array');
  });
  it('brands should be an array', () => {
    expect(brands).to.be.an('array');
  });
  it('solid should be an array', () => {
    expect(solid).to.be.an('array');
  });
});
