import { Base } from '../mysql';

export class RoleMenus extends Base {
  constructor() {
    super({
      schema: 'ms',
      collection: 'rolemenus',
    });
  }
  // 这里写特有逻辑方法
}
