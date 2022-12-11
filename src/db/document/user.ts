import { Base } from '../mysql';

export class User extends Base {
  constructor() {
    super({
      schema: 'ms',
      collection: 'user',
    });
  }
}
