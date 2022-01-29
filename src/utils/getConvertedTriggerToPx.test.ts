import getConvertedTriggerToPx from './getConvertedTriggerToPx';

test('Simple px', () => {
  expect(getConvertedTriggerToPx('100px', 100)).toEqual(100);
});

test('Simple px with extra spacings', () => {
  expect(getConvertedTriggerToPx('100 px ', 100)).toEqual(100);
});

test('Simple percents with extra spacings', () => {
  expect(getConvertedTriggerToPx('100 % ', 200)).toEqual(200);
});

test('Simple viewport height with extra spacings', () => {
  expect(getConvertedTriggerToPx('   5 0 vh ', 200)).toEqual(100);
});

test('Unsupported units', () => {
  expect(getConvertedTriggerToPx('   5 0 v ', 200)).toEqual(50);
});
