import { Base } from '../mysql';

export class User extends Base {
  constructor() {
    super({
      schema: 'ms',
      collection: 'user',
    });
  }
  // 这里写特有逻辑方法
}
