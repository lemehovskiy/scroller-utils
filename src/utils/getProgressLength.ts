/**
 *
 * @remarks
 * This method returns the progress length in pixels
 *
 */

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
