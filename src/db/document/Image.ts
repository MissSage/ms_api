import { Base } from '../mysql';

export class Image extends Base {
  constructor() {
    super({
      schema: 'ms',
      collection: 'image',
    });
  }
  // 这里写特有逻辑方法
}
