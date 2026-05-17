import { expect } from 'chai';
import { shuffle } from '../starter/src/shuffle.js';

describe('shuffle function', () => {
  it('should change the order of the array', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const shuffledArray = shuffle([...originalArray]);
    
    // Check all original elements are still present
    expect(shuffledArray).to.have.members(originalArray);
    
    // Check that the order changed (not identical to original)
    // With 5 elements, probability of same order is 1/120
    expect(shuffledArray).to.not.deep.equal(originalArray);
  });

  it('should handle empty array', () => {
    const result = shuffle([]);
    expect(result).to.deep.equal([]);
  });

  it('should handle array with one element', () => {
    const result = shuffle([42]);
    expect(result).to.deep.equal([42]);
  });
});