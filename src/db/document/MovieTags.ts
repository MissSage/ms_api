import { Base } from '../../utils/mysql';

export class MovieTags extends Base {
  constructor() {
    super({
      schema: 'ms',
      collection: 'movietags',
    });
  }
}
