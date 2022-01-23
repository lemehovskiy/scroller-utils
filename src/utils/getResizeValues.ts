import getTriggers from './getTriggers';
import getProgressLength from './getProgressLength';

const getResizeValues = (
  scrollTop: number,
  windowHeight: number,
  bodyHeight: number,
  elementViewportOffsetTop: number,
  elementHeight: number,
  scrollTriggerOffset: {
    start: number | string;
    end: number | string;
  },
  autoAdjustScrollOffset: boolean
): {
  elementTriggerOffsetTop: number;
  elementTriggerOffsetBottom: number;
  scrollTriggerOffsetStart: number;
  scrollTriggerOffsetEnd: number;
  progressLength: number;
} => {
  const {
    elementTriggerOffsetTop,
    elementTriggerOffsetBottom,
    scrollTriggerOffsetStart,
    scrollTriggerOffsetEnd,
  } = getTriggers(
    scrollTriggerOffset,
    scrollTop,
    elementViewportOffsetTop,
    elementHeight,
    windowHeight,
    bodyHeight,
    autoAdjustScrollOffset
  );

  const progressLength = getProgressLength(
    elementHeight,
    windowHeight,
    scrollTriggerOffsetStart,
    scrollTriggerOffsetEnd
  );

  return {
    elementTriggerOffsetTop,
    elementTriggerOffsetBottom,
    scrollTriggerOffsetStart,
    scrollTriggerOffsetEnd,
    progressLength: progressLength,
  };
};

export default getResizeValues;
