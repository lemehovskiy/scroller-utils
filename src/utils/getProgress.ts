/**
 *
 * @remarks
 * This method returns the current progress value
 *
 */

const getProgress = (
  scrollTop: number,
  windowHeight: number,
  scrollTriggerOffsetPxStart: number,
  elementOffsetTop: number,
  scrollLength: number
): number => {
  const scrollTriggerStart =
    scrollTop + windowHeight + scrollTriggerOffsetPxStart;

  let progress = (scrollTriggerStart - elementOffsetTop) / scrollLength;

  if (progress > 1) progress = 1;
  if (progress < 0) progress = 0;

  const roundedProgress = Math.round(progress * 10000) / 10000;

  return roundedProgress;
};

export default getProgress;
