import Customer from './Customer';
import Money from './Money';
import Movie from './Movie';
import Reservation from './Reservation';

class Screening {
  private movie: Movie;
  private sequence: number;
  private whenScreened: Date;

  constructor(movie: Movie, sequence: number, whenScreened: Date) {
    this.movie = movie;
    this.sequence = sequence;
    this.whenScreened = whenScreened;
  }

  public reserve(customer: Customer, audienceCount: number): Reservation {
    return new Reservation();
  }

  private calculateFee(audienceCount: number): Money {
    return this.movie.calculateMovieFee(this).times(audienceCount);
  }
}

export default Screening;
