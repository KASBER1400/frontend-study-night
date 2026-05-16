const { shuffle } = require('../starter/src/shuffle.js');

describe('shuffle function', () => {
  it('should shuffle the indexes of an array', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const shuffledArray = [...originalArray];
    shuffle(shuffledArray);
    
    expect(shuffledArray).to.have.lengthOf(originalArray.length);
    expect(shuffledArray).to.have.members(originalArray);
  });
  
  it('should handle empty array', () => {
    const emptyArray = [];
    expect(() => shuffle(emptyArray)).to.not.throw();
  });
  
  it('should handle array with one element', () => {
    const singleElementArray = [42];
    const result = shuffle(singleElementArray);
    expect(result).to.have.lengthOf(1);
    expect(result[0]).to.equal(42);
  });
});