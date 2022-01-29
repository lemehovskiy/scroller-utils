import getConvertedTriggersToPx from './getConvertedTriggersToPx';
import getAdjustedTriggerOffset from './getAdjustedTriggerOffset';

/**
 *
 * @remarks
 * This method returns element and scroll triggers offset
 *
 */

const getTriggers = (
  scrollTriggerOffsetRaw: {
    start: number | string;
    end: number | string;
  },
  scrollTop: number,
  elementViewportOffsetTop: number,
  elementHeight: number,
  windowHeight: number,
  bodyHeight: number,
  autoAdjustScrollOffset: boolean
): {
  elementTriggerOffsetTop: number;
  elementTriggerOffsetBottom: number;
  scrollTriggerOffsetStart: number;
  scrollTriggerOffsetEnd: number;
} => {
  const elementOffsetTop = elementViewportOffsetTop + scrollTop;

  const elementTriggerOffsetTop = elementOffsetTop;
  const elementTriggerOffsetBottom = elementOffsetTop + elementHeight;

  const [scrollTriggerStartOffsetPx, scrollTriggerEndOffsetPx] =
    getConvertedTriggersToPx(
      [scrollTriggerOffsetRaw.start, scrollTriggerOffsetRaw.end],
      windowHeight
    );

  let autoAdjustOffsetStart = 0;
  let autoAdjustOffsetEnd = 0;

  if (autoAdjustScrollOffset) {
    const {
      startOffset: calculatedAutoAdjustOffsetStart,
      endOffset: calculatedAutoAdjustOffsetEnd,
    } = getAdjustedTriggerOffset(
      {
        top: elementTriggerOffsetTop,
        bottom: elementTriggerOffsetBottom,
      },
      windowHeight,
      bodyHeight
    );
    autoAdjustOffsetStart = calculatedAutoAdjustOffsetStart;
    autoAdjustOffsetEnd = calculatedAutoAdjustOffsetEnd;
  }

  return {
    elementTriggerOffsetTop,
    elementTriggerOffsetBottom,
    scrollTriggerOffsetStart:
      scrollTriggerStartOffsetPx + autoAdjustOffsetStart,
    scrollTriggerOffsetEnd: scrollTriggerEndOffsetPx + autoAdjustOffsetEnd,
  };
};

export default getTriggers;
