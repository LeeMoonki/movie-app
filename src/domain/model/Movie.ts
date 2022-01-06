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
  private dicountAmount: Money;
  private discountPercent: number;

  public calculateMovieFee(screening: Screening): Money {
    return new Money(1);
  }
}

export default Movie;
