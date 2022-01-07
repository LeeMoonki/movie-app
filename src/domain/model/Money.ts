class Money {
  static ZERO = Money.wons(0);

  private _amount: number;

  static wons(amount: number) {
    return new Money(amount);
  }

  constructor(amount: number) {
    this._amount = amount;
  }

  public plus(amount: Money) {
    return new Money(this._amount + amount._amount);
  }

  public minus(amount: Money) {
    return new Money(this._amount - amount._amount);
  }

  public equal(amount: Money) {
    return this._amount === amount._amount;
  }

  public times(multiplier: number) {
    return new Money(this._amount * multiplier);
  }

  private _parseAmountToCurrencyFormat(
    number: number | string | null | undefined,
    maxLength?: number
  ) {
    const onlyNumber = `${number}`
      .replace(/[^\d]/g, '')
      .replace(/^0{2,}(\d*)/, '0$1')
      .replace(/^0+([1-9]+)/, '$1');

    return (
      maxLength === undefined ? onlyNumber : onlyNumber.slice(0, Math.max(0, maxLength))
    ).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  public format() {
    return this._parseAmountToCurrencyFormat(this._amount);
  }
}

export default Money;
