import getConvertItemUnitToPx from './getConvertItemUnitToPx';

type TriggerType = string | number;
type TriggerTypePx = number;

const getConvertedTriggersToPx = (
  triggers: TriggerType[],
  height: number
): TriggerTypePx[] => {
  const convertedTriggers = [] as number[];

  triggers.forEach((trigger) => {
    let convetedValue = 0;

    if (typeof trigger === 'string') {
      convetedValue = getConvertItemUnitToPx(trigger, height);
    } else if (typeof trigger === 'number') convetedValue = trigger;

    convertedTriggers.push(convetedValue);
  });

  return convertedTriggers;
};

export default getConvertedTriggersToPx;
