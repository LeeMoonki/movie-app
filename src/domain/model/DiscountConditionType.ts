export const DiscountConditionType = {
  SEQUENCE: 'SEQUENCE', // 순번 조건
  PERIOD: 'PERIOD', // 기간 조건
} as const;

export type DiscountConditionType =
  typeof DiscountConditionType[keyof typeof DiscountConditionType];
