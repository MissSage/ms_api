import { Base } from '../mysql';

export class MovieFavorite extends Base {
  constructor() {
    super({
      schema: 'ms',
      collection: 'moviefavorite',
    });
  }
}
