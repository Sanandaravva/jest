const Calculator = require('./calculator');
beforeEach(() => {
  a= new Calculator();
});


test('adding', () => {
  expect(a.add(1, 2)).toBe(3);
  expect(a.addS(4)).toBeGreaterThan(5);
  expect(a.add(1, 2)).toBeGreaterThanOrEqual(2.5);
  expect(a.add(1, 2)).toBeLessThan(5);
  expect(a.add(1, 2)).toBeLessThanOrEqual(4.5);
});

test('subtracting', () => {
  expect(a.sub(4, 2)).toBe(2);
  expect(a.sub(4, 2)).toBeGreaterThan(1);
  expect(a.sub(4, 2)).toBeGreaterThanOrEqual(1.5);
  expect(a.subS(2)).toBeLessThan(1);
  expect(a.sub(4, 2)).toBeLessThanOrEqual(3.5);
});

test('multiplying', () => {
  expect(a.mul(3, 2)).toBeGreaterThan(3);
  expect(a.mulS(2)).toBe(12);
  expect(a.mul(3, 2)).toBeGreaterThanOrEqual(3.5);
  expect(a.mul(3, 2)).toBeLessThan(7);
  expect(a.mul(3, 2)).toBeLessThanOrEqual(8);
});

test('dividing', () => {
  expect(a.div(8, 2)).toBe(4);
  expect(a.divS(2)).toBeGreaterThan(1);
  expect(a.div(8, 2)).toBeGreaterThanOrEqual(3.5);
  expect(a.div(8, 2)).toBeLessThan(5);
  expect(a.div(8, 2)).toBeLessThanOrEqual(4.5);
});



afterEach(()=>{
  a= null;
});
