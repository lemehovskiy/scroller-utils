/**
 *
 * @remarks
 * This method returns the scroll top of the document
 *
 */

const getScrollTop = (): number =>
  document.body.scrollTop || document.documentElement.scrollTop;
export default getScrollTop;
