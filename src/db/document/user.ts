import { Base } from '../../utils/mysql';

export class User extends Base {
  constructor() {
    super({
      schema: 'ms',
      collection: 'user',
    });
  }
  testProp: () =>string
}
