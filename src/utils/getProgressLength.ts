const getProgressLength = (
  elementHeight: number,
  windowHeight: number,
  scrollTriggerStartOffset: number,
  scrollTriggerEndOffset: number
): number =>
  elementHeight +
  windowHeight +
  scrollTriggerStartOffset -
  scrollTriggerEndOffset;

export default getProgressLength;
