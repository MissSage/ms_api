import { Base } from '../mysql';

export class RoleBtns extends Base {
  constructor() {
    super({
      schema: 'ms',
      collection: 'rolebtns',
    });
  }
  // 这里写特有逻辑方法
}
