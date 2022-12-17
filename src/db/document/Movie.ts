import { Base } from '../mysql';

export class Movie extends Base {
  constructor() {
    super({
      schema: 'ms',
      collection: 'movie',
    });
  }
}
