import { Base } from '../../utils/mysql';

export class Movie extends Base {
  constructor() {
    super({
      schema: 'ms',
      collection: 'movie',
    });
  }
}
