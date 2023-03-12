import { Base } from '../mysql';

export class Music extends Base {
  constructor() {
    super({
      schema: 'ms',
      collection: 'music',
    });
  }
  // 这里写特有逻辑方法
}
