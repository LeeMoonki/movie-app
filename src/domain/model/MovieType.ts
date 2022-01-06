export const MovieType = {
  AMOUNT_DISCOUNT: 'AMOUNT_DISCOUNT',
  PERCENTAGE_DISCOUNT: 'PERCENTAGE_DISCOUNT',
  NONE_DISCOUNT: 'NONE_DISCOUNT',
} as const;

export type MovieType = typeof MovieType[keyof typeof MovieType];
