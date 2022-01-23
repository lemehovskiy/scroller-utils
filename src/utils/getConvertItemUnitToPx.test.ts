import getConvertItemUnitToPx from './getConvertItemUnitToPx';

test('Simple px', () => {
  expect(getConvertItemUnitToPx('100px', 100)).toEqual(100);
});

test('Simple px with extra spacings', () => {
  expect(getConvertItemUnitToPx('100 px ', 100)).toEqual(100);
});

test('Simple percents with extra spacings', () => {
  expect(getConvertItemUnitToPx('100 % ', 200)).toEqual(200);
});

test('Simple viewport height with extra spacings', () => {
  expect(getConvertItemUnitToPx('   5 0 vh ', 200)).toEqual(100);
});

test('Unsupported units', () => {
  expect(getConvertItemUnitToPx('   5 0 v ', 200)).toEqual(50);
});
