import Customer from './Customer';
import Movie from './Movie';
import Reservation from './Reservation';

class Screening {
  private movie: Movie;
  private sequence: number;
  private whenScreened: Date;

  constructor({
    movie,
    sequence,
    whenScreened,
  }: {
    movie: Movie;
    sequence: number;
    whenScreened: Date;
  }) {
    this.movie = movie;
    this.sequence = sequence;
    this.whenScreened = whenScreened;
  }

  public reserve(customer: Customer, audienceCount: number) {
    return new Reservation();
  }

  private calculateFee(audienceCount: number) {
    return this.movie.calculateMovieFee(this).times(audienceCount);
  }

  public getSequence() {
    return this.sequence;
  }

  public getWhenScreened() {
    return this.whenScreened;
  }
}

export default Screening;
