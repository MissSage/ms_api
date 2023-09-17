import { Base } from '../mysql';

export class Role extends Base {
  constructor() {
    super({
      schema: 'ms',
      collection: 'role',
    });
  }
  // 这里写特有逻辑方法
}
