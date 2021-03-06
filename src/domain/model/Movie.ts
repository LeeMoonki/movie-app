import DiscountCondition from './DiscountCondition';
import Duration from './Duration';
import Money from './Money';
import { MovieType } from './MovieType';
import Screening from './Screening';

class Movie {
  private title: string;
  private runningTime: Duration;
  private fee: Money;
  private discountConditions: DiscountCondition[];

  private movieType: MovieType;
  private discountAmount: Money;
  private discountPercent: number;

  constructor({
    title,
    runningTime,
    fee,
    discountConditions,

    movieType,
    discountAmount,
    discountPercent,
  }: {
    title: string;
    runningTime: Duration;
    fee: Money;
    discountConditions: DiscountCondition[];

    movieType: MovieType;
    discountAmount: Money;
    discountPercent: number;
  }) {
    this.title = title;
    this.runningTime = runningTime;
    this.fee = fee;
    this.discountConditions = discountConditions;

    this.movieType = movieType;
    this.discountAmount = discountAmount;
    this.discountPercent = discountPercent;
  }

  public calculateMovieFee(screening: Screening) {
    if (this.isDiscountable(screening)) {
      return this.fee.minus(this.calculateDiscountAmount());
    }

    return this.fee;
  }

  private isDiscountable(screening: Screening) {
    return this.discountConditions.some((condition) => condition.isSatisfiedBy(screening));
  }

  private calculateDiscountAmount() {
    if (this.movieType === MovieType.AMOUNT_DISCOUNT) {
      return this.calculateAmountDiscountAmount();
    }

    if (this.movieType === MovieType.PERCENTAGE_DISCOUNT) {
      return this.calculatePercentDiscountAmount();
    }

    if (this.movieType === MovieType.NONE_DISCOUNT) {
      return this.calculateNoneDiscountAmount();
    }

    throw new Error('Unknown discount type');
  }

  private calculateAmountDiscountAmount() {
    return this.discountAmount;
  }

  private calculatePercentDiscountAmount() {
    return this.fee.times(this.discountPercent);
  }

  private calculateNoneDiscountAmount() {
    return Money.ZERO;
  }
}

export default Movie;
