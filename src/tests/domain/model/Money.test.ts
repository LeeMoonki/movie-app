import Money from '../../../domain/model/Money';

describe('Money', () => {
  const m1 = new Money(1);
  const m2 = new Money(2);
  const m3 = new Money(3);

  it('equal은 두 Money의 동등비교를 합니다.', () => {
    expect(m1.equal(m2)).toBe(false);
    expect(m1.equal(m1)).toBe(true);
  });

  it('plus는 amount를 더한 값을 반환합니다.', () => {
    const isSame = m1.plus(m2).equal(new Money(3));
    expect(isSame).toBe(true);
  });

  it('minus는 기존 Money에서 전달받은 Money를 뺀 값을 반환합니다.', () => {
    const isSame = m2.minus(m1).equal(new Money(1));
    expect(isSame).toBe(true);
  });

  it.each([
    { number: 0, currency: '0' },
    { number: 123, currency: '123' },
    { number: 1234, currency: '1,234' },
    { number: 1234567, currency: '1,234,567' },
  ])('format은 amount를 통화형태로 반환합니다. %o', ({ number, currency }) => {
    expect(new Money(number).format()).toBe(currency);
  });
});
