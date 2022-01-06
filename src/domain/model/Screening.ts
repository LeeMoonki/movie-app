import Customer from './Customer';
import Money from './Money';
import Movie from './Movie';
import Reservation from './Reservation';

class Screening {
  private movie: Movie;
  private sequence: number;
  private whenScreened: Date;

  public reserve(customer: Customer, audienceCount: number): Reservation {
    return new Reservation();
  }

  private calculateFee(audienceCount: number): Money {
    return new Movie().calculateMovieFee(this);
  }
}

export default Screening;
