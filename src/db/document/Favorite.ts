import { Base } from '../mysql';

export class Favorite extends Base {
  constructor() {
    super({
      schema: 'ms',
      collection: 'favorite',
    });
  }
}
