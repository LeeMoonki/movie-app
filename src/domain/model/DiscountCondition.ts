import { DiscountConditionType } from './DiscountConditionType';
import Screening from './Screening';

class DiscountCondition {
  private type: DiscountConditionType;
  private sequence: number;
  private dayOfWeek: number;
  private startTime: Date;
  private endTime: Date;

  constructor({
    type,
    sequence,
    dayOfWeek,
    startTime,
    endTime,
  }: {
    type: DiscountConditionType;
    sequence: number;
    dayOfWeek: number;
    startTime: Date;
    endTime: Date;
  }) {
    this.type = type;
    this.sequence = sequence;
    this.dayOfWeek = dayOfWeek;
    this.startTime = startTime;
    this.endTime = endTime;
  }

  public isSatisfiedBy(screening: Screening) {
    if (this.type === DiscountConditionType.PERIOD) {
      return this.isSatisfiedByPeriod(screening);
    }

    return this.isSatisfiedBySequence(screening);
  }

  private isSatisfiedByPeriod(screening: Screening) {
    return (
      this.dayOfWeek === screening.getWhenScreened().getDay() &&
      this.startTime <= screening.getWhenScreened() &&
      this.endTime >= screening.getWhenScreened()
    );
  }

  private isSatisfiedBySequence(screening: Screening) {
    return this.sequence === screening.getSequence();
  }
}

export default DiscountCondition;
