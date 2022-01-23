export default function getAdjustedTriggerOffset(
  elementOffset: {
    top: number;
    bottom: number;
  },
  windowHeight: number,
  documentHeight: number
): { startOffset: number; endOffset: number } {
  let startOffset = 0;
  const startOffsetSpace = elementOffset.top;
  if (windowHeight > startOffsetSpace) {
    startOffset = startOffsetSpace - windowHeight;
  }

  let endOffset = 0;
  const endOffsetSpace = documentHeight - elementOffset.bottom;
  if (windowHeight > endOffsetSpace) {
    endOffset = windowHeight - endOffsetSpace;
  }

  return {
    startOffset,
    endOffset,
  };
}
