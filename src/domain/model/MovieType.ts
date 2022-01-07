export const MovieType = {
  AMOUNT_DISCOUNT: 'AMOUNT_DISCOUNT', // 금액 할인 정책
  PERCENTAGE_DISCOUNT: 'PERCENTAGE_DISCOUNT', // 비율 할인 정책
  NONE_DISCOUNT: 'NONE_DISCOUNT', // 미적용
} as const;

export type MovieType = typeof MovieType[keyof typeof MovieType];
