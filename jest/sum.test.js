const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});


test('adds 3 + 2 to equal 3', () => {
  expect(sum(3, 2)).toBe(5);
});


test('4 + 5',()=>{
  expect(sum(3,3)).toBe(6);
  expect(sum(3,4)).toBeLessThan(10);
});
