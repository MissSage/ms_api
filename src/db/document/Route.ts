import { Base } from '../mysql';

export class Route extends Base {
  constructor() {
    super({
      schema: 'ms',
      collection: 'route',
    });
  }
  // 这里写特有逻辑方法
}
