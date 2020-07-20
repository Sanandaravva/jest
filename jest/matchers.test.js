test('check p',() => {
  const p=10;
  if(p<20)
  {
    expect(p).toBeTruthy();
  }
  else if (p==4) {
    expect(p).toBeFalsy();
  }
  expect(p).not.toBeNull();
  expect(p).toBeDefined();
  expect(p).not.toBeUndefined();

});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});
