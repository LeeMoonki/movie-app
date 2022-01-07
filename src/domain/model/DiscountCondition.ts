import Screening from './Screening';

class DiscountCondition {
  public isSatisfiedBy(screening: Screening): boolean {
    return true;
  }
}

export default DiscountCondition;
