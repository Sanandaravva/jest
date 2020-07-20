const sum = require('./sum');

beforeEach(() => {
  value=sum(3,1);
});

test('three plus two', () => {
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers

});

test('equality', () => {
  expect(value).toBe(4);
  expect(value).toEqual(4);
});
