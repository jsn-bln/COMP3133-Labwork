const chai = import('chai');
const { add, mul, div, sub } = require('../app/calculator');


const expect = chai.expect;

describe('add', () => {
  it('adds two numbers', () => {
    const result = add(2, 3);
    expect(result).to.equal(5);
  });
  it('adds two numbers', () => {
    const result = add(2,5);
    expect(result).to.equal(6);
  });
});

describe('mul', () => {
  it('multiplies two numbers', () => {
    const result = mul(2, 3);
    expect(result).to.equal(6);
  });
  it('multiplies two numbers', () => {
    const result = mul(2,5);
    expect(result).to.equal(5);
  });
});

describe('div', () => {
  it('divides two numbers', () => {
    const result = div(6, 3);
    expect(result).to.equal(2);
  });
  it('divides two numbers', () => {
    const result = div(6,3);
    expect(result).to.equal(1);
  });
});


describe('sub', () => {
  it('subtracts two numbers', () => {
    const result = sub(6,3);
    expect(result).to.equal(3);
  });
  it('subtracts two numbers', () => {
    const result = sub(6,3);
    expect(result).to.equal(1);
  });
});
