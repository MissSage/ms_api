import { Base } from '../mysql';

export class Source extends Base {
  constructor() {
    super({
      schema: 'ms',
      collection: 'source',
    });
  }
  // 这里写特有逻辑方法
}
