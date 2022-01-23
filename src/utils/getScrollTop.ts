const getScrollTop = (): number =>
  document.body.scrollTop || document.documentElement.scrollTop;
export default getScrollTop;
