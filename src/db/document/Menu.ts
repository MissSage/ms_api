import { Base } from '../mysql';

export class Menu extends Base {
  constructor() {
    super({
      schema: 'ms',
      collection: 'menu',
    });
  }
  // 这里写特有逻辑方法
}
