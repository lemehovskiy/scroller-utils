import getProgressLength from './getProgressLength';

test('Simple progress test', () => {
  expect(getProgressLength(275.09375, 917, 0, 0)).toEqual(1192.09375);
});
