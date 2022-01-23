import getTriggers from './getTriggers';

test('getTriggers', () => {
  expect(
    getTriggers(
      { start: 0, end: 0 },
      1144,
      873.390625,
      275.09375,
      917,
      2292,
      false
    )
  ).toEqual({
    elementTriggerOffsetTop: 2017.390625,
    elementTriggerOffsetBottom: 2292.484375,
    scrollTriggerOffsetStart: 0,
    scrollTriggerOffsetEnd: 0,
  });
});

test('getTriggers', () => {
  expect(
    getTriggers(
      { start: 0, end: 0 },
      0,
      2017.390625,
      275.09375,
      917,
      2292,
      false
    )
  ).toEqual({
    elementTriggerOffsetTop: 2017.390625,
    elementTriggerOffsetBottom: 2292.484375,
    scrollTriggerOffsetStart: 0,
    scrollTriggerOffsetEnd: 0,
  });
});
