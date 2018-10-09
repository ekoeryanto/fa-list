/* global describe, it */
const { expect } = require('chai');
const icons = require('../data/icons.json')

expect();

describe('fetched icons', () => {
  it('should be an object', () => {
    expect(icons)
      .to.be.an('object');
  });
  it('values not empty', () => {
    expect(Object.values(icons))
      .to.be.an('array')
      .that.is.not.empty
  });
});
