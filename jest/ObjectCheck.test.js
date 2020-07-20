test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});

test('object assignment1', () => {
  const data = {one: 1};
  data['two'] = 2;
  data['three']=6;
  expect(data).toEqual({one: 1, two: 2,three: 6});
});
