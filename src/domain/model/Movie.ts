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

  constructor(
    title: string,
    runningTime: Duration,
    fee: Money,
    discountConditions: DiscountCondition[],

    movieType: MovieType,
    discountAmount: Money,
    discountPercent: number
  ) {
    this.title = title;
    this.runningTime = runningTime;
    this.fee = fee;
    this.discountConditions = discountConditions;

    this.movieType = movieType;
    this.discountAmount = discountAmount;
    this.discountPercent = discountPercent;
  }

  public calculateMovieFee(screening: Screening): Money {
    if (this.isDiscountable(screening)) {
      return this.fee.minus(this.calculateDiscountAmount());
    }

    return this.fee;
  }

  private isDiscountable(screening: Screening): boolean {
    return this.discountConditions.some((condition) => condition.isSatisfiedBy(screening));
  }

  private calculateDiscountAmount(): Money {
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

  private calculateAmountDiscountAmount(): Money {
    return this.discountAmount;
  }

  private calculatePercentDiscountAmount(): Money {
    return this.fee.times(this.discountPercent);
  }

  private calculateNoneDiscountAmount(): Money {
    return Money.ZERO;
  }
}

export default Movie;
