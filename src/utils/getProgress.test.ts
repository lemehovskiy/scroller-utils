import getProgress from './getProgress';

test('Invisible element', () => {
  expect(getProgress(0, 917, 0, 2017.390625, 1192.09375)).toEqual(0);
});

test('Visible element', () => {
  expect(getProgress(1375, 917, 0, 2017.390625, 1192.09375)).toEqual(0.2304);
});
