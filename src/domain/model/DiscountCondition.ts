import { DiscountConditionType } from './DiscountConditionType';
import Screening from './Screening';

// 지금의 DiscountCondition은 변경에 취약한 클래스다.
// 변경에 취약하다는 것은 코드를 수정해야 하는 이유를 하나 이상 갖는 클래스다.

// DiscountCondition은 다음 세 가지 이유로 변경될 수 있다.
// 1. 새로운 할인 조건 추가
// isSatisfiedBy 메서드 안의 if ~ else 구문을 수정해야 한다. 또한 새로운 할인 조건이 추가되면 속성도 추가해야 한다.
// 2. 순번 조건을 판단하는 로직 변경
// isSatisfiedBySequence 메서드의 내부 구현을 수정해야 한다.
// 또한 순번 조건을 판단하는 데 필요한 데이터가 변경된다면 DiscountCondition의 sequence 속성 역시 변경해야 한다.
// 3. 기간 조건을 판단하는 로직 변경
// isSatisfiedByPeriod 메서드의 내부 구현을 수정해야 한다.
// 또한 기간 조건을 판단하는 데 필요한 데이터가 변경된다면 DiscountCondition의
// dayOfWeek, startTime, endTime 속성 역시 변경해야 한다.

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
